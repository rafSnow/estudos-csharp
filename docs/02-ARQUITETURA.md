# 🏗️ ARQUITETURA — Sistema de Aprendizado .NET Corporativo

> **Versão:** 2.0
> **Stack:** React JSX • Arquitetura Modular • Vite • window.storage
> **Padrão:** Component-based modular com hooks customizados

---

## 1. VISÃO GERAL DA ARQUITETURA

O projeto segue uma **arquitetura modular** onde cada componente, hook, utilitário e módulo de dados reside em seu próprio arquivo. Isso garante responsabilidade única, facilita manutenção, testes e reutilização.

```
roadmap/
├── index.html
├── main.jsx                          ← Entry point (monta <App />)
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx                       ← Root component (estado global, layout)
    │
    ├── constants/
    │   ├── colors.js                 ← Paleta de cores (COLORS)
    │   └── storage.js                ← Chaves de persistência (STORAGE)
    │
    ├── data/
    │   ├── fase1/
    │   │   ├── modulo1.js            ← Tópicos M1 (C# Fundamentos)
    │   │   ├── modulo2.js            ← Tópicos M2 (POO)
    │   │   ├── modulo3.js            ← Tópicos M3 (C# Intermediário)
    │   │   ├── modulo4.js            ← Tópicos M4 (Git)
    │   │   └── index.js              ← Agrega FASE1_DATA (todos os módulos)
    │   └── index.js                  ← Re-exporta dados
    │
    ├── hooks/
    │   ├── useStorage.js             ← Hook de persistência (window.storage)
    │   ├── useTimer.js               ← Timer por módulo + Visibility API
    │   ├── useXP.js                  ← Sistema de XP
    │   ├── useDebounce.js            ← Debounce para autosave
    │   └── useToast.js               ← Notificações toast
    │
    ├── utils/
    │   ├── topics.js                 ← isTopicUnlocked, isTopicComplete, getAllTopicsFlat, etc.
    │   ├── formatTime.js             ← Formata segundos → "1h 23min"
    │   └── highlightCode.js          ← Syntax highlight por regex
    │
    └── components/
        ├── Header/
        │   ├── Header.jsx            ← Barra superior fixa
        │   ├── XPDisplay.jsx         ← XP + barra de nível
        │   ├── ModuleTimer.jsx       ← Timer do módulo atual
        │   └── PhaseProgress.jsx     ← Barra de progresso geral
        │
        ├── Sidebar/
        │   ├── Sidebar.jsx           ← Container da sidebar
        │   ├── ModuleSection.jsx     ← Seção expansível por módulo
        │   └── TopicItem.jsx         ← Item de tópico (locked/active/done)
        │
        ├── TopicView/
        │   ├── TopicView.jsx         ← Container principal do tópico
        │   ├── TopicHeader.jsx       ← Breadcrumb, semana, progresso
        │   ├── TheoryPanel.jsx       ← Texto teórico renderizado
        │   ├── CodeBlock.jsx         ← Código com highlight + copiar
        │   ├── ChecklistPanel.jsx    ← Checkboxes práticos
        │   ├── QuizPanel.jsx         ← Perguntas + feedback
        │   ├── NotesPanel.jsx        ← Textarea com autosave
        │   └── NavigationBar.jsx     ← Anterior / Próximo
        │
        ├── Dashboard/
        │   ├── DashboardModal.jsx    ← Overlay com histórico completo
        │   ├── CompletionSummary.jsx ← Progresso por tópico
        │   ├── AllNotes.jsx          ← Anotações agrupadas
        │   ├── WrongAnswers.jsx      ← Quiz erros para revisar
        │   └── TimeReport.jsx        ← Tempo por módulo
        │
        └── shared/
            └── Toast.jsx             ← Notificação toast
```

---

## 2. ESTRUTURA DE COMPONENTES

### 2.1 Hierarquia Completa

