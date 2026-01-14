import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Award, Target, Clock, Calendar, BarChart3 } from 'lucide-react';

const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#06b6d4', '#ef4444'];

export default function ProgressStats({ userProfile, modules }) {
  // Calcular estatísticas
  const totalQuestions = userProfile.history?.reduce((sum, entry) => sum + (entry.totalQuestions || 0), 0) || 0;
  const totalCorrect = userProfile.history?.reduce((sum, entry) => sum + (entry.correctAnswers || 0), 0) || 0;
  const successRate = totalQuestions > 0 ? ((totalCorrect / totalQuestions) * 100).toFixed(1) : 0;
  const totalSimulations = userProfile.history?.length || 0;
  
  // Calcular streak (dias consecutivos)
  const calculateStreak = () => {
    if (!userProfile.history || userProfile.history.length === 0) return 0;
    
    const sortedDates = userProfile.history
      .map(h => new Date(h.date).toDateString())
      .sort((a, b) => new Date(b) - new Date(a));
    
    let streak = 1;
    const uniqueDates = [...new Set(sortedDates)];
    
    for (let i = 0; i < uniqueDates.length - 1; i++) {
      const current = new Date(uniqueDates[i]);
      const next = new Date(uniqueDates[i + 1]);
      const diffDays = Math.floor((current - next) / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        streak++;
      } else {
        break;
      }
    }
    
    return streak;
  };
  
  const streak = calculateStreak();
  
  // Dados para gráfico de XP ao longo do tempo
  const xpOverTime = userProfile.history?.map((entry, index) => ({
    name: `Sim ${index + 1}`,
    xp: userProfile.history.slice(0, index + 1).reduce((sum, e) => sum + (e.xpGained || 0), 0),
    date: new Date(entry.date).toLocaleDateString('pt-BR')
  })) || [];
  
  // Dados para gráfico de % acerto por módulo
  const moduleStats = modules.map(module => {
    const moduleHistory = userProfile.history?.filter(h => h.module === module.id) || [];
    const totalQ = moduleHistory.reduce((sum, h) => sum + (h.totalQuestions || 0), 0);
    const correctQ = moduleHistory.reduce((sum, h) => sum + (h.correctAnswers || 0), 0);
    const percentage = totalQ > 0 ? ((correctQ / totalQ) * 100) : 0;
    
    return {
      name: module.name.length > 15 ? module.name.substring(0, 15) + '...' : module.name,
      fullName: module.name,
      percentage: percentage,
      attempted: moduleHistory.length
    };
  });
  
  // Dados para gráfico de pizza (distribuição de simulados por módulo)
  const distributionData = modules.map(module => {
    const count = userProfile.history?.filter(h => h.module === module.id).length || 0;
    return {
      name: module.name,
      value: count
    };
  }).filter(d => d.value > 0);
  
  return (
    <div className="max-w-7xl mx-auto space-y-6 p-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Sua Evolução</h1>
        <p className="text-slate-600">Acompanhe seu progresso e estatísticas detalhadas</p>
      </div>
      
      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center">
            <Award className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-3xl font-bold text-blue-600">{userProfile.xp}</p>
          <p className="text-sm text-slate-600">XP Total</p>
        </div>
        
        <div className="card text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center">
            <Target className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-green-600">{successRate}%</p>
          <p className="text-sm text-slate-600">Taxa de Sucesso</p>
        </div>
        
        <div className="card text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-100 flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-orange-600" />
          </div>
          <p className="text-3xl font-bold text-orange-600">{totalSimulations}</p>
          <p className="text-sm text-slate-600">Simulados Realizados</p>
        </div>
        
        <div className="card text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-100 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-3xl font-bold text-purple-600">{streak}</p>
          <p className="text-sm text-slate-600">Dias Consecutivos</p>
        </div>
      </div>
      
      {/* Gráfico de XP ao Longo do Tempo */}
      {xpOverTime.length > 0 && (
        <div className="card">
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Evolução de XP
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={xpOverTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-3 border border-slate-200 rounded shadow-lg">
                        <p className="font-semibold text-slate-800">{payload[0].payload.date}</p>
                        <p className="text-blue-600">{payload[0].value} XP</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="xp" stroke="#3b82f6" strokeWidth={2} name="XP Acumulado" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de % Acerto por Módulo */}
        {moduleStats.some(m => m.attempted > 0) && (
          <div className="card">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600" />
              Taxa de Acerto por Módulo
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={moduleStats.filter(m => m.attempted > 0)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-3 border border-slate-200 rounded shadow-lg">
                          <p className="font-semibold text-slate-800">{payload[0].payload.fullName}</p>
                          <p className="text-green-600">{payload[0].value.toFixed(1)}% de acerto</p>
                          <p className="text-sm text-slate-600">{payload[0].payload.attempted} simulado(s)</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend />
                <Bar dataKey="percentage" fill="#10b981" name="% de Acerto" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
        
        {/* Gráfico de Pizza - Distribuição */}
        {distributionData.length > 0 && (
          <div className="card">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-purple-600" />
              Distribuição de Simulados
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      
      {/* Histórico de Simulados */}
      {userProfile.history && userProfile.history.length > 0 && (
        <div className="card">
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-orange-600" />
            Histórico de Simulados
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Data</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Módulo</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-slate-700">Pontuação</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-slate-700">Acertos</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-slate-700">XP Ganho</th>
                </tr>
              </thead>
              <tbody>
                {[...userProfile.history].reverse().map((entry, index) => {
                  const module = modules.find(m => m.module === entry.module);
                  const moduleName = module ? module.name : entry.module;
                  
                  return (
                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-4 text-sm text-slate-600">
                        {new Date(entry.date).toLocaleDateString('pt-BR', { 
                          day: '2-digit', 
                          month: '2-digit', 
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                      <td className="py-3 px-4 text-sm text-slate-800">{moduleName}</td>
                      <td className="py-3 px-4 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          entry.score >= 70 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {entry.score?.toFixed(0)}%
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center text-sm text-slate-600">
                        {entry.correctAnswers || 0}/{entry.totalQuestions || 0}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                          +{entry.xpGained || 0} XP
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {/* Mensagem vazia */}
      {(!userProfile.history || userProfile.history.length === 0) && (
        <div className="card text-center py-12">
          <Award className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-600 mb-2">Nenhum simulado realizado ainda</h3>
          <p className="text-slate-500">Comece seus estudos para ver suas estatísticas aqui!</p>
        </div>
      )}
    </div>
  );
}
