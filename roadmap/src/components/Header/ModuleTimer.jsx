import { COLORS } from "../../constants/colors";
import { formatTime } from "../../utils/formatTime";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "4px 12px",
    borderRadius: 6,
    border: `1px solid ${COLORS.border}`,
    fontSize: 13,
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  icon: {
    fontSize: 14,
  },
};

export default function ModuleTimer({ seconds, moduleColor }) {
  const time = formatTime(seconds || 0);

  return (
    <div
      style={{
        ...styles.container,
        color: moduleColor || COLORS.textMuted,
        borderColor: moduleColor ? `${moduleColor}40` : COLORS.border,
      }}
    >
      <span style={styles.icon}>⏱</span>
      {time}
    </div>
  );
}