```
<App>                                     ← src/App.jsx
 ├── <Header>                             ← src/components/Header/Header.jsx
 │    ├── <PhaseProgress />               ← barra % geral Fase 1
 │    ├── <ModuleTimer />                 ← ⏱ tempo do módulo atual
 │    ├── <XPDisplay />                   ← XP + level bar
 │    └── <DashboardButton />             ← abre modal
 │
 ├── <Sidebar>                            ← src/components/Sidebar/Sidebar.jsx
 │    └── <ModuleSection> (×4)            ← seção expandível
 │         └── <TopicItem> (×4)           ← estado: locked | active | done
 │
 ├── <MainContent area>
 │    └── <TopicView>                     ← src/components/TopicView/TopicView.jsx
 │         ├── <TopicHeader />            ← título, módulo, semana
 │         ├── <TheoryPanel />            ← texto markdown-like
 │         ├── <CodeBlock />              ← código + syntax + copiar
 │         ├── <ChecklistPanel />         ← checkboxes práticos
 │         ├── <QuizPanel />              ← perguntas + feedback
 │         ├── <NotesPanel />             ← textarea com autosave
 │         └── <NavigationBar />          ← ← Anterior | Próximo →
 │
 ├── <DashboardModal>                     ← src/components/Dashboard/DashboardModal.jsx
 │    ├── <CompletionSummary />
 │    ├── <AllNotes />
 │    ├── <WrongAnswers />
 │    └── <TimeReport />
 │
 └── <Toast />                            ← src/components/shared/Toast.jsx
```

### 2.2 Regras de Organização

| Regra                          | Descrição                                                            |
| ------------------------------ | -------------------------------------------------------------------- |
| Um componente por arquivo      | Cada `.jsx` exporta exatamente um componente `export default`        |
| Pasta por feature              | Componentes relacionados ficam na mesma pasta (ex: `Header/`)        |
| Sem index barrels obrigatórios | Imports diretos: `import Header from '../Header/Header'`             |
| Props explícitas               | Cada componente documenta suas props no início                       |
| Sem prop drilling excessivo    | Máximo 2 níveis de repasse — usar hooks compartilhados se necessário |

---

## 3. MODELO DE DADOS

### 3.1 Estrutura de Conteúdo (estática — `src/data/`)

```javascript
// src/data/fase1/modulo1.js — exemplo de estrutura

export const MODULO_1 = {
  id: "m1",
  title: "C# Fundamentos",
  icon: "⚡",
  week: "Semana 1",
  color: "#00D4FF",
  topics: [
    {
      id: "m1t1",
      moduleId: "m1",
      title: "Tipos & Variáveis",
      theory: "...", // texto real, 200+ palavras
      code: "...", // código C# .NET 8 completo
      codeLanguage: "csharp",
      runCommand:
        "dotnet new console -n TiposDemo && cd TiposDemo && dotnet run",
      checklist: ["...", "..."], // 5 tarefas práticas
      quiz: [
        // 3 perguntas
        {
          q: "...",
          options: ["A", "B", "C", "D"],
          answer: 0,
          explanation: "...",
        },
      ],
    },
    // ... mais tópicos
  ],
};
```

```javascript
// src/data/fase1/index.js — agrega todos os módulos
import { MODULO_1 } from "./modulo1";
import { MODULO_2 } from "./modulo2";
import { MODULO_3 } from "./modulo3";
import { MODULO_4 } from "./modulo4";

export const FASE1_DATA = [MODULO_1, MODULO_2, MODULO_3, MODULO_4];
```

### 3.2 Estado da Aplicação (runtime — gerenciado em `App.jsx`)

```javascript
// Estado global no App.jsx — distribuído via props
const state = {
  currentTopicId: "m1t1",
  completedTopics: [],
  xp: 0,

  checklists: { m1t1: [false, false, false, false, false] },
  quizzes: { m1t1: { answers: [-1, -1, -1], submitted: false } },
  notes: { m1t1: "" },
  timers: { m1: 0, m2: 0 },

  showDashboard: false,
};
```

---

## 4. HOOKS CUSTOMIZADOS

### 4.1 useStorage (`src/hooks/useStorage.js`)

```javascript
// Responsabilidade: carregar/salvar estado no window.storage
// Exporta:
//   useStorageLoad() → carrega todo o estado na inicialização
//   useStorageSave(key, value) → salva quando value mudar
```

### 4.2 useTimer (`src/hooks/useTimer.js`)

```javascript
// Responsabilidade: timer por módulo com Visibility API
// Exporta:
//   useTimer(moduleId) → { seconds, isRunning }
// Comportamento:
//   - setInterval 1s quando módulo ativo
//   - Pausa ao trocar aba (document.visibilitychange)
//   - Salva no storage a cada 5s
//   - Limpa ao desmontar
```

### 4.3 useXP (`src/hooks/useXP.js`)

```javascript
// Responsabilidade: calcular e gerenciar XP
// Exporta:
//   useXP(completedTopics, quizzes) → { xp, level, addXP }
// Regras:
//   - +20 checklist completo (primeira vez)
//   - +10 por questão correta (primeira submissão)
//   - +100 módulo completo
```

### 4.4 useDebounce (`src/hooks/useDebounce.js`)

```javascript
// Responsabilidade: debounce genérico
// Exporta:
//   useDebounce(value, delay) → debouncedValue
```

