# 🚀 FASE 5 — ROADMAP DE IMPLEMENTAÇÃO + PROMPTS PARA CLAUDE OPUS 4.6

> **Fase:** 5 de 9 — Segurança & Autenticação  
> **Stack:** JWT · Refresh Token · ASP.NET Identity · BCrypt · HTTPS · CORS · Rate Limiting  
> **Semanas:** 16–17 do cronograma geral  
> **Pré-requisito:** Fase 4 concluída (Testes Automatizados)  
> **Projeto:** Auth Service completo — login, refresh, logout, controle de acesso por perfil

---

## CONTEXTO: O QUE MUDA DA FASE 4 PARA A FASE 5

A Fase 4 garantiu que o software funciona e que há rede de segurança para evoluir.
A Fase 5 ensina a garantir que **apenas quem deve acessar, acessa** — autenticação,
autorização, tokens, segredos e as armadilhas de segurança que colocam sistemas em
produção em risco real.

Esta é a fase que o aluno mais vai aplicar no dia a dia. Não existe API corporativa
sem autenticação. A maioria dos vazamentos de dados reportados no Brasil envolve
JWT mal implementado, senhas armazenadas sem hash ou CORS configurado como `*`.

A conexão com as fases anteriores é direta:
- **DDD (Fase 3)** — `Usuario` como Aggregate com invariantes de senha e perfil
- **FluentValidation (Fase 3)** — validar requests de login, registro, troca de senha
- **Testes (Fase 4)** — testar os endpoints de auth com WebApplicationFactory + JWT de teste
- **Result Pattern (Fase 3)** — retornar `Result<TokenPair, AuthError>` em vez de exceções

O sistema React **não muda estruturalmente** — apenas `FASE5_DATA` é adicionado ao `ALL_PHASES`.

```
Sistema após Fase 5:
Sidebar
├── ✅ FASE 1 — C# Fundamentos & Git             (concluída)
├── ✅ FASE 2 — Web API & Banco de Dados          (concluída)
├── ✅ FASE 3 — Qualidade & Arquitetura           (concluída)
├── ✅ FASE 4 — Testes Automatizados              (concluída)
└── ▶  FASE 5 — Segurança & Autenticação         (em progresso)
     ├── Módulo 17: JWT e Tokens
     ├── Módulo 18: ASP.NET Identity
     ├── Módulo 19: Autorização e Políticas
     └── Módulo 20: Segurança na Prática
```

---

## PARTE 1 — MAPA DE CONTEÚDO DA FASE 5

### Módulos e Tópicos (16 tópicos + 1 projeto, Semanas 16–17)

```
Fase 5 — Segurança & Autenticação
│
├── Módulo 17: JWT e Tokens (Semana 16)                    cor: #F59E0B
│   ├── Tópico 17.1 — Como JWT funciona: Header, Payload, Signature
│   ├── Tópico 17.2 — Emitindo e validando JWT no ASP.NET Core
│   ├── Tópico 17.3 — Refresh Token: rotação, revogação e armazenamento seguro
│   └── Tópico 17.4 — Armadilhas de JWT: alg:none, expiração, leakage
│
├── Módulo 18: ASP.NET Identity (Semana 16–17)             cor: #6366F1
│   ├── Tópico 18.1 — Identity: UserManager, RoleManager e configuração
│   ├── Tópico 18.2 — Senhas: BCrypt, hashing, salting e políticas
│   ├── Tópico 18.3 — Registro, login e confirmação de e-mail
│   └── Tópico 18.4 — Claims, Roles e perfis de acesso
│
├── Módulo 19: Autorização e Políticas (Semana 17)         cor: #EF4444
│   ├── Tópico 19.1 — [Authorize]: roles, claims e políticas
│   ├── Tópico 19.2 — Policy-based authorization com requirements
│   ├── Tópico 19.3 — Resource-based authorization
│   └── Tópico 19.4 — CORS: configuração segura e armadilhas
│
└── Módulo 20: Segurança na Prática (Semana 17)            cor: #10B981
    ├── Tópico 20.1 — HTTPS, HSTS e segredos fora do código
    ├── Tópico 20.2 — Rate Limiting e proteção contra brute-force
    ├── Tópico 20.3 — OWASP Top 10 para APIs .NET
    └── Tópico 20.4 — Testando segurança: testes de autenticação com xUnit

Projeto Final Fase 5: Auth Service completo
    ├── POST /auth/register      — cadastro com validação e confirmação de e-mail
    ├── POST /auth/login         — retorna AccessToken + RefreshToken
    ├── POST /auth/refresh       — rotação de Refresh Token
    ├── POST /auth/logout        — revogação de Refresh Token
    ├── GET  /auth/me            — dados do usuário autenticado
    └── Integração: endpoints do Sistema Financeiro protegidos por role
```

---

## PARTE 2 — ROADMAP DE IMPLEMENTAÇÃO

### Visão Geral das Etapas

```
ETAPA F5-1 → Dados da Fase 5 + Registro em ALL_PHASES               (1 sessão)
ETAPA F5-2 → Conteúdo Módulo 17 (JWT e Tokens)                      (1 sessão)
ETAPA F5-3 → Conteúdo Módulo 18 (ASP.NET Identity + BCrypt)         (1 sessão)
ETAPA F5-4 → Conteúdo Módulo 19 (Autorização + CORS)                (1 sessão)
ETAPA F5-5 → Conteúdo Módulo 20 (Segurança Prática + Testes Auth)   (1 sessão)
ETAPA F5-6 → Projeto Final + Revisão Geral                           (1 sessão)
```

> **Por que 6 etapas?** Segurança tem muita teoria crítica que não pode ser
> simplificada. JWT mal explicado gera código inseguro em produção. Cada módulo
> exige profundidade — especialmente as armadilhas do Módulo 17 e o OWASP do 20.

---

## PARTE 3 — PROMPTS PARA CLAUDE OPUS 4.6

---

### 📌 PROMPT BASE FASE 5 (incluir em TODAS as sessões)

```
Você é um engenheiro sênior .NET especialista em segurança de APIs,
construindo a FASE 5 de uma plataforma de aprendizado corporativo .NET.
As Fases 1, 2, 3 e 4 já estão funcionando e não podem ser quebradas.

DOCUMENTOS DE REFERÊNCIA:
- 01-REQUISITOS.md        (base arquitetural do sistema React)
- 02-ARQUITETURA.md       (componentes e persistência)
- 05-ROADMAP-FASE3.md     (Sistema Financeiro DDD — será protegido com auth)
- 06-ROADMAP-FASE4.md     (testes — aplicados à camada de segurança)
- 07-ROADMAP-FASE5.md     (este documento)

REGRAS ABSOLUTAS (mesmas das fases anteriores, mais estas):
1. Nunca quebrar Fases 1–4 — APENAS ADICIONAR ao final do arquivo
2. NUNCA mostrar segredos hardcoded no código final — sempre variáveis de
   ambiente ou User Secrets. Mostrar o anti-pattern e depois corrigi-lo.
3. JWT secret key deve ter mínimo 256 bits (32 caracteres) nos exemplos
4. Senhas NUNCA em texto puro — BCrypt obrigatório em todos os exemplos
5. CORS: nunca AllowAnyOrigin() + AllowCredentials() juntos — é inválido
   pela spec e bloqueado pelo browser. Explicar por quê.
6. Mostrar SEMPRE o ataque antes da defesa
7. Refresh Token: armazenar apenas o hash SHA256 no banco, nunca o token
8. Todos os endpoints do Sistema Financeiro devem ser protegidos no projeto final
9. Rate Limiting nos endpoints de auth — brute-force é a ameaça principal
10. Todo endpoint de auth tem teste de segurança correspondente
```

---

### 🔧 PROMPT F5-1 — Dados da Fase 5 + Integração

