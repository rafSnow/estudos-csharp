import { COLORS } from "../../constants/colors";

export const MODULO_19 = {
  id: "m19",
  title: "Autorização e Políticas",
  color: COLORS.m19,
  week: "Semana 17",
  topics: [
    {
      id: "m19t1",
      moduleId: "m19",
      title: "[Authorize]: roles, claims e políticas",
      theory: `Níveis de autorização no ASP.NET Core:
1. [Authorize] — qualquer autenticado
2. [Authorize(Roles = "Admin")] — role específica
3. [Authorize(Roles = "Admin,Gerente")] — qualquer role (OR)
4. Múltiplos [Authorize] empilhados — TODAS as condições (AND)
5. [Authorize(Policy = "NomeDaPolicy")] — lógica arbitrária

[AllowAnonymous]: substitui qualquer [Authorize] — acesso público garantido.

CONVENÇÃO MAIS SEGURA — SetFallbackPolicy:
Todos os endpoints protegidos por padrão no Program.cs.
Endpoints públicos recebem [AllowAnonymous] explicitamente.
Isso evita esquecer [Authorize] em endpoints sensíveis — o erro mais comum.

IAuthorizationService: verificações programáticas dentro de serviços.`,
      code: `// Todos os níveis em prática
[Authorize]
[HttpGet("me")]
public IActionResult GetMe() => Ok(User.Identity!.Name);

[Authorize(Roles = "Admin")]
[HttpDelete("usuarios/{id}")]
public async Task<IActionResult> DeleteUsuario(string id) { ... }

[Authorize(Roles = "Admin,Gerente")]
[HttpGet("relatorios/consolidado")]
public IActionResult GetRelatorio() { ... }

// AND: Admin E EmailConfirmado
[Authorize(Roles = "Admin")]
[Authorize(Policy = "EmailConfirmado")]
[HttpPost("configuracoes")]
public IActionResult UpdateConfig() { ... }

// Fallback global no Program.cs — todos protegidos por padrão
builder.Services.AddAuthorizationBuilder()
  .SetFallbackPolicy(new AuthorizationPolicyBuilder()
    .RequireAuthenticatedUser()
    .Build());

// Endpoints públicos exigem [AllowAnonymous] explícito
[AllowAnonymous]
[HttpPost("auth/login")]
public async Task<IActionResult> Login() { ... }`,
      checklist: [
        "Adicionar SetFallbackPolicy no Program.cs",
        "Verificar que todos os endpoints de auth usam [AllowAnonymous]",
        "Testar: endpoint sem [AllowAnonymous] retorna 401 sem token?",
        'Criar endpoint [Authorize(Roles = "Admin,Gerente")] para relatórios',
        "Testar que Correntista recebe 403 em endpoint de Gerente",
      ],
      quiz: [
        {
          question: "O que SetFallbackPolicy com RequireAuthenticatedUser faz?",
          options: [
            "Define a política padrão apenas para controllers com [ApiController]",
            "Torna todos os endpoints protegidos por padrão — qualquer endpoint sem [AllowAnonymous] exige autenticação. Previne esquecer [Authorize] em endpoints sensíveis",
            "Desabilita a autenticação anônima",
            "Afeta apenas a página inicial",
          ],
          answer: 1,
        },
        {
          question:
            "Como fazer um endpoint exigir DUAS condições simultaneamente (AND)?",
          options: [
            "Separar com vírgula em um único [Authorize]",
            'Aplicar múltiplos atributos [Authorize] empilhados — cada um cria uma camada independente que TODAS devem ser satisfeitas. [Authorize(Roles="A,B")] é OR; dois [Authorize] empilhados é AND',
            'Usar [Authorize(Policy = "AeB")] com lógica OR',
            "Não é possível nativo no ASP.NET Core",
          ],
          answer: 1,
        },
        {
          question:
            "Qual a diferença entre 401 e 403 em resposta de autorização?",
          options: [
            "São equivalentes",
            "401 Unauthorized: não autenticado ou token inválido. 403 Forbidden: autenticado com sucesso mas sem permissão para o recurso. Retornar 401 quando deveria ser 403 vaza informação sobre a proteção",
            "401 é para APIs REST e 403 para web apps",
            "403 indica erro de servidor",
          ],
          answer: 1,
        },
      ],
    },
    {
      id: "m19t2",
      moduleId: "m19",
      title: "Policy-based authorization com requirements",
      theory: `Quando roles não bastam: "Gerentes aprovam transferências apenas da própria agência" não é expressável com roles simples.

Policy-based: lógica de autorização como classes testáveis com DI.
IAuthorizationRequirement: marcador — define o que precisa ser verdade.
IAuthorizationHandler: implementa como verificar a condição.
AuthorizationPolicy: combina requirements em uma política nomeada.

Registro: AddAuthorization(options => options.AddPolicy(...)) no Program.cs.
Handler no DI: AddScoped<IAuthorizationHandler, MeuHandler>().
[Authorize(Policy = "NomeDaPolicy")] no controller.

Vantagem sobre roles: classes com DI — podem acessar banco, configurações, contexto.
São testáveis isoladamente sem subir o controller.`,
      code: `// Requirement: transferências acima de R$ 10.000 exigem role Gerente
public class LimiteTransferenciaRequirement : IAuthorizationRequirement
{
  public decimal LimiteCorrentista { get; } = 10_000m;
}

public class LimiteTransferenciaHandler
  : AuthorizationHandler<LimiteTransferenciaRequirement>
{
  private readonly IHttpContextAccessor _httpContextAccessor;

  public LimiteTransferenciaHandler(IHttpContextAccessor accessor)
    => _httpContextAccessor = accessor;

  protected override Task HandleRequirementAsync(
    AuthorizationHandlerContext context,
    LimiteTransferenciaRequirement requirement)
  {
    var isGerente = context.User.IsInRole("Gerente");
    var isAdmin   = context.User.IsInRole("Admin");

    // Gerente e Admin passam sempre; Correntista tem limite
    if (isGerente || isAdmin)
      context.Succeed(requirement);
    // Caso contrário, verificar o valor no handler real

    return Task.CompletedTask;
  }
}

// Program.cs
builder.Services.AddAuthorization(options =>
  options.AddPolicy("LimiteTransferencia",
    p => p.Requirements.Add(new LimiteTransferenciaRequirement())));
builder.Services.AddScoped<IAuthorizationHandler, LimiteTransferenciaHandler>();

[Authorize]
[Authorize(Policy = "LimiteTransferencia")]
[HttpPost("transferencias")]
public async Task<IActionResult> Transferir([FromBody] TransferenciaRequest req) { ... }`,
      checklist: [
        "Criar LimiteTransferenciaRequirement e Handler separados",
        "Registrar handler como Scoped no DI",
        "Testar: Correntista com valor > R$10.000 recebe 403",
        "Testar: Gerente com qualquer valor recebe 200",
        "Escrever teste unitário do handler isolado (sem controller)",
      ],
      quiz: [
        {
          question:
            "Por que Policy-based authorization é superior a Role-based para lógica de negócio?",
          options: [
            "Policies são mais rápidas",
            "Policies são classes com DI — acessam banco, configurações, contexto da request. Roles são flags simples. Além disso, policies são testáveis isoladamente como classes normais",
            "Policies substituem completamente as Roles",
            "Roles são legado e foram depreciadas",
          ],
          answer: 1,
        },
        {
          question:
            "Qual a diferença entre context.Succeed() e context.Fail() em um handler?",
          options: [
            "São equivalentes",
            "Succeed() indica que o requirement foi satisfeito. Fail() marca explicitamente como falha — outros handlers não podem sobrescrever. Se nenhum handler chamar Succeed(), o requirement falha e o acesso é negado",
            "Succeed() retorna 200",
            "Fail() lança exceção",
          ],
          answer: 1,
        },
        {
          question: "Como testar um AuthorizationHandler em isolamento?",
          options: [
            "Não é possível — handlers precisam da aplicação",
            "Instanciar o handler, criar AuthorizationHandlerContext com claims simuladas e verificar se Succeed ou Fail foi chamado — sem subir controller ou WebApplicationFactory",
            "Usar apenas testes de integração para handlers",
            "Mockar IAuthorizationService",
          ],
          answer: 1,
        },
      ],
    },
    {
      id: "m19t3",
      moduleId: "m19",
      title: "Resource-based authorization",
      theory: `O problema que roles e policies simples não resolvem:
"Este Correntista pode ver ESTA conta específica?"
A verificação precisa do recurso concreto.

IAuthorizationService.AuthorizeAsync(user, resource, "NomeDaPolicy").
IAuthorizationHandler<TRequirement, TResource>: handler tipado que recebe requirement E recurso.

Quando usar: verificar propriedade de recurso, estado do recurso, combinação de dados do usuário com dados do recurso.

Padrão: buscar o recurso → verificar autorização → processar ou 403.`,
      code: `// Requirement e Handler para propriedade de conta
public record ContaProprietarioRequirement : IAuthorizationRequirement;

public class ContaProprietarioHandler
  : AuthorizationHandler<ContaProprietarioRequirement, Conta>
{
  protected override Task HandleRequirementAsync(
    AuthorizationHandlerContext context,
    ContaProprietarioRequirement requirement,
    Conta conta)
  {
    var contaIdDoToken = context.User.FindFirstValue("contaId");
    var isAdmin        = context.User.IsInRole("Admin");
    var isGerente      = context.User.IsInRole("Gerente");

    if (isAdmin || isGerente || contaIdDoToken == conta.Id.Value.ToString())
      context.Succeed(requirement);

    return Task.CompletedTask;
  }
}

// Controller com resource-based authorization
[Authorize]
[HttpGet("{contaId}/extrato")]
public async Task<IActionResult> GetExtrato(Guid contaId)
{
  var conta = await _contaRepo.GetByIdAsync(new ContaId(contaId));
  if (conta is null) return NotFound();

  var auth = await _authorizationService.AuthorizeAsync(
    User, conta, "ContaProprietario");

  if (!auth.Succeeded) return Forbid();

  var extrato = await _extratoService.GetAsync(contaId);
  return Ok(extrato);
}`,
      checklist: [
        "Criar ContaProprietarioHandler tipado com Conta como resource",
        "Injetar IAuthorizationService no ContasController",
        "Implementar o fluxo: buscar → autorizar → processar",
        "Testar: Correntista A não pode ver extrato da Conta B (403)",
        "Testar: Admin pode ver qualquer extrato (200)",
      ],
      quiz: [
        {
          question:
            "Por que resource-based authorization precisa buscar o recurso antes de autorizar?",
          options: [
            "Por cache de performance",
            "A verificação depende de atributos do recurso (a quem pertence? qual o status?) que só estão disponíveis após buscar. Role-based verifica apenas o token; resource-based verifica token + recurso",
            "IAuthorizationService exige o objeto como parâmetro sempre",
            "É apenas uma convenção de código",
          ],
          answer: 1,
        },
        {
          question:
            "Qual a ordem correta no controller para resource-based authorization?",
          options: [
            "Autorizar → buscar → processar",
            "Buscar o recurso (para saber se existe) → verificar autorização → processar apenas se autorizado. Buscar antes permite retornar 404 adequado antes de tentar autorizar",
            "Processar → autorizar → retornar",
            "A ordem não importa para o resultado",
          ],
          answer: 1,
        },
        {
          question:
            "Por que o handler é tipado como AuthorizationHandler<TRequirement, TResource>?",
          options: [
            "Para melhor performance",
            "Type safety — o handler recebe o recurso como o tipo correto sem casting manual. O erro de tipo é visível em compile time, não em runtime",
            "Apenas convenção sem impacto técnico",
            "Para compatibilidade com EF Core",
          ],
          answer: 1,
        },
      ],
    },
    {
      id: "m19t4",
      moduleId: "m19",
      title: "CORS: configuração segura e armadilhas",
      theory: `CORS: restrição do browser que impede sites maliciosos de fazer requests autenticadas para sua API usando as credenciais do usuário.

ARMADILHA CRÍTICA:
AllowAnyOrigin() + AllowCredentials() = INVÁLIDO pela spec CORS.
O browser BLOQUEIA respostas com Access-Control-Allow-Origin: * e Access-Control-Allow-Credentials: true combinados. Para credentials, a origem DEVE ser explícita — nunca wildcard.

Funcionamento:
Requests com credenciais (Authorization header, cookies): browser envia preflight OPTIONS antes do request real. O servidor responde com os headers CORS permitidos.

Preflight sem token: se UseAuthentication rodar antes de UseCors, o preflight (sem token) recebe 401 e o browser interpreta como CORS bloqueado.
Por isso: app.UseCors() ANTES de app.UseAuthentication().

CORS não é segurança server-side: ferramentas como curl ignoram CORS.
CORS nunca substitui autenticação e autorização.`,
      code: `// ❌ ANTI-PATTERNS:
builder.Services.AddCors(o => o.AddPolicy("Inseguro", p =>
  p.AllowAnyOrigin()      // INVÁLIDO com AllowCredentials
   .AllowAnyMethod()
   .AllowAnyHeader()
   .AllowCredentials())); // combinação proibida pela spec CORS

// ✅ CONFIGURAÇÃO CORRETA — Desenvolvimento
builder.Services.AddCors(options =>
  options.AddPolicy("Development", policy =>
    policy
      .WithOrigins("https://localhost:3000", "https://localhost:5173")
      .WithMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS")
      .WithHeaders("Authorization", "Content-Type")
      .AllowCredentials() // OK com origens explícitas
      .SetPreflightMaxAge(TimeSpan.FromMinutes(10))));

// ✅ CONFIGURAÇÃO CORRETA — Produção
builder.Services.AddCors(options =>
  options.AddPolicy("Production", policy =>
    policy
      .WithOrigins(
        "https://app.sistemafinanceiro.com.br",
        "https://mobile.sistemafinanceiro.com.br")
      .WithMethods("GET", "POST", "PUT", "DELETE")
      .WithHeaders("Authorization", "Content-Type")
      .AllowCredentials()));

// app.UseCors() ANTES de UseAuthentication
app.UseCors(app.Environment.IsDevelopment() ? "Development" : "Production");
app.UseAuthentication();
app.UseAuthorization();`,
      checklist: [
        "Criar policies separadas: Development e Production",
        "Verificar: AllowAnyOrigin e AllowCredentials NÃO estão juntas",
        "Verificar que app.UseCors() está ANTES de app.UseAuthentication()",
        "Testar no browser: request de localhost:3000 para a API funciona?",
        "Verificar que origem não listada recebe erro de CORS no browser",
      ],
      quiz: [
        {
          question:
            "Por que AllowAnyOrigin() + AllowCredentials() não funciona?",
          options: [
            "É limitação do ASP.NET Core",
            "A spec CORS proíbe Access-Control-Allow-Origin: * combinado com Access-Control-Allow-Credentials: true. O browser bloqueia a resposta por segurança. Para credenciais, a origem deve ser explícita",
            "É uma configuração válida mas não recomendada",
            "Apenas para requests HTTP, não HTTPS",
          ],
          answer: 1,
        },
        {
          question:
            "CORS impede que um atacante com curl acesse sua API sem autenticação?",
          options: [
            "Sim — CORS bloqueia todos acessos não autorizados",
            "Não — CORS é aplicado pelo browser para proteger o usuário. Ferramentas como curl, Postman e código server-side ignoram CORS completamente. CORS nunca substitui autenticação e autorização",
            "Depende da configuração AllowCredentials",
            "CORS bloqueia IPs não listados nas origens",
          ],
          answer: 1,
        },
        {
          question:
            "Por que app.UseCors() deve vir antes de app.UseAuthentication()?",
          options: [
            "É apenas convenção",
            "Preflight requests (OPTIONS) chegam sem token de autenticação. Se UseAuthentication rodar antes de UseCors, o preflight recebe 401 antes de ter chance de retornar os headers CORS — o browser interpreta como CORS bloqueado",
            "UseCors depende do Identity para funcionar",
            "A ordem não impacta o comportamento",
          ],
          answer: 1,
        },
      ],
    },
  ],
};
