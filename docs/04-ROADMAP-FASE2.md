# 🚀 FASE 2 — ROADMAP DE IMPLEMENTAÇÃO + PROMPTS PARA CLAUDE OPUS 4.6

> **Fase:** 2 de 9 — Web API & Banco de Dados  
> **Stack:** ASP.NET Core · Entity Framework Core · SQL Server · Injeção de Dependências  
> **Semanas:** 5–8 do cronograma geral  
> **Pré-requisito:** Fase 1 concluída (C# Fundamentos + Git)  
> **Projeto:** API de E-commerce (Produtos & Pedidos)

---

## CONTEXTO: O QUE MUDA DA FASE 1 PARA A FASE 2

A Fase 1 era um sistema React de aprendizado com conteúdo estático.  
A Fase 2 **mantém o mesmo shell React** (layout, sidebar, navegação linear, XP, timer, persistência) e **adiciona novos módulos com conteúdo de Web API + EF Core + SQL Server**.

O aluno que completou a Fase 1 verá a Fase 2 desbloqueada na sidebar — continuando a mesma experiência.

```
Sistema após Fase 2:
Sidebar
├── ✅ FASE 1 — C# Fundamentos & Git       (concluída)
│    └── 16 tópicos marcados como ✅
└── ▶  FASE 2 — Web API & Banco de Dados   (em progresso)
     ├── Módulo 5: ASP.NET Core Web API
     ├── Módulo 6: Entity Framework Core
     ├── Módulo 7: SQL Server
     └── Módulo 8: Injeção de Dependências
```

---

## PARTE 1 — MAPA DE CONTEÚDO DA FASE 2

### Módulos e Tópicos (16 tópicos, Semanas 5–8)

```
Fase 2 — Web API & Banco de Dados
│
├── Módulo 5: ASP.NET Core Web API (Semana 5)         cor: #7C3AED
│   ├── Tópico 5.1 — Estrutura de um projeto Web API
│   ├── Tópico 5.2 — Controllers, Actions e Rotas
│   ├── Tópico 5.3 — Middlewares e Pipeline HTTP
│   └── Tópico 5.4 — Minimal APIs e Filters
│
├── Módulo 6: Entity Framework Core (Semana 6)        cor: #059669
│   ├── Tópico 6.1 — DbContext, DbSet e Code First
│   ├── Tópico 6.2 — Migrations (criar, aplicar, reverter)
│   ├── Tópico 6.3 — Fluent API e Relacionamentos
│   └── Tópico 6.4 — Queries: LINQ com EF Core
│
├── Módulo 7: SQL Server (Semana 7)                   cor: #DC2626
│   ├── Tópico 7.1 — Modelagem Relacional e DDL
│   ├── Tópico 7.2 — Queries e JOINs essenciais
│   ├── Tópico 7.3 — Índices, Performance e Explain
│   └── Tópico 7.4 — Stored Procedures e Functions
│
├── Módulo 8: Injeção de Dependências (Semana 8)      cor: #F59E0B
│   ├── Tópico 8.1 — DI Container nativo do ASP.NET
│   ├── Tópico 8.2 — Lifetimes: Singleton, Scoped, Transient
│   ├── Tópico 8.3 — Repositório Pattern + DI
│   └── Tópico 8.4 — Configuração: appsettings + Options Pattern
│
└── Projeto Final Fase 2: API de E-commerce
    ├── Endpoints REST para Produtos e Pedidos
    ├── EF Core com SQL Server (migrations reais)
    ├── Repository Pattern + DI
    ├── Swagger/OpenAPI documentado
    └── GitFlow: feature branches por endpoint
```

---

## PARTE 2 — ROADMAP DE IMPLEMENTAÇÃO

### Visão Geral das Etapas

```
ETAPA F2-1 → Dados da Fase 2 + Integração com Fase 1   (1 sessão)
ETAPA F2-2 → Sidebar multi-fase + Navegação entre fases (1 sessão)
ETAPA F2-3 → Conteúdo Web API (Módulo 5)               (1 sessão)
ETAPA F2-4 → Conteúdo EF Core (Módulo 6)               (1 sessão)
ETAPA F2-5 → Conteúdo SQL Server (Módulo 7)             (1 sessão)
ETAPA F2-6 → Conteúdo DI + Projeto Final (Módulo 8)    (1 sessão)
ETAPA F2-7 → Revisão geral + Polimento                  (1 sessão)
```

---

### ETAPA F2-1 — Dados da Fase 2 + Integração

**O que entregar:**
- Constante `FASE2_DATA` com todos os 16 tópicos completos (teoria, código, checklist, quiz)
- Constante unificada `ALL_PHASES` que agrupa Fase 1 e Fase 2
- Novas chaves de storage com prefixo `phase2:`
- Função `getPhaseProgress(phaseData, completedTopics)` retornando `{ total, completed, percent }`
- Regra: Fase 2 só desbloqueia quando `phase1:completed_topics.length === 16`
- Cores dos novos módulos definidas nas constantes COLORS

**Critério de aceite:** `console.log(FASE2_DATA)` mostra 16 tópicos com conteúdo real. `isTopicUnlocked('m5t1', ...)` retorna `true` apenas quando Fase 1 está 100% completa.

---

### ETAPA F2-2 — Sidebar Multi-fase

**O que entregar:**
- Sidebar agora agrupa por FASE (Fase 1, Fase 2...)
- Cada fase tem header clicável que expande/colapsa todos os seus módulos
- Badge de progresso por fase: "16/16 ✅" ou "3/16 ▶"
- Fase bloqueada exibe cadeado e não é expansível
- Fase ativa mostra módulos e tópicos normalmente
- Transição suave de fase ao completar a anterior
- Indicador no Header atualiza: "Fase 1" ou "Fase 2 — Semana 5"

**Critério de aceite:** Completar 16 tópicos da Fase 1 desbloqueia a Fase 2 na sidebar com animação visual.

---

### ETAPAS F2-3 a F2-6 — Conteúdo por Módulo

Cada etapa adiciona um módulo completo ao `FASE2_DATA`, com código funcional para rodar no terminal ou no VSCode junto com a API real.

**Critério de aceite por etapa:** Todos os 4 tópicos do módulo têm conteúdo não-placeholder, código que compila, checklist executável no terminal/VSCode e quiz com 3 perguntas reais.

---

### ETAPA F2-7 — Revisão + Polimento

**O que entregar:**
- Revisão de todos os 16 tópicos da Fase 2
- Garantir que o Projeto Final (E-commerce API) está documentado como tópico especial
- Teste completo do fluxo: Fase 1 → Fase 2 sem bugs
- Ajuste de XP e timers para Fase 2

---

## PARTE 3 — PROMPTS PARA CLAUDE OPUS 4.6

---

### 📌 PROMPT BASE FASE 2 (incluir em TODAS as sessões)

```
Você é um engenheiro sênior .NET e React construindo a FASE 2 de uma plataforma
de aprendizado corporativo .NET. O sistema já existe com a Fase 1 funcionando.

DOCUMENTOS DE REFERÊNCIA:
- 01-REQUISITOS.md (Fase 1 — base arquitetural que se mantém)
- 02-ARQUITETURA.md (Fase 1 — componentes reutilizados sem modificação)
- 04-ROADMAP-FASE2.md (este documento)

REGRAS ABSOLUTAS (mesmas da Fase 1, mais estas):
1. Nunca quebrar a Fase 1 — só adicionar, nunca modificar o que já funciona
2. Todo código ASP.NET deve ser .NET 8 / C# 12 com Minimal APIs ou Controllers
3. Todo código SQL deve ser T-SQL (SQL Server)
4. Exemplos de EF Core usam EF Core 8 (Microsoft.EntityFrameworkCore 8.x)
5. Nunca usar var onde o tipo não é óbvio (boas práticas corporativas)
6. Swagger/OpenAPI obrigatório em todos os exemplos de API
7. Sempre incluir o arquivo .csproj com os NuGet packages necessários
8. Comentários XML (///) em todos os endpoints para gerar documentação
```

---

### 🔧 PROMPT F2-1 — Dados da Fase 2 + Integração

```
[CONTEXTO: Fase 2 — Etapa F2-1: Dados e Integração]
[ENTRADA: Cole aqui o .jsx completo e funcionando da Fase 1]

Mantenha TODO o código da Fase 1 intacto.
Adicione ao final do arquivo, sem modificar nada existente:

═══════════════════════════════════════════════════════
1. CORES DOS NOVOS MÓDULOS
═══════════════════════════════════════════════════════
Adicione ao objeto COLORS existente:
  m5: '#7C3AED',   // ASP.NET Core — roxo
  m6: '#059669',   // EF Core — verde
  m7: '#DC2626',   // SQL Server — vermelho
  m8: '#F59E0B',   // Injeção de Dependências — âmbar

═══════════════════════════════════════════════════════
2. CHAVES DE STORAGE DA FASE 2
═══════════════════════════════════════════════════════
Adicione ao objeto STORAGE:
  phase2Completed:  'phase2:completed_topics',
  phase2Xp:         'phase2:xp',
  phase2Unlocked:   'phase2:unlocked',
  checklist2: id => `phase2:checklist_${id}`,
  quiz2:      id => `phase2:quiz_${id}`,
  notes2:     id => `phase2:notes_${id}`,
  timer2:     id => `phase2:timer_${id}`,

═══════════════════════════════════════════════════════
3. CONSTANTE FASE2_DATA — 16 TÓPICOS COMPLETOS
═══════════════════════════════════════════════════════
Crie a constante FASE2_DATA seguindo EXATAMENTE a mesma estrutura de FASE1_DATA.

Para cada um dos 16 tópicos, preencha com conteúdo real e completo:

MÓDULO 5 — ASP.NET Core Web API (cor: '#7C3AED', week: 'Semana 5')

  Tópico 5.1 — Estrutura de um projeto Web API
  teoria: Explique o que é ASP.NET Core, como difere do .NET Framework,
          a estrutura de pastas (Program.cs, Controllers, Models, appsettings.json),
          o pipeline de inicialização (WebApplication.CreateBuilder), Kestrel vs IIS,
          e por que empresas migram para .NET Core. Cite casos reais (Nubank, iFood).
  código: Projeto Web API completo do zero — Program.cs com builder, middleware básico,
          controller de health check, appsettings.json. Mostre onde cada peça se encaixa.
  checklist: [
    "Criar projeto: dotnet new webapi -n EcommerceApi && cd EcommerceApi",
    "Rodar a API e acessar o Swagger em https://localhost:xxxx/swagger",
    "Adicionar um controller HealthController com GET /health retornando 200 OK",
    "Inspecionar o Program.cs e comentar cada linha explicando o que faz",
    "Publicar localmente: dotnet publish -c Release e examinar a pasta bin/Release"
  ]
  quiz: 3 perguntas sobre: diferença ASP.NET vs ASP.NET Core, função do Program.cs,
        quando usar Kestrel vs IIS

  Tópico 5.2 — Controllers, Actions e Rotas
  teoria: Route attributes ([Route], [HttpGet], [HttpPost]), convenções REST,
          ActionResult<T>, IActionResult vs ActionResult, status codes corretos
          (200, 201, 400, 404, 409, 500), model binding (FromBody, FromRoute, FromQuery),
          boas práticas de nomenclatura corporativa.
  código: ProdutosController completo com todos os verbos HTTP:
          GET /api/produtos (lista com paginação),
          GET /api/produtos/{id} (por id com 404),
          POST /api/produtos (criação com 201 Created),
          PUT /api/produtos/{id} (atualização completa),
          PATCH /api/produtos/{id}/ativar (ação parcial),
          DELETE /api/produtos/{id} (soft delete).
          Use records para DTOs de request/response.
  checklist: [
    "Implementar todos os 6 endpoints do ProdutosController",
    "Testar cada endpoint no Swagger verificando status codes",
    "Adicionar [ProducesResponseType] em todos os actions",
    "Criar DTOs separados para Request (criar/atualizar) e Response (retorno)",
    "Testar um endpoint com Postman ou Thunder Client"
  ]
  quiz: 3 perguntas sobre: diferença IActionResult vs ActionResult<T>,
        qual status code para criação, o que FromBody significa

  Tópico 5.3 — Middlewares e Pipeline HTTP
  teoria: O que é middleware, a ordem importa (LIFO para response, FIFO para request),
          middlewares built-in (UseRouting, UseAuthentication, UseAuthorization,
          UseExceptionHandler, UseCors), criando middleware customizado,
          quando usar middleware vs filter vs action,
          exemplo real: middleware de logging de requests.
  código: Middleware customizado de logging (RequestLoggingMiddleware) que registra
          método, path, status code e tempo de resposta.
          Middleware de tratamento global de exceções (ExceptionHandlingMiddleware)
          que retorna ProblemDetails padronizado.
          Program.cs com ordem correta dos middlewares.
  checklist: [
    "Implementar RequestLoggingMiddleware e registrar no Program.cs",
    "Implementar ExceptionHandlingMiddleware retornando ProblemDetails",
    "Testar o log aparecendo no console ao chamar qualquer endpoint",
    "Forçar uma exception e verificar o retorno padronizado",
    "Alterar a ordem dos middlewares e observar os efeitos"
  ]
  quiz: 3 perguntas sobre: ordem do pipeline, diferença middleware vs filter,
        por que UseAuthentication deve vir antes de UseAuthorization

  Tópico 5.4 — Minimal APIs e Filters
  teoria: Minimal APIs vs Controllers (quando usar cada), MapGet/MapPost/MapPut/MapDelete,
          route groups, EndpointFilter, IEndpointFilter, diferença de performance,
          quando Minimal API faz sentido (microserviços, lambdas),
          Action Filters: IActionFilter, OnActionExecuting/OnActionExecuted,
          Resource Filters, Exception Filters — ordem de execução.
  código: Versão Minimal API dos endpoints de Produtos (comparativo com controller).
          Um EndpointFilter de validação genérico.
          Um ActionFilter de log de auditoria que registra quem chamou o quê.
  checklist: [
    "Reescrever o GET /api/produtos como Minimal API e comparar com o Controller",
    "Criar um RouteGroupBuilder para agrupar os endpoints de produtos",
    "Implementar um EndpointFilter que valida se o ID da rota é positivo",
    "Aplicar o ActionFilter de auditoria em um controller existente",
    "Medir a diferença de startup time entre os dois modelos"
  ]
  quiz: 3 perguntas sobre: quando usar Minimal API vs Controller,
        o que é um EndpointFilter, ordem de execução dos filtros

MÓDULO 6 — Entity Framework Core (cor: '#059669', week: 'Semana 6')

  Tópico 6.1 — DbContext, DbSet e Code First
  teoria: ORM vs SQL raw (quando usar cada), DbContext como Unit of Work,
          DbSet como repository, entidades (como modelar classes → tabelas),
          configuração da connection string, registrar no DI (AddDbContext),
          AsNoTracking e quando usar, ciclo de vida do DbContext (Scoped).
  código: Entidades Produto, Categoria, Pedido, ItemPedido com propriedades corretas.
          EcommerceDbContext com DbSets e OnModelCreating vazio por enquanto.
          Program.cs registrando o DbContext com SQL Server.
          Exemplo de query básica: listar produtos com AsNoTracking.
  checklist: [
    "Instalar: dotnet add package Microsoft.EntityFrameworkCore.SqlServer",
    "Criar as 4 entidades (Produto, Categoria, Pedido, ItemPedido)",
    "Criar o EcommerceDbContext com os 4 DbSets",
    "Configurar a connection string no appsettings.json",
    "Registrar o DbContext no Program.cs com AddDbContext"
  ]
  quiz: 3 perguntas sobre: diferença DbContext vs DbSet, quando usar AsNoTracking,
        por que DbContext é Scoped e não Singleton

  Tópico 6.2 — Migrations (criar, aplicar, reverter)
  teoria: O que são migrations e por que existem, Code First vs Database First,
          comandos: Add-Migration, Update-Database, Remove-Migration, Script-Migration,
          migrations em CI/CD (como aplicar em produção sem downtime),
          boas práticas: nomes descritivos, uma migration por feature,
          cuidado com migrations irreversíveis em produção.
  código: Sequência completa de migrations para o E-commerce:
          InitialCreate (tabelas base),
          AddCategoriaToProduct (relacionamento),
          AddIndexToProductName (índice de performance).
          Script SQL gerado (Script-Migration) para revisão do DBA.
          Rollback: como reverter uma migration com problemas.
  checklist: [
    "Instalar tools: dotnet tool install --global dotnet-ef",
    "Criar primeira migration: dotnet ef migrations add InitialCreate",
    "Aplicar: dotnet ef database update (criar o banco)",
    "Fazer uma alteração na entidade e criar segunda migration",
    "Gerar o script SQL: dotnet ef migrations script"
  ]
  quiz: 3 perguntas sobre: como reverter uma migration, diferença Add-Migration vs
        Update-Database, como aplicar migrations em produção com segurança

  Tópico 6.3 — Fluent API e Relacionamentos
  teoria: Data Annotations vs Fluent API (Fluent API ganha sempre em projetos reais),
          configuração de tabelas, colunas, PKs, FKs via modelBuilder,
          relacionamentos: HasOne/WithMany, HasMany/WithMany, HasOne/WithOne,
          Cascade delete (quando usar e quando NÃO usar),
          Value Objects com OwnsOne, índices compostos, unique constraints,
          separar configurações em IEntityTypeConfiguration<T>.
  código: Arquivos de configuração separados:
          ProdutoConfiguration, CategoriaConfiguration, PedidoConfiguration.
          Cada um com: table name, column types, required fields, indexes,
          relationships com cascade behavior explícito.
          Endereço como Value Object com OwnsOne.
  checklist: [
    "Criar a pasta Configurations dentro de Infrastructure/Data",
    "Implementar ProdutoConfiguration com todas as propriedades configuradas",
    "Configurar o relacionamento Produto-Categoria com restrição NOT NULL",
    "Adicionar unique constraint no campo SKU do produto",
    "Criar migration após as configurações e verificar o SQL gerado"
  ]
  quiz: 3 perguntas sobre: quando usar Fluent API vs Data Annotations,
        diferença entre Restrict e Cascade no delete, o que é OwnsOne

  Tópico 6.4 — Queries: LINQ com EF Core
  teoria: Como EF Core traduz LINQ para SQL (importância de entender o SQL gerado),
          Include vs ThenInclude (eager loading), lazy loading (armadilha N+1),
          projeções com Select (nunca trazer mais que o necessário),
          paginação com Skip/Take, GroupBy com EF Core, raw SQL (FromSqlRaw),
          como usar o SQL Server Profiler ou logs do EF para ver as queries.
  código: Repositório de Produtos com queries reais:
          ListarPaginado(pagina, tamanhoPagina, filtroNome),
          BuscarComCategoria(id) com Include,
          RelatorioVendas() com GroupBy e projeção,
          BuscarPorFiltros() com Where encadeado,
          Habilitar logging de SQL no appsettings (LogLevel EF Core).
  checklist: [
    "Habilitar log de SQL no appsettings e ver as queries no console",
    "Implementar ListarPaginado e verificar o LIMIT/OFFSET no SQL gerado",
    "Detectar um N+1 problem adicionando Include corretamente",
    "Criar uma projeção que retorna apenas 3 campos (sem SELECT *)",
    "Implementar um filtro dinâmico com Where condicional"
  ]
  quiz: 3 perguntas sobre: o que é N+1 problem, diferença Include vs lazy loading,
        por que projeções são melhores que trazer a entidade completa

MÓDULO 7 — SQL Server (cor: '#DC2626', week: 'Semana 7')

  Tópico 7.1 — Modelagem Relacional e DDL
  teoria: Normalização (1NF, 2NF, 3NF — o suficiente para o dia a dia),
          tipos de dados SQL Server (VARCHAR vs NVARCHAR, DECIMAL vs FLOAT,
          DATETIME2 vs DATETIME, UNIQUEIDENTIFIER vs INT como PK),
          PKs: IDENTITY vs SEQUENCE vs GUID (custo e benefício),
          chaves estrangeiras, constraints (NOT NULL, UNIQUE, CHECK, DEFAULT),
          quando desnormalizar (performance vs consistência).
  código: Script DDL completo do E-commerce:
          CREATE DATABASE, CREATE TABLE para Categorias, Produtos, Clientes,
          Pedidos, ItensPedido com todos os tipos corretos, constraints,
          FKs com ON DELETE behavior explícito.
          Script de dados iniciais (seed) com INSERT.
  checklist: [
    "Instalar SQL Server 2022 via Docker: docker run -e ACCEPT_EULA=Y ...",
    "Conectar com Azure Data Studio ou DBeaver",
    "Executar o script DDL e verificar todas as tabelas criadas",
    "Inserir dados de seed e validar as constraints",
    "Alterar uma tabela com ALTER TABLE sem perder dados"
  ]
  quiz: 3 perguntas sobre: diferença NVARCHAR vs VARCHAR, por que DECIMAL para dinheiro,
        vantagem de INT IDENTITY vs GUID como PK

  Tópico 7.2 — Queries e JOINs Essenciais
  teoria: SELECT com WHERE, ORDER BY, TOP/FETCH NEXT,
          INNER JOIN, LEFT JOIN, RIGHT JOIN (e quando cada um),
          subqueries vs JOINs (legibilidade vs performance),
          CTEs (Common Table Expressions) — código limpo para queries complexas,
          agregações: COUNT, SUM, AVG, MIN, MAX com GROUP BY / HAVING,
          CASE WHEN para lógica condicional no SQL.
  código: Queries reais do E-commerce:
          Relatório de vendas por categoria com JOIN + GROUP BY,
          Top 10 produtos mais vendidos com CTE,
          Clientes sem pedidos nos últimos 30 dias (LEFT JOIN + NULL check),
          Pedidos com valor total calculado (subquery correlated),
          Dashboard: faturamento por mês com DATEPART.
  checklist: [
    "Escrever e executar a query de relatório de vendas por categoria",
    "Reescrever a mesma query com CTE e comparar legibilidade",
    "Identificar os clientes inativos com LEFT JOIN",
    "Criar o dashboard de faturamento mensal",
    "Usar EXPLAIN/Query Plan para entender a execução de uma query"
  ]
  quiz: 3 perguntas sobre: diferença INNER vs LEFT JOIN, quando usar CTE vs subquery,
        diferença HAVING vs WHERE

  Tópico 7.3 — Índices, Performance e Execution Plan
  teoria: Como índices funcionam (B-Tree, clustered vs non-clustered),
          quando criar um índice (colunas de WHERE, JOIN, ORDER BY frequentes),
          custo dos índices (write penalty — índice demais é problema),
          Execution Plan: como ler, o que é Table Scan vs Index Seek vs Index Scan,
          identificar queries lentas com sys.dm_exec_query_stats,
          estatísticas: UPDATE STATISTICS, por que o SQL Server pode escolher mal.
  código: Criação de índices estratégicos para o E-commerce:
          IX_Produtos_Nome, IX_Produtos_Categoria,
          índice composto IX_ItensPedido_PedidoId_ProdutoId,
          índice com INCLUDE para cobrir uma query específica.
          Query antes e depois do índice com comparação de Execution Plan.
          Script de verificação de índices não utilizados.
  checklist: [
    "Criar os 3 índices estratégicos do E-commerce",
    "Rodar o Execution Plan antes e depois de cada índice",
    "Identificar um Table Scan e convertê-lo em Index Seek",
    "Verificar índices fragmentados com sys.dm_db_index_physical_stats",
    "Criar um covering index com INCLUDE e medir a diferença"
  ]
  quiz: 3 perguntas sobre: clustered vs non-clustered index, quando um índice prejudica,
        diferença Index Seek vs Index Scan

  Tópico 7.4 — Stored Procedures e Functions
  teoria: Stored Procedure vs Function vs View (quando cada um),
          benefícios de SPs (plano de execução cacheado, encapsulamento, segurança),
          parâmetros IN/OUT, tratamento de erro com TRY/CATCH e THROW,
          transações dentro de SP (BEGIN TRAN, COMMIT, ROLLBACK),
          Scalar Function vs Table-Valued Function,
          quando NÃO usar SP (lógica de negócio no banco é anti-pattern moderno).
  código: SP_ProcessarPedido: recebe ClienteId e lista de itens (JSON),
          valida estoque, cria pedido e itens em transação,
          retorna PedidoId criado ou erro detalhado.
          FN_CalcularDesconto: Table-Valued Function que calcula desconto por categoria.
          View VW_RelatorioPedidos para relatório consolidado.
  checklist: [
    "Criar e executar a SP_ProcessarPedido com um pedido de teste",
    "Testar o ROLLBACK forçando um erro de estoque insuficiente",
    "Chamar a SP_ProcessarPedido a partir do C# via EF Core (FromSqlRaw)",
    "Criar a View VW_RelatorioPedidos e consultá-la como tabela",
    "Comparar a mesma lógica implementada em SP vs C# — prós e contras"
  ]
  quiz: 3 perguntas sobre: diferença SP vs Function, quando usar transação dentro de SP,
        por que lógica de negócio complexa não deve ficar no banco

MÓDULO 8 — Injeção de Dependências (cor: '#F59E0B', week: 'Semana 8')

  Tópico 8.1 — DI Container Nativo do ASP.NET Core
  teoria: O problema que DI resolve (acoplamento, testabilidade, manutenção),
          Dependency Inversion Principle (D do SOLID) na prática,
          IServiceCollection: como o container é construído,
          resolução automática de dependências via construtor,
          IServiceProvider: quando resolver manualmente (e por que evitar),
          extensões: AddScoped, AddSingleton, AddTransient,
          RegisterAs: registrar implementação por interface.
  código: Exemplo completo:
          Interface IProdutoRepository e implementação ProdutoRepository,
          Interface IProdutoService e implementação ProdutoService,
          ProdutosController recebendo IProdutoService via construtor,
          Program.cs com todos os registros encadeados.
          Demonstração visual do fluxo de resolução.
  checklist: [
    "Criar a interface IProdutoRepository e sua implementação",
    "Criar IProdutoService com lógica de negócio e injetar IProdutoRepository",
    "Registrar ambos no Program.cs",
    "Verificar que o Controller funciona sem instanciar nada manualmente",
    "Tentar resolver um serviço não registrado e observar o erro claro"
  ]
  quiz: 3 perguntas sobre: o que DI resolve, diferença entre registrar por interface
        vs por classe concreta, o que acontece se esquecer de registrar um serviço

  Tópico 8.2 — Lifetimes: Singleton, Scoped, Transient
  teoria: Singleton (uma instância por app — cuidado com estado compartilhado),
          Scoped (uma instância por request HTTP — padrão para DbContext, Repositories),
          Transient (nova instância sempre — para serviços stateless leves),
          Captive Dependency: injetar Scoped em Singleton é um bug silencioso,
          como detectar: ValidateScopes no development,
          regra prática: quando em dúvida, use Scoped.
  código: Demonstração concreta dos 3 lifetimes com IDs únicos por instância:
          3 serviços (SingletonService, ScopedService, TransientService) logando seu ID,
          um controller que injeta os 3 e mostra os IDs em duas chamadas consecutivas,
          Program.cs com builder.Services.BuildServiceProvider().CreateScope() para teste,
          configuração de ValidateScopes e ValidateOnBuild.
  checklist: [
    "Implementar os 3 serviços de demonstração com GUID como identificador",
    "Chamar o endpoint duas vezes e comparar os IDs — entender o padrão",
    "Forçar um Captive Dependency (Scoped em Singleton) e observar o erro",
    "Habilitar ValidateScopes no development e ver a detecção automática",
    "Decidir o lifetime correto para: DbContext, HttpClient, Logger, Cache"
  ]
  quiz: 3 perguntas sobre: qual lifetime para DbContext e por quê, o que é Captive
        Dependency, quando Transient é perigoso

  Tópico 8.3 — Repository Pattern + DI
  teoria: Repository Pattern: abstrai o acesso a dados da lógica de negócio,
          Generic Repository (IRepository<T>) vs Specific Repository,
          Unit of Work Pattern com DbContext,
          por que Repository + DI = código testável (mock fácil),
          crítica honesta: quando Repository é over-engineering,
          estrutura de pastas corporativa: Domain / Application / Infrastructure.
  código: Implementação completa para o E-commerce:
          IRepository<T> genérico com GetById, GetAll, Add, Update, Delete,
          IProdutoRepository extendendo com métodos específicos (BuscarPorCategoria),
          ProdutoRepository : IRepository<Produto>, IProdutoRepository com EF Core,
          IPedidoRepository com método CalcularTotalPedido,
          Registros no DI com extensão AddRepositories().
  checklist: [
    "Criar a interface IRepository<T> genérica",
    "Implementar ProdutoRepository herdando do genérico",
    "Adicionar método específico BuscarPorCategoria",
    "Criar método de extensão AddRepositories() no Program.cs",
    "Testar todos os métodos via Swagger e verificar SQL gerado no log"
  ]
  quiz: 3 perguntas sobre: benefício do Repository para testes, diferença Repository
        genérico vs específico, quando NÃO usar Repository Pattern

  Tópico 8.4 — Configuração: appsettings + Options Pattern
  teoria: appsettings.json vs appsettings.{Environment}.json vs User Secrets,
          variáveis de ambiente sobrescrevendo appsettings (hierarquia de configuração),
          Options Pattern: IOptions<T>, IOptionsSnapshot<T>, IOptionsMonitor<T>,
          quando usar cada um (Singleton vs Scoped vs hot-reload),
          configurações tipadas (sem magic strings no código),
          Azure Key Vault para secrets em produção (introdução).
  código: Configurações do E-commerce:
          DatabaseSettings, EmailSettings, PaginacaoSettings como classes tipadas,
          appsettings.json com todas as seções,
          appsettings.Development.json sobreescrevendo apenas o necessário,
          User Secrets para a connection string de desenvolvimento (dotnet user-secrets),
          Registro com services.Configure<T>() e injeção via IOptions<T>,
          Validação de configurações na inicialização com ValidateDataAnnotations.
  checklist: [
    "Criar as 3 classes de configuração tipada",
    "Configurar User Secrets para a connection string: dotnet user-secrets set",
    "Injetar IOptions<PaginacaoSettings> no repositório e usar os valores",
    "Verificar a hierarquia: definir o mesmo valor em appsettings e env var",
    "Adicionar validação de configuração obrigatória na inicialização"
  ]
  quiz: 3 perguntas sobre: diferença IOptions vs IOptionsSnapshot, por que User Secrets
        e não appsettings para senhas, como variáveis de ambiente sobrescrevem appsettings
```

═══════════════════════════════════════════════════════
4. CONSTANTE ALL_PHASES E FUNÇÃO DE DESBLOQUEIO DE FASE
═══════════════════════════════════════════════════════
Adicione após FASE2_DATA:

const ALL_PHASES = [
  { id: 'phase1', title: 'Fase 1', subtitle: 'C# & Git', data: FASE1_DATA,
    storageKey: STORAGE.completed, color: '#00D4FF', weeks: 'Semanas 1–4' },
  { id: 'phase2', title: 'Fase 2', subtitle: 'Web API & BD', data: FASE2_DATA,
    storageKey: STORAGE.phase2Completed, color: '#7C3AED', weeks: 'Semanas 5–8' },
]

function isPhaseUnlocked(phaseIndex, allPhasesProgress) {
  if (phaseIndex === 0) return true
  const prevPhase = ALL_PHASES[phaseIndex - 1]
  const prevTopics = getAllTopicsFlat(prevPhase.data)
  const prevCompleted = allPhasesProgress[prevPhase.id] || []
  return prevCompleted.length === prevTopics.length
}

═══════════════════════════════════════════════════════
NÃO MODIFIQUE NENHUM COMPONENTE VISUAL AINDA.
═══════════════════════════════════════════════════════

Apenas estrutura de dados e funções. O componente App permanece exatamente igual.
Foque em qualidade do conteúdo dos 16 tópicos — teoria real (200+ palavras cada),
código compilável no .NET 8, checklist executável no terminal, quiz com 3 perguntas.
```

---

### 🔧 PROMPT F2-2 — Sidebar Multi-fase

```
[CONTEXTO: Fase 2 — Etapa F2-2: Sidebar Multi-fase]
[ENTRADA: Cole aqui o .jsx completo após F2-1]

Refatore APENAS o componente <Sidebar> para suportar múltiplas fases.
Não modifique nenhum outro componente.

MUDANÇAS NO SIDEBAR:

1. O Sidebar agora recebe estas props adicionais:
   - allPhases: ALL_PHASES (array com fase1 e fase2)
   - phasesProgress: { phase1: string[], phase2: string[] } (tópicos concluídos por fase)
   - currentPhaseId: string

2. ESTRUTURA VISUAL DO NOVO SIDEBAR:
   ┌─────────────────────────┐
   │ FASE 1 ✅ 16/16         │  ← header da fase, colapsável
   │  └ Módulo 1 ⚡ 4/4 ✅  │  ← módulos como antes
   │     ├ ✅ Tipos & Vars   │
   │     └ ✅ Controle Fluxo │
   ├─────────────────────────┤
   │ FASE 2 ▶ 3/16          │  ← fase ativa com progresso
   │  ├ Módulo 5 🟣 ▶       │
   │  │   ├ ✅ Estrutura API │
   │  │   ├ ▶ Controllers   │  ← tópico atual
   │  │   ├ 🔒 Middlewares  │
   │  │   └ 🔒 Minimal APIs │
   │  ├ 🔒 Módulo 6 (EF)    │  ← módulo bloqueado (colapsado)
   │  ├ 🔒 Módulo 7 (SQL)   │
   │  └ 🔒 Módulo 8 (DI)    │
   └─────────────────────────┘

3. REGRAS DE DESBLOQUEIO VISUAL:
   - Fase bloqueada: header com 🔒, opacity 0.5, não expansível
   - Fase ativa: header com indicador de progresso "3/16"
   - Fase completa: header com ✅ e badge verde "CONCLUÍDA"
   - Módulo bloqueado (tópico anterior incompleto): ícone 🔒, sem lista
   - Módulo ativo: borda esquerda na cor do módulo
   - Módulo completo: ✅ no header do módulo

4. ANIMAÇÃO:
   Ao completar o último tópico da Fase 1:
   - Toast: "🎉 Fase 2 Desbloqueada! Web API & Banco de Dados"
   - Sidebar faz scroll suave até o header da Fase 2
   - Header da Fase 2 pulsa brevemente (outline animation 1s)

5. ESTADO NO APP:
   Adicione ao estado do App:
   - currentPhaseId (começa em 'phase1')
   - phase2CompletedTopics: [] (carregado do storage)
   Passe para Sidebar como props.
   
IMPORTANTE: A lógica de conteúdo do MainContent não muda.
O isTopicUnlocked deve agora considerar a fase correta do tópico.
```

---

### 🔧 PROMPT F2-3 — Conteúdo Módulo 5 (Web API)

```
[CONTEXTO: Fase 2 — Etapa F2-3: Módulo 5 completo]
[ENTRADA: Cole aqui o .jsx completo após F2-2]

Revise e certifique a qualidade do Módulo 5 na FASE2_DATA.

Para cada um dos 4 tópicos do Módulo 5, verifique:

TÓPICO 5.1 — Estrutura de um projeto Web API
[ ] theory: explica WebApplication.CreateBuilder, Program.cs, estrutura de pastas,
            diferença .NET Core vs Framework, cita empresas que usam
[ ] code: projeto Web API funcional com HealthController, Swagger habilitado,
          todos os using necessários, arquivo .csproj com packages
[ ] runCommand: "dotnet new webapi -n EcommerceApi --use-controllers && dotnet run"
[ ] checklist: 5 tarefas do terminal ao VSCode
[ ] quiz: 3 perguntas com answer index correto e explanation real

TÓPICO 5.2 — Controllers, Actions e Rotas
[ ] code: ProdutosController COMPLETO com GET(lista), GET(id), POST, PUT, PATCH, DELETE
[ ] DTOs definidos: CriarProdutoRequest, AtualizarProdutoRequest, ProdutoResponse
[ ] Todos os endpoints com [ProducesResponseType] corretos
[ ] Status codes corretos: 200, 201 (Created), 204 (NoContent), 400, 404
[ ] Nenhum endpoint incompleto ou com "// implementar"

TÓPICO 5.3 — Middlewares e Pipeline HTTP
[ ] code: RequestLoggingMiddleware completo com Stopwatch
[ ] code: ExceptionHandlingMiddleware retornando ProblemDetails (RFC 7807)
[ ] Program.cs mostrando a ordem EXATA dos middlewares com comentários
[ ] Exemplo de como o mesmo request passa por cada middleware

TÓPICO 5.4 — Minimal APIs e Filters
[ ] code: Comparativo lado a lado — mesmo endpoint em Controller e Minimal API
[ ] RouteGroupBuilder agrupa os endpoints corretamente
[ ] EndpointFilter com validação genérica completa
[ ] ActionFilter de auditoria implementado e aplicado

SE QUALQUER ITEM ESTIVER FALTANDO OU INCOMPLETO: reescreva o tópico inteiro.
Não remende — substitua completamente.

Entregue o arquivo .jsx completo ao final.
```

---

### 🔧 PROMPT F2-4 — Conteúdo Módulo 6 (EF Core)

```
[CONTEXTO: Fase 2 — Etapa F2-4: Módulo 6 completo]
[ENTRADA: Cole aqui o .jsx completo após F2-3]

Revise e certifique a qualidade do Módulo 6 na FASE2_DATA.

VERIFICAÇÕES OBRIGATÓRIAS POR TÓPICO:

TÓPICO 6.1 — DbContext, DbSet e Code First
[ ] Entidades corretas: Produto (Id, Nome, Preco, Estoque, CategoriaId, Ativo, CreatedAt)
[ ] Categoria (Id, Nome, Descricao)
[ ] Pedido (Id, ClienteId, DataPedido, Status enum, Total)
[ ] ItemPedido (Id, PedidoId, ProdutoId, Quantidade, PrecoUnitario)
[ ] DbContext com Scoped lifetime explicado no comentário
[ ] connection string com SQL Server no appsettings.json

TÓPICO 6.2 — Migrations
[ ] Comandos exatos com dotnet-ef (não Package Manager Console)
[ ] 3 migrations em sequência demonstrando evolução do schema
[ ] Script SQL gerado pela migration (resultado real, não placeholder)
[ ] Rollback explicado: dotnet ef database update [MigrationAnterior]
[ ] Aviso sobre migrations em produção: sempre backup antes

TÓPICO 6.3 — Fluent API e Relacionamentos
[ ] CADA entidade tem seu próprio arquivo XConfiguration : IEntityTypeConfiguration<X>
[ ] Cascade delete configurado EXPLICITAMENTE (não deixar o default)
[ ] Endereço como OwnsOne em Cliente
[ ] Índice único no SKU do Produto
[ ] OnModelCreating aplicando as configurações com ApplyConfigurationsFromAssembly

TÓPICO 6.4 — Queries LINQ com EF Core
[ ] Log de SQL habilitado no appsettings ("EF" : "Information")
[ ] N+1 problem demonstrado E corrigido com Include
[ ] Paginação com Skip/Take e COUNT separado
[ ] GroupBy que gera SQL correto (sem client-side evaluation)
[ ] Query com projeção retornando DTO anônimo (não a entidade completa)

Corrija tudo que não atender. Entregue o .jsx completo.
```

---

### 🔧 PROMPT F2-5 — Conteúdo Módulo 7 (SQL Server)

```
[CONTEXTO: Fase 2 — Etapa F2-5: Módulo 7 completo]
[ENTRADA: Cole aqui o .jsx completo após F2-4]

Revise e certifique a qualidade do Módulo 7 na FASE2_DATA.

VERIFICAÇÕES OBRIGATÓRIAS:

TÓPICO 7.1 — Modelagem Relacional e DDL
[ ] Script DDL completo e executável no SQL Server 2022
[ ] Todos os tipos corretos: DECIMAL(18,2) para preço, NVARCHAR para texto,
    DATETIME2 para datas, INT IDENTITY para PKs
[ ] Constraints explícitas: NOT NULL, UNIQUE, CHECK (ex: Preco > 0), DEFAULT
[ ] FK com ON DELETE RESTRICT (não CASCADE em produção — explicar por quê)
[ ] Script de INSERT com dados realistas (não 'teste', 'abc')

TÓPICO 7.2 — Queries e JOINs
[ ] Pelo menos 5 queries distintas e úteis para o E-commerce
[ ] CTE para a query mais complexa
[ ] LEFT JOIN com NULL check (clientes sem pedido)
[ ] GROUP BY com HAVING
[ ] Subquery correlated (vs JOIN — comparar)
[ ] TODOS os exemplos executáveis sem modificação

TÓPICO 7.3 — Índices e Performance
[ ] Comando para ver o Execution Plan: SET STATISTICS IO ON
[ ] Antes/depois concreto: mesma query, scan vs seek
[ ] Índice composto com ordem de colunas justificada
[ ] Covering index com INCLUDE explicado e exemplificado
[ ] Script para verificar índices não usados (sys.dm_db_index_usage_stats)

TÓPICO 7.4 — Stored Procedures
[ ] SP_ProcessarPedido executável e com tratamento de erro TRY/CATCH
[ ] THROW com mensagem descritiva (não RAISERROR antigo)
[ ] Verificação de estoque ANTES de inserir — ROLLBACK se insuficiente
[ ] Chamada da SP via EF Core com FromSqlRaw ou ExecuteSqlRaw
[ ] View VW_RelatorioPedidos com JOIN e colunas calculadas

Corrija tudo que não atender. Entregue o .jsx completo.
```

---

### 🔧 PROMPT F2-6 — Módulo 8 (DI) + Projeto Final

```
[CONTEXTO: Fase 2 — Etapa F2-6: Módulo 8 + Projeto Final]
[ENTRADA: Cole aqui o .jsx completo após F2-5]

1. REVISE O MÓDULO 8 (Injeção de Dependências):

TÓPICO 8.1
[ ] IProdutoRepository e IProdutoService como interfaces reais (não vazias)
[ ] Fluxo de resolução documentado: Controller → Service → Repository → DbContext
[ ] Erro de serviço não registrado demonstrado com mensagem clara

TÓPICO 8.2
[ ] Os 3 serviços de demonstração com GUID único por instância
[ ] Endpoint que mostra os IDs lado a lado numa única response
[ ] Captive Dependency demonstrado E o erro gerado pelo ValidateScopes
[ ] Tabela de decisão no theory: "Se seu serviço é X, use Y lifetime"

TÓPICO 8.3
[ ] IRepository<T> genérico com: GetByIdAsync, GetAllAsync, AddAsync,
    UpdateAsync, DeleteAsync, SaveChangesAsync
[ ] ProdutoRepository implementando + adicionando BuscarPorCategoriaAsync
[ ] Método de extensão AddRepositories(this IServiceCollection services) completo
[ ] Explicação honesta de quando Repository é over-engineering

TÓPICO 8.4
[ ] DatabaseSettings, EmailSettings, PaginacaoSettings com DataAnnotations
[ ] User Secrets setup completo com comandos
[ ] Hierarquia de configuração testada (appsettings < env var < user secrets)
[ ] ValidateDataAnnotations + ValidateOnStart habilitados

2. ADICIONE O TÓPICO BÔNUS: Projeto Final Fase 2

Após os 16 tópicos, adicione um tópico especial de projeto final:
  id: 'm8proj', moduleId: 'm8', title: '🛒 Projeto: API E-commerce Completa',
  
  theory: Descrição do projeto completo integrando todos os conceitos da Fase 2:
    - Estrutura de pastas corporativa (Domain, Application, Infrastructure, API)
    - Endpoints de Produtos e Pedidos com CRUD completo
    - EF Core + SQL Server com migrations reais
    - Repository Pattern + DI
    - Middlewares de logging e tratamento de erros
    - Swagger documentado com exemplos
    - GitFlow: feature/produtos, feature/pedidos, feature/autenticacao
    
  code: Estrutura de pastas completa com todos os arquivos listados e
        o Program.cs final integrando tudo.
  
  checklist: [
    "Criar o projeto do zero seguindo a estrutura de pastas indicada",
    "Implementar todos os endpoints de Produtos com testes no Swagger",
    "Implementar os endpoints de Pedidos com validação de estoque",
    "Rodar todas as migrations e verificar o banco no Azure Data Studio",
    "Fazer o commit final com GitFlow: git flow release start v1.0.0"
  ]
  
  quiz: [
    Pergunta sobre qual camada deve conter a lógica de negócio,
    Pergunta sobre por que usar Repository Pattern neste projeto,
    Pergunta sobre como garantir que as migrations rodem em produção
  ]

Entregue o .jsx completo ao final.
```

---

### 🔧 PROMPT F2-7 — Revisão Geral + Polimento

```
[CONTEXTO: Fase 2 — Etapa F2-7: Revisão Final]
[ENTRADA: Cole aqui o .jsx completo após F2-6]

Faça a revisão final da Fase 2. Verifique CADA item:

═══════════════════════════════════════════════════
CHECKLIST GERAL DE QUALIDADE
═══════════════════════════════════════════════════

CONTEÚDO (verificar todos os 17 tópicos da Fase 2):
[ ] Nenhum tópico com conteúdo placeholder ou "// TODO"
[ ] Todos os códigos têm os using statements necessários
[ ] Todos os códigos têm o arquivo .csproj com os NuGet packages
[ ] Teoria de cada tópico tem 200+ palavras e cita uso corporativo real
[ ] Progressão de dificuldade: M5 (básico) → M8 (intermediário-avançado)
[ ] Checklists com tarefas executáveis hoje, sem dependências externas não listadas

INTEGRAÇÃO COM FASE 1:
[ ] Fase 1 continua funcionando sem regressões
[ ] Fase 2 desbloqueia corretamente ao completar Fase 1
[ ] XP da Fase 2 acumula separado e soma no total geral
[ ] Timer da Fase 2 usa chaves separadas no storage
[ ] Dashboard mostra progresso das duas fases

COMPORTAMENTO DO SISTEMA:
[ ] Navegação linear da Fase 2 funciona igual à Fase 1
[ ] Botão "Próximo" da Fase 2 respeita mesmas regras (checklist + quiz)
[ ] Toast de fase desbloqueada aparece ao completar Fase 1
[ ] Sidebar atualiza visualmente em tempo real

CÓDIGO REACT:
[ ] Sem console.error em uso normal
[ ] Sem re-renders desnecessários (sem objetos/funções inline em props)
[ ] window.storage com try/catch em todas as operações
[ ] Sem hardcoded strings que deveriam ser constantes

Se encontrar qualquer problema: corrija e explique o que foi corrigido.
Entregue o .jsx completo e testável ao final.
```

---

## PARTE 4 — DICAS ESPECÍFICAS DA FASE 2

### Pacotes NuGet que aparecem nos exemplos

Todo código C# da Fase 2 que usa esses pacotes deve incluir o `.csproj` correspondente:

```xml
<!-- API + EF Core + SQL Server -->
<PackageReference Include="Microsoft.AspNetCore.OpenApi" Version="8.0.*" />
<PackageReference Include="Swashbuckle.AspNetCore" Version="6.5.*" />
<PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="8.0.*" />
<PackageReference Include="Microsoft.EntityFrameworkCore.Tools" Version="8.0.*" />
<PackageReference Include="Microsoft.EntityFrameworkCore.Design" Version="8.0.*" />

<!-- SQL Server via Docker (para o checklist do tópico 7.1) -->
<!-- docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Senha@123"
     -p 1433:1433 --name sqlserver -d mcr.microsoft.com/mssql/server:2022-latest -->
```

### Quando o código ficar muito grande para uma resposta

```
"O arquivo está ficando grande. Divida a entrega em 3 partes:
- Parte A: Do início até o final de FASE1_DATA (sem modificações)
- Parte B: FASE2_DATA completo (todos os 16 tópicos)  
- Parte C: ALL_PHASES, funções e todos os componentes React
Eu concatenarei as partes na ordem A + B + C."
```

### Verificação rápida após cada etapa

Antes de usar o código gerado, teste mentalmente:
1. `ALL_PHASES[1].data[0].code` — tem código real ou placeholder?
2. `isPhaseUnlocked(1, { phase1: new Array(16).fill('x') })` — retorna `true`?
3. A Fase 1 ainda funciona igual? (abrir tópico 1.1, completar, avançar)
