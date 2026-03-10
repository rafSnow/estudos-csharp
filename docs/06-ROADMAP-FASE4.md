# 🚀 FASE 4 — ROADMAP DE IMPLEMENTAÇÃO + PROMPTS PARA CLAUDE OPUS 4.6

> **Fase:** 4 de 9 — Testes Automatizados
> **Stack:** xUnit · Moq · FluentAssertions · TestContainers · TDD · BDD com SpecFlow
> **Semanas:** 13–15 do cronograma geral
> **Pré-requisito:** Fase 3 concluída (Clean Code + SOLID + DDD + FluentValidation)
> **Projeto:** Suite de Testes Completa do Sistema Financeiro (80%+ de cobertura)

---

## CONTEXTO: O QUE MUDA DA FASE 3 PARA A FASE 4

A Fase 3 ensinou a construir software bem arquitetado.
A Fase 4 ensina a **provar que o software funciona** — e a usar essa prova como
rede de segurança para refatorar, evoluir e entregar com confiança.

Esta é a fase que separa desenvolvedores juniores de seniores no mercado.
Empresas como Nubank, iFood e PicPay exigem que todo PR venha acompanhado de
testes. Sem testes, não há merge. Aqui o aluno aprende o porquê e o como.

A conexão com a Fase 3 é direta e intencional:
- SOLID bem aplicado → código **testável** (injeção de dependências = mocks fáceis)
- DDD com Value Objects → testes de unidade **triviais** (sem banco, sem I/O)
- Domain Events → testes de **comportamento** em vez de estado
- Result Pattern → assertions claras e sem exceções surpresa nos testes

O sistema React **não muda estruturalmente** — apenas `FASE4_DATA` é adicionado ao `ALL_PHASES`.

```
Sistema após Fase 4:
Sidebar
├── ✅ FASE 1 — C# Fundamentos & Git           (concluída)
├── ✅ FASE 2 — Web API & Banco de Dados        (concluída)
├── ✅ FASE 3 — Qualidade & Arquitetura         (concluída)
└── ▶  FASE 4 — Testes Automatizados           (em progresso)
     ├── Módulo 13: Testes de Unidade com xUnit
     ├── Módulo 14: Mocks e Isolamento com Moq
     ├── Módulo 15: Testes de Integração
     └── Módulo 16: TDD e BDD na Prática
```

---

## PARTE 1 — MAPA DE CONTEÚDO DA FASE 4

### Módulos e Tópicos (16 tópicos + 1 projeto, Semanas 13–15)

```
Fase 4 — Testes Automatizados
│
├── Módulo 13: Testes de Unidade com xUnit (Semana 13)      cor: #EF4444
│   ├── Tópico 13.1 — Por que testar? Anatomia de um teste
│   ├── Tópico 13.2 — xUnit: Facts, Theories e Data-Driven
│   ├── Tópico 13.3 — FluentAssertions: assertions expressivas
│   └── Tópico 13.4 — Cobertura de código: o que medir e o que ignorar
│
├── Módulo 14: Mocks e Isolamento com Moq (Semana 13–14)    cor: #8B5CF6
│   ├── Tópico 14.1 — Doubles de teste: Stub, Mock, Fake, Spy
│   ├── Tópico 14.2 — Moq: Setup, Returns, Verify e Callbacks
│   ├── Tópico 14.3 — Testando Domain Services e Use Cases
│   └── Tópico 14.4 — AutoFixture e Builder Pattern para dados de teste
│
├── Módulo 15: Testes de Integração (Semana 14–15)          cor: #0EA5E9
│   ├── Tópico 15.1 — WebApplicationFactory e TestServer
│   ├── Tópico 15.2 — TestContainers: banco real em testes
│   ├── Tópico 15.3 — Testando a API end-to-end (HTTP real)
│   └── Tópico 15.4 — Fixtures, Collections e gerenciamento de estado
│
└── Módulo 16: TDD e BDD na Prática (Semana 15)             cor: #10B981
    ├── Tópico 16.1 — TDD: Red-Green-Refactor na prática
    ├── Tópico 16.2 — Design emergente via TDD
    ├── Tópico 16.3 — BDD com SpecFlow: Gherkin e Given-When-Then
    └── Tópico 16.4 — Pirâmide de testes: estratégia corporativa

Projeto Final Fase 4: Suite de Testes do Sistema Financeiro
    ├── 80%+ cobertura em Domain e Application
    ├── Testes de unidade para todos os Value Objects e Aggregates
    ├── Testes de integração com TestContainers (SQL Server real)
    ├── Testes end-to-end nos 5 casos de uso do sistema financeiro
    └── Pipeline de CI que falha se cobertura cair abaixo de 80%
```

---

## PARTE 2 — ROADMAP DE IMPLEMENTAÇÃO

### Visão Geral das Etapas

```
ETAPA F4-1 → Dados da Fase 4 + Registro em ALL_PHASES             (1 sessão)
ETAPA F4-2 → Conteúdo Módulo 13 (xUnit + FluentAssertions)        (1 sessão)
ETAPA F4-3 → Conteúdo Módulo 14 (Moq + AutoFixture)               (1 sessão)
ETAPA F4-4 → Conteúdo Módulo 15 (Integração + TestContainers)     (1 sessão)
ETAPA F4-5 → Conteúdo Módulo 16 (TDD + BDD + Pirâmide)            (1 sessão)
ETAPA F4-6 → Projeto Final + Revisão Geral                         (1 sessão)
```

> **Por que 6 etapas e não 7?** TDD e BDD são mais práticos que conceituais —
> um único módulo com 4 tópicos bem guiados é suficiente quando o aluno já tem
> xUnit e Moq dominados nas etapas anteriores. O projeto final merece uma etapa
> dedicada porque integra literalmente tudo da Fase 4 aplicado ao Sistema Financeiro.

---

### ETAPA F4-1 — Dados + Integração

**O que entregar:** `FASE4_DATA` com esqueleto, cores e chaves de storage, `ALL_PHASES` com 4 entradas.
**Critério de aceite:** Fase 4 aparece bloqueada na sidebar até Fase 3 estar completa.

---

### ETAPAS F4-2 a F4-5 — Conteúdo por Módulo

Cada etapa adiciona um módulo com conteúdo real, código testável e checklists executáveis no VSCode.
**Critério de aceite:** Todos os testes dos exemplos passam com `dotnet test`.

---

### ETAPA F4-6 — Projeto Final + Revisão

**O que entregar:** Tópico projeto final completo + revisão de todos os 16 tópicos + teste de regressão Fases 1–4.
**Critério de aceite:** Nenhum placeholder, `dotnet test` em todos os exemplos passa sem erros.

---

## PARTE 3 — PROMPTS PARA CLAUDE OPUS 4.6

---

### 📌 PROMPT BASE FASE 4 (incluir em TODAS as sessões)

```
Você é um engenheiro sênior .NET especialista em qualidade de software e
testes automatizados, construindo a FASE 4 de uma plataforma de aprendizado
corporativo .NET. As Fases 1, 2 e 3 já estão funcionando e não podem ser quebradas.

DOCUMENTOS DE REFERÊNCIA:
- 01-REQUISITOS.md        (base arquitetural do sistema React)
- 02-ARQUITETURA.md       (componentes e persistência)
- 05-ROADMAP-FASE3.md     (fase anterior — Sistema Financeiro DDD como alvo dos testes)
- 06-ROADMAP-FASE4.md     (este documento)

REGRAS ABSOLUTAS (mesmas das fases anteriores, mais estas):
1. Nunca quebrar Fases 1, 2 ou 3 — APENAS ADICIONAR ao final do arquivo
2. Todo teste deve passar com "dotnet test" sem configuração externa adicional
3. Testes de unidade: ZERO dependências externas (sem banco, sem rede, sem filesystem)
4. Testes de integração com TestContainers: explicitar o docker pull necessário
5. Nomenclatura de testes: Metodo_Cenario_ResultadoEsperado (padrão corporativo)
   Exemplo: Sacar_SaldoInsuficiente_RetornaFalha
6. Arrange-Act-Assert com comentários de seção em TODOS os exemplos
7. Usar o Sistema Financeiro da Fase 3 como alvo dos testes — consistência pedagógica
8. Mostrar SEMPRE o teste que falha antes de mostrar o código que faz passar
9. Cobertura não é tudo: ensinar o que NÃO vale a pena testar (getters, DI config)
10. FluentAssertions obrigatório — nunca Assert.Equal nu do xUnit nos exemplos finais
```

---

### 🔧 PROMPT F4-1 — Dados da Fase 4 + Integração

```
[CONTEXTO: Fase 4 — Etapa F4-1: Estrutura de Dados e Integração]
[ENTRADA: Cole aqui o .jsx completo e funcionando com Fases 1, 2 e 3]

Mantenha TODO o código existente intacto.
Adicione ao final do arquivo, sem modificar nada:

═══════════════════════════════════════════════════════
1. CORES DOS NOVOS MÓDULOS
═══════════════════════════════════════════════════════
Adicione ao objeto COLORS existente:
  m13: '#EF4444',   // xUnit — vermelho (testes = red no TDD)
  m14: '#8B5CF6',   // Moq — violeta
  m15: '#0EA5E9',   // Integração — azul
  m16: '#10B981',   // TDD/BDD — verde (green no TDD)

═══════════════════════════════════════════════════════
2. CHAVES DE STORAGE DA FASE 4
═══════════════════════════════════════════════════════
Adicione ao objeto STORAGE:
  phase4Completed:  'phase4:completed_topics',
  phase4Xp:         'phase4:xp',
  phase4Unlocked:   'phase4:unlocked',
  checklist4: id => `phase4:checklist_${id}`,
  quiz4:      id => `phase4:quiz_${id}`,
  notes4:     id => `phase4:notes_${id}`,
  timer4:     id => `phase4:timer_${id}`,

═══════════════════════════════════════════════════════
3. CONSTANTE FASE4_DATA — ESTRUTURA COMPLETA
═══════════════════════════════════════════════════════
Crie FASE4_DATA com a mesma estrutura das fases anteriores.
Conteúdo real virá nas etapas F4-2 a F4-5. Por ora, esqueleto com ids e títulos.

Módulo 13 — id: 'm13', title: 'Testes de Unidade com xUnit', color: '#EF4444', week: 'Semana 13'
  m13t1 — Por que testar? Anatomia de um teste
  m13t2 — xUnit: Facts, Theories e Data-Driven
  m13t3 — FluentAssertions: assertions expressivas
  m13t4 — Cobertura de código: o que medir e o que ignorar

Módulo 14 — id: 'm14', title: 'Mocks e Isolamento com Moq', color: '#8B5CF6', week: 'Semana 13-14'
  m14t1 — Doubles de teste: Stub, Mock, Fake, Spy
  m14t2 — Moq: Setup, Returns, Verify e Callbacks
  m14t3 — Testando Domain Services e Use Cases
  m14t4 — AutoFixture e Builder Pattern para dados de teste

Módulo 15 — id: 'm15', title: 'Testes de Integração', color: '#0EA5E9', week: 'Semana 14-15'
  m15t1 — WebApplicationFactory e TestServer
  m15t2 — TestContainers: banco real em testes
  m15t3 — Testando a API end-to-end (HTTP real)
  m15t4 — Fixtures, Collections e gerenciamento de estado

Módulo 16 — id: 'm16', title: 'TDD e BDD na Prática', color: '#10B981', week: 'Semana 15'
  m16t1 — TDD: Red-Green-Refactor na prática
  m16t2 — Design emergente via TDD
  m16t3 — BDD com SpecFlow: Gherkin e Given-When-Then
  m16t4 — Pirâmide de testes: estratégia corporativa

Projeto final — id: 'm16proj', moduleId: 'm16'
  title: '🧪 Projeto: Suite de Testes do Sistema Financeiro'

═══════════════════════════════════════════════════════
4. ATUALIZAR ALL_PHASES
═══════════════════════════════════════════════════════
Adicione ao array ALL_PHASES:
  {
    id: 'phase4',
    title: 'Fase 4',
    subtitle: 'Testes Automatizados',
    data: FASE4_DATA,
    storageKey: STORAGE.phase4Completed,
    color: '#EF4444',
    weeks: 'Semanas 13–15'
  }

Regra: Fase 4 requer Fase 3 com 16 tópicos concluídos (isPhaseUnlocked genérico já funciona).

NÃO MODIFIQUE NENHUM COMPONENTE VISUAL. Apenas dados e constantes.
Entregue o .jsx completo ao final.
```

