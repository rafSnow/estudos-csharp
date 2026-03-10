import { COLORS } from "../../constants/colors";
import ModuleTimer from "./ModuleTimer";
import PhaseProgress from "./PhaseProgress";
import XPDisplay from "./XPDisplay";

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 56,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
    background: COLORS.surface,
    borderBottom: `1px solid ${COLORS.border}`,
  },
  logo: {
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: 1,
    background: `linear-gradient(135deg, ${COLORS.m1}, ${COLORS.m2})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    userSelect: "none",
  },
  center: {
    display: "flex",
    alignItems: "center",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
};

export default function Header({
  timerSeconds,
  moduleColor,
  xp,
  completedCount,
  totalTopics,
  currentPhase,
  onDashboardOpen,
}) {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        .NET {currentPhase?.title?.toUpperCase() || "FASE 1"}
      </div>
      <div style={styles.center}>
        <PhaseProgress
          completedCount={completedCount}
          totalTopics={totalTopics}
          currentPhase={currentPhase}
        />
      </div>
      <div style={styles.right}>
        <ModuleTimer seconds={timerSeconds} moduleColor={moduleColor} />
        <XPDisplay xp={xp} />
        <button
          onClick={onDashboardOpen}
          aria-label="Abrir dashboard"
          style={{
            width: 34,
            height: 34,
            borderRadius: 6,
            border: `1px solid ${COLORS.border}`,
            background: "transparent",
            color: COLORS.textMuted,
            fontSize: 16,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.15s",
          }}
        >
          📊
        </button>
      </div>
    </header>
  );
}
