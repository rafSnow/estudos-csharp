# 🚀 FASE 3 — ROADMAP DE IMPLEMENTAÇÃO + PROMPTS PARA CLAUDE OPUS 4.6

> **Fase:** 3 de 9 — Qualidade & Arquitetura  
> **Stack:** Clean Code · SOLID · Domain-Driven Design · FluentValidation  
> **Semanas:** 9–12 do cronograma geral  
> **Pré-requisito:** Fase 2 concluída (Web API + EF Core + SQL Server + DI)  
> **Projeto:** Sistema Financeiro com DDD Completo (Contas, Transações, Extrato)

---

## CONTEXTO: O QUE MUDA DA FASE 2 PARA A FASE 3

A Fase 2 ensinou a construir APIs funcionais com banco de dados.
A Fase 3 ensina a construir APIs **corretas** — com arquitetura que sobrevive ao crescimento do projeto.

Esta é a fase mais conceitual e transformadora da trilha. O aluno vai aprender que **código que funciona e código que é bom são coisas muito diferentes**, e por que empresas como iFood, PicPay e Nubank exigem DDD e SOLID em entrevistas técnicas.

O sistema React **não muda estruturalmente** — apenas `FASE3_DATA` é adicionado ao `ALL_PHASES`.

```
Sistema após Fase 3:
Sidebar
├── ✅ FASE 1 — C# Fundamentos & Git         (concluída)
├── ✅ FASE 2 — Web API & Banco de Dados      (concluída)
└── ▶  FASE 3 — Qualidade & Arquitetura      (em progresso)
     ├── Módulo 9:  Clean Code
     ├── Módulo 10: Princípios SOLID
     ├── Módulo 11: Domain-Driven Design (DDD)
     └── Módulo 12: FluentValidation
```

---

## PARTE 1 — MAPA DE CONTEÚDO DA FASE 3

### Módulos e Tópicos (16 tópicos + 1 projeto, Semanas 9–12)

```
Fase 3 — Qualidade & Arquitetura
│
├── Módulo 9:  Clean Code (Semana 9)                  cor: #06B6D4
│   ├── Tópico 9.1  — Nomes que revelam intenção
│   ├── Tópico 9.2  — Funções pequenas e responsabilidade única
│   ├── Tópico 9.3  — Comentários: quando escrever e quando deletar
│   └── Tópico 9.4  — Refatoração: técnicas e quando aplicar
│
├── Módulo 10: Princípios SOLID (Semana 10)           cor: #8B5CF6
│   ├── Tópico 10.1 — S: Single Responsibility Principle
│   ├── Tópico 10.2 — O/L: Open/Closed + Liskov Substitution
│   ├── Tópico 10.3 — I: Interface Segregation Principle
│   └── Tópico 10.4 — D: Dependency Inversion Principle
│
├── Módulo 11: Domain-Driven Design (Semanas 11–12)   cor: #10B981
│   ├── Tópico 11.1 — Linguagem Ubíqua e Bounded Contexts
│   ├── Tópico 11.2 — Entities e Value Objects
│   ├── Tópico 11.3 — Aggregates, Repositories e Domain Services
│   └── Tópico 11.4 — Domain Events e Application Layer
│
├── Módulo 12: FluentValidation (Semana 12)           cor: #F59E0B
│   ├── Tópico 12.1 — Validators e Regras Básicas
│   ├── Tópico 12.2 — Regras Customizadas e Condicionais
│   ├── Tópico 12.3 — Integração com ASP.NET Core e DI
│   └── Tópico 12.4 — Validação em Camadas (Domain + Application)
│
└── Projeto Final Fase 3: Sistema Financeiro (DDD Completo)
    ├── Domain: Conta, Transacao, Extrato como Aggregates
    ├── Application: UseCases com MediatR (introdução)
    ├── Infrastructure: Repositórios com EF Core
    ├── API: Controllers + FluentValidation em todos os inputs
    └── GitFlow: feature branch por caso de uso
```

---

## PARTE 2 — ROADMAP DE IMPLEMENTAÇÃO

### Visão Geral das Etapas

```
ETAPA F3-1 → Dados da Fase 3 + Registro em ALL_PHASES       (1 sessão)
ETAPA F3-2 → Conteúdo Clean Code (Módulo 9)                 (1 sessão)
ETAPA F3-3 → Conteúdo SOLID (Módulo 10)                     (1 sessão)
ETAPA F3-4 → Conteúdo DDD parte 1 (Tópicos 11.1 e 11.2)    (1 sessão)
ETAPA F3-5 → Conteúdo DDD parte 2 (Tópicos 11.3 e 11.4)    (1 sessão)
ETAPA F3-6 → Conteúdo FluentValidation + Projeto Final      (1 sessão)
ETAPA F3-7 → Revisão geral + Polimento                      (1 sessão)
```

> **Por que DDD tem 2 etapas?** É o tópico mais denso da trilha inteira. Entities vs Value Objects e Aggregates vs Domain Services são conceitos que precisam de exemplos ricos e progressivos para fixar. Vale a sessão extra.

---

### ETAPA F3-1 — Dados da Fase 3 + Integração

**O que entregar:**
- Constante `FASE3_DATA` com esqueleto dos 16 tópicos (conteúdo real nos prompts F3-2 a F3-6)
- Novas cores adicionadas a `COLORS`: m9, m10, m11, m12
- Novas chaves de storage com prefixo `phase3:`
- `ALL_PHASES` atualizado com a Fase 3
- Regra: Fase 3 só desbloqueia quando `phase2:completed_topics.length === 16`

**Critério de aceite:** Fase 3 aparece na sidebar como 🔒 ao completar Fase 2. Estrutura dos 16 tópicos existe sem conteúdo placeholder visível ao usuário (tópicos bloqueados não são acessados).

---

### ETAPAS F3-2 a F3-6 — Conteúdo por Módulo

Cada etapa adiciona um módulo completo, revisado e com código real que o aluno executa no VSCode.

**Critério de aceite:** Todos os tópicos com teoria 200+ palavras, código compilável `.NET 8`, checklist de 5 tarefas reais, 3 questões de quiz com explicação.

---

### ETAPA F3-7 — Revisão Final

**O que entregar:**
- Revisão de coerência entre os módulos (Clean Code → SOLID → DDD → FluentValidation formam uma progressão lógica)
- Verificar que o projeto financeiro referencia conceitos dos 4 módulos
- Teste do fluxo completo Fase 1 → 2 → 3 sem regressões

---

## PARTE 3 — PROMPTS PARA CLAUDE OPUS 4.6

---

### 📌 PROMPT BASE FASE 3 (incluir em TODAS as sessões)

```
Você é um engenheiro sênior .NET com profundo conhecimento de arquitetura de
software construindo a FASE 3 de uma plataforma de aprendizado corporativo .NET.
As Fases 1 e 2 já estão funcionando e não podem ser quebradas.

DOCUMENTOS DE REFERÊNCIA:
- 01-REQUISITOS.md       (base arquitetural do sistema React)
- 02-ARQUITETURA.md      (componentes e persistência)
- 03-ROADMAP-E-PROMPTS.md (prompts e etapas da Fase 1)
- 04-ROADMAP-FASE2.md    (prompts e etapas da Fase 2)
- 05-ROADMAP-FASE3.md    (este documento — Fase 3)

REGRAS ABSOLUTAS (mesmas das fases anteriores, mais estas):
1. Nunca quebrar Fase 1 ou Fase 2 — APENAS ADICIONAR ao final do arquivo
2. Clean Code e SOLID devem ter exemplos ANTES (código ruim) e DEPOIS (código limpo)
3. DDD: nunca misturar conceitos de camadas — Domain não referencia Infrastructure
4. Todo código do projeto financeiro deve seguir os princípios ensinados no módulo
5. FluentValidation: sempre usar a versão 11.x compatível com .NET 8
6. Exemplos corporativos reais: cite Nubank (sistema financeiro), iFood, PicPay
7. Para DDD: a nomenclatura deve ser em português no domínio (Conta, Transacao, Extrato)
   para simular um contexto corporativo brasileiro real
8. Cada tópico deve ter um "anti-pattern" explícito — mostrar como NÃO fazer
   antes de mostrar a solução correta
```

---

### 🔧 PROMPT F3-1 — Dados da Fase 3 + Integração

