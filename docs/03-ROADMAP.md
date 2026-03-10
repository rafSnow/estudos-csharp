# 🚀 ROADMAP DE IMPLEMENTAÇÃO + PROMPT PARA CLAUDE OPUS 4.6

> **Objetivo:** Guia completo de desenvolvimento por etapas e prompts exatos para usar com Claude Opus 4.6 na construção do sistema.

---

## PARTE 1 — ROADMAP DE IMPLEMENTAÇÃO

### Visão Geral das Etapas

```
ETAPA 1 → Scaffolding & Dados          (1 sessão)
ETAPA 2 → Layout & Navegação           (1 sessão)
ETAPA 3 → TopicView com Teoria + Código (1 sessão)
ETAPA 4 → Checklist + Quiz + Notas     (1 sessão)
ETAPA 5 → Persistência + Timer + XP    (1 sessão)
ETAPA 6 → Dashboard + Polimento        (1 sessão)
ETAPA 7 → Conteúdo completo (16 tópicos)(2 sessões)
```

---

### ETAPA 1 — Scaffolding & Dados

**O que entregar:**

- Estrutura de pastas: `src/constants/`, `src/data/`, `src/utils/`, `src/hooks/`
- `src/constants/colors.js` — paleta COLORS
- `src/constants/storage.js` — chaves STORAGE
- `src/data/fase1/modulo1.js` a `modulo4.js` — dados dos 16 tópicos
- `src/data/fase1/index.js` — agrega FASE1_DATA
- `src/utils/topics.js` — `isTopicUnlocked`, `isTopicComplete`, `getAllTopicsFlat`, etc.
- `src/utils/formatTime.js` — formata segundos
- `src/App.jsx` — componente raiz vazio (`return null`)
- **Sem nenhum componente visual ainda**

**Critério de aceite:** `console.log(FASE1_DATA)` mostra todos os 16 tópicos com teoria, código, checklist (4+ itens) e quiz (3 perguntas com respostas) preenchidos corretamente.

---

### ETAPA 2 — Layout & Navegação

**O que entregar:**

- `src/components/Header/Header.jsx` — barra superior fixa com logo
- `src/components/Header/XPDisplay.jsx` — placeholder para XP
- `src/components/Header/ModuleTimer.jsx` — placeholder para timer
- `src/components/Sidebar/Sidebar.jsx` — 4 módulos expandíveis
- `src/components/Sidebar/ModuleSection.jsx` — seção por módulo
- `src/components/Sidebar/TopicItem.jsx` — item de tópico (🔒/▶/✅)
- `src/App.jsx` atualizado com layout (Header + Sidebar + MainContent)
- Navegação linear funcionando: clicar em tópico bloqueado não faz nada
- Tema escuro aplicado, cores dos módulos nas bordas da sidebar

**Critério de aceite:** Visualmente correto, layout responsivo, click nos tópicos disponíveis atualiza `currentTopicId`.

---

### ETAPA 3 — TopicView: Teoria + Código

**O que entregar:**

- `src/components/TopicView/TopicView.jsx` — container principal
- `src/components/TopicView/TopicHeader.jsx` — breadcrumb, semana, progresso
- `src/components/TopicView/TheoryPanel.jsx` — texto teórico renderizado
- `src/components/TopicView/CodeBlock.jsx` — código com highlight + copiar
- `src/components/TopicView/NavigationBar.jsx` — anterior/próximo
- `src/utils/highlightCode.js` — syntax highlight por regex
- Scroll independente do MainContent

**Critério de aceite:** Teoria aparece legível, código tem highlight colorido, copiar funciona com feedback visual, navegação entre tópicos muda o conteúdo.

---

### ETAPA 4 — Checklist + Quiz + Notas

**O que entregar:**

- `src/components/TopicView/ChecklistPanel.jsx` — checkboxes práticos
- `src/components/TopicView/QuizPanel.jsx` — perguntas + feedback
- `src/components/TopicView/NotesPanel.jsx` — textarea com autosave
- NavigationBar atualizado com lógica real de `isTopicComplete()`
- **Sem persistência ainda** — só estado React local

**Critério de aceite:** Completar checklist + submeter quiz habilita o botão de avançar, que desbloqueia o próximo tópico.

---

### ETAPA 5 — Persistência + Timer + XP

**O que entregar:**

