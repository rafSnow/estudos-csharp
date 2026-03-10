import ChecklistPanel from "./ChecklistPanel";
import CodeBlock from "./CodeBlock";
import NavigationBar from "./NavigationBar";
import NotesPanel from "./NotesPanel";
import QuizPanel from "./QuizPanel";
import TheoryPanel from "./TheoryPanel";
import TopicHeader from "./TopicHeader";

export default function TopicView({
  topic,
  module,
  completedTopics,
  currentIndex,
  totalTopics,
  canAdvance,
  onPrevious,
  onNext,
  checklist,
  onChecklistChange,
  quizAnswers,
  quizSubmitted,
  onQuizSubmit,
  notes,
  onNotesChange,
}) {
  return (
    <div>
      <TopicHeader
        topic={topic}
        module={module}
        completedTopics={completedTopics}
      />
      <TheoryPanel theory={topic.theory} />
      <CodeBlock
        code={topic.code}
        language={topic.codeLanguage}
        runCommand={topic.runCommand}
      />
      <ChecklistPanel
        items={topic.checklist}
        topicId={topic.id}
        checked={checklist}
        onChange={onChecklistChange}
      />
      <QuizPanel
        questions={topic.quiz}
        topicId={topic.id}
        savedAnswers={quizAnswers}
        savedSubmitted={quizSubmitted}
        onSubmit={onQuizSubmit}
      />
      <NotesPanel topicId={topic.id} value={notes} onChange={onNotesChange} />
      <NavigationBar
        currentIndex={currentIndex}
        totalTopics={totalTopics}
        canAdvance={canAdvance}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
  );
}