```
[CONTEXTO: Fase 3 — Etapa F3-1: Estrutura de Dados e Integração]
[ENTRADA: Cole aqui o .jsx completo e funcionando com Fases 1 e 2]

Mantenha TODO o código existente intacto.
Adicione ao final do arquivo, sem modificar nada:

═══════════════════════════════════════════════════════
1. CORES DOS NOVOS MÓDULOS
═══════════════════════════════════════════════════════
Adicione ao objeto COLORS existente:
  m9:  '#06B6D4',   // Clean Code — ciano
  m10: '#8B5CF6',   // SOLID — violeta
  m11: '#10B981',   // DDD — esmeralda
  m12: '#F59E0B',   // FluentValidation — âmbar

═══════════════════════════════════════════════════════
2. CHAVES DE STORAGE DA FASE 3
═══════════════════════════════════════════════════════
Adicione ao objeto STORAGE:
  phase3Completed:  'phase3:completed_topics',
  phase3Xp:         'phase3:xp',
  phase3Unlocked:   'phase3:unlocked',
  checklist3: id => `phase3:checklist_${id}`,
  quiz3:      id => `phase3:quiz_${id}`,
  notes3:     id => `phase3:notes_${id}`,
  timer3:     id => `phase3:timer_${id}`,

═══════════════════════════════════════════════════════
3. CONSTANTE FASE3_DATA — ESTRUTURA COMPLETA
═══════════════════════════════════════════════════════
Crie FASE3_DATA seguindo a mesma estrutura de FASE1_DATA e FASE2_DATA.
Preencha os campos id, moduleId, title, week, color — conteúdo real virá
nas etapas F3-2 a F3-6. Por ora, coloque theory/code/checklist/quiz
com strings indicando "conteúdo pendente — não exibido ao usuário"
(os tópicos estarão bloqueados na sidebar até serem desbloqueados linearmente,
então o aluno nunca verá o placeholder).

Módulos e IDs:
  Módulo 9  — id: 'm9',  title: 'Clean Code',         color: '#06B6D4', week: 'Semana 9'
    m9t1 — Nomes que revelam intenção
    m9t2 — Funções pequenas e responsabilidade única
    m9t3 — Comentários: quando escrever e quando deletar
    m9t4 — Refatoração: técnicas e quando aplicar

  Módulo 10 — id: 'm10', title: 'Princípios SOLID',   color: '#8B5CF6', week: 'Semana 10'
    m10t1 — S: Single Responsibility Principle
    m10t2 — O/L: Open/Closed + Liskov Substitution
    m10t3 — I: Interface Segregation Principle
    m10t4 — D: Dependency Inversion Principle

  Módulo 11 — id: 'm11', title: 'Domain-Driven Design', color: '#10B981', week: 'Semanas 11–12'
    m11t1 — Linguagem Ubíqua e Bounded Contexts
    m11t2 — Entities e Value Objects
    m11t3 — Aggregates, Repositories e Domain Services
    m11t4 — Domain Events e Application Layer

  Módulo 12 — id: 'm12', title: 'FluentValidation',   color: '#F59E0B', week: 'Semana 12'
    m12t1 — Validators e Regras Básicas
    m12t2 — Regras Customizadas e Condicionais
    m12t3 — Integração com ASP.NET Core e DI
    m12t4 — Validação em Camadas (Domain + Application)

  Projeto final — id: 'm12proj', moduleId: 'm12'
    title: '🏦 Projeto: Sistema Financeiro DDD'

═══════════════════════════════════════════════════════
4. ATUALIZAR ALL_PHASES
═══════════════════════════════════════════════════════
Adicione ao array ALL_PHASES:
  {
    id: 'phase3',
    title: 'Fase 3',
    subtitle: 'Qualidade & Arquitetura',
    data: FASE3_DATA,
    storageKey: STORAGE.phase3Completed,
    color: '#10B981',
    weeks: 'Semanas 9–12'
  }

Regra de desbloqueio: Fase 3 requer Fase 2 com 16 tópicos concluídos.
isPhaseUnlocked já deve suportar isso pela lógica genérica existente.

═══════════════════════════════════════════════════════
NÃO MODIFIQUE NENHUM COMPONENTE VISUAL.
═══════════════════════════════════════════════════════
Apenas dados e constantes. Entregue o .jsx completo ao final.
```

---

### 🔧 PROMPT F3-2 — Conteúdo Módulo 9 (Clean Code)