```
[CONTEXTO: Fase 5 — Etapa F5-1: Estrutura de Dados e Integração]
[ENTRADA: Cole aqui o .jsx completo com Fases 1–4 funcionando]

Mantenha TODO o código existente intacto.
Adicione ao final do arquivo, sem modificar nada:

═══════════════════════════════════════════════════════
1. CORES DOS NOVOS MÓDULOS
═══════════════════════════════════════════════════════
Adicione ao objeto COLORS existente:
  m17: '#F59E0B',   // JWT — âmbar (tokens = valioso)
  m18: '#6366F1',   // Identity — índigo
  m19: '#EF4444',   // Autorização — vermelho (acesso negado)
  m20: '#10B981',   // Segurança Prática — verde (seguro)

═══════════════════════════════════════════════════════
2. CHAVES DE STORAGE DA FASE 5
═══════════════════════════════════════════════════════
Adicione ao objeto STORAGE:
  phase5Completed:  'phase5:completed_topics',
  phase5Xp:         'phase5:xp',
  phase5Unlocked:   'phase5:unlocked',
  checklist5: id => `phase5:checklist_${id}`,
  quiz5:      id => `phase5:quiz_${id}`,
  notes5:     id => `phase5:notes_${id}`,
  timer5:     id => `phase5:timer_${id}`,

═══════════════════════════════════════════════════════
3. CONSTANTE FASE5_DATA — ESTRUTURA COMPLETA
═══════════════════════════════════════════════════════
Crie FASE5_DATA com a mesma estrutura das fases anteriores.
Conteúdo real virá nas etapas F5-2 a F5-5. Esqueleto com ids e títulos.

Módulo 17 — id: 'm17', title: 'JWT e Tokens', color: '#F59E0B', week: 'Semana 16'
  m17t1 — Como JWT funciona: Header, Payload, Signature
  m17t2 — Emitindo e validando JWT no ASP.NET Core
  m17t3 — Refresh Token: rotação, revogação e armazenamento seguro
  m17t4 — Armadilhas de JWT: alg:none, expiração, leakage

Módulo 18 — id: 'm18', title: 'ASP.NET Identity', color: '#6366F1', week: 'Semana 16-17'
  m18t1 — Identity: UserManager, RoleManager e configuração
  m18t2 — Senhas: BCrypt, hashing, salting e políticas
  m18t3 — Registro, login e confirmação de e-mail
  m18t4 — Claims, Roles e perfis de acesso

Módulo 19 — id: 'm19', title: 'Autorização e Políticas', color: '#EF4444', week: 'Semana 17'
  m19t1 — [Authorize]: roles, claims e políticas
  m19t2 — Policy-based authorization com requirements
  m19t3 — Resource-based authorization
  m19t4 — CORS: configuração segura e armadilhas

Módulo 20 — id: 'm20', title: 'Segurança na Prática', color: '#10B981', week: 'Semana 17'
  m20t1 — HTTPS, HSTS e segredos fora do código
  m20t2 — Rate Limiting e proteção contra brute-force
  m20t3 — OWASP Top 10 para APIs .NET
  m20t4 — Testando segurança: testes de autenticação com xUnit

Projeto final — id: 'm20proj', moduleId: 'm20'
  title: '🔐 Projeto: Auth Service Completo'

═══════════════════════════════════════════════════════
4. ATUALIZAR ALL_PHASES
═══════════════════════════════════════════════════════
Adicione ao array ALL_PHASES:
  {
    id: 'phase5',
    title: 'Fase 5',
    subtitle: 'Segurança & Autenticação',
    data: FASE5_DATA,
    storageKey: STORAGE.phase5Completed,
    color: '#F59E0B',
    weeks: 'Semanas 16–17'
  }

Regra: Fase 5 requer Fase 4 com 16 tópicos concluídos.

NÃO MODIFIQUE NENHUM COMPONENTE VISUAL. Apenas dados e constantes.
Entregue o .jsx completo ao final.
```

---

### 🔧 PROMPT F5-2 — Módulo 17 (JWT e Tokens)

