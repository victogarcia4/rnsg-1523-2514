/** Clinical Field Notebook design: the case player makes review status and reasoning sequence visible at all times. */
import { useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, CheckCircle2, CircleAlert, ClipboardPenLine, LockKeyhole } from "lucide-react";
import { caseActivities } from "@/data/studyContent";

export default function CasePlayer() {
  const { caseId } = useParams<{ caseId: string }>();
  const caseItem = caseActivities.find((item) => item.id === caseId) ?? caseActivities[0];
  const [step, setStep] = useState(0);
  const [note, setNote] = useState("");
  return (
    <div className="case-player">
      <Link href="/cases" className="back-link"><ArrowLeft size={16} /> NGN clinical cases</Link>
      <header className="case-player__header"><div><p className="eyebrow">RNSG {caseItem.courseId} · {caseItem.primaryDay}</p><h1>{caseItem.title}</h1><p>{caseItem.focus}</p></div><div className={`sensitivity-chip sensitivity-chip--${caseItem.sensitivity ?? "standard"}`}>{caseItem.sensitivity === "sensitive" ? "Sensitive content" : caseItem.sensitivity === "urgent" ? "Urgent scenario" : "Clinical scenario"}</div></header>
      <div className="review-banner"><LockKeyhole size={18} /><div><strong>Source-based case activity · review-gated</strong><p>This case structure is ready for its reviewed source content. Student-facing answers, rationales, and scoring stay protected until clinical and faculty review is complete.</p></div></div>
      <section className="case-steps"><aside><p className="eyebrow">CLINICAL JUDGMENT PATH</p>{caseItem.steps.map((item, index) => <button onClick={() => setStep(index)} className={step === index ? "is-active" : ""} key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</button>)}</aside><div className="case-step-panel"><div className="case-step-panel__number">STEP {String(step + 1).padStart(2, "0")}</div><h2>{caseItem.steps[step]}</h2><p>{step === 0 ? "Identify the data that would matter most in the initial scenario. Use the case title, clinical focus, and available record to orient your first pass." : step === 1 ? "Group the available information into meaningful patterns. Notice what changes the level of concern and what requires verification." : step === 2 ? "Name the leading risk or clinical concern that deserves attention first. Avoid choosing an action before you identify the priority." : step === 3 ? "Compare safe, scope-appropriate options and identify the actions that address the priority without creating avoidable risk." : step === 4 ? "Place urgent actions in a clear, coordinated sequence while considering communication and escalation." : "Reassess response, identify what would change the plan, and document what needs follow-up."}</p><label className="reasoning-pad"><ClipboardPenLine size={17} /><span>Reasoning pad <small>Saved only in this browser session</small></span><textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="Capture the cues, priority, or follow-up question you want to revisit…" /></label><div className="case-step-panel__footer"><span><CircleAlert size={15} /> No score is recorded in this review-gated view.</span>{step === caseItem.steps.length - 1 ? <span className="case-complete"><CheckCircle2 size={16} /> Pathway reviewed</span> : <button onClick={() => setStep(step + 1)}>Continue to next step</button>}</div></div></section>
      <aside className="case-source-note"><strong>Source file</strong><span>{caseItem.sourceFile}</span><p>Completion does not certify clinical competency. Follow current authoritative guidance and local policy in clinical practice.</p></aside>
    </div>
  );
}