```
[CONTEXTO: Fase 3 — Etapa F3-2: Módulo 9 — Clean Code]
[ENTRADA: Cole aqui o .jsx completo após F3-1]

Substitua o conteúdo placeholder dos 4 tópicos do Módulo 9 (m9t1 a m9t4)
com conteúdo real, didático e progressivo. Use o livro "Clean Code" de
Robert C. Martin como referência, mas exemplifique com código C# corporativo
do mundo financeiro/e-commerce (contexto já familiar das fases anteriores).

ESTRUTURA OBRIGATÓRIA DE CADA TÓPICO:
Cada tópico DEVE apresentar:
  1. Anti-pattern (código ruim real que todo iniciante escreve)
  2. Problema diagnosticado (por que aquele código é problema)
  3. Solução Clean Code (refatoração passo a passo)
  4. Regra resumida (uma frase que o aluno vai lembrar)

════════════════════════════════════════════════════
TÓPICO 9.1 — Nomes que revelam intenção
════════════════════════════════════════════════════
theory:
  O que são nomes reveladores de intenção vs nomes crípticos.
  Variáveis: d, x, temp, data vs diasAteVencimento, valorTotal, clienteAtivo.
  Funções: proc(), doStuff(), handle() vs calcularJuros(), validarCPF(), enviarEmail().
  Classes: Manager, Processor, Handler (anti-patterns) vs ContaCorrente, ProcessadorPagamento.
  Boolean: flag, status vs estaAtivo, temSaldo, foiAprovado.
  Constantes: 86400 vs SEGUNDOS_POR_DIA.
  Regra de ouro: se você precisa de um comentário para explicar o nome, o nome está errado.
  Como nomear em projetos bilíngues (inglês no código técnico, português no domínio).
  Referência real: como o time do Nubank nomeia variáveis no Clojure/Kotlin.

code: (antes e depois obrigatório)
  ANTES — código real de um sistema bancário mal nomeado:
    Função processData() com variáveis d, lst, v, fl, r
    que calcula saldo de conta após transações

  DEPOIS — mesma função refatorada:
    CalcularSaldoAposTransacoes(Conta conta, List<Transacao> transacoes)
    com variáveis saldoAtual, transacoesCreditoras, totalCreditos, saldoFinal
    comentários deletados porque o código se explica

  Inclui: exemplos de Boolean naming, Constants naming, Class naming ruim vs bom
  dotnet run não se aplica — crie um console app que demonstra a diferença

checklist:
  - Abrir o projeto E-commerce da Fase 2 e buscar por variáveis com menos de 4 letras
  - Renomear pelo menos 5 variáveis/métodos ruins encontrados
  - Criar um arquivo Glossario.md com os termos do domínio financeiro em português
  - Praticar: escrever 10 nomes ruins e refatorar para nomes descritivos
  - Usar Find & Replace no VSCode para renomear com segurança (F2 no C#)

quiz:
  Q1: Qual o problema principal de nomear uma variável "d" ou "data"?
      [Ocupa menos memória, É tecnicamente válido mas sem contexto dificulta leitura,
       Causa erro de compilação, Não funciona com LINQ]
      Resposta: 1
      Explicação: Nomes sem contexto são legais para o compilador mas custam tempo
      cognitivo de todos que leem o código depois — incluindo você mesmo em 3 meses.

  Q2: Qual o melhor nome para uma variável booleana que indica se um cliente pagou?
      [pagamento, status, clientePagou, isPay]
      Resposta: 2
      Explicação: Booleanos devem ser perguntas — clientePagou lê naturalmente como
      "if (clientePagou)" que é autoexplicativo. "status" é vago demais, "pagamento"
      parece um objeto, "isPay" mistura idiomas desnecessariamente.

  Q3: Por que "Manager", "Processor" e "Handler" são considerados anti-patterns de nomenclatura?
      [São palavras reservadas do C#, Indicam que a classe provavelmente tem
       responsabilidades demais e o desenvolvedor não soube nomear bem,
       Não funcionam como nome de classe, São nomes muito longos]
      Resposta: 1
      Explicação: Quando você não consegue dar um nome específico à classe é sinal
      de que ela está fazendo coisas demais. ContaManager pode ser ContaService,
      ContaFactory ou ContaRepository — cada um com responsabilidade clara.

════════════════════════════════════════════════════
TÓPICO 9.2 — Funções pequenas e responsabilidade única
════════════════════════════════════════════════════
theory:
  A regra das funções: fazem UMA coisa, fazem bem, fazem só aquela.
  Tamanho ideal: 5 a 20 linhas (além disso, dividir).
  Níveis de abstração: uma função não mistura alto nível (ProcessarPagamento)
  com baixo nível (string.Split(',')[2].Trim()).
  Command vs Query (CQS): funções que mudam estado não retornam valor;
  funções que retornam valor não mudam estado.
  Parâmetros: 0-2 ideal, 3 aceitável, 4+ indica que precisam de uma classe.
  Flag parameters: o pior dos anti-patterns (bool enviarEmail = true).
  Extract Method como técnica de refatoração mais usada no dia a dia.
  Referência corporativa: como Pull Requests são rejeitados por funções gigantes.

code:
  ANTES — método ProcessarTransacao() de 80 linhas que:
    valida dados, busca conta no banco, aplica regras de negócio,
    atualiza saldo, gera extrato, envia notificação, loga auditoria

  DEPOIS — mesmo fluxo dividido em:
    ProcessarTransacao() como orquestrador (8 linhas)
    ValidarTransacao() → retorna Result<bool, string>
    AplicarDebito() → só muda o saldo
    GerarRegistroExtrato() → só cria o registro
    NotificarCliente() → só dispara notificação
    RegistrarAuditoria() → só grava log

  Demonstra Command/Query Separation com exemplos práticos

checklist:
  - Encontrar no projeto Fase 2 uma função/método com mais de 30 linhas
  - Identificar os diferentes "níveis de abstração" dentro dela
  - Aplicar Extract Method para dividir em funções menores (F1 no VSCode = refatorar)
  - Verificar se alguma função tem parâmetro booleano — refatorar para dois métodos
  - Reescrever um método do zero aplicando CQS consciente

quiz:
  Q1: O que significa "níveis de abstração" em uma função?
      [O número de loops aninhados, Misturar decisões de alto nível (o quê fazer)
       com detalhes de baixo nível (como fazer) na mesma função,
       A quantidade de parâmetros, O número de linhas]
      Resposta: 1

  Q2: Qual o problema de um parâmetro booleano em uma função como
      EnviarEmail(Cliente c, bool isUrgente)?
      [Boolean não pode ser parâmetro em C#, Indica que a função na verdade
       faz duas coisas diferentes e deveria ser dividida em duas,
       Parâmetros booleanos são mais lentos, Apenas questão de estilo]
      Resposta: 1

  Q3: O que é Command Query Separation (CQS)?
      [Uma biblioteca do .NET, Funções que modificam estado não devem retornar
       dados; funções que retornam dados não devem modificar estado,
       O padrão CQRS para microserviços, Separar comandos SQL de queries]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 9.3 — Comentários: quando escrever e quando deletar
════════════════════════════════════════════════════
theory:
  A verdade dura: comentários geralmente são sinal de código que precisou
  ser explicado porque não estava claro o suficiente.
  Comentários que DEVEM ser deletados: explicar o que o código faz (o código
  já diz isso), código comentado (use git para isso), histórico de alterações
  (use git log), traduções óbvias.
  Comentários que DEVEM existir: explicação de decisão de negócio (por que
  esse cálculo específico), aviso de armadilha (// cuidado: API externa limita
  a 100 req/min), TODO com responsável e data, comentários XML /// para APIs
  públicas e documentação Swagger.
  Comentários que enganam: pior do que nenhum — comentário desatualizado
  que contradiz o que o código faz.
  Documentação XML (///) em ASP.NET: obrigatória em endpoints públicos,
  gera documentação automática no Swagger.

code:
  ANTES — controller com comentários ruins em cada linha:
    // busca o produto         → db.Produtos.Find(id)
    // verifica se é nulo      → if (produto == null)
    // retorna 404             → return NotFound()
    // código antigo comentado → // var p = GetProduct(id);

  DEPOIS — mesmo controller sem os comentários ruins +
    comentário de negócio explicando por que o preço não pode
    ser alterado retroativamente em pedidos já faturados +
    comentários XML /// nos endpoints para Swagger

checklist:
  - Abrir um arquivo do projeto Fase 2 e deletar comentários que explicam o óbvio
  - Encontrar código comentado e deletar (ele está no git history)
  - Adicionar /// em pelo menos 3 endpoints da API de e-commerce
  - Verificar se o Swagger gerou a documentação dos /// corretamente
  - Escrever um comentário de decisão de negócio real em um ponto não óbvio

quiz:
  Q1: Quando um comentário "// incrementa contador" antes de "contador++" é problemático?
      [Nunca — comentários sempre ajudam, Quando o código já se explica sozinho,
       pois o comentário não adiciona informação e vira ruído de manutenção,
       Só quando está em inglês, Só em métodos públicos]
      Resposta: 1

  Q2: Qual o uso mais valioso de comentários em código corporativo?
      [Explicar cada linha para facilitar leitura, Documentar decisões de negócio
       não óbvias e avisos de armadilhas técnicas que o nome do método não consegue
       expressar, Descrever o que cada variável armazena, Histórico de quem alterou]
      Resposta: 1

  Q3: O que acontece com código comentado que fica no repositório por meses?
      [É automaticamente deletado pelo compilador, Fica desatualizado em relação
       ao restante do código, cria confusão sobre se deve ser reativado e polui
       a leitura — o Git já guarda o histórico, Fica oculto do Sonar, Melhora performance]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 9.4 — Refatoração: técnicas e quando aplicar
════════════════════════════════════════════════════
theory:
  O que é refatoração: mudar a estrutura interna sem mudar o comportamento externo.
  Por que refatorar: código que funciona mas é difícil de manter custa caro.
  O Triângulo da Refatoração: testes → refatora → testes ainda passam.
  Técnicas essenciais:
    Extract Method: mais usada — extrai trecho em função com nome descritivo
    Rename: trivial mas poderoso — F2 no VSCode/Rider
    Replace Magic Number with Constant: 0.15 vira TAXA_IOF
    Introduce Parameter Object: 5 parâmetros viram uma classe
    Replace Conditional with Polymorphism: if/else gigante vira classes
    Move Method: método que usa mais dados de outra classe → mova-o
  Code Smells (cheiros de código ruim):
    Long Method, Large Class, Long Parameter List, Divergent Change,
    Shotgun Surgery, Feature Envy, Data Clumps, Primitive Obsession.
  Quando NÃO refatorar: prazo curtíssimo de produção, sem cobertura de testes,
  código legado que ninguém entende (risco de quebra silenciosa).
  A regra do escoteiro: sempre deixar o código um pouco melhor do que encontrou.

code:
  ANTES — classe ContaService com todos os Code Smells listados:
    Long Method (CalcularExtratoMensal com 70 linhas),
    Magic Numbers (0.15, 30, 1000),
    Long Parameter List (6 parâmetros),
    Feature Envy (método que usa mais campos de Transacao do que de ContaService)

  DEPOIS — refatoração passo a passo documentada:
    Passo 1: Replace Magic Number → constantes TAXA_MANUTENCAO, LIMITE_PADRAO
    Passo 2: Introduce Parameter Object → FiltroExtrato record
    Passo 3: Extract Method → CalcularTotalCreditos, CalcularTotalDebitos
    Passo 4: Move Method → AplicarTaxa para a própria classe Transacao
    Resultado final: ContaService com 4 métodos de 10 linhas cada

checklist:
  - Identificar 3 Code Smells no projeto da Fase 2 usando a lista do tópico
  - Aplicar Extract Method em um método longo (F1 no Rider ou Ctrl+R+M no VS)
  - Substituir pelo menos 3 magic numbers por constantes nomeadas
  - Criar um record para agrupar parâmetros de um método com 4+ params
  - Rodar os testes após cada refatoração para garantir que nada quebrou

quiz:
  Q1: Qual a definição correta de refatoração?
      [Reescrever o código do zero para adicionar novas funcionalidades,
       Alterar a estrutura interna do código sem modificar seu comportamento
       externo observável, Corrigir bugs sem alterar a arquitetura,
       Otimizar performance do código]
      Resposta: 1

  Q2: O que é "Primitive Obsession" como Code Smell?
      [Usar tipos primitivos (string, int) onde uma classe ou record expressaria
       melhor o conceito — ex: CPF como string em vez de um Value Object Cpf,
       Código que usa muitos loops primitivos, Excesso de if/else,
       Usar int em vez de long]
      Resposta: 0

  Q3: Por que refatorar sem testes automatizados é arriscado?
      [Testes não são necessários para refatorar, Sem testes não há como verificar
       que o comportamento externo não mudou — você pode introduzir bugs
       silenciosos que só aparecem em produção, Refatoração só é válida com 100%
       de cobertura, O compilador garante que o comportamento não mudou]
      Resposta: 1

Após preencher os 4 tópicos, entregue o .jsx completo.
```

---

### 🔧 PROMPT F3-3 — Conteúdo Módulo 10 (SOLID)

