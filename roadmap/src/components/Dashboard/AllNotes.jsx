import { COLORS } from "../../constants/colors";

const styles = {
  moduleGroup: {
    marginBottom: 24,
  },
  moduleTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: COLORS.text,
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  noteCard: {
    padding: "12px 16px",
    borderRadius: 6,
    border: `1px solid ${COLORS.border}`,
    background: COLORS.surface2,
    marginBottom: 8,
  },
  noteTitle: {
    fontSize: 13,
    fontWeight: 600,
    color: COLORS.text,
    marginBottom: 6,
  },
  noteText: {
    fontSize: 13,
    lineHeight: 1.6,
    color: COLORS.textMuted,
    whiteSpace: "pre-wrap",
  },
  empty: {
    textAlign: "center",
    padding: "40px 0",
    color: COLORS.textMuted,
    fontSize: 14,
  },
};

export default function AllNotes({ modules, notes }) {
  const hasAny = Object.values(notes).some((n) => n && n.trim());

  if (!hasAny) {
    return (
      <div style={styles.empty}>
        📝 Nenhuma anotação ainda. Comece a escrever nos tópicos!
      </div>
    );
  }

  return (
    <div>
      {modules.map((mod) => {
        const topicsWithNotes = mod.topics.filter(
          (t) => notes[t.id] && notes[t.id].trim(),
        );
        if (topicsWithNotes.length === 0) return null;

        return (
          <div key={mod.id} style={styles.moduleGroup}>
            <div style={styles.moduleTitle}>
              <span>{mod.icon}</span>
              <span>{mod.title}</span>
            </div>
            {topicsWithNotes.map((topic) => (
              <div key={topic.id} style={styles.noteCard}>
                <div style={styles.noteTitle}>{topic.title}</div>
                <div style={styles.noteText}>{notes[topic.id]}</div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
