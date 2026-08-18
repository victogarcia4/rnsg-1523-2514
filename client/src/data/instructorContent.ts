/**
 * Clinical Field Notebook design reminder: instructor decks retain the full study-guide record.
 * The renderer distributes every original guide block across a fixed 24–32 slide sequence.
 */
import guide1523Day1 from "@/content/guides/RNSG_1523_Day1_Study_Guide.md?raw";
import guide1523Day2 from "@/content/guides/RNSG_1523_Day2_Study_Guide.md?raw";
import guide1523Day3 from "@/content/guides/RNSG_1523_Day3_Study_Guide.md?raw";
import guide1523Day4 from "@/content/guides/RNSG_1523_Day4_Study_Guide.md?raw";
import guide2514Day1 from "@/content/guides/RNSG_2514_Day1_Study_Guide.md?raw";
import guide2514Day2 from "@/content/guides/RNSG_2514_Day2_Study_Guide.md?raw";
import guide2514Day3 from "@/content/guides/RNSG_2514_Day3_Study_Guide.md?raw";
import guide2514Day4 from "@/content/guides/RNSG_2514_Day4_Study_Guide.md?raw";
import { media } from "@/data/studyContent";

export type TeachingVisual = {
  src: string;
  alt: string;
  caption: string;
  attribution?: string;
  sourceUrl?: string;
};

export type InstructorDeck = {
  id: string;
  courseId: "1523" | "2514";
  courseLabel: string;
  dayId: string;
  dayNumber: number;
  title: string;
  subtitle: string;
  slideCount: number;
  guideFile: string;
  guideText: string;
  visualInserts: Record<number, TeachingVisual>;
};

export type InstructorSlide = {
  number: number;
  title: string;
  content: string;
  visual?: TeachingVisual;
  kind: "cover" | "content" | "close";
};

const externalVisuals = {
  menstrual: {
    src: "/manus-storage/menstrual-cycle-isometrik_9c1cf64e.png",
    alt: "Diagram showing menstrual-cycle phases, basal body temperature, hormone levels, and ovarian and uterine changes.",
    caption: "Menstrual-cycle reference insert.",
    attribution: "Isometrik · CC BY-SA 3.0 / GFDL",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:MenstrualCycle2_en.svg",
  },
  fetal: {
    src: "/manus-storage/fetal-circulation-openstax_53b8cbad.jpg",
    alt: "Diagram of fetal circulation showing the placenta, umbilical vessels, and fetal shunts.",
    caption: "Fetal-circulation reference insert.",
    attribution: "OpenStax/CNX source · CC BY 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:2139_Fetal_Circulation.jpg",
  },
  prenatal: {
    src: "/manus-storage/prenatal-checkup-healthmil_1b0aa28d.jpg",
    alt: "A prenatal care professional performing an ultrasound checkup with a pregnant patient.",
    caption: "Prenatal-assessment field reference.",
    attribution: "health.mil source · CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pregnancy_Check_Up.jpg",
  },
  newbornExam: {
    src: "/manus-storage/newborn-examination-drparthshah_82ca7409.jpg",
    alt: "Clinician performing a newborn examination under a warmer.",
    caption: "Newborn-assessment field reference.",
    attribution: "DrParthShah · CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Neonate_examination.jpg",
  },
} satisfies Record<string, TeachingVisual>;

const guideVisual = (src: string, alt: string, caption: string): TeachingVisual => ({ src, alt, caption });

