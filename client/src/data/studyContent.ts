/**
 * Clinical Field Notebook design reminder: content is structured as a calm, traceable study instrument.
 * Presentation decks, infographic summaries, and clinical cases are intentionally separate learning modes.
 */

export type MicroActivity = {
  prompt: string;
  choices: string[];
  answer: number;
  rationale: string;
};

export type Subject = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  keyPoints: string[];
  image: string;
  imageAlt: string;
  infographic?: { src: string; alt: string; title: string };
  activity: MicroActivity;
};

export type StudyDay = {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  color: "blue" | "gold" | "oxblood" | "teal";
  dayCaseId?: string;
  subjects: Subject[];
};

export type Course = {
  id: "1523" | "2514";
  title: string;
  fullTitle: string;
  label: string;
  description: string;
  accent: "blue" | "oxblood";
  days: StudyDay[];
};

export type CaseActivity = {
  id: string;
  courseId: "1523" | "2514";
  primaryDay: string;
  crossDay?: boolean;
  title: string;
  focus: string;
  description: string;
  tags: string[];
  sensitivity?: "standard" | "urgent" | "sensitive";
  status: "review-required";
  sourceFile: string;
  steps: string[];
};

const media = {
  hero: "/manus-storage/nclex-hero-clinical-field-notebook_14643d34.png",
  reasoning: "/manus-storage/ngn-clinical-reasoning-workspace_8abe9e2a.png",
  atlas: "/manus-storage/maternal-newborn-learning-atlas_4357c337.png",
  logo: "/manus-storage/rnsg-nclex-tab-mark_1fe2c15e.png",
  victor: "/manus-storage/victor-garcia-martinez_2a788f35.png",
  anatomy: "/manus-storage/Female_Reproductive_Anatomy_and_Cycles_5dd9b09e.webp",
  cycle: "/manus-storage/RNSG1523-day1-menstrual-cycle-hormones-phases-signs_964dfea5.png",
  dysmenorrhea: "/manus-storage/RNSG1523-day1-dysmenorrhea-primary-vs-secondary_a616fe38.png",
  contraception: "/manus-storage/Contraceptive_Method_Comparison_Guide_b37ffe23.webp",
  visits: "/manus-storage/Prenatal_Visit_Schedule_and_Assessments_9c045b67.webp",
  screening: "/manus-storage/Guide_to_Prenatal_Screening_Tests_fc55162b.webp",
  meds: "/manus-storage/Pregnancy_Medication_Safety_Guide_22100961.webp",
  nutrition: "/manus-storage/Pregnancy_Nutrition_and_Weight_Guide_d7bf0bf7.webp",
  lactation: "/manus-storage/Breast_Care_and_Lactation_Preparation_43fe0a59.webp",
  bleeding: "/manus-storage/RNSG2514-day1-bleeding-in-pregnancy-early-vs-late_0aa2254e.jpg",
  previa: "/manus-storage/RNSG2514-day1-placenta-previa-vs-placental-abruption_d98e9816.jpg",
  pprom: "/manus-storage/RNSG2514-day1-prom-pprom-prelabor-rupture-of-membranes_2c6188ea.jpg",
  hyperemesis: "/manus-storage/RNSG2514-day1-hyperemesis-gravidarum_a75cf34c.jpg",
  gdm: "/manus-storage/RNSG2514-day2-gestational-diabetes-pathophysiology-glucose-testing_894cb3ad.jpg",
  hellp: "/manus-storage/RNSG2514-day2-hellp-syndrome-dic-read-the-labs_c5ea49bd.jpg",
  hypertension: "/manus-storage/RNSG2514-day2-hypertensive-disorders-pregnancy-the-spectrum_d19ed757.jpg",
  preterm: "/manus-storage/RNSG2514-day2-preterm-labor-stop-labor-mature-lungs_42f4a637.jpg",
  dystocia: "/manus-storage/RNSG2514-day3-DYSTOCIA_4Ps_2de4c26.jpg",
  induction: "/manus-storage/RNSG2514-day3-Labor_Induction_vs_Augmentation_d0ff01de.jpg",
  cord: "/manus-storage/RNSG2514-day3-Cord_Compression_Prolapse_Obstetric_Emergency_76964501.jpg",
  newborn: "/manus-storage/RNSG2514-day4-Compromised_Newborn_TTN_RDS_MAS_0bebc0e1.jpg",
};