---

### 🔧 PROMPT F4-2 — Módulo 13 (xUnit + FluentAssertions)

```
[CONTEXTO: Fase 4 — Etapa F4-2: Módulo 13 — Testes de Unidade com xUnit]
[ENTRADA: Cole aqui o .jsx completo após F4-1]

Substitua o conteúdo placeholder dos 4 tópicos do Módulo 13.
Use o Sistema Financeiro da Fase 3 (Conta, Dinheiro, Transacao, CPF) como alvo.

REGRA ESPECIAL DESTE MÓDULO:
Todo exemplo de código DEVE mostrar:
  1. O teste FALHANDO primeiro (vermelho)
  2. O código mínimo que faz passar (verde)
  3. Nunca o contrário — o aluno precisa sentir o ciclo

════════════════════════════════════════════════════
TÓPICO 13.1 — Por que testar? Anatomia de um teste
════════════════════════════════════════════════════
theory:
  O argumento real para testes — não "é bom praticar" mas consequências concretas:
  sem testes, refatorar é jogar roleta russa; com testes, é cirurgia com raio-x.
  O custo do bug: quanto mais tarde encontrado, mais caro (fórmula real da Microsoft).
  Tipos de teste e seus objetivos: unidade, integração, end-to-end, smoke, regression.
  A anatomia canônica: Arrange (preparar), Act (executar), Assert (verificar).
  Um bom teste tem: nome descritivo, um único motivo para falhar, determinismo
  (mesmo resultado sempre), independência (não depende de outros testes), rapidez.
  O que NÃO é um bom teste: testar implementação em vez de comportamento,
  teste que sempre passa, teste que depende de ordem de execução.
  Nomenclatura corporativa: Metodo_Cenario_ResultadoEsperado.
  Por que xUnit sobre NUnit e MSTest: sem construtor de setup, IDisposable,
  paralelismo nativo, teoria de dados.

code:
  Projeto de teste do zero:
  dotnet new xunit -n SistemaFinanceiro.Tests
  dotnet add reference ../SistemaFinanceiro.Domain

  Primeiros 4 testes no padrão AAA comentado:

  // Teste 1 — Value Object Dinheiro
  [Fact]
  public void Criar_ValorNegativo_LancaException()
  {
    // Arrange — nada a preparar, argumento inline
    // Act
    var act = () => new Dinheiro(-100, "BRL");
    // Assert
    act.Should().Throw<DomainException>()
       .WithMessage("*valor*negativo*");
  }

  // Teste 2 — comportamento da Conta
  [Fact]
  public void Depositar_ValorPositivo_AumentaSaldo()
  {
    // Arrange
    var conta = Conta.Abrir(new Cpf("529.982.247-25"), Dinheiro.BRL(0));
    var deposito = Dinheiro.BRL(100);
    // Act
    conta.Depositar(deposito);
    // Assert
    conta.Saldo.Should().Be(Dinheiro.BRL(100));
  }

  // Teste 3 — falha de negócio com Result Pattern
  [Fact]
  public void Sacar_SaldoInsuficiente_RetornaFalha()
  {
    // Arrange
    var conta = Conta.Abrir(new Cpf("529.982.247-25"), Dinheiro.BRL(50));
    // Act
    var resultado = conta.Sacar(Dinheiro.BRL(100));
    // Assert
    resultado.IsSuccess.Should().BeFalse();
    resultado.Error.Should().Contain("saldo insuficiente");
  }

  // Teste 4 — Value Object equality
  [Fact]
  public void Dinheiro_MesmoValorMesmaMoeda_SaoIguais()
  {
    // Arrange & Act
    var d1 = Dinheiro.BRL(100);
    var d2 = Dinheiro.BRL(100);
    // Assert
    d1.Should().Be(d2); // record equality
  }

  runCommand: "dotnet test --logger 'console;verbosity=detailed'"

checklist:
  - Criar o projeto SistemaFinanceiro.Tests com dotnet new xunit
  - Adicionar referência ao projeto Domain
  - Instalar FluentAssertions: dotnet add package FluentAssertions
  - Implementar os 4 testes do exemplo e rodar dotnet test
  - Escrever mais 3 testes para o Value Object Cpf (válido, inválido, formatação)

quiz:
  Q1: O que significa um teste ser "determinístico"?
      [Roda mais rápido com mais CPU, Sempre produz o mesmo resultado nas mesmas
       condições — não depende de hora do dia, dados aleatórios não semeados,
       ordem de outros testes ou estado externo,
       Tem exatamente 3 assertions, Usa apenas tipos primitivos]
      Resposta: 1
      Explicação: Testes não-determinísticos são piores que nenhum teste — você
      não confia neles e passa a ignorar as falhas, que é exatamente o oposto
      do objetivo.

  Q2: Por que nomear um teste "Sacar_SaldoInsuficiente_RetornaFalha" é melhor
      que "TestarSaque"?
      [É mais curto, O nome documenta o comportamento: qual método, qual cenário
       e qual resultado esperado — quando falhar, você sabe exatamente o que
       quebrou sem ler o código,
       xUnit exige esse padrão, TestarSaque não compila]
      Resposta: 1
      Explicação: Testes são documentação viva. Um nome descritivo faz o relatório
      de falha ser autoexplicativo em um pipeline de CI/CD.

  Q3: Qual a principal diferença entre xUnit e NUnit/MSTest?
      [xUnit é mais antigo, xUnit instancia uma nova classe de teste para cada
       método [Fact] — isolamento nativo. Não tem [SetUp]/[TestInitialize]
       encorajando uso de construtor e IDisposable, que são mais explícitos,
       xUnit só roda no .NET 8, xUnit não suporta testes assíncronos]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 13.2 — xUnit: Facts, Theories e Data-Driven
════════════════════════════════════════════════════
theory:
  [Fact] vs [Theory]: Fact testa um único cenário; Theory testa o mesmo
  comportamento com múltiplos conjuntos de dados.
  [InlineData]: dados inline simples e diretos.
  [MemberData]: dados de propriedade estática — para casos mais complexos.
  [ClassData]: dados de classe separada — para reutilização entre testes.
  Por que Theory evita duplicação: 10 cenários em 1 método vs 10 métodos idênticos.
  [Fact(Skip = "motivo")] e [Fact(DisplayName = "nome legível")].
  Testes assíncronos: [Fact] com async Task — xUnit suporta nativamente.
  ITestOutputHelper: logging dentro de testes sem Console.WriteLine.
  CollectionFixture vs ClassFixture — quando setup compartilhado faz sentido.

code:
  // Theory com InlineData — testando CPF com múltiplos casos
  [Theory]
  [InlineData("529.982.247-25", true)]   // CPF válido
  [InlineData("000.000.000-00", false)]   // todos zeros
  [InlineData("111.111.111-11", false)]   // todos iguais
  [InlineData("123.456.789-09", false)]   // sequencial inválido
  [InlineData("", false)]                 // vazio
  public void Cpf_Validar_RetornaResultadoCorreto(string numero, bool esperado)
  {
    var resultado = Cpf.EhValido(numero);
    resultado.Should().Be(esperado);
  }

  // Theory com MemberData — testando operações de Dinheiro
  public static IEnumerable<object[]> CenariosTransferencia =>
    new List<object[]>
    {
      new object[] { Dinheiro.BRL(1000), Dinheiro.BRL(500), true, Dinheiro.BRL(500) },
      new object[] { Dinheiro.BRL(100),  Dinheiro.BRL(200), false, Dinheiro.BRL(100) },
    };

  [Theory]
  [MemberData(nameof(CenariosTransferencia))]
  public void Sacar_Cenarios_RetornaResultadoCorreto(
    Dinheiro saldoInicial, Dinheiro valorSaque, bool sucesso, Dinheiro saldoFinal)
  {
    var conta = Conta.Abrir(CpfValido, saldoInicial);
    var resultado = conta.Sacar(valorSaque);
    resultado.IsSuccess.Should().Be(sucesso);
    if (sucesso) conta.Saldo.Should().Be(saldoFinal);
  }

  // Teste assíncrono
  [Fact]
  public async Task BuscarConta_IdExistente_RetornaConta()
  {
    var resultado = await _repository.GetByIdAsync(ContaIdExistente);
    resultado.Should().NotBeNull();
  }

checklist:
  - Converter 3 testes [Fact] duplicados em 1 [Theory] com [InlineData]
  - Criar um [Theory] com [MemberData] para os cenários de Dinheiro
  - Escrever um teste assíncrono para um UseCase do Sistema Financeiro
  - Usar ITestOutputHelper para logar o saldo calculado no teste
  - Rodar dotnet test --filter "FullyQualifiedName~Cpf" para filtrar testes

quiz:
  Q1: Quando usar [Theory] em vez de múltiplos [Fact]?
      [Sempre — Theory é mais moderno, Quando o mesmo comportamento precisa
       ser verificado com múltiplos conjuntos de entrada/saída — evita
       duplicação de código de teste,
       Apenas para testes de performance, Quando o teste é assíncrono]
      Resposta: 1

  Q2: Qual a vantagem de [MemberData] sobre [InlineData]?
      [InlineData é mais lento, MemberData permite dados complexos (objetos,
       listas, tipos customizados) que não podem ser expressos como atributos
       (que só aceitam constantes em compile time),
       MemberData roda em paralelo, InlineData não funciona com strings]
      Resposta: 1

  Q3: Como rodar apenas os testes de um namespace específico no terminal?
      [dotnet test --class Namespace, dotnet test --filter "FullyQualifiedName~NomeDoNamespace"
       — o filtro aceita expressões como ~contém, =igual, !não,
       dotnet test --namespace X, Não é possível filtrar por namespace]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 13.3 — FluentAssertions: assertions expressivas
════════════════════════════════════════════════════
theory:
  Por que FluentAssertions: mensagens de erro descritivas, sintaxe fluent,
  assertions compostas, extensibilidade. Comparação de mensagem de falha:
  Assert.Equal(esperado, atual) vs esperado.Should().Be(atual) —
  a segunda diz "esperava X mas foi Y" com contexto completo.
  Assertions de igualdade: Be, NotBe, BeEquivalentTo (deep equality).
  Assertions de coleções: HaveCount, Contain, BeEmpty, AllSatisfy, ContainSingle.
  Assertions de exceção: Throw<T>, ThrowAsync<T>, NotThrow, WithMessage.
  Assertions de string: StartWith, EndWith, Contain, MatchRegex, BeNullOrEmpty.
  Assertions de tipo: BeOfType<T>, BeAssignableTo<T>, BeNull, NotBeNull.
  Assertions numéricas: BeGreaterThan, BeInRange, BeApproximately (para decimais).
  Assertions de tempo: BeCloseTo, BeAfter, BeBefore.
  Assertions compostas com And: valor.Should().BePositive().And.BeLessThan(1000).
  Custom assertions: como estender FluentAssertions para o domínio financeiro.

code:
  // Demonstração de CADA categoria de assertion no contexto financeiro

  // Igualdade — Value Objects
  saldo.Should().Be(Dinheiro.BRL(500));
  saldo.Should().NotBe(Dinheiro.BRL(0));

  // Exceções com mensagem
  var act = () => new Dinheiro(-1, "BRL");
  act.Should().Throw<DomainException>()
     .WithMessage("*valor*")
     .And.WithInnerException<ArgumentException>();

  // Coleções — Transações
  transacoes.Should().HaveCount(3);
  transacoes.Should().Contain(t => t.Tipo == TipoTransacao.Debito);
  transacoes.Should().AllSatisfy(t => t.Valor.Should().BeGreaterThan(Dinheiro.BRL(0)));
  transacoes.Should().ContainSingle(t => t.Id == transacaoId);

  // Result Pattern
  resultado.Should().Match<Result<ContaId>>(r => r.IsSuccess);
  resultado.Error.Should().BeNullOrEmpty();

  // String assertions
  conta.Numero.Should().MatchRegex(@"^\d{5}-\d{1}$");

  // Numéricas com tolerância (para cálculos de juros)
  jurosCalculados.Valor.Should().BeApproximately(15.32m, precision: 0.01m);

  // Custom assertion para o domínio
  // Extensão: conta.Should().TerSaldoSuficientePara(Dinheiro.BRL(100))

checklist:
  - Substituir todos os Assert.Equal/Assert.True por FluentAssertions equivalentes
  - Escrever um teste que verifica uma coleção de transações com AllSatisfy
  - Escrever um teste de exceção com WithMessage para uma DomainException
  - Usar BeApproximately para testar um cálculo de juros com arredondamento
  - Criar uma custom assertion: ContaAssertions com TerSaldoPositivo()

quiz:
  Q1: Por que "valor.Should().BeGreaterThan(0)" é melhor que "Assert.True(valor > 0)"?
      [FluentAssertions é mais rápido, A mensagem de falha do FluentAssertions
       diz "Expected valor to be greater than 0, but found -50" — muito mais
       informativo que "Expected: True, But was: False",
       Assert.True não compila, É apenas preferência de sintaxe sem diferença]
      Resposta: 1

  Q2: Quando usar BeEquivalentTo em vez de Be?
      [São idênticos, BeEquivalentTo faz comparação profunda de propriedades
       (deep equality) — ideal para DTOs, objetos anônimos e classes sem
       override de Equals. Be usa Equals() do objeto,
       BeEquivalentTo é para strings, Be é para números,
       BeEquivalentTo é mais lento e deve ser evitado]
      Resposta: 1

  Q3: Como verificar que uma lista contém exatamente um elemento que satisfaz
      uma condição?
      [list.Should().Contain(x => x.Ativo), list.Should().ContainSingle(x => x.Ativo)
       — ContainSingle falha se houver zero ou mais de um elemento satisfazendo
       a condição, tornando o teste mais preciso,
       list.Should().HaveCount(1), list.Count.Should().Be(1)]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 13.4 — Cobertura de código: o que medir e o que ignorar
════════════════════════════════════════════════════
theory:
  Cobertura não é qualidade — 100% de cobertura com assertions fracas é pior
  que 70% com assertions sólidas. A métrica certa é "confidence", não "coverage".
  Line Coverage vs Branch Coverage vs Path Coverage — diferenças práticas.
  O que vale a pena cobrir: Domain (Value Objects, Entities, Domain Services),
  Application (Use Cases com lógica de fluxo), regras de negócio complexas.
  O que NÃO vale a pena cobrir: getters/setters triviais, Program.cs, DI config,
  migrations, DTOs sem lógica, mapeamentos automáticos.
  Como gerar relatório de cobertura no .NET:
    dotnet add package coverlet.collector
    dotnet test --collect:"XPlat Code Coverage"
    reportgenerator -reports:coverage.cobertura.xml -targetdir:coveragereport
  Como excluir do relatório: [ExcludeFromCodeCoverage] e .globalconfig.
  Meta de 80%: não como fim, mas como sintoma de uma suite saudável.
  Como SonarCloud usa cobertura (preview da Fase 7 — Quality Gates).

code:
  // Configuração completa para cobertura no projeto
  // Directory.Build.props para todos os projetos de teste:
  <PropertyGroup>
    <CollectCoverage>true</CollectCoverage>
    <CoverletOutputFormat>cobertura</CoverletOutputFormat>
    <Exclude>[*.Tests]*</Exclude>
    <ExcludeByAttribute>ExcludeFromCodeCoverage</ExcludeByAttribute>
  </PropertyGroup>

  // Como excluir Program.cs e infraestrutura do relatório
  [assembly: ExcludeFromCodeCoverage]  // no topo do arquivo

  // Script shell para gerar relatório HTML completo:
  dotnet test /p:CollectCoverage=true /p:CoverletOutputFormat=cobertura
  dotnet tool install -g dotnet-reportgenerator-globaltool
  reportgenerator -reports:"**/coverage.cobertura.xml" \
    -targetdir:"coveragereport" -reporttypes:Html

  // Resultado: abrir coveragereport/index.html no browser

checklist:
  - Instalar coverlet.collector no projeto de testes
  - Rodar dotnet test com coleta de cobertura
  - Instalar e executar reportgenerator para HTML
  - Abrir o relatório e identificar as branches não cobertas
  - Adicionar [ExcludeFromCodeCoverage] no Program.cs e nas Migrations

quiz:
  Q1: Por que 100% de cobertura não significa que o código está bem testado?
      [Significa sim, Cobertura mede quais linhas foram executadas durante os
       testes, não se as assertions verificam os comportamentos corretos —
       um teste que executa o código mas não verifica nada conta como cobertura,
       100% é impossível de alcançar, Apenas Branch Coverage importa]
      Resposta: 1

  Q2: Qual parte do código-fonte tem mais retorno no investimento em testes?
      [Program.cs e configuração de DI, Domain e Application — onde vivem
       as regras de negócio, Value Objects e Use Cases que têm comportamento
       real a verificar. Infrastructure e DTOs têm pouco retorno,
       Controllers — são o ponto de entrada, Migrations — garantem o schema]
      Resposta: 1

  Q3: Qual a diferença entre Line Coverage e Branch Coverage?
      [São iguais, Line Coverage conta se uma linha foi executada.
       Branch Coverage verifica se TODOS os caminhos de uma condição foram
       testados (o if-true E o if-false) — branch coverage é mais rigoroso
       e encontra mais buracos na suite,
       Branch Coverage é mais rápido de calcular, Line Coverage é obsoleto]
      Resposta: 1

Entregue o .jsx completo ao final.
```