```
[CONTEXTO: Fase 5 — Etapa F5-2: Módulo 17 — JWT e Tokens]
[ENTRADA: Cole aqui o .jsx completo após F5-1]

Substitua o conteúdo placeholder dos 4 tópicos do Módulo 17.

REGRA ESPECIAL DESTE MÓDULO:
Cada tópico DEVE mostrar o ATAQUE antes da DEFESA.
O aluno precisa entender o que o invasor faz para entender por que a proteção existe.

════════════════════════════════════════════════════
TÓPICO 17.1 — Como JWT funciona: Header, Payload, Signature
════════════════════════════════════════════════════
theory:
  O problema que JWT resolve: como provar identidade sem consultar banco a cada request.
  Sessões vs Tokens: por que sessões não escalam horizontalmente (sticky sessions,
  estado no servidor) e como JWT resolve com estado no cliente.

  HEADER (algoritmo + tipo):
    { "alg": "HS256", "typ": "JWT" }
    Base64Url encoded — não é criptografia, é encoding.
    HS256 (HMAC-SHA256, chave simétrica) vs RS256 (RSA, chave assimétrica).
    RS256 superior em microsserviços: apenas o emissor tem chave privada,
    qualquer serviço valida com a chave pública (pública por design).

  PAYLOAD (claims):
    Registradas: sub, iss, aud, exp, iat, jti.
    Customizadas: role, email, contaId, tenantId.
    NUNCA: senha, dados bancários, PII sensível.
    O payload é PÚBLICO — qualquer um com o token pode ler (só não pode forjar).
    JWT é assinado (autenticidade), não criptografado (confidencialidade).

  SIGNATURE (prova de integridade):
    HMACSHA256(base64url(header) + "." + base64url(payload), secretKey)
    Prova que o token não foi adulterado — mas não oculta o conteúdo.
    JWE (JSON Web Encryption) para quando o payload precisa ser cifrado.

  Onde armazenar no cliente:
    localStorage → vulnerável a XSS.
    httpOnly cookie → imune a XSS, vulnerável a CSRF.
    Memory/state → seguro, perde no refresh da página.
    Recomendação corporativa: httpOnly + Secure cookie para Refresh Token,
    memory para Access Token.

code:
  // Decodificando manualmente um JWT (apenas para entender a estrutura)
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
  };

checklist:
  - Acessar jwt.io e decodificar o token do exemplo — ver header e payload
  - Tentar alterar o payload no jwt.io sem a chave — verificar que a assinatura quebra
  - Criar um console app que decodifica qualquer JWT e exibe cada parte
  - Identificar quais claims fazem sentido para o Sistema Financeiro
  - Responder: por que o token pode ser lido mas não forjado?

quiz:
  Q1: Por que o payload do JWT pode ser lido por qualquer pessoa com o token?
      [Porque JWT usa criptografia fraca, O payload é Base64Url encoded — não
       criptografado. A assinatura garante integridade (não foi adulterado),
       mas não confidencialidade (não oculta o conteúdo). Por isso nunca colocar
       dados sensíveis no payload,
       Porque o algoritmo HS256 é fraco, O servidor permite leitura pública]
      Resposta: 1

  Q2: Qual a principal vantagem do RS256 sobre HS256 em arquiteturas de microsserviços?
      [HS256 é mais lento, Com RS256, apenas o serviço emissor tem a chave privada
       de assinatura. Qualquer microsserviço valida o token usando a chave pública
       sem precisar compartilhar segredos. Com HS256, todos os serviços precisariam
       conhecer a mesma chave simétrica,
       RS256 gera tokens menores, HS256 não suporta microsserviços]
      Resposta: 1

  Q3: Por que armazenar o Access Token em httpOnly cookie é mais seguro que localStorage?
      [Cookies são mais rápidos de ler, httpOnly cookies não são acessíveis via
       JavaScript, tornando-os imunes a ataques XSS que roubam tokens do
       localStorage. A desvantagem é a necessidade de proteção CSRF,
       Cookies persistem após fechar o browser, localStorage tem limite de tamanho]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 17.2 — Emitindo e validando JWT no ASP.NET Core
════════════════════════════════════════════════════
theory:
  Pacotes: Microsoft.AspNetCore.Authentication.JwtBearer e System.IdentityModel.Tokens.Jwt.

  Configuração em Program.cs:
    AddAuthentication + AddJwtBearer → TokenValidationParameters.
    app.UseAuthentication() ANTES de app.UseAuthorization() — ordem crítica.
    Inverter a ordem: UseAuthorization roda sem saber quem é o usuário —
    todos os [Authorize] falham silenciosamente com 401.

  TokenValidationParameters — cada campo importa:
    ValidateIssuerSigningKey: true — sempre. Nunca false em produção.
    ValidateIssuer + ValidateAudience: true — verifica origem e destinatário.
    ValidateLifetime: true — rejeita expirados.
    ClockSkew: TimeSpan.Zero — padrão é 5 min de tolerância. Em sistemas
    financeiros: zero. Tolerância é janela de ataque.
    ValidAlgorithms: fixar o algoritmo esperado — previne algorithm confusion.
    RequireExpirationTime: true — rejeita tokens sem campo exp.

  JwtSecurityTokenHandler + SecurityTokenDescriptor: emissão.
  AccessToken: 15–60 minutos. Nunca mais de 24 horas.
  RefreshToken: 7–30 dias. Hasheado no banco.

  Ler claims no controller:
    User.FindFirstValue(JwtRegisteredClaimNames.Sub) → userId
    User.IsInRole("Correntista") → verificar role
    User.FindFirstValue("contaId") → claim customizada

code:
  // ⚠️ ANTI-PATTERN — NUNCA FAÇA ISSO:
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
    });

checklist:
  - Instalar Microsoft.AspNetCore.Authentication.JwtBearer
  - Configurar AddJwtBearer com todos os parâmetros de segurança
  - Criar o TokenService que gera o AccessToken
  - Usar dotnet user-secrets para armazenar Jwt:SecretKey localmente
  - Testar no Swagger: gerar token no /auth/login e usar no cadeado

quiz:
  Q1: Por que a ordem app.UseAuthentication() antes de app.UseAuthorization() é crítica?
      [É apenas convenção de organização, Authentication identifica quem é o usuário;
       Authorization decide o que ele pode fazer. Se invertida, o middleware de
       autorização roda sem contexto de identidade — todos os [Authorize] falham
       com 401 sem nenhuma mensagem de erro clara,
       A ordem é irrelevante no .NET 8, Authorization não depende de Authentication]
      Resposta: 1

  Q2: Por que configurar ClockSkew como TimeSpan.Zero em um sistema financeiro?
      [Zero é o padrão do ASP.NET Core, O padrão de 5 minutos aceita tokens expirados
       há até 5 minutos — em transações financeiras isso é uma janela de ataque
       onde um token roubado ainda funciona. Zero força rejeição imediata,
       ClockSkew afeta apenas a performance, TimeSpan.Zero desabilita a validação]
      Resposta: 1

  Q3: Para que serve RequireExpirationTime = true?
      [Para melhorar performance, Rejeita tokens que não contêm o campo exp no
       payload — sem exp, o token nunca expira e qualquer token vazado vira
       uma backdoor permanente,
       Exige que o token tenha sido emitido há menos de X tempo,
       É equivalente a ValidateLifetime]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 17.3 — Refresh Token: rotação, revogação e armazenamento seguro
════════════════════════════════════════════════════
theory:
  Por que Access Token tem vida curta: se vazado, o dano é limitado pelo tempo.
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
  Troca de senha, suspeita de comprometimento (replay detectado),
  logout de "todos os dispositivos" solicitado pelo usuário.

code:
  // Entity RefreshToken com hash e rotação
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
      IsRevoked            = true;
      ReplacedByTokenId    = replacedById;
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

    var usuario              = await _userManager.FindByIdAsync(storedToken.UserId.ToString());
    var roles                = await _userManager.GetRolesAsync(usuario!);
    var (novoEntity, novoRaw) = RefreshToken.Criar(usuario!.Id.ToGuid(), req.DeviceInfo ?? "unknown");

    storedToken.Revogar(novoEntity.Id);
    await _rtRepo.AddAsync(novoEntity);
    await _rtRepo.SaveChangesAsync();

    return Ok(new
    {
      AccessToken  = _tokenService.GerarAccessToken(usuario, roles),
      RefreshToken = novoRaw,
    });
  }

checklist:
  - Criar a tabela RefreshTokens com migration do EF Core
  - Implementar RefreshToken.Criar() com RandomNumberGenerator (nunca Guid/Random)
  - Implementar o endpoint POST /auth/refresh com rotação e detecção de replay
  - Testar: usar o mesmo refresh token duas vezes — o segundo deve retornar 401
  - Implementar POST /auth/logout que revoga o refresh token atual

quiz:
  Q1: Por que armazenar o hash SHA256 do Refresh Token em vez do token em si?
      [SHA256 economiza espaço, Se o banco vazar, o atacante tem apenas hashes —
       sem o token original não consegue se autenticar. É o mesmo princípio do
       hashing de senhas: comprometer o banco não compromete os tokens,
       O hash é mais fácil de comparar, JWT exige tokens hasheados]
      Resposta: 1

  Q2: O que é "rotação de Refresh Token" e por que detectar replay é importante?
      [Trocar o algoritmo de hash periodicamente, Cada uso invalida o token antigo
       e gera um novo. Se o token original aparecer de novo após rotação, alguém
       o roubou antes da rotação e tentou usar — todos os tokens do usuário devem
       ser revogados imediatamente como resposta,
       Renovar o Access Token antes de expirar, Trocar a chave JWT periodicamente]
      Resposta: 1

  Q3: Por que usar RandomNumberGenerator.GetBytes() em vez de Guid.NewGuid() para gerar Refresh Token?
      [Guid é mais legível, RandomNumberGenerator é um CSPRNG (gerador criptograficamente
       seguro) com 512 bits de entropia. Guid tem apenas 122 bits e parte dos bits
       são previsíveis. Tokens de segurança precisam de máxima imprevisibilidade,
       Guid não pode ser convertido para string, RandomNumberGenerator é mais rápido]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 17.4 — Armadilhas de JWT: alg:none, expiração, leakage
════════════════════════════════════════════════════
theory:
  As vulnerabilidades mais comuns encontradas em auditorias de sistemas
  financeiros. Cada uma com o ataque e a defesa em código .NET.

  ATAQUE 1 — Algorithm None:
  Trocar header de {"alg":"HS256"} para {"alg":"none"} e remover a assinatura.
  Bibliotecas antigas aceitavam tokens sem assinatura se alg:none.
  Defesa: ValidAlgorithms = [SecurityAlgorithms.HmacSha256] — nunca aceitar "none".

  ATAQUE 2 — Algorithm Confusion (RS256 → HS256):
  Servidor usa RS256. Atacante pega a chave pública (pública por design),
  usa como segredo HMAC do HS256 e gera tokens "válidos".
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
  Defesa: NUNCA aceitar token em query string. Apenas header Authorization: Bearer.

code:
  // ❌ CONFIGURAÇÃO INSEGURA que aceita todos os ataques acima:
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
  // Exemplo: "xK9mP2vQ8nL3jR7wT1yU5bH6cF4dE0aG+iZ2nS="

checklist:
  - Verificar: ValidateIssuerSigningKey, ValidateLifetime e RequireExpirationTime são true?
  - Adicionar ValidAlgorithms explicitamente à configuração JWT
  - Tentar gerar um JWT com alg:none no jwt.io e verificar que a API rejeita (401)
  - Auditar o payload dos tokens: há algum dado sensível indevido?
  - Verificar que Jwt:SecretKey tem 32+ chars e foi gerada por CSPRNG

quiz:
  Q1: O que é o ataque "algorithm confusion" em JWT?
      [Trocar HS256 por RS256 na configuração do servidor, O atacante modifica o
       header do token para trocar o algoritmo (ex: RS256 → HS256) e usa a chave
       pública do servidor como segredo HMAC — bibliotecas vulneráveis aceitam
       o token forjado como válido,
       Usar SHA512 em vez de SHA256, Alterar o campo exp do token]
      Resposta: 1

  Q2: Por que nunca aceitar JWT passado via query string (?token=...)?
      [Query strings têm limite de tamanho para JWT, Query strings aparecem em
       access logs do servidor, browser history, cabeçalhos Referer e URLs
       compartilhadas — expondo o token a sistemas que não deveriam tê-lo,
       JwtBearer não suporta query string por padrão,
       Query strings são bloqueadas por CORS]
      Resposta: 1

  Q3: Um JWT sem o campo exp no payload: o que RequireExpirationTime = true faz?
      [Aceita e usa a data de emissão como validade padrão, Rejeita o token com
       erro de validação — token sem exp nunca expira e representa risco permanente.
       RequireExpirationTime = true torna exp obrigatório,
       Usa ClockSkew como expiração padrão, É equivalente a ValidateLifetime]
      Resposta: 1

Entregue o .jsx completo ao final.
```

---

### 🔧 PROMPT F5-3 — Módulo 18 (ASP.NET Identity + BCrypt)

