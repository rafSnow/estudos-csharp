export const MODULO_13 = {
  id: "m13",
  title: "Testes de Unidade com xUnit",
  icon: "🧪",
  week: "Semana 13",
  color: "#EF4444",
  topics: [
    {
      id: "m13t1",
      moduleId: "m13",
      title: "Por que Testar? Anatomia de um Teste",
      theory: `Sem testes, refatorar é jogar roleta russa. Com testes, é cirurgia com raio-x. Esse é o argumento real — não "é bom praticar", mas consequências concretas e mensuráveis. A Microsoft publicou um estudo mostrando que o custo de corrigir um bug em produção é até 100x maior do que corrigir durante o desenvolvimento. Testes de unidade são a primeira linha de defesa.

Tipos de teste e seus objetivos: testes de unidade verificam uma unidade isolada (método, classe) sem dependências externas; testes de integração verificam como componentes trabalham juntos (API + banco); testes end-to-end verificam o fluxo completo do usuário; smoke tests verificam que o sistema sobe sem erros; regression tests garantem que correções não quebraram funcionalidades anteriores.

A anatomia canônica de todo bom teste segue o padrão AAA: Arrange (preparar os dados e dependências), Act (executar a ação sendo testada), Assert (verificar o resultado). Esse padrão é universal — funciona em qualquer linguagem e framework.

Um bom teste tem cinco características: nome descritivo no formato Metodo_Cenario_ResultadoEsperado, um único motivo para falhar, determinismo (mesmo resultado sempre — não depende de hora, dados aleatórios ou estado externo), independência (não depende de outros testes), e rapidez (milissegundos, não segundos).

O que NÃO é um bom teste: testar implementação em vez de comportamento (verificar chamadas internas em vez de resultado), teste que sempre passa (não testa nada), teste que depende de ordem de execução (frágil e não determinístico).

A nomenclatura corporativa padrão é Metodo_Cenario_ResultadoEsperado. Exemplos: Sacar_SaldoInsuficiente_RetornaFalha, Depositar_ValorPositivo_AumentaSaldo, CriarCpf_NumeroInvalido_LancaExcecao. Quando o teste falha no CI/CD, o nome te diz exatamente o que quebrou sem precisar ler o código.

Por que xUnit sobre NUnit e MSTest: xUnit instancia uma nova classe para cada método [Fact], garantindo isolamento nativo. Não tem [SetUp]/[TestInitialize] — usa construtor e IDisposable, que são mais explícitos. Suporta paralelismo nativo e teoria de dados ([Theory]). É o framework mais usado em projetos .NET modernos e o padrão do time do ASP.NET Core.`,
      code: `// ══════════════════════════════════════════════
// Criando o projeto de testes do zero
// ══════════════════════════════════════════════
// No terminal:
// dotnet new xunit -n SistemaFinanceiro.Tests
// cd SistemaFinanceiro.Tests
// dotnet add reference ../SistemaFinanceiro.Domain
// dotnet add package FluentAssertions

// ══════════════════════════════════════════════
// 4 primeiros testes no padrão AAA comentado
// ══════════════════════════════════════════════
using FluentAssertions;
using SistemaFinanceiro.Domain;

namespace SistemaFinanceiro.Tests.Domain;

public class DinheiroTests
{
    // Teste 1 — Value Object: criação inválida
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

    // Teste 2 — Value Object: igualdade (record)
    [Fact]
    public void Dinheiro_MesmoValorMesmaMoeda_SaoIguais()
    {
        // Arrange & Act
        var d1 = Dinheiro.BRL(100);
        var d2 = Dinheiro.BRL(100);

        // Assert
        d1.Should().Be(d2); // record equality automática
    }
}

public class ContaTests
{
    // Teste 3 — comportamento da Entity Conta
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

    // Teste 4 — falha de negócio com Result Pattern
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
}

// ══════════════════════════════════════════════
// Rodando os testes:
// dotnet test --logger "console;verbosity=detailed"
// ══════════════════════════════════════════════`,
      checklist: [
        "Criar o projeto SistemaFinanceiro.Tests com dotnet new xunit",
        "Adicionar referência ao projeto Domain com dotnet add reference",
        "Instalar FluentAssertions: dotnet add package FluentAssertions",
        "Implementar os 4 testes do exemplo e rodar dotnet test",
        "Escrever mais 3 testes para o Value Object Cpf (válido, inválido, formatação)",
      ],
      quiz: [
        {
          question: 'O que significa um teste ser "determinístico"?',
          options: [
            "Roda mais rápido com mais CPU",
            "Sempre produz o mesmo resultado nas mesmas condições — não depende de hora do dia, dados aleatórios não semeados, ordem de outros testes ou estado externo",
            "Tem exatamente 3 assertions",
            "Usa apenas tipos primitivos",
          ],
          answer: 1,
          explanation:
            "Testes não-determinísticos são piores que nenhum teste — você não confia neles e passa a ignorar as falhas, que é exatamente o oposto do objetivo.",
        },
        {
          question:
            'Por que nomear um teste "Sacar_SaldoInsuficiente_RetornaFalha" é melhor que "TestarSaque"?',
          options: [
            "É mais curto",
            "O nome documenta o comportamento: qual método, qual cenário e qual resultado esperado — quando falhar, você sabe exatamente o que quebrou sem ler o código",
            "xUnit exige esse padrão",
            "TestarSaque não compila",
          ],
          answer: 1,
          explanation:
            "Testes são documentação viva. Um nome descritivo faz o relatório de falha ser autoexplicativo em um pipeline de CI/CD.",
        },
        {
          question: "Qual a principal diferença entre xUnit e NUnit/MSTest?",
          options: [
            "xUnit é mais antigo",
            "xUnit instancia uma nova classe de teste para cada método [Fact] — isolamento nativo. Não tem [SetUp]/[TestInitialize] encorajando uso de construtor e IDisposable, que são mais explícitos",
            "xUnit só roda no .NET 8",
            "xUnit não suporta testes assíncronos",
          ],
          answer: 1,
          explanation:
            "O isolamento por instância garante que um teste nunca polui o estado de outro. Isso elimina uma classe inteira de bugs flaky em suites grandes.",
        },
      ],
    },
    {
      id: "m13t2",
      moduleId: "m13",
      title: "xUnit: Facts, Theories e Data-Driven",
      theory: `[Fact] testa um único cenário com dados fixos. [Theory] testa o mesmo comportamento com múltiplos conjuntos de dados — é a arma contra duplicação de testes. Se você tem 10 cenários para a mesma regra de negócio, escreva 1 [Theory] com 10 datasets, não 10 [Facts] quase idênticos.

[InlineData] é a forma mais simples: dados inline diretamente no atributo. Funciona para tipos primitivos (string, int, decimal, bool). Limitação: não aceita objetos complexos porque atributos em C# só aceitam constantes de compile-time.

[MemberData] resolve a limitação do InlineData: aponta para uma propriedade estática que retorna IEnumerable<object[]>. Permite dados complexos — objetos de domínio, listas, tipos customizados. É a escolha para cenários mais elaborados como testar múltiplas combinações de Dinheiro, Conta e Transacao.

[ClassData] vai um passo além: dados de uma classe separada que implementa IEnumerable<object[]>. Útil quando os mesmos dados de teste são reutilizados entre múltiplas classes de teste.

[Fact(Skip = "motivo")] pula o teste com justificativa — útil para testes temporariamente quebrados. [Fact(DisplayName = "nome legível")] define um nome amigável no Test Explorer. Cuidado: Skip não deve virar lixeira de testes abandonados.

Testes assíncronos funcionam nativamente: [Fact] com async Task. O xUnit aguarda o Task completar antes de assertar. Não precisa de .Result ou .GetAwaiter().GetResult() — esses bloqueiam a thread e podem causar deadlocks.

ITestOutputHelper é a forma correta de logar dentro de testes. Console.WriteLine não funciona em xUnit — o output é capturado por teste via ITestOutputHelper injetado no construtor.

ClassFixture compartilha estado entre testes da mesma classe (ex: um recurso custoso). CollectionFixture compartilha entre múltiplas classes. Mais detalhes no Módulo 15.`,
      code: `// ══════════════════════════════════════════════
// Theory com InlineData — testando CPF
// ══════════════════════════════════════════════
[Theory]
[InlineData("529.982.247-25", true)]    // CPF válido
[InlineData("000.000.000-00", false)]    // todos zeros
[InlineData("111.111.111-11", false)]    // todos iguais
[InlineData("123.456.789-09", false)]    // sequencial inválido
[InlineData("", false)]                  // vazio
public void Cpf_Validar_RetornaResultadoCorreto(
    string numero, bool esperado)
{
    // Act
    var resultado = Cpf.EhValido(numero);

    // Assert
    resultado.Should().Be(esperado);
}

// ══════════════════════════════════════════════
// Theory com MemberData — cenários de Dinheiro
// ══════════════════════════════════════════════
public static IEnumerable<object[]> CenariosTransferencia =>
    new List<object[]>
    {
        //  saldoInicial       valorSaque        sucesso  saldoFinal
        new object[] { Dinheiro.BRL(1000), Dinheiro.BRL(500),  true,  Dinheiro.BRL(500) },
        new object[] { Dinheiro.BRL(100),  Dinheiro.BRL(200),  false, Dinheiro.BRL(100) },
        new object[] { Dinheiro.BRL(0),    Dinheiro.BRL(1),    false, Dinheiro.BRL(0)   },
        new object[] { Dinheiro.BRL(500),  Dinheiro.BRL(500),  true,  Dinheiro.BRL(0)   },
    };

[Theory]
[MemberData(nameof(CenariosTransferencia))]
public void Sacar_Cenarios_RetornaResultadoCorreto(
    Dinheiro saldoInicial, Dinheiro valorSaque,
    bool sucesso, Dinheiro saldoFinal)
{
    // Arrange
    var conta = Conta.Abrir(CpfValido, saldoInicial);

    // Act
    var resultado = conta.Sacar(valorSaque);

    // Assert
    resultado.IsSuccess.Should().Be(sucesso);
    if (sucesso) conta.Saldo.Should().Be(saldoFinal);
}

// ══════════════════════════════════════════════
// Teste assíncrono com ITestOutputHelper
// ══════════════════════════════════════════════
public class ContaUseCaseTests
{
    private readonly ITestOutputHelper _output;

    public ContaUseCaseTests(ITestOutputHelper output)
        => _output = output;

    [Fact]
    public async Task BuscarConta_IdExistente_RetornaConta()
    {
        // Arrange
        var repo = new InMemoryContaRepository();
        var conta = Conta.Abrir(new Cpf("529.982.247-25"), Dinheiro.BRL(500));
        await repo.AddAsync(conta);

        // Act
        var resultado = await repo.GetByIdAsync(conta.Id);

        // Assert
        resultado.Should().NotBeNull();
        _output.WriteLine($"Conta encontrada: {resultado!.Id}");
    }
}

// ══════════════════════════════════════════════
// Rodando testes filtrados:
// dotnet test --filter "FullyQualifiedName~Cpf"
// dotnet test --filter "DisplayName~Saldo"
// ══════════════════════════════════════════════`,
      checklist: [
        "Converter 3 testes [Fact] duplicados em 1 [Theory] com [InlineData]",
        "Criar um [Theory] com [MemberData] para os cenários de Dinheiro",
        "Escrever um teste assíncrono para um UseCase do Sistema Financeiro",
        "Usar ITestOutputHelper para logar o saldo calculado no teste",
        'Rodar dotnet test --filter "FullyQualifiedName~Cpf" para filtrar testes',
      ],
      quiz: [
        {
          question: "Quando usar [Theory] em vez de múltiplos [Fact]?",
          options: [
            "Sempre — Theory é mais moderno",
            "Quando o mesmo comportamento precisa ser verificado com múltiplos conjuntos de entrada/saída — evita duplicação de código de teste",
            "Apenas para testes de performance",
            "Quando o teste é assíncrono",
          ],
          answer: 1,
          explanation:
            "Theory elimina duplicação: 10 cenários em 1 método em vez de 10 métodos quase idênticos. Cada dataset aparece como um teste separado no relatório.",
        },
        {
          question: "Qual a vantagem de [MemberData] sobre [InlineData]?",
          options: [
            "InlineData é mais lento",
            "MemberData permite dados complexos (objetos, listas, tipos customizados) que não podem ser expressos como atributos (que só aceitam constantes em compile time)",
            "MemberData roda em paralelo",
            "InlineData não funciona com strings",
          ],
          answer: 1,
          explanation:
            "Atributos em C# só aceitam constantes de compilação. MemberData aponta para uma propriedade estática que pode construir objetos complexos em runtime.",
        },
        {
          question:
            "Como rodar apenas os testes de um namespace específico no terminal?",
          options: [
            "dotnet test --class Namespace",
            'dotnet test --filter "FullyQualifiedName~NomeDoNamespace" — o filtro aceita expressões como ~contém, =igual, !não',
            "dotnet test --namespace X",
            "Não é possível filtrar por namespace",
          ],
          answer: 1,
          explanation:
            "O filtro --filter é poderoso: ~contém, =exato, !=diferente. Aceita FullyQualifiedName, DisplayName e Trait para filtrar por diferentes critérios.",
        },
      ],
    },
    {
      id: "m13t3",
      moduleId: "m13",
      title: "FluentAssertions: Assertions Expressivas",
      theory: `FluentAssertions transforma mensagens de erro genéricas em diagnósticos precisos. Compare a mensagem de falha: Assert.Equal(100, valor) diz "Expected: 100, Actual: -50". valor.Should().Be(100) diz "Expected valor to be 100, but found -50". A segunda identifica a variável, o esperado e o real com contexto.

Assertions de igualdade: Be() usa Equals() do objeto (ideal para Value Objects/records), NotBe() para desigualdade, BeEquivalentTo() faz comparação profunda de propriedades (deep equality) — ideal para DTOs e objetos anônimos sem override de Equals.

Assertions de coleções são onde FluentAssertions brilha: HaveCount(n) verifica tamanho, Contain(predicate) verifica presença, BeEmpty() e NotBeEmpty(), AllSatisfy(predicate) verifica todos os elementos, ContainSingle(predicate) verifica exatamente um elemento que satisfaz a condição — mais preciso que Contain porque falha se houver zero ou mais de um.

Assertions de exceção: Throw<T>() e ThrowAsync<T>() para métodos assíncronos, NotThrow(), WithMessage("*parcial*") com wildcard, And.WithInnerException<T>() para exceções encadeadas.

Assertions de string: StartWith(), EndWith(), Contain(), MatchRegex(), BeNullOrEmpty(). Todas suportam "because {motivo}" como parâmetro para documentar a razão da assertion — "because conta recém-aberta não tem número".

Assertions numéricas: BeGreaterThan(), BeInRange(), BeApproximately(expected, precision) — essencial para cálculos de juros e arredondamento monetário onde igualdade exata pode falhar por diferenças de ponto flutuante.

Assertions compostas com And: valor.Should().BePositive().And.BeLessThan(1000) — encadeia múltiplas verificações na mesma expressão fluent.

Custom assertions permitem estender FluentAssertions para o domínio financeiro: conta.Should().TerSaldoSuficientePara(Dinheiro.BRL(100)). Cria-se uma classe ContaAssertions que herda de ReferenceTypeAssertions — eleva a legibilidade dos testes ao nível da Linguagem Ubíqua do DDD.`,
      code: `// ══════════════════════════════════════════════
// Demonstração por CATEGORIA no contexto financeiro
// ══════════════════════════════════════════════
using FluentAssertions;

// ── Igualdade — Value Objects ──
[Fact]
public void Saldo_AposDeposito_DeveSerValorEsperado()
{
    // Arrange
    var conta = Conta.Abrir(CpfValido, Dinheiro.BRL(400));

    // Act
    conta.Depositar(Dinheiro.BRL(100));

    // Assert
    conta.Saldo.Should().Be(Dinheiro.BRL(500));
    conta.Saldo.Should().NotBe(Dinheiro.BRL(0));
}

// ── Exceções com mensagem ──
[Fact]
public void Dinheiro_ValorNegativo_LancaDomainException()
{
    // Act
    var act = () => new Dinheiro(-1, "BRL");

    // Assert
    act.Should().Throw<DomainException>()
       .WithMessage("*valor*")
       .And.Message.Should().Contain("negativo");
}

// ── Coleções — Transações ──
[Fact]
public void Extrato_ContaComMovimentacao_DeveConterTransacoes()
{
    // Arrange
    var conta = CriarContaComMovimentacao();

    // Act
    var transacoes = conta.ObterExtrato();

    // Assert
    transacoes.Should().HaveCount(3);
    transacoes.Should().Contain(t => t.Tipo == TipoTransacao.Debito);
    transacoes.Should().AllSatisfy(t =>
        t.Valor.Quantia.Should().BeGreaterThan(0));
    transacoes.Should().ContainSingle(t => t.Id == transacaoEspecifica);
}

// ── Result Pattern ──
[Fact]
public void Transferir_DadosValidos_RetornaSucesso()
{
    // Arrange & Act
    var resultado = conta.Transferir(Dinheiro.BRL(100), destino);

    // Assert
    resultado.IsSuccess.Should().BeTrue(
        because: "transferência com saldo suficiente deve funcionar");
    resultado.Error.Should().BeNullOrEmpty();
}

// ── String assertions ──
[Fact]
public void Conta_NumeroCriado_DeveSerFormatoCorreto()
{
    // Assert
    conta.Numero.Should().MatchRegex(@"^\\d{5}-\\d{1}$");
}

// ── Numéricas com tolerância (juros) ──
[Fact]
public void CalcularJuros_30Dias_DeveRetornarValorAproximado()
{
    // Act
    var juros = calculadora.Calcular(Dinheiro.BRL(1000), 30);

    // Assert — arredondamento pode variar em centavos
    juros.Quantia.Should().BeApproximately(15.32m, precision: 0.01m);
}

// ══════════════════════════════════════════════
// Custom Assertion para o domínio financeiro
// ══════════════════════════════════════════════
public class ContaAssertions
    : ReferenceTypeAssertions<Conta, ContaAssertions>
{
    public ContaAssertions(Conta subject) : base(subject) { }

    protected override string Identifier => "conta";

    public AndConstraint<ContaAssertions> TerSaldoPositivo(
        string because = "", params object[] becauseArgs)
    {
        Subject.Saldo.Quantia.Should().BeGreaterThan(0,
            because, becauseArgs);
        return new AndConstraint<ContaAssertions>(this);
    }

    public AndConstraint<ContaAssertions> TerSaldoSuficientePara(
        Dinheiro valor, string because = "", params object[] becauseArgs)
    {
        Subject.Saldo.Quantia.Should().BeGreaterThanOrEqualTo(
            valor.Quantia, because, becauseArgs);
        return new AndConstraint<ContaAssertions>(this);
    }
}

// Extension method para sintaxe fluent
public static class ContaAssertionsExtensions
{
    public static ContaAssertions Should(this Conta conta)
        => new ContaAssertions(conta);
}

// Uso nos testes: conta.Should().TerSaldoPositivo();`,
      checklist: [
        "Substituir todos os Assert.Equal/Assert.True por FluentAssertions equivalentes",
        "Escrever um teste que verifica uma coleção de transações com AllSatisfy",
        "Escrever um teste de exceção com WithMessage para uma DomainException",
        "Usar BeApproximately para testar um cálculo de juros com arredondamento",
        "Criar uma custom assertion: ContaAssertions com TerSaldoPositivo()",
      ],
      quiz: [
        {
          question:
            'Por que "valor.Should().BeGreaterThan(0)" é melhor que "Assert.True(valor > 0)"?',
          options: [
            "FluentAssertions é mais rápido",
            'A mensagem de falha diz "Expected valor to be greater than 0, but found -50" — muito mais informativo que "Expected: True, But was: False"',
            "Assert.True não compila",
            "É apenas preferência de sintaxe sem diferença",
          ],
          answer: 1,
          explanation:
            "Quando um teste falha no CI/CD, a mensagem precisa diagnosticar o problema sem abrir o código. FluentAssertions gera mensagens com contexto completo.",
        },
        {
          question: "Quando usar BeEquivalentTo em vez de Be?",
          options: [
            "São idênticos",
            "BeEquivalentTo faz comparação profunda de propriedades (deep equality) — ideal para DTOs e objetos sem override de Equals. Be usa Equals() do objeto",
            "BeEquivalentTo é para strings, Be é para números",
            "BeEquivalentTo é mais lento e deve ser evitado",
          ],
          answer: 1,
          explanation:
            "Records já têm Equals automático (use Be). DTOs e classes sem Equals precisam de BeEquivalentTo para comparar propriedade por propriedade.",
        },
        {
          question:
            "Como verificar que uma lista contém exatamente um elemento que satisfaz uma condição?",
          options: [
            "list.Should().Contain(x => x.Ativo)",
            "list.Should().ContainSingle(x => x.Ativo) — falha se houver zero ou mais de um elemento",
            "list.Should().HaveCount(1)",
            "list.Count.Should().Be(1)",
          ],
          answer: 1,
          explanation:
            "ContainSingle é mais preciso: verifica tanto a condição quanto que exatamente um elemento a satisfaz. HaveCount(1) não verifica a condição.",
        },
      ],
    },
    {
      id: "m13t4",
      moduleId: "m13",
      title: "Cobertura de Código: O que Medir e Ignorar",
      theory: `Cobertura não é qualidade — 100% de cobertura com assertions fracas é pior que 70% com assertions sólidas. A métrica certa é "confidence" (confiança para refatorar), não "coverage" (linhas executadas). Um teste que executa código mas não verifica nada conta como cobertura mas não como qualidade.

Line Coverage conta se uma linha foi executada durante os testes. Branch Coverage verifica se TODOS os caminhos de uma condição (if-true E if-false) foram testados. Path Coverage combina todos os caminhos possíveis — mais rigoroso. Na prática, Branch Coverage é o melhor equilíbrio entre rigor e praticidade.

O que vale a pena cobrir: Domain (Value Objects, Entities, Domain Services) — 90%+; Application (Use Cases com lógica de fluxo) — 80%+; regras de negócio complexas com múltiplos caminhos. São as camadas onde bugs custam mais caro e onde testes são mais baratos de escrever.

O que NÃO vale a pena cobrir: getters/setters triviais, Program.cs (configuração de DI), migrations do EF Core, DTOs sem lógica, mapeamentos automáticos (AutoMapper profiles). Esses artefatos têm baixo risco de regressão e alto custo de teste.

Gerando relatório de cobertura no .NET: coverlet.collector coleta os dados durante dotnet test. O formato cobertura (Cobertura XML) é o mais compatível. reportgenerator transforma o XML em HTML navegável com drill-down por namespace, classe e método.

[ExcludeFromCodeCoverage] é o atributo para excluir intencionalmente do relatório. Use em Program.cs, Migrations e classes de infraestrutura. Documente o motivo — exclusão sem justificativa é suspeita em code review.

Meta de 80% como gatilho: não como fim em si, mas como sintoma de uma suite saudável. O pipeline de CI pode ser configurado para falhar se a cobertura cair abaixo de 80% — dotnet test /p:Threshold=80. Isso previne que PRs reduzam a cobertura sem justificativa. Na Fase 7 (SonarCloud), esse threshold vira um Quality Gate automatizado.`,
      code: `// ══════════════════════════════════════════════
// Configuração completa para cobertura
// ══════════════════════════════════════════════

// 1. Instalar coverlet no projeto de testes:
// dotnet add package coverlet.collector

// 2. Directory.Build.props para todos os projetos de teste:
// <PropertyGroup>
//   <CollectCoverage>true</CollectCoverage>
//   <CoverletOutputFormat>cobertura</CoverletOutputFormat>
//   <Exclude>[*.Tests]*</Exclude>
//   <ExcludeByAttribute>ExcludeFromCodeCoverage</ExcludeByAttribute>
// </PropertyGroup>

// ══════════════════════════════════════════════
// Como excluir Program.cs e infraestrutura
// ══════════════════════════════════════════════
using System.Diagnostics.CodeAnalysis;

// No topo do Program.cs:
[assembly: ExcludeFromCodeCoverage]

// Em classes de infraestrutura específicas:
[ExcludeFromCodeCoverage]
public class ContaEfRepository : IContaRepository
{
    // Coberto por testes de integração, não unitários
}

// ══════════════════════════════════════════════
// Script para gerar relatório HTML completo
// ══════════════════════════════════════════════
// Passo 1: Rodar testes com cobertura
// dotnet test /p:CollectCoverage=true
//   /p:CoverletOutputFormat=cobertura
//   /p:CoverletOutput=./coverage/

// Passo 2: Instalar reportgenerator (uma vez)
// dotnet tool install -g dotnet-reportgenerator-globaltool

// Passo 3: Gerar HTML
// reportgenerator
//   -reports:"**/coverage.cobertura.xml"
//   -targetdir:"coveragereport"
//   -reporttypes:Html

// Passo 4: Abrir o relatório
// start coveragereport/index.html

// ══════════════════════════════════════════════
// Rodando com threshold obrigatório (CI/CD)
// ══════════════════════════════════════════════
// dotnet test --collect:"XPlat Code Coverage"
//   /p:Threshold=80
//   /p:ThresholdType=branch
//   /p:ThresholdStat=total
// Se cobertura < 80% -> exit code != 0 -> pipeline falha`,
      checklist: [
        "Instalar coverlet.collector no projeto de testes",
        "Rodar dotnet test com coleta de cobertura",
        "Instalar e executar reportgenerator para HTML",
        "Abrir o relatório e identificar as branches não cobertas",
        "Adicionar [ExcludeFromCodeCoverage] no Program.cs e nas Migrations",
      ],
      quiz: [
        {
          question:
            "Por que 100% de cobertura não significa que o código está bem testado?",
          options: [
            "Significa sim — quanto mais cobertura melhor",
            "Cobertura mede quais linhas foram executadas, não se as assertions verificam os comportamentos corretos — um teste que executa o código mas não verifica nada conta como cobertura",
            "100% é impossível de alcançar",
            "Apenas Branch Coverage importa",
          ],
          answer: 1,
          explanation:
            "Cobertura sem assertions sólidas gera falsa confiança. O time acha que está seguro, mas os testes não detectariam regressões reais.",
        },
        {
          question:
            "Qual parte do código-fonte tem mais retorno no investimento em testes?",
          options: [
            "Program.cs e configuração de DI",
            "Domain e Application — Value Objects, Entities e Use Cases que têm comportamento real a verificar. Infrastructure e DTOs têm pouco retorno",
            "Controllers — são o ponto de entrada",
            "Migrations — garantem o schema do banco",
          ],
          answer: 1,
          explanation:
            "Regras de negócio no Domain são puras e fáceis de testar. Application orquestra fluxos. Ambas têm alta probabilidade de conter bugs que custam caro.",
        },
        {
          question: "Qual a diferença entre Line Coverage e Branch Coverage?",
          options: [
            "São iguais",
            "Line Coverage conta se uma linha foi executada. Branch Coverage verifica se TODOS os caminhos de uma condição foram testados (if-true E if-false) — mais rigoroso",
            "Branch Coverage é mais rápido de calcular",
            "Line Coverage é obsoleto",
          ],
          answer: 1,
          explanation:
            "Um if sem else pode ter 100% de Line Coverage testando só o caminho true. Branch Coverage exige que ambos os caminhos sejam testados.",
        },
      ],
    },
  ],
};
