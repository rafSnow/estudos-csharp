import { COLORS } from "../../constants/colors";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontSize: 13,
    color: COLORS.textMuted,
    whiteSpace: "nowrap",
  },
  barOuter: {
    width: 80,
    height: 6,
    background: COLORS.border,
    borderRadius: 3,
    overflow: "hidden",
  },
  label: {
    fontWeight: 600,
  },
  pct: {
    color: COLORS.text,
    fontWeight: 700,
    fontSize: 12,
  },
};

const PHASE_GRADIENTS = {
  phase1: `linear-gradient(90deg, ${COLORS.m1}, ${COLORS.m2}, ${COLORS.m3}, ${COLORS.m4})`,
  phase2: `linear-gradient(90deg, ${COLORS.m5}, ${COLORS.m6}, ${COLORS.m7}, ${COLORS.m8})`,
  phase3: `linear-gradient(90deg, ${COLORS.m9}, ${COLORS.m10}, ${COLORS.m11}, ${COLORS.m12})`,
};

export default function PhaseProgress({
  completedCount,
  totalTopics,
  currentPhase,
}) {
  const pct =
    totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
  const gradient = PHASE_GRADIENTS[currentPhase?.id] || PHASE_GRADIENTS.phase1;

  return (
    <div style={styles.container}>
      <span style={styles.label}>
        {completedCount} / {totalTopics} tópicos
      </span>
      <div style={styles.barOuter}>
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: gradient,
            borderRadius: 3,
            transition: "width 0.5s ease",
          }}
        />
      </div>
      <span style={styles.pct}>{pct}%</span>
    </div>
  );
}
