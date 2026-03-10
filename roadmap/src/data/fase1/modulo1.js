export const MODULO_1 = {
  id: "m1",
  title: "C# Fundamentos",
  icon: "⚡",
  week: "Semana 1",
  color: "#00D4FF",
  topics: [
    {
      id: "m1t1",
      moduleId: "m1",
      title: "Tipos & Variáveis",
      theory: `Em C#, toda variável possui um tipo que define quais valores ela pode armazenar e quais operações são permitidas. O sistema de tipos do C# é dividido em duas categorias fundamentais: value types e reference types.

Value types (tipos de valor) armazenam o dado diretamente na stack. Incluem int, double, decimal, bool, char, structs e enums. Quando você atribui um value type a outra variável, uma cópia independente é criada. Isso significa que alterar uma não afeta a outra.

Reference types (tipos de referência) armazenam na stack apenas um ponteiro para o objeto real, que vive no heap. Incluem string, arrays, classes e interfaces. Quando você atribui um reference type a outra variável, ambas apontam para o mesmo objeto na memória.

A palavra-chave var permite que o compilador infira o tipo automaticamente com base no valor atribuído. Não é tipagem dinâmica — o tipo é definido em tempo de compilação e não muda depois. Use var quando o tipo é óbvio pelo contexto, como var lista = new List<string>().

Nullable types resolvem um problema comum em aplicações corporativas: representar a ausência de valor. Um int normal não pode ser null, mas int? sim. O operador ?? (null-coalescing) fornece um valor padrão quando a variável é null: int valor = numero ?? 0. Já o operador ?. (null-conditional) acessa membros somente se o objeto não for null, evitando NullReferenceException.

No ambiente corporativo, entender a diferença entre stack e heap é essencial para performance. Value types em loops são mais eficientes porque não geram pressão no garbage collector. Nullable types são onipresentes em dados vindos de banco de dados, onde campos podem ser NULL.`,
      code: `// Tipos & Variáveis em C# 12 / .NET 8
// Execute: dotnet new console -n TiposDemo && cd TiposDemo

// === VALUE TYPES (armazenados na stack) ===
int idade = 30;
double salario = 8500.50;
decimal preco = 29.99m;        // 'm' indica decimal (precisão financeira)
bool ativo = true;
char inicial = 'A';

// Cópia independente — alterar 'b' não muda 'a'
int a = 10;
int b = a;
b = 20;
Console.WriteLine($"a = {a}, b = {b}"); // a = 10, b = 20

// === REFERENCE TYPES (ponteiro na stack, objeto no heap) ===
string nome = "Maria";
int[] numeros = { 1, 2, 3 };

// Ambas apontam para o mesmo array
int[] copia = numeros;
copia[0] = 999;
Console.WriteLine($"numeros[0] = {numeros[0]}"); // 999 (mesma referência)

// === VAR — inferência de tipo em compilação ===
var contador = 0;              // int
var mensagem = "Olá";          // string
var itens = new List<string>(); // List<string>

// === NULLABLE TYPES ===
int? quantidade = null;        // pode ser null
Console.WriteLine(quantidade.HasValue); // False

// Operador ?? (null-coalescing) — valor padrão se null
int total = quantidade ?? 0;
Console.WriteLine($"Total: {total}"); // 0

// Operador ?. (null-conditional) — acesso seguro
string? texto = null;
int? tamanho = texto?.Length;  // null, sem exceção
Console.WriteLine($"Tamanho: {tamanho ?? 0}"); // 0

// === CONSTANTES ===
const double PI = 3.14159265;
// PI = 3.14; // Erro de compilação — const não pode mudar

Console.WriteLine("✅ Tipos & Variáveis concluído!");`,
      codeLanguage: "csharp",
      runCommand:
        "dotnet new console -n TiposDemo && cd TiposDemo && dotnet run",
      checklist: [
        "Criar projeto console com dotnet new console -n TiposDemo",
        "Declarar pelo menos 5 tipos de valor diferentes (int, double, decimal, bool, char)",
        "Testar a diferença entre value type e reference type com arrays",
        "Usar var para declarar 3 variáveis e verificar o tipo inferido",
        "Criar uma variável nullable e usar os operadores ?? e ?.",
      ],
      quiz: [
        {
          q: "Qual a diferença fundamental entre value types e reference types em C#?",
          options: [
            "Value types são armazenados na stack com cópia direta; reference types armazenam um ponteiro para o heap",
            "Value types são mais lentos que reference types",
            "Reference types não podem ser null",
            "Não existe diferença — ambos funcionam da mesma forma",
          ],
          answer: 0,
          explanation:
            "Value types (int, struct, enum) vivem na stack e são copiados por valor. Reference types (class, string, array) armazenam na stack apenas uma referência ao objeto no heap. Isso afeta performance, comportamento de cópia e uso de memória.",
        },
        {
          q: "Quando você deve usar decimal em vez de double?",
          options: [
            "Sempre que precisar de números negativos",
            "Quando trabalhar com cálculos financeiros que exigem precisão exata",
            "Quando precisar de números muito grandes",
            "Decimal e double são intercambiáveis",
          ],
          answer: 1,
          explanation:
            "O tipo decimal tem precisão de 28-29 dígitos e é ideal para cálculos financeiros onde erros de arredondamento de ponto flutuante são inaceitáveis. Double usa ponto flutuante IEEE 754 e pode ter pequenas imprecisões (ex: 0.1 + 0.2 != 0.3).",
        },
        {
          q: "O que o código a seguir imprime? int? x = null; Console.WriteLine(x ?? 42);",
          options: ["null", "Erro de compilação", "42", "0"],
          answer: 2,
          explanation:
            "O operador ?? (null-coalescing) retorna o operando da esquerda se não for null, caso contrário retorna o da direita. Como x é null, o resultado é 42.",
        },
      ],
    },
    {
      id: "m1t2",
      moduleId: "m1",
      title: "Controle de Fluxo",
      theory: `Estruturas de controle de fluxo determinam quais blocos de código são executados e quantas vezes. Em C# moderno, essas estruturas vão muito além do básico if/else, incluindo switch expressions e pattern matching — recursos que tornam o código mais expressivo e seguro.

O if/else é a estrutura mais básica de decisão. Em C# 12, você pode combiná-lo com pattern matching para verificar tipos e extrair valores em uma única expressão: if (obj is string texto && texto.Length > 5). Isso elimina casts manuais e torna o código mais seguro.

O switch expression (introduzido no C# 8) substituiu o switch statement verboso por uma sintaxe concisa e funcional. Em vez de case/break, você usa setas (=>) e retorna valores diretamente. O compilador verifica se todos os casos foram cobertos, tornando o código mais robusto.

Loops em C# oferecem diferentes semânticas. O for é ideal quando você precisa do índice. O foreach é preferido para iterar coleções — é mais legível e funciona com qualquer IEnumerable<T>. O while executa enquanto a condição for verdadeira, e o do-while garante pelo menos uma execução.

Pattern matching é um dos recursos mais poderosos do C# moderno. Permite verificar tipos (is), combinar condições (and, or, not), verificar propriedades ({ Prop: value }) e fazer range checks (> 0 and < 100). Corporativamente, pattern matching reduz bugs ao forçar tratamento explícito de todos os cenários possíveis, especialmente quando combinado com switch expressions e o discard pattern _.`,
      code: `// Controle de Fluxo em C# 12 / .NET 8
// Execute: dotnet new console -n FluxoDemo && cd FluxoDemo

// === IF/ELSE com pattern matching ===
object dados = "C# é incrível";

if (dados is string texto && texto.Length > 5)
{
    Console.WriteLine($"String longa: {texto}");
}
else if (dados is int numero)
{
    Console.WriteLine($"Número: {numero}");
}

// === SWITCH EXPRESSION (C# 8+) — conciso e funcional ===
int statusCode = 404;

string mensagem = statusCode switch
{
    200 => "OK — Sucesso",
    301 => "Movido permanentemente",
    404 => "Não encontrado",
    500 => "Erro interno do servidor",
    >= 400 and < 500 => "Erro do cliente",
    _ => "Status desconhecido"  // _ = discard (default)
};
Console.WriteLine($"HTTP {statusCode}: {mensagem}");

// === PATTERN MATCHING avançado ===
decimal salario = 7500m;

string faixa = salario switch
{
    <= 0 => "Inválido",
    > 0 and <= 3000m => "Faixa 1 — Isento",
    > 3000m and <= 6000m => "Faixa 2 — 15%",
    > 6000m and <= 10000m => "Faixa 3 — 22.5%",
    _ => "Faixa 4 — 27.5%"
};
Console.WriteLine($"Salário R\${salario}: {faixa}");

// === FOR — quando precisa do índice ===
string[] linguagens = { "C#", "Python", "Java", "TypeScript" };
for (int i = 0; i < linguagens.Length; i++)
{
    Console.WriteLine($"  [{i}] {linguagens[i]}");
}

// === FOREACH — preferido para coleções ===
var notas = new List<double> { 8.5, 7.0, 9.2, 6.8 };
double soma = 0;
foreach (var nota in notas)
{
    soma += nota;
}
Console.WriteLine($"Média: {soma / notas.Count:F1}");

// === WHILE e DO-WHILE ===
int tentativas = 0;
while (tentativas < 3)
{
    Console.WriteLine($"  Tentativa {tentativas + 1}");
    tentativas++;
}

// do-while garante pelo menos 1 execução
int x = 10;
do
{
    Console.WriteLine($"  x = {x}");
    x--;
} while (x > 10); // Condição falsa, mas executa 1 vez

Console.WriteLine("✅ Controle de Fluxo concluído!");`,
      codeLanguage: "csharp",
      runCommand:
        "dotnet new console -n FluxoDemo && cd FluxoDemo && dotnet run",
      checklist: [
        "Criar projeto console com dotnet new console -n FluxoDemo",
        "Implementar um switch expression que classifique notas (A/B/C/D/F)",
        "Usar pattern matching com is para verificar tipos de object",
        "Criar um loop foreach que calcule a média de uma lista de números",
        "Testar pattern matching com ranges (> X and < Y) em um switch",
      ],
      quiz: [
        {
          q: "Qual a principal vantagem do switch expression sobre o switch statement tradicional?",
          options: [
            "É mais rápido em tempo de execução",
            "Retorna valores diretamente, é mais conciso e o compilador verifica cobertura de casos",
            "Funciona apenas com strings",
            "Não precisa de break em cada case",
          ],
          answer: 1,
          explanation:
            "O switch expression (=>) retorna valores diretamente como uma expressão, tem sintaxe muito mais concisa que case/break, e o compilador avisa se algum caso não foi coberto. Isso resulta em código mais seguro e legível.",
        },
        {
          q: "Quando você deve preferir foreach sobre for?",
          options: [
            "Sempre — for é obsoleto",
            "Quando precisa modificar o índice durante a iteração",
            "Quando itera coleções e não precisa do índice — é mais legível e seguro",
            "foreach é mais lento, então nunca deve ser preferido",
          ],
          answer: 2,
          explanation:
            "foreach é preferido quando itera coleções sem necessidade do índice. É mais legível, menos propenso a erros de off-by-one e funciona com qualquer IEnumerable<T>. Use for quando precisar do índice ou modificar a coleção.",
        },
        {
          q: "O que imprime? object v = 42; if (v is int n && n > 10) Console.Write(n * 2);",
          options: [
            "Erro de compilação",
            "42",
            "84",
            "Nada — a condição é falsa",
          ],
          answer: 2,
          explanation:
            'O pattern matching "v is int n" verifica se v é int e extrai o valor em n. Como 42 é int e 42 > 10, o código imprime n * 2 = 84.',
        },
      ],
    },
    {
      id: "m1t3",
      moduleId: "m1",
      title: "Coleções",
      theory: `Coleções em C# são estruturas de dados que armazenam e organizam grupos de objetos. Escolher a coleção certa para cada cenário é uma habilidade essencial em desenvolvimento corporativo — a escolha errada pode causar problemas sérios de performance em produção.

Array é a coleção mais básica: tamanho fixo, acesso por índice O(1), ideal quando o tamanho é conhecido antecipadamente. Em APIs e protobuf, arrays são comuns por serem leves e rápidos.

List<T> é a coleção mais versátil e usada no dia a dia. Internamente é um array dinâmico que dobra de capacidade quando necessário. Acesso por índice é O(1), Add é O(1) amortizado, mas Insert(0, item) é O(n) porque desloca todos os elementos. Use List<T> como padrão quando precisa de uma coleção ordenada e redimensionável.

Dictionary<TKey, TValue> mapeia chaves únicas a valores com acesso O(1) via hash table. É a estrutura ideal para lookups rápidos — por exemplo, cache de usuários por ID, mapear códigos de erro a mensagens, ou indexar configurações por nome. A chave deve implementar GetHashCode() e Equals() corretamente.

HashSet<T> armazena elementos únicos sem ordem específica, com operações Add, Contains e Remove em O(1). É perfeito para verificar existência (ex: "este email já foi usado?"), eliminar duplicatas e operações de conjuntos (intersecção, união, diferença).

No contexto corporativo, a regra de ouro é: List<T> para listas ordenadas, Dictionary<K,V> para lookups por chave, HashSet<T> para unicidade e verificação rápida de pertencimento. Evite arrays quando o tamanho é dinâmico, e evite List<T> quando precisa de buscas frequentes por chave — Dictionary será ordens de magnitude mais rápido.`,
      code: `// Coleções em C# 12 / .NET 8
// Execute: dotnet new console -n ColecoesDemo && cd ColecoesDemo

// === ARRAY — tamanho fixo, acesso rápido por índice ===
string[] diasUteis = { "Seg", "Ter", "Qua", "Qui", "Sex" };
Console.WriteLine($"Primeiro dia: {diasUteis[0]}");
Console.WriteLine($"Total: {diasUteis.Length} dias");

// === LIST<T> — coleção dinâmica mais usada ===
var tarefas = new List<string>();
tarefas.Add("Revisar PR #142");
tarefas.Add("Deploy para staging");
tarefas.Add("Daily standup");
tarefas.Insert(0, "Café ☕");          // Insere no início

Console.WriteLine($"\\n📋 Tarefas ({tarefas.Count}):");
foreach (var tarefa in tarefas)
{
    Console.WriteLine($"  • {tarefa}");
}

tarefas.Remove("Café ☕");             // Remove por valor
tarefas.RemoveAt(0);                   // Remove por índice
Console.WriteLine($"Após remoções: {tarefas.Count} tarefas");

// === DICTIONARY<K,V> — lookup rápido por chave ===
var funcionarios = new Dictionary<int, string>
{
    { 101, "Ana Silva" },
    { 102, "Carlos Souza" },
    { 103, "Maria Oliveira" }
};

// Acesso por chave — O(1)
Console.WriteLine($"\\nID 102: {funcionarios[102]}");

// Verificar antes de acessar (evita KeyNotFoundException)
if (funcionarios.TryGetValue(999, out string? nome))
{
    Console.WriteLine(nome);
}
else
{
    Console.WriteLine("Funcionário 999 não encontrado");
}

// Adicionar / atualizar
funcionarios[104] = "João Santos";
funcionarios[101] = "Ana Silva Costa";  // Atualiza existente

// === HASHSET<T> — elementos únicos, busca O(1) ===
var emailsCadastrados = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
{
    "ana@empresa.com",
    "carlos@empresa.com"
};

// Contains é O(1) — muito mais rápido que List.Contains que é O(n)
bool existe = emailsCadastrados.Contains("ANA@empresa.com");
Console.WriteLine($"\\nana@empresa.com existe? {existe}"); // True (case-insensitive)

bool adicionou = emailsCadastrados.Add("ana@empresa.com");
Console.WriteLine($"Adicionou duplicata? {adicionou}"); // False

// Operações de conjunto
var emailsNovos = new HashSet<string> { "carlos@empresa.com", "julia@empresa.com" };
emailsCadastrados.UnionWith(emailsNovos);
Console.WriteLine($"Total emails: {emailsCadastrados.Count}"); // 3

// === QUANDO USAR CADA COLEÇÃO ===
// Array       → tamanho fixo conhecido, performance crítica
// List<T>     → coleção ordenada dinâmica (padrão do dia a dia)
// Dictionary  → lookup por chave (cache, mapeamentos)
// HashSet     → unicidade, verificação rápida de existência

Console.WriteLine("\\n✅ Coleções concluído!");`,
      codeLanguage: "csharp",
      runCommand:
        "dotnet new console -n ColecoesDemo && cd ColecoesDemo && dotnet run",
      checklist: [
        "Criar projeto console com dotnet new console -n ColecoesDemo",
        "Criar uma List<string> com operações Add, Remove, Insert e Count",
        "Criar um Dictionary<int, string> e usar TryGetValue para acesso seguro",
        "Criar um HashSet<string> e testar Contains e Add com duplicatas",
        "Comparar a performance conceitual de List.Contains vs HashSet.Contains",
      ],
      quiz: [
        {
          q: "Qual a diferença fundamental entre List<T> e Array em C#?",
          options: [
            "Não há diferença — ambos funcionam da mesma forma",
            "Array tem tamanho fixo definido na criação; List<T> é dinâmico e redimensiona automaticamente",
            "List<T> é mais rápido que Array em todos os cenários",
            "Array aceita tipos genéricos e List não",
          ],
          answer: 1,
          explanation:
            "Arrays têm tamanho fixo (new int[5] sempre terá 5 elementos). List<T> é um array dinâmico que redimensiona internamente quando necessário. Use Array quando o tamanho é conhecido; List<T> quando é dinâmico.",
        },
        {
          q: "Quando HashSet<T> é preferível a List<T>?",
          options: [
            "Quando precisa manter a ordem de inserção",
            "Quando precisa de elementos únicos e verificação rápida de existência (O(1))",
            "Quando precisa acessar por índice",
            "HashSet é sempre mais lento que List",
          ],
          answer: 1,
          explanation:
            'HashSet<T> garante unicidade e tem Contains em O(1) via hash. List<T>.Contains é O(n). Use HashSet quando precisa verificar "este item já existe?" frequentemente.',
        },
        {
          q: "O que acontece ao executar: var d = new Dictionary<int,string>(); Console.Write(d[1]);",
          options: [
            "Imprime null",
            "Imprime string vazia",
            "Lança KeyNotFoundException em tempo de execução",
            "Erro de compilação",
          ],
          answer: 2,
          explanation:
            "Acessar uma chave inexistente com [] lança KeyNotFoundException. Use TryGetValue ou ContainsKey para verificar antes de acessar. Este é um erro comum em produção.",
        },
      ],
    },
    {
      id: "m1t4",
      moduleId: "m1",
      title: "Strings & Manipulação",
      theory: `Strings em C# são objetos imutáveis do tipo System.String — cada operação que "modifica" uma string na verdade cria uma nova instância na memória. Entender essa imutabilidade é crucial para performance em aplicações corporativas que processam texto intensivamente.

Interpolação de strings ($ antes das aspas) é a forma moderna e preferida de compor strings em C#. Substituiu a concatenação com + e String.Format(). Com C# 12, interpolação funciona até em strings raw (@$"...") e suporta expressões complexas dentro das chaves.

StringBuilder é essencial quando você precisa construir strings em loops ou concatenar muitas vezes. Como strings são imutáveis, concatenar em loop cria N objetos intermediários — StringBuilder mantém um buffer interno mutável e só gera a string final quando você chama ToString(). Em cenários corporativos (gerar relatórios, montar queries, log), StringBuilder pode ser 100x mais rápido.

Os métodos mais usados de string incluem: Trim() para remover espaços, Split() para separar por delimitador, Contains()/StartsWith()/EndsWith() para buscas, Replace() para substituições, ToUpper()/ToLower() para normalização, e Substring()/indexação por range [..] para extrair partes.

Span<T> e ReadOnlySpan<char> são tipos modernos que permitem trabalhar com fatias de strings sem criar cópias. Em aplicações de alta performance (parsers, processamento de logs), Span evita alocações desnecessárias no heap. O método AsSpan() converte uma string em ReadOnlySpan<char>, permitindo operações de fatiamento com custo zero de memória.

No dia a dia corporativo, a regra é: interpolação para compor strings simples, StringBuilder para loops e concatenações pesadas, e Span<T> quando performance é crítica e você quer evitar alocações.`,
      code: `// Strings & Manipulação em C# 12 / .NET 8
// Execute: dotnet new console -n StringsDemo && cd StringsDemo

// === INTERPOLAÇÃO DE STRINGS (forma moderna) ===
string nome = "Ana";
int idade = 28;
decimal salario = 8500.50m;

// Interpolação básica
Console.WriteLine($"Nome: {nome}, Idade: {idade}");

// Formatação dentro da interpolação
Console.WriteLine($"Salário: R\${salario:N2}");
Console.WriteLine($"Data: {DateTime.Now:dd/MM/yyyy}");
Console.WriteLine($"Pi: {Math.PI:F4}");

// Raw string literal (C# 11+) — sem escape
string json = $"""
    {{
        "nome": "{nome}",
        "idade": {idade}
    }}
    """;
Console.WriteLine(json);

// === MÉTODOS ESSENCIAIS ===
string email = "  Ana.Silva@Empresa.COM  ";

Console.WriteLine($"Trim: '{email.Trim()}'");
Console.WriteLine($"Lower: '{email.Trim().ToLower()}'");
Console.WriteLine($"Contains @: {email.Contains("@")}");
Console.WriteLine($"Starts: {email.Trim().StartsWith("Ana")}");
Console.WriteLine($"Replace: {email.Trim().Replace("COM", "com.br")}");

// Split — separar por delimitador
string csv = "C#;Python;Java;TypeScript";
string[] linguagens = csv.Split(';');
Console.WriteLine($"\\nLinguagens ({linguagens.Length}):");
foreach (var lang in linguagens)
{
    Console.WriteLine($"  • {lang}");
}

// Join — inverso do Split
string reunido = string.Join(" | ", linguagens);
Console.WriteLine($"Reunido: {reunido}");

// Substring e Range (C# 8+)
string codigo = "PRD-2026-00142";
string prefixo = codigo[..3];       // "PRD"
string ano = codigo[4..8];           // "2026"
string numero = codigo[9..];         // "00142"
Console.WriteLine($"\\nPrefixo={prefixo}, Ano={ano}, Num={numero}");

// === STRINGBUILDER — para concatenações pesadas ===
var sb = new System.Text.StringBuilder();
sb.AppendLine("=== Relatório ===");
for (int i = 1; i <= 5; i++)
{
    sb.AppendLine($"  Item {i}: R\${i * 150:N2}");
}
sb.AppendLine("=================");
Console.WriteLine(sb.ToString());

// === SPAN<T> — fatiamento sem alocação ===
string logLine = "2026-03-10 14:30:00 [INFO] Usuário logou";
ReadOnlySpan<char> span = logLine.AsSpan();

ReadOnlySpan<char> data = span[..10];      // "2026-03-10" (sem cópia!)
ReadOnlySpan<char> nivel = span[21..25];   // "INFO"
Console.WriteLine($"Data: {data}, Nível: {nivel}");

Console.WriteLine("\\n✅ Strings & Manipulação concluído!");`,
      codeLanguage: "csharp",
      runCommand:
        "dotnet new console -n StringsDemo && cd StringsDemo && dotnet run",
      checklist: [
        "Criar projeto console com dotnet new console -n StringsDemo",
        'Usar interpolação com formatação ($"{valor:N2}") para exibir valores monetários',
        "Aplicar Trim, Split, Replace e Join em uma string de entrada",
        "Criar um StringBuilder em loop e comparar resultado com concatenação simples",
        "Testar fatiamento com range syntax (str[..3], str[4..8]) e Span",
      ],
      quiz: [
        {
          q: 'Por que strings em C# são chamadas de "imutáveis"?',
          options: [
            "Porque não podem conter caracteres especiais",
            "Porque cada operação cria uma nova string na memória em vez de modificar a original",
            "Porque são armazenadas na stack",
            "Porque não podem ser null",
          ],
          answer: 1,
          explanation:
            "Strings em C# são imutáveis — métodos como Replace, ToUpper, Trim retornam uma NOVA string. A original permanece inalterada. Isso impacta performance em loops, onde StringBuilder deve ser usado.",
        },
        {
          q: "Quando usar StringBuilder em vez de concatenação com + ou interpolação?",
          options: [
            "Sempre — StringBuilder é sempre mais rápido",
            "Quando precisa fazer concatenações em loops ou montar strings grandes dinamicamente",
            "Nunca — interpolação substituiu o StringBuilder",
            "Apenas para strings maiores que 1000 caracteres",
          ],
          answer: 1,
          explanation:
            "StringBuilder é essencial em loops e concatenações intensivas. Cada + ou interpolação cria uma nova string imutável. Em loop de 1000 iterações, são 1000 objetos descartados vs 1 buffer do StringBuilder.",
        },
        {
          q: 'O que o código imprime? string s = "ABCDEF"; Console.Write(s[2..4]);',
          options: ['"ABCD"', '"CD"', '"CDE"', '"BC"'],
          answer: 1,
          explanation:
            'A sintaxe de range [2..4] extrai caracteres dos índices 2 (inclusivo) ao 4 (exclusivo). Índice 2=C, índice 3=D. Resultado: "CD".',
        },
      ],
    },
  ],
};