- Integração completa com `window.storage` para todas as chaves
- `src/hooks/useStorage.js` — hook de persistência
- `src/hooks/useTimer.js` — timer por módulo com `setInterval` + Page Visibility API
- `src/hooks/useXP.js` — sistema de XP: +20 checklist, +10/questão quiz, +100 módulo completo
- `src/hooks/useDebounce.js` — debounce para autosave
- `src/hooks/useToast.js` — notificações toast
- `src/components/Header/XPDisplay.jsx` — XP + barra animada
- `src/components/Header/ModuleTimer.jsx` — tempo do módulo atual
- `src/components/Header/PhaseProgress.jsx` — progresso geral
- `src/components/shared/Toast.jsx` — notificações

**Critério de aceite:** Recarregar a página restaura exatamente o estado anterior. Timer pausa ao trocar de aba. XP acumula corretamente.

---

### ETAPA 6 — Dashboard + Polimento Final

**O que entregar:**

- `src/components/Dashboard/DashboardModal.jsx` — overlay full-screen com:
  - `src/components/Dashboard/CompletionSummary.jsx` — tópicos concluídos
  - `src/components/Dashboard/AllNotes.jsx` — anotações agrupadas por módulo
  - `src/components/Dashboard/WrongAnswers.jsx` — questões erradas para revisão
  - `src/components/Dashboard/TimeReport.jsx` — tempo por módulo
- Barra de progresso geral da Fase 1 no header
- Badges de módulo completo na sidebar
- Notificações toast: "+20 XP", "Módulo Completo! 🎉", "Tópico Desbloqueado!"
- Botão de reset com confirmação

**Critério de aceite:** Dashboard abre e fecha, todas as seções mostram dados corretos, toasts aparecem e desaparecem em 3s.

---

### ETAPA 7 — Conteúdo Completo

**O que entregar:**

- Todos os 16 tópicos com conteúdo real e completo em `src/data/fase1/`
- Cada tópico com teoria (min 200 palavras), código funcional (.NET 8), 5 itens de checklist, 3 questões de quiz
- Revisar consistência de dificuldade entre tópicos
- Garantir que todos os exemplos de código compilam

**Critério de aceite:** Percorrer todos os 16 tópicos sem encontrar conteúdo placeholder ou código incompleto.

---

## PARTE 2 — PROMPTS PARA CLAUDE OPUS 4.6

> **Como usar:** Copie o prompt da etapa desejada, cole para o Claude Opus 4.6, e forneça os documentos de Requisitos e Arquitetura como contexto adicional.

---

### 📌 PROMPT BASE (incluir em TODAS as sessões)

```
Você é um engenheiro sênior React especializado em aplicações educacionais.
Você está construindo um sistema de aprendizado .NET Corporativo — uma SPA React
.jsx modular, com tema dark.

DOCUMENTOS DE REFERÊNCIA (leia antes de codar):
- 01-REQUISITOS.md: o que o sistema deve fazer
- 02-ARQUITETURA.md: como deve ser construído

REGRAS ABSOLUTAS:
1. Arquitetura modular — cada componente, hook, utilitário e módulo de dados em seu próprio arquivo
2. Inline styles em todos os componentes (sem CSS externo)
3. Persistência via window.storage (não localStorage)
4. Todo código C# deve compilar no .NET 8 / C# 12
5. Zero placeholders — conteúdo completo ou avisa que será na próxima etapa
6. Cada componente tem responsabilidade única e clara
7. Nomeação em inglês para código, português para conteúdo de aprendizado
8. Imports internos do projeto são permitidos e incentivados (componentes, hooks, utils, data)
9. Estrutura de pastas: src/components, src/hooks, src/utils, src/data, src/constants
10. Cada componente, hook e utilitário em seu próprio arquivo
```

---

### 🔧 PROMPT ETAPA 1 — Scaffolding & Dados

