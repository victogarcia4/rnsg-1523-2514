/** Clinical Field Notebook design: a persistent document rail keeps students oriented across study modes. */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { BookOpenCheck, BrainCircuit, ClipboardCheck, GraduationCap, Menu, X } from "lucide-react";
import { ClinicalMark } from "./ClinicalMark";

const navigation = [
  { href: "/", label: "Study desk", icon: BookOpenCheck },
  { href: "/cases", label: "NGN clinical cases", icon: BrainCircuit },
  { href: "/resources", label: "Study resources", icon: ClipboardCheck },
  { href: "/instructor", label: "Instructor teaching", icon: GraduationCap },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <div className="app-shell">
      <header className="mobile-header">
        <ClinicalMark />
        <button className="icon-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>
      <aside className={`side-rail ${open ? "side-rail--open" : ""}`}>
        <div className="side-rail__top">
          <ClinicalMark />
          <p className="rail-kicker">MATERNAL · NEWBORN · REPRODUCTIVE</p>
        </div>
        <nav className="primary-nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = item.href === "/" ? location === "/" : location.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={`primary-nav__link ${active ? "is-active" : ""}`} onClick={() => setOpen(false)}>
                <Icon size={17} strokeWidth={1.8} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="rail-courses">
          <p className="rail-section-label">COURSE PATHWAYS</p>
          <Link href="/course/1523" className={`course-rail-link course-rail-link--blue ${location.includes("1523") ? "is-active" : ""}`} onClick={() => setOpen(false)}>
            <span>01</span><strong>RNSG 1523</strong><small>Foundations</small>
          </Link>
          <Link href="/course/2514" className={`course-rail-link course-rail-link--red ${location.includes("2514") ? "is-active" : ""}`} onClick={() => setOpen(false)}>
            <span>02</span><strong>RNSG 2514</strong><small>Complications</small>
          </Link>
        </div>
        <div className="rail-footer">
          <p>Study deliberately.</p>
          <Link href="/credits">Credits & sources</Link>
        </div>
      </aside>
      <main className="page-canvas">{children}</main>
    </div>
  );
}
