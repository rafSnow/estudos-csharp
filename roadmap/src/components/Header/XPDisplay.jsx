import { COLORS } from "../../constants/colors";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "4px 12px",
    borderRadius: 6,
    border: `1px solid ${COLORS.border}`,
    fontSize: 13,
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  xpText: {
    color: COLORS.xp,
  },
  barOuter: {
    width: 60,
    height: 6,
    background: COLORS.border,
    borderRadius: 3,
    overflow: "hidden",
  },
  level: {
    fontSize: 12,
    fontWeight: 700,
    background: `linear-gradient(135deg, ${COLORS.m1}, ${COLORS.m2})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
};

export default function XPDisplay({ xp }) {
  const level = Math.floor(xp / 500) + 1;
  const xpInLevel = xp % 500;
  const pct = (xpInLevel / 500) * 100;

  return (
    <div style={styles.container}>
      <span style={styles.xpText}>⚡ {xp} XP</span>
      <div style={styles.barOuter}>
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${COLORS.m1}, ${COLORS.m2})`,
            borderRadius: 3,
            transition: "width 0.5s ease",
          }}
        />
      </div>
      <span style={styles.level}>LVL {level}</span>
    </div>
  );
}