```
[CONTEXTO: Fase 3 — Etapa F3-3: Módulo 10 — SOLID]
[ENTRADA: Cole aqui o .jsx completo após F3-2]

Substitua o conteúdo placeholder dos 4 tópicos do Módulo 10 (m10t1 a m10t4).

REGRA ESPECIAL PARA SOLID:
Cada princípio DEVE ter:
  1. Violação concreta (código ruim do contexto financeiro/e-commerce)
  2. Consequência real da violação (o que quebra quando o sistema cresce)
  3. Solução com o princípio aplicado
  4. Benefício mensurável (testabilidade, extensibilidade, manutenção)

════════════════════════════════════════════════════
TÓPICO 10.1 — S: Single Responsibility Principle
════════════════════════════════════════════════════
theory:
  "Uma classe deve ter apenas um motivo para mudar" — Robert C. Martin.
  Não significa "fazer só uma coisa" mas "ter apenas um ator (stakeholder)
  que pode pedir mudança". Exemplos reais: a classe Relatorio que gera dados
  E formata PDF E envia email — três razões para mudar (analista de dados,
  designer de PDF, equipe de TI de email).
  SRP não é sobre tamanho da classe mas sobre coesão de responsabilidade.
  Como identificar violação: "E também" na descrição da classe.
  Como corrigir: identificar os atores, separar em classes coesas.
  Relação com o conceito de módulo coeso em sistemas corporativos.
  Por que SRP é a base para os outros 4 princípios.

code:
  ANTES — ContaService que: busca conta, calcula saldo, gera PDF do extrato,
          envia email, registra log de auditoria, valida CPF, aplica IOF.
          Todos em métodos da mesma classe.

  DEPOIS — separação em:
          ContaRepository (busca e persiste)
          SaldoCalculator (regras de cálculo)
          ExtratoReportGenerator (geração do documento)
          NotificacaoService (envio de comunicações)
          AuditoriaLogger (registro de eventos)
          ValidacaoCpf (validação de documentos)
          Cada classe com um único motivo para mudar.

checklist:
  - Analisar o ProdutoService do projeto Fase 2: quantos motivos para mudar?
  - Listar as responsabilidades encontradas com a técnica "E também"
  - Extrair ao menos uma responsabilidade para uma classe separada
  - Verificar que o controller ainda funciona após a separação
  - Criar um diagrama simples (em comentário de código) das responsabilidades

quiz:
  Q1: Segundo o SRP, o que define "uma responsabilidade"?
      [Uma linha de código, Um grupo de funcionalidades que muda pela mesma
       razão e para o mesmo stakeholder — não é sobre tamanho,
       Um único método público, Uma única tabela do banco]
      Resposta: 1

  Q2: Como identificar que uma classe viola o SRP?
      [Quando ela tem mais de 200 linhas, Quando sua descrição contém "E também"
       — ex: "Processa pagamento E envia email E gera relatório",
       Quando tem mais de 10 métodos, Quando usa muitas interfaces]
      Resposta: 1

  Q3: Qual o benefício direto de aplicar SRP em um sistema financeiro?
      [Código menor, Quando as regras de cálculo de IOF mudam, só a classe
       de cálculo precisa ser alterada e retestada — sem risco de quebrar
       o envio de email ou geração de PDF, Menos classes para gerenciar,
       Melhor performance]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 10.2 — O/L: Open/Closed + Liskov Substitution
════════════════════════════════════════════════════
theory:
  OPEN/CLOSED: "Aberto para extensão, fechado para modificação."
  Adicionar comportamento sem alterar código existente (e seus testes).
  Como: herança, interfaces, Strategy Pattern, decorators.
  Violação clássica: switch/if-else que cresce a cada novo tipo de cobrança,
  desconto, notificação — modificando código que já funciona e já foi testado.
  Exemplo real: sistema de descontos que começa com 2 tipos e chega a 20.

  LISKOV SUBSTITUTION: "Subtipos devem ser substituíveis por seus tipos base."
  A violação mais traiçoeira: herança que quebra em runtime.
  Exemplo do Retângulo/Quadrado — a armadilha clássica.
  Regra prática: se a subclasse precisa lançar NotImplementedException
  para algum método herdado, LSP foi violado.
  Como detectar: testes da classe base devem passar para todas as subclasses.
  Relação entre OCP e LSP: LSP é pré-condição para OCP funcionar com herança.

code:
  OCP ANTES — CalculadoraDesconto com if/else para cada tipo:
    if (tipo == "black_friday") desconto = 0.30
    else if (tipo == "cliente_vip") desconto = 0.20
    else if (tipo == "funcionario") desconto = 0.40
    // cada novo tipo exige modificar esta classe

  OCP DEPOIS — Strategy Pattern:
    interface IEstrategiaDesconto { decimal Calcular(Pedido pedido); }
    BlackFridayDesconto : IEstrategiaDesconto
    ClienteVipDesconto : IEstrategiaDesconto
    FuncionarioDesconto : IEstrategiaDesconto
    CalculadoraDesconto recebe IEstrategiaDesconto — nunca muda

  LSP VIOLAÇÃO — ContaBloqueada : Conta onde Debitar() lança InvalidOperationException
  LSP CORRETO — usar composição ou segregar em IContaDebitable interface

checklist:
  - Encontrar um if/else ou switch que cresce no projeto Fase 2
  - Refatorar para Strategy Pattern com interface
  - Registrar as estratégias no DI container
  - Criar um teste que verifica que todas as estratégias respeitam o contrato
  - Verificar se há algum override que lança NotImplementedException (LSP violation)

quiz:
  Q1: O que significa "fechado para modificação" no OCP?
      [O código tem acesso restrito, Não é possível adicionar novas funcionalidades,
       Código existente e testado não deve ser alterado para acomodar novos
       comportamentos — usa-se extensão (nova classe/interface) em vez de modificação,
       O arquivo está marcado como readonly]
      Resposta: 2

  Q2: Qual é o sinal clássico de violação do Liskov Substitution Principle?
      [Classe com muitos métodos, Subclasse que herda método da classe base
       mas lança NotImplementedException ou UnsupportedOperationException,
       Herança com mais de 3 níveis, Classe abstrata sem implementação]
      Resposta: 1

  Q3: Qual padrão de design resolve naturalmente a violação do OCP em
      lógicas condicionais que crescem com o tempo?
      [Singleton, Strategy Pattern — encapsula cada variação em uma classe
       própria que implementa uma interface comum, Factory Method,
       Observer Pattern]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 10.3 — I: Interface Segregation Principle
════════════════════════════════════════════════════
theory:
  "Clientes não devem ser forçados a depender de interfaces que não usam."
  O problema das interfaces "gordas": IAnimal com Voar(), Nadar(), Correr()
  força Cachorro a implementar Voar() de forma vazia ou com exceção.
  ISP corporativo: IRepository<T> com 15 métodos onde o controller usa apenas 2.
  Como identificar: implementações com NotImplementedException ou métodos
  que retornam null/vazio sem fazer nada.
  Solução: interfaces menores e focadas (Role Interfaces).
  Relação com LSP: interfaces gordas geralmente causam violações de LSP.
  Trade-off: não exagerar na granularidade — IReadableRepository e
  IWritableRepository é útil; um método por interface não é.
  Como registrar múltiplas interfaces no DI container do ASP.NET Core.

code:
  ANTES — ITransacaoRepository com 12 métodos, onde
  RelatorioController usa apenas GetByPeriodo e GetByCliente
  mas é forçado a depender da interface inteira.

  DEPOIS — segregação em:
    ITransacaoReader { GetByPeriodo, GetByCliente, GetById }
    ITransacaoWriter { Add, Update, Delete }
    ITransacaoReporter { GetResumoMensal, GetTopClientes }
  RelatorioController depende apenas de ITransacaoReader
  TransacaoRepository implementa as 3 interfaces

checklist:
  - Auditar as interfaces do projeto Fase 2: alguma tem mais de 7 métodos?
  - Identificar quais métodos cada controller realmente usa do repository
  - Dividir o IRepository em IReadRepository e IWriteRepository
  - Atualizar os registros no DI container
  - Verificar que os testes existentes ainda compilam e passam

quiz:
  Q1: Qual o problema de uma interface com 15 métodos?
      [Interfaces grandes são mais performáticas, Classes que implementam
       são forçadas a implementar métodos que não precisam, frequentemente
       com corpo vazio ou lançando NotImplementedException,
       O compilador não aceita interfaces grandes, Dificulta o uso de generics]
      Resposta: 1

  Q2: Como ISP se relaciona com testabilidade?
      [Não tem relação, Interfaces menores são mais fáceis de mockar em testes
       — você mocka apenas os métodos que o código sob teste realmente usa,
       Interfaces grandes facilitam mocks, Testes não dependem de interfaces]
      Resposta: 1

  Q3: Qual o sinal mais claro de violação do ISP em uma implementação?
      [Classe com muitos campos privados, Método implementado que retorna
       null, lança NotImplementedException ou tem corpo vazio — sinal de
       que a interface forçou uma implementação desnecessária,
       Método com muitos parâmetros, Classe sem construtor público]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 10.4 — D: Dependency Inversion Principle
════════════════════════════════════════════════════
theory:
  "Módulos de alto nível não devem depender de módulos de baixo nível.
   Ambos devem depender de abstrações."
  A diferença entre DIP e injeção de dependências: DIP é o princípio,
  DI é o mecanismo de implementação. Você pode ter DI sem DIP.
  Como detectar violação: new SqlConnection() dentro do service é DIP violation.
  Camadas e direção das dependências: Domain não conhece Infrastructure.
  Dependency Inversion na prática com DI container do ASP.NET (já visto na Fase 2,
  agora entendendo o princípio por trás).
  O papel das interfaces como contratos entre camadas.
  Hexagonal Architecture (Ports & Adapters): como DIP se manifesta em escala.
  Por que DIP é o princípio mais transformador para testabilidade.

code:
  ANTES — ContaService instancia SqlConnection, SmtpClient e FileLogger
  diretamente com "new" — impossível de testar sem banco e servidor de email.

  DEPOIS — ContaService depende de:
    IContaRepository (abstração — não sabe se é SQL, Mongo ou InMemory)
    INotificacaoService (abstração — não sabe se é email, SMS ou push)
    IAuditoriaLogger (abstração — não sabe se é arquivo, banco ou CloudWatch)
  
  Demonstração completa: como registrar no DI e como criar
  InMemoryContaRepository para testes sem banco de dados real.

checklist:
  - Buscar "new" no ContaService ou ProdutoService — cada "new" de serviço é DIP violation
  - Substituir instanciações diretas por injeção via construtor
  - Criar uma implementação InMemory de IContaRepository para testes
  - Verificar que o service funciona com a implementação real E com a InMemory
  - Escrever um teste unitário que usa a implementação InMemory

quiz:
  Q1: Qual a diferença entre Dependency Injection e Dependency Inversion Principle?
      [São a mesma coisa, DIP é o princípio arquitetural (abstrações entre camadas);
       DI é o mecanismo de implementação (container que injeta as dependências).
       Você pode ter DI sem DIP se injetar classes concretas em vez de interfaces,
       DIP é mais moderno que DI, DI é só para testes]
      Resposta: 1

  Q2: Por que "new SqlConnection()" dentro de um service viola o DIP?
      [Não viola — é uma boa prática, O service de alto nível passa a depender
       de um detalhe de infraestrutura (SQL Server) — se mudar para PostgreSQL
       ou MongoDB, o service precisa mudar junto,
       SqlConnection é selado (sealed), Performance é reduzida]
      Resposta: 1

  Q3: Qual o benefício mais direto de aplicar DIP em um sistema financeiro?
      [Código mais curto, Possibilidade de testar a lógica de negócio em
       isolamento, sem banco de dados, servidor de email ou dependências externas
       — usando implementações InMemory ou Mocks,
       Menos interfaces para manter, Maior performance das queries]
      Resposta: 1

Entregue o .jsx completo ao final.
```

