import { COLORS } from "../../constants/colors";

export const MODULO_17 = {
  id: "m17",
  title: "JWT e Tokens",
  color: COLORS.m17,
  week: "Semana 16",
  topics: [
    {
      id: "m17t1",
      moduleId: "m17",
      title: "Como JWT funciona: Header, Payload, Signature",
      theory: `O problema que JWT resolve: como provar identidade sem consultar o banco a cada request.

Sessões vs Tokens: por que sessões não escalam horizontalmente — sticky sessions, estado no servidor — e como JWT resolve isso com estado no cliente.

HEADER (algoritmo + tipo):
{ "alg": "HS256", "typ": "JWT" }
Base64Url encoded — não é criptografia, é encoding.
HS256 (HMAC-SHA256, chave simétrica) vs RS256 (RSA, chave assimétrica).
RS256 é superior em microsserviços: apenas o emissor tem a chave privada; qualquer serviço valida com a chave pública — pública por design.

PAYLOAD (claims):
Registradas: sub, iss, aud, exp, iat, jti.
Customizadas: role, email, contaId, tenantId.
NUNCA colocar: senha, dados bancários, PII sensível.
O payload é PÚBLICO — qualquer um com o token pode ler. JWT é assinado (autenticidade), não criptografado (confidencialidade).

SIGNATURE (prova de integridade):
HMACSHA256(base64url(header) + "." + base64url(payload), secretKey)
Prova que o token não foi adulterado — mas não oculta o conteúdo.
JWE (JSON Web Encryption) para quando o payload precisa ser cifrado.

Onde armazenar no cliente:
• localStorage → vulnerável a XSS
• httpOnly cookie → imune a XSS, vulnerável a CSRF
• Memory/state → seguro, perde no refresh da página
• Recomendação corporativa: httpOnly + Secure cookie para Refresh Token, memory para Access Token.`,
      code: `// Decodificando manualmente um JWT (apenas para entender a estrutura)
string jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" +
             ".eyJzdWIiOiJ1c3VhcmlvLTEyMyIsInJvbGUiOiJDb3JyZW50aXN0YSIsImV4cCI6MTcxMjAwMDAwMH0" +
             ".assinatura";

string[] partes = jwt.Split('.');
string headerJson  = Encoding.UTF8.GetString(Convert.FromBase64String(PadBase64(partes[0])));
string payloadJson = Encoding.UTF8.GetString(Convert.FromBase64String(PadBase64(partes[1])));
// Output — Header:  {"alg":"HS256","typ":"JWT"}
// Output — Payload: {"sub":"usuario-123","role":"Correntista","exp":1712000000}

// Claims corretas para o Sistema Financeiro
var claims = new[]
{
  new Claim(JwtRegisteredClaimNames.Sub,   usuario.Id.ToString()),
  new Claim(JwtRegisteredClaimNames.Email, usuario.Email),
  new Claim(JwtRegisteredClaimNames.Jti,   Guid.NewGuid().ToString()),
  new Claim(ClaimTypes.Role,               usuario.Role.ToString()),
  new Claim("contaId",                     usuario.ContaId.ToString()),
  // NUNCA: new Claim("senha", usuario.Senha) — payload é público!
};`,
      checklist: [
        "Acessar jwt.io e decodificar o token do exemplo — ver header e payload",
        "Tentar alterar o payload no jwt.io sem a chave — verificar que a assinatura quebra",
        "Criar um console app que decodifica qualquer JWT e exibe cada parte",
        "Identificar quais claims fazem sentido para o Sistema Financeiro",
        "Responder: por que o token pode ser lido mas não forjado?",
      ],
      quiz: [
        {
          question:
            "Por que o payload do JWT pode ser lido por qualquer pessoa com o token?",
          options: [
            "Porque JWT usa criptografia fraca",
            "O payload é Base64Url encoded — não criptografado. A assinatura garante integridade (não foi adulterado), mas não confidencialidade (não oculta o conteúdo). Por isso nunca colocar dados sensíveis no payload",
            "Porque o algoritmo HS256 é fraco",
            "O servidor permite leitura pública",
          ],
          answer: 1,
        },
        {
          question:
            "Qual a principal vantagem do RS256 sobre HS256 em arquiteturas de microsserviços?",
          options: [
            "HS256 é mais lento",
            "Com RS256, apenas o serviço emissor tem a chave privada de assinatura. Qualquer microsserviço valida o token usando a chave pública sem precisar compartilhar segredos. Com HS256, todos os serviços precisariam conhecer a mesma chave simétrica",
            "RS256 gera tokens menores",
            "HS256 não suporta microsserviços",
          ],
          answer: 1,
        },
        {
          question:
            "Por que armazenar o Access Token em httpOnly cookie é mais seguro que localStorage?",
          options: [
            "Cookies são mais rápidos de ler",
            "httpOnly cookies não são acessíveis via JavaScript, tornando-os imunes a ataques XSS que roubam tokens do localStorage. A desvantagem é a necessidade de proteção CSRF",
            "Cookies persistem após fechar o browser",
            "localStorage tem limite de tamanho",
          ],
          answer: 1,
        },
      ],
    },
    {
      id: "m17t2",
      moduleId: "m17",
      title: "Emitindo e validando JWT no ASP.NET Core",
      theory: `Pacotes: Microsoft.AspNetCore.Authentication.JwtBearer e System.IdentityModel.Tokens.Jwt.

Configuração em Program.cs:
AddAuthentication + AddJwtBearer → TokenValidationParameters.
app.UseAuthentication() ANTES de app.UseAuthorization() — a ordem é crítica.
Inverter a ordem: UseAuthorization roda sem saber quem é o usuário — todos os [Authorize] falham silenciosamente com 401.

TokenValidationParameters — cada campo importa:
• ValidateIssuerSigningKey: true — sempre. Nunca false em produção.
• ValidateIssuer + ValidateAudience: true — verifica origem e destinatário.
• ValidateLifetime: true — rejeita expirados.
• ClockSkew: TimeSpan.Zero — padrão é 5 min de tolerância. Em sistemas financeiros: zero. Tolerância é janela de ataque.
• ValidAlgorithms: fixar o algoritmo esperado — previne algorithm confusion.
• RequireExpirationTime: true — rejeita tokens sem campo exp.

JwtSecurityTokenHandler + SecurityTokenDescriptor: emissão.
AccessToken: 15–60 minutos. Nunca mais de 24 horas.
RefreshToken: 7–30 dias. Hasheado no banco.

Ler claims no controller:
User.FindFirstValue(JwtRegisteredClaimNames.Sub) → userId
User.IsInRole("Correntista") → verificar role
User.FindFirstValue("contaId") → claim customizada`,
      code: `// ⚠️ ANTI-PATTERN — NUNCA FAÇA ISSO:
private const string Secret = "minha-chave-hardcoded"; // segredo no código!

// ✅ CORRETO: buscar da configuração (User Secrets / variável de ambiente)
private string SecretKey => _config["Jwt:SecretKey"]
  ?? throw new InvalidOperationException("Jwt:SecretKey não configurado");

// TokenService — emissão
public string GerarAccessToken(ApplicationUser usuario, IList<string> roles)
{
  var key     = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SecretKey));
  var creds   = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
  var expires = DateTime.UtcNow.AddMinutes(
    _config.GetValue<int>("Jwt:AccessTokenExpirationMinutes", 60));

  var claims = new List<Claim>
  {
    new(JwtRegisteredClaimNames.Sub,   usuario.Id),
    new(JwtRegisteredClaimNames.Email, usuario.Email),
    new(JwtRegisteredClaimNames.Jti,   Guid.NewGuid().ToString()),
  };
  claims.AddRange(roles.Select(r => new Claim(ClaimTypes.Role, r)));
  if (usuario.ContaId.HasValue)
    claims.Add(new("contaId", usuario.ContaId.Value.ToString()));

  var token = new JwtSecurityToken(
    issuer:   _config["Jwt:Issuer"],
    audience: _config["Jwt:Audience"],
    claims:   claims,
    expires:  expires,
    signingCredentials: creds);

  return new JwtSecurityTokenHandler().WriteToken(token);
}

// Program.cs — configuração segura completa
builder.Services
  .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
  .AddJwtBearer(options =>
  {
    options.TokenValidationParameters = new TokenValidationParameters
    {
      ValidateIssuerSigningKey = true,
      IssuerSigningKey         = new SymmetricSecurityKey(
        Encoding.UTF8.GetBytes(builder.Configuration["Jwt:SecretKey"]!)),
      ValidAlgorithms          = [SecurityAlgorithms.HmacSha256],
      ValidateIssuer           = true,
      ValidIssuer              = builder.Configuration["Jwt:Issuer"],
      ValidateAudience         = true,
      ValidAudience            = builder.Configuration["Jwt:Audience"],
      ValidateLifetime         = true,
      ClockSkew                = TimeSpan.Zero,
      RequireExpirationTime    = true,
    };
  });`,
      checklist: [
        "Instalar Microsoft.AspNetCore.Authentication.JwtBearer",
        "Configurar AddJwtBearer com todos os parâmetros de segurança",
        "Criar o TokenService que gera o AccessToken",
        "Usar dotnet user-secrets para armazenar Jwt:SecretKey localmente",
        "Testar no Swagger: gerar token no /auth/login e usar no cadeado",
      ],
      quiz: [
        {
          question:
            "Por que a ordem app.UseAuthentication() antes de app.UseAuthorization() é crítica?",
          options: [
            "É apenas convenção de organização",
            "Authentication identifica quem é o usuário; Authorization decide o que ele pode fazer. Se invertida, o middleware de autorização roda sem contexto de identidade — todos os [Authorize] falham com 401 sem nenhuma mensagem de erro clara",
            "A ordem é irrelevante no .NET 8",
            "Authorization não depende de Authentication",
          ],
          answer: 1,
        },
        {
          question:
            "Por que configurar ClockSkew como TimeSpan.Zero em um sistema financeiro?",
          options: [
            "Zero é o padrão do ASP.NET Core",
            "O padrão de 5 minutos aceita tokens expirados há até 5 minutos — em transações financeiras isso é uma janela de ataque onde um token roubado ainda funciona. Zero força rejeição imediata",
            "ClockSkew afeta apenas a performance",
            "TimeSpan.Zero desabilita a validação",
          ],
          answer: 1,
        },
        {
          question: "Para que serve RequireExpirationTime = true?",
          options: [
            "Para melhorar performance",
            "Rejeita tokens que não contêm o campo exp no payload — sem exp, o token nunca expira e qualquer token vazado vira uma backdoor permanente",
            "Exige que o token tenha sido emitido há menos de X tempo",
            "É equivalente a ValidateLifetime",
          ],
          answer: 1,
        },
      ],
    },
    {
      id: "m17t3",
      moduleId: "m17",
      title: "Refresh Token: rotação, revogação e armazenamento seguro",
      theory: `Por que o Access Token tem vida curta: se vazado, o dano é limitado pelo tempo.
O problema da UX: logar a cada 60 minutos é inaceitável.
A solução: Refresh Token — longa duração, troca por novo Access Token.

FLUXO COMPLETO:
1. Login → { accessToken (60min), refreshToken (30 dias) }
2. Request: cliente envia Access Token no header Authorization: Bearer
3. 401 Unauthorized → Access Token expirou
4. POST /auth/refresh com o Refresh Token → novo par de tokens
5. Cliente usa o novo Access Token

ROTAÇÃO OBRIGATÓRIA:
Cada uso do Refresh Token invalida o token usado e gera um novo.
Se o token original aparecer novamente após rotação → comprometimento detectado.
Resposta: revogar TODA a família de tokens do usuário.

ARMAZENAMENTO SEGURO:
Anti-pattern: token em texto puro no banco → banco vazado = tokens válidos.
Correto: armazenar o HASH SHA256 do token.
Campos: UserId, TokenHash, ExpiresAt, IsRevoked, CreatedAt, DeviceInfo, ReplacedByTokenId.

QUANDO REVOGAR TUDO:
Troca de senha, suspeita de comprometimento (replay detectado), logout de "todos os dispositivos" solicitado pelo usuário.`,
      code: `// Entity RefreshToken com hash e rotação
public class RefreshToken
{
  public Guid    Id                { get; private set; } = Guid.NewGuid();
  public Guid    UserId            { get; private set; }
  public string  TokenHash         { get; private set; } = null!;
  public string  DeviceInfo        { get; private set; } = null!;
  public DateTime ExpiresAt        { get; private set; }
  public DateTime CreatedAt        { get; private set; } = DateTime.UtcNow;
  public bool    IsRevoked         { get; private set; }
  public Guid?   ReplacedByTokenId { get; private set; }

  public static (RefreshToken entity, string rawToken) Criar(Guid userId, string deviceInfo)
  {
    var rawToken  = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64));
    var tokenHash = ComputeHash(rawToken);
    var entity    = new RefreshToken
    {
      UserId     = userId,
      TokenHash  = tokenHash,
      DeviceInfo = deviceInfo,
      ExpiresAt  = DateTime.UtcNow.AddDays(30),
    };
    return (entity, rawToken); // rawToken vai para o cliente; entity para o banco
  }

  public void Revogar(Guid? replacedById = null)
  {
    IsRevoked         = true;
    ReplacedByTokenId = replacedById;
  }

  public static string ComputeHash(string token) =>
    Convert.ToBase64String(SHA256.HashData(Encoding.UTF8.GetBytes(token)));
}

// Endpoint de refresh com rotação e detecção de replay
[AllowAnonymous]
[HttpPost("refresh")]
public async Task<IActionResult> Refresh([FromBody] RefreshRequest req)
{
  var tokenHash   = RefreshToken.ComputeHash(req.RefreshToken);
  var storedToken = await _rtRepo.GetByHashAsync(tokenHash);

  if (storedToken is null || storedToken.ExpiresAt < DateTime.UtcNow)
    return Unauthorized("Refresh token inválido ou expirado");

  if (storedToken.IsRevoked)
  {
    // Token revogado e tentativa de reutilização → possível comprometimento
    await _rtRepo.RevogarTodosDoUsuarioAsync(storedToken.UserId);
    return Unauthorized("Token comprometido detectado — faça login novamente");
  }

  var usuario               = await _userManager.FindByIdAsync(storedToken.UserId.ToString());
  var roles                 = await _userManager.GetRolesAsync(usuario!);
  var (novoEntity, novoRaw) = RefreshToken.Criar(usuario!.Id.ToGuid(), req.DeviceInfo ?? "unknown");

  storedToken.Revogar(novoEntity.Id);
  await _rtRepo.AddAsync(novoEntity);
  await _rtRepo.SaveChangesAsync();

  return Ok(new
  {
    AccessToken  = _tokenService.GerarAccessToken(usuario, roles),
    RefreshToken = novoRaw,
  });
}`,
      checklist: [
        "Criar a tabela RefreshTokens com migration do EF Core",
        "Implementar RefreshToken.Criar() com RandomNumberGenerator (nunca Guid/Random)",
        "Implementar o endpoint POST /auth/refresh com rotação e detecção de replay",
        "Testar: usar o mesmo refresh token duas vezes — o segundo deve retornar 401",
        "Implementar POST /auth/logout que revoga o refresh token atual",
      ],
      quiz: [
        {
          question:
            "Por que armazenar o hash SHA256 do Refresh Token em vez do token em si?",
          options: [
            "SHA256 economiza espaço",
            "Se o banco vazar, o atacante tem apenas hashes — sem o token original não consegue se autenticar. É o mesmo princípio do hashing de senhas: comprometer o banco não compromete os tokens",
            "O hash é mais fácil de comparar",
            "JWT exige tokens hasheados",
          ],
          answer: 1,
        },
        {
          question:
            "O que é 'rotação de Refresh Token' e por que detectar replay é importante?",
          options: [
            "Trocar o algoritmo de hash periodicamente",
            "Cada uso invalida o token antigo e gera um novo. Se o token original aparecer de novo após rotação, alguém o roubou antes da rotação e tentou usar — todos os tokens do usuário devem ser revogados imediatamente como resposta",
            "Renovar o Access Token antes de expirar",
            "Trocar a chave JWT periodicamente",
          ],
          answer: 1,
        },
        {
          question:
            "Por que usar RandomNumberGenerator.GetBytes() em vez de Guid.NewGuid() para gerar Refresh Token?",
          options: [
            "Guid é mais legível",
            "RandomNumberGenerator é um CSPRNG (gerador criptograficamente seguro) com 512 bits de entropia. Guid tem apenas 122 bits e parte dos bits são previsíveis. Tokens de segurança precisam de máxima imprevisibilidade",
            "Guid não pode ser convertido para string",
            "RandomNumberGenerator é mais rápido",
          ],
          answer: 1,
        },
      ],
    },
    {
      id: "m17t4",
      moduleId: "m17",
      title: "Armadilhas de JWT: alg:none, expiração, leakage",
      theory: `As vulnerabilidades mais comuns encontradas em auditorias de sistemas financeiros. Cada uma com o ataque e a defesa em código .NET.

ATAQUE 1 — Algorithm None:
Trocar header de {"alg":"HS256"} para {"alg":"none"} e remover a assinatura.
Bibliotecas antigas aceitavam tokens sem assinatura se alg:none.
Defesa: ValidAlgorithms = [SecurityAlgorithms.HmacSha256] — nunca aceitar "none".

ATAQUE 2 — Algorithm Confusion (RS256 → HS256):
Servidor usa RS256. Atacante pega a chave pública (pública por design), usa como segredo HMAC do HS256 e gera tokens "válidos".
Defesa: fixar explicitamente o algoritmo. Nunca aceitar mais de um.

ATAQUE 3 — Token sem expiração:
Tokens sem exp são válidos para sempre — backdoor permanente.
Defesa: ValidateLifetime = true + RequireExpirationTime = true.

ATAQUE 4 — Secret previsível ou fraca:
"secret", "password", "jwt-secret" — crackeáveis por dicionário em segundos.
Com a chave, qualquer pessoa gera tokens admin válidos.
Defesa: 256+ bits gerados por CSPRNG, armazenados em Azure Key Vault / Secrets Manager.

ATAQUE 5 — Dados sensíveis no payload:
Payload é base64 — qualquer um com o token lê.
Encontrado em auditorias: cpf, saldo, senha em texto puro no payload.
Defesa: apenas identificadores no payload (userId, role), nunca dados de negócio.

ATAQUE 6 — Token em URL / query string:
Query string aparece em access logs, browser history, headers Referer.
Defesa: NUNCA aceitar token em query string. Apenas header Authorization: Bearer.`,
      code: `// ❌ CONFIGURAÇÃO INSEGURA que aceita todos os ataques acima:
options.TokenValidationParameters = new TokenValidationParameters
{
  ValidateIssuerSigningKey = false, // aceita token sem assinatura (alg:none!)
  ValidateLifetime         = false, // aceita tokens expirados
  // sem ValidAlgorithms — aceita qualquer algoritmo
};

// ✅ CONFIGURAÇÃO SEGURA que fecha todos os vetores:
options.TokenValidationParameters = new TokenValidationParameters
{
  ValidateIssuerSigningKey = true,
  IssuerSigningKey         = new SymmetricSecurityKey(keyBytes),
  ValidAlgorithms          = [SecurityAlgorithms.HmacSha256], // fixar algoritmo
  ValidateIssuer           = true,
  ValidIssuer              = config["Jwt:Issuer"],
  ValidateAudience         = true,
  ValidAudience            = config["Jwt:Audience"],
  ValidateLifetime         = true,
  ClockSkew                = TimeSpan.Zero,
  RequireExpirationTime    = true,
};

// Gerando secret segura (32 bytes = 256 bits)
var bytes = new byte[32];
RandomNumberGenerator.Fill(bytes);
string secret = Convert.ToBase64String(bytes);
// Exemplo: "xK9mP2vQ8nL3jR7wT1yU5bH6cF4dE0aG+iZ2nS="`,
      checklist: [
        "Verificar: ValidateIssuerSigningKey, ValidateLifetime e RequireExpirationTime são true?",
        "Adicionar ValidAlgorithms explicitamente à configuração JWT",
        "Tentar gerar um JWT com alg:none no jwt.io e verificar que a API rejeita (401)",
        "Auditar o payload dos tokens: há algum dado sensível indevido?",
        "Verificar que Jwt:SecretKey tem 32+ chars e foi gerada por CSPRNG",
      ],
      quiz: [
        {
          question: "O que é o ataque 'algorithm confusion' em JWT?",
          options: [
            "Trocar HS256 por RS256 na configuração do servidor",
            "O atacante modifica o header do token para trocar o algoritmo (ex: RS256 → HS256) e usa a chave pública do servidor como segredo HMAC — bibliotecas vulneráveis aceitam o token forjado como válido",
            "Usar SHA512 em vez de SHA256",
            "Alterar o campo exp do token",
          ],
          answer: 1,
        },
        {
          question:
            "Por que nunca aceitar JWT passado via query string (?token=...)?",
          options: [
            "Query strings têm limite de tamanho para JWT",
            "Query strings aparecem em access logs do servidor, browser history, cabeçalhos Referer e URLs compartilhadas — expondo o token a sistemas que não deveriam tê-lo",
            "JwtBearer não suporta query string por padrão",
            "Query strings são bloqueadas por CORS",
          ],
          answer: 1,
        },
        {
          question:
            "Um JWT sem o campo exp no payload: o que RequireExpirationTime = true faz?",
          options: [
            "Aceita e usa a data de emissão como validade padrão",
            "Rejeita o token com erro de validação — token sem exp nunca expira e representa risco permanente. RequireExpirationTime = true torna exp obrigatório",
            "Usa ClockSkew como expiração padrão",
            "É equivalente a ValidateLifetime",
          ],
          answer: 1,
        },
      ],
    },
  ],
};
