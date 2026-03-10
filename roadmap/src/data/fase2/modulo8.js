export const MODULO_8 = {
  id: "m8",
  title: "Injeção de Dependência",
  icon: "🔌",
  week: "Semana 8",
  color: "#F59E0B",
  topics: [
    {
      id: "m8t1",
      moduleId: "m8",
      title: "Container de DI do .NET",
      theory: `Injeção de Dependência (DI) é o padrão arquitetural mais importante do ASP.NET Core. O framework foi construído sobre DI — Controllers, middlewares, DbContext, logging: tudo é resolvido pelo container. Entender DI é obrigatório para qualquer desenvolvedor .NET corporativo.

O princípio é simples: em vez de uma classe criar suas próprias dependências (new ServicoEmail()), ela declara o que precisa no construtor. O container de DI se encarrega de criar e fornecer a instância correta. Isso segue o Princípio da Inversão de Dependência (o D do SOLID): dependa de abstrações (interfaces), não de implementações concretas.

O container nativo do .NET (Microsoft.Extensions.DependencyInjection) funciona em 2 etapas: registro (no Program.cs, você diz "quando alguém pedir IEmailService, entregue SmtpEmailService") e resolução (quando um controller precisa de IEmailService, o container cria SmtpEmailService e injeta no construtor automaticamente).

O registro usa IServiceCollection (builder.Services): AddTransient, AddScoped, AddSingleton. A resolução acontece automaticamente quando o ASP.NET Core instancia controllers, middlewares e o que estiver registrado no container. Não use new para serviços — deixe o container resolver.

Para cenários avançados, o container suporta: registrar múltiplas implementações para a mesma interface (IEnumerable<INotificador>), factories (AddScoped<IService>(sp => new Service(sp.GetRequiredService<IDep>()))), e decorators. Para cenários mais complexos, considere Scrutor (auto-scan de assemblies) ou containers alternativos como Autofac.

A convenção é criar Extension Methods para organizar o registro: builder.Services.AddInfrastructure(), builder.Services.AddApplication(). Isso mantém o Program.cs limpo e agrupa registros por camada ou feature.`,
      code: `// Container de DI do .NET — ASP.NET Core 8
// Registro e resolução de dependências

// ============================================
// 📄 Services/IEmailService.cs — Interface (abstração)
// ============================================
namespace EcommerceApi.Services;

public interface IEmailService
{
    Task EnviarAsync(string para, string assunto, string corpo);
}

// ============================================
// 📄 Services/SmtpEmailService.cs — Implementação
// ============================================
namespace EcommerceApi.Services;

public class SmtpEmailService : IEmailService
{
    private readonly ILogger<SmtpEmailService> _logger;

    // DI injeta ILogger automaticamente (já está registrado)
    public SmtpEmailService(ILogger<SmtpEmailService> logger)
    {
        _logger = logger;
    }

    public async Task EnviarAsync(string para, string assunto, string corpo)
    {
        // Em produção: configurar SMTP real
        _logger.LogInformation("Enviando email para {Para}: {Assunto}", para, assunto);
        await Task.Delay(100); // Simula envio
    }
}

// ============================================
// 📄 Services/INotificador.cs — Múltiplas implementações
// ============================================
namespace EcommerceApi.Services;

public interface INotificador
{
    Task NotificarAsync(string mensagem);
}

public class EmailNotificador : INotificador
{
    public Task NotificarAsync(string mensagem)
    {
        Console.WriteLine($"[EMAIL] {mensagem}");
        return Task.CompletedTask;
    }
}

public class SmsNotificador : INotificador
{
    public Task NotificarAsync(string mensagem)
    {
        Console.WriteLine($"[SMS] {mensagem}");
        return Task.CompletedTask;
    }
}

public class SlackNotificador : INotificador
{
    public Task NotificarAsync(string mensagem)
    {
        Console.WriteLine($"[SLACK] {mensagem}");
        return Task.CompletedTask;
    }
}

// ============================================
// 📄 Extensions/ServiceCollectionExtensions.cs
// ============================================
namespace EcommerceApi.Extensions;

public static class ServiceCollectionExtensions
{
    /// <summary>Registra todos os serviços da camada de infraestrutura.</summary>
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        // Registro simples: interface → implementação
        services.AddScoped<IEmailService, SmtpEmailService>();

        // Múltiplas implementações para mesma interface
        services.AddScoped<INotificador, EmailNotificador>();
        services.AddScoped<INotificador, SmsNotificador>();
        services.AddScoped<INotificador, SlackNotificador>();

        return services;
    }
}

// ============================================
// 📄 Program.cs — registro limpo
// ============================================
using EcommerceApi.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddInfrastructure();  // Extension method limpo

var app = builder.Build();
app.MapControllers();
app.Run();

// ============================================
// Fluxo de resolução completo (DI em ação):
// ============================================
// 1. Request chega → ASP.NET Core cria ProdutosController
// 2. ProdutosController precisa de IProdutoService → DI cria ProdutoService
// 3. ProdutoService precisa de IProdutoRepository → DI cria ProdutoRepository
// 4. ProdutoRepository precisa de EcommerceDbContext → DI cria DbContext
// ➡ Tudo encadeado automaticamente, sem um único "new" manual.

// ============================================
// 📄 Services/IProdutoService.cs — Interface de negócio
// ============================================
namespace EcommerceApi.Services;

public interface IProdutoService
{
    Task<List<ProdutoResponse>> ListarAtivosAsync();
    Task<ProdutoResponse?> BuscarPorIdAsync(int id);
    Task<ProdutoResponse> CriarAsync(CriarProdutoRequest request);
}

// ============================================
// 📄 Services/ProdutoService.cs — Implementação
// ============================================
namespace EcommerceApi.Services;

public class ProdutoService : IProdutoService
{
    private readonly IProdutoRepository _repo;

    public ProdutoService(IProdutoRepository repo) // DI injeta o repositório
    {
        _repo = repo;
    }

    public async Task<List<ProdutoResponse>> ListarAtivosAsync()
    {
        List<Produto> produtos = await _repo.BuscarAtivosComEstoqueAsync();
        return produtos.Select(p => new ProdutoResponse(p.Id, p.Nome, p.Preco)).ToList();
    }

    public async Task<ProdutoResponse?> BuscarPorIdAsync(int id)
    {
        Produto? p = await _repo.GetByIdAsync(id);
        return p is null ? null : new ProdutoResponse(p.Id, p.Nome, p.Preco);
    }

    public async Task<ProdutoResponse> CriarAsync(CriarProdutoRequest request)
    {
        Produto novo = new() { Nome = request.Nome, Preco = request.Preco };
        await _repo.AddAsync(novo);
        return new ProdutoResponse(novo.Id, novo.Nome, novo.Preco);
    }
}

// ============================================
// 📄 Controllers/ProdutosController.cs — Controller fino
// ============================================
using Microsoft.AspNetCore.Mvc;
using EcommerceApi.Services;

namespace EcommerceApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProdutosController : ControllerBase
{
    private readonly IProdutoService _service;

    // Controller recebe SERVICE (não repository diretamente)
    public ProdutosController(IProdutoService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> Listar()
        => Ok(await _service.ListarAtivosAsync());

    [HttpGet("{id:int}")]
    public async Task<IActionResult> BuscarPorId(int id)
    {
        var produto = await _service.BuscarPorIdAsync(id);
        return produto is not null ? Ok(produto) : NotFound();
    }
}

// Registrar tudo no Extension Method:
// services.AddScoped<IProdutoService, ProdutoService>();
// services.AddScoped<IProdutoRepository, ProdutoRepository>();`,
      codeLanguage: "csharp",
      runCommand: "cd EcommerceApi && dotnet run",
      checklist: [
        "Criar interface IEmailService e implementação SmtpEmailService",
        "Registrar com AddScoped no Program.cs (ou via Extension Method)",
        "Injetar no controller via construtor e verificar que funciona",
        "Registrar múltiplas implementações de INotificador e receber via IEnumerable",
        "Criar Extension Method para organizar registros por camada",
      ],
      quiz: [
        {
          q: "Qual o princípio SOLID que fundamenta a Injeção de Dependência?",
          options: [
            "Single Responsibility — cada classe faz uma coisa",
            "Dependency Inversion — dependa de abstrações (interfaces), não de implementações concretas; classes declaram dependências no construtor em vez de criar com new",
            "Open/Closed — aberto para extensão, fechado para modificação",
            "Liskov Substitution — substituir tipo base pelo derivado",
          ],
          answer: 1,
          explanation:
            "O D do SOLID: Dependency Inversion Principle. Classes de alto nível não devem depender de classes de baixo nível — ambas dependem de abstrações. DI é o mecanismo que implementa esse princípio na prática.",
        },
        {
          q: "Como receber todas as implementações de uma interface no construtor?",
          options: [
            "Declarar cada implementação como parâmetro separado",
            "Usar IEnumerable<INotificador> no construtor — o container injeta todas as implementações registradas daquela interface",
            "Usar GetServices() dentro do construtor",
            "Não é possível — apenas 1 implementação por interface",
          ],
          answer: 1,
          explanation:
            "Ao registrar múltiplas implementações (AddScoped<INotificador, EmailNotificador>(), AddScoped<INotificador, SmsNotificador>()), injete IEnumerable<INotificador> para receber todas. Útil para Strategy pattern e notificações multi-canal.",
        },
        {
          q: "O que acontece se você tentar injetar IEmailService sem registrá-lo no container?",
          options: [
            "O ASP.NET Core cria uma instância padrão automaticamente",
            'InvalidOperationException em runtime: "Unable to resolve service for type IEmailService" — o container não sabe qual implementação fornecer',
            "A propriedade fica null mas não dá erro",
            "Erro de compilação",
          ],
          answer: 1,
          explanation:
            "O container DI do .NET só resolve tipos registrados explicitamente. Sem registro, ao tentar instanciar o controller que depende de IEmailService, lança InvalidOperationException. O erro aparece no primeiro request que ativa esse controller.",
        },
      ],
    },
    {
      id: "m8t2",
      moduleId: "m8",
      title: "Lifetimes: Transient, Scoped, Singleton",
      theory: `Lifetimes definem por quanto tempo o container mantém a instância de um serviço. Escolher o lifetime errado pode causar bugs sutis, memory leaks ou compartilhamento indevido de estado. No ASP.NET Core existem 3 lifetimes, e entender cada um é a diferença entre sistema estável e caos em produção.

Transient: nova instância TODA vez que alguém pede. Se 3 serviços dependem de IValidador, cada um recebe uma instância diferente. Use para serviços leves e sem estado (validadores, formatadores, factories). Cuidado: se o serviço aloca recursos (conexões, arquivos), Transient pode ser wasteful.

Scoped: uma instância por "escopo" — no ASP.NET Core, escopo = requisição HTTP. Todos os serviços dentro da mesma request recebem a mesma instância. DbContext DEVE ser Scoped: compartilha Change Tracking dentro da request, mas isola entre requests paralelas. Scoped é o lifetime mais usado em APIs.

Singleton: uma única instância para toda a aplicação. Criada na primeira resolução e reutilizada até o app parar. Use para serviços thread-safe e imutáveis: IConfiguration, IMemoryCache, HttpClient (via IHttpClientFactory). NUNCA registre serviço com estado mutável como Singleton em app multi-thread.

A regra de ouro sobre captive dependencies: um serviço de lifetime mais longo NÃO pode depender de um lifetime mais curto. Singleton não pode injetar Scoped (o Scoped ficaria "preso" como Singleton → bugs de concorrência). Scoped pode injetar Transient. Transient pode injetar ambos. O ASP.NET Core lança InvalidOperationException para captive Scoped em Singleton (em Development).

Para depurar lifetimes, o ValidateScopes está habilitado por padrão em Development. Ele detecta captive dependencies. Em Production é desabilitado por performance. Você pode forçar com builder.Host.UseDefaultServiceProvider(o => { o.ValidateScopes = true; o.ValidateOnBuild = true; }); — ValidateOnBuild verifica se TODOS os registros podem ser resolvidos antes do app iniciar.`,
      code: `// Lifetimes: Transient, Scoped, Singleton — ASP.NET Core 8

// ============================================
// 📄 Services/LifetimeDemo.cs — Demonstrando lifetimes
// ============================================
namespace EcommerceApi.Services;

/// <summary>
/// Cada serviço gera um ID único para demonstrar quando
/// novas instâncias são criadas vs reutilizadas.
/// </summary>
public interface IOperationTransient
{
    Guid OperationId { get; }
}

public interface IOperationScoped
{
    Guid OperationId { get; }
}

public interface IOperationSingleton
{
    Guid OperationId { get; }
}

public class Operation : IOperationTransient, IOperationScoped, IOperationSingleton
{
    public Guid OperationId { get; } = Guid.NewGuid();
}

// ============================================
// 📄 Registro no Program.cs
// ============================================
// builder.Services.AddTransient<IOperationTransient, Operation>();
// builder.Services.AddScoped<IOperationScoped, Operation>();
// builder.Services.AddSingleton<IOperationSingleton, Operation>();

// builder.Host.UseDefaultServiceProvider(options =>
// {
//     options.ValidateScopes = true;
//     options.ValidateOnBuild = true; // Valida todos os registros no startup
// });

// ============================================
// 📄 Controllers/LifetimeController.cs
// ============================================
using Microsoft.AspNetCore.Mvc;

namespace EcommerceApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LifetimeController : ControllerBase
{
    private readonly IOperationTransient _transient1;
    private readonly IOperationTransient _transient2;
    private readonly IOperationScoped _scoped1;
    private readonly IOperationScoped _scoped2;
    private readonly IOperationSingleton _singleton1;
    private readonly IOperationSingleton _singleton2;

    public LifetimeController(
        IOperationTransient transient1,
        IOperationTransient transient2,  // Diferente do transient1!
        IOperationScoped scoped1,
        IOperationScoped scoped2,        // IGUAL ao scoped1 (mesma request)
        IOperationSingleton singleton1,
        IOperationSingleton singleton2)  // IGUAL ao singleton1 (sempre)
    {
        _transient1 = transient1;
        _transient2 = transient2;
        _scoped1 = scoped1;
        _scoped2 = scoped2;
        _singleton1 = singleton1;
        _singleton2 = singleton2;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new
        {
            Transient = new
            {
                Id1 = _transient1.OperationId,
                Id2 = _transient2.OperationId,
                Iguais = _transient1.OperationId == _transient2.OperationId
                // false — cada resolução = nova instância
            },
            Scoped = new
            {
                Id1 = _scoped1.OperationId,
                Id2 = _scoped2.OperationId,
                Iguais = _scoped1.OperationId == _scoped2.OperationId
                // true — mesma instância dentro da request
            },
            Singleton = new
            {
                Id1 = _singleton1.OperationId,
                Id2 = _singleton2.OperationId,
                Iguais = _singleton1.OperationId == _singleton2.OperationId
                // true — mesma instância SEMPRE (entre requests)
            }
        });
    }
}

// ============================================
// ❌ CAPTIVE DEPENDENCY — Singleton segura Scoped
// ============================================
// public class MeuSingleton
// {
//     private readonly IOperationScoped _scoped; // BUG!
//     public MeuSingleton(IOperationScoped scoped)
//     {
//         _scoped = scoped; // Scoped preso dentro de Singleton
//         // ValidateScopes detecta e lança InvalidOperationException em Dev
//     }
// }

// ============================================
// ✅ Tabela de Referência Rápida
// ============================================
// Lifetime    | Instância por...  | Usar para
// ------------|-------------------|----------------------------------
// Transient   | Cada resolução    | Leves, sem estado (validadores)
// Scoped      | Request HTTP      | DbContext, repositórios, UnitOfWork
// Singleton   | Aplicação inteira | Cache, config, HttpClientFactory`,
      codeLanguage: "csharp",
      runCommand: "cd EcommerceApi && dotnet run",
      checklist: [
        "Registrar 3 serviços com Transient, Scoped e Singleton",
        "Criar endpoint que mostra os OperationIds e confirma qual é igual/diferente",
        "Chamar o endpoint 2 vezes e verificar: Singleton mantém o ID, Scoped muda entre requests",
        "Forçar um captive dependency (Singleton → Scoped) e ver o erro do ValidateScopes",
        "Habilitar ValidateOnBuild e confirmar que todos os registros são resolvíveis no startup",
      ],
      quiz: [
        {
          q: "Qual lifetime é obrigatório para o DbContext e por quê?",
          options: [
            "Singleton — melhor performance por ter 1 instância",
            "Scoped — 1 instância por request HTTP; garante que todas as operações da request compartilhem o Change Tracking sem conflito entre requests paralelas",
            "Transient — cada repositório precisa de seu próprio DbContext",
            "Qualquer lifetime funciona igualmente",
          ],
          answer: 1,
          explanation:
            "Scoped: dentro de uma request, todos os serviços compartilham o mesmo DbContext (mesmo Change Tracking, mesma transação implícita). Entre requests, instâncias separadas (thread-safety). Singleton = bugs de concorrência. Transient = Change Tracking fragmentado.",
        },
        {
          q: "O que é uma captive dependency e qual o risco?",
          options: [
            "Uma dependência que não foi registrada",
            'Quando um Singleton injeta um Scoped — o Scoped fica "preso" com lifetime de Singleton, sendo compartilhado entre requests paralelas, gerando bugs de concorrência',
            "Quando dois serviços dependem um do outro (circular)",
            "Uma dependência que consome muita memória",
          ],
          answer: 1,
          explanation:
            'Captive dependency: lifetime mais longo captura lifetime mais curto. Ex: Singleton segura Scoped → o "Scoped" vive para sempre como Singleton, compartilhado entre threads. ValidateScopes detecta em Development e lança InvalidOperationException.',
        },
        {
          q: "No código, por que _transient1.OperationId != _transient2.OperationId mas _scoped1.OperationId == _scoped2.OperationId?",
          options: [
            "É um bug no código",
            "Transient cria nova instância a cada resolução (IDs diferentes); Scoped reutiliza a mesma instância dentro do escopo da request (IDs iguais)",
            "Scoped copia o ID do primeiro Transient",
            "A comparação de Guid sempre retorna true",
          ],
          answer: 1,
          explanation:
            "Cada AddTransient resolve para new Operation() — Guid.NewGuid() gera IDs diferentes. AddScoped resolve para a MESMA instância dentro do escopo da request HTTP — ambos apontam para o mesmo objeto, mesmo Guid.",
        },
      ],
    },
    {
      id: "m8t3",
      moduleId: "m8",
      title: "Repository Pattern com DI",
      theory: `Repository Pattern abstrai o acesso a dados atrás de uma interface, desacoplando a lógica de negócio do banco de dados. Combinado com DI, permite trocar a implementação (EF Core, Dapper, mock) sem alterar os controllers ou serviços que consomem. Em projetos corporativos, é o padrão mais adotado para organizar o acesso a dados.

A interface IRepository<T> define operações genéricas: GetByIdAsync, GetAllAsync, AddAsync, UpdateAsync, DeleteAsync. Implementações específicas (ProdutoRepository) adicionam queries particulares. O controller ou service depende da interface — nunca da implementação concreta. Isso facilita testes unitários com mocks.

Unit of Work complementa Repository: garante que múltiplas operações em repositórios diferentes sejam salvas em uma única transação. O DbContext do EF Core já é um Unit of Work nativo (SaveChangesAsync salva tudo), mas o padrão explícito com IUnitOfWork oferece controle fino e abstração do ORM.

O registro no DI segue a convenção: interfaces no projeto de domínio/aplicação, implementações no projeto de infraestrutura. builder.Services.AddScoped<IProdutoRepository, ProdutoRepository>(). Em projetos grandes, use Scrutor para auto-scan: services.Scan(s => s.FromAssemblyOf<ProdutoRepository>().AddClasses().AsImplementedInterfaces().WithScopedLifetime()).

Os service classes (ProdutoService, PedidoService) orquestram lógica de negócio usando repositórios. Controllers ficam finos: recebem request, chamam service, retornam response. Services ficam médios: validam, orquestram, delegam para repositórios. Repositórios ficam focados: apenas queries e persistência.

Cuidado com o "repository genérico puro" que apenas encapsula DbSet sem agregar valor. Se IRepository<T> só expõe IQueryable e força o consumidor a montar queries LINQ complexas, você apenas adicionou uma camada sem benefício. Repositories devem encapsular QUERIES COMPLEXAS com nomes semânticos: BuscarAtivosComEstoque(), RelatorioVendasMensal().`,
      code: `// Repository Pattern com DI — ASP.NET Core 8 + EF Core

// ============================================
// 📄 Repositories/IRepository.cs — Interface genérica
// ============================================
namespace EcommerceApi.Repositories;

public interface IRepository<T> where T : class
{
    Task<T?> GetByIdAsync(int id);
    Task<List<T>> GetAllAsync();
    Task AddAsync(T entity);
    void Update(T entity);
    void Delete(T entity);
}

// ============================================
// 📄 Repositories/IProdutoRepository.cs — Específica
// ============================================
using EcommerceApi.Models;

namespace EcommerceApi.Repositories;

public interface IProdutoRepository : IRepository<Produto>
{
    Task<List<Produto>> BuscarAtivosComEstoqueAsync();
    Task<List<Produto>> BuscarPorCategoriaAsync(int categoriaId);
    Task<(List<ProdutoResumoDto> Itens, int Total)> ListarPaginadoAsync(
        int pagina, int tamanhoPagina, string? filtro = null);
}

// ============================================
// 📄 Repositories/IUnitOfWork.cs — Transação única
// ============================================
namespace EcommerceApi.Repositories;

public interface IUnitOfWork : IDisposable
{
    IProdutoRepository Produtos { get; }
    ICategoriaRepository Categorias { get; }
    Task<int> SaveChangesAsync(CancellationToken ct = default);
}

// ============================================
// 📄 Repositories/ProdutoRepository.cs — Implementação
// ============================================
using Microsoft.EntityFrameworkCore;
using EcommerceApi.Data;
using EcommerceApi.Models;

namespace EcommerceApi.Repositories;

public class ProdutoRepository : IProdutoRepository
{
    private readonly EcommerceDbContext _context;

    public ProdutoRepository(EcommerceDbContext context)
    {
        _context = context;
    }

    public async Task<Produto?> GetByIdAsync(int id)
        => await _context.Produtos.FindAsync(id);

    public async Task<List<Produto>> GetAllAsync()
        => await _context.Produtos.AsNoTracking().ToListAsync();

    public async Task AddAsync(Produto entity)
        => await _context.Produtos.AddAsync(entity);

    public void Update(Produto entity)
        => _context.Produtos.Update(entity);

    public void Delete(Produto entity)
        => _context.Produtos.Remove(entity);

    // Queries semânticas — encapsulam lógica de acesso a dados
    public async Task<List<Produto>> BuscarAtivosComEstoqueAsync()
    {
        return await _context.Produtos
            .AsNoTracking()
            .Where(p => p.Ativo && p.Estoque > 0)
            .Include(p => p.Categoria)
            .OrderBy(p => p.Nome)
            .ToListAsync();
    }

    public async Task<List<Produto>> BuscarPorCategoriaAsync(int categoriaId)
    {
        return await _context.Produtos
            .AsNoTracking()
            .Where(p => p.CategoriaId == categoriaId && p.Ativo)
            .OrderBy(p => p.Nome)
            .ToListAsync();
    }

    public async Task<(List<ProdutoResumoDto> Itens, int Total)> ListarPaginadoAsync(
        int pagina, int tamanhoPagina, string? filtro = null)
    {
        IQueryable<Produto> query = _context.Produtos
            .AsNoTracking()
            .Where(p => p.Ativo);

        if (!string.IsNullOrWhiteSpace(filtro))
            query = query.Where(p => p.Nome.Contains(filtro));

        int total = await query.CountAsync();

        List<ProdutoResumoDto> itens = await query
            .OrderBy(p => p.Nome)
            .Skip((pagina - 1) * tamanhoPagina)
            .Take(tamanhoPagina)
            .Select(p => new ProdutoResumoDto(p.Id, p.Nome, p.Preco, p.Categoria.Nome))
            .ToListAsync();

        return (itens, total);
    }
}

// ============================================
// 📄 UnitOfWork.cs — Implementação
// ============================================
using EcommerceApi.Data;

namespace EcommerceApi.Repositories;

public class UnitOfWork : IUnitOfWork
{
    private readonly EcommerceDbContext _context;

    public UnitOfWork(EcommerceDbContext context)
    {
        _context = context;
        Produtos = new ProdutoRepository(context);
        Categorias = new CategoriaRepository(context);
    }

    public IProdutoRepository Produtos { get; }
    public ICategoriaRepository Categorias { get; }

    public async Task<int> SaveChangesAsync(CancellationToken ct = default)
        => await _context.SaveChangesAsync(ct);

    public void Dispose() => _context.Dispose();
}

// ============================================
// 📄 Registro no DI — Extensions/RepositoryExtensions.cs
// ============================================
// public static IServiceCollection AddRepositories(this IServiceCollection services)
// {
//     services.AddScoped<IProdutoRepository, ProdutoRepository>();
//     services.AddScoped<ICategoriaRepository, CategoriaRepository>();
//     services.AddScoped<IUnitOfWork, UnitOfWork>();
//     return services;
// }`,
      codeLanguage: "csharp",
      runCommand: "cd EcommerceApi && dotnet run",
      checklist: [
        "Criar IRepository<T> genérico com operações CRUD",
        "Criar IProdutoRepository com queries semânticas (BuscarAtivosComEstoqueAsync)",
        "Implementar ProdutoRepository usando EF Core",
        "Criar IUnitOfWork e implementação com SaveChangesAsync",
        "Registrar no DI como Scoped e injetar em um controller",
      ],
      quiz: [
        {
          q: "Qual o principal benefício do Repository Pattern combinado com DI?",
          options: [
            "Performance — repositories são mais rápidos que DbContext direto",
            "Desacoplamento — controllers dependem da interface (IProdutoRepository), não da implementação; permite trocar ORM ou usar mocks em testes sem alterar lógica de negócio",
            "Segurança — repositories impedem SQL Injection",
            "Repositories eliminam a necessidade de DbContext",
          ],
          answer: 1,
          explanation:
            "Repository + DI: o controller depende de IProdutoRepository. Em produção, o DI injeta ProdutoRepository (EF Core). Em testes, injeta MockProdutoRepository. Para trocar de EF Core para Dapper, crie nova implementação e mude o registro no DI.",
        },
        {
          q: "Qual o problema de um repositório genérico que apenas expõe IQueryable<T>?",
          options: [
            "IQueryable não funciona com EF Core",
            "Expor IQueryable vaza a abstração — consumidores montam queries LINQ complexas, acoplando-se ao ORM; o repository não encapsula nada, é só uma camada extra sem valor",
            "IQueryable é mais lento que List",
            "Não há problema — é a melhor prática",
          ],
          answer: 1,
          explanation:
            "Repository deve encapsular queries complexas com nomes semânticos (BuscarAtivosComEstoque). Expor IQueryable força o consumidor a montar LINQ = acoplamento ao EF Core. Ao trocar para Dapper, precisaria reescrever todo consumidor que usa IQueryable.",
        },
        {
          q: "O que acontece se em vez de IUnitOfWork.SaveChangesAsync() cada repository tiver seu próprio SaveChanges?",
          options: [
            "Funciona da mesma forma",
            "Cada Save cria uma transação separada — se o segundo falha após o primeiro ter sucesso, os dados ficam inconsistentes (metade salva, metade não)",
            "O EF Core previne isso automaticamente",
            "SaveChanges por repository é mais rápido",
          ],
          answer: 1,
          explanation:
            "Unit of Work agrupa operações em uma única transação: produtos.Add + categorias.Update + unitOfWork.SaveChangesAsync() = 1 transação. Com Save separado por repository, cada um é uma transação independente → inconsistência se um falha.",
        },
      ],
    },
    {
      id: "m8t4",
      moduleId: "m8",
      title: "Options Pattern e Configuração",
      theory: `Options Pattern é a forma padrão do ASP.NET Core para acessar configurações tipadas. Em vez de ler strings avulsas com Configuration["Smtp:Host"], você define uma classe fortemente tipada (SmtpSettings) e o framework popula automaticamente a partir do appsettings.json. Type-safety, IntelliSense e validação inclusos.

O registro usa builder.Services.Configure<SmtpSettings>(builder.Configuration.GetSection("Smtp")). O ASP.NET Core lê a seção "Smtp" do appsettings.json, mapeia para as propriedades de SmtpSettings e disponibiliza via DI. No serviço, injete IOptions<SmtpSettings> para acessar .Value.

IOptions<T> vs IOptionsSnapshot<T> vs IOptionsMonitor<T>: IOptions é Singleton (lê 1 vez no startup, nunca muda). IOptionsSnapshot é Scoped (relê a cada request — suporta hot reload). IOptionsMonitor é Singleton mas com callback OnChange (reage a mudanças em tempo real). Para APIs, IOptionsSnapshot é o mais seguro.

Validação com DataAnnotations + ValidateOnStart garante que configurações inválidas sejam detectadas no startup, não no primeiro request: builder.Services.AddOptions<SmtpSettings>().Bind(config.GetSection("Smtp")).ValidateDataAnnotations().ValidateOnStart(). Se [Required] Host estiver vazio, o app não inicia — fail fast.

Named Options permitem múltiplas instâncias da mesma configuração: builder.Services.Configure<ApiSettings>("GitHub", ...) e builder.Services.Configure<ApiSettings>("Jira", ...). No serviço, use IOptionsSnapshot<ApiSettings> e acesse com options.Get("GitHub"). Útil para integrar com múltiplas APIs externas.

O precedence de configuração no ASP.NET Core é: appsettings.json → appsettings.{Environment}.json → User Secrets (dev) → Environment Variables → Command Line. Variáveis de ambiente sobrescrevem appsettings, permitindo que a mesma imagem Docker funcione em dev, staging e prod apenas mudando env vars.`,
      code: `// Options Pattern e Configuração — ASP.NET Core 8

// ============================================
// 📄 Settings/SmtpSettings.cs — Classe de configuração
// ============================================
using System.ComponentModel.DataAnnotations;

namespace EcommerceApi.Settings;

public class SmtpSettings
{
    public const string SectionName = "Smtp";

    [Required(ErrorMessage = "Host SMTP é obrigatório")]
    public string Host { get; set; } = string.Empty;

    [Range(1, 65535, ErrorMessage = "Porta inválida")]
    public int Port { get; set; } = 587;

    [Required, EmailAddress]
    public string FromEmail { get; set; } = string.Empty;

    public string? FromName { get; set; }
    public string? Username { get; set; }
    public string? Password { get; set; }
    public bool UseSsl { get; set; } = true;
}

// ============================================
// 📄 Settings/DatabaseSettings.cs
// ============================================
namespace EcommerceApi.Settings;

public class DatabaseSettings
{
    public const string SectionName = "Database";

    [Required(ErrorMessage = "ConnectionString é obrigatória")]
    public string ConnectionString { get; set; } = string.Empty;

    [Range(1, 300)]
    public int CommandTimeoutSeconds { get; set; } = 30;

    public bool EnableSensitiveDataLogging { get; set; } = false;
}

// ============================================
// 📄 Settings/PaginacaoSettings.cs
// ============================================
namespace EcommerceApi.Settings;

public class PaginacaoSettings
{
    public const string SectionName = "Paginacao";

    [Range(1, 100)]
    public int TamanhoPadrao { get; set; } = 20;

    [Range(1, 500)]
    public int TamanhoMaximo { get; set; } = 100;
}

// ============================================
// 📄 appsettings.json — Configurações tipadas
// ============================================
// {
//   "Database": {
//     "ConnectionString": "Server=localhost;Database=EcommerceDb;Trusted_Connection=true",
//     "CommandTimeoutSeconds": 30,
//     "EnableSensitiveDataLogging": false
//   },
//   "Smtp": {
//     "Host": "smtp.empresa.com",
//     "Port": 587,
//     "FromEmail": "noreply@empresa.com",
//     "FromName": "E-commerce",
//     "UseSsl": true
//   },
//   "Paginacao": {
//     "TamanhoPadrao": 20,
//     "TamanhoMaximo": 100
//   }
// }

// ============================================
// 📄 appsettings.Development.json — sobrescreve apenas o necessário
// ============================================
// {
//   "Database": {
//     "EnableSensitiveDataLogging": true
//   }
// }

// ============================================
// 🔐 User Secrets — para dados sensíveis em DEV
// ============================================
// Inicializar User Secrets no projeto:
// $ dotnet user-secrets init
//
// Guardar a connection string (NÃO fica no appsettings):
// $ dotnet user-secrets set "Database:ConnectionString" "Server=localhost;Database=EcommerceDb;Trusted_Connection=true;TrustServerCertificate=true"
// $ dotnet user-secrets set "Smtp:Password" "senha-do-smtp-aqui"
//
// Listar secrets configurados:
// $ dotnet user-secrets list
//
// Precedência (menor → maior):
// appsettings.json < appsettings.Development.json < User Secrets < Env Vars < CLI

// ============================================
// 📄 Program.cs — Registro com validação no startup
// ============================================
using EcommerceApi.Settings;

var builder = WebApplication.CreateBuilder(args);

// Configure + Validação + ValidateOnStart = fail fast
builder.Services
    .AddOptions<DatabaseSettings>()
    .Bind(builder.Configuration.GetSection(DatabaseSettings.SectionName))
    .ValidateDataAnnotations()
    .ValidateOnStart();

builder.Services
    .AddOptions<SmtpSettings>()
    .Bind(builder.Configuration.GetSection(SmtpSettings.SectionName))
    .ValidateDataAnnotations()
    .ValidateOnStart(); // Se Host vazio → app NÃO inicia

builder.Services
    .AddOptions<PaginacaoSettings>()
    .Bind(builder.Configuration.GetSection(PaginacaoSettings.SectionName))
    .ValidateDataAnnotations()
    .ValidateOnStart();

// ... resto do Program.cs

// ============================================
// 📄 Services/SmtpEmailService.cs — Usando IOptions
// ============================================
using Microsoft.Extensions.Options;
using EcommerceApi.Settings;

namespace EcommerceApi.Services;

public class SmtpEmailService : IEmailService
{
    private readonly SmtpSettings _settings;
    private readonly ILogger<SmtpEmailService> _logger;

    // IOptionsSnapshot: relê config a cada request (suporta hot reload)
    public SmtpEmailService(
        IOptionsSnapshot<SmtpSettings> options,
        ILogger<SmtpEmailService> logger)
    {
        _settings = options.Value;
        _logger = logger;
    }

    public async Task EnviarAsync(string para, string assunto, string corpo)
    {
        _logger.LogInformation(
            "Enviando email via {Host}:{Port} de {From}",
            _settings.Host, _settings.Port, _settings.FromEmail);

        // Em produção: usar SmtpClient ou MailKit
        await Task.CompletedTask;
    }
}

// ============================================
// 📄 Repositories/ProdutoRepository.cs — usando PaginacaoSettings
// ============================================
// public class ProdutoRepository
// {
//     private readonly EcommerceDbContext _context;
//     private readonly PaginacaoSettings _paginacao;
//
//     public ProdutoRepository(
//         EcommerceDbContext context,
//         IOptions<PaginacaoSettings> paginacao)
//     {
//         _context = context;
//         _paginacao = paginacao.Value;
//     }
//
//     public async Task<List<Produto>> ListarPaginadoAsync(int pagina, int? tamanhoPagina)
//     {
//         int tamanho = Math.Min(
//             tamanhoPagina ?? _paginacao.TamanhoPadrao,
//             _paginacao.TamanhoMaximo);
//
//         return await _context.Produtos
//             .Skip((pagina - 1) * tamanho)
//             .Take(tamanho)
//             .ToListAsync();
//     }
// }

// ============================================
// 📄 Sobrescrevendo com variáveis de ambiente (Docker)
// ============================================
// No Docker Compose ou Kubernetes:
// environment:
//   - Database__ConnectionString=Server=db-prod;Database=EcommerceDb;...
//   - Smtp__Host=smtp.prod.empresa.com
//   - Smtp__Port=465
//
// __ (duplo underscore) = : (separador de seção)
// Env vars sobrescrevem appsettings.json automaticamente!`,
      codeLanguage: "csharp",
      runCommand: "cd EcommerceApi && dotnet run",
      checklist: [
        "Criar DatabaseSettings, SmtpSettings e PaginacaoSettings com DataAnnotations",
        "Registrar com AddOptions + Bind + ValidateOnStart no Program.cs",
        "Configurar User Secrets: dotnet user-secrets init && dotnet user-secrets set Database:ConnectionString ...",
        "Injetar IOptions<PaginacaoSettings> no repositório e usar TamanhoPadrao/TamanhoMaximo",
        "Sobrescrever configuração via variável de ambiente (Database__ConnectionString) e confirmar precedência",
      ],
      quiz: [
        {
          q: "Qual a diferença entre IOptions<T>, IOptionsSnapshot<T> e IOptionsMonitor<T>?",
          options: [
            "São idênticos — apenas aliases diferentes",
            "IOptions = Singleton (lê 1 vez); IOptionsSnapshot = Scoped (relê a cada request, suporta hot reload); IOptionsMonitor = Singleton com callback OnChange para reagir a mudanças em tempo real",
            "IOptionsMonitor é deprecado no .NET 8",
            "IOptions suporta hot reload; IOptionsSnapshot não",
          ],
          answer: 1,
          explanation:
            "IOptions: Singleton, valor fixo no startup. IOptionsSnapshot: Scoped, relê config a cada request (hot reload). IOptionsMonitor: Singleton mas tem .CurrentValue que atualiza + callback OnChange. Para APIs, IOptionsSnapshot é o mais usado.",
        },
        {
          q: "O que ValidateOnStart faz ao registrar Options?",
          options: [
            "Valida apenas na primeira request",
            "Executa as validações (DataAnnotations) no startup — se falhar, o app NÃO inicia; fail fast garante que configuração inválida seja detectada imediatamente",
            "Valida o JSON do appsettings.json quanto à sintaxe",
            "Desativa a validação em produção para performance",
          ],
          answer: 1,
          explanation:
            "ValidateOnStart roda as validações (DataAnnotations, custom) durante a inicialização da aplicação. Se [Required] Host está vazio, OptionsValidationException é lançada e o app para. Melhor descobrir no deploy do que no primeiro request.",
        },
        {
          q: "Como variáveis de ambiente sobrescrevem appsettings.json? Ex: seção Smtp.Host",
          options: [
            "Não é possível sobrescrever com env vars",
            "Variável Smtp__Host (__ = separador de seção) sobrescreve Smtp:Host do appsettings.json; env vars têm precedência mais alta na hierarquia de configuração",
            "Precisa de código especial para ler env vars",
            "Env vars só funcionam no Linux",
          ],
          answer: 1,
          explanation:
            "ASP.NET Core lê configuração em ordem de precedência: appsettings.json → appsettings.{Env}.json → User Secrets → Env Vars → CLI. Env vars sobrescrevem appsettings. Separador de seção: __ (duplo underscore). Padrão para Docker/K8s.",
        },
      ],
    },
    {
      id: "m8proj",
      moduleId: "m8",
      title: "🛒 Projeto: API E-commerce Completa",
      theory: `Este é o projeto final da Fase 2, integrando TODOS os conceitos aprendidos nos módulos 5 a 8. Você vai construir uma API REST completa de e-commerce de verdade — não um tutorial simplificado, mas uma estrutura corporativa real com separação em camadas, boas práticas e código pronto para evolução.

A arquitetura segue Clean Architecture simplificada, organizada em 4 camadas: Domain (entidades e interfaces), Application (serviços e DTOs), Infrastructure (EF Core, repositórios, configurações) e API (controllers, middlewares, Program.cs). Cada camada é uma pasta dentro do projeto — em projetos maiores, seriam projetos separados (.csproj).

O projeto implementa: CRUD completo de Produtos e Pedidos com validação, Entity Framework Core com SQL Server e migrations reais, Repository Pattern com injeção de dependências, middlewares de logging e tratamento global de erros, Swagger com documentação XML, e configurações tipadas com Options Pattern.

O fluxo de um request é: HTTP → Middleware de logging → Middleware de exceção → Controller (fino) → Service (lógica de negócio) → Repository (acesso a dados) → DbContext (EF Core) → SQL Server. Cada camada tem responsabilidade única e é testável isoladamente graças ao DI.

Para controle de versão, usamos GitFlow: main (produção), develop (integração), feature/produtos, feature/pedidos, feature/middlewares. Cada feature branch contém um grupo de funcionalidades, com PR e code review antes do merge. O release final integra tudo.

Este projeto é o portfólio que demonstra domínio de: ASP.NET Core Web API, EF Core com SQL Server, padrões de projeto (Repository, Unit of Work, DI), boas práticas corporativas (logging, error handling, validation, Swagger). É exatamente o tipo de projeto que empresas esperam ver em candidatos .NET.`,
      code: `// 🛒 Projeto Final Fase 2: API E-commerce Completa
// Estrutura de pastas corporativa (Clean Architecture simplificada)

// ============================================
// 📁 Estrutura do projeto
// ============================================
// EcommerceApi/
// ├── Properties/
// │   └── launchSettings.json
// ├── Domain/                          ← Entidades e interfaces
// │   ├── Entities/
// │   │   ├── Produto.cs
// │   │   ├── Categoria.cs
// │   │   ├── Pedido.cs
// │   │   ├── ItemPedido.cs
// │   │   └── Cliente.cs
// │   └── Interfaces/
// │       ├── IRepository.cs
// │       ├── IProdutoRepository.cs
// │       ├── IPedidoRepository.cs
// │       └── IUnitOfWork.cs
// ├── Application/                     ← Lógica de negócio
// │   ├── DTOs/
// │   │   ├── ProdutoDto.cs
// │   │   └── PedidoDto.cs
// │   └── Services/
// │       ├── IProdutoService.cs
// │       ├── ProdutoService.cs
// │       ├── IPedidoService.cs
// │       └── PedidoService.cs
// ├── Infrastructure/                  ← Acesso a dados
// │   ├── Data/
// │   │   ├── EcommerceDbContext.cs
// │   │   └── Configurations/
// │   │       ├── ProdutoConfiguration.cs
// │   │       ├── CategoriaConfiguration.cs
// │   │       ├── PedidoConfiguration.cs
// │   │       └── ClienteConfiguration.cs
// │   ├── Repositories/
// │   │   ├── ProdutoRepository.cs
// │   │   ├── PedidoRepository.cs
// │   │   └── UnitOfWork.cs
// │   └── Extensions/
// │       └── ServiceCollectionExtensions.cs
// ├── API/                             ← Controllers e Middlewares
// │   ├── Controllers/
// │   │   ├── ProdutosController.cs
// │   │   ├── PedidosController.cs
// │   │   └── HealthController.cs
// │   └── Middlewares/
// │       ├── RequestLoggingMiddleware.cs
// │       └── ExceptionHandlingMiddleware.cs
// ├── Settings/
// │   ├── DatabaseSettings.cs
// │   ├── SmtpSettings.cs
// │   └── PaginacaoSettings.cs
// ├── Migrations/
// │   └── (geradas pelo EF Core)
// ├── Program.cs                       ← Composição raiz
// ├── appsettings.json
// ├── appsettings.Development.json
// └── EcommerceApi.csproj

// ============================================
// 📄 Program.cs — Composição raiz (integra tudo)
// ============================================
using System.Reflection;
using Microsoft.EntityFrameworkCore;
using EcommerceApi.Infrastructure.Data;
using EcommerceApi.Infrastructure.Extensions;
using EcommerceApi.API.Middlewares;
using EcommerceApi.Settings;

var builder = WebApplication.CreateBuilder(args);

// ── Configurações tipadas ──
builder.Services
    .AddOptions<DatabaseSettings>()
    .Bind(builder.Configuration.GetSection("Database"))
    .ValidateDataAnnotations()
    .ValidateOnStart();

builder.Services
    .AddOptions<PaginacaoSettings>()
    .Bind(builder.Configuration.GetSection("Paginacao"))
    .ValidateDataAnnotations()
    .ValidateOnStart();

// ── EF Core + SQL Server ──
builder.Services.AddDbContext<EcommerceDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration["Database:ConnectionString"],
        sql => sql.CommandTimeout(30)));

// ── Repositórios + Serviços (Extension Method) ──
builder.Services.AddInfrastructure();
builder.Services.AddApplicationServices();

// ── Controllers + Swagger ──
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "E-commerce API",
        Version = "v1",
        Description = "API completa — Projeto Final Fase 2"
    });
    // Inclui comentários XML na documentação Swagger
    string xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    string xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    if (File.Exists(xmlPath))
        options.IncludeXmlComments(xmlPath);
});

var app = builder.Build();

// ── Pipeline HTTP (ordem importa!) ──
app.UseMiddleware<ExceptionHandlingMiddleware>();  // 1. Captura exceções
app.UseMiddleware<RequestLoggingMiddleware>();      // 2. Loga requests

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();

// ============================================
// 📄 EcommerceApi.csproj — packages do projeto completo
// ============================================
// <Project Sdk="Microsoft.NET.Sdk.Web">
//   <PropertyGroup>
//     <TargetFramework>net8.0</TargetFramework>
//     <Nullable>enable</Nullable>
//     <ImplicitUsings>enable</ImplicitUsings>
//     <GenerateDocumentationFile>true</GenerateDocumentationFile>
//   </PropertyGroup>
//   <ItemGroup>
//     <PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="8.0.10" />
//     <PackageReference Include="Microsoft.EntityFrameworkCore.Design" Version="8.0.10" />
//     <PackageReference Include="Swashbuckle.AspNetCore" Version="6.5.0" />
//   </ItemGroup>
// </Project>

// ============================================
// 📄 Extensions/ServiceCollectionExtensions.cs
// ============================================
// public static class ServiceCollectionExtensions
// {
//     public static IServiceCollection AddInfrastructure(this IServiceCollection services)
//     {
//         services.AddScoped<IProdutoRepository, ProdutoRepository>();
//         services.AddScoped<IPedidoRepository, PedidoRepository>();
//         services.AddScoped<IUnitOfWork, UnitOfWork>();
//         return services;
//     }
//
//     public static IServiceCollection AddApplicationServices(this IServiceCollection services)
//     {
//         services.AddScoped<IProdutoService, ProdutoService>();
//         services.AddScoped<IPedidoService, PedidoService>();
//         return services;
//     }
// }

// ============================================
// 🌿 GitFlow — branches do projeto
// ============================================
// $ git flow init
// $ git flow feature start produtos
// (implementa CRUD de Produtos + migrations)
// $ git flow feature finish produtos
//
// $ git flow feature start pedidos
// (implementa CRUD de Pedidos + validação de estoque)
// $ git flow feature finish pedidos
//
// $ git flow feature start middlewares
// (adiciona logging + error handling)
// $ git flow feature finish middlewares
//
// $ git flow release start v1.0.0
// (testes finais, ajustes de configuração)
// $ git flow release finish v1.0.0`,
      codeLanguage: "csharp",
      runCommand:
        "dotnet new webapi -n EcommerceApi --use-controllers && cd EcommerceApi && dotnet run",
      checklist: [
        "Criar o projeto do zero seguindo a estrutura de pastas indicada (Domain, Application, Infrastructure, API)",
        "Implementar CRUD completo de Produtos com DTOs, Service e Repository",
        "Implementar endpoints de Pedidos com validação de estoque no Service",
        "Rodar todas as migrations e verificar o banco no Azure Data Studio",
        "Fazer o commit final com GitFlow: git flow release start v1.0.0 && git flow release finish v1.0.0",
      ],
      quiz: [
        {
          q: "Em Clean Architecture, qual camada deve conter a lógica de negócio (validação de estoque, cálculo de total)?",
          options: [
            "Controller — é o ponto de entrada do request",
            "Application/Services — orquestra lógica de negócio, recebe DTOs e delega acesso a dados para os repositórios",
            "Infrastructure/Repositories — onde ficam as queries",
            "Domain/Entities — as entidades sabem tudo sobre si mesmas",
          ],
          answer: 1,
          explanation:
            "A camada Application contém os Services que orquestram a lógica de negócio. Controllers são finos (validam input e retornam response). Repositories são focados em persistência. Entities contêm regras do domínio (invariantes), mas a orquestração fica nos Services.",
        },
        {
          q: "Por que usar Repository Pattern neste projeto se o EF Core já é um ORM completo?",
          options: [
            "Repository é obrigatório — sem ele o EF Core não funciona",
            "Repository abstrai o acesso a dados atrás de interfaces, permitindo: trocar ORM sem alterar Services, usar mocks em testes unitários, encapsular queries complexas com nomes semânticos",
            "Para adicionar mais camadas e código — quanto mais camadas, melhor",
            "Repository é mais rápido que usar DbContext diretamente",
          ],
          answer: 1,
          explanation:
            "Repository + DI: Services dependem de IProdutoRepository (abstração). Em produção: EF Core. Em testes: mock. Se trocar para Dapper, cria nova implementação sem alterar Services. Queries complexas ficam encapsuladas com nomes legíveis.",
        },
        {
          q: "Como garantir que as migrations rodem em produção de forma segura?",
          options: [
            "Chamar Database.Migrate() no Program.cs — aplica automaticamente",
            "Gerar script SQL com dotnet ef migrations script --idempotent, revisar com DBA, fazer backup do banco e executar o script manualmente ou via pipeline CI/CD",
            "Migrations são apenas para desenvolvimento — em produção cria tabelas manualmente",
            "O EF Core aplica migrations automaticamente em produção",
          ],
          answer: 1,
          explanation:
            "Em produção NUNCA aplique migrations automaticamente. Gere o script SQL (--idempotent para re-executar com segurança), passe por code review + DBA review, faça backup, aplique em staging primeiro e depois em produção via pipeline CI/CD controlada.",
        },
      ],
    },
  ],
};
