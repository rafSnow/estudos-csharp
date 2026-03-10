import { useState } from "react";
import { COLORS } from "../../constants/colors";

const styles = {
  container: {
    marginBottom: 32,
    borderRadius: 8,
    border: `1px solid ${COLORS.border}`,
    overflow: "hidden",
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
    marginBottom: 4,
  },
  question: {
    padding: "16px 20px",
    borderTop: `1px solid ${COLORS.border}`,
  },
  questionText: {
    fontSize: 14,
    fontWeight: 600,
    color: COLORS.text,
    marginBottom: 12,
    lineHeight: 1.5,
  },
  questionNumber: {
    color: COLORS.m1,
    marginRight: 8,
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  option: {
    padding: "10px 14px",
    borderRadius: 6,
    border: `1px solid ${COLORS.border}`,
    background: COLORS.surface2,
    fontSize: 14,
    color: COLORS.text,
    cursor: "pointer",
    transition: "all 0.15s",
    textAlign: "left",
    lineHeight: 1.4,
  },
  optionSelected: {
    borderColor: COLORS.m1,
    background: `${COLORS.m1}10`,
  },
  optionCorrect: {
    borderColor: COLORS.success,
    background: `${COLORS.success}15`,
    color: COLORS.success,
  },
  optionWrong: {
    borderColor: COLORS.error,
    background: `${COLORS.error}15`,
    color: COLORS.error,
  },
  optionDisabled: {
    cursor: "default",
    opacity: 0.7,
  },
  explanation: {
    marginTop: 12,
    padding: "10px 14px",
    borderRadius: 6,
    background: `${COLORS.m1}08`,
    border: `1px solid ${COLORS.m1}30`,
    fontSize: 13,
    lineHeight: 1.6,
    color: COLORS.textMuted,
  },
  footer: {
    padding: "12px 20px 16px",
    borderTop: `1px solid ${COLORS.border}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  submitBtn: {
    padding: "10px 24px",
    borderRadius: 6,
    border: "none",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
    transition: "all 0.15s",
  },
  score: {
    fontSize: 14,
    fontWeight: 600,
  },
};

export default function QuizPanel({
  questions,
  topicId,
  savedAnswers,
  savedSubmitted,
  onSubmit,
}) {
  const [answers, setAnswers] = useState(
    savedAnswers || questions.map(() => -1),
  );
  const [submitted, setSubmitted] = useState(savedSubmitted || false);

  const allAnswered = answers.every((a) => a !== -1);

  const handleSelect = (qIndex, optIndex) => {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qIndex] = optIndex;
      return next;
    });
  };

  const handleSubmit = () => {
    if (!allAnswered || submitted) return;
    setSubmitted(true);
    const correctCount = answers.reduce(
      (sum, ans, i) => sum + (ans === questions[i].answer ? 1 : 0),
      0,
    );
    const xpGained = correctCount * 10;
    onSubmit(answers, xpGained);
  };

  const correctCount = submitted
    ? answers.reduce(
        (sum, ans, i) => sum + (ans === questions[i].answer ? 1 : 0),
        0,
      )
    : 0;

  const getOptionStyle = (qIndex, optIndex) => {
    const isSelected = answers[qIndex] === optIndex;
    const isCorrect = questions[qIndex].answer === optIndex;

    if (!submitted) {
      return isSelected
        ? { ...styles.option, ...styles.optionSelected }
        : styles.option;
    }

    // Submitted
    let style = { ...styles.option, ...styles.optionDisabled };
    if (isCorrect) {
      style = { ...style, ...styles.optionCorrect };
    } else if (isSelected && !isCorrect) {
      style = { ...style, ...styles.optionWrong };
    }
    return style;
  };

  const submitBtnStyle = {
    ...styles.submitBtn,
    background: allAnswered ? COLORS.m1 : COLORS.textDim,
    color: allAnswered ? "#000" : COLORS.textMuted,
    cursor: allAnswered ? "pointer" : "not-allowed",
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.title}>
          <span>🧠</span>
          <span>Teste seu Conhecimento</span>
        </div>
      </div>

      {questions.map((q, qIndex) => (
        <div key={`${topicId}-q-${qIndex}`} style={styles.question}>
          <div style={styles.questionText}>
            <span style={styles.questionNumber}>{qIndex + 1}.</span>
            {q.q}
          </div>
          <div style={styles.options}>
            {q.options.map((opt, optIndex) => (
              <button
                key={optIndex}
                style={getOptionStyle(qIndex, optIndex)}
                onClick={() => handleSelect(qIndex, optIndex)}
                disabled={submitted}
              >
                {opt}
              </button>
            ))}
          </div>
          {submitted && (
            <div style={styles.explanation}>💡 {q.explanation}</div>
          )}
        </div>
      ))}

      <div style={styles.footer}>
        {submitted ? (
          <span
            style={{
              ...styles.score,
              color:
                correctCount === questions.length
                  ? COLORS.success
                  : COLORS.warning,
            }}
          >
            {correctCount} / {questions.length} corretas — +{correctCount * 10}{" "}
            XP
          </span>
        ) : (
          <button
            style={submitBtnStyle}
            onClick={handleSubmit}
            disabled={!allAnswered}
          >
            Confirmar Respostas
          </button>
        )}
      </div>
    </div>
  );
}
