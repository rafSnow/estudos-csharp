import { useCallback, useState } from "react";
import { COLORS } from "../../constants/colors";
import { highlightCode } from "../../utils/highlightCode";

const styles = {
  container: {
    marginBottom: 32,
    borderRadius: 8,
    overflow: "hidden",
    border: `1px solid ${COLORS.border}`,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 16px",
    background: COLORS.surface,
    borderBottom: `1px solid ${COLORS.border}`,
  },
  language: {
    fontSize: 12,
    fontWeight: 600,
    color: COLORS.textMuted,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  copyBtn: {
    fontSize: 12,
    fontWeight: 600,
    padding: "4px 12px",
    borderRadius: 4,
    border: `1px solid ${COLORS.border}`,
    background: "transparent",
    color: COLORS.textMuted,
    cursor: "pointer",
    transition: "all 0.15s",
    letterSpacing: 0.5,
  },
  copyBtnCopied: {
    color: COLORS.success,
    borderColor: COLORS.success,
  },
  codeWrap: {
    padding: "16px 20px",
    overflowX: "auto",
    background: "#060a10",
  },
  pre: {
    margin: 0,
    fontFamily: "'Cascadia Code', 'Fira Code', 'Consolas', monospace",
    fontSize: 13,
    lineHeight: 1.7,
    color: COLORS.text,
    whiteSpace: "pre",
    tabSize: 4,
  },
  runWrap: {
    padding: "8px 16px",
    background: COLORS.surface2,
    borderTop: `1px solid ${COLORS.border}`,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  runLabel: {
    fontSize: 12,
    color: COLORS.textDim,
    fontFamily: "'Cascadia Code', 'Fira Code', 'Consolas', monospace",
  },
  runCmd: {
    fontSize: 12,
    color: COLORS.m1,
    fontFamily: "'Cascadia Code', 'Fira Code', 'Consolas', monospace",
  },
};

export default function CodeBlock({ code, language, runCommand }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  const highlighted = highlightCode(code, language);

  const btnStyle = copied
    ? { ...styles.copyBtn, ...styles.copyBtnCopied }
    : styles.copyBtn;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.language}>{language}</span>
        <button style={btnStyle} onClick={handleCopy}>
          {copied ? "✓ COPIADO" : "COPIAR"}
        </button>
      </div>
      <div style={styles.codeWrap}>
        <pre
          style={styles.pre}
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </div>
      {runCommand && (
        <div style={styles.runWrap}>
          <span style={styles.runLabel}>$</span>
          <span style={styles.runCmd}>{runCommand}</span>
        </div>
      )}
    </div>
  );
}
