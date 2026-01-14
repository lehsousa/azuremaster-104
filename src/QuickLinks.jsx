import { ExternalLink, BookOpen, Calendar, FileText, Users, Award } from 'lucide-react';

const MICROSOFT_LINKS = [
  {
    title: "Documentação AZ-104",
    url: "https://learn.microsoft.com/pt-br/certifications/exams/az-104",
    icon: Award,
    description: "Página oficial do exame"
  },
  {
    title: "Microsoft Learn - Curso Completo",
    url: "https://learn.microsoft.com/pt-br/training/courses/az-104t00",
    icon: BookOpen,
    description: "Trilha de aprendizado oficial"
  },
  {
    title: "Agendar Prova (Pearson VUE)",
    url: "https://home.pearsonvue.com/microsoft",
    icon: Calendar,
    description: "Marque sua certificação"
  },
  {
    title: "Skills Measured (PDF)",
    url: "https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4pCWy",
    icon: FileText,
    description: "Objetivos detalhados do exame"
  },
  {
    title: "Comunidade Microsoft Learn",
    url: "https://learn.microsoft.com/pt-br/answers/products/azure",
    icon: Users,
    description: "Tire dúvidas com a comunidade"
  }
];

export default function QuickLinks({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-1">🔗 Links Úteis</h3>
              <p className="text-blue-100 text-sm">Recursos oficiais Microsoft para o AZ-104</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-blue-800 rounded-lg transition-colors"
              aria-label="Fechar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Links List */}
        <div className="p-6 space-y-3">
          {MICROSOFT_LINKS.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border-2 border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {link.title}
                      </h4>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <p className="text-sm text-slate-600">{link.description}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 p-4 bg-slate-50 rounded-b-xl">
          <p className="text-xs text-slate-500 text-center">
            💡 <strong>Dica:</strong> Marque esta página nos favoritos para acesso rápido aos recursos oficiais
          </p>
        </div>
      </div>
    </div>
  );
}
