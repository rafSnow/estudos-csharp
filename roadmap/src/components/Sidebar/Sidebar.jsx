import { COLORS } from "../../constants/colors";
import { getAllTopicsFlat } from "../../utils/topics";
import PhaseSection from "./PhaseSection";

const styles = {
  sidebar: {
    width: 220,
    minWidth: 220,
    height: "calc(100vh - 56px)",
    overflowY: "auto",
    background: COLORS.surface,
    borderRight: `1px solid ${COLORS.border}`,
    display: "flex",
    flexDirection: "column",
  },
};

export default function Sidebar({
  allPhases,
  currentTopicId,
  completedTopics,
  allTopics,
  isTopicUnlocked,
  onTopicClick,
  justUnlockedPhase,
}) {
  return (
    <aside style={styles.sidebar}>
      {allPhases.map((phase, index) => {
        const prevPhase = index > 0 ? allPhases[index - 1] : null;
        const prevTopics = prevPhase ? getAllTopicsFlat(prevPhase.data) : [];
        const isUnlocked =
          index === 0 ||
          prevTopics.every((t) => completedTopics.includes(t.id));

        return (
          <PhaseSection
            key={phase.id}
            phase={phase}
            phaseIndex={index}
            isUnlocked={isUnlocked}
            currentTopicId={currentTopicId}
            completedTopics={completedTopics}
            allTopicsForPhase={allTopics}
            isTopicUnlocked={isTopicUnlocked}
            onTopicClick={onTopicClick}
            justUnlocked={justUnlockedPhase === phase.id}
          />
        );
      })}
    </aside>
  );
}