---

### 🔧 PROMPT F3-4 — DDD Parte 1 (Tópicos 11.1 e 11.2)

```
[CONTEXTO: Fase 3 — Etapa F3-4: DDD Parte 1 — Linguagem Ubíqua, Bounded Contexts, Entities e Value Objects]
[ENTRADA: Cole aqui o .jsx completo após F3-3]

DDD é o tópico mais denso da trilha. Trate com profundidade.
Esta etapa cobre os dois primeiros tópicos do Módulo 11.

NOTA IMPORTANTE: Use o domínio financeiro como contexto principal.
O sistema financeiro do projeto final (Contas, Transações, Extrato)
deve servir de exemplo central em todos os conceitos.

════════════════════════════════════════════════════
TÓPICO 11.1 — Linguagem Ubíqua e Bounded Contexts
════════════════════════════════════════════════════
theory:
  O problema que DDD resolve: código que não fala a língua do negócio.
  Quando "Account" no código significa coisas diferentes para o time de
  pagamentos e o time de cadastro — dois contextos, dois significados.

  LINGUAGEM UBÍQUA:
  O vocabulário compartilhado entre desenvolvedores e especialistas de negócio.
  Não "usuário" mas "Titular", "Beneficiário" ou "Correntista" — depende do contexto.
  Como construir: sessões de Event Storming (introdução), glossário vivo,
  nomenclatura do código reflete o vocabulário do negócio.
  Consequência: não existe tradução entre o que o analista fala e o que o
  código faz — eles falam a mesma coisa.

  BOUNDED CONTEXTS:
  Uma fronteira explícita dentro da qual um modelo de domínio é válido.
  Exemplo real de um banco digital:
    Contexto de Contas: Conta, Saldo, Limite, Extrato
    Contexto de Pagamentos: Transacao, Beneficiario, TED, PIX
    Contexto de Crédito: Proposta, Score, Limite, Parcela
    "Limite" significa coisas diferentes em Contas vs Crédito — dois Bounded Contexts.
  Context Map: como os Bounded Contexts se comunicam (integration events).
  Anti-pattern: Big Ball of Mud — um modelo que tenta ser tudo para todos.
  Como identificar Bounded Contexts em um projeto real durante uma reunião.

code:
  Demonstração prática de Bounded Contexts:
  Projeto console com duas pastas (Contas/ e Pagamentos/)
  onde Conta em Contas/ é um Aggregate com Saldo, Limite, Titularidade
  e Conta em Pagamentos/ é apenas um registro com Agencia, Numero, Banco
  — mesmo nome, modelos completamente diferentes, cada um válido no seu contexto.
  
  Exemplo de Linguagem Ubíqua em prática:
  Antes: ProcessTransaction(int userId, decimal amount, int typeId)
  Depois: ProcessarTransacao(ContaId contaOrigem, Dinheiro valor, TipoTransacao tipo)

checklist:
  - Criar um arquivo Glossario.md com 15 termos do domínio financeiro do sistema
  - Identificar pelo menos 2 Bounded Contexts no projeto E-commerce da Fase 2
  - Criar a estrutura de pastas separando os contextos identificados
  - Renomear 3 métodos do projeto para usar a Linguagem Ubíqua
  - Descrever em comentário onde começa e termina cada Bounded Context

quiz:
  Q1: O que é Linguagem Ubíqua no DDD?
      [Um padrão de nomenclatura obrigatório, O vocabulário compartilhado entre
       desenvolvedores e especialistas de negócio, refletido tanto nas conversas
       quanto no código — eliminando tradução entre o negócio e a implementação,
       Uma linguagem de programação específica para DDD, Inglês técnico no código]
      Resposta: 1

  Q2: Por que "Cliente" pode significar coisas diferentes em um mesmo sistema?
      [Não pode — termos devem ser únicos, Porque diferentes Bounded Contexts
       têm modelos diferentes para a mesma palavra — em Faturamento é quem paga,
       em Entrega é quem recebe, em Marketing é quem tem interesse,
       Por causa de bugs de naming, Porque o banco de dados tem tabelas diferentes]
      Resposta: 1

  Q3: Qual o anti-pattern oposto ao Bounded Context?
      [Microserviço, Big Ball of Mud — um modelo único que tenta representar
       todo o domínio de uma vez, gerando classes god com dezenas de campos
       e métodos para situações completamente diferentes,
       Clean Architecture, CQRS]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 11.2 — Entities e Value Objects
════════════════════════════════════════════════════
theory:
  A distinção mais fundamental do DDD e a mais mal compreendida.

  ENTITY:
  Um objeto definido por sua IDENTIDADE, não por seus atributos.
  Duas contas com o mesmo saldo são entidades DIFERENTES porque têm IDs diferentes.
  Tem ciclo de vida: nasce (Conta.Abrir()), muda de estado, pode ser fechada.
  Identidade persiste através de mudanças de atributos.
  Implementação: classe com Id imutável, equals baseado no Id.
  Exemplos: Conta, Transacao, Cliente, Pedido, Produto.

  VALUE OBJECT:
  Um objeto definido por seus ATRIBUTOS, sem identidade própria.
  Dois objetos Dinheiro(100, BRL) são IGUAIS — trocar um pelo outro não faz diferença.
  Imutável: nunca muda — cria-se um novo em vez de alterar.
  Sem identidade própria (sem Id).
  Encapsula lógica e validação que pertence ao conceito.
  Implementação em C#: record (imutável por padrão, equality por valor).
  Exemplos: Dinheiro (valor + moeda), CPF, Email, Endereco, Periodo, Percentual.

  POR QUE VALUE OBJECTS IMPORTAM:
  Primitive Obsession vs Value Objects ricos.
  decimal saldo vs Dinheiro(valor, moeda) — o segundo valida, formata, opera.
  string cpf vs Cpf cpf — o segundo garante que nunca terá um CPF inválido no sistema.
  Teoria das invariantes: Value Objects garantem que objetos inválidos nunca existem.

code:
  Implementação completa do domínio financeiro:
  
  // Value Objects
  record Dinheiro(decimal Valor, string Moeda) {
    // validações no construtor
    // operadores + e - que respeitam moeda
    // formatação ToString()
  }
  
  record Cpf(string Numero) {
    // validação de CPF no construtor — nunca cria um Cpf inválido
    // formatação 000.000.000-00
  }
  
  record Email(string Endereco) {
    // validação de formato
  }
  
  record Periodo(DateOnly Inicio, DateOnly Fim) {
    // valida que Inicio <= Fim
    // calcula duração em dias
    // verifica se uma data está no período
  }
  
  // Entity
  class Conta {
    public ContaId Id { get; } // strongly-typed Id
    public Cpf TitularCpf { get; private set; }
    public Dinheiro Saldo { get; private set; }
    public StatusConta Status { get; private set; }
    
    // construtor privado — cria via factory method
    private Conta() {}
    public static Conta Abrir(Cpf titularCpf, Dinheiro saldoInicial) { ... }
    
    // métodos que encapsulam as regras de negócio
    public void Depositar(Dinheiro valor) { ... }
    public Result Sacar(Dinheiro valor) { ... }
  }

checklist:
  - Criar o Value Object Dinheiro com validação e operadores aritméticos
  - Criar o Value Object Cpf com validação do dígito verificador
  - Criar a Entity Conta usando os Value Objects criados
  - Testar que é impossível criar um Cpf inválido (construtor lança exceção)
  - Verificar que dois Dinheiro(100, "BRL") são iguais e dois Conta diferentes são diferentes

quiz:
  Q1: Qual a diferença fundamental entre Entity e Value Object?
      [Entity tem mais atributos, Entity é definida por identidade (Id imutável);
       Value Object é definido por seus atributos — dois VOs com os mesmos
       atributos são iguais, independentemente de onde estão na memória,
       Value Object não pode ser persistido, Entity é sempre mais complexa]
      Resposta: 1

  Q2: Por que Value Objects devem ser imutáveis?
      [Para melhor performance, Para garantir consistência — se um VO pudesse ser
       modificado, objetos que o referenciam teriam seus dados alterados sem saber,
       quebrando invariantes do sistema,
       É um requisito do compilador C#, Para facilitar serialização]
      Resposta: 1

  Q3: Por que criar um Value Object Cpf em vez de usar string?
      [Records são mais modernos que strings, O VO garante que nenhum CPF inválido
       existe no sistema — a validação acontece na criação, antes de qualquer
       regra de negócio rodar,
       Performance é melhor com records, String não pode ser armazenada no banco]
      Resposta: 1

Entregue o .jsx completo ao final.
```