```
[CONTEXTO: Fase 5 — Etapa F5-3: Módulo 18 — ASP.NET Identity]
[ENTRADA: Cole aqui o .jsx completo após F5-2]

Substitua o conteúdo placeholder dos 4 tópicos do Módulo 18.

════════════════════════════════════════════════════
TÓPICO 18.1 — Identity: UserManager, RoleManager e configuração
════════════════════════════════════════════════════
theory:
  ASP.NET Identity: sistema completo de gerenciamento de usuários integrado ao
  ASP.NET Core — hashing de senha, lockout, validação de e-mail, roles, claims.
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
    Password: RequiredLength (8), RequireDigit, RequireNonAlphanumeric, RequireUppercase.
    Lockout: MaxFailedAccessAttempts (5), DefaultLockoutTimeSpan (15min).
    User: RequireUniqueEmail (true).
    SignIn: RequireConfirmedEmail (false em dev, true em produção).

code:
  // ApplicationUser customizado para o Sistema Financeiro
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
  }

checklist:
  - Instalar Microsoft.AspNetCore.Identity.EntityFrameworkCore
  - Criar ApplicationUser com ContaId e NomeCompleto
  - Configurar Identity com políticas de senha e lockout
  - Criar migration para as tabelas Identity (AspNetUsers, AspNetRoles, etc.)
  - Implementar seed de roles no startup

quiz:
  Q1: Por que usar UserManager.CheckPasswordAsync() em vez de comparar hashes manualmente?
      [UserManager é apenas conveniência de código, CheckPasswordAsync usa o
       IPasswordHasher registrado (BCrypt ou PBKDF2) e protege contra timing
       attacks com comparação em tempo constante — implementação manual é
       vulnerável a vazamento de tempo,
       CheckPasswordAsync é mais rápido, Comparação manual não compila com Identity]
      Resposta: 1

  Q2: O que ocorre quando MaxFailedAccessAttempts é atingido?
      [O usuário é permanentemente deletado, A conta é bloqueada por
       DefaultLockoutTimeSpan — SignInManager.PasswordSignInAsync retorna
       SignInResult.LockedOut. Isso limita brute-force sem impactar
       usuários legítimos permanentemente,
       A senha é resetada automaticamente, Um e-mail de aviso é enviado]
      Resposta: 1

  Q3: Por que RequireConfirmedEmail = true é importante em produção financeira?
      [Para melhorar o SEO, Garante que o e-mail existe e pertence ao usuário
       antes de criar acesso ao sistema — previne cadastros com e-mails falsos,
       contas para spam e ataques com identidades fictícias,
       É exigência da LGPD, Melhora a performance do Identity]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 18.2 — Senhas: BCrypt, hashing, salting e políticas
════════════════════════════════════════════════════
theory:
  O ataque que este tópico previne: vazamento do banco de dados.
  Com senhas em texto puro → todas as contas comprometidas.
  Com BCrypt → as senhas levam anos para quebrar.

  ANTI-PATTERNS encontrados em vazamentos reais:
  - Texto puro: "senha123" armazenado diretamente — catastrófico.
  - MD5/SHA1/SHA256: rápidos por design — GPUs modernas: 100 bilhões hash/s.
  - Hash sem salt: vulnerável a rainbow tables (tabela pré-computada).
  - Salt previsível: email+senha como salt não protege contra ataques direcionados.

  BCRYPT — por que é o padrão:
  - Slow by design: work factor ajustável (2^n iterações).
  - Salt automático: incluído no resultado do hash ($2a$12$<salt><hash>).
  - Resistente a GPU e ASICs: design paralelo-hostil.
  - Work factor 10 (padrão) ≈ 100ms. Work factor 12 ≈ 400ms.
  - Para sistemas financeiros: work factor 12 mínimo.

  Identity usa PBKDF2 por padrão — adequado, mas BCrypt é mais testado.
  Como trocar: implementar IPasswordHasher<ApplicationUser>.

code:
  // ❌ ANTI-PATTERNS — O QUE NUNCA FAZER:
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
  // Registrar: services.AddScoped<IPasswordHasher<ApplicationUser>, BcryptPasswordHasher>();

checklist:
  - Instalar BCrypt.Net-Next: dotnet add package BCrypt.Net-Next
  - Implementar BcryptPasswordHasher e registrar no DI
  - Verificar no banco após registro: SenhaHash começa com "$2a$12$"?
  - Criar um teste comparando velocidade de verificação BCrypt vs SHA256
  - Implementar rota de troca de senha que invalida todos os Refresh Tokens

quiz:
  Q1: Por que MD5 e SHA256 não são adequados para hashing de senhas?
      [São algoritmos mais antigos e inseguros, São projetados para throughput
       (rápidos) — não para segurança de senha. GPUs modernas testam bilhões
       de hashes por segundo, tornando força bruta viável. BCrypt é
       slow by design, tornando ataques impraticáveis,
       Geram hashes de tamanho inadequado, MD5 foi depreciado no .NET 8]
      Resposta: 1

  Q2: O que o work factor do BCrypt controla?
      [O tamanho do hash gerado, O número de iterações (2^n) — work factor 12
       significa 4096 iterações. Aumentar em 1 dobra o tempo de processamento.
       Deve ser ajustado conforme o hardware evolui (a cada ~2 anos),
       O comprimento do salt, A compatibilidade com outros sistemas]
      Resposta: 1

  Q3: Por que BCrypt não requer armazenar o salt separadamente?
      [BCrypt não usa salt, O salt é incorporado no hash resultado — o formato
       "$2a$12$<salt><hash>" contém tudo. Ao verificar, BCrypt extrai o salt
       automaticamente do hash armazenado,
       O Identity gerencia o salt em tabela separada,
       O salt é derivado do userId]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 18.3 — Registro, login e confirmação de e-mail
════════════════════════════════════════════════════
theory:
  FLUXO DE REGISTRO (sistema financeiro):
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
  Retornar 204 No Content.

code:
  [AllowAnonymous]
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

    var roles                  = await _userManager.GetRolesAsync(user);
    var (rtEntity, rtRaw)      = RefreshToken.Criar(Guid.Parse(user.Id), req.DeviceInfo ?? "unknown");
    await _rtRepo.AddAsync(rtEntity);
    await _rtRepo.SaveChangesAsync();

    return Ok(new
    {
      AccessToken  = _tokenService.GerarAccessToken(user, roles),
      RefreshToken = rtRaw,
      ExpiresIn    = 3600,
      TokenType    = "Bearer"
    });
  }

checklist:
  - Implementar POST /auth/register com criação de ApplicationUser + Conta
  - Implementar GET /auth/confirm-email
  - Implementar POST /auth/login com lockout e mensagem genérica de erro
  - Testar: 5 tentativas com senha errada → conta bloqueada (429)
  - Verificar: "E-mail não encontrado" nunca aparece na resposta

quiz:
  Q1: Por que retornar "E-mail ou senha inválidos" em vez de mensagens específicas?
      [Para simplificar o código, Mensagens específicas permitem enumeração de
       usuários — o atacante confirma quais e-mails estão cadastrados. A mensagem
       genérica não vaza informação sobre a existência do usuário,
       É exigência da LGPD, Mensagens específicas consomem mais CPU]
      Resposta: 1

  Q2: Por que POST /auth/register retorna 201 sem token de acesso?
      [Seria mais prático retornar o token, O registro deve ser confirmado por
       e-mail antes de conceder acesso (se RequireConfirmedEmail = true) —
       retornar token antes da confirmação permitiria uso de e-mails falsos,
       Identity não permite gerar token no register, 201 é o código para POST]
      Resposta: 1

  Q3: Por que usar CheckPasswordSignInAsync com lockoutOnFailure: true?
      [É a única forma de verificar senha, Incrementa automaticamente o contador
       de tentativas e bloqueia após MaxFailedAccessAttempts — o Identity gerencia
       o lockout sem código adicional,
       lockoutOnFailure: false é o padrão e é mais seguro,
       Apenas SignInManager pode verificar senhas]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 18.4 — Claims, Roles e perfis de acesso
════════════════════════════════════════════════════
theory:
  Autenticação = quem é você (JWT válido).
  Autorização = o que você pode fazer (roles e claims).

  ROLES vs CLAIMS:
  Roles: categorias (Admin, Gerente, Correntista). Simples. [Authorize(Roles="Admin")].
  Claims: pares chave-valor com contexto: "contaId", "departamento", "nivelAprovacao".
  Roles para perfis. Claims para contexto específico de negócio.

  PERFIS DO SISTEMA FINANCEIRO:
  Correntista: apenas a própria conta (verificar contaId no token vs url).
  Gerente: contas da agência, aprova transferências acima de R$ 10.000.
  Admin: acesso total, gerencia usuários.

  Claims no token vs banco:
  Estáticas (role, email) → no token. Dinâmicas (saldo) → no banco (token desatualiza).

  Customizar geração de claims com IUserClaimsPrincipalFactory<ApplicationUser>.

code:
  // Claims no JWT — TokenService
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
  }

checklist:
  - Criar os 3 roles via seed no startup
  - Adicionar ContaId como claim customizada no TokenService
  - Verificar controle de acesso: Correntista tentando conta alheia → 403
  - Criar endpoint [Authorize(Roles = "Admin")] para gerenciar usuários
  - Registrar AppUserClaimsPrincipalFactory no DI

quiz:
  Q1: Quando usar roles e quando usar claims para controle de acesso?
      [Sempre usar claims — são mais modernas, Roles para categorias de usuário
       (perfis do sistema). Claims para contexto de negócio específico —
       qual conta acessa, qual departamento, qual limite aprovável.
       Claims capturam granularidade que roles não conseguem,
       Roles são legado — substituídas por claims, São equivalentes]
      Resposta: 1

  Q2: Por que não colocar o saldo da conta como claim no JWT?
      [Claims têm limite de tamanho, O JWT tem vida de 60 minutos — o saldo
       ficaria desatualizado rapidamente. Claims devem ser dados estáticos.
       Dados dinâmicos precisam ser buscados no banco por request,
       Claims numéricas não são suportadas, Por causa do LGPD]
      Resposta: 1

  Q3: Qual HTTP status code correto para usuário autenticado sem permissão para o recurso?
      [401 Unauthorized, 403 Forbidden — autenticado com sucesso mas sem
       permissão para aquele recurso específico. 401 indica falha de autenticação;
       403 indica autenticação OK mas autorização negada,
       404 Not Found — para esconder a existência do recurso,
       422 Unprocessable Entity]
      Resposta: 1

Entregue o .jsx completo ao final.
```