export const instructorDecks: InstructorDeck[] = [
  {
    id: "instructor-1523-day-1", courseId: "1523", courseLabel: "RNSG 1523 · Foundations", dayId: "1523-day-1", dayNumber: 1,
    title: "Reproductive Health, Life-Cycle Concerns, Contraception & Preconception Genetics", subtitle: "Menstrual physiology, dysmenorrhea, menopause, contraception, and preconception counseling.", slideCount: 32,
    guideFile: "RNSG_1523_Day1_Study_Guide.md", guideText: guide1523Day1,
    visualInserts: { 1: externalVisuals.menstrual, 14: guideVisual(media.dysmenorrhea, "Primary and secondary dysmenorrhea comparison infographic.", "Course infographic: pain-pattern discrimination."), 24: guideVisual(media.contraception, "Contraceptive method comparison infographic.", "Course infographic: method comparison.") },
  },
  {
    id: "instructor-1523-day-2", courseId: "1523", courseLabel: "RNSG 1523 · Foundations", dayId: "1523-day-2", dayNumber: 2,
    title: "Fetal Development, Pregnancy Signs, GTPAL, EDD & Prenatal Assessment", subtitle: "From conception and confirmation through complete prenatal baseline and surveillance.", slideCount: 30,
    guideFile: "RNSG_1523_Day2_Study_Guide.md", guideText: guide1523Day2,
    visualInserts: { 1: externalVisuals.fetal, 14: externalVisuals.prenatal, 23: guideVisual(media.visits, "Prenatal visit schedule and assessment infographic.", "Course infographic: prenatal assessment rhythm.") },
  },
  {
    id: "instructor-1523-day-3", courseId: "1523", courseLabel: "RNSG 1523 · Foundations", dayId: "1523-day-3", dayNumber: 3,
    title: "Prenatal Screening, Safety, Nutrition & Teaching", subtitle: "Screening interpretation, maternal wellbeing, medication safety, and evidence-aware education.", slideCount: 30,
    guideFile: "RNSG_1523_Day3_Study_Guide.md", guideText: guide1523Day3,
    visualInserts: { 1: guideVisual(media.screening, "Prenatal screening tests educational infographic.", "Course infographic: screening and diagnostic pathways."), 14: guideVisual(media.nutrition, "Pregnancy nutrition and weight educational guide.", "Course infographic: nutrition and weight guidance."), 23: guideVisual(media.meds, "Pregnancy medication safety guide infographic.", "Course infographic: medication-safety checkpoints.") },
  },
  {
    id: "instructor-1523-day-4", courseId: "1523", courseLabel: "RNSG 1523 · Foundations", dayId: "1523-day-4", dayNumber: 4,
    title: "Teaching, Transitions & Life-Course Care", subtitle: "Warning-sign communication, supportive teaching, preparation, and reproductive life-course transitions.", slideCount: 32,
    guideFile: "RNSG_1523_Day4_Study_Guide.md", guideText: guide1523Day4,
    visualInserts: { 1: externalVisuals.prenatal, 16: guideVisual(media.lactation, "Breast care and lactation preparation guide.", "Course infographic: preparation and supportive teaching."), 25: guideVisual(media.atlas, "Editorial maternal-newborn learning atlas.", "Clinical field-notebook reference plate.") },
  },
  {
    id: "instructor-2514-day-1", courseId: "2514", courseLabel: "RNSG 2514 · Complications", dayId: "2514-day-1", dayNumber: 1,
    title: "Early Pregnancy Complications, Bleeding, PROM & Hyperemesis", subtitle: "Pattern recognition, safety constraints, stabilization, and patient-centered follow-up.", slideCount: 30,
    guideFile: "RNSG_2514_Day1_Study_Guide.md", guideText: guide2514Day1,
    visualInserts: { 1: guideVisual(media.bleeding, "Bleeding in pregnancy early versus late infographic.", "Course infographic: early and late bleeding patterns."), 14: guideVisual(media.previa, "Placenta previa versus placental abruption infographic.", "Course infographic: placental bleeding comparison."), 23: guideVisual(media.hyperemesis, "Hyperemesis gravidarum management infographic.", "Course infographic: hydration and escalation reference.") },
  },
  {
    id: "instructor-2514-day-2", courseId: "2514", courseLabel: "RNSG 2514 · Complications", dayId: "2514-day-2", dayNumber: 2,
    title: "Hypertensive Disorders, GDM & Preterm Risk", subtitle: "Trend interpretation, severe features, metabolic risk, and time-sensitive maternal-fetal care.", slideCount: 32,
    guideFile: "RNSG_2514_Day2_Study_Guide.md", guideText: guide2514Day2,
    visualInserts: { 1: guideVisual(media.hypertension, "Hypertensive disorders of pregnancy spectrum infographic.", "Course infographic: hypertensive spectrum."), 15: guideVisual(media.hellp, "HELLP syndrome and DIC laboratory infographic.", "Course infographic: laboratory trend reference."), 25: guideVisual(media.gdm, "Gestational diabetes pathophysiology and glucose testing infographic.", "Course infographic: glucose-pattern reference.") },
  },
  {
    id: "instructor-2514-day-3", courseId: "2514", courseLabel: "RNSG 2514 · Complications", dayId: "2514-day-3", dayNumber: 3,
    title: "Labor Dysfunction, Induction, Augmentation & Obstetric Emergencies", subtitle: "The 4 Ps, fetal tolerance, labor progress, emergency preparation, and coordinated response.", slideCount: 30,
    guideFile: "RNSG_2514_Day3_Study_Guide.md", guideText: guide2514Day3,
    visualInserts: { 1: guideVisual("/manus-storage/dystocia-4ps-instructor_2c4e5618.jpg", "Dystocia and the four Ps of abnormal labor infographic.", "Course infographic: 4 Ps framework."), 14: guideVisual(media.induction, "Labor induction versus augmentation infographic.", "Course infographic: induction and augmentation."), 23: guideVisual(media.cord, "Cord compression and prolapse emergency infographic.", "Course infographic: emergency sequence.") },
  },
  {
    id: "instructor-2514-day-4", courseId: "2514", courseLabel: "RNSG 2514 · Complications", dayId: "2514-day-4", dayNumber: 4,
    title: "Newborn Transition, Respiratory Patterns & Complex Outcomes", subtitle: "Newborn assessment, respiratory-transition risk, maternal context, and compassionate multidisciplinary care.", slideCount: 30,
    guideFile: "RNSG_2514_Day4_Study_Guide.md", guideText: guide2514Day4,
    visualInserts: { 1: externalVisuals.newbornExam, 14: guideVisual(media.newborn, "Compromised newborn TTN, RDS, and MAS comparison infographic.", "Course infographic: respiratory transition patterns."), 23: guideVisual(media.reasoning, "Clinical reasoning workspace with cue cards.", "Clinical field-notebook reference plate.") },
  },
];

