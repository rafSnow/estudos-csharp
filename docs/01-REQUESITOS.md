# 📋 REQUISITOS — Sistema de Aprendizado .NET Corporativo (Fase 1)

> **Versão:** 1.0
> **Data:** 2026-03-09
> **Contexto:** Plataforma de estudos interativa em React para trilha de aprendizado .NET Corporativo, começando pela Fase 1 (C# + Git). O usuário aprende lendo teoria, praticando com código real no VSCode e validando com quizzes e checklists. Todo progresso é persistido via `window.storage`.

---

## 1. VISÃO GERAL

O sistema é uma **Single Page Application em React (JSX)** que transforma o roadmap de 9 fases de .NET Corporativo em uma plataforma de aprendizado linear, interativa e persistente. A **Fase 1** é o escopo deste documento.

O aluno navega pelos tópicos **um de cada vez** (progresso linear), lê a teoria, copia e roda o código no VSCode, marca o checklist de tarefas práticas e responde o quiz antes de avançar.

---

## 2. ESCOPO — FASE 1

### 2.1 Módulos e Tópicos

```
Fase 1 — C# Fundamentos & Git (Semanas 1–4)
│
├── Módulo 1: C# Fundamentos (Semana 1)
│   ├── Tópico 1.1 — Tipos & Variáveis
│   ├── Tópico 1.2 — Controle de Fluxo (if, switch, for, foreach, while)
│   ├── Tópico 1.3 — Coleções (List<T>, Dictionary, HashSet, Array)
│   └── Tópico 1.4 — Strings & Manipulação
│
├── Módulo 2: POO em C# (Semana 2)
│   ├── Tópico 2.1 — Classes, Objetos e Construtores
│   ├── Tópico 2.2 — Herança e Classes Abstratas
│   ├── Tópico 2.3 — Interfaces e Polimorfismo
│   └── Tópico 2.4 — Encapsulamento e Modificadores de Acesso
│
├── Módulo 3: C# Intermediário (Semana 3)
│   ├── Tópico 3.1 — Generics
│   ├── Tópico 3.2 — Delegates, Func<> e Action<>
│   ├── Tópico 3.3 — LINQ (Query operators essenciais)
│   └── Tópico 3.4 — async/await e Task
│
├── Módulo 4: Git & GitFlow (Semana 4)
│   ├── Tópico 4.1 — Git Essencial (init, add, commit, push, pull)
│   ├── Tópico 4.2 — Branches e Merge
│   ├── Tópico 4.3 — GitFlow (feature, hotfix, release)
│   └── Tópico 4.4 — Boas Práticas (conventional commits, .gitignore)
│
└── Projeto Final: Task Manager Console App
    ├── Integra todos os conceitos da Fase 1
    ├── CRUD com POO, LINQ, async/await
    └── GitFlow completo com feature branches
```

---

## 3. REQUISITOS FUNCIONAIS

### RF-01 — Navegação Linear

- O aluno começa no Tópico 1.1 e só pode avançar após concluir o tópico atual
- Um tópico é considerado **concluído** quando:
  - [ ] Todos os itens do checklist estão marcados **E**
  - [ ] O quiz foi respondido (independentemente de acertar tudo)
- O botão "Próximo Tópico" fica desabilitado até que as condições acima sejam satisfeitas
- Tópicos já concluídos podem ser revisitados livremente pela sidebar

### RF-02 — Conteúdo de Cada Tópico

Cada tópico deve conter obrigatoriamente:

**a) Teoria**

- Texto explicativo em markdown renderizado
- Explica o conceito, por que existe e como é usado corporativamente
- Tom direto e técnico, sem ser acadêmico

**b) Bloco de Código**

- Código C# ou comandos Git completos e funcionais (.NET 8)
- Syntax highlight com cores para keywords, strings e comentários
- Botão **"Copiar"** que copia para o clipboard
- Instrução de como criar o projeto e rodar: `dotnet new console -n X`
- Cada exemplo deve ter comentários explicativos em português

**c) Checklist Prático**

- Lista de 4–6 tarefas que o aluno faz no VSCode
- Cada item é um checkbox clicável
- Exemplos: "Criar projeto console", "Declarar 5 tipos diferentes", "Rodar dotnet run"
- Estado dos checkboxes é salvo no storage

**d) Quiz**

- 3 perguntas de múltipla escolha (4 opções cada)
- Após responder, mostra: ✅ correto ou ❌ errado + explicação detalhada
- Não bloqueia avanço se errar — apenas registra as respostas
- Respostas salvas no storage para revisão posterior

### RF-03 — Anotações Pessoais

- Campo de texto livre (textarea) em cada tópico
- Placeholder: "Suas anotações, dúvidas ou observações sobre este tópico..."
- Auto-save: salva no storage 1 segundo após parar de digitar (debounce)
- Indicador visual de "Salvo" após persistir

### RF-04 — Timer por Módulo