```
[CONTEXTO: Etapa 1 de 7 — Scaffolding & Dados]

Com base nos documentos 01-REQUISITOS.md e 02-ARQUITETURA.md, crie a
estrutura de dados e utilitários do sistema em arquivos modulares.

ENTREGUE NESTA ETAPA:
1. `src/constants/colors.js` com paleta COLORS
2. `src/constants/storage.js` com chaves STORAGE
3. `src/data/fase1/modulo1.js` a `modulo4.js`: dados dos 16 tópicos da Fase 1
   - `src/data/fase1/index.js`: agrega FASE1_DATA
   - Cada tópico DEVE ter:
     • id (ex: "m1t1")
     • moduleId, title, theory (texto real, 200+ palavras)
     • code (código C# .NET 8 completo e comentado em pt-BR)
     • codeLanguage ("csharp" ou "bash")
     • runCommand (comando dotnet para executar)
     • checklist (array com 5 tarefas práticas reais)
     • quiz (array com 3 perguntas, 4 opções, answer index, explanation)
4. `src/utils/topics.js` com funções:
   - isTopicUnlocked(topicId, completedTopics, allTopics)
   - isTopicComplete(topicId, checklists, quizzes)
   - getAllTopicsFlat(fase1Data)
   - getTopicById(id, allTopics)
   - getModuleByTopicId(topicId, fase1Data)
5. `src/utils/formatTime.js` com:
   - formatTime(seconds) → "1h 23min" ou "45min" ou "30s"
6. `src/App.jsx` com componente App vazio (return null) + export default

NÃO crie nenhum componente visual ainda.
Foque em qualidade do conteúdo — a teoria e o código de cada tópico precisam
ser realmente didáticos, progressivos em dificuldade e prontos para o VSCode.

CONTEÚDO DOS 16 TÓPICOS (preencha com conteúdo real):
- M1T1: Tipos & Variáveis (value types, reference types, var, nullable, ??)
- M1T2: Controle de Fluxo (if/else, switch expression, for, foreach, while, pattern matching)
- M1T3: Coleções (List<T>, Dictionary<K,V>, HashSet<T>, Array — quando usar cada)
- M1T4: Strings (interpolação, StringBuilder, métodos essenciais, Span<T> intro)
- M2T1: Classes & Objetos (campos, propriedades, construtores, primary constructors)
- M2T2: Herança & Classes Abstratas (extends, abstract, sealed, base)
- M2T3: Interfaces & Polimorfismo (interface, explicit impl, múltiplas interfaces)
- M2T4: Encapsulamento (access modifiers, properties com validação, init-only)
- M3T1: Generics (classes genéricas, métodos, constraints, onde usar)
- M3T2: Delegates & Func (delegate, Func<>, Action<>, Predicate<>, lambda)
- M3T3: LINQ Essencial (Where, Select, OrderBy, GroupBy, FirstOrDefault, Any, All, Aggregate)
- M3T4: async/await (Task, Task<T>, async void, ConfigureAwait, CancellationToken)
- M4T1: Git Essencial (init, add, commit, push, pull, clone, log, status, .gitignore)
- M4T2: Branches (branch, checkout, merge, rebase — diferenças e quando usar)
- M4T3: GitFlow (main, develop, feature/*, hotfix/*, release/* com comandos reais)
- M4T4: Boas Práticas Git (conventional commits, PR etiqueta, mensagens de commit .NET)
```

---

### 🔧 PROMPT ETAPA 2 — Layout & Navegação

```
[CONTEXTO: Etapa 2 de 7 — Layout & Navegação]
[ENTRADA: Forneça a estrutura de pastas atual do projeto]

Crie os componentes de Layout e Navegação em arquivos separados.
Não modifique os dados (src/data/, src/utils/) — apenas crie componentes em src/components/.

ARQUIVOS A CRIAR:

1. `src/components/Header/Header.jsx` (height: 56px, position: fixed, top: 0, z-index: 100)
   - Logo ".NET FASE 1" com gradiente
   - Espaço reservado para XPDisplay e ModuleTimer (placeholders por enquanto)
   - Borda inferior sutil

2. `src/components/Sidebar/Sidebar.jsx` (width: 220px, height: calc(100vh - 56px), overflow-y: auto)
   - `src/components/Sidebar/ModuleSection.jsx` — seção expansível por módulo
   - `src/components/Sidebar/TopicItem.jsx` — item individual
   - 4 seções de módulo, cada uma com header clicável (expand/collapse)
   - Cor do módulo na borda esquerda de cada seção
   - Lista de tópicos com ícones de status:
     🔒 se bloqueado (opacity 0.4, cursor: not-allowed)
     ▶ se tópico atual (fundo levemente colorido)
     ✅ se concluído (verde)
   - Clicar em tópico bloqueado: sem ação
   - Clicar em tópico disponível: atualiza currentTopicId

3. MainContent area no `src/App.jsx` (flex: 1, height: calc(100vh - 56px), overflow-y: auto)
   - padding: 32px
   - max-width: 820px, margin: 0 auto
   - Placeholder "Selecione um tópico para começar" se nenhum selecionado

4. Atualizar `src/App.jsx` (layout geral)
   - Estado: currentTopicId, completedTopics, checklists, quizzes (só useState por hora)
   - flex row: Sidebar + MainContent
   - margin-top: 56px para compensar o header fixo

TEMA: use as constantes importadas de src/constants/colors.js
INTERAÇÕES: hover nos itens da sidebar com transição 0.15s
```

