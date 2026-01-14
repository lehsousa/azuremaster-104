# AzureMaster 104 - Preparação para Certificação AZ-104

Aplicação web gamificada para preparação do exame de certificação Microsoft AZ-104 (Azure Administrator).

## 🚀 Funcionalidades

✅ **Sistema de Gamificação**
- Sistema de XP e progressão de níveis
- 6 níveis: Novato Cloud → Especialista AZ-104
- Barra de progresso visual
- Persistência de dados com Firebase Firestore

✅ **Módulos Baseados no Microsoft Learn**
1. Pré-requisitos para Administradores
2. Identidades e Governança
3. Armazenamento
4. Redes Virtuais
5. Monitoramento e Backup

✅ **Modos de Estudo**
- **Modo Estudo**: Feedback imediato com explicações
- **Modo Simulado**: Resultados mostrados apenas no final
- Botão "Ver Explicação" sempre disponível

✅ **10 Questões AZ-104**
- Questões em português brasileiro
- Formato baseado nos simulados oficiais Microsoft
- Explicações detalhadas com referências ao Microsoft Learn
- Nota mínima: 70% para aprovação

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta Firebase (gratuita)

## 🔧 Configuração

### 1. Instalar Dependências

```bash
npm install
```

### 2. Configurar Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Crie um novo projeto
3. Ative **Authentication** → **Sign-in method** → **Anonymous** (Habilitar)
4. Ative **Firestore Database** → Criar banco de dados em modo de teste
5. Copie as credenciais do projeto

6. Abra o arquivo `src/firebase.js` e substitua pelas suas credenciais:

```javascript
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};
```

### 3. Executar Aplicação

```bash
npm run dev
```

Acesse: http://localhost:5173

## 🏗️ Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Vite** - Build tool
- **Firebase v9** - Backend (Auth + Firestore)
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones

## 📚 Estrutura de Questões

Cada questão inclui:
- Enunciado em português
- 4 opções de resposta
- Resposta correta
- Explicação detalhada
- Referência ao módulo Microsoft Learn
- Categoria por módulo

## 🎮 Como Usar

1. Ao abrir a aplicação, você será autenticado anonimamente
2. Escolha um dos 5 módulos disponíveis
3. Selecione o modo de estudo:
   - **Modo Estudo**: Veja explicações imediatamente
   - **Modo Simulado**: Teste seus conhecimentos sem feedback
4. Responda as questões
5. Clique em "Ver Explicação" para entender melhor
6. Ganhe XP por cada resposta correta
7. Evolua de nível conforme acumula XP

## 📊 Sistema de Níveis

| Nível | Nome | XP Necessário |
|-------|------|---------------|
| 1 | Novato Cloud | 0 |
| 2 | Iniciante Azure | 100 |
| 3 | Administrador Junior | 300 |
| 4 | Administrador Pleno | 600 |
| 5 | Administrador Sênior | 1000 |
| 6 | Especialista AZ-104 | 1500 |

## 🔐 Persistência de Dados

Os dados do usuário são salvos automaticamente no Firestore:
- XP acumulado
- Nível atual
- Histórico de testes

**Nota**: Como usa autenticação anônima, limpar os dados do navegador resetará seu progresso.

## 📱 Design Responsivo

A aplicação é totalmente responsiva e funciona em:
- Desktop
- Tablets
- Smartphones

## 🎨 Tema

- Cores primárias: Slate & Blue
- Fonte: Inter (Google Fonts)
- Gradientes suaves
- Transições animadas

## 📖 Referências

- [Microsoft Learn - AZ-104](https://learn.microsoft.com/pt-br/credentials/certifications/azure-administrator/)
- [Documentação Firebase](https://firebase.google.com/docs)
- [Tailwind CSS](https://tailwindcss.com/)

## 📝 Notas Importantes

⚠️ **Antes de usar**:
- Configure suas credenciais do Firebase
- As questões são para estudo e prática
- Para o exame oficial, consulte o Microsoft Learn

## 📄 Licença

MIT

---

Desenvolvido com ❤️ para estudantes AZ-104