---

### 🔧 PROMPT F5-4 — Módulo 19 (Autorização e Políticas)

```
[CONTEXTO: Fase 5 — Etapa F5-4: Módulo 19 — Autorização e Políticas]
[ENTRADA: Cole aqui o .jsx completo após F5-3]

Substitua o conteúdo placeholder dos 4 tópicos do Módulo 19.

════════════════════════════════════════════════════
TÓPICO 19.1 — [Authorize]: roles, claims e políticas
════════════════════════════════════════════════════
theory:
  Níveis de autorização no ASP.NET Core:
  1. [Authorize] — qualquer autenticado.
  2. [Authorize(Roles = "Admin")] — role específica.
  3. [Authorize(Roles = "Admin,Gerente")] — qualquer role (OR).
  4. Múltiplos [Authorize] empilhados — TODAS as condições (AND).
  5. [Authorize(Policy = "NomeDaPolicy")] — lógica arbitrária.

  [AllowAnonymous]: substitui qualquer [Authorize] — acesso público garantido.

  CONVENÇÃO MAIS SEGURA — SetFallbackPolicy:
  Todos os endpoints protegidos por padrão no Program.cs.
  Endpoints públicos recebem [AllowAnonymous] explicitamente.
  Isso evita esquecer [Authorize] em endpoints sensíveis — o erro mais comum.

  IAuthorizationService: verificações programáticas dentro de serviços.

code:
  // Todos os níveis em prática
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
  public async Task<IActionResult> Login() { ... }

checklist:
  - Adicionar SetFallbackPolicy no Program.cs
  - Verificar que todos os endpoints de auth usam [AllowAnonymous]
  - Testar: endpoint sem [AllowAnonymous] retorna 401 sem token?
  - Criar endpoint [Authorize(Roles = "Admin,Gerente")] para relatórios
  - Testar que Correntista recebe 403 em endpoint de Gerente

quiz:
  Q1: O que SetFallbackPolicy com RequireAuthenticatedUser faz?
      [Define a política padrão apenas para controllers com [ApiController], Torna
       todos os endpoints protegidos por padrão — qualquer endpoint sem
       [AllowAnonymous] exige autenticação. Previne esquecer [Authorize]
       em endpoints sensíveis,
       Desabilita a autenticação anônima, Afeta apenas a página inicial]
      Resposta: 1

  Q2: Como fazer um endpoint exigir DUAS condições simultaneamente (AND)?
      [Separar com vírgula em um único [Authorize], Aplicar múltiplos atributos
       [Authorize] empilhados — cada um cria uma camada independente que TODAS
       devem ser satisfeitas. [Authorize(Roles="A,B")] é OR; dois [Authorize]
       empilhados é AND,
       Usar [Authorize(Policy = "AeB")] com lógica OR,
       Não é possível nativo no ASP.NET Core]
      Resposta: 1

  Q3: Qual a diferença entre 401 e 403 em resposta de autorização?
      [São equivalentes, 401 Unauthorized: não autenticado ou token inválido.
       403 Forbidden: autenticado com sucesso mas sem permissão para o recurso.
       Retornar 401 quando deveria ser 403 vaza informação sobre a proteção,
       401 é para APIs REST e 403 para web apps,
       403 indica erro de servidor]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 19.2 — Policy-based authorization com requirements
════════════════════════════════════════════════════
theory:
  Quando roles não bastam: "Gerentes aprovam transferências apenas da própria agência"
  não é expressável com roles simples.

  Policy-based: lógica de autorização como classes testáveis com DI.
  IAuthorizationRequirement: marcador — define o que precisa ser verdade.
  IAuthorizationHandler: implementa como verificar a condição.
  AuthorizationPolicy: combina requirements em uma política nomeada.

  Registro: AddAuthorization(options => options.AddPolicy(...)) no Program.cs.
  Handler no DI: AddScoped<IAuthorizationHandler, MeuHandler>().
  [Authorize(Policy = "NomeDaPolicy")] no controller.

  Vantagem sobre roles: classes com DI — podem acessar banco, configurações, contexto.
  São testáveis isoladamente sem subir o controller.

code:
  // Requirement: transferências acima de R$ 10.000 exigem role Gerente
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
      var body  = _httpContextAccessor.HttpContext!.Request;
      // Lê valor do body (simplificado — em produção usar IBodyValidator)
      var isGerente = context.User.IsInRole("Gerente");
      var isAdmin   = context.User.IsInRole("Admin");

      // Gerente e Admin passam sempre; Correntista tem limite
      if (isGerente || isAdmin)
        context.Succeed(requirement);
      // Caso contrário, verificar o valor no handler real (acesso ao body)

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
  public async Task<IActionResult> Transferir([FromBody] TransferenciaRequest req) { ... }

checklist:
  - Criar LimiteTransferenciaRequirement e Handler separados
  - Registrar handler como Scoped no DI
  - Testar: Correntista com valor > R$10.000 recebe 403
  - Testar: Gerente com qualquer valor recebe 200
  - Escrever teste unitário do handler isolado (sem controller)

quiz:
  Q1: Por que Policy-based authorization é superior a Role-based para lógica de negócio?
      [Policies são mais rápidas, Policies são classes com DI — acessam banco,
       configurações, contexto da request. Roles são flags simples. Além disso,
       policies são testáveis isoladamente como classes normais,
       Policies substituem completamente as Roles,
       Roles são legado e foram depreciadas]
      Resposta: 1

  Q2: Qual a diferença entre context.Succeed() e context.Fail() em um handler?
      [São equivalentes, Succeed() indica que o requirement foi satisfeito.
       Fail() marca explicitamente como falha — outros handlers não podem
       sobrescrever. Se nenhum handler chamar Succeed(), o requirement falha
       e o acesso é negado,
       Succeed() retorna 200, Fail() lança exceção]
      Resposta: 1

  Q3: Como testar um AuthorizationHandler em isolamento?
      [Não é possível — handlers precisam da aplicação, Instanciar o handler,
       criar AuthorizationHandlerContext com claims simuladas e verificar se
       Succeed ou Fail foi chamado — sem subir controller ou WebApplicationFactory,
       Usar apenas testes de integração para handlers,
       Mockar IAuthorizationService]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 19.3 — Resource-based authorization
════════════════════════════════════════════════════
theory:
  O problema que roles e policies simples não resolvem:
  "Este Correntista pode ver ESTA conta específica?"
  A verificação precisa do recurso concreto.

  IAuthorizationService.AuthorizeAsync(user, resource, "NomeDaPolicy").
  IAuthorizationHandler<TRequirement, TResource>: handler tipado que recebe
  requirement E recurso.

  Quando usar: verificar propriedade de recurso, estado do recurso,
  combinação de dados do usuário com dados do recurso.

  Padrão: buscar o recurso → verificar autorização → processar ou 403.

code:
  // Requirement e Handler para propriedade de conta
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
  }

checklist:
  - Criar ContaProprietarioHandler tipado com Conta como resource
  - Injetar IAuthorizationService no ContasController
  - Implementar o fluxo: buscar → autorizar → processar
  - Testar: Correntista A não pode ver extrato da Conta B (403)
  - Testar: Admin pode ver qualquer extrato (200)

quiz:
  Q1: Por que resource-based authorization precisa buscar o recurso antes de autorizar?
      [Por cache de performance, A verificação depende de atributos do recurso
       (a quem pertence? qual o status?) que só estão disponíveis após buscar.
       Role-based verifica apenas o token; resource-based verifica token + recurso,
       IAuthorizationService exige o objeto como parâmetro sempre,
       É apenas uma convenção de código]
      Resposta: 1

  Q2: Qual a ordem correta no controller para resource-based authorization?
      [Autorizar → buscar → processar, Buscar o recurso (para saber se existe)
       → verificar autorização → processar apenas se autorizado. Buscar antes
       permite retornar 404 adequado antes de tentar autorizar,
       Processar → autorizar → retornar, A ordem não importa para o resultado]
      Resposta: 1

  Q3: Por que o handler é tipado como AuthorizationHandler<TRequirement, TResource>?
      [Para melhor performance, Type safety — o handler recebe o recurso como
       o tipo correto sem casting manual. O erro de tipo é visível em compile
       time, não em runtime,
       Apenas convenção sem impacto técnico,
       Para compatibilidade com EF Core]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 19.4 — CORS: configuração segura e armadilhas
════════════════════════════════════════════════════
theory:
  CORS: restrição do browser que impede sites maliciosos de fazer requests
  autenticadas para sua API usando as credenciais do usuário.

  ARMADILHA CRÍTICA:
  AllowAnyOrigin() + AllowCredentials() = INVÁLIDO pela spec CORS.
  O browser BLOQUEIA respostas com Access-Control-Allow-Origin: * e
  Access-Control-Allow-Credentials: true combinados. Para credentials,
  a origem DEVE ser explícita — nunca wildcard.

  Funcionamento:
  Requests com credenciais (Authorization header, cookies): browser envia
  preflight OPTIONS antes do request real. O servidor responde com os
  headers CORS permitidos.

  Preflight sem token: se UseAuthentication rodar antes de UseCors,
  o preflight (sem token) recebe 401 e o browser interpreta como CORS bloqueado.
  Por isso: app.UseCors() ANTES de app.UseAuthentication().

  CORS não é segurança server-side: ferramentas como curl ignoram CORS.
  CORS nunca substitui autenticação e autorização.

code:
  // ❌ ANTI-PATTERNS:
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
  app.UseAuthorization();

checklist:
  - Criar policies separadas: Development e Production
  - Verificar: AllowAnyOrigin e AllowCredentials NÃO estão juntas
  - Verificar que app.UseCors() está ANTES de app.UseAuthentication()
  - Testar no browser: request de localhost:3000 para a API funciona?
  - Verificar que origem não listada recebe erro de CORS no browser

quiz:
  Q1: Por que AllowAnyOrigin() + AllowCredentials() não funciona?
      [É limitação do ASP.NET Core, A spec CORS proíbe Access-Control-Allow-Origin: *
       combinado com Access-Control-Allow-Credentials: true. O browser bloqueia
       a resposta por segurança. Para credenciais, a origem deve ser explícita,
       É uma configuração válida mas não recomendada,
       Apenas para requests HTTP, não HTTPS]
      Resposta: 1

  Q2: CORS impede que um atacante com curl acesse sua API sem autenticação?
      [Sim — CORS bloqueia todos acessos não autorizados, Não — CORS é aplicado
       pelo browser para proteger o usuário. Ferramentas como curl, Postman e
       código server-side ignoram CORS completamente. CORS nunca substitui
       autenticação e autorização,
       Depende da configuração AllowCredentials,
       CORS bloqueia IPs não listados nas origens]
      Resposta: 1

  Q3: Por que app.UseCors() deve vir antes de app.UseAuthentication()?
      [É apenas convenção, Preflight requests (OPTIONS) chegam sem token de
       autenticação. Se UseAuthentication rodar antes de UseCors, o preflight
       recebe 401 antes de ter chance de retornar os headers CORS —
       o browser interpreta como CORS bloqueado,
       UseCors depende do Identity para funcionar,
       A ordem não impacta o comportamento]
      Resposta: 1

Entregue o .jsx completo ao final.
```