---

### 🔧 PROMPT F4-3 — Módulo 14 (Mocks e Isolamento com Moq)

```
[CONTEXTO: Fase 4 — Etapa F4-3: Módulo 14 — Mocks e Isolamento com Moq]
[ENTRADA: Cole aqui o .jsx completo após F4-2]

Substitua o conteúdo placeholder dos 4 tópicos do Módulo 14.
Alvo: testar os Domain Services e Use Cases do Sistema Financeiro
sem banco de dados, sem email, sem dependências externas.

════════════════════════════════════════════════════
TÓPICO 14.1 — Doubles de teste: Stub, Mock, Fake, Spy
════════════════════════════════════════════════════
theory:
  O vocabulário preciso que diferencia um desenvolvedor pleno de um sênior.
  Todos são "test doubles" — substitutos de dependências reais nos testes.

  Dummy: passado mas nunca usado — satisfaz assinatura sem importar o valor.
  Stub: retorna respostas pré-configuradas — sem verificar se foi chamado.
    Quando usar: simular retorno de repositório (conta existe, conta não existe).
  Fake: implementação funcional simplificada — InMemoryRepository é um Fake.
    Quando usar: quando Stub fica complexo demais, testes de integração leves.
  Mock: verifica interações — foi chamado? Com quais argumentos? Quantas vezes?
    Quando usar: verificar que um serviço de notificação foi disparado.
  Spy: Mock que ainda chama o código real — raro e arriscado.
    Quando usar: quase nunca em código novo.

  Armadilha clássica: mockar tudo vs mockar nada.
  Regra prática: mock de saídas (email, SMS, eventos externos), stub de entradas
  (repositório, dados), fake para repositórios com lógica.
  Sobrespecificação: verificar demais com mocks acopla o teste à implementação.

code:
  // Stub manual — sem Moq ainda
  class ContaRepositoryStub : IContaRepository
  {
    private readonly Conta _contaParaRetornar;
    public ContaRepositoryStub(Conta conta) => _contaParaRetornar = conta;
    public Task<Conta?> GetByIdAsync(ContaId id) =>
      Task.FromResult<Conta?>(_contaParaRetornar);
    // demais métodos com NotImplementedException — stub só implementa o necessário
  }

  // Fake — InMemoryContaRepository funcional
  class InMemoryContaRepository : IContaRepository
  {
    private readonly Dictionary<ContaId, Conta> _store = new();
    public Task<Conta?> GetByIdAsync(ContaId id) =>
      Task.FromResult(_store.GetValueOrDefault(id));
    public Task AddAsync(Conta conta) { _store[conta.Id] = conta; return Task.CompletedTask; }
    public Task SaveChangesAsync() => Task.CompletedTask;
  }

  // Diferença na prática: quando usar cada um no contexto financeiro

checklist:
  - Criar o InMemoryContaRepository para usar nos testes do UseCase
  - Escrever um teste com Stub manual que retorna conta específica
  - Escrever o mesmo teste com Fake (InMemory) e comparar complexidade
  - Identificar no Sistema Financeiro: quais dependências são stub e quais são mock?
  - Documentar em comentário de teste: "// usando Stub pois não verifico chamadas"

quiz:
  Q1: Qual a diferença entre Stub e Mock?
      [São sinônimos, Stub retorna respostas pré-configuradas sem verificar
       se foi chamado; Mock verifica interações — se foi chamado, com quais
       argumentos e quantas vezes,
       Mock é mais rápido que Stub, Stub só funciona com interfaces]
      Resposta: 1

  Q2: Quando um InMemoryRepository é preferível a um Mock de repositório?
      [Nunca — Mock é sempre melhor, Quando a lógica do teste envolve
       múltiplas operações de leitura/escrita onde um Mock ficaria complexo
       e frágil — InMemory mantém estado real e o teste fica mais legível,
       InMemory só funciona com SQL, Mock de repositório não é possível]
      Resposta: 1

  Q3: O que significa "sobrespecificação" em testes com mocks?
      [Criar mocks demais, Verificar detalhes de implementação (quantas vezes
       um método interno foi chamado, quais parâmetros internos foram passados)
       que tornam o teste frágil — ele falha quando a implementação muda,
       mesmo que o comportamento externo continue correto,
       Ter mais asserts que o necessário, Usar Mock quando Stub bastaria]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 14.2 — Moq: Setup, Returns, Verify e Callbacks
════════════════════════════════════════════════════
theory:
  Por que Moq: menos código de boilerplate que implementação manual.
  Instalação: dotnet add package Moq
  Mock<T>: cria um mock de qualquer interface ou classe virtual.
  Setup().Returns(): configura o retorno para uma chamada específica.
  Setup().ReturnsAsync(): para métodos assíncronos.
  Setup().Throws<T>(): simula exceção lançada pela dependência.
  It.IsAny<T>(): qualquer argumento — cuidado com sobrespecificação.
  It.Is<T>(predicate): argumento que satisfaz condição.
  Verify(): verifica que o método foi chamado (opcionalmente: N vezes, com args).
  VerifyNoOtherCalls(): nenhuma chamada não configurada ocorreu.
  Times: Once, Exactly(n), AtLeastOnce, Never.
  Callbacks com .Callback(): executar código quando mock é chamado.
  MockBehavior.Strict vs Loose: Strict falha em chamadas não configuradas.

code:
  // Setup completo para o UseCase de Transferência
  var mockContaRepo = new Mock<IContaRepository>();
  var mockNotificacao = new Mock<INotificacaoService>();

  var contaOrigem = Conta.Abrir(cpfOrigem, Dinheiro.BRL(1000));
  var contaDestino = Conta.Abrir(cpfDestino, Dinheiro.BRL(0));

  mockContaRepo
    .Setup(r => r.GetByIdAsync(contaOrigem.Id))
    .ReturnsAsync(contaOrigem);

  mockContaRepo
    .Setup(r => r.GetByIdAsync(contaDestino.Id))
    .ReturnsAsync(contaDestino);

  mockContaRepo
    .Setup(r => r.SaveChangesAsync())
    .Returns(Task.CompletedTask);

  // Act
  var useCase = new RealizarTransferenciaUseCase(
    mockContaRepo.Object, mockNotificacao.Object);
  var resultado = await useCase.ExecuteAsync(command);

  // Assert comportamento
  resultado.IsSuccess.Should().BeTrue();

  // Assert interações (o que o Mock é para)
  mockNotificacao.Verify(
    n => n.NotificarAsync(It.Is<ContaId>(id => id == contaOrigem.Id)),
    Times.Once,
    "Notificação deveria ter sido disparada para a conta de origem"
  );

  mockContaRepo.Verify(r => r.SaveChangesAsync(), Times.Once);

checklist:
  - Instalar Moq: dotnet add package Moq
  - Reescrever os testes do UseCase de Transferência usando Mock<IContaRepository>
  - Usar It.Is<> para verificar que SaveChanges foi chamado após a transferência
  - Testar o cenário onde o repositório lança exceção (Setup().Throws<>)
  - Comparar: mesmo teste com Stub manual vs com Moq — qual é mais claro?

quiz:
  Q1: Qual a diferença entre Setup().Returns() e Verify()?
      [São a mesma operação, Setup().Returns() configura o que o mock retorna
       quando chamado (comportamento); Verify() verifica após o Act que uma
       chamada específica ocorreu (assertion de interação),
       Returns() é para interfaces, Verify() é para classes,
       Verify() pode substituir Returns()]
      Resposta: 1

  Q2: Quando usar It.IsAny<T>() e quando usar It.Is<T>(predicate)?
      [Sempre usar IsAny para simplicidade, It.IsAny<T>() quando o valor
       específico não importa para o teste. It.Is<T>(pred) quando o teste
       precisa verificar que a chamada ocorreu com um argumento específico
       — mais preciso, menos frágil que IsAny quando o argumento importa,
       It.Is<T> só funciona com tipos primitivos,
       Usar apenas It.IsAny<T> no Arrange e It.Is<T> no Verify]
      Resposta: 1

  Q3: O que é MockBehavior.Strict e quando é útil?
      [Desabilita o mock, Qualquer chamada não configurada com Setup() lança
       exceção — garante que o teste documenta TODAS as interações esperadas.
       Útil para detectar chamadas inesperadas à dependência,
       Só funciona com classes abstratas,
       É o comportamento padrão do Moq]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 14.3 — Testando Domain Services e Use Cases
════════════════════════════════════════════════════
theory:
  A estratégia de teste por camada — o que testar em cada uma:
  Domain (Value Objects, Entities): testes puros, sem Mock, sem Moq.
    Apenas cria objetos de domínio, chama métodos, assert no resultado.
    São os mais rápidos e os mais valiosos.
  Domain Services: quase sempre pure — se precisar de Mock, revisar o design.
  Application (Use Cases): aqui Moq brilha — mockar repositórios, serviços externos.
    Testar os 3 caminhos: sucesso, falha de validação de negócio, exceção inesperada.
  Infrastructure: testes de integração (Módulo 15 — não aqui).
  Controllers: WebApplicationFactory (Módulo 15 — não aqui).

  Padrão de organização de testes por camada (espelho do projeto):
  SistemaFinanceiro.Tests/
  ├── Domain/
  │   ├── ContaTests.cs
  │   ├── DinheiroTests.cs
  │   └── CpfTests.cs
  ├── Application/
  │   ├── AbrirContaUseCaseTests.cs
  │   ├── RealizarTransferenciaUseCaseTests.cs
  │   └── GerarExtratoUseCaseTests.cs
  └── Integration/   (módulo 15)

  Arrange com objetos de domínio reais vs Arrange com Mocks:
  Quando criar Conta real (Domain tests) vs quando mockar IContaRepository (Application tests).

code:
  // 3 testes completos para RealizarTransferenciaUseCase

  // Cenário 1 — sucesso
  [Fact]
  public async Task Execute_TransferenciaValida_DebitaOrigemCreditaDestino()
  {
    // Arrange
    var contaOrigem = Conta.Abrir(CpfFixture.Valido(), Dinheiro.BRL(500));
    var contaDestino = Conta.Abrir(CpfFixture.Outro(), Dinheiro.BRL(0));
    var repo = new Mock<IContaRepository>();
    repo.Setup(r => r.GetByIdAsync(contaOrigem.Id)).ReturnsAsync(contaOrigem);
    repo.Setup(r => r.GetByIdAsync(contaDestino.Id)).ReturnsAsync(contaDestino);
    var sut = new RealizarTransferenciaUseCase(repo.Object, Mock.Of<INotificacaoService>());
    var cmd = new RealizarTransferenciaCommand(contaOrigem.Id, contaDestino.Id, Dinheiro.BRL(300));

    // Act
    var resultado = await sut.ExecuteAsync(cmd);

    // Assert
    resultado.IsSuccess.Should().BeTrue();
    contaOrigem.Saldo.Should().Be(Dinheiro.BRL(200));
    contaDestino.Saldo.Should().Be(Dinheiro.BRL(300));
    repo.Verify(r => r.SaveChangesAsync(), Times.Once);
  }

  // Cenário 2 — falha de negócio
  [Fact]
  public async Task Execute_SaldoInsuficiente_RetornaFalha()

  // Cenário 3 — conta não encontrada
  [Fact]
  public async Task Execute_ContaOrigemNaoEncontrada_RetornaFalha()

checklist:
  - Criar a estrutura de pastas Domain/ e Application/ dentro do projeto de testes
  - Implementar os 3 cenários do UseCase de Transferência
  - Garantir que os testes de Domain (ContaTests) não usam nenhum Mock
  - Criar pelo menos 5 testes para o Value Object Dinheiro (somas, subtrações, moedas)
  - Rodar dotnet test e garantir 100% de pass nos testes de unidade

quiz:
  Q1: Por que testes de Domain (Value Objects, Entities) não precisam de Moq?
      [Domain é mais simples, Objetos de domínio bem modelados com DDD não têm
       dependências externas — são funções puras que recebem entrada e produzem
       saída, tornando os testes diretos e sem necessidade de doubles,
       Moq não funciona com records, Domain não tem métodos testáveis]
      Resposta: 1

  Q2: Qual dos 3 cenários de um Use Case é mais frequentemente esquecido?
      [O cenário de sucesso, O cenário de exceção inesperada (repositório fora
       do ar, timeout) — desenvolvedores testam sucesso e falha de negócio,
       mas esquecem de testar o que acontece quando a infraestrutura falha,
       O cenário de falha de validação, Todos são igualmente esquecidos]
      Resposta: 1

  Q3: Como organizar os arquivos de teste para espelhar a estrutura do projeto?
      [Tudo em uma pasta Tests/, Espelhar a estrutura de namespaces — Domain/,
       Application/, Integration/ dentro do projeto de testes, facilitando
       encontrar o teste de qualquer classe de produção,
       Organizar por tipo de teste (UnitTests/, IntegrationTests/),
       Não há padrão estabelecido]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 14.4 — AutoFixture e Builder Pattern para dados de teste
════════════════════════════════════════════════════
theory:
  O problema: criar objetos de domínio nos testes é verboso e frágil.
  Quando uma Entity ganha um novo campo obrigatório, 50 testes quebram.

  AutoFixture: gera dados de teste aleatórios automaticamente.
  Instalação: dotnet add package AutoFixture e AutoFixture.Xunit2.
  [AutoData]: injeta dados gerados automaticamente no [Theory].
  Customização: Fixture.Customize<T>() para controlar a geração.
  AutoFixture com Moq: AutoMoqCustomization para criar mocks automaticamente.

  Builder Pattern para objetos de domínio:
  ContaBuilder — fluent API específica do domínio para criar Contas em testes.
  Vantagem sobre AutoFixture: usa a Linguagem Ubíqua do domínio,
  mais legível nos testes, resiliente a mudanças de construtor.
  Quando usar cada: AutoFixture para dados irrelevantes ao teste;
  Builder para objetos cujos valores importam para o comportamento testado.

  ObjectMother Pattern: objetos pré-construídos reutilizáveis (ContaFixtures.ComSaldoPositivo()).

code:
  // Builder para Conta — fluent e legível
  class ContaBuilder
  {
    private Cpf _cpf = new Cpf("529.982.247-25");
    private Dinheiro _saldo = Dinheiro.BRL(1000);
    private StatusConta _status = StatusConta.Ativa;

    public ContaBuilder ComSaldo(decimal valor) { _saldo = Dinheiro.BRL(valor); return this; }
    public ContaBuilder Bloqueada() { _status = StatusConta.Bloqueada; return this; }
    public ContaBuilder ComCpf(string cpf) { _cpf = new Cpf(cpf); return this; }
    public Conta Build() => Conta.Abrir(_cpf, _saldo); // aplica status depois

    // Uso nos testes:
    // var conta = new ContaBuilder().ComSaldo(500).Build();
    // var contaBloqueada = new ContaBuilder().Bloqueada().Build();
  }

  // ObjectMother
  static class ContaFixtures
  {
    public static Conta ComSaldoPositivo() => new ContaBuilder().ComSaldo(1000).Build();
    public static Conta Zerada() => new ContaBuilder().ComSaldo(0).Build();
    public static Conta Bloqueada() => new ContaBuilder().Bloqueada().Build();
  }

  // AutoFixture com [AutoData] para dados irrelevantes
  [Theory, AutoData]
  public void AlgumTeste_DadosIrrelevantes_Comportamento(
    string nomeQualquer, int valorQualquer)
  {
    // AutoFixture gerou os valores — o teste não se importa com quais
  }

checklist:
  - Instalar AutoFixture e AutoFixture.Xunit2
  - Criar ContaBuilder com pelo menos 4 métodos fluentes
  - Criar ContaFixtures com 3 objetos pré-construídos
  - Refatorar 5 testes para usar ContaBuilder em vez de criação manual
  - Usar [AutoData] em um teste onde os dados de entrada não importam

quiz:
  Q1: Qual a vantagem do Builder Pattern sobre criar objetos de domínio diretamente?
      [Builder é mais rápido, Centraliza a criação — quando o construtor da Entity
       muda (novo campo obrigatório), só o Builder precisa ser atualizado,
       não todos os 50 testes que criam a Entity,
       Builder gera dados aleatórios automaticamente,
       Builder é necessário para usar Moq]
      Resposta: 1

  Q2: Quando AutoFixture é preferível ao Builder Pattern?
      [Sempre — AutoFixture é mais moderno, Para dados cujos valores específicos
       não influenciam o comportamento testado — AutoFixture os gera aleatoriamente,
       tornando explícito que o teste não se importa com aqueles valores,
       Para objetos de domínio complexos, Para dados de banco de dados]
      Resposta: 1

  Q3: O que é o ObjectMother Pattern?
      [Um pattern para criar bancos de dados de teste, Uma coleção de factory
       methods estáticos que criam objetos com configurações nomeadas e reutilizáveis
       (ContaFixtures.Bloqueada(), ContaFixtures.ComSaldoPositivo()) — reduz
       duplicação e documenta os cenários de teste,
       Um tipo especial de Mock, O mesmo que Builder Pattern]
      Resposta: 1

Entregue o .jsx completo ao final.
```

