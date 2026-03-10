import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import DashboardModal from "./components/Dashboard/DashboardModal";
import Header from "./components/Header/Header";
import Toast from "./components/shared/Toast";
import Sidebar from "./components/Sidebar/Sidebar";
import TopicView from "./components/TopicView/TopicView";
import { COLORS } from "./constants/colors";
import {
  STORAGE,
  checklistKey,
  notesKey,
  quizKey,
  timerKey,
} from "./constants/storage";
import { ALL_PHASES } from "./data/index";
import useStorage from "./hooks/useStorage";
import useTimer from "./hooks/useTimer";
import useToast from "./hooks/useToast";
import useXP from "./hooks/useXP";
import {
  getAllTopicsFlat,
  getModuleByTopicId,
  getTopicById,
  isTopicComplete,
  isTopicUnlocked,
} from "./utils/topics";

const styles = {
  layout: {
    display: "flex",
    marginTop: 56,
    height: "calc(100vh - 56px)",
    background: COLORS.bg,
    color: COLORS.text,
    fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
  },
  main: {
    flex: 1,
    height: "calc(100vh - 56px)",
    overflowY: "auto",
    padding: 32,
  },
  mainInner: {
    maxWidth: 820,
    margin: "0 auto",
  },
  placeholder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "60vh",
    color: COLORS.textMuted,
    fontSize: 16,
  },
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: COLORS.bg,
    color: COLORS.textMuted,
    fontSize: 16,
    fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
  },
};

