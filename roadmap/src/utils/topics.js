export function isTopicUnlocked(topicId, completedTopics, allTopics) {
  const index = allTopics.findIndex((t) => t.id === topicId);
  if (index === 0) return true;
  const prevTopic = allTopics[index - 1];
  return completedTopics.includes(prevTopic.id);
}

export function isTopicComplete(topicId, checklists, quizzes) {
  const cl = checklists[topicId] || [];
  const qz = quizzes[topicId] || {};
  const checklistDone = cl.length > 0 && cl.every(Boolean);
  const quizDone = qz.submitted === true;
  return checklistDone && quizDone;
}

export function getAllTopicsFlat(fase1Data) {
  return fase1Data.flatMap((m) => m.topics);
}

export function getTopicById(id, allTopics) {
  return allTopics.find((t) => t.id === id);
}

export function getModuleByTopicId(topicId, fase1Data) {
  return fase1Data.find((m) => m.topics.some((t) => t.id === topicId));
}

export function getPhaseProgress(phaseData, completedTopics) {
  const allTopics = phaseData.flatMap((m) => m.topics);
  const done = allTopics.filter((t) => completedTopics.includes(t.id)).length;
  return { done, total: allTopics.length };
}

export function isPhaseUnlocked(phaseIndex, allPhases, completedTopics) {
  if (phaseIndex === 0) return true;
  const prevPhase = allPhases[phaseIndex - 1];
  const prevTopics = prevPhase.flatMap((m) => m.topics);
  return prevTopics.every((t) => completedTopics.includes(t.id));
}
