# AzureMaster 104 | Azure Administrator Study App

**React · Vite · Firebase Authentication · Cloud Firestore · Tailwind CSS**

[English](#english) | [Português](#português)

## English

### Overview

An independent study application for topics associated with the Microsoft Azure Administrator (AZ-104) exam. It combines a question bank, explanations, study paths and progress tracking in a React interface.

Project by **Leandro Sousa de Jesus** — [LinkedIn](https://www.linkedin.com/in/leandrosousajesus/) · [GitHub](https://github.com/lehsousa).

This is a learning project. It is not an official Microsoft exam simulator, certification, or evidence of an AZ-104 pass.

### Features present in the source

- **300 question entries** across six modules.
- Study and quiz modes with answer explanations.
- Timed practice mode and randomized question/answer order.
- Review of incorrect answers.
- XP, levels and progress statistics.
- Email/password and anonymous sign-in flows.
- User progress stored in Cloud Firestore.

The six modules are prerequisites, identity and governance, storage, virtual networking, Azure compute, and monitoring/backup. Questions and explanations are primarily in Brazilian Portuguese. Content should be checked against current Microsoft Learn guidance; no independent question-bank accuracy review is claimed.

### Technology

| Layer | Implementation |
|---|---|
| UI | React 19, Tailwind CSS, Lucide icons and Recharts |
| Build | Vite 7 |
| Authentication | Firebase Authentication |
| Progress storage | Cloud Firestore |
| Hosting configuration | Firebase Hosting serving `dist/` |

The repository contains a web app. Installable/offline PWA support is not established by the current files.

### Local setup

Use Node.js **20.19+ in the 20.x line, or 22.12+**, matching the Vite engine requirement in the lockfile.

```bash
git clone https://github.com/lehsousa/azuremaster-104.git
cd azuremaster-104
npm ci
```

Before launching a copy:

1. Create or select your own Firebase project.
2. Configure the authentication providers used by the application.
3. Configure Cloud Firestore with access rules appropriate to authenticated users.
4. Replace the web-app configuration in `src/firebase.js` with your own project's configuration.

The current configuration is embedded in that file; environment-variable loading is not implemented. Do not assume that a public frontend configuration supplies database access control. Firestore rules are not versioned in this repository, so their live configuration has not been verified here.

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

These are available commands, not a claim that they passed in the latest environment.

### Main files

- `src/App.jsx`: app flow, quiz modes, authentication and progress.
- `src/questions.js`: question bank and shuffle helpers.
- `src/LearningTrail.jsx`: study paths.
- `src/ProgressStats.jsx`: progress views.
- `src/firebase.js`: Firebase setup.
- `firebase.json`: hosting configuration.

### Scope and references

Practice scores and in-app levels are local gamification rules, not official exam scoring or professional seniority. The app does not demonstrate deployment of Azure infrastructure.

Use the official [Microsoft Azure Administrator certification page](https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/) to check the current exam scope.

### License

MIT, as stated in the original README. A standalone LICENSE file has not yet been included.

## Português

### Visão geral

Aplicação independente de estudos sobre os temas do exame Microsoft Azure Administrator (AZ-104), combinando questões, explicações, trilhas de aprendizado e acompanhamento de progresso.

Projeto de **Leandro Sousa de Jesus**. É um projeto educacional, sem vínculo oficial com a Microsoft e sem representar certificação ou aprovação no exame.

### Funcionalidades

- **300 questões cadastradas**, distribuídas em seis módulos.
- Modos de estudo e questionário, com explicações.
- Prática cronometrada e embaralhamento de questões e alternativas.
- Revisão de respostas incorretas.
- XP, níveis e estatísticas de evolução.
- Autenticação por e-mail/senha ou anônima.
- Progresso armazenado no Cloud Firestore.

Os módulos abrangem pré-requisitos, identidades e governança, armazenamento, redes virtuais, computação Azure e monitoramento/backup. O conteúdo está principalmente em português brasileiro.

### Execução

Use a versão de Node indicada acima, execute `npm ci` e configure seu próprio projeto no arquivo `src/firebase.js` antes de iniciar com `npm run dev`. Configure autenticação e regras adequadas do Firestore. Essas regras não estão versionadas no repositório.

Os comandos de lint, build e preview estão disponíveis no projeto; sua listagem não representa uma validação atual de execução.

### Tecnologias e limites

React 19, Vite 7, Tailwind CSS, Firebase Authentication, Cloud Firestore e Recharts. A configuração de hospedagem utiliza a pasta `dist/`.

O projeto demonstra desenvolvimento de uma ferramenta de aprendizado. Não comprova implantação de infraestrutura Azure, aprovação no AZ-104 ou classificação profissional pelos níveis do aplicativo. O banco de questões deve ser revisado com base no conteúdo atualizado do Microsoft Learn.
