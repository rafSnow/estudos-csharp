export const MODULO_15 = {
  id: "m15",
  title: "Testes de Integração",
  icon: "🔗",
  week: "Semana 14-15",
  color: "#0EA5E9",
  topics: [
    {
      id: "m15t1",
      moduleId: "m15",
      title: "WebApplicationFactory e TestServer",
      theory: `A diferença fundamental entre teste de unidade e integração: unidade testa uma peça isolada com dependências falsas, integração testa como componentes trabalham JUNTOS com dependências reais ou próximas do real. Ambos são necessários — sem um deles, há buracos na cobertura.

WebApplicationFactory<TProgram> é a ferramenta que sobe a aplicação ASP.NET Core inteira em memória. Sem abrir uma porta de rede real, sem precisar de um servidor separado rodando. CreateClient() retorna um HttpClient que faz requisições ao servidor in-memory — rápido, isolado, sem conflitos de porta.

Por que é poderoso: testa os middlewares, o routing, a configuração de DI, a serialização JSON e os controllers — tudo junto, em um teste que roda em milissegundos. Se uma rota estiver errada, se um middleware bloquear o request, se o DI não resolver uma dependência, o teste pega.

Customização da factory: sobrescrever o DI container para trocar o banco real por InMemory. ConfigureTestServices() permite registrar mocks ou fakes especificamente para os testes sem alterar o Program.cs de produção.

IClassFixture<WebApplicationFactory<Program>> compartilha uma única instância da factory entre todos os testes da mesma classe — performance. Subir a aplicação é custoso, mesmo in-memory.

Quando usar WebApplicationFactory: testar a camada HTTP completa sem banco real (use InMemory aqui). Quando NÃO usar: quando precisa de banco real com constraints FK, transações e índices — aí é TestContainers (próximo tópico).

Dica prática: crie uma classe base customizada que herda de WebApplicationFactory e configure nela tudo que os testes compartilham: troca de DbContext, seed de dados, helpers de autenticação JWT.`,
      code: `// ══════════════════════════════════════════════
// WebApplicationFactory customizada
// ══════════════════════════════════════════════
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

public class SistemaFinanceiroWebFactory
    : WebApplicationFactory<Program>
{
    protected override void ConfigureWebHost(
        IWebHostBuilder builder)
    {
        builder.ConfigureTestServices(services =>
        {
            // Remove o DbContext real (SQL Server)
            services.RemoveAll<DbContextOptions<FinanceiroDbContext>>();

            // Adiciona InMemory para testes rápidos
            services.AddDbContext<FinanceiroDbContext>(opt =>
                opt.UseInMemoryDatabase(
                    $"TestDb_{Guid.NewGuid()}"));
        });
    }
}

// ══════════════════════════════════════════════
// Testes de integração do ContasController
// ══════════════════════════════════════════════
public class ContasControllerIntegrationTests
    : IClassFixture<SistemaFinanceiroWebFactory>
{
    private readonly HttpClient _client;

    public ContasControllerIntegrationTests(
        SistemaFinanceiroWebFactory factory)
        => _client = factory.CreateClient();

    [Fact]
    public async Task POST_AbrirConta_DadosValidos_Retorna201()
    {
        // Arrange
        var request = new
        {
            Cpf = "529.982.247-25",
            Nome = "João Silva",
            Email = "joao@email.com",
            SaldoInicial = 0
        };

        // Act
        var response = await _client.PostAsJsonAsync(
            "/api/contas", request);

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.Created);
        var body = await response.Content
            .ReadFromJsonAsync<AbrirContaResponse>();
        body!.ContaId.Should().NotBeEmpty();
    }

    [Fact]
    public async Task POST_AbrirConta_CpfInvalido_Retorna400()
    {
        // Arrange
        var request = new { Cpf = "000.000.000-00" };

        // Act
        var response = await _client.PostAsJsonAsync(
            "/api/contas", request);

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
    }

    [Fact]
    public async Task GET_Extrato_ContaNaoExiste_Retorna404()
    {
        // Act
        var response = await _client.GetAsync(
            $"/api/contas/{Guid.NewGuid()}/extrato");

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.NotFound);
    }
}`,
      checklist: [
        "Criar projeto: dotnet new xunit -n SistemaFinanceiro.IntegrationTests",
        "Implementar SistemaFinanceiroWebFactory com InMemory database",
        "Criar os 3 testes do ContasController (201, 400, 404)",
        "Adicionar referência ao projeto da API com dotnet add reference",
        "Rodar dotnet test e verificar que os testes sobem a aplicação corretamente",
      ],
      quiz: [
        {
          question:
            "Qual a vantagem de WebApplicationFactory sobre chamar a API com HttpClient real?",
          options: [
            "WebApplicationFactory é mais rápida porque usa TCP real",
            "WebApplicationFactory sobe a aplicação em memória sem porta de rede — mais rápido, sem conflito de portas, sem precisar da API rodando, ideal para CI/CD",
            "WebApplicationFactory só funciona com InMemory database",
            "Não há vantagem — preferir HttpClient real",
          ],
          answer: 1,
          explanation:
            "Em memória = sem servidor separado, sem porta TCP, sem firewall. O pipeline de CI roda os testes sem configurar nada — basta dotnet test.",
        },
        {
          question:
            "Para que serve ConfigureTestServices na factory customizada?",
          options: [
            "Para adicionar mais testes",
            "Para sobrescrever registros do DI container para testes — trocar SQL Server por InMemory, substituir serviço de email por mock, injetar seed de dados",
            "Para configurar o servidor HTTP",
            "Para desabilitar middlewares",
          ],
          answer: 1,
          explanation:
            "ConfigureTestServices roda DEPOIS do Program.cs — sobrescreve qualquer registro sem modificar o código de produção. Inversão de dependência em ação.",
        },
        {
          question:
            "Por que usar IClassFixture<WebApplicationFactory> em vez de criar uma factory por teste?",
          options: [
            "IClassFixture não funciona com WebApplicationFactory",
            "Subir a aplicação é custoso — IClassFixture compartilha uma única instância entre todos os testes da classe, reduzindo o tempo total da suite",
            "Para garantir que os testes rodam em série",
            "É apenas convenção sem impacto",
          ],
          answer: 1,
          explanation:
            "Uma factory = um boot da aplicação. 20 testes com IClassFixture = 1 boot. 20 testes sem = 20 boots. A diferença é perceptível em suites grandes.",
        },
      ],
    },
    {
      id: "m15t2",
      moduleId: "m15",
      title: "TestContainers: Banco Real em Testes",
      theory: `O problema do InMemory: comportamento DIFERENTE do SQL Server real. InMemory não suporta transações complexas, não verifica foreign keys, não respeita índices únicos, não executa triggers. Um teste que passa com InMemory pode falhar espetacularmente em produção.

TestContainers resolve esse gap: sobe um container Docker real durante os testes e o destrói ao final — sem configuração manual, sem banco de desenvolvimento contaminado, sem "funciona na minha máquina".

PRÉ-REQUISITO: Docker instalado e rodando. Verifique com docker --version. Para acelerar o primeiro teste, faça docker pull mcr.microsoft.com/mssql/server:2022-latest antecipadamente.

Instalação: dotnet add package Testcontainers e Testcontainers.MsSql. MsSqlContainer configura um SQL Server 2022 com senha e mapeamento de porta automáticos.

Integração com xUnit: IAsyncLifetime define InitializeAsync() (subir container, aplicar migrations) e DisposeAsync() (destruir container). O container sobe em ~10 segundos — trade-off consciente entre fidelidade e velocidade.

IClassFixture<SqlServerFixture> compartilha o container entre todos os testes da classe — evita subir N containers para N testes. ICollectionFixture compartilha entre múltiplas classes.

Migrations em teste: após o container subir, aplica-se ctx.Database.MigrateAsync() para criar o schema completo. O teste roda contra o schema real com constraints reais — fidelidade máxima.

Custo de tempo: ~10s para subir o container + ~5s para migrations. Esse custo é pago UMA VEZ graças ao IClassFixture. Os testes individuais rodam em milissegundos depois.`,
      code: `// ══════════════════════════════════════════════
// PRÉ-REQUISITO:
// docker pull mcr.microsoft.com/mssql/server:2022-latest
// ══════════════════════════════════════════════

// Fixture com TestContainers
using Testcontainers.MsSql;

public class SqlServerFixture : IAsyncLifetime
{
    private readonly MsSqlContainer _container =
        new MsSqlBuilder()
            .WithImage(
                "mcr.microsoft.com/mssql/server:2022-latest")
            .WithPassword("Senha@123TestContainers")
            .Build();

    public string ConnectionString
        => _container.GetConnectionString();

    public async Task InitializeAsync()
    {
        await _container.StartAsync();

        // Aplicar migrations no banco do container
        var options = new DbContextOptionsBuilder<FinanceiroDbContext>()
            .UseSqlServer(ConnectionString).Options;

        await using var ctx = new FinanceiroDbContext(options);
        await ctx.Database.MigrateAsync();
    }

    public Task DisposeAsync()
        => _container.DisposeAsync().AsTask();
}

// ══════════════════════════════════════════════
// Teste usando SQL Server real via container
// ══════════════════════════════════════════════
public class ContaRepositoryIntegrationTests
    : IClassFixture<SqlServerFixture>
{
    private readonly FinanceiroDbContext _context;

    public ContaRepositoryIntegrationTests(
        SqlServerFixture fixture)
    {
        var options = new DbContextOptionsBuilder<FinanceiroDbContext>()
            .UseSqlServer(fixture.ConnectionString).Options;
        _context = new FinanceiroDbContext(options);
    }

    [Fact]
    public async Task AddAsync_ContaValida_PersistidaComId()
    {
        // Arrange
        var repo = new ContaEfRepository(_context);
        var conta = Conta.Abrir(
            new Cpf("529.982.247-25"), Dinheiro.BRL(500));

        // Act
        await repo.AddAsync(conta);
        await repo.SaveChangesAsync();

        // Assert — busca do banco REAL, não do InMemory
        var contaSalva = await repo.GetByIdAsync(conta.Id);
        contaSalva.Should().NotBeNull();
        contaSalva!.Saldo.Should().Be(Dinheiro.BRL(500));
    }

    [Fact]
    public async Task AddAsync_CpfDuplicado_LancaDbException()
    {
        // Arrange
        var repo = new ContaEfRepository(_context);
        var cpf = new Cpf("529.982.247-25");
        var conta1 = Conta.Abrir(cpf, Dinheiro.BRL(100));
        var conta2 = Conta.Abrir(cpf, Dinheiro.BRL(200));

        await repo.AddAsync(conta1);
        await repo.SaveChangesAsync();

        // Act
        await repo.AddAsync(conta2);
        var act = () => repo.SaveChangesAsync();

        // Assert — constraint de unicidade do SQL Server real
        await act.Should().ThrowAsync<DbUpdateException>();
    }
}`,
      checklist: [
        "Verificar Docker instalado: docker --version",
        "Instalar Testcontainers.MsSql no projeto de integração",
        "Criar SqlServerFixture com IAsyncLifetime",
        "Implementar o teste de AddAsync com banco real",
        "Verificar no Docker Desktop que o container sobe e destrói durante os testes",
      ],
      quiz: [
        {
          question:
            "Por que TestContainers é superior ao InMemory database para testes de integração?",
          options: [
            "InMemory é mais rápido e suficiente",
            "TestContainers usa SQL Server real — suporta transações, constraints FK, índices e comportamentos que InMemory não emula, tornando testes mais fidedignos",
            "TestContainers é open source e InMemory não",
            "InMemory não funciona com EF Core",
          ],
          answer: 1,
          explanation:
            "Um índice único que InMemory ignora pode causar dados duplicados em produção. TestContainers detectaria o problema durante os testes.",
        },
        {
          question: "Por que usar IClassFixture com TestContainers?",
          options: [
            "IClassFixture é obrigatório com Docker",
            "Subir um container leva ~10s — compartilhar via IClassFixture significa subir UMA VEZ para toda a classe de testes, não uma vez por teste",
            "Para garantir isolamento entre testes",
            "TestContainers não funciona sem IClassFixture",
          ],
          answer: 1,
          explanation:
            "10s × 20 testes = 200s. IClassFixture: 10s + 20 × ~50ms = 11s. A diferença entre suite viável e suite que ninguém executa.",
        },
        {
          question:
            "Como garantir que testes de integração não contaminam uns aos outros no mesmo container?",
          options: [
            "Não é possível — os testes interferem",
            "Usar transactions e rollback por teste (BeginTransaction no setup, Dispose faz Rollback) OU limpar as tabelas no setup de cada teste",
            "Criar um container por teste",
            "Usar IsolationLevel.Serializable",
          ],
          answer: 1,
          explanation:
            "Transaction rollback no Dispose é a técnica mais limpa: o teste cria/modifica dados dentro da transaction, e o Rollback desfaz tudo sem custo de DELETE.",
        },
      ],
    },
    {
      id: "m15t3",
      moduleId: "m15",
      title: "Testando a API End-to-End (HTTP Real)",
      theory: `Testes end-to-end completos combinam WebApplicationFactory + TestContainers: a stack completa roda em um teste. HTTP request vai pelo controller, passa pelo Use Case, chega no repositório, persiste no SQL Server real do container. Alta fidelidade — se esse teste passa, o fluxo funciona em produção.

Por que é poderoso e custoso: fidelidade máxima (testa tudo integrado), mas lento (container + rede), difícil de isolar falhas (quando falha, pode ser qualquer camada), e manutenção alta (mudança de contrato quebra o teste).

Autenticação em testes: para endpoints protegidos com [Authorize], gere um JWT válido no teste usando os mesmos parâmetros do appsettings mas com chave de teste. Crie um helper GerarTokenTeste(role) na factory.

Gerenciar estado entre testes: cada teste deve ser independente — sem dados herdados de testes anteriores. Estratégias: seed por teste (cria dados no Arrange, limpa no Dispose), rollback por transaction, ou banco exclusivo por classe.

Testes de cenários negativos: 400 (validação — CPF inválido), 404 (recurso não existe), 422 (regra de negócio violada — saldo insuficiente), 500 (erro interno). Cada status code tem uma causa real e específica.

HttpClient extensions simplificam: PostAsJsonAsync() serializa o body, ReadFromJsonAsync<T>() deserializa tipado, GetFromJsonAsync<T>() combina GET + deserialização.

Testes de contrato: verificar que a resposta JSON tem exatamente a estrutura esperada pelo consumidor. Crítico quando múltiplos times (web, mobile, parceiros) consomem a mesma API e dependem dos campos retornados.`,
      code: `// ══════════════════════════════════════════════
// Factory completa: WebApplicationFactory + TestContainers
// ══════════════════════════════════════════════
public class IntegrationTestFactory
    : WebApplicationFactory<Program>, IAsyncLifetime
{
    private readonly MsSqlContainer _sqlContainer =
        new MsSqlBuilder()
            .WithImage(
                "mcr.microsoft.com/mssql/server:2022-latest")
            .WithPassword("Senha@Test123!")
            .Build();

    protected override void ConfigureWebHost(
        IWebHostBuilder builder)
    {
        builder.ConfigureTestServices(services =>
        {
            services.RemoveAll<
                DbContextOptions<FinanceiroDbContext>>();
            services.AddDbContext<FinanceiroDbContext>(opt =>
                opt.UseSqlServer(
                    _sqlContainer.GetConnectionString()));
        });
    }

    public async Task InitializeAsync()
    {
        await _sqlContainer.StartAsync();
        // Aplicar migrations e seed inicial
        using var scope = Services.CreateScope();
        var ctx = scope.ServiceProvider
            .GetRequiredService<FinanceiroDbContext>();
        await ctx.Database.MigrateAsync();
    }

    public new async Task DisposeAsync()
        => await _sqlContainer.DisposeAsync();
}

// ══════════════════════════════════════════════
// Teste E2E: fluxo completo de transferência
// ══════════════════════════════════════════════
public class TransferenciaE2ETests
    : IClassFixture<IntegrationTestFactory>
{
    private readonly HttpClient _client;

    public TransferenciaE2ETests(
        IntegrationTestFactory factory)
        => _client = factory.CreateClient();

    [Fact]
    public async Task FluxoCompleto_AbrirContasETransferir()
    {
        // Arrange — criar conta origem via API
        var respOrigem = await _client.PostAsJsonAsync(
            "/api/contas", new
            {
                Cpf = "529.982.247-25",
                SaldoInicial = 500
            });
        var contaOrigem = await respOrigem.Content
            .ReadFromJsonAsync<AbrirContaResponse>();

        // Criar conta destino via API
        var respDestino = await _client.PostAsJsonAsync(
            "/api/contas", new
            {
                Cpf = "418.236.780-90",
                SaldoInicial = 0
            });
        var contaDestino = await respDestino.Content
            .ReadFromJsonAsync<AbrirContaResponse>();

        // Act — realizar transferência via API
        var transferencia = await _client.PostAsJsonAsync(
            "/api/transferencias", new
            {
                ContaOrigemId = contaOrigem!.ContaId,
                ContaDestinoId = contaDestino!.ContaId,
                Valor = 300
            });

        // Assert
        transferencia.StatusCode.Should()
            .Be(HttpStatusCode.OK);

        // Verificar saldos via GET
        var extratoOrigem = await _client
            .GetFromJsonAsync<ExtratoResponse>(
                $"/api/contas/{contaOrigem.ContaId}/extrato");
        extratoOrigem!.SaldoAtual.Should().Be(200);

        var extratoDestino = await _client
            .GetFromJsonAsync<ExtratoResponse>(
                $"/api/contas/{contaDestino.ContaId}/extrato");
        extratoDestino!.SaldoAtual.Should().Be(300);
    }

    [Fact]
    public async Task Transferir_SaldoInsuficiente_Retorna422()
    {
        // Arrange — conta com saldo baixo
        var resp = await _client.PostAsJsonAsync(
            "/api/contas", new
            {
                Cpf = "529.982.247-25",
                SaldoInicial = 10
            });
        var conta = await resp.Content
            .ReadFromJsonAsync<AbrirContaResponse>();

        // Act
        var transferencia = await _client.PostAsJsonAsync(
            "/api/transferencias", new
            {
                ContaOrigemId = conta!.ContaId,
                ContaDestinoId = Guid.NewGuid(),
                Valor = 1000
            });

        // Assert
        transferencia.StatusCode.Should()
            .Be(HttpStatusCode.UnprocessableEntity);
    }
}`,
      checklist: [
        "Criar IntegrationTestFactory combinando WebApplicationFactory + TestContainers",
        "Implementar helper GerarTokenTeste para endpoints com [Authorize]",
        "Testar o fluxo completo: criar conta, depositar, transferir, checar extrato",
        "Testar todos os cenários de erro (400, 404, 422) com dados reais",
        "Medir tempo do teste end-to-end e documentar no comentário",
      ],
      quiz: [
        {
          question:
            "Qual a diferença entre teste com WebApplicationFactory+InMemory e com WebApplicationFactory+TestContainers?",
          options: [
            "Não há diferença",
            "InMemory é mais rápido e suficiente para maioria; TestContainers usa banco real para capturar comportamentos específicos que InMemory não reproduz",
            "TestContainers não funciona com WebApplicationFactory",
            "InMemory não suporta testes assíncronos",
          ],
          answer: 1,
          explanation:
            "Use InMemory para testes de controllers/routing rápidos. TestContainers quando precisa validar constraints FK, transações ou queries específicas do SQL Server.",
        },
        {
          question:
            "Por que cada teste de integração deve ser independente de estado?",
          options: [
            "É apenas convenção sem impacto real",
            "Testes que dependem de ordem ou dados de outros testes são frágeis — falham aleatoriamente dependendo da ordem de execução (especialmente em paralelo)",
            "xUnit não suporta estado compartilhado",
            "Para melhor performance",
          ],
          answer: 1,
          explanation:
            "Testes interdependentes são o segundo maior causador de suites flaky. xUnit roda classes em paralelo — ordem não é garantida.",
        },
        {
          question: "O que são testes de contrato de API?",
          options: [
            "Testes que verificam performance",
            "Testes que verificam que a resposta JSON tem exatamente a estrutura e campos esperados pelo consumidor — crítico quando múltiplos times consomem a mesma API",
            "Testes que verificam autenticação",
            "Testes de carga da API",
          ],
          answer: 1,
          explanation:
            "Se o time mobile espera um campo 'saldoAtual' e o backend renomeia para 'saldo', o teste de contrato falha antes do deploy — evitando incidentes.",
        },
      ],
    },
    {
      id: "m15t4",
      moduleId: "m15",
      title: "Fixtures, Collections e Gerenciamento de Estado",
      theory: `Ciclo de vida em xUnit: o construtor é chamado uma vez POR TESTE (isolamento nativo), IDisposable.Dispose() limpa após cada teste, IAsyncLifetime.InitializeAsync()/DisposeAsync() para setup/cleanup assíncrono.

IClassFixture<T>: estado compartilhado dentro de UMA classe de teste. T é criado uma vez antes do primeiro teste da classe e destruído após o último. Uso típico: WebApplicationFactory, DbContext, container Docker.

ICollectionFixture + [Collection("nome")]: estado compartilhado entre MÚLTIPLAS classes. Define-se uma CollectionDefinition que implementa ICollectionFixture<T>, e cada classe marca com [Collection("nome")]. Uso típico: um container Docker único para todos os testes de integração.

Quando usar cada: Constructor/Dispose para setup leve por teste (sem I/O, criação de objetos simples). IClassFixture para setup custoso compartilhado na mesma classe (banco, factory, container). ICollectionFixture para recurso único entre múltiplas classes (container SQL Server).

Paralelismo em xUnit: classes rodam em paralelo por padrão, métodos de uma mesma classe rodam em série. [Collection] força serialização entre classes da mesma collection. [assembly: CollectionBehavior(DisableTestParallelization = true)] desabilita paralelismo global — último recurso.

Isolamento de dados: rollback via TransactionScope (cada teste abre transaction, Dispose faz Rollback — zero cleanup manual), cleanup explícito (DELETE nos dados no Dispose), ou dados únicos por teste (Guid no nome para evitar colisão).

Ordered tests: raramente recomendado. Se a ordem importa, os testes provavelmente estão acoplados. Exceção: testes de integração de fluxo sequencial onde a própria ordem é o que está sendo testado.`,
      code: `// ══════════════════════════════════════════════
// Collection Fixture — container único para todos
// ══════════════════════════════════════════════

// 1. Definir a collection
[CollectionDefinition("IntegracaoCollection")]
public class IntegracaoCollectionDefinition
    : ICollectionFixture<IntegrationTestFactory>
{ }

// 2. Classe 1 que usa a collection
[Collection("IntegracaoCollection")]
public class ContasIntegrationTests
{
    private readonly HttpClient _client;

    public ContasIntegrationTests(
        IntegrationTestFactory factory)
        => _client = factory.CreateClient();

    [Fact]
    public async Task POST_AbrirConta_Retorna201()
    {
        // ... mesmo container já iniciado
    }
}

// 3. Classe 2 que usa o MESMO container
[Collection("IntegracaoCollection")]
public class TransferenciasIntegrationTests
{
    private readonly HttpClient _client;

    public TransferenciasIntegrationTests(
        IntegrationTestFactory factory)
        => _client = factory.CreateClient();

    [Fact]
    public async Task POST_Transferir_Retorna200()
    {
        // ... mesmo container da classe anterior
    }
}

// ══════════════════════════════════════════════
// Isolamento com TransactionScope por teste
// ══════════════════════════════════════════════
public class IsolatedDbTest : IAsyncLifetime
{
    private readonly FinanceiroDbContext _context;
    private IDbContextTransaction? _transaction;

    public IsolatedDbTest(SqlServerFixture fixture)
    {
        var options = new DbContextOptionsBuilder<FinanceiroDbContext>()
            .UseSqlServer(fixture.ConnectionString).Options;
        _context = new FinanceiroDbContext(options);
    }

    public async Task InitializeAsync()
    {
        // Abre transaction ANTES de cada teste
        _transaction = await _context.Database
            .BeginTransactionAsync();
    }

    public async Task DisposeAsync()
    {
        // Rollback APÓS cada teste — desfaz tudo
        if (_transaction != null)
            await _transaction.RollbackAsync();
    }

    [Fact]
    public async Task CriarConta_Isolado_NaoAfetaOutrosTestes()
    {
        // Arrange
        var repo = new ContaEfRepository(_context);
        var conta = Conta.Abrir(CpfValido, Dinheiro.BRL(500));

        // Act
        await repo.AddAsync(conta);
        await _context.SaveChangesAsync();

        // Assert
        var salva = await repo.GetByIdAsync(conta.Id);
        salva.Should().NotBeNull();

        // Após o teste: RollbackAsync desfaz o INSERT
    }
}`,
      checklist: [
        "Criar IntegracaoCollectionDefinition para compartilhar o container",
        "Mover testes de integração para a mesma [Collection]",
        "Implementar isolamento por TransactionScope rollback em um teste",
        'Medir o tempo total da suite com dotnet test --logger "console;verbosity=normal"',
        "Identificar quais testes rodam em paralelo e quais em série",
      ],
      quiz: [
        {
          question:
            "Qual a diferença entre IClassFixture e ICollectionFixture?",
          options: [
            "São sinônimos",
            "IClassFixture compartilha estado dentro de UMA classe; ICollectionFixture compartilha entre MÚLTIPLAS classes marcadas com [Collection] — útil para container Docker único",
            "ICollectionFixture é mais rápido",
            "IClassFixture só funciona com mocks",
          ],
          answer: 1,
          explanation:
            "IClassFixture = escopo de classe. ICollectionFixture = escopo de collection (múltiplas classes). Um container Docker é recurso caro demais para criar por classe.",
        },
        {
          question:
            "Por que usar TransactionScope rollback em testes de integração?",
          options: [
            "Para melhorar a performance dos testes",
            "Para garantir que cada teste começa com banco limpo — a transaction é revertida no Dispose sem precisar deletar dados explicitamente",
            "TransactionScope é obrigatório com TestContainers",
            "Para testar rollback de transações no código de produção",
          ],
          answer: 1,
          explanation:
            "Rollback é mais limpo e rápido que DELETE. O banco volta ao estado exato de antes do teste sem SQL de cleanup e sem risco de esquecer uma tabela.",
        },
        {
          question:
            "O que acontece quando duas classes de teste sem [Collection] rodam simultaneamente?",
          options: [
            "Rodam em série por padrão",
            "Rodam em paralelo — se compartilham estado (banco, variável estática), podem interferir entre si causando falhas intermitentes difíceis de reproduzir",
            "O xUnit detecta conflitos automaticamente",
            "Apenas métodos rodam em paralelo",
          ],
          answer: 1,
          explanation:
            "Paralelismo default do xUnit é por classe. Sem [Collection], duas classes que escrevem no mesmo banco podem causar deadlocks e dados fantasma.",
        },
      ],
    },
  ],
};