---

### 🔧 PROMPT F4-4 — Módulo 15 (Testes de Integração)

```
[CONTEXTO: Fase 4 — Etapa F4-4: Módulo 15 — Testes de Integração]
[ENTRADA: Cole aqui o .jsx completo após F4-3]

Substitua o conteúdo placeholder dos 4 tópicos do Módulo 15.
Aqui os testes saem do isolamento puro e testam componentes reais integrados.

REGRA ESPECIAL DESTE MÓDULO:
Todo exemplo deve incluir o docker pull ou docker run necessário para o TestContainer.
O aluno precisa ter Docker instalado — mencionar isso no theory de 15.2.

════════════════════════════════════════════════════
TÓPICO 15.1 — WebApplicationFactory e TestServer
════════════════════════════════════════════════════
theory:
  A diferença entre teste de unidade e integração: integração testa como os
  componentes trabalham JUNTOS, com dependências reais ou próximas do real.
  WebApplicationFactory<TProgram>: sobe a aplicação ASP.NET Core em memória.
  Sem abrir uma porta real, sem precisar de um servidor separado.
  CreateClient(): retorna um HttpClient que faz requisições ao servidor em memória.
  Por que é poderoso: testa os middlewares, o routing, a DI, a serialização JSON,
  e os controllers — tudo junto, em um teste que roda em milissegundos.
  Customização da factory: sobrescrever DI para trocar banco real por InMemory.
  ConfigureTestServices: registrar mocks ou fakes específicos para testes.
  IClassFixture<WebApplicationFactory<Program>>: factory compartilhada entre
  testes da mesma classe — performance.
  Quando usar: testar a camada HTTP completa sem banco real (use InMemory aqui).
  Quando NÃO usar: quando precisa de banco real (TestContainers — próximo tópico).

code:
  // WebApplicationFactory customizada para o Sistema Financeiro
  class SistemaFinanceiroWebFactory : WebApplicationFactory<Program>
  {
    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
      builder.ConfigureTestServices(services =>
      {
        // Remove o DbContext real
        services.RemoveAll<DbContextOptions<FinanceiroDbContext>>();
        // Adiciona InMemory para testes
        services.AddDbContext<FinanceiroDbContext>(opt =>
          opt.UseInMemoryDatabase($"TestDb_{Guid.NewGuid()}"));
      });
    }
  }

  // Teste de integração do ContasController
  public class ContasControllerIntegrationTests
    : IClassFixture<SistemaFinanceiroWebFactory>
  {
    private readonly HttpClient _client;

    public ContasControllerIntegrationTests(SistemaFinanceiroWebFactory factory)
      => _client = factory.CreateClient();

    [Fact]
    public async Task POST_AbrirConta_DadosValidos_Retorna201()
    {
      // Arrange
      var request = new { Cpf = "529.982.247-25", Nome = "João Silva",
                          Email = "joao@email.com", SaldoInicial = 0 };
      // Act
      var response = await _client.PostAsJsonAsync("/api/contas", request);
      // Assert
      response.StatusCode.Should().Be(HttpStatusCode.Created);
      var body = await response.Content.ReadFromJsonAsync<AbrirContaResponse>();
      body!.ContaId.Should().NotBeEmpty();
    }

    [Fact]
    public async Task POST_AbrirConta_CpfInvalido_Retorna400()

    [Fact]
    public async Task GET_Extrato_ContaNaoExiste_Retorna404()
  }

checklist:
  - Criar projeto de integração: dotnet new xunit -n SistemaFinanceiro.IntegrationTests
  - Implementar SistemaFinanceiroWebFactory com InMemory database
  - Criar os 3 testes do ContasController
  - Adicionar autenticação JWT ao CreateClient() para endpoints protegidos
  - Rodar dotnet test e verificar que os testes sobem a aplicação corretamente

quiz:
  Q1: Qual a vantagem de WebApplicationFactory sobre chamar a API com HttpClient real?
      [WebApplicationFactory é mais rápida porque usa TCP real, WebApplicationFactory
       sobe a aplicação em memória sem porta de rede — mais rápido, sem conflito
       de portas, sem precisar da API rodando separadamente, ideal para CI/CD,
       WebApplicationFactory só funciona com InMemory database,
       Não há vantagem — preferir HttpClient real]
      Resposta: 1

  Q2: Para que serve ConfigureTestServices na factory customizada?
      [Para adicionar mais testes, Para sobrescrever registros do DI container
       especificamente para os testes — trocar SQL Server real por InMemory,
       substituir serviços de email por mocks, injetar dados de seed,
       Para configurar o servidor HTTP, Para desabilitar middlewares]
      Resposta: 1

  Q3: Por que usar IClassFixture<WebApplicationFactory> em vez de criar uma
      factory por teste?
      [IClassFixture não funciona com WebApplicationFactory, Subir e derrubar a
       aplicação é custoso — IClassFixture compartilha uma única instância entre
       todos os testes da classe, reduzindo o tempo total da suite,
       Para garantir que os testes rodam em série, É apenas convenção]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 15.2 — TestContainers: banco real em testes
════════════════════════════════════════════════════
theory:
  O problema do InMemory: comportamento diferente do SQL Server real
  (sem suporte a transações complexas, sem constraints reais, sem índices).
  TestContainers: sobe um container Docker real durante os testes e o destrói
  ao final — sem configuração manual, sem banco de desenvolvimento contaminado.
  Pré-requisito: Docker instalado e rodando (docker --version).
  Instalação:
    dotnet add package Testcontainers
    dotnet add package Testcontainers.MsSql
  MsSqlContainer: container SQL Server 2022 para testes.
  Integração com xUnit: IAsyncLifetime para Start e DisposeAsync.
  IClassFixture: compartilhar um container entre todos os testes da classe
  evita subir N containers para N testes (lento).
  Migrations em teste: rodar EF Core migrations no banco do container
  antes dos testes.
  Custo de tempo: subir o container leva ~10s — trade-off consciente.

code:
  // Fixture com TestContainers
  public class SqlServerFixture : IAsyncLifetime
  {
    private readonly MsSqlContainer _container = new MsSqlBuilder()
      .WithImage("mcr.microsoft.com/mssql/server:2022-latest")
      .WithPassword("Senha@123TestContainers")
      .Build();

    public string ConnectionString => _container.GetConnectionString();

    public async Task InitializeAsync()
    {
      await _container.StartAsync();
      // Aplicar migrations no banco do container
      var options = new DbContextOptionsBuilder<FinanceiroDbContext>()
        .UseSqlServer(ConnectionString).Options;
      await using var ctx = new FinanceiroDbContext(options);
      await ctx.Database.MigrateAsync();
    }

    public Task DisposeAsync() => _container.DisposeAsync().AsTask();
  }

  // Teste usando o banco SQL Server real via container
  public class ContaRepositoryIntegrationTests
    : IClassFixture<SqlServerFixture>
  {
    private readonly FinanceiroDbContext _context;

    public ContaRepositoryIntegrationTests(SqlServerFixture fixture)
    {
      var options = new DbContextOptionsBuilder<FinanceiroDbContext>()
        .UseSqlServer(fixture.ConnectionString).Options;
      _context = new FinanceiroDbContext(options);
    }

    [Fact]
    public async Task AddAsync_ContaValida_PersistiuERetornaComId()
    {
      // Arrange
      var repo = new ContaEfRepository(_context);
      var conta = Conta.Abrir(new Cpf("529.982.247-25"), Dinheiro.BRL(500));
      // Act
      await repo.AddAsync(conta);
      await repo.SaveChangesAsync();
      // Assert — busca do banco real, não do InMemory
      var contaSalva = await repo.GetByIdAsync(conta.Id);
      contaSalva.Should().NotBeNull();
      contaSalva!.Saldo.Should().Be(Dinheiro.BRL(500));
    }
  }

  // PRÉ-REQUISITO: docker pull mcr.microsoft.com/mssql/server:2022-latest

checklist:
  - Verificar Docker instalado: docker --version
  - Instalar Testcontainers.MsSql no projeto de integração
  - Criar SqlServerFixture com IAsyncLifetime
  - Implementar o teste de AddAsync com banco real
  - Verificar no Docker Desktop que o container sobe e destrói durante os testes

quiz:
  Q1: Por que TestContainers é superior ao InMemory database para testes de integração?
      [InMemory é mais rápido, TestContainers usa o SQL Server real — suporta
       transações complexas, constraints FK, índices e comportamentos específicos
       do banco que o InMemory não emula, tornando os testes mais fidedignos,
       TestContainers é open source e InMemory não, InMemory não funciona com EF Core]
      Resposta: 1

  Q2: Por que usar IClassFixture com TestContainers?
      [IClassFixture é obrigatório com Docker, Subir um container leva ~10s —
       compartilhar via IClassFixture significa subir UMA VEZ para toda a classe
       de testes, não uma vez por teste,
       Para garantir isolamento entre testes, TestContainers não funciona sem]
      Resposta: 1

  Q3: Como garantir que os testes de integração não contaminam uns aos outros
      quando usam o mesmo container?
      [Não é possível — os testes interferem, Usar transactions e rollback por
       teste (BeginTransaction no setup, não fazer Commit, Dispose faz Rollback)
       OU limpar as tabelas no setup de cada teste,
       Criar um container por teste, Usar IsolationLevel.Serializable]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 15.3 — Testando a API end-to-end (HTTP real)
════════════════════════════════════════════════════
theory:
  Testes end-to-end completos: WebApplicationFactory + TestContainers juntos.
  A stack completa: HTTP request → Controller → Use Case → Repository → SQL Server real.
  Por que é poderoso e custoso: alta fidelidade, lento, difícil de isolar falhas.
  Autenticação em testes: como gerar um JWT válido para endpoints protegidos.
  Gerenciar estado entre testes: cada teste deve ser independente — sem dados
  herdados de testes anteriores. Estratégia: seed por teste ou rollback.
  Testar cenários negativos: 400, 404, 422, 500 com causas reais.
  HttpClient extensions: ReadFromJsonAsync, PostAsJsonAsync, PatchAsJsonAsync.
  Como ler e assert o response body de forma tipada.
  Testes de contrato: verificar que a resposta JSON tem exatamente a estrutura
  esperada (importante para APIs consumidas por times diferentes).

code:
  // Factory completa com TestContainers
  public class IntegrationTestFactory : WebApplicationFactory<Program>, IAsyncLifetime
  {
    private readonly MsSqlContainer _sqlContainer = new MsSqlBuilder()
      .WithImage("mcr.microsoft.com/mssql/server:2022-latest")
      .WithPassword("Senha@Test123!").Build();

    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
      builder.ConfigureTestServices(services =>
      {
        services.RemoveAll<DbContextOptions<FinanceiroDbContext>>();
        services.AddDbContext<FinanceiroDbContext>(opt =>
          opt.UseSqlServer(_sqlContainer.GetConnectionString()));
      });
    }

    public async Task InitializeAsync()
    {
      await _sqlContainer.StartAsync();
      // seed e migration
    }

    public new async Task DisposeAsync() => await _sqlContainer.DisposeAsync();

    // Helper para gerar token JWT de teste
    public string GerarTokenTeste(string role = "usuario") { ... }
  }

  // Testes end-to-end do fluxo completo de transferência
  [Fact]
  public async Task FluxoCompleto_AbrirContasETransferir_SaldosCorretos()
  {
    // Arrange — criar duas contas via API
    var responseOrigem = await _client.PostAsJsonAsync("/api/contas", criarOrigem);
    var contaOrigem = await responseOrigem.Content.ReadFromJsonAsync<AbrirContaResponse>();
    // ... criar destino

    // Act — realizar transferência
    var transferencia = await _client.PostAsJsonAsync("/api/transferencias", new
    {
      ContaOrigemId = contaOrigem!.ContaId,
      ContaDestinoId = contaDestino!.ContaId,
      Valor = 300
    });

    // Assert
    transferencia.StatusCode.Should().Be(HttpStatusCode.OK);

    // Verificar saldos via GET
    var extratoOrigem = await _client.GetFromJsonAsync<ExtratoResponse>(
      $"/api/contas/{contaOrigem.ContaId}/extrato");
    extratoOrigem!.SaldoAtual.Should().Be(200); // 500 - 300
  }

checklist:
  - Criar IntegrationTestFactory combinando WebApplicationFactory + TestContainers
  - Implementar helper GerarTokenTeste para endpoints com [Authorize]
  - Testar o fluxo completo: criar conta → depositar → transferir → checar extrato
  - Testar todos os cenários de erro (400, 404, 422) com dados reais
  - Medir tempo do teste end-to-end e documentar no comentário

quiz:
  Q1: Qual a diferença entre teste de integração com WebApplicationFactory+InMemory
      e com WebApplicationFactory+TestContainers?
      [Não há diferença, InMemory é mais rápido e suficiente para a maioria dos
       casos; TestContainers usa banco real (SQL Server) para capturar
       comportamentos específicos do banco que InMemory não reproduz,
       TestContainers não funciona com WebApplicationFactory,
       InMemory não suporta testes assíncronos]
      Resposta: 1

  Q2: Por que cada teste de integração deve ser independente de estado?
      [É apenas uma convenção sem impacto real, Testes que dependem de ordem
       ou de dados deixados por outros testes são frágeis — falham de forma
       aleatória dependendo da ordem de execução (especialmente em paralelo),
       dificultando diagnóstico,
       xUnit não suporta estado compartilhado, Para melhor performance]
      Resposta: 1

  Q3: O que são testes de contrato de API?
      [Testes que verificam performance, Testes que verificam que a resposta
       JSON tem exatamente a estrutura, tipos e campos esperados pelo consumidor
       da API — crítico quando múltiplos times consomem a mesma API,
       Testes que verificam autenticação, Testes de carga da API]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 15.4 — Fixtures, Collections e gerenciamento de estado
════════════════════════════════════════════════════
theory:
  Ciclo de vida em xUnit: construtor (por teste), IDisposable, IAsyncLifetime.
  IClassFixture<T>: estado compartilhado dentro de UMA classe de teste.
  ICollectionFixture + [Collection]: estado compartilhado entre VÁRIAS classes.
  Quando usar cada:
    Constructor/Dispose: setup leve, por teste (sem I/O)
    IClassFixture: setup custoso compartilhado entre testes da mesma classe (banco, factory)
    ICollectionFixture: recurso único compartilhado entre múltiplas classes (container)
  Paralelismo em xUnit: classes rodam em paralelo por padrão, métodos em série.
  [Collection("NomeDaCollection")]: força serialização entre classes.
  [assembly: CollectionBehavior(DisableTestParallelization = true)]: quando usar.
  Isolamento de dados: rollback via TransactionScope, cleanup explícito, dados únicos por teste.
  Ordered tests (raramente recomendado): quando a ordem realmente importa.

code:
  // Collection Fixture — container único para todos os testes de integração
  [CollectionDefinition("IntegracaoCollection")]
  public class IntegracaoCollectionDefinition
    : ICollectionFixture<IntegrationTestFactory> { }

  // Classe 1 que usa a collection
  [Collection("IntegracaoCollection")]
  public class ContasIntegrationTests
  {
    public ContasIntegrationTests(IntegrationTestFactory factory) { ... }
  }

  // Classe 2 que usa o MESMO container já iniciado
  [Collection("IntegracaoCollection")]
  public class TransferenciasIntegrationTests
  {
    public TransferenciasIntegrationTests(IntegrationTestFactory factory) { ... }
  }

  // Isolamento com TransactionScope por teste
  public class IsolatedDbTest : IAsyncLifetime
  {
    private IDbContextTransaction? _transaction;

    public async Task InitializeAsync()
      => _transaction = await _context.Database.BeginTransactionAsync();

    public async Task DisposeAsync()
      => await _transaction!.RollbackAsync(); // desfaz tudo após cada teste
  }

checklist:
  - Criar IntegracaoCollectionDefinition para compartilhar o container
  - Mover ContasIntegrationTests e TransferenciasIntegrationTests para a mesma collection
  - Implementar isolamento por TransactionScope rollback em um teste
  - Medir o tempo total da suite com dotnet test --logger "console;verbosity=normal"
  - Identificar quais testes rodam em paralelo e quais em série

quiz:
  Q1: Qual a diferença entre IClassFixture e ICollectionFixture?
      [São sinônimos, IClassFixture compartilha estado dentro de UMA classe;
       ICollectionFixture compartilha entre MÚLTIPLAS classes marcadas com
       [Collection("nomeDaCollection")] — útil para um container Docker
       compartilhado entre todos os testes de integração,
       ICollectionFixture é mais rápido, IClassFixture só funciona com mocks]
      Resposta: 1

  Q2: Por que usar TransactionScope rollback em testes de integração?
      [Para melhorar a performance dos testes, Para garantir que cada teste
       começa com banco limpo — a transaction é revertida no Dispose sem
       precisar deletar dados explicitamente, tornando os testes independentes,
       TransactionScope é obrigatório com TestContainers,
       Para testar rollback de transações no código de produção]
      Resposta: 1

  Q3: O que acontece quando duas classes de teste sem [Collection] rodam
      simultaneamente no xUnit?
      [Rodam em série por padrão, Rodam em paralelo — se compartilham estado
       (banco, arquivo, variável estática), podem interferir entre si causando
       falhas intermitentes que são difíceis de reproduzir localmente,
       O xUnit detecta conflitos automaticamente, Apenas métodos rodam em paralelo]
      Resposta: 1

Entregue o .jsx completo ao final.
```