export default function App() {
  const { loading, initialState, saveItem } = useStorage();
  const { toasts, addToast, removeToast } = useToast();

  const allModules = useMemo(() => ALL_PHASES.flatMap((p) => p.data), []);
  const allTopics = useMemo(() => getAllTopicsFlat(allModules), [allModules]);

  const [currentTopicId, setCurrentTopicId] = useState(null);
  const [completedTopics, setCompletedTopics] = useState([]);
  const [checklists, setChecklists] = useState({});
  const [quizzes, setQuizzes] = useState({});
  const [notes, setNotes] = useState({});
  const [hydrated, setHydrated] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [justUnlockedPhase, setJustUnlockedPhase] = useState(null);

  const prevPhase1DoneRef = useRef(false);
  const prevPhase2DoneRef = useRef(false);
  const prevPhase3DoneRef = useRef(false);
  const prevPhase4DoneRef = useRef(false);

  const currentModule = currentTopicId
    ? getModuleByTopicId(currentTopicId, allModules)
    : null;

  // Determine current phase from current topic
  const currentPhase = useMemo(() => {
    if (!currentTopicId) return ALL_PHASES[0];
    for (const phase of ALL_PHASES) {
      if (phase.data.some((m) => m.topics.some((t) => t.id === currentTopicId)))
        return phase;
    }
    return ALL_PHASES[0];
  }, [currentTopicId]);

  const { xp, awardChecklistXP, awardQuizXP, awardModuleXP, initAwarded } =
    useXP(initialState?.xp || 0, saveItem, addToast);

  const timers = useTimer(
    currentModule?.id || null,
    initialState?.timers || {},
    saveItem,
  );

  // Hydrate state from storage once loaded
  useEffect(() => {
    if (loading || hydrated || !initialState) return;
    setCurrentTopicId(initialState.currentTopic);
    setCompletedTopics(initialState.completed);
    setChecklists(initialState.checklists);
    setQuizzes(initialState.quizzes);
    setNotes(initialState.notes);

    // Init XP awarded sets from all modules
    initAwarded(
      initialState.completed,
      initialState.quizzes,
      initialState.checklists,
      allModules,
    );

    // Track initial phase completion states for unlock detection
    const phase1Topics = getAllTopicsFlat(ALL_PHASES[0].data);
    prevPhase1DoneRef.current = phase1Topics.every((t) =>
      initialState.completed.includes(t.id),
    );
    const phase2Topics = getAllTopicsFlat(ALL_PHASES[1].data);
    prevPhase2DoneRef.current = phase2Topics.every((t) =>
      initialState.completed.includes(t.id),
    );
    const phase3Topics = getAllTopicsFlat(ALL_PHASES[2].data);
    prevPhase3DoneRef.current = phase3Topics.every((t) =>
      initialState.completed.includes(t.id),
    );
    const phase4Topics = getAllTopicsFlat(ALL_PHASES[3].data);
    prevPhase4DoneRef.current = phase4Topics.every((t) =>
      initialState.completed.includes(t.id),
    );

    setHydrated(true);
  }, [loading, hydrated, initialState, initAwarded, allModules]);

  // Persist each slice when it changes (skip until hydrated)
  useEffect(() => {
    if (!hydrated) return;
    saveItem(STORAGE.currentTopic, currentTopicId);
  }, [currentTopicId, hydrated, saveItem]);

  // Persist completed topics split by phase
  useEffect(() => {
    if (!hydrated) return;
    const p1 = completedTopics.filter((id) => /^m[1-4]/.test(id));
    const p2 = completedTopics.filter((id) => /^m[5-8]/.test(id));
    const p3 = completedTopics.filter((id) => /^m(9|1[0-2])/.test(id));
    const p4 = completedTopics.filter((id) => /^m1[3-6]/.test(id));
    const p5 = completedTopics.filter((id) => /^m(17|18|19|20)/.test(id));
    saveItem(STORAGE.completed, p1);
    saveItem(STORAGE.phase2Completed, p2);
    saveItem(STORAGE.phase3Completed, p3);
    saveItem(STORAGE.phase4Completed, p4);
    saveItem(STORAGE.phase5Completed, p5);
  }, [completedTopics, hydrated, saveItem]);

  useEffect(() => {
    if (!hydrated) return;
    for (const [id, val] of Object.entries(checklists)) {
      saveItem(checklistKey(id), val);
    }
  }, [checklists, hydrated, saveItem]);

  useEffect(() => {
    if (!hydrated) return;
    for (const [id, val] of Object.entries(quizzes)) {
      saveItem(quizKey(id), val);
    }
  }, [quizzes, hydrated, saveItem]);

  useEffect(() => {
    if (!hydrated) return;
    for (const [id, val] of Object.entries(notes)) {
      saveItem(notesKey(id), val);
    }
  }, [notes, hydrated, saveItem]);

  const currentTopic = currentTopicId
    ? getTopicById(currentTopicId, allTopics)
    : null;
  const currentIndex = currentTopic
    ? allTopics.findIndex((t) => t.id === currentTopic.id)
    : -1;
  const canAdvance = currentTopicId
    ? isTopicComplete(currentTopicId, checklists, quizzes)
    : false;

  const handleChecklistChange = useCallback(
    (index, value) => {
      if (!currentTopicId || !currentTopic) return;
      setChecklists((prev) => {
        const current =
          prev[currentTopicId] || currentTopic.checklist.map(() => false);
        const next = [...current];
        next[index] = value;

        // Check if all items now complete → award XP
        if (next.every(Boolean)) {
          awardChecklistXP(currentTopicId);
        }

        return { ...prev, [currentTopicId]: next };
      });
    },
    [currentTopicId, currentTopic, awardChecklistXP],
  );

  const handleQuizSubmit = useCallback(
    (answers, xpGained) => {
      if (!currentTopicId) return;
      const correctCount = currentTopic.quiz.reduce(
        (sum, q, i) => sum + (answers[i] === q.answer ? 1 : 0),
        0,
      );
      setQuizzes((prev) => ({
        ...prev,
        [currentTopicId]: { answers, submitted: true },
      }));
      awardQuizXP(currentTopicId, correctCount);
    },
    [currentTopicId, currentTopic, awardQuizXP],
  );

  const handleNotesChange = useCallback(
    (text) => {
      if (!currentTopicId) return;
      setNotes((prev) => ({ ...prev, [currentTopicId]: text }));
    },
    [currentTopicId],
  );

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentTopicId(allTopics[currentIndex - 1].id);
    }
  }, [currentIndex, allTopics]);

  const handleNext = useCallback(() => {
    if (currentIndex < allTopics.length - 1 && canAdvance) {
      const nextId = allTopics[currentIndex + 1].id;

      setCompletedTopics((prev) => {
        if (prev.includes(currentTopicId)) return prev;
        const updated = [...prev, currentTopicId];

        // Check module completion
        if (currentModule) {
          const allModuleTopics = currentModule.topics;
          const allDone = allModuleTopics.every(
            (t) => t.id === currentTopicId || updated.includes(t.id),
          );
          if (allDone) {
            awardModuleXP(currentModule.id, currentModule.title);
          }
        }

        // Check phase 2 unlock
        if (!prevPhase1DoneRef.current) {
          const phase1Topics = getAllTopicsFlat(ALL_PHASES[0].data);
          const phase1Done = phase1Topics.every(
            (t) => t.id === currentTopicId || updated.includes(t.id),
          );
          if (phase1Done) {
            prevPhase1DoneRef.current = true;
            addToast(
              "🎉 Fase 2 Desbloqueada! Web API & Banco de Dados",
              "unlock",
            );
            setJustUnlockedPhase("phase2");
            setTimeout(() => setJustUnlockedPhase(null), 2000);
          }
        }

        // Check phase 3 unlock
        if (!prevPhase2DoneRef.current && prevPhase1DoneRef.current) {
          const phase2Topics = getAllTopicsFlat(ALL_PHASES[1].data);
          const phase2Done = phase2Topics.every(
            (t) => t.id === currentTopicId || updated.includes(t.id),
          );
          if (phase2Done) {
            prevPhase2DoneRef.current = true;
            addToast(
              "🎉 Fase 3 Desbloqueada! Qualidade & Arquitetura",
              "unlock",
            );
            setJustUnlockedPhase("phase3");
            setTimeout(() => setJustUnlockedPhase(null), 2000);
          }
        }

        // Check phase 4 unlock
        if (!prevPhase3DoneRef.current && prevPhase2DoneRef.current) {
          const phase3Topics = getAllTopicsFlat(ALL_PHASES[2].data);
          const phase3Done = phase3Topics.every(
            (t) => t.id === currentTopicId || updated.includes(t.id),
          );
          if (phase3Done) {
            prevPhase3DoneRef.current = true;
            addToast("🎉 Fase 4 Desbloqueada! Testes Automatizados", "unlock");
            setJustUnlockedPhase("phase4");
            setTimeout(() => setJustUnlockedPhase(null), 2000);
          }
        }

        // Check phase 5 unlock
        if (!prevPhase4DoneRef.current && prevPhase3DoneRef.current) {
          const phase4Topics = getAllTopicsFlat(ALL_PHASES[3].data);
          const phase4Done = phase4Topics.every(
            (t) => t.id === currentTopicId || updated.includes(t.id),
          );
          if (phase4Done) {
            prevPhase4DoneRef.current = true;
            addToast(
              "🎉 Fase 5 Desbloqueada! Segurança & Autenticação",
              "unlock",
            );
            setJustUnlockedPhase("phase5");
            setTimeout(() => setJustUnlockedPhase(null), 2000);
          }
        }

        addToast("🔓 Novo tópico desbloqueado", "unlock");
        return updated;
      });

      setCurrentTopicId(nextId);
    }
  }, [
    currentIndex,
    allTopics,
    canAdvance,
    currentTopicId,
    currentModule,
    awardModuleXP,
    addToast,
  ]);

  const handleReset = useCallback(() => {
    setCurrentTopicId(null);
    setCompletedTopics([]);
    setChecklists({});
    setQuizzes({});
    setNotes({});
    setDashboardOpen(false);
    prevPhase1DoneRef.current = false;
    prevPhase2DoneRef.current = false;
    prevPhase3DoneRef.current = false;
    prevPhase4DoneRef.current = false;

    // Clear all storage keys
    saveItem(STORAGE.currentTopic, null);
    saveItem(STORAGE.completed, []);
    saveItem(STORAGE.phase2Completed, []);
    saveItem(STORAGE.phase3Completed, []);
    saveItem(STORAGE.phase4Completed, []);
    saveItem(STORAGE.phase5Completed, []);
    saveItem(STORAGE.xp, 0);

    for (const phase of ALL_PHASES) {
      for (const mod of phase.data) {
        for (const t of mod.topics) {
          saveItem(checklistKey(t.id), undefined);
          saveItem(quizKey(t.id), undefined);
          saveItem(notesKey(t.id), undefined);
        }
      }
    }
    for (const phase of ALL_PHASES) {
      for (const mod of phase.data) {
        saveItem(timerKey(mod.id), undefined);
      }
    }
    addToast("Progresso resetado com sucesso", "success");
  }, [saveItem, addToast]);

  if (loading || !hydrated) {
    return <div style={styles.loading}>Carregando progresso...</div>;
  }

  return (
    <>
      <Header
        timerSeconds={currentModule ? timers[currentModule.id] || 0 : 0}
        moduleColor={currentModule?.color}
        xp={xp}
        completedCount={completedTopics.length}
        totalTopics={allTopics.length}
        currentPhase={currentPhase}
        onDashboardOpen={() => setDashboardOpen(true)}
      />
      <div style={styles.layout}>
        <Sidebar
          allPhases={ALL_PHASES}
          currentTopicId={currentTopicId}
          completedTopics={completedTopics}
          allTopics={allTopics}
          isTopicUnlocked={isTopicUnlocked}
          onTopicClick={setCurrentTopicId}
          justUnlockedPhase={justUnlockedPhase}
        />
        <main style={styles.main}>
          <div style={styles.mainInner}>
            {currentTopic && currentModule ? (
              <TopicView
                key={currentTopicId}
                topic={currentTopic}
                module={currentModule}
                completedTopics={completedTopics}
                currentIndex={currentIndex}
                totalTopics={allTopics.length}
                canAdvance={canAdvance}
                onPrevious={handlePrevious}
                onNext={handleNext}
                checklist={checklists[currentTopicId]}
                onChecklistChange={handleChecklistChange}
                quizAnswers={quizzes[currentTopicId]?.answers}
                quizSubmitted={quizzes[currentTopicId]?.submitted}
                onQuizSubmit={handleQuizSubmit}
                notes={notes[currentTopicId]}
                onNotesChange={handleNotesChange}
              />
            ) : (
              <div style={styles.placeholder}>
                Selecione um tópico para começar
              </div>
            )}
          </div>
        </main>
      </div>
      <Toast toasts={toasts} onDismiss={removeToast} />
      {dashboardOpen && (
        <DashboardModal
          modules={allModules}
          completedTopics={completedTopics}
          checklists={checklists}
          quizzes={quizzes}
          notes={notes}
          timers={timers}
          xp={xp}
          onClose={() => setDashboardOpen(false)}
          onReset={handleReset}
        />
      )}
    </>
  );
}
