import { useEffect, useRef, useState } from "react";
import { COLORS } from "../../constants/colors";

const styles = {
  container: {
    marginBottom: 32,
    borderRadius: 8,
    border: `1px solid ${COLORS.border}`,
    overflow: "hidden",
  },
  header: {
    padding: "16px 20px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    color: COLORS.text,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  saveIndicator: {
    fontSize: 12,
    transition: "opacity 0.3s",
  },
  body: {
    padding: "12px 20px 16px",
  },
  textarea: {
    width: "100%",
    minHeight: 80,
    padding: "12px 14px",
    borderRadius: 6,
    border: `1px solid ${COLORS.border}`,
    background: COLORS.surface2,
    color: COLORS.text,
    fontSize: 14,
    lineHeight: 1.6,
    fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
    resize: "vertical",
    outline: "none",
    transition: "border-color 0.15s",
    boxSizing: "border-box",
  },
};

export default function NotesPanel({ topicId, value, onChange }) {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const timerRef = useRef(null);

  const handleChange = (e) => {
    const text = e.target.value;
    onChange(text);
    setSaving(true);
    setSaved(false);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const indicatorText = saving ? "💾 Salvando..." : saved ? "✓ Salvo" : "";
  const indicatorColor = saving ? COLORS.warning : COLORS.success;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.title}>
          <span>📝</span>
          <span>Minhas Anotações</span>
        </div>
        <span
          style={{
            ...styles.saveIndicator,
            color: indicatorColor,
            opacity: saving || saved ? 1 : 0,
          }}
        >
          {indicatorText}
        </span>
      </div>
      <div style={styles.body}>
        <textarea
          style={styles.textarea}
          value={value || ""}
          onChange={handleChange}
          placeholder="Anote suas dúvidas, insights ou observações sobre este tópico..."
          onFocus={(e) => {
            e.target.style.borderColor = COLORS.m1;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = COLORS.border;
          }}
        />
      </div>
    </div>
  );
}