---

### 🔧 PROMPT F4-5 — Módulo 16 (TDD e BDD na Prática)

```
[CONTEXTO: Fase 4 — Etapa F4-5: Módulo 16 — TDD e BDD]
[ENTRADA: Cole aqui o .jsx completo após F4-4]

Substitua o conteúdo placeholder dos 4 tópicos do Módulo 16.
Este módulo é mais prático que teórico — o aluno deve SENTIR o ciclo.

════════════════════════════════════════════════════
TÓPICO 16.1 — TDD: Red-Green-Refactor na prática
════════════════════════════════════════════════════
theory:
  TDD não é sobre testes — é sobre design. Os testes são o subproduto.
  O ciclo obrigatório: Red (escreve teste que falha) → Green (código mínimo
  que faz passar) → Refactor (limpa sem quebrar) → repete.
  Por que Red primeiro: força pensar na interface pública antes da implementação.
  O "código mínimo": return true; é válido se faz o teste passar — a próxima
  iteração adicionará o próximo teste que forçará a implementação real.
  Benefícios reais: design emergente, cobertura automática, refatoração segura,
  especificação executável, feedback em segundos não em dias.
  Quando TDD é difícil: código legado sem testes, infraestrutura pura (UI, banco).
  Outside-in (London School) vs Inside-out (Chicago School) — diferença de abordagem.
  TDD no dia a dia corporativo: kata de prática antes de código de produção.

code:
  Demonstração COMPLETA do ciclo TDD para implementar Conta.Sacar():

  PASSO 1 — Red: escreve o teste (Conta ainda não tem Sacar())
  [Fact]
  public void Sacar_SaldoSuficiente_DebitaSaldo()
  {
    var conta = new ContaBuilder().ComSaldo(500).Build();
    var resultado = conta.Sacar(Dinheiro.BRL(200));  // ← não compila ainda
    resultado.IsSuccess.Should().BeTrue();
    conta.Saldo.Should().Be(Dinheiro.BRL(300));
  }
  // dotnet test → FALHA (não compila) ← esse é o Red esperado

  PASSO 2 — Green: código MÍNIMO que faz passar
  // Na classe Conta:
  public Result Sacar(Dinheiro valor)
  {
    Saldo -= valor;  // implementação mínima, ignora saldo negativo por ora
    return Result.Success();
  }
  // dotnet test → VERDE ✓

  PASSO 3 — Novo teste que force a regra de negócio
  [Fact]
  public void Sacar_SaldoInsuficiente_RetornaFalha()
  {
    var conta = new ContaBuilder().ComSaldo(100).Build();
    var resultado = conta.Sacar(Dinheiro.BRL(500));
    resultado.IsSuccess.Should().BeFalse();  // ← falha com implementação atual
  }
  // dotnet test → VERMELHO ← Red esperado

  PASSO 4 — Green: implementa a validação
  public Result Sacar(Dinheiro valor)
  {
    if (Saldo < valor) return Result.Failure("Saldo insuficiente");
    Saldo -= valor;
    return Result.Success();
  }
  // dotnet test → VERDE ✓

  PASSO 5 — Refactor: extrair constante, melhorar mensagem, verificar nomenclatura

checklist:
  - Implementar uma nova funcionalidade usando TDD puro (sem escrever código antes do teste)
  - Praticar: escrever o teste que não compila, rodar, depois implementar o mínimo
  - Fazer pelo menos 5 iterações Red-Green-Refactor para a funcionalidade escolhida
  - Verificar que 100% dos testes passam após cada Refactor
  - Cronometrar: quanto tempo cada ciclo leva (goal: < 5 minutos por ciclo)

quiz:
  Q1: Por que no TDD o teste deve FALHAR antes de escrever o código de produção?
      [É apenas ritual sem propósito técnico, Garante que o teste realmente
       testa algo — se já passa antes de qualquer implementação, ele não
       está verificando o comportamento correto. Red confirma que o teste
       detectaria uma regressão,
       xUnit exige que testes falhem primeiro, Para documentar o bug]
      Resposta: 1

  Q2: O que significa "código mínimo que faz o teste passar"?
      [Escrever a solução completa e otimizada, Escrever apenas o suficiente
       para passar o teste atual — mesmo que seja return true hardcoded.
       O próximo teste forçará a implementação real, mantendo o foco
       incremental e o design emergente,
       Escrever apenas comentários, Implementar sem try/catch]
      Resposta: 1

  Q3: Qual a diferença entre TDD Outside-in (London) e Inside-out (Chicago)?
      [São nomes para a mesma coisa, Outside-in começa pelos testes de alto
       nível (controller/use case) usando mocks para as camadas inferiores,
       descendo. Inside-out começa pelas unidades menores (Value Objects,
       Entities) subindo para as camadas mais altas,
       Outside-in usa xUnit e Inside-out usa NUnit,
       London School não usa mocks]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 16.2 — Design emergente via TDD
════════════════════════════════════════════════════
theory:
  O benefício menos óbvio do TDD: ele força interfaces limpas.
  "Código difícil de testar é código mal projetado" — se você não consegue
  testar sem subir um banco, a dependência está errada.
  Como TDD revela problemas de design: parâmetros demais, acoplamento,
  SRP violado (mock setup longo = responsabilidade demais).
  O custo do mock setup: se criar o teste exige 20 linhas de setup,
  a classe tem dependências demais — sinal para refatorar o design.
  TDD e SOLID: testar com DI natural leva ao DIP; testar unidades leva ao SRP.
  Listening to the tests: o feedback dos testes sobre o design é mais valioso
  que a verificação do comportamento.
  Quando NÃO deixar o design emergir via TDD: domínios desconhecidos onde
  um spike (protótipo descartável) é melhor que TDD cego.

code:
  Demonstração de como o setup de teste revela problemas de design:

  SETUP LONGO — sinal de problema:
  // 25 linhas de setup para testar ProcessarPedidoService
  // Precisa de: mock DB, mock email, mock SMS, mock auditoria, mock estoque,
  // mock nota fiscal, mock antifraude — 7 dependências
  // DIAGNÓSTICO: ProcessarPedidoService viola SRP — faz demais

  SOLUÇÃO EMERGIDA VIA TDD:
  Dividir em ProcessarPagamentoService (2 dependências),
  NotificarClienteService (2 dependências),
  RegistrarPedidoService (2 dependências) —
  cada um com setup de 5 linhas.

  Regra prática: se o Arrange tem mais de 15 linhas, o código tem design problem.

checklist:
  - Encontrar um teste com Arrange maior que 15 linhas no projeto atual
  - Identificar qual princípio SOLID está sendo violado pela classe testada
  - Refatorar a classe dividindo responsabilidades
  - Verificar que o novo Arrange de cada teste menor cabe em 8 linhas
  - Documentar o insight: "Refatorei X porque o teste revelou Y"

quiz:
  Q1: O que um setup longo de mock em um teste revela sobre o design?
      [Que o teste é complexo — não há problema, Que a classe sob teste tem
       dependências demais, provavelmente violando o SRP — o teste está dando
       feedback sobre o design: simplifique a classe,
       Que Moq está sendo mal utilizado, Que o teste precisa de mais [Theory]]
      Resposta: 1

  Q2: O que significa "listening to the tests" no contexto de TDD?
      [Escutar o output de erros dos testes, Usar a dificuldade de escrever
       testes como feedback sobre a qualidade do design — testes difíceis
       indicam acoplamento, muitas responsabilidades ou dependências erradas,
       Usar logs para debugar testes, Ler a documentação dos frameworks]
      Resposta: 1

  Q3: Quando um spike (protótipo descartável) é melhor que TDD?
      [Nunca — TDD sempre, Quando o domínio é desconhecido e você não sabe
       qual é a interface correta — explorar com código descartável primeiro,
       aprender o domínio, depois usar TDD para reimplementar com clareza,
       Quando o prazo é curto, Para código de infraestrutura]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 16.3 — BDD com SpecFlow: Gherkin e Given-When-Then
════════════════════════════════════════════════════
theory:
  BDD vs TDD: TDD guia o design do código; BDD alinha o comportamento
  do sistema com as necessidades do negócio usando linguagem natural.
  Gherkin: linguagem de especificação legível por não-técnicos.
  Feature, Scenario, Given, When, Then, And, But.
  SpecFlow: ferramenta .NET que conecta Gherkin com código C#.
  Instalação:
    dotnet add package SpecFlow.xUnit
    dotnet add package SpecFlow.Tools.MsBuild.Generation
  Arquivo .feature: especificação em Gherkin.
  Step definitions: código C# que implementa cada passo Gherkin.
  Scenario Outline com Examples: BDD equivalent de [Theory].
  Living documentation: os cenários Gherkin viram documentação viva do sistema.
  Quando BDD faz sentido: projetos com analistas de negócio, QAs e POs
  que participam ativamente. Quando não faz: time técnico puro.

code:
  // Arquivo: Transferencia.feature
  Feature: Transferência entre contas
    Para movimentar dinheiro entre contas
    Como titular de uma conta
    Eu quero realizar transferências

  Scenario: Transferência com saldo suficiente
    Given que tenho uma conta com saldo de R$ 1000,00
    And existe uma conta destino com saldo de R$ 0,00
    When realizo uma transferência de R$ 300,00
    Then minha conta deve ter saldo de R$ 700,00
    And a conta destino deve ter saldo de R$ 300,00

  Scenario Outline: Validação de valor de transferência
    Given que tenho uma conta com saldo de R$ <saldo>
    When tento transferir R$ <valor>
    Then a operação deve <resultado>

    Examples:
      | saldo  | valor  | resultado     |
      | 500    | 300    | ser aprovada  |
      | 100    | 500    | ser recusada  |
      | 1000   | 0      | ser recusada  |

  // Step definitions em C#
  [Binding]
  public class TransferenciaSteps
  {
    private Conta _contaOrigem = null!;
    private Conta _contaDestino = null!;
    private Result _resultado = null!;

    [Given(@"que tenho uma conta com saldo de R\$ (.*)")]
    public void DadoQueTemhContaComSaldo(decimal saldo)
      => _contaOrigem = new ContaBuilder().ComSaldo(saldo).Build();

    [When(@"realizo uma transferência de R\$ (.*)")]
    public void QuandoRealizoTransferencia(decimal valor)
      => _resultado = _contaOrigem.Transferir(Dinheiro.BRL(valor), _contaDestino);

    [Then(@"minha conta deve ter saldo de R\$ (.*)")]
    public void EntaoMinhaContaDeveTermSaldo(decimal saldoEsperado)
      => _contaOrigem.Saldo.Should().Be(Dinheiro.BRL(saldoEsperado));
  }

checklist:
  - Instalar SpecFlow.xUnit no projeto de testes
  - Criar o arquivo Transferencia.feature com os 2 cenários do exemplo
  - Implementar as Step Definitions para os cenários
  - Adicionar um terceiro cenário: transferência de conta bloqueada
  - Verificar que os cenários aparecem como testes no Test Explorer do VSCode

quiz:
  Q1: Qual a principal vantagem do Gherkin sobre testes escritos em C# puro?
      [Gherkin é mais performático, Gherkin é legível por analistas de negócio,
       QAs e POs — permite que não-desenvolvedores escrevam e revisem
       os cenários de teste, criando documentação viva alinhada com o negócio,
       Gherkin compila mais rápido, C# não suporta testes legíveis]
      Resposta: 1

  Q2: O que é "living documentation" no contexto de BDD?
      [Um arquivo README atualizado manualmente, Os arquivos .feature que
       descrevem o comportamento do sistema em Gherkin — são ao mesmo tempo
       especificação executável e documentação sempre atualizada (roda como teste),
       Um dashboard de cobertura de testes, Comentários XML nos controllers]
      Resposta: 1

  Q3: Quando BDD com SpecFlow NÃO é a melhor escolha?
      [Nunca — BDD sempre é melhor, Quando o time é puramente técnico e não
       há analistas de negócio ou QAs que participem dos cenários — o overhead
       de Gherkin não agrega valor sem colaboração entre papéis,
       Quando o projeto é grande, Quando já existe cobertura de testes unitários]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 16.4 — Pirâmide de testes: estratégia corporativa
════════════════════════════════════════════════════
theory:
  A Pirâmide de Testes de Mike Cohn: base larga de unitários, meio de integração,
  pico de E2E. Cada camada tem propósito, custo e velocidade diferentes.

  Unidade (base — 70%):
    Velocidade: < 1ms por teste. Roda centenas em segundos.
    Foco: lógica de negócio isolada — Value Objects, Entities, Domain Services.
    Custo de manutenção: baixo se testar comportamento, não implementação.

  Integração (meio — 20%):
    Velocidade: 100ms–10s por teste. TestContainers.
    Foco: componentes integrados — Repository + DB, Controller + UseCase.
    Custo de manutenção: médio.

  E2E (topo — 10%):
    Velocidade: 1s–30s por teste. Stack completa.
    Foco: fluxos críticos de negócio. Não testar cada cenário — só os felizes.
    Custo de manutenção: alto — quebram com mudanças de UI/contrato.

  Anti-patterns: pirâmide invertida (sorotório — muitos E2E, poucos unitários),
  sorvete (muitos E2E, nada no meio), troféu (alternativa moderna do Testing Library).

  Meta de cobertura por camada para um projeto corporativo:
    Domain: 90%+ (puro, sem dependência)
    Application: 80%+ (com mocks)
    Infrastructure: 60%+ (testes de integração com DB)
    Controllers/API: fluxos felizes E2E + casos de erro por integração

  Como configurar a meta de cobertura no pipeline CI/CD (preview da Fase 7):
    dotnet test /p:Threshold=80 /p:ThresholdType=line

code:
  // Estrutura completa do projeto de testes com as 3 camadas
  SistemaFinanceiro.sln
  ├── SistemaFinanceiro.Domain.Tests/           ← Pirâmide base
  │   ├── ContaTests.cs
  │   ├── DinheiroTests.cs
  │   ├── CpfTests.cs
  │   └── TransferenciaServiceTests.cs
  ├── SistemaFinanceiro.Application.Tests/      ← Pirâmide meio (inferior)
  │   ├── AbrirContaUseCaseTests.cs
  │   └── RealizarTransferenciaUseCaseTests.cs
  ├── SistemaFinanceiro.IntegrationTests/       ← Pirâmide meio (superior)
  │   ├── ContaRepositoryIntegrationTests.cs
  │   └── TransferenciaIntegrationTests.cs
  ├── SistemaFinanceiro.E2ETests/               ← Pirâmide topo
  │   └── FluxoTransferenciaE2ETests.cs
  └── SistemaFinanceiro.BDD/                    ← Cross-camada
      └── Features/Transferencia.feature

  // comando para rodar com threshold obrigatório
  dotnet test --collect:"XPlat Code Coverage" \
    /p:Threshold=80 /p:ThresholdType=branch \
    /p:ThresholdStat=total

checklist:
  - Auditar o projeto atual: qual a distribuição atual de testes por camada?
  - Calcular o ratio unitários/integração/E2E e comparar com a pirâmide ideal
  - Identificar os 3 fluxos críticos que DEVEM ter teste E2E
  - Configurar o threshold de 80% de branch coverage no dotnet test
  - Criar um Makefile ou script .sh com os comandos de teste por camada

quiz:
  Q1: Por que a pirâmide de testes tem a base larga de testes de unidade?
      [Porque são mais fáceis de escrever, Testes de unidade são mais rápidos
       (< 1ms), mais baratos de manter e mais precisos para isolar falhas.
       Ter muitos E2E no lugar de unitários (pirâmide invertida) resulta em
       suite lenta, cara e difícil de diagnosticar,
       Unitários têm maior cobertura automática, xUnit só suporta unitários eficientemente]
      Resposta: 1

  Q2: O que é a "pirâmide invertida" e por que é problemática?
      [Uma pirâmide com mais integração que unitário, Muitos testes E2E e
       poucos testes de unidade — a suite é lenta, os testes quebram por
       qualquer mudança de infraestrutura e é difícil isolar onde está o bug,
       Uma pirâmide com testes de performance, Usar mais Moq que xUnit]
      Resposta: 1

  Q3: Qual tipo de cenário deve ter teste E2E (e não apenas unitário)?
      [Todos os cenários de negócio, Apenas os fluxos críticos de negócio
       (happy path dos casos de uso mais importantes) — E2E é caro demais
       para cobrir todos os cenários. Casos de erro são melhor cobertos por
       testes de integração ou unitários mais rápidos,
       Apenas cenários de erro, Cenários que envolvem banco de dados]
      Resposta: 1

Entregue o .jsx completo ao final.
```

