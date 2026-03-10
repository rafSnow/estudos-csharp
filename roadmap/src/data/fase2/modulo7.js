export const MODULO_7 = {
  id: "m7",
  title: "SQL Server Essencial",
  icon: "📊",
  week: "Semana 7",
  color: "#DC2626",
  topics: [
    {
      id: "m7t1",
      moduleId: "m7",
      title: "DDL: Criando Tabelas Profissionais",
      theory: `DDL (Data Definition Language) abrange os comandos que definem a estrutura do banco de dados: CREATE, ALTER, DROP. Em projetos corporativos com SQL Server, a modelagem de tabelas segue padrões rígidos: convenções de nomeação, tipos de dados corretos, constraints obrigatórias e índices planejados desde o início.

Toda tabela começa com uma PRIMARY KEY. No SQL Server, o padrão é IDENTITY(1,1) — auto-incremento a partir de 1, aumentando de 1 em 1. Para sistemas distribuídos, considere UNIQUEIDENTIFIER (GUID) com NEWSEQUENTIALID() que gera GUIDs sequenciais, evitando fragmentação no índice clustered.

Tipos de dados importam para performance e armazenamento. Use NVARCHAR(n) em vez de VARCHAR quando precisar de Unicode (nomes com acentos, emojis). DECIMAL(18,2) para valores monetários (FLOAT tem imprecisão). BIT para booleanos. DATETIME2 em vez de DATETIME (mais precisão, menor range = melhor).

Constraints garantem integridade dos dados no nível do banco, não apenas na aplicação. NOT NULL impede valores nulos. UNIQUE garante valores únicos (CPF, Email). CHECK valida regras de negócio (Preco > 0, Status IN ('Ativo','Inativo')). DEFAULT define valores padrão (GETUTCDATE() para data de criação).

Foreign Keys (FK) criam relacionamentos entre tabelas. Sempre defina ON DELETE e ON UPDATE explicitamente. Em produção corporativa, ON DELETE NO ACTION ou ON DELETE SET NULL são mais seguros que CASCADE. O DBA precisa entender o impacto de cada FK.

Ao alterar tabelas existentes com ALTER TABLE, sempre faça em etapas: adicione a coluna como nullable → migre dados → adicione constraint NOT NULL. Nunca faça ALTER TABLE ADD coluna NOT NULL sem DEFAULT em tabelas com dados — o SQL Server rejeita.`,
      code: `-- DDL: Criando Tabelas Profissionais — SQL Server
-- Execute no SQL Server Management Studio (SSMS) ou Azure Data Studio

-- ============================================
-- 1️⃣ Criar o banco de dados
-- ============================================
CREATE DATABASE EcommerceDb
ON PRIMARY (
    NAME = 'EcommerceDb_Data',
    FILENAME = 'C:\\SQLData\\EcommerceDb.mdf',
    SIZE = 100MB,
    FILEGROWTH = 50MB
)
LOG ON (
    NAME = 'EcommerceDb_Log',
    FILENAME = 'C:\\SQLData\\EcommerceDb.ldf',
    SIZE = 50MB,
    FILEGROWTH = 25MB
);
GO

USE EcommerceDb;
GO

-- ============================================
-- 2️⃣ Tabela Categorias — entidade pai
-- ============================================
CREATE TABLE dbo.Categorias (
    Id          INT IDENTITY(1,1)   NOT NULL,
    Nome        NVARCHAR(100)       NOT NULL,
    Descricao   NVARCHAR(500)       NULL,
    Ativo       BIT                 NOT NULL DEFAULT 1,
    CriadoEm   DATETIME2(3)        NOT NULL DEFAULT GETUTCDATE(),

    CONSTRAINT PK_Categorias PRIMARY KEY CLUSTERED (Id),
    CONSTRAINT UQ_Categorias_Nome UNIQUE (Nome)
);
GO

-- ============================================
-- 3️⃣ Tabela Produtos — com FK para Categorias
-- ============================================
CREATE TABLE dbo.Produtos (
    Id          INT IDENTITY(1,1)   NOT NULL,
    Nome        NVARCHAR(200)       NOT NULL,
    SKU         NVARCHAR(50)        NOT NULL,
    Descricao   NVARCHAR(2000)      NULL,
    Preco       DECIMAL(18,2)       NOT NULL,
    Estoque     INT                 NOT NULL DEFAULT 0,
    Ativo       BIT                 NOT NULL DEFAULT 1,
    CriadoEm   DATETIME2(3)        NOT NULL DEFAULT GETUTCDATE(),
    CategoriaId INT                 NOT NULL,

    -- Constraints
    CONSTRAINT PK_Produtos PRIMARY KEY CLUSTERED (Id),
    CONSTRAINT UQ_Produtos_SKU UNIQUE (SKU),
    CONSTRAINT CK_Produtos_Preco CHECK (Preco > 0),
    CONSTRAINT CK_Produtos_Estoque CHECK (Estoque >= 0),
    CONSTRAINT FK_Produtos_Categorias
        FOREIGN KEY (CategoriaId)
        REFERENCES dbo.Categorias(Id)
        ON DELETE NO ACTION        -- NÃO deleta produtos ao deletar categoria
        ON UPDATE CASCADE
);
GO

-- ============================================
-- 4️⃣ Tabela Clientes
-- ============================================
CREATE TABLE dbo.Clientes (
    Id          INT IDENTITY(1,1)   NOT NULL,
    Nome        NVARCHAR(200)       NOT NULL,
    Email       NVARCHAR(256)       NOT NULL,
    CPF         CHAR(11)            NOT NULL,
    Telefone    NVARCHAR(20)        NULL,
    Ativo       BIT                 NOT NULL DEFAULT 1,
    CriadoEm   DATETIME2(3)        NOT NULL DEFAULT GETUTCDATE(),

    CONSTRAINT PK_Clientes PRIMARY KEY CLUSTERED (Id),
    CONSTRAINT UQ_Clientes_Email UNIQUE (Email),
    CONSTRAINT UQ_Clientes_CPF UNIQUE (CPF),
    CONSTRAINT CK_Clientes_CPF CHECK (LEN(CPF) = 11)
);
GO

-- ============================================
-- 5️⃣ ALTER TABLE — evoluindo tabela existente
-- ============================================
-- Etapa 1: adiciona coluna NULLABLE (seguro para tabela com dados)
ALTER TABLE dbo.Produtos
    ADD UltimaAtualizacao DATETIME2(3) NULL;
GO

-- Etapa 2: preenche dados existentes
UPDATE dbo.Produtos SET UltimaAtualizacao = CriadoEm;
GO

-- Etapa 3: adiciona constraint DEFAULT para registros futuros
ALTER TABLE dbo.Produtos
    ADD CONSTRAINT DF_Produtos_UltimaAtualizacao
    DEFAULT GETUTCDATE() FOR UltimaAtualizacao;
GO

-- ============================================
-- 5️⃣ Tabela Pedidos
-- ============================================
CREATE TABLE dbo.Pedidos (
    Id          INT IDENTITY(1,1)   NOT NULL,
    ClienteId   INT                 NOT NULL,
    DataPedido  DATETIME2(3)        NOT NULL DEFAULT GETUTCDATE(),
    Status      NVARCHAR(20)        NOT NULL DEFAULT 'Pendente',
    Total       DECIMAL(18,2)       NOT NULL DEFAULT 0,

    CONSTRAINT PK_Pedidos PRIMARY KEY CLUSTERED (Id),
    CONSTRAINT CK_Pedidos_Status CHECK (Status IN ('Pendente','Confirmado','Enviado','Entregue','Cancelado')),
    CONSTRAINT FK_Pedidos_Clientes
        FOREIGN KEY (ClienteId)
        REFERENCES dbo.Clientes(Id)
        ON DELETE NO ACTION
);
GO

-- ============================================
-- 6️⃣ Tabela ItensPedido
-- ============================================
CREATE TABLE dbo.ItensPedido (
    Id              INT IDENTITY(1,1)   NOT NULL,
    PedidoId        INT                 NOT NULL,
    ProdutoId       INT                 NOT NULL,
    Quantidade      INT                 NOT NULL,
    PrecoUnitario   DECIMAL(18,2)       NOT NULL,

    CONSTRAINT PK_ItensPedido PRIMARY KEY CLUSTERED (Id),
    CONSTRAINT CK_ItensPedido_Qtd CHECK (Quantidade > 0),
    CONSTRAINT CK_ItensPedido_Preco CHECK (PrecoUnitario > 0),
    CONSTRAINT FK_ItensPedido_Pedidos
        FOREIGN KEY (PedidoId)
        REFERENCES dbo.Pedidos(Id)
        ON DELETE CASCADE,          -- Deletar pedido → deleta itens
    CONSTRAINT FK_ItensPedido_Produtos
        FOREIGN KEY (ProdutoId)
        REFERENCES dbo.Produtos(Id)
        ON DELETE NO ACTION
);
GO

CREATE NONCLUSTERED INDEX IX_ItensPedido_PedidoProduto
ON dbo.ItensPedido (PedidoId, ProdutoId);
GO

-- ============================================
-- 7️⃣ Dados iniciais (seed) — valores realistas
-- ============================================
INSERT INTO dbo.Categorias (Nome, Descricao) VALUES
    (N'Periféricos',  N'Mouse, teclado, headset e webcam'),
    (N'Monitores',    N'Monitores LCD, LED e ultrawide'),
    (N'Componentes',  N'Placa-mãe, memória, SSD e processador');
GO

INSERT INTO dbo.Produtos (Nome, SKU, Descricao, Preco, Estoque, CategoriaId) VALUES
    (N'Mouse Gamer Logitech G502',  'PER-MOU-001', N'Mouse óptico 25.600 DPI',   349.90, 120, 1),
    (N'Teclado Mecânico HyperX',    'PER-TEC-002', N'Switch Red, RGB, ABNT2',     459.90,  85, 1),
    (N'Webcam Logitech C920',       'PER-WEB-003', N'Full HD 1080p com microfone', 399.90,  60, 1),
    (N'Monitor LG 27\" 4K',          'MON-LG-001',  N'IPS, 60Hz, HDR10',         1899.90,  25, 2),
    (N'Monitor Samsung 24\" 144Hz',  'MON-SAM-002', N'VA, 1ms, FreeSync',         1199.90,  40, 2),
    (N'SSD NVMe 1TB Kingston',       'COM-SSD-001', N'PCIe 4.0, 7000MB/s leitura', 549.90,  200, 3),
    (N'Memória DDR5 16GB Corsair',   'COM-MEM-002', N'5600MHz, CL36',              389.90, 150, 3);
GO

INSERT INTO dbo.Clientes (Nome, Email, CPF, Telefone) VALUES
    (N'Maria Silva',    'maria.silva@email.com',    '12345678901', '11999001122'),
    (N'João Oliveira',  'joao.oliveira@email.com',  '98765432100', '21988334455'),
    (N'Ana Souza',      'ana.souza@email.com',      '45678912300', NULL);
GO

INSERT INTO dbo.Pedidos (ClienteId, Status, Total) VALUES
    (1, 'Entregue',   809.80),
    (1, 'Confirmado', 1899.90),
    (2, 'Pendente',   939.80);
GO

INSERT INTO dbo.ItensPedido (PedidoId, ProdutoId, Quantidade, PrecoUnitario) VALUES
    (1, 1, 1, 349.90),   -- Pedido 1: Mouse
    (1, 2, 1, 459.90),   -- Pedido 1: Teclado
    (2, 4, 1, 1899.90),  -- Pedido 2: Monitor 4K
    (3, 6, 1, 549.90),   -- Pedido 3: SSD
    (3, 7, 1, 389.90);   -- Pedido 3: Memória
GO`,
      codeLanguage: "sql",
      runCommand: "sqlcmd -S localhost -d EcommerceDb -i create_tables.sql",
      checklist: [
        "Executar o script DDL completo e verificar 5 tabelas criadas (Categorias, Produtos, Clientes, Pedidos, ItensPedido)",
        "Inserir os dados de seed e validar as constraints (tentar Preco negativo para ver CHECK)",
        "Usar NVARCHAR em vez de VARCHAR para campos com acentos (Nome, Descricao)",
        "Praticar ALTER TABLE em 3 etapas: add nullable → migrate → add default",
        "Verificar estrutura de cada tabela com sp_help 'dbo.Produtos'",
      ],
      quiz: [
        {
          q: "Por que usar DECIMAL(18,2) em vez de FLOAT para valores monetários no SQL Server?",
          options: [
            "FLOAT é mais rápido e deveria ser usado sempre",
            "DECIMAL é exato para valores decimais; FLOAT usa ponto flutuante com imprecisão (0.1 + 0.2 ≠ 0.3) — inaceitável para dinheiro",
            "DECIMAL ocupa menos espaço que FLOAT",
            "FLOAT não existe no SQL Server",
          ],
          answer: 1,
          explanation:
            "FLOAT usa representação binária de ponto flutuante (IEEE 754) com imprecisão inerente. DECIMAL armazena valores exatos. Para dinheiro, a imprecisão de FLOAT pode causar centavos a mais/menos em milhares de transações.",
        },
        {
          q: "Como adicionar uma coluna NOT NULL a uma tabela que já possui dados?",
          options: [
            "ALTER TABLE ADD coluna NOT NULL — funciona direto",
            "Adicionar como NULL → UPDATE com valor padrão → ALTER COLUMN para NOT NULL (3 etapas)",
            "Dropar e recriar a tabela",
            "Não é possível — deve criar uma tabela nova",
          ],
          answer: 1,
          explanation:
            "Adicionar NOT NULL direto falha se a tabela tem dados (registros existentes teriam NULL). O processo seguro: add nullable → preencher dados → alter para NOT NULL. Ou adicionar com DEFAULT que preenche automaticamente.",
        },
        {
          q: "O que acontece ao executar: DELETE FROM Categorias WHERE Id = 1; — se Produtos tem FK para Categorias com ON DELETE NO ACTION?",
          options: [
            "Deleta a categoria e todos os produtos vinculados",
            "O SQL Server retorna erro de violação de FK e impede o DELETE, pois existem produtos referenciando essa categoria",
            "Deleta a categoria e os produtos ficam com CategoriaId = NULL",
            "O DELETE é ignorado silenciosamente",
          ],
          answer: 1,
          explanation:
            "ON DELETE NO ACTION (ou RESTRICT) impede a exclusão do registro pai quando existem filhos referenciando. O SQL Server lança erro 547 (conflito de FK). O dev deve tratar: realocar produtos antes de deletar a categoria.",
        },
      ],
    },
    {
      id: "m7t2",
      moduleId: "m7",
      title: "JOINs e Subconsultas",
      theory: `JOINs são a principal operação relacional — combinam dados de 2 ou mais tabelas baseado em colunas relacionadas. No SQL Server, os 4 tipos de JOIN cobrem 99% dos cenários: INNER JOIN (interseção), LEFT JOIN (tudo da esquerda + matches da direita), RIGHT JOIN (tudo da direita + matches da esquerda), FULL JOIN (todos de ambas).

INNER JOIN é o mais usado: retorna apenas registros que existem em ambas as tabelas. SELECT p.Nome, c.Nome FROM Produtos p INNER JOIN Categorias c ON p.CategoriaId = c.Id — se um produto não tem categoria (CategoriaId = NULL), ele não aparece. Se uma categoria não tem produtos, ela não aparece.

LEFT JOIN retorna todos da tabela esquerda, mesmo sem correspondência na direita (colunas da direita ficam NULL). Essencial para relatórios: "listar todas as categorias e quantos produtos cada uma tem" — categorias sem produtos aparecem com COUNT = 0. Use LEFT JOIN quando a tabela principal precisa aparecer independente do relacionamento.

Subconsultas (subqueries) são queries dentro de queries. Existem 3 tipos: escalar (retorna 1 valor, usada em SELECT ou WHERE), tabela (retorna múltiplas linhas, usada com IN, EXISTS, ANY), correlacionada (referencia a query externa, executada para cada linha). EXISTS é geralmente mais performático que IN para listas grandes.

CROSS APPLY e OUTER APPLY são exclusivos do SQL Server e substituem subconsultas correlacionadas com sintaxe mais limpa e performance geralmente melhor. CROSS APPLY = INNER JOIN com subconsulta, OUTER APPLY = LEFT JOIN com subconsulta. São ideais para "top N por grupo".

Common Table Expressions (CTEs) com WITH reorganizam queries complexas em blocos nomeados. Recursivas CTEs permitem percorrer hierarquias (organograma, categorias pai-filho). ORDER BY dentro de subconsultas requer TOP ou OFFSET.`,
      code: `-- JOINs e Subconsultas — SQL Server
-- Cenário: e-commerce com Categorias, Produtos, Pedidos, ItensPedido

-- ============================================
-- 1️⃣ INNER JOIN — produtos com categoria
-- ============================================
SELECT
    p.Id,
    p.Nome        AS Produto,
    p.Preco,
    c.Nome        AS Categoria
FROM dbo.Produtos p
INNER JOIN dbo.Categorias c ON p.CategoriaId = c.Id
WHERE p.Ativo = 1
ORDER BY c.Nome, p.Nome;

-- ============================================
-- 2️⃣ LEFT JOIN — categorias COM e SEM produtos
-- ============================================
SELECT
    c.Nome                  AS Categoria,
    COUNT(p.Id)             AS TotalProdutos,
    ISNULL(AVG(p.Preco), 0) AS PrecoMedio
FROM dbo.Categorias c
LEFT JOIN dbo.Produtos p ON c.Id = p.CategoriaId AND p.Ativo = 1
GROUP BY c.Nome
ORDER BY TotalProdutos DESC;
-- Categorias sem produtos aparecem com TotalProdutos = 0

-- ============================================
-- 📌 GROUP BY com HAVING — filtrar APÓS agregação
-- ============================================
-- Categorias que faturaram mais de R$ 1.000
SELECT
    c.Nome                                    AS Categoria,
    SUM(ip.Quantidade * ip.PrecoUnitario)     AS Faturamento,
    COUNT(DISTINCT ped.Id)                    AS TotalPedidos
FROM dbo.Categorias c
INNER JOIN dbo.Produtos p ON c.Id = p.CategoriaId
INNER JOIN dbo.ItensPedido ip ON p.Id = ip.ProdutoId
INNER JOIN dbo.Pedidos ped ON ip.PedidoId = ped.Id
WHERE ped.Status <> 'Cancelado'
GROUP BY c.Nome
HAVING SUM(ip.Quantidade * ip.PrecoUnitario) > 1000  -- HAVING filtra grupos
ORDER BY Faturamento DESC;
-- WHERE filtra LINHAS antes do GROUP BY
-- HAVING filtra GRUPOS depois da agregação

-- ============================================
-- 3️⃣ Multi-JOIN — pedidos com itens e produtos
-- ============================================
SELECT
    ped.Id          AS PedidoId,
    ped.DataPedido,
    ped.Status,
    p.Nome          AS Produto,
    ip.Quantidade,
    ip.PrecoUnitario,
    (ip.Quantidade * ip.PrecoUnitario) AS Subtotal
FROM dbo.Pedidos ped
INNER JOIN dbo.ItensPedido ip ON ped.Id = ip.PedidoId
INNER JOIN dbo.Produtos p ON ip.ProdutoId = p.Id
WHERE ped.Status <> 'Cancelado'
ORDER BY ped.DataPedido DESC, p.Nome;

-- ============================================
-- 4️⃣ Subconsulta com EXISTS — mais rápido que IN
-- ============================================
-- Categorias que TÊM pelo menos 1 produto ativo
SELECT c.Nome, c.Descricao
FROM dbo.Categorias c
WHERE EXISTS (
    SELECT 1 FROM dbo.Produtos p
    WHERE p.CategoriaId = c.Id AND p.Ativo = 1
);

-- ============================================
-- 5️⃣ CTE — relatório de vendas por categoria
-- ============================================
WITH VendasPorCategoria AS (
    SELECT
        c.Nome AS Categoria,
        SUM(ip.Quantidade * ip.PrecoUnitario) AS TotalVendas,
        SUM(ip.Quantidade) AS UnidadesVendidas
    FROM dbo.ItensPedido ip
    INNER JOIN dbo.Produtos p ON ip.ProdutoId = p.Id
    INNER JOIN dbo.Categorias c ON p.CategoriaId = c.Id
    INNER JOIN dbo.Pedidos ped ON ip.PedidoId = ped.Id
    WHERE ped.Status IN ('Confirmado', 'Enviado', 'Entregue')
    GROUP BY c.Nome
)
SELECT
    Categoria,
    TotalVendas,
    UnidadesVendidas,
    RANK() OVER (ORDER BY TotalVendas DESC) AS Ranking
FROM VendasPorCategoria
ORDER BY TotalVendas DESC;

-- ============================================
-- 6️⃣ CROSS APPLY — top 3 produtos por categoria
-- ============================================
SELECT
    c.Nome       AS Categoria,
    t.Nome       AS Produto,
    t.Preco,
    t.Posicao
FROM dbo.Categorias c
CROSS APPLY (
    SELECT TOP 3
        p.Nome, p.Preco,
        ROW_NUMBER() OVER (ORDER BY p.Preco DESC) AS Posicao
    FROM dbo.Produtos p
    WHERE p.CategoriaId = c.Id AND p.Ativo = 1
) t
ORDER BY c.Nome, t.Posicao;`,
      codeLanguage: "sql",
      runCommand: "sqlcmd -S localhost -d EcommerceDb -i joins_queries.sql",
      checklist: [
        "Escrever INNER JOIN entre Produtos e Categorias e conferir resultado",
        "Usar LEFT JOIN para listar categorias sem produtos (COUNT = 0)",
        "Fazer Multi-JOIN entre Pedidos, ItensPedido e Produtos",
        "Substituir uma subconsulta IN por EXISTS e comparar o plano de execução",
        "Criar um relatório com CTE e RANK() OVER para ranking de vendas",
      ],
      quiz: [
        {
          q: "Qual a diferença fundamental entre INNER JOIN e LEFT JOIN?",
          options: [
            "INNER JOIN é mais rápido; LEFT JOIN é mais lento",
            "INNER JOIN retorna apenas registros com correspondência em ambas tabelas; LEFT JOIN retorna TODOS da tabela esquerda, preenchendo NULL onde não há correspondência na direita",
            "LEFT JOIN é o mesmo que INNER JOIN com ORDER BY",
            "INNER JOIN permite mais de 2 tabelas; LEFT JOIN não",
          ],
          answer: 1,
          explanation:
            "INNER JOIN = interseção (só matches). LEFT JOIN = tudo da esquerda + matches da direita (sem match = NULL). Exemplo: LEFT JOIN Categorias mostra categorias sem produtos (NULL nos campos de produto).",
        },
        {
          q: "Quando usar EXISTS em vez de IN para subconsultas?",
          options: [
            "EXISTS sempre — IN é deprecado",
            "EXISTS é geralmente mais eficiente para listas grandes porque para na primeira correspondência; IN materializa toda a subconsulta antes de comparar",
            "IN é sempre mais rápido",
            "São idênticos em todos os cenários",
          ],
          answer: 1,
          explanation:
            "EXISTS usa short-circuit: para de buscar ao encontrar o primeiro match. IN precisa materializar toda a lista. Para subconsultas que retornam milhares de linhas, EXISTS é significativamente mais rápido.",
        },
        {
          q: "O que o CROSS APPLY faz neste trecho? SELECT c.Nome, t.Produto FROM Categorias c CROSS APPLY (SELECT TOP 3 ...) t",
          options: [
            "Cria um produto cruzado (cartesiano) entre as tabelas",
            "Executa a subconsulta para CADA linha de Categorias, retornando apenas categorias que têm resultados (como INNER JOIN com subconsulta correlacionada)",
            "É o mesmo que INNER JOIN sem condição ON",
            "Seleciona 3 categorias aleatórias",
          ],
          answer: 1,
          explanation:
            'CROSS APPLY executa a subconsulta para cada linha da tabela externa (como um loop). É exclusivo do SQL Server e ideal para "top N por grupo". OUTER APPLY = LEFT JOIN equivalente (inclui categorias sem resultados).',
        },
      ],
    },
    {
      id: "m7t3",
      moduleId: "m7",
      title: "Índices e Performance",
      theory: `Índices são a ferramenta mais poderosa para otimizar queries no SQL Server. Sem índices, o SQL Server faz Table Scan — lê TODAS as linhas para encontrar as que satisfazem o WHERE. Com um índice adequado, faz Index Seek — vai direto aos dados, como um índice de livro. Em tabelas com milhões de registros, a diferença é de minutos vs milissegundos.

O SQL Server tem 2 tipos principais: Clustered Index (define a ordem física dos dados na tabela — só 1 por tabela, geralmente na PK) e Non-Clustered Index (cria uma estrutura B-Tree separada com ponteiros para os dados — até 999 por tabela). A analogia: Clustered = as páginas do livro em ordem, Non-Clustered = o índice remissivo no final.

Índices compostos (multi-coluna) seguem a regra "leftmost prefix": um índice em (CategoriaId, Nome, Preco) serve queries que filtram por CategoriaId, ou CategoriaId + Nome, ou os 3. Mas NÃO serve query que filtra apenas por Nome — a ordem das colunas importa.

INCLUDE adiciona colunas ao índice que não fazem parte da chave, mas são retornadas na query. Isso cria um Covering Index — o SQL Server responde a query inteiramente do índice, sem precisar buscar a tabela base (Key Lookup). Para queries frequentes, Covering Index é a otimização mais impactante.

Cuidado com over-indexing: cada índice consome espaço e torna INSERT/UPDATE/DELETE mais lentos (o SQL Server precisa atualizar todos os índices). A regra é: indexe colunas de WHERE, JOIN e ORDER BY. Monitore queries lentas com SET STATISTICS IO ON e analise o Execution Plan (Ctrl+M no SSMS).

Fragmentação ocorre quando dados são inseridos/atualizados e as páginas do índice se desorganizam. ALTER INDEX REBUILD reconstrói completamente (trava a tabela), REORGANIZE apenas rearranja (online, sem lock). Em produção, rotina de manutenção semanal com threshold: > 30% fragmentação = REBUILD, > 10% = REORGANIZE.`,
      code: `-- Índices e Performance — SQL Server
-- Execute no SSMS com "Include Actual Execution Plan" (Ctrl+M)

-- ============================================
-- 1️⃣ Ver índices existentes
-- ============================================
SELECT
    i.name           AS NomeIndice,
    i.type_desc      AS Tipo,
    STRING_AGG(c.name, ', ') WITHIN GROUP (ORDER BY ic.key_ordinal) AS Colunas
FROM sys.indexes i
INNER JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
INNER JOIN sys.columns c ON ic.object_id = c.object_id AND ic.column_id = c.column_id
WHERE i.object_id = OBJECT_ID('dbo.Produtos')
GROUP BY i.name, i.type_desc
ORDER BY i.type_desc;

-- ============================================
-- 2️⃣ Query SEM índice — Table/Index Scan
-- ============================================
-- Ativar estatísticas de IO para medir leituras
SET STATISTICS IO ON;

-- Sem índice em Nome → Scan (lê tudo)
SELECT * FROM dbo.Produtos
WHERE Nome LIKE 'Monitor%'
ORDER BY Preco DESC;
-- Exec Plan mostra: Clustered Index Scan (lento para tabela grande)

-- ============================================
-- 3️⃣ Criar índice simples — Non-Clustered
-- ============================================
CREATE NONCLUSTERED INDEX IX_Produtos_Nome
ON dbo.Produtos (Nome);

-- Mesma query agora usa Index Seek (rápido!)
SELECT * FROM dbo.Produtos
WHERE Nome LIKE 'Monitor%'
ORDER BY Preco DESC;
-- Exec Plan mostra: Index Seek + Key Lookup

-- ============================================
-- 4️⃣ Covering Index com INCLUDE — elimina Key Lookup
-- ============================================
DROP INDEX IX_Produtos_Nome ON dbo.Produtos;

-- INCLUDE: traz Preco e Estoque junto com o índice
CREATE NONCLUSTERED INDEX IX_Produtos_Nome_Cover
ON dbo.Produtos (Nome)
INCLUDE (Preco, Estoque, CategoriaId);

-- Agora a query é satisfeita 100% pelo índice (sem voltar à tabela)
SELECT Nome, Preco, Estoque
FROM dbo.Produtos
WHERE Nome LIKE 'Monitor%'
ORDER BY Preco DESC;
-- Exec Plan: Index Seek SEM Key Lookup = máxima performance

-- ============================================
-- 5️⃣ Índice composto — ordem das colunas importa
-- ============================================
CREATE NONCLUSTERED INDEX IX_Produtos_Categoria_Ativo
ON dbo.Produtos (CategoriaId, Ativo)
INCLUDE (Nome, Preco);

-- ✅ Usa o índice (leftmost prefix)
SELECT Nome, Preco FROM dbo.Produtos
WHERE CategoriaId = 1 AND Ativo = 1;

-- ❌ NÃO usa o índice (coluna Ativo não é a primeira)
SELECT Nome, Preco FROM dbo.Produtos
WHERE Ativo = 1;

-- ============================================
-- 6️⃣ Manutenção de índices
-- ============================================
-- Ver fragmentação
SELECT
    i.name,
    ps.avg_fragmentation_in_percent,
    ps.page_count
FROM sys.dm_db_index_physical_stats(
    DB_ID(), OBJECT_ID('dbo.Produtos'), NULL, NULL, 'LIMITED') ps
INNER JOIN sys.indexes i ON ps.object_id = i.object_id AND ps.index_id = i.index_id
WHERE ps.avg_fragmentation_in_percent > 5;

-- Manutenção baseada na fragmentação
-- > 30%: REBUILD (offline, mais rápido)
ALTER INDEX IX_Produtos_Nome_Cover ON dbo.Produtos REBUILD;

-- 10-30%: REORGANIZE (online, sem lock)
ALTER INDEX IX_Produtos_Categoria_Ativo ON dbo.Produtos REORGANIZE;

-- ============================================
-- 7️⃣ Identificar índices NÃO utilizados
-- ============================================
SELECT
    OBJECT_NAME(i.object_id)     AS Tabela,
    i.name                       AS Indice,
    i.type_desc                  AS Tipo,
    us.user_seeks,
    us.user_scans,
    us.user_lookups,
    us.user_updates              -- Custo: cada INSERT/UPDATE atualiza o índice
FROM sys.indexes i
LEFT JOIN sys.dm_db_index_usage_stats us
    ON i.object_id = us.object_id
    AND i.index_id = us.index_id
    AND us.database_id = DB_ID()
WHERE OBJECTPROPERTY(i.object_id, 'IsUserTable') = 1
  AND i.type_desc = 'NONCLUSTERED'
  AND (us.user_seeks + us.user_scans + us.user_lookups) = 0 -- Nunca usado!
ORDER BY us.user_updates DESC;
-- Índices com 0 leituras e muitas escritas são candidatos a remover`,
      codeLanguage: "sql",
      runCommand: "sqlcmd -S localhost -d EcommerceDb -i create_indexes.sql",
      checklist: [
        "Ativar SET STATISTICS IO ON e analisar logical reads antes/depois do índice",
        "Criar um índice Non-Clustered e verificar mudança de Scan para Seek no Execution Plan",
        "Criar um Covering Index com INCLUDE e confirmar que eliminou o Key Lookup",
        "Testar a regra leftmost prefix com índice composto",
        "Consultar fragmentação com sys.dm_db_index_physical_stats",
      ],
      quiz: [
        {
          q: "Qual é o propósito de um Covering Index (com INCLUDE) no SQL Server?",
          options: [
            "Proteger os dados contra alterações indevidas",
            "Incluir colunas extras no índice para que a query seja satisfeita inteiramente pelo índice, eliminando o Key Lookup à tabela base",
            "Cobrir todas as tabelas do banco com um único índice",
            "Substituir o Clustered Index",
          ],
          answer: 1,
          explanation:
            "Covering Index inclui (INCLUDE) colunas que a query precisa retornar mas não filtra. O SQL Server lê tudo do índice sem voltar à tabela (Key Lookup). É a otimização mais impactante para queries frequentes de leitura.",
        },
        {
          q: "Em um índice composto (CategoriaId, Ativo, Nome), qual WHERE se beneficia do índice?",
          options: [
            "WHERE Nome = ... — qualquer coluna do índice",
            "WHERE CategoriaId = ... (ou CategoriaId + Ativo, ou os 3) — respeita a regra leftmost prefix",
            "Todas as combinações possíveis das 3 colunas",
            "Apenas quando as 3 colunas estão presentes no WHERE",
          ],
          answer: 1,
          explanation:
            "Regra leftmost prefix: o índice (A, B, C) serve queries com WHERE A, WHERE A+B, WHERE A+B+C. NÃO serve WHERE B ou WHERE C sozinhos. A ordem das colunas no índice é crucial.",
        },
        {
          q: "O que este comando faz? ALTER INDEX IX_Produtos_Nome ON dbo.Produtos REBUILD;",
          options: [
            "Deleta o índice completamente",
            "Reconstrói o índice do zero, eliminando fragmentação — a tabela fica bloqueada durante a operação (use REBUILT WITH (ONLINE = ON) em Enterprise)",
            "Apenas renomeia o índice",
            "Adiciona novas colunas ao índice existente",
          ],
          answer: 1,
          explanation:
            "REBUILD reconstrói o índice completamente, zerando a fragmentação. Melhora performance de leitura. Porém, bloqueia a tabela (offline). Para Enterprise Edition, REBUILD WITH (ONLINE = ON) permite reconstruir sem lock.",
        },
      ],
    },
    {
      id: "m7t4",
      moduleId: "m7",
      title: "Stored Procedures e Transações",
      theory: `Stored Procedures (SPs) são blocos de T-SQL compilados e armazenados no banco de dados. Funcionam como "métodos" do banco: recebem parâmetros, executam lógica, retornam dados. Em projetos corporativos, SPs ainda são amplamente usadas em cenários de alta performance, operações em lote e integração com sistemas legados.

Vantagens reais de SPs: plano de execução pré-compilado e cacheado (sem custo de parsing a cada chamada), segurança granular (pode dar EXECUTE na SP sem dar SELECT nas tabelas), operações batch complexas que seriam ineficientes em LINQ, e encapsulamento de lógica no banco para integrações com múltiplos sistemas (não só .NET).

Transações garantem as propriedades ACID: Atomicidade (tudo ou nada), Consistência (dados válidos antes e depois), Isolamento (transações paralelas não interferem), Durabilidade (após COMMIT, dados persistem mesmo com crash). BEGIN TRANSACTION, COMMIT, ROLLBACK são os comandos essenciais.

O padrão TRY/CATCH no T-SQL é obrigatório em SPs: BEGIN TRY + BEGIN TRANSACTION dentro do TRY, COMMIT no final do TRY, BEGIN CATCH faz ROLLBACK e trata o erro. Nunca deixe uma SP sem tratamento de erro — uma exceção sem ROLLBACK pode deixar uma transação aberta, bloqueando a tabela.

OUTPUT parameters retornam valores escalares da SP. RETURN retorna um código de status (0 = sucesso). Para retornar conjuntos de dados (resultsets), use SELECT dentro da SP e o EF Core mapeia com FromSqlRaw. Combine os 3 conforme necessidade.

O EF Core 8 executa SPs com context.Database.ExecuteSqlRawAsync para comandos (INSERT/UPDATE/DELETE) e .FromSqlRaw para queries. Use parâmetros SqlParameter para prevenir SQL Injection — NUNCA concatene strings com entrada do usuário em SQL.`,
      code: `-- Stored Procedures e Transações — SQL Server
-- Cenário: operações de pedido no e-commerce

-- ============================================
-- 1️⃣ SP Simples — buscar produtos por categoria
-- ============================================
CREATE OR ALTER PROCEDURE dbo.sp_BuscarProdutosPorCategoria
    @CategoriaId INT,
    @ApenasAtivos BIT = 1  -- Parâmetro com valor default
AS
BEGIN
    SET NOCOUNT ON; -- Não retorna mensagem de contagem (performance)

    SELECT
        p.Id,
        p.Nome,
        p.SKU,
        p.Preco,
        p.Estoque,
        c.Nome AS Categoria
    FROM dbo.Produtos p
    INNER JOIN dbo.Categorias c ON p.CategoriaId = c.Id
    WHERE p.CategoriaId = @CategoriaId
      AND (@ApenasAtivos = 0 OR p.Ativo = 1)
    ORDER BY p.Nome;
END;
GO

-- Executar:
EXEC dbo.sp_BuscarProdutosPorCategoria @CategoriaId = 1;
EXEC dbo.sp_BuscarProdutosPorCategoria @CategoriaId = 2, @ApenasAtivos = 0;

-- ============================================
-- 2️⃣ SP com Transação — criar pedido completo
-- ============================================
CREATE OR ALTER PROCEDURE dbo.sp_CriarPedido
    @ClienteId  INT,
    @Itens      NVARCHAR(MAX),  -- JSON: [{"ProdutoId":1,"Qtd":2},...]
    @PedidoId   INT OUTPUT       -- Retorna o ID do pedido criado
AS
BEGIN
    SET NOCOUNT ON;

    BEGIN TRY
        BEGIN TRANSACTION;

        -- 1. Cria o pedido
        INSERT INTO dbo.Pedidos (ClienteId, DataPedido, Status, Total)
        VALUES (@ClienteId, GETUTCDATE(), 'Pendente', 0);

        SET @PedidoId = SCOPE_IDENTITY();

        -- 2. Insere itens a partir do JSON
        INSERT INTO dbo.ItensPedido (PedidoId, ProdutoId, Quantidade, PrecoUnitario)
        SELECT
            @PedidoId,
            j.ProdutoId,
            j.Qtd,
            p.Preco
        FROM OPENJSON(@Itens) WITH (
            ProdutoId INT '$.ProdutoId',
            Qtd       INT '$.Qtd'
        ) j
        INNER JOIN dbo.Produtos p ON j.ProdutoId = p.Id;

        -- 3. Atualiza o estoque (decrementa)
        UPDATE p SET p.Estoque = p.Estoque - j.Qtd
        FROM dbo.Produtos p
        INNER JOIN OPENJSON(@Itens) WITH (
            ProdutoId INT '$.ProdutoId',
            Qtd       INT '$.Qtd'
        ) j ON p.Id = j.ProdutoId;

        -- 4. Verifica se algum estoque ficou negativo
        IF EXISTS (
            SELECT 1 FROM dbo.Produtos p
            INNER JOIN OPENJSON(@Itens) WITH (ProdutoId INT '$.ProdutoId') j
                ON p.Id = j.ProdutoId
            WHERE p.Estoque < 0
        )
        BEGIN
            -- Estoque insuficiente — ROLLBACK
            ;THROW 50001, 'Estoque insuficiente para um ou mais produtos.', 1;
        END;

        -- 5. Calcula o total do pedido
        UPDATE dbo.Pedidos
        SET Total = (
            SELECT SUM(Quantidade * PrecoUnitario)
            FROM dbo.ItensPedido WHERE PedidoId = @PedidoId
        )
        WHERE Id = @PedidoId;

        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION;

        -- THROW sem parâmetros re-lança o erro original (melhor que RAISERROR)
        THROW;
    END CATCH;
END;
GO

-- ============================================
-- 3️⃣ Executar a SP com OUTPUT
-- ============================================
DECLARE @NovoPedidoId INT;
EXEC dbo.sp_CriarPedido
    @ClienteId = 1,
    @Itens = N'[{"ProdutoId":1,"Qtd":2},{"ProdutoId":3,"Qtd":1}]',
    @PedidoId = @NovoPedidoId OUTPUT;

SELECT @NovoPedidoId AS PedidoIdCriado;

-- ============================================
-- 4️⃣ View — relatório consolidado de pedidos
-- ============================================
CREATE OR ALTER VIEW dbo.VW_RelatorioPedidos AS
SELECT
    ped.Id            AS PedidoId,
    cli.Nome          AS Cliente,
    cli.Email,
    ped.DataPedido,
    ped.Status,
    COUNT(ip.Id)      AS TotalItens,
    SUM(ip.Quantidade * ip.PrecoUnitario) AS ValorTotal
FROM dbo.Pedidos ped
INNER JOIN dbo.Clientes cli ON ped.ClienteId = cli.Id
INNER JOIN dbo.ItensPedido ip ON ped.Id = ip.PedidoId
GROUP BY ped.Id, cli.Nome, cli.Email, ped.DataPedido, ped.Status;
GO

-- Consultar como tabela:
SELECT * FROM dbo.VW_RelatorioPedidos ORDER BY DataPedido DESC;

-- ============================================
-- 5️⃣ Chamar SP do EF Core 8
-- ============================================
// No C# — usando parâmetros para evitar SQL Injection
// var param = new SqlParameter("@CategoriaId", categoriaId);
// var produtos = await context.Produtos
//     .FromSqlRaw("EXEC dbo.sp_BuscarProdutosPorCategoria @CategoriaId", param)
//     .ToListAsync();`,
      codeLanguage: "sql",
      runCommand: "sqlcmd -S localhost -d EcommerceDb -i stored_procedures.sql",
      checklist: [
        "Criar SP com parâmetros de entrada, valor default e SET NOCOUNT ON",
        "Criar SP transacional com BEGIN TRY/CATCH + THROW para re-lançar erros",
        "Usar SCOPE_IDENTITY() e OUTPUT para retornar o ID do pedido criado",
        "Criar a View VW_RelatorioPedidos e consultá-la como uma tabela normal",
        "Chamar a SP do EF Core com FromSqlRaw usando SqlParameter",
      ],
      quiz: [
        {
          q: "Por que transações com TRY/CATCH são obrigatórias em SPs que modificam dados?",
          options: [
            "É apenas uma boa prática opcional",
            "Sem TRY/CATCH, um erro no meio da SP pode deixar a transação aberta (bloqueando tabelas) e os dados em estado inconsistente (parte das operações aplicada)",
            "O SQL Server não permite SPs sem TRY/CATCH",
            "TRY/CATCH melhora a performance da SP",
          ],
          answer: 1,
          explanation:
            "Sem TRY/CATCH, um erro após BEGIN TRANSACTION não faz ROLLBACK automático. A transação fica aberta, segurando locks nas tabelas. Dados ficam parcialmente escritos (inconsistentes). TRY/CATCH garante ROLLBACK no erro.",
        },
        {
          q: "Qual a diferença entre SCOPE_IDENTITY() e @@IDENTITY?",
          options: [
            "São idênticos",
            "SCOPE_IDENTITY() retorna o último IDENTITY gerado no escopo atual; @@IDENTITY retorna o último IDENTITY de qualquer escopo (pode ser de um trigger) — use SCOPE_IDENTITY()",
            "@@IDENTITY é mais seguro",
            "SCOPE_IDENTITY() só funciona com INT",
          ],
          answer: 1,
          explanation:
            "SCOPE_IDENTITY() é limitado ao escopo atual (a SP ou batch). @@IDENTITY pode retornar um ID gerado por um trigger que executou INSERT em outra tabela. Sempre use SCOPE_IDENTITY() para evitar bugs sutis.",
        },
        {
          q: "O que acontece ao executar esta SP se o estoque de um produto fica negativo? (veja sp_CriarPedido)",
          options: [
            "O pedido é criado normalmente com estoque negativo",
            "RAISERROR interrompe a execução, o fluxo vai para CATCH, ROLLBACK desfaz TODAS as operações (inserção do pedido, itens e update de estoque)",
            "Apenas o UPDATE de estoque é revertido",
            "O SQL Server ajusta o estoque para zero automaticamente",
          ],
          answer: 1,
          explanation:
            "RAISERROR com severity 16 lança um erro que vai para o CATCH. O CATCH verifica @@TRANCOUNT > 0 e faz ROLLBACK TRANSACTION, desfazendo TUDO desde o BEGIN TRANSACTION: inserts e updates. Dados ficam como estavam antes.",
        },
      ],
    },
  ],
};