---

### 🔧 PROMPT F3-5 — DDD Parte 2 (Tópicos 11.3 e 11.4)

```
[CONTEXTO: Fase 3 — Etapa F3-5: DDD Parte 2 — Aggregates, Repositories, Domain Services e Domain Events]
[ENTRADA: Cole aqui o .jsx completo após F3-4]

Continue o Módulo 11 com os dois tópicos mais avançados de DDD.
Estes tópicos constroem diretamente sobre Entities e Value Objects do 11.2.

════════════════════════════════════════════════════
TÓPICO 11.3 — Aggregates, Repositories e Domain Services
════════════════════════════════════════════════════
theory:
  AGGREGATES:
  Um cluster de Entities e Value Objects tratados como uma unidade de consistência.
  Uma única Entity é o Aggregate Root — o único ponto de entrada para o cluster.
  Regra de ouro: toda mudança dentro de um Aggregate acontece pelo Root.
  Pedido é o Aggregate Root; ItensPedido são Entities dentro do Aggregate.
  Ninguém acessa ItemPedido diretamente — sempre através de Pedido.
  Boundaries de transação: um Aggregate = uma transação de banco.
  Referências entre Aggregates: apenas por Id (não por referência de objeto).
  Como definir Aggregate Boundaries: pergunta "o que precisa ser consistente
  ao mesmo tempo?" — esses elementos formam um Aggregate.
  Anti-pattern: Aggregate gigante com 20 Entities (God Aggregate).

  REPOSITORIES:
  Uma abstração de coleção para Aggregates (não para Entities filhas).
  IContaRepository lida com Conta (Aggregate Root) — nunca com ItemExtrato.
  Um Repository por Aggregate Root, não por Entity.
  A interface fica no Domain; a implementação fica na Infrastructure.
  O Domain nunca referencia a Infrastructure — apenas a interface.
  Generic Repository vs Specific Repository (revisão com olhos de DDD).

  DOMAIN SERVICES:
  Operações de domínio que não pertencem naturalmente a nenhuma Entity.
  Transferencia entre duas Contas: DebitorConta e CreditarConta pertencem
  a cada Conta, mas coordenar a transferência não pertence a nenhuma das duas.
  Domain Services vs Application Services: Domain Service tem regras de negócio,
  Application Service orquestra (chama repositories, dispara eventos, transações).
  Domain Service não tem estado, não acessa banco, não manda email.

code:
  // Aggregate Root completo
  class Conta {
    private readonly List<Transacao> _transacoes = new();
    public IReadOnlyList<Transacao> Transacoes => _transacoes.AsReadOnly();
    
    public Result Transferir(Dinheiro valor, Conta destino) {
      // regra de negócio encapsulada no Aggregate
      if (Saldo < valor) return Result.Failure("Saldo insuficiente");
      _transacoes.Add(Transacao.CriarDebito(valor, destino.Id));
      Saldo -= valor;
      return Result.Success();
    }
  }
  
  // Repository (interface no Domain, impl na Infrastructure)
  interface IContaRepository {
    Task<Conta?> GetByIdAsync(ContaId id);
    Task<Conta?> GetByCpfAsync(Cpf cpf);
    Task AddAsync(Conta conta);
    Task SaveChangesAsync();
  }
  
  // Domain Service
  class TransferenciaService {
    public Result<TransferenciaId> Executar(
      Conta origem, Conta destino, Dinheiro valor) {
      // coordena as duas Contas sem ser nenhuma delas
    }
  }

checklist:
  - Definir os Aggregates do sistema financeiro: Conta, Extrato, Titular
  - Criar IContaRepository com interface no projeto de Domain
  - Implementar ContaEfRepository no projeto de Infrastructure
  - Criar TransferenciaService como Domain Service puro (sem banco, sem email)
  - Verificar que Domain/ não tem nenhuma referência a Infrastructure/

quiz:
  Q1: Por que acessar uma Entity filha diretamente (sem passar pelo Aggregate Root) é problemático?
      [É mais lento, Viola os invariantes do Aggregate — o Root é responsável
       por garantir a consistência do cluster; acesso direto bypassa as regras,
       Não compila em C#, O EF Core não suporta]
      Resposta: 1

  Q2: Quantos Repositories deve existir para um Aggregate com 3 Entities filhas?
      [3 — um por Entity, 1 — apenas para o Aggregate Root, pois Entities
       filhas só existem dentro do contexto do Aggregate e não são gerenciadas
       independentemente,
       Depende do tamanho das Entities, 1 por tabela do banco]
      Resposta: 1

  Q3: Qual a diferença entre Domain Service e Application Service?
      [Domain Service é mais rápido, Domain Service contém regras de negócio puras
       (sem I/O, sem banco, sem email); Application Service orquestra —
       chama repositories, inicia transações, dispara eventos de integração,
       Application Service é da camada de apresentação, São a mesma coisa]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 11.4 — Domain Events e Application Layer
════════════════════════════════════════════════════
theory:
  DOMAIN EVENTS:
  Algo que aconteceu no domínio que outras partes do sistema podem se interessar.
  Nomenclatura no passado: ContaAberta, TransacaoRealizada, LimiteExcedido.
  Quando usar: quando uma ação em um Aggregate deve disparar efeitos colaterais
  em outros Aggregates ou serviços (notificação, auditoria, atualização de saldo).
  Vantagem: desacoplamento — a Conta não sabe que existe um NotificacaoService.
  Implementação simples: lista de eventos no Aggregate, publicados após a transação.
  Introdução ao MediatR para publicação de Domain Events no ASP.NET Core.
  Domain Events vs Integration Events: Domain Event é intra-processo;
  Integration Event é inter-serviço (vai para o RabbitMQ — Fase 8).

  APPLICATION LAYER:
  O orquestrador entre a API e o Domain.
  Use Cases (Application Services): um por caso de uso de negócio.
  AbrirConta, RealizarTransferencia, GerarExtrato — cada um é um Use Case.
  Responsabilidades da Application Layer:
    - Buscar Aggregates via Repository
    - Chamar Domain Services
    - Publicar Domain Events
    - Iniciar e commitar transações
    - Mapear Domain → DTO para a API
  Responsabilidades que a Application Layer NÃO tem:
    - Regras de negócio (isso é do Domain)
    - Acesso direto ao banco (isso é da Infrastructure)
    - Validação de formato (isso é do FluentValidation na API)

  Clean Architecture: a direção das dependências.
  Domain ← Application ← Infrastructure ← API
  Domain não depende de ninguém. API depende de todos.

code:
  // Domain Event
  record TransacaoRealizadaEvent(
    ContaId ContaId, Dinheiro Valor, TipoTransacao Tipo, DateTime OcorridoEm
  ) : IDomainEvent;
  
  // Aggregate publicando o evento
  class Conta {
    private readonly List<IDomainEvent> _eventos = new();
    public IReadOnlyList<IDomainEvent> Eventos => _eventos.AsReadOnly();
    
    public void RealizarTransacao(Dinheiro valor, TipoTransacao tipo) {
      // ... lógica de negócio ...
      _eventos.Add(new TransacaoRealizadaEvent(Id, valor, tipo, DateTime.UtcNow));
    }
  }
  
  // Use Case na Application Layer
  class RealizarTransferenciaUseCase(
    IContaRepository contaRepo,
    TransferenciaService transferenciaService,
    IPublisher publisher) {
    
    public async Task<Result> ExecuteAsync(RealizarTransferenciaCommand cmd) {
      var origem = await contaRepo.GetByIdAsync(cmd.ContaOrigemId);
      var destino = await contaRepo.GetByIdAsync(cmd.ContaDestinoId);
      
      var resultado = transferenciaService.Executar(origem, destino, cmd.Valor);
      if (resultado.IsFailure) return resultado;
      
      await contaRepo.SaveChangesAsync();
      
      // publica eventos APÓS salvar — garantia de consistência
      foreach (var evento in origem.Eventos)
        await publisher.Publish(evento);
      
      return Result.Success();
    }
  }
  
  // Handler do Domain Event (na Infrastructure ou Application)
  class TransacaoRealizadaHandler : INotificationHandler<TransacaoRealizadaEvent> {
    public async Task Handle(TransacaoRealizadaEvent evt, CancellationToken ct) {
      // envia notificação, atualiza cache, registra auditoria
    }
  }

checklist:
  - Criar a interface IDomainEvent e adicionar lista de eventos no Aggregate Conta
  - Implementar o evento TransacaoRealizadaEvent como record
  - Instalar MediatR: dotnet add package MediatR
  - Criar o Use Case RealizarTransferenciaUseCase na Application Layer
  - Criar um Handler que loga o evento no console (simula notificação)

quiz:
  Q1: Por que Domain Events são nomeados no passado (TransacaoRealizada e não RealizarTransacao)?
      [É apenas convenção sem motivo técnico, Porque representam algo que JÁ
       aconteceu no domínio — um fato imutável, não uma intenção ou comando,
       Para diferir da nomenclatura de Commands, É exigência do MediatR]
      Resposta: 1

  Q2: Qual a responsabilidade de um Use Case na Application Layer?
      [Conter as regras de negócio do domínio, Orquestrar — buscar Aggregates,
       chamar Domain Services, salvar via Repository e publicar Domain Events.
       Sem regras de negócio (Domain) e sem acesso direto ao banco (Infrastructure),
       Substituir os Controllers da API, Validar os dados de entrada]
      Resposta: 1

  Q3: Por que os Domain Events são publicados APÓS o SaveChanges e não antes?
      [Por convenção do MediatR, Para garantir que os efeitos colaterais (notificação,
       auditoria) só acontecem se a transação foi commitada com sucesso — publicar
       antes poderia disparar ações para uma operação que ainda vai falhar,
       Por limitação técnica do EF Core, Não importa a ordem]
      Resposta: 1

Entregue o .jsx completo ao final.
```