---

### 🔧 PROMPT ETAPA 3 — TopicView: Teoria + Código

```
[CONTEXTO: Etapa 3 de 7 — TopicView: Teoria + Código]
[ENTRADA: Descreva os arquivos criados nas Etapas 1 e 2]

Crie os componentes do TopicView em `src/components/TopicView/`.
Crie o utilitário `src/utils/highlightCode.js`.
Atualize o App.jsx para usar TopicView no lugar do placeholder.

ARQUIVOS A CRIAR:

1. `src/components/TopicView/TopicHeader.jsx`
   - Breadcrumb: "⚡ C# Fundamentos  ›  Tipos & Variáveis"
   - Tag de semana: "Semana 1"
   - Barra de progresso do módulo: "2/4 tópicos" com mini progress bar

2. `src/components/TopicView/TheoryPanel.jsx`
   - Renderiza theory como parágrafos: text.split('\n\n').map(p => <p>)
   - Blocos de código inline: texto entre ` ` vira <code> estilizado
   - Fonte: monospace para código inline, sans-serif para texto
   - line-height: 1.8 para leitura confortável

3. `src/components/TopicView/CodeBlock.jsx`
   - Aplique a função highlightCSharp() de `src/utils/highlightCode.js`
   - Header do bloco: linguagem à esquerda, botão "COPIAR" à direita
   - Após copiar: "✓ COPIADO" por 2 segundos
   - Run command em destaque abaixo do código:
     "$ dotnet new console -n Projeto && dotnet run"
   - Scroll horizontal se código for largo (overflow-x: auto)
   - Fundo levemente mais escuro que o surface principal

4. `src/components/TopicView/NavigationBar.jsx` (rodapé do tópico)
   - Botão "← Anterior" (disabled no primeiro tópico)
   - Indicador central: "Tópico 1 de 16"
   - Botão "Próximo →" (disabled se tópico não concluído)
   - Por enquanto: tópico é concluído se checklist e quiz placeholder estiverem "ok"
   - (Lógica real virá na Etapa 4)

IMPORTANTE:
- Syntax highlight não precisa ser perfeito — cor para keywords, strings, comentários, tipos
- O código deve ser claramente legível com contrast ratio adequado
- NavigationBar fica sticky no bottom do conteúdo, não fixed na tela
```

---

### 🔧 PROMPT ETAPA 4 — Checklist + Quiz + Notas

```
[CONTEXTO: Etapa 4 de 7 — Checklist, Quiz e Notas]
[ENTRADA: Descreva os arquivos criados nas Etapas 1 a 3]

Crie os três painéis interativos em `src/components/TopicView/`.
Estes são os componentes centrais do sistema de aprendizado.

ARQUIVOS A CRIAR:

1. `src/components/TopicView/ChecklistPanel.jsx`
   Props: { items, topicId, checked, onChange }

   - Título: "✅ Pratique no VSCode"
   - Cada item: checkbox + texto + linha riscada quando marcado
   - Barra de progresso: "3 / 5 tarefas concluídas" com barra colorida
   - Ao completar todos: fundo fica levemente verde + mensagem "Parabéns! Todas as tarefas concluídas"
   - checked[] é array de boolean, onChange(index, newValue) atualiza

2. `src/components/TopicView/QuizPanel.jsx`
   Props: { questions, topicId, savedAnswers, savedSubmitted, onSubmit }

   - Título: "🧠 Teste seu Conhecimento"
   - Mostra as 3 perguntas de uma vez (não paginado)
   - Cada pergunta: enunciado + 4 botões de opção
   - Clicar em opção: seleciona (borda colorida), não confirma ainda
   - Botão "Confirmar Respostas" aparece quando todas as 3 têm resposta
   - Após confirmar:
     • Cada opção: verde se correta, vermelho se selecionada errada
     • Explicação aparece abaixo de cada pergunta
     • Score: "2 / 3 corretas  +20 XP"
   - Se savedSubmitted=true: mostra resultado sem poder re-submeter
   - onSubmit(answers: number[], xpGained: number) é chamado ao confirmar

3. `src/components/TopicView/NotesPanel.jsx`
   Props: { topicId, value, onChange }

   - Título: "📝 Minhas Anotações"
   - Textarea com min-height: 80px, resize: vertical
   - Placeholder: "Anote suas dúvidas, insights ou observações sobre este tópico..."
   - Indicador de save: "💾 Salvando..." → "✓ Salvo" (debounce 1000ms)
   - onChange(text) chamado a cada keystroke (debounce no pai ou no próprio componente)

4. Atualizar `src/components/TopicView/NavigationBar.jsx`
   - Botão "Próximo →" usa isTopicComplete() real agora
   - Se bloqueado: tooltip "Complete o checklist e o quiz para avançar"
   - Ao avançar com sucesso: adiciona topicId ao completedTopics

ORDEM DOS PAINÉIS no TopicView:
TopicHeader → TheoryPanel → CodeBlock → ChecklistPanel → QuizPanel → NotesPanel → NavigationBar
```

