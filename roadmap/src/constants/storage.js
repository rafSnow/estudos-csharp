export const STORAGE = {
  currentTopic: "phase1:current_topic",
  completed: "phase1:completed_topics",
  xp: "phase1:xp",
  checklist: (id) => `phase1:checklist_${id}`,
  quiz: (id) => `phase1:quiz_${id}`,
  notes: (id) => `phase1:notes_${id}`,
  timer: (id) => `phase1:timer_${id}`,

  phase2Completed: "phase2:completed_topics",
  phase2Xp: "phase2:xp",
  phase2Unlocked: "phase2:unlocked",
  checklist2: (id) => `phase2:checklist_${id}`,
  quiz2: (id) => `phase2:quiz_${id}`,
  notes2: (id) => `phase2:notes_${id}`,
  timer2: (id) => `phase2:timer_${id}`,

  phase3Completed: "phase3:completed_topics",
  phase3Xp: "phase3:xp",
  phase3Unlocked: "phase3:unlocked",
  checklist3: (id) => `phase3:checklist_${id}`,
  quiz3: (id) => `phase3:quiz_${id}`,
  notes3: (id) => `phase3:notes_${id}`,
  timer3: (id) => `phase3:timer_${id}`,

  phase4Completed: "phase4:completed_topics",
  phase4Xp: "phase4:xp",
  phase4Unlocked: "phase4:unlocked",
  checklist4: (id) => `phase4:checklist_${id}`,
  quiz4: (id) => `phase4:quiz_${id}`,
  notes4: (id) => `phase4:notes_${id}`,
  timer4: (id) => `phase4:timer_${id}`,

  phase5Completed: "phase5:completed_topics",
  phase5Xp: "phase5:xp",
  phase5Unlocked: "phase5:unlocked",
  checklist5: (id) => `phase5:checklist_${id}`,
  quiz5: (id) => `phase5:quiz_${id}`,
  notes5: (id) => `phase5:notes_${id}`,
  timer5: (id) => `phase5:timer_${id}`,
};

const isPhase2Id = (id) => /^m[5-8]/.test(id);
const isPhase3Id = (id) => /^m(9|1[0-2])/.test(id);
const isPhase4Id = (id) => /^m1[3-6]/.test(id);
const isPhase5Id = (id) => /^m(17|18|19|20)/.test(id);

export function checklistKey(topicId) {
  if (isPhase5Id(topicId)) return STORAGE.checklist5(topicId);
  if (isPhase4Id(topicId)) return STORAGE.checklist4(topicId);
  if (isPhase3Id(topicId)) return STORAGE.checklist3(topicId);
  if (isPhase2Id(topicId)) return STORAGE.checklist2(topicId);
  return STORAGE.checklist(topicId);
}

export function quizKey(topicId) {
  if (isPhase5Id(topicId)) return STORAGE.quiz5(topicId);
  if (isPhase4Id(topicId)) return STORAGE.quiz4(topicId);
  if (isPhase3Id(topicId)) return STORAGE.quiz3(topicId);
  if (isPhase2Id(topicId)) return STORAGE.quiz2(topicId);
  return STORAGE.quiz(topicId);
}

export function notesKey(topicId) {
  if (isPhase5Id(topicId)) return STORAGE.notes5(topicId);
  if (isPhase4Id(topicId)) return STORAGE.notes4(topicId);
  if (isPhase3Id(topicId)) return STORAGE.notes3(topicId);
  if (isPhase2Id(topicId)) return STORAGE.notes2(topicId);
  return STORAGE.notes(topicId);
}

export function timerKey(moduleId) {
  if (isPhase5Id(moduleId)) return STORAGE.timer5(moduleId);
  if (isPhase4Id(moduleId)) return STORAGE.timer4(moduleId);
  if (isPhase3Id(moduleId)) return STORAGE.timer3(moduleId);
  if (isPhase2Id(moduleId)) return STORAGE.timer2(moduleId);
  return STORAGE.timer(moduleId);
}
