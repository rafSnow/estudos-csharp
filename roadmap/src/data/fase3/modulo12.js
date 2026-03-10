export const MODULO_12 = {
  id: "m12",
  title: "FluentValidation",
  icon: "✅",
  week: "Semana 12",
  color: "#F59E0B",
  topics: [
    {
      id: "m12t1",
      moduleId: "m12",
      title: "Validators e Regras Básicas",
      theory: `Por que FluentValidation em vez de Data Annotations? Data Annotations ([Required], [MaxLength]) poluem o modelo com atributos de validação, não suportam lógica condicional complexa, são difíceis de testar isoladamente e misturam responsabilidades (o modelo sabe como se validar — violação de SRP). FluentValidation resolve tudo isso: validação como classe separada, fluent API legível, testável independentemente e com suporte a regras complexas e mensagens em português.

A base: AbstractValidator<T>. Todo validator herda dessa classe e define regras no construtor. Regras básicas mais usadas: NotEmpty (campo obrigatório), NotNull, MaximumLength/MinimumLength (tamanho de strings), GreaterThan/LessThan (valores numéricos), InclusiveBetween (faixas), Must (lógica customizada inline), EmailAddress (formato de email), Matches (regex).

Mensagens customizadas: cada regra pode ter .WithMessage("CPF inválido: {PropertyValue}"). Placeholders como {PropertyName} e {PropertyValue} são preenchidos automaticamente. Em projetos corporativos brasileiros, mensagens DEVEM estar em português — o usuário final não lê inglês.

Severidades: Error (padrão, bloqueia a operação), Warning (alerta sem bloquear) e Info (informativo). No sistema financeiro, "Saldo baixo" pode ser Warning enquanto "CPF inválido" é Error.

Instalação: dotnet add package FluentValidation.AspNetCore (versão 11.x para .NET 8). O pacote .AspNetCore já inclui integração com DI e pipeline do ASP.NET. Empresas como Nubank e PicPay padronizaram FluentValidation em todos os projetos .NET — Data Annotations virtual não existem em projetos sérios.

A grande vantagem para testes: um validator é testável SEM subir a API. Basta instanciar, chamar .Validate() e verificar o resultado. Zero infraestrutura necessária.`,
      code: `// ══════════════════════════════════════════════
// ❌ ANTES — Data Annotations poluindo o modelo
// ══════════════════════════════════════════════
public class CriarContaRequest
{
    [Required(ErrorMessage = "CPF is required")]
    [StringLength(11, MinimumLength = 11)]
    public string Cpf { get; set; }

    [Required]
    [MinLength(3)]
    [MaxLength(100)]
    public string Nome { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Range(0, double.MaxValue)]
    public decimal SaldoInicial { get; set; }

    // Problemas:
    // 1. Mensagens em inglês misturadas com português
    // 2. Validação de CPF algorítmica? Impossível aqui
    // 3. Para testar, precisa subir o controller inteiro
    // 4. Modelo mistura dados + regras (viola SRP)
    // 5. Lógica condicional? Gambiarra + atributos custom
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — FluentValidation: limpo e testável
// ══════════════════════════════════════════════
using FluentValidation;

// Modelo LIMPO — sem atributos de validação
public record CriarContaRequest(
    string Cpf,
    string Nome,
    string Email,
    decimal SaldoInicial
);

// Validator SEPARADO — classe própria, SRP respeitado
public class CriarContaRequestValidator
    : AbstractValidator<CriarContaRequest>
{
    public CriarContaRequestValidator()
    {
        RuleFor(x => x.Cpf)
            .NotEmpty()
                .WithMessage("CPF é obrigatório")
            .Length(11)
                .WithMessage("CPF deve ter 11 dígitos")
            .Must(ValidarCpf)
                .WithMessage("CPF inválido: {PropertyValue}");

        RuleFor(x => x.Nome)
            .NotEmpty()
                .WithMessage("Nome é obrigatório")
            .MinimumLength(3)
                .WithMessage("Nome deve ter no mínimo 3 caracteres")
            .MaximumLength(100)
                .WithMessage("Nome deve ter no máximo 100 caracteres");

        RuleFor(x => x.Email)
            .NotEmpty()
                .WithMessage("Email é obrigatório")
            .EmailAddress()
                .WithMessage("Formato de email inválido");

        RuleFor(x => x.SaldoInicial)
            .GreaterThanOrEqualTo(0)
                .WithMessage("Saldo inicial não pode ser negativo");
    }

    private static bool ValidarCpf(string cpf)
    {
        if (string.IsNullOrWhiteSpace(cpf)) return false;
        var limpo = new string(cpf.Where(char.IsDigit).ToArray());
        if (limpo.Length != 11) return false;
        if (limpo.Distinct().Count() == 1) return false;
        // Validação dos dígitos verificadores
        var soma1 = 0;
        for (int i = 0; i < 9; i++)
            soma1 += (limpo[i] - '0') * (10 - i);
        var dig1 = 11 - (soma1 % 11);
        if (dig1 >= 10) dig1 = 0;
        if ((limpo[9] - '0') != dig1) return false;
        var soma2 = 0;
        for (int i = 0; i < 10; i++)
            soma2 += (limpo[i] - '0') * (11 - i);
        var dig2 = 11 - (soma2 % 11);
        if (dig2 >= 10) dig2 = 0;
        return (limpo[10] - '0') == dig2;
    }
}

// Validator de Transferência
public class RealizarTransferenciaRequestValidator
    : AbstractValidator<RealizarTransferenciaRequest>
{
    public RealizarTransferenciaRequestValidator()
    {
        RuleFor(x => x.Valor)
            .GreaterThan(0)
                .WithMessage("Valor deve ser positivo")
            .LessThanOrEqualTo(50_000m)
                .WithMessage("Valor máximo por transferência: R\\$50.000");

        RuleFor(x => x.ContaDestinoId)
            .NotEmpty()
                .WithMessage("Conta destino é obrigatória");
    }
}

// ── Teste unitário do Validator (SEM ASP.NET) ──
using FluentAssertions;

[Fact]
public void CriarConta_CpfInvalido_DeveRetornarErro()
{
    var validator = new CriarContaRequestValidator();
    var request = new CriarContaRequest(
        Cpf: "12345",  // CPF inválido
        Nome: "João Silva",
        Email: "joao@email.com",
        SaldoInicial: 100m
    );

    var result = validator.Validate(request);

    result.IsValid.Should().BeFalse();
    result.Errors.Should().Contain(e =>
        e.PropertyName == "Cpf");
}

[Fact]
public void CriarConta_DadosValidos_DevePassar()
{
    var validator = new CriarContaRequestValidator();
    var request = new CriarContaRequest(
        Cpf: "52998224725", // CPF válido
        Nome: "Maria Santos",
        Email: "maria@email.com",
        SaldoInicial: 500m
    );

    var result = validator.Validate(request);

    result.IsValid.Should().BeTrue();
}`,
      checklist: [
        "Instalar FluentValidation.AspNetCore no projeto API (dotnet add package FluentValidation.AspNetCore)",
        "Criar CriarContaRequestValidator com regras NotEmpty, Length, Must(ValidarCpf) e mensagens em português",
        "Criar RealizarTransferenciaRequestValidator com regras de valor positivo e limite máximo",
        "Testar os validators isoladamente (sem subir a API) — instanciar, Validate(), verificar resultado",
        "Verificar que todas as mensagens de erro estão em português e são descritivas para o usuário final",
      ],
      quiz: [
        {
          question:
            "Qual a principal vantagem do FluentValidation sobre Data Annotations?",
          options: [
            "FluentValidation é mais rápido em runtime",
            "FluentValidation separa a lógica de validação do modelo (SRP), suporta regras complexas e condicionais, e é testável isoladamente sem subir a API",
            "Data Annotations não funciona com .NET 8",
            "FluentValidation gera documentação automática no Swagger",
          ],
          answer: 1,
          explanation:
            "Data Annotations polui o modelo com atributos, não suporta lógica condicional (When/Unless) e exige subir o controller para testar. FluentValidation cria classes separadas (SRP), suporta Must(), When(), MustAsync() e é testável com new Validator().Validate().",
        },
        {
          question: "Como testar um Validator sem subir a API ASP.NET?",
          options: [
            "Não é possível — validators dependem do pipeline HTTP",
            "Instanciando diretamente: new CriarContaRequestValidator(), chamando .Validate(request) e verificando result.IsValid e result.Errors",
            "Usando HttpClient para fazer POST no endpoint",
            "Mockando o AbstractValidator<T> com Moq",
          ],
          answer: 1,
          explanation:
            "Essa é a grande vantagem: var validator = new CriarContaRequestValidator(); var result = validator.Validate(request); — zero infraestrutura. Testa todas as regras em milissegundos, sem banco, sem HTTP, sem DI container.",
        },
        {
          question:
            'O que .WithMessage("CPF inválido: {PropertyValue}") faz no FluentValidation?',
          options: [
            "Lança uma exceção com essa mensagem",
            "Define uma mensagem de erro customizada onde {PropertyValue} é substituído pelo valor real enviado — ex: 'CPF inválido: 12345'",
            "Gera um log com essa mensagem",
            "Exibe um alerta no console do servidor",
          ],
          answer: 1,
          explanation:
            "WithMessage personaliza a mensagem de erro retornada ao cliente. Placeholders como {PropertyValue} (valor enviado), {PropertyName} (nome da propriedade) e {ComparisonValue} (valor de comparação) são preenchidos automaticamente pelo FluentValidation.",
        },
      ],
    },
    {
      id: "m12t2",
      moduleId: "m12",
      title: "Regras Customizadas e Condicionais",
      theory: `FluentValidation brilha em validações complexas que Data Annotations simplesmente não consegue expressar. Must(), Custom(), MustAsync(), When(), Unless(), RuleForEach() e SetValidator() são as ferramentas que transformam validação de "campo obrigatório" em lógica de negócio real.

Must() é a regra customizada inline mais usada. Recebe uma função que retorna bool: .Must(cpf => ValidarDigitosCpf(cpf)). Perfeito para validações que cabem em uma linha. Custom() é para regras mais complexas que precisam adicionar múltiplas mensagens de erro manualmente.

MustAsync() é essencial em sistemas reais: validações que precisam consultar o banco de dados. Exemplo: verificar se o CPF já está cadastrado. MustAsync((cpf, ct) => !repositorio.CpfExisteAsync(cpf, ct)). O CancellationToken é importante para não bloquear threads em consultas demoradas.

Regras condicionais: When() aplica uma regra apenas se uma condição for verdadeira. Exemplo: "Banco destino é obrigatório APENAS quando o tipo é TED" — When(x => x.Tipo == TipoTransferencia.Ted, () => RuleFor(...)). Unless() é o inverso: aplica a regra exceto quando a condição for verdadeira.

Dependência entre propriedades: RuleFor(x => x.DataFim).GreaterThan(x => x.DataInicio) garante que data fim é maior que data início. FluentValidation suporta referências cruzadas nativamente.

RuleForEach() valida cada item de uma coleção individualmente. Se um pedido tem uma lista de itens, cada item precisa de valor positivo e quantidade mínima. SetValidator() compõe validators: o PedidoValidator usa new ItemPedidoValidator() para cada item da lista.

Cascade mode controla o comportamento quando uma regra falha: StopOnFirstFailure para a validação da propriedade no primeiro erro (útil quando regras dependem umas das outras); Continue valida todas as regras e retorna todos os erros de uma vez (melhor UX — mostra todos os problemas).`,
      code: `// ══════════════════════════════════════════════
// ❌ ANTES — Validação com if/else espaguete
// ══════════════════════════════════════════════
public class TransacaoService
{
    public IActionResult Criar(TransacaoRequest req)
    {
        var erros = new List<string>();
        if (req.Valor <= 0)
            erros.Add("Valor inválido");
        if (req.Tipo == "TED" && string.IsNullOrEmpty(req.BancoDestino))
            erros.Add("Banco destino obrigatório para TED");
        if (req.Parcelas != null)
        {
            foreach (var p in req.Parcelas)
            {
                if (p.Valor <= 0) erros.Add("Parcela inválida");
                if (p.DataVencimento < DateTime.Today)
                    erros.Add("Data de parcela no passado");
            }
        }
        if (req.DataVencimento.HasValue &&
            req.DataEmissao.HasValue &&
            req.DataVencimento < req.DataEmissao)
            erros.Add("Datas inconsistentes");
        // 50 linhas de if/else... inmantenível
        if (erros.Any()) return BadRequest(erros);
        // ...
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — FluentValidation: limpo e expressivo
// ══════════════════════════════════════════════

// ── Validator de Parcela (será composto) ───────
public class ParcelaValidator
    : AbstractValidator<ParcelaRequest>
{
    public ParcelaValidator()
    {
        RuleFor(x => x.Valor)
            .GreaterThan(0)
                .WithMessage("Valor da parcela deve ser positivo");

        RuleFor(x => x.DataVencimento)
            .GreaterThanOrEqualTo(DateOnly.FromDateTime(DateTime.Today))
                .WithMessage("Data de vencimento não pode ser no passado");

        RuleFor(x => x.Numero)
            .GreaterThan(0)
                .WithMessage("Número da parcela deve ser positivo");
    }
}

// ── Validator principal com regras condicionais ─
public class TransacaoRequestValidator
    : AbstractValidator<TransacaoRequest>
{
    private readonly IContaRepository _contaRepo;

    // Injeção de dependência no Validator (para MustAsync)
    public TransacaoRequestValidator(
        IContaRepository contaRepo)
    {
        _contaRepo = contaRepo;

        // Regra básica
        RuleFor(x => x.Valor)
            .GreaterThan(0)
                .WithMessage("Valor deve ser positivo")
            .LessThanOrEqualTo(100_000m)
                .WithMessage("Valor máximo: R\\$100.000");

        // Regra CONDICIONAL: banco destino só para TED
        When(x => x.Tipo == TipoTransferencia.Ted, () =>
        {
            RuleFor(x => x.BancoDestino)
                .NotEmpty()
                    .WithMessage("Banco destino é obrigatório para TED");

            RuleFor(x => x.AgenciaDestino)
                .NotEmpty()
                    .WithMessage("Agência destino é obrigatória para TED");
        });

        // Dependência entre propriedades
        RuleFor(x => x.DataVencimento)
            .GreaterThan(x => x.DataEmissao)
                .WithMessage("Data de vencimento deve ser posterior à emissão")
            .When(x => x.DataVencimento.HasValue
                     && x.DataEmissao.HasValue);

        // RuleForEach: valida cada parcela com SetValidator
        RuleForEach(x => x.Parcelas)
            .SetValidator(new ParcelaValidator())
            .When(x => x.Parcelas != null
                     && x.Parcelas.Any());

        // MustAsync: validação assíncrona com banco
        RuleFor(x => x.ContaOrigemId)
            .MustAsync(ContaExisteAsync)
                .WithMessage("Conta de origem não encontrada");

        // Must com lógica customizada inline
        RuleFor(x => x.Descricao)
            .Must(desc => !desc?.Contains("teste",
                StringComparison.OrdinalIgnoreCase) ?? true)
                .WithMessage("Descrição não pode conter 'teste' em produção")
            .When(x => !string.IsNullOrEmpty(x.Descricao));
    }

    // Método assíncrono para validação com banco
    private async Task<bool> ContaExisteAsync(
        Guid contaId, CancellationToken ct)
    {
        var conta = await _contaRepo.GetByIdAsync(
            new ContaId(contaId));
        return conta is not null;
    }
}

// ── Validator composto com Cascade Mode ────────
public class ExtratoFiltroValidator
    : AbstractValidator<ExtratoFiltroRequest>
{
    public ExtratoFiltroValidator()
    {
        // StopOnFirstFailure: se NotEmpty falhar,
        // não tenta GreaterThan (evita NullReference)
        RuleLevelCascadeMode = CascadeMode.Stop;

        RuleFor(x => x.ContaId)
            .NotEmpty()
                .WithMessage("Conta é obrigatória");

        // When: valida datas apenas se ambas preenchidas
        When(x => x.DataInicio.HasValue, () =>
        {
            RuleFor(x => x.DataFim)
                .NotNull()
                    .WithMessage("Informe data fim quando data início é preenchida")
                .GreaterThanOrEqualTo(x => x.DataInicio!.Value)
                    .WithMessage("Data fim deve ser >= data início");
        });

        // Unless: limite obrigatório EXCETO para admin
        RuleFor(x => x.Limite)
            .InclusiveBetween(1, 1000)
                .WithMessage("Limite deve estar entre 1 e 1.000")
            .Unless(x => x.IsAdmin);
    }
}`,
      checklist: [
        "Criar uma regra com Must() que valida CPF pelo algoritmo de dígitos verificadores",
        "Usar When() para aplicar regra de banco destino apenas quando tipo é TED",
        "Criar MustAsync() que verifica se a conta existe no banco via IContaRepository",
        "Usar RuleForEach() com SetValidator() para validar lista de parcelas",
        "Testar isoladamente cada caminho condicional (When/Unless) com dados específicos",
      ],
      quiz: [
        {
          question:
            "Qual a diferença entre Must() e MustAsync() no FluentValidation?",
          options: [
            "Must é mais rápido e MustAsync é mais lento",
            "Must() executa validação síncrona (cálculos, regex); MustAsync() executa validação assíncrona (consultas ao banco, APIs externas) sem bloquear threads",
            "MustAsync só funciona com Entity Framework Core",
            "Não há diferença prática — são alias para o mesmo método",
          ],
          answer: 1,
          explanation:
            "Must(cpf => ValidarDigitos(cpf)) é síncrono — perfeito para cálculos locais. MustAsync((id, ct) => repo.ExisteAsync(id, ct)) é assíncrono — necessário quando a validação depende de I/O (banco, API). Sem async, a thread ficaria bloqueada esperando o banco responder.",
        },
        {
          question: "Quando usar When() no FluentValidation?",
          options: [
            "Sempre, em todas as regras, como boa prática",
            "Quando uma regra só deve ser aplicada se uma condição específica for verdadeira — ex: banco destino obrigatório apenas quando tipo é TED",
            "Apenas para validações assíncronas",
            "Para substituir o operador ternário em C#",
          ],
          answer: 1,
          explanation:
            "When(x => x.Tipo == TED, () => RuleFor(x => x.Banco).NotEmpty()) significa: 'valide banco destino APENAS se tipo for TED'. Para PIX, a regra é ignorada. Unless() é o inverso: aplica a regra EXCETO quando a condição é verdadeira.",
        },
        {
          question: "O que RuleForEach() faz no FluentValidation?",
          options: [
            "Repete a mesma regra várias vezes para um único campo",
            "Aplica um validator a cada item de uma coleção individualmente — cada parcela de um pedido é validada pelo ParcelaValidator",
            "Executa todas as regras em paralelo",
            "Valida apenas o primeiro item da coleção",
          ],
          answer: 1,
          explanation:
            "RuleForEach(x => x.Parcelas).SetValidator(new ParcelaValidator()) aplica todas as regras do ParcelaValidator em CADA parcela da lista. Se a parcela #3 tem valor negativo, o erro especifica exatamente qual parcela falhou. Perfeito para validar listas de itens de pedido, parcelas, etc.",
        },
      ],
    },
    {
      id: "m12t3",
      moduleId: "m12",
      title: "Integração com ASP.NET Core e DI",
      theory: `Integrar FluentValidation com ASP.NET Core e DI é o que transforma validators de "classes avulsas" em uma pipeline de validação automática — onde NENHUM request mal-formado chega ao controller.

Registro automático: builder.Services.AddValidatorsFromAssemblyContaining<CriarContaRequestValidator>() escaneia o assembly inteiro e registra TODOS os validators encontrados no DI container. Chega de registrar um por um. Quando você cria um novo validator, ele já funciona automaticamente.

Customizar a resposta de erro 400: por padrão, ASP.NET retorna um formato genérico. Em projetos corporativos, usamos ProblemDetails (RFC 7807) com lista de erros estruturada — campo, mensagem, severidade. Isso padroniza a resposta para qualquer frontend ou client API.

ValidationBehavior com MediatR Pipeline: o padrão mais elegante. Cria-se um IPipelineBehavior<TRequest, TResponse> que intercepta TODOS os commands antes deles chegarem no handler. Se o request tem um validator registrado, ele é executado automaticamente. O handler NUNCA recebe dados inválidos. Zero código de validação nos controllers ou use cases.

Onde validar: esta é a fronteira clara. FluentValidation na API valida "o request faz sentido técnico?" — formato do CPF, email válido, valor positivo. O Domain valida "a operação é permitida pelo negócio?" — saldo suficiente, conta ativa, limite não excedido. Nunca misture as duas — se o FluentValidation está verificando saldo, algo está errado na arquitetura.

Erro 400 vs 422: 400 Bad Request é para dados malformados (CPF com 5 dígitos); 422 Unprocessable Entity é para dados bem-formados mas semanticamente inválidos (saldo insuficiente). FluentValidation retorna 400; o Domain retorna erros que o middleware mapeia para 422.

Injetar serviços: use o construtor do validator para receber interfaces do DI. TransacaoRequestValidator(IContaRepository repo) permite MustAsync que consulta o banco. O DI container resolve automaticamente quando o validator é usado.`,
      code: `// ══════════════════════════════════════════════
// ❌ ANTES — Validação manual em cada controller
// ══════════════════════════════════════════════
[ApiController]
[Route("api/[controller]")]
public class ContasController : ControllerBase
{
    [HttpPost]
    public IActionResult Criar([FromBody] CriarContaRequest req)
    {
        // Validação manual duplicada em cada endpoint
        var validator = new CriarContaRequestValidator();
        var result = validator.Validate(req);
        if (!result.IsValid)
        {
            var erros = result.Errors
                .Select(e => e.ErrorMessage).ToList();
            return BadRequest(erros); // Formato inconsistente
        }
        // ... lógica
    }

    [HttpPost("transferir")]
    public IActionResult Transferir(
        [FromBody] TransferenciaRequest req)
    {
        // Mesma validação manual... copiar e colar
        var validator = new TransferenciaRequestValidator();
        var result = validator.Validate(req);
        if (!result.IsValid)
            return BadRequest(result.Errors
                .Select(e => e.ErrorMessage));
        // ... lógica
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Pipeline automática com DI
// ══════════════════════════════════════════════

// ── Program.cs: registro centralizado ──────────
var builder = WebApplication.CreateBuilder(args);

// Registra TODOS os validators do assembly automaticamente
builder.Services.AddValidatorsFromAssemblyContaining
    <CriarContaRequestValidator>();

// Registra MediatR + Pipeline Behaviors
builder.Services.AddMediatR(cfg =>
{
    cfg.RegisterServicesFromAssemblyContaining<Program>();
    // Adiciona validação automática na pipeline
    cfg.AddBehavior(
        typeof(IPipelineBehavior<,>),
        typeof(ValidationBehavior<,>));
});

// Desabilita validação automática do ModelState
// (FluentValidation substitui completamente)
builder.Services.Configure<ApiBehaviorOptions>(opt =>
    opt.SuppressModelStateInvalidModelFilter = true);

var app = builder.Build();

// Middleware global de tratamento de erros
app.UseMiddleware<ExceptionHandlingMiddleware>();

app.MapControllers();
app.Run();

// ── ValidationBehavior: pipeline MediatR ───────
using FluentValidation;
using MediatR;

public class ValidationBehavior<TRequest, TResponse>
    : IPipelineBehavior<TRequest, TResponse>
    where TRequest : IRequest<TResponse>
{
    private readonly IEnumerable<IValidator<TRequest>>
        _validators;

    public ValidationBehavior(
        IEnumerable<IValidator<TRequest>> validators)
        => _validators = validators;

    public async Task<TResponse> Handle(
        TRequest request,
        RequestHandlerDelegate<TResponse> next,
        CancellationToken ct)
    {
        if (!_validators.Any())
            return await next(); // Sem validator = passa

        var context = new ValidationContext<TRequest>(request);

        // Executa TODOS os validators em paralelo
        var failures = (await Task.WhenAll(
            _validators.Select(v =>
                v.ValidateAsync(context, ct))))
            .SelectMany(r => r.Errors)
            .Where(f => f != null)
            .ToList();

        if (failures.Count > 0)
            throw new ValidationException(failures);

        return await next(); // Tudo válido — segue
    }
}

// ── Middleware: ProblemDetails padronizado ──────
public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;

    public ExceptionHandlingMiddleware(RequestDelegate next)
        => _next = next;

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (ValidationException ex)
        {
            context.Response.StatusCode = 400;
            context.Response.ContentType = "application/json";

            var problemDetails = new
            {
                type = "https://tools.ietf.org/html/rfc7807",
                title = "Erro de validação",
                status = 400,
                errors = ex.Errors.Select(e => new
                {
                    campo = e.PropertyName,
                    mensagem = e.ErrorMessage,
                    valorEnviado = e.AttemptedValue
                })
            };

            await context.Response.WriteAsJsonAsync(
                problemDetails);
        }
    }
}

// ── Controller LIMPO: zero validação manual ────
[ApiController]
[Route("api/[controller]")]
public class ContasController : ControllerBase
{
    private readonly IMediator _mediator;

    public ContasController(IMediator mediator)
        => _mediator = mediator;

    [HttpPost]
    public async Task<IActionResult> Criar(
        [FromBody] CriarContaCommand cmd)
    {
        // ValidationBehavior valida antes de chegar aqui
        var resultado = await _mediator.Send(cmd);
        return Ok(resultado);
        // Se o request é inválido, o middleware retorna 400
        // O controller NÃO sabe que validação existe
    }
}`,
      checklist: [
        "Registrar validators com AddValidatorsFromAssemblyContaining no Program.cs",
        "Customizar resposta de 400 para retornar ProblemDetails (RFC 7807) com lista de erros estruturada",
        "Criar o ValidationBehavior<TRequest, TResponse> para o MediatR pipeline",
        "Testar que o endpoint retorna 400 com mensagens em português ao enviar dados inválidos",
        "Injetar IContaRepository em um validator via construtor para validação assíncrona com MustAsync",
      ],
      quiz: [
        {
          question:
            "Qual a vantagem de AddValidatorsFromAssemblyContaining sobre registrar validators manualmente?",
          options: [
            "É mais rápido em runtime",
            "Escaneia o assembly inteiro e registra automaticamente TODOS os validators encontrados — ao criar um novo validator, ele já funciona sem precisar registrar no Program.cs",
            "Registra apenas validators de um namespace específico",
            "Funciona apenas com MediatR",
          ],
          answer: 1,
          explanation:
            "Com registro manual, cada novo validator exige uma linha no Program.cs — fácil esquecer. AddValidatorsFromAssemblyContaining encontra todos os AbstractValidator<T> automaticamente. O time cria o validator e ele já funciona na próxima requisição.",
        },
        {
          question: "Qual a diferença entre erro 400 e erro 422 em uma API?",
          options: [
            "400 é para GET e 422 é para POST",
            "400 Bad Request é para dados malformados (CPF com 5 dígitos); 422 Unprocessable Entity é para dados bem-formados mas semanticamente inválidos (saldo insuficiente)",
            "São sinônimos — ambos indicam erro do cliente",
            "422 é mais moderno e substitui o 400",
          ],
          answer: 1,
          explanation:
            "FluentValidation retorna 400: 'CPF deve ter 11 dígitos' (formato inválido). O Domain retorna erros mapeados para 422: 'Saldo insuficiente para transferência' (o request é válido tecnicamente, mas o negócio não permite). Essa distinção ajuda o frontend a tratar erros de forma diferente.",
        },
        {
          question:
            "Por que usar ValidationBehavior no pipeline do MediatR em vez de validar no controller?",
          options: [
            "É mais rápido que validar no controller",
            "Centraliza a validação: TODOS os commands passam pelo behavior automaticamente — zero duplicação, zero esquecimento, e o controller/handler nunca recebe dados inválidos",
            "O MediatR exige que a validação seja feita no pipeline",
            "Controllers não suportam FluentValidation diretamente",
          ],
          answer: 1,
          explanation:
            "Sem o behavior, cada controller repete var result = validator.Validate(req). Com o behavior, a validação é automática: se existe um validator para aquele request, ele é executado antes do handler. O handler pode confiar que os dados são válidos. DRY na prática.",
        },
      ],
    },
    {
      id: "m12t4",
      moduleId: "m12",
      title: "Validação em Camadas (Domain + Application)",
      theory: `A arquitetura de validação corporativa em 3 camadas é o que separa um projeto amador de um projeto pronto para produção. Cada camada valida o que lhe compete, com responsabilidades claras e sem sobreposição.

CAMADA 1 — API (FluentValidation): Valida formato, tipos, tamanhos. "O campo CPF tem 11 dígitos?" "O email tem formato válido?" "O valor é positivo?" Não sabe se o CPF é matematicamente válido ou se a conta existe. Retorna 400 Bad Request. É a primeira linha de defesa — barra requests óbviamente inválidos antes de qualquer processamento.

CAMADA 2 — Domain (invariantes dos Aggregates e Value Objects): Valida regras de negócio puras. "O CPF é matematicamente válido?" (Value Object Cpf). "Saldo é suficiente para o saque?" (Aggregate Conta). "Conta está ativa?" (invariante do Aggregate). Retorna Result<T, DomainError> — NUNCA lança exceção para fluxo de controle. Exceções são para situações inesperadas (banco caiu, rede falhou); erros de negócio são esperados e tratáveis.

CAMADA 3 — Application (validação de contexto e estado): Valida regras que dependem de estado externo. "Esta conta existe no banco?" "O CPF está em lista negra?" "O limite já foi aprovado?". Retorna Result<T, ApplicationError>. Fica entre a API e o Domain.

RESULT PATTERN: a alternativa elegante a exceções para erros esperados. Em vez de throw new SaldoInsuficienteException(), retorna Result.Failure("Saldo insuficiente"). O caller decide o que fazer — mapear para HTTP 422, exibir mensagem, logar, etc. Exceções devem ser para o inesperado (NullReferenceException, TimeoutException).

Mapeamento de erros para HTTP Status Codes: ValidationError → 400 Bad Request (dados malformados); ApplicationError.NaoEncontrado → 404 Not Found (recurso não existe); DomainError.SaldoInsuficiente → 422 Unprocessable Entity (regra de negócio violada); DomainError.ContaBloqueada → 403 Forbidden (operação não permitida). Cada tipo de erro tem seu status code — o middleware mapeia automaticamente.

Essa arquitetura garante que NENHUMA regra de negócio vaza para a camada de API e NENHUMA validação de formato polui o Domain. Empresas como iFood e Nubank seguem esse padrão rigorosamente — é a base para sistemas que escalam sem virar espaguete.`,
      code: `// ══════════════════════════════════════════════
// ❌ ANTES — Tudo misturado no Controller
// ══════════════════════════════════════════════
[HttpPost("transferir")]
public IActionResult Transferir(TransferenciaRequest req)
{
    // Validação de formato + regra de negócio + estado
    // TUDO no mesmo lugar — impossível testar separado
    if (req.Valor <= 0) return BadRequest("Valor inválido");
    var conta = _db.Contas.Find(req.ContaOrigemId);
    if (conta == null) return NotFound("Conta não existe");
    if (conta.Status != "Ativa")
        throw new Exception("Conta bloqueada"); // Exceção!
    if (conta.Saldo < req.Valor)
        throw new Exception("Saldo insuficiente"); // Exceção!
    // ... mistura 3 camadas de validação em 10 linhas
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Validação em 3 camadas separadas
// ══════════════════════════════════════════════

// ── Result Pattern (Domain/Shared/) ────────────
namespace SistemaFinanceiro.Domain.Shared;

public class Result
{
    public bool IsSuccess { get; }
    public string Error { get; }
    public bool IsFailure => !IsSuccess;

    protected Result(bool isSuccess, string error)
    {
        IsSuccess = isSuccess;
        Error = error;
    }

    public static Result Success() => new(true, string.Empty);
    public static Result Failure(string error) => new(false, error);
}

public class Result<T> : Result
{
    public T Value { get; }

    private Result(T value, bool isSuccess, string error)
        : base(isSuccess, error)
        => Value = value;

    public static Result<T> Success(T value) =>
        new(value, true, string.Empty);
    public new static Result<T> Failure(string error) =>
        new(default!, false, error);
}

// ── Tipos de erro por camada ───────────────────
public enum TipoErro
{
    Validacao,    // 400 — FluentValidation
    NaoEncontrado, // 404 — Application
    RegraDeNegocio, // 422 — Domain
    NaoPermitido  // 403 — Domain
}

public record ErroAplicacao(TipoErro Tipo, string Mensagem);

// ── CAMADA 1: API — FluentValidation (400) ─────
// Valida FORMATO — não sabe regras de negócio
public class TransferenciaCommandValidator
    : AbstractValidator<RealizarTransferenciaCommand>
{
    public TransferenciaCommandValidator()
    {
        RuleFor(x => x.ContaOrigemId)
            .NotEmpty()
                .WithMessage("Conta origem é obrigatória");
        RuleFor(x => x.ContaDestinoId)
            .NotEmpty()
                .WithMessage("Conta destino é obrigatória");
        RuleFor(x => x.Valor)
            .GreaterThan(0)
                .WithMessage("Valor deve ser positivo");
        // NÃO valida saldo, NÃO valida status da conta
        // Isso é responsabilidade do Domain
    }
}

// ── CAMADA 2: Domain — Invariantes (422/403) ───
// Valida REGRAS DE NEGÓCIO — retorna Result, não exceção
public class Conta // Aggregate Root
{
    public Result Sacar(Dinheiro valor)
    {
        if (Status == StatusConta.Bloqueada)
            return Result.Failure("Conta bloqueada");
            // → mapeado para 403 Forbidden

        if (Status == StatusConta.Encerrada)
            return Result.Failure("Conta encerrada");
            // → mapeado para 403 Forbidden

        if (!Saldo.MaiorOuIgualA(valor))
            return Result.Failure("Saldo insuficiente");
            // → mapeado para 422 Unprocessable Entity

        Saldo = Saldo.Subtrair(valor);
        return Result.Success();
    }
}

// ── CAMADA 3: Application — Contexto (404) ─────
// Valida ESTADO — busca no banco, verifica existência
public class RealizarTransferenciaUseCase
{
    private readonly IContaRepository _contaRepo;
    private readonly TransferenciaService _transferencia;

    public async Task<Result> ExecuteAsync(
        RealizarTransferenciaCommand cmd)
    {
        // Validação de estado (Application)
        var origem = await _contaRepo
            .GetByIdAsync(cmd.ContaOrigemId);
        if (origem is null)
            return Result.Failure("Conta origem não encontrada");
            // → mapeado para 404 Not Found

        var destino = await _contaRepo
            .GetByIdAsync(cmd.ContaDestinoId);
        if (destino is null)
            return Result.Failure("Conta destino não encontrada");
            // → mapeado para 404 Not Found

        // Regra de negócio (Domain)
        var resultado = _transferencia
            .Executar(origem, destino, cmd.Valor);
        if (resultado.IsFailure)
            return resultado; // Status mapeado pelo middleware

        await _contaRepo.SaveChangesAsync();
        return Result.Success();
    }
}

// ── Middleware: mapeamento erro → HTTP Status ──
// POST /api/contas/transferencia
// Fluxo completo:
//   → FluentValidation (400 se formato inválido)
//   → Use Case → Repository (404 se conta não existe)
//   → Domain Service → Aggregate (422 se saldo insuficiente)
//   → SaveChanges → Domain Events publicados
//   → 200 OK com TransferenciaId
//
// Mapeamento de erros:
//   ValidationException      → 400 Bad Request
//   "não encontrada"         → 404 Not Found
//   "Saldo insuficiente"     → 422 Unprocessable Entity
//   "Conta bloqueada"        → 403 Forbidden
//   Exception inesperada     → 500 Internal Server Error`,
      checklist: [
        "Implementar o Result<T> pattern no projeto Domain/Shared/ — nunca usar exceções para erros de negócio esperados",
        "Garantir que o FluentValidation valida APENAS formato (CPF 11 dígitos, valor positivo) e NENHUMA regra de negócio",
        "Verificar que o Domain retorna Result.Failure() em vez de throw para saldo insuficiente, conta bloqueada etc.",
        "Criar middleware que mapeia cada tipo de erro para o HTTP Status Code correto (400, 403, 404, 422)",
        "Testar os 4 cenários de erro: dados inválidos (400), recurso não encontrado (404), regra violada (422), operação proibida (403)",
      ],
      quiz: [
        {
          question:
            "Qual a diferença entre usar Result Pattern e lançar exceções para erros de negócio?",
          options: [
            "Não há diferença — são estilos diferentes para o mesmo resultado",
            "Result Pattern representa erros ESPERADOS (saldo insuficiente é previsível); exceções são para erros INESPERADOS (banco caiu). Result é mais performático e expressa no tipo de retorno que a operação pode falhar",
            "Exceções são mais rápidas que Result Pattern",
            "Result Pattern é obrigatório no .NET 8",
          ],
          answer: 1,
          explanation:
            "Saldo insuficiente NÃO é excepcional — é um cenário perfeitamente normal. Usar throw new SaldoInsuficienteException() é como usar exceção para fluxo de controle, que é um anti-pattern. Result<T> expressa na assinatura do método que a operação pode falhar, forçando o caller a tratar o resultado.",
        },
        {
          question:
            "Qual camada é responsável por validar se o saldo é suficiente para um saque?",
          options: [
            "API (FluentValidation) — validação deve ser feita o mais cedo possível",
            "Domain (invariantes do Aggregate Conta) — regras de negócio são responsabilidade exclusiva do Domain",
            "Application (Use Case) — valida antes de chamar o Domain",
            "Infrastructure (Repository) — verifica no banco de dados",
          ],
          answer: 1,
          explanation:
            "FluentValidation valida formato: 'valor é positivo?'. Application valida estado: 'conta existe?'. Domain valida negócio: 'saldo é suficiente?'. Se o FluentValidation verifica saldo, regra de negócio vazou para a API. Se o controller verifica status da conta, a camada de apresentação faz trabalho do Domain.",
        },
        {
          question:
            "Como erros de cada camada são mapeados para HTTP Status Codes?",
          options: [
            "Todos retornam 500 Internal Server Error",
            "ValidationError → 400 Bad Request; NaoEncontrado → 404 Not Found; Regra de negócio → 422 Unprocessable Entity; Operação proibida → 403 Forbidden",
            "Erros de validação retornam 200 com campo 'success: false'",
            "Cada controller decide qual status code usar",
          ],
          answer: 1,
          explanation:
            "O middleware mapeia automaticamente: FluentValidation falhou → 400 (dados malformados). Repository não encontrou → 404 (recurso não existe). Domain rejeitou → 422 (dados válidos mas negócio não permite). Conta bloqueada → 403 (operação proibida). Isso padroniza a API inteira.",
        },
      ],
    },
    {
      id: "m12proj",
      moduleId: "m12",
      title: "🏦 Projeto: Sistema Financeiro DDD",
      theory: `Este é o projeto que une TUDO da Fase 3: Clean Code (nomes descritivos, funções pequenas), SOLID (cada classe com uma responsabilidade, interfaces segregadas, dependências invertidas), DDD (Bounded Contexts, Entities, Value Objects, Aggregates, Domain Events) e FluentValidation (validação em 3 camadas).

ARQUITETURA DO PROJETO — 4 projetos separados seguindo Clean Architecture:

SistemaFinanceiro.Domain/ — O coração do sistema. ZERO dependências externas. Contém: Entities (Conta, Transacao), Value Objects (Dinheiro, Cpf, Email, Periodo), Aggregates (Conta como Root com Transacoes), Domain Events (ContaAberta, TransacaoRealizada, LimiteExcedido), Domain Services (TransferenciaService), Interfaces de Repository (IContaRepository), e Shared (Result<T>, IDomainEvent). O Domain.csproj não referencia EF Core, ASP.NET ou qualquer pacote de infraestrutura.

SistemaFinanceiro.Application/ — O orquestrador. Depende APENAS do Domain. Contém: Use Cases (AbrirContaUseCase, RealizarTransferenciaUseCase, GerarExtratoUseCase, BloquearContaUseCase, DepositarUseCase), Commands e Queries (records imutáveis), Validators (FluentValidation dos Commands), e Behaviors (ValidationBehavior, LoggingBehavior). MediatR coordena commands → handlers.

SistemaFinanceiro.Infrastructure/ — Os detalhes técnicos. Depende do Domain e Application. Contém: Persistence (FinanceiroDbContext com EF Core, ContaConfiguration com Fluent API, Repositories concretos), Migrations, e Event Handlers (EnviarNotificacaoHandler, RegistrarAuditoriaHandler).

SistemaFinanceiro.API/ — A interface HTTP. Depende de Application e Infrastructure. Contém: Controllers (ContasController, TransacoesController), Middlewares (ExceptionHandlingMiddleware), e Program.cs com registro de todos os serviços.

CASOS DE USO: 1) Abrir Conta — valida CPF + cria Aggregate + persiste + evento ContaAberta. 2) Depositar — busca Conta + Depositar() + salva + evento TransacaoRealizada. 3) Transferir — busca origem e destino + TransferenciaService + salva + eventos. 4) Consultar Extrato — busca Transações por Período com filtros LINQ. 5) Bloquear Conta — muda status + evento ContaBloqueada.

GITFLOW: feature/domain-entities, feature/conta-usecase-abrir, feature/conta-usecase-transferencia, feature/extrato-query, feature/validacao-fluent, release/v1.0.0-sistema-financeiro.`,
      code: `// ══════════════════════════════════════════════
// 🏦 SISTEMA FINANCEIRO DDD — ESTRUTURA COMPLETA
// ══════════════════════════════════════════════

// ── Estrutura de pastas ────────────────────────
// SistemaFinanceiro/
// ├── SistemaFinanceiro.sln
// ├── src/
// │   ├── SistemaFinanceiro.Domain/        ← ZERO deps externas
// │   │   ├── Domain.csproj
// │   │   ├── Entities/
// │   │   │   ├── Conta.cs
// │   │   │   └── Transacao.cs
// │   │   ├── ValueObjects/
// │   │   │   ├── Dinheiro.cs
// │   │   │   ├── Cpf.cs
// │   │   │   ├── Email.cs
// │   │   │   ├── Periodo.cs
// │   │   │   └── ContaId.cs
// │   │   ├── Events/
// │   │   │   ├── IDomainEvent.cs
// │   │   │   ├── ContaAbertaEvent.cs
// │   │   │   ├── TransacaoRealizadaEvent.cs
// │   │   │   └── ContaBloqueadaEvent.cs
// │   │   ├── Services/
// │   │   │   └── TransferenciaService.cs
// │   │   ├── Repositories/
// │   │   │   └── IContaRepository.cs
// │   │   └── Shared/
// │   │       ├── Result.cs
// │   │       └── DomainException.cs
// │   │
// │   ├── SistemaFinanceiro.Application/   ← depende do Domain
// │   │   ├── Application.csproj
// │   │   ├── UseCases/
// │   │   │   ├── AbrirContaUseCase.cs
// │   │   │   ├── DepositarUseCase.cs
// │   │   │   ├── RealizarTransferenciaUseCase.cs
// │   │   │   ├── GerarExtratoUseCase.cs
// │   │   │   └── BloquearContaUseCase.cs
// │   │   ├── Commands/
// │   │   │   ├── AbrirContaCommand.cs
// │   │   │   ├── DepositarCommand.cs
// │   │   │   ├── RealizarTransferenciaCommand.cs
// │   │   │   └── BloquearContaCommand.cs
// │   │   ├── Queries/
// │   │   │   └── GerarExtratoQuery.cs
// │   │   ├── Validators/
// │   │   │   ├── AbrirContaCommandValidator.cs
// │   │   │   ├── DepositarCommandValidator.cs
// │   │   │   ├── TransferenciaCommandValidator.cs
// │   │   │   └── ExtratoQueryValidator.cs
// │   │   └── Behaviors/
// │   │       ├── ValidationBehavior.cs
// │   │       └── LoggingBehavior.cs
// │   │
// │   ├── SistemaFinanceiro.Infrastructure/ ← depende do Domain + App
// │   │   ├── Infrastructure.csproj
// │   │   ├── Persistence/
// │   │   │   ├── FinanceiroDbContext.cs
// │   │   │   ├── Repositories/
// │   │   │   │   └── ContaEfRepository.cs
// │   │   │   └── Configurations/
// │   │   │       ├── ContaConfiguration.cs
// │   │   │       └── TransacaoConfiguration.cs
// │   │   ├── Migrations/
// │   │   └── EventHandlers/
// │   │       ├── EnviarNotificacaoHandler.cs
// │   │       └── RegistrarAuditoriaHandler.cs
// │   │
// │   └── SistemaFinanceiro.API/           ← depende de App + Infra
// │       ├── API.csproj
// │       ├── Controllers/
// │       │   ├── ContasController.cs
// │       │   └── TransacoesController.cs
// │       ├── Middlewares/
// │       │   └── ExceptionHandlingMiddleware.cs
// │       └── Program.cs

// ── Domain.csproj: ZERO referências externas ───
// <Project Sdk="Microsoft.NET.Sdk">
//   <PropertyGroup>
//     <TargetFramework>net8.0</TargetFramework>
//   </PropertyGroup>
//   <!-- SEM PackageReference! Sem EF Core, sem ASP.NET -->
// </Project>

// ── Application.csproj ─────────────────────────
// <PackageReference Include="MediatR" Version="12.*" />
// <PackageReference Include="FluentValidation" Version="11.*" />
// <ProjectReference Include="../Domain/Domain.csproj" />

// ── Infrastructure.csproj ──────────────────────
// <PackageReference Include="Microsoft.EntityFrameworkCore
//     .SqlServer" Version="8.0.*" />
// <ProjectReference Include="../Domain/Domain.csproj" />
// <ProjectReference Include="../Application/Application.csproj" />

// ── API.csproj ─────────────────────────────────
// <PackageReference Include="FluentValidation
//     .AspNetCore" Version="11.*" />
// <PackageReference Include="MediatR.Extensions
//     .Microsoft.DependencyInjection" Version="12.*" />
// <ProjectReference Include="../Application/Application.csproj" />
// <ProjectReference Include="../Infrastructure
//     /Infrastructure.csproj" />

// ── Program.cs (API) — Registro completo de DI ──
using SistemaFinanceiro.Application.Behaviors;
using SistemaFinanceiro.Application.Validators;
using SistemaFinanceiro.Domain.Repositories;
using SistemaFinanceiro.Domain.Services;
using SistemaFinanceiro.Infrastructure.Persistence;

var builder = WebApplication.CreateBuilder(args);

// EF Core
builder.Services.AddDbContext<FinanceiroDbContext>(opt =>
    opt.UseSqlServer(builder.Configuration
        .GetConnectionString("DefaultConnection")));

// Repositories
builder.Services
    .AddScoped<IContaRepository, ContaEfRepository>();

// Domain Services
builder.Services.AddScoped<TransferenciaService>();

// MediatR + Behaviors
builder.Services.AddMediatR(cfg =>
{
    cfg.RegisterServicesFromAssemblyContaining
        <AbrirContaUseCase>();
    cfg.AddBehavior(typeof(IPipelineBehavior<,>),
        typeof(ValidationBehavior<,>));
    cfg.AddBehavior(typeof(IPipelineBehavior<,>),
        typeof(LoggingBehavior<,>));
});

// FluentValidation
builder.Services.AddValidatorsFromAssemblyContaining
    <AbrirContaCommandValidator>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseMiddleware<ExceptionHandlingMiddleware>();
app.UseSwagger();
app.UseSwaggerUI();
app.MapControllers();
app.Run();

// ── ContasController ───────────────────────────
[ApiController]
[Route("api/[controller]")]
public class ContasController : ControllerBase
{
    private readonly IMediator _mediator;

    public ContasController(IMediator mediator)
        => _mediator = mediator;

    /// <summary>Abre uma nova conta bancária</summary>
    [HttpPost]
    [ProducesResponseType(typeof(ContaId), 201)]
    [ProducesResponseType(typeof(ProblemDetails), 400)]
    public async Task<IActionResult> Abrir(
        [FromBody] AbrirContaCommand cmd)
    {
        var resultado = await _mediator.Send(cmd);
        if (resultado.IsFailure)
            return UnprocessableEntity(resultado.Error);
        return CreatedAtAction(
            nameof(ObterPorId),
            new { id = resultado.Value },
            resultado.Value);
    }

    /// <summary>Deposita valor em uma conta</summary>
    [HttpPost("{id:guid}/depositar")]
    [ProducesResponseType(200)]
    [ProducesResponseType(404)]
    [ProducesResponseType(422)]
    public async Task<IActionResult> Depositar(
        Guid id, [FromBody] DepositarCommand cmd)
    {
        var resultado = await _mediator.Send(
            cmd with { ContaId = new ContaId(id) });
        if (resultado.IsFailure)
            return UnprocessableEntity(resultado.Error);
        return Ok();
    }

    /// <summary>Realiza transferência entre contas</summary>
    [HttpPost("transferir")]
    [ProducesResponseType(200)]
    [ProducesResponseType(404)]
    [ProducesResponseType(422)]
    public async Task<IActionResult> Transferir(
        [FromBody] RealizarTransferenciaCommand cmd)
    {
        var resultado = await _mediator.Send(cmd);
        if (resultado.IsFailure)
            return UnprocessableEntity(resultado.Error);
        return Ok();
    }

    /// <summary>Consulta extrato por período</summary>
    [HttpGet("{id:guid}/extrato")]
    [ProducesResponseType(typeof(ExtratoResponse), 200)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> Extrato(
        Guid id, [FromQuery] GerarExtratoQuery query)
    {
        var resultado = await _mediator.Send(
            query with { ContaId = new ContaId(id) });
        if (resultado.IsFailure)
            return NotFound(resultado.Error);
        return Ok(resultado.Value);
    }

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> ObterPorId(Guid id)
    {
        // ... busca conta por ID
        return Ok();
    }
}

// ── GitFlow do Projeto ─────────────────────────
// git checkout -b feature/domain-entities
// git commit -m "feat(domain): Conta, Dinheiro, Cpf Value Objects"
//
// git checkout -b feature/conta-usecase-abrir
// git commit -m "feat(app): AbrirContaUseCase + validator"
//
// git checkout -b feature/conta-usecase-transferencia
// git commit -m "feat(app): RealizarTransferenciaUseCase + TransferenciaService"
//
// git checkout -b feature/extrato-query
// git commit -m "feat(app): GerarExtratoUseCase com filtro por período"
//
// git checkout -b feature/validacao-fluent
// git commit -m "feat(app): validators FluentValidation + ValidationBehavior"
//
// git checkout develop
// git merge feature/domain-entities feature/conta-usecase-abrir ...
// git checkout -b release/v1.0.0-sistema-financeiro
// git merge release/v1.0.0 into main
// git tag v1.0.0`,
      checklist: [
        "Criar a solução com 4 projetos: dotnet new sln + Domain, Application, Infrastructure, API",
        "Implementar todos os 5 casos de uso: Abrir Conta, Depositar, Transferir, Extrato, Bloquear",
        "Garantir que Domain.csproj tem ZERO referências a EF Core, ASP.NET ou qualquer pacote de infraestrutura",
        "Criar migration inicial e aplicar no SQL Server (docker run -e SA_PASSWORD=... mcr.microsoft.com/mssql/server)",
        "Completar o GitFlow: criar feature branches por caso de uso, merge em develop, e release/v1.0.0 em main",
      ],
      quiz: [
        {
          question:
            "Por que o Domain.csproj não deve ter referência a pacotes como EF Core?",
          options: [
            "Para reduzir o tamanho do build",
            "Para garantir Dependency Inversion: o Domain define interfaces (IContaRepository) e o Infrastructure implementa com EF Core — se trocar para Dapper ou MongoDB, o Domain não muda nada",
            "EF Core não é compatível com projects separados",
            "É uma regra do .NET 8 para class libraries",
          ],
          answer: 1,
          explanation:
            "Domain é o ativo mais valioso — regras de negócio puras. Se o Domain referencia EF Core, trocar de banco exige alterar regras de negócio. Com DIP, Domain define IContaRepository (abstração) e Infrastructure implementa ContaEfRepository (detalhe). Trocar para MongoDB = nova implementação, Domain intacto.",
        },
        {
          question:
            "Qual a direção correta das dependências na Clean Architecture?",
          options: [
            "API → Infrastructure → Application → Domain (de fora para dentro, cada camada depende da anterior)",
            "Domain ← Application ← Infrastructure ← API (Domain no centro sem dependências; camadas externas dependem das internas)",
            "Todas as camadas dependem umas das outras circularmente",
            "Domain → Application → Infrastructure → API (de dentro para fora)",
          ],
          answer: 1,
          explanation:
            "Domain não depende de ninguém: ZERO referências externas. Application depende do Domain. Infrastructure depende do Domain + Application. API depende de Application + Infrastructure. As setas de dependência sempre apontam para DENTRO — Domain é o centro intocável.",
        },
        {
          question:
            "Por que criar uma feature branch por caso de uso no GitFlow?",
          options: [
            "Para gerar mais commits no histórico",
            "Cada feature branch representa uma unidade de trabalho independente que pode ser revisada, testada e integrada separadamente — se a transferência tem bug, não bloqueia o deploy da abertura de conta",
            "O Git exige branches separadas para cada arquivo",
            "Para evitar conflitos de merge automaticamente",
          ],
          answer: 1,
          explanation:
            "feature/conta-usecase-abrir pode ser mergeada e deployada enquanto feature/conta-usecase-transferencia ainda está em review. Cada branch tem seu PR, seus testes, seu review. Se algo der errado, faz revert de uma branch sem afetar as outras. É assim que times de 50+ devs trabalham no iFood.",
        },
      ],
    },
  ],
};