export const courses: Course[] = [
  {
    id: "1523",
    title: "RNSG 1523",
    fullTitle: "Maternal, Newborn & Reproductive Foundations",
    label: "Foundations pathway",
    description:
      "Build a practical reasoning framework for reproductive health, prenatal assessment, health promotion, and patient education.",
    accent: "blue",
    days: [
      {
        id: "1523-day-1",
        number: 1,
        title: "Reproductive foundations",
        subtitle: "Cycle literacy, anatomy, and patient-centered contraception counseling.",
        color: "blue",
        dayCaseId: "adolescent-contraception",
        subjects: [
          {
            id: "1523-d1-cycle",
            title: "Cycle signals & reproductive anatomy",
            eyebrow: "Day 1 · Core concepts",
            summary:
              "Use anatomy and cycle patterns as the framework for distinguishing expected physiologic change from concerning symptoms.",
            keyPoints: [
              "Anchor interpretations in anatomy, timing, and the patient’s stated experience.",
              "Separate expected menstrual variation from symptoms that need a focused assessment.",
              "Connect hormone-phase patterns to the cues a student can recognize in a clinical stem.",
            ],
            image: media.anatomy,
            imageAlt: "Educational visual reference for female reproductive anatomy and cycles.",
            infographic: { src: media.cycle, alt: "Menstrual cycle hormones, phases, and signs infographic.", title: "Cycle phases at a glance" },
            activity: {
              prompt: "Which piece of information best helps you interpret a cycle-related symptom in a clinical stem?",
              choices: ["The patient’s favorite study method", "Timing of symptoms within the cycle", "The room temperature only"],
              answer: 1,
              rationale: "Cycle timing gives clinical context for interpreting reported reproductive-health symptoms.",
            },
          },
          {
            id: "1523-d1-contraception",
            title: "Contraception: mechanism to counseling",
            eyebrow: "Day 1 · Patient education",
            summary:
              "Compare methods through safety, effectiveness, preferences, and shared decision-making rather than a one-size-fits-all answer.",
            keyPoints: [
              "Start with the patient’s goals, medical history, and preferences.",
              "Use nonjudgmental education and encourage dual protection when appropriate.",
              "Recognize when a contraindication or warning sign changes the next safest step.",
            ],
            image: media.contraception,
            imageAlt: "Infographic comparing contraceptive methods.",
            infographic: { src: media.dysmenorrhea, alt: "Primary and secondary dysmenorrhea comparison infographic.", title: "Pain-pattern discrimination" },
            activity: {
              prompt: "Which counseling approach most supports shared decision-making?",
              choices: ["Name one method without discussion", "Elicit goals and review safe options", "Delay all questions until follow-up"],
              answer: 1,
              rationale: "Shared decision-making connects evidence, eligibility, and the patient’s priorities.",
            },
          },
        ],
      },
      {
        id: "1523-day-2",
        number: 2,
        title: "Pregnancy assessment",
        subtitle: "From pregnancy indicators and dating to a reliable prenatal baseline.",
        color: "gold",
        dayCaseId: "rh-negative",
        subjects: [
          {
            id: "1523-d2-confirmation",
            title: "Pregnancy indicators & dating",
            eyebrow: "Day 2 · Assessment",
            summary:
              "Learn the difference between suggestive and positive findings, then use a structured history to frame prenatal care.",
            keyPoints: [
              "Classify assessment findings before drawing a conclusion.",
              "Document obstetric history in a consistent, traceable format.",
              "Treat due-date calculation as one component of a broader assessment picture.",
            ],
            image: media.atlas,
            imageAlt: "Editorial maternal-newborn medical atlas illustration.",
            infographic: { src: media.visits, alt: "Prenatal visit schedule and assessment infographic.", title: "Prenatal rhythm" },
            activity: {
              prompt: "What is the safest study habit when interpreting a reported sign of pregnancy?",
              choices: ["Assume one sign confirms pregnancy", "Classify the finding and seek corroborating data", "Ignore timing and history"],
              answer: 1,
              rationale: "Clinical reasoning uses the type of finding, timing, history, and appropriate confirmation together.",
            },
          },
          {
            id: "1523-d2-baseline",
            title: "The prenatal baseline",
            eyebrow: "Day 2 · Documentation",
            summary:
              "Use a complete baseline to support risk recognition, continuity, and patient-specific teaching throughout pregnancy.",
            keyPoints: [
              "Prioritize a coherent history, vital signs, laboratory context, and psychosocial screening.",
              "Document information so trends—not isolated facts—can be recognized later.",
              "Escalate abnormal or urgent findings through the appropriate clinical pathway.",
            ],
            image: media.visits,
            imageAlt: "Prenatal schedule and assessment visual guide.",
            infographic: { src: "/manus-storage/Antepartum_Assessment_Medical_Guide_3f25992f.webp", alt: "Antepartum assessment medical guide infographic.", title: "Assessment structure" },
            activity: {
              prompt: "Why is a clearly documented prenatal baseline valuable?",
              choices: ["It replaces follow-up visits", "It supports recognition of meaningful change over time", "It removes the need for patient teaching"],
              answer: 1,
              rationale: "Baseline data make later change and potential risk easier to recognize and communicate.",
            },
          },
        ],
      },
      {
        id: "1523-day-3",
        number: 3,
        title: "Screening, safety & nutrition",
        subtitle: "Turn prenatal questions into safe, evidence-aware education and follow-up.",
        color: "teal",
        dayCaseId: "gdm-diagnosis",
        subjects: [
          {
            id: "1523-d3-screening",
            title: "Screening is not diagnosis",
            eyebrow: "Day 3 · Clinical reasoning",
            summary:
              "Practice explaining what a prenatal screen can show, what it cannot confirm, and how appropriate follow-up supports autonomy.",
            keyPoints: [
              "Use plain language to distinguish risk estimation from diagnostic confirmation.",
              "Support informed choices and nondirective counseling.",
              "Recognize appropriate referral and follow-up steps within scope.",
            ],
            image: media.screening,
            imageAlt: "Prenatal screening tests educational infographic.",
            infographic: { src: "/manus-storage/Prenatal_Diagnostic_Tests_and_Care_b899f680.webp", alt: "Prenatal diagnostic tests and care infographic.", title: "Screening and diagnostic pathways" },
            activity: {
              prompt: "Which statement best preserves the distinction between a screen and a diagnosis?",
              choices: ["A screen confirms a condition", "A screen can identify a need for further evaluation", "A screen has no clinical value"],
              answer: 1,
              rationale: "Screening identifies risk or the need for additional evaluation; it does not by itself establish a diagnosis.",
            },
          },
          {
            id: "1523-d3-wellbeing",
            title: "Nutrition, medication & physiologic change",
            eyebrow: "Day 3 · Health promotion",
            summary:
              "Connect common physiologic adaptations with safe teaching about nutrition, medication questions, and when to seek evaluation.",
            keyPoints: [
              "Use current, approved course references when discussing medication safety.",
              "Frame nutrition teaching around individualized assessment and follow-up.",
              "Differentiate expected discomforts from warning signs that need timely evaluation.",
            ],
            image: media.nutrition,
            imageAlt: "Pregnancy nutrition and weight educational guide.",
            infographic: { src: media.meds, alt: "Pregnancy medication safety guide infographic.", title: "Medication-safety checkpoints" },
            activity: {
              prompt: "When a patient asks about a medication during pregnancy, what is the strongest first reasoning step?",
              choices: ["Offer a personal recommendation immediately", "Verify the medication and route the question through an appropriate clinical resource", "Assume all over-the-counter products are safe"],
              answer: 1,
              rationale: "Medication questions require current, patient-specific verification and appropriate consultation.",
            },
          },
        ],
      },
      {
        id: "1523-day-4",
        number: 4,
        title: "Teaching, transitions & life-course care",
        subtitle: "Synthesize education, warning signs, and supportive care across reproductive transitions.",
        color: "oxblood",
        dayCaseId: "abnormal-quad-screen",
        subjects: [
          {
            id: "1523-d4-warning",
            title: "Warning signs and timely triage",
            eyebrow: "Day 4 · Prioritization",
            summary:
              "Identify cue clusters that require prompt assessment and communicate urgency without minimizing the patient’s concern.",
            keyPoints: [
              "Use the patient’s reported symptoms, timing, and associated findings together.",
              "Prioritize safety-focused follow-up and clear return precautions.",
              "Document the concern and the planned disposition accurately.",
            ],
            image: media.reasoning,
            imageAlt: "Clinical reasoning study workspace with cue cards.",
            infographic: { src: "/manus-storage/Pregnancy_Suggestive_and_Positive_Indicators_db46fce4.webp", alt: "Pregnancy indicators infographic.", title: "Cue classification" },
            activity: {
              prompt: "What makes a warning-sign assessment stronger than checking one isolated symptom?",
              choices: ["It uses a cue cluster and clinical context", "It avoids patient questions", "It focuses only on a memorized list"],
              answer: 0,
              rationale: "Clinical reasoning integrates the pattern, timing, associated cues, and appropriate disposition.",
            },
          },
          {
            id: "1523-d4-lactation",
            title: "Preparation and supportive teaching",
            eyebrow: "Day 4 · Patient education",
            summary:
              "Prepare students to offer respectful, practical education while recognizing that teaching is individualized and ongoing.",
            keyPoints: [
              "Assess readiness, barriers, and patient priorities before teaching.",
              "Use teach-back and concise written reinforcement.",
              "Connect education to a follow-up plan rather than a single encounter.",
            ],
            image: media.lactation,
            imageAlt: "Breast care and lactation preparation educational visual.",
            infographic: { src: media.lactation, alt: "Breast care and lactation preparation guide.", title: "Preparation notes" },
            activity: {
              prompt: "Which action best checks whether patient education was understood?",
              choices: ["Provide a handout only", "Use teach-back in the patient’s own words", "Repeat the same sentence more loudly"],
              answer: 1,
              rationale: "Teach-back helps the nurse assess understanding and adapt education without blaming the patient.",
            },
          },
        ],
      },
    ],
  },
  {
    id: "2514",
    title: "RNSG 2514",
    fullTitle: "At-Risk Maternal & Newborn Nursing",
    label: "Complications pathway",
    description:
      "Practice cue recognition, prioritization, and escalation for maternal-newborn complications across antepartum, intrapartum, and postpartum care.",
    accent: "oxblood",
    days: [
      {
        id: "2514-day-1",
        number: 1,
        title: "Early complications & bleeding",
        subtitle: "Recognize urgency, distinguish patterns, and organize a safe first response.",
        color: "oxblood",
        dayCaseId: "pph",
        subjects: [
          {
            id: "2514-d1-bleeding",
            title: "Bleeding patterns in pregnancy",
            eyebrow: "Day 1 · Deterioration recognition",
            summary:
              "Use gestational timing, pain, bleeding characteristics, and maternal-fetal cues to organize clinical reasoning around pregnancy bleeding.",
            keyPoints: [
              "Treat bleeding as a cue requiring structured assessment and appropriate escalation.",
              "Avoid unsafe assumptions; distinguish patterns through the full cue set.",
              "Prioritize stabilization, communication, and protocol-aware next actions.",
            ],
            image: media.bleeding,
            imageAlt: "Bleeding in pregnancy early versus late infographic.",
            infographic: { src: media.previa, alt: "Placenta previa versus placental abruption infographic.", title: "Pattern comparison" },
            activity: {
              prompt: "Which approach best supports safe reasoning when bleeding is reported during pregnancy?",
              choices: ["Classify timing, associated cues, and severity", "Use color alone as a diagnosis", "Wait for symptoms to resolve without assessment"],
              answer: 0,
              rationale: "A structured cue set supports prioritization and prevents premature conclusions.",
            },
          },
          {
            id: "2514-d1-promise",
            title: "Membranes, nausea & early-pregnancy loss",
            eyebrow: "Day 1 · Focused response",
            summary:
              "Connect patient-reported symptoms to timely assessment, infection awareness, hydration status, and supportive nursing care.",
            keyPoints: [
              "Use changes in symptoms and clinical context to identify priorities.",
              "Recognize when an assessment method is restricted by safety considerations.",
              "Combine physical care with respectful communication and follow-up.",
            ],
            image: media.pprom,
            imageAlt: "PROM and PPROM prelabor rupture of membranes infographic.",
            infographic: { src: media.hyperemesis, alt: "Hyperemesis gravidarum management infographic.", title: "Focused management ladder" },
            activity: {
              prompt: "In a time-sensitive maternal complication, what should guide the first response?",
              choices: ["A structured safety assessment and escalation pathway", "The student’s preferred memorization trick", "A single isolated finding"],
              answer: 0,
              rationale: "Safety depends on integrating cues and following an appropriate escalation pathway.",
            },
          },
        ],
      },
      {
        id: "2514-day-2",
        number: 2,
        title: "Hypertension, metabolism & preterm risk",
        subtitle: "Read the trend, anticipate risk, and select the next safest action.",
        color: "teal",
        dayCaseId: "preeclampsia-hellp",
        subjects: [
          {
            id: "2514-d2-hypertension",
            title: "Hypertensive disorders & HELLP",
            eyebrow: "Day 2 · Trend interpretation",
            summary:
              "Link blood-pressure changes, symptoms, and laboratory patterns to early recognition of worsening maternal risk.",
            keyPoints: [
              "Interpret trends in context rather than relying on a single data point.",
              "Recognize severe features and appropriate escalation cues.",
              "Connect medication safety and monitoring to clearly defined nursing priorities.",
            ],
            image: media.hypertension,
            imageAlt: "Hypertensive disorders of pregnancy spectrum infographic.",
            infographic: { src: media.hellp, alt: "HELLP syndrome and DIC laboratory infographic.", title: "Read the laboratory picture" },
            activity: {
              prompt: "What is the most useful way to interpret a concerning laboratory value in a maternal complication?",
              choices: ["Compare it with the broader trend and clinical cues", "Ignore associated symptoms", "Use it without considering timing"],
              answer: 0,
              rationale: "Trend interpretation combines laboratory, symptom, vital-sign, and timing data.",
            },
          },
          {
            id: "2514-d2-gdm-preterm",
            title: "GDM and preterm labor",
            eyebrow: "Day 2 · Anticipation",
            summary:
              "Use focused assessment, patient teaching, and newborn-risk awareness to prepare for complications before they escalate.",
            keyPoints: [
              "Distinguish screening, diagnosis, and ongoing management goals.",
              "Identify warning signs and risks associated with preterm labor.",
              "Relate maternal conditions to newborn surveillance needs.",
            ],
            image: media.gdm,
            imageAlt: "Gestational diabetes pathophysiology and glucose testing infographic.",
            infographic: { src: media.preterm, alt: "Preterm labor medication and warning-sign infographic.", title: "Delay, mature, monitor" },
            activity: {
              prompt: "Why does trend data matter in maternal-newborn risk assessment?",
              choices: ["It can reveal change before one value explains the whole picture", "It eliminates the need for assessment", "It only matters after discharge"],
              answer: 0,
              rationale: "Changes over time can reveal worsening risk and support timely action.",
            },
          },
        ],
      },
      {
        id: "2514-day-3",
        number: 3,
        title: "Labor dysfunction & intrapartum safety",
        subtitle: "Match cues to causes, evaluate fetal tolerance, and act in sequence.",
        color: "gold",
        dayCaseId: "dystocia-failed-induction",
        subjects: [
          {
            id: "2514-d3-dystocia",
            title: "The 4 Ps of labor progress",
            eyebrow: "Day 3 · Pattern recognition",
            summary:
              "Use power, passenger, passage, and psyche to structure reasoning about dysfunctional labor and fetal tolerance.",
            keyPoints: [
              "Match clinical cues to the likely contributor before selecting an intervention.",
              "Interpret fetal heart-rate patterns within the labor context.",
              "Recognize shoulder dystocia as an emergency that requires coordinated response.",
            ],
            image: media.dystocia,
            imageAlt: "Dystocia and the four Ps of abnormal labor infographic.",
            infographic: { src: media.induction, alt: "Labor induction versus augmentation infographic.", title: "Induction and augmentation" },
            activity: {
              prompt: "Which framework organizes causes of stalled labor into a clinical reasoning structure?",
              choices: ["The 4 Ps", "A random list of tasks", "Only the fetal heart rate"],
              answer: 0,
              rationale: "The 4 Ps provide a structured starting point for analyzing labor progress.",
            },
          },
          {
            id: "2514-d3-cord",
            title: "Cord compression & emergency response",
            eyebrow: "Day 3 · Priority action",
            summary:
              "Recognize cue patterns that can signal compromised fetal oxygenation and organize the first safety-focused actions.",
            keyPoints: [
              "Notice abrupt changes after membrane rupture and assess the full clinical picture.",
              "Use a team-based emergency response with clear role communication.",
              "Keep patient positioning, urgent preparation, and fetal assessment connected to protocol.",
            ],
            image: media.cord,
            imageAlt: "Cord compression and prolapse obstetric emergency infographic.",
            infographic: { src: media.cord, alt: "Cord compression and prolapse emergency summary.", title: "Emergency sequence" },
            activity: {
              prompt: "In an obstetric emergency, what supports a reliable response?",
              choices: ["Clear role communication and a practiced sequence", "Working alone without escalation", "Ignoring the change in fetal status"],
              answer: 0,
              rationale: "Emergency care requires coordinated escalation, role clarity, and protocol-aware sequencing.",
            },
          },
        ],
      },
      {
        id: "2514-day-4",
        number: 4,
        title: "Newborn transition & complex outcomes",
        subtitle: "Connect maternal history, newborn cues, and compassionate multidisciplinary care.",
        color: "blue",
        dayCaseId: "cord-prolapse",
        subjects: [
          {
            id: "2514-d4-newborn",
            title: "Compromised newborn patterns",
            eyebrow: "Day 4 · Maternal-newborn transition",
            summary:
              "Compare common respiratory-transition patterns and recognize how maternal history and newborn assessment shape priorities.",
            keyPoints: [
              "Use presentation, risk factors, and response to care to organize reasoning.",
              "Differentiate supportive monitoring from situations requiring more immediate escalation.",
              "Communicate findings clearly during team-based newborn care.",
            ],
            image: media.newborn,
            imageAlt: "Compromised newborn TTN, RDS, and MAS comparison infographic.",
            infographic: { src: media.newborn, alt: "Compromised newborn summary infographic.", title: "Respiratory pattern comparison" },
            activity: {
              prompt: "What makes newborn-risk assessment stronger?",
              choices: ["Combining maternal history with newborn findings", "Using only one observation", "Separating the newborn from maternal context"],
              answer: 0,
              rationale: "Maternal history and newborn assessment together create a more complete clinical picture.",
            },
          },
          {
            id: "2514-d4-compassionate",
            title: "Safety, autonomy & compassionate care",
            eyebrow: "Day 4 · Communication",
            summary:
              "Practice respectful care in high-stakes situations by holding physical safety, patient choice, and culturally responsive communication together.",
            keyPoints: [
              "Use clear, compassionate language in urgent and sensitive situations.",
              "Respect autonomy, culture, and support-person preferences.",
              "Document care, escalation, and follow-up in a timely, patient-centered way.",
            ],
            image: media.atlas,
            imageAlt: "Editorial maternal-newborn nursing study atlas.",
            infographic: { src: media.cord, alt: "Cord prolapse emergency infographic.", title: "Rehearse the sequence" },
            activity: {
              prompt: "Which principle should remain present in sensitive maternal-newborn care?",
              choices: ["Respectful, patient-centered communication", "Avoiding patient preferences", "Using urgency as a reason to stop listening"],
              answer: 0,
              rationale: "Urgent and sensitive care still requires respectful communication and attention to patient preferences.",
            },
          },
        ],
      },
    ],
  },
];

