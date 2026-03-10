import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "Fundamentos Sólidos",
    subtitle: "C# & .NET Core",
    duration: "Semanas 1–4",
    color: "#00D4FF",
    icon: "⚡",
    level: "Iniciante",
    topics: [
      {
        name: "C# Básico ao Intermediário",
        sub: "Tipos, loops, arrays, LINQ, async/await, delegates, generics",
      },
      {
        name: "POO em C#",
        sub: "Classes, herança, interfaces, polimorfismo, encapsulamento",
      },
      {
        name: "Git & GitFlow",
        sub: "Branches, merge, rebase, feature branch, hotfix, release",
      },
      {
        name: ".NET CLI & Estrutura de Projetos",
        sub: "dotnet new, restore, build, run, publish",
      },
    ],
    project: {
      name: "📋 Sistema de Lista de Tarefas (Console)",
      desc: "CRUD completo em console com listas, dicionários, LINQ e persistência em JSON. Aplica POO, interfaces e async/await.",
      stack: ["C#", ".NET 8", "Git"],
    },
    science:
      "🧠 Método Pomodoro + Spaced Repetition: 25min foco, revisão em 1h, 1 dia, 1 semana.",
  },
  {
    id: 2,
    title: "Web API & Banco de Dados",
    subtitle: "ASP.NET + EF Core + SQL Server",
    duration: "Semanas 5–8",
    color: "#7C3AED",
    icon: "🗄️",
    level: "Básico-Intermediário",
    topics: [
      {
        name: "ASP.NET Core Web API",
        sub: "Controllers, Minimal APIs, Middlewares, Filters, routing",
      },
      {
        name: "Entity Framework Core",
        sub: "DbContext, Migrations, Code First, Fluent API, queries",
      },
      {
        name: "SQL Server",
        sub: "Modelagem relacional, joins, índices, stored procedures",
      },
      {
        name: "Injeção de Dependências",
        sub: "DI container nativo, Singleton/Scoped/Transient, IServiceCollection",
      },
    ],
    project: {
      name: "🛒 API de E-commerce (Produtos & Pedidos)",
      desc: "REST API com CRUD, relacionamentos, migrations, paginação e filtros. SQL Server com EF Core.",
      stack: ["ASP.NET Core", "EF Core", "SQL Server", "Swagger"],
    },
    science:
      "🧠 Aprendizado por projetos (PBL): constrói conexões neurais mais fortes que leitura passiva.",
  },
  {
    id: 3,
    title: "Qualidade & Arquitetura",
    subtitle: "Clean Code + SOLID + DDD",
    duration: "Semanas 9–12",
    color: "#059669",
    icon: "🏗️",
    level: "Intermediário",
    topics: [
      {
        name: "Clean Code",
        sub: "Naming, funções pequenas, SRP, comentários, refatoração",
      },
      {
        name: "Princípios SOLID",
        sub: "SRP, OCP, LSP, ISP, DIP com exemplos práticos em C#",
      },
      {
        name: "Domain-Driven Design (DDD)",
        sub: "Entities, Value Objects, Aggregates, Repositories, Domain Events",
      },
      {
        name: "FluentValidation",
        sub: "Validators, regras customizadas, integração com ASP.NET Core",
      },
    ],
    project: {
      name: "🏦 Sistema Financeiro (DDD Completo)",
      desc: "Contas, transações e extrato com camadas Domain, Application, Infrastructure e API. FluentValidation em todos os inputs.",
      stack: ["DDD", "SOLID", "FluentValidation", "EF Core"],
    },
    science:
      "🧠 Interleaving: alterne entre SOLID e DDD no mesmo dia — aumenta retenção em 40%.",
  },
  {
    id: 4,
    title: "Testes Automatizados",
    subtitle: "Unitários + Integração + TDD",
    duration: "Semanas 13–15",
    color: "#DC2626",
    icon: "🧪",
    level: "Intermediário",
    topics: [
      {
        name: "Testes de Unidade com xUnit",
        sub: "Arrange-Act-Assert, Mocks com Moq, cobertura de código",
      },
      {
        name: "Testes de Integração",
        sub: "WebApplicationFactory, TestContainers, banco real em memória",
      },
      {
        name: "TDD (Test-Driven Development)",
        sub: "Red-Green-Refactor, design emergente, confiança no código",
      },
      {
        name: "BDD com SpecFlow",
        sub: "Gherkin, cenários de negócio, Given-When-Then",
      },
    ],
    project: {
      name: "🧪 Suite de Testes do Sistema Financeiro",
      desc: "80%+ de cobertura, testes de integração com banco real via Docker, mocks de serviços externos.",
      stack: ["xUnit", "Moq", "TestContainers", "FluentAssertions"],
    },
    science:
      "🧠 Testing Effect: escrever testes força recuperação ativa do conhecimento — memória de longo prazo.",
  },
  {
    id: 5,
    title: "Segurança & Autenticação",
    subtitle: "JWT + Refresh Token + Identity",
    duration: "Semanas 16–17",
    color: "#F59E0B",
    icon: "🔐",
    level: "Intermediário-Avançado",
    topics: [
      {
        name: "JWT (JSON Web Tokens)",
        sub: "Claims, assinatura, expiração, validação, Bearer token",
      },
      {
        name: "Refresh Token",
        sub: "Rotação segura, revogação, armazenamento, sliding expiration",
      },
      {
        name: "ASP.NET Core Identity",
        sub: "Usuários, roles, claims, password hashing, lockout",
      },
      {
        name: "Políticas de Autorização",
        sub: "Policy-based, resource-based authorization, middleware",
      },
    ],
    project: {
      name: "🔐 Auth Service Completo",
      desc: "Login, registro, JWT com refresh token rotativo, roles, logout seguro e blacklist de tokens.",
      stack: ["JWT", "Identity", "Redis (blacklist)", "ASP.NET Core"],
    },
    science:
      "🧠 Chunking: agrupe JWT + Refresh Token como um 'chunk' de segurança — reduz carga cognitiva.",
  },
  {
    id: 6,
    title: "Containers & DevOps",
    subtitle: "Docker + Azure DevOps + CI/CD",
    duration: "Semanas 18–21",
    color: "#0EA5E9",
    icon: "🐳",
    level: "Avançado",
    topics: [
      {
        name: "Docker & Docker Compose",
        sub: "Dockerfile, multi-stage build, redes, volumes, docker-compose",
      },
      {
        name: "Azure DevOps",
        sub: "Boards (Scrum), Repos, Pipelines, Artifacts, Release",
      },
      {
        name: "CI/CD Pipelines",
        sub: "Build, test, sonar scan, push image, deploy automático",
      },
      {
        name: "Database Migrations em Pipeline",
        sub: "EF migrations em CI/CD, idempotência, rollback strategy",
      },
    ],
    project: {
      name: "🐳 Containerizar & Deploy do Sistema Financeiro",
      desc: "Docker Compose completo (API + SQL Server + Redis), pipeline CI/CD no Azure DevOps com deploy automático.",
      stack: ["Docker", "Azure DevOps", "YAML Pipelines", "ACR"],
    },
    science:
      "🧠 Desafio Incremental: adiciona complexidade gradualmente — evita overload cognitivo.",
  },
  {
    id: 7,
    title: "Qualidade de Código",
    subtitle: "SonarCloud + SonarQube + Code Coverage",
    duration: "Semanas 22–23",
    color: "#8B5CF6",
    icon: "📊",
    level: "Avançado",
    topics: [
      {
        name: "SonarCloud",
        sub: "Integração com GitHub/Azure DevOps, Quality Gates, PR analysis",
      },
      {
        name: "SonarQube On-Premise",
        sub: "Instalação via Docker, projetos, regras customizadas",
      },
      {
        name: "Métricas de Qualidade",
        sub: "Coverage, Duplications, Bugs, Vulnerabilities, Code Smells, SQALE",
      },
      {
        name: "Quality Gates no Pipeline",
        sub: "Bloquear merge se Quality Gate falhar, relatórios automáticos",
      },
    ],
    project: {
      name: "📊 Pipeline com Quality Gate Obrigatório",
      desc: "Configurar SonarCloud no projeto financeiro: 80% coverage, 0 bugs críticos, Quality Gate no PR.",
      stack: ["SonarCloud", "SonarQube", "Azure DevOps", "dotnet-sonarscanner"],
    },
    science:
      "🧠 Feedback Loop imediato: ver métricas em tempo real acelera correção de comportamentos ruins.",
  },
  {
    id: 8,
    title: "Mensageria & Microserviços",
    subtitle: "RabbitMQ + MassTransit + Event-Driven",
    duration: "Semanas 24–27",
    color: "#EF4444",
    icon: "📨",
    level: "Avançado",
    topics: [
      {
        name: "Mensageria com RabbitMQ",
        sub: "Exchanges, queues, bindings, routing keys, DLQ",
      },
      {
        name: "MassTransit",
        sub: "Consumers, Sagas, Outbox Pattern, retry policies, circuit breaker",
      },
      {
        name: "Event-Driven Architecture",
        sub: "Domain Events, Integration Events, eventual consistency",
      },
      {
        name: "Padrões de Microserviços",
        sub: "API Gateway, Service Discovery, Health Checks, Observability",
      },
    ],
    project: {
      name: "📨 Plataforma de Notificações Event-Driven",
      desc: "Microserviço de notificações: recebe eventos (pedido criado, pagamento aprovado) via RabbitMQ e envia e-mail/SMS.",
      stack: ["RabbitMQ", "MassTransit", "Docker", "Serilog", "Health Checks"],
    },
    science:
      "🧠 Projeto Capstone progressivo: reusa código anterior — consolida aprendizado por conexão.",
  },
  {
    id: 9,
    title: "Scrum & Projeto Final",
    subtitle: "Metodologia Ágil + Projeto Corporativo Completo",
    duration: "Semanas 28–32",
    color: "#10B981",
    icon: "🚀",
    level: "Avançado / Corporativo",
    topics: [
      {
        name: "Scrum Completo",
        sub: "Product Backlog, Sprint Planning, Daily, Review, Retrospective, Definition of Done",
      },
      {
        name: "Azure Boards para Scrum",
        sub: "Epics, Features, User Stories, Tasks, Burndown, Velocity",
      },
      {
        name: "Arquitetura Corporativa",
        sub: "Clean Architecture + DDD + CQRS + MediatR + Event Sourcing",
      },
      {
        name: "Observabilidade",
        sub: "Serilog, OpenTelemetry, Application Insights, dashboards",
      },
    ],
    project: {
      name: "🏢 Sistema de Gestão Empresarial (ERP Mini)",
      desc: "Módulos: Auth, Financeiro, Estoque, Pedidos. Microserviços, mensageria, CI/CD completo, SonarCloud, Docker, JWT, testes 80%+.",
      stack: [
        "Clean Architecture",
        "DDD",
        "CQRS",
        "MassTransit",
        "Docker",
        "Azure DevOps",
        "SonarCloud",
      ],
    },
    science:
      "🧠 Projeto integrador: síntese de todo o conhecimento — maximiza transferência de aprendizado.",
  },
];

