import { useCallback, useRef, useState } from "react";
import { STORAGE } from "../constants/storage";

export default function useXP(initialXP, saveItem, addToast) {
  const [xp, setXP] = useState(initialXP || 0);
  const awardedRef = useRef({
    checklists: new Set(),
    quizzes: new Set(),
    modules: new Set(),
  });

  const addXP = useCallback(
    (amount, message) => {
      setXP((prev) => {
        const next = prev + amount;
        saveItem(STORAGE.xp, next);
        return next;
      });
      if (message && addToast) {
        addToast(message, "xp");
      }
    },
    [saveItem, addToast],
  );

  const awardChecklistXP = useCallback(
    (topicId) => {
      if (awardedRef.current.checklists.has(topicId)) return;
      awardedRef.current.checklists.add(topicId);
      addXP(20, `+20 XP — Checklist completo!`);
    },
    [addXP],
  );

  const awardQuizXP = useCallback(
    (topicId, correctCount) => {
      if (awardedRef.current.quizzes.has(topicId)) return;
      awardedRef.current.quizzes.add(topicId);
      const gained = correctCount * 10;
      if (gained > 0) {
        addXP(gained, `+${gained} XP — Quiz concluído!`);
      }
    },
    [addXP],
  );

  const awardModuleXP = useCallback(
    (moduleId, moduleName) => {
      if (awardedRef.current.modules.has(moduleId)) return;
      awardedRef.current.modules.add(moduleId);
      addXP(100, `🎉 Módulo ${moduleName} Concluído! +100 XP`);
    },
    [addXP],
  );

  // Initialize awarded sets from already-completed data
  const initAwarded = useCallback(
    (completedTopics, quizzes, checklists, fase1Data) => {
      for (const topicId of completedTopics) {
        const cl = checklists[topicId];
        if (cl && cl.length > 0 && cl.every(Boolean)) {
          awardedRef.current.checklists.add(topicId);
        }
        const qz = quizzes[topicId];
        if (qz && qz.submitted) {
          awardedRef.current.quizzes.add(topicId);
        }
      }
      for (const mod of fase1Data) {
        const allDone = mod.topics.every((t) => completedTopics.includes(t.id));
        if (allDone) {
          awardedRef.current.modules.add(mod.id);
        }
      }
    },
    [],
  );

  return { xp, awardChecklistXP, awardQuizXP, awardModuleXP, initAwarded };
}
