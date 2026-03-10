import { useState } from "react";
import { COLORS } from "../../constants/colors";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 0",
    marginTop: 32,
    borderTop: `1px solid ${COLORS.border}`,
  },
  indicator: {
    fontSize: 13,
    color: COLORS.textMuted,
  },
};

function NavButton({ children, disabled, onClick }) {
  const [hovered, setHovered] = useState(false);

  const style = {
    fontSize: 14,
    fontWeight: 600,
    padding: "8px 20px",
    borderRadius: 6,
    border: `1px solid ${disabled ? COLORS.textDim : COLORS.m1}`,
    background: disabled
      ? "transparent"
      : hovered
        ? `${COLORS.m1}20`
        : "transparent",
    color: disabled ? COLORS.textDim : COLORS.m1,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "all 0.15s",
    minWidth: 120,
    textAlign: "center",
  };

  return (
    <button
      style={style}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={
        disabled && children.toString().includes("Próximo")
          ? "Complete o checklist e o quiz para avançar"
          : undefined
      }
    >
      {children}
    </button>
  );
}

export default function NavigationBar({
  currentIndex,
  totalTopics,
  canAdvance,
  onPrevious,
  onNext,
}) {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalTopics - 1;

  return (
    <div style={styles.container}>
      <NavButton disabled={isFirst} onClick={onPrevious}>
        ← Anterior
      </NavButton>
      <span style={styles.indicator}>
        Tópico {currentIndex + 1} de {totalTopics}
      </span>
      <NavButton disabled={isLast || !canAdvance} onClick={onNext}>
        Próximo →
      </NavButton>
    </div>
  );
}
