import { COLORS } from "../../constants/colors";

export const MODULO_20 = {
  id: "m20",
  title: "Segurança na Prática",
  color: COLORS.m20,
  week: "Semana 17",
  topics: [
    {
      id: "m20t1",
      moduleId: "m20",
      title: "HTTPS, HSTS e segredos fora do código",
      theory: `HTTPS obrigatório para APIs com autenticação: sem HTTPS, tokens JWT viajam em texto puro — interceptáveis por qualquer observador na rede.
app.UseHttpsRedirection(): redireciona HTTP → HTTPS automaticamente.

HSTS (HTTP Strict Transport Security):
Instrui o browser a NUNCA usar HTTP para o domínio por um período.
app.UseHsts() — apenas em produção (dev usa HTTP localmente).
Por que não em dev: browser memorizaria localhost como HTTPS-only e quebraria outros projetos HTTP na mesma porta.

GERENCIAMENTO DE SEGREDOS:
Anti-pattern: segredos no código ou no appsettings.json versionado → comprometimento imediato se o repositório for público ou clonado.

Desenvolvimento: dotnet user-secrets (fora do repositório)
  dotnet user-secrets init
  dotnet user-secrets set "Jwt:SecretKey" "valor-seguro"
  Armazenado em ~/.microsoft/usersecrets/ — não vai para o git.

Produção: variáveis de ambiente + gerenciadores de segredo:
Azure Key Vault, AWS Secrets Manager, HashiCorp Vault.
Rotação automática, auditoria de acesso, versionamento, revogação sem redeploy.

.gitignore obrigatório: appsettings.Production.json, *.pfx, .env, secrets.json.

Se um segredo for comitado acidentalmente: considerá-lo COMPROMETIDO e rotacioná-lo imediatamente. git rm não apaga o histórico.`,
      code: `// Program.cs — segurança de transporte
if (!app.Environment.IsDevelopment())
  app.UseHsts();           // apenas produção
app.UseHttpsRedirection(); // sempre

// User Secrets — fluxo completo
// 1. Inicializar (uma vez por projeto)
// dotnet user-secrets init

// 2. Armazenar segredos
// dotnet user-secrets set "Jwt:SecretKey" "$(openssl rand -base64 32)"
// dotnet user-secrets set "ConnectionStrings:Default" "Server=..."

// 3. Acessar no código (Configuration já inclui User Secrets em Development)
var secretKey = configuration["Jwt:SecretKey"]
  ?? throw new InvalidOperationException(
    "Jwt:SecretKey não configurado. Use: dotnet user-secrets set 'Jwt:SecretKey' '<valor>'");

// Gerar secret segura (32 bytes = 256 bits)
var bytes = new byte[32];
RandomNumberGenerator.Fill(bytes);
string secret = Convert.ToBase64String(bytes);
// Exemplo: "xK9mP2vQ8nL3jR7wT1yU5bH6cF4dE0aG+iZ2nS="`,
      checklist: [
        "Configurar UseHttpsRedirection() e UseHsts() no Program.cs",
        "Mover Jwt:SecretKey para User Secrets",
        "Mover ConnectionString para User Secrets",
        "Verificar .gitignore: appsettings.Production.json está listado?",
        "Verificar histórico: git log --all -- appsettings.json — há segredos?",
      ],
      quiz: [
        {
          question:
            "Por que HSTS é configurado apenas em produção e não em desenvolvimento?",
          options: [
            "Desenvolvimento não precisa de HTTPS",
            "Em desenvolvimento, HTTPS usa certificados auto-assinados. Se HSTS fosse ativado, o browser memorizaria localhost como HTTPS-only e quebraria outros projetos HTTP na mesma porta",
            "HSTS não funciona com certificados Let's Encrypt",
            "É limitação do Kestrel",
          ],
          answer: 1,
        },
        {
          question:
            "O que acontece se um segredo for acidentalmente comitado no git?",
          options: [
            "Pode ser resolvido com git rm",
            "O segredo deve ser considerado COMPROMETIDO e rotacionado imediatamente — o git preserva o histórico completo e ferramentas como truffleHog fazem scan automático em repositórios",
            "Apenas o branch main importa",
            "git rebase resolve o problema",
          ],
          answer: 1,
        },
        {
          question:
            "Qual a principal vantagem de Azure Key Vault sobre variáveis de ambiente?",
          options: [
            "Variáveis são mais seguras",
            "Gerenciadores oferecem: rotação automática, auditoria de acesso (quem acessou quando), versionamento de segredos e revogação sem redeploy — variáveis de ambiente têm nenhuma dessas capacidades",
            "São equivalentes em segurança",
            "Variáveis são sempre suficientes",
          ],
          answer: 1,
        },
      ],
    },
    {
      id: "m20t2",
      moduleId: "m20",
      title: "Rate Limiting e proteção contra brute-force",
      theory: `Brute-force em auth: sem limitação, 1 milhão de tentativas de senha é trivial.

DUAS CAMADAS COMPLEMENTARES:
1. Identity Lockout (Módulo 18): bloqueia a CONTA após N falhas.
   Limitação: não protege contra ataques distribuídos (muitos IPs, poucas tentativas por IP) ou ataques a muitas contas simultaneamente.
2. Rate Limiting por IP: limita o ENDPOINT independente da conta.

.NET 8 tem Rate Limiting nativo (System.Threading.RateLimiting).
Algoritmos:
• Fixed Window: N requests por janela fixa — bursty no início da janela
• Sliding Window: N requests em janela deslizante — distribuição suave
• Token Bucket: acumula tokens, consome 1 por request — bursts controlados
• Concurrency Limiter: N requests simultâneos

Configuração recomendada para auth:
• POST /auth/login:    5 tentativas/minuto por IP → Fixed Window
• POST /auth/register: 3 cadastros/hora por IP → Sliding Window
• POST /auth/refresh:  10 por minuto por IP → Fixed Window

Response: 429 Too Many Requests + header Retry-After.`,
      code: `// Program.cs — Rate Limiting nativo do .NET 8
builder.Services.AddRateLimiter(options =>
{
  options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
  options.OnRejected = async (ctx, ct) =>
  {
    ctx.HttpContext.Response.Headers.RetryAfter = "60";
    await ctx.HttpContext.Response.WriteAsync("Muitas tentativas. Aguarde 60 segundos.", ct);
  };

  // Login: 5 tentativas por minuto por IP
  options.AddPolicy("LoginPolicy", ctx =>
    RateLimitPartition.GetFixedWindowLimiter(
      partitionKey: ctx.Connection.RemoteIpAddress?.ToString() ?? "unknown",
      factory: _ => new FixedWindowRateLimiterOptions
      {
        PermitLimit = 5,
        Window      = TimeSpan.FromMinutes(1),
        QueueLimit  = 0
      }));

  // Registro: 3 por hora por IP
  options.AddPolicy("RegisterPolicy", ctx =>
    RateLimitPartition.GetSlidingWindowLimiter(
      partitionKey: ctx.Connection.RemoteIpAddress?.ToString() ?? "unknown",
      factory: _ => new SlidingWindowRateLimiterOptions
      {
        PermitLimit       = 3,
        Window            = TimeSpan.FromHours(1),
        SegmentsPerWindow = 4,
        QueueLimit        = 0
      }));
});

app.UseRateLimiter(); // antes de UseAuthentication

// Nos endpoints
[AllowAnonymous]
[EnableRateLimiting("LoginPolicy")]
[HttpPost("login")]
public async Task<IActionResult> Login(...) { ... }

[AllowAnonymous]
[EnableRateLimiting("RegisterPolicy")]
[HttpPost("register")]
public async Task<IActionResult> Register(...) { ... }`,
      checklist: [
        "Adicionar builder.Services.AddRateLimiter no Program.cs",
        "Criar LoginPolicy (5/min) e RegisterPolicy (3/hora)",
        "Adicionar [EnableRateLimiting] nos endpoints de auth",
        "Testar: 6 POSTs consecutivos para /auth/login → o 6º retorna 429",
        "Verificar que o header Retry-After está presente na resposta 429",
      ],
      quiz: [
        {
          question:
            "Por que Rate Limiting é necessário mesmo com Identity Lockout configurado?",
          options: [
            "Rate Limiting substitui o Lockout",
            "Lockout bloqueia contas individualmente. Um atacante pode tentar N vezes em N contas diferentes sem acionar lockout em nenhuma. Rate Limiting por IP limita o volume total de tentativas independente de qual conta está sendo atacada",
            "São configurações equivalentes e redundantes",
            "Rate Limiting é mais efetivo para brute-force direto",
          ],
          answer: 1,
        },
        {
          question: "Qual a diferença entre Fixed Window e Sliding Window?",
          options: [
            "São algoritmos idênticos com nomes diferentes",
            "Fixed Window reseta o contador em intervalos fixos — permite burst no início de cada janela. Sliding Window calcula em qualquer janela deslizante — distribui o tráfego mais uniformemente e é mais justo para o cliente legítimo",
            "Fixed Window é mais seguro",
            "Sliding Window usa mais memória e deve ser evitado",
          ],
          answer: 1,
        },
        {
          question: "Qual o HTTP status correto quando rate limit é excedido?",
          options: [
            "403 Forbidden",
            "429 Too Many Requests — com header Retry-After indicando quando o cliente pode tentar novamente. 403 indicaria falta de permissão, não limite de taxa",
            "503 Service Unavailable",
            "400 Bad Request",
          ],
          answer: 1,
        },
      ],
    },
    {
      id: "m20t3",
      moduleId: "m20",
      title: "OWASP Top 10 para APIs .NET",
      theory: `OWASP API Security Top 10 — vulnerabilidades mais críticas de APIs REST. Cada uma com o ataque E a defesa em código .NET corporativo.

API1 — BOLA (Broken Object Level Authorization):
O mais comum. Acessar recurso de outro usuário por ID manipulado.
Ataque: GET /api/contas/123 sendo usuário da conta 456.
Defesa: resource-based authorization (Tópico 19.3).

API2 — Broken Authentication:
JWT sem expiração, secrets fracos, Refresh Token sem rotação.
Defesa: Módulos 17 e 18 já cobrem todos esses vetores.

API3 — Broken Object Property Level Authorization:
Retornar campos sensíveis que o usuário não deveria ver.
Ataque: GET /usuarios/123 retornando PasswordHash, RefreshTokenHash.
Defesa: DTOs de response — nunca retornar Entity ou IdentityUser diretamente.

API4 — Unrestricted Resource Consumption:
Sem rate limiting ou limite de tamanho do body.
Defesa: Rate Limiting (20.2) + options.Limits.MaxRequestBodySize.

API5 — Broken Function Level Authorization:
Endpoints admin acessíveis por falta de [Authorize].
Defesa: SetFallbackPolicy (19.1).

API6 — Unrestricted Access to Sensitive Business Flows:
Automatizar compras, enviar spam em massa.
Defesa: Rate Limiting por usuário + análise comportamental.

API7 — SSRF (Server Side Request Forgery):
API faz request para URL fornecida pelo usuário.
Ataque: passar http://169.254.169.254/metadata (endpoint de metadados cloud).
Defesa: allowlist de URLs externas + nunca aceitar URLs do usuário diretamente.

API8 — Security Misconfiguration:
CORS * em produção, stack trace exposto, HTTP sem redirect, debug em prod.
Defesa: UseExceptionHandler (não UseDeveloperExceptionPage) em produção.

API9 — Improper Inventory Management:
APIs v1 legadas sem autenticação ainda ativas.
Defesa: deprecation policy explícita, versionamento de API, monitoramento.

API10 — Unsafe Consumption of APIs:
Confiar em dados de APIs externas sem validação.
Defesa: validar tudo que vem de terceiros (FluentValidation — Fase 3).`,
      code: `// API3 — nunca retornar Entity diretamente
// ❌ ANTI-PATTERN:
return Ok(usuario); // expõe PasswordHash, SecurityStamp, RefreshTokens...

// ✅ CORRETO: DTO com apenas o necessário
public record UsuarioResponse(
  string Id, string NomeCompleto, string Email, string Role, DateTime CreatedAt);
return Ok(new UsuarioResponse(
  usuario.Id, usuario.NomeCompleto, usuario.Email!, role, usuario.CreatedAt));

// API8 — Exception handler em produção (sem stack trace)
if (app.Environment.IsDevelopment())
  app.UseDeveloperExceptionPage();
else
  app.UseExceptionHandler("/error");

[AllowAnonymous]
[Route("/error")]
[ApiExplorerSettings(IgnoreApi = true)]
public IActionResult HandleError() =>
  Problem("Ocorreu um erro interno. Por favor, tente novamente.");

// API4 — limite de tamanho do body
builder.WebHost.ConfigureKestrel(options =>
  options.Limits.MaxRequestBodySize = 1 * 1024 * 1024); // 1 MB`,
      checklist: [
        "Auditar todos os endpoints: algum retorna Entity diretamente? Criar DTOs.",
        "Testar BOLA: trocar contaId na URL → deve retornar 403",
        "Confirmar que UseDeveloperExceptionPage NÃO roda em produção",
        "Configurar MaxRequestBodySize no Kestrel",
        "Escanear com OWASP ZAP (gratuito) em ambiente de staging",
      ],
      quiz: [
        {
          question: "O que é BOLA (Broken Object Level Authorization)?",
          options: [
            "Quando o JWT está expirado",
            "Usuário autenticado acessa recursos de outro usuário manipulando o ID na URL ou body. A API não verifica se o recurso pertence ao requisitante — é a vulnerabilidade mais comum em APIs REST",
            "Quando a API não tem autenticação",
            "Quando o CORS está mal configurado",
          ],
          answer: 1,
        },
        {
          question:
            "Por que nunca retornar uma Entity ou IdentityUser diretamente na response?",
          options: [
            "Entities são mais lentas para serializar",
            "Entities contêm campos internos sensíveis (PasswordHash, SecurityStamp, tokens) que não devem ser expostos. DTOs garantem controle explícito sobre o que é retornado",
            "O ASP.NET Core não consegue serializar Entities do Identity",
            "É apenas prática de arquitetura sem impacto de segurança",
          ],
          answer: 1,
        },
        {
          question: "O que é Security Misconfiguration (API8)?",
          options: [
            "Um bug no algoritmo de criptografia",
            "Configurações padrão inseguras ou esquecidas: CORS AllowAnyOrigin, stack trace em produção, debug habilitado, HTTP sem redirect, segredos no appsettings versionado",
            "Uso incorreto de JWT",
            "Falta de testes automatizados",
          ],
          answer: 1,
        },
      ],
    },
    {
      id: "m20t4",
      moduleId: "m20",
      title: "Testando segurança: testes de autenticação com xUnit",
      theory: `Fechando o ciclo: segurança sem testes é segurança não verificada.
Testes de autenticação garantem que nenhum refactor futuro abre uma brecha.

CATEGORIAS DE TESTES DE SEGURANÇA:
1. Acesso negado: endpoint sem token → 401. Role errada → 403. Conta alheia → 403.
2. Token inválido: expirado → 401. Assinatura alterada → 401. alg:none → 401.
3. Rate limiting: N+1 requests → 429 com Retry-After.
4. Rotação de refresh token: mesmo token duas vezes → segundo retorna 401.

JwtTestHelper: gera tokens com claims arbitrárias para testes.
Chave de teste específica — nunca a chave de produção no repositório.`,
      code: `// JwtTestHelper — tokens de teste com claims customizadas
public static class JwtTestHelper
{
  private const string TestSecret = "test-secret-for-tests-only-256bits-here!!";

  public static string GerarToken(
    string userId = "user-test-123", string role = "Correntista",
    string? contaId = null, int expiresInMinutes = 60)
  {
    var key    = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(TestSecret));
    var creds  = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
    var claims = new List<Claim>
    {
      new(JwtRegisteredClaimNames.Sub, userId),
      new(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
      new(ClaimTypes.Role,             role),
    };
    if (contaId is not null)
      claims.Add(new("contaId", contaId));

    var token = new JwtSecurityToken(
      issuer:   "SistemaFinanceiro",
      audience: "SistemaFinanceiro.Clients",
      claims:   claims,
      expires:  DateTime.UtcNow.AddMinutes(expiresInMinutes),
      signingCredentials: creds);

    return new JwtSecurityTokenHandler().WriteToken(token);
  }

  public static string GerarTokenExpirado() => GerarToken(expiresInMinutes: -1);
  public static string GerarTokenAdmin()     => GerarToken(role: "Admin");
}

// Testes de segurança
public class AuthorizationSecurityTests : IClassFixture<IntegrationTestFactory>
{
  [Fact]
  public async Task GetExtrato_SemToken_Retorna401()
  {
    var response = await _client.GetAsync($"/api/contas/{_contaA}/extrato");
    response.StatusCode.Should().Be(HttpStatusCode.Unauthorized);
  }

  [Fact]
  public async Task GetExtrato_TokenExpirado_Retorna401()
  {
    _client.DefaultRequestHeaders.Authorization =
      new AuthenticationHeaderValue("Bearer", JwtTestHelper.GerarTokenExpirado());
    var response = await _client.GetAsync($"/api/contas/{_contaA}/extrato");
    response.StatusCode.Should().Be(HttpStatusCode.Unauthorized);
  }

  [Fact]
  public async Task GetExtrato_CorrentistaTentandoContaAjena_Retorna403()
  {
    _client.DefaultRequestHeaders.Authorization =
      new AuthenticationHeaderValue("Bearer",
        JwtTestHelper.GerarToken(contaId: _contaA.ToString()));
    var response = await _client.GetAsync($"/api/contas/{_contaB}/extrato");
    response.StatusCode.Should().Be(HttpStatusCode.Forbidden);
  }

  [Fact]
  public async Task Login_AposRateLimit_Retorna429ComRetryAfter()
  {
    for (int i = 0; i < 5; i++)
      await _client.PostAsJsonAsync("/auth/login",
        new { Email = "x@x.com", Senha = "senhaerrada" });

    var response = await _client.PostAsJsonAsync("/auth/login",
      new { Email = "x@x.com", Senha = "senhaerrada" });

    response.StatusCode.Should().Be(HttpStatusCode.TooManyRequests);
    response.Headers.Should().ContainKey("Retry-After");
  }

  [Fact]
  public async Task Refresh_MesmoTokenDuasVezes_SegundoRetorna401()
  {
    var primeiro = await _client.PostAsJsonAsync("/auth/refresh",
      new { RefreshToken = _refreshTokenValido });
    primeiro.StatusCode.Should().Be(HttpStatusCode.OK);

    var segundo = await _client.PostAsJsonAsync("/auth/refresh",
      new { RefreshToken = _refreshTokenValido });
    segundo.StatusCode.Should().Be(HttpStatusCode.Unauthorized);
  }
}`,
      checklist: [
        "Criar JwtTestHelper com GerarToken, GerarTokenExpirado, GerarTokenAdmin",
        "Implementar os 5 testes de segurança do exemplo",
        "Adicionar teste de BOLA: conta alheia → 403",
        "Verificar que testes de segurança fazem parte do CI (rodam no pipeline)",
        "Criar teste que verifica stack trace não aparece em respostas de erro",
      ],
      quiz: [
        {
          question:
            "Por que testes de segurança automatizados são essenciais para sistemas financeiros?",
          options: [
            "São opcionais — auditoria manual é suficiente",
            "Garantem que nenhuma mudança futura introduz regressão de segurança sem detecção. Uma brecha em produção em sistema financeiro causa perdas financeiras e responsabilidade legal",
            "Testes de segurança só funcionam com ferramentas especializadas",
            "São equivalentes à revisão manual de código",
          ],
          answer: 1,
        },
        {
          question:
            "Por que usar chave JWT específica nos testes em vez da chave de produção?",
          options: [
            "Para simplificar o código de teste",
            "A chave de produção não deve estar no repositório de código. Uma chave de teste específica permite que os testes rodem sem acesso a segredos de produção, mantendo separação de ambientes",
            "A chave de produção não funciona em testes",
            "São equivalentes em segurança",
          ],
          answer: 1,
        },
        {
          question:
            "O que deve ser verificado em um teste de rotação de Refresh Token?",
          options: [
            "Apenas que o novo token funciona",
            "Que o token original foi revogado (segundo uso retorna 401) E que o novo token funciona (primeiro uso OK). Verificar ambos garante atomicidade — o antigo não pode ser reutilizado após o novo ser emitido",
            "Apenas que o usuário continua autenticado",
            "A expiração do novo token",
          ],
          answer: 1,
        },
      ],
    },
    {
      id: "m20proj",
      moduleId: "m20",
      title: "🔐 Projeto: Auth Service Completo",
      theory: `Auth Service completo integrando todos os módulos da Fase 5 e protegendo os endpoints do Sistema Financeiro da Fase 3.

ENDPOINTS IMPLEMENTADOS:
POST /auth/register        — cadastro com FluentValidation, criação de Conta, e-mail
GET  /auth/confirm-email   — confirmação de e-mail via token
POST /auth/login           — retorna AccessToken + RefreshToken (lockout + rate limit)
POST /auth/refresh         — rotação de Refresh Token com detecção de replay
POST /auth/logout          — revogação do Refresh Token atual
GET  /auth/me              — dados do usuário autenticado (via claims)
POST /auth/change-password — troca senha + revoga todos os Refresh Tokens

PROTEÇÃO DO SISTEMA FINANCEIRO:
GET  /api/contas/{id}            → [Authorize] + ContaProprietario policy
GET  /api/contas/{id}/extrato    → resource-based authorization
POST /api/contas/{id}/depositar  → [Authorize(Roles="Correntista,Gerente")]
POST /api/transferencias         → [Authorize] + LimiteTransferencia policy
GET  /api/relatorios/consolidado → [Authorize(Roles="Gerente,Admin")]
DELETE /api/usuarios/{id}        → [Authorize(Roles="Admin")]

SEGURANÇA DA INFRAESTRUTURA:
• Rate Limiting em todos os /auth/* endpoints
• CORS: policies separadas para Development e Production
• HTTPS + HSTS habilitados (HSTS apenas em produção)
• User Secrets para todos os segredos em desenvolvimento
• Exception handler genérico em produção
• Logs de auditoria: login, logout, troca de senha, tentativas falhas

ORDEM DOS MIDDLEWARES (crítica):
UseHttpsRedirection → UseHsts → UseCors → UseRateLimiter
→ UseAuthentication → UseAuthorization → MapControllers`,
      code: `// Program.cs final — ordem completa de middlewares
var builder = WebApplication.CreateBuilder(args);

// Services
builder.Services.AddControllers();
builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options => { ... })
  .AddEntityFrameworkStores<FinanceiroDbContext>()
  .AddDefaultTokenProviders();
builder.Services
  .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
  .AddJwtBearer(options => { /* configuração segura do Módulo 17.2 */ });
builder.Services.AddAuthorization(options =>
{
  options.AddPolicy("ContaProprietario",   p => p.Requirements.Add(new ContaProprietarioRequirement()));
  options.AddPolicy("LimiteTransferencia", p => p.Requirements.Add(new LimiteTransferenciaRequirement()));
  options.SetFallbackPolicy(new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build());
});
builder.Services.AddRateLimiter(options => { /* Módulo 20.2 */ });
builder.Services.AddCors(options => { /* Módulo 19.4 */ });
builder.Services.AddScoped<ITokenService, TokenService>();
builder.Services.AddScoped<IAuthorizationHandler, ContaProprietarioHandler>();
builder.Services.AddScoped<IAuthorizationHandler, LimiteTransferenciaHandler>();

var app = builder.Build();

// Middleware pipeline — ordem crítica
if (!app.Environment.IsDevelopment()) app.UseHsts();
app.UseHttpsRedirection();
app.UseCors(app.Environment.IsDevelopment() ? "Development" : "Production");
app.UseRateLimiter();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

// GitFlow
// feature/auth-jwt-tokens
// feature/auth-identity-setup
// feature/auth-endpoints
// feature/auth-protect-financial
// feature/auth-security-tests
// release/v3.0.0-auth-service`,
      checklist: [
        "Implementar todos os 7 endpoints de /auth/*",
        "Proteger todos os 6 endpoints do Sistema Financeiro com policies corretas",
        "Testar o fluxo completo: registro → confirmação → login → uso → refresh → logout",
        "Executar todos os testes de segurança do Tópico 20.4: 100% pass",
        "Rodar dotnet test com cobertura — auth deve ter 75%+ cobertura",
        "Criar release/v3.0.0-auth-service via GitFlow",
      ],
      quiz: [
        {
          question:
            "Qual a ordem correta dos middlewares de segurança no pipeline ASP.NET Core?",
          options: [
            "Qualquer ordem funciona",
            "UseCors → UseRateLimiter → UseAuthentication → UseAuthorization. CORS antes porque preflight não tem token. Rate Limiter antes de Authentication para bloquear antes de processar o token. Authentication antes de Authorization para identificar antes de autorizar",
            "UseAuthorization → UseAuthentication → UseCors",
            "UseAuthentication → UseCors → UseRateLimiter",
          ],
          answer: 1,
        },
        {
          question:
            "Por que change-password deve revogar todos os Refresh Tokens do usuário?",
          options: [
            "Para simplificar o código",
            "Se a senha foi comprometida (motivo provável da troca), os Refresh Tokens emitidos antes podem estar comprometidos. Revogar todos força reautenticação em todos os dispositivos, eliminando qualquer acesso indevido pendente",
            "É exigência do ASP.NET Identity",
            "Os Refresh Tokens expiram automaticamente",
          ],
          answer: 1,
        },
        {
          question:
            "Por que registrar logs de auditoria em um sistema financeiro?",
          options: [
            "Para debug de erros técnicos",
            "Para rastrear acessos suspeitos e atender requisitos regulatórios — sistemas financeiros devem responder 'quem acessou o quê e quando' em uma auditoria. LGPD e regulações do Banco Central exigem rastreabilidade",
            "Os logs são opcionais em sistemas internos",
            "Para melhorar a performance",
          ],
          answer: 1,
        },
      ],
    },
  ],
};