---

### 🔧 PROMPT ETAPA 5 — Persistência + Timer + XP

```
[CONTEXTO: Etapa 5 de 7 — Persistência, Timer e XP]
[ENTRADA: Descreva os arquivos criados nas Etapas 1 a 4]

Crie os hooks customizados em `src/hooks/` e integre ao App.jsx.

IMPLEMENTAÇÕES:

1. PERSISTÊNCIA COMPLETA (`src/hooks/useStorage.js`)
   - useEffect([]) no App: carregar todo o estado do window.storage na inicialização
   - Use Promise.allSettled para carregar em paralelo
   - Fallback seguro se chave não existir (try/catch por chave)
   - Loading state: mostrar "Carregando progresso..." enquanto carrega
   - useEffect([dep]) para cada fatia de estado: salvar quando mudar
   - Chaves conforme definido em STORAGE na Etapa 1

2. TIMER POR MÓDULO (`src/hooks/useTimer.js`)
   - useRef para o interval
   - Iniciar ao entrar em qualquer tópico de um módulo
   - Limpar e reiniciar ao mudar de módulo
   - Pausar com document.addEventListener('visibilitychange')
   - Salvar no storage a cada 5 segundos (não a cada segundo)
   `src/components/Header/ModuleTimer.jsx` no Header: "⏱ 1h 23min" com cor do módulo atual

3. SISTEMA DE XP (`src/hooks/useXP.js`)
   Regras exatas:
   - +20 XP: ao completar 100% do checklist de um tópico (primeira vez)
   - +10 XP: por questão correta no quiz (primeira submissão)
   - +100 XP: ao completar o último tópico de um módulo
   - XP nunca decresce, nunca duplica

   `src/components/Header/XPDisplay.jsx` no Header:
   - "⚡ 350 XP"
   - Barra de progresso para próximo nível (nível a cada 500 XP)
   - "LVL 2" com gradiente

4. NOTIFICAÇÕES TOAST (`src/hooks/useToast.js` + `src/components/shared/Toast.jsx`)
   - Sistema simples: array de toasts no estado
   - Cada toast: { id, message, type: 'success'|'xp'|'unlock' }
   - Aparecem no canto inferior direito, somem em 3s
   - Máximo 3 simultâneos
   - Exemplos: "+20 XP — Checklist completo!", "🎉 Módulo 1 Concluído!", "🔓 Novo tópico desbloqueado"

5. `src/components/Header/PhaseProgress.jsx`
   No Header: "Fase 1 — 4 / 16 tópicos (25%)"
   Barra colorida com gradiente dos módulos
```

---

### 🔧 PROMPT ETAPA 6 — Dashboard + Polimento