---

### 🔧 PROMPT F5-5 — Módulo 20 (Segurança na Prática)

```
[CONTEXTO: Fase 5 — Etapa F5-5: Módulo 20 — Segurança na Prática]
[ENTRADA: Cole aqui o .jsx completo após F5-4]

Substitua o conteúdo placeholder dos 4 tópicos do Módulo 20.
Este módulo conecta toda a Fase 5 com práticas operacionais e fecha
o ciclo ligando segurança de volta aos testes da Fase 4.

════════════════════════════════════════════════════
TÓPICO 20.1 — HTTPS, HSTS e segredos fora do código
════════════════════════════════════════════════════
theory:
  HTTPS obrigatório para APIs com autenticação: sem HTTPS, tokens JWT viajam
  em texto puro — interceptáveis por qualquer observador na rede.
  app.UseHttpsRedirection(): redireciona HTTP → HTTPS automaticamente.

  HSTS (HTTP Strict Transport Security):
  Instrui o browser a NUNCA usar HTTP para o domínio por um período.
  app.UseHsts() — apenas em produção (dev usa HTTP localmente).
  Por que não em dev: browser memorizaria localhost como HTTPS-only e
  quebraria outros projetos HTTP na mesma porta.

  GERENCIAMENTO DE SEGREDOS:
  Anti-pattern: segredos no código ou no appsettings.json versionado →
  comprometimento imediato se o repositório for público ou clonado.

  Desenvolvimento: dotnet user-secrets (fora do repositório)
    dotnet user-secrets init
    dotnet user-secrets set "Jwt:SecretKey" "valor-seguro"
    Armazenado em ~/.microsoft/usersecrets/ — não vai para o git.

  Produção: variáveis de ambiente + gerenciadores de segredo:
    Azure Key Vault, AWS Secrets Manager, HashiCorp Vault.
    Rotação automática, auditoria de acesso, versionamento, revogação sem redeploy.

  .gitignore obrigatório: appsettings.Production.json, *.pfx, .env, secrets.json.

  Se um segredo for comitado acidentalmente: considerá-lo COMPROMETIDO
  e rotacioná-lo imediatamente. git rm não apaga o histórico.

code:
  // Program.cs — segurança de transporte
  if (!app.Environment.IsDevelopment())
    app.UseHsts();           // apenas produção
  app.UseHttpsRedirection(); // sempre

  // User Secrets — fluxo completo
  // 1. Inicializar (uma vez)
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
  // Exemplo: "xK9mP2vQ8nL3jR7wT1yU5bH6cF4dE0aG+iZ2nS="

checklist:
  - Configurar UseHttpsRedirection() e UseHsts() no Program.cs
  - Mover Jwt:SecretKey para User Secrets
  - Mover ConnectionString para User Secrets
  - Verificar .gitignore: appsettings.Production.json está listado?
  - Verificar histórico: git log --all -- appsettings.json — há segredos?

quiz:
  Q1: Por que HSTS é configurado apenas em produção e não em desenvolvimento?
      [Desenvolvimento não precisa de HTTPS, Em desenvolvimento, HTTPS usa
       certificados auto-assinados. Se HSTS fosse ativado, o browser memorizaria
       localhost como HTTPS-only e quebraria outros projetos HTTP na mesma porta,
       HSTS não funciona com certificados Let's Encrypt, É limitação do Kestrel]
      Resposta: 1

  Q2: O que acontece se um segredo for acidentalmente comitado no git?
      [Pode ser resolvido com git rm, O segredo deve ser considerado COMPROMETIDO
       e rotacionado imediatamente — o git preserva o histórico completo e
       ferramentas como truffleHog fazem scan automático em repositórios,
       Apenas o branch main importa, git rebase resolve o problema]
      Resposta: 1

  Q3: Qual a principal vantagem de Azure Key Vault sobre variáveis de ambiente?
      [Variáveis são mais seguras, Gerenciadores oferecem: rotação automática,
       auditoria de acesso (quem acessou quando), versionamento de segredos e
       revogação sem redeploy — variáveis de ambiente têm nenhuma dessas
       capacidades,
       São equivalentes em segurança, Variáveis são sempre suficientes]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 20.2 — Rate Limiting e proteção contra brute-force
════════════════════════════════════════════════════
theory:
  Brute-force em auth: sem limitação, 1 milhão de tentativas de senha é trivial.

  DUAS CAMADAS COMPLEMENTARES:
  1. Identity Lockout (Módulo 18): bloqueia a CONTA após N falhas.
     Limitação: não protege contra ataques distribuídos (muitos IPs, poucas
     tentativas por IP) ou ataques a muitas contas simultaneamente.
  2. Rate Limiting por IP: limita o ENDPOINT independente da conta.

  .NET 8 tem Rate Limiting nativo (System.Threading.RateLimiting).
  Algoritmos:
    Fixed Window: N requests por janela fixa — bursty no início da janela.
    Sliding Window: N requests em janela deslizante — distribuição suave.
    Token Bucket: acumula tokens, consome 1 por request — bursts controlados.
    Concurrency Limiter: N requests simultâneos.

  Configuração recomendada para auth:
    POST /auth/login:    5 tentativas/minuto por IP → Fixed Window.
    POST /auth/register: 3 cadastros/hora por IP → Sliding Window.
    POST /auth/refresh:  10 por minuto por IP → Fixed Window.

  Response: 429 Too Many Requests + header Retry-After.

code:
  // Program.cs — Rate Limiting nativo do .NET 8
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
  public async Task<IActionResult> Register(...) { ... }

checklist:
  - Adicionar builder.Services.AddRateLimiter no Program.cs
  - Criar LoginPolicy (5/min) e RegisterPolicy (3/hora)
  - Adicionar [EnableRateLimiting] nos endpoints de auth
  - Testar: 6 POSTs consecutivos para /auth/login → o 6º retorna 429
  - Verificar que o header Retry-After está presente na resposta 429

quiz:
  Q1: Por que Rate Limiting é necessário mesmo com Identity Lockout configurado?
      [Rate Limiting substitui o Lockout, Lockout bloqueia contas individualmente.
       Um atacante pode tentar N vezes em N contas diferentes sem acionar lockout
       em nenhuma. Rate Limiting por IP limita o volume total de tentativas
       independente de qual conta está sendo atacada,
       São configurações equivalentes e redundantes,
       Rate Limiting é mais efetivo para brute-force direto]
      Resposta: 1

  Q2: Qual a diferença entre Fixed Window e Sliding Window?
      [São algoritmos idênticos com nomes diferentes, Fixed Window reseta o
       contador em intervalos fixos — permite burst no início de cada janela.
       Sliding Window calcula em qualquer janela deslizante — distribui o
       tráfego mais uniformemente e é mais justo para o cliente legítimo,
       Fixed Window é mais seguro, Sliding Window usa mais memória e deve ser evitado]
      Resposta: 1

  Q3: Qual o HTTP status correto quando rate limit é excedido?
      [403 Forbidden, 429 Too Many Requests — com header Retry-After indicando
       quando o cliente pode tentar novamente. 403 indicaria falta de permissão,
       não limite de taxa,
       503 Service Unavailable, 400 Bad Request]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 20.3 — OWASP Top 10 para APIs .NET
════════════════════════════════════════════════════
theory:
  OWASP API Security Top 10 — vulnerabilidades mais críticas de APIs REST.
  Cada uma com o ataque E a defesa em código .NET corporativo.

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
  Defesa: validar tudo que vem de terceiros (FluentValidation — Fase 3).

code:
  // API3 — nunca retornar Entity diretamente
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
    options.Limits.MaxRequestBodySize = 1 * 1024 * 1024); // 1 MB

checklist:
  - Auditar todos os endpoints: algum retorna Entity diretamente? Criar DTOs.
  - Testar BOLA: trocar contaId na URL → deve retornar 403
  - Confirmar que UseDeveloperExceptionPage NÃO roda em produção
  - Configurar MaxRequestBodySize no Kestrel
  - Escanear com OWASP ZAP (gratuito) em ambiente de staging

quiz:
  Q1: O que é BOLA (Broken Object Level Authorization)?
      [Quando o JWT está expirado, Usuário autenticado acessa recursos de outro
       usuário manipulando o ID na URL ou body. A API não verifica se o recurso
       pertence ao requisitante — é a vulnerabilidade mais comum em APIs REST,
       Quando a API não tem autenticação, Quando o CORS está mal configurado]
      Resposta: 1

  Q2: Por que nunca retornar uma Entity ou IdentityUser diretamente na response?
      [Entities são mais lentas para serializar, Entities contêm campos internos
       sensíveis (PasswordHash, SecurityStamp, tokens) que não devem ser expostos.
       DTOs garantem controle explícito sobre o que é retornado,
       O ASP.NET Core não consegue serializar Entities do Identity,
       É apenas prática de arquitetura sem impacto de segurança]
      Resposta: 1

  Q3: O que é Security Misconfiguration (API8)?
      [Um bug no algoritmo de criptografia, Configurações padrão inseguras ou
       esquecidas: CORS AllowAnyOrigin, stack trace em produção, debug habilitado,
       HTTP sem redirect, segredos no appsettings versionado,
       Uso incorreto de JWT, Falta de testes automatizados]
      Resposta: 1

════════════════════════════════════════════════════
TÓPICO 20.4 — Testando segurança: testes de autenticação com xUnit
════════════════════════════════════════════════════
theory:
  Fechando o ciclo: segurança sem testes é segurança não verificada.
  Testes de autenticação garantem que nenhum refactor futuro abre uma brecha.

  CATEGORIAS DE TESTES DE SEGURANÇA:
  1. Acesso negado: endpoint sem token → 401. Role errada → 403. Conta alheia → 403.
  2. Token inválido: expirado → 401. Assinatura alterada → 401. alg:none → 401.
  3. Rate limiting: N+1 requests → 429 com Retry-After.
  4. Rotação de refresh token: mesmo token duas vezes → segundo retorna 401.

  JwtTestHelper: gera tokens com claims arbitrárias para testes.
  Chave de teste específica — nunca a chave de produção no repositório.

code:
  // JwtTestHelper — tokens de teste com claims customizadas
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
    private readonly HttpClient _client;
    private readonly Guid _contaA = Guid.NewGuid();
    private readonly Guid _contaB = Guid.NewGuid();

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
  }

checklist:
  - Criar JwtTestHelper com GerarToken, GerarTokenExpirado, GerarTokenAdmin
  - Implementar os 5 testes de segurança do exemplo
  - Adicionar teste de BOLA: conta alheia → 403
  - Verificar que testes de segurança fazem parte do CI (rodam no pipeline)
  - Criar teste que verifica stack trace não aparece em respostas de erro

quiz:
  Q1: Por que testes de segurança automatizados são essenciais para sistemas financeiros?
      [São opcionais — auditoria manual é suficiente, Garantem que nenhuma mudança
       futura introduz regressão de segurança sem detecção. Uma brecha em produção
       em sistema financeiro causa perdas financeiras e responsabilidade legal,
       Testes de segurança só funcionam com ferramentas especializadas,
       São equivalentes à revisão manual de código]
      Resposta: 1

  Q2: Por que usar chave JWT específica nos testes em vez da chave de produção?
      [Para simplificar o código de teste, A chave de produção não deve estar no
       repositório de código. Uma chave de teste específica permite que os testes
       rodem sem acesso a segredos de produção, mantendo separação de ambientes,
       A chave de produção não funciona em testes, São equivalentes em segurança]
      Resposta: 1

  Q3: O que deve ser verificado em um teste de rotação de Refresh Token?
      [Apenas que o novo token funciona, Que o token original foi revogado
       (segundo uso retorna 401) E que o novo token funciona (primeiro uso OK).
       Verificar ambos garante atomicidade — o antigo não pode ser reutilizado
       após o novo ser emitido,
       Apenas que o usuário continua autenticado, A expiração do novo token]
      Resposta: 1

Entregue o .jsx completo ao final.
```