---

### 🔧 PROMPT F3-6 — FluentValidation + Projeto Final

```
[CONTEXTO: Fase 3 — Etapa F3-6: Módulo 12 — FluentValidation + Projeto Final]
[ENTRADA: Cole aqui o .jsx completo após F3-5]

Preencha os 4 tópicos do Módulo 12 e adicione o tópico de Projeto Final.

════════════════════════════════════════════════════
TÓPICO 12.1 — Validators e Regras Básicas
════════════════════════════════════════════════════
theory:
  Por que FluentValidation em vez de Data Annotations:
  Data Annotations poluem o modelo com lógica de validação,
  não suportam lógica condicional complexa, são difíceis de testar isoladamente.
  FluentValidation: validação como classe separada, fluent API legível,
  testável independentemente, suporta regras complexas e mensagens em português.
  AbstractValidator<T>: base de todos os validators.
  Regras básicas: NotEmpty, NotNull, MaximumLength, MinimumLength,
  GreaterThan, LessThan, InclusiveBetween, Must, EmailAddress.
  Mensagens customizadas: .WithMessage("CPF inválido: {PropertyValue}").
  Severidades: Error (default), Warning, Info.
  Instalação: dotnet add package FluentValidation.AspNetCore

code:
  CriarContaRequestValidator : AbstractValidator<CriarContaRequest>
    RuleFor(x => x.Cpf).NotEmpty().Length(11).Must(ValidarCpf).WithMessage(...)
    RuleFor(x => x.Nome).NotEmpty().MinimumLength(3).MaximumLength(100)
    RuleFor(x => x.Email).NotEmpty().EmailAddress()
    RuleFor(x => x.SaldoInicial).GreaterThanOrEqualTo(0)
    
  RealizarTransferenciaRequestValidator
    RuleFor(x => x.Valor).GreaterThan(0).LessThanOrEqualTo(50000)
    RuleFor(x => x.ContaDestinoId).NotEmpty()
    
  Teste unitário do validator (sem ASP.NET):
    var validator = new CriarContaRequestValidator();
    var result = validator.Validate(request);
    result.IsValid.Should().BeFalse();

checklist:
  - Instalar FluentValidation.AspNetCore no projeto API
  - Criar CriarContaRequestValidator com 4 regras diferentes
  - Testar o validator isoladamente (sem subir a API)
  - Verificar as mensagens de erro estão em português
  - Testar casos de sucesso e de falha explicitamente

quiz: 3 perguntas sobre: por que FluentValidation vs Data Annotations,
      como testar um validator sem a API, o que WithMessage faz

════════════════════════════════════════════════════
TÓPICO 12.2 — Regras Customizadas e Condicionais
════════════════════════════════════════════════════
theory:
  Must() para lógica customizada inline.
  Custom() para regras mais complexas com mensagens múltiplas.
  MustAsync() para validações assíncronas (verificar existência no banco).
  Regras condicionais: When() e Unless() — validar apenas se outra condição.
  Dependência entre propriedades: RuleFor(x => x.DataFim).GreaterThan(x => x.DataInicio).
  Coleções: RuleForEach() para validar cada item de uma lista.
  Validators aninhados: SetValidator() para compor validators.
  Cascade mode: StopOnFirstFailure vs Continue (quando usar cada).
  Validação customizada com acesso ao contexto: validar CPF único no banco.

code:
  TransacaoValidator com:
    When(x => x.Tipo == TipoTransacao.Ted, () => RuleFor(x => x.BancoDestino).NotEmpty())
    RuleForEach(x => x.Parcelas).SetValidator(new ParcelaValidator())
    MustAsync((cpf, ct) => repositorio.CpfExisteAsync(cpf)) — verifica no banco
    RuleFor(x => x.DataVencimento).GreaterThan(x => x.DataEmissao)
    
  ExtratoFiltroValidator com When e Unless:
    RuleFor(x => x.DataFim).Must(...).When(x => x.DataInicio.HasValue)

checklist:
  - Criar uma regra com Must() que valida o algoritmo de Luhn do cartão
  - Usar When() para aplicar regra apenas quando um campo específico é preenchido
  - Criar MustAsync() que verifica se o CPF já existe no banco
  - Usar RuleForEach() para validar uma lista de itens de pedido
  - Criar um validator composto com SetValidator()

quiz: 3 perguntas sobre: diferença Must vs Custom, quando usar MustAsync,
      o que RuleForEach faz

════════════════════════════════════════════════════
TÓPICO 12.3 — Integração com ASP.NET Core e DI
════════════════════════════════════════════════════
theory:
  Registro automático: AddFluentValidation() + RegisterValidatorsFromAssembly().
  ValidationBehavior com MediatR Pipeline (introdução — integração com Use Cases).
  Customizar a resposta de erro 400: IActionResult vs ProblemDetails padronizado.
  Onde validar: na API (formato dos dados) vs no Domain (regras de negócio).
  A fronteira clara: FluentValidation valida "o request faz sentido técnico";
  o Domain valida "a operação é permitida pelo negócio".
  Erro 400 vs Erro 422: diferenças semânticas.
  Desabilitar a validação automática do ModelState para ter controle total.
  Injetar serviços nos validators via DI (para MustAsync com repositório).

code:
  Program.cs com AddValidatorsFromAssemblyContaining<CriarContaRequestValidator>()
  e configuração de BadRequest customizado.
  
  PipelineBehavior de validação para MediatR:
  class ValidationBehavior<TRequest, TResponse> : IPipelineBehavior<...>
  que valida o command antes de chegar no handler.
  
  Controller que usa o ValidationBehavior implicitamente — nenhum código
  de validação visível no controller.

checklist:
  - Registrar todos os validators com AddValidatorsFromAssemblyContaining
  - Customizar o response de 400 para retornar ProblemDetails com lista de erros
  - Criar o ValidationBehavior para o MediatR pipeline
  - Testar que o endpoint retorna 400 com mensagens em português
  - Injetar IContaRepository em um validator para validação assíncrona

quiz: 3 perguntas sobre: RegisterValidatorsFromAssembly vs registro manual,
      diferença 400 vs 422, por que usar PipelineBehavior para validação

════════════════════════════════════════════════════
TÓPICO 12.4 — Validação em Camadas (Domain + Application)
════════════════════════════════════════════════════
theory:
  A arquitetura de validação corporativa em 3 camadas:
  
  Camada 1 — API (FluentValidation):
    Valida formato, tipos, tamanhos, presença obrigatória.
    "O campo CPF tem 11 dígitos?" — Não sabe se é um CPF válido.
    Retorna 400 Bad Request.
    
  Camada 2 — Domain (invariantes dos Aggregates/Value Objects):
    Valida regras de negócio puras.
    "Saldo é suficiente?", "CPF é matematicamente válido?", "Conta está ativa?"
    Retorna Result<T, DomainError> — nunca lança exceção para flow control.
    
  Camada 3 — Application (validação de contexto/estado):
    Valida regras que dependem de estado externo.
    "Esta conta existe no banco?", "O limite foi aprovado?", "O CPF não está em lista negra?"
    Retorna Result<T, ApplicationError>.
    
  Result Pattern: alternativa a exceções para fluxo de erros esperados.
  Diferença entre exceção (inesperado) e erro de domínio (esperado, tratável).
  Como mapear erros de cada camada para HTTP status codes corretos.

code:
  Result<T> implementation simples:
    record Result<T>(T? Value, string? Error, bool IsSuccess)
    static Result<T> Success(T value)
    static Result<T> Failure(string error)
    
  Demonstração do fluxo completo:
  POST /api/contas/transferencia
    → FluentValidation (400 se formato inválido)
    → Use Case → Repository (404 se conta não existe)
    → Domain Service → Aggregate (422 se saldo insuficiente)
    → SaveChanges → Domain Events publicados
    → 200 OK com TransferenciaId
  
  Mapeamento de erros para HTTP Status Codes:
    DomainError.SaldoInsuficiente → 422 Unprocessable Entity
    DomainError.ContaBloqueada → 403 Forbidden
    ApplicationError.ContaNaoEncontrada → 404 Not Found
    ValidationError → 400 Bad Request

checklist:
  - Implementar o Result<T> pattern no projeto financeiro
  - Criar DomainException e mapear para os status codes corretos no middleware
  - Garantir que NENHUMA regra de negócio vaza para a camada de API
  - Documentar o mapa de erros em um comentário de classe
  - Testar os 4 cenários de erro com chamadas reais à API

quiz: 3 perguntas sobre: diferença Result pattern vs exceções, qual camada
      valida regras de negócio, mapeamento DomainError → HTTP Status Code

════════════════════════════════════════════════════
PROJETO FINAL — 🏦 Sistema Financeiro DDD
════════════════════════════════════════════════════
id: 'm12proj', moduleId: 'm12', title: '🏦 Projeto: Sistema Financeiro DDD'

theory:
  Descrição do projeto completo integrando TUDO da Fase 3:
  
  ARQUITETURA DE PASTAS:
  SistemaFinanceiro/
  ├── Domain/
  │   ├── Entities/        (Conta, Transacao)
  │   ├── ValueObjects/    (Dinheiro, Cpf, Email, Periodo)
  │   ├── Events/          (ContaAberta, TransacaoRealizada, LimiteExcedido)
  │   ├── Services/        (TransferenciaService)
  │   ├── Repositories/    (IContaRepository — interface)
  │   └── Shared/          (Result<T>, IDomainEvent)
  ├── Application/
  │   ├── UseCases/        (AbrirConta, RealizarTransferencia, GerarExtrato)
  │   ├── Validators/      (FluentValidation dos Commands)
  │   └── Behaviors/       (ValidationBehavior, LoggingBehavior)
  ├── Infrastructure/
  │   ├── Persistence/     (EF Core: FinanceiroDbContext, Repositories)
  │   ├── Configurations/  (Fluent API: ContaConfiguration, TransacaoConfiguration)
  │   └── Migrations/
  └── API/
      ├── Controllers/     (ContasController, TransacoesController)
      ├── Middlewares/      (ExceptionHandlingMiddleware)
      └── Program.cs

  CASOS DE USO IMPLEMENTADOS:
  1. Abrir Conta: validação CPF + criar Conta Aggregate + persistir + evento ContaAberta
  2. Depositar: buscar Conta + Depositar() + salvar + evento TransacaoRealizada
  3. Transferir: buscar origem e destino + TransferenciaService + salvar + eventos
  4. Consultar Extrato: buscar Transacoes por Periodo com filtros LINQ
  5. Bloquear Conta: status change + evento ContaBloqueada

  GITFLOW DO PROJETO:
  feature/domain-entities
  feature/conta-usecase-abrir
  feature/conta-usecase-transferencia
  feature/extrato-query
  release/v1.0.0-sistema-financeiro

code: Program.cs final com todos os registros de DI, middlewares e configurações.
     Estrutura de pastas completa com todos os arquivos listados.

checklist:
  - Criar a solução com 4 projetos: Domain, Application, Infrastructure, API
  - Implementar todos os 5 casos de uso listados
  - Garantir que Domain.csproj tem zero referências a Infrastructure
  - Criar migration inicial e aplicar no SQL Server via Docker
  - Completar o GitFlow: criar release/v1.0.0 e fazer merge em main

quiz: 3 perguntas sobre arquitetura em camadas, separação Domain/Infrastructure,
     e por que o Domain não deve referenciar nenhum NuGet de Infrastructure

Entregue o .jsx completo ao final.
```

