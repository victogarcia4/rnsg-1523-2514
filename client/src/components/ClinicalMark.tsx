/** Clinical Field Notebook design: a visible nested-tab symbol anchors every route without ornamental clutter. */
import { Link } from "wouter";
import { media } from "@/data/studyContent";

export function ClinicalMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="clinical-mark" aria-label="RNSG NCLEX Study Lab home">
      <img src={media.logo} alt="" className="clinical-mark__symbol" />
      {!compact && (
        <span className="clinical-mark__copy">
          <strong>RNSG</strong>
          <span>NCLEX STUDY LAB</span>
        </span>
      )}
    </Link>
  );
}
