import { COLORS } from "../../constants/colors";

export const MODULO_18 = {
  id: "m18",
  title: "ASP.NET Identity",
  color: COLORS.m18,
  week: "Semana 16-17",
  topics: [
    {
      id: "m18t1",
      moduleId: "m18",
      title: "Identity: UserManager, RoleManager e configuração",
      theory: `ASP.NET Identity: sistema completo de gerenciamento de usuários integrado ao ASP.NET Core — hashing de senha, lockout, validação de e-mail, roles, claims.
Instalação: dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore

IdentityUser: classe base (Id, UserName, Email, PasswordHash, LockoutEnd...).
Customizar: ApplicationUser : IdentityUser com campos adicionais (NomeCompleto, ContaId).
IdentityRole: roles (Admin, Correntista, Gerente).

UserManager<TUser>: operações sobre usuários —
  CreateAsync, FindByEmailAsync, CheckPasswordAsync, AddToRoleAsync,
  GetRolesAsync, AccessFailedAsync, LockoutEnabledAsync.
RoleManager<TRole>: gerenciar roles — CreateAsync, RoleExistsAsync.
SignInManager<TUser>: fluxo de login — PasswordSignInAsync (retorna
  SignInResult: Succeeded / LockedOut / NotAllowed / TwoFactorRequired).

IdentityOptions relevantes:
• Password: RequiredLength (8), RequireDigit, RequireNonAlphanumeric, RequireUppercase
• Lockout: MaxFailedAccessAttempts (5), DefaultLockoutTimeSpan (15min)
• User: RequireUniqueEmail (true)
• SignIn: RequireConfirmedEmail (false em dev, true em produção)`,
      code: `// ApplicationUser customizado para o Sistema Financeiro
public class ApplicationUser : IdentityUser
{
  public string   NomeCompleto { get; set; } = null!;
  public Guid?    ContaId      { get; set; }   // vínculo com Aggregate Conta (Fase 3)
  public DateTime CreatedAt    { get; set; } = DateTime.UtcNow;
  public bool     IsActive     { get; set; } = true;
}

// Program.cs — configuração completa do Identity
builder.Services
  .AddIdentity<ApplicationUser, IdentityRole>(options =>
  {
    options.Password.RequiredLength         = 8;
    options.Password.RequireDigit           = true;
    options.Password.RequireNonAlphanumeric = true;
    options.Password.RequireUppercase       = true;
    options.Lockout.MaxFailedAccessAttempts = 5;
    options.Lockout.DefaultLockoutTimeSpan  = TimeSpan.FromMinutes(15);
    options.Lockout.AllowedForNewUsers      = true;
    options.User.RequireUniqueEmail         = true;
    options.SignIn.RequireConfirmedEmail     = false; // dev: false, produção: true
  })
  .AddEntityFrameworkStores<FinanceiroDbContext>()
  .AddDefaultTokenProviders();

// Seed de roles no startup
async Task SeedRolesAsync(IServiceProvider services)
{
  var roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();
  foreach (var role in new[] { "Admin", "Gerente", "Correntista" })
    if (!await roleManager.RoleExistsAsync(role))
      await roleManager.CreateAsync(new IdentityRole(role));
}`,
      checklist: [
        "Instalar Microsoft.AspNetCore.Identity.EntityFrameworkCore",
        "Criar ApplicationUser com ContaId e NomeCompleto",
        "Configurar Identity com políticas de senha e lockout",
        "Criar migration para as tabelas Identity (AspNetUsers, AspNetRoles, etc.)",
        "Implementar seed de roles no startup",
      ],
      quiz: [
        {
          question:
            "Por que usar UserManager.CheckPasswordAsync() em vez de comparar hashes manualmente?",
          options: [
            "UserManager é apenas conveniência de código",
            "CheckPasswordAsync usa o IPasswordHasher registrado (BCrypt ou PBKDF2) e protege contra timing attacks com comparação em tempo constante — implementação manual é vulnerável a vazamento de tempo",
            "CheckPasswordAsync é mais rápido",
            "Comparação manual não compila com Identity",
          ],
          answer: 1,
        },
        {
          question: "O que ocorre quando MaxFailedAccessAttempts é atingido?",
          options: [
            "O usuário é permanentemente deletado",
            "A conta é bloqueada por DefaultLockoutTimeSpan — SignInManager.PasswordSignInAsync retorna SignInResult.LockedOut. Isso limita brute-force sem impactar usuários legítimos permanentemente",
            "A senha é resetada automaticamente",
            "Um e-mail de aviso é enviado",
          ],
          answer: 1,
        },
        {
          question:
            "Por que RequireConfirmedEmail = true é importante em produção financeira?",
          options: [
            "Para melhorar o SEO",
            "Garante que o e-mail existe e pertence ao usuário antes de criar acesso ao sistema — previne cadastros com e-mails falsos, contas para spam e ataques com identidades fictícias",
            "É exigência da LGPD",
            "Melhora a performance do Identity",
          ],
          answer: 1,
        },
      ],
    },
    {
      id: "m18t2",
      moduleId: "m18",
      title: "Senhas: BCrypt, hashing, salting e políticas",
      theory: `O ataque que este tópico previne: vazamento do banco de dados.
Com senhas em texto puro → todas as contas comprometidas.
Com BCrypt → as senhas levam anos para quebrar.

ANTI-PATTERNS encontrados em vazamentos reais:
• Texto puro: "senha123" armazenado diretamente — catastrófico
• MD5/SHA1/SHA256: rápidos por design — GPUs modernas: 100 bilhões hash/s
• Hash sem salt: vulnerável a rainbow tables (tabela pré-computada)
• Salt previsível: email+senha como salt não protege contra ataques direcionados

BCRYPT — por que é o padrão:
• Slow by design: work factor ajustável (2^n iterações)
• Salt automático: incluído no resultado do hash ($2a$12$<salt><hash>)
• Resistente a GPU e ASICs: design paralelo-hostil
• Work factor 10 (padrão) ≈ 100ms. Work factor 12 ≈ 400ms
• Para sistemas financeiros: work factor 12 mínimo

Identity usa PBKDF2 por padrão — adequado, mas BCrypt é mais testado.
Como trocar: implementar IPasswordHasher<ApplicationUser>.`,
      code: `// ❌ ANTI-PATTERNS — O QUE NUNCA FAZER:
usuario.Senha = request.Senha;  // texto puro — catastrófico
usuario.SenhaHash = MD5.HashData(Encoding.UTF8.GetBytes(request.Senha))
  .Select(b => b.ToString("x2")).Aggregate(string.Concat); // MD5 sem salt

// ✅ BCRYPT CORRETAMENTE:
// Hash no registro
string hash = BCrypt.Net.BCrypt.HashPassword(request.Senha, workFactor: 12);
// Exemplo: "$2a$12$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy"

// Verificação no login — BCrypt extrai o salt do hash automaticamente
bool senhaCorreta = BCrypt.Net.BCrypt.Verify(request.Senha, usuario.SenhaHash);

// Customizando IPasswordHasher do Identity para BCrypt
public class BcryptPasswordHasher : IPasswordHasher<ApplicationUser>
{
  public string HashPassword(ApplicationUser user, string password)
    => BCrypt.Net.BCrypt.HashPassword(password, workFactor: 12);

  public PasswordVerificationResult VerifyHashedPassword(
    ApplicationUser user, string hashedPassword, string providedPassword)
  {
    bool valid = BCrypt.Net.BCrypt.Verify(providedPassword, hashedPassword);
    return valid ? PasswordVerificationResult.Success : PasswordVerificationResult.Failed;
  }
}
// Registrar: services.AddScoped<IPasswordHasher<ApplicationUser>, BcryptPasswordHasher>();`,
      checklist: [
        "Instalar BCrypt.Net-Next: dotnet add package BCrypt.Net-Next",
        "Implementar BcryptPasswordHasher e registrar no DI",
        'Verificar no banco após registro: SenhaHash começa com "$2a$12$"?',
        "Criar um teste comparando velocidade de verificação BCrypt vs SHA256",
        "Implementar rota de troca de senha que invalida todos os Refresh Tokens",
      ],
      quiz: [
        {
          question:
            "Por que MD5 e SHA256 não são adequados para hashing de senhas?",
          options: [
            "São algoritmos mais antigos e inseguros",
            "São projetados para throughput (rápidos) — não para segurança de senha. GPUs modernas testam bilhões de hashes por segundo, tornando força bruta viável. BCrypt é slow by design, tornando ataques impraticáveis",
            "Geram hashes de tamanho inadequado",
            "MD5 foi depreciado no .NET 8",
          ],
          answer: 1,
        },
        {
          question: "O que o work factor do BCrypt controla?",
          options: [
            "O tamanho do hash gerado",
            "O número de iterações (2^n) — work factor 12 significa 4096 iterações. Aumentar em 1 dobra o tempo de processamento. Deve ser ajustado conforme o hardware evolui (a cada ~2 anos)",
            "O comprimento do salt",
            "A compatibilidade com outros sistemas",
          ],
          answer: 1,
        },
        {
          question: "Por que BCrypt não requer armazenar o salt separadamente?",
          options: [
            "BCrypt não usa salt",
            'O salt é incorporado no hash resultado — o formato "$2a$12$<salt><hash>" contém tudo. Ao verificar, BCrypt extrai o salt automaticamente do hash armazenado',
            "O Identity gerencia o salt em tabela separada",
            "O salt é derivado do userId",
          ],
          answer: 1,
        },
      ],
    },
    {
      id: "m18t3",
      moduleId: "m18",
      title: "Registro, login e confirmação de e-mail",
      theory: `FLUXO DE REGISTRO (sistema financeiro):
1. FluentValidation valida o request
2. Verificar e-mail não cadastrado (FindByEmailAsync)
3. CreateAsync com a senha (Identity faz o hash)
4. AddToRoleAsync(user, "Correntista")
5. Criar Conta no domínio (Fase 3) e vincular ContaId
6. GenerateEmailConfirmationTokenAsync → enviar link por e-mail
7. Retornar 201 Created com { userId } — SEM token ainda

FLUXO DE LOGIN:
1. FindByEmailAsync
2. Verificar EmailConfirmed (se RequireConfirmedEmail = true)
3. CheckPasswordSignInAsync com lockoutOnFailure: true
4. Verificar SignInResult: Succeeded / LockedOut / NotAllowed
5. Gerar AccessToken + RefreshToken
6. Salvar hash do RefreshToken no banco
7. Retornar 200 com { accessToken, refreshToken, expiresIn }

REGRA DE OURO — mensagem genérica:
"E-mail ou senha inválidos" em vez de "E-mail não encontrado" ou "Senha incorreta".
Evita enumeração de usuários — atacante não confirma se e-mail existe.

LOGOUT:
Revogar o RefreshToken atual pelo hash enviado no body.
Retornar 204 No Content.`,
      code: `[AllowAnonymous]
[HttpPost("register")]
public async Task<IActionResult> Register([FromBody] RegisterRequest req)
{
  var user = new ApplicationUser
  {
    UserName     = req.Email,
    Email        = req.Email,
    NomeCompleto = req.NomeCompleto,
  };

  var result = await _userManager.CreateAsync(user, req.Senha);
  if (!result.Succeeded)
    return BadRequest(result.Errors.Select(e => e.Description));

  await _userManager.AddToRoleAsync(user, "Correntista");

  // Criar Conta no domínio (Fase 3)
  var conta = Conta.Abrir(new Cpf(req.Cpf), Dinheiro.BRL(0));
  await _contaRepo.AddAsync(conta);
  user.ContaId = conta.Id.Value;
  await _userManager.UpdateAsync(user);
  await _contaRepo.SaveChangesAsync();

  // Confirmação de e-mail
  var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);
  var link  = Url.Action("ConfirmEmail", "Auth",
    new { userId = user.Id, token }, Request.Scheme);
  await _emailService.EnviarConfirmacaoAsync(user.Email!, link!);

  return CreatedAtAction(nameof(GetMe), new { id = user.Id }, new { user.Id });
}

[AllowAnonymous]
[HttpPost("login")]
public async Task<IActionResult> Login([FromBody] LoginRequest req)
{
  var user = await _userManager.FindByEmailAsync(req.Email);

  // Mensagem genérica — nunca revelar se o e-mail existe
  if (user is null || !user.IsActive)
    return Unauthorized("E-mail ou senha inválidos");

  var signIn = await _signInManager.CheckPasswordSignInAsync(
    user, req.Senha, lockoutOnFailure: true);

  if (signIn.IsLockedOut)
    return StatusCode(429, "Conta bloqueada. Tente em 15 minutos.");

  if (!signIn.Succeeded)
    return Unauthorized("E-mail ou senha inválidos");

  var roles             = await _userManager.GetRolesAsync(user);
  var (rtEntity, rtRaw) = RefreshToken.Criar(Guid.Parse(user.Id), req.DeviceInfo ?? "unknown");
  await _rtRepo.AddAsync(rtEntity);
  await _rtRepo.SaveChangesAsync();

  return Ok(new
  {
    AccessToken  = _tokenService.GerarAccessToken(user, roles),
    RefreshToken = rtRaw,
    ExpiresIn    = 3600,
    TokenType    = "Bearer"
  });
}`,
      checklist: [
        "Implementar POST /auth/register com criação de ApplicationUser + Conta",
        "Implementar GET /auth/confirm-email",
        "Implementar POST /auth/login com lockout e mensagem genérica de erro",
        "Testar: 5 tentativas com senha errada → conta bloqueada (429)",
        "Verificar: 'E-mail não encontrado' nunca aparece na resposta",
      ],
      quiz: [
        {
          question:
            "Por que retornar 'E-mail ou senha inválidos' em vez de mensagens específicas?",
          options: [
            "Para simplificar o código",
            "Mensagens específicas permitem enumeração de usuários — o atacante confirma quais e-mails estão cadastrados. A mensagem genérica não vaza informação sobre a existência do usuário",
            "É exigência da LGPD",
            "Mensagens específicas consomem mais CPU",
          ],
          answer: 1,
        },
        {
          question:
            "Por que POST /auth/register retorna 201 sem token de acesso?",
          options: [
            "Seria mais prático retornar o token",
            "O registro deve ser confirmado por e-mail antes de conceder acesso (se RequireConfirmedEmail = true) — retornar token antes da confirmação permitiria uso de e-mails falsos",
            "Identity não permite gerar token no register",
            "201 é o código para POST",
          ],
          answer: 1,
        },
        {
          question:
            "Por que usar CheckPasswordSignInAsync com lockoutOnFailure: true?",
          options: [
            "É a única forma de verificar senha",
            "Incrementa automaticamente o contador de tentativas e bloqueia após MaxFailedAccessAttempts — o Identity gerencia o lockout sem código adicional",
            "lockoutOnFailure: false é o padrão e é mais seguro",
            "Apenas SignInManager pode verificar senhas",
          ],
          answer: 1,
        },
      ],
    },
    {
      id: "m18t4",
      moduleId: "m18",
      title: "Claims, Roles e perfis de acesso",
      theory: `Autenticação = quem é você (JWT válido).
Autorização = o que você pode fazer (roles e claims).

ROLES vs CLAIMS:
Roles: categorias (Admin, Gerente, Correntista). Simples. [Authorize(Roles="Admin")].
Claims: pares chave-valor com contexto: "contaId", "departamento", "nivelAprovacao".
Roles para perfis. Claims para contexto específico de negócio.

PERFIS DO SISTEMA FINANCEIRO:
• Correntista: apenas a própria conta (verificar contaId no token vs url)
• Gerente: contas da agência, aprova transferências acima de R$ 10.000
• Admin: acesso total, gerencia usuários

Claims no token vs banco:
Estáticas (role, email) → no token. Dinâmicas (saldo) → no banco (token desatualiza).

Customizar geração de claims com IUserClaimsPrincipalFactory<ApplicationUser>.`,
      code: `// Claims no JWT — TokenService
var claims = new List<Claim>
{
  new(JwtRegisteredClaimNames.Sub,   usuario.Id),
  new(JwtRegisteredClaimNames.Email, usuario.Email!),
  new(JwtRegisteredClaimNames.Jti,   Guid.NewGuid().ToString()),
};
claims.AddRange(roles.Select(r => new Claim(ClaimTypes.Role, r)));
if (usuario.ContaId.HasValue)
  claims.Add(new("contaId", usuario.ContaId.Value.ToString()));

// Controller usando claims para controle de acesso por recurso
[Authorize]
[HttpGet("contas/{contaId}/extrato")]
public async Task<IActionResult> GetExtrato(Guid contaId)
{
  var contaIdDoToken = User.FindFirstValue("contaId");
  var isAdmin        = User.IsInRole("Admin");
  var isGerente      = User.IsInRole("Gerente");

  // Correntista só acessa a própria conta
  if (!isAdmin && !isGerente && contaIdDoToken != contaId.ToString())
    return Forbid(); // 403 — autenticado mas não autorizado para este recurso

  var extrato = await _extratoService.GetByContaIdAsync(contaId);
  return Ok(extrato);
}

// Factory customizada — ContaId como claim automática
public class AppUserClaimsPrincipalFactory
  : UserClaimsPrincipalFactory<ApplicationUser, IdentityRole>
{
  protected override async Task<ClaimsIdentity> GenerateClaimsAsync(ApplicationUser user)
  {
    var identity = await base.GenerateClaimsAsync(user);
    if (user.ContaId.HasValue)
      identity.AddClaim(new Claim("contaId", user.ContaId.Value.ToString()));
    identity.AddClaim(new Claim("nomeCompleto", user.NomeCompleto));
    return identity;
  }
}`,
      checklist: [
        "Criar os 3 roles via seed no startup",
        "Adicionar ContaId como claim customizada no TokenService",
        "Verificar controle de acesso: Correntista tentando conta alheia → 403",
        'Criar endpoint [Authorize(Roles = "Admin")] para gerenciar usuários',
        "Registrar AppUserClaimsPrincipalFactory no DI",
      ],
      quiz: [
        {
          question:
            "Quando usar roles e quando usar claims para controle de acesso?",
          options: [
            "Sempre usar claims — são mais modernas",
            "Roles para categorias de usuário (perfis do sistema). Claims para contexto de negócio específico — qual conta acessa, qual departamento, qual limite aprovável. Claims capturam granularidade que roles não conseguem",
            "Roles são legado — substituídas por claims",
            "São equivalentes",
          ],
          answer: 1,
        },
        {
          question: "Por que não colocar o saldo da conta como claim no JWT?",
          options: [
            "Claims têm limite de tamanho",
            "O JWT tem vida de 60 minutos — o saldo ficaria desatualizado rapidamente. Claims devem ser dados estáticos. Dados dinâmicos precisam ser buscados no banco por request",
            "Claims numéricas não são suportadas",
            "Por causa do LGPD",
          ],
          answer: 1,
        },
        {
          question:
            "Qual HTTP status code correto para usuário autenticado sem permissão para o recurso?",
          options: [
            "401 Unauthorized",
            "403 Forbidden — autenticado com sucesso mas sem permissão para aquele recurso específico. 401 indica falha de autenticação; 403 indica autenticação OK mas autorização negada",
            "404 Not Found — para esconder a existência do recurso",
            "422 Unprocessable Entity",
          ],
          answer: 1,
        },
      ],
    },
  ],
};
