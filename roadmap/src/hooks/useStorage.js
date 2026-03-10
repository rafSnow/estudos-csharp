import { useEffect, useRef, useState } from "react";
import {
  STORAGE,
  checklistKey,
  notesKey,
  quizKey,
  timerKey,
} from "../constants/storage";

function loadItem(key) {
  try {
    const raw = window.storage?.getItem(key);
    return raw != null ? JSON.parse(raw) : undefined;
  } catch {
    return undefined;
  }
}

function saveItem(key, value) {
  try {
    window.storage?.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore quota errors */
  }
}

const PHASE1_TOPIC_IDS = [
  "m1t1",
  "m1t2",
  "m1t3",
  "m1t4",
  "m2t1",
  "m2t2",
  "m2t3",
  "m2t4",
  "m3t1",
  "m3t2",
  "m3t3",
  "m3t4",
  "m4t1",
  "m4t2",
  "m4t3",
  "m4t4",
];

const PHASE2_TOPIC_IDS = [
  "m5t1",
  "m5t2",
  "m5t3",
  "m5t4",
  "m6t1",
  "m6t2",
  "m6t3",
  "m6t4",
  "m7t1",
  "m7t2",
  "m7t3",
  "m7t4",
  "m8t1",
  "m8t2",
  "m8t3",
  "m8t4",
  "m8proj",
];

const PHASE3_TOPIC_IDS = [
  "m9t1",
  "m9t2",
  "m9t3",
  "m9t4",
  "m10t1",
  "m10t2",
  "m10t3",
  "m10t4",
  "m11t1",
  "m11t2",
  "m11t3",
  "m11t4",
  "m12t1",
  "m12t2",
  "m12t3",
  "m12t4",
  "m12proj",
];

const PHASE4_TOPIC_IDS = [
  "m13t1",
  "m13t2",
  "m13t3",
  "m13t4",
  "m14t1",
  "m14t2",
  "m14t3",
  "m14t4",
  "m15t1",
  "m15t2",
  "m15t3",
  "m15t4",
  "m16t1",
  "m16t2",
  "m16t3",
  "m16t4",
  "m16proj",
];

const PHASE5_TOPIC_IDS = [
  "m17t1",
  "m17t2",
  "m17t3",
  "m17t4",
  "m18t1",
  "m18t2",
  "m18t3",
  "m18t4",
  "m19t1",
  "m19t2",
  "m19t3",
  "m19t4",
  "m20t1",
  "m20t2",
  "m20t3",
  "m20t4",
  "m20proj",
];

const PHASE1_MODULE_IDS = ["m1", "m2", "m3", "m4"];
const PHASE2_MODULE_IDS = ["m5", "m6", "m7", "m8"];
const PHASE3_MODULE_IDS = ["m9", "m10", "m11", "m12"];
const PHASE4_MODULE_IDS = ["m13", "m14", "m15", "m16"];
const PHASE5_MODULE_IDS = ["m17", "m18", "m19", "m20"];

export default function useStorage() {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const currentTopic = loadItem(STORAGE.currentTopic) ?? null;
    const xp = loadItem(STORAGE.xp) ?? 0;

    // Load completed from all phases and merge
    const phase1Completed = loadItem(STORAGE.completed) ?? [];
    const phase2Completed = loadItem(STORAGE.phase2Completed) ?? [];
    const phase3Completed = loadItem(STORAGE.phase3Completed) ?? [];
    const phase4Completed = loadItem(STORAGE.phase4Completed) ?? [];
    const phase5Completed = loadItem(STORAGE.phase5Completed) ?? [];
    const completed = [
      ...phase1Completed,
      ...phase2Completed,
      ...phase3Completed,
      ...phase4Completed,
      ...phase5Completed,
    ];

    const checklists = {};
    const quizzes = {};
    const notes = {};
    const timers = {};

    const allTopicIds = [
      ...PHASE1_TOPIC_IDS,
      ...PHASE2_TOPIC_IDS,
      ...PHASE3_TOPIC_IDS,
      ...PHASE4_TOPIC_IDS,
      ...PHASE5_TOPIC_IDS,
    ];
    const allModuleIds = [
      ...PHASE1_MODULE_IDS,
      ...PHASE2_MODULE_IDS,
      ...PHASE3_MODULE_IDS,
      ...PHASE4_MODULE_IDS,
      ...PHASE5_MODULE_IDS,
    ];

    for (const id of allTopicIds) {
      const cl = loadItem(checklistKey(id));
      if (cl !== undefined) checklists[id] = cl;

      const qz = loadItem(quizKey(id));
      if (qz !== undefined) quizzes[id] = qz;

      const nt = loadItem(notesKey(id));
      if (nt !== undefined) notes[id] = nt;
    }

    for (const id of allModuleIds) {
      const tm = loadItem(timerKey(id));
      if (tm !== undefined) timers[id] = tm;
    }

    setState({
      currentTopic,
      completed,
      xp,
      checklists,
      quizzes,
      notes,
      timers,
    });
    setLoading(false);
  }, []);

  return { loading, initialState: state, saveItem, STORAGE };
}
