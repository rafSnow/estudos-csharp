import { COLORS } from "../../constants/colors";

const TOAST_COLORS = {
  success: COLORS.success,
  xp: COLORS.xp,
  unlock: COLORS.warning,
};

const styles = {
  container: {
    position: "fixed",
    bottom: 20,
    right: 20,
    zIndex: 300,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    pointerEvents: "none",
  },
  toast: {
    pointerEvents: "auto",
    padding: "12px 20px",
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    color: COLORS.text,
    background: COLORS.surface2,
    border: `1px solid ${COLORS.border}`,
    boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
    animation: "slideIn 0.3s ease-out",
    cursor: "pointer",
    maxWidth: 320,
    lineHeight: 1.4,
  },
};

export default function Toast({ toasts, onDismiss }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div style={styles.container}>
      {toasts.map((t) => (
        <div
          key={t.id}
          style={{
            ...styles.toast,
            borderLeftWidth: 4,
            borderLeftStyle: "solid",
            borderLeftColor: TOAST_COLORS[t.type] || COLORS.success,
          }}
          onClick={() => onDismiss(t.id)}
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}