---

### 🔧 PROMPT F4-6 — Projeto Final + Revisão Geral

```
[CONTEXTO: Fase 4 — Etapa F4-6: Projeto Final + Revisão]
[ENTRADA: Cole aqui o .jsx completo após F4-5]

1. ADICIONE O TÓPICO PROJETO FINAL (m16proj):

id: 'm16proj', moduleId: 'm16'
title: '🧪 Projeto: Suite de Testes do Sistema Financeiro'

theory:
  Construir a suite de testes completa do Sistema Financeiro da Fase 3,
  aplicando os 4 módulos da Fase 4 de forma integrada.

  ESTRUTURA DO PROJETO DE TESTES:
  SistemaFinanceiro.Domain.Tests/
    ContaTests.cs          — 15+ testes de unidade
    DinheiroTests.cs       — 10+ testes de Value Object
    CpfTests.cs            — 8+ testes com [Theory]
    TransferenciaServiceTests.cs — Domain Service puro

  SistemaFinanceiro.Application.Tests/
    AbrirContaUseCaseTests.cs       — 3 cenários com Moq
    RealizarTransferenciaUseCaseTests.cs — 4 cenários
    GerarExtratoUseCaseTests.cs     — 2 cenários

  SistemaFinanceiro.IntegrationTests/
    ContaRepositoryTests.cs         — TestContainers SQL Server
    TransferenciaIntegrationTests.cs — WebApplicationFactory + TestContainers

  SistemaFinanceiro.BDD/
    Features/Transferencia.feature  — 3 cenários Gherkin
    StepDefinitions/TransferenciaSteps.cs

  META DE COBERTURA:
  Domain: 90%+ branch coverage
  Application: 80%+ branch coverage
  Total: 80%+ (threshold no dotnet test)

  RELATÓRIO FINAL:
  Gerar HTML com reportgenerator e documentar os pontos não cobertos
  com justificativa (ex: "Program.cs excluído — apenas infraestrutura DI").

  GITFLOW DO PROJETO:
  feature/testes-domain
  feature/testes-application
  feature/testes-integracao
  feature/testes-bdd
  release/v2.0.0-com-testes

code:
  Script completo para rodar toda a suite com cobertura:

  #!/bin/bash
  # run-tests.sh — executa toda a suite e gera relatório

  echo "🧪 Rodando testes de unidade..."
  dotnet test SistemaFinanceiro.Domain.Tests \
    /p:CollectCoverage=true \
    /p:CoverletOutputFormat=cobertura \
    /p:CoverletOutput=./coverage/domain.cobertura.xml

  echo "🧪 Rodando testes de aplicação..."
  dotnet test SistemaFinanceiro.Application.Tests \
    /p:CollectCoverage=true \
    /p:CoverletOutputFormat=cobertura \
    /p:CoverletOutput=./coverage/application.cobertura.xml

  echo "🐳 Rodando testes de integração (requer Docker)..."
  dotnet test SistemaFinanceiro.IntegrationTests

  echo "📊 Gerando relatório de cobertura..."
  reportgenerator \
    -reports:"./coverage/*.cobertura.xml" \
    -targetdir:"./coveragereport" \
    -reporttypes:Html

  echo "✅ Relatório em ./coveragereport/index.html"

checklist:
  - Criar os 4 projetos de teste com a estrutura descrita
  - Implementar os 15+ testes de Domain passando no dotnet test
  - Implementar os 9 testes de Application com Moq passando
  - Implementar 3 testes de Integração com TestContainers
  - Criar os 3 cenários BDD em Gherkin com Step Definitions
  - Rodar o script run-tests.sh e verificar 80%+ de cobertura total
  - Fazer o merge do release/v2.0.0-com-testes no main via GitFlow

quiz:
  Q1: Por que separar Domain.Tests de Application.Tests em projetos diferentes?
      [É apenas organização, Projetos separados têm dependências separadas —
       Domain.Tests não precisa de Moq (domain é puro); Application.Tests
       precisa de Moq. Separar mantém cada projeto com suas dependências mínimas,
       xUnit não funciona em um único projeto grande,
       Para rodar em paralelo mais facilmente]
      Resposta: 1

  Q2: Qual a ordem correta de implementar os testes no projeto final?
      [E2E primeiro para garantir os fluxos, Domain Tests primeiro (mais simples,
       sem dependências), depois Application Tests (com Moq), depois Integration
       (com TestContainers) — seguindo a pirâmide de baixo para cima,
       Qualquer ordem é igualmente eficiente,
       Integration Tests primeiro para garantir o banco]
      Resposta: 1

  Q3: Por que documentar os pontos NÃO cobertos do relatório de cobertura?
      [Para justificar nota baixa, Para mostrar decisão consciente — nem toda
       linha precisa ser testada; excluir Program.cs e Migrations é intencional,
       não negligência. Documentar torna a decisão rastreável e revisável,
       xUnit exige essa documentação, Para o SonarCloud aceitar o relatório]
      Resposta: 1

═══════════════════════════════════════════════════
2. REVISÃO COMPLETA — CHECKLIST DE QUALIDADE
═══════════════════════════════════════════════════

PROGRESSÃO LÓGICA DA FASE 4:
[ ] Módulo 13: fundação — o aluno entende o que é um bom teste antes de Moq
[ ] Módulo 14: isolamento — o aluno consegue testar qualquer classe sem dependências
[ ] Módulo 15: realidade — o aluno testa componentes integrados com banco real
[ ] Módulo 16: metodologia — o aluno aplica TDD/BDD como hábito de desenvolvimento

CADA TÓPICO (verificar todos os 17):
[ ] Todo exemplo de código compila no .NET 8 e roda com "dotnet test"
[ ] Nomenclatura de testes: Metodo_Cenario_ResultadoEsperado em todos
[ ] Arrange-Act-Assert com comentários em todos os exemplos
[ ] FluentAssertions usado (não Assert.Equal nu do xUnit)
[ ] Anti-pattern mostrado antes da solução nos tópicos de xUnit e Moq
[ ] TestContainers menciona pré-requisito Docker no theory
[ ] BDD tem arquivo .feature E step definitions ambos completos

MÓDULO 13 — xUnit:
[ ] [Theory] com [InlineData] e [MemberData] ambos demonstrados
[ ] Teste assíncrono com async Task incluído
[ ] Relatório de cobertura gerado com reportgenerator

MÓDULO 14 — Moq:
[ ] Stub manual mostrado ANTES de Moq (pedagogia)
[ ] InMemoryRepository implementado como Fake reutilizável
[ ] Verify com Times e It.Is<> demonstrados
[ ] ContaBuilder implementado e usado nos testes

MÓDULO 15 — Integração:
[ ] WebApplicationFactory customizada com ConfigureTestServices
[ ] TestContainers com IAsyncLifetime e migrations aplicadas
[ ] ICollectionFixture para compartilhar container

MÓDULO 16 — TDD/BDD:
[ ] Ciclo Red-Green-Refactor demonstrado passo a passo (não só descrito)
[ ] Arquivo .feature com Scenario Outline e Examples
[ ] Script run-tests.sh com threshold de cobertura

SISTEMA REACT:
[ ] Fases 1, 2, 3 continuam sem regressões
[ ] Fase 4 desbloqueia após Fase 3 completa
[ ] ALL_PHASES tem 4 entradas
[ ] XP e timer da Fase 4 funcionam corretamente

Entregue o .jsx completo e funcional ao final.
```

