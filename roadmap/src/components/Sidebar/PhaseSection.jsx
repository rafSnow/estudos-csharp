import { useEffect, useRef, useState } from "react";
import { COLORS } from "../../constants/colors";
import ModuleSection from "./ModuleSection";

export default function PhaseSection({
  phase,
  phaseIndex,
  isUnlocked,
  currentTopicId,
  completedTopics,
  allTopicsForPhase,
  isTopicUnlocked,
  onTopicClick,
  justUnlocked,
}) {
  const [expanded, setExpanded] = useState(isUnlocked);
  const [headerHovered, setHeaderHovered] = useState(false);
  const headerRef = useRef(null);

  const phaseTopics = phase.data.flatMap((m) => m.topics);
  const completedCount = phaseTopics.filter((t) =>
    completedTopics.includes(t.id),
  ).length;
  const total = phaseTopics.length;
  const isComplete = completedCount === total && total > 0;

  // Auto-expand & scroll when just unlocked
  useEffect(() => {
    if (justUnlocked && headerRef.current) {
      setExpanded(true);
      headerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [justUnlocked]);

  const handleToggle = () => {
    if (!isUnlocked) return;
    setExpanded(!expanded);
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 12px",
    cursor: isUnlocked ? "pointer" : "not-allowed",
    userSelect: "none",
    borderBottom: `1px solid ${COLORS.border}`,
    background:
      headerHovered && isUnlocked ? `${phase.color}10` : "transparent",
    opacity: isUnlocked ? 1 : 0.5,
    transition: "background 0.15s, opacity 0.3s",
    animation: justUnlocked ? "phaseUnlock 1s ease" : "none",
  };

  const titleStyle = {
    fontSize: 12,
    fontWeight: 700,
    color: phase.color,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    flex: 1,
  };

  const badgeStyle = isComplete
    ? {
        fontSize: 10,
        fontWeight: 700,
        color: COLORS.success,
        background: `${COLORS.success}15`,
        padding: "2px 6px",
        borderRadius: 4,
        letterSpacing: 0.5,
      }
    : {
        fontSize: 11,
        color: COLORS.textMuted,
        fontWeight: 600,
      };

  const chevronStyle = {
    fontSize: 10,
    color: COLORS.textMuted,
    transition: "transform 0.15s",
    transform: expanded && isUnlocked ? "rotate(90deg)" : "rotate(0deg)",
    flexShrink: 0,
  };

  return (
    <div>
      <style>{`
        @keyframes phaseUnlock {
          0% { outline: 2px solid ${phase.color}; outline-offset: -2px; }
          50% { outline: 2px solid ${phase.color}80; outline-offset: 2px; }
          100% { outline: 2px solid transparent; outline-offset: -2px; }
        }
      `}</style>
      <div
        ref={headerRef}
        style={headerStyle}
        onClick={handleToggle}
        onMouseEnter={() => setHeaderHovered(true)}
        onMouseLeave={() => setHeaderHovered(false)}
      >
        <span style={{ fontSize: 12 }}>
          {!isUnlocked ? "🔒" : isComplete ? "✅" : "▶"}
        </span>
        <span style={titleStyle}>{phase.title}</span>
        <span style={badgeStyle}>
          {isComplete ? "CONCLUÍDA" : `${completedCount}/${total}`}
        </span>
        {isUnlocked && <span style={chevronStyle}>▶</span>}
      </div>
      {expanded && isUnlocked && (
        <div>
          {phase.data.map((mod) => (
            <ModuleSection
              key={mod.id}
              module={mod}
              currentTopicId={currentTopicId}
              completedTopics={completedTopics}
              allTopics={allTopicsForPhase}
              isTopicUnlocked={isTopicUnlocked}
              onTopicClick={onTopicClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}
