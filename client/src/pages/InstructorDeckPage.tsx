/** Clinical Field Notebook design: a focused instructor projector mode with a visible document rail and source trail. */
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, FileText, Maximize2, Presentation } from "lucide-react";
import { buildInstructorSlides, findInstructorDeck } from "@/data/instructorContent";
import { ClinicalMark } from "@/components/ClinicalMark";

function formatInline(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => part.startsWith("**") && part.endsWith("**") ? <strong key={index}>{part.slice(2, -2)}</strong> : part);
}

function SourceMarkdown({ content }: { content: string }) {
  const lines = content.split("\n").filter((line) => line.trim());
  return <div className="source-markdown">{lines.map((line, index) => {
    const clean = line.replace(/^#{1,6}\s+/, "").replace(/^[-*]\s+/, "").trim();
    if (/^#{1,6}\s+/.test(line)) return <h3 key={index}>{formatInline(clean)}</h3>;
    if (/^[-*]\s+/.test(line)) return <p className="source-markdown__bullet" key={index}>{formatInline(clean)}</p>;
    if (/^\|/.test(line)) return <p className="source-markdown__table" key={index}>{line.replace(/\|/g, " · ").replace(/·\s*---+/g, "")}</p>;
    return <p key={index}>{formatInline(clean)}</p>;
  })}</div>;
}

export default function InstructorDeckPage() {
  const { courseId, dayId } = useParams<{ courseId: string; dayId: string }>();
  const deck = findInstructorDeck(courseId, dayId);
  const slides = useMemo(() => deck ? buildInstructorSlides(deck) : [], [deck]);
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  useEffect(() => {
    setIndex(0);
  }, [deck?.id]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") setIndex((value) => Math.min(value + 1, slides.length - 1));
      if (event.key === "ArrowLeft") setIndex((value) => Math.max(value - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides.length]);

  if (!deck || !slide) return <main className="page-wrap"><h1>Instructor presentation not found.</h1><Link href="/instructor">Return to instructor library</Link></main>;
  const progress = ((index + 1) / slides.length) * 100;
  return <main className="instructor-player">
    <header className="instructor-player__bar"><Link href="/instructor"><ArrowLeft size={16} /> Instructor library</Link><div className="instructor-player__wordmark"><ClinicalMark compact /><span>RNSG NCLEX STUDY LAB</span><em>{deck.courseLabel}</em><strong>DAY {deck.dayNumber}</strong></div><button onClick={() => document.documentElement.requestFullscreen?.()} aria-label="Enter full screen"><Maximize2 size={16} /> Projector view</button></header>
    <div className="instructor-player__layout">
      <aside className="instructor-player__rail"><span className="rail-label">TEACHING DECK</span><strong>{String(index + 1).padStart(2, "0")}</strong><div className="instructor-player__progress"><span style={{ height: `${progress}%` }} /></div><small>{slides.length} SLIDES</small></aside>
      <section className={`instructor-slide instructor-slide--${slide.kind}`} aria-label={`Slide ${index + 1} of ${slides.length}: ${slide.title}`}>
        <div className="instructor-slide__topline"><span>{deck.courseLabel}</span><span>SLIDE {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span></div>
        <div className={slide.visual ? "instructor-slide__body has-visual" : "instructor-slide__body"}>
          <div className="instructor-slide__copy"><p className={`instructor-slide__cue instructor-slide__cue--${deck.courseId === "2514" ? "priority" : "core"}`}>{deck.courseId === "2514" ? "PRIORITY / COMPLICATIONS" : "CORE / HIGH-YIELD"}</p><p className="eyebrow">DAY {deck.dayNumber} · INSTRUCTOR PRESENTATION</p><h1>{slide.title}</h1><SourceMarkdown content={slide.content} /></div>
          {slide.visual && <figure className="instructor-slide__visual"><span>TEACHING VISUAL</span><img src={slide.visual.src} alt={slide.visual.alt} /><figcaption>{slide.visual.caption}{slide.visual.attribution ? <> · {slide.visual.sourceUrl ? <a href={slide.visual.sourceUrl} target="_blank" rel="noreferrer">{slide.visual.attribution} <ExternalLink size={11} /></a> : slide.visual.attribution}</> : null}</figcaption></figure>}
        </div>
        <footer className="instructor-slide__footer"><span><FileText size={15} /> {deck.guideFile}</span><span>Guide source remains traceable in this deck</span></footer>
      </section>
    </div>
    <nav className="instructor-player__controls" aria-label="Presentation controls"><button onClick={() => setIndex((value) => Math.max(value - 1, 0))} disabled={index === 0}><ChevronLeft size={19} /> Previous</button><span>{index + 1} of {slides.length}</span><button onClick={() => setIndex((value) => Math.min(value + 1, slides.length - 1))} disabled={index === slides.length - 1}>Next <ChevronRight size={19} /></button></nav>
  </main>;
}
