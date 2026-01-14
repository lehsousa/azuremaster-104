import { CheckCircle, BookOpen, ExternalLink, Play, GraduationCap } from 'lucide-react';

const LEARNING_TRAILS = {
  modulo1: {
    title: "Pré-requisitos para Azure",
    topics: [
      {
        title: "PowerShell para Azure",
        points: [
          "Cmdlets principais: Get-AzResource, New-AzResourceGroup",
          "Autenticação: Connect-AzAccount",
          "Gerenciamento de recursos em lote"
        ]
      },
      {
        title: "Azure CLI",
        points: [
          "Sintaxe: az group create, az vm list",
          "Cross-platform (Windows, Linux, Mac)",
          "Scripts automatizados com bash/PowerShell"
        ]
      },
      {
        title: "Azure Cloud Shell",
        points: [
          "Terminal no navegador (PowerShell + Bash)",
          "Pré-configurado com ferramentas Azure",
          "Armazenamento persistente de 5 GB"
        ]
      },
      {
        title: "ARM Templates & Bicep",
        points: [
          "Infraestrutura como Código (IaC)",
          "JSON (ARM) vs Bicep (DSL simplificado)",
          "Deploy repetível e versionamento"
        ]
      }
    ],
    officialModule: {
      title: "Pré-requisitos do Administrador do Azure",
      url: "https://learn.microsoft.com/pt-br/training/paths/az-104-administrator-prerequisites/",
      description: "Trilha oficial Microsoft Learn para este módulo"
    },
    resources: [
      { title: "Azure PowerShell", url: "https://learn.microsoft.com/pt-br/powershell/azure/" },
      { title: "Azure CLI", url: "https://learn.microsoft.com/pt-br/cli/azure/" },
      { title: "ARM Templates", url: "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/templates/" }
    ]
  },
  modulo2: {
    title: "Identidades e Governança",
    topics: [
      {
        title: "Microsoft Entra ID (Azure AD)",
        points: [
          "Serviço de identidade baseado em nuvem",
          "Usuários, grupos e aplicativos",
          "SSO (Single Sign-On) e MFA"
        ]
      },
      {
        title: "RBAC (Controle de Acesso)",
        points: [
          "Funções: Owner, Contributor, Reader",
          "Escopos: Management Group, Subscription, Resource Group",
          "Princípio do menor privilégio"
        ]
      },
      {
        title: "Azure Policy",
        points: [
          "Impor padrões organizacionais",
          "Avaliar conformidade em escala",
          "Policies vs Initiatives"
        ]
      },
      {
        title: "Management Groups",
        points: [
          "Hierarquia de até 6 níveis",
          "Aplicar políticas em múltiplas assinaturas",
          "Gerenciamento centralizado"
        ]
      }
    ],
    officialModule: {
      title: "Gerenciar identidades e governança no Azure",
      url: "https://learn.microsoft.com/pt-br/training/paths/az-104-manage-identities-governance/",
      description: "Trilha oficial Microsoft Learn para este módulo"
    },
    resources: [
      { title: "Microsoft Entra ID", url: "https://learn.microsoft.com/pt-br/entra/fundamentals/" },
      { title: "Azure RBAC", url: "https://learn.microsoft.com/pt-br/azure/role-based-access-control/" },
      { title: "Azure Policy", url: "https://learn.microsoft.com/pt-br/azure/governance/policy/" }
    ]
  },
  modulo3: {
    title: "Armazenamento Azure",
    topics: [
      {
        title: "Tipos de Armazenamento",
        points: [
          "Blob: Dados não estruturados (imagens, vídeos)",
          "Files: Compartilhamentos SMB na nuvem",
          "Queue: Mensagens assíncronas",
          "Table: NoSQL key-value"
        ]
      },
      {
        title: "Redundância",
        points: [
          "LRS: 3 cópias locais",
          "ZRS: 3 zonas de disponibilidade",
          "GRS: Replica para região secundária",
          "RA-GRS: GRS + leitura na secundária"
        ]
      },
      {
        title: "Camadas de Acesso",
        points: [
          "Hot: Acesso frequente, custo maior",
          "Cool: Acesso raro, armazenamento barato",
          "Archive: Raríssimo, latência de horas"
        ]
      },
      {
        title: "Segurança",
        points: [
          "SAS Tokens: Acesso delegado temporário",
          "Chaves de conta: Acesso total",
          "Azure AD: Autenticação moderna"
        ]
      }
    ],
    officialModule: {
      title: "Implementar e gerenciar o armazenamento no Azure",
      url: "https://learn.microsoft.com/pt-br/training/paths/az-104-manage-storage/",
      description: "Trilha oficial Microsoft Learn para este módulo"
    },
    resources: [
      { title: "Azure Storage", url: "https://learn.microsoft.com/pt-br/azure/storage/" },
      { title: "Blob Storage", url: "https://learn.microsoft.com/pt-br/azure/storage/blobs/" },
      { title: "Redundância", url: "https://learn.microsoft.com/pt-br/azure/storage/common/storage-redundancy" }
    ]
  },
  modulo4: {
    title: "Redes Virtuais",
    topics: [
      {
        title: "VNet (Virtual Network)",
        points: [
          "Isolamento de rede no Azure",
          "Sub-redes e CIDR",
          "Comunicação entre recursos"
        ]
      },
      {
        title: "Conectividade",
        points: [
          "VNet Peering: Conectar VNets diretamente",
          "VPN Gateway: Site-to-Site, Point-to-Site",
          "ExpressRoute: Conexão privada dedicada"
        ]
      },
      {
        title: "Segurança de Rede",
        points: [
          "NSG: Regras de firewall (portas, IPs)",
          "Azure Firewall: Firewall gerenciado",
          "DDoS Protection: Proteção contra ataques"
        ]
      },
      {
        title: "Load Balancing",
        points: [
          "Load Balancer: Camada 4 (TCP/UDP)",
          "Application Gateway: Camada 7 (HTTP/HTTPS)",
          "Traffic Manager: DNS-based, global"
        ]
      }
    ],
    officialModule: {
      title: "Configurar e gerenciar redes virtuais para administradores do Azure",
      url: "https://learn.microsoft.com/pt-br/training/paths/az-104-manage-virtual-networks/",
      description: "Trilha oficial Microsoft Learn para este módulo"
    },
    resources: [
      { title: "Virtual Network", url: "https://learn.microsoft.com/pt-br/azure/virtual-network/" },
      { title: "VPN Gateway", url: "https://learn.microsoft.com/pt-br/azure/vpn-gateway/" },
      { title: "Load Balancer", url: "https://learn.microsoft.com/pt-br/azure/load-balancer/" }
    ]
  },
  modulo5: {
    title: "Computação Azure",
    topics: [
      {
        title: "Azure Virtual Machines",
        points: [
          "Tamanhos de VM: General purpose, Compute, Memory optimized",
          "Discos gerenciados e não gerenciados",
          "Availability Sets e Availability Zones"
        ]
      },
      {
        title: "VM Scale Sets (VMSS)",
        points: [
          "Escalonamento automático horizontal",
          "Balanceamento de carga integrado",
          "Grupos de VMs idênticas"
        ]
      },
      {
        title: "Azure App Service",
        points: [
          "PaaS para Web Apps, APIs REST e Mobile backends",
          "Deployment slots para staging",
          "Planos: Free, Shared, Basic, Standard, Premium"
        ]
      },
      {
        title: "Containers e Kubernetes",
        points: [
          "Azure Container Instances (ACI): Containers sem VM",
          "Azure Kubernetes Service (AKS): Kubernetes gerenciado",
          "Azure Container Registry (ACR): Registry privado"
        ]
      },
      {
        title: "Serviços Auxiliares",
        points: [
          "Azure Bastion: RDP/SSH seguro sem IP público",
          "Azure Spot VMs: VM com desconto (pode ser removida)",
          "Dedicated Hosts: Hardware dedicado"
        ]
      }
    ],
    officialModule: {
      title: "Implantar e gerenciar recursos de computação do Azure",
      url: "https://learn.microsoft.com/pt-br/training/paths/az-104-manage-compute-resources/",
      description: "Trilha oficial Microsoft Learn para este módulo"
    },
    resources: [
      { title: "Azure VMs", url: "https://learn.microsoft.com/pt-br/azure/virtual-machines/" },
      { title: "App Service", url: "https://learn.microsoft.com/pt-br/azure/app-service/" },
      { title: "AKS", url: "https://learn.microsoft.com/pt-br/azure/aks/" }
    ]
  },
  modulo6: {
    title: "Monitoramento e Backup",
    topics: [
      {
        title: "Azure Monitor",
        points: [
          "Coleta de métricas e logs",
          "Dashboards e visualizações",
          "Alertas e notificações"
        ]
      },
      {
        title: "Log Analytics",
        points: [
          "Queries KQL (Kusto Query Language)",
          "Análise centralizada de logs",
          "Workbooks personalizados"
        ]
      },
      {
        title: "Azure Backup",
        points: [
          "Backup de VMs, arquivos, bancos de dados",
          "Retenção: 7 dias a 99 anos",
          "Recovery Services Vault"
        ]
      },
      {
        title: "Site Recovery",
        points: [
          "DR (Disaster Recovery) entre regiões",
          "Replicação contínua de VMs",
          "Failover e failback"
        ]
      }
    ],
    officialModule: {
      title: "Monitorar e fazer backup de recursos do Azure",
      url: "https://learn.microsoft.com/pt-br/training/paths/az-104-monitor-backup-resources/",
      description: "Trilha oficial Microsoft Learn para este módulo"
    },
    resources: [
      { title: "Azure Monitor", url: "https://learn.microsoft.com/pt-br/azure/azure-monitor/" },
      { title: "Azure Backup", url: "https://learn.microsoft.com/pt-br/azure/backup/" },
      { title: "Site Recovery", url: "https://learn.microsoft.com/pt-br/azure/site-recovery/" }
    ]
  }
};