### 4.5 useToast (`src/hooks/useToast.js`)

```javascript
// Responsabilidade: fila de notificações toast
// Exporta:
//   useToast() → { toasts, addToast, removeToast }
```

---

## 5. FLUXO DE DADOS

### 5.1 Ciclo de Persistência

```
Usuário interage
      │
      ▼
Handler no componente (via props)
      │
      ▼
setState no App.jsx (atualiza estado React)
      │
      ├──► Re-render imediato (feedback visual)
      │
      ▼
useEffect no App.jsx [dependência mudou]
      │
      ▼
window.storage.set(key, JSON.stringify(value))
      │
      ▼
Dado persistido ✓


Na inicialização (App.jsx):
useEffect([]) → window.storage.get(key) → setState para cada chave
```

### 5.2 Lógica de Desbloqueio (`src/utils/topics.js`)

```javascript
export function isTopicUnlocked(topicId, completedTopics, allTopics) {
  const index = allTopics.findIndex((t) => t.id === topicId);
  if (index === 0) return true;
  const prevTopic = allTopics[index - 1];
  return completedTopics.includes(prevTopic.id);
}

export function isTopicComplete(topicId, checklists, quizzes) {
  const cl = checklists[topicId] || [];
  const qz = quizzes[topicId] || {};
  const checklistDone = cl.length > 0 && cl.every(Boolean);
  const quizDone = qz.submitted === true;
  return checklistDone && quizDone;
}

export function getAllTopicsFlat(fase1Data) {
  return fase1Data.flatMap((m) => m.topics);
}

export function getTopicById(id, allTopics) {
  return allTopics.find((t) => t.id === id);
}

export function getModuleByTopicId(topicId, fase1Data) {
  return fase1Data.find((m) => m.topics.some((t) => t.id === topicId));
}

export function formatTime(seconds) {
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  if (m < 60) return `${m}min`;
  const h = Math.floor(m / 60);
  return `${h}h ${m % 60}min`;
}
```

### 5.3 Fluxo do Timer

```
Entrar em tópico do módulo X
      │
      ▼
useTimer(moduleId) inicia setInterval 1s
      │
      ▼
document.addEventListener('visibilitychange')
  → hidden: pausa interval
  → visible: retoma interval
      │
      ▼
A cada 5s → window.storage.set(timerKey, seconds)
      │
      ▼
Troca de módulo → limpa interval anterior, inicia novo
```

---

## 6. COMPONENTES — CONTRATO DE INTERFACE

### 6.1 CodeBlock (`src/components/TopicView/CodeBlock.jsx`)

```javascript
// Props
{
  code: string,            // código completo
  language: string,        // "csharp" | "bash"
  showRunCommand: string   // ex: "dotnet new console -n Projeto && dotnet run"
}

// Comportamento:
// - Aplica highlightCSharp() de src/utils/highlightCode.js
// - Botão "Copiar" → navigator.clipboard.writeText(code)
// - Após copiar: "✓ Copiado!" por 2s
// - Run command em destaque abaixo
```

### 6.2 QuizPanel (`src/components/TopicView/QuizPanel.jsx`)

```javascript
// Props
{
  questions: QuizQuestion[],
  topicId: string,
  savedAnswers: number[],
  savedSubmitted: boolean,
  onComplete: (answers, xpGained) => void
}
```

### 6.3 ChecklistPanel (`src/components/TopicView/ChecklistPanel.jsx`)

```javascript
// Props
{
  items: string[],
  topicId: string,
  checked: boolean[],
  onChange: (index, value) => void
}
```

### 6.4 NotesPanel (`src/components/TopicView/NotesPanel.jsx`)

```javascript
// Props
{
  topicId: string,
  value: string,
  onChange: (text) => void   // debounce interno via useDebounce
}
```

---

## 7. SYNTAX HIGHLIGHT (`src/utils/highlightCode.js`)

```javascript
export function highlightCSharp(code) {
  return (
    code
      // 1. Comentários (antes de tudo)
      .replace(
        /(\/\/.+$)/gm,
        '<span style="color:#6B7280;font-style:italic">$1</span>',
      )

      // 2. Strings
      .replace(/("(?:[^"\\]|\\.)*")/g, '<span style="color:#10B981">$1</span>')

      // 3. Keywords C#
      .replace(
        /\b(using|namespace|class|interface|struct|record|enum|public|private|protected|internal|static|void|var|new|return|if|else|for|foreach|while|do|switch|case|break|continue|async|await|Task|string|int|bool|double|decimal|float|long|char|object|null|true|false|this|base|override|virtual|abstract|sealed|readonly|const|throw|try|catch|finally)\b/g,
        '<span style="color:#7C3AED;font-weight:bold">$1</span>',
      )

      // 4. Números
      .replace(
        /\b(\d+\.?\d*[mMfFdDlL]?)\b/g,
        '<span style="color:#F59E0B">$1</span>',
      )

      // 5. Tipos PascalCase
      .replace(
        /\b([A-Z][a-zA-Z0-9]+)\b/g,
        '<span style="color:#00D4FF">$1</span>',
      )
  );
}
```

