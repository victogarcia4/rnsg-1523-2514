/** Clinical Field Notebook design: deck views create a paced editorial reading sequence with no slide-like clutter. */
import { useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Check, ChevronLeft, ChevronRight, CircleDot, Lightbulb, NotebookTabs } from "lucide-react";
import { courses } from "@/data/studyContent";

export default function DeckPage() {
  const { courseId, dayId, subjectId } = useParams<{ courseId: "1523" | "2514"; dayId: string; subjectId: string }>();
  const course = courses.find((item) => item.id === courseId) ?? courses[0];
  const day = course.days.find((item) => item.id === dayId) ?? course.days[0];
  const subject = day.subjects.find((item) => item.id === subjectId) ?? day.subjects[0];
  const [view, setView] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const steps = ["Core concept", "Visual summary", "Self-check"];
  const handlePrevious = () => setView((current) => Math.max(0, current - 1));
  const handleNext = () => setView((current) => Math.min(steps.length - 1, current + 1));
  return (
    <div className="deck-page">
      <div className="deck-topbar"><Link href={`/course/${course.id}/day/${day.id}`} className="back-link"><ArrowLeft size={16} /> Day {day.number}</Link><div className="deck-topbar__course">{course.title} <span>·</span> {subject.eyebrow}</div></div>
      <div className="deck-progress" aria-label="Deck progress">{steps.map((step, index) => <button key={step} onClick={() => setView(index)} className={index === view ? "is-active" : ""}><span>{String(index + 1).padStart(2, "0")}</span>{step}</button>)}</div>
      <section className="deck-frame">
        <aside className="deck-frame__margin"><NotebookTabs size={21} /><span>STUDY DECK</span><strong>{String(view + 1).padStart(2, "0")}</strong><i /> <p>{steps[view]}</p></aside>
        <div className="deck-frame__body">
          {view === 0 && <div className="deck-concept"><p className="eyebrow">{subject.eyebrow}</p><h1>{subject.title}</h1><div className="deck-concept__split"><div><p className="deck-concept__summary">{subject.summary}</p><div className="key-point-list">{subject.keyPoints.map((point, index) => <div key={point}><span>{String(index + 1).padStart(2, "0")}</span><p>{point}</p></div>)}</div></div><figure><img src={subject.image} alt={subject.imageAlt} /><figcaption>Visual context for this subject.</figcaption></figure></div></div>}
          {view === 1 && subject.infographic && <div className="deck-summary"><div><p className="eyebrow">SUMMARY VISUAL</p><h1>{subject.infographic.title}</h1><p>Use this visual after reading the subject deck to reinforce the major distinctions and cue patterns.</p><div className="summary-note"><Lightbulb size={19} /><span>Study prompt: explain the diagram’s takeaway in your own words before moving on.</span></div></div><figure><img src={subject.infographic.src} alt={subject.infographic.alt} /><figcaption>Provided course infographic</figcaption></figure></div>}
          {view === 2 && <div className="deck-activity"><div className="activity-kicker"><CircleDot size={18} /> ACTIVE RECALL · SUBJECT SELF-CHECK</div><h1>Pause and make a decision.</h1><p className="activity-question">{subject.activity.prompt}</p><div className="choice-list">{subject.activity.choices.map((choice, index) => <button key={choice} onClick={() => setSelected(index)} className={`choice-button ${selected === index ? "is-selected" : ""} ${selected !== null && index === subject.activity.answer ? "is-correct" : ""}`}><span>{String.fromCharCode(65 + index)}</span>{choice}{selected !== null && index === subject.activity.answer && <Check size={17} />}</button>)}</div>{selected !== null && <div className="rationale-card"><p className="eyebrow">RATIONALE</p><p>{subject.activity.rationale}</p></div>}</div>}
        </div>
      </section>
      <div className="deck-controls"><button onClick={handlePrevious} disabled={view === 0}><ChevronLeft size={18} /> Previous</button><span>{String(view + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}</span><button onClick={handleNext} disabled={view === steps.length - 1}>Next <ChevronRight size={18} /></button></div>
    </div>
  );
}
