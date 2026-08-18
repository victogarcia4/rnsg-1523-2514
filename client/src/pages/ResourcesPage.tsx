/** Clinical Field Notebook design: utilities are organized as compact reference tools, not a content dump. */
import { BookOpenCheck, BrainCircuit, ClipboardCheck, ExternalLink, FileWarning, Search, Sparkles } from "lucide-react";
import { supportResources } from "@/data/studyContent";

const iconMap = { ClipboardCheck, Sparkles, BookOpenCheck, BrainCircuit };

const resourceRows = [
  ["Exit tickets", "Day-based retrieval prompts", "Formative only", "Mapped to each study day"],
  ["High-yield review", "Cue sheets and comparison tools", "Student resource", "Clinical review required"],
  ["Terminology lab", "Definitions, distinctions, flashcards", "Student resource", "Canonical content record required"],
  ["Question practice", "Rationale-first practice items", "Student-safe subset", "No secure assessment material"],
];

export default function ResourcesPage() {
  return (
    <div className="resources-page">
      <header className="page-intro"><div><p className="eyebrow">STUDY RESOURCES</p><h1>Small tools. <em>Clearer decisions.</em></h1><p>Use these resources to reinforce concepts between decks and cases. They are designed as formative study supports, not as a graded or secure assessment system.</p></div><div className="intro-stat"><Search size={22} /><strong>04</strong><span>resource modes</span></div></header>
      <div className="resource-feature-grid">{supportResources.map((item) => { const Icon = iconMap[item.icon as keyof typeof iconMap] ?? BookOpenCheck; return <article className="resource-feature" key={item.title}><Icon size={24} /><h2>{item.title}</h2><p>{item.description}</p><span className="resource-feature__label"><ExternalLink size={16} /> Review framework</span></article>; })}</div>
      <section className="resource-register"><div className="resource-register__heading"><div><p className="eyebrow">CONTENT REGISTER</p><h2>What belongs where.</h2></div><p>The application separates student study supports from sensitive authoring, grading, and faculty-only material.</p></div><div className="register-table" role="table" aria-label="Study resource register"><div className="register-table__head" role="row"><span>Resource</span><span>Student experience</span><span>Visibility</span><span>Release condition</span></div>{resourceRows.map((row) => <div className="register-table__row" role="row" key={row[0]}>{row.map((cell) => <span key={cell}>{cell}</span>)}</div>)}</div></section>
      <section className="safety-callout"><FileWarning size={25} /><div><p className="eyebrow">CONTENT SAFETY NOTE</p><h2>Review-gated means intentionally not scored.</h2><p>The static application does not expose faculty-only exam material, protected keys, analytics, or confidential authoring notes. Clinical claims, citations, current guidelines, and local-policy details need qualified review before they are converted into student-facing activities.</p></div></section>
    </div>
  );
}
