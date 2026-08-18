/** Clinical Field Notebook design: credits are a quiet but prominent author page with clear educational-use context. */
import { HeartHandshake, ShieldCheck, Stamp } from "lucide-react";
import { media } from "@/data/studyContent";
import { ClinicalMark } from "@/components/ClinicalMark";

export default function CreditsPage() {
  return (
    <div className="credits-page">
      <header className="credits-hero"><div><p className="eyebrow">CREDITS & SOURCE PRACTICE</p><h1>Built for the <em>work of learning.</em></h1><p>This application organizes reviewed teaching materials into an accessible study experience for maternal, newborn, and reproductive nursing preparation.</p></div><Stamp size={58} strokeWidth={1.2} /></header>
      <section className="author-card"><div className="author-card__portrait"><img src={media.victor} alt="Dr. Victor Garcia Martinez, MSN-FNP, APRN, RN." /></div><div className="author-card__content"><p className="eyebrow">DESIGNED & BUILT BY</p><h2>Dr. Victor Garcia Martinez</h2><p className="credentials">MSN-FNP, APRN, RN</p><p>The RNSG NCLEX Study Lab brings structured study decks, course-created infographics, and separate clinical-judgment pathways into one carefully organized learning workspace.</p><div className="author-card__marks"><span><HeartHandshake size={16} /> Patient-centered learning</span><span><ShieldCheck size={16} /> Review-aware design</span></div></div></section>
      <section className="source-principles"><article><p className="eyebrow">SOURCE TRACEABILITY</p><h2>Every learning mode has a source path.</h2><p>Study decks are derived from the repository’s course guides; infographic summaries retain their authored asset identity; and clinical case structures preserve their source-file reference and review status.</p></article><article><p className="eyebrow">EDUCATIONAL USE</p><h2>Not clinical decision support.</h2><p>Content is provided for nursing education and NCLEX preparation. It does not replace current authoritative guidance, institutional protocol, supervision, or clinical judgment in patient care.</p></article></section>
      <footer className="credits-footer"><ClinicalMark compact /> <span>RNSG NCLEX STUDY LAB · DESIGNED AND BUILT BY DR. VICTOR GARCIA MARTINEZ, MSN-FNP, APRN, RN</span></footer>
    </div>
  );
}
