import { COLORS } from "../../constants/colors";

const styles = {
  container: {
    marginBottom: 24,
  },
  breadcrumb: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 14,
    color: COLORS.textMuted,
    marginBottom: 8,
  },
  separator: {
    color: COLORS.textDim,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: COLORS.text,
    margin: "4px 0 12px",
  },
  meta: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    marginBottom: 8,
  },
  weekTag: {
    fontSize: 12,
    fontWeight: 600,
    padding: "3px 10px",
    borderRadius: 12,
    letterSpacing: 0.5,
  },
  progressWrap: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    flex: 1,
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
    maxWidth: 120,
    overflow: "hidden",
  },
};

export default function TopicHeader({ topic, module, completedTopics }) {
  const completedCount = module.topics.filter((t) =>
    completedTopics.includes(t.id),
  ).length;
  const total = module.topics.length;
  const pct = (completedCount / total) * 100;

  const weekTagStyle = {
    ...styles.weekTag,
    background: `${module.color}20`,
    color: module.color,
  };

  const progressBarInner = {
    height: "100%",
    width: `${pct}%`,
    background: module.color,
    borderRadius: 2,
    transition: "width 0.3s ease",
  };

  return (
    <div style={styles.container}>
      <div style={styles.breadcrumb}>
        <span>{module.icon}</span>
        <span style={{ color: module.color }}>{module.title}</span>
        <span style={styles.separator}>›</span>
        <span style={{ color: COLORS.text }}>{topic.title}</span>
      </div>
      <div style={styles.meta}>
        <span style={weekTagStyle}>{module.week}</span>
        <div style={styles.progressWrap}>
          <span style={styles.progressText}>
            {completedCount}/{total} tópicos
          </span>
          <div style={styles.progressBarOuter}>
            <div style={progressBarInner} />
          </div>
        </div>
      </div>
    </div>
  );
}