const levelColors = {
  Iniciante: "#22c55e",
  "Básico-Intermediário": "#84cc16",
  Intermediário: "#eab308",
  "Intermediário-Avançado": "#f97316",
  Avançado: "#ef4444",
  "Avançado / Corporativo": "#8b5cf6",
};

export default function Roadmap() {
  const [active, setActive] = useState(null);
  const [hoveredPhase, setHoveredPhase] = useState(null);

  const selected = phases.find((p) => p.id === active);

  return (
    <div
      style={{
        fontFamily: "'Courier New', monospace",
        background: "#0a0a0f",
        minHeight: "100vh",
        color: "#e2e8f0",
        padding: "0",
      }}
    >
      {/* Header */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #0a0a0f 0%, #0d1117 50%, #0a0a0f 100%)",
          borderBottom: "1px solid #1e293b",
          padding: "40px 32px 32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #00D4FF08 0%, transparent 60%), radial-gradient(circle at 80% 20%, #7C3AED08 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 8,
            }}
          >
            <span
              style={{
                fontSize: 11,
                color: "#00D4FF",
                letterSpacing: "0.2em",
                fontWeight: "bold",
              }}
            >
              TRILHA DE APRENDIZADO
            </span>
            <div
              style={{
                height: 1,
                flex: 1,
                background: "linear-gradient(90deg, #00D4FF30, transparent)",
              }}
            />
          </div>
          <h1
            style={{
              fontSize: "clamp(24px, 4vw, 42px)",
              fontWeight: "900",
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: "#fff" }}>.NET </span>
            <span
              style={{
                background: "linear-gradient(135deg, #00D4FF, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CORPORATIVO
            </span>
          </h1>
          <p
            style={{ color: "#64748b", fontSize: 13, margin: 0, maxWidth: 560 }}
          >
            Do C# ao microserviços — 32 semanas, 9 fases, projetos reais.
            Baseado em ciência do aprendizado.
          </p>
          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 24,
              flexWrap: "wrap",
            }}
          >
            {[
              ["32", "Semanas"],
              ["9", "Fases"],
              ["9", "Projetos"],
              ["20+", "Tecnologias"],
            ].map(([n, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div
                  style={{ fontSize: 22, fontWeight: "900", color: "#00D4FF" }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#475569",
                    letterSpacing: "0.1em",
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
        {/* Timeline */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 20,
              top: 0,
              bottom: 0,
              width: 2,
              background:
                "linear-gradient(180deg, #00D4FF, #7C3AED, #059669, #DC2626, #F59E0B, #0EA5E9, #8B5CF6, #EF4444, #10B981)",
            }}
          />

          {phases.map((phase, i) => (
            <div
              key={phase.id}
              style={{
                display: "flex",
                gap: 24,
                marginBottom: 12,
                cursor: "pointer",
              }}
              onClick={() => setActive(active === phase.id ? null : phase.id)}
              onMouseEnter={() => setHoveredPhase(phase.id)}
              onMouseLeave={() => setHoveredPhase(null)}
            >
              {/* Node */}
              <div
                style={{ position: "relative", flexShrink: 0, paddingTop: 2 }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background:
                      active === phase.id || hoveredPhase === phase.id
                        ? phase.color
                        : "#0f172a",
                    border: `2px solid ${phase.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    transition: "all 0.2s ease",
                    boxShadow:
                      active === phase.id
                        ? `0 0 20px ${phase.color}40`
                        : "none",
                    zIndex: 1,
                    position: "relative",
                  }}
                >
                  {phase.icon}
                </div>
              </div>

              {/* Card */}
              <div
                style={{
                  flex: 1,
                  background:
                    active === phase.id
                      ? `linear-gradient(135deg, ${phase.color}12, ${phase.color}06)`
                      : hoveredPhase === phase.id
                        ? "#0f172a"
                        : "#080c14",
                  border: `1px solid ${active === phase.id ? phase.color + "40" : "#1e293b"}`,
                  borderRadius: 12,
                  padding: "16px 20px",
                  transition: "all 0.2s ease",
                  marginBottom: 8,
                }}
              >
                {/* Header Row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 8,
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        flexWrap: "wrap",
                        marginBottom: 2,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: "bold",
                          letterSpacing: "0.1em",
                          color: phase.color,
                        }}
                      >
                        FASE {phase.id}
                      </span>
                      <span
                        style={{
                          fontSize: 9,
                          padding: "2px 8px",
                          borderRadius: 20,
                          background: levelColors[phase.level] + "20",
                          color: levelColors[phase.level],
                          border: `1px solid ${levelColors[phase.level]}40`,
                          letterSpacing: "0.08em",
                        }}
                      >
                        {phase.level}
                      </span>
                      <span style={{ fontSize: 10, color: "#475569" }}>
                        {phase.duration}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: "800",
                        color: "#f1f5f9",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {phase.title}
                    </div>
                    <div
                      style={{ fontSize: 11, color: "#64748b", marginTop: 1 }}
                    >
                      {phase.subtitle}
                    </div>
                  </div>
                  <div
                    style={{
                      color: phase.color,
                      fontSize: 14,
                      opacity: 0.7,
                      transform: active === phase.id ? "rotate(90deg)" : "none",
                      transition: "transform 0.2s",
                      flexShrink: 0,
                    }}
                  >
                    ▶
                  </div>
                </div>

                {/* Expanded Content */}
                {active === phase.id && (
                  <div style={{ marginTop: 20 }}>
                    {/* Topics */}
                    <div style={{ marginBottom: 20 }}>
                      <div
                        style={{
                          fontSize: 10,
                          color: "#475569",
                          letterSpacing: "0.15em",
                          marginBottom: 10,
                        }}
                      >
                        CONTEÚDO DA FASE
                      </div>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: 8,
                        }}
                      >
                        {phase.topics.map((t, ti) => (
                          <div
                            key={ti}
                            style={{
                              background: "#0a0e1a",
                              border: `1px solid ${phase.color}20`,
                              borderLeft: `3px solid ${phase.color}`,
                              borderRadius: "0 8px 8px 0",
                              padding: "10px 12px",
                            }}
                          >
                            <div
                              style={{
                                fontSize: 12,
                                fontWeight: "700",
                                color: "#e2e8f0",
                                marginBottom: 3,
                              }}
                            >
                              {t.name}
                            </div>
                            <div
                              style={{
                                fontSize: 10,
                                color: "#64748b",
                                lineHeight: 1.5,
                              }}
                            >
                              {t.sub}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project */}
                    <div
                      style={{
                        background: `linear-gradient(135deg, ${phase.color}15, #0a0e1a)`,
                        border: `1px solid ${phase.color}30`,
                        borderRadius: 10,
                        padding: "16px",
                        marginBottom: 14,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 10,
                          color: phase.color,
                          letterSpacing: "0.15em",
                          marginBottom: 6,
                        }}
                      >
                        PROJETO PRÁTICO
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: "800",
                          color: "#f1f5f9",
                          marginBottom: 6,
                        }}
                      >
                        {phase.project.name}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "#94a3b8",
                          lineHeight: 1.6,
                          marginBottom: 12,
                        }}
                      >
                        {phase.project.desc}
                      </div>
                      <div
                        style={{ display: "flex", flexWrap: "wrap", gap: 6 }}
                      >
                        {phase.project.stack.map((s, si) => (
                          <span
                            key={si}
                            style={{
                              fontSize: 10,
                              padding: "3px 10px",
                              background: phase.color + "20",
                              color: phase.color,
                              borderRadius: 20,
                              border: `1px solid ${phase.color}30`,
                              fontWeight: "600",
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Science */}
                    <div
                      style={{
                        background: "#0f172a",
                        border: "1px solid #1e293b",
                        borderRadius: 8,
                        padding: "10px 14px",
                        fontSize: 11,
                        color: "#94a3b8",
                        lineHeight: 1.6,
                      }}
                    >
                      {phase.science}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div
          style={{
            marginTop: 32,
            background: "#080c14",
            border: "1px solid #1e293b",
            borderRadius: 16,
            padding: "24px",
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: "#475569",
              letterSpacing: "0.15em",
              marginBottom: 16,
            }}
          >
            TECNOLOGIAS COBERTAS
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              "C# 12",
              ".NET 8",
              "ASP.NET Core",
              "Entity Framework",
              "SQL Server",
              "Fluent Validation",
              "xUnit",
              "Moq",
              "TestContainers",
              "JWT",
              "Refresh Token",
              "Identity",
              "Docker",
              "Docker Compose",
              "Azure DevOps",
              "YAML Pipelines",
              "CI/CD",
              "SonarCloud",
              "SonarQube",
              "RabbitMQ",
              "MassTransit",
              "Git",
              "GitFlow",
              "DDD",
              "SOLID",
              "Clean Code",
              "Clean Architecture",
              "CQRS",
              "MediatR",
              "Scrum",
              "Serilog",
              "OpenTelemetry",
              "Redis",
              "Swagger",
              "Migrations",
            ].map((tech, i) => (
              <span
                key={i}
                style={{
                  fontSize: 10,
                  padding: "4px 12px",
                  background: "#0f172a",
                  color: "#64748b",
                  borderRadius: 20,
                  border: "1px solid #1e293b",
                  fontWeight: "600",
                  letterSpacing: "0.05em",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer tip */}
        <div
          style={{
            marginTop: 24,
            padding: "16px 20px",
            background: "linear-gradient(135deg, #00D4FF08, #7C3AED08)",
            border: "1px solid #1e293b",
            borderRadius: 12,
            fontSize: 11,
            color: "#64748b",
            lineHeight: 1.7,
            textAlign: "center",
          }}
        >
          💡 <strong style={{ color: "#94a3b8" }}>Dica de Ouro:</strong> Clique
          em cada fase para ver conteúdo, projeto prático e a ciência por trás
          do aprendizado. Dedique{" "}
          <strong style={{ color: "#94a3b8" }}>2–3 horas/dia</strong> e você
          dominará .NET corporativo em 8 meses.
        </div>
      </div>
    </div>
  );
}