export default function LearningTrail({ moduleId, onStartQuiz }) {
  const trail = LEARNING_TRAILS[moduleId];
  
  if (!trail) return null;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header da Trilha */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">{trail.title}</h2>
        <p className="text-slate-600">
          Domine os conceitos-chave antes de testar seus conhecimentos
        </p>
      </div>

      {/* Tópicos */}
      <div className="space-y-6 mb-8">
        {trail.topics.map((topic, index) => (
          <div key={index} className="card hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-600 font-bold text-sm">{index + 1}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{topic.title}</h3>
                <ul className="space-y-2">
                  {topic.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Módulo Oficial Microsoft Learn */}
      {trail.officialModule && (
        <div className="card bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-orange-900">🎓 Módulo Oficial Microsoft Learn</h3>
              </div>
              <p className="text-sm text-orange-700 mb-4">{trail.officialModule.description}</p>
              <a
                href={trail.officialModule.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 transition-all shadow-md hover:shadow-lg font-semibold group"
              >
                <span>{trail.officialModule.title}</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Recursos Externos */}
      <div className="card bg-blue-50 border-2 border-blue-200 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-semibold text-blue-900">Documentação Oficial</h3>
        </div>
        <div className="space-y-3">
          {trail.resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-100 transition-colors group"
            >
              <ExternalLink className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
              <span className="text-blue-700 font-medium group-hover:text-blue-800">{resource.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* CTA para Quiz */}
      <div className="card bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200 text-center">
        <Play className="w-12 h-12 text-primary-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-slate-800 mb-2">Pronto para Testar?</h3>
        <p className="text-slate-600 mb-6">
          Agora que você revisou os conceitos, teste seu conhecimento!
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => onStartQuiz('study')}
            className="btn-primary"
          >
            Modo Estudo
          </button>
          <button
            onClick={() => onStartQuiz('exam')}
            className="btn-outline"
          >
            Modo Simulado
          </button>
        </div>
      </div>
    </div>
  );
}
