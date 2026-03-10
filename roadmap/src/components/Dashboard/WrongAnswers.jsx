import { COLORS } from "../../constants/colors";

const styles = {
  empty: {
    textAlign: "center",
    padding: "40px 0",
    color: COLORS.textMuted,
    fontSize: 14,
  },
  questionCard: {
    padding: "16px",
    borderRadius: 8,
    border: `1px solid ${COLORS.border}`,
    background: COLORS.surface2,
    marginBottom: 12,
  },
  topicLabel: {
    fontSize: 11,
    color: COLORS.textMuted,
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  questionText: {
    fontSize: 14,
    fontWeight: 600,
    color: COLORS.text,
    marginBottom: 12,
    lineHeight: 1.5,
  },
  answerRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
    marginBottom: 6,
    fontSize: 13,
    lineHeight: 1.4,
  },
  wrongLabel: {
    color: COLORS.error,
    fontWeight: 600,
    flexShrink: 0,
  },
  correctLabel: {
    color: COLORS.success,
    fontWeight: 600,
    flexShrink: 0,
  },
  explanation: {
    marginTop: 10,
    padding: "10px 12px",
    borderRadius: 6,
    background: `${COLORS.m1}08`,
    border: `1px solid ${COLORS.m1}30`,
    fontSize: 13,
    color: COLORS.textMuted,
    lineHeight: 1.5,
  },
};

export default function WrongAnswers({ modules, quizzes }) {
  const wrongItems = [];

  for (const mod of modules) {
    for (const topic of mod.topics) {
      const qz = quizzes[topic.id];
      if (!qz || !qz.submitted) continue;

      topic.quiz.forEach((q, i) => {
        if (qz.answers[i] !== q.answer) {
          wrongItems.push({
            topicTitle: topic.title,
            moduleIcon: mod.icon,
            moduleName: mod.title,
            question: q.question,
            givenAnswer: q.options[qz.answers[i]],
            correctAnswer: q.options[q.answer],
            explanation: q.explanation,
          });
        }
      });
    }
  }

  if (wrongItems.length === 0) {
    return <div style={styles.empty}>Nenhum erro para revisar 🎉</div>;
  }

  return (
    <div>
      {wrongItems.map((item, idx) => (
        <div key={idx} style={styles.questionCard}>
          <div style={styles.topicLabel}>
            {item.moduleIcon} {item.moduleName} › {item.topicTitle}
          </div>
          <div style={styles.questionText}>{item.question}</div>
          <div style={styles.answerRow}>
            <span style={styles.wrongLabel}>Sua resposta:</span>
            <span style={{ color: COLORS.error }}>{item.givenAnswer}</span>
          </div>
          <div style={styles.answerRow}>
            <span style={styles.correctLabel}>Correta:</span>
            <span style={{ color: COLORS.success }}>{item.correctAnswer}</span>
          </div>
          <div style={styles.explanation}>{item.explanation}</div>
        </div>
      ))}
    </div>
  );
}
