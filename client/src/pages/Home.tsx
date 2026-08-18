/** Clinical Field Notebook design: the study desk is an editorial overview, not a generic centered dashboard. */
import { Link } from "wouter";
import { ArrowRight, BookOpenCheck, BrainCircuit, ShieldCheck, Sparkles } from "lucide-react";
import { courses, media, supportResources } from "@/data/studyContent";

const iconMap = { ClipboardCheck: BookOpenCheck, Sparkles, BookOpenCheck, BrainCircuit };

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-panel">
        <div className="hero-panel__copy">
          <p className="eyebrow"><span className="eyebrow__dot" /> CLINICAL FIELD NOTEBOOK</p>
          <h1>Trace the cue.<br /><em>Name the risk.</em><br />Choose the next safest action.</h1>
          <p className="hero-panel__lede">A structured study workspace for maternal, newborn, and reproductive-system NCLEX preparation—built around clear presentation paths and deliberate clinical-judgment practice.</p>
          <div className="hero-panel__actions">
            <Link href="/course/1523" className="button-primary">Open foundations <ArrowRight size={17} /></Link>
            <Link href="/cases" className="button-quiet">Explore NGN cases <BrainCircuit size={17} /></Link>
          </div>
        </div>
        <div className="hero-panel__visual" aria-label="Clinical study materials">
          <img src={media.hero} alt="Nursing study desk with clinical notebook and maternal-newborn study tools." />
          <div className="hero-note hero-note--top"><span>08</span><p>DAY PATHS<br /><strong>2 COURSES</strong></p></div>
          <div className="hero-note hero-note--bottom"><ShieldCheck size={17} /><p>RATIONALE-FIRST<br /><strong>STUDY PRACTICE</strong></p></div>
        </div>
      </section>

      <section className="section-block section-block--courses">
        <div className="section-heading">
          <div><p className="eyebrow">START WITH THE PATH</p><h2>Eight study days. <em>One clinical thread.</em></h2></div>
          <p>Each path opens into short HTML study decks, subject-level summary infographics, and a linked active-learning route.</p>
        </div>
        <div className="course-launches">
          {courses.map((course, index) => (
            <Link href={`/course/${course.id}`} className={`course-launch course-launch--${course.accent}`} key={course.id}>
              <div className="course-launch__number">0{index + 1}</div>
              <div className="course-launch__content"><p>{course.label}</p><h3>{course.title}</h3><span>{course.fullTitle}</span></div>
              <ArrowRight size={22} className="course-launch__arrow" />
              <div className="course-launch__days">{course.days.map((day) => <span key={day.id}>D{day.number}</span>)}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="split-feature">
        <div className="split-feature__image"><img src={media.reasoning} alt="Clinical-reasoning study materials arranged on a desk." /></div>
        <div className="split-feature__content">
          <p className="eyebrow">SEPARATE FROM THE SLIDES</p>
          <h2>Practice clinical judgment in a dedicated case library.</h2>
          <p>NGN cases remain an independent learning mode. Browse by course or day, review the scenario brief, and move through the six clinical-judgment operations with a clear review-status label.</p>
          <div className="operation-list">
            {["Recognize cues", "Analyze cues", "Prioritize hypotheses", "Generate solutions", "Take actions", "Evaluate outcomes"].map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</div>)}
          </div>
          <Link href="/cases" className="text-link">Open the case library <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="section-block section-block--utilities">
        <div className="section-heading"><div><p className="eyebrow">KEEP THE TOOLS CLOSE</p><h2>Study utilities <em>that stay out of the way.</em></h2></div></div>
        <div className="utility-grid">
          {supportResources.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? BookOpenCheck;
            return <Link href="/resources" className="utility-card" key={item.title}><Icon size={21} /><h3>{item.title}</h3><p>{item.description}</p><span>Open <ArrowRight size={14} /></span></Link>;
          })}
        </div>
      </section>
    </div>
  );
}
