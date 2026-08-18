/** Clinical Field Notebook design: course progress reads like a tabbed reference binder, not a generic card grid. */
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, BookOpen, BrainCircuit } from "lucide-react";
import { courses } from "@/data/studyContent";
import { ClinicalMark } from "@/components/ClinicalMark";

export default function CoursePage() {
  const { courseId } = useParams<{ courseId: "1523" | "2514" }>();
  const course = courses.find((item) => item.id === courseId) ?? courses[0];
  return (
    <div className={`course-page course-page--${course.accent}`}>
      <Link href="/" className="back-link"><ArrowLeft size={16} /> Study desk</Link>
      <header className="course-header">
        <div><div className="binder-identity"><ClinicalMark compact /><span>COURSE BINDER</span></div><p className="eyebrow">{course.label}</p><h1>{course.title}</h1><h2>{course.fullTitle}</h2></div>
        <div className="course-header__note"><BookOpen size={18} /><p><strong>4 study days</strong><br />Presentation decks, infographic summaries, and linked NGN practice.</p></div>
      </header>
      <div className="day-lane" aria-label={`${course.title} day sequence`}>
        {course.days.map((day) => (
          <article className={`day-card day-card--${day.color}`} key={day.id}>
            <div className="day-card__tab">DAY {day.number}</div>
            <p className="day-card__label">{course.title}</p>
            <h3>{day.title}</h3>
            <p>{day.subtitle}</p>
            <div className="day-card__topics">{day.subjects.map((subject) => <span key={subject.id}>{subject.title}</span>)}</div>
            <Link href={`/course/${course.id}/day/${day.id}`} className="button-dark">Open Day {day.number} <ArrowRight size={16} /></Link>
            {day.dayCaseId && <Link href={`/cases/${day.dayCaseId}`} className="day-card__case"><BrainCircuit size={14} /> Linked NGN case</Link>}
          </article>
        ))}
      </div>
      <section className="course-brief"><div><p className="eyebrow">HOW TO WORK THE PATH</p><h2>Read. Reinforce. Rehearse.</h2></div><ol><li><span>01</span>Open a subject deck and work the key points in context.</li><li><span>02</span>Use the included infographic as a visual summary—not a replacement for the deck.</li><li><span>03</span>Move to the linked NGN case when you are ready to rehearse clinical reasoning.</li></ol></section>
    </div>
  );
}
