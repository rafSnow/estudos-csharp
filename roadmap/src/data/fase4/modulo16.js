export const MODULO_16 = {
  id: "m16",
  title: "TDD e BDD na Prática",
  icon: "🔄",
  week: "Semana 15",
  color: "#10B981",
  topics: [
    {
      id: "m16t1",
      moduleId: "m16",
      title: "TDD: Red-Green-Refactor na Prática",
      theory: `TDD não é sobre testes — é sobre design. Os testes são o subproduto.

O ciclo obrigatório: RED (escreve teste que falha) → GREEN (código mínimo que faz passar) → REFACTOR (limpa sem quebrar) → repete. Esse ciclo é a unidade atômica do TDD. Não existe Green sem Red anterior. Não existe Refactor sem Green anterior.

Por que Red primeiro? Força pensar na interface pública ANTES da implementação. Você define como a classe será USADA antes de definir como funciona por dentro. Isso naturalmente leva a APIs limpas e fáceis de consumir.

O "código mínimo" no Green: return true; é válido se faz o teste passar. Parece absurdo, mas é intencional — a próxima iteração adicionará um novo teste que FORÇARÁ a implementação real. Cada teste é uma especificação incremental do comportamento.

Benefícios reais e mensuráveis: design emergente (a interface nasce do uso, não da imaginação), cobertura automática (100% do código foi escrito PARA um teste), refatoração segura (a suite de testes é a rede de segurança), especificação executável (os testes documentam o comportamento), feedback em SEGUNDOS não em dias (ciclo < 5 minutos).

Quando TDD é difícil: código legado sem testes (precisa de refatoração segura primeiro — "Working Effectively with Legacy Code"), infraestrutura pura (UI, banco, configuração), e domínios completamente desconhecidos (spike/protótipo descartável antes).

Outside-in (London School): começa pelos testes de alto nível (Controller, UseCase) usando mocks nas camadas inferiores, descendo. Inside-out (Chicago School): começa pelas unidades menores (Value Objects, Entities) subindo. Ambas são válidas — escolha por contexto.

TDD no dia a dia corporativo: muitas empresas fazem "kata time" — 30 minutos de prática de TDD antes de iniciar código de produção, até o ciclo ficar automático.`,
      code: `// ══════════════════════════════════════════════
// TDD COMPLETO: Implementando Conta.Sacar()
// ══════════════════════════════════════════════

// ─── PASSO 1 — RED: teste que NÃO COMPILA ───
[Fact]
public void Sacar_SaldoSuficiente_DebitaSaldo()
{
    // Arrange
    var conta = new ContaBuilder().ComSaldo(500).Build();

    // Act
    var resultado = conta.Sacar(Dinheiro.BRL(200));
    // ↑ NÃO COMPILA — Sacar() ainda não existe

    // Assert
    resultado.IsSuccess.Should().BeTrue();
    conta.Saldo.Should().Be(Dinheiro.BRL(300));
}
// dotnet test → FALHA (não compila) ← Red esperado ✗

// ─── PASSO 2 — GREEN: código MÍNIMO ───
// Na classe Conta:
public Result Sacar(Dinheiro valor)
{
    _saldo -= valor;  // implementação mínima
    return Result.Success();
}
// dotnet test → VERDE ✓

// ─── PASSO 3 — RED: novo teste que revela gap ───
[Fact]
public void Sacar_SaldoInsuficiente_RetornaFalha()
{
    // Arrange
    var conta = new ContaBuilder().ComSaldo(100).Build();

    // Act
    var resultado = conta.Sacar(Dinheiro.BRL(500));

    // Assert
    resultado.IsSuccess.Should().BeFalse();
    resultado.Error.Should().Contain("insuficiente");
}
// dotnet test → FALHA ← Red esperado ✗
// (implementação atual não valida saldo)

// ─── PASSO 4 — GREEN: adiciona a validação ───
public Result Sacar(Dinheiro valor)
{
    if (_saldo < valor)
        return Result.Failure("Saldo insuficiente");

    _saldo -= valor;
    return Result.Success();
}
// dotnet test → VERDE ✓ (ambos os testes passam)

// ─── PASSO 5 — REFACTOR: melhorar sem quebrar ───
public Result Sacar(Dinheiro valor)
{
    if (!TemSaldoSuficientePara(valor))
        return Result.Failure(
            $"Saldo insuficiente. Disponível: {_saldo}");

    _saldo -= valor;
    AddDomainEvent(new SaqueRealizadoEvent(Id, valor));
    return Result.Success();
}

private bool TemSaldoSuficientePara(Dinheiro valor)
    => _saldo >= valor;
// dotnet test → VERDE ✓ (refatorou sem quebrar)

// ─── PASSO 6 — RED: próxima iteração ───
[Fact]
public void Sacar_ContaBloqueada_RetornaFalha()
{
    // Arrange
    var conta = new ContaBuilder()
        .ComSaldo(1000).Bloqueada().Build();

    // Act
    var resultado = conta.Sacar(Dinheiro.BRL(100));

    // Assert
    resultado.IsSuccess.Should().BeFalse();
    resultado.Error.Should().Contain("bloqueada");
}
// dotnet test → FALHA ← Red (conta bloqueada não tratada)
// Ciclo continua...`,
      checklist: [
        "Implementar uma funcionalidade nova usando TDD puro (teste antes do código)",
        "Praticar: escrever o teste que não compila, rodar, depois implementar o mínimo",
        "Fazer pelo menos 5 iterações Red-Green-Refactor para a funcionalidade",
        "Verificar que 100% dos testes passam após cada Refactor",
        "Cronometrar: cada ciclo deve levar menos de 5 minutos",
      ],
      quiz: [
        {
          question:
            "Por que no TDD o teste deve FALHAR antes de escrever o código de produção?",
          options: [
            "É apenas ritual sem propósito técnico",
            "Garante que o teste realmente testa algo — se já passa antes da implementação, ele não está verificando o comportamento correto. Red confirma que o teste detectaria uma regressão",
            "xUnit exige que testes falhem primeiro",
            "Para documentar o bug antes da correção",
          ],
          answer: 1,
          explanation:
            "Um teste que já passa sem implementação é inútil — não protege contra nada. Red prova que o teste é capaz de detectar a AUSÊNCIA do comportamento.",
        },
        {
          question:
            "O que significa 'código mínimo que faz o teste passar' no Green?",
          options: [
            "Escrever a solução completa e otimizada de uma vez",
            "Escrever apenas o suficiente para o teste atual passar — mesmo return true hardcoded. O próximo teste forçará a implementação real, mantendo o foco incremental e o design emergente",
            "Escrever apenas comentários e TODOs",
            "Implementar sem tratamento de erro",
          ],
          answer: 1,
          explanation:
            "O Green mínimo parece 'trapaça' mas é estratégia: cada teste adicionado no Red restringe o espaço de soluções possíveis até que só a implementação correta sobreviva.",
        },
        {
          question:
            "Qual a diferença entre TDD Outside-in (London) e Inside-out (Chicago)?",
          options: [
            "São nomes diferentes para a mesma abordagem",
            "Outside-in começa pelos testes de alto nível (Controller/UseCase) usando mocks nas camadas inferiores, descendo. Inside-out começa pelas unidades menores (Value Objects) subindo para camadas mais altas",
            "Outside-in usa xUnit e Inside-out usa NUnit",
            "London School não usa mocks",
          ],
          answer: 1,
          explanation:
            "London School (Outside-in) usa muitos mocks e é boa para descobrir interfaces. Chicago (Inside-out) é mais simples e funciona bem com DDD onde o domínio é bem conhecido.",
        },
      ],
    },
    {
      id: "m16t2",
      moduleId: "m16",
      title: "Design Emergente via TDD",
      theory: `O benefício menos óbvio do TDD — e possivelmente o mais valioso: ele FORÇA interfaces limpas. Se você não consegue testar sem subir um banco, a dependência está errada. Se o setup do teste tem 25 linhas, a classe tem responsabilidades demais.

"Código difícil de testar é código mal projetado" — essa frase resume a relação entre TDD e SOLID. Os testes são um ESPELHO do design. Um espelho que não mente.

Como TDD revela problemas de design em tempo real:
- Setup com muitos mocks → classe tem dependências demais → viola SRP
- Parâmetros demais no construtor → classe faz coisas demais → viola SRP
- Mock de método concreto impossível → acoplamento a implementação → viola DIP
- Teste precisa de estado global → hidden dependency → viola DIP
- Cenários de teste explodem exponencialmente → lógica condicional complexa → viola OCP

O custo do mock setup é um DIAGNÓSTICO: se criar o teste exige 20 linhas de setup com 7 mocks, a classe sob teste tem 7 dependências. Isso é um code smell. A solução não é aceitar o setup longo — é refatorar a classe.

Regra prática: se o Arrange tem mais de 15 linhas, o código de produção tem um problema de design. Os testes estão te dizendo isso — escute.

"Listening to the tests" (ouvir os testes): o feedback dos testes sobre o design é frequentemente mais valioso que a verificação do comportamento em si. Testes difíceis de escrever indicam acoplamento, responsabilidades excessivas ou dependências incorretas.

TDD e SOLID se reforçam mutuamente: testar com injeção de dependência natural leva ao DIP; testar unidades isoladas leva ao SRP; testar comportamento extensível leva ao OCP.

Quando NÃO deixar o design emergir via TDD: domínios completamente desconhecidos onde você ainda não sabe qual é a interface correta. Nesses casos, um spike (protótipo descartável) é melhor que TDD cego. Explore primeiro, depois reimplemente com TDD e clareza.`,
      code: `// ══════════════════════════════════════════════
// ANTES: Setup longo = classe com design ruim
// ══════════════════════════════════════════════

// ❌ ANTI-PATTERN: 7 dependências = 7 mocks = SRP violado
[Fact]
public async Task Processar_PedidoValido_Sucesso()
{
    // Arrange — 25+ linhas de setup revelam o problema
    var mockContaRepo = new Mock<IContaRepository>();
    var mockNotificacao = new Mock<INotificacaoService>();
    var mockEmail = new Mock<IEmailService>();
    var mockSms = new Mock<ISmsService>();
    var mockAuditoria = new Mock<IAuditoriaService>();
    var mockEstoque = new Mock<IEstoqueService>();
    var mockAntifraude = new Mock<IAntiFraudeService>();

    // ... 20 linhas configurando cada mock ...
    mockContaRepo.Setup(r => r.GetByIdAsync(It.IsAny<ContaId>()))
        .ReturnsAsync(conta);
    mockEstoque.Setup(e => e.VerificarDisponibilidade(It.IsAny<ProdutoId>()))
        .ReturnsAsync(true);
    mockAntifraude.Setup(a => a.ValidarTransacao(It.IsAny<Transacao>()))
        .ReturnsAsync(ResultadoFraude.Aprovado);

    var sut = new ProcessarPedidoService(
        mockContaRepo.Object, mockNotificacao.Object,
        mockEmail.Object, mockSms.Object,
        mockAuditoria.Object, mockEstoque.Object,
        mockAntifraude.Object); // 7 dependências!

    // Act
    var resultado = await sut.ProcessarAsync(pedido);

    // Assert
    resultado.IsSuccess.Should().BeTrue();
}
// DIAGNÓSTICO: ProcessarPedidoService viola SRP — faz demais

// ══════════════════════════════════════════════
// DEPOIS: Design emergido via TDD — classes menores
// ══════════════════════════════════════════════

// ✅ ValidarPedidoService — 2 dependências, setup de 5 linhas
[Fact]
public async Task Validar_PedidoComEstoque_Aprovado()
{
    // Arrange — setup limpo e focado
    var mockEstoque = new Mock<IEstoqueService>();
    var mockAntifraude = new Mock<IAntiFraudeService>();
    mockEstoque.Setup(e => e.VerificarDisponibilidade(produtoId))
        .ReturnsAsync(true);
    mockAntifraude.Setup(a => a.ValidarTransacao(transacao))
        .ReturnsAsync(ResultadoFraude.Aprovado);

    var sut = new ValidarPedidoService(
        mockEstoque.Object, mockAntifraude.Object);

    // Act
    var resultado = await sut.ValidarAsync(pedido);

    // Assert
    resultado.IsSuccess.Should().BeTrue();
}

// ✅ NotificarClienteService — 2 dependências
[Fact]
public async Task Notificar_PedidoAprovado_EnviaEmailESms()
{
    // Arrange
    var mockEmail = new Mock<IEmailService>();
    var mockSms = new Mock<ISmsService>();
    var sut = new NotificarClienteService(
        mockEmail.Object, mockSms.Object);

    // Act
    await sut.NotificarAsync(pedido, ResultadoPedido.Aprovado);

    // Assert
    mockEmail.Verify(e => e.EnviarAsync(
        It.IsAny<string>(), It.IsAny<string>()), Times.Once);
    mockSms.Verify(s => s.EnviarAsync(
        It.IsAny<string>(), It.IsAny<string>()), Times.Once);
}

// Resultado: 3 classes com 2 dependências cada
// em vez de 1 classe com 7 dependências
// Arrange de cada teste: 5-8 linhas (antes: 25+)`,
      checklist: [
        "Encontrar um teste no projeto com Arrange maior que 15 linhas",
        "Identificar qual princípio SOLID está sendo violado pela classe testada",
        "Refatorar a classe dividindo responsabilidades em classes menores",
        "Verificar que o Arrange de cada novo teste cabe em 8 linhas",
        "Documentar no comentário: 'Refatorei X porque o teste revelou Y'",
      ],
      quiz: [
        {
          question:
            "O que um setup longo de mock em um teste revela sobre o design?",
          options: [
            "Que o teste é complexo — mas a classe está bem projetada",
            "Que a classe sob teste tem dependências demais, provavelmente violando o SRP — o teste está dando feedback sobre o design: simplifique a classe dividindo responsabilidades",
            "Que Moq está sendo mal utilizado",
            "Que o teste precisa de mais [Theory] em vez de [Fact]",
          ],
          answer: 1,
          explanation:
            "7 mocks = 7 dependências = 7 razões para mudar. SRP diz: uma classe deve ter UMA razão para mudar. O setup longo é o diagnóstico — a refatoração é o tratamento.",
        },
        {
          question:
            "O que significa 'listening to the tests' no contexto de TDD?",
          options: [
            "Escutar o output de erros dos testes no terminal",
            "Usar a dificuldade de escrever testes como feedback sobre a qualidade do design — testes difíceis indicam acoplamento excessivo, muitas responsabilidades ou dependências incorretas",
            "Usar logs dentro dos testes para debugar",
            "Ler a documentação dos frameworks de teste",
          ],
          answer: 1,
          explanation:
            "O teste que mais dá trabalho para escrever é o que mais revela sobre o design. Se criar o mock setup é doloroso, imagine manter a classe em produção.",
        },
        {
          question: "Quando um spike (protótipo descartável) é melhor que TDD?",
          options: [
            "Nunca — TDD deve ser usado sempre sem exceção",
            "Quando o domínio é desconhecido e você não sabe qual é a interface correta — explorar com código descartável primeiro, aprender o domínio, depois reimplementar com TDD e clareza",
            "Quando o prazo está curto e não há tempo para testes",
            "Para todo código de infraestrutura",
          ],
          answer: 1,
          explanation:
            "TDD funciona melhor quando você sabe O QUE testar. Se o domínio é novo, um spike rápido revela as interfaces certas — depois TDD reimplementa com segurança.",
        },
      ],
    },
    {
      id: "m16t3",
      moduleId: "m16",
      title: "BDD com SpecFlow: Gherkin e Given-When-Then",
      theory: `BDD (Behavior-Driven Development) vs TDD: TDD guia o design do código; BDD alinha o comportamento do sistema com as necessidades do NEGÓCIO usando linguagem natural. TDD fala a língua do desenvolvedor; BDD fala a língua do Product Owner.

Gherkin: linguagem de especificação legível por não-técnicos. Qualquer pessoa que entenda o domínio (analista de negócio, QA, PO, gerente) consegue ler e validar um arquivo .feature sem saber programar.

Palavras-chave do Gherkin: Feature (descreve a funcionalidade), Scenario (um caso de uso específico), Given (pré-condição), When (ação), Then (resultado esperado), And/But (passos adicionais). Scenario Outline + Examples: parametrização — equivalente ao [Theory] do xUnit.

SpecFlow: a ferramenta .NET que conecta Gherkin com código C#. Instalação: dotnet add package SpecFlow.xUnit e dotnet add package SpecFlow.Tools.MsBuild.Generation. O SpecFlow gera um teste xUnit para cada Scenario automaticamente.

Step Definitions: classes C# com métodos decorados por [Given], [When], [Then]. Cada regex nos atributos casa com uma linha do Gherkin. O SpecFlow injeta os parâmetros capturados (R\\$ 1000,00 → decimal 1000).

Living Documentation: os cenários Gherkin são simultaneamente especificação (o que o sistema deve fazer), documentação (como funciona), e teste (prova que funciona). Quando o Gherkin roda como teste e passa, a documentação está ATUALIZADA por definição.

Quando BDD faz sentido: projetos com analistas de negócio, QAs e POs que participam ativamente da definição dos cenários. O Gherkin é a PONTE entre técnico e negócio. Quando NÃO faz sentido: time puramente técnico sem stakeholders revisando cenários — o overhead do Gherkin não agrega valor sem colaboração entre papéis.

Scenario Outline com Examples é o equivalente do [Theory] com [InlineData] — testa o mesmo fluxo com dados diferentes. A tabela Examples documenta os cenários de forma visual e organizada.`,
      code: `// ══════════════════════════════════════════════
// Arquivo: Features/Transferencia.feature
// ══════════════════════════════════════════════
// Feature: Transferência entre contas
//   Para movimentar dinheiro entre contas
//   Como titular de uma conta
//   Eu quero realizar transferências
//
//   Scenario: Transferência com saldo suficiente
//     Given que tenho uma conta com saldo de R$ 1000,00
//     And existe uma conta destino com saldo de R$ 0,00
//     When realizo uma transferência de R$ 300,00
//     Then minha conta deve ter saldo de R$ 700,00
//     And a conta destino deve ter saldo de R$ 300,00
//
//   Scenario: Transferência com saldo insuficiente
//     Given que tenho uma conta com saldo de R$ 100,00
//     When tento transferir R$ 500,00
//     Then a operação deve ser recusada
//     And minha conta deve manter saldo de R$ 100,00
//
//   Scenario Outline: Validação de valor
//     Given que tenho uma conta com saldo de R$ <saldo>
//     When tento transferir R$ <valor>
//     Then a operação deve <resultado>
//
//     Examples:
//       | saldo  | valor  | resultado     |
//       | 500    | 300    | ser aprovada  |
//       | 100    | 500    | ser recusada  |
//       | 1000   | 0      | ser recusada  |

// ══════════════════════════════════════════════
// Step Definitions em C#
// ══════════════════════════════════════════════
using TechTalk.SpecFlow;

[Binding]
public class TransferenciaSteps
{
    private Conta _contaOrigem = null!;
    private Conta _contaDestino = null!;
    private Result _resultado = null!;

    [Given(@"que tenho uma conta com saldo de R\\$ (.*)")]
    public void DadoQueMinhaContaTemSaldo(decimal saldo)
    {
        _contaOrigem = new ContaBuilder()
            .ComSaldo(saldo).Build();
    }

    [Given(@"existe uma conta destino com saldo de R\\$ (.*)")]
    public void DadoQueExisteContaDestinoComSaldo(decimal saldo)
    {
        _contaDestino = new ContaBuilder()
            .ComCpf("418.236.780-90")
            .ComSaldo(saldo).Build();
    }

    [When(@"realizo uma transferência de R\\$ (.*)")]
    public void QuandoRealizoTransferencia(decimal valor)
    {
        _resultado = _contaOrigem.Transferir(
            Dinheiro.BRL(valor), _contaDestino);
    }

    [When(@"tento transferir R\\$ (.*)")]
    public void QuandoTentoTransferir(decimal valor)
    {
        _contaDestino ??= new ContaBuilder()
            .ComCpf("418.236.780-90").Build();
        _resultado = _contaOrigem.Transferir(
            Dinheiro.BRL(valor), _contaDestino);
    }

    [Then(@"minha conta deve ter saldo de R\\$ (.*)")]
    public void EntaoMinhaContaDeveTerSaldo(decimal esperado)
    {
        _contaOrigem.Saldo.Should()
            .Be(Dinheiro.BRL(esperado));
    }

    [Then(@"a conta destino deve ter saldo de R\\$ (.*)")]
    public void EntaoContaDestinoDeveTerSaldo(decimal esperado)
    {
        _contaDestino.Saldo.Should()
            .Be(Dinheiro.BRL(esperado));
    }

    [Then(@"a operação deve ser recusada")]
    public void EntaoOperacaoDeveSerRecusada()
    {
        _resultado.IsSuccess.Should().BeFalse();
    }

    [Then(@"a operação deve ser aprovada")]
    public void EntaoOperacaoDeveSerAprovada()
    {
        _resultado.IsSuccess.Should().BeTrue();
    }

    [Then(@"minha conta deve manter saldo de R\\$ (.*)")]
    public void EntaoContaDeveManterSaldo(decimal esperado)
    {
        _contaOrigem.Saldo.Should()
            .Be(Dinheiro.BRL(esperado));
    }
}`,
      checklist: [
        "Instalar SpecFlow.xUnit e SpecFlow.Tools.MsBuild.Generation no projeto",
        "Criar Transferencia.feature com os 3 cenários do exemplo",
        "Implementar todas as Step Definitions com FluentAssertions",
        "Adicionar cenário: transferência de conta bloqueada deve ser recusada",
        "Verificar que os cenários aparecem como testes no Test Explorer",
      ],
      quiz: [
        {
          question:
            "Qual a principal vantagem do Gherkin sobre testes escritos em C# puro?",
          options: [
            "Gherkin compila mais rápido que C#",
            "Gherkin é legível por analistas de negócio, QAs e POs — permite que não-desenvolvedores escrevam e revisem cenários de teste, criando documentação viva alinhada com o negócio",
            "C# não suporta testes legíveis com nomes descritivos",
            "Gherkin tem melhor cobertura de código",
          ],
          answer: 1,
          explanation:
            "O PO pode ler 'Given que tenho conta com R$ 1000' e validar se o cenário está certo. Não precisa ler C# para isso. Essa ponte é o valor real do BDD.",
        },
        {
          question: "O que é 'living documentation' no contexto de BDD?",
          options: [
            "Um arquivo README atualizado manualmente pelo time",
            "Os arquivos .feature que descrevem o comportamento em Gherkin — são especificação executável e documentação viva. Se o teste passa, a documentação está atualizada por definição",
            "Um dashboard de cobertura de testes gerado automaticamente",
            "Comentários XML nos controllers que geram Swagger",
          ],
          answer: 1,
          explanation:
            "Documentação que desatualiza é inútil. Feature files que RODAM como testes nunca desatualizam — se o comportamento mudar, o teste falha e a feature é atualizada.",
        },
        {
          question: "Quando BDD com SpecFlow NÃO é a melhor escolha?",
          options: [
            "Nunca — BDD deve ser usado em todos os projetos",
            "Quando o time é puramente técnico sem analistas de negócio ou QAs revisando cenários — o overhead do Gherkin não agrega valor sem colaboração entre papéis distintos",
            "Quando o projeto é grande demais",
            "Quando já existem testes de unidade com boa cobertura",
          ],
          answer: 1,
          explanation:
            "BDD sem a ponte entre técnico e negócio é apenas overhead burocrático. Se o time inteiro lê C# fluentemente, xUnit com bons nomes é mais direto.",
        },
      ],
    },
    {
      id: "m16t4",
      moduleId: "m16",
      title: "Pirâmide de Testes: Estratégia Corporativa",
      theory: `A Pirâmide de Testes de Mike Cohn: base larga de testes de unidade, meio de integração, pico de end-to-end. Cada camada tem propósito, custo e velocidade diferentes. Entender a pirâmide é entender ONDE investir o esforço de teste para máximo retorno.

UNIDADE (base — 70% dos testes):
Velocidade: < 1ms por teste. Roda centenas em segundos. Foco: lógica de negócio isolada — Value Objects, Entities, Domain Services. Custo de manutenção: baixo se testar COMPORTAMENTO, não implementação. Meta de cobertura: Domain 90%+, Application 80%+.

INTEGRAÇÃO (meio — 20% dos testes):
Velocidade: 100ms a 10s por teste (TestContainers). Foco: componentes integrados — Repository + DB, Controller + UseCase + DB. Custo de manutenção: médio. Meta: fluxos principais e constraints de banco.

E2E (topo — 10% dos testes):
Velocidade: 1s a 30s por teste (stack completa). Foco: fluxos CRÍTICOS de negócio — apenas o happy path dos casos de uso mais importantes. Custo de manutenção: ALTO — quebram com mudanças de UI, contrato ou infraestrutura. NÃO teste cada cenário de erro com E2E — cubra erros com integração ou unitários.

Anti-patterns clássicos:
- Pirâmide invertida (sorotório): muitos E2E, poucos unitários → suite lenta, cara, difícil de diagnosticar falhas.
- Sorvete: muitos E2E manuais no topo, nada automatizado no meio → não escala.
- Cone de sorvete: muitos testes manuais, pouca automação → insustentável.

Alternativa moderna — Troféu de Testes (Testing Library): base de testes estáticos (TypeScript, linters), meio largo de integração, topo fino de E2E. Popular no frontend, influenciando backend.

Meta de cobertura por camada para projeto corporativo:
- Domain: 90%+ branch coverage (sem dependências, teste trivial)
- Application: 80%+ branch coverage (com mocks)
- Infrastructure: 60%+ (testes de integração com DB)
- Controllers/API: happy paths E2E + casos de erro por integração

Pipeline CI/CD (preview Fase 7): dotnet test /p:Threshold=80 /p:ThresholdType=branch /p:ThresholdStat=total — se a cobertura cair abaixo de 80%, o build FALHA. Ninguém faz merge sem atingir o threshold.

A pirâmide é uma diretriz de investimento, não uma regra rígida. O objetivo é maximizar CONFIANÇA por minuto de teste. Unitários dão confiança barata. E2E dão confiança cara.`,
      code: `// ══════════════════════════════════════════════
// Estrutura completa do projeto de testes
// seguindo a Pirâmide de Testes
// ══════════════════════════════════════════════

// SistemaFinanceiro.sln
// │
// ├── src/
// │   ├── SistemaFinanceiro.Domain/
// │   ├── SistemaFinanceiro.Application/
// │   ├── SistemaFinanceiro.Infrastructure/
// │   └── SistemaFinanceiro.API/
// │
// └── tests/
//     ├── SistemaFinanceiro.Domain.Tests/       ← BASE (70%)
//     │   ├── ContaTests.cs         (15+ testes)
//     │   ├── DinheiroTests.cs      (10+ testes)
//     │   ├── CpfTests.cs           (8+ testes)
//     │   └── TransferenciaServiceTests.cs
//     │
//     ├── SistemaFinanceiro.Application.Tests/  ← MEIO (20%)
//     │   ├── AbrirContaUseCaseTests.cs
//     │   ├── RealizarTransferenciaUseCaseTests.cs
//     │   └── GerarExtratoUseCaseTests.cs
//     │
//     ├── SistemaFinanceiro.IntegrationTests/   ← MEIO-ALTO
//     │   ├── ContaRepositoryTests.cs
//     │   └── TransferenciaIntegrationTests.cs
//     │
//     ├── SistemaFinanceiro.E2ETests/           ← TOPO (10%)
//     │   └── FluxoTransferenciaE2ETests.cs
//     │
//     └── SistemaFinanceiro.BDD/                ← CROSS
//         └── Features/Transferencia.feature

// ══════════════════════════════════════════════
// Comando para rodar com threshold obrigatório
// ══════════════════════════════════════════════

// Rodar TODOS os testes com cobertura:
// dotnet test --collect:"XPlat Code Coverage"
//   /p:Threshold=80
//   /p:ThresholdType=branch
//   /p:ThresholdStat=total

// Gerar relatório HTML:
// dotnet tool install -g dotnet-reportgenerator-globaltool
// reportgenerator
//   -reports:"**/coverage.cobertura.xml"
//   -targetdir:"coveragereport"
//   -reporttypes:Html

// ══════════════════════════════════════════════
// Exemplo: rodando testes por camada
// ══════════════════════════════════════════════

// Apenas Domain (rápido, sem Docker):
// dotnet test SistemaFinanceiro.Domain.Tests
//   --logger "console;verbosity=normal"

// Apenas Application (rápido, com mocks):
// dotnet test SistemaFinanceiro.Application.Tests

// Integração (requer Docker):
// dotnet test SistemaFinanceiro.IntegrationTests

// E2E (requer Docker + stack completa):
// dotnet test SistemaFinanceiro.E2ETests

// TUDO junto com cobertura:
// dotnet test SistemaFinanceiro.sln
//   /p:CollectCoverage=true
//   /p:CoverletOutputFormat=cobertura
//   /p:Threshold=80`,
      checklist: [
        "Auditar o projeto: qual a distribuição atual de testes por camada?",
        "Calcular o ratio unitários/integração/E2E e comparar com a pirâmide ideal",
        "Identificar os 3 fluxos críticos de negócio que DEVEM ter teste E2E",
        "Configurar threshold de 80% de branch coverage no dotnet test",
        "Criar script run-tests.sh com os comandos de teste separados por camada",
      ],
      quiz: [
        {
          question:
            "Por que a pirâmide de testes tem a base larga de testes de unidade?",
          options: [
            "Porque são mais fáceis de escrever que integração",
            "Testes de unidade são mais rápidos (< 1ms), baratos de manter e precisos para isolar falhas. Uma pirâmide invertida (muitos E2E, poucos unitários) resulta em suite lenta, cara e difícil de diagnosticar",
            "Unitários automaticamente geram maior cobertura",
            "xUnit só executa testes de unidade eficientemente",
          ],
          answer: 1,
          explanation:
            "1000 testes de unidade rodam em 2 segundos. 1000 E2E rodam em 30 minutos. O feedback de unidade é instantâneo; E2E é slow — e quando falha, não aponta onde.",
        },
        {
          question: "O que é a 'pirâmide invertida' e por que é problemática?",
          options: [
            "Uma pirâmide com mais testes de integração que unitários",
            "Muitos testes E2E e poucos unitários — a suite é lenta, os testes quebram por qualquer mudança de infra e é difícil isolar onde está o bug quando falha",
            "Uma pirâmide com foco em testes de performance",
            "Usar mais Moq que FluentAssertions nos testes",
          ],
          answer: 1,
          explanation:
            "Suite E2E heavy: 30 minutos para rodar, falha por timeout de banco, log diz 'assertion failed' sem indicar se o bug é no controller, use case ou query.",
        },
        {
          question:
            "Qual tipo de cenário deve ter teste E2E (e não apenas unitário)?",
          options: [
            "Todos os cenários de negócio para cobertura completa",
            "Apenas os fluxos críticos (happy path dos casos de uso mais importantes) — E2E é caro demais para cobrir todos os cenários. Erros são melhor cobertos por integração ou unitários",
            "Apenas cenários de erro e edge cases",
            "Cenários que envolvem banco de dados",
          ],
          answer: 1,
          explanation:
            "E2E do happy path de transferência: cria contas, transfere, verifica saldos. Cenários de erro (saldo insuficiente, CPF inválido) são cobertos por unitários — mais rápido e preciso.",
        },
      ],
    },
    {
      id: "m16proj",
      moduleId: "m16",
      title: "🧪 Projeto: Suite de Testes do Sistema Financeiro",
      theory: `Este é o projeto integrador da Fase 4: construir a suite COMPLETA de testes do Sistema Financeiro da Fase 3, aplicando os 4 módulos de forma integrada. Não é um exercício isolado — é a prova de que você domina cada técnica e sabe quando usar cada uma.

ESTRUTURA DO PROJETO DE TESTES:

SistemaFinanceiro.Domain.Tests/ (pirâmide base — 70%)
  ContaTests.cs — 15+ testes: Abrir, Depositar, Sacar, Transferir, estados, limites
  DinheiroTests.cs — 10+ testes: criação, soma, subtração, comparação, moedas
  CpfTests.cs — 8+ testes com [Theory]: válido, inválido, zeros, sequencial, formatação
  TransferenciaServiceTests.cs — Domain Service puro, sem Mock

SistemaFinanceiro.Application.Tests/ (pirâmide meio — 20%)
  AbrirContaUseCaseTests.cs — 3 cenários: sucesso, CPF duplicado, validação
  RealizarTransferenciaUseCaseTests.cs — 4 cenários: sucesso, saldo insuficiente, conta inexistente, conta bloqueada
  GerarExtratoUseCaseTests.cs — 2 cenários: com transações, sem transações

SistemaFinanceiro.IntegrationTests/ (pirâmide meio-alto)
  ContaRepositoryTests.cs — TestContainers SQL Server, CRUD real, constraints FK
  TransferenciaIntegrationTests.cs — WebApplicationFactory + TestContainers, fluxo HTTP completo

SistemaFinanceiro.BDD/ (cross-camada)
  Features/Transferencia.feature — 3 cenários Gherkin com Step Definitions
  Features/AberturaConta.feature — 2 cenários de abertura de conta

META DE COBERTURA:
  Domain: 90%+ branch coverage (objetos puros, sem desculpa)
  Application: 80%+ branch coverage (com Moq)
  Total: 80%+ (threshold no dotnet test — build falha se cair abaixo)

RELATÓRIO FINAL:
  Gerar relatório HTML com reportgenerator. Documentar os pontos NÃO cobertos com justificativa:
  "Program.cs excluído — apenas configuração de DI"
  "Migrations excluídas — geradas automaticamente pelo EF Core"
  Decisão consciente é diferente de negligência.

GITFLOW DO PROJETO:
  feature/testes-domain → primeiro PR (testes mais simples)
  feature/testes-application → segundo PR (adiciona Moq)
  feature/testes-integracao → terceiro PR (adiciona Docker)
  feature/testes-bdd → quarto PR (adiciona SpecFlow)
  release/v2.0.0-com-testes → merge final no main`,
      code: `// ══════════════════════════════════════════════
// Script completo: run-tests.sh
// Executa toda a suite e gera relatório
// ══════════════════════════════════════════════

// #!/bin/bash
// set -e  # para na primeira falha
//
// echo "🧪 [1/4] Testes de Domínio..."
// dotnet test SistemaFinanceiro.Domain.Tests \\
//   /p:CollectCoverage=true \\
//   /p:CoverletOutputFormat=cobertura \\
//   /p:CoverletOutput=./coverage/domain.xml
//
// echo "🧪 [2/4] Testes de Aplicação..."
// dotnet test SistemaFinanceiro.Application.Tests \\
//   /p:CollectCoverage=true \\
//   /p:CoverletOutputFormat=cobertura \\
//   /p:CoverletOutput=./coverage/application.xml
//
// echo "🐳 [3/4] Testes de Integração (Docker)..."
// dotnet test SistemaFinanceiro.IntegrationTests
//
// echo "📋 [4/4] Testes BDD..."
// dotnet test SistemaFinanceiro.BDD
//
// echo "📊 Gerando relatório de cobertura..."
// reportgenerator \\
//   -reports:"./coverage/*.xml" \\
//   -targetdir:"./coveragereport" \\
//   -reporttypes:Html
//
// echo "✅ Relatório: ./coveragereport/index.html"
// echo "🎯 Verifique: Domain 90%+ | App 80%+ | Total 80%+"

// ══════════════════════════════════════════════
// Exemplo de teste por camada — resumo integrado
// ══════════════════════════════════════════════

// DOMAIN — puro, sem dependência
[Fact]
public void Depositar_ValorPositivo_AumentaSaldo()
{
    // Arrange
    var conta = new ContaBuilder().ComSaldo(500).Build();

    // Act
    conta.Depositar(Dinheiro.BRL(200));

    // Assert
    conta.Saldo.Should().Be(Dinheiro.BRL(700));
}

// APPLICATION — com Moq
[Fact]
public async Task Execute_TransferenciaValida_Sucesso()
{
    // Arrange
    var mockRepo = new Mock<IContaRepository>();
    mockRepo.Setup(r => r.GetByIdAsync(origemId))
        .ReturnsAsync(contaOrigem);
    mockRepo.Setup(r => r.GetByIdAsync(destinoId))
        .ReturnsAsync(contaDestino);
    var sut = new RealizarTransferenciaUseCase(
        mockRepo.Object, Mock.Of<INotificacaoService>());

    // Act
    var resultado = await sut.ExecuteAsync(command);

    // Assert
    resultado.IsSuccess.Should().BeTrue();
    mockRepo.Verify(r => r.SaveChangesAsync(), Times.Once);
}

// INTEGRAÇÃO — WebApplicationFactory + TestContainers
[Fact]
public async Task POST_AbrirConta_Retorna201()
{
    // Arrange
    var request = new { Cpf = "529.982.247-25", SaldoInicial = 0 };

    // Act
    var response = await _client.PostAsJsonAsync(
        "/api/contas", request);

    // Assert
    response.StatusCode.Should().Be(HttpStatusCode.Created);
}`,
      checklist: [
        "Criar os 4 projetos de teste com a estrutura descrita",
        "Implementar os 15+ testes de Domain passando no dotnet test",
        "Implementar os 9 testes de Application com Moq passando",
        "Implementar 3 testes de Integração com TestContainers",
        "Criar 3 cenários BDD em Gherkin com Step Definitions completas",
        "Rodar o script run-tests.sh e verificar 80%+ de cobertura total",
        "Fazer merge do release/v2.0.0-com-testes no main via GitFlow",
      ],
      quiz: [
        {
          question:
            "Por que separar Domain.Tests de Application.Tests em projetos diferentes?",
          options: [
            "É apenas organização — um projeto único seria igualmente eficiente",
            "Projetos separados têm dependências separadas — Domain.Tests não precisa de Moq (domain é puro); Application.Tests precisa. Separar mantém cada projeto com dependências mínimas e propósito claro",
            "xUnit não funciona em um único projeto grande",
            "Para rodar testes em paralelo entre projetos",
          ],
          answer: 1,
          explanation:
            "Domain.Tests com zero referência a Moq PROVA que o domínio é puro. Se alguém adicionar Mock<> num teste de domínio, está errado — e a ausência do pacote impede.",
        },
        {
          question:
            "Qual a ordem correta de implementar os testes no projeto final?",
          options: [
            "E2E primeiro para garantir que os fluxos funcionam",
            "Domain Tests primeiro (mais simples, sem dependências), depois Application (com Moq), depois Integration (com TestContainers) — seguindo a pirâmide de baixo para cima, validando cada camada incrementalmente",
            "Qualquer ordem é igualmente eficiente",
            "Integration Tests primeiro para garantir que o banco funciona",
          ],
          answer: 1,
          explanation:
            "Bottom-up: Domain passa? Application usa o Domain testado. Integration usa a Application testada. Cada camada confia na anterior. Top-down força debugging em múltiplas camadas.",
        },
        {
          question:
            "Por que documentar os pontos NÃO cobertos do relatório de cobertura?",
          options: [
            "Para justificar nota baixa de cobertura ao tech lead",
            "Para mostrar decisão consciente — nem toda linha precisa ser testada. Excluir Program.cs e Migrations é intencional, não negligência. Documentar torna a decisão rastreável e revisável em code review",
            "xUnit exige essa documentação para funcionar",
            "Para o SonarCloud aceitar o relatório automaticamente",
          ],
          answer: 1,
          explanation:
            "80% com justificativa > 100% com testes inúteis. 'Program.cs excluído — DI config' mostra que você sabe o que vale e o que não vale testar.",
        },
      ],
    },
  ],
};