- Cada módulo tem um timer que conta o tempo total gasto
- Timer começa automaticamente ao entrar em qualquer tópico do módulo
- Pausa quando o usuário vai para outra aba (Page Visibility API)
- Tempo acumulado salvo no storage
- Exibido no cabeçalho do módulo: "⏱ 1h 23min"

### RF-05 — Persistência Completa (window.storage)

Os seguintes dados são persistidos com `window.storage`:

```
Chaves de storage:
phase1:completed_topics     → array de IDs de tópicos concluídos
phase1:checklist_{topicId}  → objeto {itemIndex: boolean}
phase1:quiz_{topicId}       → objeto {answers: number[], submitted: boolean}
phase1:notes_{topicId}      → string com anotações
phase1:time_{moduleId}      → número em segundos
phase1:current_topic        → ID do tópico atual
phase1:xp                   → pontuação total
```

### RF-06 — Sistema de XP

- Concluir checklist de um tópico: +20 XP
- Acertar questão do quiz: +10 XP por questão
- Concluir um módulo inteiro: +100 XP bônus
- XP exibido no header com barra de progresso visual
- XP nunca decresce

### RF-07 — Progresso Visual

- Barra de progresso geral da Fase 1 no topo (0–100%)
- Sidebar com todos os tópicos listados por módulo
- Ícone de status por tópico: 🔒 bloqueado | ▶ atual | ✅ concluído
- Módulos com todos os tópicos concluídos ganham badge especial

### RF-08 — Dashboard de Revisão

- Tela acessível pelo menu que mostra:
  - Todos os tópicos concluídos com data
  - Anotações de todos os tópicos em um único lugar
  - Respostas erradas do quiz (para revisar)
  - Tempo total por módulo
  - XP breakdown (de onde veio cada XP)

---

## 4. REQUISITOS NÃO FUNCIONAIS

### RNF-01 — Tecnologia

- **Framework:** React com hooks (useState, useEffect, useCallback, useRef)
- **Estilo:** Inline styles (sem CSS externo, sem Tailwind)
- **Persistência:** `window.storage` API (não localStorage)
- **Sem dependências externas** além de React e ReactDOM
- **Arquitetura modular:** cada componente, hook, utilitário e módulo de dados em seu próprio arquivo `.jsx` / `.js`
- **Estrutura de pastas:**
  ```
  src/
  ├── components/   → componentes React (um por arquivo)
  ├── hooks/        → custom hooks
  ├── utils/        → funções utilitárias puras
  ├── data/         → conteúdo estático (tópicos, módulos)
  └── constants/    → paleta de cores, chaves de storage
  ```
- **Imports internos** entre módulos são permitidos e incentivados
- **Bundler:** Vite com `@vitejs/plugin-react`

### RNF-02 — Código

- Todo código de exemplo deve compilar e rodar no **.NET 8 / C# 12**
- Nenhum exemplo incompleto ou com `// ...resto do código`
- Comentários em português

### RNF-03 — UX

- Tema escuro (dark mode) — background `#0a0a0f` ou similar
- Feedback visual imediato em todas as interações
- Loading states onde aplicável
- Responsivo (funcionar em telas a partir de 900px)

### RNF-04 — Performance

- Nenhuma chamada a API externa (tudo local)
- Sem imagens externas
- Renderização instantânea de conteúdo

---

## 5. REGRAS DE NEGÓCIO

| ID    | Regra                                                         |
| ----- | ------------------------------------------------------------- |
| RN-01 | Tópico só é desbloqueado se o anterior foi concluído          |
| RN-02 | Conclusão = checklist 100% marcado + quiz submetido           |
| RN-03 | O quiz pode ser refeito, mas XP só é ganho na primeira vez    |
| RN-04 | Anotações são opcionais e não bloqueiam avanço                |
| RN-05 | Timer conta apenas tempo real na aba (Visibility API)         |
| RN-06 | Tópicos concluídos podem ser revisitados sem perder progresso |
| RN-07 | Reset de progresso requer confirmação do usuário              |
| RN-08 | O primeiro tópico (1.1) começa desbloqueado por padrão        |

---

## 6. CRITÉRIOS DE ACEITE (Definition of Done)

- [ ] Todos os 16 tópicos da Fase 1 têm teoria, código, checklist e quiz completos
- [ ] Navegação linear funciona: tópico só abre quando anterior é concluído
- [ ] Progresso persiste após recarregar a página
- [ ] Timer por módulo funciona e pausa ao trocar de aba
- [ ] Quiz mostra feedback (certo/errado + explicação) após responder
- [ ] Botão "Copiar" código funciona e mostra confirmação visual
- [ ] Anotações são salvas com auto-save e indicador visual
- [ ] Dashboard de revisão exibe todo o histórico corretamente
- [ ] XP é calculado e exibido corretamente
- [ ] Nenhum erro de console em uso normal
