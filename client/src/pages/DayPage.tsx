/** Clinical Field Notebook design: the day page is a reading plan with a purposeful clinical margin. */
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, BrainCircuit, CheckCircle2, Clock3, FileText, Image as ImageIcon } from "lucide-react";
import { courses, caseActivities, media } from "@/data/studyContent";

export default function DayPage() {
  const { courseId, dayId } = useParams<{ courseId: "1523" | "2514"; dayId: string }>();
  const course = courses.find((item) => item.id === courseId) ?? courses[0];
  const day = course.days.find((item) => item.id === dayId) ?? course.days[0];
  const caseActivity = caseActivities.find((item) => item.id === day.dayCaseId);
  return (
    <div className="day-page">
      <Link href={`/course/${course.id}`} className="back-link"><ArrowLeft size={16} /> {course.title} path</Link>
      <header className="day-header"><div><p className="eyebrow">{course.title} · DAY {day.number}</p><h1>{day.title}</h1><p>{day.subtitle}</p></div><div className="day-header__stat"><Clock3 size={18} /><span><strong>{day.subjects.length} subject decks</strong><br />Read in sequence or open a topic.</span></div></header>
      <div className="day-layout">
        <section className="subjects-column">
          <div className="subjects-column__lead"><p className="eyebrow">TODAY’S READING PLAN</p><p>Each subject has three views: a concise deck, a visual summary, and a short self-check.</p></div>
          <div className="subject-stack">
            {day.subjects.map((subject, index) => (
              <article className="subject-row" key={subject.id}>
                <span className="subject-row__index">0{index + 1}</span>
                <img src={subject.image} alt="" className="subject-row__thumb" />
                <div className="subject-row__content"><p>{subject.eyebrow}</p><h2>{subject.title}</h2><span>{subject.summary}</span><div className="subject-row__meta"><span><FileText size={14} /> 3 deck views</span>{subject.infographic && <span><ImageIcon size={14} /> Summary visual</span>}</div></div>
                <Link href={`/course/${course.id}/day/${day.id}/subject/${subject.id}`} className="subject-row__open" aria-label={`Open ${subject.title}`}><ArrowRight size={18} /></Link>
              </article>
            ))}
          </div>
        </section>
        <aside className="clinical-margin">
          <div className="clinical-margin__label">CLINICAL MARGIN</div>
          {caseActivity ? <><BrainCircuit size={22} /><p className="eyebrow">LINKED NGN ACTIVITY</p><h2>{caseActivity.title}</h2><p>{caseActivity.focus}</p><div className="case-tags">{caseActivity.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><Link href={`/cases/${caseActivity.id}`} className="button-primary button-primary--small">Open case brief <ArrowRight size={15} /></Link></> : <><CheckCircle2 size={22} /><h2>Complete the day’s self-check.</h2><p>Short rationale-first practice is available inside each subject deck.</p></>}
          <img src={media.atlas} alt="" className="clinical-margin__image" />
          <p className="clinical-margin__foot">Clinical content is educational and subject to faculty review. It is not clinical decision support.</p>
        </aside>
      </div>
    </div>
  );
}
