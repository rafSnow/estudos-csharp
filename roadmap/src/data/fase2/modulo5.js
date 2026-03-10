export const MODULO_5 = {
  id: "m5",
  title: "ASP.NET Core Web API",
  icon: "🌐",
  week: "Semana 5",
  color: "#7C3AED",
  topics: [
    {
      id: "m5t1",
      moduleId: "m5",
      title: "Estrutura de um Projeto Web API",
      theory: `ASP.NET Core é o framework web moderno da Microsoft, open-source e cross-platform. Diferente do antigo ASP.NET Framework (Windows-only, pesado, System.Web acoplado), o ASP.NET Core roda em Windows, Linux e macOS, é modular e extremamente performante — consistentemente entre os frameworks web mais rápidos do mundo em benchmarks do TechEmpower.

O ponto de entrada de toda aplicação ASP.NET Core é o Program.cs. Com o .NET 6+, o template usa top-level statements — sem classe Program, sem método Main explícito. O WebApplication.CreateBuilder(args) cria um builder que configura: servidor web (Kestrel por padrão), injeção de dependências, logging, configuração (appsettings.json + variáveis de ambiente) e o pipeline HTTP.

A estrutura de pastas padrão de um projeto Web API é: Program.cs (configuração e startup), Controllers/ (endpoints da API), Models/ (entidades e DTOs), appsettings.json (configuração por ambiente), Properties/launchSettings.json (configuração de desenvolvimento). Em projetos maiores, adiciona-se: Services/ (lógica de negócio), Repositories/ (acesso a dados), Middlewares/ (pipeline customizado).

Kestrel é o servidor web embutido do ASP.NET Core — leve, rápido e suficiente para produção. Em cenários corporativos, é comum usar Kestrel atrás de um reverse proxy (Nginx, IIS, Azure App Service) que gerencia TLS, load balancing e static files. A configuração de portas e certificados fica no appsettings ou launchSettings.

Swagger (OpenAPI) é habilitado por padrão no template webapi. Gera documentação interativa da API automaticamente, permitindo testar endpoints direto no navegador. Em equipes corporativas, o Swagger é essencial para comunicação entre frontend e backend — o contrato da API fica documentado e sempre atualizado.

Grandes empresas brasileiras como Nubank, iFood e Itaú migraram para .NET Core justamente pela performance, custo reduzido de infraestrutura (menos servidores) e capacidade de rodar em containers Docker/Kubernetes.`,
      code: `// Estrutura de um Projeto Web API — ASP.NET Core 8
// Execute: dotnet new webapi -n EcommerceApi --use-controllers && cd EcommerceApi

// ============================================
// 📄 Program.cs — ponto de entrada da aplicação
// ============================================
var builder = WebApplication.CreateBuilder(args);

// Registra serviços no container de DI
builder.Services.AddControllers();                // Habilita controllers
builder.Services.AddEndpointsApiExplorer();       // Metadata para Swagger
builder.Services.AddSwaggerGen(options =>          // Gera documentação OpenAPI
{
    options.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "E-commerce API",
        Version = "v1",
        Description = "API de produtos e pedidos para o projeto de aprendizado"
    });
});

var app = builder.Build();

// Configura o pipeline HTTP (ordem importa!)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();                             // Serve o JSON OpenAPI
    app.UseSwaggerUI();                           // Serve a UI interativa
}

app.UseHttpsRedirection();                        // Redireciona HTTP → HTTPS
app.UseAuthorization();                           // Middleware de autorização
app.MapControllers();                             // Mapeia rotas dos controllers

app.Run();                                        // Inicia o servidor Kestrel

// ============================================
// 📄 Controllers/HealthController.cs
// ============================================
using Microsoft.AspNetCore.Mvc;

namespace EcommerceApi.Controllers;

/// <summary>
/// Endpoint de verificação de saúde da API.
/// </summary>
[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    /// <summary>
    /// Verifica se a API está respondendo.
    /// </summary>
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public IActionResult Get()
    {
        return Ok(new
        {
            Status = "Healthy",
            Timestamp = DateTime.UtcNow,
            Version = "1.0.0"
        });
    }
}

// ============================================
// 📄 appsettings.json
// ============================================
// {
//   "Logging": {
//     "LogLevel": {
//       "Default": "Information",
//       "Microsoft.AspNetCore": "Warning"
//     }
//   },
//   "AllowedHosts": "*"
// }

// ============================================
// 📄 EcommerceApi.csproj (packages necessários)
// ============================================
// <Project Sdk="Microsoft.NET.Sdk.Web">
//   <PropertyGroup>
//     <TargetFramework>net8.0</TargetFramework>
//     <Nullable>enable</Nullable>
//     <ImplicitUsings>enable</ImplicitUsings>
//   </PropertyGroup>
//   <ItemGroup>
//     <PackageReference Include="Swashbuckle.AspNetCore" Version="6.5.0" />
//   </ItemGroup>
// </Project>`,
      codeLanguage: "csharp",
      runCommand:
        "dotnet new webapi -n EcommerceApi --use-controllers && cd EcommerceApi && dotnet run",
      checklist: [
        "Criar projeto: dotnet new webapi -n EcommerceApi --use-controllers && cd EcommerceApi",
        "Rodar a API com dotnet run e acessar o Swagger em https://localhost:xxxx/swagger",
        "Adicionar um controller HealthController com GET /api/health retornando 200 OK",
        "Inspecionar o Program.cs e comentar cada linha explicando o que faz",
        "Publicar localmente: dotnet publish -c Release e examinar a pasta bin/Release",
      ],
      quiz: [
        {
          q: "Qual a principal diferença entre ASP.NET Core e o antigo ASP.NET Framework?",
          options: [
            "ASP.NET Core é mais lento mas mais fácil de usar",
            "ASP.NET Core é cross-platform, modular e open-source; o Framework é Windows-only e monolítico",
            "Não há diferença — são nomes diferentes para a mesma coisa",
            "ASP.NET Framework é mais moderno que o Core",
          ],
          answer: 1,
          explanation:
            "ASP.NET Core foi reescrito do zero: cross-platform (Windows, Linux, macOS), modular (sem System.Web), open-source e muito mais performante. O Framework é legado, Windows-only e não recebe mais features.",
        },
        {
          q: "Qual é a função do WebApplication.CreateBuilder(args) no Program.cs?",
          options: [
            "Apenas cria a pasta do projeto",
            "Configura o servidor web, DI container, logging e carrega configurações (appsettings)",
            "Compila o projeto automaticamente",
            "Cria o banco de dados da aplicação",
          ],
          answer: 1,
          explanation:
            "CreateBuilder configura toda a infraestrutura: Kestrel (servidor), IServiceCollection (DI), IConfiguration (appsettings + env vars), ILoggerFactory (logging). É o bootstrap completo da aplicação.",
        },
        {
          q: "O que este código produz? app.MapControllers(); app.Run();",
          options: [
            "Cria os controllers automaticamente",
            "Registra as rotas dos controllers no pipeline HTTP e inicia o servidor escutando requisições",
            "Compila e testa os controllers",
            "Gera a documentação Swagger",
          ],
          answer: 1,
          explanation:
            "MapControllers() escaneia os controllers e registra suas rotas no roteamento HTTP. app.Run() inicia o Kestrel escutando na porta configurada. Sem MapControllers, os endpoints não são acessíveis.",
        },
      ],
    },
    {
      id: "m5t2",
      moduleId: "m5",
      title: "Controllers, Actions e Rotas",
      theory: `Controllers são o coração de uma Web API — classes que agrupam endpoints (actions) relacionados. Cada método público de um controller é um action que responde a uma rota HTTP específica. A convenção REST mapeia verbos HTTP a operações: GET (consultar), POST (criar), PUT (substituir), PATCH (atualizar parcial), DELETE (remover).

Route attributes definem como URLs são mapeadas para actions. [Route("api/[controller]")] usa o nome do controller (sem o sufixo "Controller"). [HttpGet], [HttpPost("{id}")] mapeiam verbos e parâmetros de rota. [FromBody] indica que o parâmetro vem do corpo JSON da requisição, [FromRoute] da URL, [FromQuery] da querystring.

O retorno dos actions é fundamental para uma API profissional. IActionResult permite retornar qualquer status code. ActionResult<T> é genérico e documenta o tipo de retorno no Swagger automaticamente. Os status codes corretos são: 200 (OK, para GET/PUT), 201 (Created, após POST com Location header), 204 (NoContent, DELETE bem-sucedido), 400 (BadRequest, dados inválidos), 404 (NotFound, recurso inexistente), 409 (Conflict, duplicata).

Model binding é o mecanismo que converte dados da requisição HTTP em objetos C# automaticamente. O ASP.NET Core detecta de onde vem cada parâmetro (body, route, query, header) baseado em convenções: tipos complexos vêm do body, tipos simples da route/query. Você pode ser explícito com [FromBody], [FromRoute], [FromQuery].

DTOs (Data Transfer Objects) são records ou classes que definem o formato exato de request e response, separados das entidades do banco. CriarProdutoRequest tem apenas os campos necessários para criação, ProdutoResponse expõe apenas o que o cliente precisa ver. Nunca exponha entidades de banco diretamente na API.

[ProducesResponseType] documenta no Swagger quais status codes cada endpoint pode retornar. É obrigatório em APIs corporativas para que consumidores saibam exatamente o que esperar em cada cenário: sucesso, não encontrado, validação falhou.`,
      code: `// Controllers, Actions e Rotas — ASP.NET Core 8
// Adicione ao projeto EcommerceApi criado no tópico anterior

// ============================================
// 📄 Models/Produto.cs — Entidade
// ============================================
namespace EcommerceApi.Models;

public class Produto
{
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string? Descricao { get; set; }
    public decimal Preco { get; set; }
    public int Estoque { get; set; }
    public bool Ativo { get; set; } = true;
    public DateTime CriadoEm { get; set; } = DateTime.UtcNow;
}

// ============================================
// 📄 Models/DTOs/ProdutoDto.cs — DTOs separados
// ============================================
namespace EcommerceApi.Models.DTOs;

/// <summary>DTO para criação de produto.</summary>
public record CriarProdutoRequest(
    string Nome,
    string? Descricao,
    decimal Preco,
    int Estoque);

/// <summary>DTO para atualização completa.</summary>
public record AtualizarProdutoRequest(
    string Nome,
    string? Descricao,
    decimal Preco,
    int Estoque);

/// <summary>DTO de resposta — nunca expõe a entidade diretamente.</summary>
public record ProdutoResponse(
    int Id,
    string Nome,
    string? Descricao,
    decimal Preco,
    int Estoque,
    bool Ativo,
    DateTime CriadoEm);

// ============================================
// 📄 Controllers/ProdutosController.cs
// ============================================
using Microsoft.AspNetCore.Mvc;
using EcommerceApi.Models;
using EcommerceApi.Models.DTOs;

namespace EcommerceApi.Controllers;

/// <summary>
/// Gerencia produtos do e-commerce.
/// </summary>
[ApiController]
[Route("api/[controller]")]
public class ProdutosController : ControllerBase
{
    // Em memória por enquanto — EF Core virá no Módulo 6
    private static readonly List<Produto> _produtos = [
        new() { Id = 1, Nome = "Mouse Gamer", Preco = 89.90m, Estoque = 50 },
        new() { Id = 2, Nome = "Teclado Mecânico", Preco = 299.90m, Estoque = 30 },
    ];
    private static int _nextId = 3;

    /// <summary>Lista produtos com paginação.</summary>
    [HttpGet]
    [ProducesResponseType(typeof(List<ProdutoResponse>), StatusCodes.Status200OK)]
    public ActionResult<List<ProdutoResponse>> Listar(
        [FromQuery] int pagina = 1,
        [FromQuery] int tamanhoPagina = 10)
    {
        List<ProdutoResponse> resultado = _produtos
            .Where(p => p.Ativo)
            .Skip((pagina - 1) * tamanhoPagina)
            .Take(tamanhoPagina)
            .Select(p => ToResponse(p))
            .ToList();

        return Ok(resultado);
    }

    /// <summary>Busca produto por ID.</summary>
    [HttpGet("{id:int}")]
    [ProducesResponseType(typeof(ProdutoResponse), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<ProdutoResponse> BuscarPorId([FromRoute] int id)
    {
        Produto? produto = _produtos.FirstOrDefault(p => p.Id == id);
        if (produto is null) return NotFound();
        return Ok(ToResponse(produto));
    }

    /// <summary>Cria um novo produto.</summary>
    [HttpPost]
    [ProducesResponseType(typeof(ProdutoResponse), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public ActionResult<ProdutoResponse> Criar([FromBody] CriarProdutoRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Nome) || request.Preco <= 0)
            return BadRequest("Nome e preço positivo são obrigatórios.");

        Produto novo = new()
        {
            Id = _nextId++,
            Nome = request.Nome,
            Descricao = request.Descricao,
            Preco = request.Preco,
            Estoque = request.Estoque,
        };
        _produtos.Add(novo);

        // 201 Created com Location header apontando para GET /api/produtos/{id}
        return CreatedAtAction(nameof(BuscarPorId), new { id = novo.Id }, ToResponse(novo));
    }

    /// <summary>Atualiza produto completamente.</summary>
    [HttpPut("{id:int}")]
    [ProducesResponseType(typeof(ProdutoResponse), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<ProdutoResponse> Atualizar(
        [FromRoute] int id, [FromBody] AtualizarProdutoRequest request)
    {
        Produto? produto = _produtos.FirstOrDefault(p => p.Id == id);
        if (produto is null) return NotFound();

        produto.Nome = request.Nome;
        produto.Descricao = request.Descricao;
        produto.Preco = request.Preco;
        produto.Estoque = request.Estoque;

        return Ok(ToResponse(produto));
    }

    /// <summary>Ativa ou desativa produto (ação parcial).</summary>
    [HttpPatch("{id:int}/ativar")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public IActionResult Ativar([FromRoute] int id, [FromQuery] bool ativo = true)
    {
        Produto? produto = _produtos.FirstOrDefault(p => p.Id == id);
        if (produto is null) return NotFound();

        produto.Ativo = ativo;
        return NoContent();   // 204 — sem corpo na resposta
    }

    /// <summary>Soft delete — desativa o produto.</summary>
    [HttpDelete("{id:int}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public IActionResult Deletar([FromRoute] int id)
    {
        Produto? produto = _produtos.FirstOrDefault(p => p.Id == id);
        if (produto is null) return NotFound();

        produto.Ativo = false; // Soft delete — não remove do banco
        return NoContent();
    }

    // Converte entidade → DTO de resposta
    private static ProdutoResponse ToResponse(Produto p)
        => new(p.Id, p.Nome, p.Descricao, p.Preco, p.Estoque, p.Ativo, p.CriadoEm);
}`,
      codeLanguage: "csharp",
      runCommand: "cd EcommerceApi && dotnet run",
      checklist: [
        "Implementar todos os 6 endpoints do ProdutosController (GET, GET/id, POST, PUT, PATCH, DELETE)",
        "Testar cada endpoint no Swagger verificando status codes corretos",
        "Adicionar [ProducesResponseType] em todos os actions",
        "Criar DTOs separados para Request (criar/atualizar) e Response (retorno)",
        "Testar um endpoint com Postman ou Thunder Client no VS Code",
      ],
      quiz: [
        {
          q: "Qual a diferença entre IActionResult e ActionResult<T>?",
          options: [
            "Não há diferença prática",
            "IActionResult retorna qualquer status code; ActionResult<T> também documenta o tipo de retorno no Swagger automaticamente",
            "ActionResult<T> é mais lento que IActionResult",
            "IActionResult só funciona com GET",
          ],
          answer: 1,
          explanation:
            "ActionResult<T> combina a flexibilidade de IActionResult (retornar NotFound, BadRequest etc.) com tipagem — o Swagger sabe que o retorno de sucesso é do tipo T. IActionResult não informa o tipo.",
        },
        {
          q: "Qual status code HTTP usar quando um POST cria um recurso com sucesso?",
          options: [
            "200 OK",
            "201 Created com Location header apontando para o recurso criado",
            "204 No Content",
            "202 Accepted",
          ],
          answer: 1,
          explanation:
            "POST com criação deve retornar 201 Created com header Location contendo a URL do novo recurso. Em ASP.NET Core: CreatedAtAction(nameof(GetById), new { id }, response). 200 é para buscas, 204 para deletes.",
        },
        {
          q: "O que [FromBody] indica em um parâmetro de action? public IActionResult Criar([FromBody] ProdutoDto dto)",
          options: [
            "O parâmetro vem da querystring da URL",
            "O parâmetro é deserializado do corpo JSON da requisição HTTP",
            "O parâmetro é obrigatório",
            "O parâmetro vem do header da requisição",
          ],
          answer: 1,
          explanation:
            "[FromBody] indica que o model binder deve deserializar o corpo da requisição (geralmente JSON) para o tipo do parâmetro. [FromRoute] vem da URL, [FromQuery] da querystring, [FromHeader] de headers.",
        },
      ],
    },
    {
      id: "m5t3",
      moduleId: "m5",
      title: "Middlewares e Pipeline HTTP",
      theory: `Middlewares são componentes que formam o pipeline de processamento de requisições HTTP no ASP.NET Core. Cada requisição passa por uma cadeia de middlewares sequencialmente antes de chegar ao endpoint, e a resposta volta pela mesma cadeia na ordem inversa. É um padrão "boneca russa" — cada middleware envolve o próximo.

A ordem dos middlewares no Program.cs é crucial e define o comportamento da aplicação. A regra geral é: middleware de exceções primeiro (captura erros de todos os seguintes), depois HTTPS redirection, CORS, autenticação, autorização, e por último o roteamento/endpoints. Alterar a ordem pode causar bugs sutis — por exemplo, UseAuthentication DEVE vir antes de UseAuthorization, senão a autorização roda sem saber quem é o usuário.

Cada middleware recebe o HttpContext e um delegate next que chama o próximo middleware. Pode: (1) executar lógica ANTES de chamar next (pré-processamento), (2) chamar await next(context) para passar ao próximo, (3) executar lógica DEPOIS (pós-processamento), ou (4) NÃO chamar next (curto-circuito — útil para caching, rate limiting).

Middlewares built-in cobrem as necessidades mais comuns: UseExceptionHandler (captura exceções não tratadas), UseHttpsRedirection, UseCors (Cross-Origin Resource Sharing), UseAuthentication, UseAuthorization, UseStaticFiles, UseResponseCaching. Esses são fornecidos pelo framework e bem testados.

Middleware customizado é implementado como uma classe com InvokeAsync(HttpContext, RequestDelegate) ou como inline com app.Use(). Classes são preferidas em produção por serem testáveis e reutilizáveis. Exemplos comuns: logging de requisições (método, path, tempo), rate limiting, correlação de IDs entre serviços.

A diferença entre middleware, filter e action: middleware opera no nível HTTP (todas as requisições passam), filter opera no nível MVC (só requisições que chegam nos controllers), action é a lógica de negócio do endpoint. Middleware para concerns transversais (logging, CORS), filter para concerns de controller (validação, auditoria), action para lógica específica do endpoint.`,
      code: `// Middlewares e Pipeline HTTP — ASP.NET Core 8
// Adicione ao projeto EcommerceApi

// ============================================
// 📄 Middlewares/RequestLoggingMiddleware.cs
// ============================================
using System.Diagnostics;

namespace EcommerceApi.Middlewares;

/// <summary>
/// Middleware que registra método, path, status code e tempo de cada requisição.
/// </summary>
public class RequestLoggingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<RequestLoggingMiddleware> _logger;

    public RequestLoggingMiddleware(RequestDelegate next, ILogger<RequestLoggingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // PRÉ-PROCESSAMENTO — antes do endpoint
        Stopwatch sw = Stopwatch.StartNew();
        string method = context.Request.Method;
        string path = context.Request.Path;

        try
        {
            await _next(context); // Chama o próximo middleware
        }
        finally
        {
            // PÓS-PROCESSAMENTO — depois do endpoint
            sw.Stop();
            int statusCode = context.Response.StatusCode;
            _logger.LogInformation(
                "HTTP {Method} {Path} → {StatusCode} em {ElapsedMs}ms",
                method, path, statusCode, sw.ElapsedMilliseconds);
        }
    }
}

// ============================================
// 📄 Middlewares/ExceptionHandlingMiddleware.cs
// ============================================
using System.Net;
using System.Text.Json;

namespace EcommerceApi.Middlewares;

/// <summary>
/// Captura exceções não tratadas e retorna ProblemDetails (RFC 7807).
/// </summary>
public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionHandlingMiddleware> _logger;

    public ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Exceção não tratada: {Message}", ex.Message);
            await HandleExceptionAsync(context, ex);
        }
    }

    private static async Task HandleExceptionAsync(HttpContext context, Exception ex)
    {
        context.Response.ContentType = "application/problem+json";
        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

        var problemDetails = new
        {
            type = "https://tools.ietf.org/html/rfc7807",
            title = "Erro interno do servidor",
            status = 500,
            detail = ex.Message,    // Em produção: mensagem genérica, sem stacktrace
            instance = context.Request.Path.Value
        };

        string json = JsonSerializer.Serialize(problemDetails);
        await context.Response.WriteAsync(json);
    }
}

// ============================================
// 📄 Program.cs — ordem CORRETA dos middlewares
// ============================================
using EcommerceApi.Middlewares;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// 1️⃣ Exceções PRIMEIRO — captura erros de todos os middlewares abaixo
app.UseMiddleware<ExceptionHandlingMiddleware>();

// 2️⃣ Logging — registra todas as requisições
app.UseMiddleware<RequestLoggingMiddleware>();

// 3️⃣ Swagger (somente em dev)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// 4️⃣ HTTPS redirect
app.UseHttpsRedirection();

// 5️⃣ Autenticação → Autorização (ordem obrigatória)
// app.UseAuthentication();  // Descomentar quando adicionar auth
app.UseAuthorization();

// 6️⃣ Endpoints
app.MapControllers();

app.Run();`,
      codeLanguage: "csharp",
      runCommand: "cd EcommerceApi && dotnet run",
      checklist: [
        "Implementar RequestLoggingMiddleware e registrar no Program.cs",
        "Implementar ExceptionHandlingMiddleware retornando ProblemDetails",
        "Testar o log aparecendo no console ao chamar qualquer endpoint",
        "Forçar uma exception em um controller e verificar o retorno padronizado",
        "Alterar a ordem dos middlewares e observar os efeitos no comportamento",
      ],
      quiz: [
        {
          q: "Por que a ordem dos middlewares no Program.cs é importante?",
          options: [
            "A ordem não importa — o ASP.NET Core reordena automaticamente",
            "Cada middleware processa na ordem de registro (request) e na inversa (response), então a posição define o comportamento",
            "A ordem só importa para performance",
            "Apenas o último middleware registrado é executado",
          ],
          answer: 1,
          explanation:
            "Middlewares formam uma cadeia: request vai na ordem de registro, response volta na inversa. ExceptionHandler deve ser primeiro para capturar erros de todos. UseAuth antes de UseAuthorization é obrigatório.",
        },
        {
          q: "Qual a diferença entre middleware e action filter?",
          options: [
            "São a mesma coisa com nomes diferentes",
            "Middleware opera em TODA requisição HTTP; filter opera apenas em requisições que chegam aos controllers MVC",
            "Filters são mais rápidos que middlewares",
            "Middleware só funciona em GET, filter em todos os verbos",
          ],
          answer: 1,
          explanation:
            "Middleware vê todas as requisições (incluindo static files, health checks). Filters (IActionFilter, IExceptionFilter) operam dentro do pipeline MVC — apenas requisições roteadas para controllers. Use middleware para logging/CORS, filter para validação/auditoria de actions.",
        },
        {
          q: "O que acontece se UseAuthentication for registrado DEPOIS de UseAuthorization?",
          options: [
            "Erro de compilação",
            "A autorização roda sem identidade do usuário — todas as requisições autenticadas são tratadas como anônimas",
            "Funciona normalmente — a ordem não importa para auth",
            "O servidor não inicia",
          ],
          answer: 1,
          explanation:
            "UseAuthorization verifica permissões baseadas na identidade do usuário. Se UseAuthentication não rodou antes, o User está vazio/anônimo. O [Authorize] rejeita tudo ou comportamento é imprevisível.",
        },
      ],
    },
    {
      id: "m5t4",
      moduleId: "m5",
      title: "Minimal APIs e Filters",
      theory: `Minimal APIs foram introduzidas no .NET 6 como alternativa leve aos controllers. Em vez de criar uma classe controller com atributos, você mapeia endpoints diretamente no Program.cs com MapGet, MapPost, MapPut, MapDelete. O código fica mais conciso e ideal para microserviços, funções serverless e APIs simples.

A sintaxe é enxuta: app.MapGet("/api/produtos", () => Results.Ok(produtos)). Parâmetros de rota, query e body são inferidos automaticamente. Results é a classe helper que retorna status codes tipados: Results.Ok(), Results.NotFound(), Results.Created(), Results.BadRequest().

RouteGroupBuilder permite agrupar endpoints com prefixo comum, filters e metadata: var group = app.MapGroup("/api/produtos").WithTags("Produtos"). Isso organiza Minimal APIs em blocos lógicos, similar à organização de controllers mas sem classes.

EndpointFilter é o equivalente de ActionFilter para Minimal APIs. Implementa IEndpointFilter com InvokeAsync(EndpointFilterInvocationContext, EndpointFilterDelegate). Pode inspecionar/modificar parâmetros antes do endpoint e o resultado depois. Útil para validação, logging, rate limiting por endpoint.

Action Filters no MVC seguem a interface IActionFilter com OnActionExecuting (antes) e OnActionExecuted (depois). Há também IAsyncActionFilter para cenários assíncronos. Outros tipos de filter incluem: Resource Filters (antes/depois do model binding), Exception Filters (captura exceções do action), Result Filters (antes/depois de serializar a response). A ordem de execução é: Resource → Action → Exception → Result.

Quando usar cada modelo: Controllers para APIs grandes e complexas (organização por responsabilidade, herança de ControllerBase, model validation integrada). Minimal APIs para microserviços, endpoints simples, protótipos rápidos e serverless. Em projetos corporativos grandes, controllers são mais comuns pela estrutura organizacional; em microserviços, Minimal APIs vencem pela leveza.`,
      code: `// Minimal APIs e Filters — ASP.NET Core 8
// Comparativo com controllers no mesmo projeto

// ============================================
// 📄 Program.cs — Minimal API versão dos produtos
// ============================================
using EcommerceApi.Models;
using EcommerceApi.Models.DTOs;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers(); // Controllers continuam funcionando

// ========== MINIMAL API — mesmo recurso, sintaxe diferente ==========
List<Produto> produtos = [
    new() { Id = 1, Nome = "Monitor 27\"", Preco = 1599.90m, Estoque = 15 },
    new() { Id = 2, Nome = "Webcam HD", Preco = 199.90m, Estoque = 40 },
];
int nextId = 3;

// RouteGroupBuilder — agrupa endpoints com prefixo e metadata
RouteGroupBuilder produtosGroup = app.MapGroup("/api/v2/produtos")
    .WithTags("Produtos (Minimal API)")
    .AddEndpointFilter<ValidarIdFilter>();  // Filter aplicado ao grupo inteiro

produtosGroup.MapGet("/", (int pagina = 1, int tamanhoPagina = 10) =>
{
    List<Produto> resultado = produtos
        .Where(p => p.Ativo)
        .Skip((pagina - 1) * tamanhoPagina)
        .Take(tamanhoPagina)
        .ToList();
    return Results.Ok(resultado);
})
.WithName("ListarProdutosMinimal")
.Produces<List<Produto>>(StatusCodes.Status200OK);

produtosGroup.MapGet("/{id:int}", (int id) =>
{
    Produto? produto = produtos.FirstOrDefault(p => p.Id == id);
    return produto is not null ? Results.Ok(produto) : Results.NotFound();
})
.WithName("BuscarProdutoMinimal")
.Produces<Produto>(StatusCodes.Status200OK)
.Produces(StatusCodes.Status404NotFound);

produtosGroup.MapPost("/", (CriarProdutoRequest request) =>
{
    Produto novo = new()
    {
        Id = nextId++,
        Nome = request.Nome,
        Descricao = request.Descricao,
        Preco = request.Preco,
        Estoque = request.Estoque,
    };
    produtos.Add(novo);
    return Results.Created($"/api/v2/produtos/{novo.Id}", novo);
})
.WithName("CriarProdutoMinimal")
.Produces<Produto>(StatusCodes.Status201Created);

produtosGroup.MapDelete("/{id:int}", (int id) =>
{
    Produto? produto = produtos.FirstOrDefault(p => p.Id == id);
    if (produto is null) return Results.NotFound();
    produto.Ativo = false;
    return Results.NoContent();
})
.WithName("DeletarProdutoMinimal");

app.Run();

// ============================================
// 📄 Filters/ValidarIdFilter.cs — EndpointFilter
// ============================================
/// <summary>
/// Valida que IDs na rota são positivos antes de chegar ao endpoint.
/// </summary>
public class ValidarIdFilter : IEndpointFilter
{
    public async ValueTask<object?> InvokeAsync(
        EndpointFilterInvocationContext context,
        EndpointFilterDelegate next)
    {
        // Verifica se há parâmetro "id" na rota
        if (context.HttpContext.Request.RouteValues.TryGetValue("id", out object? idValue)
            && int.TryParse(idValue?.ToString(), out int id)
            && id <= 0)
        {
            return Results.BadRequest("ID deve ser um número positivo.");
        }

        return await next(context); // Prossegue para o endpoint
    }
}

// ============================================
// 📄 Filters/AuditActionFilter.cs — ActionFilter para Controllers
// ============================================
using Microsoft.AspNetCore.Mvc.Filters;

namespace EcommerceApi.Filters;

/// <summary>
/// Registra auditoria de quem chamou o quê em controllers.
/// </summary>
public class AuditActionFilter : IActionFilter
{
    private readonly ILogger<AuditActionFilter> _logger;

    public AuditActionFilter(ILogger<AuditActionFilter> logger)
    {
        _logger = logger;
    }

    public void OnActionExecuting(ActionExecutingContext context)
    {
        string controller = context.RouteData.Values["controller"]?.ToString() ?? "?";
        string action = context.RouteData.Values["action"]?.ToString() ?? "?";
        _logger.LogInformation("📋 AUDIT: {Controller}.{Action} iniciado", controller, action);
    }

    public void OnActionExecuted(ActionExecutedContext context)
    {
        int statusCode = context.HttpContext.Response.StatusCode;
        _logger.LogInformation("📋 AUDIT: Finalizado com status {StatusCode}", statusCode);
    }
}

// Registrar no Program.cs:
// builder.Services.AddScoped<AuditActionFilter>();
// E aplicar no controller:
// [ServiceFilter(typeof(AuditActionFilter))]`,
      codeLanguage: "csharp",
      runCommand: "cd EcommerceApi && dotnet run",
      checklist: [
        "Reescrever o GET /api/produtos como Minimal API e comparar com o Controller",
        "Criar um RouteGroupBuilder para agrupar os endpoints de produtos v2",
        "Implementar um EndpointFilter que valida se o ID da rota é positivo",
        "Aplicar o AuditActionFilter em um controller existente com [ServiceFilter]",
        "Acessar o Swagger e comparar os dois grupos (Controller vs Minimal API)",
      ],
      quiz: [
        {
          q: "Quando Minimal APIs são mais adequadas que Controllers?",
          options: [
            "Sempre — Controllers são obsoletos",
            "Para microserviços simples, funções serverless e APIs com poucos endpoints, onde a leveza é vantajosa",
            "Minimal APIs são mais rápidas em todos os cenários",
            "Nunca — Controllers são sempre melhores",
          ],
          answer: 1,
          explanation:
            "Minimal APIs eliminam boilerplate (sem classes, atributos, herança). Ideais para microserviços e APIs simples. Controllers são melhores para APIs grandes: organização por responsabilidade, model validation, filter pipeline completo.",
        },
        {
          q: "O que é um EndpointFilter e como difere de um ActionFilter?",
          options: [
            "São a mesma coisa com nomes diferentes",
            "EndpointFilter funciona com Minimal APIs; ActionFilter funciona com Controllers MVC — ambos interceptam requisições antes/depois do endpoint",
            "EndpointFilter é mais lento",
            "ActionFilter funciona com ambos os modelos",
          ],
          answer: 1,
          explanation:
            "EndpointFilter (IEndpointFilter) é para Minimal APIs. ActionFilter (IActionFilter) é para controllers MVC. Ambos permitem lógica antes/depois do endpoint. Em Minimal APIs, ActionFilter não funciona — use EndpointFilter.",
        },
        {
          q: 'O que este código faz? app.MapGroup("/api/v2/tarefas").AddEndpointFilter<ValidarIdFilter>().MapGet("/{id}", handler);',
          options: [
            "Cria um grupo em /api/v2/tarefas, aplica ValidarIdFilter em TODOS os endpoints do grupo, e mapeia GET /{id}",
            "Define um controller chamado TarefasV2",
            "Erro de compilação — MapGroup não existe",
            "Aplica o filter apenas no MapGet",
          ],
          answer: 0,
          explanation:
            "MapGroup cria um prefixo (/api/v2/tarefas). AddEndpointFilter aplica o filter em todos os endpoints do grupo. MapGet adiciona o endpoint. Requisição GET /api/v2/tarefas/5 passa pelo ValidarIdFilter antes do handler.",
        },
      ],
    },
  ],
};