---

## PARTE 4 — DICAS ESPECÍFICAS DA FASE 4

### Pacotes NuGet que aparecem nos exemplos

```xml
<!-- Testes de Unidade -->
<PackageReference Include="xunit" Version="2.7.*" />
<PackageReference Include="xunit.runner.visualstudio" Version="2.5.*" />
<PackageReference Include="FluentAssertions" Version="6.12.*" />
<PackageReference Include="Moq" Version="4.20.*" />
<PackageReference Include="AutoFixture" Version="4.18.*" />
<PackageReference Include="AutoFixture.Xunit2" Version="4.18.*" />
<PackageReference Include="AutoFixture.AutoMoq" Version="4.18.*" />

<!-- Cobertura -->
<PackageReference Include="coverlet.collector" Version="6.0.*" />

<!-- Testes de Integração -->
<PackageReference Include="Microsoft.AspNetCore.Mvc.Testing" Version="8.0.*" />
<PackageReference Include="Testcontainers" Version="3.8.*" />
<PackageReference Include="Testcontainers.MsSql" Version="3.8.*" />

<!-- BDD -->
<PackageReference Include="SpecFlow.xUnit" Version="3.9.*" />
<PackageReference Include="SpecFlow.Tools.MsBuild.Generation" Version="3.9.*" />

<!-- Relatório de cobertura (global tool) -->
<!-- dotnet tool install -g dotnet-reportgenerator-globaltool -->
```

