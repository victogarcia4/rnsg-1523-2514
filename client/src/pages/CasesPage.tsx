/** Clinical Field Notebook design: cases are a separate, review-aware library rather than hidden inside lesson slides. */
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, BrainCircuit, Filter, ShieldAlert } from "lucide-react";
import { caseActivities } from "@/data/studyContent";
import { ClinicalMark } from "@/components/ClinicalMark";

export default function CasesPage() {
  const [filter, setFilter] = useState<"all" | "1523" | "2514">("all");
  const visibleCases = useMemo(() => filter === "all" ? caseActivities : caseActivities.filter((item) => item.courseId === filter), [filter]);
  return (
    <div className="cases-page">
      <header className="page-intro page-intro--cases"><div><div className="binder-identity"><ClinicalMark compact /><span>CLINICAL CASE ARCHIVE</span></div><p className="eyebrow">NGN CLINICAL CASES</p><h1>Rehearse the <em>reasoning</em>, not just the recall.</h1><p>These unfolding case pathways are intentionally separate from the HTML study decks. Each remains marked for source, faculty, and clinical review before student-facing answer content is released.</p></div><div className="intro-stat"><BrainCircuit size={22} /><strong>{caseActivities.length}</strong><span>supplementary cases</span></div></header>
      <div className="case-filter"><div><Filter size={16} /> Filter by course</div>{(["all", "1523", "2514"] as const).map((item) => <button key={item} className={filter === item ? "is-active" : ""} onClick={() => setFilter(item)}>{item === "all" ? "All cases" : `RNSG ${item}`}</button>)}</div>
      <div className="case-library">{visibleCases.map((item, index) => <article className={`case-card case-card--${item.sensitivity ?? "standard"}`} key={item.id}><span className="case-card__file-tab">FILED CASE</span><div className="case-card__top"><span>CASE {String(index + 1).padStart(2, "0")}</span><span>{item.courseId} · {item.primaryDay}{item.crossDay ? " · CROSS-DAY" : ""}</span></div><h2>{item.title}</h2><p>{item.description}</p><div className="case-card__tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="case-card__foot"><span><ShieldAlert size={14} /> Review gate</span><Link href={`/cases/${item.id}`}>View case brief <ArrowRight size={16} /></Link></div></article>)}</div>
    </div>
  );
}
