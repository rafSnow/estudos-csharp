export const MODULO_10 = {
  id: "m10",
  title: "Princípios SOLID",
  icon: "🏛️",
  week: "Semana 10",
  color: "#8B5CF6",
  topics: [
    {
      id: "m10t1",
      moduleId: "m10",
      title: "S: Single Responsibility Principle",
      theory: `"Uma classe deve ter apenas um motivo para mudar" — Robert C. Martin. Mas atenção: SRP não significa "fazer só uma coisa". Significa ter apenas um ator (stakeholder) que pode pedir mudança naquela classe.

Exemplo concreto: a classe RelatorioFinanceiro que busca dados no banco, calcula métricas, formata em PDF e envia por email. Quatro razões para mudar: o DBA altera o schema, o analista muda as fórmulas, o designer quer outro layout de PDF, o TI muda o servidor de email. Quatro atores, quatro motivos — violação clara do SRP.

Como identificar violação: use o teste do "E também". Descreva a classe: "ContaService busca contas E calcula saldo E gera PDF do extrato E envia email E registra log de auditoria E valida CPF E aplica IOF." Cada "E" é uma responsabilidade que deveria ser uma classe separada.

Como corrigir: identifique os atores, separe em classes coesas. Cada classe responde a um único stakeholder. ContaRepository responde ao DBA. SaldoCalculator responde ao financeiro. ExtratoReportGenerator responde ao designer. NotificacaoService responde ao TI.

SRP é a base para os outros 4 princípios SOLID. Se uma classe tem múltiplas responsabilidades, é impossível aplicar OCP, LSP, ISP ou DIP corretamente — as responsabilidades estão entrelaçadas e qualquer extensão afeta tudo.

Em sistemas corporativos como os do Nubank, classes com mais de uma responsabilidade são rejeitadas no code review. A regra é simples: se um bug no cálculo de IOF pode quebrar o envio de email, algo está muito errado na arquitetura.

Relação com módulo coeso: módulos (pacotes, namespaces) também seguem SRP. O namespace Financeiro.Calculos contém apenas lógica de cálculo, nunca formatação ou envio de email.`,
      code: `// ══════════════════════════════════════════════
// ❌ ANTES — ContaService com 7 responsabilidades
// ══════════════════════════════════════════════
public class ContaService
{
    private readonly AppDbContext _db;

    public ContaService(AppDbContext db) => _db = db;

    // Responsabilidade 1: Busca e persistência
    public Conta? BuscarPorId(int id) => _db.Contas.Find(id);

    // Responsabilidade 2: Cálculo de saldo
    public decimal CalcularSaldo(int contaId)
    {
        var transacoes = _db.Transacoes
            .Where(t => t.ContaId == contaId).ToList();
        return transacoes.Sum(t =>
            t.Tipo == "credito" ? t.Valor : -t.Valor);
    }

    // Responsabilidade 3: Geração de relatório PDF
    public byte[] GerarExtratoPdf(int contaId, int mes)
    {
        var dados = CalcularSaldo(contaId);
        // 50 linhas de geração de PDF com iTextSharp...
        return new byte[0]; // simplificado
    }

    // Responsabilidade 4: Envio de email
    public void EnviarExtratoPorEmail(int contaId)
    {
        var pdf = GerarExtratoPdf(contaId, DateTime.Now.Month);
        var smtp = new SmtpClient("smtp.banco.com");
        // configuração SMTP, criação de mensagem...
        smtp.Send(new MailMessage());
    }

    // Responsabilidade 5: Log de auditoria
    public void RegistrarLog(string acao, int contaId)
    {
        File.AppendAllText("audit.log",
            \$"[{DateTime.Now}] {acao} conta {contaId}\\n");
    }

    // Responsabilidade 6: Validação de documento
    public bool ValidarCpf(string cpf)
    {
        // algoritmo de validação de CPF...
        return cpf.Length == 11;
    }

    // Responsabilidade 7: Cálculo tributário
    public decimal AplicarIof(decimal valor, int dias)
    {
        decimal aliquota = dias <= 30 ? 0.0041m : 0.0082m;
        return valor * aliquota * dias;
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Cada classe com um único motivo para mudar
// ══════════════════════════════════════════════

// Ator: DBA / equipe de dados
public class ContaRepository : IContaRepository
{
    private readonly AppDbContext _db;
    public ContaRepository(AppDbContext db) => _db = db;

    public Conta? ObterPorId(int id) => _db.Contas.Find(id);
    public void Salvar(Conta conta) { _db.SaveChanges(); }
}

// Ator: equipe financeira / regras de negócio
public class SaldoCalculator
{
    private readonly ITransacaoRepository _transacoes;
    public SaldoCalculator(ITransacaoRepository transacoes)
        => _transacoes = transacoes;

    public decimal Calcular(int contaId)
    {
        var transacoes = _transacoes.ObterPorConta(contaId);
        return transacoes.Sum(t =>
            t.Tipo == "credito" ? t.Valor : -t.Valor);
    }
}

// Ator: equipe tributária
public class CalculadoraIof
{
    private const decimal ALIQUOTA_CURTO_PRAZO = 0.0041m;
    private const decimal ALIQUOTA_LONGO_PRAZO = 0.0082m;
    private const int LIMITE_DIAS_CURTO = 30;

    public decimal Calcular(decimal valor, int dias)
    {
        decimal aliquota = dias <= LIMITE_DIAS_CURTO
            ? ALIQUOTA_CURTO_PRAZO
            : ALIQUOTA_LONGO_PRAZO;
        return valor * aliquota * dias;
    }
}

// Ator: designer / equipe de relatórios
public class ExtratoReportGenerator
{
    private readonly SaldoCalculator _saldo;
    public ExtratoReportGenerator(SaldoCalculator saldo)
        => _saldo = saldo;

    public byte[] GerarPdf(int contaId, int mes)
    {
        var saldo = _saldo.Calcular(contaId);
        // Apenas geração de PDF — nenhuma lógica de negócio
        return Array.Empty<byte>();
    }
}

// Ator: TI / infraestrutura de comunicação
public class NotificacaoService : INotificacaoService
{
    private readonly IEmailSender _email;
    public NotificacaoService(IEmailSender email) => _email = email;

    public async Task EnviarExtrato(string destinatario, byte[] pdf)
    {
        await _email.EnviarAsync(destinatario, "Extrato Mensal", pdf);
    }
}

// Ator: compliance / auditoria
public class AuditoriaLogger : IAuditoriaLogger
{
    private readonly ILogger<AuditoriaLogger> _logger;
    public AuditoriaLogger(ILogger<AuditoriaLogger> logger)
        => _logger = logger;

    public void Registrar(string acao, int contaId)
    {
        _logger.LogInformation("[Auditoria] {Acao} conta {ContaId}", acao, contaId);
    }
}

// Ator: compliance / documentos
public static class ValidadorDocumento
{
    public static bool ValidarCpf(string cpf)
    {
        if (cpf.Length != 11) return false;
        // Algoritmo completo de validação...
        return true;
    }
}

// ══════════════════════════════════════════════
// Registro no DI — cada serviço independente
// ══════════════════════════════════════════════
// builder.Services.AddScoped<IContaRepository, ContaRepository>();
// builder.Services.AddScoped<SaldoCalculator>();
// builder.Services.AddScoped<CalculadoraIof>();
// builder.Services.AddScoped<ExtratoReportGenerator>();
// builder.Services.AddScoped<INotificacaoService, NotificacaoService>();
// builder.Services.AddScoped<IAuditoriaLogger, AuditoriaLogger>();`,
      checklist: [
        "Analisar o ProdutoService do projeto Fase 2: quantos motivos para mudar?",
        'Listar as responsabilidades encontradas com a técnica "E também"',
        "Extrair ao menos uma responsabilidade para uma classe separada",
        "Verificar que o controller ainda funciona após a separação",
        "Criar um diagrama simples (em comentário de código) das responsabilidades",
      ],
      quiz: [
        {
          question: 'Segundo o SRP, o que define "uma responsabilidade"?',
          options: [
            "Uma linha de código",
            "Um grupo de funcionalidades que muda pela mesma razão e para o mesmo stakeholder — não é sobre tamanho",
            "Um único método público",
            "Uma única tabela do banco",
          ],
          answer: 1,
          explanation:
            "Responsabilidade no SRP é definida pelo ator (stakeholder) que pode pedir mudança. Se dois atores diferentes pedem mudanças na mesma classe, ela tem mais de uma responsabilidade.",
        },
        {
          question: "Como identificar que uma classe viola o SRP?",
          options: [
            "Quando ela tem mais de 200 linhas",
            'Quando sua descrição contém "E também" — ex: "Processa pagamento E envia email E gera relatório"',
            "Quando tem mais de 10 métodos",
            "Quando usa muitas interfaces",
          ],
          answer: 1,
          explanation:
            'O teste do "E também" revela múltiplas responsabilidades. Cada "E" indica um ator diferente que pode pedir mudanças — e cada um deveria ter sua própria classe.',
        },
        {
          question:
            "Qual o benefício direto de aplicar SRP em um sistema financeiro?",
          options: [
            "Código menor",
            "Quando as regras de cálculo de IOF mudam, só a classe de cálculo precisa ser alterada e retestada — sem risco de quebrar o envio de email ou geração de PDF",
            "Menos classes para gerenciar",
            "Melhor performance",
          ],
          answer: 1,
          explanation:
            "Com SRP, mudanças são localizadas. Alterar a regra de IOF não pode quebrar email ou PDF porque estão em classes separadas — cada uma com seus próprios testes.",
        },
      ],
    },
    {
      id: "m10t2",
      moduleId: "m10",
      title: "O/L: Open/Closed + Liskov Substitution",
      theory: `OPEN/CLOSED PRINCIPLE (OCP): "Aberto para extensão, fechado para modificação." Você deve poder adicionar comportamento novo sem alterar código existente (e seus testes que já passam).

A violação clássica é o switch/if-else que cresce a cada requisição de negócio. Um sistema de descontos começa com 2 tipos e chega a 20, e cada novo tipo exige modificar a classe CalculadoraDesconto — correndo risco de quebrar os descontos que já funcionam. O OCP diz: crie uma nova classe para cada tipo, sem tocar nas existentes.

Como implementar OCP: interfaces + Strategy Pattern. Defina IEstrategiaDesconto com o método Calcular(Pedido). Cada tipo de desconto é uma classe que implementa essa interface. Para adicionar "Desconto de Aniversário", basta criar AniversarioDesconto — zero alteração no código existente.

Ferramentas para OCP: herança, interfaces, Strategy Pattern, Decorator, Chain of Responsibility. O DI container do ASP.NET Core facilita: registre todas as implementações e injete IEnumerable<IEstrategiaDesconto>.

LISKOV SUBSTITUTION PRINCIPLE (LSP): "Subtipos devem ser substituíveis por seus tipos base sem alterar a corretude do programa."

A violação mais traiçoeira: herança que compila mas quebra em runtime. O exemplo clássico: Quadrado herda de Retangulo. Ao alterar largura do Quadrado, a altura precisa mudar junto — quebrando o contrato de Retangulo onde largura e altura são independentes.

Regra prática: se a subclasse precisa lançar NotImplementedException para algum método herdado, LSP foi violado. A subclasse deve honrar TODOS os contratos da classe base.

Relação OCP + LSP: LSP é pré-condição para OCP funcionar com herança. Se uma subclasse não pode ser usada no lugar da classe base, a extensão está quebrada.

Como detectar violação de LSP: testes da classe base devem passar para TODAS as subclasses. Se o teste de Conta com Debitar() falha para ContaBloqueada, LSP foi violado.

Exemplo corporativo real: no iFood, cada tipo de entrega (expressa, agendada, retirada) implementa IEntregaStrategy — o sistema de pedidos nunca é modificado quando um novo tipo de entrega é criado.`,
      code: `// ══════════════════════════════════════════════
// ❌ OCP VIOLAÇÃO — if/else que cresce forever
// ══════════════════════════════════════════════
public class CalculadoraDesconto
{
    // Cada novo tipo de desconto MODIFICA esta classe ❌
    public decimal Calcular(Pedido pedido, string tipoDesconto)
    {
        if (tipoDesconto == "black_friday")
            return pedido.ValorTotal * 0.30m;
        else if (tipoDesconto == "cliente_vip")
            return pedido.ValorTotal * 0.20m;
        else if (tipoDesconto == "funcionario")
            return pedido.ValorTotal * 0.40m;
        else if (tipoDesconto == "aniversario")       // novo!
            return pedido.ValorTotal * 0.15m;
        else if (tipoDesconto == "primeira_compra")    // novo!
            return pedido.ValorTotal * 0.10m;
        // ... cada sprint adiciona mais um else if
        // Risco: qualquer erro aqui quebra TODOS os descontos
        else
            return 0m;
    }
}

// ══════════════════════════════════════════════
// ✅ OCP CORRETO — Strategy Pattern (aberto para extensão)
// ══════════════════════════════════════════════
public interface IEstrategiaDesconto
{
    string Tipo { get; }
    decimal Calcular(Pedido pedido);
}

// Cada desconto é uma classe isolada — pode ser testada independentemente
public class BlackFridayDesconto : IEstrategiaDesconto
{
    public string Tipo => "black_friday";
    public decimal Calcular(Pedido pedido)
        => pedido.ValorTotal * 0.30m;
}

public class ClienteVipDesconto : IEstrategiaDesconto
{
    public string Tipo => "cliente_vip";
    public decimal Calcular(Pedido pedido)
    {
        decimal desconto = pedido.ValorTotal * 0.20m;
        // VIP com mais de R\\$ 500 ganha 5% extra
        if (pedido.ValorTotal > 500m)
            desconto += pedido.ValorTotal * 0.05m;
        return desconto;
    }
}

public class FuncionarioDesconto : IEstrategiaDesconto
{
    public string Tipo => "funcionario";
    public decimal Calcular(Pedido pedido)
        => pedido.ValorTotal * 0.40m;
}

// Para adicionar novo desconto → nova classe, ZERO modificação ✅
public class AniversarioDesconto : IEstrategiaDesconto
{
    public string Tipo => "aniversario";
    public decimal Calcular(Pedido pedido)
        => pedido.ValorTotal * 0.15m;
}

// Orquestrador que NUNCA muda
public class ProcessadorDesconto
{
    private readonly Dictionary<string, IEstrategiaDesconto> _estrategias;

    public ProcessadorDesconto(IEnumerable<IEstrategiaDesconto> estrategias)
    {
        _estrategias = estrategias.ToDictionary(e => e.Tipo);
    }

    public decimal AplicarDesconto(Pedido pedido, string tipoDesconto)
    {
        if (_estrategias.TryGetValue(tipoDesconto, out var estrategia))
            return estrategia.Calcular(pedido);
        return 0m;
    }
}

// Registro no DI — cada estratégia registrada automaticamente
// builder.Services.AddScoped<IEstrategiaDesconto, BlackFridayDesconto>();
// builder.Services.AddScoped<IEstrategiaDesconto, ClienteVipDesconto>();
// builder.Services.AddScoped<IEstrategiaDesconto, FuncionarioDesconto>();
// builder.Services.AddScoped<IEstrategiaDesconto, AniversarioDesconto>();
// builder.Services.AddScoped<ProcessadorDesconto>();

// ══════════════════════════════════════════════
// ❌ LSP VIOLAÇÃO — ContaBloqueada quebra o contrato de Conta
// ══════════════════════════════════════════════
public class Conta
{
    public decimal Saldo { get; protected set; }

    public virtual void Debitar(decimal valor)
    {
        if (valor > Saldo) throw new SaldoInsuficienteException();
        Saldo -= valor;
    }

    public virtual void Creditar(decimal valor) => Saldo += valor;
}

// LSP violado: quem espera Conta pode receber ContaBloqueada
// e ter um comportamento inesperado (exceção onde não esperava)
public class ContaBloqueada : Conta
{
    public override void Debitar(decimal valor)
        => throw new InvalidOperationException("Conta bloqueada!");

    public override void Creditar(decimal valor)
        => throw new InvalidOperationException("Conta bloqueada!");
}

// ══════════════════════════════════════════════
// ✅ LSP CORRETO — segregar por capacidade
// ══════════════════════════════════════════════
public interface IContaLeitura
{
    decimal Saldo { get; }
    string Titular { get; }
}

public interface IContaDebitable : IContaLeitura
{
    void Debitar(decimal valor);
}

public interface IContaCreditavel : IContaLeitura
{
    void Creditar(decimal valor);
}

// Conta ativa implementa todas as operações
public class ContaAtiva : IContaDebitable, IContaCreditavel
{
    public decimal Saldo { get; private set; }
    public string Titular { get; init; } = "";

    public void Debitar(decimal valor)
    {
        if (valor > Saldo) throw new SaldoInsuficienteException();
        Saldo -= valor;
    }

    public void Creditar(decimal valor) => Saldo += valor;
}

// Conta bloqueada só permite leitura — sem surpresas
public class ContaBloqueada : IContaLeitura
{
    public decimal Saldo { get; init; }
    public string Titular { get; init; } = "";
    // Não implementa Debitar nem Creditar — LSP respeitado ✅
}

public class SaldoInsuficienteException : Exception
{
    public SaldoInsuficienteException()
        : base("Saldo insuficiente para esta operação.") { }
}`,
      checklist: [
        "Encontrar um if/else ou switch que cresce no projeto Fase 2",
        "Refatorar para Strategy Pattern com interface",
        "Registrar as estratégias no DI container",
        "Criar um teste que verifica que todas as estratégias respeitam o contrato",
        "Verificar se há algum override que lança NotImplementedException (LSP violation)",
      ],
      quiz: [
        {
          question: 'O que significa "fechado para modificação" no OCP?',
          options: [
            "O código tem acesso restrito",
            "Não é possível adicionar novas funcionalidades",
            "Código existente e testado não deve ser alterado para acomodar novos comportamentos — usa-se extensão (nova classe/interface) em vez de modificação",
            "O arquivo está marcado como readonly",
          ],
          answer: 2,
          explanation:
            "OCP significa que código estável e testado permanece intacto. Novos comportamentos são adicionados via novas classes que implementam interfaces existentes — sem tocar no que já funciona.",
        },
        {
          question:
            "Qual é o sinal clássico de violação do Liskov Substitution Principle?",
          options: [
            "Classe com muitos métodos",
            "Subclasse que herda método da classe base mas lança NotImplementedException ou UnsupportedOperationException",
            "Herança com mais de 3 níveis",
            "Classe abstrata sem implementação",
          ],
          answer: 1,
          explanation:
            "Se uma subclasse precisa lançar exceção para um método herdado, ela não pode substituir a classe base — violando LSP. A solução é segregar interfaces ou usar composição.",
        },
        {
          question:
            "Qual padrão de design resolve naturalmente a violação do OCP em lógicas condicionais que crescem com o tempo?",
          options: [
            "Singleton",
            "Strategy Pattern — encapsula cada variação em uma classe própria que implementa uma interface comum",
            "Factory Method",
            "Observer Pattern",
          ],
          answer: 1,
          explanation:
            "Strategy Pattern encapsula cada algoritmo/variação em uma classe separada. Para adicionar um novo comportamento, cria-se uma nova classe sem modificar as existentes.",
        },
      ],
    },
    {
      id: "m10t3",
      moduleId: "m10",
      title: "I: Interface Segregation Principle",
      theory: `"Clientes não devem ser forçados a depender de interfaces que não usam." — Robert C. Martin.

O problema das interfaces "gordas": uma interface com 15 métodos força todas as classes que a implementam a ter todos os 15, mesmo que usem apenas 2. O resultado: implementações com NotImplementedException, métodos vazios, ou código morto — cada um um Code Smell grave.

Exemplo clássico: IAnimal com Voar(), Nadar(), Correr(), Escalar(). A classe Cachorro é forçada a implementar Voar() — mas cachorro não voa. O que fazer? throw new NotImplementedException()? Retornar null? Ambos são sinais de violação.

ISP em código corporativo: IRepository<T> com 15 métodos (Add, Update, Delete, GetById, GetAll, GetByFilter, GetPaged, Count, Exists, BulkInsert, BulkDelete, ExecuteSql, GetWithIncludes...) onde o RelatorioController usa apenas GetByPeriodo e Count. O controller depende de 15 métodos mas usa 2 — as outras 13 dependências são desnecessárias.

Solução: Role Interfaces — interfaces menores e focadas no papel do consumidor. Em vez de um ITransacaoRepository gigante, crie: ITransacaoReader (consultas), ITransacaoWriter (escrita), ITransacaoReporter (relatórios). Cada controller recebe apenas a interface que precisa.

Trade-off importante: não exagere na granularidade. Uma interface por método é tão ruim quanto uma interface com 50 métodos. O equilíbrio é agrupar por papel/ator. IReadRepository e IWriteRepository são úteis; ISingleMethodDoer não é.

Como registrar múltiplas interfaces no DI container: se TransacaoRepository implementa ITransacaoReader, ITransacaoWriter e ITransacaoReporter, registre cada interface separadamente apontando para a mesma instância com AddScoped.

Relação com LSP: interfaces gordas frequentemente causam violações de LSP — a classe é forçada a herdar comportamento que não suporta, e lança exceções para "se livrar" dos métodos.

Em sistemas como o PicPay, a separação IReadRepository/IWriteRepository permite até ter implementações diferentes: leitura do cache Redis, escrita no PostgreSQL — impossível com uma interface monolítica.`,
      code: `// ══════════════════════════════════════════════
// ❌ ANTES — Interface gorda com 12 métodos
// ══════════════════════════════════════════════
public interface ITransacaoRepository
{
    Transacao? GetById(int id);
    List<Transacao> GetAll();
    List<Transacao> GetByContaId(int contaId);
    List<Transacao> GetByPeriodo(DateTime inicio, DateTime fim);
    List<Transacao> GetByCliente(int clienteId);
    void Add(Transacao t);
    void Update(Transacao t);
    void Delete(int id);
    void BulkInsert(List<Transacao> transacoes);
    decimal GetResumoMensal(int contaId, int mes);
    List<ClienteResumo> GetTopClientes(int top);
    int Count();
}

// RelatorioController usa apenas 3 dos 12 métodos ❌
public class RelatorioController : ControllerBase
{
    private readonly ITransacaoRepository _repo;  // 12 métodos inúteis

    public RelatorioController(ITransacaoRepository repo) => _repo = repo;

    [HttpGet("mensal/{contaId}")]
    public IActionResult ResumoMensal(int contaId, int mes)
        => Ok(_repo.GetResumoMensal(contaId, mes));

    [HttpGet("top-clientes")]
    public IActionResult TopClientes(int top = 10)
        => Ok(_repo.GetTopClientes(top));

    [HttpGet("total")]
    public IActionResult Total() => Ok(_repo.Count());
}

// ImportacaoService só escreve — mas depende de consultas ❌
public class ImportacaoService
{
    private readonly ITransacaoRepository _repo;
    public ImportacaoService(ITransacaoRepository repo) => _repo = repo;

    public void Importar(List<Transacao> lote) => _repo.BulkInsert(lote);
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Interfaces segregadas por papel
// ══════════════════════════════════════════════
public interface ITransacaoReader
{
    Transacao? GetById(int id);
    List<Transacao> GetByContaId(int contaId);
    List<Transacao> GetByPeriodo(DateTime inicio, DateTime fim);
    List<Transacao> GetByCliente(int clienteId);
    int Count();
}

public interface ITransacaoWriter
{
    void Add(Transacao t);
    void Update(Transacao t);
    void Delete(int id);
    void BulkInsert(List<Transacao> transacoes);
}

public interface ITransacaoReporter
{
    decimal GetResumoMensal(int contaId, int mes);
    List<ClienteResumo> GetTopClientes(int top);
}

// A implementação real implementa as 3 interfaces
public class TransacaoRepository
    : ITransacaoReader, ITransacaoWriter, ITransacaoReporter
{
    private readonly AppDbContext _db;
    public TransacaoRepository(AppDbContext db) => _db = db;

    // ITransacaoReader
    public Transacao? GetById(int id) => _db.Transacoes.Find(id);
    public List<Transacao> GetByContaId(int contaId)
        => _db.Transacoes.Where(t => t.ContaId == contaId).ToList();
    public List<Transacao> GetByPeriodo(DateTime inicio, DateTime fim)
        => _db.Transacoes.Where(t => t.Data >= inicio && t.Data <= fim).ToList();
    public List<Transacao> GetByCliente(int clienteId)
        => _db.Transacoes.Where(t => t.ClienteId == clienteId).ToList();
    public int Count() => _db.Transacoes.Count();

    // ITransacaoWriter
    public void Add(Transacao t) { _db.Transacoes.Add(t); _db.SaveChanges(); }
    public void Update(Transacao t) { _db.Transacoes.Update(t); _db.SaveChanges(); }
    public void Delete(int id)
    {
        var t = _db.Transacoes.Find(id);
        if (t is not null) { _db.Transacoes.Remove(t); _db.SaveChanges(); }
    }
    public void BulkInsert(List<Transacao> transacoes)
    {
        _db.Transacoes.AddRange(transacoes);
        _db.SaveChanges();
    }

    // ITransacaoReporter
    public decimal GetResumoMensal(int contaId, int mes)
        => _db.Transacoes
            .Where(t => t.ContaId == contaId && t.Data.Month == mes)
            .Sum(t => t.Tipo == "credito" ? t.Valor : -t.Valor);

    public List<ClienteResumo> GetTopClientes(int top)
        => _db.Transacoes
            .GroupBy(t => t.ClienteId)
            .Select(g => new ClienteResumo(g.Key, g.Sum(t => t.Valor)))
            .OrderByDescending(c => c.Total)
            .Take(top)
            .ToList();
}

// Agora cada controller recebe SÓ o que precisa ✅
public class RelatorioController : ControllerBase
{
    private readonly ITransacaoReporter _reporter;  // Só 2 métodos
    private readonly ITransacaoReader _reader;      // Só leitura

    public RelatorioController(
        ITransacaoReporter reporter,
        ITransacaoReader reader)
    {
        _reporter = reporter;
        _reader = reader;
    }

    [HttpGet("mensal/{contaId}")]
    public IActionResult ResumoMensal(int contaId, int mes)
        => Ok(_reporter.GetResumoMensal(contaId, mes));

    [HttpGet("top-clientes")]
    public IActionResult TopClientes(int top = 10)
        => Ok(_reporter.GetTopClientes(top));
}

// ImportacaoService recebe SÓ a escrita ✅
public class ImportacaoService
{
    private readonly ITransacaoWriter _writer;
    public ImportacaoService(ITransacaoWriter writer) => _writer = writer;

    public void Importar(List<Transacao> lote) => _writer.BulkInsert(lote);
}

// Registro no DI — mesma instância, interfaces diferentes
// builder.Services.AddScoped<TransacaoRepository>();
// builder.Services.AddScoped<ITransacaoReader>(sp =>
//     sp.GetRequiredService<TransacaoRepository>());
// builder.Services.AddScoped<ITransacaoWriter>(sp =>
//     sp.GetRequiredService<TransacaoRepository>());
// builder.Services.AddScoped<ITransacaoReporter>(sp =>
//     sp.GetRequiredService<TransacaoRepository>());

public record ClienteResumo(int ClienteId, decimal Total);`,
      checklist: [
        "Auditar as interfaces do projeto Fase 2: alguma tem mais de 7 métodos?",
        "Identificar quais métodos cada controller realmente usa do repository",
        "Dividir o IRepository em IReadRepository e IWriteRepository",
        "Atualizar os registros no DI container",
        "Verificar que os testes existentes ainda compilam e passam",
      ],
      quiz: [
        {
          question: "Qual o problema de uma interface com 15 métodos?",
          options: [
            "Interfaces grandes são mais performáticas",
            "Classes que implementam são forçadas a implementar métodos que não precisam, frequentemente com corpo vazio ou lançando NotImplementedException",
            "O compilador não aceita interfaces grandes",
            "Dificulta o uso de generics",
          ],
          answer: 1,
          explanation:
            "Interfaces gordas forçam implementações desnecessárias. Cada método não-usado é código morto que precisa ser mantido e pode esconder bugs.",
        },
        {
          question: "Como ISP se relaciona com testabilidade?",
          options: [
            "Não tem relação",
            "Interfaces menores são mais fáceis de mockar em testes — você mocka apenas os métodos que o código sob teste realmente usa",
            "Interfaces grandes facilitam mocks",
            "Testes não dependem de interfaces",
          ],
          answer: 1,
          explanation:
            "Com interfaces segregadas, mocks de teste ficam simples: mocke 2-3 métodos ao invés de 15. O teste fica focado e sem setup desnecessário.",
        },
        {
          question:
            "Qual o sinal mais claro de violação do ISP em uma implementação?",
          options: [
            "Classe com muitos campos privados",
            "Método implementado que retorna null, lança NotImplementedException ou tem corpo vazio — sinal de que a interface forçou uma implementação desnecessária",
            "Método com muitos parâmetros",
            "Classe sem construtor público",
          ],
          answer: 1,
          explanation:
            'Se uma implementação precisa "se livrar" de um método com null/exceção/vazio, a interface obrigou algo que não deveria — ela precisa ser segregada.',
        },
      ],
    },
    {
      id: "m10t4",
      moduleId: "m10",
      title: "D: Dependency Inversion Principle",
      theory: `"Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações." — Robert C. Martin.

É crucial entender a diferença: DIP (Dependency Inversion Principle) é o PRINCÍPIO arquitetural; DI (Dependency Injection) é o MECANISMO de implementação. Você pode ter DI sem DIP — basta injetar classes concretas em vez de interfaces. DI sem abstração não inverte nada.

Violação clássica: new SqlConnection("...") dentro de um service. O service de alto nível (lógica de negócio) passa a depender diretamente de um detalhe de infraestrutura (SQL Server). Se mudar para PostgreSQL, MongoDB ou InMemory para testes, o service precisa mudar junto.

O mesmo vale para new SmtpClient(), new HttpClient() direto, new FileLogger(). Cada "new" de serviço/infraestrutura dentro de lógica de negócio é uma violação do DIP.

Com DIP, a direção das dependências se inverte: Domain define IContaRepository (a interface). Infrastructure implementa SqlContaRepository. Domain NÃO conhece Infrastructure — Infrastructure conhece Domain e implementa seus contratos. Isso é inversão de dependência.

DIP é o princípio mais transformador para testabilidade. Com interfaces no lugar de concretos, você cria InMemoryContaRepository para testes — sem banco de dados, sem Docker, execução em milissegundos. No Nubank, testes unitários rodam sem nenhuma dependência externa justamente por DIP.

Hexagonal Architecture (Ports & Adapters) é DIP em escala: Domain é o centro, Ports são as interfaces (abstrações), Adapters são as implementações concretas (SQL, HTTP, SMTP). As dependências sempre apontam para dentro — para o domínio.

O container de DI do ASP.NET Core (visto na Fase 2) é o mecanismo que conecta tudo: builder.Services.AddScoped<IContaRepository, SqlContaRepository>(). Em produção injeta SQL, em teste injeta InMemory. O service não sabe nem se importa qual implementação recebeu.`,
      code: `// ══════════════════════════════════════════════
// ❌ ANTES — Service acoplado a infraestrutura
// ══════════════════════════════════════════════
public class ContaService
{
    // Cada "new" é uma violação de DIP
    public decimal ConsultarSaldo(int contaId)
    {
        // ❌ Depende diretamente de SQL Server
        using var conn = new SqlConnection(
            "Server=prod;Database=Banco;Trusted_Connection=true;");
        conn.Open();
        var cmd = new SqlCommand(
            "SELECT Saldo FROM Contas WHERE Id = @id", conn);
        cmd.Parameters.AddWithValue("@id", contaId);
        return (decimal)cmd.ExecuteScalar()!;
    }

    public void NotificarCliente(int contaId, string mensagem)
    {
        // ❌ Depende diretamente de SMTP
        var smtp = new SmtpClient("smtp.banco.com", 587);
        smtp.Credentials = new NetworkCredential("user", "pass");
        var email = BuscarEmail(contaId);
        smtp.Send("noreply@banco.com", email, "Notificação", mensagem);
    }

    public void RegistrarAuditoria(string acao)
    {
        // ❌ Depende diretamente do sistema de arquivos
        File.AppendAllText("C:\\\\logs\\\\audit.log",
            \$"[{DateTime.Now}] {acao}\\n");
    }

    private string BuscarEmail(int contaId) => "cliente@email.com";
}

// Impossível testar sem banco SQL, servidor SMTP e disco!

// ══════════════════════════════════════════════
// ✅ DEPOIS — Service depende de abstrações
// ══════════════════════════════════════════════

// Abstrações (definidas no Domain — alto nível)
public interface IContaRepository
{
    Conta? ObterPorId(int id);
    decimal ObterSaldo(int contaId);
    void Salvar(Conta conta);
}

public interface INotificacaoService
{
    Task NotificarAsync(string destinatario, string assunto, string mensagem);
}

public interface IAuditoriaLogger
{
    void Registrar(string acao);
}

// Service depende APENAS de abstrações ✅
public class ContaService
{
    private readonly IContaRepository _contas;
    private readonly INotificacaoService _notificacao;
    private readonly IAuditoriaLogger _auditoria;

    public ContaService(
        IContaRepository contas,
        INotificacaoService notificacao,
        IAuditoriaLogger auditoria)
    {
        _contas = contas;
        _notificacao = notificacao;
        _auditoria = auditoria;
    }

    public decimal ConsultarSaldo(int contaId)
    {
        _auditoria.Registrar(\$"Consulta saldo conta {contaId}");
        return _contas.ObterSaldo(contaId);
    }

    public async Task NotificarCliente(int contaId, string mensagem)
    {
        var conta = _contas.ObterPorId(contaId);
        if (conta is null) return;
        await _notificacao.NotificarAsync(conta.Email, "Notificação", mensagem);
        _auditoria.Registrar(\$"Notificação enviada para conta {contaId}");
    }
}

// ══════════════════════════════════════════════
// Implementações reais (Infrastructure — baixo nível)
// ══════════════════════════════════════════════
public class SqlContaRepository : IContaRepository
{
    private readonly AppDbContext _db;
    public SqlContaRepository(AppDbContext db) => _db = db;

    public Conta? ObterPorId(int id) => _db.Contas.Find(id);
    public decimal ObterSaldo(int contaId)
        => _db.Contas.Where(c => c.Id == contaId)
               .Select(c => c.Saldo).FirstOrDefault();
    public void Salvar(Conta conta) => _db.SaveChanges();
}

public class SmtpNotificacaoService : INotificacaoService
{
    private readonly IConfiguration _config;
    public SmtpNotificacaoService(IConfiguration config) => _config = config;

    public async Task NotificarAsync(
        string destinatario, string assunto, string mensagem)
    {
        // Implementação real com SMTP
        await Task.CompletedTask;
    }
}

// ══════════════════════════════════════════════
// Implementação para TESTES (sem banco, sem email)
// ══════════════════════════════════════════════
public class InMemoryContaRepository : IContaRepository
{
    private readonly Dictionary<int, Conta> _contas = new();

    public void AdicionarParaTeste(Conta conta) => _contas[conta.Id] = conta;

    public Conta? ObterPorId(int id)
        => _contas.TryGetValue(id, out var c) ? c : null;
    public decimal ObterSaldo(int contaId)
        => _contas.TryGetValue(contaId, out var c) ? c.Saldo : 0;
    public void Salvar(Conta conta) => _contas[conta.Id] = conta;
}

public class FakeNotificacao : INotificacaoService
{
    public List<string> MensagensEnviadas { get; } = new();

    public Task NotificarAsync(string dest, string assunto, string msg)
    {
        MensagensEnviadas.Add(\$"{dest}: {assunto} - {msg}");
        return Task.CompletedTask;
    }
}

// ══════════════════════════════════════════════
// Teste unitário — sem banco e sem servidor SMTP!
// ══════════════════════════════════════════════
// [Fact]
// public async Task NotificarCliente_DeveEnviarMensagem()
// {
//     var repo = new InMemoryContaRepository();
//     repo.AdicionarParaTeste(new Conta
//         { Id = 1, Saldo = 1000m, Email = "joao@email.com" });
//
//     var fakeNotificacao = new FakeNotificacao();
//     var fakeAuditoria = new FakeAuditoria();
//
//     var service = new ContaService(repo, fakeNotificacao, fakeAuditoria);
//
//     await service.NotificarCliente(1, "Seu extrato está disponível");
//
//     Assert.Single(fakeNotificacao.MensagensEnviadas);
//     Assert.Contains("joao@email.com", fakeNotificacao.MensagensEnviadas[0]);
// }

// ══════════════════════════════════════════════
// Registro no DI — troca implementação por ambiente
// ══════════════════════════════════════════════
// PRODUÇÃO:
// builder.Services.AddScoped<IContaRepository, SqlContaRepository>();
// builder.Services.AddScoped<INotificacaoService, SmtpNotificacaoService>();
// builder.Services.AddScoped<IAuditoriaLogger, SerilogAuditoriaLogger>();

// TESTES:
// services.AddScoped<IContaRepository, InMemoryContaRepository>();
// services.AddScoped<INotificacaoService, FakeNotificacao>();
// services.AddScoped<IAuditoriaLogger, FakeAuditoria>();`,
      checklist: [
        'Buscar "new" no ContaService ou ProdutoService — cada "new" de serviço é DIP violation',
        "Substituir instanciações diretas por injeção via construtor",
        "Criar uma implementação InMemory de IContaRepository para testes",
        "Verificar que o service funciona com a implementação real E com a InMemory",
        "Escrever um teste unitário que usa a implementação InMemory",
      ],
      quiz: [
        {
          question:
            "Qual a diferença entre Dependency Injection e Dependency Inversion Principle?",
          options: [
            "São a mesma coisa",
            "DIP é o princípio arquitetural (abstrações entre camadas); DI é o mecanismo de implementação (container que injeta as dependências). Você pode ter DI sem DIP se injetar classes concretas em vez de interfaces",
            "DIP é mais moderno que DI",
            "DI é só para testes",
          ],
          answer: 1,
          explanation:
            'DIP é a regra ("dependa de abstrações"), DI é a ferramenta ("container que injeta"). Sem abstrações (interfaces), DI apenas move o "new" para outro lugar sem inverter nada.',
        },
        {
          question:
            'Por que "new SqlConnection()" dentro de um service viola o DIP?',
          options: [
            "Não viola — é uma boa prática",
            "O service de alto nível passa a depender de um detalhe de infraestrutura (SQL Server) — se mudar para PostgreSQL ou MongoDB, o service precisa mudar junto",
            "SqlConnection é selado (sealed)",
            "Performance é reduzida",
          ],
          answer: 1,
          explanation:
            "O service de negócio fica acoplado ao SQL Server. Com DIP, o service depende de IContaRepository — e não sabe se por trás está SQL, Mongo ou InMemory.",
        },
        {
          question:
            "Qual o benefício mais direto de aplicar DIP em um sistema financeiro?",
          options: [
            "Código mais curto",
            "Possibilidade de testar a lógica de negócio em isolamento, sem banco de dados, servidor de email ou dependências externas — usando implementações InMemory ou Mocks",
            "Menos interfaces para manter",
            "Maior performance das queries",
          ],
          answer: 1,
          explanation:
            "DIP permite testes em milissegundos, sem Docker, sem banco real. A lógica de negócio é testada em isolamento — exatamente como Nubank e PicPay fazem.",
        },
      ],
    },
  ],
};
