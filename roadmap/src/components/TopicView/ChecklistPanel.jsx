import { COLORS } from "../../constants/colors";

const styles = {
  container: {
    marginBottom: 32,
    borderRadius: 8,
    border: `1px solid ${COLORS.border}`,
    overflow: "hidden",
    transition: "background 0.3s",
  },
  containerDone: {
    background: `${COLORS.success}08`,
    borderColor: `${COLORS.success}40`,
  },
  header: {
    padding: "16px 20px 12px",
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    color: COLORS.text,
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  progressRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 4,
  },
  progressText: {
    fontSize: 12,
    color: COLORS.textMuted,
    whiteSpace: "nowrap",
  },
  progressBarOuter: {
    flex: 1,
    height: 4,
    background: COLORS.border,
    borderRadius: 2,
    overflow: "hidden",
  },
  list: {
    padding: "0 20px 16px",
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  item: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    padding: "8px 12px",
    borderRadius: 6,
    background: COLORS.surface2,
    cursor: "pointer",
    transition: "background 0.15s",
    userSelect: "none",
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    border: `2px solid ${COLORS.textDim}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: 1,
    transition: "all 0.15s",
    cursor: "pointer",
  },
  checkboxChecked: {
    background: COLORS.success,
    borderColor: COLORS.success,
  },
  checkmark: {
    color: "#fff",
    fontSize: 11,
    fontWeight: 700,
  },
  itemText: {
    fontSize: 14,
    lineHeight: 1.5,
    color: COLORS.text,
    transition: "all 0.15s",
  },
  itemTextChecked: {
    textDecoration: "line-through",
    color: COLORS.textMuted,
  },
  doneMessage: {
    padding: "12px 20px 16px",
    fontSize: 14,
    color: COLORS.success,
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
};

export default function ChecklistPanel({ items, topicId, checked, onChange }) {
  const checkedArr = checked || items.map(() => false);
  const doneCount = checkedArr.filter(Boolean).length;
  const allDone = doneCount === items.length && items.length > 0;
  const pct = items.length > 0 ? (doneCount / items.length) * 100 : 0;

  const containerStyle = allDone
    ? { ...styles.container, ...styles.containerDone }
    : styles.container;

  const progressBarInner = {
    height: "100%",
    width: `${pct}%`,
    background: allDone ? COLORS.success : COLORS.m1,
    borderRadius: 2,
    transition: "width 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <div style={styles.header}>
        <div style={styles.title}>
          <span>✅</span>
          <span>Pratique no VSCode</span>
        </div>
        <div style={styles.progressRow}>
          <span style={styles.progressText}>
            {doneCount} / {items.length} tarefas concluídas
          </span>
          <div style={styles.progressBarOuter}>
            <div style={progressBarInner} />
          </div>
        </div>
      </div>
      <div style={styles.list}>
        {items.map((item, i) => {
          const isChecked = checkedArr[i];
          const cbStyle = isChecked
            ? { ...styles.checkbox, ...styles.checkboxChecked }
            : styles.checkbox;
          const textStyle = isChecked
            ? { ...styles.itemText, ...styles.itemTextChecked }
            : styles.itemText;

          return (
            <div
              key={`${topicId}-cl-${i}`}
              style={styles.item}
              onClick={() => onChange(i, !isChecked)}
            >
              <div style={cbStyle}>
                {isChecked && <span style={styles.checkmark}>✓</span>}
              </div>
              <span style={textStyle}>{item}</span>
            </div>
          );
        })}
      </div>
      {allDone && (
        <div style={styles.doneMessage}>
          <span>🎉</span>
          <span>Parabéns! Todas as tarefas concluídas</span>
        </div>
      )}
    </div>
  );
}
