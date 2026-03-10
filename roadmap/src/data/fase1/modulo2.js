export const MODULO_2 = {
  id: "m2",
  title: "POO em C#",
  icon: "🧱",
  week: "Semana 2",
  color: "#7C3AED",
  topics: [
    {
      id: "m2t1",
      moduleId: "m2",
      title: "Classes & Objetos",
      theory: `Programação Orientada a Objetos (POO) é o paradigma fundamental do C# e do desenvolvimento corporativo com .NET. Tudo gira em torno de classes — blueprints que definem a estrutura (campos/propriedades) e o comportamento (métodos) dos objetos.

Uma classe é como uma planta de uma casa: define os cômodos e medidas, mas não é a casa em si. O objeto é a instância concreta — a casa construída a partir da planta. Você pode construir múltiplas casas (objetos) a partir da mesma planta (classe).

Campos (fields) são variáveis internas da classe, geralmente privados. Propriedades (properties) são a interface pública para acessar/modificar dados com controle — podem ter lógica de validação no set, ou ser somente leitura. Em C# moderno, propriedades auto-implementadas (get; set;) são o padrão.

Construtores são métodos especiais chamados automaticamente ao criar um objeto com new. Permitem garantir que o objeto nasça em estado válido. C# 12 introduziu primary constructors para classes — parâmetros definidos na declaração da classe que ficam disponíveis em todo o corpo, eliminando boilerplate de constructor + campo.

Em código corporativo, classes bem projetadas seguem o princípio de responsabilidade única: cada classe faz uma coisa e faz bem. Uma classe Funcionario encapsula dados do funcionário e validações de negócio. Uma classe FolhaPagamento calcula salários. Separá-las facilita manutenção, testes e evolução.

Records (record class) são tipos de referência imutáveis que geram automaticamente Equals, GetHashCode e ToString. São ideais para DTOs (Data Transfer Objects) e value objects em Domain-Driven Design.`,
      code: `// Classes & Objetos em C# 12 / .NET 8
// Execute: dotnet new console -n ClassesDemo && cd ClassesDemo

// === CLASSE BÁSICA com campos, propriedades e construtor ===
class Funcionario
{
    // Propriedades auto-implementadas
    public int Id { get; init; }            // init = só no construtor
    public string Nome { get; set; }
    public string Cargo { get; set; }
    public decimal Salario { get; private set; }  // set privado

    // Construtor — garante estado válido ao criar
    public Funcionario(int id, string nome, string cargo, decimal salario)
    {
        Id = id;
        Nome = nome;
        Cargo = cargo;
        Salario = salario > 0 ? salario : throw new ArgumentException("Salário deve ser positivo");
    }

    // Método de negócio
    public void AplicarAumento(decimal percentual)
    {
        Salario += Salario * (percentual / 100);
    }

    // Override ToString para exibição
    public override string ToString()
        => $"[{Id}] {Nome} - {Cargo} (R\${Salario:N2})";
}

// === PRIMARY CONSTRUCTOR (C# 12) — elimina boilerplate ===
class Departamento(string nome, string gerente)
{
    // Parâmetros ficam disponíveis em todo o corpo
    private readonly List<Funcionario> _funcionarios = [];

    public string Nome => nome;
    public string Gerente => gerente;
    public int TotalFuncionarios => _funcionarios.Count;

    public void Adicionar(Funcionario func) => _funcionarios.Add(func);

    public void Listar()
    {
        Console.WriteLine($"\\n📁 {nome} (Gerente: {gerente})");
        foreach (var f in _funcionarios)
            Console.WriteLine($"  {f}");
    }
}

// === RECORD — imutável com Equals/GetHashCode/ToString automáticos ===
record Endereco(string Rua, string Cidade, string Estado, string CEP);

// === USO ===
var func1 = new Funcionario(1, "Ana Silva", "Dev Sênior", 12000m);
var func2 = new Funcionario(2, "Carlos Lima", "Dev Júnior", 5000m);

Console.WriteLine(func1);
func1.AplicarAumento(10); // +10%
Console.WriteLine($"Após aumento: {func1}");

var depto = new Departamento("Engenharia", "Maria Souza");
depto.Adicionar(func1);
depto.Adicionar(func2);
depto.Listar();

// Records — comparação por valor
var end1 = new Endereco("Rua A", "SP", "SP", "01000-000");
var end2 = new Endereco("Rua A", "SP", "SP", "01000-000");
Console.WriteLine($"\\nEndereços iguais? {end1 == end2}"); // True (compara valores)

Console.WriteLine("\\n✅ Classes & Objetos concluído!");`,
      codeLanguage: "csharp",
      runCommand:
        "dotnet new console -n ClassesDemo && cd ClassesDemo && dotnet run",
      checklist: [
        "Criar projeto console com dotnet new console -n ClassesDemo",
        "Criar uma classe Produto com propriedades Id, Nome, Preco e construtor validado",
        "Usar primary constructor (C# 12) em pelo menos uma classe",
        "Criar um record para representar dados imutáveis (ex: Endereco, Contato)",
        "Instanciar objetos, chamar métodos e imprimir com ToString()",
      ],
      quiz: [
        {
          q: "Qual a diferença entre um campo (field) e uma propriedade (property)?",
          options: [
            "São a mesma coisa — nomes diferentes para o mesmo conceito",
            "Campos são variáveis internas; propriedades expõem acesso controlado com get/set e podem ter validação",
            "Propriedades são sempre públicas e campos sempre privados",
            "Campos são mais rápidos e devem ser preferidos",
          ],
          answer: 1,
          explanation:
            "Campos são variáveis diretas da classe (geralmente privados). Propriedades são acessores (get/set) que controlam como dados são lidos/escritos, permitindo validação, lógica e encapsulamento.",
        },
        {
          q: "O que o primary constructor (C# 12) resolve?",
          options: [
            "Elimina a necessidade de classes",
            "Remove boilerplate de construtor explícito — parâmetros ficam disponíveis em todo o corpo da classe",
            "Substitui propriedades por campos",
            "Permite criar objetos sem usar new",
          ],
          answer: 1,
          explanation:
            "Primary constructors em C# 12 permitem definir parâmetros na declaração da classe: class Pessoa(string nome, int idade). Os parâmetros ficam disponíveis em todo o corpo sem precisar declarar campos manualmente.",
        },
        {
          q: "O que imprime? record Ponto(int X, int Y); var a = new Ponto(1, 2); var b = new Ponto(1, 2); Console.Write(a == b);",
          options: [
            "False — são referências diferentes",
            "True — records comparam por valor",
            "Erro de compilação",
            "Depende do .NET version",
          ],
          answer: 1,
          explanation:
            "Records geram automaticamente Equals e == que comparam por valor dos membros (X e Y). Mesmo sendo referências diferentes na memória, a == b retorna True porque os valores são iguais.",
        },
      ],
    },
    {
      id: "m2t2",
      moduleId: "m2",
      title: "Herança & Classes Abstratas",
      theory: `Herança é um dos pilares da POO que permite criar novas classes a partir de classes existentes, herdando suas características e comportamentos. A classe derivada (filha) recebe todos os membros públicos e protegidos da classe base (pai) e pode estendê-los ou modificá-los.

Em C#, uma classe pode herdar de apenas uma classe base (herança simples), mas pode implementar múltiplas interfaces. A sintaxe é class Filho : Pai. A palavra-chave base permite acessar membros da classe pai, especialmente útil em construtores para encadear inicialização.

Métodos virtuais (virtual) na classe base podem ser sobrescritos (override) nas classes derivadas. Um método Calcular() virtual na classe base Forma pode ter implementações específicas em Circulo e Retangulo. Sem virtual, o método não pode ser sobrescrito.

Classes abstratas (abstract) são blueprints incompletos — não podem ser instanciadas diretamente. Servem para definir um contrato: "toda classe derivada DEVE implementar esses métodos". Métodos abstratos não têm corpo na classe base, forçando as filhas a fornecerem a implementação.

Classes seladas (sealed) impedem herança — nenhuma outra classe pode herdar delas. Use sealed quando a classe não foi projetada para extensão e herdar dela poderia quebrar invariantes. Isso é uma boa prática de segurança e clareza de design.

No código corporativo, herança é mais usada em frameworks e bibliotecas do que em código de aplicação. A regra moderna é "prefira composição sobre herança" (composition over inheritance). Use herança quando existe genuinamente uma relação "é um" (Gerente É UM Funcionário) e composição quando é "tem um" (Departamento TEM Funcionários).`,
      code: `// Herança & Classes Abstratas em C# 12 / .NET 8
// Execute: dotnet new console -n HerancaDemo && cd HerancaDemo

// === CLASSE ABSTRATA — blueprint incompleto ===
abstract class Funcionario
{
    public string Nome { get; }
    public decimal SalarioBase { get; }

    // Construtor na classe abstrata — chamado pelas filhas
    protected Funcionario(string nome, decimal salarioBase)
    {
        Nome = nome;
        SalarioBase = salarioBase;
    }

    // Método abstrato — filhas DEVEM implementar
    public abstract decimal CalcularSalarioFinal();

    // Método virtual — filhas PODEM sobrescrever
    public virtual string ObterResumo()
        => $"{Nome} — Base: R\${SalarioBase:N2}";
}

// === HERANÇA — relação "é um" ===
class Desenvolvedor : Funcionario
{
    public string Linguagem { get; }

    // Construtor chama base() para inicializar a classe pai
    public Desenvolvedor(string nome, decimal salarioBase, string linguagem)
        : base(nome, salarioBase)
    {
        Linguagem = linguagem;
    }

    // Implementação obrigatória do método abstrato
    public override decimal CalcularSalarioFinal()
        => SalarioBase * 1.15m; // +15% benefício técnico

    // Sobrescrita opcional do método virtual
    public override string ObterResumo()
        => $"{base.ObterResumo()} | {Linguagem} | Final: R\${CalcularSalarioFinal():N2}";
}

class Gerente : Funcionario
{
    public int TamanhoEquipe { get; }

    public Gerente(string nome, decimal salarioBase, int tamanhoEquipe)
        : base(nome, salarioBase)
    {
        TamanhoEquipe = tamanhoEquipe;
    }

    public override decimal CalcularSalarioFinal()
        => SalarioBase + (TamanhoEquipe * 500m); // +R$500 por liderado

    public override string ObterResumo()
        => $"{base.ObterResumo()} | Equipe: {TamanhoEquipe} | Final: R\${CalcularSalarioFinal():N2}";
}

// === SEALED — impede herança ===
sealed class Estagiario : Funcionario
{
    public Estagiario(string nome, decimal bolsa) : base(nome, bolsa) { }

    public override decimal CalcularSalarioFinal() => SalarioBase;
}

// class EstagiarioSenior : Estagiario { } // ERRO: não pode herdar de sealed

// === POLIMORFISMO em ação ===
Funcionario[] equipe =
[
    new Desenvolvedor("Ana", 10000m, "C#"),
    new Gerente("Carlos", 12000m, 5),
    new Estagiario("Julia", 2000m),
    new Desenvolvedor("Pedro", 9500m, "Python"),
];

Console.WriteLine("👥 Folha de Pagamento:\\n");
decimal totalFolha = 0;
foreach (var func in equipe)
{
    Console.WriteLine($"  {func.ObterResumo()}");
    totalFolha += func.CalcularSalarioFinal();
}
Console.WriteLine($"\\n💰 Total da folha: R\${totalFolha:N2}");

Console.WriteLine("\\n✅ Herança & Classes Abstratas concluído!");`,
      codeLanguage: "csharp",
      runCommand:
        "dotnet new console -n HerancaDemo && cd HerancaDemo && dotnet run",
      checklist: [
        "Criar projeto console com dotnet new console -n HerancaDemo",
        "Criar uma classe abstrata com pelo menos um método abstrato e um virtual",
        "Implementar 2 classes derivadas com override nos métodos",
        "Criar um array da classe base e iterar com polimorfismo",
        "Experimentar sealed em uma classe e verificar que herança é bloqueada",
      ],
      quiz: [
        {
          q: "Qual a diferença entre uma classe abstrata e uma classe normal?",
          options: [
            "Classes abstratas são mais rápidas",
            "Classes abstratas não podem ser instanciadas diretamente e podem ter métodos sem implementação",
            "Classes abstratas não podem ter construtores",
            "Não existe diferença — são intercambiáveis",
          ],
          answer: 1,
          explanation:
            "Classes abstratas servem como contratos/blueprints. Não podem ser instanciadas (new MinhaAbstrata() é erro). Podem ter métodos abstratos (sem corpo, filhas DEVEM implementar) e métodos concretos (com corpo, opcionais para override).",
        },
        {
          q: "Quando usar sealed em uma classe?",
          options: [
            "Sempre — impede erros de herança",
            "Quando a classe não foi projetada para extensão e herdar dela poderia quebrar invariantes",
            "Apenas em classes abstratas",
            "sealed é deprecated no C# 12",
          ],
          answer: 1,
          explanation:
            "sealed impede que outras classes herdem da classe selada. Use quando herança poderia quebrar o design (ex: uma classe com lógica interna delicada) ou quando não faz sentido semântico estender.",
        },
        {
          q: "O que acontece se uma classe herda de uma abstrata mas não implementa todos os métodos abstratos?",
          options: [
            "Compila normalmente — os métodos ficam vazios",
            "Erro de compilação — a classe derivada deve ser abstrata ou implementar todos os métodos",
            "Erro em tempo de execução",
            "Os métodos são automaticamente implementados como vazios",
          ],
          answer: 1,
          explanation:
            "Se uma classe herda métodos abstratos e não os implementa, deve ser declarada abstract também. Caso contrário, o compilador gera erro: a classe concreta deve implementar todos os membros abstratos.",
        },
      ],
    },
    {
      id: "m2t3",
      moduleId: "m2",
      title: "Interfaces & Polimorfismo",
      theory: `Interfaces definem um contrato que classes devem seguir — um conjunto de membros (métodos, propriedades, eventos) que a classe se compromete a implementar. Diferente de classes abstratas, interfaces não contêm estado (campos) e uma classe pode implementar múltiplas interfaces.

A interface é o mecanismo central de design em código corporativo. Frameworks como ASP.NET Core são construídos inteiramente sobre interfaces: ILogger para logging, IConfiguration para configuração, IHostedService para serviços em background. Isso permite trocar implementações sem alterar o código que as consome.

Polimorfismo é a capacidade de tratar objetos de tipos diferentes de forma uniforme através de uma interface comum. Um método ProcessarPagamento(IPagamento pagamento) pode receber CartaoCredito, Pix ou Boleto — todos implementam IPagamento. O código não precisa saber qual é o tipo concreto.

Implementação explícita de interface resolve conflitos quando uma classe implementa múltiplas interfaces com métodos de mesmo nome. Com implementação explícita, o método só é acessível através da referência da interface específica, não diretamente pelo objeto.

Default interface methods (C# 8+) permitem adicionar métodos com corpo na interface. Isso resolve o problema de evolução: adicionar um novo método a uma interface existente não quebra as classes que já a implementam.

No design corporativo, a regra é "programe para interfaces, não para implementações". Seus repositórios devem ser IRepository<T>, seus serviços IEmailService, seus loggers ILogger. Isso facilita testes unitários (mock), inversão de dependência e troca de implementações.`,
      code: `// Interfaces & Polimorfismo em C# 12 / .NET 8
// Execute: dotnet new console -n InterfacesDemo && cd InterfacesDemo

// === INTERFACE — contrato de comportamento ===
interface IPagamento
{
    string Tipo { get; }
    decimal Valor { get; }
    bool Processar();

    // Default method (C# 8+) — implementação padrão
    string ObterRecibo() => $"Recibo: {Tipo} — R\${Valor:N2}";
}

interface IAuditavel
{
    DateTime DataCriacao { get; }
    void Auditar();
}

// === CLASSE implementando MÚLTIPLAS interfaces ===
class PagamentoPix : IPagamento, IAuditavel
{
    public string Tipo => "PIX";
    public decimal Valor { get; }
    public string ChavePix { get; }
    public DateTime DataCriacao { get; } = DateTime.Now;

    public PagamentoPix(decimal valor, string chavePix)
    {
        Valor = valor;
        ChavePix = chavePix;
    }

    public bool Processar()
    {
        Console.WriteLine($"  ✅ PIX de R\${Valor:N2} para {ChavePix}");
        return true;
    }

    public void Auditar()
        => Console.WriteLine($"  📋 Auditoria: PIX criado em {DataCriacao:HH:mm:ss}");
}

class PagamentoCartao : IPagamento
{
    public string Tipo => "Cartão de Crédito";
    public decimal Valor { get; }
    public string Bandeira { get; }
    public int Parcelas { get; }

    public PagamentoCartao(decimal valor, string bandeira, int parcelas)
    {
        Valor = valor;
        Bandeira = bandeira;
        Parcelas = parcelas;
    }

    public bool Processar()
    {
        Console.WriteLine($"  ✅ {Bandeira} {Parcelas}x de R\${Valor / Parcelas:N2}");
        return true;
    }

    // Sobrescreve o default method
    public string ObterRecibo()
        => $"Recibo: {Bandeira} {Parcelas}x — Total R\${Valor:N2}";
}

class PagamentoBoleto : IPagamento
{
    public string Tipo => "Boleto";
    public decimal Valor { get; }
    public string CodigoBarras { get; }

    public PagamentoBoleto(decimal valor)
    {
        Valor = valor;
        CodigoBarras = $"23793.{Random.Shared.Next(10000, 99999)}";
    }

    public bool Processar()
    {
        Console.WriteLine($"  ✅ Boleto R\${Valor:N2} — Cód: {CodigoBarras}");
        return true;
    }
}

// === POLIMORFISMO — tratar diferentes tipos uniformemente ===
static class ProcessadorPagamentos
{
    public static void ProcessarTodos(IPagamento[] pagamentos)
    {
        Console.WriteLine("💳 Processando pagamentos:\\n");
        decimal total = 0;

        foreach (IPagamento pgto in pagamentos)
        {
            pgto.Processar();
            Console.WriteLine($"  {pgto.ObterRecibo()}\\n");
            total += pgto.Valor;

            // Verificar se também é auditável
            if (pgto is IAuditavel auditavel)
            {
                auditavel.Auditar();
            }
        }

        Console.WriteLine($"💰 Total processado: R\${total:N2}");
    }
}

// === USO ===
IPagamento[] pagamentos =
[
    new PagamentoPix(150.00m, "ana@email.com"),
    new PagamentoCartao(899.90m, "Visa", 3),
    new PagamentoBoleto(250.00m),
];

ProcessadorPagamentos.ProcessarTodos(pagamentos);

Console.WriteLine("\\n✅ Interfaces & Polimorfismo concluído!");`,
      codeLanguage: "csharp",
      runCommand:
        "dotnet new console -n InterfacesDemo && cd InterfacesDemo && dotnet run",
      checklist: [
        "Criar projeto console com dotnet new console -n InterfacesDemo",
        "Criar uma interface com pelo menos 2 métodos e 1 propriedade",
        "Implementar a interface em 3 classes diferentes",
        "Criar um método que recebe a interface como parâmetro (polimorfismo)",
        "Testar implementação de múltiplas interfaces em uma classe",
      ],
      quiz: [
        {
          q: "Qual a principal vantagem de programar contra interfaces?",
          options: [
            "Interfaces são mais rápidas que classes",
            "Permite trocar implementações sem alterar o código consumidor, facilitando testes e manutenção",
            "Interfaces não precisam de testes",
            "Interfaces compilam mais rápido",
          ],
          answer: 1,
          explanation:
            "Programar contra interfaces desacopla o código. Um IRepository<T> pode ser SqlRepository em produção e InMemoryRepository em testes. O código que consome não muda — isso é inversão de dependência.",
        },
        {
          q: "Quando usar interface em vez de classe abstrata?",
          options: [
            "Quando precisar de herança múltipla — uma classe pode implementar várias interfaces mas herdar de apenas uma classe",
            "Quando precisar de campos privados compartilhados",
            "Interfaces são sempre preferíveis a classes abstratas",
            "Quando precisar de construtores na classe base",
          ],
          answer: 0,
          explanation:
            'Interfaces permitem "herança múltipla" de contratos: uma classe pode implementar ISerializable, IDisposable e IComparable. Com classes abstratas, só pode herdar de uma. Use interface para contratos; abstrata para compartilhar implementação.',
        },
        {
          q: 'O que este código imprime? interface IAnimal { string Som(); } class Gato : IAnimal { public string Som() => "Miau"; } IAnimal a = new Gato(); Console.Write(a.Som());',
          options: ["Erro de compilação", "Miau", "null", "IAnimal"],
          answer: 1,
          explanation:
            'IAnimal a = new Gato() é polimorfismo via interface. Ao chamar a.Som(), o runtime executa a implementação de Gato.Som() que retorna "Miau". A interface define o contrato, a classe fornece a implementação.',
        },
      ],
    },
    {
      id: "m2t4",
      moduleId: "m2",
      title: "Encapsulamento",
      theory: `Encapsulamento é o princípio de POO que protege os dados internos de um objeto, expondo apenas o que é necessário através de uma interface controlada. Em C#, isso é implementado com modificadores de acesso e propriedades com validação.

Os modificadores de acesso em C# são: public (acessível de qualquer lugar), private (somente dentro da classe), protected (classe + derivadas), internal (dentro do assembly/projeto), protected internal (assembly + derivadas) e private protected (classe + derivadas no mesmo assembly).

Propriedades com validação no setter garantem que o objeto nunca entre em estado inválido. Em vez de um campo público decimal Preco, use uma propriedade que valide: se o valor for negativo, lance exceção. Isso centraliza a regra de negócio no único lugar correto.

Propriedades init-only (init ao invés de set) permitem atribuição apenas durante a inicialização — no construtor ou com object initializer. Após a criação, o valor não pode mudar. Isso cria objetos semi-imutáveis: mais seguros e previsíveis.

O padrão em código corporativo é: campos private, propriedades public com validação quando necessário, métodos public para comportamento. A regra de ouro é "torne tudo o mais restritivo possível e relaxe conforme necessário". Comece com private e só torne public o que for genuinamente necessário para consumidores externos.

Required members (C# 11+) forçam que propriedades sejam atribuídas na inicialização, combinando a flexibilidade de object initializers com a segurança de construtores obrigatórios. Use required quando a propriedade é essencial mas você não quer um construtor com muitos parâmetros.`,
      code: `// Encapsulamento em C# 12 / .NET 8
// Execute: dotnet new console -n EncapsulamentoDemo && cd EncapsulamentoDemo

// === MODIFICADORES DE ACESSO + VALIDAÇÃO ===
class ContaBancaria
{
    // Campo privado — acessível somente dentro da classe
    private decimal _saldo;
    private readonly List<string> _extrato = [];

    // Propriedades públicas com controle de acesso
    public string Titular { get; }            // somente leitura
    public string Numero { get; init; }       // init-only: define na criação, não muda depois
    public decimal Saldo => _saldo;           // calculada, sem set

    // Construtor valida e inicializa
    public ContaBancaria(string titular, string numero, decimal saldoInicial)
    {
        if (string.IsNullOrWhiteSpace(titular))
            throw new ArgumentException("Titular é obrigatório");
        if (saldoInicial < 0)
            throw new ArgumentException("Saldo inicial não pode ser negativo");

        Titular = titular;
        Numero = numero;
        _saldo = saldoInicial;
        _extrato.Add($"Abertura: +R\${saldoInicial:N2}");
    }

    // Métodos públicos controlam como o saldo muda
    public bool Depositar(decimal valor)
    {
        if (valor <= 0) return false;

        _saldo += valor;
        _extrato.Add($"Depósito: +R\${valor:N2}");
        return true;
    }

    public bool Sacar(decimal valor)
    {
        if (valor <= 0 || valor > _saldo) return false;

        _saldo -= valor;
        _extrato.Add($"Saque: -R\${valor:N2}");
        return true;
    }

    // Extrato é cópia — não expõe a lista interna
    public IReadOnlyList<string> ObterExtrato() => _extrato.AsReadOnly();
}

// === REQUIRED MEMBERS (C# 11+) ===
class Pedido
{
    public required string ClienteNome { get; init; }
    public required string Produto { get; init; }
    public required int Quantidade { get; init; }
    public decimal PrecoUnitario { get; init; }

    public decimal Total => Quantidade * PrecoUnitario;
}

// === PROPRIEDADE COM VALIDAÇÃO NO SETTER ===
class Produto
{
    public string Nome { get; set; }

    private decimal _preco;
    public decimal Preco
    {
        get => _preco;
        set
        {
            if (value < 0)
                throw new ArgumentException("Preço não pode ser negativo");
            _preco = value;
        }
    }

    private int _estoque;
    public int Estoque
    {
        get => _estoque;
        set => _estoque = value >= 0 ? value
            : throw new ArgumentException("Estoque não pode ser negativo");
    }

    public Produto(string nome, decimal preco, int estoque)
    {
        Nome = nome;
        Preco = preco;     // passa pela validação do setter
        Estoque = estoque;
    }
}

// === USO ===
// ContaBancaria — saldo protegido, só muda via Depositar/Sacar
var conta = new ContaBancaria("Ana Silva", "12345-6", 1000m);
conta.Depositar(500m);
conta.Sacar(200m);
// conta._saldo = 999999; // ERRO: campo privado, inacessível

Console.WriteLine($"🏦 Conta: {conta.Titular}");
Console.WriteLine($"   Saldo: R\${conta.Saldo:N2}");
Console.WriteLine("   Extrato:");
foreach (var linha in conta.ObterExtrato())
    Console.WriteLine($"     {linha}");

// Required members — compilador obriga preenchimento
var pedido = new Pedido
{
    ClienteNome = "Carlos",
    Produto = "Mouse Gamer",
    Quantidade = 2,
    PrecoUnitario = 89.90m
};
Console.WriteLine($"\\n📦 Pedido: {pedido.Quantidade}x {pedido.Produto} = R\${pedido.Total:N2}");

// Produto com validação
var produto = new Produto("Notebook", 4500m, 10);
// produto.Preco = -100; // Lançaria ArgumentException
Console.WriteLine($"\\n🏷️ {produto.Nome}: R\${produto.Preco:N2} ({produto.Estoque} em estoque)");

Console.WriteLine("\\n✅ Encapsulamento concluído!");`,
      codeLanguage: "csharp",
      runCommand:
        "dotnet new console -n EncapsulamentoDemo && cd EncapsulamentoDemo && dotnet run",
      checklist: [
        "Criar projeto console com dotnet new console -n EncapsulamentoDemo",
        "Criar uma classe com campos private e propriedades public com validação",
        "Usar init-only properties em pelo menos uma propriedade",
        "Criar uma classe com required members e testar object initializer",
        "Verificar que dados privados não são acessíveis de fora da classe",
      ],
      quiz: [
        {
          q: "Por que devemos preferir propriedades com validação em vez de campos públicos?",
          options: [
            "Propriedades são mais rápidas que campos",
            "Propriedades permitem controlar acesso e validar dados, impedindo que o objeto entre em estado inválido",
            "Campos públicos não compilam em C# 12",
            "Não há diferença prática",
          ],
          answer: 1,
          explanation:
            "Propriedades com validação no setter garantem que regras de negócio sejam respeitadas (ex: preço >= 0). Campos públicos permitem qualquer valor, podendo corromper o estado do objeto.",
        },
        {
          q: "Qual a diferença entre init e set em uma propriedade?",
          options: [
            "init é mais rápido que set",
            "init permite atribuição apenas na inicialização (construtor ou object initializer); set permite a qualquer momento",
            "set é somente leitura e init permite escrita",
            "Não existe diferença",
          ],
          answer: 1,
          explanation:
            'init substitui set para criar propriedades semi-imutáveis. Após a construção do objeto, propriedades init não podem ser alteradas: obj.Nome = "X" gera erro se Nome usa init.',
        },
        {
          q: "O que acontece se você não fornecer uma propriedade required ao criar o objeto?",
          options: [
            "A propriedade fica null",
            "Usa valor default do tipo",
            "Erro de compilação — required força atribuição na inicialização",
            "Erro em tempo de execução",
          ],
          answer: 2,
          explanation:
            "required (C# 11+) faz o compilador exigir que a propriedade seja atribuída. Se faltar no object initializer ou construtor, é erro de compilação — não de runtime.",
        },
      ],
    },
  ],
};