> **Nota:** Como usamos inline styles em vez de classes CSS, o highlight usa atributos `style` diretamente nos `<span>`.

---

## 8. CONSTANTES

### 8.1 Paleta de Cores (`src/constants/colors.js`)

```javascript
export const COLORS = {
  bg: "#0a0a0f",
  surface: "#080c14",
  surface2: "#0f172a",
  border: "#1e293b",
  text: "#e2e8f0",
  textMuted: "#64748b",
  textDim: "#334155",

  // Módulos
  m1: "#00D4FF", // C# Fundamentos — ciano
  m2: "#7C3AED", // POO — roxo
  m3: "#059669", // C# Intermediário — verde
  m4: "#F59E0B", // Git — âmbar

  // Estados
  success: "#10B981",
  error: "#EF4444",
  warning: "#F97316",
  xp: "#00D4FF",
};
```

### 8.2 Chaves de Storage (`src/constants/storage.js`)

```javascript
export const STORAGE = {
  currentTopic: "phase1:current_topic",
  completed: "phase1:completed_topics",
  xp: "phase1:xp",
  checklist: (id) => `phase1:checklist_${id}`,
  quiz: (id) => `phase1:quiz_${id}`,
  notes: (id) => `phase1:notes_${id}`,
  timer: (id) => `phase1:timer_${id}`,
};
```

---

## 9. LAYOUT & TEMA

### 9.1 Layout Grid

```
┌──────────────────────────────────────────────┐
│ HEADER (altura: 56px, fixed top)             │
├──────────────┬───────────────────────────────┤
│              │                               │
│  SIDEBAR     │  MAIN CONTENT                 │
│  (220px)     │  (flex: 1, overflow-y: auto)  │
│  overflow-y  │                               │
│  auto        │  max-width: 820px             │
│              │  padding: 32px                │
│              │                               │
└──────────────┴───────────────────────────────┘

Total: 100vw × 100vh, sem scroll externo
Sidebar e MainContent scrollam independentemente
```

---

## 10. INICIALIZAÇÃO DA APLICAÇÃO (`App.jsx`)

```javascript
// Sequência de boot no useEffect([]):
async function initialize() {
  setLoading(true);

  const [currentTopic, completed, xp] = await Promise.allSettled([
    window.storage.get(STORAGE.currentTopic),
    window.storage.get(STORAGE.completed),
    window.storage.get(STORAGE.xp),
    // ... checklists, quizzes, notes, timers por tópico
  ]);

  setState((prev) => ({
    ...prev,
    currentTopicId: currentTopic?.value ?? ALL_TOPICS[0].id,
    completedTopics: JSON.parse(completed?.value ?? "[]"),
    xp: parseInt(xp?.value ?? "0"),
  }));

  setLoading(false);
}
```

---

## 11. DECISÕES DE DESIGN

| Decisão       | Escolha                                                | Justificativa                                             |
| ------------- | ------------------------------------------------------ | --------------------------------------------------------- |
| Arquitetura   | Modular (um componente por arquivo)                    | Responsabilidade única, facilita manutenção e colaboração |
| Estado global | `useState` elevado no `App.jsx`                        | Escopo pequeno, sem necessidade de Context/Redux          |
| Persistência  | `window.storage` (não localStorage)                    | Requisito do ambiente de execução                         |
| Estilo        | Inline styles                                          | Sem dependência de CSS externo, estilos colocalizados     |
| Highlight     | Regex manual (`src/utils/highlightCode.js`)            | Sem bibliotecas externas permitidas                       |
| Animações     | CSS transitions via inline style                       | Simples e eficazes                                        |
| Markdown      | Renderização manual (split por `\n`, blocos de código) | Sem dependências                                          |
| Timer         | setInterval + Visibility API                           | Precisão suficiente para UX                               |
| Hooks         | Custom hooks para lógica reutilizável                  | Separa lógica de negócio da apresentação                  |
| Bundler       | Vite + @vitejs/plugin-react                            | Hot reload rápido, suporte JSX nativo                     |
