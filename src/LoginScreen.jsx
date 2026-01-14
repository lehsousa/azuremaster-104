import { useState } from 'react';
import { Mail, Lock, User, LogIn, UserPlus, KeyRound } from 'lucide-react';
import { sendPasswordResetEmail, auth } from './firebase';

export default function LoginScreen({ onLogin, onGuestLogin, loading, error }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    displayName: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetStatus, setResetStatus] = useState(null); // { type: 'success' | 'error', message: string }
  const [resetLoading, setResetLoading] = useState(false);

  const validateForm = () => {
    const errors = {};
    
    // Validação de email
    if (!formData.email) {
      errors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email inválido';
    }
    
    // Validação de senha
    if (!formData.password) {
      errors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 6) {
      errors.password = 'Senha deve ter pelo menos 6 caracteres';
    }
    
    // Validação de confirmação de senha (apenas no cadastro)
    if (isSignUp) {
      if (!formData.displayName) {
        errors.displayName = 'Nome é obrigatório';
      }
      
      if (!formData.confirmPassword) {
        errors.confirmPassword = 'Confirme sua senha';
      } else if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'As senhas não coincidem';
      }
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onLogin(formData.email, formData.password, isSignUp ? formData.displayName : null);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Limpa erro do campo ao digitar
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: null
      });
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    
    // Validar email
    if (!resetEmail) {
      setResetStatus({ type: 'error', message: 'Por favor, digite seu email' });
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(resetEmail)) {
      setResetStatus({ type: 'error', message: 'Email inválido' });
      return;
    }

    setResetLoading(true);
    setResetStatus(null);

    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetStatus({ 
        type: 'success', 
        message: 'Email de recuperação enviado! Verifique sua caixa de entrada.' 
      });
      // Limpar form e fechar modal após 3 segundos
      setTimeout(() => {
        setShowForgotPassword(false);
        setResetEmail('');
        setResetStatus(null);
      }, 3000);
    } catch (error) {
      console.error('Erro ao enviar email de recuperação:', error);
      let errorMessage = 'Erro ao enviar email. Tente novamente.';
      
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'Email não encontrado. Verifique o endereço digitado.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Email inválido.';
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = 'Muitas tentativas. Aguarde alguns minutos e tente novamente.';
      }
      
      setResetStatus({ type: 'error', message: errorMessage });
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4">
      <div className="w-full max-w-md">
        <div className="card">
          {/* Logo e Título */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">AzureMaster 104</h1>
            <p className="text-slate-600">
              {isSignUp ? 'Crie sua conta para começar' : 'Entre para continuar estudando'}
            </p>
          </div>

          {/* Mensagem de erro global */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r">
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nome (apenas no cadastro) */}
            {isSignUp && (
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:border-primary-500 transition-colors ${
                      formErrors.displayName ? 'border-red-500' : 'border-slate-200'
                    }`}
                    placeholder="João Silva"
                  />
                </div>
                {formErrors.displayName && (
                  <p className="text-red-600 text-sm mt-1">{formErrors.displayName}</p>
                )}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:border-primary-500 transition-colors ${
                    formErrors.email ? 'border-red-500' : 'border-slate-200'
                  }`}
                  placeholder="seu@email.com"
                />
              </div>
              {formErrors.email && (
                <p className="text-red-600 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>

            {/* Senha */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:border-primary-500 transition-colors ${
                    formErrors.password ? 'border-red-500' : 'border-slate-200'
                  }`}
                  placeholder="••••••"
                />
              </div>
              {formErrors.password && (
                <p className="text-red-600 text-sm mt-1">{formErrors.password}</p>
              )}
              {/* Link "Esqueceu a senha?" - apenas no login */}
              {!isSignUp && (
                <div className="text-right mt-2">
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    Esqueceu a senha?
                  </button>
                </div>
              )}
            </div>

            {/* Confirmar Senha (apenas no cadastro) */}
            {isSignUp && (
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Confirmar Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:border-primary-500 transition-colors ${
                      formErrors.confirmPassword ? 'border-red-500' : 'border-slate-200'
                    }`}
                    placeholder="••••••"
                  />
                </div>
                {formErrors.confirmPassword && (
                  <p className="text-red-600 text-sm mt-1">{formErrors.confirmPassword}</p>
                )}
              </div>
            )}

            {/* Botão de Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Processando...
                </>
              ) : (
                <>
                  {isSignUp ? <UserPlus className="w-5 h-5" /> : <LogIn className="w-5 h-5" />}
                  {isSignUp ? 'Criar Conta' : 'Entrar'}
                </>
              )}
            </button>
          </form>

          {/* Toggle entre Login e Cadastro */}
          <div className="mt-6 text-center">
            <p className="text-slate-600 text-sm">
              {isSignUp ? 'Já tem uma conta?' : 'Não tem uma conta?'}
              {' '}
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setFormErrors({});
                }}
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                {isSignUp ? 'Faça login' : 'Cadastre-se'}
              </button>
            </p>
          </div>

          {/* Divisor */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-slate-500">ou</span>
            </div>
          </div>

          {/* Botão Visitante */}
          <button
            onClick={onGuestLogin}
            disabled={loading}
            className="w-full btn-outline flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuar como Visitante
          </button>

          <p className="text-xs text-slate-500 text-center mt-4">
            Como visitante, seu progresso será salvo apenas neste dispositivo
          </p>
        </div>

        {/* Modal de Recuperação de Senha */}
        {showForgotPassword && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative">
              {/* Cabeçalho do Modal */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <KeyRound className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Recuperar Senha</h2>
                  <p className="text-sm text-slate-600">Digite seu email cadastrado</p>
                </div>
              </div>

              <p className="text-slate-600 text-sm mb-6">
                Você receberá um link para redefinir sua senha no email fornecido.
              </p>

              {/* Mensagem de Status */}
              {resetStatus && (
                <div className={`p-4 rounded-lg mb-4 ${
                  resetStatus.type === 'success' 
                    ? 'bg-green-50 border-l-4 border-green-500' 
                    : 'bg-red-50 border-l-4 border-red-500'
                }`}>
                  <p className={`text-sm ${
                    resetStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {resetStatus.message}
                  </p>
                </div>
              )}

              {/* Formulário */}
              <form onSubmit={handlePasswordReset} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="seu@email.com"
                      disabled={resetLoading}
                    />
                  </div>
                </div>

                {/* Botões */}
                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setShowForgotPassword(false);
                      setResetEmail('');
                      setResetStatus(null);
                    }}
                    disabled={resetLoading}
                    className="flex-1 px-4 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors disabled:opacity-50"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={resetLoading}
                    className="flex-1 btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {resetLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" />
                        Enviar Link
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
