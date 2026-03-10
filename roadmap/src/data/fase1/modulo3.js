export const MODULO_3 = {
  id: "m3",
  title: "C# Intermediário",
  icon: "🚀",
  week: "Semana 3",
  color: "#059669",
  topics: [
    {
      id: "m3t1",
      moduleId: "m3",
      title: "Generics",
      theory: `Generics permitem criar classes, métodos e interfaces que funcionam com qualquer tipo, mantendo type-safety em tempo de compilação. Em vez de escrever RepositorioUsuario, RepositorioProduto, RepositorioPedido — você escreve Repository<T> uma única vez e usa com qualquer tipo.

O parâmetro de tipo T (ou TKey, TValue, etc.) é um placeholder que o compilador substitui pelo tipo real quando você usa. List<string>, Dictionary<int, Funcionario> — todos são versões especializadas de tipos genéricos. Sem generics, seria necessário usar object e fazer casts manuais, perdendo type-safety.

Classes genéricas são o caso mais comum: class Repository<T> define operações CRUD para qualquer entidade. Métodos genéricos permitem uma única operação funcionar com tipos variados: T Parse<T>(string text). Interfaces genéricas definem contratos tipados: IComparable<T>, IEnumerable<T>.

Constraints (where T : ...) restringem quais tipos podem ser usados como argumento genérico. As mais comuns são: where T : class (reference types), where T : struct (value types), where T : new() (deve ter construtor sem parâmetros), where T : IMinhaInterface (deve implementar interface), where T : BaseClass (deve herdar de classe).

No código corporativo .NET, generics são onipresentes: Repository<T>, ILogger<T>, IOptions<T>, IMapper<TSource, TDestination>. O padrão Repository genérico é provavelmente o uso mais emblemático: uma única classe que faz CRUD para qualquer entidade do domínio, eliminando duplicação massiva.

Covariância (out T) e contravariância (in T) em interfaces genéricas permitem flexibilidade na substituição de tipos: IEnumerable<Gato> pode ser usado onde IEnumerable<Animal> é esperado (covariância).`,
      code: `// Generics em C# 12 / .NET 8
// Execute: dotnet new console -n GenericsDemo && cd GenericsDemo

// === CLASSE GENÉRICA — funciona com qualquer tipo ===
class Repositorio<T> where T : class
{
    private readonly List<T> _items = [];

    public void Adicionar(T item)
    {
        _items.Add(item);
        Console.WriteLine($"  ✅ Adicionado: {item}");
    }

    public T? BuscarPor(Func<T, bool> predicado)
        => _items.FirstOrDefault(predicado);

    public List<T> Listar() => [.. _items];

    public int Total => _items.Count;
}

// === INTERFACE GENÉRICA COM CONSTRAINT ===
interface IEntidade
{
    int Id { get; }
    string Nome { get; }
}

interface IServico<T> where T : IEntidade
{
    void Salvar(T entidade);
    T? BuscarPorId(int id);
    List<T> ListarTodos();
}

// === IMPLEMENTAÇÕES ===
record Produto(int Id, string Nome, decimal Preco) : IEntidade;
record Cliente(int Id, string Nome, string Email) : IEntidade;

class Servico<T> : IServico<T> where T : IEntidade
{
    private readonly Repositorio<T> _repo = new();

    public void Salvar(T entidade) => _repo.Adicionar(entidade);

    public T? BuscarPorId(int id)
        => _repo.BuscarPor(e => e.Id == id);

    public List<T> ListarTodos() => _repo.Listar();
}

// === MÉTODO GENÉRICO — uma função para vários tipos ===
static class Util
{
    // Método genérico com constraint
    public static void ExibirInfo<T>(T entidade) where T : IEntidade
    {
        Console.WriteLine($"  📄 [{entidade.Id}] {entidade.Nome}");
    }

    // Método genérico que retorna o tipo
    public static T Maior<T>(T a, T b) where T : IComparable<T>
        => a.CompareTo(b) >= 0 ? a : b;
}

// === USO ===
Console.WriteLine("📦 Serviço de Produtos:");
var produtoService = new Servico<Produto>();
produtoService.Salvar(new Produto(1, "Mouse Gamer", 89.90m));
produtoService.Salvar(new Produto(2, "Teclado Mecânico", 299.90m));
produtoService.Salvar(new Produto(3, "Monitor 27\"", 1599.90m));

var encontrado = produtoService.BuscarPorId(2);
Console.WriteLine($"  Encontrado: {encontrado}");

Console.WriteLine("\\n👤 Serviço de Clientes:");
var clienteService = new Servico<Cliente>();
clienteService.Salvar(new Cliente(1, "Ana Silva", "ana@corp.com"));
clienteService.Salvar(new Cliente(2, "Carlos Lima", "carlos@corp.com"));

// Método genérico
Console.WriteLine("\\n📋 Info de entidades:");
foreach (var p in produtoService.ListarTodos())
    Util.ExibirInfo(p);

// Genérico com IComparable
int maior = Util.Maior(42, 17);
string maiorStr = Util.Maior("Zebra", "Arara");
Console.WriteLine($"\\nMaior número: {maior}");
Console.WriteLine($"Maior string: {maiorStr}");

Console.WriteLine("\\n✅ Generics concluído!");`,
      codeLanguage: "csharp",
      runCommand:
        "dotnet new console -n GenericsDemo && cd GenericsDemo && dotnet run",
      checklist: [
        "Criar projeto console com dotnet new console -n GenericsDemo",
        "Criar uma classe genérica Repository<T> com métodos Add, Find e List",
        "Usar a classe genérica com pelo menos 2 tipos diferentes",
        "Criar um método genérico com constraint (where T : IComparable<T>)",
        "Criar uma interface genérica e implementá-la em uma classe",
      ],
      quiz: [
        {
          q: "Qual o principal benefício de Generics em C#?",
          options: [
            "Código mais rápido em tempo de execução",
            "Reutilização de código com type-safety — uma classe/método funciona com qualquer tipo sem perder verificação de tipos",
            "Generics são mais simples que classes normais",
            "Permitem herança múltipla",
          ],
          answer: 1,
          explanation:
            "Generics eliminam duplicação: em vez de RepositorioUsuario, RepositorioProduto etc., você escreve Repository<T> uma vez. O compilador garante type-safety — erros de tipo são pegos em compilação, não em runtime.",
        },
        {
          q: 'Para que serve a constraint "where T : new()"?',
          options: [
            "T deve ser um tipo primitivo",
            "T deve ter um construtor sem parâmetros, permitindo criar instâncias com new T()",
            "T deve ser uma interface",
            "T não pode ser null",
          ],
          answer: 1,
          explanation:
            "where T : new() garante que T tem construtor sem parâmetros. Isso permite usar new T() dentro do código genérico para criar instâncias. Sem essa constraint, new T() não compila.",
        },
        {
          q: "O que este código faz? static T Max<T>(T a, T b) where T : IComparable<T> => a.CompareTo(b) >= 0 ? a : b;",
          options: [
            "Compara duas strings",
            "Retorna o maior entre dois valores de qualquer tipo que implemente IComparable<T>",
            "Retorna sempre o primeiro argumento",
            "Erro de compilação — generics não suportam comparação",
          ],
          answer: 1,
          explanation:
            'O método genérico aceita qualquer tipo que implemente IComparable<T> (int, string, DateTime...). CompareTo retorna >= 0 se a >= b. Funciona com Max(42, 17), Max("Zebra", "Arara"), etc.',
        },
      ],
    },
    {
      id: "m3t2",
      moduleId: "m3",
      title: "Delegates & Func",
      theory: `Delegates são tipos que representam referências a métodos — permitem tratar funções como dados, passá-las como parâmetros, armazená-las em variáveis e combiná-las. São o fundamento da programação funcional em C# e a base de eventos, callbacks e LINQ.

Um delegate é como um contrato que define a assinatura (parâmetros e retorno) de um método. Qualquer método que corresponda à assinatura pode ser atribuído ao delegate. Delegates são type-safe — o compilador verifica que o método atribuído tem a assinatura correta.

Na prática, raramente você cria delegates customizados. O .NET fornece delegates genéricos prontos: Func<T, TResult> para funções que retornam valor (até 16 parâmetros), Action<T> para funções void (sem retorno), e Predicate<T> para funções que retornam bool (caso especial de Func<T, bool>).

Expressões lambda (=>) são a forma concisa de criar funções inline. x => x * 2 é uma função que recebe x e retorna x * 2. Substituíram delegates anônimos e são a forma padrão de escrever callbacks em C# moderno. Lambdas podem capturar variáveis do escopo externo (closures).

No código corporativo, delegates e lambdas são essenciais em: métodos de extensão LINQ (Where, Select, OrderBy todos recebem Func<T, TResult>), eventos de UI, middleware de ASP.NET Core, estratégias configuráveis (ex: calcular desconto com diferentes regras), e callbacks assíncronos.

Higher-order functions — funções que recebem ou retornam outras funções — são possíveis graças a delegates. Um método ProcessarPedidos(Func<Pedido, bool> filtro) aplica qualquer critério de filtragem, desacoplando a lógica de processamento da lógica de seleção.`,
      code: `// Delegates & Func em C# 12 / .NET 8
// Execute: dotnet new console -n DelegatesDemo && cd DelegatesDemo

// === DELEGATE CUSTOMIZADO (para entender o conceito) ===
delegate decimal CalculoImposto(decimal valor);

CalculoImposto calculoISS = valor => valor * 0.05m;   // 5%
CalculoImposto calculoICMS = valor => valor * 0.18m;  // 18%

decimal preco = 1000m;
Console.WriteLine($"ISS: R\${calculoISS(preco):N2}");
Console.WriteLine($"ICMS: R\${calculoICMS(preco):N2}");

// === FUNC<T, TResult> — delegate genérico com retorno ===
// Func<entrada, saída>
Func<string, string> normalizar = nome => nome.Trim().ToUpper();
Func<int, int, int> somar = (a, b) => a + b;
Func<decimal, decimal, decimal> aplicarDesconto =
    (preco, percentual) => preco - (preco * percentual / 100);

Console.WriteLine($"\\nNome: {normalizar("  ana silva  ")}");
Console.WriteLine($"Soma: {somar(10, 20)}");
Console.WriteLine($"Com desconto: R\${aplicarDesconto(500m, 15m):N2}");

// === ACTION<T> — delegate sem retorno (void) ===
Action<string> log = msg => Console.WriteLine($"  📋 LOG: {msg}");
Action<string, ConsoleColor> logColorido = (msg, cor) =>
{
    Console.ForegroundColor = cor;
    Console.WriteLine($"  {msg}");
    Console.ResetColor();
};

log("Sistema iniciado");
logColorido("Operação concluída!", ConsoleColor.Green);
logColorido("Atenção: recurso depreciado", ConsoleColor.Yellow);

// === PREDICATE<T> — delegate que retorna bool ===
Predicate<int> ehPar = n => n % 2 == 0;
Predicate<string> emailValido = e => e.Contains("@") && e.Contains(".");

Console.WriteLine($"\\n4 é par? {ehPar(4)}");
Console.WriteLine($"test@mail.com válido? {emailValido("test@mail.com")}");

// === HIGHER-ORDER FUNCTION — função que recebe função ===
static List<T> Filtrar<T>(List<T> itens, Func<T, bool> criterio)
{
    var resultado = new List<T>();
    foreach (var item in itens)
    {
        if (criterio(item))
            resultado.Add(item);
    }
    return resultado;
}

var numeros = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

var pares = Filtrar(numeros, n => n % 2 == 0);
var maioresQue5 = Filtrar(numeros, n => n > 5);
var primosSimples = Filtrar(numeros, n => n is 2 or 3 or 5 or 7);

Console.WriteLine($"\\nPares: {string.Join(", ", pares)}");
Console.WriteLine($"Maiores que 5: {string.Join(", ", maioresQue5)}");
Console.WriteLine($"Primos: {string.Join(", ", primosSimples)}");

// === NA PRÁTICA — estratégias configuráveis ===
record Produto(string Nome, decimal Preco, string Categoria);

var produtos = new List<Produto>
{
    new("Mouse", 89.90m, "Periféricos"),
    new("Monitor", 1599.90m, "Monitores"),
    new("Teclado", 299.90m, "Periféricos"),
    new("Webcam", 199.90m, "Acessórios"),
};

// A mesma função com diferentes critérios
var baratos = Filtrar(produtos, p => p.Preco < 200m);
var perifericos = Filtrar(produtos, p => p.Categoria == "Periféricos");

Console.WriteLine("\\n🏷️ Baratos (< R$200):");
baratos.ForEach(p => Console.WriteLine($"  {p.Nome}: R\${p.Preco:N2}"));

Console.WriteLine("\\n⌨️ Periféricos:");
perifericos.ForEach(p => Console.WriteLine($"  {p.Nome}: R\${p.Preco:N2}"));

Console.WriteLine("\\n✅ Delegates & Func concluído!");`,
      codeLanguage: "csharp",
      runCommand:
        "dotnet new console -n DelegatesDemo && cd DelegatesDemo && dotnet run",
      checklist: [
        "Criar projeto console com dotnet new console -n DelegatesDemo",
        "Criar e usar uma Func<T, TResult> com expressão lambda",
        "Criar e usar uma Action<T> para logging",
        "Implementar uma higher-order function que receba Func como parâmetro",
        "Usar Predicate<T> para filtrar uma lista de objetos",
      ],
      quiz: [
        {
          q: "Qual a diferença entre Func<T, TResult> e Action<T>?",
          options: [
            "Func é mais rápido que Action",
            "Func retorna um valor (último tipo genérico é o retorno); Action não retorna nada (void)",
            "Action pode ter mais parâmetros que Func",
            "São intercambiáveis",
          ],
          answer: 1,
          explanation:
            "Func<int, string> recebe int e retorna string. Action<int> recebe int e não retorna nada (void). O último tipo genérico de Func é sempre o tipo de retorno.",
        },
        {
          q: "Qual delegate usar quando precisa de uma função que recebe string e retorna bool?",
          options: [
            "Action<string>",
            "Func<bool, string>",
            "Func<string, bool> ou Predicate<string>",
            "Delegate<string, bool>",
          ],
          answer: 2,
          explanation:
            "Func<string, bool> recebe string e retorna bool. Predicate<string> é equivalente (sempre retorna bool). Action<string> não retorna valor (void). Em Func, o último tipo genérico é sempre o retorno.",
        },
        {
          q: "O que este código retorna? Func<int, int> dobro = x => x * 2; Console.Write(dobro(7));",
          options: ["7", "14", "Erro de compilação", "x * 2"],
          answer: 1,
          explanation:
            "A lambda x => x * 2 cria uma função que recebe um int e retorna o dobro. dobro(7) passa 7 como x, retornando 7 * 2 = 14.",
        },
      ],
    },
    {
      id: "m3t3",
      moduleId: "m3",
      title: "LINQ Essencial",
      theory: `LINQ (Language Integrated Query) é um dos recursos mais poderosos e distintivos do C#. Permite consultar e transformar coleções de dados usando uma sintaxe declarativa e fluente — você descreve O QUE quer, não COMO buscar. LINQ funciona com arrays, listas, dicionários, banco de dados (Entity Framework) e até XML/JSON.

Os operadores mais essenciais do LINQ são: Where (filtrar elementos que satisfazem uma condição), Select (transformar/projetar cada elemento em outro formato), OrderBy/OrderByDescending (ordenar), GroupBy (agrupar por chave), FirstOrDefault (primeiro que satisfaz ou default), Any (existe algum que?) e All (todos satisfazem?).

LINQ usa lazy evaluation (avaliação preguiçosa) — a query não é executada quando é definida, mas quando os dados são consumidos (via foreach, ToList, Count, etc.). Isso permite compor queries complexas encadeando operadores sem criar coleções intermediárias. ToList() ou ToArray() forçam a execução imediata.

Method syntax (fluent) é a forma preferida: items.Where(x => x > 5).OrderBy(x => x). Também existe query syntax (SQL-like): from x in items where x > 5 orderby x select x. Ambas compilam para o mesmo código, mas method syntax é mais versátil e predominante no código corporativo.

Aggregate é o operador avançado que reduz uma coleção a um único valor usando uma função acumuladora. É o equivalente ao reduce() do JavaScript. Permite cálculos customizados que Count, Sum e Average não cobrem.

No dia a dia corporativo, LINQ substitui loops manuais em 90% dos casos. Em vez de criar uma lista temporária, iterar, verificar condição e adicionar — você escreve uma query declarativa e legível. Com Entity Framework, LINQ se traduz diretamente em SQL, tornando consultas a banco type-safe.`,
      code: `// LINQ Essencial em C# 12 / .NET 8
// Execute: dotnet new console -n LinqDemo && cd LinqDemo

// === DADOS DE EXEMPLO (simulando domínio corporativo) ===
record Funcionario(string Nome, string Departamento, decimal Salario, int AnosEmpresa);

var funcionarios = new List<Funcionario>
{
    new("Ana Silva", "Engenharia", 12000m, 5),
    new("Carlos Lima", "Engenharia", 9500m, 2),
    new("Maria Souza", "RH", 8000m, 7),
    new("João Santos", "Engenharia", 15000m, 10),
    new("Julia Alves", "Marketing", 7500m, 1),
    new("Pedro Costa", "RH", 6500m, 3),
    new("Fernanda Dias", "Marketing", 9000m, 4),
    new("Lucas Ferreira", "Engenharia", 11000m, 6),
};

// === WHERE — filtrar ===
var seniors = funcionarios.Where(f => f.AnosEmpresa >= 5);
Console.WriteLine("👴 Seniores (5+ anos):");
foreach (var f in seniors)
    Console.WriteLine($"  {f.Nome} — {f.AnosEmpresa} anos");

// === SELECT — transformar/projetar ===
var nomes = funcionarios.Select(f => f.Nome);
Console.WriteLine($"\\n📋 Nomes: {string.Join(", ", nomes)}");

// Projeção em tipo anônimo
var resumos = funcionarios.Select(f => new
{
    f.Nome,
    SalarioAnual = f.Salario * 12
});
Console.WriteLine("\\n💰 Salários anuais:");
foreach (var r in resumos)
    Console.WriteLine($"  {r.Nome}: R\${r.SalarioAnual:N2}");

// === ORDERBY / ORDERBYDESCENDING ===
var maisCaros = funcionarios
    .OrderByDescending(f => f.Salario)
    .Take(3);  // Top 3
Console.WriteLine("\\n🏆 Top 3 salários:");
foreach (var f in maisCaros)
    Console.WriteLine($"  {f.Nome}: R\${f.Salario:N2}");

// === GROUPBY — agrupar por chave ===
var porDepto = funcionarios.GroupBy(f => f.Departamento);
Console.WriteLine("\\n📁 Por departamento:");
foreach (var grupo in porDepto)
{
    var mediaSalario = grupo.Average(f => f.Salario);
    Console.WriteLine($"  {grupo.Key}: {grupo.Count()} pessoas, média R\${mediaSalario:N2}");
}

// === FIRSTORDEFAULT — primeiro que satisfaz ou null ===
var joao = funcionarios.FirstOrDefault(f => f.Nome.Contains("João"));
Console.WriteLine($"\\n🔍 Busca 'João': {joao?.Nome ?? "Não encontrado"}");

var inexistente = funcionarios.FirstOrDefault(f => f.Nome == "Zeus");
Console.WriteLine($"🔍 Busca 'Zeus': {inexistente?.Nome ?? "Não encontrado"}");

// === ANY / ALL — verificações booleanas ===
bool temEngenheiro = funcionarios.Any(f => f.Departamento == "Engenharia");
bool todosSeniors = funcionarios.All(f => f.AnosEmpresa >= 5);
Console.WriteLine($"\\nTem engenheiro? {temEngenheiro}");
Console.WriteLine($"Todos são seniores? {todosSeniors}");

// === AGGREGATE — reduzir a um valor (como reduce) ===
string todosNomes = funcionarios
    .Select(f => f.Nome.Split(' ')[0])
    .Aggregate((acumulador, nome) => $"{acumulador}, {nome}");
Console.WriteLine($"\\nPrimeiros nomes: {todosNomes}");

// === ENCADEAR operadores (composição de queries) ===
var relatorio = funcionarios
    .Where(f => f.Departamento == "Engenharia")
    .OrderBy(f => f.AnosEmpresa)
    .Select(f => $"{f.Nome} ({f.AnosEmpresa}a) — R\${f.Salario:N2}");

Console.WriteLine("\\n⚙️ Engenharia por senioridade:");
foreach (var linha in relatorio)
    Console.WriteLine($"  {linha}");

// === SUM / AVERAGE / MIN / MAX ===
decimal folhaTotal = funcionarios.Sum(f => f.Salario);
decimal mediaGeral = funcionarios.Average(f => f.Salario);
decimal maiorSalario = funcionarios.Max(f => f.Salario);
Console.WriteLine($"\\n📊 Folha total: R\${folhaTotal:N2}");
Console.WriteLine($"📊 Média salarial: R\${mediaGeral:N2}");
Console.WriteLine($"📊 Maior salário: R\${maiorSalario:N2}");

Console.WriteLine("\\n✅ LINQ Essencial concluído!");`,
      codeLanguage: "csharp",
      runCommand: "dotnet new console -n LinqDemo && cd LinqDemo && dotnet run",
      checklist: [
        "Criar projeto console com dotnet new console -n LinqDemo",
        "Criar uma lista de records e usar Where + Select para filtrar e projetar",
        "Usar GroupBy para agrupar dados e calcular médias por grupo",
        "Encadear 3+ operadores LINQ em uma query fluente",
        "Testar FirstOrDefault com cenário existente e inexistente",
      ],
      quiz: [
        {
          q: 'O que significa "lazy evaluation" no contexto do LINQ?',
          options: [
            "LINQ é lento e preguiçoso",
            "A query só é executada quando os dados são consumidos (foreach, ToList, Count), não quando é definida",
            "LINQ ignora elementos null",
            "Cada operador cria uma cópia da coleção",
          ],
          answer: 1,
          explanation:
            "Lazy evaluation significa que var query = list.Where(...) não executa nada — apenas define a query. A execução acontece quando você itera (foreach), converte (ToList) ou agrega (Count, Sum). Isso permite compor queries eficientemente.",
        },
        {
          q: "Qual operador LINQ usar para transformar cada elemento de uma coleção em outro formato?",
          options: ["Where", "GroupBy", "Select", "Aggregate"],
          answer: 2,
          explanation:
            "Select projeta/transforma cada elemento: list.Select(x => new { x.Nome, x.Email }) cria uma nova coleção com objetos anônimos contendo apenas Nome e Email de cada item original.",
        },
        {
          q: "O que retorna: new[] { 3, 1, 4, 1, 5 }.Where(n => n > 2).OrderBy(n => n).First()?",
          options: ["1", "3", "5", "Erro — coleção vazia"],
          answer: 1,
          explanation:
            "Where(n => n > 2) filtra para {3, 4, 5}. OrderBy(n => n) ordena para {3, 4, 5}. First() retorna o primeiro: 3.",
        },
      ],
    },
    {
      id: "m3t4",
      moduleId: "m3",
      title: "async/await",
      theory: `Programação assíncrona com async/await é essencial em aplicações modernas. Quando seu código faz I/O (banco de dados, HTTP, arquivo), ele espera a resposta. Sem async, a thread fica bloqueada sem fazer nada. Com async/await, a thread é liberada para processar outras requisições enquanto aguarda o I/O.

Task<T> representa uma operação que eventualmente produzirá um valor do tipo T. Task (sem tipo) representa uma operação void assíncrona. Marcar um método com async permite usar await dentro dele, que "pausa" a execução até o Task completar, sem bloquear a thread.

O anti-pattern mais perigoso é async void — deve ser evitado SEMPRE (exceto em event handlers). Um método async void não pode ser aguardado, exceções não são capturadas pelo chamador e podem crashar a aplicação. Use async Task para métodos sem retorno.

CancellationToken permite cancelar operações assíncronas de forma cooperativa. O chamador cria um CancellationTokenSource e passa o token. A operação verifica periodicamente se o cancelamento foi solicitado. Em APIs, o framework passa o token automaticamente quando o cliente desconecta.

ConfigureAwait(false) é relevante em código de biblioteca: evita capturar o contexto de sincronização (UI thread, ASP.NET context), melhorando performance. Em código de aplicação (ASP.NET Core), geralmente não é necessário pois o framework não tem SynchronizationContext.

No código corporativo, a regra é: toda operação de I/O deve ser assíncrona. Repositórios, serviços HTTP, operações de arquivo — todos devem retornar Task<T>. O ASP.NET Core é fundamentalmente assíncrono: controllers que usam await liberam threads para processar mais requisições simultâneas.`,
      code: `// async/await em C# 12 / .NET 8
// Execute: dotnet new console -n AsyncDemo && cd AsyncDemo

// === MÉTODO ASSÍNCRONO BÁSICO ===
async Task<string> BuscarDadosAsync(string recurso)
{
    Console.WriteLine($"  ⏳ Buscando {recurso}...");
    await Task.Delay(1000); // Simula I/O (banco, HTTP, arquivo)
    return $"Dados de {recurso} carregados";
}

// === EXECUÇÃO SEQUENCIAL vs PARALELA ===
async Task DemoSequencial()
{
    Console.WriteLine("🔄 Sequencial (uma por vez):");
    var sw = System.Diagnostics.Stopwatch.StartNew();

    string r1 = await BuscarDadosAsync("Usuários");
    string r2 = await BuscarDadosAsync("Pedidos");
    string r3 = await BuscarDadosAsync("Produtos");

    sw.Stop();
    Console.WriteLine($"  {r1}\\n  {r2}\\n  {r3}");
    Console.WriteLine($"  ⏱️ Tempo: {sw.ElapsedMilliseconds}ms\\n");
}

async Task DemoParalelo()
{
    Console.WriteLine("⚡ Paralelo (todas ao mesmo tempo):");
    var sw = System.Diagnostics.Stopwatch.StartNew();

    // Inicia todas as tasks antes de aguardar
    Task<string> t1 = BuscarDadosAsync("Usuários");
    Task<string> t2 = BuscarDadosAsync("Pedidos");
    Task<string> t3 = BuscarDadosAsync("Produtos");

    // Aguarda todas completarem
    string[] resultados = await Task.WhenAll(t1, t2, t3);

    sw.Stop();
    foreach (var r in resultados)
        Console.WriteLine($"  {r}");
    Console.WriteLine($"  ⏱️ Tempo: {sw.ElapsedMilliseconds}ms\\n");
}

// === CANCELLATION TOKEN ===
async Task OperacaoLongaAsync(CancellationToken token)
{
    for (int i = 1; i <= 10; i++)
    {
        // Verifica cancelamento a cada iteração
        token.ThrowIfCancellationRequested();

        Console.WriteLine($"  Passo {i}/10...");
        await Task.Delay(300, token);
    }
    Console.WriteLine("  ✅ Operação concluída!");
}

async Task DemoCancelamento()
{
    Console.WriteLine("🚫 Cancelamento:");
    using var cts = new CancellationTokenSource();

    // Cancela após 1 segundo
    cts.CancelAfter(TimeSpan.FromSeconds(1));

    try
    {
        await OperacaoLongaAsync(cts.Token);
    }
    catch (OperationCanceledException)
    {
        Console.WriteLine("  ⚠️ Operação cancelada pelo token!\\n");
    }
}

// === ANTI-PATTERN: async void (NÃO FAÇA ISSO!) ===
// ❌ async void MetodoPerigoso() — exceções não capturáveis!
// ✅ async Task MetodoSeguro() — pode ser aguardado e exceções propagam

// === TRY/CATCH em código assíncrono ===
async Task<string> BuscarComFallbackAsync()
{
    try
    {
        // Simula falha
        await Task.Delay(100);
        throw new HttpRequestException("Servidor indisponível");
    }
    catch (HttpRequestException ex)
    {
        Console.WriteLine($"  ⚠️ Falha: {ex.Message}. Usando cache.");
        return "Dados do cache local";
    }
}

// === EXECUÇÃO ===
await DemoSequencial();
await DemoParalelo();
await DemoCancelamento();

Console.WriteLine("🔄 Fallback:");
string dados = await BuscarComFallbackAsync();
Console.WriteLine($"  Resultado: {dados}");

Console.WriteLine("\\n✅ async/await concluído!");`,
      codeLanguage: "csharp",
      runCommand:
        "dotnet new console -n AsyncDemo && cd AsyncDemo && dotnet run",
      checklist: [
        "Criar projeto console com dotnet new console -n AsyncDemo",
        "Criar um método async Task<T> que simule uma operação de I/O com Task.Delay",
        "Comparar execução sequencial (await um por um) vs paralela (Task.WhenAll)",
        "Implementar cancelamento com CancellationTokenSource e CancelAfter",
        "Usar try/catch em método assíncrono para tratar falhas com fallback",
      ],
      quiz: [
        {
          q: "Por que async void deve ser evitado?",
          options: [
            "É mais lento que async Task",
            "Exceções não podem ser capturadas pelo chamador, o método não pode ser aguardado e pode crashar a aplicação",
            "Não compila no .NET 8",
            "async void é a forma recomendada para métodos sem retorno",
          ],
          answer: 1,
          explanation:
            'async void é "fire-and-forget" perigoso: exceções não propagam para o chamador (crash), não pode ser await\'ed, e o chamador não sabe quando terminou. Use async Task para void assíncronos.',
        },
        {
          q: "Qual a vantagem de Task.WhenAll sobre await sequencial?",
          options: [
            "É mais fácil de ler",
            "Executa operações independentes em paralelo, reduzindo tempo total para o tempo da operação mais lenta",
            "Consome menos memória",
            "É obrigatório em ASP.NET Core",
          ],
          answer: 1,
          explanation:
            "3 operações de 1s sequenciais = 3s total. Com Task.WhenAll, as 3 rodam em paralelo = ~1s total (tempo da mais lenta). Essencial quando as operações são independentes.",
        },
        {
          q: 'O que acontece ao executar? async void Falhar() { throw new Exception("ops"); } try { Falhar(); } catch { Console.Write("capturado"); }',
          options: [
            'Imprime "capturado"',
            "A exceção não é capturada — async void não propaga exceções ao chamador, podendo crashar a aplicação",
            "Erro de compilação",
            'Imprime "ops"',
          ],
          answer: 1,
          explanation:
            "async void é fire-and-forget: exceções não fluem para o chamador. O try/catch ao redor de Falhar() NÃO captura a exceção. Ela vai para o SynchronizationContext e pode derrubar a aplicação. Use async Task para permitir captura.",
        },
      ],
    },
  ],
};
