/** Clinical Field Notebook design: the instructor library is filed as a teaching binder, not a generic course grid. */
import { Link } from "wouter";
import { ArrowRight, BookMarked, Presentation, ShieldCheck } from "lucide-react";
import { instructorDecks } from "@/data/instructorContent";
import { ClinicalMark } from "@/components/ClinicalMark";

export default function InstructorPage() {
  const courses = ["1523", "2514"] as const;
  return <div className="instructor-library page-wrap">
    <header className="instructor-library__hero">
      <div><div className="instructor-wordmark"><ClinicalMark /><div><strong>RNSG NCLEX</strong><span>STUDY LAB · FACULTY EDITION</span></div></div><div className="binder-identity"><ClinicalMark compact /><span>FACULTY TEACHING BINDER</span></div><p className="eyebrow">DR. VICTOR GARCIA MARTINEZ · MSN-FNP, APRN, RN</p><h1>Teach the guide <em>without losing the detail.</em></h1><p>Eight source-traceable HTML presentations organize every approved study-guide teaching point into focused class delivery by RNSG section and day.</p></div>
      <div className="instructor-library__seal"><Presentation size={26} /><strong>08</strong><span>day-level<br />presentations</span></div>
    </header>
    <section className="teaching-standard" aria-label="Teaching presentation standard"><BookMarked size={20} /><p>Every deck remains in the **24–32 slide** target range, keeps the original guide content in sequence, and displays image-attribution details when external teaching visuals are used.</p><ShieldCheck size={20} /></section>
    {courses.map((courseId) => <section className="teaching-course" key={courseId}>
      <div className="teaching-course__header"><span>FILE {courseId === "1523" ? "01" : "02"}</span><h2>RNSG {courseId}</h2><p>{courseId === "1523" ? "Maternal, newborn & reproductive foundations" : "At-risk maternal & newborn nursing"}</p></div>
      <div className="teaching-course__archive"><aside className={`teaching-course__rail teaching-course__rail--${courseId}`}><span>FILED</span><strong>04</strong><small>DAY<br />DECKS</small></aside><div className="teaching-deck-list">{instructorDecks.filter((deck) => deck.courseId === courseId).map((deck) => <article className={`teaching-deck-card teaching-deck-card--${deck.courseId}`} key={deck.id}>
        <span className="teaching-deck-card__tab">DAY {deck.dayNumber}</span><span className="teaching-deck-card__cue">{deck.courseId === "2514" ? "PRIORITY TEACHING" : "HIGH-YIELD TEACHING"}</span><p className="eyebrow">{deck.courseLabel}</p><h3>{deck.title}</h3><p>{deck.subtitle}</p><div className="teaching-deck-card__meta"><span>{deck.slideCount} HTML slides</span><span>Full guide coverage</span></div><Link href={`/instructor/${deck.courseId}/${deck.dayId}`}>Open instructor deck <ArrowRight size={16} /></Link>
      </article>)}</div></div>
    </section>)}
  </div>;
}
