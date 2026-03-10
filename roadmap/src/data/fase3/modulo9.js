export const MODULO_9 = {
  id: "m9",
  title: "Clean Code",
  icon: "✨",
  week: "Semana 9",
  color: "#06B6D4",
  topics: [
    {
      id: "m9t1",
      moduleId: "m9",
      title: "Nomes que Revelam Intenção",
      theory: `Clean Code começa pela escolha dos nomes. Robert C. Martin diz: "o nome de uma variável, função ou classe deve responder três perguntas — por que existe, o que faz e como é usada." Se o nome precisar de um comentário para ser entendido, ele está errado.

Nomes crípticos são o anti-pattern mais comum em código de iniciante. Variáveis como d, x, temp, data, flag não comunicam nada. Compare: d vs diasAteVencimento, lst vs transacoesPendentes, v vs valorTotalComDesconto. O compilador aceita qualquer nome, mas o custo cognitivo de ler código mal nomeado se acumula exponencialmente em equipes grandes.

Funções devem ser verbos que descrevem a ação: calcularJuros(), validarCPF(), enviarNotificacao(). Anti-patterns clássicos: proc(), doStuff(), handle(), execute() — nomes genéricos que escondem o que realmente acontece. Se você não consegue nomear a função sem usar palavras vagas, provavelmente ela faz coisas demais.

Classes devem ser substantivos específicos do domínio: ContaCorrente, ProcessadorPagamento, HistoricoTransacao. Anti-patterns: Manager, Processor, Handler, Helper — são sinais de que o desenvolvedor não soube nomear porque a classe tem responsabilidades demais. ContaManager pode ser dividida em ContaService, ContaFactory e ContaRepository.

Booleanos devem ser perguntas naturais: estaAtivo, temSaldo, foiAprovado, podeSacar. Lê-se naturalmente: if (clienteEstaAtivo && contaTemSaldo). Evite: flag, status, check — não comunicam o significado.

Constantes eliminam "números mágicos": 86400 não diz nada, SEGUNDOS_POR_DIA é autoexplicativo. 0.15 vira TAXA_IOF, 30 vira DIAS_PARA_VENCIMENTO. O custo é zero e o ganho é imenso.

Em projetos bilíngues (realidade corporativa brasileira), a convenção é: termos técnicos e infraestrutura em inglês (Controller, Repository, Service), termos do domínio de negócio em português (Conta, Transacao, Extrato, Boleto). Empresas como Nubank e PicPay seguem essa abordagem — o code review fica mais natural quando o domínio fala a língua do negócio.

Regra de ouro: se você precisa de um comentário para explicar o nome, o nome está errado. Renomear é a refatoração mais barata e mais poderosa que existe.`,
      code: `// ══════════════════════════════════════════════
// ❌ ANTES — Código bancário mal nomeado
// ══════════════════════════════════════════════
public class Manager  // Nome genérico — faz o quê?
{
    // O que é "d"? O que é "lst"? O que é "v"?
    public decimal proc(int d, List<object> lst)
    {
        decimal v = 0;      // v de quê?
        bool fl = false;    // flag de quê?
        decimal r = 0;      // resultado de quê?

        foreach (var item in lst)
        {
            var x = (decimal)item;  // x é o quê?
            if (x > 0)
            {
                v += x;     // somando... créditos? débitos?
                fl = true;  // marcando... o quê?
            }
            else
            {
                r += x;     // acumulando... o quê?
            }
        }

        // Ninguém sabe o que d * 0.001 significa
        return v + r - (d * 0.001m);
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Mesmo código, nomes que revelam intenção
// ══════════════════════════════════════════════
public class CalculadoraSaldo  // Nome diz exatamente o que a classe faz
{
    private const decimal TAXA_MANUTENCAO_DIARIA = 0.001m;

    public decimal CalcularSaldoAposTransacoes(
        int diasEmAberto,
        List<Transacao> transacoes)
    {
        decimal totalCreditos = 0m;
        decimal totalDebitos = 0m;
        bool possuiMovimentacao = false;

        foreach (var transacao in transacoes)
        {
            if (transacao.Valor > 0)
            {
                totalCreditos += transacao.Valor;
                possuiMovimentacao = true;
            }
            else
            {
                totalDebitos += transacao.Valor;  // já é negativo
            }
        }

        decimal taxaManutencao = diasEmAberto * TAXA_MANUTENCAO_DIARIA;
        decimal saldoFinal = totalCreditos + totalDebitos - taxaManutencao;

        return saldoFinal;
    }
}

// ══════════════════════════════════════════════
// Booleanos — perguntas naturais
// ══════════════════════════════════════════════
bool clienteEstaAtivo = true;         // ✅ if (clienteEstaAtivo)
bool contaTemSaldo = saldo > 0;       // ✅ if (contaTemSaldo)
bool transacaoFoiAprovada = true;     // ✅ if (transacaoFoiAprovada)
bool podeSacar = saldo >= valorSaque; // ✅ if (podeSacar)

// bool flag = true;    ❌ flag de quê?
// bool status = false; ❌ status de quê?
// bool check = true;   ❌ check do quê?

// ══════════════════════════════════════════════
// Constantes — eliminar números mágicos
// ══════════════════════════════════════════════
// ❌ O que significa 86400? E 0.15? E 30?
// if (segundos > 86400) ...
// var imposto = valor * 0.15;
// if (dias > 30) ...

// ✅ Constantes nomeadas
const int SEGUNDOS_POR_DIA = 86_400;
const decimal TAXA_IOF = 0.15m;
const int DIAS_PARA_VENCIMENTO = 30;

// ══════════════════════════════════════════════
// Classes — domínio em português, técnico em inglês
// ══════════════════════════════════════════════
// ❌ Anti-patterns de nomenclatura
// ContaManager, DataProcessor, TransacaoHandler, UtilHelper

// ✅ Nomes específicos que revelam responsabilidade
public class ContaCorrente { }         // Entidade do domínio
public class ProcessadorPagamento { }  // Ação clara
public class HistoricoTransacao { }    // Conceito de negócio
public class ValidadorCpf { }          // Responsabilidade única

// ══════════════════════════════════════════════
// Console App para demonstrar a diferença
// ══════════════════════════════════════════════
// dotnet new console -n CleanNaming && cd CleanNaming

var transacoes = new List<Transacao>
{
    new("Salário", 5000m),
    new("Aluguel", -1500m),
    new("Supermercado", -800m),
    new("Freelance", 2000m)
};

var calculadora = new CalculadoraSaldo();
decimal saldoFinal = calculadora
    .CalcularSaldoAposTransacoes(diasEmAberto: 15, transacoes);

Console.WriteLine(\$"Saldo final: R\\$ {saldoFinal:F2}");
// Saída: Saldo final: R$ 4699.99

public record Transacao(string Descricao, decimal Valor);`,
      checklist: [
        "Abrir o projeto E-commerce da Fase 2 e buscar por variáveis com menos de 4 letras",
        "Renomear pelo menos 5 variáveis/métodos ruins encontrados",
        "Criar um arquivo Glossario.md com os termos do domínio financeiro em português",
        "Praticar: escrever 10 nomes ruins e refatorar para nomes descritivos",
        "Usar Find & Replace no VSCode para renomear com segurança (F2 no C#)",
      ],
      quiz: [
        {
          question:
            'Qual o problema principal de nomear uma variável "d" ou "data"?',
          options: [
            "Ocupa menos memória",
            "É tecnicamente válido mas sem contexto dificulta leitura",
            "Causa erro de compilação",
            "Não funciona com LINQ",
          ],
          answer: 1,
          explanation:
            "Nomes sem contexto são legais para o compilador mas custam tempo cognitivo de todos que leem o código depois — incluindo você mesmo em 3 meses.",
        },
        {
          question:
            "Qual o melhor nome para uma variável booleana que indica se um cliente pagou?",
          options: ["pagamento", "status", "clientePagou", "isPay"],
          answer: 2,
          explanation:
            'Booleanos devem ser perguntas — clientePagou lê naturalmente como "if (clientePagou)" que é autoexplicativo. "status" é vago demais, "pagamento" parece um objeto, "isPay" mistura idiomas.',
        },
        {
          question:
            'Por que "Manager", "Processor" e "Handler" são considerados anti-patterns de nomenclatura?',
          options: [
            "São palavras reservadas do C#",
            "Indicam que a classe provavelmente tem responsabilidades demais e o desenvolvedor não soube nomear bem",
            "Não funcionam como nome de classe",
            "São nomes muito longos",
          ],
          answer: 1,
          explanation:
            "Quando não se consegue dar um nome específico à classe é sinal de que ela faz coisas demais. ContaManager pode ser ContaService, ContaFactory ou ContaRepository — cada um com responsabilidade clara.",
        },
      ],
    },
    {
      id: "m9t2",
      moduleId: "m9",
      title: "Funções Pequenas e Responsabilidade Única",
      theory: `A regra fundamental de funções em Clean Code: uma função deve fazer UMA coisa, fazê-la bem e fazer SOMENTE aquela coisa. Se a descrição da função contém "e", ela faz coisas demais.

O tamanho ideal de uma função é de 5 a 20 linhas. Acima de 30, quase certamente deve ser dividida. Funções longas são o Code Smell mais comum em código corporativo — métodos de 100+ linhas são comuns em sistemas legados e custam caro para manter.

Níveis de abstração: uma função não deve misturar decisões de alto nível (ProcessarPagamento, ValidarPedido) com detalhes de baixo nível (string.Split(',')[2].Trim(), Convert.ToDecimal). Se você está lendo uma função e precisa alternar entre "o que o sistema faz" e "como formata strings", os níveis de abstração estão misturados.

Command Query Separation (CQS): funções que mudam estado (Commands) NÃO retornam valor; funções que retornam dados (Queries) NÃO mudam estado. Exemplo: AtualizarSaldo() é Command (void), ObterSaldo() é Query (retorna decimal). Misturar os dois gera bugs sutis — uma função que retorna o saldo E debita o valor é imprevisível.

Parâmetros: 0-2 é ideal, 3 é aceitável, 4 ou mais indica que você precisa de uma classe (Parameter Object). Exemplo: CriarPedido(int clienteId, string endereco, decimal valor, string cupom, bool expresso, DateTime entrega) deve virar CriarPedido(DadosPedido dados).

Flag parameters são o pior anti-pattern: EnviarEmail(Cliente c, bool isUrgente) indica que a função faz duas coisas diferentes. Divida em EnviarEmailUrgente() e EnviarEmailNormal().

Extract Method é a refatoração mais usada no dia a dia: selecione o trecho, F1 no VSCode ou Ctrl+R+M no Visual Studio, e extraia para uma função com nome descritivo. Em Pull Requests corporativos, funções gigantes são motivo de rejeição — times do iFood e Nubank têm regras explícitas sobre tamanho máximo de métodos.`,
      code: `// ══════════════════════════════════════════════
// ❌ ANTES — Método de 80 linhas que faz tudo
// ══════════════════════════════════════════════
public class TransacaoService
{
    private readonly AppDbContext _db;

    public TransacaoService(AppDbContext db) => _db = db;

    // Este método: valida, busca, calcula, atualiza, notifica e loga
    // 6 responsabilidades em uma única função!
    public string ProcessarTransacao(
        int contaId, decimal valor, string tipo,
        bool enviarEmail, string descricao, int usuarioId) // 6 parâmetros!
    {
        // Validação (responsabilidade 1)
        if (valor <= 0)
            return "Valor inválido";
        if (string.IsNullOrEmpty(tipo))
            return "Tipo obrigatório";
        if (tipo != "credito" && tipo != "debito")
            return "Tipo deve ser credito ou debito";

        // Busca no banco (responsabilidade 2)
        var conta = _db.Contas.Find(contaId);
        if (conta == null)
            return "Conta não encontrada";

        // Regra de negócio (responsabilidade 3)
        if (tipo == "debito" && conta.Saldo < valor)
            return "Saldo insuficiente";

        if (tipo == "debito")
            conta.Saldo -= valor;
        else
            conta.Saldo += valor;

        // Gera extrato (responsabilidade 4)
        var extrato = new Extrato
        {
            ContaId = contaId,
            Valor = valor,
            Tipo = tipo,
            Descricao = descricao,
            Data = DateTime.Now,
            SaldoAnterior = conta.Saldo + (tipo == "debito" ? valor : -valor),
            SaldoAtual = conta.Saldo
        };
        _db.Extratos.Add(extrato);
        _db.SaveChanges();

        // Notificação (responsabilidade 5)
        if (enviarEmail) // Flag parameter!
        {
            var smtp = new SmtpClient("smtp.empresa.com");
            var msg = new MailMessage(
                "noreply@banco.com",
                conta.Email,
                "Transação realizada",
                \$"Valor: R\\$ {valor:F2}");
            smtp.Send(msg);
        }

        // Auditoria (responsabilidade 6)
        Console.WriteLine(
            \$"[{DateTime.Now}] User {usuarioId}: " +
            \$"{tipo} R\\$ {valor} na conta {contaId}");

        return "OK";
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Orquestrador de 10 linhas + funções focadas
// ══════════════════════════════════════════════
public class TransacaoService
{
    private readonly IContaRepository _contas;
    private readonly IExtratoService _extratos;
    private readonly INotificacaoService _notificacao;
    private readonly IAuditoriaLogger _auditoria;

    public TransacaoService(
        IContaRepository contas,
        IExtratoService extratos,
        INotificacaoService notificacao,
        IAuditoriaLogger auditoria)
    {
        _contas = contas;
        _extratos = extratos;
        _notificacao = notificacao;
        _auditoria = auditoria;
    }

    // Orquestrador: 8 linhas, um nível de abstração
    public Result<string> ProcessarTransacao(DadosTransacao dados)
    {
        var validacao = ValidarTransacao(dados);
        if (!validacao.Sucesso) return validacao;

        var conta = _contas.ObterPorId(dados.ContaId);
        if (conta is null) return Result<string>.Erro("Conta não encontrada");

        AplicarMovimentacao(conta, dados);
        _extratos.GerarRegistro(conta, dados);
        _notificacao.NotificarCliente(conta, dados);
        _auditoria.Registrar(dados);

        return Result<string>.Ok("Transação processada");
    }

    // Query: retorna resultado, não muda estado
    private Result<string> ValidarTransacao(DadosTransacao dados)
    {
        if (dados.Valor <= 0)
            return Result<string>.Erro("Valor inválido");
        if (string.IsNullOrEmpty(dados.Tipo))
            return Result<string>.Erro("Tipo obrigatório");
        return Result<string>.Ok("Válido");
    }

    // Command: muda estado, não retorna dados
    private void AplicarMovimentacao(Conta conta, DadosTransacao dados)
    {
        if (dados.Tipo == "debito")
            conta.Debitar(dados.Valor);
        else
            conta.Creditar(dados.Valor);
    }
}

// Parameter Object — substitui 6 parâmetros
public record DadosTransacao(
    int ContaId,
    decimal Valor,
    string Tipo,
    string Descricao,
    int UsuarioId);

// Result pattern — Command/Query limpo
public record Result<T>(bool Sucesso, T Dados, string Mensagem)
{
    public static Result<T> Ok(T dados) => new(true, dados, "");
    public static Result<T> Erro(string msg) => new(false, default!, msg);
}`,
      checklist: [
        "Encontrar no projeto Fase 2 uma função/método com mais de 30 linhas",
        "Identificar os diferentes níveis de abstração dentro dela",
        "Aplicar Extract Method para dividir em funções menores (F1 no VSCode = refatorar)",
        "Verificar se alguma função tem parâmetro booleano — refatorar para dois métodos",
        "Reescrever um método do zero aplicando CQS consciente",
      ],
      quiz: [
        {
          question: 'O que significa "níveis de abstração" em uma função?',
          options: [
            "O número de loops aninhados",
            "Misturar decisões de alto nível (o quê fazer) com detalhes de baixo nível (como fazer) na mesma função",
            "A quantidade de parâmetros",
            "O número de linhas",
          ],
          answer: 1,
          explanation:
            "Níveis de abstração se referem à mistura de lógica de negócio (alto nível) com detalhes de implementação (baixo nível) na mesma função, dificultando compreensão e manutenção.",
        },
        {
          question:
            "Qual o problema de um parâmetro booleano em uma função como EnviarEmail(Cliente c, bool isUrgente)?",
          options: [
            "Boolean não pode ser parâmetro em C#",
            "Indica que a função na verdade faz duas coisas diferentes e deveria ser dividida em duas",
            "Parâmetros booleanos são mais lentos",
            "Apenas questão de estilo",
          ],
          answer: 1,
          explanation:
            "Flag parameters indicam que a função tem dois comportamentos diferentes controlados por um booleano. Dividir em EnviarEmailUrgente() e EnviarEmailNormal() é mais claro e testável.",
        },
        {
          question: "O que é Command Query Separation (CQS)?",
          options: [
            "Uma biblioteca do .NET",
            "Funções que modificam estado não devem retornar dados; funções que retornam dados não devem modificar estado",
            "O padrão CQRS para microserviços",
            "Separar comandos SQL de queries",
          ],
          answer: 1,
          explanation:
            "CQS é o princípio de que Commands (mudam estado) e Queries (retornam dados) devem ser separados. Isso torna o código previsível — uma Query pode ser chamada várias vezes sem efeito colateral.",
        },
      ],
    },
    {
      id: "m9t3",
      moduleId: "m9",
      title: "Comentários: Quando Escrever e Quando Deletar",
      theory: `A verdade dura sobre comentários: a maioria é sinal de código que precisou ser explicado porque não estava claro o suficiente. Comentários não são inerentemente bons — são um mal necessário quando o código sozinho não consegue se expressar.

Comentários que DEVEM ser deletados imediatamente:
• Explicações do óbvio: "// incrementa o contador" antes de contador++ não adiciona nada, é ruído.
• Código comentado: use Git para isso. Código comentado cria confusão — "devo reativar isso?" — e fica desatualizado rapidamente.
• Histórico de alterações: "// 2024-01-15 João: alterou cálculo" — o git log já faz isso melhor.
• Traduções literais: "// busca o produto" antes de db.Produtos.Find(id) — o código já diz isso.

Comentários que DEVEM existir:
• Decisões de negócio não óbvias: "// Preço não pode ser alterado retroativamente em pedidos faturados — regra fiscal SEFAZ" — isso o código não consegue expressar sozinho.
• Avisos de armadilhas: "// CUIDADO: API do banco limita a 100 req/min — usar throttle" — previne bugs futuros.
• TODO com responsável e data: "// TODO(@maria, 2024-03): migrar para nova API de pagamento v3" — rastreável.
• Documentação XML (///) para APIs públicas: obrigatória em endpoints — gera documentação automática no Swagger.

Comentários que enganam são PIORES que nenhum: um comentário desatualizado que contradiz o código induz bugs. O desenvolvedor confia no comentário, não lê o código, e introduz regressões. Comentários mentem — código não.

Em ASP.NET Core, comentários XML (///) em controllers são essenciais — o Swagger os consome para gerar documentação interativa. Times corporativos como iFood e PicPay exigem /// em todos os endpoints públicos para que o frontend e parceiros entendam a API sem precisar ler o código.`,
      code: `// ══════════════════════════════════════════════
// ❌ ANTES — Controller com comentários ruins
// ══════════════════════════════════════════════
[ApiController]
[Route("api/[controller]")]
public class ProdutosController : ControllerBase
{
    private readonly AppDbContext _db;

    public ProdutosController(AppDbContext db)
    {
        _db = db; // injeta o contexto
    }

    [HttpGet("{id}")]
    public IActionResult Get(int id)
    {
        // busca o produto no banco
        var produto = _db.Produtos.Find(id);

        // verifica se é nulo
        if (produto == null)
        {
            // retorna 404
            return NotFound();
        }

        // retorna o produto
        return Ok(produto);
    }

    [HttpPut("{id}")]
    public IActionResult Atualizar(int id, ProdutoDto dto)
    {
        var produto = _db.Produtos.Find(id);
        if (produto == null) return NotFound();

        // var preco_antigo = produto.Preco;  // código antigo
        // produto.Preco = dto.Preco;         // comentado "por segurança"
        // _db.SaveChanges();                 // talvez reativar depois?

        produto.Nome = dto.Nome;
        produto.Preco = dto.Preco;
        // atualiza o produto com os novos dados
        _db.SaveChanges();

        // retorna 204
        return NoContent();
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Sem comentários ruins + XML docs + decisão de negócio
// ══════════════════════════════════════════════
[ApiController]
[Route("api/[controller]")]
public class ProdutosController : ControllerBase
{
    private readonly AppDbContext _db;

    public ProdutosController(AppDbContext db) => _db = db;

    /// <summary>
    /// Obtém um produto pelo ID.
    /// </summary>
    /// <param name="id">ID único do produto.</param>
    /// <returns>O produto encontrado ou 404.</returns>
    /// <response code="200">Produto encontrado.</response>
    /// <response code="404">Produto não existe.</response>
    [HttpGet("{id}")]
    [ProducesResponseType(typeof(Produto), 200)]
    [ProducesResponseType(404)]
    public IActionResult ObterPorId(int id)
    {
        var produto = _db.Produtos.Find(id);
        return produto is not null ? Ok(produto) : NotFound();
    }

    /// <summary>
    /// Atualiza nome e preço de um produto.
    /// </summary>
    /// <remarks>
    /// Preço só pode ser alterado em produtos sem pedidos faturados.
    /// Regra fiscal: SEFAZ exige rastreabilidade de preços em NF-e emitidas.
    /// </remarks>
    /// <param name="id">ID do produto.</param>
    /// <param name="dto">Dados atualizados.</param>
    /// <response code="204">Atualizado com sucesso.</response>
    /// <response code="400">Produto possui pedidos faturados.</response>
    /// <response code="404">Produto não encontrado.</response>
    [HttpPut("{id}")]
    [ProducesResponseType(204)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public IActionResult Atualizar(int id, ProdutoDto dto)
    {
        var produto = _db.Produtos
            .Include(p => p.ItensPedido)
            .FirstOrDefault(p => p.Id == id);

        if (produto is null) return NotFound();

        // Decisão de negócio: preço congelado após faturamento (regra SEFAZ)
        bool possuiPedidosFaturados = produto.ItensPedido
            .Any(i => i.Pedido.Status == "Faturado");

        if (possuiPedidosFaturados && dto.Preco != produto.Preco)
            return BadRequest("Preço não pode ser alterado — produto já faturado.");

        produto.Nome = dto.Nome;
        produto.Preco = dto.Preco;
        _db.SaveChanges();

        return NoContent();
    }

    /// <summary>
    /// Lista produtos com paginação.
    /// </summary>
    /// <param name="pagina">Número da página (1-based).</param>
    /// <param name="tamanhoPagina">Itens por página (máx: 50).</param>
    [HttpGet]
    [ProducesResponseType(typeof(IEnumerable<Produto>), 200)]
    public IActionResult Listar(int pagina = 1, int tamanhoPagina = 10)
    {
        // CUIDADO: sem limite máximo, um cliente pode pedir 1 milhão de registros
        tamanhoPagina = Math.Min(tamanhoPagina, 50);

        var produtos = _db.Produtos
            .OrderBy(p => p.Nome)
            .Skip((pagina - 1) * tamanhoPagina)
            .Take(tamanhoPagina)
            .ToList();

        return Ok(produtos);
    }
}`,
      checklist: [
        "Abrir um arquivo do projeto Fase 2 e deletar comentários que explicam o óbvio",
        "Encontrar código comentado e deletar (ele está no git history)",
        "Adicionar /// em pelo menos 3 endpoints da API de e-commerce",
        "Verificar se o Swagger gerou a documentação dos /// corretamente",
        "Escrever um comentário de decisão de negócio real em um ponto não óbvio",
      ],
      quiz: [
        {
          question:
            'Quando um comentário "// incrementa contador" antes de "contador++" é problemático?',
          options: [
            "Nunca — comentários sempre ajudam",
            "Quando o código já se explica sozinho, pois o comentário não adiciona informação e vira ruído de manutenção",
            "Só quando está em inglês",
            "Só em métodos públicos",
          ],
          answer: 1,
          explanation:
            "Comentários que apenas repetem o que o código diz são ruído visual. Eles precisam ser mantidos em sincronia com o código e raramente são, criando confusão.",
        },
        {
          question:
            "Qual o uso mais valioso de comentários em código corporativo?",
          options: [
            "Explicar cada linha para facilitar leitura",
            "Documentar decisões de negócio não óbvias e avisos de armadilhas técnicas que o nome do método não consegue expressar",
            "Descrever o que cada variável armazena",
            "Histórico de quem alterou",
          ],
          answer: 1,
          explanation:
            "Decisões de negócio (regras fiscais, limites de API) e armadilhas técnicas são informações que o código não consegue expressar sozinho — são os únicos comentários realmente valiosos.",
        },
        {
          question:
            "O que acontece com código comentado que fica no repositório por meses?",
          options: [
            "É automaticamente deletado pelo compilador",
            "Fica desatualizado em relação ao restante do código, cria confusão sobre se deve ser reativado e polui a leitura — o Git já guarda o histórico",
            "Fica oculto do Sonar",
            "Melhora performance",
          ],
          answer: 1,
          explanation:
            'Código comentado é lixo visual que gera dúvida: "devo reativar?". O Git guarda tudo — se precisar do código antigo, use git log ou git blame.',
        },
      ],
    },
    {
      id: "m9t4",
      moduleId: "m9",
      title: "Refatoração: Técnicas e Quando Aplicar",
      theory: `Refatoração é mudar a estrutura interna do código SEM mudar seu comportamento externo. Código que funciona mas é difícil de manter custa caro — cada mudança é lenta, arriscada e gera bugs colaterais.

O Triângulo da Refatoração: escreva testes → refatore → verifique que os testes ainda passam. Sem testes, refatorar é caminhar vendado — você pode introduzir bugs silenciosos que só aparecem em produção semanas depois.

Técnicas essenciais de refatoração:

Extract Method — a mais usada. Selecione um bloco de código, extraia para uma função com nome descritivo. No VSCode: selecione o trecho → F1 → "Extract Method". No Visual Studio: Ctrl+R+M.

Rename — trivial mas poderosa. F2 no VSCode renomeia a variável/método/classe em todos os usos. Custo zero, ganho imenso em legibilidade.

Replace Magic Number with Constant — 0.15 vira TAXA_IOF, 30 vira DIAS_VENCIMENTO, 1000 vira LIMITE_SAQUE_DIARIO. O nome da constante documenta a intenção.

Introduce Parameter Object — 5+ parâmetros de uma função viram uma classe/record. CriarPedido(cliente, endereco, valor, cupom, expresso) vira CriarPedido(DadosPedido dados).

Replace Conditional with Polymorphism — if/else gigante com 10 condições vira classes polimórficas. Cada tipo implementa sua própria lógica. Veremos mais em SOLID (Módulo 10).

Move Method — quando um método usa mais dados de outra classe do que da própria, ele está no lugar errado. Mova-o.

Code Smells (cheiros de código ruim) são sinais de que refatoração é necessária:
• Long Method: método com 50+ linhas
• Large Class: classe com 500+ linhas ou 20+ métodos
• Long Parameter List: função com 4+ parâmetros
• Divergent Change: uma classe precisa mudar por razões diferentes
• Shotgun Surgery: uma mudança requer alteração em 10 classes
• Feature Envy: método que usa mais dados de outra classe
• Data Clumps: mesmos 3-4 dados aparecem juntos em vários lugares
• Primitive Obsession: CPF como string em vez de Value Object

Quando NÃO refatorar: prazo curtíssimo de produção (entregue, depois refatore), sem cobertura de testes (escreva testes primeiro), código legado que ninguém entende (risco de quebra silenciosa).

A regra do escoteiro (Boy Scout Rule): sempre deixe o código um pouco melhor do que encontrou. Não precisa refatorar tudo — melhorar um nome, extrair um método, já é progresso.`,
      code: `// ══════════════════════════════════════════════
// ❌ ANTES — Classe com TODOS os Code Smells
// ══════════════════════════════════════════════
public class ContaService
{
    private readonly AppDbContext _db;

    public ContaService(AppDbContext db) => _db = db;

    // Long Method (70+ linhas) + Magic Numbers + Feature Envy
    public string CalcularExtratoMensal(
        int contaId, int mes, int ano,     // Long Parameter List
        bool incluirTaxas, string formato,  // Flag parameter + tipo string
        decimal limiteAlerta)               // 6 parâmetros!
    {
        var conta = _db.Contas.Find(contaId);
        var transacoes = _db.Transacoes
            .Where(t => t.ContaId == contaId
                     && t.Data.Month == mes
                     && t.Data.Year == ano)
            .ToList();

        decimal totalCreditos = 0;
        decimal totalDebitos = 0;
        decimal taxaTotal = 0;

        foreach (var t in transacoes)
        {
            if (t.Tipo == "credito")
            {
                totalCreditos += t.Valor;
            }
            else
            {
                totalDebitos += t.Valor;

                // Magic Numbers! O que é 0.15, 30 e 1000?
                if (t.Valor > 1000)
                    taxaTotal += t.Valor * 0.15m;
                else
                    taxaTotal += t.Valor * 0.038m;
            }

            // Feature Envy: usa mais dados de Transacao que de ContaService
            if (t.Data.DayOfWeek == DayOfWeek.Sunday)
                taxaTotal += t.Valor * 0.02m;

            if (t.Descricao?.Contains("internacional") == true)
                taxaTotal += t.Valor * 0.064m;
        }

        // Mais magic numbers
        decimal taxaManutencao = incluirTaxas ? 30m : 0m;
        decimal saldoFinal = totalCreditos - totalDebitos
                           - taxaTotal - taxaManutencao;

        if (saldoFinal < limiteAlerta)
            Console.WriteLine("ALERTA: saldo baixo!");

        // Formatação misturada com lógica de negócio
        if (formato == "csv")
            return \$"{contaId},{mes}/{ano},{totalCreditos},{totalDebitos},{saldoFinal}";
        else
            return \$"Conta {contaId} | {mes}/{ano} | Saldo: R\\$ {saldoFinal:F2}";
    }
}

// ══════════════════════════════════════════════
// ✅ DEPOIS — Refatoração passo a passo
// ══════════════════════════════════════════════

// Passo 1: Replace Magic Numbers com constantes
public static class TaxasFinanceiras
{
    public const decimal TAXA_OPERACAO_ALTA = 0.15m;
    public const decimal TAXA_OPERACAO_NORMAL = 0.038m;
    public const decimal TAXA_DOMINGO = 0.02m;
    public const decimal TAXA_INTERNACIONAL = 0.064m;
    public const decimal TAXA_MANUTENCAO_MENSAL = 30m;
    public const decimal LIMITE_OPERACAO_ALTA = 1000m;
}

// Passo 2: Introduce Parameter Object
public record FiltroExtrato(
    int ContaId,
    int Mes,
    int Ano,
    bool IncluirTaxas = true);

// Passo 3: Move Method — taxa pertence à Transacao
public class Transacao
{
    public int Id { get; set; }
    public int ContaId { get; set; }
    public string Tipo { get; set; } = "";
    public decimal Valor { get; set; }
    public DateTime Data { get; set; }
    public string? Descricao { get; set; }

    // Método movido para onde os dados estão (elimina Feature Envy)
    public decimal CalcularTaxa()
    {
        decimal taxa = Valor > TaxasFinanceiras.LIMITE_OPERACAO_ALTA
            ? Valor * TaxasFinanceiras.TAXA_OPERACAO_ALTA
            : Valor * TaxasFinanceiras.TAXA_OPERACAO_NORMAL;

        if (Data.DayOfWeek == DayOfWeek.Sunday)
            taxa += Valor * TaxasFinanceiras.TAXA_DOMINGO;

        if (Descricao?.Contains("internacional") == true)
            taxa += Valor * TaxasFinanceiras.TAXA_INTERNACIONAL;

        return taxa;
    }
}

// Passo 4: Extract Methods — cada um faz UMA coisa
public class ContaService
{
    private readonly IContaRepository _contas;
    private readonly ITransacaoRepository _transacoes;

    public ContaService(
        IContaRepository contas,
        ITransacaoRepository transacoes)
    {
        _contas = contas;
        _transacoes = transacoes;
    }

    public ResumoExtrato GerarExtrato(FiltroExtrato filtro)
    {
        var transacoes = _transacoes
            .ObterPorPeriodo(filtro.ContaId, filtro.Mes, filtro.Ano);

        decimal totalCreditos = CalcularTotalCreditos(transacoes);
        decimal totalDebitos = CalcularTotalDebitos(transacoes);
        decimal totalTaxas = CalcularTotalTaxas(transacoes, filtro.IncluirTaxas);

        return new ResumoExtrato(
            totalCreditos, totalDebitos, totalTaxas,
            SaldoFinal: totalCreditos - totalDebitos - totalTaxas);
    }

    private decimal CalcularTotalCreditos(List<Transacao> transacoes)
        => transacoes.Where(t => t.Tipo == "credito").Sum(t => t.Valor);

    private decimal CalcularTotalDebitos(List<Transacao> transacoes)
        => transacoes.Where(t => t.Tipo == "debito").Sum(t => t.Valor);

    private decimal CalcularTotalTaxas(List<Transacao> transacoes, bool incluir)
    {
        if (!incluir) return 0m;
        return transacoes
            .Where(t => t.Tipo == "debito")
            .Sum(t => t.CalcularTaxa())
            + TaxasFinanceiras.TAXA_MANUTENCAO_MENSAL;
    }
}

public record ResumoExtrato(
    decimal TotalCreditos,
    decimal TotalDebitos,
    decimal TotalTaxas,
    decimal SaldoFinal);`,
      checklist: [
        "Identificar 3 Code Smells no projeto da Fase 2 usando a lista do tópico",
        "Aplicar Extract Method em um método longo (F1 no Rider ou Ctrl+R+M no VS)",
        "Substituir pelo menos 3 magic numbers por constantes nomeadas",
        "Criar um record para agrupar parâmetros de um método com 4+ params",
        "Rodar os testes após cada refatoração para garantir que nada quebrou",
      ],
      quiz: [
        {
          question: "Qual a definição correta de refatoração?",
          options: [
            "Reescrever o código do zero para adicionar novas funcionalidades",
            "Alterar a estrutura interna do código sem modificar seu comportamento externo observável",
            "Corrigir bugs sem alterar a arquitetura",
            "Otimizar performance do código",
          ],
          answer: 1,
          explanation:
            "Refatoração é exclusivamente sobre estrutura interna — o comportamento externo deve permanecer idêntico. Alterações de funcionalidade ou bugs são outras atividades.",
        },
        {
          question: 'O que é "Primitive Obsession" como Code Smell?',
          options: [
            "Usar tipos primitivos (string, int) onde uma classe ou record expressaria melhor o conceito — ex: CPF como string em vez de um Value Object Cpf",
            "Código que usa muitos loops primitivos",
            "Excesso de if/else",
            "Usar int em vez de long",
          ],
          answer: 0,
          explanation:
            "Primitive Obsession é usar string para CPF, email, telefone quando um Value Object com validação embutida expressaria melhor a intenção e garantiria a consistência.",
        },
        {
          question: "Por que refatorar sem testes automatizados é arriscado?",
          options: [
            "Testes não são necessários para refatorar",
            "Sem testes não há como verificar que o comportamento externo não mudou — você pode introduzir bugs silenciosos que só aparecem em produção",
            "Refatoração só é válida com 100% de cobertura",
            "O compilador garante que o comportamento não mudou",
          ],
          answer: 1,
          explanation:
            "Testes são a rede de segurança da refatoração. Sem eles, qualquer mudança estrutural pode alterar o comportamento sem que ninguém perceba até explodir em produção.",
        },
      ],
    },
  ],
};
