import { useState } from "react";
import { COLORS } from "../../constants/colors";

export default function TopicItem({
  topic,
  isActive,
  isCompleted,
  isLocked,
  moduleColor,
  onClick,
}) {
  const [hovered, setHovered] = useState(false);

  const icon = isLocked ? "🔒" : isCompleted ? "✅" : isActive ? "▶" : "○";

  const baseStyle = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "6px 12px 6px 20px",
    fontSize: 13,
    cursor: isLocked ? "not-allowed" : "pointer",
    opacity: isLocked ? 0.4 : 1,
    color: isActive
      ? COLORS.text
      : isCompleted
        ? COLORS.success
        : COLORS.textMuted,
    background: isActive
      ? `${moduleColor}12`
      : hovered && !isLocked
        ? `${COLORS.text}08`
        : "transparent",
    borderRadius: 4,
    transition: "background 0.15s, color 0.15s",
    userSelect: "none",
  };

  const handleClick = () => {
    if (!isLocked) onClick(topic.id);
  };

  return (
    <div
      style={baseStyle}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ fontSize: 12, flexShrink: 0 }}>{icon}</span>
      <span
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {topic.title}
      </span>
    </div>
  );
}
