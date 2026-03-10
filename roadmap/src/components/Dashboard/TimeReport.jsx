import { COLORS } from "../../constants/colors";
import { formatTime } from "../../utils/formatTime";

const styles = {
  moduleRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 16px",
    borderRadius: 6,
    border: `1px solid ${COLORS.border}`,
    background: COLORS.surface2,
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
    color: COLORS.text,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  value: {
    fontSize: 14,
    color: COLORS.textMuted,
    fontWeight: 600,
  },
  totalRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 16px",
    borderRadius: 6,
    background: `${COLORS.m1}08`,
    border: `1px solid ${COLORS.m1}30`,
    marginTop: 16,
    marginBottom: 8,
  },
  totalLabel: {
    fontSize: 15,
    fontWeight: 700,
    color: COLORS.text,
  },
  totalValue: {
    fontSize: 15,
    fontWeight: 700,
    color: COLORS.xp,
  },
  avgRow: {
    padding: "10px 16px",
    borderRadius: 6,
    background: COLORS.surface2,
    fontSize: 13,
    color: COLORS.textMuted,
    textAlign: "center",
  },
};

export default function TimeReport({ modules, timers, completedCount }) {
  const totalSeconds = modules.reduce(
    (sum, mod) => sum + (timers[mod.id] || 0),
    0,
  );

  const avgSeconds =
    completedCount > 0 ? Math.round(totalSeconds / completedCount) : 0;

  return (
    <div>
      {modules.map((mod) => (
        <div key={mod.id} style={styles.moduleRow}>
          <span style={styles.label}>
            <span>{mod.icon}</span> {mod.title}
          </span>
          <span style={styles.value}>{formatTime(timers[mod.id] || 0)}</span>
        </div>
      ))}

      <div style={styles.totalRow}>
        <span style={styles.totalLabel}>Tempo Total</span>
        <span style={styles.totalValue}>{formatTime(totalSeconds)}</span>
      </div>

      <div style={styles.avgRow}>
        Média por tópico concluído:{" "}
        {completedCount > 0 ? formatTime(avgSeconds) : "—"}
      </div>
    </div>
  );
}
