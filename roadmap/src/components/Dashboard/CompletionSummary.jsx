import { COLORS } from "../../constants/colors";
import { formatTime } from "../../utils/formatTime";

const styles = {
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: COLORS.text,
    marginBottom: 12,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 8,
  },
  topicCard: {
    padding: "10px 12px",
    borderRadius: 6,
    border: `1px solid ${COLORS.border}`,
    background: COLORS.surface2,
    fontSize: 12,
    lineHeight: 1.4,
  },
  topicTitle: {
    fontWeight: 600,
    color: COLORS.text,
    marginBottom: 4,
  },
  topicStatus: {
    fontSize: 11,
    color: COLORS.textMuted,
  },
  moduleRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 14px",
    borderRadius: 6,
    border: `1px solid ${COLORS.border}`,
    background: COLORS.surface2,
    marginBottom: 6,
  },
  moduleLabel: {
    fontSize: 13,
    fontWeight: 600,
    color: COLORS.text,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  moduleValue: {
    fontSize: 13,
    color: COLORS.textMuted,
  },
  xpRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 14px",
    borderRadius: 6,
    background: COLORS.surface2,
    marginBottom: 4,
    fontSize: 13,
  },
  xpLabel: {
    color: COLORS.textMuted,
  },
  xpValue: {
    color: COLORS.xp,
    fontWeight: 600,
  },
};

export default function CompletionSummary({
  modules,
  completedTopics,
  checklists,
  quizzes,
  timers,
  xp,
}) {
  // XP breakdown
  let checklistXP = 0;
  let quizXP = 0;
  let moduleXP = 0;

  for (const mod of modules) {
    const allDone = mod.topics.every((t) => completedTopics.includes(t.id));
    if (allDone) moduleXP += 100;

    for (const topic of mod.topics) {
      const cl = checklists[topic.id];
      if (cl && cl.length > 0 && cl.every(Boolean)) checklistXP += 20;

      const qz = quizzes[topic.id];
      if (qz && qz.submitted) {
        const correct = qz.answers.reduce(
          (sum, a, i) => sum + (a === topic.quiz[i].answer ? 1 : 0),
          0,
        );
        quizXP += correct * 10;
      }
    }
  }

  return (
    <div>
      {/* Topic grid per module */}
      {modules.map((mod) => (
        <div key={mod.id} style={styles.section}>
          <div style={styles.sectionTitle}>
            <span>{mod.icon}</span>
            <span>{mod.title}</span>
          </div>
          <div style={styles.grid}>
            {mod.topics.map((topic) => {
              const done = completedTopics.includes(topic.id);
              return (
                <div
                  key={topic.id}
                  style={{
                    ...styles.topicCard,
                    borderColor: done ? `${COLORS.success}60` : COLORS.border,
                  }}
                >
                  <div style={styles.topicTitle}>
                    {done ? "✅" : "○"} {topic.title}
                  </div>
                  <div style={styles.topicStatus}>
                    {done ? "Concluído" : "Pendente"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Time per module */}
      <div style={styles.section}>
        <div style={styles.sectionTitle}>⏱ Tempo por Módulo</div>
        {modules.map((mod) => (
          <div key={mod.id} style={styles.moduleRow}>
            <span style={styles.moduleLabel}>
              <span>{mod.icon}</span> {mod.title}
            </span>
            <span style={styles.moduleValue}>
              {formatTime(timers[mod.id] || 0)}
            </span>
          </div>
        ))}
      </div>

      {/* XP breakdown */}
      <div style={styles.section}>
        <div style={styles.sectionTitle}>⚡ Origem do XP</div>
        <div style={styles.xpRow}>
          <span style={styles.xpLabel}>Checklists completos</span>
          <span style={styles.xpValue}>{checklistXP} XP</span>
        </div>
        <div style={styles.xpRow}>
          <span style={styles.xpLabel}>Respostas corretas no quiz</span>
          <span style={styles.xpValue}>{quizXP} XP</span>
        </div>
        <div style={styles.xpRow}>
          <span style={styles.xpLabel}>Módulos completos</span>
          <span style={styles.xpValue}>{moduleXP} XP</span>
        </div>
        <div
          style={{
            ...styles.xpRow,
            borderTop: `1px solid ${COLORS.border}`,
            marginTop: 8,
            paddingTop: 12,
          }}
        >
          <span
            style={{ ...styles.xpLabel, fontWeight: 700, color: COLORS.text }}
          >
            Total
          </span>
          <span style={{ ...styles.xpValue, fontSize: 15 }}>{xp} XP</span>
        </div>
      </div>
    </div>
  );
}