export const caseActivities: CaseActivity[] = [
  { id: "adolescent-contraception", courseId: "1523", primaryDay: "Day 1", title: "Adolescent contraception", focus: "Eligibility, counseling, dual protection, and shared decision-making.", description: "An unfolding scenario about patient-centered contraception counseling and risk-aware education.", tags: ["Counseling", "Safety", "Autonomy"], status: "review-required", sourceFile: "RNSG1523_Case_AdolescentContraception_v1.md.md", steps: ["Recognize Cues", "Analyze Cues", "Prioritize Hypotheses", "Generate Solutions", "Take Actions", "Evaluate Outcomes"] },
  { id: "rh-negative", courseId: "1523", primaryDay: "Day 2–3", crossDay: true, title: "Rh-negative pregnancy", focus: "Prevention of alloimmunization and chronological prophylaxis reasoning.", description: "An unfolding prenatal case focused on connecting obstetric history, timing, and appropriate follow-up.", tags: ["Prenatal care", "Timeline", "Prevention"], status: "review-required", sourceFile: "RNSG1523_Case_RhNegative_v1.md.md", steps: ["Recognize Cues", "Analyze Cues", "Prioritize Hypotheses", "Generate Solutions", "Take Actions", "Evaluate Outcomes"] },
  { id: "gdm-diagnosis", courseId: "1523", primaryDay: "Day 3–4", crossDay: true, title: "GDM diagnosis", focus: "Screening, diagnosis, teaching, and longitudinal glucose-pattern reasoning.", description: "An unfolding case that distinguishes screening from diagnostic information and follows early management teaching.", tags: ["Screening", "Nutrition", "Trend"], status: "review-required", sourceFile: "RNSG1523_Case_GDMDiagnosis_v1.md.md", steps: ["Recognize Cues", "Analyze Cues", "Prioritize Hypotheses", "Generate Solutions", "Take Actions", "Evaluate Outcomes"] },
  { id: "rising-bp", courseId: "1523", primaryDay: "Day 3–4", crossDay: true, title: "Rising blood pressure", focus: "Surveillance for preeclampsia and escalation for worsening signs.", description: "A longitudinal prenatal scenario centered on vital-sign trends, symptoms, and safe disposition.", tags: ["Hypertension", "Surveillance", "Escalation"], sensitivity: "urgent", status: "review-required", sourceFile: "RNSG1523_Case_RisingBP_v1.md.md", steps: ["Recognize Cues", "Analyze Cues", "Prioritize Hypotheses", "Generate Solutions", "Take Actions", "Evaluate Outcomes"] },
  { id: "warning-triage", courseId: "1523", primaryDay: "Day 3–4", crossDay: true, title: "Warning-sign triage", focus: "Urgent prenatal triage and warning-sign pattern recognition.", description: "A time-sensitive triage case that emphasizes cue clustering and appropriate referral.", tags: ["Triage", "Warning signs", "Prioritization"], sensitivity: "urgent", status: "review-required", sourceFile: "RNSG1523_Case_WarningSignTriage_v1.md.md", steps: ["Recognize Cues", "Analyze Cues", "Prioritize Hypotheses", "Generate Solutions", "Take Actions", "Evaluate Outcomes"] },
  { id: "abnormal-quad-screen", courseId: "1523", primaryDay: "Day 4", title: "Abnormal quad screen", focus: "Screening interpretation, nondirective counseling, consent, and autonomy.", description: "An unfolding counseling case that keeps screening risk distinct from diagnosis and supports patient choice.", tags: ["Screening", "Counseling", "Ethics"], sensitivity: "sensitive", status: "review-required", sourceFile: "RNSG1523_Case_AbnormalQuadScreen_v1.md.md", steps: ["Recognize Cues", "Analyze Cues", "Prioritize Hypotheses", "Generate Solutions", "Take Actions", "Evaluate Outcomes"] },
  { id: "pph", courseId: "2514", primaryDay: "Day 1", title: "Postpartum hemorrhage", focus: "4 Ts, quantified blood loss, uterotonic safety, and escalation.", description: "An emergency-focused unfolding case supporting structured recognition and coordinated response.", tags: ["Hemorrhage", "Emergency", "4 Ts"], sensitivity: "urgent", status: "review-required", sourceFile: "RNSG2514_Case_PPH_v1.md.md", steps: ["Recognize Cues", "Analyze Cues", "Prioritize Hypotheses", "Generate Solutions", "Take Actions", "Evaluate Outcomes"] },
  { id: "preeclampsia-hellp", courseId: "2514", primaryDay: "Day 2", title: "Preeclampsia → HELLP", focus: "Severe features, laboratory trends, magnesium safety, and delivery planning.", description: "An unfolding maternal-deterioration case focused on trends, monitoring, and safe escalation.", tags: ["Hypertension", "HELLP", "Laboratory trends"], sensitivity: "urgent", status: "review-required", sourceFile: "RNSG2514_Case_PreeclampsiaHELLP_v1.md.md", steps: ["Recognize Cues", "Analyze Cues", "Prioritize Hypotheses", "Generate Solutions", "Take Actions", "Evaluate Outcomes"] },
  { id: "pprom-30wk", courseId: "2514", primaryDay: "Day 2", title: "PPROM at 30 weeks", focus: "Prematurity, infection surveillance, and changing clinical cues.", description: "An unfolding case that follows maternal-fetal findings across multiple decision points.", tags: ["PPROM", "Infection", "Prematurity"], sensitivity: "urgent", status: "review-required", sourceFile: "RNSG2514_Case_PPROM30wk_v1.md.md", steps: ["Recognize Cues", "Analyze Cues", "Prioritize Hypotheses", "Generate Solutions", "Take Actions", "Evaluate Outcomes"] },
  { id: "dystocia-failed-induction", courseId: "2514", primaryDay: "Day 3", title: "Dystocia & failed induction", focus: "Tachysystole, fetal-heart-rate trends, labor dysfunction, and escalation.", description: "A labor-progression case that combines maternal and fetal cues with sequential action decisions.", tags: ["Labor dysfunction", "FHR", "Escalation"], sensitivity: "urgent", status: "review-required", sourceFile: "RNSG2514_Case_DystociaFailedInduction_v1.md.md", steps: ["Recognize Cues", "Analyze Cues", "Prioritize Hypotheses", "Generate Solutions", "Take Actions", "Evaluate Outcomes"] },
  { id: "uterine-rupture", courseId: "2514", primaryDay: "Day 3–4", crossDay: true, title: "Uterine rupture during TOLAC", focus: "Fetal compromise, maternal hemorrhage, and emergency operative response.", description: "A critical intrapartum case built around rapid cue recognition and team coordination.", tags: ["TOLAC", "Emergency", "Maternal-fetal"], sensitivity: "urgent", status: "review-required", sourceFile: "RNSG2514_Case_UterineRuptureTOLAC_v1.md.md", steps: ["Recognize Cues", "Analyze Cues", "Prioritize Hypotheses", "Generate Solutions", "Take Actions", "Evaluate Outcomes"] },
  { id: "cord-prolapse", courseId: "2514", primaryDay: "Day 4", title: "Cord prolapse", focus: "Recognition after rupture of membranes, decompression, positioning, and expedited birth.", description: "A high-priority obstetric emergency case focused on immediate coordinated response.", tags: ["Cord prolapse", "Emergency", "Fetal status"], sensitivity: "urgent", status: "review-required", sourceFile: "RNSG2514_Case_CordProlapse_v1.md.md", steps: ["Recognize Cues", "Analyze Cues", "Prioritize Hypotheses", "Generate Solutions", "Take Actions", "Evaluate Outcomes"] },
  { id: "gdm-neonatal", courseId: "2514", primaryDay: "Day 4", crossDay: true, title: "GDM labor & neonatal hypoglycemia", focus: "Maternal intrapartum context and newborn glucose-risk recognition.", description: "A maternal-newborn transition case that links maternal history to newborn assessment priorities.", tags: ["GDM", "Newborn", "Transition"], status: "review-required", sourceFile: "RNSG2514_Case_GDMLaborNeonatalHypoglycemia_v1.md.md", steps: ["Recognize Cues", "Analyze Cues", "Prioritize Hypotheses", "Generate Solutions", "Take Actions", "Evaluate Outcomes"] },
  { id: "iufd-bereavement", courseId: "2514", primaryDay: "Day 4", title: "IUFD & bereavement", focus: "Maternal safety, autonomy, cultural preferences, and compassionate care.", description: "A sensitive unfolding case that balances physical monitoring with patient-centered bereavement support.", tags: ["Bereavement", "Compassion", "Safety"], sensitivity: "sensitive", status: "review-required", sourceFile: "RNSG2514_Case_IUFDBereavement_v1.md.md", steps: ["Recognize Cues", "Analyze Cues", "Prioritize Hypotheses", "Generate Solutions", "Take Actions", "Evaluate Outcomes"] },
];

export const supportResources = [
  { title: "Exit tickets", description: "Daily retrieval practice and remediation links.", icon: "ClipboardCheck" },
  { title: "High-yield review", description: "Fast comparison cards and clinical cue sheets.", icon: "Sparkles" },
  { title: "Terminology lab", description: "Searchable definitions, flashcards, and distinctions.", icon: "BookOpenCheck" },
  { title: "Question practice", description: "Student-safe, rationale-first practice items.", icon: "BrainCircuit" },
];

export { media };