---

### 🔧 PROMPT F5-6 — Projeto Final + Revisão Geral

```
[CONTEXTO: Fase 5 — Etapa F5-6: Projeto Final + Revisão]
[ENTRADA: Cole aqui o .jsx completo após F5-5]

1. ADICIONE O TÓPICO PROJETO FINAL (m20proj):

id: 'm20proj', moduleId: 'm20'
title: '🔐 Projeto: Auth Service Completo'

theory:
  Auth Service completo integrando todos os módulos da Fase 5
  e protegendo os endpoints do Sistema Financeiro da Fase 3.

  ENDPOINTS IMPLEMENTADOS:
  POST /auth/register         — cadastro com FluentValidation, criação de Conta, e-mail
  GET  /auth/confirm-email    — confirmação de e-mail via token
  POST /auth/login            — retorna AccessToken + RefreshToken (lockout + rate limit)
  POST /auth/refresh          — rotação de Refresh Token com detecção de replay
  POST /auth/logout           — revogação do Refresh Token atual
  GET  /auth/me               — dados do usuário autenticado (via claims)
  POST /auth/change-password  — troca senha + revoga todos os Refresh Tokens

  PROTEÇÃO DO SISTEMA FINANCEIRO:
  GET  /api/contas/{id}               → [Authorize] + ContaProprietario policy
  GET  /api/contas/{id}/extrato       → resource-based authorization
  POST /api/contas/{id}/depositar     → [Authorize(Roles="Correntista,Gerente")]
  POST /api/transferencias            → [Authorize] + LimiteTransferencia policy
  GET  /api/relatorios/consolidado    → [Authorize(Roles="Gerente,Admin")]
  DELETE /api/usuarios/{id}           → [Authorize(Roles="Admin")]

  SEGURANÇA DA INFRAESTRUTURA:
  - Rate Limiting em todos os /auth/* endpoints
  - CORS: policies separadas para Development e Production
  - HTTPS + HSTS habilitados (HSTS apenas em produção)
  - User Secrets para todos os segredos em desenvolvimento
  - Exception handler genérico em produção
  - Logs de auditoria: login, logout, troca de senha, tentativas falhas

  ORDEM DOS MIDDLEWARES (crítica):
  UseHttpsRedirection → UseHsts → UseCors → UseRateLimiter
  → UseAuthentication → UseAuthorization → MapControllers

  GITFLOW:
  feature/auth-jwt-tokens
  feature/auth-identity-setup
  feature/auth-endpoints
  feature/auth-protect-financial
  feature/auth-security-tests
  release/v3.0.0-auth-service

code:
  Program.cs final com a ordem correta de middlewares e todos os registros de serviço.
  Estrutura de projetos atualizada:
  SistemaFinanceiro.sln
  ├── Domain/        (Fases 3 — Conta + nova: RefreshToken entity)
  ├── Application/   (Fase 3 — Use Cases + nova: Auth Use Cases)
  ├── Infrastructure/(Fase 3 — EF Core + nova: Identity tables, RefreshTokenRepo)
  └── API/           (Fase 3 — Controllers + nova: AuthController, middlewares)

checklist:
  - Implementar todos os 7 endpoints de /auth/*
  - Proteger todos os 6 endpoints do Sistema Financeiro com policies corretas
  - Testar o fluxo completo: registro → confirmação → login → uso → refresh → logout
  - Executar todos os testes de segurança do Tópico 20.4: 100% pass
  - Rodar dotnet test com cobertura — auth deve ter 75%+ cobertura
  - Criar release/v3.0.0-auth-service via GitFlow

quiz:
  Q1: Qual a ordem correta dos middlewares de segurança no pipeline ASP.NET Core?
      [Qualquer ordem funciona, UseCors → UseRateLimiter → UseAuthentication →
       UseAuthorization. CORS antes porque preflight não tem token. Rate Limiter
       antes de Authentication para bloquear antes de processar o token.
       Authentication antes de Authorization para identificar antes de autorizar,
       UseAuthorization → UseAuthentication → UseCors,
       UseAuthentication → UseCors → UseRateLimiter]
      Resposta: 1

  Q2: Por que change-password deve revogar todos os Refresh Tokens do usuário?
      [Para simplificar o código, Se a senha foi comprometida (motivo provável
       da troca), os Refresh Tokens emitidos antes podem estar comprometidos.
       Revogar todos força reautenticação em todos os dispositivos, eliminando
       qualquer acesso indevido pendente,
       É exigência do ASP.NET Identity, Os Refresh Tokens expiram automaticamente]
      Resposta: 1

  Q3: Por que registrar logs de auditoria em um sistema financeiro?
      [Para debug de erros técnicos, Para rastrear acessos suspeitos e atender
       requisitos regulatórios — sistemas financeiros devem responder "quem
       acessou o quê e quando" em uma auditoria. LGPD e regulações do Banco
       Central exigem rastreabilidade,
       Os logs são opcionais em sistemas internos,
       Para melhorar a performance]
      Resposta: 1

═══════════════════════════════════════════════════
2. REVISÃO COMPLETA — CHECKLIST DE QUALIDADE
═══════════════════════════════════════════════════

SEGURANÇA DO CONTEÚDO (crítico — verificar com atenção redobrada):
[ ] Nenhum exemplo final tem segredo hardcoded — todos usam config/User Secrets
[ ] BCrypt com work factor 12 em todos os exemplos de senha
[ ] Refresh Token armazenado como hash SHA256 em todos os exemplos
[ ] AllowAnyOrigin + AllowCredentials não aparecem juntos em nenhum exemplo
[ ] Login sempre retorna "E-mail ou senha inválidos" (mensagem genérica)
[ ] ValidateIssuerSigningKey = true em todas as configurações JWT
[ ] ValidAlgorithms explícito em todas as configurações JWT

MÓDULO 17 — JWT:
[ ] Ataque alg:none demonstrado e a defesa mostrada em código
[ ] ClockSkew = Zero com justificativa financeira explicada
[ ] Refresh Token com hash, rotação e detecção de replay

MÓDULO 18 — Identity:
[ ] ApplicationUser customizado com ContaId vinculado à Conta da Fase 3
[ ] BCrypt via IPasswordHasher customizado (não PBKDF2 padrão)
[ ] Lockout: 5 tentativas, 15 minutos

MÓDULO 19 — Autorização:
[ ] SetFallbackPolicy configurado — todos protegidos por padrão
[ ] LimiteTransferencia policy com Requirement + Handler separados
[ ] ContaProprietario resource-based authorization implementado
[ ] CORS policies separadas: Development e Production

MÓDULO 20 — Prática:
[ ] OWASP BOLA e API3 com código de ataque e defesa .NET
[ ] Rate Limiting com 429 e Retry-After nos endpoints de auth
[ ] JwtTestHelper com GerarToken, GerarTokenExpirado, GerarTokenAdmin
[ ] 5+ testes de segurança passando

SISTEMA REACT:
[ ] Fases 1–4 continuam sem regressões
[ ] Fase 5 desbloqueia após Fase 4 completa
[ ] ALL_PHASES tem 5 entradas
[ ] XP e timer da Fase 5 funcionam corretamente

Entregue o .jsx completo e funcional ao final.
```

