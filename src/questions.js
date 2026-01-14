// Banco de questões expandido para AzureMaster 104
// Total: 50 questões (10 por módulo)

export const QUESTION_BANK = {
  modulo1: [
    {
      id: 1,
      question: "Você é o administrador do Azure da Contoso e precisa gerar um relatório detalhado de todos os recursos existentes em uma assinatura específica para fins de auditoria interna. O relatório deve conter obrigatoriamente o tipo do recurso, a localização geográfica e o grupo de recursos ao qual pertence. A solução deve utilizar o módulo Azure PowerShell. Qual cmdlet você deve executar?",
      options: ["Get-AzResource", "Get-AzureResource", "List-AzResource", "Show-AzResource"],
      correctAnswer: 0,
      explanation: "O cmdlet `Get-AzResource` obtém recursos do Azure. Ele retorna os recursos com suas propriedades, incluindo tipo, localização e Resource Group. `Get-AzureResource` pertence ao módulo legado AzureRM (descontinuado). `List-AzResource` e `Show-AzResource` não são cmdlets válidos no módulo Az. Referência: Microsoft Learn - Az.Resources",
      module: "Pré-requisitos"
    },
    {
      id: 2,
      question: "Um administrador precisa urgentemente implantar uma Máquina Virtual (VM), mas está utilizando um computador compartilhado onde a instalação de novos softwares (como Azure CLI ou PowerShell) é estritamente proibida pelas políticas de segurança da empresa. O acesso deve ser realizado de forma segura e autenticada diretamente pelo navegador. Qual ferramenta é a mais adequada para realizar essa tarefa?",
      options: ["Azure Cloud Shell", "PowerShell ISE", "Prompt de Comando (CMD) local", "Azure Desktop App"],
      correctAnswer: 0,
      explanation: "O Azure Cloud Shell é um shell interativo, autenticado e acessível via navegador, que permite gerenciar recursos do Azure. Ele já possui Azure CLI e Azure PowerShell pré-instalados, não exigindo instalação local. PowerShell ISE e CMD são ferramentas locais. Azure Desktop App não é uma ferramenta de gerenciamento padrão para este cenário. Referência: Microsoft Learn - Azure Cloud Shell",
      module: "Pré-requisitos"
    },
    {
      id: 3,
      question: "Você executou um script de automação que falhou com o erro 'Resource Group not found'. Para corrigir, você precisa criar um Grupo de Recursos chamado 'RG1' na região 'East US' antes de reexecutar o script. A solução deve utilizar a Azure CLI. Qual comando você deve adicionar ao script?",
      options: ["az group create --name RG1 --location eastus", "az create group RG1 eastus", "az rg new --name RG1", "az resource group create RG1"],
      correctAnswer: 0,
      explanation: "A sintaxe correta para criar um Resource Group via Azure CLI é `az group create --name <nome> --location <região>`. As outras opções apresentam sintaxes incorretas ou comandos inexistentes na CLI do Azure. Referência: Microsoft Learn - az group",
      module: "Pré-requisitos"
    },
    {
      id: 4,
      question: "Você recebeu um arquivo chamado 'infrastructure.template' para realizar a implantação de recursos no Azure. Ao analisar o arquivo, você nota uma estrutura hierárquica contendo definições de recursos, propriedades e outputs. A documentação instrui o uso do comando 'az deployment group create'. Qual é o formato deste arquivo?",
      options: ["JSON", "YAML", "XML", "HCL (Terraform)"],
      correctAnswer: 0,
      explanation: "Os templates do Azure Resource Manager (ARM Templates) utilizam o formato JSON (JavaScript Object Notation). Embora o Azure suporte Bicep (que compila para JSON), o comando e a estrutura descrita (hierarquia JSON padrão) indicam um ARM Template. YAML é usado em Pipelines/Kubernetes, XML é legado e HCL é do Terraform. Referência: Microsoft Learn - Estrutura e sintaxe de modelos ARM",
      module: "Pré-requisitos"
    },
    {
      id: 5,
      question: "Todas as solicitações de gerenciamento no Azure, venham elas do Portal, Azure CLI, PowerShell ou SDKs, passam por uma camada comum. Essa camada é responsável por autenticar e autorizar as requisições, aplicar políticas e garantir a consistência das tags antes de encaminhá-las aos provedores de recursos. Qual é o nome dessa camada de orquestração?",
      options: ["Azure Resource Manager (ARM)", "Azure Active Directory", "Azure Monitor", "Azure Policy Engine"],
      correctAnswer: 0,
      explanation: "O Azure Resource Manager (ARM) é a camada de gerenciamento e implantação do Azure. Ele atua como um 'porteiro', garantindo que todas as solicitações sejam autenticadas e autorizadas antes de realizar alterações nos recursos. O Azure AD (Entra ID) cuida apenas da identidade. Azure Monitor foca em observabilidade. Referência: Microsoft Learn - O que é o Azure Resource Manager?",
      module: "Pré-requisitos"
    },
    {
      id: 6,
      question: "Sua equipe de operações possui administradores com diferentes preferências: alguns são especialistas em Windows (PowerShell) e outros em Linux (Bash). Você precisa disponibilizar um ambiente de linha de comando no Azure (Cloud Shell) que atenda a ambos os perfis, permitindo que utilizem suas linguagens de script preferidas. Quais ambientes de shell o Azure Cloud Shell disponibiliza?",
      options: ["PowerShell e Bash (com possibilidade de alternância)", "Apenas PowerShell", "Apenas Bash", "CMD e PowerShell"],
      correctAnswer: 0,
      explanation: "O Azure Cloud Shell oferece suporte tanto para Bash quanto para PowerShell. O usuário pode selecionar seu ambiente preferido e alternar entre eles conforme necessário. Ambos os ambientes vêm com a Azure CLI e o módulo Az PowerShell pré-instalados e autenticados. Referência: Microsoft Learn - Visão geral do Azure Cloud Shell",
      module: "Pré-requisitos"
    },
    {
      id: 7,
      question: "Sua equipe considera a sintaxe JSON dos ARM Templates muito verbosa e complexa de manter. Eles desejam uma alternativa que ofereça uma sintaxe mais limpa e modular, mas que mantenha todas as capacidades do ARM (como RBAC e Policies), compilando automaticamente para JSON. Qual tecnologia você deve recomendar?",
      options: ["Bicep", "Terraform", "Ansible", "Pulumi"],
      correctAnswer: 0,
      explanation: "Bicep é uma linguagem específica de domínio (DSL) que usa sintaxe declarativa para implantar recursos do Azure. Ela oferece uma sintaxe mais concisa que o JSON e compila (transpila) para templates ARM JSON padrão. Terraform, Ansible e Pulumi são ferramentas de terceiros/multi-cloud, enquanto Bicep é a evolução nativa dos templates ARM. Referência: Microsoft Learn - O que é o Bicep?",
      module: "Pré-requisitos"
    },
    {
      id: 8,
      question: "Uma aplicação corporativa é composta por um Web App, um banco de dados SQL e uma conta de armazenamento. Todos esses recursos compartilham o mesmo ciclo de vida (são criados, atualizados e excluídos juntos) e devem ter as mesmas permissões de acesso (RBAC). Qual é a melhor maneira de agrupar esses recursos logicamente?",
      options: ["Resource Group", "Subscription", "Management Group", "Virtual Network"],
      correctAnswer: 0,
      explanation: "Um Grupo de Recursos (Resource Group) é um contêiner que mantém recursos relacionados de uma solução do Azure. Recursos que compartilham o mesmo ciclo de vida devem ser colocados no mesmo grupo para facilitar o gerenciamento, deployment e exclusão em conjunto. Subscription e Management Group são escopos mais amplos. Referência: Microsoft Learn - Visão geral do Azure Resource Manager",
      module: "Pré-requisitos"
    },
    {
      id: 9,
      question: "Você está criando um script em PowerShell que precisa iterar sobre todas as assinaturas (subscriptions) às quais sua conta tem acesso. Para cada assinatura, o script deve listar os grupos de recursos. Qual cmdlet você deve utilizar para obter a lista de assinaturas disponíveis no contexto atual?",
      options: ["Get-AzSubscription", "Get-AzureSubscription", "List-AzSubscription", "Select-AzSubscription"],
      correctAnswer: 0,
      explanation: "O cmdlet `Get-AzSubscription` lista as assinaturas às quais a conta atual tem acesso. `Get-AzureSubscription` é do módulo antigo. `List-AzSubscription` não existe. `Select-AzSubscription` é usado para alterar a assinatura ativa, não para listar todas. Referência: Microsoft Learn - Get-AzSubscription",
      module: "Pré-requisitos"
    },
    {
      id: 10,
      question: "O grupo de recursos 'RG-Dev' contém 20 máquinas virtuais, 5 bancos de dados e diversas contas de armazenamento de um projeto finalizado. Um administrador executa o comando `az group delete --name RG-Dev --yes`. O comando é concluído com sucesso. Qual é o resultado dessa ação?",
      options: ["Todos os recursos dentro do RG e o próprio RG são excluídos permanentemente", "Apenas o RG é excluído; os recursos são movidos para um grupo padrão", "Os recursos são marcados para 'soft delete' por 30 dias", "O RG é arquivado e os recursos parados"],
      correctAnswer: 0,
      explanation: "Ao excluir um Grupo de Recursos, TODOS os recursos contidos nele são também excluídos permanentemente. Essa é uma ação em cascata e irreversível (a menos que recursos específicos tenham backup ou soft-delete habilitado internamente, mas o padrão é a exclusão). Não há movimentação automática ou arquivamento. Referência: Microsoft Learn - Azure Resource Manager delete",
      module: "Pré-requisitos"
    },
    {
      id: 11,
      question: "Um arquiteto de soluções está desenhando a infraestrutura para uma nova aplicação legada que requer controle total sobre o Sistema Operacional (instalação de drivers customizados e configuração de firewall do OS). No entanto, a empresa não quer gerenciar o hardware físico (datacenter). Qual modelo de serviço em nuvem atende a esses requisitos?",
      options: ["IaaS (Infraestrutura como Serviço)", "PaaS (Plataforma como Serviço)", "SaaS (Software como Serviço)", "FaaS (Função como Serviço)"],
      correctAnswer: 0,
      explanation: "IaaS (como Azure VMs) oferece controle total sobre o Sistema Operacional, permitindo instalações personalizadas e configurações de baixo nível, sem o ônus de gerenciar o hardware físico. PaaS abstrai o SO. SaaS entrega apenas o software pronto. FaaS é serverless. Referência: Microsoft Learn - IaaS vs PaaS vs SaaS",
      module: "Pré-requisitos"
    },
    {
      id: 12,
      question: "Você está implantando uma VM de missão crítica em produção. A VM utilizará Premium SSD tanto para o disco de SO quanto para os discos de dados. A aplicação não suporta clusterização e será implantada como uma instância única (Single Instance VM). Qual é o SLA de conectividade garantido pela Microsoft para este cenário?",
      options: ["99.9%", "99.5%", "99%", "95%"],
      correctAnswer: 0,
      explanation: "Para VMs de Instância Única, o Azure garante um SLA de pelo menos 99,9% se a VM utilizar Premium SSD ou Ultra Disk para todos os discos (SO e Dados). Se usar Standard SSD, o SLA cai para 99,5%. Availability Sets elevam para 99,95% e Zones para 99,99%. Referência: Microsoft Learn - SLA for Virtual Machines",
      module: "Pré-requisitos"
    },
    {
      id: 13,
      question: "Devido a requisitos estritos de conformidade, sua empresa precisa configurar uma estratégia de Disaster Recovery (DR) com replicação geográfica. Os recursos primários estão na região 'Brazil South'. Você precisa identificar qual é a 'Região Par' (Paired Region) oficial do Azure para configurar a replicação correta. Qual é a região par do Brazil South?",
      options: ["South Central US", "East US", "Brazil Southeast", "North Central US"],
      correctAnswer: 0,
      explanation: "A região par (paired region) oficial de 'Brazil South' é 'South Central US'. As regiões pares são projetadas para garantir que, em atualizações de plataforma, apenas uma região do par seja atualizada por vez, além de otimizar a replicação de dados. *Nota: Brazil Southeast existe mas o par oficial para DR de região completa é South Central US.* Referência: Microsoft Learn - Azure Paired Regions",
      module: "Pré-requisitos"
    },
    {
      id: 14,
      question: "A empresa possui 500 recursos no Azure e o departamento financeiro precisa de um relatório de custos separado por departamento ('Marketing' vs 'TI'). Os recursos já foram criados e estão misturados em diversos grupos de recursos. Qual é a estratégia menos disruptiva para organizar esses custos retroativamente?",
      options: ["Aplicar Tags (ex: Department:Marketing) nos recursos", "Mover recursos para Resource Groups separados por departamento", "Criar Subscriptions separadas para cada departamento", "Renomear todos os recursos com prefixos"],
      correctAnswer: 0,
      explanation: "Tags são metadados (chave-valor) que permitem categorizar recursos para fins de faturamento e gerenciamento sem alterar sua localização física ou funcional. Mover recursos pode ser disruptivo e complexo. Subscriptions separadas é um exagero para apenas categorização. Renomear não é prático pois muitos recursos não permitem renomeação. Referência: Microsoft Learn - Use tags to organize your Azure resources",
      module: "Pré-requisitos"
    },
    {
      id: 15,
      question: "Um administrador júnior, sem experiência prévia com scripts (CLI ou PowerShell), precisa criar uma Storage Account. Ele prefere uma interface gráfica que ofereça um assistente passo-a-passo (wizard) e valide as configurações visualmente antes da criação. Qual ferramenta você deve recomendar?",
      options: ["Azure Portal", "Azure CLI", "Azure PowerShell", "ARM Templates"],
      correctAnswer: 0,
      explanation: "O Azure Portal é a interface gráfica baseada na web que oferece assistentes visuais (wizards), validação de formulários em tempo real e facilidade de uso para iniciantes. As outras opções (CLI, PowerShell, Templates) exigem conhecimento de comandos ou sintaxe de código. Referência: Microsoft Learn - Azure Portal overview",
      module: "Pré-requisitos"
    },
    {
      id: 16,
      question: "Seu pipeline de CI/CD está falhando com o erro 'az: command not found'. O pipeline requer a Azure CLI versão 2.45 ou superior. Você precisa adicionar um passo no script para verificar se a CLI está instalada e qual a versão atual antes de prosseguir com o troubleshooting. Qual comando você deve usar?",
      options: ["az --version", "az version", "az check-version", "az get version"],
      correctAnswer: 0,
      explanation: "O comando `az --version` exibe a versão instalada da Azure CLI e de suas bibliotecas dependentes. Se a CLI não estiver instalada, o sistema operacional retornará o erro de comando não encontrado. `az version` também funciona em versões recentes, mas `--version` é o padrão universal. Referência: Microsoft Learn - Azure CLI version",
      module: "Pré-requisitos"
    },
    {
      id: 17,
      question: "Você está arquitetando uma solução de banco de dados crítico que requer um SLA de 99,99% de disponibilidade. A arquitetura deve ser resiliente à falha completa de um datacenter dentro de uma região (ex: incêndio ou falha de energia em um prédio). Quantas Zonas de Disponibilidade (Availability Zones) você deve utilizar no mínimo?",
      options: ["Mínimo de 2 Zonas de Disponibilidade", "1 Zona de Disponibilidade", "3 Regiões diferentes", "Availability Sets apenas"],
      correctAnswer: 0,
      explanation: "Para atingir o SLA de 99,99% e proteger contra falhas de datacenter (nível de zona), você deve implantar réplicas em pelo menos 2 Zonas de Disponibilidade (Availability Zones) diferentes dentro da mesma região. Uma única zona não oferece proteção contra falha do datacenter. Referência: Microsoft Learn - Availability Zones",
      module: "Pré-requisitos"
    },
    {
      id: 18,
      question: "Um Web App hospedado em 2 VMs 'Standard_D2s' está sofrendo com alta carga de CPU. Você tem duas opções: (A) Adicionar mais 2 VMs 'Standard_D2s' ao cluster; ou (B) Substituir as VMs atuais por modelos 'Standard_D4s' (com o dobro de CPU/RAM). Tecnicamente, como são classificadas essas operações de escalabilidade?",
      options: ["A é Scale Out (Horizontal); B é Scale Up (Vertical)", "A é Scale Up; B é Scale Out", "Ambas são Scale Out", "Ambas são Scale Up"],
      correctAnswer: 0,
      explanation: "Scale Out (Escalonamento Horizontal) envolve adicionar mais instâncias do mesmo recurso (Opção A). Scale Up (Escalonamento Vertical) envolve aumentar a capacidade (tamanho/potência) da instância existente (Opção B). Scale Out é geralmente preferido para alta disponibilidade e elasticidade na nuvem. Referência: Microsoft Learn - Scaling options",
      module: "Pré-requisitos"
    },
    {
      id: 19,
      question: "Sua organização mantém 75% dos workloads em servidores locais (on-premises) devido a regulamentações estritas de dados, mas deseja migrar 25% dos workloads (ambientes de desenvolvimento e apps não-críticos) para o Azure para ganhar agilidade. Além disso, desejam usar a nuvem para 'transbordo' (bursting) em picos de demanda. Qual modelo de implantação em nuvem descreve este cenário?",
      options: ["Nuvem Híbrida (Hybrid Cloud)", "Nuvem Pública", "Nuvem Privada", "Multi-Cloud"],
      correctAnswer: 0,
      explanation: "Nuvem Híbrida é o modelo que combina infraestrutura local (Nuvem Privada ou On-Premises) com Nuvem Pública (Azure), permitindo que dados e aplicativos sejam compartilhados entre elas. É ideal para cenários com requisitos regulatórios mistos e necessidade de elasticidade. Multi-cloud refere-se ao uso de múltiplos provedores públicos (ex: Azure + AWS). Referência: Microsoft Learn - What is hybrid cloud?",
      module: "Pré-requisitos"
    },
    {
      id: 20,
      question: "Um arquiteto precisa apresentar uma estimativa formal de custos mensais para um novo projeto antes de aprovar a Prova de Conceito (PoC). O projeto envolverá 5 VMs, 1 Banco de Dados SQL e 500GB de armazenamento. O CFO exige ver os valores previstos antes de qualquer recurso ser criado. Qual ferramenta deve ser utilizada?",
      options: ["Azure Pricing Calculator", "Azure Cost Management", "Azure Advisor", "Azure Monitor"],
      correctAnswer: 0,
      explanation: "A Azure Pricing Calculator (Calculadora de Preços) é a ferramenta pública projetada para estimar custos de serviços do Azure ANTES da contratação/criação. O Cost Management analisa custos REAIS de recursos já existentes. O Advisor dá recomendações de otimização. Referência: Microsoft Learn - Azure Pricing Calculator",
      module: "Pré-requisitos"
    },
    {
      id: 21,
      question: "Você desenvolveu um script para aplicar tags de governança automaticamente (Ambiente, Dono, Centro de Custo, etc.). Ao tentar adicionar a 51ª tag a um recurso específico, o script falha com um erro de limite excedido. Qual é o limite máximo de tags que podem ser aplicadas diretamente a um único recurso ou grupo de recursos no Azure?",
      options: ["50 tags", "15 tags", "100 tags", "Ilimitado"],
      correctAnswer: 0,
      explanation: "O Azure impõe um limite máximo de 50 tags (pares nome-valor) por recurso ou por Grupo de Recursos. Se for necessário armazenar mais metadados, deve-se usar tags JSON (serializar múltiplos valores em uma tag) ou um banco de dados externo. Referência: Microsoft Learn - Tagging limits",
      module: "Pré-requisitos"
    },
    {
      id: 22,
      question: "A equipe de DevOps precisa versionar toda a infraestrutura da empresa no Git. O deployment deve ser declarativo, idempotente (pode ser repetido sem efeitos colaterais indesejados) e auditável. A infraestrutura inclui VMs, Redes e Bancos de Dados. Qual abordagem adere a todos esses requisitos?",
      options: ["Infrastructure as Code (IaC) com ARM Templates ou Bicep", "Scripts imperativos em PowerShell", "Provisionamento manual via Portal com prints", "Planilhas de Excel com configurações"],
      correctAnswer: 0,
      explanation: "Infrastructure as Code (IaC) utilizando ARM Templates ou Bicep permite definir a infraestrutura de forma declarativa em arquivos de texto versionáveis. Eles são nativamente idempotentes no Azure. Scripts PowerShell tendem a ser imperativos e exigem lógica extra para garantir idempotência. Manual e Excel não são versionáveis/automatizáveis. Referência: Microsoft Learn - Infrastructure as Code",
      module: "Pré-requisitos"
    },
    {
      id: 23,
      question: "Um script de deployment em PowerShell falha com a mensagem 'New-AzResourceGroup not recognized'. Você verifica e confirma que o módulo 'Az' está instalado corretamente, mas o script parece estar usando uma sintaxe antiga ou comando errado. Qual é o cmdlet correto do módulo Az para criar um novo Grupo de Recursos?",
      options: ["New-AzResourceGroup", "New-AzureResourceGroup", "Create-AzResourceGroup", "Add-AzResourceGroup"],
      correctAnswer: 0,
      explanation: "No módulo atual do Azure PowerShell (módulo Az), o cmdlet para criar um grupo de recursos é `New-AzResourceGroup`. `New-AzureResourceGroup` pertencia ao módulo legado AzureRM. `Create` e `Add` não são verbos padrão para criação de RGs neste contexto. Se o comando não é reconhecido, pode faltar o `Import-Module Az`. Referência: Microsoft Learn - New-AzResourceGroup",
      module: "Pré-requisitos"
    },
    {
      id: 24,
      question: "O recurso 'VM-ERP' está no grupo de recursos 'RG-A' e possui as tags 'Environment:Prod' e 'Owner:Finance'. Um administrador move este recurso para o 'RG-B' utilizando o Portal do Azure. O grupo de destino 'RG-B' possui a tag 'Location:USA'. Após a movimentação, quais tags estarão presentes no recurso 'VM-ERP'?",
      options: ["Apenas 'Environment:Prod' e 'Owner:Finance' (Tags originais preservadas)", "Apenas 'Location:USA' (Herda do novo RG)", "Todas as tags (Originais + Novo RG)", "Nenhuma tag"],
      correctAnswer: 0,
      explanation: "Ao mover um recurso entre Grupos de Recursos, as tags aplicadas diretamente ao recurso são PRESERVADAS. O recurso NÃO herda tags do Grupo de Recursos de destino (o Azure não possui herança de tags nativa de RG para recursos, apenas via Azure Policy). Portanto, ele mantém apenas suas tags originais. Referência: Microsoft Learn - Move resources documentation",
      module: "Pré-requisitos"
    },
    {
      id: 25,
      question: "Sua empresa possui 200 VMs em execução, gerando um custo mensal de $50k. O CFO exige uma redução de custos sem impactar a performance. Você precisa de uma ferramenta nativa que analise o padrão de uso real (CPU, Memória) dessas VMs e gere recomendações automáticas de redimensionamento (Right-sizing) ou compra de Reservas. Qual ferramenta utilizar?",
      options: ["Azure Advisor", "Azure Pricing Calculator", "Azure Monitor", "Cost Management (apenas visualização)"],
      correctAnswer: 0,
      explanation: "O Azure Advisor analisa a telemetria e configurações dos seus recursos e fornece recomendações personalizadas de Alta Disponibilidade, Segurança, Performance e Custo. Para custos, ele identifica VMs subutilizadas (para resize) e recomenda Reserved Instances. O Pricing Calculator é para estimativas. O Monitor coleta os dados, mas o Advisor é quem gera a recomendação de negócio. Referência: Microsoft Learn - Azure Advisor Cost recommendations",
      module: "Pré-requisitos"
    },
    {
      id: 26,
      question: "Seu pipeline de CI/CD implantou um ARM Template três vezes consecutivas em um ambiente de teste para troubleshooting. Cada execução do template define 5 VMs, 1 VNet e 2 Contas de Armazenamento. Considerando que não houve erros e a configuração permaneceu inalterada, quantos recursos estarão presentes no Grupo de Recursos após a terceira execução?",
      options: ["5 VMs, 1 VNet, 2 Storage Accounts (As mesmas da primeira execução)", "15 VMs, 3 VNets, 6 Storage Accounts (Duplicados a cada execução)", "O Deployment falhará na segunda execução pois os recursos já existem", "Apenas os recursos da última execução (os anteriores são deletados)"],
      correctAnswer: 0,
      explanation: "ARM Templates são IDEMPOTENTES por natureza. Isso significa que você pode implantar o mesmo template múltiplas vezes no mesmo grupo de recursos e obter o mesmo resultado final, sem duplicar recursos ou causar erros. O Azure Resource Manager verifica se o recurso já existe e se suas propriedades correspondem ao template; se sim, nada é feito. Referência: Microsoft Learn - Idempotency",
      module: "Pré-requisitos"
    },
    {
      id: 27,
      question: "Você está analisando um Grupo de Recursos que contém 20 recursos com dependências complexas (VMs dependem de NICs, que dependem de VNets e IPs Públicos). Antes de realizar qualquer alteração ou exclusão, você precisa entender visualmente a topologia e as conexões entre esses recursos. Qual ferramenta do Portal do Azure oferece essa visualização gráfica?",
      options: ["Resource Visualizer (Visualizador de Recursos)", "Exportar Template", "Azure Monitor", "Resource Graph Explorer"],
      correctAnswer: 0,
      explanation: "O Resource Visualizer (acessível no menu do Resource Group) gera um diagrama de topologia interativo que mostra os recursos e suas dependências (setas conectando-os). Isso é crucial para entender o impacto de mudanças. O 'Export Template' gera JSON. O Monitor foca em métricas. Resource Graph é para queries textuais. Referência: Microsoft Learn - Resource Visualizer",
      module: "Pré-requisitos"
    },
    {
      id: 28,
      question: "Um script tenta criar uma Storage Account chamada 'mystorageaccount', mas falha com o erro 'Name already taken'. No entanto, outro script consegue criar com sucesso uma VM chamada 'conteosovm' em um Grupo de Recursos diferente, apesar de já existir uma VM com esse nome em outro lugar. Por que existe essa diferença de comportamento?",
      options: ["Nomes de Storage Accounts devem ser globalmente únicos; VMs apenas únicos dentro do Resource Group", "Ambos devem ser globalmente únicos", "Ambos devem ser únicos apenas dentro do Resource Group", "É um bug intermitente do Azure"],
      correctAnswer: 0,
      explanation: "Contas de Armazenamento (Storage Accounts) exigem nomes GLOBALMENTE únicos em todo o Azure, pois geram um endpoint DNS público (ex: mystorageaccount.blob.core.windows.net). Já Máquinas Virtuais (VMs) só precisam ser únicas dentro do seu próprio Grupo de Recursos (para não haver conflito local). Referência: Microsoft Learn - Naming rules and restrictions",
      module: "Pré-requisitos"
    },
    {
      id: 29,
      question: "Uma Azure Policy que exige a tag 'CostCenter' foi aplicada no 'Root Management Group'. Sua organização possui 3 assinaturas e 50 grupos de recursos abaixo desse Management Group. Um administrador tenta criar uma nova VM em uma das assinaturas sem fornecer a tag 'CostCenter'. O que acontecerá?",
      options: ["O deployment será bloqueado (A política é herdada)", "O deployment terá sucesso (A política não é herdada)", "Será gerado apenas um aviso (Warning)", "A tag será adicionada automaticamente com valor nulo"],
      correctAnswer: 0,
      explanation: "Políticas aplicadas em um Management Group são HERDADAS por todas as Assinaturas, Grupos de Recursos e Recursos que estão abaixo dele na hierarquia. Como a política é de 'exigência' (provavelmente efeito Deny), a criação será bloqueada em qualquer nível abaixo do Root MG se não estiver em conformidade. Referência: Microsoft Learn - Management Groups and Policy inheritance",
      module: "Pré-requisitos"
    },
    {
      id: 30,
      question: "Sua equipe utiliza o Azure Cloud Shell diariamente para executar scripts de automação. No entanto, eles notaram que arquivos salvos no diretório `$HOME` persistem entre as sessões, mas arquivos salvos fora dele desaparecem após o logout ou reinício do shell. Qual é a explicação técnica para isso?",
      options: ["O diretório $HOME é montado em um Azure File Share persistente; o restante é contêiner efêmero", "É um bug do Cloud Shell", "Os arquivos são deletados por uma política de limpeza automática", "O logout não foi realizado corretamente"],
      correctAnswer: 0,
      explanation: "O Azure Cloud Shell roda em um contêiner temporário. Para persistir arquivos (como scripts e configurações no $HOME), ele monta automaticamente um Azure File Share (Storage Account) como um drive (clouddrive). Tudo que é salvo nesse mount point persiste. O restante do sistema de arquivos do contêiner é destruído quando a sessão termina. Referência: Microsoft Learn - Cloud Shell Persistence",
      module: "Pré-requisitos"
    },
    {
      id: 31,
      question: "Você está configurando um pipeline de CI/CD que roda em um contêiner Linux. O script falha com o erro 'Connect-AzAccount: not found'. O contêiner possui a Azure CLI instalada, mas não o PowerShell. O script precisa autenticar no Azure para implantar recursos. Qual comando você deve usar para autenticar usando a ferramenta disponível?",
      options: ["az login", "Connect-AzAccount", "Login-Azure", "auth-azure"],
      correctAnswer: 0,
      explanation: "O comando `az login` é usado para autenticar a Azure CLI (que está instalada). `Connect-AzAccount` é o comando do módulo Azure PowerShell (que não está instalado no contêiner). A CLI é cross-platform e ideal para ambientes Linux/Containers. Referência: Microsoft Learn - Sign in with Azure CLI",
      module: "Pré-requisitos"
    },
    {
      id: 32,
      question: "O Grupo de Recursos 'RG-Prod' contém bancos de dados SQL críticos. Recentemente, um administrador júnior deletou acidentalmente um recurso importante. O CTO exige uma medida de proteção que impeça EXCLUSÕES acidentais, mesmo por usuários com permissão de Owner, mas que ainda permita a modificação e gerenciamento diário dos recursos. Que recurso você deve implementar?",
      options: ["Resource Lock do tipo 'CanNotDelete'", "RBAC com permissão 'Reader' para todos", "Backup diário", "Tags com valor 'Critical'"],
      correctAnswer: 0,
      explanation: "Um Resource Lock do tipo `CanNotDelete` impede que qualquer usuário (inclusive Owners) exclua o recurso ou o Resource Group, mas PERMITE leitura e modificação (atualizações, reiniciar, etc.). Para deletar, o lock deve ser removido explicitamente primeiro. RBAC Reader impediria modificações (seria Read-Only). Referência: Microsoft Learn - Lock resources",
      module: "Pré-requisitos"
    },
    {
      id: 33,
      question: "Você precisa proteger uma VM de produção contra exclusão acidental, pois ela é vital para o negócio. No entanto, a equipe de operações precisa ser capaz de reiniciar a VM, alterar seu tamanho e instalar atualizações (patch management). Qual tipo de Resource Lock atende a esse requisito?",
      options: ["CanNotDelete", "ReadOnly", "Delete", "ResourceGuard"],
      correctAnswer: 0,
      explanation: "O lock `CanNotDelete` permite que usuários autorizados leiam e MODIFIQUEM um recurso, mas impede sua exclusão. O lock `ReadOnly` impediria qualquer modificação (como iniciar/parar a VM ou alterar configurações), o que atrapalharia as operações diárias. 'Delete' não é um tipo de lock válido (o nome é CanNotDelete). Referência: Microsoft Learn - Lock Types",
      module: "Pré-requisitos"
    },
    {
      id: 34,
      question: "Sua empresa possui 200 servidores Windows e Linux rodando em um datacenter local. Por motivos regulatórios, eles não podem ser migrados para a nuvem. No entanto, você precisa gerenciá-los de forma centralizada usando o Portal do Azure, aplicando Políticas (Azure Policy) e Monitoramento (Azure Monitor) da mesma forma que faz com as VMs nativas do Azure. Qual solução permite isso?",
      options: ["Azure Arc", "Azure Migrate", "VPN Gateway", "Azure Stack Hub"],
      correctAnswer: 0,
      explanation: "O Azure Arc estende o plano de controle e gerenciamento do Azure (ARM) para infraestruturas fora do Azure (on-premises ou outras nuvens). Com o Arc, servidores físicos/virtuais locais aparecem no Portal como recursos do Azure, permitindo aplicar RBAC, Policies, Tags e Monitoramento unificado. Referência: Microsoft Learn - Azure Arc overview",
      module: "Pré-requisitos"
    },
    {
      id: 35,
      question: "Um arquiteto deseja organizar um recurso 'VM1' de modo que ele pertença simultaneamente a dois Grupos de Recursos: 'RG-Prod' (para faturamento) e 'RG-Dev' (para acesso dos desenvolvedores). Isso é tecnicamente possível no Azure?",
      options: ["Não, um recurso deve pertencer a exatamente um Grupo de Recursos", "Sim, um recurso pode estar em múltiplos RGs", "Sim, mas apenas se estiverem na mesma região", "Sim, até o limite de 5 RGs"],
      correctAnswer: 0,
      explanation: "No Azure Resource Manager, cada recurso deve pertencer a UM e APENAS UM Grupo de Recursos. Não existe 'associação múltipla'. Para compartilhar acesso ou visibilidade, deve-se usar RBAC (dar permissão aos usuários em múltiplos grupos) ou links lógicos, mas a 'casa' do recurso é única. Referência: Microsoft Learn - Resource Group limits",
      module: "Pré-requisitos"
    },
    {
      id: 36,
      question: "Houve uma interrupção de serviço na região 'East US' que afetou suas VMs por 4 horas. Sua equipe só descobriu o problema através de reclamações de usuários no Twitter. O CTO exige que a equipe seja notificada proativamente sobre incidentes de saúde do Azure que afetem especificamente os SEUS recursos. Qual serviço deve ser configurado?",
      options: ["Azure Service Health", "Azure Monitor", "Azure Advisor", "Status.azure.com"],
      correctAnswer: 0,
      explanation: "O Azure Service Health fornece alertas PERSONALIZADOS e orientações quando problemas nos serviços do Azure afetam diretamente os seus recursos. Ele notifica sobre incidentes, manutenção planejada e avisos de saúde. O Azure Monitor foca em performance, e o status.azure.com é um painel global genérico, não personalizado para sua assinatura. Referência: Microsoft Learn - Azure Service Health",
      module: "Pré-requisitos"
    },
    {
      id: 37,
      question: "Você está criando um script de automação usando Azure CLI e precisa obter uma lista simples, em formato JSON, de todos os Grupos de Recursos existentes na sua assinatura atual para realizar uma contagem. Qual comando você deve executar?",
      options: ["az group list", "az resource list", "az show groups", "az rg get"],
      correctAnswer: 0,
      explanation: "O comando `az group list` lista todos os Grupos de Recursos da assinatura atual. O retorno padrão é um array JSON. `az resource list` lista recursos individuais, não os grupos. `az show` geralmente requer um nome específico. Referência: Microsoft Learn - az group list",
      module: "Pré-requisitos"
    },
    {
      id: 38,
      question: "Uma grande corporação precisaProvisionar 50 novas assinaturas para diferentes unidades de negócio. Cada assinatura deve nascer 'pronta', com a mesma configuração de Redes Virtuais, Definições de RBAC e Políticas de Segurança já aplicadas automaticamente. A definição deve ser versionada. Qual tecnologia de orquestração é a mais indicada para garantir essa padronização em escala?",
      options: ["Azure Blueprints", "ARM Templates isolados", "Scripts PowerShell manuais", "Clonagem de Assinatura via Portal"],
      correctAnswer: 0,
      explanation: "Azure Blueprints permite definir um pacote repetível de artefatos do Azure (ARM Templates, Policies, RBAC, Resource Groups) que pode ser aplicado a novas assinaturas para configurar e padronizar ambientes rapidamente. É ideal para governança e 'landing zones'. ARM templates focam em recursos, Blueprints orquestram o ambiente todo. Referência: Microsoft Learn - Azure Blueprints",
      module: "Pré-requisitos"
    },
    {
      id: 39,
      question: "Seu pipeline de deployment falhou porque o compilador de Bicep não está instalado no agente de build. Você tem um arquivo 'template.json' que foi gerado anteriormente a partir de um arquivo Bicep. Você precisa realizar o deploy imediatamente usando este arquivo json. Qual é o formato nativo que o Azure Resource Manager aceita para deployments?",
      options: ["JSON", "YAML", "XML", "Bicep (compilado)"],
      correctAnswer: 0,
      explanation: "O Azure Resource Manager (ARM) aceita nativamente arquivos no formato JSON. Bicep é uma linguagem de abstração que deve ser 'transpilada' (compilada) para JSON antes de ser enviada ao ARM. Portanto, se você já tem o JSON, pode fazer o deploy diretamente sem precisar do compilador Bicep. Referência: Microsoft Learn - ARM Template structure",
      module: "Pré-requisitos"
    },
    {
      id: 40,
      question: "A fatura mensal do Azure atingiu $85k, estourando o orçamento de $50k. O CFO exige uma solução imediata para visualizar os custos atuais, identificar tendências de gastos futuros (forecast) e configurar alertas automáticos para notificar os gerentes quando o orçamento de seus departamentos atingir 80% do limite. Qual ferramenta nativa deve ser utilizada?",
      options: ["Azure Cost Management + Billing", "Azure Pricing Calculator", "Azure Advisor", "Azure Monitor"],
      correctAnswer: 0,
      explanation: "Azure Cost Management + Billing é a ferramenta dedicada para monitorar, alocar e otimizar os custos da nuvem. Ela permite criar Budgets (Orçamentos) com alertas, visualizar gastos por diversos filtros e ver projeções de custos. Pricing Calculator é para estimativas prévias. Referência: Microsoft Learn - Azure Cost Management",
      module: "Pré-requisitos"
    },
    {
      id: 41,
      question: "Um novo engenheiro DevOps, com forte background em Linux, está acessando o Azure Cloud Shell pela primeira vez. O sistema solicita que ele escolha o ambiente de shell padrão. Quais são as opções de ambiente que ele pode escolher para trabalhar no Cloud Shell?",
      options: ["Bash ou PowerShell", "Apenas Bash", "Apenas PowerShell", "CMD ou PowerShell"],
      correctAnswer: 0,
      explanation: "No primeiro acesso, o Azure Cloud Shell pede ao usuário para escolher entre Bash ou PowerShell. Essa escolha define o shell padrão, mas pode ser alternada a qualquer momento no menu superior do Cloud Shell. Ambos os ambientes são Linux-based (o PowerShell roda sobre Linux no Cloud Shell). Referência: Microsoft Learn - Cloud Shell Quickstart",
      module: "Pré-requisitos"
    },
    {
      id: 42,
      question: "Ao iniciar o Azure Cloud Shell pela primeira vez em uma nova assinatura, você recebe a mensagem: 'No storage mounted'. O sistema solicita a criação de uma Storage Account. Por que essa Storage Account é necessária se o Cloud Shell é apenas um terminal?",
      options: ["Para persistir arquivos do diretório $HOME (scripts, configs) entre as sessões", "Para armazenar os logs de auditoria do Azure", "Para salvar o histórico de comandos apenas", "Para pagar pelo uso de computação do Cloud Shell"],
      correctAnswer: 0,
      explanation: "Como o Cloud Shell é efêmero (o contêiner é destruído após o uso), ele precisa de um local externo persistente para salvar seus arquivos pessoais (scripts, .bashrc, perfil do PowerShell). O Azure monta um File Share dessa Storage Account como seu drive 'clouddrive' ou $HOME para garantir que seus dados estejam lá no próximo login. Referência: Microsoft Learn - Persist files in Cloud Shell",
      module: "Pré-requisitos"
    },
    {
      id: 43,
      question: "Sua equipe de desenvolvimento reclama da complexidade e verbosidade dos arquivos JSON dos ARM Templates ('fuga de colchetes', vírgulas, aspas excessivas). Eles querem uma linguagem mais moderna e limpa para definir a infraestrutura, mas que seja 100% compatível com o ecossistema Azure. Qual é a principal vantagem de adotar o Azure Bicep?",
      options: ["Sintaxe simplificada, menos código para o mesmo resultado e melhor experiência de desenvolvimento", "Suporte a provedores de nuvem concorrentes (AWS, GCP)", "Não precisa ser compilado para JSON", "Executa mais rápido que ARM Templates"],
      correctAnswer: 0,
      explanation: "O principal objetivo do Bicep é melhorar a experiência do desenvolvedor (DX) reduzindo drasticamente a complexidade da sintaxe em comparação ao JSON ARM, mantendo 100% das capacidades. Ele é mais limpo, modular e fácil de ler. Ele NÃO é multi-cloud e ainda compila para JSON no background. Referência: Microsoft Learn - Bicep Overview",
      module: "Pré-requisitos"
    },
    {
      id: 44,
      question: "Como administrador global, você precisa responder rapidamente à pergunta: 'Quais das minhas 5.000 VMs, espalhadas por 50 assinaturas diferentes, não possuem Backup habilitado?'. Usar o Portal para navegar assinatura por assinatura é inviável. Qual serviço permite executar consultas complexas (queries) em todos os recursos de todas as assinaturas em segundos?",
      options: ["Azure Resource Graph", "Azure Monitor", "Log Analytics", "Azure Advisor"],
      correctAnswer: 0,
      explanation: "O Azure Resource Graph é um serviço projetado para permitir a exploração de recursos em escala. Ele permite executar queries KQL (Kusto Query Language) que varrem instantaneamente todo o inventário de recursos do Azure, cruzando múltiplas assinaturas, para obter insights de configuração e inventário. Referência: Microsoft Learn - Azure Resource Graph",
      module: "Pré-requisitos"
    },
    {
      id: 45,
      question: "Você está tentando usar o Azure Resource Graph Explorer para listar todas as VMs. Você tenta usar uma sintaxe SQL ('SELECT * FROM resources...'), mas recebe um erro de sintaxe. Qual linguagem de consulta é utilizada nativamente pelo Azure Resource Graph?",
      options: ["Kusto Query Language (KQL)", "Structured Query Language (SQL)", "Graph Query Language (GraphQL)", "PowerShell"],
      correctAnswer: 0,
      explanation: "O Azure Resource Graph utiliza a Kusto Query Language (KQL), a mesma linguagem poderosa usada no Azure Data Explorer e no Log Analytics. Uma query típica seria: `Resources | where type == 'microsoft.compute/virtualmachines'`. Referência: Microsoft Learn - KQL support in Resource Graph",
      module: "Pré-requisitos"
    },
    {
      id: 46,
      question: "Um Grupo de Recursos possui um lock do tipo 'CanNotDelete' aplicado. Um administrador com permissões de Owner tenta excluir o Grupo de Recursos usando a Azure CLI e recebe um erro. Qual é o procedimento correto para conseguir excluir este grupo?",
      options: ["Remover o Lock explicitamente e depois excluir o Grupo de Recursos", "Usar o parâmetro --force no comando de exclusão", "Apenas elevar seus privilégios no PIM", "O Grupo de Recursos nunca poderá ser excluído"],
      correctAnswer: 0,
      explanation: "Locks de recursos têm precedência sobre permissões RBAC. Mesmo um Owner não pode deletar um recurso bloqueado sem antes REMOVER o bloqueio. Isso é intencional para evitar acidentes. O fluxo é: 1. Remover Lock -> 2. Executar delete. Não existe parâmetro force que ignore locks. Referência: Microsoft Learn - Resource Locks",
      module: "Pré-requisitos"
    },
    {
      id: 47,
      question: "Uma grande empresa precisa criar sua 11ª assinatura do Azure. Ao tentar criar via portal, eles recebem um aviso de que o limite padrão foi atingido. Considerando a arquitetura do Azure, qual é a natureza desse limite de assinaturas por Tenant?",
      options: ["É um limite 'soft' (quota) que pode ser aumentado mediante solicitação ao suporte", "É um limite rígido (hard limit) de 10 assinaturas por conta", "Depende do tipo de cartão de crédito", "Não existe limite, é erro do sistema"],
      correctAnswer: 0,
      explanation: "Os limites de recursos e assinaturas no Azure são geralmente 'soft limits' (quotas) definidos por padrão para proteger contra uso indevido. Grandes organizações podem ter centenas ou milhares de assinaturas. Para aumentar o limite, basta abrir um ticket de suporte solicitando o aumento de quota. Referência: Microsoft Learn - Azure subscription limits",
      module: "Pré-requisitos"
    },
    {
      id: 48,
      question: "Um desenvolvedor injetou as credenciais (Client ID e Secret) de um Service Principal diretamente no código da aplicação (hardcoded) para acessar um Key Vault. A equipe de segurança identificou isso como uma vulnerabilidade crítica. Qual é a solução recomendada pelo Azure para permitir que a aplicação acesse o Key Vault SEM gerenciar credenciais no código?",
      options: ["Managed Identity (Identidade Gerenciada)", "Azure Key Vault Rotation", "Certificate-based auth", "SAS Tokens"],
      correctAnswer: 0,
      explanation: "Managed Identities (Identidades Gerenciadas) eliminam a necessidade de os desenvolvedores gerenciarem credenciais. O Azure gerencia automaticamente a identidade do recurso (como uma VM ou App Service) e a autenticação no Azure AD. O código apenas solicita um token, sem expor senhas. Referência: Microsoft Learn - What are managed identities?",
      module: "Pré-requisitos"
    },
    {
      id: 49,
      question: "Você precisa configurar identidades gerenciadas para acessar um Cofre de Chaves. Cenário A: Uma identidade que deve existir apenas enquanto a VM existir (ciclo de vida atrelado). Cenário B: Uma identidade que possa ser compartilhada por múltiplas VMs e tenha ciclo de vida independente. Quais tipos de identidade correspondem a A e B, respectivamente?",
      options: ["A: System-assigned; B: User-assigned", "A: User-assigned; B: System-assigned", "Ambos são System-assigned", "Ambos são User-assigned"],
      correctAnswer: 0,
      explanation: "System-assigned Managed Identity (Atribuída pelo Sistema) é criada NO recurso e morre COM o recurso (relação 1:1, ciclo de vida atrelado). User-assigned Managed Identity (Atribuída pelo Usuário) é criada como um recurso independente e pode ser atribuída a múltiplos recursos (relação 1:N, ciclo de vida independente). Referência: Microsoft Learn - Managed Identity Types",
      module: "Pré-requisitos"
    },
    {
      id: 50,
      question: "No contexto da hierarquia do Azure e do Microsoft Entra ID (Azure AD), o que define um 'Azure Tenant'?",
      options: ["Uma instância dedicada e isolada do Microsoft Entra ID que representa uma organização", "O mesmo que uma Assinatura (Subscription)", "Um usuário com permissões globais", "Uma região física de datacenters"],
      correctAnswer: 0,
      explanation: "Um Tenant (Inquilino) do Azure é uma instância dedicada do diretório do Microsoft Entra ID (Azure AD) que sua organização recebe quando se inscreve em um serviço de nuvem da Microsoft (Azure, Microsoft 365). Ele representa a identidade e a segurança da organização no topo da hierarquia, podendo conter múltiplas assinaturas. Referência: Microsoft Learn - What is an Azure tenant?",
      module: "Pré-requisitos"
    }
  ],
  
  modulo2: [
    {
      id: 11,
      question: "Um usuário tenta acessar o Portal do Azure usando suas credenciais corporativas sincronizadas, mas recebe a mensagem de erro: 'User not found in directory'. O administrador confirma que a conta existe no Active Directory local (on-premises) e que a sincronização deveria estar ocorrendo. Qual serviço é o responsável final pelo armazenamento e gerenciamento das identidades na nuvem do Azure, onde o usuário deve existir?",
      options: ["Microsoft Entra ID (anteriormente Azure AD)", "Azure Key Vault", "Active Directory Domain Services (AD DS) local", "Azure Policy"],
      correctAnswer: 0,
      explanation: "O Microsoft Entra ID (Azure AD) é o provedor de identidade e diretório baseado em nuvem. Mesmo com sincronização, o usuário precisa existir no diretório do Entra ID para autenticar no Azure. O AD on-prem é a fonte, mas o Entra ID é o autenticador na nuvem. Erros de 'not found' indicam falha na sincronização (Azure AD Connect) ou provisionamento. Referência: Microsoft Learn - What is Microsoft Entra ID?",
      module: "Identidades e Governança"
    },
    {
      id: 12,
      question: "Você precisa delegar permissões para duas equipes de operações: A 'Equipe Dev' precisa ler segredos no Key Vault mas não pode alterá-los. A 'Equipe Ops' precisa reiniciar máquinas virtuais mas não pode excluí-las. Você quer evitar a complexidade de criar funções personalizadas. Qual funcionalidade do Azure deve ser usada?",
      options: ["Azure RBAC (Role-Based Access Control) com funções Built-in", "Shared Access Signatures (SAS)", "Azure AD Groups com permissão de Owner", "Tags de recurso"],
      correctAnswer: 0,
      explanation: "O Azure RBAC possui centenas de funções 'Built-in' (nativas) que cobrem a maioria dos cenários comuns. Exemplos: 'Key Vault Secrets User' (leitura de secrets) e 'Virtual Machine Contributor' (reiniciar VMs, embora este permita muito mais, para reiniciar estritamente sem delete seria melhor uma custom role ou uma built-in mais específica se houver, mas entre as opções, RBAC Built-in é a resposta correta para granularidade sem customização). Referência: Microsoft Learn - Azure RBAC Built-in roles",
      module: "Identidades e Governança"
    },
    {
      id: 13,
      question: "O proprietário (Owner) de uma assinatura vai sair de férias e precisa delegar TOTAL controle a um substituto. Esse substituto deve ser capaz de criar recursos, gerenciar custos e, crucialmente, ATRIBUIR permissões a outros usuários. A função 'Contributor' foi considerada, mas ela não permite o gerenciamento de acesso. Qual função deve ser atribuída?",
      options: ["Owner", "Contributor", "User Access Administrator", "Reader"],
      correctAnswer: 0,
      explanation: "A principal diferença entre 'Owner' e 'Contributor' é que o Owner pode gerenciar o acesso (atribuir RBAC) aos recursos. O Contributor pode gerenciar todos os recursos, mas não pode dar permissão a outros usuários. User Access Administrator gerencia APENAS acesso, não os recursos em si. Portanto, para controle total, a função é Owner. Referência: Microsoft Learn - Owner vs Contributor",
      module: "Identidades e Governança"
    },
    {
      id: 14,
      question: "Sua organização exige conformidade estrita: todas as VMs devem ser criadas na região 'Brazil South', não podem ter IPs públicos e devem ter a tag 'Department' preenchida. Você precisa garantir que qualquer tentativa de criar um recurso fora desses padrões seja BLOQUEADA automaticamente. Além disso, você quer auditar os recursos existentes. Qual serviço implementa esse controle?",
      options: ["Azure Policy", "Azure RBAC", "Network Security Groups (NSG)", "Azure Blueprints"],
      correctAnswer: 0,
      explanation: "Azure Policy é o serviço de governança usado para impor padrões organizacionais e avaliar conformidade em escala. Com efeitos como 'Deny', ele bloqueia proativamente o deployment de recursos fora do padrão. O RBAC controla QUEM pode fazer, a Policy controla O QUE pode ser feito. Referência: Microsoft Learn - Azure Policy Overview",
      module: "Identidades e Governança"
    },
    {
      id: 15,
      question: "Você tem uma equipe de 20 desenvolvedores que precisam da função 'Contributor' no Grupo de Recursos 'RG-Dev'. Atribuir a função individualmente para cada usuário seria trabalhoso e difícil de auditar. Qual é a prática recomendada pela Microsoft para gerenciar esse acesso de forma eficiente?",
      options: ["Criar um Grupo no Microsoft Entra ID, adicionar os usuários ao grupo e atribuir a função RBAC ao grupo", "Atribuir a função individualmente para cada usuário (20 atribuições)", "Compartilhar uma única conta de serviço entre os desenvolvedores", "Criar uma Custom Role específica para cada desenvolvedor"],
      correctAnswer: 0,
      explanation: "A melhor prática é gerenciar o acesso através de Grupos do Entra ID (Azure AD). Você faz a atribuição de função (Role Assignment) UMA vez para o grupo. Quando um novo desenvolvedor entra ou sai, você apenas atualiza a associação ao grupo, sem mexer nas permissões do Azure. Contas compartilhadas são inseguras e anti-pattern. Referência: Microsoft Learn - RBAC Best Practices",
      module: "Identidades e Governança"
    },
    {
      id: 16,
      question: "O Helpdesk da sua empresa está sobrecarregado com chamados de 'esqueci minha senha'. O CIO estabeleceu uma meta de reduzir esses chamados em 90%. Você precisa permitir que os próprios usuários redefinam suas senhas do Microsoft Entra ID de forma segura, usando métodos de verificação como SMS ou App Authenticator. Qual recurso deve ser habilitado?",
      options: ["Self-Service Password Reset (SSPR)", "Azure AD Connect", "Password Hash Sync", "Multi-Factor Authentication (MFA) apenas"],
      correctAnswer: 0,
      explanation: "O Self-Service Password Reset (SSPR) permite que os usuários redefinam, desbloqueiem ou alterem suas senhas sem envolver o suporte técnico, após confirmarem sua identidade via métodos de autenticação configurados (celular, email alternativo, app). Isso reduz drasticamente o volume de tickets de suporte. Referência: Microsoft Learn - SSPR",
      module: "Identidades e Governança"
    },
    {
      id: 17,
      question: "Sua empresa multinacional possui 50 assinaturas Azure divididas por departamentos. Você precisa aplicar a política 'Require Cost Center Tag' em TODAS as assinaturas de uma só vez, e garantir que qualquer nova assinatura criada no futuro também receba essa política automaticamente. Como você deve estruturar seus recursos para conseguir isso?",
      options: ["Utilizar Management Groups (Grupos de Gerenciamento) e aplicar a política no nível raiz ou apropriado da hierarquia", "Aplicar a política manualmente em cada assinatura via script", "Usar Azure Blueprints em cada assinatura", "Criar um ticket de suporte para a Microsoft aplicar globalmente"],
      correctAnswer: 0,
      explanation: "Management Groups fornecem um escopo de governança acima das assinaturas. Políticas aplicadas em um Management Group são herdadas automaticamente por todas as Assinaturas e Resource Groups abaixo dele. Isso garante governança centralizada e automática para o ambiente todo. Referência: Microsoft Learn - Azure Management Groups",
      module: "Identidades e Governança"
    },
    {
      id: 18,
      question: "Um desenvolvedor Sênior precisa de permissão para criar e gerenciar todos os tipos de recursos (VMs, SQL, Storage, App Services) dentro do Grupo de Recursos 'RG-Laboratorio'. No entanto, por razões de segurança e conformidade, ele NÃO deve ter permissão para conceder acesso a outros usuários. Qual função Built-in atende exatamente a esse requisito?",
      options: ["Contributor", "Owner", "Reader", "User Access Administrator"],
      correctAnswer: 0,
      explanation: "A função Contributor concede acesso total para gerenciar todos os recursos do Azure, mas NÃO permite atribuir funções no RBAC (gerenciar acesso). Essa é a distinção chave para a função Owner. Reader é apenas leitura. User Access Administrator é apenas para gerenciar acesso. Referência: Microsoft Learn - Built-in Roles Contributor",
      module: "Identidades e Governança"
    },
    {
      id: 19,
      question: "A equipe de Segurança da Informação detectou tentativas de login suspeitas vindas de países onde a empresa não opera. Eles exigem uma regra que bloqueie automaticamente acessos vindos dessas regiões de alto risco, e exija MFA para qualquer acesso vindo de dispositivos não gerenciados. Tudo isso deve ser feito sem alterar o código das aplicações. Qual recurso do Entra ID P1/P2 deve ser usado?",
      options: ["Conditional Access Policies", "Network Security Groups (NSG)", "Azure Firewall", "Application Gateway WAF"],
      correctAnswer: 0,
      explanation: "O Acesso Condicional (Conditional Access) é o 'motor de decisão' do Zero Trust no Entra ID. Ele avalia sinais (localização do usuário, estado do dispositivo, risco da aplicação) e toma decisões de aplicação de políticas (Bloquear, Permitir, Exigir MFA) antes de conceder acesso. NSG e Firewall são controles de rede, não de identidade. Referência: Microsoft Learn - Conditional Access",
      module: "Identidades e Governança"
    },
    {
      id: 20,
      question: "Considere a hierarquia: 'Root Management Group' -> 'Production MG' -> 'Subscription A' -> 'RG-Web' -> 'VM-01'. Se você aplicar uma Azure Policy de 'Deny Public IP' no nível 'Production MG', a VM-01 no 'RG-Web' será afetada? E qual é a profundidade máxima suportada para a hierarquia de Management Groups?",
      options: ["Sim, a VM será afetada (Herança). Profundidade máxima de 6 níveis.", "Não, políticas não herdam. Profundidade de 10 níveis.", "Sim, mas eu posso desabilitar a herança. Ilimitado.", "Não, apenas novas VMs. 3 níveis."],
      correctAnswer: 0,
      explanation: "As políticas no Azure são herdadas hierarquicamente de cima para baixo. Uma política no Management Group afeta todos os filhos. A profundidade máxima da hierarquia de Management Groups é de 6 níveis (sem contar o Root Level), para evitar complexidade excessiva. Referência: Microsoft Learn - Management Group Hierarchy",
      module: "Identidades e Governança"
    },
    {
      id: 61,
      question: "Um desenvolvedor precisa reiniciar especificamente a máquina virtual 'VM-ERP-01' para aplicar uma configuração. O Grupo de Recursos contém outras 50 VMs críticas que ele NÃO deve acessar. Seguindo o princípio do menor privilégio, em qual escopo (scope) você deve atribuir a função de 'Virtual Machine Contributor'?",
      options: ["No recurso individual (VM-ERP-01)", "No Resource Group", "Na Subscription", "No Management Group"],
      correctAnswer: 0,
      explanation: "O Azure RBAC é aditivo. Se você der permissão no Resource Group, ele terá acesso a TODAS as VMs. Para seguir o princípio do menor privilégio, você deve atribuir a permissão APENAS no recurso específico que ele precisa gerenciar, ou seja, no escopo da VM individual. Referência: Microsoft Learn - Scope and RBAC",
      module: "Identidades e Governança"
    },
    {
      id: 62,
      question: "Após uma auditoria de segurança, descobriu-se que 40% dos usuários utilizam senhas fracas ou reutilizadas. Para mitigar o risco de comprometimento de credenciais, a empresa decidiu que 'saber a senha' não é mais suficiente para autenticar. É necessário exigir uma 'prova' adicional de identidade. Qual tecnologia deve ser imposta para todos os usuários?",
      options: ["Multi-Factor Authentication (MFA)", "Complexidade de senha de 20 caracteres", "Troca de senha a cada 30 dias", "Login restrito por IP"],
      correctAnswer: 0,
      explanation: "MFA (Multi-Factor Authentication) exige mais de um método de verificação: algo que você sabe (senha) E algo que você tem (celular/token) ou é (biometria). É a medida mais eficaz contra roubo de credenciais/phishing. Apenas aumentar complexidade ou rotação de senha não protege contra vazamentos ou keyloggers. Referência: Microsoft Learn - MFA mechanics",
      module: "Identidades e Governança"
    },
    {
      id: 63,
      question: "Um auditor externo foi contratado para revisar a conformidade da infraestrutura do Azure. Ele precisa visualizar configurações de todos os recursos, ler logs e métricas, mas NÃO deve ter permissão para alterar nenhuma configuração, nem criar ou deletar recursos. Qual função Built-in é a mais adequada?",
      options: ["Reader", "Contributor", "Monitoring Reader", "Security Admin"],
      correctAnswer: 0,
      explanation: "A função 'Reader' (Leitor) permite visualizar todos os recursos de um escopo, incluindo suas configurações e status, mas não permite nenhuma ação de escrita/modificação. 'Monitoring Reader' é mais restrito (apenas métricas/logs, pode não ver configurações de recursos). 'Security Admin' é excessivo. Referência: Microsoft Learn - Reader Role",
      module: "Identidades e Governança"
    },
    {
      id: 64,
      question: "Sua empresa tem um requisito muito específico: um grupo de DBAs precisa gerenciar bancos de dados SQL (criar, deletar, backup), mas não pode tocar em VMs, Storage ou Redes no mesmo Resource Group. Nenhuma função Built-in corresponde a essa combinação exata de permissões. Como você resolve isso?",
      options: ["Criar uma Custom Role (Função Personalizada)", "Dar a função Contributor e pedir para terem cuidado", "Dar a função Owner apenas nos bancos de dados (trabalhoso)", "Usar Azure Policy para bloquear acesso a outros recursos"],
      correctAnswer: 0,
      explanation: "Quando as funções Built-in não atendem a um requisito específico de granularidade, a solução é criar uma Custom Role. Você define no JSON da role exatamente as 'actions' permitidas (Ex: Microsoft.Sql/*) e 'notActions' proibidas. Isso garante o princípio do menor privilégio onde o built-in falha. Referência: Microsoft Learn - Custom Roles",
      module: "Identidades e Governança"
    },
    {
      id: 65,
      question: "Uma grande empresa descentralizada acabou criando excessivas funções personalizadas, chegando a 4.950 roles no tenant. Um administrador tenta criar uma nova Custom Role para um projeto IoT e recebe um erro de 'Quota Exceeded'. Qual é o limite técnico de Custom Roles por Tenant no Azure AD?",
      options: ["5.000 funções personalizadas", "2.000 funções personalizadas", "Ilimitado", "50 funções personalizadas"],
      correctAnswer: 0,
      explanation: "O limite técnico (hard limit) para Custom Roles em um único diretório do Microsoft Entra ID é de 5.000. Embora alto, em ambientes grandes e desorganizados ele pode ser atingido. A solução é auditar e deletar roles não utilizadas ou consolidar permissões. Referência: Microsoft Learn - Azure AD service limits",
      module: "Identidades e Governança"
    },
    {
      id: 66,
      question: "Você tem máquinas virtuais de produção que precisam ser acessadas via RDP/SSH ocasionalmente para suporte. No entanto, deixar as portas 3389/22 abertas para a internet 24/7 é um risco de segurança inaceitável (brute force). Você quer que as portas permaneçam fechadas por padrão e só abram mediante solicitação aprovada, por um tempo limitado. Qual recurso do Microsoft Defender for Cloud faz isso?",
      options: ["Just-In-Time (JIT) VM Access", "Network Security Groups (NSG)", "Azure Bastion", "VPN Gateway"],
      correctAnswer: 0,
      explanation: "O acesso JIT (Just-In-Time) bloqueia as portas de gerenciamento no NSG por padrão. Quando um usuário precisa de acesso, ele solicita via portal. Se aprovado (automática ou manualmente), o Azure abre a porta no NSG apenas para o IP do solicitante e apenas pela duração especificada (ex: 2 horas), fechando automaticamente depois. Referência: Microsoft Learn - JIT VM Access",
      module: "Identidades e Governança"
    },
    {
      id: 67,
      question: "Uma auditoria de conformidade apontou que 10 usuários possuem a função 'Owner' permanentemente na assinatura de Produção, o que é um risco alto. A recomendação é remover o acesso permanente e implementar um sistema onde eles solicitem a elevação de privilégio apenas quando necessário, com fluxo de aprovação e auditoria. Qual serviço do Entra ID P2 implementa essa funcionalidade?",
      options: ["Privileged Identity Management (PIM)", "Identity Protection", "Conditional Access", "Access Reviews"],
      correctAnswer: 0,
      explanation: "O Privileged Identity Management (PIM) é projetado para minimizar riscos de acesso privilegiado. Ele converte atribuições 'Permanentes' em 'Elegíveis'. O usuário não tem o poder o tempo todo; ele precisa 'Ativar' a role, fornecendo justificativa, tempo de duração e, opcionalmente, requerendo aprovação. Referência: Microsoft Learn - What is PIM?",
      module: "Identidades e Governança"
    },
    {
      id: 68,
      question: "O usuário 'Admin2' tem uma atribuição 'Elegível' (Eligible) para a função de Owner em uma assinatura, configurada via PIM. Ele precisa com urgência excluir um Resource Group problemático, mas no momento seu acesso está como 'Membro sem acesso'. O que ele deve fazer para ganhar as permissões de Owner imediatamente?",
      options: ["Acessar o PIM no portal e 'Ativar' sua função", "Solicitar ao suporte da Microsoft", "Pedir a senha do Owner permanente", "Usar o comando az login --scope owner"],
      correctAnswer: 0,
      explanation: "Sendo 'Elegível', o usuário já tem o direito pré-aprovado (ou sujeito a aprovação) de assumir a função. Ele deve ir à lâmina do PIM no Portal do Azure, selecionar a role e clicar em 'Activate'. Após preencher os requisitos (MFA, justificativa), a role torna-se ativa por um período (ex: 4 horas). Referência: Microsoft Learn - Activate PIM roles",
      module: "Identidades e Governança"
    },
    {
      id: 69,
      question: "Você está configurando um pipeline de CI/CD externo (ex: Jenkins ou GitHub Actions fora do Azure) que precisa implantar recursos na sua assinatura. Por segurança, você NÃO deve usar uma conta de usuário pessoal (que tem senha e MFA, quebrando a automação). Qual objeto de identidade você deve criar no Azure AD para permitir que essa ferramenta externa se autentique?",
      options: ["Service Principal (Objeto de Entidade de Serviço)", "Managed Identity", "Conta de Convidado (Guest)", "Grupo de Segurança"],
      correctAnswer: 0,
      explanation: "Um Service Principal (Entidade de Serviço) é a identidade utilizada por aplicações, serviços e ferramentas de automação para acessar o Azure. É o equivalente a uma 'conta de serviço'. Para ferramentas externas ao Azure, você cria um Service Principal e usa o App ID e um Segredo (ou Certificado) para autenticação silenciosa. (Managed Identity seria preferível SE a ferramenta rodasse DENTRO do Azure). Referência: Microsoft Learn - Application and Service Principal Objects",
      module: "Identidades e Governança"
    },
    {
      id: 70,
      question: "Você precisa automatizar a atribuição de permissões via script PowerShell. O objetivo é conceder a função 'Reader' para o grupo 'Auditores' no escopo do Resource Group 'RG-Logs'. Qual cmdlet do módulo Az PowerShell realiza essa operação?",
      options: ["New-AzRoleAssignment", "Set-AzContext", "Add-AzADGroupMember", "Update-AzRoleDefinition"],
      correctAnswer: 0,
      explanation: "O cmdlet `New-AzRoleAssignment` é o comando utilizado para criar uma nova atribuição de função (Role Assignment). A sintaxe típica é: `New-AzRoleAssignment -ObjectId <IdDoGrupo> -RoleDefinitionName 'Reader' -ResourceGroupName 'RG-Logs'`. Os outros comandos têm propósitos diferentes (contexto, membro de grupo, definição de role). Referência: Microsoft Learn - New-AzRoleAssignment",
      module: "Identidades e Governança"
    },
    {
      id: 71,
      question: "Você aplicou uma política com o efeito 'Deny' no escopo de uma assinatura para permitir apenas deploy na região 'Brazil South'. Um administrador tenta criar uma VM na região 'East US' via Azure CLI. Qual será o comportamento observado na hora da execução do comando?",
      options: ["O Deployment será bloqueado imediatamente e retornará um erro de 'Request Disallowed By Policy'", "A VM será criada, mas marcada como 'Non-Compliant' no painel depois de 24h", "A VM será criada, mas desativada", "A política pedirá confirmação extra ao administrador"],
      correctAnswer: 0,
      explanation: "O efeito 'Deny' é impeditivo. Ele avalia a solicitação durante o momento da criação ou atualização (ARM Request). Se a solicitação não atender aos critérios da política, o Azure Resource Manager REJEITA a operação antes mesmo de iniciar o provisionamento, retornando um erro 403 (Forbidden) específico de Policy. Referência: Microsoft Learn - Policy Deny Effect",
      module: "Identidades e Governança"
    },
    {
      id: 72,
      question: "Você configurou uma política para auditar se os servidores SQL estão com criptografia TDE habilitada (Efeito: Audit). O relatório de conformidade mostra 20 servidores 'Non-Compliant'. Um desenvolvedor cria hoje um novo servidor SQL sem criptografia. O que acontece no momento da criação?",
      options: ["O servidor é criado com sucesso, mas será marcado como 'Non-Compliant' e o evento será logado", "A criação é bloqueada", "O servidor é criado e a criptografia é habilitada automaticamente", "O servidor é deletado automaticamente após 1 hora"],
      correctAnswer: 0,
      explanation: "O efeito 'Audit' NÃO bloqueia a criação de recursos. Ele permite que a operação prossiga, mas registra um evento de aviso no Activity Log e marca o recurso como não compatível no painel de Compliance do Azure Policy. É usado para ganhar visibilidade sem interromper operações (Soft enforcement). Referência: Microsoft Learn - Policy Audit Effect",
      module: "Identidades e Governança"
    },
    {
      id: 73,
      question: "Sua organização precisa atender à certificação ISO 27001. Isso requer a aplicação de mais de 50 políticas diferentes (auditoria de logs, restrição de SKU, criptografia, backup, etc.). Atribuir essas 50 políticas individualmente a cada assinatura seria ingovernável. Qual objeto do Azure Policy permite agrupar todas essas definições para uma atribuição única?",
      options: ["Initiative Definition (Initiative / Policy Set)", "Policy Group", "Management Group Bundle", "Azure Blueprint"],
      correctAnswer: 0,
      explanation: "Uma 'Initiative' (ou Policy Set Definition) é uma coleção de definições de política que são agrupadas para atingir um objetivo singular de governança. Em vez de fazer 50 atribuições, você cria 1 Iniciativa contendo as 50 políticas e atribui a Iniciativa. Isso simplifica drasticamente o gerenciamento e a visualização da conformidade. Referência: Microsoft Learn - Initiatives",
      module: "Identidades e Governança"
    },
    {
      id: 74,
      question: "Você é responsável pela governança de 50 assinaturas Azure. A equipe de segurança exige que todas as assinaturas sigam o benchmark CIS (Center for Internet Security), que consiste em dezenas de regras. Como você deve implementar isso de forma escalável e com fácil manutenção?",
      options: ["Atribuir a 'Built-in Initiative' do CIS Benchmark no nível do Management Group Raiz", "Criar um script PowerShell que roda diariamente e verifica cada assinatura", "Atribuir cada política manualmente em cada assinatura", "Usar o Azure Monitor para alertar sobre violações"],
      correctAnswer: 0,
      explanation: "O Azure já fornece Iniciativas 'Built-in' (nativas) para padrões de conformidade comuns como CIS, NIST, ISO 27001 e HIPAA. A melhor prática é atribuir essa Iniciativa pronta no nível mais alto da hierarquia (Management Group) para que todas as assinaturas herdem as regras automaticamente. Referência: Microsoft Learn - Regulatory Compliance",
      module: "Identidades e Governança"
    },
    {
      id: 75,
      question: "Você está criando uma Initiative personalizada para governança de custos. Você planeja adicionar 600 definições de política dentro dessa única iniciativa. Ao tentar salvar, você não encontra um erro explícito de cota na documentação, mas se preocupa com a performance. Qual é a recomendação prática sobre o tamanho de Initiatives?",
      options: ["Embora não haja um limite 'hard' estrito documentado para falhar o save, iniciativas muito grandes podem impactar o tempo de avaliação. O ideal é agrupar logicamente.", "O limite é de 10 políticas por iniciativa", "O limite é de 50 políticas por iniciativa", "Iniciativas não têm limite físico algum"],
      correctAnswer: 0,
      explanation: "Não há um limite rígido pequeno (como 10 ou 50) documentado que impeça a criação, iniciativas de compliance complexas (como a do CIS ou NIST) frequentemente contêm mais de 100 políticas. O sistema é projetado para lidar com isso, embora a avaliação de compliance possa levar mais tempo quanto mais complexa for a iniciativa. Referência: Microsoft Learn - Policy Limits",
      module: "Identidades e Governança"
    },
    {
      id: 751,
      question: "Qual é a principal diferença entre uma 'Policy Definition' e uma 'Initiative Definition'?",
      options: ["Policy é uma regra individual; Initiative é um grupo de Policies", "Policy é para segurança; Initiative é para custo", "Policy é gratuita; Initiative é paga", "Não há diferença, são sinônimos"],
      correctAnswer: 0,
      explanation: "Uma Policy Definition expressa uma única regra (ex: Exigir HTTPS). Uma Initiative Definition (Set Definition) agrupa múltiplas policies para cobrir um cenário mais amplo (ex: Conformidade com PCI-DSS, que exige HTTPS, Firewall, Logs, etc.). Referência: Microsoft Learn - Policy vs Initiative",
      module: "Identidades e Governança"
    },
    {
      id: 76,
      question: "A empresa 'Contoso' quer colaborar com a empresa 'Fabrikam'. A Contoso quer dar acesso a um aplicativo em seu Azure AD para os funcionários da Fabrikam, mas NÃO quer criar contas separadas nem gerenciar senhas para eles. Os funcionários da Fabrikam devem usar suas próprias credenciais corporativas existentes. Qual funcionalidade habilita esse cenário?",
      options: ["Azure AD B2B (Business-to-Business) Collaboration", "Azure AD B2C (Business-to-Consumer)", "Azure AD Connect", "Trust de Floresta do Active Directory"],
      correctAnswer: 0,
      explanation: "Azure AD B2B permite convidar usuários de outra organização (Guest Users) para o seu tenant. Eles se autenticam no diretório DELES (Home Tenant) e recebem um token para acessar os recursos no SEU, mantendo o controle de acesso do seu lado sem gestão de credenciais. Referência: Microsoft Learn - B2B Collaboration",
      module: "Identidades e Governança"
    },
    {
      id: 761,
      question: "Quando você convida um usuário externo via Azure AD B2B para acessar seus recursos, como esse usuário aparece no seu diretório (Microsoft Entra ID)?",
      options: ["Como um usuário do tipo 'Guest' (UserType = Guest)", "Como um usuário 'Member' regular", "Como um Contato de Email", "Ele não aparece no diretório, fica invisível"],
      correctAnswer: 0,
      explanation: "Usuários B2B são instanciados no seu diretório como objetos de usuário com a propriedade `UserType` definida como `Guest`. Isso permite que você aplique políticas, atribua licenças e controle acesso de forma diferenciada para eles em comparação aos funcionários internos (Members). Referência: Microsoft Learn - B2B User Properties",
      module: "Identidades e Governança"
    },
    {
      id: 77,
      question: "Você está desenvolvendo um aplicativo de e-commerce voltado para milhões de consumidores finais (público geral). Você quer que os clientes possam fazer login usando suas contas sociais (Google, Facebook) ou criar uma conta local com email/senha, e você quer personalizar totalmente a página de login com sua marca. A identidade não deve se misturar com os funcionários da empresa. Qual serviço utilizar?",
      options: ["Azure AD B2C (Business-to-Consumer)", "Azure AD B2B", "Microsoft Entra ID P1", "Active Directory Federation Services"],
      correctAnswer: 0,
      explanation: "Azure AD B2C é uma solução CIAM (Customer Identity and Access Management) desenhada para escala de milhões de usuários externos (clientes) com suporte a Social IdPs e personalização de UI (User Flows). É um diretório SEPARADO do Entra ID corporativo da empresa. Referência: Microsoft Learn - Azure AD B2C",
      module: "Identidades e Governança"
    },
    {
      id: 771,
      question: "Qual é a principal distinção de arquitetura entre um tenant Azure AD B2B e um tenant Azure AD B2C?",
      options: ["B2B ocorre no seu tenant corporativo principal; B2C é um tenant separado dedicado aos clientes", "B2B é pago; B2C é gratuito", "B2B suporta apenas Microsoft Accounts; B2C suporta Google", "Não há diferença arquitetural"],
      correctAnswer: 0,
      explanation: "B2B é uma funcionalidade (Feature) do seu tenant corporativo existente para convidar parceiros. B2C é um Recurso (Resource) que cria um diretório (Tenant) inteiramente NOVO e isolado, específico para armazenar os perfis dos consumidores da aplicação. Referência: Microsoft Learn - B2B vs B2C",
      module: "Identidades e Governança"
    },
    {
      id: 78,
      question: "Você tem um grupo 'Projeto-X-Confidencial' com 100 usuários. O projeto acabou, mas ninguém removeu os usuários, criando um risco de segurança (excesso de privilégios). Você quer automatizar um processo onde, a cada 3 meses, o gestor do grupo receba um email pedindo para confirmar quem ainda precisa de acesso, removendo automaticamente quem for rejeitado. Qual funcionalidade usar?",
      options: ["Access Reviews (Revisões de Acesso)", "Azure Policy", "PIM", "Azure Monitor Alerts"],
      correctAnswer: 0,
      explanation: "Access Reviews (parte do Identity Governance) automatiza a recertificação de acesso. Você define a frequência (trimestral), o revisor (gestor do grupo ou o próprio usuário) e a ação na negação (remover acesso). Isso garante que grupos e permissões não fiquem obsoletos (stale access). Requer licença P2 ou Governance. Referência: Microsoft Learn - Access Reviews",
      module: "Identidades e Governança"
    },
    {
      id: 781,
      question: "Uma empresa deseja garantir que nenhum usuário externo (Guest) mantenha acesso aos recursos corporativos indefinidamente. Qual seria a configuração mais eficiente de Access Reviews para esse cenário?",
      options: ["Criar uma Access Review recorrente para todos os Guests, pedindo que eles mesmos (Self-review) ou seus patrocinadores confirmem a necessidade de acesso contínuo", "Pedir ao RH para enviar lista de demitidos mensalmente", "Configurar expiração de conta de 30 dias para todos", "Bloquear acesso de guests permanentemente"],
      correctAnswer: 0,
      explanation: "A prática comum para governança de B2B é configurar Access Reviews automáticas para TODOS os usuários Guest. Pode-se pedir 'Auto-revisão' (o convidado confirma que ainda está colaborando) ou pedir a um 'Sponsor' interno. Se não responderem, o acesso é revogado. Referência: Microsoft Learn - Access Reviews for Guests",
      module: "Identidades e Governança"
    },
    {
      id: 79,
      question: "Sua equipe de segurança recebeu um alerta de que credenciais de 50 usuários vazaram na Dark Web. Você precisa de um sistema que detecte automaticamente quando um usuário tenta fazer login com uma credencial vazada ou de um IP anônimo (Tor), e bloqueie ou exija alteração de senha em tempo real. Qual recurso fornece essa proteção baseada em risco?",
      options: ["Microsoft Entra ID Protection (Identity Protection)", "Conditional Access Padrão", "MFA", "Azure Sentinel"],
      correctAnswer: 0,
      explanation: "O Identity Protection (disponível no P2) usa aprendizado de máquina para detectar riscos de USUÁRIO (ex: credenciais vazadas) e riscos de LOGIN (ex: IP anônimo, viagem impossível). Ele alimenta o Conditional Access para permitir políticas baseadas em risco (ex: Se Risco de Usuário >= Alto, então Exigir Redefinição de Senha). Referência: Microsoft Learn - Identity Protection",
      module: "Identidades e Governança"
    },
    {
      id: 791,
      question: "No contexto do Identity Protection, qual é a diferença entre 'User Risk' e 'Sign-in Risk'?",
      options: ["User Risk indica probabilidade da identidade estar comprometida (ex: vazamento); Sign-in Risk indica probabilidade da tentativa de login atual não ser o dono (ex: IP suspeito)", "São sinônimos", "User Risk é para admins; Sign-in Risk para usuários", "User Risk bloqueia; Sign-in Risk apenas monitora"],
      correctAnswer: 0,
      explanation: "User Risk (Risco do Usuário) é acumulativo e persistente: sugere que a conta foi hackeada (ex: Leaked Credentials). Sign-in Risk (Risco de Entrada) é tempo real: sugere que AQUELE login específico é suspeito (ex: Unfamiliar Location, Anonymous IP). As políticas de remediação podem ser diferentes para cada um. Referência: Microsoft Learn - Risk Types",
      module: "Identidades e Governança"
    },
    {
      id: 81,
      question: "Sua empresa contrata muitos funcionários novos toda semana. Para cada função (Ex: Marketing), eles precisam ser adicionados a 5 grupos do AD, 3 Teams, e 2 sites SharePoint. Fazer isso manualmente demora e gera erros. Você quer criar um 'pacote' de acesso que o novo funcionário possa solicitar, e ao ser aprovado, ele ganha acesso a tudo de uma vez por 90 dias. Qual funcionalidade usar?",
      options: ["Entitlement Management com Access Packages", "Dynamic Groups", "Blueprints", "PIM"],
      correctAnswer: 0,
      explanation: "Entitlement Management (Gerenciamento de Direitos) permite criar 'Access Packages'. Um pacote agrupa Grupos, Aplicativos e Sites SharePoint. O usuário (interno ou externo) solicita o pacote, passa por aprovação, e o provisionamento/desprovisionamento (expiração) de todos os recursos é automático. Referência: Microsoft Learn - Entitlement Management",
      module: "Identidades e Governança"
    },
    {
      id: 82,
      question: "Um 'Access Package' no Entitlement Management pode conter quais tipos de recursos?",
      options: ["Grupos de Segurança/M365, Enterprise Applications e Sites SharePoint Online", "VMs e Storage Accounts", "Assinaturas do Azure", "Apenas Grupos de Segurança"],
      correctAnswer: 0,
      explanation: "Access Packages focam em acesso a nível de aplicação e colaboração. Eles podem agrupar: 1. Grupos (Security ou Microsoft 365), 2. Aplicativos (Enterprise Apps/SaaS), 3. Sites do SharePoint Online. Eles NÃO gerenciam recursos de infraestrutura Azure (VMs) diretamente, embora possam dar acesso a grupos que tenham permissão na infra. Referência: Microsoft Learn - What are Access Packages",
      module: "Identidades e Governança"
    },
    {
      id: 83,
      question: "Você tem 500 assinaturas de desenvolvimento. Você quer garantir que nenhuma delas tenha o 'Microsoft Defender for Cloud' desativado. Monitorar isso manualmente é impossível. Qual a forma mais eficiente de garantir conformidade contínua?",
      options: ["Atribuir uma Azure Policy com efeito 'DeployIfNotExists' no Management Group raiz", "Enviar email para os donos das assinaturas", "Usar um script de automação que roda uma vez por mês", "Habilitar manualmente em cada assinatura"],
      correctAnswer: 0,
      explanation: "A Azure Policy com efeito `DeployIfNotExists` (DINE) não apenas audita, mas pode corrigir automaticamente a configuração se o recurso não estiver conforme (ex: habilitar o Defender ou instalar um agente de monitoramento). Aplicar no MG Raiz garante cobertura total. Referência: Microsoft Learn - DeployIfNotExists",
      module: "Identidades e Governança"
    },
    {
      id: 84,
      question: "No painel de Compliance do Azure Policy, o que significa um recurso estar em estado 'Non-Compliant'?",
      options: ["O recurso, suas configurações ou propriedades violam uma regra definida em uma política atribuída ao escopo", "O recurso está desligado", "O recurso está com erro de funcionamento", "O recurso foi deletado"],
      correctAnswer: 0,
      explanation: "Non-Compliant significa que as propriedades do recurso (ex: localização, tags, SKU, configs internas) não correspondem ao que a Policy exige. Isso não significa necessariamente que o recurso não funciona, mas que ele não segue o padrão de governança da empresa. Referência: Microsoft Learn - Policy Compliance State",
      module: "Identidades e Governança"
    },
    {
      id: 85,
      question: "Você aplicou uma nova política 'Adicionar Tag Dept=IT' com efeito 'Modify'. Você notou que os recursos NOVOS estão recebendo a tag, mas os recursos ANTIGOS (existentes antes da política) continuam sem a tag. O que você precisa fazer para corrigir os recursos legados?",
      options: ["Criar uma 'Remediation Task' (Tarefa de Remediação) para a política", "Deletar e recriar os recursos antigos", "Editar cada recurso manualmente", "Aguardar 24h para atualização automática"],
      correctAnswer: 0,
      explanation: "Políticas com efeitos de modificação (Modify/DeployIfNotExists) agem automaticamente apenas na criação/update. Para recursos EXISTENTES, o Azure Policy não toca neles automaticamente para evitar impacto não planejado. Você deve disparar explicitamente uma 'Remediation Task' para varrer e corrigir o passivo. Referência: Microsoft Learn - Remediate non-compliant resources",
      module: "Identidades e Governança"
    },
    {
      id: 86,
      question: "Sua empresa está adotando um modelo 'Cloud-First'. Você comprou 100 laptops Windows 11 novos para funcionários remotos que nunca virão ao escritório. Você quer que esses usuários façam login nos laptops usando suas contas corporativas do Azure AD, obtendo SSO para apps nuvem, sem depender de nenhum controlador de domínio local. Qual método de join usar?",
      options: ["Azure AD Join", "Hybrid Azure AD Join", "Workplace Join (Registered)", "AD Domain Join tradicional"],
      correctAnswer: 0,
      explanation: "Azure AD Join é a solução para dispositivos 'Cloud-only'. O dispositivo é ingressado diretamente e unicamente no Entra ID. O usuário loga com credencial de nuvem. Ideal para modern management e força de trabalho remota sem VPN para AD local. Referência: Microsoft Learn - Azure AD Join",
      module: "Identidades e Governança"
    },
    {
      id: 87,
      question: "Sua empresa já possui milhares de computadores Windows 10 ingressados no Active Directory local (Domínio On-Prem). Você quer estender os benefícios da nuvem (SSO, Acesso Condicional) para esses PCs sem desconectá-los do AD local e sem formatar. Qual o estado de dispositivo ideal?",
      options: ["Hybrid Azure AD Join", "Azure AD Join", "Azure AD Registered", "Intune only"],
      correctAnswer: 0,
      explanation: "Hybrid Azure AD Join é o estado onde o dispositivo é ingressado no AD Local E registrado no Azure AD simultaneamente. É o caminho de migração suave para empresas que já têm infraestrutura legada e querem obter SSO e segurança de nuvem para seus computadores existentes. Referência: Microsoft Learn - Hybrid Azure AD Join",
      module: "Identidades e Governança"
    },
    {
      id: 88,
      question: "Você quer que todos os usuários que tenham o atributo 'Department' igual a 'Sales' sejam automaticamente adicionados a um grupo chamado 'Sales-Team' para receberem acesso aos apps de vendas. Se o usuário mudar de departamento, ele deve ser removido automaticamente. Qual tipo de grupo você deve criar?",
      options: ["Dynamic User Group (Grupo Dinâmico)", "Assigned Group (Atribuído)", "Office 365 Group", "Distribution List"],
      correctAnswer: 0,
      explanation: "Dynamic Groups (Grupos Dinâmicos) no Entra ID permitem definir regras de pertinência baseadas em consultas aos atributos do usuário (ex: `user.department -eq 'Sales'`). O Azure processa as regras e atualiza a membresia automaticamente, reduzindo overhead administrativo. Referência: Microsoft Learn - Dynamic membership rules",
      module: "Identidades e Governança"
    },
    {
      id: 89,
      question: "Para utilizar a funcionalidade de Grupos Dinâmicos (Dynamic Groups) no Microsoft Entra ID, qual é o requisito mínimo de licenciamento que deve ser atribuído aos administradores e membros?",
      options: ["Microsoft Entra ID P1 (Premium P1)", "Microsoft Entra ID Free", "Office 365 E1", "Azure AD Basic"],
      correctAnswer: 0,
      explanation: "Grupos Dinâmicos, assim como Acesso Condicional e Self-Service Password Reset com writeback, são recursos Premium. Exigem no mínimo uma licença Azure AD Premium P1 (ou pacotes que a contenham, como M365 E3). A versão Free suporta apenas grupos 'Assigned' manuais. Referência: Microsoft Learn - Azure AD Pricing/Licensing",
      module: "Identidades e Governança"
    },
    {
      id: 90,
      question: "Qual é a ferramenta oficial da Microsoft instalada em um servidor local para sincronizar usuários, grupos e hashes de senha do Active Directory On-Premises para o Microsoft Entra ID?",
      options: ["Microsoft Entra Connect (anteriormente Azure AD Connect)", "MIM (Microsoft Identity Manager)", "AD FS", "VPN Gateway"],
      correctAnswer: 0,
      explanation: "Microsoft Entra Connect (Azure AD Connect) é a ferramenta bridge padrão para cenários híbridos. Ela cuida da sincronização de objetos e atributos e pode configurar os métodos de autenticação (PHS, PTA, Federation). Referência: Microsoft Learn - Azure AD Connect",
      module: "Identidades e Governança"
    },
    {
      id: 91,
      question: "Sua política de segurança corporativa proíbe terminantemente que hashes de senha (mesmo criptografados) sejam sincronizados para a nuvem. No entanto, você quer que os usuários usem a mesma senha do on-prem para acessar o Office 365, e que a validação ocorra em tempo real contra o seu AD local. Qual método de autenticação Azure AD Connect atende a esse requisito sem infraestrutura complexa de AD FS?",
      options: ["Pass-through Authentication (PTA)", "Password Hash Synchronization (PHS)", "Federation com AD FS", "Active Directory B2C"],
      correctAnswer: 0,
      explanation: "Pass-through Authentication (PTA) instala agentes leves no on-prem que escutam requisições de validação de senha. Quando o usuário loga na nuvem, a senha é enviada (criptografada) para o agente, que valida contra o AD Local. O hash nunca é armazenado no Azure. É a alternativa simples ao AD FS para esse requisito. Referência: Microsoft Learn - Pass-through Authentication",
      module: "Identidades e Governança"
    },
    {
      id: 92,
      question: "Para a maioria das organizações, a Microsoft recomenda o uso do Password Hash Synchronization (PHS) como método de identidade híbrida. Além da simplicidade, qual é uma vantagem crítica de segurança do PHS em relação ao PTA ou Federation?",
      options: ["Permite o uso do Identity Protection para detectar credenciais vazadas ('Leaked Credentials')", "É o único método que suporta MFA", "Não requer internet", "Permite login com Smart Cards"],
      correctAnswer: 0,
      explanation: "O PHS sincroniza um hash do hash da senha para o Azure. Isso permite que o serviço 'Identity Protection' compare esses hashes com bancos de dados de senhas vazadas na dark web. Se você usa PTA ou Federation, o Azure nunca vê a senha/hash, então não pode alertar se aquela credencial específica foi comprometida publicamente. Referência: Microsoft Learn - PHS benefits",
      module: "Identidades e Governança"
    },
    {
      id: 93,
      question: "Sua empresa utiliza Smart Cards (Cartões Inteligentes) físicos e certificados de cliente para autenticação de todos os funcionários. O Azure AD nativo (sem Passwordless moderno) historicamente não suportava isso diretamente no login. Qual método de identidade híbrida era tradicionalmente exigido para suportar autenticação avançada baseada em certificados on-premises?",
      options: ["Federation com AD FS (Active Directory Federation Services)", "Password Hash Sync", "Pass-through Authentication", "Azure AD DSL"],
      correctAnswer: 0,
      explanation: "A Federação (com AD FS ou PingFederate) delega a autenticação para o provedor de identidade local. Como a autenticação acontece no servidor da empresa, ela suporta qualquer método complexo que o AD on-prem suporte (Smart Cards, 3rd party MFA legs, Restrições de horário de logon complexas). Embora o Azure AD esteja modernizando o suporte a Certificate-based Auth, o AD FS é a resposta clássica para esses cenários legados complexos. Referência: Microsoft Learn - Federation",
      module: "Identidades e Governança"
    },
    {
      id: 94,
      question: "Em um cenário de Identidade Híbrida padrão, qual combinação de funcionalidades oferece a melhor experiência de usuário (Single Sign-On em desktops corporativos) com a maior resiliência (funciona mesmo se o link com o on-prem cair)?",
      options: ["Password Hash Sync (PHS) + Seamless SSO", "Pass-through Authentication (PTA) + Seamless SSO", "AD FS", "Apenas Cloud Identity"],
      correctAnswer: 0,
      explanation: "PHS + Seamless SSO é a recomendação 'Gold Standard'. O PHS garante que a autenticação pode ocorrer na nuvem (alta disponibilidade, sem dependência do link on-prem). O Seamless SSO garante que, dentro da rede corporativa, o usuário não precise digitar a senha repetidamente. Se o link cair, usuários externos continuam logando (com PHS). Com PTA/ADFS, se o link cai, ninguém loga. Referência: Microsoft Learn - Choosing auth method",
      module: "Identidades e Governança"
    },
    {
      id: 95,
      question: "Como funciona tecnicamente o 'Seamless Single Sign-On' (SSO Contínuo) quando um usuário está em um dispositivo corporativo conectado à rede da empresa?",
      options: ["O navegador negocia um ticket Kerberos com o Azure AD usando a conta de computador do objeto 'AZUREADSSOACC' criada no AD Local", "O Azure instala um cookie mágico no navegador", "O firewall libera o acesso", "O usuário usa biometria"],
      correctAnswer: 0,
      explanation: "O Seamless SSO usa a autenticação integrada do Windows (IWA). Quando ativado, o Azure AD Connect cria uma conta de computador (AZUREADSSOACC) no AD local que representa o Azure AD. O navegador obtém um ticket Kerberos para essa conta e o apresenta ao Azure AD, logando o usuário silenciosamente. Referência: Microsoft Learn - Seamless SSO Technical Deep Dive",
      module: "Identidades e Governança"
    },
    {
      id: 96,
      question: "Embora o Azure Policy seja poderoso, existem limites de escala. O sistema começa a apresentar latência na avaliação se abusado. Qual é uma prática recomendada para evitar atingir limites de atribuição (assignments) ao gerenciar muitas políticas?",
      options: ["Agrupar políticas em Iniciativas (Initiatives) e atribuir a Iniciativa, em vez de atribuir policies individuais", "Aumentar o tier da assinatura", "Não usar policies", "Criar múltiplos tenants"],
      correctAnswer: 0,
      explanation: "Cada atribuição conta para os limites. Se você tem 100 políticas e as atribui individualmente a 10 assinaturas, são 1000 atribuições. Se você agrupa as 100 em 1 Iniciativa e atribui a Iniciativa, são apenas 10 atribuições. Initiatives são essenciais para escala e performance. Referência: Microsoft Learn - Policy Best Practices",
      module: "Identidades e Governança"
    },
    {
      id: 97,
      question: "Você quer garantir que, se um usuário esquecer de colocar a tag 'CostCenter' na criação de um Resource Group, o Azure adicione a tag automaticamente com o valor 'Default-CC', em vez de bloquear a criação. Qual efeito de Policy você deve usar?",
      options: ["Append", "Deny", "Audit", "Disabled"],
      correctAnswer: 0,
      explanation: "O efeito 'Append' é usado para adicionar campos ao recurso durante sua criação ou atualização. Se a tag não existir, o Append a adiciona. Se já existir com outro valor, ele não sobrescreve (diferente do Modify, que pode ser mais complexo). É ideal para garantir taxonomias básicas sem bloquear o usuário (Deny). Referência: Microsoft Learn - Policy Append Effect",
      module: "Identidades e Governança"
    },
    {
      id: 98,
      question: "Verdadeiro ou Falso: Se você atribuir uma política de 'Deny' em um Resource Group, e uma política conflitante de 'Allow' (se existisse) na Assinatura pai, a política da Assinatura venceria por ser hierarquicamente superior.",
      options: ["Falso. O Azure Policy é restritivo (acumulativo). Se qualquer política na hierarquia negar (Deny), a ação é negada.", "Verdadeiro. O pai sempre manda.", "Depende da ordem de criação", "Depende do administrador"],
      correctAnswer: 0,
      explanation: "No Azure Policy, a herança é cumulativa e o 'Deny' sempre vence. Se uma política no nível Raiz diz 'Pode' mas uma no nível RG diz 'Não Pode' (ou vice-versa, se a Raiz diz 'Não Pode'), o resultado final é BLOQUEIO. Não existe 'Allow' explícito que sobrescreva um 'Deny' herdado. A restrição mais severa se aplica. Referência: Microsoft Learn - Policy aggregation",
      module: "Identidades e Governança"
    },
    {
      id: 99,
      question: "Você aplicou uma política estrita no nível da Assinatura que exige 'Backup Habilitado' para todas as VMs. No entanto, você tem um Grupo de Recursos 'RG-Lixo-Teste' onde os desenvolvedores criam e destroem VMs a cada hora, e o backup é desnecessário e caro. Como lidar com essa exceção sem remover a política da assinatura?",
      options: ["Adicionar o 'RG-Lixo-Teste' como uma 'Exclusion' (Exclusão) na atribuição da política", "Criar uma nova assinatura para teste", "Desabilitar a política toda vez que eles forem testar", "Não é possível criar exceções"],
      correctAnswer: 0,
      explanation: "Ao fazer uma atribuição de política (Assignment), você pode configurar 'Exclusions'. Isso permite selecionar Resource Groups ou Recursos específicos dentro do escopo que NÃO estarão sujeitos àquela política. É a forma padrão de lidar com exceções legítimas (como ambientes de Sandbox/Dev efêmeros) em uma governança ampla. Referência: Microsoft Learn - Policy Assignment structure",
      module: "Identidades e Governança"
    },
    {
      id: 100,
      question: "Um usuário precisa ser capaz de visualizar e elevar tickets de suporte para a Microsoft em nome da empresa, mas não deve ter acesso algum aos recursos (VMs, Dados) nem permissão para criar nada. Qual função do RBAC deve ser atribuída?",
      options: ["Support Request Contributor", "Owner", "Reader", "Helpdesk Administrator"],
      correctAnswer: 0,
      explanation: "A função 'Support Request Contributor' é uma função built-in projetada especificamente para permitir a criação e gerenciamento de tickets de suporte no Portal do Azure, sem conceder acesso aos recursos em si (diferente de Reader/Owner). Nota: 'Helpdesk Administrator' é uma role do Entra ID (para senhas), não do Azure RBAC (recursos). Referência: Microsoft Learn - Built-in Roles",
      module: "Identidades e Governança"
    }
  ],
  
  modulo3: [
    {
      id: 101,
      question: "Você está projetando uma solução de armazenamento para uma aplicação de análise de logs que gera dados de streaming continuamente, 24/7. A aplicação requer uma solução onde novos dados sejam sempre adicionados ao final do arquivo, sem modificar registros existentes. Qual tipo de Blob Storage é otimizado especificamente para este cenário de operações de 'append'?",
      options: ["Append Blob", "Block Blob", "Page Blob", "Premium Blob"],
      correctAnswer: 0,
      explanation: "Append Blobs são otimizados para cenários de append-only, como logs e streaming de dados. Eles permitem adicionar blocos apenas ao final do blob. Block Blobs são para uploads gerais de arquivos, enquanto Page Blobs são otimizados para operações de leitura/escrita aleatórias (I/O), como discos rígidos virtuais (VHDs). Referência: Microsoft Learn - Blob Types",
      module: "Armazenamento"
    },
    {
      id: 102,
      question: "Você gerencia uma plataforma de vídeo que permite aos usuários fazer upload de vídeos em 4K. Um único arquivo de vídeo para esta aplicação pode chegar a 3 TB de tamanho. Você precisa armazenar esses vídeos utilizando Azure Blob Storage. Qual tipo de Blob suporta o armazenamento de um único arquivo deste tamanho?",
      options: ["Block Blob", "Append Blob", "Page Blob", "Table Storage"],
      correctAnswer: 0,
      explanation: "Block Blobs suportam arquivos muito grandes, até aproximadamente 4.75 TB (dependendo da versão da API, até mais recentemente com aumento de limites, mas 3TB é suportado). Append Blobs têm limite muito menor (~195 GB). Page Blobs suportam até 8 TB mas são mais caros e destinados a VHDs, não armazenamento de objetos genéricos como vídeos. Referência: Microsoft Learn - Blob Limits",
      module: "Armazenamento"
    },
    {
      id: 103,
      question: "Uma solução de IoT coleta petabytes de dados de sensores, organizados hierarquicamente (ano/mês/dia/dispositivo). Você precisa integrar esses dados com uma solução de análise Hadoop/Spark que exige um sistema de arquivos compatível com POSIX. Qual configuração de armazenamento você deve habilitar no Azure Storage?",
      options: ["Data Lake Storage Gen2 (Hierarchical Namespace)", "Azure Files", "Standard Blob Storage apenas", "Azure Table Storage"],
      correctAnswer: 0,
      explanation: "Para cargas de trabalho de Big Data (Hadoop/Spark) que exigem sistema de arquivos POSIX e estrutura hierárquica, o Azure Data Lake Storage Gen2 (HNS ativado) é a escolha correta. Ele combina a escalabilidade do Blob Storage com capacidades de sistema de arquivos. Azure Files é SMB/NFS para compartilhamento de arquivos tradicionais, não otimizado para analytics de petabytes da mesma forma. Referência: Microsoft Learn - Data Lake Gen2",
      module: "Armazenamento"
    },
    {
      id: 104,
      question: "Sua empresa possui 50 escritórios filiais com largura de banda de internet limitada. Os usuários precisam acessar arquivos centrais armazenados no Azure Files, sendo que muitos desses arquivos superam 10 GB. Você deseja implementar um cache local em cada escritório para acelerar o acesso aos arquivos mais usados. Qual ferramenta você deve usar?",
      options: ["Azure File Sync", "AzCopy", "Azure Storage Explorer", "Robocopy"],
      correctAnswer: 0,
      explanation: "O Azure File Sync permite centralizar os compartilhamentos de arquivos da sua organização no Azure Files, mantendo a flexibilidade, o desempenho e a compatibilidade de um servidor de arquivos local (Windows Server) como cache. O recurso de Cloud Tiering libera espaço local mantendo apenas os arquivos acessados frequentemente. AzCopy e Robocopy são ferramentas de cópia, não de sincronização/cache contínuo. Referência: Microsoft Learn - File Sync",
      module: "Armazenamento"
    },
    {
      id: 105,
      question: "Você está planejando a migração de uma aplicação legada para a nuvem. A aplicação atualmente utiliza o protocolo FTP na porta 21 para fazer upload de arquivos para um servidor. O destino planejado é um compartilhamento Azure Files. Se a aplicação tentar conectar diretamente ao Azure Files via FTP sem modificações, qual será o resultado?",
      options: ["A conexão falhará, pois Azure Files não suporta FTP nativamente", "O upload funcionará normalmente", "O Azure Files converterá automaticamente para SMB", "Será necessário uma VPN para funcionar"],
      correctAnswer: 0,
      explanation: "O Azure Files suporta primariamente os protocolos SMB e NFS (e REST API). Ele NÃO suporta FTP/FTPS nativamente (embora existam soluções de terceiros ou SFTP para Blob Storage). A aplicação falhará ao tentar conectar via FTP na porta 21 diretamente ao endpoint do Azure Files. A aplicação deve ser reconfigurada para usar SMB ou APIs REST. Referência: Microsoft Learn - Azure Files Protocols",
      module: "Armazenamento"
    },
    {
      id: 106,
      question: "Você armazena 500 TB de backups críticos na região East US. O plano de Disaster Recovery (DR) da empresa exige que os dados sobrevivam mesmo se toda a região East US sofrer um desastre completo. Um RPO (Recovery Point Objective) de 15 minutos é aceitável. Qual é a redundância mínima que atende a este requisito?",
      options: ["GRS (Geo-Redundant Storage)", "LRS (Locally-Redundant Storage)", "ZRS (Zone-Redundant Storage)", "Premium SSD com Snapshots"],
      correctAnswer: 0,
      explanation: "GRS (Geo-Redundant Storage) copia seus dados de forma assíncrona para uma região secundária (ex: West US). Isso protege contra falhas regionais completas. LRS e ZRS protegem apenas dentro da mesma região (datacenter ou zona, respectivamente). Para sobreviver à perda da região inteira, GRS (ou GZRS) é necessário. Referência: Microsoft Learn - GRS",
      module: "Armazenamento"
    },
    {
      id: 107,
      question: "Uma aplicação de missão crítica hospedada em East US requer a máxima durabilidade possível. Ela precisa de proteção contra falhas de datacenter (usando Zonas de Disponibilidade) E proteção contra falhas regionais completas (Geo-replicação). Qual opção de redundância você deve escolher?",
      options: ["GZRS (Geo-Zone-Redundant Storage)", "GRS (Geo-Redundant Storage)", "ZRS (Zone-Redundant Storage)", "RA-GRS"],
      correctAnswer: 0,
      explanation: "GZRS (Geo-Zone-Redundant Storage) combina o melhor dos dois mundos: ele replica dados através de 3 Zonas de Disponibilidade na região primária (como ZRS) E replica para uma região secundária (como GRS). Isso oferece a maior durabilidade (16 noves). GRS comum usa apenas LRS na primária, sendo vulnerável se todos os datacenters de uma zona falharem (embora proteja região). Referência: Microsoft Learn - GZRS",
      module: "Armazenamento"
    },
    {
      id: 108,
      question: "Você tem um Storage Account configurado com redundância RA-GRS (Read-Access Geo-Redundant Storage). A região primária sofre uma falha completa e fica inacessível. A Microsoft ainda não declarou failover oficial. Como sua aplicação pode interagir com os dados na região secundária?",
      options: ["A aplicação pode ler os dados da secundária, mas não pode gravar", "A aplicação pode ler e gravar na secundária automaticamente", "A aplicação não pode acessar nada até o failover", "A aplicação pode gravar na secundária, mas leitura é lenta"],
      correctAnswer: 0,
      explanation: "Com RA-GRS, o endpoint secundário está sempre disponível para leitura (Read-Only), mesmo que a primária esteja online ou offline. Em caso de falha da primária, você pode continuar lendo da secundária. A escrita (Write) NÃO é possível na secundária a menos que um failover completo (que torna a secundária em nova primária) seja executado. RA-GRS = Leitura contínua na secundária. Referência: Microsoft Learn - RA-GRS Failover",
      module: "Armazenamento"
    },
    {
      id: 109,
      question: "Sua organização precisa armazenar 1 PB de dados históricos para fins de conformidade. Esses dados serão acessados muito raramente (menos de uma vez por ano), apenas em caso de auditoria. O custo de armazenamento deve ser o menor possível. Qual tier de acesso é o mais recomendado?",
      options: ["Archive Tier", "Cool Tier", "Hot Tier", "Premium Tier"],
      correctAnswer: 0,
      explanation: "O tier Archive oferece o menor custo de armazenamento ($0.00099 a $0.002/GB dependendo da região), ideal para dados de long-term retention que raramente são acessados. O custo de acesso (leitura/reidratação) é alto e lento, mas para 'menos de 1x ano', a economia no armazenamento compensa drasticamente. Cool Tier é para acesso mensal (~30 dias). Referência: Microsoft Learn - Archive Tier",
      module: "Armazenamento"
    },
    {
      id: 110,
      question: "Uma auditoria urgente requer acesso a um arquivo de 1 TB armazenado no tier Archive. Sua equipe iniciou a reidratação (rehydration) do blob com prioridade 'Standard'. Qual é o tempo máximo esperado para que o download seja possível?",
      options: ["Até 15 horas", "Imediatamente", "1 hora", "7 dias"],
      correctAnswer: 0,
      explanation: "A reidratação de um blob do tier Archive com prioridade 'Standard' pode levar até 15 horas. Se fosse necessário acesso mais rápido, a prioridade 'High' poderia ser usada (para menores de 10GB frequentemente, ou pago extra) que leva menos de 1 hora. Para Archive padrão, o planeamento é de horas. Referência: Microsoft Learn - Rehydrate Archive",
      module: "Armazenamento"
    },
    {
      id: 111,
      question: "Uma instituição financeira sujeita à regulação da SEC precisa garantir que seus backups sejam imutáveis para proteção contra ransomware. A regra exige que nenhum usuário, nem mesmo administradores, possa deletar ou modificar os dados por um período de retenção de 7 anos. Qual funcionalidade do Azure Blob Storage deve ser configurada?",
      options: ["Immutable Blob Storage (WORM)", "Read-only SAS tokens", "RBAC Deny Delete", "Soft delete 7 anos"],
      correctAnswer: 0,
      explanation: "O Armazenamento Imutável (Immutable Storage) com políticas baseadas em tempo (WORM - Write Once, Read Many) impede que blobs sejam deletados ou modificados por qualquer pessoa, inclusive administradores, durante o período de retenção definido. É a única solução que atende a requisitos rígidos de conformidade (SEC). SAS e RBAC podem ser alterados por admins. Soft delete permite recuperação, mas não impede deleção permanente após o período. Referência: Microsoft Learn - Immutable Storage",
      module: "Armazenamento"
    },
    {
      id: 112,
      question: "Sua empresa está envolvida em um processo judicial que exige a preservação imediata de 200 GB de emails arquivados. A retenção baseada em tempo não é aplicável pois não há uma data final definida para o processo. Você precisa prevenir qualquer deleção até que o processo seja concluído. Qual configuração de imutabilidade você deve aplicar?",
      options: ["Legal Hold (persiste até remoção)", "Time-based Retention (99 anos)", "Archive Tier Lock", "Read-only RBAC"],
      correctAnswer: 0,
      explanation: "O Legal Hold é uma política de imutabilidade que dura indefinidamente até ser explicitamente removida. Diferente da retenção baseada em tempo (que requer um período fixo), o Legal Hold é usado para cenários de litígio ou investigação onde a duração é desconhecida. Ele impede deleção e modificação. Referência: Microsoft Learn - Legal Hold",
      module: "Armazenamento"
    },
    {
      id: 113,
      question: "Durante uma auditoria de segurança, um auditor questiona se os dados em repouso (data-at-rest) na sua Storage Account 'Standard GPv2' estão criptografados. Nenhuma configuração explícita de criptografia foi realizada durante a criação do recurso. Qual é o status da criptografia?",
      options: ["SIM, a criptografia é automática (SSE) para todas as contas", "NÃO, requer habilitação manual", "Apenas se o tier for Premium", "Apenas se configurado HTTPS"],
      correctAnswer: 0,
      explanation: "Todas as Storage Accounts do Azure possuem criptografia em repouso (Server-Side Encryption - SSE) habilitada automaticamente e por padrão para todos os dados. Ela usa criptografia AES de 256 bits e é gerenciada pela Microsoft. Não é possível desativá-la. HTTPS garante criptografia em trânsito, não em repouso. Referência: Microsoft Learn - Storage Encryption",
      module: "Armazenamento"
    },
    {
      id: 114,
      question: "A política de conformidade da sua empresa exige que a organização controle 100% das chaves de criptografia utilizadas para proteger os dados no Azure Storage. As chaves devem ser armazenadas no Azure Key Vault e a rotação delas deve ser gerenciada centralmente pela sua equipe de segurança. Qual tipo de criptografia atende a este requisito?",
      options: ["Customer-Managed Keys (CMK)", "Microsoft-managed keys (Default)", "Shared Access Signature (SAS)", "Storage Account Keys"],
      correctAnswer: 0,
      explanation: "Customer-Managed Keys (CMK) permite que você traga suas próprias chaves (BYOK) e as gerencie no Azure Key Vault. Isso oferece controle total sobre a rotação das chaves e políticas de acesso, atendendo a requisitos estritos de conformidade. A criptografia padrão usa chaves gerenciadas pela Microsoft. Referência: Microsoft Learn - Customer-Managed Keys",
      module: "Armazenamento"
    },
    {
      id: 115,
      question: "Você é um administrador do Azure e precisa navegar e fazer upload de arquivos em 500 containers diferentes distribuídos por 10 Storage Accounts. Você utiliza estações de trabalho Windows, Linux e Mac e prefere uma ferramenta com interface gráfica (GUI) dedicada em vez de usar o Portal ou linha de comando. Qual ferramenta é a mais adequada?",
      options: ["Azure Storage Explorer", "Azure Portal", "AzCopy", "PowerShell ISE"],
      correctAnswer: 0,
      explanation: "O Azure Storage Explorer é um aplicativo desktop gratuito e multiplataforma (Windows, macOS, Linux) que fornece uma interface gráfica para gerenciar dados do Azure Storage (Blobs, Files, Queues, Tables) em várias contas. É mais eficiente que o portal para operações em massa e oferece GUI, diferente do AzCopy ou PowerShell. Referência: Microsoft Learn - Storage Explorer",
      module: "Armazenamento"
    },
    {
      id: 116,
      question: "Você está liderando uma migração de 50 TB de dados locais para o Azure Blob Storage. A estrutura de dados possui uma hierarquia complexa com milhares de subpastas. Você decide usar o AzCopy para a transferência. Qual flag do comando AzCopy é essencial para garantir que toda a estrutura de pastas e seu conteúdo sejam copiados recursivamente?",
      options: ["--recursive", "--sync-only", "--mirror", "--hierarchy"],
      correctAnswer: 0,
      explanation: "A flag '--recursive' (ou '-r' em versões antigas, embora AzCopy v10 use --recursive=true por padrão em alguns contextos de sync, para copy explícito de diretórios locais é fundamental garantir a inclusão de subdiretórios). Ela instrui o AzCopy a percorrer e copiar toda a árvore de diretórios. Sem isso, apenas os arquivos da raiz seriam copiados (dependendo da sintaxe exata do source path com user wildcards). Referência: Microsoft Learn - AzCopy",
      module: "Armazenamento"
    },
    {
      id: 117,
      question: "Você precisa configurar a segurança de rede de uma Storage Account. O acesso deve ser permitido APENAS a partir do endereço IP público do seu escritório principal (203.0.113.0/24) e de uma sub-rede específica da VNet de produção ('prod-vnet'). O acesso direto da internet pública deve ser bloqueado. Qual recurso você deve configurar?",
      options: ["Azure Storage Firewalls and Virtual Networks", "Network Security Group (NSG)", "Azure Firewall", "Web Application Firewall (WAF)"],
      correctAnswer: 0,
      explanation: "O recurso 'Firewalls and virtual networks' na Storage Account permite definir regras de acesso baseadas em faixas de IP público e Sub-redes de VNets. Por padrão, você altera a configuração de 'Allow from all networks' para 'Selected networks', bloqueando a internet pública exceto as origens permitidas. NSGs protegem subnets e VMs, não o endpoint público do Storage diretamente da mesma forma (embora Service Tags ajudem na saída). Referência: Microsoft Learn - Storage Firewalls",
      module: "Armazenamento"
    },
    {
      id: 118,
      question: "Suas máquinas virtuais (VMs) hospedadas em uma Azure Virtual Network precisam acessar uma Storage Account para processamento de dados. Atualmente, o tráfego é roteado pela internet pública. Você deseja otimizar o acesso, roteando o tráfego diretamente através da rede backbone da Microsoft para reduzir latência e custos. Qual recurso você deve habilitar na VNet?",
      options: ["Service Endpoints", "ExpressRoute", "VPN Gateway", "Public Peering"],
      correctAnswer: 0,
      explanation: "Service Endpoints (Pontos de extremidade de serviço) estendem a identidade da sua VNet para o serviço do Azure. Quando habilitado para Storage, o tráfego das suas VMs para o Storage Account flui inteiramente pela rede backbone do Azure, ignorando a internet pública. Isso melhora a segurança e performance. ExpressRoute conecta on-prem ao Azure. Referência: Microsoft Learn - Service Endpoints",
      module: "Armazenamento"
    },
    {
      id: 119,
      question: "Os requisitos de conformidade da sua empresa exigem que uma Storage Account NÃO possua nenhum endpoint de acesso público acessível. Ela deve ser acessível exclusivamente através de um endereço IP privado (range 10.0.x.x) dentro da sua Virtual Network. Habilitar Service Endpoints não é suficiente pois mantém o IP público do serviço. Qual solução atende a este requisito?",
      options: ["Azure Private Link (Private Endpoint)", "Service Endpoint", "VPN Gateway", "NAT Gateway"],
      correctAnswer: 0,
      explanation: "O Azure Private Link (via Private Endpoint) projeta a Storage Account para dentro da sua VNet com um IP privado. Isso permite desabilitar completamente o acesso público à conta de armazenamento, garantindo que o tráfego permaneça estritamente privado. Service Endpoint otimiza a rota, mas o destino final ainda é um IP público do Azure. Referência: Microsoft Learn - Private Link",
      module: "Armazenamento"
    },
    {
      id: 120,
      question: "Você gerencia um container no Azure Blob Storage onde um arquivo crítico chamado 'report.xlsx' é modificado mais de 10 vezes por dia por diferentes usuários. Recentemente, ocorreram casos de sobrescritas acidentais de dados importantes. Você precisa de uma solução automática que permita restaurar qualquer versão anterior do arquivo a qualquer momento em caso de erro. Qual funcionalidade você deve habilitar?",
      options: ["Blob Versioning", "Soft Delete", "Snapshots Manuais", "Backup Azure"],
      correctAnswer: 0,
      explanation: "Blob Versioning mantém automaticamente versões anteriores de um blob cada vez que ele é modificado (sobrescrito). Isso permite restaurar uma versão específica a qualquer momento. Soft Delete protege contra deleção (lixeira), mas não necessariamente gerencia histórico de modificações da mesma forma (embora guarde versões deletadas se ambos ativos). Snapshots manuais dependem de ação humana. Referência: Microsoft Learn - Blob Versioning",
      module: "Armazenamento"
    },
    {
      id: 121,
      question: "Para fins de auditoria de conformidade, você precisa manter um log completo, sequencial e durável de todas as operações de mudança (criação, modificação, deleção) realizadas em seus blobs no Azure Storage. O log deve garantir que nenhum evento seja perdido e deve ser possível reprocessar esses eventos cronologicamente. Qual recurso fornece esse log de transações?",
      options: ["Change Feed", "Azure Monitor Logs", "Event Grid", "Activity Log"],
      correctAnswer: 0,
      explanation: "O suporte a Change Feed no Azure Blob Storage fornece um log de transações durável, ordenado e garantido de todas as alterações ocorridas nos blobs. Diferente do Azure Monitor (métricas/logs gerais) ou Event Grid (eventos em tempo real que podem não ser persistidos para replay histórico da mesma forma), o Change Feed é desenhado para cenários de auditoria e replicação de dados. Referência: Microsoft Learn - Change Feed",
      module: "Armazenamento"
    },
    {
      id: 122,
      question: "Você está implantando um cluster Hadoop no Azure e precisa de um armazenamento que suporte uma estrutura real de arquivos e pastas (ex: /ano/mês/dia) e operações de sistema de arquivos POSIX, como renomeação atômica de diretórios. O modelo plano (flat namespace) do Blob Storage padrão não atende a esses requisitos de performance e compatibilidade. Qual tipo de armazenamento você deve provisionar?",
      options: ["Azure Data Lake Storage Gen2 (Hierarchical Namespace)", "Standard Blob Storage", "Azure Storage GPv1", "Azure File Storage"],
      correctAnswer: 0,
      explanation: "Azure Data Lake Storage Gen2 com Hierarchical Namespace (HNS) habilitado é a solução para Big Data analytics. Ele permite manipulação de arquivos e diretórios reais (renomear pasta = operação de metadados, não cópia de N blobs), essencial para performance em Hadoop/Spark. Standard Blob é flat namespace (pastas virtuais). Referência: Microsoft Learn - Hierarchical Namespace",
      module: "Armazenamento"
    },
    {
      id: 123,
      question: "Uma aplicação IoT gera milhões de eventos de sensores por segundo. O esquema de dados é simples: DeviceID, Timestamp, Temperatura e Umidade. Você precisa armazenar esses dados de forma econômica e realizar consultas rápidas " + "filtrando pelo par DeviceID e Timestamp. Qual serviço NoSQL oferece a solução mais custo-eficiente para este cenário?",
      options: ["Azure Table Storage", "Azure SQL Database", "Azure Cosmos DB", "Blob Storage (JSON)"],
      correctAnswer: 0,
      explanation: "Azure Table Storage é um serviço NoSQL chave-valor ideal para armazenar grandes volumes de dados estruturados não relacionais a um custo muito baixo. Ele é perfeito para logs de IoT onde a consulta é feita por PartitionKey (DeviceID) e RowKey (Timestamp). Cosmos DB é mais robusto (distribuição global), mas Table Storage é a resposta 'custo-eficiente' padrão para esse cenário simples. Referência: Microsoft Learn - Table Storage",
      module: "Armazenamento"
    },
    {
      id: 124,
      question: "Sua aplicação web recebe uploads de usuários com picos de tráfego imprevisíveis. O processamento desses arquivos é demorado e realizado por workers em backend. Para desacoplar o frontend do backend e garantir que o sistema suporte os picos sem perder requisições, você decide usar um padrão de enfileiramento. Qual serviço do Azure Storage é ideal para armazenar essas mensagens de trabalho pendentes?",
      options: ["Azure Queue Storage", "HTTP Polling", "Database Flags", "Shared File Log"],
      correctAnswer: 0,
      explanation: "Azure Queue Storage fornece mensageria assíncrona para comunicação entre componentes de aplicação. Ele permite desacoplar o front-end (producer) do back-end (consumer/worker), absorvendo picos de carga (bursts) 'amortecendo' as requisições na fila até que os workers possam processá-las. Isso aumenta a escalabilidade e resiliência. Referência: Microsoft Learn - Queue Storage",
      module: "Armazenamento"
    },
    {
      id: 125,
      question: "Durante um evento promocional, sua aplicação de e-commerce coloca pedidos em uma Azure Queue Storage. Estima-se receber 50 milhões de mensagens em um curto período. Os workers processarão esses pedidos gradualmente. Qual é o limite máximo de mensagens que uma única fila no Azure Queue Storage pode armazenar?",
      options: ["Ilimitado (limitado apenas pela capacidade da Storage Account)", "1 milhão de mensagens", "5000 mensagens", "10 GB total"],
      correctAnswer: 0,
      explanation: "Uma Azure Queue pode conter milhões de mensagens, limitadas apenas pela capacidade total da Storage Account onde ela reside (que pode chegar a 5 PB). Não há limite rígido de contagem de mensagens (diferente do Service Bus que tem cotas diferentes dependendo do tier). Isso a torna ideal para backlogs massivos. Referência: Microsoft Learn - Queue Limits",
      module: "Armazenamento"
    },
    {
      id: 126,
      question: "Você precisa enviar um objeto JSON de 100 KB para uma Azure Queue Storage. Ao tentar enfileirar a mensagem, você recebe o erro 'PayloadTooLarge'. Você sabe que o limite padrão é 64 KB. Qual é o padrão de arquitetura recomendado para contornar essa limitação e processar mensagens grandes?",
      options: ["Claim Check Pattern (Armazenar payload no Blob, enviar URL/Ref na Queue)", "Otimizar o JSON para 64 KB", "Aumentar o limite da Queue via Ticket de Suporte", "Usar Azure Service Bus"],
      correctAnswer: 0,
      explanation: "O padrão Claim Check envolve armazenar o payload grande (o 'objeto' de 100KB) em um armazenamento externo barato e performático (como Azure Blob Storage) e colocar apenas uma referência (Claim Check) ou URL para esse blob na mensagem da fila (que é pequena, <64KB). O worker lê a mensagem, pega a URL e baixa o payload completo do Blob. Azure Queues não suportam >64KB nativamente. Referência: Microsoft Learn - Queue Message Size",
      module: "Armazenamento"
    },
    {
      id: 127,
      question: "Você está provisionando 100 Máquinas Virtuais e precisa configurar seus discos. Você deseja evitar a complexidade de gerenciar Storage Accounts individuais, limites de IOPS por conta e chaves de acesso. Você quer que o Azure gerencie a infraestrutura de armazenamento subjacente garantindo alta disponibilidade. Qual tipo de disco você deve escolher?",
      options: ["Managed Disks", "Unmanaged Disks", "VHDs em Blob Storage", "Local Temp Disks"],
      correctAnswer: 0,
      explanation: "Managed Disks (Discos Gerenciados) abstraem as Storage Accounts subjacentes. Você apenas especifica o tipo (Premium, Standard) e tamanho, e o Azure cuida da criação, gerenciamento, escalabilidade e alta disponibilidade. Unmanaged Disks (VHDs em Storage Accounts manuais) são legados e requerem microgerenciamento de limites de conta. Referência: Microsoft Learn - Managed Disks",
      module: "Armazenamento"
    },
    {
      id: 128,
      question: "Você está migrando um banco de dados SQL Server de missão crítica para uma VM do Azure. A aplicação exige desempenho extremo de armazenamento: até 160.000 IOPS e latência sub-milissegundo para transações financeiras. Os discos Premium SSD v2 atuais são uma opção, mas você quer o SLA máximo de performance disponível. Qual tipo de disco oferece a maior performance possível no Azure?",
      options: ["Ultra Disk", "Premium SSD", "Standard SSD", "Premium SSD v2"],
      correctAnswer: 0,
      explanation: "Ultra Disk oferece a maior performance de armazenamento em disco no Azure, alcançando até 160.000 IOPS e latências consistentes abaixo de 1 milissegundo. É projetado para as cargas de trabalho mais exigentes, como SAP HANA e top-tier SQL DBs. Premium SSD v2 é excelente, mas Ultra Disk é o tier 'extreme performance'. Referência: Microsoft Learn - Ultra Disks",
      module: "Armazenamento"
    },
    {
      id: 129,
      question: "Para conformidade regulatória, todos os discos (OS e Dados) das suas VMs Windows e Linux devem ser criptografados usando as funcionalidades nativas do sistema operacional (BitLocker para Windows e DM-Crypt para Linux), com chaves gerenciadas no Azure Key Vault. A criptografia Server-Side (SSE) padrão não é suficiente pois a exigência é 'criptografia no nível do volume/OS'. Qual solução implementar?",
      options: ["Azure Disk Encryption (ADE)", "Server-Side Encryption with CMK", "Storage Service Encryption", "Encryption at Host"],
      correctAnswer: 0,
      explanation: "Azure Disk Encryption (ADE) aproveita os recursos do SO (BitLocker no Windows, DM-Crypt no Linux) para criptografar os discos dentro da VM. As chaves são protegidas no Key Vault. Isso difere da SSE (que criptografa no hardware do storage storage). Para requisitos de 'OS-level encryption', ADE é a resposta. Referência: Microsoft Learn - Azure Disk Encryption",
      module: "Armazenamento"
    },
    {
      id: 130,
      question: "Você possui um website global que serve arquivos estáticos (imagens, CSS, JS) para usuários nos EUA, Europa e Ásia. Usuários distantes da região de origem (East US) relatam lentidão no carregamento devido à latência de rede. Você deseja melhorar a performance armazenando o conteúdo em cache em servidores de borda (edge locations) próximos aos usuários finais. Qual serviço você deve implementar?",
      options: ["Azure Content Delivery Network (CDN)", "Azure Front Door apenas", "Azure Traffic Manager", "Geo-Redundant Storage (GRS)"],
      correctAnswer: 0,
      explanation: "Azure CDN (Content Delivery Network) armazena conteúdo estático em cache em centenas de POPs (Points of Presence) ao redor do mundo. Quando um usuário na Ásia acessa seu site, o arquivo é servido do POP mais próximo na Ásia, e não do East US, reduzindo drasticamente a latência. Traffic Manager é DNS load balancing, não caching. GRS é replication para DR, não CDN. Referência: Microsoft Learn - Azure CDN",
      module: "Armazenamento"
    },
    {
      id: 131,
      question: "Você desenvolveu uma Single Page Application (SPA) usando React que consiste apenas em arquivos estáticos (HTML, CSS, JS). A aplicação não requer nenhum componente de backend no servidor para renderização (server-side rendering). Você quer hospedar este site no Azure Storage com o menor custo possível e com suporte a HTTPS. Qual recurso você deve habilitar?",
      options: ["Static Website Hosting", "Azure App Service", "Virtual Machine com IIS", "Azure Container Instances"],
      correctAnswer: 0,
      explanation: "A funcionalidade de Static Website Hosting no Azure Storage permite servir conteúdo estático (HTML/CSS/JS) diretamente de um container especial '$web' a um custo extremamente baixo (preço de blob storage). É ideal para SPAs. App Services e VMs têm custos de computação fixos muito maiores. Referência: Microsoft Learn - Static Website Hosting",
      module: "Armazenamento"
    },
    {
      id: 132,
      question: "Você realiza snapshots diários de um disco gerenciado (Managed Disk) de 1 TB. Em média, apenas 10 GB de dados são modificados por dia nesse disco. Você está preocupado com os custos de armazenamento desses backups diários. Se você optar por usar Snapshots Incrementais em vez de Snapshots Completos, como será o consumo de armazenamento?",
      options: ["Os snapshots incrementais armazenarão apenas as mudanças (diferencial), economizando espaço", "Cada snapshot ocupará 1 TB independentemente das mudanças", "Snapshots incrementais custam mais caro por GB", "Não há diferença de custo armazenamento, apenas de tempo"],
      correctAnswer: 0,
      explanation: "Snapshots Incrementais armazenam apenas os blocos que mudaram desde o último snapshot. Em um disco de 1 TB com 10 GB de mudança diária, o primeiro snapshot é full (ou base), mas os seguintes ocupam apenas ~10 GB cada, resultando em enorme economia de custos comparado a armazenar 1 TB por dia. Referência: Microsoft Learn - Incremental Snapshots",
      module: "Armazenamento"
    },
    {
      id: 133,
      question: "Sua empresa precisa migrar 100 TB de dados de arquivo de um datacenter local para o Azure Blob Storage. A conexão de internet disponível é de apenas 100 Mbps, o que levaria meses para transferir essa quantidade de dados. Você tem um prazo máximo de uma semana para concluir a migração. Qual solução da Microsoft permite transferir os dados fisicamente enviando discos?",
      options: ["Azure Import/Export Service", "AzCopy com limitação de banda", "Azure ExpressRoute", "Upload via Azure Portal"],
      correctAnswer: 0,
      explanation: "O Azure Import/Export Service permite que você envie seus próprios discos rígidos físicos contendo dados para um datacenter do Azure, onde a Microsoft transfere os dados para sua Storage Account. É a solução ideal quando a largura de banda da rede é insuficiente para transferir grandes volumes (como 100 TB) em tempo hábil. Referência: Microsoft Learn - Import/Export",
      module: "Armazenamento"
    },
    {
      id: 134,
      question: "Você está avaliando métodos de migração de 200 TB de dados para o Azure. Em qual cenário a Microsoft recomenda considerar o uso do serviço Azure Import/Export ou Data Box em vez de uma transferência online via rede?",
      options: ["Quando a transferência via rede demoraria mais do que o envio físico dos discos (ex: > 7 dias)", "Sempre que os dados forem maiores que 1 GB", "Nunca, a transferência via rede é sempre preferível", "Apenas quando exigido por conformidade governamental"],
      correctAnswer: 0,
      explanation: "A regra prática é: se a transferência dos dados pela rede disponível for levar mais tempo do que o processo de envio físico dos discos (geralmente 5-7 dias para Data Box), então a transferência offline (Offline Data Transfer) é recomendada. Com 100 Mbps, 200 TB levaria meses. Com 10 Gbps, dias (aí rede ganha). É uma análise de Tempo vs Banda. Referência: Microsoft Learn - Offline Transfer",
      module: "Armazenamento"
    },
    {
      id: 135,
      question: "Você precisa migrar 80 TB de dados de um datacenter local para o Azure. Gerenciar o envio de dezenas de discos rígidos individuais (Import/Export) é inviável logisticamente. A Microsoft oferece um appliance seguro e robusto que pode ser enviado para o seu datacenter, onde você copia os dados via SMB/NFS e devolve para upload. Qual é o nome desse appliance com capacidade de ~80 TB?",
      options: ["Azure Data Box", "Azure Migration Tool", "AzCopy Cluster", "Azure Stack Edge"],
      correctAnswer: 0,
      explanation: "Azure Data Box é um appliance robusto (ruggedized) enviado pela Microsoft com capacidade de armazenamento utilizável de cerca de 80 TB. Facilita a migração offline de grandes volumes sem a necessidade de comprar e preparar discos próprios (como no Import/Export). Existem versões maiores (Heavy, 1PB) e menores (Disk, 8TB). Referência: Microsoft Learn - Data Box",
      module: "Armazenamento"
    },
    {
      id: 136,
      question: "Você tem 70 TB de dados para migrar para o Azure. Você está decidindo entre as versões do Azure Data Box. Sabendo que o Data Box 'Standard' tem uma capacidade utilizável de 80 TB e o Data Box Heavy tem cerca de 770 TB, qual dispositivo é o mais adequado e custo-eficiente para sua necessidade?",
      options: ["Azure Data Box (Standard)", "Azure Data Box Disk", "Azure Data Box Heavy", "Azure Data Box Gateway"],
      correctAnswer: 0,
      explanation: "Para 70 TB de dados, o Azure Data Box (Standard) que tem capacidade utilizável de 80 TB é o ajuste perfeito. O Data Box Heavy (1 PB de capacidade bruta, ~770 TB útil) seria um exagero (overkill) e mais caro. Data Box Disk (8 TB cada, enviado em packs de 5 = 40 TB) seria insuficiente para um único envio. Referência: Microsoft Learn - Data Box SKUs",
      module: "Armazenamento"
    },
    {
      id: 137,
      question: "Sua empresa armazena backups regulatórios na região East US, mas uma nova norma de conformidade exige que uma cópia exata desses dados seja mantida na região West US. Você precisa de uma solução que copie automaticamente e de forma assíncrona os blobs para a outra região, permitindo flexibilidade na escolha dos containers de destino. Qual recurso você deve configurar?",
      options: ["Object Replication", "AzCopy Manual", "Geo-Redundant Storage (GRS)", "Lifecycle Management Policy"],
      correctAnswer: 0,
      explanation: "A Replicação de Objetos (Object Replication) copia blobs de forma assíncrona entre um container de origem e um container de destino (mesmo em contas/regiões diferentes). Diferente do GRS (que replica toda a conta de forma opaca), o Object Replication oferece controle granular por container e permite replicação cruzada (cross-tenant, cross-region). Referência: Microsoft Learn - Object Replication",
      module: "Armazenamento"
    },
    {
      id: 138,
      question: "Uma aplicação global serve imagens armazenadas nos EUA. Usuários na região Ásia-Pacífico relatam lentidão no carregamento das imagens. Você configura a Replicação de Objetos (Object Replication) para copiar automaticamente as imagens para uma Storage Account na Ásia. Qual é o principal benefício dessa arquitetura para os usuários finais?",
      options: ["Minimização da latência (leituras locais)", "Backup e Disaster Recovery", "Redução de custos de armazenamento", "Melhoria na segurança dos dados"],
      correctAnswer: 0,
      explanation: "Um dos principais casos de uso da Replicação de Objetos é mover os dados para mais perto dos usuários (data locality) para reduzir a latência de leitura. Ao ter uma cópia das imagens na Ásia, os usuários locais leem de lá, em vez de atravessar o globo para ler dos EUA. Referência: Microsoft Learn - Object Replication Benefits",
      module: "Armazenamento"
    },
    {
      id: 139,
      question: "Você configurou uma política de Object Replication entre duas Storage Accounts. Um usuário deleta acidentalmente um blob na conta de origem (Source). O que acontece com a cópia desse blob na conta de destino (Destination)?",
      options: ["O blob de destino NÃO é deletado", "O blob de destino é deletado automaticamente", "O blob vai para Soft Delete no destino", "A replicação é pausada"],
      correctAnswer: 0,
      explanation: "Por design, a Replicação de Objetos NÃO replica operações de exclusão (delete). Se um blob é apagado na origem, a cópia no destino PERMANECE intacta. Isso serve como uma medida de segurança contra deleções acidentais ou maliciosas na origem. Para limpar o destino, você precisa de um processo separado (ex: Lifecycle Policy). Referência: Microsoft Learn - Replication and Deletes",
      module: "Armazenamento"
    },
    {
      id: 140,
      question: "Você está planejando implementar Object Replication para sincronizar 100 TB de dados entre East US e West Europe. Além do custo de armazenamento no destino, quais outros custos serão incorridos durante o processo de replicação?",
      options: ["Transações de leitura (origem), escrita (destino) e Egress de dados entre regiões", "Apenas o custo de transações, o tráfego é gratuito", "Apenas uma taxa fixa mensal pelo serviço", "Nenhum custo adicional além do armazenamento"],
      correctAnswer: 0,
      explanation: "A Replicação de Objetos incide custos por: 1) Transações de leitura na conta de origem para ler as mudanças; 2) Custos de Egress (saída) de dados por transferir bytes entre regiões (Geo-replication charges); 3) Transações de escrita na conta de destino para gravar os dados. É importante calcular esses custos para grandes volumes. Referência: Microsoft Learn - Replication Pricing",
      module: "Armazenamento"
    }
],
  modulo4: [
    {
      id: 181,
      question: "Você está arquitetando uma aplicação de missão crítica no Azure que exige um SLA de disponibilidade de 99.99%. A aplicação deve ser resiliente à falha completa de um datacenter (incêndio, falta de energia). Qual opção de disponibilidade você deve configurar para suas Máquinas Virtuais?",
      options: ["Availability Zones (Zonas de Disponibilidade)", "Availability Sets (Conjuntos de Disponibilidade)", "Single VM com Premium SSD", "Region Paris com GRS"],
      correctAnswer: 0,
      explanation: "Availability Zones distribuem as VMs em datacenters físicos separados e independentes (energia/rede) dentro da mesma região. Oferecem SLA de 99.99%. Availability Sets protegem apenas contra falhas de rack/update dentro do MESMO datacenter (99.95%). Referência: Microsoft Learn - Availability Zones",
      module: "Computação"
    },
    {
      id: 182,
      question: "Operadores de um site de e-commerce observam que durante a Black Friday, o uso de CPU sobe para 90% e o site fica lento. Fora desse período, as VMs ficam ociosas. Você precisa de uma solução que adicione instâncias de VM automaticamente quando a carga subir e remova quando cair, minimizando custos.",
      options: ["Azure VM Scale Sets com Autoscaling", "Azure Load Balancer", "Availability Sets", "Mudar para VMs maiores (Scale Up)"],
      correctAnswer: 0,
      explanation: "VM Scale Sets (VMSS) permitem criar e gerenciar um grupo de VMs idênticas com balanceamento de carga. O recurso de Autoscaling adiciona/remove instâncias (Scale Out/In) automaticamente baseado em métricas (ex: CPU > 70%), garantindo performance sob carga e economia na ociosidade. Referência: Microsoft Learn - VM Scale Sets",
      module: "Computação"
    },
    {
      id: 183,
      question: "Uma equipe de DevOps precisa rodar um container Docker simples para processar um relatório. O job roda uma vez por dia por 10 minutos. Eles não querem gerenciar clusters Kubernetes nem provisionar VMs inteiras para isso. Qual a solução 'serverless container' ideal?",
      options: ["Azure Container Instances (ACI)", "Azure Kubernetes Service (AKS)", "Azure App Service for Containers", "Virtual Machine com Docker"],
      correctAnswer: 0,
      explanation: "Azure Container Instances (ACI) é a maneira mais rápida e simples de rodar um container no Azure sem gerenciar infraestrutura. Perfeito para jobs curtos (burst) ou isolados. Paga-se por segundo de uso. AKS é para orquestração complexa. App Service é para web apps long-running. Referência: Microsoft Learn - ACI",
      module: "Computação"
    },
    {
      id: 184,
      question: "Sua empresa está migrando uma aplicação complexa de microsserviços do on-premise para o Azure. A aplicação consiste em 50 serviços interconectados que precisam de discovery, self-healing, rolling updates e scaling avançado. Qual serviço de orquestração é recomendado?",
      options: ["Azure Kubernetes Service (AKS)", "Azure Container Instances (ACI)", "Azure Functions", "Azure Service Fabric Mesh"],
      correctAnswer: 0,
      explanation: "Azure Kubernetes Service (AKS) é o serviço gerenciado de Kubernetes para orquestração de containers em escala enterprise. Oferece todas as features necessárias (discovery, healing, scaling) para microsserviços complexos. ACI é para containers simples. Functions é FaaS. Referência: Microsoft Learn - AKS",
      module: "Computação"
    },
    {
      id: 185,
      question: "Você mantém uma Web App no Azure App Service. Você precisa implantar uma nova versão da aplicação com zero downtime. Você quer testar a nova versão com 10% do tráfego real antes de liberar para todos. Se houver erro, o rollback deve ser instantâneo. Qual funcionalidade usar?",
      options: ["Deployment Slots", "Update Domains", "Traffic Manager", "Availability Sets"],
      correctAnswer: 0,
      explanation: "Deployment Slots permitem criar ambientes paralelos (ex: Staging) para sua Web App. Você pode rotear % do tráfego para testar (Canary) e realizar um SWAP de slots para promover a produção instantaneamente (e desfazer se necessário). Update Domains são para patching de VMs. Referência: Microsoft Learn - Deployment Slots",
      module: "Computação"
    },
    {
      id: 186,
      question: "Um desenvolvedor escreveu uma função em Python que redimensiona imagens. Essa função deve ser acionada sempre que uma imagem nova chega no Blob Storage. O volume é imprevisível (pode ser zero ou milhoes). Você quer pagar estritamente pelo tempo de execução do código (GB-segundos). Qual plano do Azure Functions escolher?",
      options: ["Consumption Plan (Serverless)", "App Service Plan (Dedicated)", "Premium Plan", "ASE (Isolated)"],
      correctAnswer: 0,
      explanation: "Consumption Plan é o modelo puramente serverless do Azure Functions. Você é cobrado apenas quando a função está rodando. Escala automaticamente de 0 a N instâncias. Ideal para eventos imprevisíveis e economia. App Service Plan cobra VM dedicada (24/7). Referência: Microsoft Learn - Azure Functions Plans",
      module: "Computação"
    },
    {
      id: 187,
      question: "Você precisa processar grandes lotes de dados financeiros. O trabalho pode ser interrompido e retomado sem problemas. Seu orçamento é limitado e você quer reduzir os custos de computação em até 90% aproveitando a capacidade ociosa do Azure. Qual tipo de VM você deve provisionar?",
      options: ["Azure Spot Virtual Machines", "Reserved Instances", "Burstable VMs (B-series)", "Standard VMs"],
      correctAnswer: 0,
      explanation: "Spot VMs oferecem descontos profundos (até 90%) em troca da possibilidade de o Azure reivindicar a capacidade (desligar a VM) quando precisar dela. Ideal para workloads interruptíveis/stateless. Reserved Instances exigem compromisso de 1 ou 3 anos. Burstable é para CPU variável. Referência: Microsoft Learn - Spot VMs",
      module: "Computação"
    },
    {
      id: 188,
      question: "Sua Web App está rodando em uma instância 'Standard' do App Service e está atingindo 100% de uso de memória RAM devido a um processo pesado. Você precisa aumentar a memória disponível para essa instância imediatamente, mudando para um plano 'Premium'. Que tipo de operação de escala é essa?",
      options: ["Scale Up (Vertical Scaling)", "Scale Out (Horizontal Scaling)", "Autoscaling", "Geo-Scaling"],
      correctAnswer: 0,
      explanation: "Scale Up (Escala Vertical) envolve aumentar o poder de uma instância existente (mais CPU/RAM, mudar tier). Scale Out (Horizontal) envolve adicionar MAIS instâncias (réplicas). Neste caso, mudar de Standard para Premium (mais RAM) é Scale Up. Referência: Microsoft Learn - Scale Up vs Out",
      module: "Computação"
    },
    {
      id: 189,
      question: "Sua organização possui licenças de software legado dependentes de hardware físico (licenciamento por socket/core físico) e requisitos estritos de isolamento físico por conformidade. Você precisa hospedar essas VMs no Azure garantindo que elas rodem em um servidor físico dedicado exclusivamente à sua empresa. Qual solução usar?",
      options: ["Azure Dedicated Host", "Isolated App Service Environment", "Confidential Computing", "Dedicated HSM"],
      correctAnswer: 0,
      explanation: "Azure Dedicated Host fornece servidores físicos dedicados a um único cliente Azure. Isso permite atender requisitos de isolamento físico e usar licenças baseadas em hardware (AHB para hosts). ASE é para Web Apps. Confidential Computing protege memória (enclave), não necessariamente host inteiro. Referência: Microsoft Learn - Dedicated Hosts",
      module: "Computação"
    },
    {
      id: 190,
      question: "Você precisa integrar o Salesforce com o Office 365 para criar tarefas no Outlook sempre que uma oportunidade for fechada. Você prefere usar uma interface visual de 'arrastar e soltar' para desenhar esse fluxo de trabalho (workflow) em vez de escrever código. Qual serviço Azure é mais apropriado?",
      options: ["Azure Logic Apps", "Azure Functions", "Azure Event Grid", "Azure Service Bus"],
      correctAnswer: 0,
      explanation: "Azure Logic Apps é um serviço de orquestração de workflows low-code/no-code com centenas de conectores pré-construídos para serviços SaaS (Salesforce, Office 365, etc.). Ideal para integração de sistemas sem escrever código complexo. Functions é tech-heavy (code-first). Event Grid é para routing de eventos. Referência: Microsoft Learn - Logic Apps",
      module: "Computação"
    }
  ],
  
  modulo5: [
    {
      id: 141,
      question: "Você configurou um NSG na Subnet1 permitindo tráfego RDP (porta 3389) de qualquer origem. No entanto, os administradores relatam que não conseguem conectar via RDP às VMs nessa subnet. Outros serviços como HTTP (porta 80) estão funcionando normalmente. Qual é a causa mais provável para o bloqueio do RDP?",
      options: ["Existe um NSG associado à interface de rede (NIC) da VM bloqueando a porta 3389", "O Firewall do Windows está bloqueando a conexão", "As VMs estão desligadas", "O serviço RDP não está rodando"],
      correctAnswer: 0,
      explanation: "No Azure, NSGs podem ser associados tanto à Subnet quanto à Interface de Rede (NIC) da VM. O tráfego deve ser permitido em AMBOS os níveis. Se a Subnet permite mas o NSG da NIC bloqueia (ou não tem regra explicita de allow), o tráfego é negado. Firewall do Windows é possível, mas NSG a nível de NIC é a causa de infraestrutura mais comum. Referência: Microsoft Learn - NSG Evaluation Order",
      module: "Redes Virtuais"
    },
    {
      id: 142,
      question: "Sua política de segurança exige que o acesso SSH (porta 22) às VMs Linux seja permitido APENAS a partir do endereço IP público do escritório corporativo (203.0.113.10/32). Todas as outras conexões devem ser bloqueadas. Qual regra de NSG você deve criar para atender a este requisito com o princípio do privilégio mínimo?",
      options: ["Allow SSH (Port 22) Source IP 203.0.113.10/32", "Allow SSH Source Any", "Deny All Inbound except 203.0.113.10", "Allow Any Port Source 203.0.113.10/32"],
      correctAnswer: 0,
      explanation: "O princípio do privilégio mínimo dita que você deve permitir apenas o tráfego necessário. Uma regra 'Allow' para a porta 22 com origem restrita ao CIDR do escritório (203.0.113.10/32) é a configuração correta. O 'Deny All Inbound' já existe por padrão (prioridade 65500), então basta criar a exceção de Allow. Referência: Microsoft Learn - NSG Best Practices",
      module: "Redes Virtuais"
    },
    {
      id: 143,
      question: "Você precisa restringir o acesso à internet das suas VMs. Elas devem ser capazes de acessar apenas URLs terminadas em '*.microsoft.com' via HTTPS. Qualquer tentativa de acesso a outros domínios deve ser bloqueada. Você precisa de inspeção de Camada 7 (Aplicação). Qual serviço você deve implementar?",
      options: ["Azure Firewall com Application Rules", "Network Security Group (NSG) com Service Tags", "User Defined Route (UDR)", "Azure Application Gateway WAF"],
      correctAnswer: 0,
      explanation: "Azure Firewall Application Rules operam na Camada 7 e permitem filtragem baseada em FQDNs (Fully Qualified Domain Names) e URLs, incluindo wildcards (*.microsoft.com). NSGs filtram apenas por IP e Porta (L3/L4) e Service Tags (que são IPs, não domínios granulares). Referência: Microsoft Learn - Firewall Application Rules",
      module: "Redes Virtuais"
    },
    {
      id: 144,
      question: "O sistema de inteligência de ameaças identificou o domínio 'malware.bad.com' como malicioso. Você precisa bloquear imediatamente todo o tráfego de saída das suas VMs para esse domínio específico usando FQDN. Qual recurso do Azure permite esse bloqueio granular?",
      options: ["Azure Firewall Application Rule (Action: Deny)", "NSG Outbound Rule (Deny)", "Azure DNS Private Zone", "Route Table"],
      correctAnswer: 0,
      explanation: "Para bloquear um domínio específico (FQDN) como 'malware.bad.com', você deve usar uma Application Rule no Azure Firewall com ação 'Deny'. NSGs não suportam bloqueio por FQDN de destino (apenas IP). Route Tables roteiam tráfego, não filtram por domínio. Referência: Microsoft Learn - Firewall Rules",
      module: "Redes Virtuais"
    },
    {
      id: 145,
      question: "Sua aplicação web pública está sofrendo ataques DDoS volumétricos de Camada 3 e 4 (ex: SYN floods). Você tem um orçamento limitado e não pode arcar com custos fixos mensais elevados de proteção premium. Qual nível de proteção DDoS do Azure você deve utilizar?",
      options: ["Azure DDoS Protection Basic", "Azure DDoS Protection Standard", "Azure Firewall Premium", "Azure WAF"],
      correctAnswer: 0,
      explanation: "Azure DDoS Protection Basic é gratuito e ativado automaticamente para todos os IPs públicos no Azure. Ele oferece proteção robusta contra ataques volumétricos L3/L4 comuns. O SKU Standard custa ~$3000/mês e oferece recursos avançados (relatórios, suporte), mas foge do requisito de 'orçamento limitado'. Referência: Microsoft Learn - DDoS Basic",
      module: "Redes Virtuais"
    },
    {
      id: 146,
      question: "Você gerencia um e-commerce de missão crítica que exige proteção DDoS avançada. Você precisa de relatórios de ataques em tempo real, mitigação ajustada ao perfil de tráfego da sua aplicação e acesso à equipe de resposta rápida a DDoS (DRR) da Microsoft durante ataques ativos. Qual SKU você deve contratar?",
      options: ["Azure DDoS Protection Standard", "Azure DDoS Protection Basic", "Azure Firewall Premium", "Network Security Group"],
      correctAnswer: 0,
      explanation: "Azure DDoS Protection Standard oferece recursos premium como: políticas de mitigação adaptativas (tuning), relatórios analíticos de ataques, garantia de custo (crédito por scaling durante ataque) e acesso ao time de suporte DRR (DDoS Rapid Response). Basic não oferece relatórios nem suporte dedicado. Referência: Microsoft Learn - DDoS Standard",
      module: "Redes Virtuais"
    },
    {
      id: 147,
      question: "Você possui servidores de aplicação distribuídos em três regiões globais: East US, West Europe e Southeast Asia. Você precisa de uma solução de balanceamento de carga global na Camada 7 (HTTP/S) que suporte terminação SSL e utilize a rede global de borda da Microsoft para acelerar o acesso dos usuários (Anycast). Qual serviço você deve usar?",
      options: ["Azure Front Door", "Azure Traffic Manager", "Azure Application Gateway", "Azure Load Balancer"],
      correctAnswer: 0,
      explanation: "Azure Front Door é um balanceador de carga global de Camada 7 (HTTP/S) e CDN. Ele usa a rede global da Microsoft (Anycast) para rotear usuários ao POP mais próximo e depois ao backend mais rápido. Inclui WAF e SSL offload. Traffic Manager é DNS-based (não proxy L7). App Gateway é regional. Referência: Microsoft Learn - Front Door",
      module: "Redes Virtuais"
    },
    {
      id: 148,
      question: "Você tem endpoints de um website simples em várias regiões. Você quer rotear os usuários para o endpoint geograficamente mais próximo para melhorar a performance. Você NÃO precisa de recursos de proxy, cache ou WAF, e deseja a solução mais custo-eficiente baseada em DNS. Qual serviço escolher?",
      options: ["Azure Traffic Manager", "Azure Front Door", "Azure Application Gateway", "Azure Load Balancer"],
      correctAnswer: 0,
      explanation: "Azure Traffic Manager é um balanceador de carga baseado em DNS. Ele resolve o nome DNS para o IP do endpoint mais próximo (método Performance) ou disponível. Como não processa o tráfego (apenas DNS), é muito barato e leve. Front Door é um proxy completo (mais caro). Referência: Microsoft Learn - Traffic Manager",
      module: "Redes Virtuais"
    },
    {
      id: 149,
      question: "Sua empresa tem 10 escritórios regionais e 50 VNets no Azure. Você precisa conectar todos os escritórios e todas as VNets entre si (conectividade any-to-any). Configurar VPNs site-to-site individuais e peerings seria complexo demais (mesh topology). Qual serviço gerenciado oferece um hub central para simplificar essa arquitetura WAN?",
      options: ["Azure Virtual WAN", "ExpressRoute Direct", "VPN Gateway Basic", "Azure Firewall"],
      correctAnswer: 0,
      explanation: "Azure Virtual WAN é um serviço de rede que fornece conectividade de trânsito otimizada e automatizada. Ele age como um hub central onde você conecta filiais (VPN/SD-WAN), usuários (P2S) e VNets (Peering), permitindo roteamento any-to-any automático sem gerenciar centenas de túneis individuais. Referência: Microsoft Learn - Virtual WAN",
      module: "Redes Virtuais"
    },
    {
      id: 150,
      question: "Você precisa conectar 25 escritórios remotos ao Azure usando conexões VPN Site-to-Site em um único Virtual Network Gateway. Você está considerando usar o SKU 'Basic' para economizar custos. Qual é a limitação técnica do SKU Basic que impediria essa implementação?",
      options: ["Suporta no máximo 10 túneis Site-to-Site", "Não suporta criptografia", "Não permite BGP", "Largura de banda limitada a 1 Gbps"],
      correctAnswer: 0,
      explanation: "O SKU 'Basic' do VPN Gateway é um SKU legado destinado a dev/test. Ele suporta no máximo 10 túneis Site-to-Site (S2S). Para conectar 25 escritórios, você precisa de um SKU VpnGw1 (suporta 30 túneis) ou superior. Além disso, Basic não suporta BGP oficial e tem baixa performance. Referência: Microsoft Learn - VPN Gateway SKUs",
      module: "Redes Virtuais"
    },
    {
      id: 151,
      question: "Você mantém uma conexão VPN Site-to-Site entre seu data center local e o Azure. A rede local é dinâmica e a equipe de redes frequentemente adiciona novas subnets que precisam acessar o Azure. Você quer evitar a tarefa manual de atualizar o Local Network Gateway no Azure a cada mudança de rota on-premise. Qual protocolo de roteamento dinâmico você deve habilitar no VPN Gateway?",
      options: ["BGP (Border Gateway Protocol)", "OSPF", "RIPv2", "Static Routing com Wildcards"],
      correctAnswer: 0,
      explanation: "Ao habilitar o BGP (Border Gateway Protocol) no Azure VPN Gateway e no seu roteador local, as rotas (prefixos de subnets) são trocadas e atualizadas automaticamente. Quando uma nova subnet é criada on-prem e anunciada via BGP, o Azure aprende a rota sem intervenção manual. Referência: Microsoft Learn - VPN Gateway BGP",
      module: "Redes Virtuais"
    },
    {
      id: 152,
      question: "Você precisa configurar BGP em sua VPN Site-to-Site para permitir a troca dinâmica de rotas entre o Azure e o on-premise. Você está revisando os SKUs do Azure VPN Gateway. Qual é o SKU mínimo de produção (geração atual) que suporta BGP?",
      options: ["VpnGw1", "Basic", "Standard", "HighPerformance"],
      correctAnswer: 0,
      explanation: "O suporte a BGP está disponível nos SKUs da geração VpnGw (VpnGw1, VpnGw2, VpnGw3, etc.). O SKU 'Basic' NÃO suporta BGP. 'Standard' e 'HighPerformance' são SKUs legados (embora Standart suporte BGP, a recomendação para novos deploys é VpnGw1). Referência: Microsoft Learn - VPN Gateway BGP Support",
      module: "Redes Virtuais"
    },
    {
      id: 153,
      question: "Sua empresa possui 100 filiais conectadas via VPN e 200 VNets no Azure. Você precisa facilitar a comunicação direta 'qualquer-para-qualquer' (any-to-any) entre todas as filiais e todas as VNets. Gerenciar centenas de conexões VPN individuais (mesh) tornou-se insustentável. Qual serviço de WAN definida por software da Microsoft resolve esse problema de escala?",
      options: ["Azure Virtual WAN", "Azure Traffic Manager", "ExpressRoute Global Reach", "Azure Load Balancer"],
      correctAnswer: 0,
      explanation: "Azure Virtual WAN é projetado para grandes escalas. Ele atua como um hub de trânsito global, permitindo que filiais (VPN/SD-WAN) e VNets se conectem a um hub central e comuniquem-se entre si automaticamente (transitive routing). Elimina a necessidade de configurar peerings manuais complexos ou VPNs mesh. Referência: Microsoft Learn - Virtual WAN",
      module: "Redes Virtuais"
    },
    {
      id: 154,
      question: "Você precisa fornecer acesso RDP seguro aos administradores que trabalham remotamente para gerenciar VMs em uma subnet privada. A política de segurança da empresa proíbe estritamente a instalação de clientes VPN nos laptops dos administradores e a exposição de IPs públicos nas VMs. Qual serviço permite acesso RDP via navegador (HTML5) sobre HTTPS?",
      options: ["Azure Bastion", "Point-to-Site VPN", "Just-in-Time VM Access", "Windows Virtual Desktop"],
      correctAnswer: 0,
      explanation: "Azure Bastion é um serviço PaaS totalmente gerenciado que fornece acesso RDP e SSH seguro diretamente pelo portal do Azure (navegador), usando TLS (HTTPS). Ele não requer IP público na VM alvo, nem instalação de cliente VPN no computador do usuário. Referência: Microsoft Learn - Azure Bastion",
      module: "Redes Virtuais"
    },
    {
      id: 155,
      question: "Você está implantando o Azure Bastion em sua VNet. A implantação falha com um erro indicando que a subnet é inválida. Você criou uma subnet chamada 'AzureBastionSubnet' com o range 10.1.255.0/28. O que você deve fazer para corrigir o erro?",
      options: ["Aumentar o tamanho da subnet para no mínimo /26 (ex: 10.1.255.0/26)", "Renomear a subnet para 'BastionSubnet'", "Diminuir o tamanho da subnet para /29", "Habilitar Service Endpoints na subnet"],
      correctAnswer: 0,
      explanation: "Para implantar o Azure Bastion, a subnet DEVE ser nomeada exatamente 'AzureBastionSubnet' e DEVE ter um prefixo de endereço de /26 ou maior (ex: /25, /24). O tamanho /28 (16 IPs) é muito pequeno para os recursos gerenciados do Bastion e suas necessidades de escalabilidade. Referência: Microsoft Learn - Bastion Configuration Requirements",
      module: "Redes Virtuais"
    },
    {
      id: 156,
      question: "Você tem uma topologia de rede Hub-Spoke. O Hub contém um Azure Firewall (IP 10.0.1.4). Você quer garantir que todo o tráfego de saída para a Internet originado nas VMs da VNet Spoke1 passe obrigatoriamente pelo Firewall para inspeção. Qual recurso de roteamento você deve configurar na Subnet da Spoke1?",
      options: ["User Defined Route (UDR) com Destination 0.0.0.0/0 e Next Hop Virtual Appliance (10.0.1.4)", "Network Security Group (NSG) com regra outbound allow", "VNet Peering com 'Use Remote Gateway'", "Virtual Network Gateway no Spoke"],
      correctAnswer: 0,
      explanation: "Para forçar o tráfego a passar por um firewall central (NVA), você deve criar uma Tabela de Rotas (UDR) e associá-la à subnet. A rota deve ter como destino '0.0.0.0/0' (todo tráfego internet) e 'Next Hop Type' como 'Virtual Appliance' apontando para o IP do Firewall. Isso sobrescreve a rota padrão do sistema. Referência: Microsoft Learn - Route Traffic through NVA",
      module: "Redes Virtuais"
    },
    {
      id: 157,
      question: "Você implantou um Firewall de terceiros (NVA) em uma VM Linux com duas interfaces de rede (NICs). Embora as rotas (UDR) estejam enviando tráfego para a NVA, os pacotes estão sendo descartados e não são encaminhados. Você verificou que o software de firewall está configurado corretamente. Qual configuração do Azure é frequentemente esquecida e causa esse comportamento?",
      options: ["Habilitar IP Forwarding nas NICs da VM no portal do Azure", "Configurar regras de NSG", "Criar um Public IP para a NVA", "Habilitar Accelerated Networking"],
      correctAnswer: 0,
      explanation: "Por padrão, as interfaces de rede do Azure (NICs) só aceitam tráfego destinado ao seu próprio endereço IP. Para que uma NVA funcione como roteador/firewall e encaminhe tráfego destinado a outros IPs, a opção 'IP Forwarding' deve ser habilitada explicitamente nas configurações da NIC no Portal do Azure. Referência: Microsoft Learn - NVA IP Forwarding",
      module: "Redes Virtuais"
    },
    {
      id: 158,
      question: "Sua Subnet1 possui uma UDR configurada para enviar todo tráfego (0.0.0.0/0) para um Firewall. Posteriormente, você habilita um Service Endpoint para 'Microsoft.Storage' na mesma subnet. Quando uma VM nessa subnet acessa uma Storage Account no Azure, qual caminho o tráfego seguirá?",
      options: ["Diretamente para o Storage via backbone da Microsoft (Service Endpoint tem prioridade)", "Pelo Firewall (UDR tem prioridade)", "O tráfego será bloqueado", "Depende da configuração do NSG"],
      correctAnswer: 0,
      explanation: "Service Endpoints têm precedência sobre as rotas padrão do sistema e rotas BGP para o prefixo de endereço do serviço. Embora a UDR rota 0.0.0.0/0 (default) para o NVA, o Service Endpoint cria rotas diretas mais específicas para os IPs públicos do serviço Azure Storage. Portanto, o tráfego vai direto, contornando o Firewall. Referência: Microsoft Learn - Routing Priority",
      module: "Redes Virtuais"
    },
    {
      id: 159,
      question: "Você configurou o VNet Peering entre VNet1 e VNet2 e o status é 'Connected' em ambos os lados. No entanto, o ping entre a VM1 (VNet1) e a VM2 (VNet2) falha com timeout. Ambas as VMs estão ligadas. Qual é a causa mais provável, considerando que o peering está estabelecido?",
      options: ["Um Network Security Group (NSG) ou Firewall no SO da VM está bloqueando ICMP", "O peering precisa de um Gateway VPN", "Os endereços IP das VNets estão sobrepostos", "O peering demora 24h para propagar"],
      correctAnswer: 0,
      explanation: "Se o status do peering é 'Connected', o roteamento está funcionando. A causa mais comum para falha de ping (ICMP) ou conexão (TCP) é o bloqueio por NSGs (na subnet ou NIC) ou pelo firewall do sistema operacional (Windows Firewall padrão bloqueia ping). O peering funciona instantaneamente após conectado e não requer Gateway. Referência: Microsoft Learn - Troubleshoot Peering",
      module: "Redes Virtuais"
    },
    {
      id: 160,
      question: "Você habilitou o IP Forwarding na NIC da sua NVA usando PowerShell. No entanto, a NVA ainda não está roteando tráfego. Você sabe que o IP Forwarding precisa ser configurado em dois lugares. Onde mais você deve habilitar o encaminhamento?",
      options: ["No sistema operacional da VM (ex: sysctl no Linux)", "Na subnet da NVA", "No NSG da NVA", "No Azure Firewall Policy"],
      correctAnswer: 0,
      explanation: "Para uma NVA funcionar, o IP Forwarding deve ser ativado (1) na NIC do Azure (plano de controle) E (2) no sistema operacional da VM (plano de dados). No Linux, isso é feito via `sysctl net.ipv4.ip_forward=1`. No Windows, via registro ou netsh. Se o SO não estiver configurado para rotear, ele descartará os pacotes. Referência: Microsoft Learn - Enable IP Forwarding",
      module: "Redes Virtuais"
    },
    {
      id: 161,
      question: "Você tem 100 VMs de backend em uma subnet privada (sem IPs públicos). Essas VMs precisam acessar a internet para baixar atualizações do Windows Update. Por razões de segurança, não podem receber conexões de entrada da internet. Qual serviço gerenciado você deve implementar para fornecer conectividade de saída (SNAT) segura e escalável?",
      options: ["Azure NAT Gateway", "Azure Load Balancer Público", "Associar IPs públicos a cada VM", "Azure Bastion"],
      correctAnswer: 0,
      explanation: "Azure NAT Gateway é a solução recomendada para conectividade de saída segura e escalável. Ele permite que todas as VMs de uma subnet usem um IP público estático para saída (SNAT) sem expor as VMs a conexões de entrada. Load Balancer e IPs públicos expõem a superfície de ataque. Bastion é para RDP/SSH, não para saída de tráfego das VMs. Referência: Microsoft Learn - Azure NAT Gateway",
      module: "Redes Virtuais"
    },
    {
      id: 162,
      question: "Você configurou um Azure NAT Gateway com 1 IP Público associado a uma subnet com 200 VMs. Durante picos de tráfego, as aplicações falham e os logs indicam erros de 'SNAT port exhaustion'. Você precisa aumentar a capacidade de portas SNAT. O que você deve fazer?",
      options: ["Adicionar mais endereços IP Públicos ao NAT Gateway (até 16 IPs totais)", "Criar um segundo NAT Gateway na mesma subnet", "Aumentar o Timeout de Ociosidade TCP", "Mudar o SKU do NAT Gateway"],
      correctAnswer: 0,
      explanation: "O esgotamento de portas SNAT ocorre quando não há portas suficientes para mapear conexões de saída. Cada IP público fornece 64.512 portas SNAT. Adicionar mais IPs públicos ao NAT Gateway (até 16) aumenta linearmente o pool de portas disponíveis. Não é possível ter mais de um NAT Gateway por subnet. Referência: Microsoft Learn - SNAT Port Exhaustion",
      module: "Redes Virtuais"
    },
    {
      id: 163,
      question: "Você tem um servidor web em uma VM interna (10.1.0.10). Todo o tráfego de entrada passa por um Azure Firewall com IP público (20.30.40.50). Você precisa configurar o Firewall para encaminhar tráfego HTTP da internet para a VM interna. Qual tipo de regra você deve criar?",
      options: ["DNAT (Destination NAT) Rule", "Network Rule (Allow)", "Application Rule (Allow)", "SNAT Rule"],
      correctAnswer: 0,
      explanation: "Para encaminhar tráfego de entrada de um IP Público endereçado ao Firewall para um IP Privado interno (Port Forwarding), você deve usar uma regra DNAT. As regras de Rede (Network) e Aplicação são para controlar o tráfego de saída (Outbound) ou Lateral (East-West), não para entrada da Internet (Inbound). Referência: Microsoft Learn - Firewall DNAT",
      module: "Redes Virtuais"
    },
    {
      id: 164,
      question: "Você criou uma Private DNS Zone 'privatelink.blob.core.windows.net' para resolver endpoints privados. As VMs na VNet1 resolvem corretamente para o IP privado. As VMs na VNet2, no entanto, ainda resolvem para o IP público do Storage. O que você esqueceu de configurar?",
      options: ["Criar um Virtual Network Link entre a Private DNS Zone e a VNet2", "Configurar VNet Peering entre VNet1 e VNet2", "Reiniciar as VMs na VNet2", "Configurar um DNS Forwarder"],
      correctAnswer: 0,
      explanation: "Para que uma VNet possa resolver nomes contidos em uma Azure Private DNS Zone, deve existir um 'Virtual Network Link' explícito conectando a VNet à zona DNS. O VNet Peering permite conectividade IP, mas não propaga a resolução de nomes da zona privada automaticamente. Referência: Microsoft Learn - Azure Private DNS",
      module: "Redes Virtuais"
    },
    {
      id: 165,
      question: "Você usa o Azure Traffic Manager com o método de roteamento 'Performance'. Seus endpoints estão localizados nos EUA e na Europa. Usuários baseados na Ásia relatam alta latência ao acessar a aplicação. Qual é a causa raiz mais provável e a solução?",
      options: ["Não há endpoint próximo à Ásia. Solução: Adicionar um endpoint na região Ásia.", "O Traffic Manager está mal configurado. Solução: Mudar para método Weighted.", "Cache de DNS. Solução: Reduzir o TTL.", "Latência de rede global. Solução: Usar ExpressRoute."],
      correctAnswer: 0,
      explanation: "O método 'Performance' roteia o usuário para o endpoint com menor latência de rede. Se só existem endpoints nos EUA e Europa, usuários na Ásia serão roteados para um desses locais distantes, resultando em latência. A solução física é implantar uma instância da aplicação (endpoint) em uma região da Ásia. Referência: Microsoft Learn - Traffic Manager Routing Methods",
      module: "Redes Virtuais"
    },
    {
      id: 166,
      question: "Você tem um Application Security Group (ASG) chamado 'ASG-Web' contendo 20 VMs. Um NSG permite tráfego HTTP para o destino 'ASG-Web'. Você adiciona uma nova VM 'web-server21' ao grupo 'ASG-Web'. A nova VM começará a receber tráfego HTTP da internet automaticamente ou requer configuração extra no NSG?",
      options: ["Sim, automaticamente. As regras aplicam-se dinamicamente.", "Não, você deve atualizar o NSG manualmente.", "Apenas após reiniciar a VM.", "Apenas se o NSG estiver na NIC."],
      correctAnswer: 0,
      explanation: "A principal vantagem dos ASGs é a atualização dinâmica. Quando você adiciona uma VM a um ASG, ela herda automaticamente todas as regras de NSG que referenciam esse ASG como origem ou destino. Nenhuma alteração manual nas regras do NSG é necessária. Referência: Microsoft Learn - Application Security Groups",
      module: "Redes Virtuais"
    },
    {
      id: 167,
      question: "Qual é a principal vantagem operacional de usar Application Security Groups (ASGs) em regras de Network Security Group (NSG) em vez de especificar endereços IP individuais?",
      options: ["Simplifica o gerenciamento, permitindo agrupar VMs por função sem reescrever regras ao mudar IPs.", "Melhora a performance de rede diminuindo a latência.", "Reduz o custo da fatura do Azure.", "Aumenta o nível de criptografia do tráfego."],
      correctAnswer: 0,
      explanation: "ASGs permitem definir políticas de segurança baseadas na lógica da aplicação (ex: 'Web Servers', 'DB Servers') em vez de IPs. Isso elimina a necessidade de manutenção constante de listas de IPs em regras de NSG (White/Blacklisting) quando VMs são criadas ou destruídas. Não afeta performance ou custo diretamente. Referência: Microsoft Learn - ASG Overview",
      module: "Redes Virtuais"
    },
    {
      id: 168,
      question: "Você tem um NSG complexo com muitas regras personalizadas. Ao tentar adicionar novas regras, você recebe um erro de cota. Qual é o limite padrão de regras de segurança por NSG no Azure e qual é a melhor prática para evitar atingi-lo?",
      options: ["1000 regras por NSG. Melhor prática: consolidar regras usando ASGs e Service Tags.", "100 regras. Melhor prática: criar múltiplos NSGs.", "500 regras. Melhor prática: usar Azure Firewall.", "Ilimitado."],
      correctAnswer: 0,
      explanation: "O limite padrão e máximo de regras de segurança por NSG é 1000. Regras excessivas tornam o gerenciamento difícil e propenso a erros. A melhor prática é usar Application Security Groups (ASGs) e Service Tags para agrupar múltiplos IPs e portas em menos regras, mantendo o NSG limpo e eficiente. Referência: Microsoft Learn - Azure Limits",
      module: "Redes Virtuais"
    },
    {
      id: 169,
      question: "Um pacote de rede entra em um NSG. Existem regras com prioridades 100, 150, 200 e 4000. O pacote corresponde aos critérios das regras 150 (Allow) e 200 (Deny). O tráfego será permitido ou negado?",
      options: ["Permitido, pois a regra 150 tem prioridade mais alta (número menor) que a 200.", "Negado, pois Deny sempre vence Allow.", "Negado, pois a regra 200 é mais recente.", "Permitido, pois ambas as regras são avaliadas."],
      correctAnswer: 0,
      explanation: "No Azure NSG, as regras são processadas em ordem de prioridade, onde o NÚMERO MENOR tem maior prioridade. O processamento para na primeira regra que corresponde ao tráfego (First Match Wins). Como 150 < 200, a regra 150 é processada, o tráfego é permitido e a regra 200 nunca é avaliada. Referência: Microsoft Learn - NSG Rule Priority",
      module: "Redes Virtuais"
    },
    {
      id: 170,
      question: "Seu Network Security Group (NSG) possui regras 'Allow' explícitas para portas 80 (HTTP) e 443 (HTTPS) com prioridades 100 e 110. Um pacote de entrada na porta 22 (SSH) chega à interface de rede. Não há regra explícita negando a porta 22. Qual será o destino do pacote?",
      options: ["Ele será bloqueado (Denied) pela regra padrão 'DenyAllInbound'.", "Ele será permitido (Allowed) porque não há regra de bloqueio explícito.", "Ele será colocado em quarentena.", "Ele será permitido se vier da internet."],
      correctAnswer: 0,
      explanation: "Todo NSG possui regras padrão (default rules) que não podem ser excluídas. A regra 'DenyAllInbound' (prioridade 65500) bloqueia todo o tráfego de entrada que não foi explicitamente permitido por uma regra de prioridade mais alta. Como a porta 22 não está na lista de 'Allow', ela cai na regra 'Deny' padrão. Referência: Microsoft Learn - NSG Default Rules",
      module: "Redes Virtuais"
    },
    {
      id: 171,
      question: "Você possui uma VNet (10.0.0.0/8) segmentada em 50 subnets. Você deseja aplicar uma política de segurança única a TODAS as subnets usando um único Network Security Group (NSG). Você tenta associar o NSG diretamente ao recurso da VNet. Isso funcionará?",
      options: ["Não, NSGs só podem ser associados a Subnets ou Interfaces de Rede (NICs).", "Sim, o NSG será herdado por todas as subnets.", "Sim, mas apenas se a VNet estiver na região US East.", "Não, você precisa de um Firewall para isso."],
      correctAnswer: 0,
      explanation: "No Azure, NSGs têm dois escopos de associação possíveis: Subnet ou Interface de Rede (NIC). Não é possível associar um NSG diretamente a uma VNet inteira. Para aplicar a mesma política a 50 subnets, você deve associar o mesmo objeto NSG a cada uma das 50 subnets individualmente (ou usar scripts para automação). Referência: Microsoft Learn - NSG Association",
      module: "Redes Virtuais"
    },
    {
      id: 172,
      question: "Uma VM está associada a um NSG de Subnet que possui uma regra 'Deny Port 22'. A mesma VM tem um NSG de Interface de Rede (NIC) com uma regra 'Allow Port 22'. O que acontece com um pacote SSH de entrada destinado a essa VM?",
      options: ["O pacote é bloqueado (Denied).", "O pacote é permitido (Allowed).", "O pacote é permitido apenas se a origem for interna.", "Causa um erro de configuração."],
      correctAnswer: 0,
      explanation: "Para tráfego de entrada (Inbound), o Azure avalia primeiro o NSG da Subnet e depois o NSG da NIC. O tráfego deve ser permitido em AMBOS. Se o NSG da Subnet nega (Deny), o pacote é descartado imediatamente e nunca chega a ser avaliado pelo NSG da NIC. Portanto, o tráfego é bloqueado. Referência: Microsoft Learn - NSG Flow Evaluation",
      module: "Redes Virtuais"
    },
    {
      id: 173,
      question: "Você está usando o Network Watcher Connection Monitor para testar a conectividade TCP na porta 80 entre a VM-A e a VM-B. O monitor reporta falha na conexão. No entanto, você executa um comando 'ping' (ICMP) entre as mesmas VMs e ele funciona perfeitamente (0% de perda). Qual é a explicação técnica mais provável?",
      options: ["O Connection Monitor testa TCP (porta 80), enquanto o Ping usa ICMP. Um NSG está bloqueando apenas a porta 80.", "O Connection Monitor está quebrado.", "O Ping tem prioridade de roteamento sobre o TCP.", "As VMs estão em regiões diferentes."],
      correctAnswer: 0,
      explanation: "Ferramentas diferentes testam protocolos diferentes. O Ping usa ICMP. O Connection Monitor simula tráfego real da aplicação (TCP/HTTP). É muito comum que firewalls ou NSGs permitam ICMP para diagnóstico (Ping funciona) mas bloqueiem portas de aplicação específicas (TCP 80 falha). O sucesso do Ping não garante que a porta da aplicação está aberta. Referência: Microsoft Learn - Troubleshoot Connectivity",
      module: "Redes Virtuais"
    },
    {
      id: 174,
      question: "O Azure Firewall Premium está configurado com Threat Intelligence em modo 'Alert and Deny'. O firewall está bloqueando o acesso a um domínio de um parceiro de negócios legítimo, identificando-o incorretamente como malicioso (falso positivo). Você deve restaurar o acesso sem desativar a proteção de inteligência de ameaças globalmente. O que fazer?",
      options: ["Adicionar o FQDN do domínio à 'Threat Intelligence Allowlist' na política do Firewall.", "Mudar o modo para 'Alert only'.", "Criar uma regra de Aplicação com prioridade 100.", "Desabilitar o Threat Intelligence."],
      correctAnswer: 0,
      explanation: "A maneira correta de lidar com falsos positivos no Threat Intelligence é adicionar o domínio (FQDN) específico à lista de permissões (Allowlist) da funcionalidade. Isso mantém a proteção ativa para todos os outros domínios, mas abre uma exceção granular para o parceiro. Mudar para 'Alert only' reduz a postura de segurança. Referência: Microsoft Learn - Firewall Threat Intelligence",
      module: "Redes Virtuais"
    },
    {
      id: 175,
      question: "Você precisa solucionar um problema de conectividade na porta 443 de uma VM crítica de produção (VM1). A equipe de segurança não permite que você faça login na VM (via RDP ou SSH) para instalar ferramentas de diagnóstico como o Wireshark. Como você pode capturar os pacotes de rede dessa VM para análise forense?",
      options: ["Usar o Azure Network Watcher Packet Capture.", "Usar o Azure Monitor Metrics.", "Habilitar NSG Flow Logs.", "Usar o Connection Monitor."],
      correctAnswer: 0,
      explanation: "O Network Watcher Packet Capture é uma ferramenta que permite capturar o tráfego de entrada e saída de uma VM sem precisar fazer login nela. O agente da VM (VM Agent) executa a captura e salva o arquivo .cap em uma Storage Account, que pode ser baixado e analisado externamente. NSG Flow Logs mostram metadados (quem falou com quem), não o conteúdo dos pacotes (payload). Referência: Microsoft Learn - Packet Capture",
      module: "Redes Virtuais"
    },
    {
      id: 176,
      question: "Você tem três VNets: VNet-A, VNet-B e VNet-C. O VNet Peering está configurado entre A↔B e entre B↔C. Uma VM na VNet-A tenta acessar uma VM na VNet-C diretamente usando IP privado e falha. Qual é o motivo arquitetural para essa falha?",
      options: ["O VNet Peering não é transitivo.", "As VNets estão em regiões diferentes.", "Falta um Gateway VPN na VNet-B.", "O NSG está bloqueando o tráfego."],
      correctAnswer: 0,
      explanation: "Por padrão, o VNet Peering não é transitivo. Isso significa que se A está pareado com B, e B com C, A NÃO consegue falar com C automaticamente através de B. Para conectar A e C, você deve criar um peering direto entre eles (Full Mesh) ou configurar B como um Hub de Trânsito usando um Gateway VPN ou NVA e tabelas de rotas. Referência: Microsoft Learn - Perring Transitivity",
      module: "Redes Virtuais"
    },
    {
      id: 177,
      question: "Você configurou o Global VNet Peering entre uma VNet no East US e uma VNet no West Europe. Qual é a principal implicação de custo para o tráfego de dados que flui através desse peering?",
      options: ["O tráfego é cobrado com base nas taxas de transferência de dados Inter-Region (entrada e saída).", "O tráfego é gratuito.", "Apenas o tráfego de saída é cobrado.", "Existe uma taxa fixa mensal por peering."],
      correctAnswer: 0,
      explanation: "O Global VNet Peering (entre regiões diferentes) incorre em custos de transferência de dados baseados no volume (GB). Tanto o tráfego de Entrada (Ingress) quanto o de Saída (Egress) são cobrados nas respectivas zonas de faturamento. É mais caro que o peering local (intra-região). Não há taxa fixa mensal, apenas por uso. Referência: Microsoft Learn - Peering Pricing",
      module: "Redes Virtuais"
    },
    {
      id: 178,
      question: "Você está balanceando tráfego para um pool de servidores web usando um Azure Load Balancer Standard. A aplicação armazena o carrinho de compras na memória do servidor (sessão local). Usuários reclamam que perdem o carrinho durante a navegação. O que você deve configurar no Load Balancer para resolver isso?",
      options: ["Session Persistence (Client IP)", "Health Probe HTTP", "Outbound Rules", "Floating IP"],
      correctAnswer: 0,
      explanation: "Por padrão, o Load Balancer distribui o tráfego com base em um hash de 5 tuplas, o que não garante que o mesmo usuário vá para a mesma VM. Para aplicações com estado (stateful) como essa, você deve habilitar a 'Session Persistence' (preferencialmente Client IP). Isso cria uma afinidade (Sticky Session) garantindo que o usuário permaneça no mesmo servidor backend. Referência: Microsoft Learn - Load Balancer Distribution",
      module: "Redes Virtuais"
    },
    {
      id: 179,
      question: "Seu Azure Application Gateway com WAF está bloqueando requisições legítimas para a API de upload, acionando incorretamente a regra CRS 920450. Você deve permitir esse tráfego sem desativar o Web Application Firewall inteiramente. Qual é a configuração recomendada?",
      options: ["Configurar uma Exclusão (WAF Exclusion) aplicada especificamente à regra ou caminho.", "Mudar o WAF para o modo 'Detection'.", "Desativar o conjunto de regras CRS inteiro.", "Aumentar o limite de tamanho do request body."],
      correctAnswer: 0,
      explanation: "Para tratar falsos positivos no WAF, a melhor prática é criar uma Exclusão (Exclusion). Você pode excluir cabeçalhos, cookies ou argumentos específicos da inspeção do WAF para evitar o bloqueio, mantendo a proteção ativa para o restante da aplicação. Mudar para 'Detection' para de bloquear ataques reais. Referência: Microsoft Learn - WAF Exclusions",
      module: "Redes Virtuais"
    },
    {
      id: 180,
      question: "Você tem um ambiente Azure com múltiplas VNets em diferentes assinaturas e regiões. Você cria uma Private DNS Zone centralizada (contoso.internal). Você precisa que TODAS as VNets resolvam os nomes dessa zona. Qual é o método nativo para compartilhar essa zona de DNS privado?",
      options: ["Criar Virtual Network Links em cada VNet apontando para a Private DNS Zone.", "Configurar peering entre todas as VNets.", "Usar um servidor DNS Customizado (Bind/Windows).", "Habilitar Auto-Registration em todas as VNets."],
      correctAnswer: 0,
      explanation: "O Azure Private DNS permite compartilhar uma zona entre múltiplas VNets criando 'Virtual Network Links'. Você pode vincular até 1000 VNets a uma única zona DNS privada. O peering conecta a rede, mas os links de DNS são necessários para a resolução de nomes da zona. Referência: Microsoft Learn - Private DNS Scenarios",
      module: "Redes Virtuais"
    }
  ],
  
  modulo6: [

    {
      id: 221,
      question: "Você precisa implantar uma solução de monitoramento para coletar métricas de CPU, IOPS e Rede de diversos recursos: VMs, App Services e SQL Databases. Você quer uma plataforma centralizada nativa que colete esses dados automaticamente sem agentes complexos. Qual serviço do Azure Monitor você deve usar?",
      options: ["Azure Monitor Metrics", "Azure Monitor Logs", "Azure Advisor", "Network Watcher"],
      correctAnswer: 0,
      explanation: "Azure Monitor Metrics é o serviço que coleta dados numéricos (time-series) de recursos Azure em tempo real. A maioria dos recursos (VMs, SQL, App Service) emite métricas padrão automaticamente para a plataforma, permitindo visualização e alertas sem configuração complexa. Logs exigem queries. Advisor é para recomendações. Referência: Microsoft Learn - Azure Monitor Metrics",
      module: "Monitoramento e Backup"
    },
    {
      id: 222,
      question: "Você está criando um Alerta de Métrica para notificar se a CPU da VM1 exceder 90% por 15 minutos consecutivos. Quais parâmetros de configuração são obrigatórios para definir a lógica da regra de alerta?",
      options: ["Threshold (Limiar), Aggregation Type (Agregação), Period (Janela) e Frequency (Frequência)", "Apenas o Threshold (90%)", "Apenas o Action Group", "Severity Level e Description"],
      correctAnswer: 0,
      explanation: "Para definir a lógica de um alerta métrico, você deve especificar: 1) O sinal (CPU), 2) O Operador (>), 3) O Threshold (90), 4) A Agregação (Média, Max, Total), 5) O Período/Granularidade (ex: média sobre os últimos 15 min) e 6) A Frequência de avaliação (ex: a cada 1 min). Action Group é 'o que fazer', não a lógica do trigger. Referência: Microsoft Learn - Metric Alerts",
      module: "Monitoramento e Backup"
    },
    {
      id: 223,
      question: "Você precisa ser alertado sempre que houver mais de 10 falhas de login (EventID 4625) em qualquer VM em uma janela de 5 minutos. Os logs de segurança estão sendo enviados para um Log Analytics Workspace. Que tipo de alerta você deve configurar?",
      options: ["Log Query Alert (Alerta de Consulta de Log)", "Metric Alert", "Activity Log Alert", "Service Health Alert"],
      correctAnswer: 0,
      explanation: "Para alertar com base em padrões complexos encontrados nos logs (como contagem de EventIDs específicos via KQL), você deve usar um Log Query Alert. Ele executa uma consulta KQL periodicamente e dispara se o resultado atender à condição (> 10). Metric Alerts usam valores numéricos simples. Activity Log monitora operações administrativas do Azure. Referência: Microsoft Learn - Log Alerts",
      module: "Monitoramento e Backup"
    },
    {
      id: 224,
      question: "Compliance exige que qualquer criação, exclusão ou modificação de recursos na assinatura dispare um alerta imediato identificando o usuário responsável (identidade do chamador). Qual sinal do Azure Monitor você deve monitorar?",
      options: ["Azure Activity Log (Log de Atividades)", "Azure Monitor Metrics", "Log Analytics Workspace", "Resource Health"],
      correctAnswer: 0,
      explanation: "O Azure Activity Log é um log de plataforma que fornece insights sobre eventos no nível da assinatura (Plano de Gerenciamento). Ele registra QUEM (Caller), QUANDO (Time) e O QUE (Operation - Create/Delete/Update) foi feito nos recursos. É a fonte correta para auditoria de operações administrativas. Referência: Microsoft Learn - Activity Log",
      module: "Monitoramento e Backup"
    },
    {
      id: 225,
      question: "Você tem 10 regras de alerta diferentes (CPU, Disco, SQL, etc). Todas devem enviar notificação por email para o mesmo grupo de 5 administradores e acionar o mesmo Runbook de automação. Qual é a melhor prática de arquitetura para gerenciar essas ações?",
      options: ["Criar um único Action Group e associá-lo a todas as 10 regras de alerta.", "Criar 10 Action Groups diferentes, um para cada regra.", "Configurar as ações diretamente dentro de cada regra de alerta.", "Usar Logic Apps para enviar os emails."],
      correctAnswer: 0,
      explanation: "A melhor prática é desacoplar a definição do Alerta (Condição) da Ação (Notificação). Action Groups são objetos reutilizáveis. Ao criar um único Action Group com os emails e o runbook, você pode associá-lo a múltiplas regras. Se um administrador sair da empresa, você atualiza apenas o Action Group, não as 10 regras. Referência: Microsoft Learn - Action Groups Best Practices",
      module: "Monitoramento e Backup"
    },
    {
      id: 226,
      question: "Um Action Group no Azure Monitor suporta quais tipos de ações simultâneas?",
      options: ["Email/SMS/Push, Automação (Runbooks, Logic Apps, Functions), ITSM e Webhooks.", "Apenas Email e SMS.", "Apenas uma ação por grupo.", "Apenas Webhooks."],
      correctAnswer: 0,
      explanation: "Action Groups são flexíveis e suportam múltiplos tipos de ações simultaneamente. Ao disparar, ele pode enviar emails/SMS para administradores, chamar um Webhook para um sistema externo, disparar uma Azure Function ou Logic App para remediação e abrir um ticket em uma ferramenta ITSM (como ServiceNow) via conector. Referência: Microsoft Learn - Action Group Actions",
      module: "Monitoramento e Backup"
    },
    {
      id: 227,
      question: "Você tem uma API pública crítica com SLA de 99.9%. Você precisa monitorar proativamente a disponibilidade e latência do endpoint a partir de 5 locais globais (ex: EUA, Europa, Ásia) e receber alertas em caso de falha. Qual recurso do Application Insights você deve usar?",
      options: ["Availability Tests (Standard URL Ping)", "Metrics Explorer", "Smart Detection", "Live Metrics Stream"],
      correctAnswer: 0,
      explanation: "Availability Tests (anteriormente 'Ping tests') permitem configurar sondas web que enviam requisições HTTP para seu endpoint a partir de datacenters do Azure ao redor do mundo em intervalos regulares. Se o endpoint falhar ou responder lentamente, um alerta é disparado. É monitoramento sintético e proativo. Referência: Microsoft Learn - Availability Tests",
      module: "Monitoramento e Backup"
    },
    {
      id: 228,
      question: "Você precisa configurar um teste de disponibilidade que simule um fluxo de usuário completo: Login, Pesquisa e Adicionar ao Carrinho. O teste básico de Ping URL não é suficiente. Qual é a abordagem recomendada para criar esse teste de disponibilidade complexo?",
      options: ["Custom TrackAvailability Test (Azure Functions)", "Standard URL Ping Test", "Network Watcher Connection Monitor", "Traffic Manager Probe"],
      correctAnswer: 0,
      explanation: "Para fluxos complexos e transações de várias etapas, a recomendação moderna é criar um teste personalizado usando código (chamando o método TrackAvailability do SDK do App Insights) executado via Azure Functions. O antigo 'Multi-step web test' (arquivo .webtest do Visual Studio) está em depreciação para novos recursos. Referência: Microsoft Learn - Custom Availability Tests",
      module: "Monitoramento e Backup"
    },
    {
      id: 229,
      question: "Sua API em produção está lenta (latência alta). Você precisa identificar exatamente qual linha de código ou função está consumindo tempo de CPU (Hot Path), sem conseguir reproduzir o problema localmente. Qual ferramenta do Application Insights ajuda nisso?",
      options: ["Application Insights Profiler", "Snapshot Debugger", "Live Metrics Stream", "Usage Analysis"],
      correctAnswer: 0,
      explanation: "O Application Insights Profiler coleta traços de desempenho detalhados (call stacks e tempos de execução) de servidores de produção com baixo impacto. Ele ajuda a identificar o 'Hot Path' (código lento) diretamente no ambiente real, eliminando a necessidade de adivinhar ou reproduzir localmente. Referência: Microsoft Learn - App Insights Profiler",
      module: "Monitoramento e Backup"
    },
    {
      id: 230,
      question: "Uma exceção NullReferenceException ocorre raramente em sua aplicação de produção. Para corrigir, você precisa saber os valores exatos das variáveis locais no momento do erro. Você não pode anexar um depurador na produção por motivos de segurança. O que usar?",
      options: ["Snapshot Debugger", "Profiler", "Log Stream", "Crash Dump manual"],
      correctAnswer: 0,
      explanation: "O Snapshot Debugger captura automaticamente um 'snapshot' do estado da memória (variáveis locais, pilha de chamadas, objetos) quando uma exceção é lançada. Isso permite depurar o erro com dados reais de produção sem parar o processo ou anexar um depurador intrusivo. Referência: Microsoft Learn - Snapshot Debugger",
      module: "Monitoramento e Backup"
    },
    {
      id: 231,
      question: "Você tem um Recovery Services Vault na região East US, configurado com armazenamento GRS (Geo-Redundant Storage) por padrão. Ocorreu um desastre regional completo e o data center East US está offline. Você precisa garantir que seus backups estejam seguros e disponíveis de alguma forma. O que acontece com seus dados?",
      options: ["Eles são replicados automaticamente para a região par (West US) e podem ser restaurados lá.", "Eles são perdidos permanentemente.", "Você deve iniciar uma cópia manual para outra região.", "Eles são movidos para o Archive Tier."],
      correctAnswer: 0,
      explanation: "O armazenamento GRS replica seus dados de backup para uma região secundária emparelhada (Paired Region) a centenas de quilômetros de distância. Em caso de falha completa da região primária, os dados permanecem seguros na região secundária e podem ser restaurados (se o recurso Cross-Region Restore estiver habilitado ou se a Microsoft declarar failover). Referência: Microsoft Learn - Backup Geo-Redundancy",
      module: "Monitoramento e Backup"
    },
    {
      id: 232,
      question: "Você precisa fazer backup de servidores on-premise rodando cargas de trabalho complexas como SQL Server, Exchange e SharePoint para o Azure. O backup deve ser 'application-aware' (consistência transacional) e os dados devem ser retidos por 7 anos. Qual componente de backup você deve instalar no seu data center?",
      options: ["Microsoft Azure Backup Server (MABS)", "Agente MARS (Microsoft Azure Recovery Services)", "Azure Site Recovery Provider", "Azure File Sync Agent"],
      correctAnswer: 0,
      explanation: "Para proteger cargas de trabalho de aplicação (SQL, Exchange, SharePoint) com consistência, você precisa do Microsoft Azure Backup Server (MABS) ou do System Center DPM. O Agente MARS sozinho protege apenas arquivos, pastas e o estado do sistema, mas não suporta backup transacional de aplicações complexas. Referência: Microsoft Learn - Azure Backup Server",
      module: "Monitoramento e Backup"
    },
    {
      id: 233,
      question: "Você é responsável por fazer o backup de pastas locais importantes (Documentos, Imagens) de 10 estações de trabalho Windows 10 em um escritório pequeno. Você quer uma solução direta para o Azure, leve e sem necessidade de servidores de backup dedicados no local. Qual agente você deve usar?",
      options: ["Agente MARS (Microsoft Azure Recovery Services)", "MABS (Azure Backup Server)", "Data Box", "AzCopy"],
      correctAnswer: 0,
      explanation: "O Agente MARS é ideal para backup direto de arquivos e pastas de máquinas Windows individuais para um Recovery Services Vault no Azure. É leve, não requer infraestrutura de servidor de backup local e é fácil de instalar em estações de trabalho ou servidores isolados. Referência: Microsoft Learn - MARS Agent",
      module: "Monitoramento e Backup"
    },
    {
      id: 234,
      question: "Sua equipe de segurança exige que todos os backups no Azure sejam criptografados tanto durante a transferência pela rede quanto quando armazenados no disco. O Azure Backup atende a esses requisitos nativamente?",
      options: ["Sim, criptografia em trânsito (HTTPS) e em repouso (SSE) são padrão.", "Não, apenas em repouso.", "Não, a criptografia deve ser configurada manualmente.", "Sim, mas exige ExpressRoute."],
      correctAnswer: 0,
      explanation: "O Azure Backup criptografa automaticamente todos os dados em trânsito usando HTTPS (TLS 1.2+) e todos os dados em repouso usando Storage Service Encryption (SSE) com chaves gerenciadas pela plataforma (ou chaves gerenciadas pelo cliente, se configurado). Isso garante segurança ponta a ponta por padrão. Referência: Microsoft Learn - Backup Encryption",
      module: "Monitoramento e Backup"
    },
    {
      id: 235,
      question: "Um administrador excluiu acidentalmente um Recovery Services Vault contendo backups críticos de produção. A exclusão ocorreu há 5 dias. O recurso 'Soft Delete' estava habilitado (configuração padrão). É possível recuperar os dados?",
      options: ["Sim, o Soft Delete retém os dados por 14 dias após a exclusão.", "Não, a exclusão do Vault é irreversível instantaneamente.", "Sim, mas apenas se você abrir um ticket de suporte Sev A.", "Não, 5 dias excede o limite de recuperação de 24 horas."],
      correctAnswer: 0,
      explanation: "O Soft Delete (Exclusão Suave) é uma funcionalidade de segurança habilitada por padrão que retém os dados de backup por 14 dias adicionais mesmo após o comando de exclusão ser executado. Isso protege contra exclusões acidentais ou maliciosas, permitindo 'desfazer' a exclusão (undelete) dentro desse período. Referência: Microsoft Learn - Backup Soft Delete",
      module: "Monitoramento e Backup"
    },
    {
      id: 236,
      question: "Você gerencia um banco de dados de e-commerce extremamente crítico. O requisito de negócios define um RPO (Recovery Point Objective) de 5 minutos, ou seja, em caso de desastre, você pode perder no máximo 5 minutos de dados. O backup diário do Azure Backup atende a esse requisito?",
      options: ["Não. Para RPO de minutos, você deve usar o Azure Site Recovery (ASR).", "Sim, se você configurar snapshots a cada hora.", "Sim, o backup do Azure é contínuo.", "Não, você precisa de backup em fita."],
      correctAnswer: 0,
      explanation: "Não. O Azure Backup para VMs geralmente tem uma frequência diária (ou horária para logs SQL), o que resulta em um RPO de horas. Para atingir um RPO de minutos (quase tempo real), é necessário usar replicação contínua fornecida pelo Azure Site Recovery (ASR) ou recursos nativos de banco de dados (como SQL Always On). Referência: Microsoft Learn - RPO vs RTO",
      module: "Monitoramento e Backup"
    },
    {
      id: 237,
      question: "Seu plano de Recuperação de Desastres (DR) estabelece que, após uma falha catastrófica, o sistema financeiro deve estar online e operacional novamente em no máximo 1 hora. Qual métrica de DR define esse prazo de inatividade aceitável?",
      options: ["RTO (Recovery Time Objective)", "RPO (Recovery Point Objective)", "SLA (Service Level Agreement)", "MTBF (Mean Time Between Failures)"],
      correctAnswer: 0,
      explanation: "RTO (Objetivo de Tempo de Recuperação) é a métrica que define a duração máxima aceitável de tempo que um serviço pode ficar indisponível após um desastre. Se o RTO é 1 hora, os processos de recuperação devem ser capazes de restaurar o serviço em menos de 60 minutos. RPO refere-se à perda de dados. Referência: Microsoft Learn - RTO",
      module: "Monitoramento e Backup"
    },
    {
      id: 238,
      question: "Sua política de DR define que a empresa tolera perder no máximo 15 minutos de transações de dados em caso de desastre regional. Qual métrica de DR isso representa?",
      options: ["RPO (Recovery Point Objective)", "RTO (Recovery Time Objective)", "Retenção de Backup", "Latência de Replicação"],
      correctAnswer: 0,
      explanation: "RPO (Objetivo de Ponto de Recuperação) define a quantidade máxima de dados (medida em tempo) que a empresa aceita perder. Um RPO de 15 minutos significa que os backups ou replicações devem ocorrer pelo menos a cada 15 minutos, para que, em caso de falha, os dados recuperados não sejam mais antigos que isso. Referência: Microsoft Learn - RPO",
      module: "Monitoramento e Backup"
    },
    {
      id: 239,
      question: "Você tem VMs críticas rodando na região East US. Você exige que, se a região inteira falhar, essas VMs sejam transferidas (failover) automaticamente para a região West US com intervenção humana mínima. Qual serviço fornece essa orquestração de DR?",
      options: ["Azure Site Recovery (ASR)", "Azure Backup", "Azure Traffic Manager", "Availability Sets"],
      correctAnswer: 0,
      explanation: "Azure Site Recovery (ASR) é o serviço de DR que orquestra a replicação, failover e failback de máquinas virtuais Azure entre regiões. Ele permite criar Planos de Recuperação automatizados. O Azure Backup protege dados, mas não orquestra o failover de serviços ao vivo. Traffic Manager roteia tráfego, não move VMs. Referência: Microsoft Learn - Azure Site Recovery",
      module: "Monitoramento e Backup"
    },
    {
      id: 240,
      question: "Você deve escolher entre implementar Azure Backup ou Azure Site Recovery para uma VM. O requisito principal é a capacidade de restaurar arquivos individuais (Granular File Recovery) que foram deletados acidentalmente pelo usuário. Qual serviço você deve escolher?",
      options: ["Azure Backup", "Azure Site Recovery", "Ambos são necessários", "Nenhum, precisa de Snapshots"],
      correctAnswer: 0,
      explanation: "O Azure Backup é projetado para proteção de dados e recuperação granular (arquivos, pastas). O Azure Site Recovery é para continuidade de negócios (DR) e foca no failover da VM inteira, não sendo a ferramenta ideal para restaurar um único arquivo perdido. Para recuperação de arquivos, Azure Backup é a escolha correta. Referência: Microsoft Learn - Backup vs ASR",
      module: "Monitoramento e Backup"
    }
,
    {
      id: 241,
      question: "Você tem um Banco de Dados SQL que emite logs de diagnóstico e métricas. Você precisa enviar esses dados simultaneamente para três destinos distintos: Log Analytics (para consultas), Storage Account (para arquivamento de longo prazo) e Event Hub (para integração com um SIEM externo). O que você deve configurar no recurso?",
      options: ["Diagnostic Settings (Configurações de Diagnóstico)", "Data Collection Rules", "Action Groups", "Alert Rules"],
      correctAnswer: 0,
      explanation: "Diagnostic Settings é o recurso que permite configurar o envio (streaming) de logs de plataforma e métricas para até três destinos: Log Analytics Workspace, Azure Storage Account e Event Hubs (além de soluções de parceiros). Cada recurso suporta até 5 configurações de diagnóstico. Referência: Microsoft Learn - Diagnostic Settings",
      module: "Monitoramento e Backup"
    },
    {
      id: 242,
      question: "Você precisa coletar Logs de Eventos do Windows (System, Application) e Contadores de Desempenho de 100 VMs Azure. Antes de enviar os dados para o Log Analytics, você quer filtrar apenas eventos de erro (Error/Critical) e descartar o resto para reduzir custos de ingestão. Qual funcionalidade permite essa transformação?",
      options: ["Data Collection Rules (DCR)", "Diagnostic Settings", "Log Analytics Workspace Settings", "Azure Policy"],
      correctAnswer: 0,
      explanation: "Data Collection Rules (DCR) em conjunto com o Azure Monitor Agent (AMA) permitem definir regras granulares sobre O QUE coletar e COMO transformar ou filtrar os dados antes de serem enviados para o destino. Isso otimiza custos e desempenho, diferente das Diagnostic Settings que enviam tudo sem transformar. Referência: Microsoft Learn - Data Collection Rules",
      module: "Monitoramento e Backup"
    },
    {
      id: 243,
      question: "Você tem 15 VMs de produção e precisa de uma solução de monitoramento que vá além de métricas básicas, oferecendo mapas de topologia que mostram quais processos em cada VM estão se comunicando com quais serviços externos (IP/Porta) e gráficos detalhados de desempenho. Qual solução ativar?",
      options: ["VM Insights (com Dependency Agent)", "Azure Monitor Metrics Explorer", "Network Watcher", "Resource Health"],
      correctAnswer: 0,
      explanation: "VM Insights (previamente Service Map) fornece um mapa interativo de dependências descobertas automaticamente (mostrando conexões TCP entre VMs e serviços) e gráficos de desempenho de sistema operacional convidado. Requer o Azure Monitor Agent e o Dependency Agent instalados nas VMs. Referência: Microsoft Learn - VM Insights",
      module: "Monitoramento e Backup"
    },
    {
      id: 244,
      question: "Você está gerenciando um cluster AKS (Azure Kubernetes Service) e cargas de trabalho em Container Instances (ACI). Você precisa de visibilidade centralizada sobre a saúde dos nós, uso de recursos (CPU/Memória) dos pods e acesso aos logs de stdout/stderr dos contêineres. Qual solução ativar?",
      options: ["Container Insights", "VM Insights", "Azure Monitor for Web Apps", "Log Analytics puro"],
      correctAnswer: 0,
      explanation: "Container Insights é a funcionalidade do Azure Monitor projetada para monitorar o desempenho de cargas de trabalho de contêiner implantadas no AKS, ACI e outros clusters Kubernetes. Ele coleta métricas de memória/processador de controladores, nós e contêineres, além de logs de contêiner. Referência: Microsoft Learn - Container Insights",
      module: "Monitoramento e Backup"
    },
    {
      id: 245,
      question: "Você tem uma rede híbrida complexa com ExpressRoute, VPN Gateways e várias VNETs emparelhadas. Você precisa de uma ferramenta que visualize a topologia completa da rede, mostre o status de saúde de todos os recursos de rede e ajude a diagnosticar problemas de conectividade em um único painel. O que usar?",
      options: ["Network Insights", "Network Watcher Topology", "Azure Monitor Network logs", "Service Map"],
      correctAnswer: 0,
      explanation: "Network Insights no Azure Monitor fornece uma visão abrangente e visual da saúde e métricas de todos os seus recursos de rede (VNETs, LBs, Firewalls, ExpressRoute, VPN). Ele oferece topologias interativas e detalhes de dependência sem exigir configuração manual. Referência: Microsoft Learn - Network Insights",
      module: "Monitoramento e Backup"
    },
    {
      id: 246,
      question: "Você quer ser notificado proativamente se houver incidentes de serviço no Azure (como uma falha regional) que afetem especificamente suas assinaturas e recursos, ou manutenções planejadas que exigirão sua ação. Qual serviço você deve consultar ou configurar alertas?",
      options: ["Azure Service Health", "Azure Resource Health", "Azure Status Page (Global)", "Azure Advisor"],
      correctAnswer: 0,
      explanation: "O Azure Service Health fornece uma visão personalizada da saúde dos serviços Azure que você usa. Ele notifica sobre Incidentes de Serviço (falhas), Manutenção Planejada e Avisos de Saúde que impactam suas regiões e recursos específicos. A página Azure Status global é genérica demais. Referência: Microsoft Learn - Service Health",
      module: "Monitoramento e Backup"
    },
    {
      id: 247,
      question: "Uma VM específica está com status 'Disponível', mas a aplicação hospedada nela não responde. O Service Health não mostra incidentes de região. Para verificar se há problemas na infraestrutura de host dessa VM específica (ex: reinicialização inesperada do host físico), onde você deve olhar?",
      options: ["Azure Resource Health", "Azure Service Health", "Azure Monitor Metrics", "Activity Log"],
      correctAnswer: 0,
      explanation: "Resource Health diagnostica e fornece suporte para problemas de serviço que afetam recursos INDIVIDUAIS. Ele informa se uma VM específica está indisponível devido a problemas na plataforma Azure (host down, manutenção) ou se está saudável do ponto de vista da infraestrutura. É mais granular que o Service Health. Referência: Microsoft Learn - Resource Health",
      module: "Monitoramento e Backup"
    },
    {
      id: 248,
      question: "Você tem 200 recursos e precisa implementar alertas baseados nas melhores práticas da Microsoft (ex: CPU alta em VMs, DTU em SQL) sem criar regras manuais uma por uma. Você quer uma solução escalável baseada em templates. O que usar?",
      options: ["Azure Monitor Baseline Alerts (AMBA)", "Azure Advisor Actions", "Smart Groups", "Azure Blueprints"],
      correctAnswer: 0,
      explanation: "Azure Monitor Baseline Alerts (AMBA) é uma iniciativa que fornece templates e definições de alertas recomendados pela Microsoft para diversos serviços (VMs, SQL, Storage, etc.), podendo ser implantados em escala via Azure Policy para garantir cobertura de monitoramento consistente. Referência: Microsoft Learn - AMBA",
      module: "Monitoramento e Backup"
    },
    {
      id: 249,
      question: "Sua aplicação web apresenta um pico repentino de falhas às 2 da manhã (anomalia), subindo de 0.1% para 1.5%. Você não configurou nenhum alerta manual de limiar (threshold) para essa condição específica. Qual recurso do Application Insights pode detectar isso automaticamente?",
      options: ["Smart Detection (Detecção Inteligente)", "Live Metrics Stream", "Availability Tests", "Diagnostic Settings"],
      correctAnswer: 0,
      explanation: "Smart Detection usa Machine Learning para analisar automaticamente a telemetria do Application Insights e detectar anomalias, como aumento incomum na taxa de falhas, degradação de desempenho ou padrões estranhos, sem necessidade de configuração manual de regras de alerta. Referência: Microsoft Learn - Smart Detection",
      module: "Monitoramento e Backup"
    },
    {
      id: 250,
      question: "Você precisa depurar uma aplicação em produção em tempo real (ex: durante um deploy crítico). Você quer ver o fluxo de requisições, falhas e exceções conforme elas acontecem com latência de sub-segundo (<1s). Os logs padrão têm atraso de ingestão de minutos. O que usar?",
      options: ["Live Metrics Stream", "Log Analytics", "Metrics Explorer", "Application Map"],
      correctAnswer: 0,
      explanation: "Live Metrics Stream fornece um painel de telemetria em tempo real (latência de 1 segundo) para aplicações monitoradas pelo Application Insights. É ideal para diagnósticos imediatos, validação de deploy e monitoramento de carga em tempo real, onde o delay de ingestão dos logs seria inaceitável. Referência: Microsoft Learn - Live Metrics",
      module: "Monitoramento e Backup"
    },
    {
      id: 251,
      question: "Sua aplicação está lenta e você suspeita que o gargalo seja uma chamada externa para um banco de dados SQL ou uma API de terceiros. Qual recurso do Application Insights rastreia automaticamente essas chamadas de saída e mede sua duração e taxa de sucesso?",
      options: ["Application Dependencies", "Application Requests", "Exceptions", "Custom Events"],
      correctAnswer: 0,
      explanation: "O Application Insights rastreia automaticamente 'Dependencies' (Dependências), que são chamadas feitas da sua aplicação para serviços externos (SQL, HTTP, Storage, Redis, etc.). Ele mede a duração, falhas e contagem dessas chamadas, permitindo identificar gargalos externos. Referência: Microsoft Learn - Dependencies",
      module: "Monitoramento e Backup"
    },
    {
      id: 252,
      question: "Você tem um ambiente de microsserviços complexo com 10 serviços e diversas dependências (SQL, Cosmos, Service Bus). Você precisa visualizar a arquitetura distribuída, ver o fluxo de chamadas entre componentes e identificar falhas rapidamente em um diagrama visual. Qual recurso usar?",
      options: ["Application Map", "Network Watcher Topology", "VM Insights Map", "Smart Detection"],
      correctAnswer: 0,
      explanation: "O Application Map descobre e visualiza automaticamente a topologia lógica da sua aplicação distribuída. Ele mostra os nós (serviços), as arestas (chamadas entre eles), latência e falhas em cada conexão, facilitando o diagnóstico de problemas em arquiteturas complexas. Referência: Microsoft Learn - Application Map",
      module: "Monitoramento e Backup"
    },
    {
      id: 253,
      question: "Você usa Azure File Shares (SMB) para armazenar documentos. Compliance exige retenção de backup desses arquivos por 90 dias com capacidade de restauração. Não há VMs envolvidas, apenas o Storage Account. Qual solução de backup nativa usar?",
      options: ["Azure Backup para Azure Files", "Backup manual via AzCopy", "Agente MARS em uma VM temporária", "Azure File Sync Snapshot"],
      correctAnswer: 0,
      explanation: "O Azure Backup oferece suporte nativo para Azure File Shares. Ele usa snapshots de compartilhamento e os gerencia através de um Recovery Services Vault, permitindo políticas de retenção (diária, semanal, mensal, anual) e restauração granular de arquivos ou do compartilhamento inteiro. Referência: Microsoft Learn - Azure Files Backup",
      module: "Monitoramento e Backup"
    },
    {
      id: 254,
      question: "Você está executando SQL Server em Azure VMs (IaaS). Você precisa de backups de log de transação a cada 15 minutos para garantir RPO baixo e permitir Point-in-Time Restore (Restauração num ponto no tempo). Qual solução de backup gerencia isso automaticamente?",
      options: ["Azure Backup para SQL Server em Azure VMs", "Snapshots de disco da VM", "Scripts de backup SQL manuais", "Agente MARS"],
      correctAnswer: 0,
      explanation: "O 'Azure Backup para SQL Server em Azure VMs' é uma solução PaaS especializada que roda dentro da VM (via extensão) para fornecer backup 'application-aware' nativo do SQL. Suporta backups de Log de Transação frequentes (cada 15 min) e Point-in-Time Restore, o que snapshots de disco simples não fazem eficientemente. Referência: Microsoft Learn - SQL Backup Azure VMs",
      module: "Monitoramento e Backup"
    },
    {
      id: 255,
      question: "A política de segurança da sua empresa proíbe que dados de monitoramento trafeguem pela internet pública. Seu Log Analytics Workspace precisa ser acessado e receber dados de log APENAS através da rede privada (VNet) da empresa. Qual recurso configurar?",
      options: ["Azure Monitor Private Link Scope (AMPLS)", "Service Endpoint para Monitor", "Firewall de Storage", "VPN Gateway"],
      correctAnswer: 0,
      explanation: "Azure Monitor Private Link Scope (AMPLS) permite conectar sua VNet aos recursos do Azure Monitor (Log Analytics, App Insights) usando Private Endpoints (IPs privados). Isso garante que todo o tráfego de logs e métricas permaneça na rede backbone da Microsoft e dentro da sua rede privada, sem exposição pública. Referência: Microsoft Learn - AMPLS",
      module: "Monitoramento e Backup"
    },
    {
      id: 256,
      question: "Você implementou uma estratégia de DR com região Primária (East US) e Secundária (West US). A região secundária fica em standby passivo. Para minimizar custos de monitoramento, como você deve configurar a coleta de logs na região secundária?",
      options: ["Replicar apenas métricas essenciais e ativar logs completos apenas após o failover.", "Duplicar toda a coleta de logs e métricas permanentemente.", "Não monitorar a região secundária.", "Usar apenas alertas manuais."],
      correctAnswer: 0,
      explanation: "Em cenários DR passivo, uma prática comum de otimização de custos é manter um monitoramento mínimo na região secundária (ex: métricas de saúde, disponibilidade de infraestrutura) e ativar a ingestão completa de logs de aplicação apenas quando o failover ocorrer e a região se tornar ativa. Logs duplicados sem uso geram custo desnecessário. Referência: Microsoft Learn - Monitoring Best Practices",
      module: "Monitoramento e Backup"
    },
    {
      id: 257,
      question: "Durante uma auditoria de segurança, você precisa demonstrar QUEM acessou os dados de backup e QUANDO ocorreram operações de restauração no Recovery Services Vault nos últimos 2 anos. Onde você configura a retenção desses logs de auditoria?",
      options: ["Diagnostic Settings do Vault (enviando para Storage Account)", "Activity Log (limitado a 90 dias)", "Backup Reports", "Alertas de Backup"],
      correctAnswer: 0,
      explanation: "Para retenção de longo prazo de logs de auditoria (quem acessou, o que restaurou), você deve configurar Diagnostic Settings no Recovery Services Vault para enviar os logs 'CoreAzureBackup' e 'AddonAzureBackup' para uma Storage Account (retenção barata e ilimitada) ou Log Analytics. O Activity Log padrão retém apenas 90 dias. Referência: Microsoft Learn - Backup Diagnostics",
      module: "Monitoramento e Backup"
    },
    {
      id: 258,
      question: "Você gerencia 100 assinaturas e 5000 recursos. Você precisa executar uma consulta rápida para listar 'Todas as VMs que NÃO têm backup habilitado' em todo o ambiente de uma só vez. Scripts PowerShell loopando assinaturas são muito lentos. Qual ferramenta foi projetada para consultas em escala?",
      options: ["Azure Resource Graph", "Azure Monitor", "Log Analytics", "Azure Advisor"],
      correctAnswer: 0,
      explanation: "Azure Resource Graph é um serviço projetado para estender o Azure Resource Manager, permitindo consultas complexas e rápidas (usando KQL) em todos os recursos de todas as assinaturas a que você tem acesso, com latência de milissegundos. É ideal para inventário e governança em escala. Referência: Microsoft Learn - Resource Graph",
      module: "Monitoramento e Backup"
    },
    {
      id: 259,
      question: "Você precisa criar relatórios interativos e dashboards personalizados para a equipe de operações. O relatório deve combinar métricas, logs, consultas do Resource Graph e permitir parâmetros (ex: selecionar assinatura na dropdown). Qual ferramenta de visualização do Azure Monitor é recomendada?",
      options: ["Azure Workbooks", "Azure Dashboards (estático)", "Power BI", "Excel"],
      correctAnswer: 0,
      explanation: "Azure Workbooks fornecem uma tela flexível e interativa para análise de dados e criação de relatórios visuais ricos dentro do portal Azure. Eles suportam múltiplas fontes de dados (Logs, Metrics, Resource Graph), parâmetros, interatividade e texto explicativo, sendo a solução preferida sobre Dashboards estáticos. Referência: Microsoft Learn - Workbooks",
      module: "Monitoramento e Backup"
    },
    {
      id: 260,
      question: "Sua equipe sofre com 'Alert Fatigue', recebendo 500 emails por dia, onde 90% são ruído ou múltiplos alertas para o mesmo incidente raiz. Qual recurso do Azure Monitor pode agrupar alertas relacionados automaticamente para reduzir o volume de notificações?",
      options: ["Smart Groups (Grupos Inteligentes)", "Action Groups", "Suppression Rules", "Alert Processing Rules"],
      correctAnswer: 0,
      explanation: "Smart Groups usam algoritmos de ML para correlacionar alertas baseados em padrões de ocorrência, similaridade e tempo. Em vez de enviar 50 notificações para 50 alertas da mesma falha, o Azure cria 1 Smart Group e notifica uma vez. Isso reduz drasticamente o ruído e ajuda a focar na resolução do incidente raiz. Referência: Microsoft Learn - Smart Groups",
      module: "Monitoramento e Backup"
    }

  ],

};

// Função para embaralhar arrays (Fisher-Yates)
export function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Função para obter um subconjunto aleatório de questões
export function getRandomQuestions(questions, count) {
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, Math.min(count, questions.length));
}

// Função para embaralhar as opções de uma questão mantendo a resposta correta
export function shuffleQuestionOptions(question) {
  const options = [...question.options];
  const correctText = options[question.correctAnswer];
  
  // Embaralha as opções
  const shuffled = shuffleArray(options);
  
  // Encontra o novo índice da resposta correta
  const newCorrectIndex = shuffled.indexOf(correctText);
  
  return {
    ...question,
    options: shuffled,
    correctAnswer: newCorrectIndex
  };
}
