import { useState } from "react";
import { COLORS } from "../../constants/colors";
import TopicItem from "./TopicItem";

export default function ModuleSection({
  module,
  currentTopicId,
  completedTopics,
  allTopics,
  isTopicUnlocked,
  onTopicClick,
}) {
  const [expanded, setExpanded] = useState(true);
  const [headerHovered, setHeaderHovered] = useState(false);

  const completedCount = module.topics.filter((t) =>
    completedTopics.includes(t.id),
  ).length;
  const total = module.topics.length;

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 12px",
    cursor: "pointer",
    userSelect: "none",
    borderLeft: `3px solid ${module.color}`,
    background: headerHovered ? `${module.color}10` : "transparent",
    transition: "background 0.15s",
  };

  const titleStyle = {
    fontSize: 13,
    fontWeight: 600,
    color: COLORS.text,
    flex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };

  const countStyle = {
    fontSize: 11,
    color: completedCount === total ? COLORS.success : COLORS.textMuted,
    flexShrink: 0,
  };

  const chevronStyle = {
    fontSize: 10,
    color: COLORS.textMuted,
    transition: "transform 0.15s",
    transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
    flexShrink: 0,
  };

  const listStyle = {
    display: expanded ? "flex" : "none",
    flexDirection: "column",
    gap: 2,
    paddingBottom: 4,
  };

  return (
    <div>
      <div
        style={headerStyle}
        onClick={() => setExpanded(!expanded)}
        onMouseEnter={() => setHeaderHovered(true)}
        onMouseLeave={() => setHeaderHovered(false)}
      >
        <span style={{ fontSize: 14 }}>{module.icon}</span>
        <span style={titleStyle}>{module.title}</span>
        {completedCount === total ? (
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: COLORS.success,
              background: `${COLORS.success}15`,
              padding: "2px 6px",
              borderRadius: 4,
              letterSpacing: 0.5,
              flexShrink: 0,
            }}
          >
            ✓ COMPLETO
          </span>
        ) : (
          <span style={countStyle}>
            {completedCount}/{total}
          </span>
        )}
        <span style={chevronStyle}>▶</span>
      </div>
      <div style={listStyle}>
        {module.topics.map((topic) => (
          <TopicItem
            key={topic.id}
            topic={topic}
            isActive={topic.id === currentTopicId}
            isCompleted={completedTopics.includes(topic.id)}
            isLocked={!isTopicUnlocked(topic.id, completedTopics, allTopics)}
            moduleColor={module.color}
            onClick={onTopicClick}
          />
        ))}
      </div>
    </div>
  );
}