---

## PARTE 4 — DICAS ESPECÍFICAS DA FASE 5

### Pacotes NuGet que aparecem nos exemplos

```xml
<!-- Identity -->
<PackageReference Include="Microsoft.AspNetCore.Identity.EntityFrameworkCore" Version="8.0.*" />

<!-- JWT -->
<PackageReference Include="Microsoft.AspNetCore.Authentication.JwtBearer" Version="8.0.*" />
<PackageReference Include="System.IdentityModel.Tokens.Jwt" Version="7.5.*" />

<!-- BCrypt -->
<PackageReference Include="BCrypt.Net-Next" Version="4.0.*" />

<!-- Rate Limiting — nativo no .NET 8 (System.Threading.RateLimiting no SDK) -->
```

### Ordem obrigatória dos middlewares

```csharp
// Esta ordem é crítica — errar quebra silenciosamente
app.UseHttpsRedirection();
app.UseHsts();           // apenas !IsDevelopment()
app.UseCors();           // antes de auth — preflight OPTIONS não tem token
app.UseRateLimiter();    // antes de auth — bloquear antes de processar o token
app.UseAuthentication(); // identificar quem é o usuário
app.UseAuthorization();  // decidir o que o usuário pode fazer
app.MapControllers();
```

### Estratégia para arquivo muito grande

```
"Entregue em 3 partes:
- Parte A: FASE1_DATA + FASE2_DATA + FASE3_DATA + FASE4_DATA (sem alterações)
- Parte B: FASE5_DATA completo (módulos 17, 18, 19, 20 e projeto final)
- Parte C: ALL_PHASES e todos os componentes React
Concatenarei na ordem A + B + C."
```

### Verificação rápida após cada etapa

```javascript
// No console do browser:
const f5 = FASE5_DATA
console.log("Módulos:", f5.length)                                  // 4
console.log("Tópicos:", f5.flatMap(m => m.topics).length)          // 16
console.log("Tem BCrypt:", f5[1].topics[1].code.includes("BCrypt")) // true
console.log("Sem hardcoded:", !f5[0].topics[0].code.includes('"secret"')) // true
console.log("All phases:", ALL_PHASES.length)                       // 5
```

### Conexão com as próximas fases

A Fase 5 prepara diretamente para:
- **Fase 6 (Docker + CI/CD)** — Auth Service vai para container Docker; variáveis de ambiente substituem User Secrets; o pipeline CI/CD roda os testes de segurança automaticamente
- **Fase 7 (SonarCloud)** — as OWASP rules do SonarCloud detectam exatamente as vulnerabilidades do Módulo 20.3 (hardcoded secrets, weak crypto, CORS misconfiguration)
- **Fase 8 (RabbitMQ)** — `UsuarioCadastrado` e `SenhaAlterada` se tornam Domain Events publicados no broker de mensagens
- **Fase 9 (Scrum)** — o Auth Service é o módulo de infraestrutura central do projeto final ERP

> **Insight pedagógico:** Segurança é a única área onde a ignorância é mais cara
> do que o erro. Um desenvolvedor que não conhece BOLA vai implementar a brecha
> sem perceber. Por isso cada tópico desta fase mostra o ataque antes da defesa —
> o aluno precisa conhecer o adversário para saber por que a proteção existe.
