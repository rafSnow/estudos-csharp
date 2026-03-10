import { COLORS } from "../../constants/colors";

const styles = {
  container: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: COLORS.text,
    marginBottom: 16,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 1.8,
    color: COLORS.text,
    marginBottom: 16,
    fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
  },
  inlineCode: {
    fontFamily: "'Cascadia Code', 'Fira Code', 'Consolas', monospace",
    fontSize: 13,
    background: COLORS.surface2,
    color: COLORS.m1,
    padding: "2px 6px",
    borderRadius: 4,
    border: `1px solid ${COLORS.border}`,
  },
};

function renderTextWithInlineCode(text) {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      const code = part.slice(1, -1);
      return (
        <code key={i} style={styles.inlineCode}>
          {code}
        </code>
      );
    }
    return part;
  });
}

export default function TheoryPanel({ theory }) {
  const paragraphs = theory.split("\n\n");

  return (
    <div style={styles.container}>
      <div style={styles.sectionTitle}>
        <span>📖</span>
        <span>Teoria</span>
      </div>
      {paragraphs.map((p, i) => (
        <p key={i} style={styles.paragraph}>
          {renderTextWithInlineCode(p)}
        </p>
      ))}
    </div>
  );
}
