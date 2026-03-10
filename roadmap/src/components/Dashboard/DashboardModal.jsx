import { useState } from "react";
import { COLORS } from "../../constants/colors";
import AllNotes from "./AllNotes";
import CompletionSummary from "./CompletionSummary";
import TimeReport from "./TimeReport";
import WrongAnswers from "./WrongAnswers";

const TABS = [
  { key: "progress", label: "📊 Progresso" },
  { key: "notes", label: "📝 Anotações" },
  { key: "review", label: "❌ Revisar" },
  { key: "time", label: "⏱ Tempo" },
];

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 200,
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    width: "90vw",
    maxWidth: 780,
    maxHeight: "85vh",
    background: COLORS.surface,
    borderRadius: 12,
    border: `1px solid ${COLORS.border}`,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 24px",
    borderBottom: `1px solid ${COLORS.border}`,
    flexShrink: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    color: COLORS.text,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 6,
    border: `1px solid ${COLORS.border}`,
    background: "transparent",
    color: COLORS.textMuted,
    fontSize: 16,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.15s",
  },
  tabs: {
    display: "flex",
    gap: 0,
    borderBottom: `1px solid ${COLORS.border}`,
    flexShrink: 0,
  },
  tab: {
    flex: 1,
    padding: "12px 16px",
    fontSize: 13,
    fontWeight: 600,
    color: COLORS.textMuted,
    background: "transparent",
    border: "none",
    borderBottom: "2px solid transparent",
    cursor: "pointer",
    transition: "all 0.15s",
    textAlign: "center",
  },
  tabActive: {
    color: COLORS.text,
    borderBottomColor: COLORS.m1,
    background: `${COLORS.m1}08`,
  },
  body: {
    flex: 1,
    overflowY: "auto",
    padding: 24,
  },
  footer: {
    padding: "12px 24px",
    borderTop: `1px solid ${COLORS.border}`,
    display: "flex",
    justifyContent: "center",
    flexShrink: 0,
  },
  resetBtn: {
    padding: "8px 20px",
    borderRadius: 6,
    border: `1px solid ${COLORS.error}40`,
    background: "transparent",
    color: COLORS.error,
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.15s",
  },
};

export default function DashboardModal({
  modules,
  completedTopics,
  checklists,
  quizzes,
  notes,
  timers,
  xp,
  onClose,
  onReset,
}) {
  const [activeTab, setActiveTab] = useState("progress");

  const completedCount = completedTopics.length;

  const handleReset = () => {
    const confirmed = window.confirm(
      "Tem certeza que deseja resetar todo o progresso? Esta ação não pode ser desfeita.",
    );
    if (confirmed) onReset();
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <div style={styles.title}>Dashboard</div>
          <button
            style={styles.closeBtn}
            onClick={onClose}
            aria-label="Fechar dashboard"
          >
            ✕
          </button>
        </div>

        <div style={styles.tabs}>
          {TABS.map((tab) => (
            <button
              key={tab.key}
              style={{
                ...styles.tab,
                ...(activeTab === tab.key ? styles.tabActive : {}),
              }}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div style={styles.body}>
          {activeTab === "progress" && (
            <CompletionSummary
              modules={modules}
              completedTopics={completedTopics}
              checklists={checklists}
              quizzes={quizzes}
              timers={timers}
              xp={xp}
            />
          )}
          {activeTab === "notes" && (
            <AllNotes modules={modules} notes={notes} />
          )}
          {activeTab === "review" && (
            <WrongAnswers modules={modules} quizzes={quizzes} />
          )}
          {activeTab === "time" && (
            <TimeReport
              modules={modules}
              timers={timers}
              completedCount={completedCount}
            />
          )}
        </div>

        <div style={styles.footer}>
          <button style={styles.resetBtn} onClick={handleReset}>
            🗑️ Resetar Progresso
          </button>
        </div>
      </div>
    </div>
  );
}