```
[CONTEXTO: Etapa 6 de 7 — Dashboard e Polimento Final]
[ENTRADA: Descreva os arquivos criados nas Etapas 1 a 5]

Crie os componentes de Dashboard em `src/components/Dashboard/`.

1. `src/components/Dashboard/DashboardModal.jsx` (overlay position: fixed, inset: 0, z-index: 200)
   - Botão de fechar (X) no canto superior direito
   - Scroll interno
   - 4 seções com tabs:

   Tab "📊 Progresso" (`src/components/Dashboard/CompletionSummary.jsx`)
   - Grid de todos os 16 tópicos: ✅ concluído / ○ pendente
   - Tempo total por módulo
   - XP breakdown: de onde veio cada XP

   Tab "📝 Anotações" (`src/components/Dashboard/AllNotes.jsx`)
   - Agrupa por módulo
   - Só mostra tópicos que têm anotação (não vazio)
   - Placeholder se nenhuma anotação ainda

   Tab "❌ Revisar" (`src/components/Dashboard/WrongAnswers.jsx`)
   - Questões respondidas errado no quiz
   - Mostra pergunta, resposta dada (errada) e resposta correta com explicação
   - Placeholder "Nenhum erro para revisar 🎉" se tudo certo

   Tab "⏱ Tempo" (`src/components/Dashboard/TimeReport.jsx`)
   - Tempo total por módulo em formato legível
   - Tempo total geral
   - Média por tópico

2. POLIMENTO VISUAL
   - Badges nas seções da Sidebar: módulo completo ganha "✓ COMPLETO" badge verde
   - Animação suave no progresso da fase (transition 0.5s)
   - Estados hover refinados em todos os elementos clicáveis
   - Focus states para acessibilidade (outline colorido nos interativos)

3. RESET DE PROGRESSO
   - Botão discreto no Dashboard: "🗑️ Resetar Progresso"
   - Dialog de confirmação nativo (window.confirm)
   - Limpa todas as chaves do storage e reseta estado para inicial

4. BOTÃO DO DASHBOARD no Header
   - Ícone "📊" à direita
   - Abre o DashboardModal
```

---

### 🔧 PROMPT ETAPA 7 — Revisão de Conteúdo

```
[CONTEXTO: Etapa 7 de 7 — Revisão e Completude do Conteúdo]
[ENTRADA: Descreva os arquivos de dados em src/data/fase1/]

Revise e complete todo o conteúdo dos 16 tópicos nos arquivos de dados.

CHECKLIST DE QUALIDADE POR TÓPICO:

Para cada um dos 16 tópicos, verifique e corrija:

[ ] theory: 200+ palavras, explica o PORQUÊ além do como, cita uso corporativo
[ ] code: compila no .NET 8, sem erros, comentários em pt-BR, inclui runCommand
[ ] checklist: 5 tarefas concretas e verificáveis no VSCode
[ ] quiz[0]: pergunta conceitual (o que é / por que)
[ ] quiz[1]: pergunta de aplicação (qual usar quando)
[ ] quiz[2]: pergunta de código (o que este trecho faz)
[ ] Dificuldade progressiva: M1 < M2 < M3 < M4
[ ] Nenhum código com "// ..." ou incompleto

PONTOS DE ATENÇÃO:
- M3T3 (LINQ): incluir exemplos com coleções reais, não só ints
- M3T4 (async/await): mostrar o ANTI-PATTERN (async void) além do correto
- M4T3 (GitFlow): incluir comandos git reais, não só descrição
- M4T4 (Boas Práticas): incluir exemplos reais de conventional commits para .NET

Se encontrar conteúdo inadequado, substitua completamente — não remende.
Entregue cada arquivo de módulo completo e funcional ao final.
```

---

## PARTE 3 — DICAS DE USO COM CLAUDE OPUS 4.6

### Como alimentar cada sessão

```
1. Abra uma nova conversa com Claude Opus 4.6
2. Cole o PROMPT BASE primeiro
3. Cole o documento 01-REQUISITOS.md
4. Cole o documento 02-ARQUITETURA.md
5. Cole o PROMPT da Etapa específica
6. Se for Etapa 2+: descreva os arquivos já criados nas etapas anteriores
```

### Quando o código ficar muito grande

Como a arquitetura é modular (cada componente em arquivo separado), o código nunca ficará grande demais para uma resposta. Se necessário:

```
"Entregue os arquivos em 2 partes:
Parte 1: Todos os arquivos em src/components/TopicView/
Parte 2: Todos os arquivos em src/components/Header/ e src/hooks/"
```

### Se algo não funcionar como esperado

```
"O componente [X] em src/components/[Pasta]/[Arquivo].jsx não está [comportamento esperado].
Aqui está o código atual:
[cole o código do componente]

Corrija mantendo a mesma estrutura e sem alterar outros arquivos."
```

### Checklist final antes de entregar

- [ ] Cada componente tem `export default` e está em seu próprio arquivo
- [ ] Imports internos usam caminhos relativos corretos
- [ ] Nenhum import de lib externa (exceto React)
- [ ] `window.storage` em vez de `localStorage`
- [ ] Todos os 16 tópicos com conteúdo real
- [ ] Sem erros de console no uso normal
- [ ] Progresso persiste após F5
- [ ] Estrutura segue: src/components/, src/hooks/, src/utils/, src/data/, src/constants/
