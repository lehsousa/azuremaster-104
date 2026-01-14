import { useState, useEffect } from 'react';
import { signInAnonymously, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import { Trophy, BookOpen, Target, Award, ChevronRight, Check, X, Info, LogOut, User, Menu, Home, Link2, TrendingUp, AlertTriangle } from 'lucide-react';
import { QUESTION_BANK as ORIGINAL_QUESTION_BANK, shuffleArray, shuffleQuestionOptions } from './questions';
import LoginScreen from './LoginScreen';
import LearningTrail from './LearningTrail';
import QuickLinks from './QuickLinks';
import ProgressStats from './ProgressStats';

const MODULES = [
  { id: 'modulo1', name: 'Pré-requisitos', icon: BookOpen, color: 'blue' },
  { id: 'modulo2', name: 'Identidades e Governança', icon: Award, color: 'purple' },
  { id: 'modulo3', name: 'Armazenamento', icon: Target, color: 'green' },
  { id: 'modulo4', name: 'Redes Virtuais', icon: Trophy, color: 'orange' },
  { id: 'modulo5', name: 'Computação Azure', icon:  ChevronRight, color: 'cyan' },
  { id: 'modulo6', name: 'Monitoramento e Backup', icon: Info, color: 'red' }
];

const LEVELS = [
  { name: 'Novato Cloud', xpRequired: 0 },
  { name: 'Iniciante Azure', xpRequired: 100 },
  { name: 'Administrador Junior', xpRequired: 300 },
  { name: 'Administrador Pleno', xpRequired: 600 },
  { name: 'Administrador Sênior', xpRequired: 1000 },
  { name: 'Especialista AZ-104', xpRequired: 1500 },
];

function App() {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState({ xp: 0, level: 0, history: [] });
  const [screen, setScreen] = useState('dashboard');
  const [selectedModule, setSelectedModule] = useState(null);
  const [studyMode, setStudyMode] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState('dashboard'); // 'dashboard', 'trail', 'quiz'
  const [showResetModal, setShowResetModal] = useState(false);
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [isOfficialExam, setIsOfficialExam] = useState(false);
  const [examTimer, setExamTimer] = useState(7200); // 120 minutos em segundos
  const [examStartTime, setExamStartTime] = useState(null);
  const [showExitQuizModal, setShowExitQuizModal] = useState(false);
  const [selectedModuleForTrail, setSelectedModuleForTrail] = useState(null);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsAuthenticated(true);
        await loadUserProfile(currentUser.uid);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Timer para simulado oficial
  useEffect(() => {
    if (!isOfficialExam || screen !== 'quiz') return;

    const interval = setInterval(() => {
      setExamTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          finishQuiz(); // Tempo esgotado, finalizar automaticamente
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOfficialExam, screen]);

  const handleLoginWithEmail = async (email, password, displayName = null) => {
    setAuthLoading(true);
    setAuthError(null);
    
    try {
      let userCredential;
      
      if (displayName) {
        // Cadastro
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName });
      } else {
        // Login
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      }
      
      setUser(userCredential.user);
      setIsAuthenticated(true);
      await loadUserProfile(userCredential.user.uid);
    } catch (error) {
      console.error('Erro na autenticação:', error);
      
      // Mensagens de erro amigáveis
      let errorMessage = 'Erro ao autenticar. Tente novamente.';
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Este email já está em uso. Tente fazer login.';
          break;
        case 'auth/weak-password':
          errorMessage = 'Senha muito fraca. Use pelo menos 6 caracteres.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Email inválido. Verifique e tente novamente.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'Usuário não encontrado. Verifique o email.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Senha incorreta. Tente novamente.';
          break;
        case 'auth/invalid-credential':
          errorMessage = 'Credenciais inválidas. Verifique email e senha.';
          break;
        default:
          errorMessage = error.message;
      }
      
      setAuthError(errorMessage);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    setAuthLoading(true);
    setAuthError(null);
    
    try {
      const userCredential = await signInAnonymously(auth);
      setUser(userCredential.user);
      setIsAuthenticated(true);
      await loadUserProfile(userCredential.user.uid);
    } catch (error) {
      console.error('Erro no login de visitante:', error);
      setAuthError('Erro ao entrar como visitante. Tente novamente.');
    } finally {
      setAuthLoading(false);
    }
  };

  // Fechar modais com tecla ESC
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setShowExitQuizModal(false);
        setShowResetModal(false);
        setShowQuickLinks(false);
        setMobileMenuOpen(false);
        setShowPrivacyModal(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsAuthenticated(false);
      setUserProfile({ xp: 0, level: 0, history: [] });
      setScreen('dashboard');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };


  const handleBackToDashboard = () => {
    // Se estiver em um quiz/simulado, mostrar confirmação
    if (screen === 'quiz' && shuffledQuestions.length > 0) {
      setShowExitQuizModal(true);
      return;
    }
    
    // Se está na trilha de aprendizado, voltar para a lista de módulos
    if (selectedModuleForTrail !== null) {
      setSelectedModuleForTrail(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Se já está no dashboard na view principal, rolar para o topo
    if (screen === 'dashboard' && viewMode === 'dashboard') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Caso contrário, voltar ao dashboard
    confirmBackToDashboard();
  };

  const confirmBackToDashboard = () => {
    setScreen('dashboard');
    setViewMode('dashboard');
    setMobileMenuOpen(false);
    setSelectedModule(null);
    setStudyMode(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizAnswers([]);
    setResults(null);
    setShuffledQuestions([]);
    setIsOfficialExam(false);
    setShowExitQuizModal(false);
    
    // Rolar para o topo ao voltar ao dashboard
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetProgress = async () => {
    if (!user) return;
    
    try {
      // Resetar perfil no Firestore
      const userRef = doc(db, 'users', user.uid);
      const resetProfile = {
        xp: 0,
        level: 0,
        history: [],
        lastReset: new Date().toISOString()
      };
      
      await setDoc(userRef, resetProfile);
      
      // Atualizar estado local
      setUserProfile(resetProfile);
      setScreen('dashboard');
      setShowResetModal(false);
      setMobileMenuOpen(false);
      
      // Feedback visual (opcional)
      console.log('Progresso resetado com sucesso!');
    } catch (error) {
      console.error('Erro ao resetar progresso:', error);
    }
  };

  const loadUserProfile = async (uid) => {
    const docRef = doc(db, 'users', uid, 'data', 'profile');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUserProfile(docSnap.data());
    } else {
      await setDoc(docRef, { xp: 0, level: 0, history: [] });
    }
  };

  const saveUserProfile = async (newProfile) => {
    if (user) {
      const docRef = doc(db, 'users', user.uid, 'data', 'profile');
      await setDoc(docRef, newProfile);
      setUserProfile(newProfile);
    }
  };

  const calculateLevel = (xp) => {
    for (let i = LEVELS.length - 1; i >= 0; i--) {
      if (xp >= LEVELS[i].xpRequired) return i;
    }
    return 0;
  };

  const startQuiz = (module, mode) => {
    setSelectedModule(module);
    setStudyMode(mode);
    setIsOfficialExam(false);
    
    // Embaralha as questões do módulo
    const moduleQuestions = ORIGINAL_QUESTION_BANK[module];
    const shuffled = shuffleArray(moduleQuestions);
    
    // Embaralha as opções de cada questão
    const questionsWithShuffledOptions = shuffled.map(q => shuffleQuestionOptions(q));
    
    setShuffledQuestions(questionsWithShuffledOptions);
    setCurrentQuestionIndex(0);
    setQuizAnswers([]);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setViewMode('quiz');
    setScreen('quiz');
    setMobileMenuOpen(false);
  };

  const startOfficialExam = () => {
    // Coletar todas as questões de todos os módulos
    const allQuestions = [];
    Object.keys(ORIGINAL_QUESTION_BANK).forEach(moduleKey => {
      ORIGINAL_QUESTION_BANK[moduleKey].forEach(q => {
        allQuestions.push({ ...q, module: moduleKey });
      });
    });

    // Embaralhar e selecionar 60 questões (ou todas se tiver menos)
    const shuffled = shuffleArray(allQuestions);
    const selected = shuffled.slice(0, Math.min(60, shuffled.length));
    
    // Embaralhar opções de cada questão
    const questionsWithShuffledOptions = selected.map(q => shuffleQuestionOptions(q));
    
    setIsOfficialExam(true);
    setSelectedModule('oficial');
    setStudyMode('exam');
    setShuffledQuestions(questionsWithShuffledOptions);
    setCurrentQuestionIndex(0);
    setQuizAnswers([]);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setExamTimer(7200); // Reset timer para 120 minutos
    setExamStartTime(Date.now());
    setViewMode('quiz');
    setScreen('quiz');
    setMobileMenuOpen(false);
  };

  const startRetryQuiz = (wrongQuestions) => {
    // Limpar propriedades extras (userAnswer, originalIndex) e manter apenas a estrutura original da questão
    const cleanQuestions = wrongQuestions.map(q => {
      const { userAnswer, originalIndex, ...cleanQuestion } = q;
      return cleanQuestion;
    });
    
    // Embaralhar opções de cada questão errada
    const questionsWithShuffledOptions = cleanQuestions.map(q => shuffleQuestionOptions(q));
    
    setIsOfficialExam(false);
    setSelectedModule('revisao');
    setStudyMode('study'); // Modo estudo para ver explicações
    setShuffledQuestions(questionsWithShuffledOptions);
    setCurrentQuestionIndex(0);
    setQuizAnswers([]);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setViewMode('quiz');
    setScreen('quiz');
  };

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    if (studyMode === 'study') {
      setShowExplanation(true);
    }
    
    setQuizAnswers([...quizAnswers, { questionId: currentQuestion.id, answer: answerIndex, isCorrect }]);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const correctAnswers = quizAnswers.filter(a => a.isCorrect).length;
    const totalQuestions = quizAnswers.length;
    const score = (correctAnswers / totalQuestions) * 100;
    const xpGained = correctAnswers * 10;
    const newXp = userProfile.xp + xpGained;
    const newLevel = calculateLevel(newXp);
    
    const newProfile = {
      xp: newXp,
      level: newLevel,
      history: [...userProfile.history, { 
        date: new Date().toISOString(), 
        module: selectedModule, 
        score, 
        xpGained,
        correctAnswers,
        totalQuestions 
      }]
    };
    
    saveUserProfile(newProfile);
    setResults({ score, correctAnswers, totalQuestions, xpGained, passed: score >= 70 });
    setScreen('results');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-slate-600">Carregando...</p>
        </div>
      </div>
    );
  }

  // Mostrar tela de login se não estiver autenticado
  if (!isAuthenticated) {
    return (
      <LoginScreen 
        onLogin={handleLoginWithEmail}
        onGuestLogin={handleGuestLogin}
        loading={authLoading}
        error={authError}
      />
    );
  }

  const currentLevel = LEVELS[userProfile.level];
  const nextLevel = LEVELS[userProfile.level + 1];
  const progressPercentage = nextLevel 
    ? ((userProfile.xp - currentLevel.xpRequired) / (nextLevel.xpRequired - currentLevel.xpRequired)) * 100 
    : 100;

  return (
    <div className="min-h-screen pb-8">
      {/* Header Responsivo */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo e Título - Botão Home */}
            <button 
              onClick={handleBackToDashboard}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
              title="Voltar ao início"
            >
              <Trophy className="w-8 h-8 md:w-10 md:h-10 text-primary-600" />
              <div className="text-left">
                <h1 className="text-lg md:text-2xl font-bold text-slate-800">AzureMaster 104</h1>
                <p className="text-xs md:text-sm text-slate-600 hidden sm:block">Preparação AZ-104</p>
              </div>
            </button>

            {/* Desktop - XP e Usuário */}
            <div className="hidden md:flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-700">{currentLevel.name}</p>
                <div className="w-48 h-2 bg-slate-200 rounded-full mt-1">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">{userProfile.xp} XP</p>
              </div>
              
              {/* Botão Links Úteis */}
              <button
                onClick={() => setShowQuickLinks(true)}
                className="p-2 hover:bg-blue-50 rounded-lg transition-colors group"
                title="Links Úteis"
              >
                <Link2 className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
              </button>

              {/* Botão Evolução */}
              <button
                onClick={() => setViewMode(viewMode === 'stats' ? 'dashboard' : 'stats')}
                className={`p-2 rounded-lg transition-colors group ${
                  viewMode === 'stats' ? 'bg-blue-100' : 'hover:bg-blue-50'
                }`}
                title="Evolução"
              >
                <TrendingUp className={`w-5 h-5 ${
                  viewMode === 'stats' ? 'text-blue-700' : 'text-blue-600 group-hover:text-blue-700'
                }`} />
              </button>

              {/* Botão Resetar Progresso */}
              <button
                onClick={() => setShowResetModal(true)}
                className="p-2 hover:bg-orange-50 rounded-lg transition-colors group"
                title="Resetar Progresso"
              >
                <Award className="w-5 h-5 text-orange-600 group-hover:text-orange-700" />
              </button>
              
              <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-800">
                    {user?.displayName || (user?.isAnonymous ? 'Visitante' : user?.email?.split('@')[0])}
                  </p>
                  <p className="text-xs text-slate-500">
                    {user?.isAnonymous ? 'Modo Visitante' : user?.email}
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors group"
                  title="Sair"
                >
                  <LogOut className="w-5 h-5 text-slate-600 group-hover:text-red-600 transition-colors" />
                </button>
              </div>
            </div>

            {/* Mobile - Menu Hambúrguer */}
            <div className="flex md:hidden items-center gap-3">
              <div className="text-right">
                <p className="text-xs font-semibold text-slate-700">{userProfile.xp} XP</p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <Menu className="w-6 h-6 text-slate-600" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-slate-200">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">{currentLevel.name}</span>
                  <span className="text-sm text-slate-500">{userProfile.xp} XP</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="pt-3 space-y-2">
                  <button
                    onClick={() => {
                      setViewMode('dashboard');
                      setScreen('dashboard');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-2"
                  >
                    <Home className="w-5 h-5 text-slate-600" />
                    <span className="text-slate-700">Dashboard</span>
                  </button>
                  <button
                    onClick={() => {
                      setViewMode('stats');
                      setScreen('dashboard');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
                  >
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-700">Evolução</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowQuickLinks(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 text-blue-600"
                  >
                    <Link2 className="w-5 h-5" />
                    <span>Links Úteis</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowResetModal(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors flex items-center gap-2 text-orange-600"
                  >
                    <Award className="w-5 h-5" />
                    <span>Resetar Progresso</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-2 text-red-600"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Sair ({user?.displayName || 'Visitante'})</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Modal de Confirmação - Resetar Progresso */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 animate-fadeIn">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">Resetar Progresso?</h3>
                <p className="text-sm text-slate-600">Esta ação não pode ser desfeita</p>
              </div>
            </div>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded mb-6">
              <p className="text-sm text-slate-700">
                Você perderá:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-orange-600" />
                  <span><strong>{userProfile.xp} XP</strong> acumulado</span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-orange-600" />
                  <span>Nível atual: <strong>{currentLevel.name}</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-orange-600" />
                  <span><strong>{userProfile.history?.length || 0}</strong> quizzes no histórico</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowResetModal(false)}
                className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium text-slate-700"
              >
                Cancelar
              </button>
              <button
                onClick={handleResetProgress}
                className="flex-1 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors font-medium"
              >
                Sim, Resetar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Confirmação - Sair do Quiz */}
      {showExitQuizModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 animate-fadeIn">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  {isOfficialExam ? 'Encerrar Simulado?' : 'Sair do Quiz?'}
                </h3>
                <p className="text-sm text-slate-600">
                  {isOfficialExam ? 'O simulado será encerrado' : 'Seu progresso será perdido'}
                </p>
              </div>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-6">
              <p className="text-sm text-slate-700 mb-2">
                <strong>Atenção!</strong> Ao confirmar:
              </p>
              <ul className="space-y-1 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-600" />
                  <span>
                    {quizAnswers.length > 0 
                      ? `${quizAnswers.length} ${quizAnswers.length === 1 ? 'resposta será perdida' : 'respostas serão perdidas'}`
                      : 'O progresso atual será perdido'
                    }
                  </span>
                </li>
                {isOfficialExam && (
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-600" />
                    <span>O tempo do simulado será resetado</span>
                  </li>
                )}
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-600" />
                  <span>Você voltará ao dashboard inicial</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowExitQuizModal(false)}
                className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium text-slate-700"
              >
                Continuar {isOfficialExam ? 'Simulado' : 'Quiz'}
              </button>
              <button
                onClick={confirmBackToDashboard}
                className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
              >
                Sim, Sair
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Links Úteis */}
      {showQuickLinks && (
        <QuickLinks onClose={() => setShowQuickLinks(false)} />
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        {screen === 'dashboard' && viewMode === 'dashboard' && (
          <Dashboard 
            modules={MODULES} 
            onStartQuiz={startQuiz} 
            onStartOfficialExam={startOfficialExam}
            userProfile={userProfile}
            selectedModuleForTrail={selectedModuleForTrail}
            onSelectModuleForTrail={setSelectedModuleForTrail}
          />
        )}
        
        {screen === 'dashboard' && viewMode === 'stats' && (
          <ProgressStats 
            userProfile={userProfile}
            modules={MODULES}
          />
        )}
        
        {screen === 'quiz' && shuffledQuestions.length > 0 && (
          <Quiz
            question={shuffledQuestions[currentQuestionIndex]}
            selectedAnswer={selectedAnswer}
            showExplanation={showExplanation}
            studyMode={studyMode}
            onAnswer={handleAnswer}
            onNext={nextQuestion}
            onShowExplanation={() => setShowExplanation(true)}
            currentIndex={currentQuestionIndex}
            total={shuffledQuestions.length}
            isOfficialExam={isOfficialExam}
            examTimer={examTimer}
          />
        )}
        
        {screen === 'results' && (
          <Results 
            results={results} 
            onBack={() => {
              setScreen('dashboard');
              setViewMode('dashboard');
            }} 
            questions={shuffledQuestions}
            userAnswers={quizAnswers}
            isOfficialExam={isOfficialExam}
            onRetryWrongAnswers={startRetryQuiz}
          />
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-primary-400" />
              <div>
                <p className="font-bold text-lg">AzureMaster 104</p>
                <p className="text-sm text-slate-400">Preparação para Certificação AZ-104</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-slate-300">
                © {new Date().getFullYear()} • Desenvolvido por <a href="https://senitte.com.br" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-400 hover:text-primary-300 transition-colors">Senitte</a>
              </p>
              <div className="flex flex-col md:flex-row items-center justify-end gap-4 mt-2">
                <p className="text-xs text-slate-500">
                  Todos os direitos reservados
                </p>
                <button 
                  onClick={() => setShowPrivacyModal(true)}
                  className="text-xs text-slate-500 hover:text-primary-400 transition-colors underline"
                >
                  Política de Privacidade
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal de Política de Privacidade */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 animate-fadeIn max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h3 className="text-2xl font-bold text-slate-800">Política de Privacidade</h3>
              <button 
                onClick={() => setShowPrivacyModal(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-500" />
              </button>
            </div>
            
            <div className="space-y-4 text-slate-600">
              <p className="text-sm italic mb-4">Última atualização: {new Date().toLocaleDateString()}</p>
              
              <h4 className="font-bold text-slate-800 text-lg">1. Introdução</h4>
              <p>
                A sua privacidade é importante para nós. Esta política explica como o AzureMaster 104 ("nós", "nosso") coleta, usa e protege suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Brasil) e o Regulamento Geral sobre a Proteção de Dados (GDPR - Europa).
              </p>

              <h4 className="font-bold text-slate-800 text-lg">2. Coleta de Dados</h4>
              <p>
                Coletamos apenas os dados estritamente necessários para o funcionamento da autenticação e personalização da sua experiência de estudo:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Informações de Login:</strong> Email e identificador único de usuário (fornecidos via Google Auth ou Email/Senha).</li>
                <li><strong>Dados de Progresso:</strong> Pontuação nos quizzes/simulados, nível de XP e histórico de estudos para gamificação.</li>
              </ul>
              <p className="font-semibold mt-2 text-orange-600">
                NÃO coletamos dados sensíveis, financeiros, ou de localização precisa.
              </p>

              <h4 className="font-bold text-slate-800 text-lg">3. Base Legal e Uso dos Dados</h4>
              <p>
                O tratamento dos seus dados é realizado com base no <strong>Execução de Contrato</strong> (para prover o serviço de quizzes) e <strong>Legítimo Interesse</strong> (para manter seu histórico de progresso). Seus dados são utilizados exclusivamente para:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Permitir seu acesso à plataforma.</li>
                <li>Salvar seu progresso e conquistas.</li>
              </ul>
              <p>
                <strong>Seus dados NÃO são vendidos, compartilhados ou utilizados para fins publicitários de terceiros.</strong>
              </p>

              <h4 className="font-bold text-slate-800 text-lg">4. Armazenamento Seguro</h4>
              <p>
                Utilizamos o <strong>Google Firebase</strong> para autenticação e banco de dados, que adota padrões de segurança de nível industrial. Seus dados podem ser processados em servidores globais do Google, que garantem conformidade com mecanismos de transferência internacional de dados.
              </p>

              <h4 className="font-bold text-slate-800 text-lg">5. Seus Direitos</h4>
              <p>
                Você tem o direito de solicitar:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Acesso aos dados que temos sobre você.</li>
                <li>Correção de dados incompletos ou inexatos.</li>
                <li>Exclusão da sua conta e de todos os dados associados.</li>
              </ul>
              
              <div className="mt-8 pt-6 border-t flex justify-end">
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="px-6 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg transition-colors font-medium"
                >
                  Entendi e Concordo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Dashboard({ modules, onStartQuiz, onStartOfficialExam, selectedModuleForTrail, onSelectModuleForTrail }) {

  if (selectedModuleForTrail) {
    return (
      <div>
        <button
          onClick={() => onSelectModuleForTrail(null)}
          className="mb-6 flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
          Voltar para Módulos
        </button>
        <LearningTrail 
          moduleId={selectedModuleForTrail} 
          onStartQuiz={(mode) => onStartQuiz(selectedModuleForTrail, mode)}
        />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">
          Escolha seu Módulo de Estudo
        </h2>
        <p className="text-lg text-slate-600">
          Prepare-se para a certificação AZ-104 com nosso sistema completo de aprendizado
        </p>
      </div>

      {/* Card Destaque - Simulado Oficial */}
      <div className="card bg-gradient-to-br from-orange-600 to-orange-700 text-white hover:shadow-2xl transition-all cursor-pointer border-4 border-orange-500"
           onClick={onStartOfficialExam}
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Target className="w-12 h-12 text-white" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <Trophy className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Simulado Oficial AZ-104</h3>
            </div>
            <p className="text-orange-100 mb-4">
              60 questões misturadas • 120 minutos • Experiência real de prova
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                Todos os Módulos
              </span>
              <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                Timer Oficial
              </span>
              <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                Sem Respostas
              </span>
            </div>
          </div>
          <div className="text-center md:text-right">
            <button className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-bold text-lg shadow-lg">
              Iniciar Simulado →
            </button>
          </div>
        </div>
      </div>

      {/* Grid de Módulos */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <div key={module.id} className="card group hover:shadow-xl transition-all">
              <div className={`w-16 h-16 bg-${module.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-8 h-8 text-${module.color}-600`} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{module.name}</h3>
              <p className="text-sm text-slate-600 mb-4">{ORIGINAL_QUESTION_BANK[module.id].length} questões disponíveis</p>
              
              <div className="space-y-2">
                {/* Botão Trilha de Aprendizado */}
                <button
                  onClick={() => onSelectModuleForTrail(module.id)}
                  className="w-full btn-outline flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-5 h-5" />
                  Ver Trilha de Aprendizado
                </button>
                
                {/* Botões de Quiz */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onStartQuiz(module.id, 'study')}
                    className="btn-primary text-sm py-2"
                  >
                    Modo Estudo
                  </button>
                  <button
                    onClick={() => onStartQuiz(module.id, 'exam')}
                    className="btn-outline text-sm py-2"
                  >
                    Simulado
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Quiz({ question, selectedAnswer, showExplanation, studyMode, onAnswer, onNext, onShowExplanation, currentIndex, total, isOfficialExam, examTimer }) {
  const isAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === question.correctAnswer;

  // Formatar timer em HH:MM:SS
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Timer do Simulado Oficial */}
      {isOfficialExam && (
        <div className="card bg-gradient-to-r from-orange-600 to-orange-700 text-white mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Target className="w-6 h-6" />
              <div>
                <h4 className="font-bold">Simulado Oficial AZ-104</h4>
                <p className="text-sm text-orange-100">Modo Prova - Sem Respostas</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-orange-100">Tempo Restante</p>
              <p className={`text-3xl font-bold font-mono ${examTimer < 600 ? 'text-yellow-300 animate-pulse' : ''}`}>
                {formatTime(examTimer)}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-semibold text-primary-600">
            Questão {currentIndex + 1} de {total}
          </span>
          <span className="text-sm text-slate-600">{question.module}</span>
        </div>

        <h3 className="text-2xl font-semibold text-slate-800 mb-6">{question.question}</h3>

        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => {
            const selected = selectedAnswer === index;
            const correct = index === question.correctAnswer;
            
            // No modo exam, não mostrar feedback visual
            let bgColor = 'bg-slate-50 hover:bg-slate-100';
            if (studyMode === 'study' && isAnswered) {
              if (selected && correct) bgColor = 'bg-green-100 border-green-500';
              else if (selected && !correct) bgColor = 'bg-red-100 border-red-500';
              else if (correct) bgColor = 'bg-green-50 border-green-300';
            } else if (studyMode === 'exam' && selected) {
              // No modo exam, apenas destaca a seleção sem cor de certo/errado
              bgColor = 'bg-primary-50 border-primary-300';
            }

            return (
              <button
                key={index}
                onClick={() => !isAnswered && onAnswer(index)}
                disabled={isAnswered}
                className={`w-full p-4 rounded-lg border-2 border-transparent text-left transition-all ${bgColor} ${!isAnswered && 'cursor-pointer'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selected ? 'bg-white' : 'bg-white border-2 border-slate-300'}`}>
                    {/* Ícones apenas no modo study */}
                    {studyMode === 'study' && isAnswered && correct && <Check className="w-5 h-5 text-green-600" />}
                    {studyMode === 'study' && isAnswered && index === selectedAnswer && !correct && <X className="w-5 h-5 text-red-600" />}
                    {!isAnswered && <span className="text-slate-600 font-semibold">{String.fromCharCode(65 + index)}</span>}
                  </div>
                  <span className="text-slate-700 font-medium">{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Explicação - apenas no modo study */}
        {studyMode === 'study' && isAnswered && showExplanation && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-blue-900 mb-1">Explicação</p>
                <p className="text-blue-800 text-sm">{question.explanation}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-3">
          {/* Botão Ver Explicação - apenas no modo study */}
          {studyMode === 'study' && isAnswered && !showExplanation && (
            <button onClick={onShowExplanation} className="btn-secondary flex items-center gap-2">
              <Info className="w-5 h-5" />
              Ver Explicação
            </button>
          )}
          
          {/* Botão Próxima */}
          {isAnswered && (studyMode === 'study' ? showExplanation : true) && (
            <button onClick={onNext} className="btn-primary flex items-center gap-2 ml-auto">
              Próxima
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Results({ results, onBack, questions, userAnswers, isOfficialExam, onRetryWrongAnswers }) {
  // Filtrar questões erradas E armazenar índice original e resposta do usuário
  const wrongQuestions = questions
    ?.map((q, index) => ({
      ...q,
      originalIndex: index,
      userAnswer: userAnswers[index]?.answer // Extrair o índice da resposta do objeto
    }))
    .filter(q => q.userAnswer !== q.correctAnswer) || [];
  

  
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Card de Resultados Principal */}
      <div className="card text-center">
        <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${results.passed ? 'bg-green-100' : 'bg-red-100'}`}>
          {results.passed ? (
            <Trophy className="w-12 h-12 text-green-600" />
          ) : (
            <X className="w-12 h-12 text-red-600" />
          )}
        </div>

        <h2 className={`text-3xl font-bold mb-2 ${results.passed ? 'text-green-700' : 'text-red-700'}`}>
          {results.passed ? 'Aprovado!' : 'Não Aprovado'}
        </h2>
        <p className="text-slate-600 mb-8">
          {results.passed ? 'Parabéns! Você atingiu a nota mínima.' : 'Continue estudando! Você pode tentar novamente.'}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-primary-600">{results.score.toFixed(0)}%</p>
            <p className="text-sm text-slate-600">Pontuação</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-green-600">{results.correctAnswers}/{results.totalQuestions}</p>
            <p className="text-sm text-slate-600">Acertos</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-blue-600">+{results.xpGained}</p>
            <p className="text-sm text-slate-600">XP Ganho</p>
          </div>
        </div>

        <div className="flex gap-3 justify-center">
          <button onClick={onBack} className="btn-primary">
            Voltar ao Dashboard
          </button>
          {wrongQuestions.length > 0 && onRetryWrongAnswers && (
            <button 
              onClick={() => onRetryWrongAnswers(wrongQuestions)} 
              className="btn-outline flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Revisar Erros ({wrongQuestions.length})
            </button>
          )}
        </div>
      </div>

      {/* Lista de Questões Erradas - apenas para simulado oficial */}
      {isOfficialExam && wrongQuestions.length > 0 && (
        <div className="card">
          <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-orange-600" />
            Questões que Você Errou
          </h3>
          <p className="text-slate-600 mb-6">
            Revise as questões abaixo para reforçar seu aprendizado:
          </p>

          <div className="space-y-6">
            {wrongQuestions.map((question, idx) => {
              return (
                <div key={idx} className="border-2 border-red-200 rounded-lg p-4 bg-red-50">
                  <div className="flex items-start gap-2 mb-3">
                    <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-slate-800 mb-2">{question.question}</p>
                      <div className="space-y-2 mb-3">
                        {question.userAnswer !== undefined && (
                          <div className="flex items-center gap-2 p-2 bg-red-100 rounded border-2 border-red-300">
                            <X className="w-4 h-4 text-red-600" />
                            <span className="text-sm text-red-800">
                              <strong>Sua resposta:</strong> {question.options[question.userAnswer]}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-2 p-2 bg-green-100 rounded border-2 border-green-300">
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-800">
                            <strong>Resposta correta:</strong> {question.options[question.correctAnswer]}
                          </span>
                        </div>
                      </div>
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r">
                        <p className="text-sm font-semibold text-blue-900 mb-1">Explicação:</p>
                        <p className="text-sm text-blue-800">{question.explanation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