---

### 🔧 PROMPT F3-7 — Revisão Geral + Polimento

```
[CONTEXTO: Fase 3 — Etapa F3-7: Revisão Final]
[ENTRADA: Cole aqui o .jsx completo após F3-6]

Revisão completa da Fase 3. Verifique cada item:

═══════════════════════════════════════════════════
CHECKLIST DE QUALIDADE — CONTEÚDO
═══════════════════════════════════════════════════

PROGRESSÃO LÓGICA (a Fase 3 conta uma história):
[ ] Clean Code → ensina a escrever código legível (pré-condição para tudo)
[ ] SOLID → ensina princípios de design (usa os nomes do Clean Code)
[ ] DDD → aplica os princípios em arquitetura de domínio (usa SOLID)
[ ] FluentValidation → adiciona validação na arquitetura DDD
[ ] Projeto Final → une os 4 módulos em código real

MÓDULO 9 — CLEAN CODE:
[ ] Cada tópico tem "antes (ruim)" E "depois (limpo)" no código
[ ] Anti-patterns usados são realistas (código que iniciantes escrevem de verdade)
[ ] Refatorações são passo a passo, não "antes vs depois" abrupto
[ ] Checklists executáveis no projeto da Fase 2 (usa o que o aluno já tem)

MÓDULO 10 — SOLID:
[ ] Cada princípio tem violação concreta do domínio financeiro
[ ] Benefício de aplicar cada princípio é explicitado (não só "é melhor")
[ ] Relação entre os princípios é explicada (SOLID é um sistema, não 5 regras soltas)
[ ] OCP e LSP no mesmo tópico — transição lógica entre eles explicada

MÓDULO 11 — DDD:
[ ] Tópico 11.1: Linguagem Ubíqua exemplificada com termos do sistema financeiro
[ ] Tópico 11.2: Record usado para Value Objects (C# moderno)
[ ] Tópico 11.3: Domain tem zero referência a Infrastructure no código
[ ] Tópico 11.4: Domain Events nomeados no passado, MediatR instalado
[ ] A distinção Entity vs Value Object está clara com exemplos concretos

MÓDULO 12 — FLUENTVALIDATION:
[ ] Versão 11.x no .csproj
[ ] Mensagens de erro em português (contexto corporativo brasileiro)
[ ] Validação em 3 camadas explicada claramente (API / Domain / Application)
[ ] Result<T> pattern implementado e integrado

PROJETO FINAL:
[ ] Estrutura de pastas completa e corporativa (4 projetos separados)
[ ] Domain.csproj sem referência a EF Core ou Infrastructure
[ ] GitFlow com feature branches por caso de uso

═══════════════════════════════════════════════════
CHECKLIST DE QUALIDADE — SISTEMA REACT
═══════════════════════════════════════════════════
[ ] Fases 1 e 2 continuam funcionando sem regressões
[ ] Fase 3 desbloqueia corretamente após Fase 2 (16 tópicos)
[ ] ALL_PHASES tem 3 entradas: phase1, phase2, phase3
[ ] XP da Fase 3 acumula separado e soma no total geral no Header
[ ] Toast de desbloqueio aparece ao completar Fase 2
[ ] Dashboard mostra progresso das 3 fases
[ ] Sem console.error em uso normal das 3 fases

Se encontrar qualquer problema: corrija e descreva o que foi corrigido.
Entregue o .jsx completo, funcionando, ao final.
```

---

## PARTE 4 — DICAS ESPECÍFICAS DA FASE 3

### Pacotes NuGet que aparecem nos exemplos

```xml
<!-- FluentValidation -->
<PackageReference Include="FluentValidation.AspNetCore" Version="11.*" />

<!-- MediatR (introduzido no DDD + FluentValidation) -->
<PackageReference Include="MediatR" Version="12.*" />
<PackageReference Include="MediatR.Extensions.Microsoft.DependencyInjection" Version="12.*" />

<!-- Pacotes do projeto financeiro (já vistos na Fase 2) -->
<PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="8.0.*" />
<PackageReference Include="Microsoft.EntityFrameworkCore.Tools" Version="8.0.*" />
```

### Por que DDD tem 2 etapas (F3-4 e F3-5)?

DDD é o conceito que mais confunde desenvolvedores iniciantes. Separar em:
- **F3-4:** Linguagem Ubíqua + Bounded Contexts + Entity vs Value Object (conceitos fundamentais)
- **F3-5:** Aggregates + Repositories + Domain Services + Domain Events (padrões táticos)

...garante que o aluno consolide a base antes de avançar para os padrões táticos.
Se tentar tudo em uma sessão, o Opus 4.6 tende a superficializar os exemplos.

### Estratégia para código longo

A Fase 3 tem muito código de domínio (Aggregates, Value Objects, Use Cases).
Se o arquivo .jsx estiver muito grande:

```
"O arquivo está ficando grande. Entregue em 3 partes:
- Parte A: FASE1_DATA + FASE2_DATA (sem alterações — copie do arquivo anterior)
- Parte B: FASE3_DATA completo (módulos 9, 10, 11, 12 e projeto final)
- Parte C: ALL_PHASES e todos os componentes React
Concatenarei na ordem A + B + C."
```

### Verificação rápida após cada etapa

```javascript
// Cole no console do browser para verificar:
const f3 = FASE3_DATA
console.log("Módulos:", f3.length)                              // deve ser 4
console.log("Tópicos totais:", f3.flatMap(m => m.topics).length) // deve ser 16+1
console.log("Primeiro código:", f3[0].topics[0].code.slice(0,50))// não pode ser "pendente"
console.log("Phases:", ALL_PHASES.length)                       // deve ser 3
```

### Conexão com as próximas fases

A Fase 3 planta sementes intencionais para as fases seguintes:
- **Clean Code + SOLID** → base para testes (Fase 4 — "código testável é código bem projetado")
- **DDD com Domain Events** → base para mensageria (Fase 8 — Integration Events no RabbitMQ)
- **FluentValidation + Result Pattern** → base para testes de validação (Fase 4)
- **MediatR introduzido** → CQRS completo na Fase 9