const splitLongBlock = (block: string) => {
  if (block.length <= 1300) return [block];
  const lines = block.split("\n").filter(Boolean);
  const parts: string[] = [];
  let current = "";
  for (const line of lines) {
    if (current && current.length + line.length > 900) { parts.push(current); current = line; }
    else current = current ? `${current}\n${line}` : line;
  }
  if (current) parts.push(current);
  return parts;
};

const sourceBlocks = (guideText: string) => guideText
  .replace(/\r/g, "")
  .split(/\n\s*\n/)
  .flatMap((block) => splitLongBlock(block.trim()))
  .filter(Boolean);

const headingFor = (content: string, fallback: number) => {
  const match = content.match(/^#{1,6}\s+(.+)$/m) || content.match(/^\*\*(.+?)\*\*/m);
  return match?.[1]?.replace(/\*\*/g, "").trim() || `Teaching record ${String(fallback).padStart(2, "0")}`;
};

function distributeGuide(deck: InstructorDeck) {
  const blocks = sourceBlocks(deck.guideText);
  const targetSlides = deck.slideCount - 1;
  const total = blocks.reduce((sum, block) => sum + block.length, 0);
  const target = Math.max(700, Math.ceil(total / targetSlides));
  const groups: string[] = [];
  let current = "";

  blocks.forEach((block) => {
    const remainingGroups = targetSlides - groups.length;
    const remainingBlocks = blocks.length - (blocks.indexOf(block));
    if (current && (current.length + block.length > target || remainingBlocks <= remainingGroups - 1)) {
      groups.push(current);
      current = block;
    } else current = current ? `${current}\n\n${block}` : block;
  });
  if (current) groups.push(current);

  while (groups.length > targetSlides) {
    const overflow = groups.pop();
    if (overflow) groups[groups.length - 1] = `${groups[groups.length - 1]}\n\n${overflow}`;
  }
  while (groups.length < targetSlides) {
    const longestIndex = groups.reduce((longest, item, index, array) => item.length > array[longest].length ? index : longest, 0);
    const source = groups[longestIndex];
    const pivot = source.lastIndexOf("\n", Math.floor(source.length / 2));
    const splitAt = pivot > 180 ? pivot : Math.floor(source.length / 2);
    groups.splice(longestIndex, 1, source.slice(0, splitAt).trim(), source.slice(splitAt).trim());
  }

  const slides: InstructorSlide[] = [
    { number: 1, title: deck.title, content: groups[0], visual: deck.visualInserts[1], kind: "cover" },
    ...groups.slice(1).map((content, index) => ({ number: index + 2, title: headingFor(content, index + 2), content, visual: deck.visualInserts[index + 2], kind: "content" as const })),
    { number: deck.slideCount, title: "Guide source, retrieval, and close", content: `**Source guide:** ${deck.guideFile}\n\nThe complete original study-guide content has been distributed across this ${deck.slideCount}-slide instructor presentation. Use the source record and listed visual credits when preparing class delivery.\n\n**Instructor retrieval prompt:** Ask learners to connect the day’s objectives, priority cues, and patient-teaching points before moving to the associated NGN practice.`, kind: "close" },
  ];
  return slides.slice(0, deck.slideCount);
}

export const buildInstructorSlides = (deck: InstructorDeck) => distributeGuide(deck);
export const findInstructorDeck = (courseId?: string, dayId?: string) => instructorDecks.find((deck) => deck.courseId === courseId && deck.dayId === dayId);
