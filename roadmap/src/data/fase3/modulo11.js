export const MODULO_11 = {
  id: "m11",
  title: "Domain-Driven Design",
  icon: "🏗️",
  week: "Semanas 11–12",
  color: "#10B981",
  topics: [
    {
      id: "m11t1",
      moduleId: "m11",
      title: "Linguagem Ubíqua e Bounded Contexts",
      theory: `Domain-Driven Design resolve um problema que todo sistema corporativo enfrenta: o código não fala a língua do negócio. Quando o analista financeiro diz "Fazer uma TED" e o desenvolvedor implementa ProcessTransaction(int userId, decimal amount, int typeId), surge um abismo de tradução que causa bugs, retrabalho e frustração.

LINGUAGEM UBÍQUA é o vocabulário compartilhado entre desenvolvedores e especialistas de negócio, refletido diretamente no código. Não "usuário" mas "Titular", "Beneficiário" ou "Correntista" — cada termo tem significado preciso no contexto. No Nubank, o time de engenharia fala exatamente os mesmos termos que o time de produto. Quando o PO diz "Conta bloqueada não pode realizar transações", o código diz if (conta.Status == StatusConta.Bloqueada) return Result.Failure("Conta bloqueada"). Zero tradução.

Como construir a Linguagem Ubíqua: sessões de Event Storming onde devs e negócio mapeiam eventos do domínio em post-its, glossário vivo mantido no repositório (Glossario.md), e a regra de ouro — se o nome no código é diferente do que o analista fala, o código está errado.

BOUNDED CONTEXT é uma fronteira explícita dentro da qual um modelo de domínio é válido. Em um banco digital real existem vários contextos: Contexto de Contas (Conta, Saldo, Limite, Extrato), Contexto de Pagamentos (Transacao, Beneficiario, TED, PIX), Contexto de Crédito (Proposta, Score, Limite, Parcela). Perceba: "Limite" significa coisas completamente diferentes em Contas (limite de saque diário) e Crédito (limite de crédito aprovado). São dois Bounded Contexts com modelos independentes.

Context Map define como os Bounded Contexts se comunicam — via Integration Events, APIs compartilhadas ou bancos separados. O anti-pattern mais destrutivo é o Big Ball of Mud: um modelo único que tenta representar todo o domínio, gerando classes god com dezenas de campos e métodos para situações completamente diferentes. Empresas como iFood e PicPay identificam Bounded Contexts no início de cada projeto novo — é o primeiro passo antes de escrever qualquer código.`,
      code: `// ══════════════════════════════════════════════
// ❌ ANTES — Big Ball of Mud: um modelo para tudo
// ══════════════════════════════════════════════
// "Conta" tenta ser tudo para todos os contextos
public class Conta
{
    public int Id { get; set; }
    public string Nome { get; set; }            // Cadastro
    public decimal Saldo { get; set; }           // Financeiro
    public decimal LimiteCredito { get; set; }   // Crédito
    public decimal LimiteDiario { get; set; }    // Transações
    public string Agencia { get; set; }          // Pagamentos
    public string NumeroConta { get; set; }      // Pagamentos
    public int Score { get; set; }               // Crédito
    public string Status { get; set; }           // Tudo usa
    public List<object> Transacoes { get; set; } // God list
    public List<object> Propostas { get; set; }  // Crédito
    public List<object> Notificacoes { get; set; } // Marketing
    // 30+ campos... cada time adiciona o que precisa
}

// Serviço genérico que mistura todos os contextos
public class ContaService
{
    public void ProcessTransaction(int userId,
        decimal amount, int typeId) { /* ... */ }
    public void SendNotification(int userId,
        string msg) { /* ... */ }
    public decimal CalculateScore(int userId) { /* ... */ }
    // 50+ métodos de contextos diferentes
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Bounded Contexts separados
// ══════════════════════════════════════════════

// ── Contexto: Contas (Domain/Contas/) ──────────
namespace SistemaFinanceiro.Domain.Contas;

// Linguagem Ubíqua: Conta, Saldo, Titular, Extrato
public class Conta  // Aggregate Root neste contexto
{
    public ContaId Id { get; private set; }
    public Cpf TitularCpf { get; private set; }
    public Dinheiro Saldo { get; private set; }
    public StatusConta Status { get; private set; }

    public Result Depositar(Dinheiro valor)
    {
        if (Status == StatusConta.Bloqueada)
            return Result.Failure("Conta bloqueada");
        Saldo = Saldo.Somar(valor);
        return Result.Success();
    }
}

public enum StatusConta { Ativa, Bloqueada, Encerrada }

// ── Contexto: Pagamentos (Domain/Pagamentos/) ──
namespace SistemaFinanceiro.Domain.Pagamentos;

// "Conta" aqui é apenas dados bancários do destino
// Modelo COMPLETAMENTE diferente do contexto Contas
public record ContaBancaria(
    string Agencia,
    string Numero,
    string CodigoBanco,
    string NomeTitular
);

public class Transferencia
{
    public TransferenciaId Id { get; private set; }
    public ContaBancaria Origem { get; private set; }
    public ContaBancaria Destino { get; private set; }
    public Dinheiro Valor { get; private set; }
    public TipoTransferencia Tipo { get; private set; } // TED, PIX

    public static Transferencia Criar(
        ContaBancaria origem, ContaBancaria destino,
        Dinheiro valor, TipoTransferencia tipo) { /* ... */ }
}

public enum TipoTransferencia { TED, PIX, DOC }

// ── Contexto: Crédito (Domain/Credito/) ────────
namespace SistemaFinanceiro.Domain.Credito;

// "Limite" aqui é limite de crédito — nada a ver com
// o limite diário de saque do contexto Contas
public class PropostaCredito
{
    public PropostaId Id { get; private set; }
    public Cpf SolicitanteCpf { get; private set; }
    public Dinheiro LimiteSolicitado { get; private set; }
    public Score ScoreAtual { get; private set; }
    public StatusProposta Status { get; private set; }
}

// ── Linguagem Ubíqua em prática ────────────────
// ANTES: ProcessTransaction(int userId, decimal amount, int typeId)
// DEPOIS: cada contexto tem seu vocabulário preciso:

// Contexto Contas:
// conta.Depositar(new Dinheiro(500.00m, "BRL"))

// Contexto Pagamentos:
// Transferencia.Criar(origem, destino, valor, TipoTransferencia.PIX)

// Contexto Crédito:
// proposta.Avaliar(scoreAtual)`,
      checklist: [
        "Criar um arquivo Glossario.md com 15+ termos do domínio financeiro (Conta, Transacao, Extrato, Titular, Saldo, etc.)",
        "Identificar pelo menos 2 Bounded Contexts no projeto da Fase 2 e documentar onde cada um começa e termina",
        "Criar a estrutura de pastas Domain/Contas/ e Domain/Pagamentos/ com modelos separados",
        "Renomear 3 métodos do projeto para usar a Linguagem Ubíqua (ex: ProcessTransaction → RealizarTransferencia)",
        "Validar que nenhum modelo de um contexto referencia diretamente modelos de outro contexto",
      ],
      quiz: [
        {
          question: "O que é Linguagem Ubíqua no DDD?",
          options: [
            "Um padrão de nomenclatura obrigatório para variáveis em inglês",
            "O vocabulário compartilhado entre desenvolvedores e especialistas de negócio, refletido tanto nas conversas quanto no código — eliminando tradução entre o negócio e a implementação",
            "Uma linguagem de programação específica para DDD",
            "Comentários XML obrigatórios em todas as classes do domínio",
          ],
          answer: 1,
          explanation:
            "A Linguagem Ubíqua é o vocabulário que devs e negócio compartilham. Se o analista diz 'Titular' e o código diz 'User', existe um abismo de tradução que gera bugs. O código DEVE usar os mesmos termos que o negócio — quando o PO fala 'conta bloqueada', o código diz StatusConta.Bloqueada.",
        },
        {
          question:
            "Por que 'Cliente' pode significar coisas diferentes em um mesmo sistema?",
          options: [
            "Não pode — termos devem ser únicos em todo o sistema",
            "Porque diferentes Bounded Contexts têm modelos diferentes para a mesma palavra — em Faturamento é quem paga, em Entrega é quem recebe, em Marketing é quem tem interesse",
            "Por causa de bugs de naming no banco de dados",
            "Porque o C# permite classes com mesmo nome em namespaces diferentes",
          ],
          answer: 1,
          explanation:
            "Cada Bounded Context é uma fronteira onde um modelo faz sentido. 'Limite' no contexto de Contas é o limite diário de saque; no contexto de Crédito é o limite de crédito aprovado. Forçar um modelo único para todos os contextos é o anti-pattern Big Ball of Mud.",
        },
        {
          question: "Qual o anti-pattern oposto ao Bounded Context?",
          options: [
            "Microserviços com muitos endpoints",
            "Big Ball of Mud — um modelo único que tenta representar todo o domínio de uma vez, gerando classes god com dezenas de campos para situações completamente diferentes",
            "Clean Architecture com muitas camadas",
            "CQRS com Event Sourcing",
          ],
          answer: 1,
          explanation:
            "O Big Ball of Mud acontece quando uma classe Conta tem 30+ campos porque cada time adiciona o que precisa sem separar contextos. O resultado é uma god class impossível de manter, testar ou evoluir. Bounded Contexts resolvem isso criando modelos focados e independentes.",
        },
      ],
    },
    {
      id: "m11t2",
      moduleId: "m11",
      title: "Entities e Value Objects",
      theory: `A distinção mais fundamental do DDD — e a mais mal compreendida por desenvolvedores iniciantes. Entender quando usar Entity e quando usar Value Object determina a qualidade da sua modelagem de domínio.

ENTITY é um objeto definido por sua IDENTIDADE, não por seus atributos. Duas contas bancárias com o mesmo saldo são entidades DIFERENTES porque têm IDs diferentes. Se a Conta #1234 tem R\$500 e a Conta #5678 também tem R\$500, são objetos completamente distintos — trocar uma pela outra faria o cliente perder acesso à SUA conta. Entities têm ciclo de vida: nascem (Conta.Abrir()), mudam de estado (Depositar, Sacar), e podem ser encerradas. A identidade persiste através de todas as mudanças de atributos. Implementação: classe com Id imutável, Equals() baseado no Id, GetHashCode() baseado no Id. Exemplos clássicos: Conta, Transacao, Cliente, Pedido, Produto.

VALUE OBJECT é um objeto definido por seus ATRIBUTOS, sem identidade própria. Dois objetos Dinheiro(100, "BRL") são IGUAIS — trocar um pelo outro não faz absolutamente nenhuma diferença. Value Objects são imutáveis: nunca mudam — cria-se um novo em vez de alterar. Sem Id próprio, sem tabela separada no banco. Encapsulam lógica e validação que pertence ao conceito. Em C# moderno, usamos record (imutável por padrão, equality por valor). Exemplos: Dinheiro (valor + moeda), Cpf, Email, Endereco, Periodo, Percentual.

POR QUE VALUE OBJECTS IMPORTAM — Primitive Obsession é o Code Smell mais comum em sistemas financeiros. Usar decimal saldo em vez de Dinheiro(valor, moeda) permite somar reais com dólares sem erro de compilação. Usar string cpf em vez de Cpf cpf permite que "12345" passe como CPF válido. Value Objects ricos garantem que objetos inválidos NUNCA existem no sistema — a validação acontece na criação, antes de qualquer regra de negócio rodar. No Nubank e PicPay, Primitive Obsession é rejeitado no code review: se o conceito tem regras, ele merece sua própria classe.

A teoria das invariantes: um Value Object garante que, se ele existe, ele é válido. Nunca existirá um Cpf com menos de 11 dígitos, um Dinheiro com valor negativo sem operação explícita, ou um Email sem @. Isso elimina dezenas de verificações defensivas espalhadas pelo código.`,
      code: `// ══════════════════════════════════════════════
// ❌ ANTES — Primitive Obsession: tudo é string/decimal
// ══════════════════════════════════════════════
public class ContaService
{
    public void AbrirConta(string cpf, string email,
        decimal saldoInicial, string moeda)
    {
        // Nenhuma validação do CPF — "abc" é aceito
        // Nenhuma validação do email — "xyz" é aceito
        // Pode somar R$ com US$ sem erro
        // Saldo negativo? Sem problema...
        var conta = new Conta
        {
            Cpf = cpf,          // string qualquer
            Email = email,      // string qualquer
            Saldo = saldoInicial, // decimal sem moeda
            Moeda = moeda       // "BRL"? "brl"? "Real"?
        };
    }

    public void Transferir(decimal valor, string moedaOrigem,
        decimal saldoDestino, string moedaDestino)
    {
        // BUG SILENCIOSO: soma R$ com US$ sem conversão!
        saldoDestino += valor; // Compilou? Sim. Correto? Não.
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Value Objects ricos + Entity com identidade
// ══════════════════════════════════════════════

// ── Value Object: Dinheiro ─────────────────────
public record Dinheiro
{
    public decimal Valor { get; }
    public string Moeda { get; }

    public Dinheiro(decimal valor, string moeda)
    {
        if (string.IsNullOrWhiteSpace(moeda))
            throw new DomainException("Moeda é obrigatória");
        if (moeda.Length != 3)
            throw new DomainException("Moeda deve ter 3 letras (ISO 4217)");

        Valor = valor;
        Moeda = moeda.ToUpperInvariant();
    }

    // Operações seguras — impede somar moedas diferentes
    public Dinheiro Somar(Dinheiro outro)
    {
        if (Moeda != outro.Moeda)
            throw new DomainException(
                $"Não é possível somar {Moeda} com {outro.Moeda}");
        return new Dinheiro(Valor + outro.Valor, Moeda);
    }

    public Dinheiro Subtrair(Dinheiro outro)
    {
        if (Moeda != outro.Moeda)
            throw new DomainException(
                $"Não é possível subtrair {Moeda} de {outro.Moeda}");
        return new Dinheiro(Valor - outro.Valor, Moeda);
    }

    public bool MaiorOuIgualA(Dinheiro outro) =>
        Moeda == outro.Moeda && Valor >= outro.Valor;

    public override string ToString() =>
        $"{Moeda} {Valor:N2}"; // "BRL 1.500,00"
}

// ── Value Object: Cpf ──────────────────────────
public record Cpf
{
    public string Numero { get; }

    public Cpf(string numero)
    {
        var limpo = new string(numero?.Where(char.IsDigit)
            .ToArray() ?? Array.Empty<char>());
        if (limpo.Length != 11)
            throw new DomainException("CPF deve ter 11 dígitos");
        if (!ValidarDigitos(limpo))
            throw new DomainException("CPF inválido");
        Numero = limpo;
    }

    private static bool ValidarDigitos(string cpf)
    {
        if (cpf.Distinct().Count() == 1) return false;
        var soma1 = 0;
        for (int i = 0; i < 9; i++)
            soma1 += (cpf[i] - '0') * (10 - i);
        var dig1 = 11 - (soma1 % 11);
        if (dig1 >= 10) dig1 = 0;
        if ((cpf[9] - '0') != dig1) return false;

        var soma2 = 0;
        for (int i = 0; i < 10; i++)
            soma2 += (cpf[i] - '0') * (11 - i);
        var dig2 = 11 - (soma2 % 11);
        if (dig2 >= 10) dig2 = 0;
        return (cpf[10] - '0') == dig2;
    }

    // Formatação: 000.000.000-00
    public string Formatado =>
        $"{Numero[..3]}.{Numero[3..6]}.{Numero[6..9]}-{Numero[9..]}";
    public override string ToString() => Formatado;
}

// ── Value Object: Email ────────────────────────
public record Email
{
    public string Endereco { get; }

    public Email(string endereco)
    {
        if (string.IsNullOrWhiteSpace(endereco) ||
            !endereco.Contains('@') ||
            !endereco.Contains('.'))
            throw new DomainException("Email inválido");
        Endereco = endereco.ToLowerInvariant().Trim();
    }

    public override string ToString() => Endereco;
}

// ── Value Object: Periodo ──────────────────────
public record Periodo
{
    public DateOnly Inicio { get; }
    public DateOnly Fim { get; }

    public Periodo(DateOnly inicio, DateOnly fim)
    {
        if (inicio > fim)
            throw new DomainException(
                "Data de início não pode ser posterior ao fim");
        Inicio = inicio;
        Fim = fim;
    }

    public int DuracaoEmDias =>
        Fim.DayNumber - Inicio.DayNumber;

    public bool Contem(DateOnly data) =>
        data >= Inicio && data <= Fim;
}

// ── Strongly-Typed Id ──────────────────────────
public record ContaId(Guid Valor)
{
    public static ContaId Novo() => new(Guid.NewGuid());
}

// ── Entity: Conta (identidade imutável) ────────
public class Conta
{
    public ContaId Id { get; private set; }
    public Cpf TitularCpf { get; private set; }
    public Email TitularEmail { get; private set; }
    public Dinheiro Saldo { get; private set; }
    public StatusConta Status { get; private set; }
    public DateTime AbertoEm { get; private set; }

    // Construtor privado — cria via Factory Method
    private Conta() { }

    // Factory Method: única forma de criar uma Conta
    public static Conta Abrir(Cpf titularCpf,
        Email titularEmail, Dinheiro saldoInicial)
    {
        if (saldoInicial.Valor < 0)
            throw new DomainException(
                "Saldo inicial não pode ser negativo");

        return new Conta
        {
            Id = ContaId.Novo(),
            TitularCpf = titularCpf,
            TitularEmail = titularEmail,
            Saldo = saldoInicial,
            Status = StatusConta.Ativa,
            AbertoEm = DateTime.UtcNow
        };
    }

    public Result Depositar(Dinheiro valor)
    {
        if (Status != StatusConta.Ativa)
            return Result.Failure("Conta não está ativa");
        Saldo = Saldo.Somar(valor);
        return Result.Success();
    }

    public Result Sacar(Dinheiro valor)
    {
        if (Status != StatusConta.Ativa)
            return Result.Failure("Conta não está ativa");
        if (!Saldo.MaiorOuIgualA(valor))
            return Result.Failure("Saldo insuficiente");
        Saldo = Saldo.Subtrair(valor);
        return Result.Success();
    }
}

// ── Igualdade: Entity vs Value Object ──────────
// Value Object: igualdade por atributos (record faz isso)
var dinheiro1 = new Dinheiro(100m, "BRL");
var dinheiro2 = new Dinheiro(100m, "BRL");
Console.WriteLine(dinheiro1 == dinheiro2); // TRUE ✅

// Entity: igualdade por identidade (Id)
var conta1 = Conta.Abrir(cpf, email, new Dinheiro(100m, "BRL"));
var conta2 = Conta.Abrir(cpf, email, new Dinheiro(100m, "BRL"));
Console.WriteLine(conta1.Id == conta2.Id); // FALSE ✅
// Mesmo titular, mesmo saldo — mas são contas DIFERENTES`,
      checklist: [
        "Criar o Value Object Dinheiro como record com validação de moeda e operadores Somar/Subtrair seguros",
        "Criar o Value Object Cpf com validação completa do dígito verificador — impossível criar um Cpf inválido",
        "Criar a Entity Conta usando os Value Objects e Factory Method (Conta.Abrir())",
        "Testar que dois Dinheiro(100, 'BRL') são iguais (==) e duas Contas diferentes não são, mesmo com mesmo saldo",
        "Substituir pelo menos 3 usos de string/decimal primitivos no projeto por Value Objects ricos",
      ],
      quiz: [
        {
          question: "Qual a diferença fundamental entre Entity e Value Object?",
          options: [
            "Entity tem mais atributos e métodos que Value Object",
            "Entity é definida por identidade (Id imutável); Value Object é definido por seus atributos — dois VOs com os mesmos atributos são iguais, independentemente de onde estão na memória",
            "Value Object não pode ser persistido no banco de dados",
            "Entity é sempre mais complexa e tem mais responsabilidades",
          ],
          answer: 1,
          explanation:
            "Entity tem identidade única: duas Contas com mesmo saldo são entidades DIFERENTES. Value Object é definido por atributos: dois Dinheiro(100, 'BRL') são IGUAIS e intercambiáveis. Usar record em C# para VOs garante equality por valor automaticamente.",
        },
        {
          question: "Por que Value Objects devem ser imutáveis?",
          options: [
            "Para melhor performance e uso de memória",
            "Para garantir consistência — se um VO pudesse ser modificado, objetos que o referenciam teriam seus dados alterados sem saber, quebrando invariantes do sistema",
            "É um requisito obrigatório do compilador C# para records",
            "Para facilitar a serialização JSON no ASP.NET Core",
          ],
          answer: 1,
          explanation:
            "Se o Dinheiro do saldo da Conta pudesse ser mutado externamente, a Conta perderia o controle de seu próprio estado. Imutabilidade garante que a Conta é a única responsável por alterar seu saldo via Depositar() e Sacar(). Por isso usamos record em C# — imutável por padrão.",
        },
        {
          question: "Por que criar um Value Object Cpf em vez de usar string?",
          options: [
            "Records são mais modernos e performáticos que strings",
            "O VO garante que nenhum CPF inválido existe no sistema — a validação acontece na criação, antes de qualquer regra de negócio rodar",
            "String não pode ser armazenada em colunas do SQL Server",
            "O compilador exige types customizados para validação",
          ],
          answer: 1,
          explanation:
            "Com string cpf, o valor '12345' ou 'abc' passariam sem erro. Com o VO Cpf, a validação do dígito verificador ocorre no construtor — se o objeto existe, ele é válido. Isso elimina dezenas de 'if (cpf.Length != 11)' espalhados pelo código. Primitive Obsession é o Code Smell mais comum em sistemas financeiros.",
        },
      ],
    },
    {
      id: "m11t3",
      moduleId: "m11",
      title: "Aggregates, Repositories e Domain Services",
      theory: `Aggregates, Repositories e Domain Services são os padrões táticos do DDD — eles traduzem os conceitos estratégicos (Bounded Contexts, Entities, Value Objects) em código que funciona de verdade em produção.

AGGREGATE é um cluster de Entities e Value Objects tratados como uma unidade de consistência. Uma única Entity é o Aggregate Root — o único ponto de entrada para todo o cluster. Regra de ouro: toda mudança dentro de um Aggregate acontece PELO Root. Ninguém acessa uma Entity filha diretamente.

Exemplo concreto: Pedido é o Aggregate Root; ItensPedido são Entities dentro do Aggregate. Para adicionar um item, você chama pedido.AdicionarItem(), nunca itemPedido.Save(). O Root garante que as regras de negócio são respeitadas (ex: limite máximo de itens, valor mínimo). Outro exemplo: Conta é o Aggregate Root; Transacoes são Entities filhas — você chama conta.Depositar(), jamais transacao.Save().

Boundaries de transação: um Aggregate = uma transação de banco. Se dois Aggregates precisam ser consistentes ao mesmo tempo, algo está errado no seu design — provavelmente devem ser um só Aggregate ou usar eventual consistency com Domain Events. Referências entre Aggregates são apenas por Id (ContaId, PedidoId), nunca por referência de objeto — isso garante que Aggregates são independentes.

Anti-pattern: God Aggregate com 20 Entities filhas. Se salvar o Aggregate carrega 500 registros do banco, ele é grande demais. Pergunta-chave: "O que PRECISA ser consistente ao mesmo tempo?" — apenas esses elementos formam o Aggregate.

REPOSITORY é uma abstração de coleção para Aggregates. IContaRepository lida com Conta (Aggregate Root) — nunca com Transacao isoladamente. Um Repository por Aggregate Root. A interface fica no Domain; a implementação fica na Infrastructure. O Domain NUNCA referencia a Infrastructure — apenas a interface (inversão de dependência do SOLID).

DOMAIN SERVICE contém operações de domínio que não pertencem naturalmente a nenhuma Entity. Transferência entre duas Contas: Debitar pertence à ContaOrigem, Creditar pertence à ContaDestino, mas coordenar a transferência não pertence a nenhuma das duas. Domain Service é puro: tem regras de negócio, mas não tem estado, não acessa banco, não envia email. Application Service é diferente: orquestra (chama Repositories, dispara eventos, gerencia transações).`,
      code: `// ══════════════════════════════════════════════
// ❌ ANTES — Sem Aggregates: acesso direto a tudo
// ══════════════════════════════════════════════
public class TransacaoService
{
    private readonly AppDbContext _db;

    // Acessa Transacao diretamente, sem passar pela Conta
    public void CriarTransacao(int contaId, decimal valor,
        string tipo)
    {
        // Ninguém garante regras da Conta!
        var transacao = new Transacao
        {
            ContaId = contaId,
            Valor = valor,
            Tipo = tipo,
            Data = DateTime.Now
        };
        _db.Transacoes.Add(transacao); // Salva direto
        _db.SaveChanges();

        // BUG: Saldo da conta não foi atualizado!
        // BUG: Conta bloqueada pode ter transação!
        // BUG: Pode criar débito maior que o saldo!
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Aggregate Root protege invariantes
// ══════════════════════════════════════════════

// ── Aggregate Root: Conta ──────────────────────
public class Conta // Aggregate Root
{
    public ContaId Id { get; private set; }
    public Cpf TitularCpf { get; private set; }
    public Dinheiro Saldo { get; private set; }
    public StatusConta Status { get; private set; }

    // Coleção PRIVADA — só o Root gerencia
    private readonly List<Transacao> _transacoes = new();
    public IReadOnlyList<Transacao> Transacoes =>
        _transacoes.AsReadOnly();

    // Factory Method
    public static Conta Abrir(Cpf titularCpf,
        Dinheiro saldoInicial)
    {
        return new Conta
        {
            Id = ContaId.Novo(),
            TitularCpf = titularCpf,
            Saldo = saldoInicial,
            Status = StatusConta.Ativa
        };
    }

    // Toda operação passa pelo Root — regras garantidas
    public Result Depositar(Dinheiro valor)
    {
        if (Status != StatusConta.Ativa)
            return Result.Failure("Conta não está ativa");

        Saldo = Saldo.Somar(valor);
        _transacoes.Add(Transacao.CriarCredito(
            Id, valor, "Depósito"));
        return Result.Success();
    }

    public Result Sacar(Dinheiro valor)
    {
        if (Status != StatusConta.Ativa)
            return Result.Failure("Conta não está ativa");
        if (!Saldo.MaiorOuIgualA(valor))
            return Result.Failure("Saldo insuficiente");

        Saldo = Saldo.Subtrair(valor);
        _transacoes.Add(Transacao.CriarDebito(
            Id, valor, "Saque"));
        return Result.Success();
    }

    public Result Bloquear(string motivo)
    {
        if (Status == StatusConta.Encerrada)
            return Result.Failure("Conta encerrada");
        Status = StatusConta.Bloqueada;
        return Result.Success();
    }
}

// ── Entity filha: Transacao (dentro do Aggregate) ──
public class Transacao // Entity — não é Aggregate Root
{
    public TransacaoId Id { get; private set; }
    public ContaId ContaId { get; private set; }
    public Dinheiro Valor { get; private set; }
    public TipoTransacao Tipo { get; private set; }
    public string Descricao { get; private set; }
    public DateTime RealizadaEm { get; private set; }

    // Factory Methods — sem construtor público
    public static Transacao CriarCredito(ContaId contaId,
        Dinheiro valor, string descricao)
    {
        return new Transacao
        {
            Id = new TransacaoId(Guid.NewGuid()),
            ContaId = contaId,
            Valor = valor,
            Tipo = TipoTransacao.Credito,
            Descricao = descricao,
            RealizadaEm = DateTime.UtcNow
        };
    }

    public static Transacao CriarDebito(ContaId contaId,
        Dinheiro valor, string descricao)
    {
        return new Transacao
        {
            Id = new TransacaoId(Guid.NewGuid()),
            ContaId = contaId,
            Valor = valor,
            Tipo = TipoTransacao.Debito,
            Descricao = descricao,
            RealizadaEm = DateTime.UtcNow
        };
    }
}

// ── Repository: interface no Domain ────────────
namespace SistemaFinanceiro.Domain.Repositories;

// Um Repository POR Aggregate Root — nunca para Entity filha
public interface IContaRepository
{
    Task<Conta?> GetByIdAsync(ContaId id);
    Task<Conta?> GetByCpfAsync(Cpf cpf);
    Task<IReadOnlyList<Conta>> GetAtivasAsync();
    Task AddAsync(Conta conta);
    Task SaveChangesAsync();
    // NÃO existe GetTransacaoById — Transacao só via Conta
}

// ── Repository: implementação na Infrastructure ──
namespace SistemaFinanceiro.Infrastructure.Persistence;

public class ContaEfRepository : IContaRepository
{
    private readonly FinanceiroDbContext _db;

    public ContaEfRepository(FinanceiroDbContext db)
        => _db = db;

    public async Task<Conta?> GetByIdAsync(ContaId id) =>
        await _db.Contas
            .Include(c => c.Transacoes)
            .FirstOrDefaultAsync(c => c.Id == id);

    public async Task<Conta?> GetByCpfAsync(Cpf cpf) =>
        await _db.Contas
            .FirstOrDefaultAsync(c => c.TitularCpf == cpf);

    public async Task<IReadOnlyList<Conta>> GetAtivasAsync() =>
        await _db.Contas
            .Where(c => c.Status == StatusConta.Ativa)
            .ToListAsync();

    public async Task AddAsync(Conta conta) =>
        await _db.Contas.AddAsync(conta);

    public async Task SaveChangesAsync() =>
        await _db.SaveChangesAsync();
}

// ── Domain Service: TransferenciaService ───────
namespace SistemaFinanceiro.Domain.Services;

// Domain Service: regra de negócio que envolve DOIS Aggregates
// Sem estado, sem I/O, sem banco — puro
public class TransferenciaService
{
    public Result Executar(Conta origem, Conta destino,
        Dinheiro valor)
    {
        // Validação: mesma conta
        if (origem.Id == destino.Id)
            return Result.Failure(
                "Não é possível transferir para a mesma conta");

        // Debitar da origem (Root valida regras)
        var resultadoSaque = origem.Sacar(valor);
        if (!resultadoSaque.IsSuccess)
            return resultadoSaque;

        // Creditar no destino (Root valida regras)
        var resultadoDeposito = destino.Depositar(valor);
        if (!resultadoDeposito.IsSuccess)
        {
            // Rollback: devolver valor à origem
            origem.Depositar(valor);
            return resultadoDeposito;
        }

        return Result.Success();
    }
    // Note: TransferenciaService NÃO salva no banco
    // Quem salva é o Application Service (Use Case)
}`,
      checklist: [
        "Definir os Aggregates do sistema financeiro: Conta como Root com Transacoes como Entities filhas",
        "Criar IContaRepository com interface no projeto Domain/ — sem referência a EF Core ou Infrastructure",
        "Implementar ContaEfRepository em Infrastructure/Persistence/ usando EF Core",
        "Criar TransferenciaService como Domain Service puro (sem banco, sem email, sem estado)",
        "Verificar que Domain/ não tem nenhuma referência a Infrastructure/ (dotnet list reference)",
      ],
      quiz: [
        {
          question:
            "Por que acessar uma Entity filha diretamente (sem passar pelo Aggregate Root) é problemático?",
          options: [
            "É mais lento por causa do carregamento lazy do EF Core",
            "Viola os invariantes do Aggregate — o Root é responsável por garantir a consistência do cluster; acesso direto bypassa as regras de negócio",
            "Não compila em C# quando a Entity é interna",
            "O Entity Framework Core não suporta queries diretas em Entities filhas",
          ],
          answer: 1,
          explanation:
            "Se alguém cria uma Transacao diretamente no banco sem passar pela Conta, as regras (saldo suficiente, conta ativa, limite diário) são bypassadas. O Aggregate Root existe para garantir que TODAS as invariantes são respeitadas em TODAS as operações.",
        },
        {
          question:
            "Quantos Repositories devem existir para um Aggregate com 3 Entities filhas?",
          options: [
            "3 — um Repository para cada Entity do cluster",
            "1 — apenas para o Aggregate Root, pois Entities filhas só existem dentro do contexto do Aggregate e não são gerenciadas independentemente",
            "Depende do tamanho de cada Entity filha",
            "1 por tabela do banco de dados",
          ],
          answer: 1,
          explanation:
            "Repository existe apenas para Aggregate Roots. Transacao é uma Entity filha de Conta — não deve ter ITransacaoRepository. Para buscar transações de uma conta, você carrega a Conta inteira (com Include) e acessa conta.Transacoes. Isso garante que as invariantes do Aggregate são sempre respeitadas.",
        },
        {
          question:
            "Qual a diferença entre Domain Service e Application Service?",
          options: [
            "Domain Service é mais rápido por não acessar banco de dados",
            "Domain Service contém regras de negócio puras (sem I/O, sem banco, sem email); Application Service orquestra — chama Repositories, inicia transações, dispara eventos de integração",
            "Application Service é da camada de apresentação (Controllers)",
            "São a mesma coisa, apenas nomenclatura diferente por equipe",
          ],
          answer: 1,
          explanation:
            "TransferenciaService (Domain) sabe que não pode transferir para a mesma conta e valida saldos — regra de negócio pura. RealizarTransferenciaUseCase (Application) busca as Contas no Repository, chama o TransferenciaService, salva no banco e publica Domain Events — orquestração.",
        },
      ],
    },
    {
      id: "m11t4",
      moduleId: "m11",
      title: "Domain Events e Application Layer",
      theory: `Domain Events e a Application Layer completam a arquitetura DDD. Juntos, eles conectam as regras de negócio do Domain com o mundo externo (banco de dados, APIs, notificações) de forma desacoplada e testável.

DOMAIN EVENTS representam algo que ACONTECEU no domínio. Nomenclatura sempre no passado: ContaAberta, TransacaoRealizada, LimiteExcedido, ContaBloqueada. Não são comandos (AbrirConta) nem intenções — são fatos imutáveis. Quando uma Conta realiza um saque, ela registra o evento TransacaoRealizada. A Conta não sabe (e não deve saber) que existe um NotificacaoService ou um AuditoriaLogger — ela apenas registra o fato.

Vantagem: desacoplamento total. A Conta não depende de email, SMS, push notification, log ou cache — ela registra eventos e segue sua vida. Outros componentes se inscrevem para reagir a esses eventos. Adicionar um novo efeito colateral (ex: atualizar dashboard em tempo real) não requer alterar a Conta — basta criar um novo handler.

Implementação simples: uma lista de eventos no Aggregate, publicados APÓS o SaveChanges. Por quê após? Porque publicar antes poderia disparar notificações para uma operação que ainda vai falhar no banco. MediatR é a biblioteca mais usada no .NET para publicação de Domain Events (INotification + INotificationHandler).

Domain Events vs Integration Events: Domain Event é intra-processo (dentro da mesma aplicação, mesmo banco); Integration Event é inter-serviço (vai para RabbitMQ, Kafka — assunto de microsserviços, Fase 8).

APPLICATION LAYER é o orquestrador entre a API e o Domain. Cada Use Case (Application Service) corresponde a um caso de uso de negócio: AbrirContaUseCase, RealizarTransferenciaUseCase, GerarExtratoUseCase. Responsabilidades: buscar Aggregates via Repository, chamar Domain Services, publicar Domain Events, iniciar e commitar transações, mapear Domain → DTO para a API. O que a Application Layer NÃO faz: regras de negócio (Domain), acesso direto ao banco (Infrastructure), validação de formato (FluentValidation na API).

CLEAN ARCHITECTURE — a direção das dependências: Domain ← Application ← Infrastructure ← API. Domain não depende de ninguém. API depende de todos. Isso garante que o core do negócio é testável sem banco, sem HTTP, sem framework. Empresas como Nubank e iFood seguem esse padrão rigorosamente — o Domain é o ativo mais valioso da empresa.`,
      code: `// ══════════════════════════════════════════════
// ❌ ANTES — Efeitos colaterais acoplados no Service
// ══════════════════════════════════════════════
public class ContaService
{
    private readonly AppDbContext _db;
    private readonly SmtpClient _smtp;
    private readonly ILogger _logger;
    private readonly CacheService _cache;

    // Cada novo efeito colateral = mais dependência aqui
    public void Depositar(int contaId, decimal valor)
    {
        var conta = _db.Contas.Find(contaId);
        conta.Saldo += valor;
        _db.SaveChanges();

        // Efeitos colaterais ACOPLADOS ao Service
        _smtp.Send(conta.Email, "Depósito realizado");
        _logger.LogInformation("Depósito: {Id}", contaId);
        _cache.Invalidar($"saldo:{contaId}");
        // Quer adicionar push notification? Muda AQUI
        // Quer adicionar webhook? Muda AQUI
        // Quer adicionar auditoria? Muda AQUI
        // Classe vira God Service com 20 dependências
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Domain Events + Application Layer
// ══════════════════════════════════════════════

// ── Interface base para Domain Events ──────────
namespace SistemaFinanceiro.Domain.Shared;

public interface IDomainEvent
{
    DateTime OcorridoEm { get; }
}

// ── Domain Events (fatos imutáveis) ────────────
namespace SistemaFinanceiro.Domain.Events;

public record ContaAbertaEvent(
    ContaId ContaId,
    Cpf TitularCpf,
    Dinheiro SaldoInicial,
    DateTime OcorridoEm
) : IDomainEvent;

public record TransacaoRealizadaEvent(
    ContaId ContaId,
    Dinheiro Valor,
    TipoTransacao Tipo,
    string Descricao,
    DateTime OcorridoEm
) : IDomainEvent;

public record ContaBloqueadaEvent(
    ContaId ContaId,
    string Motivo,
    DateTime OcorridoEm
) : IDomainEvent;

// ── Aggregate com lista de eventos ─────────────
public class Conta
{
    // ... propriedades e Value Objects do tópico 11.2 ...

    // Lista INTERNA de eventos pendentes
    private readonly List<IDomainEvent> _eventos = new();
    public IReadOnlyList<IDomainEvent> Eventos =>
        _eventos.AsReadOnly();
    public void LimparEventos() => _eventos.Clear();

    public static Conta Abrir(Cpf titularCpf,
        Dinheiro saldoInicial)
    {
        var conta = new Conta
        {
            Id = ContaId.Novo(),
            TitularCpf = titularCpf,
            Saldo = saldoInicial,
            Status = StatusConta.Ativa
        };
        // Registra o fato: conta foi aberta
        conta._eventos.Add(new ContaAbertaEvent(
            conta.Id, titularCpf, saldoInicial,
            DateTime.UtcNow));
        return conta;
    }

    public Result Depositar(Dinheiro valor)
    {
        if (Status != StatusConta.Ativa)
            return Result.Failure("Conta não está ativa");
        Saldo = Saldo.Somar(valor);
        // Registra o fato: transação realizada
        _eventos.Add(new TransacaoRealizadaEvent(
            Id, valor, TipoTransacao.Credito,
            "Depósito", DateTime.UtcNow));
        return Result.Success();
    }

    public Result Bloquear(string motivo)
    {
        if (Status == StatusConta.Encerrada)
            return Result.Failure("Conta encerrada");
        Status = StatusConta.Bloqueada;
        _eventos.Add(new ContaBloqueadaEvent(
            Id, motivo, DateTime.UtcNow));
        return Result.Success();
    }
}

// ── Use Case: Application Layer ────────────────
namespace SistemaFinanceiro.Application.UseCases;

// Um Use Case por caso de uso de negócio
public class RealizarTransferenciaUseCase
{
    private readonly IContaRepository _contaRepo;
    private readonly TransferenciaService _transferencia;
    private readonly IPublisher _publisher;

    public RealizarTransferenciaUseCase(
        IContaRepository contaRepo,
        TransferenciaService transferencia,
        IPublisher publisher)
    {
        _contaRepo = contaRepo;
        _transferencia = transferencia;
        _publisher = publisher;
    }

    public async Task<Result> ExecuteAsync(
        RealizarTransferenciaCommand cmd)
    {
        // 1. Buscar Aggregates via Repository
        var origem = await _contaRepo
            .GetByIdAsync(cmd.ContaOrigemId);
        if (origem is null)
            return Result.Failure("Conta origem não encontrada");

        var destino = await _contaRepo
            .GetByIdAsync(cmd.ContaDestinoId);
        if (destino is null)
            return Result.Failure("Conta destino não encontrada");

        // 2. Chamar Domain Service (regras de negócio)
        var resultado = _transferencia
            .Executar(origem, destino, cmd.Valor);
        if (!resultado.IsSuccess)
            return resultado;

        // 3. Persistir (Infrastructure via interface)
        await _contaRepo.SaveChangesAsync();

        // 4. Publicar Domain Events APÓS SaveChanges
        foreach (var evento in origem.Eventos)
            await _publisher.Publish(evento);
        foreach (var evento in destino.Eventos)
            await _publisher.Publish(evento);

        origem.LimparEventos();
        destino.LimparEventos();

        return Result.Success();
    }
}

// ── Command (input do Use Case) ────────────────
public record RealizarTransferenciaCommand(
    ContaId ContaOrigemId,
    ContaId ContaDestinoId,
    Dinheiro Valor
);

// ── Handlers dos Domain Events ─────────────────
// Cada handler é independente — adicionar novo = 0 mudanças
using MediatR;

public class EnviarNotificacaoHandler
    : INotificationHandler<TransacaoRealizadaEvent>
{
    private readonly INotificacaoService _notificacao;

    public EnviarNotificacaoHandler(
        INotificacaoService notificacao)
        => _notificacao = notificacao;

    public async Task Handle(
        TransacaoRealizadaEvent evt,
        CancellationToken ct)
    {
        await _notificacao.EnviarAsync(evt.ContaId,
            $"Transação de {evt.Valor} realizada");
    }
}

public class RegistrarAuditoriaHandler
    : INotificationHandler<TransacaoRealizadaEvent>
{
    private readonly IAuditoriaLogger _auditoria;

    public RegistrarAuditoriaHandler(
        IAuditoriaLogger auditoria)
        => _auditoria = auditoria;

    public async Task Handle(
        TransacaoRealizadaEvent evt,
        CancellationToken ct)
    {
        await _auditoria.RegistrarAsync(
            $"Conta {evt.ContaId}: {evt.Tipo} de {evt.Valor}");
    }
}

// ── Clean Architecture: direção das dependências ─
// Domain/      → não depende de ninguém
// Application/ → depende de Domain/
// Infrastructure/ → depende de Domain/ e Application/
// API/         → depende de todos
//
// Domain.csproj:    ZERO referências externas
// Application.csproj: <ProjectReference Domain.csproj />
// Infrastructure.csproj: <ProjectReference Domain.csproj />
//                        <ProjectReference Application.csproj />
// API.csproj: <ProjectReference Application.csproj />
//             <ProjectReference Infrastructure.csproj />`,
      checklist: [
        "Criar a interface IDomainEvent e adicionar lista de eventos na Entity Conta (Aggregate Root)",
        "Implementar ContaAbertaEvent e TransacaoRealizadaEvent como records imutáveis",
        "Instalar MediatR (dotnet add package MediatR) e criar o Use Case RealizarTransferenciaUseCase",
        "Criar um Handler que loga o evento TransacaoRealizada no console (simulando notificação)",
        "Verificar que Domain Events são publicados APÓS SaveChanges — nunca antes",
      ],
      quiz: [
        {
          question:
            "Por que Domain Events são nomeados no passado (TransacaoRealizada e não RealizarTransacao)?",
          options: [
            "É apenas convenção sem motivo técnico real",
            "Porque representam algo que JÁ aconteceu no domínio — um fato imutável, não uma intenção ou comando",
            "Para diferir da nomenclatura de Controllers no ASP.NET",
            "É exigência da biblioteca MediatR para publicação",
          ],
          answer: 1,
          explanation:
            "Domain Events são fatos: TransacaoRealizada, ContaAberta, LimiteExcedido. Comandos são intenções: RealizarTransacao, AbrirConta. Essa distinção é fundamental — você não pode 'desfazer' um evento, mas pode rejeitar um comando. O Domain registra eventos após a regra de negócio executar com sucesso.",
        },
        {
          question:
            "Qual a responsabilidade de um Use Case na Application Layer?",
          options: [
            "Conter as regras de negócio validando saldo, limites e status da conta",
            "Orquestrar — buscar Aggregates, chamar Domain Services, salvar via Repository e publicar Domain Events. Sem regras de negócio (Domain) e sem acesso direto ao banco (Infrastructure)",
            "Substituir os Controllers da API e receber requisições HTTP",
            "Validar os dados de entrada usando FluentValidation",
          ],
          answer: 1,
          explanation:
            "O Use Case é um orquestrador: busca Conta no Repository (I/O), chama TransferenciaService.Executar() (regra de negócio no Domain), salva com SaveChanges (I/O), e publica eventos (notificação). Ele NÃO contém regras de negócio — isso é responsabilidade do Domain.",
        },
        {
          question:
            "Por que os Domain Events são publicados APÓS o SaveChanges e não antes?",
          options: [
            "Por convenção do MediatR e padrão de nomenclatura",
            "Para garantir que os efeitos colaterais (notificação, auditoria) só acontecem se a transação foi commitada com sucesso — publicar antes poderia disparar ações para uma operação que ainda vai falhar",
            "Por limitação técnica do Entity Framework Core com transações",
            "Não importa a ordem — é apenas preferência do desenvolvedor",
          ],
          answer: 1,
          explanation:
            "Se o SaveChanges falha (erro de concorrência, constraint violation), os eventos nunca devem ser disparados. Imagine enviar 'Transferência de R$10.000 realizada' ao cliente quando o banco rollback a operação. Publicar APÓS o commit garante que só notificamos sobre fatos que realmente persistiram.",
        },
      ],
    },
  ],
};