### Pré-requisito: Docker para TestContainers

```bash
# Verificar Docker instalado
docker --version

# Pull da imagem SQL Server (evita delay no primeiro teste)
docker pull mcr.microsoft.com/mssql/server:2022-latest

# Verificar que Docker está rodando
docker ps
```

### Estratégia para arquivo muito grande

```
"Entregue em 3 partes:
- Parte A: FASE1_DATA + FASE2_DATA + FASE3_DATA (sem alterações)
- Parte B: FASE4_DATA completo (módulos 13, 14, 15, 16 e projeto final)
- Parte C: ALL_PHASES e todos os componentes React
Concatenarei na ordem A + B + C."
```

### Verificação rápida após cada etapa

```javascript
// No console do browser:
const f4 = FASE4_DATA
console.log("Módulos:", f4.length)                              // 4
console.log("Tópicos:", f4.flatMap(m => m.topics).length)      // 16
console.log("Primeiro código:", f4[0].topics[0].code.slice(0, 50)) // deve ter [Fact]
console.log("All phases:", ALL_PHASES.length)                   // 4
```

### Conexão com as próximas fases

A Fase 4 prepara diretamente para:
- **Fase 5 (JWT + Segurança)** — testes de autenticação com WebApplicationFactory e tokens
- **Fase 6 (Docker + CI/CD)** — o script `run-tests.sh` entra no pipeline YAML
- **Fase 7 (SonarCloud)** — o relatório cobertura.xml é o input do SonarCloud Quality Gate
- **Fase 8 (Mensageria)** — testes de consumers RabbitMQ com containers

> **Insight pedagógico:** Testes não são o fim da Fase 4 — são a rede de segurança que permite ao aluno ir avançando nas fases seguintes com confiança de que o que foi construído continua funcionando.
