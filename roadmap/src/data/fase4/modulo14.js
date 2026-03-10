export const MODULO_14 = {
  id: "m14",
  title: "Mocks e Isolamento com Moq",
  icon: "🎭",
  week: "Semana 13-14",
  color: "#8B5CF6",
  topics: [
    {
      id: "m14t1",
      moduleId: "m14",
      title: "Doubles de Teste: Stub, Mock, Fake, Spy",
      theory: `O vocabulário preciso que diferencia um desenvolvedor pleno de um sênior. Todos são "test doubles" — substitutos de dependências reais nos testes. O conceito vem do livro "xUnit Test Patterns" de Gerard Meszaros e é cobrado em entrevistas em empresas como Nubank, iFood e PicPay.

Dummy: passado mas nunca usado — satisfaz uma assinatura de método sem importar o valor. Exemplo: um ILogger<T> que o Use Case exige no construtor mas o teste não verifica logs.

Stub: retorna respostas pré-configuradas sem verificar se foi chamado. Quando usar: simular retorno de repositório (conta existe, conta não existe). O stub diz "quando perguntarem, responda isso" mas não se importa se perguntaram ou não.

Fake: implementação funcional simplificada. Um InMemoryRepository que usa Dictionary<TKey, TValue> é o exemplo clássico. Quando usar: quando o Stub fica complexo demais com múltiplas operações de leitura/escrita — o Fake mantém estado real sem o custo do banco.

Mock: verifica interações — foi chamado? Com quais argumentos? Quantas vezes? Quando usar: verificar que um serviço de notificação foi disparado após uma transferência.

Spy: Mock que ainda chama o código real — raro e arriscado. Quando usar: quase nunca em código novo, mais comum em testes de código legado onde não se pode alterar a implementação.

Armadilha clássica: mockar tudo vs mockar nada. A regra prática é: mock de saídas (email, SMS, eventos externos), stub de entradas (repositório, dados de configuração), fake para repositórios com lógica complexa.

Sobrespecificação é o maior perigo: verificar detalhes internos (quantas vezes um método privado foi chamado, ordem exata dos parâmetros internos) acopla o teste à implementação. Quando você refatora o código interno sem mudar o comportamento externo, o teste quebraria — isso é fragilidade, não segurança.`,
      code: `// ══════════════════════════════════════════════
// Stub manual — sem Moq ainda
// ══════════════════════════════════════════════
class ContaRepositoryStub : IContaRepository
{
    private readonly Conta? _contaParaRetornar;

    public ContaRepositoryStub(Conta? conta)
        => _contaParaRetornar = conta;

    public Task<Conta?> GetByIdAsync(ContaId id)
        => Task.FromResult(_contaParaRetornar);

    // Stub só implementa o necessário — o resto lança
    public Task AddAsync(Conta conta)
        => throw new NotImplementedException();
    public Task SaveChangesAsync()
        => Task.CompletedTask;
}

// Uso no teste com Stub:
[Fact]
public async Task Execute_ContaExiste_RetornaConta()
{
    // Arrange
    var contaEsperada = Conta.Abrir(CpfValido, Dinheiro.BRL(500));
    var stub = new ContaRepositoryStub(contaEsperada);
    // usando Stub pois não verifico chamadas, só o retorno

    // Act
    var resultado = await stub.GetByIdAsync(contaEsperada.Id);

    // Assert
    resultado.Should().NotBeNull();
    resultado!.Saldo.Should().Be(Dinheiro.BRL(500));
}

// ══════════════════════════════════════════════
// Fake — InMemoryContaRepository funcional
// ══════════════════════════════════════════════
class InMemoryContaRepository : IContaRepository
{
    private readonly Dictionary<ContaId, Conta> _store = new();

    public Task<Conta?> GetByIdAsync(ContaId id)
        => Task.FromResult(_store.GetValueOrDefault(id));

    public Task AddAsync(Conta conta)
    {
        _store[conta.Id] = conta;
        return Task.CompletedTask;
    }

    public Task SaveChangesAsync()
        => Task.CompletedTask;
}

// Uso no teste com Fake — mantém estado real:
[Fact]
public async Task AddEGetById_ContaValida_RetornaMesmaConta()
{
    // Arrange
    var fake = new InMemoryContaRepository();
    var conta = Conta.Abrir(CpfValido, Dinheiro.BRL(1000));

    // Act
    await fake.AddAsync(conta);
    var resultado = await fake.GetByIdAsync(conta.Id);

    // Assert
    resultado.Should().Be(conta);
}`,
      checklist: [
        "Criar o InMemoryContaRepository para usar nos testes do UseCase",
        "Escrever um teste com Stub manual que retorna conta específica",
        "Escrever o mesmo teste com Fake (InMemory) e comparar complexidade",
        "Identificar no Sistema Financeiro: quais dependências são stub e quais são mock?",
        'Documentar em comentário de teste: "// usando Stub pois não verifico chamadas"',
      ],
      quiz: [
        {
          question: "Qual a diferença entre Stub e Mock?",
          options: [
            "São sinônimos",
            "Stub retorna respostas pré-configuradas sem verificar se foi chamado; Mock verifica interações — se foi chamado, com quais argumentos e quantas vezes",
            "Mock é mais rápido que Stub",
            "Stub só funciona com interfaces",
          ],
          answer: 1,
          explanation:
            "Stub configura entrada (o que retornar), Mock verifica saída (o que foi chamado). A confusão entre os dois é um dos erros mais comuns em entrevistas.",
        },
        {
          question:
            "Quando um InMemoryRepository é preferível a um Mock de repositório?",
          options: [
            "Nunca — Mock é sempre melhor",
            "Quando a lógica do teste envolve múltiplas operações de leitura/escrita onde um Mock ficaria complexo e frágil — InMemory mantém estado real e o teste fica mais legível",
            "InMemory só funciona com SQL",
            "Mock de repositório não é possível",
          ],
          answer: 1,
          explanation:
            "Um Fake com Dictionary é simples, mantém estado e não precisa de Setup para cada operação. Ideal quando o teste interage com o repositório de várias formas.",
        },
        {
          question: 'O que significa "sobrespecificação" em testes com mocks?',
          options: [
            "Criar mocks demais",
            "Verificar detalhes de implementação que tornam o teste frágil — ele falha quando a implementação muda, mesmo que o comportamento externo continue correto",
            "Ter mais asserts que o necessário",
            "Usar Mock quando Stub bastaria",
          ],
          answer: 1,
          explanation:
            "Um teste que verifica quantas vezes SaveChanges foi chamado internamente quebra quando você otimiza o batch de commits — mesmo que o resultado final seja idêntico.",
        },
      ],
    },
    {
      id: "m14t2",
      moduleId: "m14",
      title: "Moq: Setup, Returns, Verify e Callbacks",
      theory: `Moq elimina o boilerplate de criar classes Stub/Fake manualmente. Em vez de criar uma ContaRepositoryStub para cada cenário, configura-se o Mock<IContaRepository> em 3 linhas.

Instalação: dotnet add package Moq. Mock<T> cria um double de qualquer interface ou classe com métodos virtual. O .Object retorna a instância que implementa a interface.

Setup().Returns() configura o retorno para uma chamada específica. Setup().ReturnsAsync() para métodos assíncronos — não precisa de Task.FromResult manual. Setup().Throws<T>() simula exceção lançada pela dependência (banco fora do ar, timeout).

It.IsAny<T>() aceita qualquer argumento — útil quando o valor específico não importa para o teste. Cuidado: usar IsAny em tudo é sobrespecificação às avessas — mascara bugs onde o argumento errado foi passado. It.Is<T>(predicate) verifica que a chamada ocorreu com argumento que satisfaz a condição — mais preciso sem ser frágil.

Verify() verifica APÓS o Act que uma chamada específica ocorreu. Times.Once, Times.Never, Times.Exactly(n), Times.AtLeastOnce. VerifyNoOtherCalls() garante que nenhuma chamada não configurada aconteceu.

Callbacks com .Callback() executam código quando o mock é chamado — útil para capturar argumentos ou simular efeitos colaterais controlados.

MockBehavior.Strict vs Loose (padrão): Strict falha em qualquer chamada não configurada com Setup — garante que o teste documenta TODAS as interações. Loose retorna default(T) para chamadas não configuradas. Na prática, Strict é útil para garantir que nenhuma interação inesperada ocorra com serviços externos (email, pagamento).`,
      code: `// ══════════════════════════════════════════════
// Setup completo para o UseCase de Transferência
// ══════════════════════════════════════════════
using Moq;
using FluentAssertions;

[Fact]
public async Task Execute_TransferenciaValida_NotificaOrigem()
{
    // Arrange
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

    var useCase = new RealizarTransferenciaUseCase(
        mockContaRepo.Object, mockNotificacao.Object);

    var command = new RealizarTransferenciaCommand(
        contaOrigem.Id, contaDestino.Id, Dinheiro.BRL(300));

    // Act
    var resultado = await useCase.ExecuteAsync(command);

    // Assert — comportamento
    resultado.IsSuccess.Should().BeTrue();

    // Assert — interações (o que o Mock é para)
    mockNotificacao.Verify(
        n => n.NotificarAsync(
            It.Is<ContaId>(id => id == contaOrigem.Id)),
        Times.Once,
        "Notificação deveria ter sido disparada para conta de origem"
    );

    mockContaRepo.Verify(
        r => r.SaveChangesAsync(), Times.Once);
}

// ══════════════════════════════════════════════
// Simulando exceção da dependência
// ══════════════════════════════════════════════
[Fact]
public async Task Execute_RepositorioFalha_RetornaErro()
{
    // Arrange
    var mockRepo = new Mock<IContaRepository>();
    mockRepo
        .Setup(r => r.GetByIdAsync(It.IsAny<ContaId>()))
        .ThrowsAsync(new TimeoutException("Banco indisponível"));

    var sut = new RealizarTransferenciaUseCase(
        mockRepo.Object, Mock.Of<INotificacaoService>());

    // Act
    var resultado = await sut.ExecuteAsync(command);

    // Assert
    resultado.IsSuccess.Should().BeFalse();
    resultado.Error.Should().Contain("indisponível");
}

// ══════════════════════════════════════════════
// Callback para capturar argumentos
// ══════════════════════════════════════════════
[Fact]
public async Task Execute_Transferencia_SalvaContasAlteradas()
{
    // Arrange
    Conta? contaSalva = null;
    mockRepo
        .Setup(r => r.UpdateAsync(It.IsAny<Conta>()))
        .Callback<Conta>(c => contaSalva = c)
        .Returns(Task.CompletedTask);

    // Act
    await useCase.ExecuteAsync(command);

    // Assert — via callback capturado
    contaSalva.Should().NotBeNull();
    contaSalva!.Saldo.Should().Be(Dinheiro.BRL(700));
}`,
      checklist: [
        "Instalar Moq: dotnet add package Moq",
        "Reescrever os testes do UseCase de Transferência usando Mock<IContaRepository>",
        "Usar It.Is<> para verificar que SaveChanges foi chamado após a transferência",
        "Testar o cenário onde o repositório lança exceção (Setup().ThrowsAsync<>)",
        "Comparar: mesmo teste com Stub manual vs com Moq — qual é mais claro?",
      ],
      quiz: [
        {
          question: "Qual a diferença entre Setup().Returns() e Verify()?",
          options: [
            "São a mesma operação",
            "Setup().Returns() configura o que o mock retorna quando chamado (comportamento); Verify() verifica após o Act que uma chamada específica ocorreu (assertion de interação)",
            "Returns() é para interfaces, Verify() é para classes",
            "Verify() pode substituir Returns()",
          ],
          answer: 1,
          explanation:
            "Setup é Arrange (preparação), Verify é Assert (verificação). Setup diz 'quando chamarem, retorne isto'. Verify diz 'confirme que chamaram aquilo'.",
        },
        {
          question:
            "Quando usar It.IsAny<T>() e quando usar It.Is<T>(predicate)?",
          options: [
            "Sempre usar IsAny para simplicidade",
            "It.IsAny<T>() quando o valor não importa para o teste. It.Is<T>(pred) quando precisa verificar que a chamada ocorreu com argumento específico",
            "It.Is<T> só funciona com tipos primitivos",
            "Usar apenas It.IsAny<T> no Arrange e It.Is<T> no Verify",
          ],
          answer: 1,
          explanation:
            "IsAny é conveniente mas pode mascarar bugs. Se o teste precisa garantir que o repositório recebeu a conta certa, use It.Is para ser preciso sem ser frágil.",
        },
        {
          question: "O que é MockBehavior.Strict e quando é útil?",
          options: [
            "Desabilita o mock",
            "Qualquer chamada não configurada com Setup() lança exceção — garante que o teste documenta TODAS as interações esperadas. Útil para detectar chamadas inesperadas",
            "Só funciona com classes abstratas",
            "É o comportamento padrão do Moq",
          ],
          answer: 1,
          explanation:
            "Strict é útil para serviços externos críticos (pagamento, notificação) onde uma chamada inesperada indica bug. Para repositórios internos, Loose geralmente basta.",
        },
      ],
    },
    {
      id: "m14t3",
      moduleId: "m14",
      title: "Testando Domain Services e Use Cases",
      theory: `A estratégia de teste por camada define o que testar em cada uma e com quais ferramentas.

Domain (Value Objects, Entities): testes puros, sem Mock, sem Moq. Apenas cria objetos de domínio, chama métodos, assert no resultado. São os mais rápidos e os mais valiosos — Dinheiro, Cpf, Conta são records/classes puras sem dependência de infraestrutura.

Domain Services: quase sempre puros — se precisar de Mock para testar um Domain Service, revise o design. TransferenciaService recebe duas Contas e transfere — zero I/O, zero Mock necessário.

Application (Use Cases): aqui Moq brilha. Use Cases orquestram: buscam dados no repositório, executam lógica de domínio, persistem, disparam eventos. Testar os 3 caminhos obrigatórios: sucesso (happy path), falha de validação de negócio (saldo insuficiente, conta bloqueada), e exceção inesperada (banco fora do ar, timeout).

Infrastructure: testes de integração com banco real — TestContainers no Módulo 15. Não mocke o banco para testar o repositório — isso testa o mock, não o repositório.

Controllers: WebApplicationFactory no Módulo 15. Não teste controllers isolados com Mock de HttpContext — é frágil e não testa routing/serialização.

Padrão de organização espelhando o projeto:
SistemaFinanceiro.Tests/Domain/ para ContaTests, DinheiroTests, CpfTests.
SistemaFinanceiro.Tests/Application/ para AbrirContaUseCaseTests, RealizarTransferenciaUseCaseTests.
Quando criar Conta real (Domain tests) vs quando mockar IContaRepository (Application tests): se testa regra do domínio, use objetos reais; se testa orquestração do Use Case, mock as dependências.`,
      code: `// ══════════════════════════════════════════════
// 3 testes completos para RealizarTransferenciaUseCase
// ══════════════════════════════════════════════

// Cenário 1 — sucesso (happy path)
[Fact]
public async Task Execute_TransferenciaValida_DebitaOrigemCreditaDestino()
{
    // Arrange
    var contaOrigem = Conta.Abrir(CpfFixture.Valido(), Dinheiro.BRL(500));
    var contaDestino = Conta.Abrir(CpfFixture.Outro(), Dinheiro.BRL(0));

    var repo = new Mock<IContaRepository>();
    repo.Setup(r => r.GetByIdAsync(contaOrigem.Id))
        .ReturnsAsync(contaOrigem);
    repo.Setup(r => r.GetByIdAsync(contaDestino.Id))
        .ReturnsAsync(contaDestino);
    repo.Setup(r => r.SaveChangesAsync())
        .Returns(Task.CompletedTask);

    var sut = new RealizarTransferenciaUseCase(
        repo.Object, Mock.Of<INotificacaoService>());

    var cmd = new RealizarTransferenciaCommand(
        contaOrigem.Id, contaDestino.Id, Dinheiro.BRL(300));

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
{
    // Arrange
    var contaOrigem = Conta.Abrir(CpfFixture.Valido(), Dinheiro.BRL(50));
    var contaDestino = Conta.Abrir(CpfFixture.Outro(), Dinheiro.BRL(0));

    var repo = new Mock<IContaRepository>();
    repo.Setup(r => r.GetByIdAsync(contaOrigem.Id))
        .ReturnsAsync(contaOrigem);
    repo.Setup(r => r.GetByIdAsync(contaDestino.Id))
        .ReturnsAsync(contaDestino);

    var sut = new RealizarTransferenciaUseCase(
        repo.Object, Mock.Of<INotificacaoService>());

    var cmd = new RealizarTransferenciaCommand(
        contaOrigem.Id, contaDestino.Id, Dinheiro.BRL(100));

    // Act
    var resultado = await sut.ExecuteAsync(cmd);

    // Assert
    resultado.IsSuccess.Should().BeFalse();
    resultado.Error.Should().Contain("saldo");
    repo.Verify(r => r.SaveChangesAsync(), Times.Never);
}

// Cenário 3 — conta não encontrada
[Fact]
public async Task Execute_ContaOrigemNaoEncontrada_RetornaFalha()
{
    // Arrange
    var repo = new Mock<IContaRepository>();
    repo.Setup(r => r.GetByIdAsync(It.IsAny<ContaId>()))
        .ReturnsAsync((Conta?)null);

    var sut = new RealizarTransferenciaUseCase(
        repo.Object, Mock.Of<INotificacaoService>());

    var cmd = new RealizarTransferenciaCommand(
        ContaId.Novo(), ContaId.Novo(), Dinheiro.BRL(100));

    // Act
    var resultado = await sut.ExecuteAsync(cmd);

    // Assert
    resultado.IsSuccess.Should().BeFalse();
    resultado.Error.Should().Contain("não encontrada");
}`,
      checklist: [
        "Criar a estrutura de pastas Domain/ e Application/ dentro do projeto de testes",
        "Implementar os 3 cenários do UseCase de Transferência",
        "Garantir que os testes de Domain (ContaTests) não usam nenhum Mock",
        "Criar pelo menos 5 testes para o Value Object Dinheiro (somas, subtrações, moedas)",
        "Rodar dotnet test e garantir 100% de pass nos testes de unidade",
      ],
      quiz: [
        {
          question:
            "Por que testes de Domain (Value Objects, Entities) não precisam de Moq?",
          options: [
            "Domain é mais simples",
            "Objetos de domínio bem modelados com DDD não têm dependências externas — são funções puras que recebem entrada e produzem saída, tornando os testes diretos",
            "Moq não funciona com records",
            "Domain não tem métodos testáveis",
          ],
          answer: 1,
          explanation:
            "DDD bem aplicado resulta em Domain puro — sem I/O, sem banco, sem rede. Isso torna os testes de domínio os mais rápidos e valiosos da suite.",
        },
        {
          question:
            "Qual dos 3 cenários de um Use Case é mais frequentemente esquecido?",
          options: [
            "O cenário de sucesso",
            "O cenário de exceção inesperada (repositório fora do ar, timeout) — desenvolvedores testam sucesso e falha de negócio mas esquecem da infraestrutura falhando",
            "O cenário de falha de validação",
            "Todos são igualmente esquecidos",
          ],
          answer: 1,
          explanation:
            "Em produção, bancos caem, serviços externos retornam timeout. O teste de exceção garante que o sistema degrada graciosamente nesses cenários.",
        },
        {
          question:
            "Como organizar os arquivos de teste para espelhar a estrutura do projeto?",
          options: [
            "Tudo em uma pasta Tests/",
            "Espelhar a estrutura de namespaces — Domain/, Application/, Integration/ dentro do projeto de testes, facilitando encontrar o teste de qualquer classe",
            "Organizar por tipo de teste (UnitTests/, IntegrationTests/)",
            "Não há padrão estabelecido",
          ],
          answer: 1,
          explanation:
            "Espelhar o projeto de produção cria uma relação 1:1 — ao ver ContaService.cs, você sabe que o teste está em Application/ContaServiceTests.cs.",
        },
      ],
    },
    {
      id: "m14t4",
      moduleId: "m14",
      title: "AutoFixture e Builder Pattern para Dados de Teste",
      theory: `O problema: criar objetos de domínio nos testes é verboso e frágil. Quando uma Entity ganha um novo campo obrigatório, 50 testes quebram porque cada um cria o objeto manualmente. Essa é a dor que AutoFixture e o Builder Pattern resolvem.

AutoFixture gera dados de teste aleatórios automaticamente. Instalação: dotnet add package AutoFixture e AutoFixture.Xunit2. [AutoData] injeta dados gerados automaticamente em [Theory]. Customização via Fixture.Customize<T>() controla a geração para tipos complexos. AutoFixture com Moq: AutoMoqCustomization cria mocks automaticamente para dependências de interface.

Builder Pattern para objetos de domínio: ContaBuilder é uma fluent API específica que cria Contas em testes. Em vez de new Conta(cpf, saldo, status, ...) em cada teste, escreve-se new ContaBuilder().ComSaldo(500).Build(). Vantagem sobre AutoFixture: usa a Linguagem Ubíqua do domínio ("conta com saldo positivo", "conta bloqueada"), é mais legível e resiliente a mudanças de construtor.

Quando usar cada um: AutoFixture para dados cujos valores específicos não influenciam o comportamento testado — gera aleatoriamente, deixando explícito que o teste não se importa. Builder para objetos cujos valores importam para o cenário — ComSaldo(500) comunica que o saldo é relevante para o teste.

ObjectMother Pattern: coleção de factory methods estáticos que criam objetos com configurações nomeadas e reutilizáveis. ContaFixtures.ComSaldoPositivo(), ContaFixtures.Bloqueada(), ContaFixtures.Zerada(). Reduz duplicação e documenta os cenários de teste com nomes do domínio.

Regra de ouro: se o valor importa para o teste, seja explícito (Builder). Se não importa, deixe o framework gerar (AutoFixture). Se o cenário é reutilizado em muitos testes, extraia para ObjectMother.`,
      code: `// ══════════════════════════════════════════════
// Builder Pattern — fluent e legível
// ══════════════════════════════════════════════
public class ContaBuilder
{
    private Cpf _cpf = new Cpf("529.982.247-25");
    private Dinheiro _saldo = Dinheiro.BRL(1000);
    private StatusConta _status = StatusConta.Ativa;

    public ContaBuilder ComSaldo(decimal valor)
    {
        _saldo = Dinheiro.BRL(valor);
        return this;
    }

    public ContaBuilder Bloqueada()
    {
        _status = StatusConta.Bloqueada;
        return this;
    }

    public ContaBuilder ComCpf(string cpf)
    {
        _cpf = new Cpf(cpf);
        return this;
    }

    public Conta Build()
    {
        var conta = Conta.Abrir(_cpf, _saldo);
        if (_status == StatusConta.Bloqueada)
            conta.Bloquear();
        return conta;
    }
}

// Uso nos testes:
[Fact]
public void Sacar_ContaBloqueada_RetornaFalha()
{
    // Arrange — builder deixa o cenário explícito
    var conta = new ContaBuilder()
        .ComSaldo(500)
        .Bloqueada()
        .Build();

    // Act
    var resultado = conta.Sacar(Dinheiro.BRL(100));

    // Assert
    resultado.IsSuccess.Should().BeFalse();
}

// ══════════════════════════════════════════════
// ObjectMother — cenários reutilizáveis
// ══════════════════════════════════════════════
public static class ContaFixtures
{
    public static Conta ComSaldoPositivo()
        => new ContaBuilder().ComSaldo(1000).Build();

    public static Conta Zerada()
        => new ContaBuilder().ComSaldo(0).Build();

    public static Conta Bloqueada()
        => new ContaBuilder().Bloqueada().Build();

    // CPFs válidos para testes
    public static class CpfFixture
    {
        public static Cpf Valido() => new Cpf("529.982.247-25");
        public static Cpf Outro()  => new Cpf("418.236.780-90");
    }
}

// ══════════════════════════════════════════════
// AutoFixture com [AutoData]
// ══════════════════════════════════════════════
using AutoFixture.Xunit2;

[Theory, AutoData]
public void AlgumTeste_DadosIrrelevantes_Comportamento(
    string nomeQualquer, int valorQualquer)
{
    // AutoFixture gerou os valores — o teste não se importa
    nomeQualquer.Should().NotBeNullOrEmpty();
    valorQualquer.Should().BeOfType(typeof(int));
}

// AutoFixture com Moq automático:
// dotnet add package AutoFixture.AutoMoq
// var fixture = new Fixture().Customize(
//     new AutoMoqCustomization());
// var useCase = fixture.Create<RealizarTransferenciaUseCase>();
// Todas as dependências de interface já são mocks criados`,
      checklist: [
        "Instalar AutoFixture e AutoFixture.Xunit2",
        "Criar ContaBuilder com pelo menos 4 métodos fluentes",
        "Criar ContaFixtures com 3 objetos pré-construídos",
        "Refatorar 5 testes para usar ContaBuilder em vez de criação manual",
        "Usar [AutoData] em um teste onde os dados de entrada não importam",
      ],
      quiz: [
        {
          question:
            "Qual a vantagem do Builder Pattern sobre criar objetos de domínio diretamente?",
          options: [
            "Builder é mais rápido",
            "Centraliza a criação — quando o construtor da Entity muda, só o Builder precisa ser atualizado, não todos os 50 testes",
            "Builder gera dados aleatórios automaticamente",
            "Builder é necessário para usar Moq",
          ],
          answer: 1,
          explanation:
            "Resiliência a mudanças: novo campo obrigatório no construtor de Conta? Atualize o Builder e todos os testes continuam passando.",
        },
        {
          question: "Quando AutoFixture é preferível ao Builder Pattern?",
          options: [
            "Sempre — AutoFixture é mais moderno",
            "Para dados cujos valores não influenciam o comportamento testado — AutoFixture os gera aleatoriamente, tornando explícito que o teste não se importa com eles",
            "Para objetos de domínio complexos",
            "Para dados de banco de dados",
          ],
          answer: 1,
          explanation:
            "AutoFixture comunica intenção: valores aleatórios = irrelevantes para o teste. Builder comunica: valores específicos = relevantes para o cenário.",
        },
        {
          question: "O que é o ObjectMother Pattern?",
          options: [
            "Um pattern para criar bancos de dados de teste",
            "Uma coleção de factory methods estáticos que criam objetos com configurações nomeadas e reutilizáveis — reduz duplicação e documenta os cenários",
            "Um tipo especial de Mock",
            "O mesmo que Builder Pattern",
          ],
          answer: 1,
          explanation:
            "ContaFixtures.Bloqueada() é mais legível que new ContaBuilder().Bloqueada().Build() quando usado repetidamente. ObjectMother e Builder se complementam.",
        },
      ],
    },
  ],
};
