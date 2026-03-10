export { FASE1_DATA } from "./fase1/index";
export { FASE2_DATA } from "./fase2/index";
export { FASE3_DATA } from "./fase3/index";
export { FASE4_DATA } from "./fase4/index";

import { FASE1_DATA } from "./fase1/index";
import { FASE2_DATA } from "./fase2/index";
import { FASE3_DATA } from "./fase3/index";
import { FASE4_DATA } from "./fase4/index";

export const ALL_PHASES = [
  {
    id: "phase1",
    title: "Fase 1",
    subtitle: "C# Fundamentos & Git",
    data: FASE1_DATA,
    color: "#00D4FF",
    weeks: "Semanas 1–4",
  },
  {
    id: "phase2",
    title: "Fase 2",
    subtitle: "Web API & Banco de Dados",
    data: FASE2_DATA,
    color: "#7C3AED",
    weeks: "Semanas 5–8",
  },
  {
    id: "phase3",
    title: "Fase 3",
    subtitle: "Qualidade & Arquitetura",
    data: FASE3_DATA,
    color: "#10B981",
    weeks: "Semanas 9–12",
  },
  {
    id: "phase4",
    title: "Fase 4",
    subtitle: "Testes Automatizados",
    data: FASE4_DATA,
    color: "#EF4444",
    weeks: "Semanas 13–15",
  },
];
