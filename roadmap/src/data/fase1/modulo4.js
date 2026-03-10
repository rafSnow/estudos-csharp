export const MODULO_4 = {
  id: "m4",
  title: "Git & GitFlow",
  icon: "🔀",
  week: "Semana 4",
  color: "#F59E0B",
  topics: [
    {
      id: "m4t1",
      moduleId: "m4",
      title: "Git Essencial",
      theory: `Git é o sistema de controle de versão mais usado no mundo. Ele rastreia cada alteração em cada arquivo do projeto, permitindo voltar a qualquer ponto no tempo, colaborar com outras pessoas sem conflitos e manter um histórico completo de todas as mudanças.

O fluxo básico do Git segue três áreas: Working Directory (seus arquivos locais), Staging Area (área de preparação, o "palco" onde você monta o próximo commit) e Repository (o histórico versionado com todos os commits).

git init cria um repositório Git vazio. git clone baixa um repositório remoto com todo o histórico. git status mostra o estado atual — quais arquivos foram modificados, adicionados ou removidos. É o comando que você mais vai usar no dia a dia.

git add move arquivos do Working Directory para a Staging Area. git add . adiciona tudo, mas git add arquivo.cs é mais preciso e profissional. git commit salva um snapshot do que está na Staging Area com uma mensagem descritiva. Cada commit é um ponto de restauração imutável.

git push envia seus commits locais para o repositório remoto (GitHub, Azure DevOps). git pull baixa os commits do remoto e integra com seu branch local — é um git fetch + git merge combinados.

git log mostra o histórico de commits. git log --oneline --graph mostra uma visualização condensada com branches. git diff mostra as diferenças entre arquivos não commitados.

O .gitignore é essencial em projetos .NET: lista padrões de arquivos que o Git deve ignorar. Pastas como bin/, obj/, .vs/ e arquivos como *.user não devem ser versionados — contêm builds e configurações locais que variam entre máquinas.`,
      code: `# Git Essencial — Comandos fundamentais
# Execute no terminal (PowerShell ou Bash)

# === CRIAR UM REPOSITÓRIO ===
mkdir MeuProjetoCSharp
cd MeuProjetoCSharp
git init
# Saída: Initialized empty Git repository in .../MeuProjetoCSharp/.git/

# === CONFIGURAÇÃO INICIAL (uma vez por máquina) ===
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
git config --global init.defaultBranch main

# === CRIAR PROJETO .NET E ARQUIVO .gitignore ===
dotnet new console -n MeuProjetoCSharp
cd MeuProjetoCSharp
dotnet new gitignore
# Cria .gitignore com padrões para .NET (bin/, obj/, .vs/, *.user)

# === FLUXO BÁSICO: add → commit → push ===

# Ver status (quais arquivos mudaram)
git status
# Saída: Untracked files: Program.cs, MeuProjetoCSharp.csproj...

# Adicionar arquivos à staging area
git add .                              # Adiciona tudo
git add Program.cs                     # Ou arquivo específico

# Criar commit com mensagem descritiva
git commit -m "feat: criar projeto console inicial"

# === CONECTAR A UM REMOTO (GitHub/Azure DevOps) ===
git remote add origin https://github.com/usuario/repo.git
git push -u origin main               # -u define upstream (só na primeira vez)

# === COMANDOS DO DIA A DIA ===

# Baixar mudanças do remoto
git pull                               # fetch + merge

# Ver histórico
git log --oneline --graph --decorate
# Saída:
# * a1b2c3d (HEAD -> main) feat: adicionar classe Produto
# * e4f5g6h feat: criar projeto console inicial

# Ver diferenças não commitadas
git diff                               # Working dir vs staging
git diff --staged                      # Staging vs último commit

# Desfazer modificações (CUIDADO)
git checkout -- Program.cs             # Descarta mudanças no arquivo
git reset HEAD Program.cs              # Remove do staging (mantém mudanças)

# === CLONE — baixar repositório existente ===
git clone https://github.com/dotnet/runtime.git
# Baixa todo o repositório com histórico completo

# === .gitignore para .NET (já criado pelo dotnet new gitignore) ===
# Conteúdo típico inclui:
# bin/
# obj/
# .vs/
# *.user
# *.suo
# packages/`,
      codeLanguage: "bash",
      runCommand:
        "mkdir MeuProjetoCSharp && cd MeuProjetoCSharp && git init && dotnet new console && dotnet new gitignore",
      checklist: [
        "Criar um repositório Git com git init em uma pasta nova",
        "Configurar user.name e user.email com git config",
        "Criar um projeto .NET, adicionar .gitignore e fazer o primeiro commit",
        "Usar git status, git log --oneline e git diff para inspecionar o repositório",
        "Fazer pelo menos 3 commits com mensagens descritivas e claras",
      ],
      quiz: [
        {
          q: "Quais são as três áreas fundamentais do Git?",
          options: [
            "Local, Remoto e Cloud",
            "Working Directory, Staging Area e Repository",
            "Add, Commit e Push",
            "Branch, Merge e Rebase",
          ],
          answer: 1,
          explanation:
            'Working Directory = seus arquivos locais. Staging Area = "palco" preparando o próximo commit. Repository = histórico versionado. O fluxo é: editar → add (staging) → commit (repo).',
        },
        {
          q: "Qual comando usar para ver quais arquivos foram modificados mas não commitados?",
          options: ["git log", "git diff --all", "git status", "git show"],
          answer: 2,
          explanation:
            "git status mostra o estado completo: arquivos modificados (vermelho), no staging (verde), untracked (novos). É o comando mais usado no workflow diário.",
        },
        {
          q: "Qual o resultado da sequência: git add . → git reset HEAD Program.cs → git status?",
          options: [
            "Todos os arquivos ficam no staging",
            "Program.cs volta para 'Changes not staged', os demais permanecem no staging",
            "Todos os arquivos voltam para não-staged",
            "Program.cs é deletado do projeto",
          ],
          answer: 1,
          explanation:
            "git add . adiciona tudo ao staging. git reset HEAD Program.cs remove apenas Program.cs do staging (mantém as modificações no working directory). Os outros arquivos permanecem staged.",
        },
      ],
    },
    {
      id: "m4t2",
      moduleId: "m4",
      title: "Branches & Merge",
      theory: `Branches (ramificações) são o recurso que torna o Git poderoso para colaboração. Um branch é uma linha independente de desenvolvimento — você pode trabalhar em uma feature nova sem afetar o código principal, e depois integrar quando estiver pronto.

O branch main (ou master) é a linha principal do projeto — deve sempre estar em estado funcional. Em equipes corporativas, nunca se commita diretamente na main. Todo trabalho acontece em branches temporários que são integrados via merge ou pull request.

git branch lista branches existentes. git branch nome-branch cria um novo branch. git checkout nome-branch muda para o branch (move o HEAD). O atalho git checkout -b nome cria e muda em um comando. No Git moderno, git switch substitui checkout para troca de branches.

Merge integra as mudanças de um branch em outro. git merge feature-login traz todos os commits de feature-login para o branch atual. Existem dois tipos: fast-forward (quando não há commits divergentes — apenas "avança" o ponteiro) e merge commit (quando há divergência — cria um commit especial unindo as duas linhas).

Rebase reescreve o histórico: pega seus commits e os reaplicando sobre outro branch, criando um histórico linear sem merge commits. A regra de ouro é: NUNCA faça rebase em branches compartilhados (main, develop). Use rebase apenas em seus branches locais antes de integrar.

Conflitos acontecem quando dois branches modificam a mesma parte do mesmo arquivo. O Git marca o conflito no arquivo com <<<<<<, ====== e >>>>>>. Você resolve manualmente, faz add e commit. Em IDEs como VS Code, a resolução é visual e intuitiva.

A diferença prática: merge preserva o histórico como aconteceu (com bifurcações), rebase cria um histórico linear e limpo. Equipes corporativas geralmente usam merge para integrar branches e rebase para atualizar branches locais.`,
      code: `# Branches & Merge — Fluxo de trabalho com branches
# Execute no terminal dentro de um repositório Git existente

# === CRIAR E TROCAR DE BRANCH ===
git branch                             # Lista branches (* indica o atual)
git branch feature-login               # Cria branch
git checkout feature-login             # Muda para o branch
# OU em um comando:
git checkout -b feature-login          # Cria + muda
# Git moderno:
git switch -c feature-login            # Cria + muda (switch é mais claro)

# === TRABALHAR NO BRANCH ===
# Faça modificações no código...
git add .
git commit -m "feat: adicionar tela de login"
git add .
git commit -m "feat: validar credenciais do usuário"

# Ver branches e histórico
git log --oneline --graph --all
# * b1c2d3e (HEAD -> feature-login) feat: validar credenciais
# * a1b2c3d feat: adicionar tela de login
# * 9f8e7d6 (main) feat: criar projeto inicial

# === MERGE — integrar branch na main ===
git checkout main                      # Volta para main
git merge feature-login                # Traz commits de feature-login
# Saída: Fast-forward (ou merge commit se houve divergência)

# Apagar branch após merge (limpeza)
git branch -d feature-login            # -d = safe delete (só se já fez merge)

# === REBASE — reescrever histórico (APENAS em branches locais!) ===
git checkout feature-dashboard
# ...commits no seu branch...

# Antes de abrir PR, atualizar com a main
git fetch origin                       # Baixa atualizações do remoto
git rebase origin/main                 # Reaplica seus commits sobre a main atualizada

# Se houver conflitos durante rebase:
# 1. Edite os arquivos conflitantes
# 2. git add arquivo-resolvido.cs
# 3. git rebase --continue
# Para abortar: git rebase --abort

# === RESOLVER CONFLITO DE MERGE ===
git checkout main
git merge feature-api                  # Conflito!
# CONFLICT (content): Merge conflict in Program.cs

# O arquivo terá marcadores:
# <<<<<<< HEAD
# código da main
# =======
# código da feature-api
# >>>>>>> feature-api

# Resolva manualmente (escolha/combine o código correto), depois:
git add Program.cs
git commit -m "merge: resolver conflito em Program.cs"

# === MERGE vs REBASE — quando usar cada ===
# MERGE: integrar branches (preserva histórico real)
#   git checkout main && git merge feature-x
#
# REBASE: atualizar SEU branch local com a main (histórico linear)
#   git checkout meu-branch && git rebase main
#
# NUNCA: git rebase em branch compartilhado (main, develop)`,
      codeLanguage: "bash",
      runCommand:
        'git checkout -b feature-demo && echo "demo" > demo.txt && git add . && git commit -m "feat: branch demo"',
      checklist: [
        "Criar um branch novo com git checkout -b feature-teste",
        "Fazer 2+ commits no branch e verificar com git log --oneline --graph --all",
        "Voltar para main e fazer merge do branch criado",
        "Deletar o branch após merge com git branch -d",
        "Simular e resolver um conflito de merge editando o mesmo arquivo em dois branches",
      ],
      quiz: [
        {
          q: "Qual a diferença entre merge e rebase?",
          options: [
            "Merge é mais rápido que rebase",
            "Merge preserva o histórico como aconteceu (com merge commit); rebase reescreve criando histórico linear",
            "Rebase é mais seguro que merge",
            "Não há diferença — ambos fazem a mesma coisa",
          ],
          answer: 1,
          explanation:
            "Merge cria um commit especial unindo dois branches (preserva a bifurcação no histórico). Rebase reaplica commits sobre outro branch (histórico linear, sem bifurcações). Merge para integrar, rebase para atualizar branch local.",
        },
        {
          q: "Por que nunca se deve fazer rebase em branches compartilhados como main?",
          options: [
            "Rebase é lento em branches grandes",
            "Rebase reescreve o histórico, causando conflitos para todos que estão trabalhando no branch",
            "Rebase apaga commits permanentemente",
            "O Git impede rebase na main",
          ],
          answer: 1,
          explanation:
            "Rebase altera os hashes dos commits (reescreve histórico). Se outros devs estão baseados nos commits originais, eles terão conflitos ao sincronizar. Regra: rebase apenas em branches locais privados.",
        },
        {
          q: "O que acontece ao executar: git checkout -b feature-x && git commit --allow-empty -m 'test' && git checkout main && git branch -d feature-x?",
          options: [
            "Erro: branch não pode ser deletado",
            "Erro: git branch -d falha porque feature-x tem commits que não estão na main",
            "Branch é deletado normalmente",
            "O commit é perdido permanentemente",
          ],
          answer: 1,
          explanation:
            "git branch -d é safe delete: só deleta se todos os commits já foram integrados ao branch atual (main). feature-x tem um commit que main não tem, então -d falha. Use -D (force) apenas se realmente quiser descartar.",
        },
      ],
    },
    {
      id: "m4t3",
      moduleId: "m4",
      title: "GitFlow",
      theory: `GitFlow é uma estratégia de branching que organiza o fluxo de trabalho em equipes. Define branches com papéis específicos e regras claras de quando criar, integrar e deletar cada branch. É o workflow mais adotado em equipes corporativas .NET.

O branch main contém apenas código em produção — cada commit na main corresponde a uma release. O branch develop é a linha de desenvolvimento ativa — contém features prontas aguardando a próxima release. Toda a equipe sincroniza com develop.

Feature branches (feature/*) são criados a partir de develop para implementar funcionalidades. Cada feature tem seu branch: feature/login, feature/carrinho-compras. Ao terminar, o develop recebe o merge do feature via Pull Request revisado pela equipe.

Release branches (release/*) são criados a partir de develop quando há features suficientes para uma release. No release branch, apenas correções de bugs são permitidas — não features novas. Após testes e aprovação, o release é mesclado tanto na main (produção) quanto na develop (para manter sincronia).

Hotfix branches (hotfix/*) são criados a partir da main para corrigir bugs críticos em produção. São os únicos branches que nascem da main (além de release). Após a correção, o hotfix é mesclado na main E na develop, garantindo que o fix esteja em ambas as linhas.

Na prática com Azure DevOps ou GitHub: cada feature branch gera um Pull Request para develop, com code review obrigatório, CI/CD automático e aprovação de pelo menos um reviewer. Isso garante qualidade e rastreabilidade de todas as mudanças.`,
      code: `# GitFlow — Fluxo completo com comandos reais
# Execute no terminal dentro de um repositório Git

# === SETUP INICIAL ===
git checkout -b develop main           # Criar branch develop a partir da main

# === FEATURE BRANCH ===
# 1. Criar feature a partir de develop
git checkout develop
git pull origin develop                # Sincronizar com remoto
git checkout -b feature/cadastro-usuario

# 2. Trabalhar na feature (commits normais)
git add .
git commit -m "feat(usuario): criar model Usuario"
git add .
git commit -m "feat(usuario): implementar validação de email"
git add .
git commit -m "feat(usuario): adicionar endpoint POST /api/usuarios"

# 3. Atualizar feature com develop (opcional, antes de abrir PR)
git fetch origin
git rebase origin/develop              # Reaplica commits sobre develop atualizado

# 4. Push para remoto e abrir Pull Request
git push -u origin feature/cadastro-usuario
# Abra PR no GitHub: feature/cadastro-usuario → develop

# 5. Após aprovação e merge do PR no GitHub:
git checkout develop
git pull origin develop                # Atualiza develop local
git branch -d feature/cadastro-usuario # Limpa branch local

# === RELEASE BRANCH ===
# Quando develop acumula features suficientes para release
git checkout develop
git pull origin develop
git checkout -b release/1.0.0

# Ajustes de release (apenas bugfixes, versionamento, docs)
git add .
git commit -m "chore: atualizar versão para 1.0.0"
git add .
git commit -m "fix: corrigir validação de CPF no cadastro"

# Finalizar release — merge em main E develop
git checkout main
git merge --no-ff release/1.0.0        # --no-ff força merge commit
git tag -a v1.0.0 -m "Release 1.0.0"  # Tag de versão

git checkout develop
git merge --no-ff release/1.0.0        # Traz fixes para develop também
git branch -d release/1.0.0            # Limpa branch

git push origin main develop --tags    # Push de tudo + tags

# === HOTFIX BRANCH ===
# Bug crítico em produção! Hotfix a partir da main.
git checkout main
git checkout -b hotfix/corrigir-login

# Corrigir o bug
git add .
git commit -m "fix: corrigir token JWT expirado no login"

# Finalizar hotfix — merge em main E develop
git checkout main
git merge --no-ff hotfix/corrigir-login
git tag -a v1.0.1 -m "Hotfix: login JWT"

git checkout develop
git merge --no-ff hotfix/corrigir-login
git branch -d hotfix/corrigir-login

git push origin main develop --tags

# === RESUMO DO FLUXO ===
# main     ←── release/* ←── develop ←── feature/*
# main     ←── hotfix/*  ──→ develop (fix também vai para develop)
# feature → PR → develop → release → main (+ tag)`,
      codeLanguage: "bash",
      runCommand:
        'git checkout -b develop && echo "GitFlow setup" > .gitflow && git add . && git commit -m "chore: setup GitFlow"',
      checklist: [
        "Criar branch develop a partir da main",
        "Criar um feature branch (feature/minha-feature) a partir de develop e fazer commits",
        "Fazer merge da feature em develop com --no-ff",
        "Criar um release branch (release/1.0.0) e fazer merge na main + develop",
        "Simular um hotfix criando branch hotfix/ a partir da main",
      ],
      quiz: [
        {
          q: "De qual branch um feature branch deve ser criado no GitFlow?",
          options: ["main", "develop", "release", "Qualquer branch"],
          answer: 1,
          explanation:
            "No GitFlow, features nascem de develop e voltam para develop (via PR). A main só recebe código via release ou hotfix. develop é a linha de integração da equipe.",
        },
        {
          q: "Qual a diferença entre release e hotfix no GitFlow?",
          options: [
            "Não há diferença — são intercambiáveis",
            "Release prepara a próxima versão (nasce de develop); hotfix corrige bugs urgentes em produção (nasce de main)",
            "Hotfix é para features urgentes",
            "Release é criado automaticamente pelo CI/CD",
          ],
          answer: 1,
          explanation:
            "Release nasce de develop, faz ajustes finais e vai para main + develop. Hotfix nasce de main (produção com bug), corrige e vai para main + develop. Hotfix é emergencial; release é planejado.",
        },
        {
          q: "Qual sequência de comandos finaliza corretamente um release 1.0.0 no GitFlow?",
          options: [
            "git checkout develop && git merge release/1.0.0 && git branch -d release/1.0.0",
            "git checkout main && git merge --no-ff release/1.0.0 && git tag v1.0.0 && git checkout develop && git merge --no-ff release/1.0.0",
            "git push origin release/1.0.0 && git branch -d release/1.0.0",
            "git rebase main release/1.0.0 && git tag v1.0.0",
          ],
          answer: 1,
          explanation:
            "Release é finalizado com merge em AMBOS main (produção) e develop (manter sincronia). --no-ff força merge commit para rastreabilidade. A tag v1.0.0 marca o release na main. A primeira opção só faz merge na develop.",
        },
      ],
    },
    {
      id: "m4t4",
      moduleId: "m4",
      title: "Boas Práticas Git",
      theory: `Boas práticas de Git são o que diferencia um desenvolvedor profissional. Mensagens de commit claras, histórico organizado e etiqueta de Pull Request fazem parte das habilidades essenciais em equipes corporativas.

Conventional Commits é um padrão de mensagens de commit que traz estrutura e significado. O formato é: tipo(escopo): descrição. Os tipos mais comuns são: feat (nova funcionalidade), fix (correção de bug), refactor (mudança interna sem afetar funcionalidade), docs (documentação), chore (manutenção, build, CI), test (testes), style (formatação).

Exemplos reais para projetos .NET: "feat(api): adicionar endpoint GET /api/produtos", "fix(auth): corrigir expiração do token JWT", "refactor(repository): extrair interface IRepository<T>", "chore(ci): configurar pipeline de build no Azure DevOps", "docs(readme): adicionar instruções de setup local".

A mensagem de commit ideal tem: título curto (até 72 caracteres) no imperativo ("adicionar", não "adicionado"), escopo opcional entre parênteses, corpo opcional com o PORQUÊ da mudança (não o quê — o diff mostra o quê), e referência ao ticket/issue quando aplicável.

Pull Requests (PRs) são o mecanismo de code review em equipes. Um bom PR tem: título seguindo conventional commits, descrição explicando o contexto e decisões, tamanho razoável (até ~400 linhas — PRs gigantes recebem reviews superficiais), screenshots para mudanças visuais, e referência ao ticket.

O .gitignore para projetos .NET deve excluir: bin/, obj/ (builds), .vs/ (configurações do Visual Studio), *.user (preferências pessoais), packages/ (restaurados pelo NuGet), e appsettings.Development.json (configurações locais com possíveis secrets).`,
      code: `# Boas Práticas Git — Conventional Commits e mais
# Referência de comandos e padrões

# === CONVENTIONAL COMMITS — formato ===
# tipo(escopo): descrição imperativa curta
#
# Tipos:
#   feat:     nova funcionalidade
#   fix:      correção de bug
#   refactor: mudança interna sem novo comportamento
#   docs:     documentação
#   chore:    build, CI/CD, manutenção
#   test:     adicionar ou corrigir testes
#   style:    formatação (sem mudança lógica)
#   perf:     melhoria de performance

# === EXEMPLOS REAIS para projetos .NET ===
git commit -m "feat(api): adicionar endpoint GET /api/produtos"
git commit -m "feat(auth): implementar login com JWT"
git commit -m "fix(pedido): corrigir cálculo de frete para SP"
git commit -m "refactor(repo): extrair interface IRepository<T>"
git commit -m "chore(ci): configurar GitHub Actions para build e test"
git commit -m "docs(readme): adicionar instruções de setup local"
git commit -m "test(usuario): adicionar testes unitários para validação"
git commit -m "perf(query): otimizar consulta de relatório mensal"

# === COMMIT COM CORPO (mensagem multi-linha) ===
git commit -m "fix(auth): corrigir token JWT expirado no refresh

O token de refresh não estava sendo validado corretamente
quando o relógio do servidor tinha drift > 30s.

Adicionada tolerância de 60s no ClockSkew do TokenValidationParameters.

Closes #142"

# === BREAKING CHANGE ===
git commit -m "feat(api)!: migrar para .NET 8 minimal API

BREAKING CHANGE: endpoints movidos de /api/v1/ para /api/v2/
Clientes devem atualizar a URL base."

# === CONFIGURAR TEMPLATE DE COMMIT ===
# Criar arquivo ~/.gitmessage:
# tipo(escopo): descrição imperativa
#
# Por quê? (explique o motivo, não o que mudou)
#
# Refs: #ticket

git config --global commit.template ~/.gitmessage

# === .gitignore COMPLETO para .NET ===
# (gerado por: dotnet new gitignore)
# Essenciais:
#   bin/
#   obj/
#   .vs/
#   *.user
#   *.suo
#   packages/
#   *.DotSettings.user
#   appsettings.Development.json  (pode conter secrets locais)

# === ALIAS ÚTEIS para o dia a dia ===
git config --global alias.st "status"
git config --global alias.co "checkout"
git config --global alias.br "branch"
git config --global alias.lg "log --oneline --graph --decorate --all"
git config --global alias.last "log -1 HEAD --stat"

# Uso:
git st                                 # = git status
git lg                                 # = log visual bonito
git last                               # = último commit com stats

# === ETIQUETA DE PULL REQUEST ===
# ✅ BOM PR:
#   Título: "feat(pedido): implementar checkout com PIX"
#   Descrição: contexto, decisões, screenshots
#   Tamanho: ~200 linhas (fácil de revisar)
#   Reviewer: designado, não genérico
#
# ❌ MAU PR:
#   Título: "updates" ou "wip" ou "fix stuff"
#   Descrição: vazia
#   Tamanho: 2000+ linhas (ninguém vai revisar direito)
#   Commits: "fix", "fix2", "fix final", "agora vai"

# === LIMPAR HISTÓRICO ANTES DO PR ===
# Squash commits "wip" em um commit limpo
git rebase -i HEAD~3                   # Interativo nos últimos 3 commits
# No editor: marque "squash" nos commits que quer combinar
# Resultado: 3 commits viram 1 com mensagem limpa`,
      codeLanguage: "bash",
      runCommand:
        'git config --global alias.lg "log --oneline --graph --decorate --all" && git lg',
      checklist: [
        "Configurar alias úteis: git st, git lg, git last",
        "Fazer 3 commits usando Conventional Commits (feat, fix, refactor)",
        "Fazer um commit com corpo multi-linha explicando o porquê da mudança",
        "Verificar que o .gitignore do projeto exclui bin/, obj/ e .vs/",
        "Praticar squash de commits com git rebase -i (em branch local)",
      ],
      quiz: [
        {
          q: "Qual o formato correto de um Conventional Commit?",
          options: [
            '"Adicionei o login" (passado, sem tipo)',
            '"tipo(escopo): descrição imperativa" — ex: "feat(auth): implementar login JWT"',
            '"FIX - corrigir bug #123"',
            "Qualquer formato é aceito",
          ],
          answer: 1,
          explanation:
            "Conventional Commits segue o padrão tipo(escopo): descrição. O tipo indica a natureza (feat, fix, refactor...), escopo é opcional, e a descrição é imperativa e curta. Ferramentas de CI/CD usam isso para gerar changelogs automaticamente.",
        },
        {
          q: "Qual o tamanho ideal de um Pull Request para garantir review de qualidade?",
          options: [
            "Quanto maior melhor — menos PRs para revisar",
            "Até ~400 linhas — PRs grandes recebem reviews superficiais",
            "Exatamente 1 arquivo por PR",
            "Tamanho não importa",
          ],
          answer: 1,
          explanation:
            "Estudos mostram que reviews de PRs com mais de 400 linhas são significativamente menos eficazes. PRs menores recebem feedback mais detalhado, são integrados mais rápido e têm menor risco de bugs.",
        },
        {
          q: "Para que serve o comando git rebase -i HEAD~3?",
          options: [
            "Apaga os últimos 3 commits",
            "Abre editor interativo para reorganizar, combinar (squash) ou editar os últimos 3 commits",
            "Cria 3 branches novos",
            "Reverte o repositório para 3 commits atrás",
          ],
          answer: 1,
          explanation:
            "rebase -i (interativo) abre um editor listando os commits. Você pode: pick (manter), squash (combinar com anterior), reword (editar mensagem), drop (remover). Ideal para limpar histórico antes de abrir PR.",
        },
      ],
    },
  ],
};
