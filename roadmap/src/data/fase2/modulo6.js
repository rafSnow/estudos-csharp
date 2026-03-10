export const MODULO_6 = {
  id: "m6",
  title: "Entity Framework Core",
  icon: "🗄️",
  week: "Semana 6",
  color: "#059669",
  topics: [
    {
      id: "m6t1",
      moduleId: "m6",
      title: "DbContext, DbSet e Code First",
      theory: `Entity Framework Core (EF Core) é o ORM (Object-Relational Mapper) oficial do .NET. Ele mapeia classes C# para tabelas do banco de dados, permitindo que você trabalhe com objetos em vez de escrever SQL manualmente. A abordagem Code First significa que você modela as classes primeiro e o EF Core gera o schema do banco a partir delas.

O DbContext é o coração do EF Core — ele representa uma sessão com o banco de dados. Funciona como Unit of Work: agrupa todas as operações de leitura e escrita em uma unidade, enviando ao banco apenas quando você chama SaveChangesAsync(). Internamente, o DbContext rastreia mudanças em todas as entidades carregadas (Change Tracking).

DbSet<T> representa uma coleção de entidades de um tipo T que corresponde a uma tabela no banco. context.Produtos é um DbSet<Produto> que mapeia para a tabela "Produtos". Você consulta com LINQ (Where, Select, Include) e o EF Core traduz em SQL. Adiciona com Add(), atualiza modificando propriedades e remove com Remove().

A connection string configura qual banco usar. Para SQL Server: "Server=localhost;Database=EcommerceDb;Trusted_Connection=true;TrustServerCertificate=true". Em produção, nunca hardcode — use appsettings.json, User Secrets ou variáveis de ambiente.

O DbContext é registrado no DI como Scoped (uma instância por requisição HTTP). Isso é crucial: Singleton causaria problemas de concorrência (DbContext não é thread-safe), Transient desperdiçaria o Change Tracking. Scoped garante que todas as operações de uma requisição compartilhem o mesmo contexto.

AsNoTracking() é uma otimização essencial para consultas somente leitura (GET). Sem tracking, o EF Core não guarda referências às entidades retornadas, reduzindo uso de memória e CPU. Use quando não pretende modificar os dados — relatórios, listagens, buscas.`,
      code: `// DbContext, DbSet e Code First — EF Core 8
// Execute: cd EcommerceApi && dotnet add package Microsoft.EntityFrameworkCore.SqlServer

// ============================================
// 📄 Models/Categoria.cs
// ============================================
namespace EcommerceApi.Models;

public class Categoria
{
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string? Descricao { get; set; }

    // Navegação — EF Core mapeia o relacionamento
    public List<Produto> Produtos { get; set; } = [];
}

// ============================================
// 📄 Models/Produto.cs (atualizado com FK)
// ============================================
namespace EcommerceApi.Models;

public class Produto
{
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string? Descricao { get; set; }
    public string SKU { get; set; } = string.Empty;
    public decimal Preco { get; set; }
    public int Estoque { get; set; }
    public bool Ativo { get; set; } = true;
    public DateTime CriadoEm { get; set; } = DateTime.UtcNow;

    // Chave estrangeira + navegação
    public int CategoriaId { get; set; }
    public Categoria Categoria { get; set; } = null!;
}

// ============================================
// 📄 Models/Pedido.cs
// ============================================
namespace EcommerceApi.Models;

public enum StatusPedido { Pendente, Confirmado, Enviado, Entregue, Cancelado }

public class Pedido
{
    public int Id { get; set; }
    public int ClienteId { get; set; }
    public DateTime DataPedido { get; set; } = DateTime.UtcNow;
    public StatusPedido Status { get; set; } = StatusPedido.Pendente;
    public decimal Total { get; set; }

    public List<ItemPedido> Itens { get; set; } = [];
}

// ============================================
// 📄 Models/ItemPedido.cs
// ============================================
namespace EcommerceApi.Models;

public class ItemPedido
{
    public int Id { get; set; }
    public int PedidoId { get; set; }
    public int ProdutoId { get; set; }
    public int Quantidade { get; set; }
    public decimal PrecoUnitario { get; set; }

    // Navegações
    public Pedido Pedido { get; set; } = null!;
    public Produto Produto { get; set; } = null!;
}

// ============================================
// 📄 Data/EcommerceDbContext.cs
// ============================================
using Microsoft.EntityFrameworkCore;
using EcommerceApi.Models;

namespace EcommerceApi.Data;

/// <summary>
/// Contexto do banco de dados — Unit of Work do EF Core.
/// </summary>
public class EcommerceDbContext : DbContext
{
    public EcommerceDbContext(DbContextOptions<EcommerceDbContext> options)
        : base(options) { }

    // Cada DbSet = uma tabela no banco
    public DbSet<Produto> Produtos => Set<Produto>();
    public DbSet<Categoria> Categorias => Set<Categoria>();
    public DbSet<Pedido> Pedidos => Set<Pedido>();
    public DbSet<ItemPedido> ItensPedido => Set<ItemPedido>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configurações via Fluent API virão no tópico 6.3
        base.OnModelCreating(modelBuilder);
    }
}

// ============================================
// 📄 Program.cs — registrar DbContext no DI
// ============================================
using Microsoft.EntityFrameworkCore;
using EcommerceApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Registra o DbContext como SCOPED (1 instância por requisição)
builder.Services.AddDbContext<EcommerceDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")));

// ... resto do Program.cs

// ============================================
// 📄 appsettings.json — connection string
// ============================================
// {
//   "ConnectionStrings": {
//     "DefaultConnection": "Server=localhost;Database=EcommerceDb;Trusted_Connection=true;TrustServerCertificate=true"
//   }
// }

// ============================================
// Exemplo de query com AsNoTracking (somente leitura)
// ============================================
// No controller ou serviço:
// List<Produto> produtos = await _context.Produtos
//     .AsNoTracking()         // Não rastreia mudanças — mais rápido para leitura
//     .Where(p => p.Ativo)
//     .ToListAsync();`,
      codeLanguage: "csharp",
      runCommand:
        "cd EcommerceApi && dotnet add package Microsoft.EntityFrameworkCore.SqlServer && dotnet add package Microsoft.EntityFrameworkCore.Design",
      checklist: [
        "Instalar: dotnet add package Microsoft.EntityFrameworkCore.SqlServer",
        "Criar as 4 entidades (Produto, Categoria, Pedido, ItemPedido) com propriedades corretas",
        "Criar o EcommerceDbContext com os 4 DbSets",
        "Configurar a connection string no appsettings.json",
        "Registrar o DbContext no Program.cs com AddDbContext e Scoped lifetime",
      ],
      quiz: [
        {
          q: "Qual é a função do DbContext no Entity Framework Core?",
          options: [
            "Apenas armazena a connection string",
            "Representa uma sessão com o banco — gerencia Change Tracking, queries e SaveChanges como Unit of Work",
            "Cria as tabelas automaticamente sem migrations",
            "É um substituto do SQL Server",
          ],
          answer: 1,
          explanation:
            "O DbContext é o coração do EF Core: rastreia mudanças nas entidades (Change Tracking), traduz LINQ em SQL, e agrupa operações como Unit of Work. SaveChangesAsync() envia tudo ao banco numa transação.",
        },
        {
          q: "Por que o DbContext deve ser registrado como Scoped e não Singleton?",
          options: [
            "Scoped é mais rápido que Singleton",
            "DbContext não é thread-safe — Singleton seria compartilhado entre requisições concorrentes, causando erros",
            "O framework obriga Scoped — Singleton não compila",
            "Não há diferença prática entre os dois",
          ],
          answer: 1,
          explanation:
            "DbContext usa Change Tracking que não é thread-safe. Singleton compartilharia a mesma instância entre requisições paralelas → erros de concorrência. Scoped cria uma instância por requisição, garantindo isolamento.",
        },
        {
          q: "O que AsNoTracking() faz? var lista = context.Produtos.AsNoTracking().ToList();",
          options: [
            "Remove os produtos do banco",
            "Desabilita o Change Tracking para essa query — as entidades retornadas não são rastreadas, melhorando performance de leitura",
            "Torna a query mais lenta mas mais segura",
            "Impede que a lista seja modificada em memória",
          ],
          answer: 1,
          explanation:
            "AsNoTracking() diz ao EF Core para não rastrear as entidades retornadas. Sem tracking, o DbContext não guarda referências → menos memória e CPU. Use em consultas somente leitura (GET, relatórios).",
        },
      ],
    },
    {
      id: "m6t2",
      moduleId: "m6",
      title: "Migrations",
      theory: `Migrations são o mecanismo do EF Core para evoluir o schema do banco de dados de forma versionada e rastreável. Cada migration é como um "commit" do banco — registra as alterações (criar tabela, adicionar coluna, criar índice) e pode ser revertida. Isso elimina scripts SQL manuais e garante que o banco esteja sempre sincronizado com o código.

A abordagem Code First significa: você altera as classes C# (adicionar propriedade, novo relacionamento) → cria uma migration que detecta as diferenças → aplica ao banco. O EF Core compara o modelo atual com o snapshot da última migration e gera o código necessário.

Os comandos essenciais via CLI (dotnet-ef): dotnet ef migrations add NomeMigration cria uma nova migration com Up (aplicar) e Down (reverter). dotnet ef database update aplica migrations pendentes ao banco. dotnet ef migrations remove desfaz a última migration não aplicada. dotnet ef migrations script gera o SQL completo para revisão do DBA antes de produção.

Em CI/CD corporativo, migrations nunca são aplicadas automaticamente em produção. O fluxo seguro é: dev cria a migration → code review → gera script SQL (dotnet ef migrations script) → DBA revisa → script é aplicado em homologação → testes → script aplicado em produção. Para rollback, dotnet ef database update NomeMigrationAnterior reverte até aquela versão.

Boas práticas: nomes descritivos (AddCategoriaTable, não Update1), uma migration por alteração lógica, nunca editar uma migration já aplicada, incluir migration no PR junto com o código que a necessita. Cuidado com migrations irreversíveis: DROP COLUMN, ALTER COLUMN que perde dados. Sempre faça backup antes de aplicar em produção.

O EF Core Design package (Microsoft.EntityFrameworkCore.Design) é necessário apenas no projeto de desenvolvimento — não vai para produção. Ele fornece as ferramentas CLI para gerar migrations.`,
      code: `// Migrations — EF Core 8
// Pré-requisito: dotnet tool install --global dotnet-ef

// ============================================
// 1️⃣ Criar primeira migration — schema inicial
// ============================================
// $ dotnet ef migrations add InitialCreate

// Arquivo gerado: Migrations/YYYYMMDDHHMMSS_InitialCreate.cs
using Microsoft.EntityFrameworkCore.Migrations;

public partial class InitialCreate : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "Categorias",
            columns: table => new
            {
                Id = table.Column<int>(nullable: false)
                    .Annotation("SqlServer:Identity", "1, 1"),
                Nome = table.Column<string>(maxLength: 100, nullable: false),
                Descricao = table.Column<string>(maxLength: 500, nullable: true)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Categorias", x => x.Id);
            });

        migrationBuilder.CreateTable(
            name: "Produtos",
            columns: table => new
            {
                Id = table.Column<int>(nullable: false)
                    .Annotation("SqlServer:Identity", "1, 1"),
                Nome = table.Column<string>(maxLength: 200, nullable: false),
                SKU = table.Column<string>(maxLength: 50, nullable: false),
                Preco = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                Estoque = table.Column<int>(nullable: false),
                Ativo = table.Column<bool>(nullable: false, defaultValue: true),
                CriadoEm = table.Column<DateTime>(nullable: false),
                CategoriaId = table.Column<int>(nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Produtos", x => x.Id);
                table.ForeignKey("FK_Produtos_Categorias",
                    x => x.CategoriaId, "Categorias", "Id",
                    onDelete: ReferentialAction.Restrict);
            });
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable("Produtos");
        migrationBuilder.DropTable("Categorias");
    }
}

// ============================================
// 2️⃣ Aplicar migration ao banco
// ============================================
// $ dotnet ef database update

// ============================================
// 3️⃣ Segunda migration — adicionar índice
// ============================================
// Altere a entidade ou configuração, depois:
// $ dotnet ef migrations add AddIndexToProductName

public partial class AddIndexToProductName : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateIndex(
            name: "IX_Produtos_Nome",
            table: "Produtos",
            column: "Nome");

        migrationBuilder.CreateIndex(
            name: "IX_Produtos_SKU",
            table: "Produtos",
            column: "SKU",
            unique: true);  // SKU deve ser único
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropIndex("IX_Produtos_Nome", "Produtos");
        migrationBuilder.DropIndex("IX_Produtos_SKU", "Produtos");
    }
}

// ============================================
// 4️⃣ Gerar script SQL para revisão do DBA
// ============================================
// $ dotnet ef migrations script --idempotent -o migration.sql
// --idempotent gera IF NOT EXISTS para cada operação (seguro re-executar)

// ============================================
// 5️⃣ Rollback — reverter uma migration
// ============================================
// Reverter para InitialCreate (desfaz AddIndexToProductName):
// $ dotnet ef database update InitialCreate
//
// Remover última migration não aplicada:
// $ dotnet ef migrations remove`,
      codeLanguage: "csharp",
      runCommand:
        "cd EcommerceApi && dotnet tool install --global dotnet-ef && dotnet ef migrations add InitialCreate",
      checklist: [
        "Instalar tools: dotnet tool install --global dotnet-ef",
        "Criar primeira migration: dotnet ef migrations add InitialCreate",
        "Aplicar ao banco: dotnet ef database update",
        "Fazer uma alteração na entidade e criar segunda migration",
        "Gerar script SQL: dotnet ef migrations script --idempotent",
      ],
      quiz: [
        {
          q: "Qual a diferença entre dotnet ef migrations add e dotnet ef database update?",
          options: [
            "São o mesmo comando com nomes diferentes",
            "migrations add GERA o código da migration (ainda não tocou no banco); database update APLICA as migrations pendentes ao banco",
            "migrations add aplica ao banco; database update gera o código",
            "database update só funciona em produção",
          ],
          answer: 1,
          explanation:
            "migrations add compara o modelo C# atual com o snapshot e gera código Up/Down. Nada acontece no banco. database update executa os métodos Up de todas as migrations pendentes no banco real.",
        },
        {
          q: "Como reverter uma migration aplicada ao banco de forma segura?",
          options: [
            "Deletar o arquivo da migration",
            "dotnet ef database update NomeDaMigrationAnterior — executa o Down de cada migration até o ponto desejado",
            "Alterar o código e criar nova migration — não é possível reverter",
            "Dropar o banco inteiro e recriar",
          ],
          answer: 1,
          explanation:
            "database update aceita o nome de uma migration como alvo. O EF Core executa os métodos Down na ordem inversa até chegar naquele ponto. Após reverter, use migrations remove para limpar.",
        },
        {
          q: "O que o parâmetro --idempotent faz em dotnet ef migrations script --idempotent?",
          options: [
            "Gera o script mais rápido",
            "Gera SQL com verificações IF NOT EXISTS, tornando seguro executar o script múltiplas vezes sem erro",
            "Remove migrations duplicadas",
            "Aplica o script automaticamente ao banco",
          ],
          answer: 1,
          explanation:
            "--idempotent gera SQL que verifica se cada migration já foi aplicada antes de executar. Seguro para re-executar em produção — não tenta criar tabelas que já existem. Essencial para CI/CD.",
        },
      ],
    },
    {
      id: "m6t3",
      moduleId: "m6",
      title: "Fluent API e Relacionamentos",
      theory: `Fluent API é a forma mais poderosa e flexível de configurar o mapeamento entre classes C# e tabelas SQL no EF Core. Embora Data Annotations ([Required], [MaxLength]) sejam mais simples, Fluent API oferece tudo que Annotations fazem e mais: configuração de relacionamentos, índices compostos, conversores de valor, herança TPH/TPT e separação de concerns (configuração fora da entidade).

Em projetos corporativos, Fluent API ganha sempre. Data Annotations poluem as entidades com concerns de persistência (violando Clean Architecture). Com Fluent API, as entidades ficam limpas e a configuração fica em classes separadas implementando IEntityTypeConfiguration<T>.

Relacionamentos no EF Core são configurados com HasOne/WithMany (1:N), HasMany/WithMany (N:N), HasOne/WithOne (1:1). Cada relacionamento precisa definir explicitamente o comportamento de delete: Cascade (deleta filhos junto), Restrict (impede delete se tiver filhos), SetNull (coloca FK como null), NoAction (faz nada — pode violar FK).

Em produção, NUNCA use Cascade por padrão em tabelas importantes. Deletar uma Categoria não deveria deletar todos os Produtos automaticamente. Use Restrict — o sistema avisa que há produtos vinculados e o dev trata a situação no código. Cascade é aceitável apenas para entidades dependentes que não fazem sentido sem o pai (ex: ItemPedido sem Pedido).

Value Objects com OwnsOne permitem mapear objetos complexos como colunas da tabela pai. Um Endereco(Rua, Cidade, Estado, CEP) não precisa de tabela própria — OwnsOne cria colunas Endereco_Rua, Endereco_Cidade na tabela Cliente. Isso modela DDD corretamente sem over-engineering de tabelas.

ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly()) no OnModelCreating escaneia todas as classes IEntityTypeConfiguration no assembly e aplica automaticamente — sem precisar chamar cada uma manualmente.`,
      code: `// Fluent API e Relacionamentos — EF Core 8
// Organize em: Data/Configurations/

// ============================================
// 📄 Data/Configurations/ProdutoConfiguration.cs
// ============================================
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using EcommerceApi.Models;

namespace EcommerceApi.Data.Configurations;

public class ProdutoConfiguration : IEntityTypeConfiguration<Produto>
{
    public void Configure(EntityTypeBuilder<Produto> builder)
    {
        builder.ToTable("Produtos");

        builder.HasKey(p => p.Id);
        builder.Property(p => p.Id).ValueGeneratedOnAdd();

        builder.Property(p => p.Nome)
            .IsRequired()
            .HasMaxLength(200);

        builder.Property(p => p.SKU)
            .IsRequired()
            .HasMaxLength(50);

        builder.Property(p => p.Preco)
            .HasColumnType("decimal(18,2)")
            .IsRequired();

        builder.Property(p => p.Estoque)
            .IsRequired();

        builder.Property(p => p.Ativo)
            .HasDefaultValue(true);

        builder.Property(p => p.CriadoEm)
            .IsRequired();

        // Índice único no SKU — não permite duplicatas
        builder.HasIndex(p => p.SKU)
            .IsUnique()
            .HasDatabaseName("IX_Produtos_SKU");

        // Índice para buscas por nome
        builder.HasIndex(p => p.Nome)
            .HasDatabaseName("IX_Produtos_Nome");

        // Relacionamento: Produto pertence a 1 Categoria
        builder.HasOne(p => p.Categoria)
            .WithMany(c => c.Produtos)
            .HasForeignKey(p => p.CategoriaId)
            .OnDelete(DeleteBehavior.Restrict); // NÃO cascade — protege os produtos
    }
}

// ============================================
// 📄 Data/Configurations/CategoriaConfiguration.cs
// ============================================
public class CategoriaConfiguration : IEntityTypeConfiguration<Categoria>
{
    public void Configure(EntityTypeBuilder<Categoria> builder)
    {
        builder.ToTable("Categorias");
        builder.HasKey(c => c.Id);

        builder.Property(c => c.Nome)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(c => c.Descricao)
            .HasMaxLength(500);

        // Seed — dados iniciais
        builder.HasData(
            new Categoria { Id = 1, Nome = "Periféricos", Descricao = "Mouse, teclado, headset" },
            new Categoria { Id = 2, Nome = "Monitores", Descricao = "Monitores e displays" },
            new Categoria { Id = 3, Nome = "Componentes", Descricao = "Placa-mãe, memória, SSD" }
        );
    }
}

// ============================================
// 📄 Data/Configurations/PedidoConfiguration.cs
// ============================================
public class PedidoConfiguration : IEntityTypeConfiguration<Pedido>
{
    public void Configure(EntityTypeBuilder<Pedido> builder)
    {
        builder.ToTable("Pedidos");
        builder.HasKey(p => p.Id);

        builder.Property(p => p.Total)
            .HasColumnType("decimal(18,2)");

        builder.Property(p => p.Status)
            .HasConversion<string>()           // Salva como texto no banco
            .HasMaxLength(20);

        // 1 Pedido tem N Itens — Cascade aqui faz sentido
        builder.HasMany(p => p.Itens)
            .WithOne(i => i.Pedido)
            .HasForeignKey(i => i.PedidoId)
            .OnDelete(DeleteBehavior.Cascade); // Deletar pedido → deleta itens
    }
}

// ============================================
// 📄 Models/Endereco.cs — Value Object (sem Id próprio)
// ============================================
namespace EcommerceApi.Models;

public class Endereco
{
    public string Rua { get; set; } = string.Empty;
    public string Cidade { get; set; } = string.Empty;
    public string Estado { get; set; } = string.Empty;
    public string CEP { get; set; } = string.Empty;
}

// ============================================
// 📄 Models/Cliente.cs — com Endereco como Value Object
// ============================================
namespace EcommerceApi.Models;

public class Cliente
{
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public Endereco Endereco { get; set; } = new();
    public List<Pedido> Pedidos { get; set; } = [];
}

// ============================================
// 📄 Data/Configurations/ClienteConfiguration.cs
// ============================================
public class ClienteConfiguration : IEntityTypeConfiguration<Cliente>
{
    public void Configure(EntityTypeBuilder<Cliente> builder)
    {
        builder.ToTable("Clientes");
        builder.HasKey(c => c.Id);

        builder.Property(c => c.Nome).IsRequired().HasMaxLength(200);
        builder.Property(c => c.Email).IsRequired().HasMaxLength(256);
        builder.HasIndex(c => c.Email).IsUnique();

        // OwnsOne: Endereco é mapeado como colunas na tabela Clientes
        // Cria: Endereco_Rua, Endereco_Cidade, Endereco_Estado, Endereco_CEP
        builder.OwnsOne(c => c.Endereco, e =>
        {
            e.Property(x => x.Rua).HasMaxLength(200).HasColumnName("Endereco_Rua");
            e.Property(x => x.Cidade).HasMaxLength(100).HasColumnName("Endereco_Cidade");
            e.Property(x => x.Estado).HasMaxLength(2).HasColumnName("Endereco_Estado");
            e.Property(x => x.CEP).HasMaxLength(9).HasColumnName("Endereco_CEP");
        });

        builder.HasMany(c => c.Pedidos)
            .WithOne()
            .HasForeignKey(p => p.ClienteId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}

// ============================================
// 📄 Data/EcommerceDbContext.cs (atualizado)
// ============================================
using System.Reflection;
using Microsoft.EntityFrameworkCore;

namespace EcommerceApi.Data;

public class EcommerceDbContext : DbContext
{
    public EcommerceDbContext(DbContextOptions<EcommerceDbContext> options)
        : base(options) { }

    public DbSet<Produto> Produtos => Set<Produto>();
    public DbSet<Categoria> Categorias => Set<Categoria>();
    public DbSet<Pedido> Pedidos => Set<Pedido>();
    public DbSet<ItemPedido> ItensPedido => Set<ItemPedido>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Aplica TODAS as configurações do assembly automaticamente
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        base.OnModelCreating(modelBuilder);
    }
}`,
      codeLanguage: "csharp",
      runCommand:
        "cd EcommerceApi && dotnet ef migrations add AddFluentApiConfigurations && dotnet ef database update",
      checklist: [
        "Criar a pasta Data/Configurations e implementar ProdutoConfiguration",
        "Configurar o relacionamento Produto-Categoria com OnDelete Restrict",
        "Adicionar unique constraint no campo SKU do produto",
        "Atualizar OnModelCreating com ApplyConfigurationsFromAssembly",
        "Criar migration após as configurações e verificar o SQL gerado",
      ],
      quiz: [
        {
          q: "Por que usar Fluent API em vez de Data Annotations em projetos corporativos?",
          options: [
            "Fluent API é mais rápido em runtime",
            "Fluent API separa configuração de persistência das entidades, oferece mais recursos (índices, conversores, cascade) e não polui o domínio",
            "Data Annotations são deprecadas no EF Core 8",
            "Não há diferença — ambos fazem exatamente a mesma coisa",
          ],
          answer: 1,
          explanation:
            "Fluent API permite separar concerns: entidades ficam limpas (Clean Architecture), configurações ficam em classes IEntityTypeConfiguration<T>. Além disso, Fluent API oferece recursos que Annotations não cobrem: cascade delete, índices compostos, conversores.",
        },
        {
          q: "Quando usar OnDelete Restrict em vez de Cascade?",
          options: [
            "Sempre — Cascade é proibido",
            "Quando deletar o pai NÃO deve deletar os filhos automaticamente — ex: deletar Categoria não deve apagar todos os Produtos",
            "Restrict é mais rápido que Cascade",
            "Apenas para tabelas com mais de 1000 registros",
          ],
          answer: 1,
          explanation:
            "Restrict impede o delete quando há filhos vinculados, forçando tratamento explícito no código. Cascade é perigoso para entidades importantes — pode deletar milhares de registros acidentalmente. Use Cascade apenas para dependentes como ItemPedido.",
        },
        {
          q: "O que OwnsOne faz? builder.OwnsOne(c => c.Endereco, e => { e.Property(x => x.Rua).HasMaxLength(200); });",
          options: [
            "Cria uma tabela separada para Endereco",
            "Mapeia Endereco como colunas na tabela do pai (Endereco_Rua, Endereco_Cidade etc.) sem criar tabela própria",
            "Cria um relacionamento 1:1 com tabela Enderecos",
            "Converte Endereco em JSON no banco",
          ],
          answer: 1,
          explanation:
            "OwnsOne mapeia Value Objects como colunas na tabela pai (owned entity). Endereco não tem Id próprio nem tabela. Colunas Endereco_Rua, Endereco_Cidade são criadas na tabela Cliente. Ideal para DDD.",
        },
      ],
    },
    {
      id: "m6t4",
      moduleId: "m6",
      title: "Queries: LINQ com EF Core",
      theory: `A verdadeira magia do EF Core está em traduzir queries LINQ para SQL otimizado. Quando você escreve context.Produtos.Where(p => p.Ativo).OrderBy(p => p.Nome), o EF Core gera SELECT * FROM Produtos WHERE Ativo = 1 ORDER BY Nome. Entender como essa tradução funciona — e quando falha — é essencial para performance.

O problema N+1 é a armadilha mais comum com ORMs. Se você carrega 100 pedidos e acessa pedido.Cliente para cada um, o EF Core faz 1 query para os pedidos + 100 queries individuais para carregar cada cliente. A solução é Include (eager loading): context.Pedidos.Include(p => p.Cliente) gera um JOIN e traz tudo em 1 query.

Projeções com Select são mais eficientes que Include quando você não precisa de todas as colunas. Em vez de Include que traz a entidade inteira, Select(p => new { p.Nome, p.Preco }) gera SELECT Nome, Preco — sem colunas desnecessárias. Em APIs, SEMPRE projete para DTOs.

Paginação com Skip/Take é essencial em APIs com volume de dados. .Skip((pagina - 1) * tamanhoPagina).Take(tamanhoPagina) gera OFFSET/FETCH no SQL Server. Sempre combine com OrderBy para resultados determinísticos, e faça uma query Count separada para total de páginas.

GroupBy no EF Core traduz para GROUP BY no SQL, mas nem toda expressão é traduzível. Se o EF Core não conseguir traduzir, ele avalia no cliente (client-side evaluation) — carregando TUDO do banco para memória. Isso é silencioso e devastador para performance. Habilite warnings no log para detectar.

Para depurar, habilite logging de SQL: em appsettings.json, defina "Microsoft.EntityFrameworkCore.Database.Command": "Information". O EF Core loga cada SQL gerado no console, permitindo identificar queries ineficientes, N+1 e client-side evaluation em desenvolvimento.`,
      code: `// Queries LINQ com EF Core 8
// Exemplos de repositório com queries reais

// ============================================
// 📄 Repositories/ProdutoRepository.cs
// ============================================
using Microsoft.EntityFrameworkCore;
using EcommerceApi.Data;
using EcommerceApi.Models;

namespace EcommerceApi.Repositories;

public class ProdutoRepository
{
    private readonly EcommerceDbContext _context;

    public ProdutoRepository(EcommerceDbContext context)
    {
        _context = context;
    }

    /// <summary>Listagem paginada com filtro opcional por nome.</summary>
    public async Task<(List<ProdutoResumoDto> Itens, int Total)> ListarPaginadoAsync(
        int pagina, int tamanhoPagina, string? filtroNome = null)
    {
        IQueryable<Produto> query = _context.Produtos
            .AsNoTracking()
            .Where(p => p.Ativo);

        // Filtro dinâmico — WHERE condicional
        if (!string.IsNullOrWhiteSpace(filtroNome))
        {
            query = query.Where(p => p.Nome.Contains(filtroNome));
        }

        // Count separado para total de páginas
        int total = await query.CountAsync();

        // Projeção para DTO — só traz campos necessários (não SELECT *)
        List<ProdutoResumoDto> itens = await query
            .OrderBy(p => p.Nome)
            .Skip((pagina - 1) * tamanhoPagina)
            .Take(tamanhoPagina)
            .Select(p => new ProdutoResumoDto(
                p.Id, p.Nome, p.Preco, p.Categoria.Nome))
            .ToListAsync();

        return (itens, total);
    }

    /// <summary>Busca com Include — traz produto + categoria em 1 query.</summary>
    public async Task<Produto?> BuscarComCategoriaAsync(int id)
    {
        return await _context.Produtos
            .Include(p => p.Categoria)     // JOIN com Categorias
            .FirstOrDefaultAsync(p => p.Id == id);
    }

    /// <summary>Relatório de vendas agrupado por categoria.</summary>
    public async Task<List<VendasPorCategoriaDto>> RelatorioVendasAsync()
    {
        // GroupBy que traduz para SQL — não avalia no cliente
        return await _context.ItensPedido
            .AsNoTracking()
            .Include(i => i.Produto)
                .ThenInclude(p => p.Categoria)
            .GroupBy(i => i.Produto.Categoria.Nome)
            .Select(g => new VendasPorCategoriaDto(
                g.Key,
                g.Sum(i => i.Quantidade),
                g.Sum(i => i.Quantidade * i.PrecoUnitario)))
            .OrderByDescending(r => r.TotalVendas)
            .ToListAsync();
    }

    /// <summary>
    /// ❌ ANTI-PATTERN: N+1 Problem
    /// Cada pedido.Produto gera uma query separada!
    /// </summary>
    // var pedidos = await _context.Pedidos.ToListAsync();
    // foreach (var p in pedidos)
    //     Console.WriteLine(p.Itens.First().Produto.Nome); // N queries!

    /// <summary>
    /// ✅ CORRETO: Include resolve o N+1
    /// </summary>
    // var pedidos = await _context.Pedidos
    //     .Include(p => p.Itens)
    //         .ThenInclude(i => i.Produto)
    //     .ToListAsync();  // 1 query com JOINs
}

// DTOs para projeções
public record ProdutoResumoDto(int Id, string Nome, decimal Preco, string Categoria);
public record VendasPorCategoriaDto(string Categoria, int QuantidadeVendida, decimal TotalVendas);

// ============================================
// 📄 appsettings.Development.json — habilitar log de SQL
// ============================================
// {
//   "Logging": {
//     "LogLevel": {
//       "Default": "Information",
//       "Microsoft.EntityFrameworkCore.Database.Command": "Information"
//     }
//   }
// }
// Com isso, cada SQL gerado aparece no console durante desenvolvimento.`,
      codeLanguage: "csharp",
      runCommand: "cd EcommerceApi && dotnet run",
      checklist: [
        "Habilitar log de SQL no appsettings e ver as queries no console",
        "Implementar ListarPaginadoAsync e verificar o OFFSET/FETCH no SQL gerado",
        "Detectar um N+1 problem e corrigir adicionando Include",
        "Criar uma projeção com Select que retorna apenas 3 campos (sem SELECT *)",
        "Implementar um filtro dinâmico com Where condicional",
      ],
      quiz: [
        {
          q: "O que é o problema N+1 no EF Core e como resolvê-lo?",
          options: [
            "É um erro de compilação resolvido atualizando o EF Core",
            "1 query para entidades pai + N queries para carregar cada filho; resolvido com Include (eager loading) que gera JOINs",
            "Acontece quando o banco tem mais de N+1 tabelas",
            "É um problema de paginação resolvido com Skip/Take",
          ],
          answer: 1,
          explanation:
            'N+1: carregar 100 pedidos (1 query) e acessar pedido.Cliente para cada (100 queries extras = 101 total). Include("Cliente") gera um JOIN e traz tudo em 1 query. Diferença pode ser segundos vs milissegundos.',
        },
        {
          q: "Por que projeções com Select são melhores que Include para APIs?",
          options: [
            "Select é mais fácil de escrever",
            "Select traz apenas as colunas necessárias (SELECT Nome, Preco); Include traz a entidade inteira com todas as colunas — menos tráfego e memória",
            "Include não funciona com APIs",
            "Select é obrigatório no EF Core 8",
          ],
          answer: 1,
          explanation:
            "Include carrega entidades completas (todas as colunas + tracking). Select projeta apenas os campos necessários, gerando SQL otimizado. Para APIs que retornam DTOs, projeção elimina dados desnecessários e evita tracking.",
        },
        {
          q: "O que acontece com este LINQ se o EF Core não conseguir traduzir o GroupBy para SQL?",
          options: [
            "Erro de compilação",
            "O EF Core carrega TODOS os dados do banco para memória e faz o GroupBy no cliente (client-side evaluation) — devastador para performance",
            "Retorna lista vazia",
            "O banco faz o GroupBy normalmente",
          ],
          answer: 1,
          explanation:
            'Client-side evaluation é silencioso e perigoso: o EF Core baixa toda a tabela para memória e processa em C#. Pode consumir GB de RAM. Habilite LogLevel "Warning" para "Microsoft.EntityFrameworkCore.Query" para detectar.',
        },
      ],
    },
  ],
};
