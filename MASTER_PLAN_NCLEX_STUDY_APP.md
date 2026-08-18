# Master Plan: Vercel-Deployable NCLEX Maternal, Newborn, and Reproductive Study Application

**Status:** Draft for faculty approval. This document defines the proposed application and delivery process only. **No application implementation is authorized until approval is provided.**

**Credits:** Designed and built by **Dr. Victor Garcia Martinez, MSN-FNP, APRN, RN**.

## 1. Purpose and Product Boundary

The repository will become a responsive, browser-based NCLEX study application for maternal, newborn, and reproductive nursing. It will convert the existing RNSG 1523 and RNSG 2514 study guides into short, day-organized HTML presentations. Each subject will end with its matching visual summary infographic, and each instructional day will conclude with one active-learning experience that applies Next Generation NCLEX-style clinical-judgment reasoning.

The application will be a **learning and remediation resource**, not an official NCLEX product and not a clinical decision-support tool. Clinical content will remain traceable to the repository’s source guides and will be subject to faculty and current-source review before release. The plan preserves the documented four-day structure for RNSG 1523 and RNSG 2514 while adding a consistent student experience across both courses. [1] [2] [3]

| Included in the approved build scope | Explicitly deferred unless later approved |
| --- | --- |
| Eight day-level study paths, HTML teaching presentations, instructor-approved visuals, existing infographics, NGN-style activities, source/credit pages, progress saved in the browser, accessibility support, and Vercel deployment | Student accounts, gradebook/LMS synchronization, faculty analytics, cloud persistence, adaptive scoring, live collaboration, payment, clinical advice, or publication of faculty-only exam-item banks |

> **Approval gate:** The plan assumes an initial static, student-facing application. A future authenticated faculty or student portal would require a separate privacy, data, and architecture decision.

## 2. Source Analysis and Content Baseline

All **16 Markdown files** currently in the repository were analyzed: eight daily study guides, two course indexes, one RNSG 1523 infographic specification, and five repository-wide planning, presentation, lesson-plan, or infographic-production documents. The study guides establish the primary instructional sequence; the root indexes provide textbook and objective mapping; the public planning documents define visual, accessibility, source, and assessment expectations. [1] [2] [3] [4] [5] [6] [7] [8]

The existing media inventory contains **22 files** in `1523 infographics`, **14 optimized JPEG files** in `2514`, and the faculty portrait `public/vhgm pic foto.png`. The plan treats these as source assets. Their final routing into the deployable application will be controlled by an asset manifest rather than ad hoc file references.

### 2.1 Course-Day Presentation Map

| Course and day | HTML presentation subjects | Existing or planned summary infographics | Day-end NGN active-learning activity |
| --- | --- | --- | --- |
| **RNSG 1523 — Day 1** | Menstrual cycle; dysmenorrhea; menopause; contraception; fertility awareness; preconception care and genetics | Day 1 infographic specification plus available reproductive-system assets in `1523 infographics` | Reproductive counseling case: evaluate reproductive goals, contraindications, STI needs, preconception risks, and patient teaching. |
| **RNSG 1523 — Day 2** | Pregnancy signs; hCG; GTPAL; EDD; initial prenatal assessment; maternal adaptations; follow-up care | Pregnancy-signs, obstetric-history, EDD, prenatal-visit, and maternal-adaptation assets are available; final topic-to-asset mapping remains a content-production task | Prenatal triage case: interpret fetal movement, positional symptoms, fundal-height or visit data, and choose the safest next action. |
| **RNSG 1523 — Day 3** | Nutrition and weight gain; common discomforts; medications and immunizations; breast care; self-care; warning signs; psychosocial adaptation | Nutrition, medication-safety, breast-care, and related assets are available; remaining topic coverage requires an approved asset map | Pregnancy self-care and warning-sign case: distinguish expected discomforts from findings requiring escalation. |
| **RNSG 1523 — Day 4** | Screening versus diagnostic testing; NST; BPP; ethics and consent; antepartum surveillance | Prenatal-screening, diagnostic-testing, and assessment assets are available; NST/BPP and ethics summaries should be added if absent after review | Antepartum surveillance case: recognize cues, interpret test results, prioritize hypotheses, and select follow-up actions. |
| **RNSG 2514 — Day 1** | Early and late pregnancy bleeding; spontaneous abortion; ectopic and molar pregnancy; cervical insufficiency; placenta previa/abruption; DIC; hyperemesis | Existing optimized images include bleeding comparison, spontaneous-abortion types, previa versus abruption, and hyperemesis | Obstetric hemorrhage branching case: discriminate previa from abruption, recognize instability, and sequence priority nursing actions. |
| **RNSG 2514 — Day 2** | Hypertensive disorders; preeclampsia/eclampsia; magnesium safety; HELLP/DIC; gestational diabetes; preterm labor; PROM/PPROM | Existing optimized images include hypertensive spectrum, HELLP/DIC, gestational diabetes, preterm labor, and PROM/PPROM | Maternal deterioration case: interpret serial cues and labs, identify the priority problem, and select escalation and medication-safety actions. |
| **RNSG 2514 — Day 3** | Dystocia; shoulder dystocia; induction and augmentation; Bishop score; oxytocin safety; cord prolapse | Existing optimized images include dystocia, induction versus augmentation, and cord compression/prolapse; the duplicate dystocia image requires faculty selection | Intrapartum emergency case: respond to sudden fetal bradycardia after membrane rupture by ordering immediate cord-prolapse actions. |
| **RNSG 2514 — Day 4** | Birth injuries; hyperbilirubinemia; infant of a diabetic mother; neonatal sepsis; respiratory conditions; newborn resuscitation; perinatal loss | A compromised-newborn respiratory comparison is available; additional faculty-approved summaries are required for the remaining Day 4 subjects | Non-vigorous newborn case: prioritize ABC actions in a meconium-stained birth scenario and evaluate the initial response. |

The RNSG 1523 day map is grounded in the four study guides and corresponding lesson plan. [1] [5] The RNSG 2514 day map is grounded in the four complications study guides and the RNSG 2514 lesson plan. [2] [6] The repository-wide production plan supplies the broader presentation, infographic, accessibility, and assessment direction. [3]

### 2.2 Presentation Pattern for Every Subject

Each subject will be implemented as a short **HTML presentation deck** rather than a long scroll of copied Markdown. A deck will use a predictable progression: a subject opener with learning focus, concise concept slides, a visual or rights-cleared internet image on every teaching slide, decision-critical callouts, accessible comparison tables or diagrams, the matching infographic summary, a short knowledge check where appropriate, and an exit link to the day’s NGN activity.

| Slide family | Student purpose | Required elements |
| --- | --- | --- |
| **Day overview** | Establish sequence, objectives, and completion state | Day title, subject cards, estimated learning path, course navigation, and progress reset option |
| **Subject opener** | Introduce one coherent study topic | Plain-language objective, clinical relevance, and one contextual visual |
| **Teach slide** | Explain one bounded concept | Concise text, one rights-cleared instructional visual, source note, alt text, and labeled priority/core/take-note cue |
| **Compare or apply slide** | Support discrimination between similar conditions or actions | Accessible table, diagram, timeline, calculation workspace, or sequence; color is never the only signal |
| **Infographic summary** | Consolidate the preceding subject | Full infographic, descriptive alt text, expandable plain-text companion, image credit, and source citation |
| **NGN practice and debrief** | Apply clinical judgment and receive transparent feedback | Case information, interaction instructions, feedback, rationale, clinical-judgment tags, and a return-to-day path |
| **Closure** | Reinforce takeaways and support next steps | Key takeaways, resource links, completion state, and next subject/day navigation |

## 3. Learning Design and NGN Activity Framework

Every day will contain one **unfolding case activity**. The case will use a student-safe scenario and will ask learners to recognize and prioritize information, choose actions, and evaluate a changing clinical situation. The activity structure will align each interaction to the NCSBN Clinical Judgment Measurement Model’s measurable cognitive work without representing itself as an official NCLEX examination. [9]

| NGN learning step | In-app behavior | Supported interaction patterns |
| --- | --- | --- |
| Recognize cues | Review history, assessment, vital signs, labs, visual data, and provider orders | Highlight/select cues; tabbed case information; chart review |
| Analyze cues | Relate findings to the evolving problem | Matrix selection; explanation prompt; paired comparison |
| Prioritize hypotheses | Identify the most urgent plausible concern | Rank-order list; priority selection; bow-tie-style structure |
| Generate solutions | Identify safe nursing options | Multiple response; action menu; medication-safety check |
| Take actions | Sequence a response under time-sensitive conditions | Ordered response; drag-to-sequence alternative using keyboard controls |
| Evaluate outcomes | Interpret response and determine what to reassess or escalate | Outcome selection; follow-up cue review; debrief rationale |

The activity engine will be **data-driven**. Content authors will define the case stem, cues, options, correct answers, rationales, references, debrief, and clinical-judgment tags in reviewed content files. This avoids hard-coding individual questions into page components, enables faculty review of each answer key, and permits later expansion without redesigning the application.

## 4. Student Experience, Navigation, and Credits

The home page will present two clear course gateways: **RNSG 1523: Maternal, Newborn, and Reproductive Foundations** and **RNSG 2514: At-Risk Maternal and Newborn Nursing**. Each gateway will display four day cards, completion indicators, topic summaries, and direct links to resume progress. A day page will provide a persistent presentation navigator, clear prior/next controls, and direct access to the day’s NGN case without trapping the student in a lesson.

The introductory screen and a dedicated credits page will identify the faculty author exactly as requested: **“Designed and built by Dr. Victor Garcia Martinez, MSN-FNP, APRN, RN.”** The existing portrait in `public/vhgm pic foto.png` will appear only in the introductory/credits context with descriptive alt text. The source presentation standard calls for a faculty portrait on the introductory slide and requires an image/source record; the application will implement the equivalent credits and attribution treatment. [4]

### 4.1 Visual System and Accessibility

The visual system will adapt the established palette: deep blue `#003768` for core concepts, red `#B30838` for danger or priority actions, tan `#F1C585` for must-remember content, and light blue `#C7EAFB` for supporting content. Labels, icons, headings, and written priority statements will accompany every color cue so that meaning does not depend on color alone. [3] [4]

The application will use semantic HTML, visible keyboard focus, logical heading order, appropriately labeled controls, responsive layouts, reduced-motion support, descriptive alt text, a text companion for every infographic, and an accessible alternate to drag-only interactions. Every visual that is instructional will have both a meaningful alternative description and a source/credit record. This approach extends the requirements already documented for the presentation system and infographic workflow. [3] [4] [8]

## 5. Content and Asset Production Workflow

The application will not hotlink arbitrary web images. Each teaching slide will receive one approved visual that is thematically relevant to its subject, but every external image must first clear source, license, attribution, accuracy, and accessibility review. The asset registry will preserve the creator, original URL, license/permission basis, date retrieved, placement, alt text, and any modifications. The repository presentation standard explicitly requires this record and prohibits misleading clinical scenes or unapproved logo use. [4]

| Asset category | Implementation decision | Required quality control |
| --- | --- | --- |
| **Existing infographics** | Retain the repository folders as authoring source; copy only approved, optimized versions into the build output through a future asset-sync step | Topic mapping, descriptive alt text, plain-text companion, correct filename, and visual QA |
| **Faculty portrait** | Preserve the original project-local file; use it in the approved introduction/credits context | Confirm alt text, placement, and responsive crop without altering the person’s identity |
| **Internet teaching images** | Acquire only faculty-approved, rights-cleared images from an approved source list; optimize locally to WebP/JPEG before deployment | Rights log, citation/attribution, clinical appropriateness, no embedded copyright marks, and accessible description |
| **New summary infographics** | Generate or source only after the related subject’s educational content and labels are clinically reviewed | One concept per image, text companion, source traceability, and faculty sign-off |
| **Tables, timelines, and calculations** | Render as responsive HTML components rather than screenshots whenever students must read, search, or interact with them | Keyboard access, responsive behavior, correct terminology, and content review |

The first content-production pass will build a **topic-to-asset manifest** for all eight days. The manifest will identify each teaching deck, required internet visual, assigned infographic, source record, alt text, plain-text companion, and approval status. It will resolve visible repository gaps, particularly summary coverage for RNSG 1523 Days 2–4 and RNSG 2514 Day 4.

## 6. Content Model and Repository Architecture

The existing study-guide and infographic folders will remain intact as source material. A future build will introduce a maintainable presentation layer at the repository root so Vercel can deploy the project directly without relocating the source documents prematurely.

| Proposed path | Responsibility |
| --- | --- |
| `src/` | React components, routes, accessible interaction components, and application styles |
| `src/pages/` | Home, course, day, subject-deck, activity, credits, and source pages |
| `src/components/` | Reusable deck frame, slide types, infographic viewer, progress indicator, NGN interaction controls, and accessibility helpers |
| `content/courses/` | Faculty-reviewed course/day/topic data derived from the Markdown guides; this is the runtime source for presentation text |
| `content/activities/` | Reviewed NGN activity data, answer keys, rationales, clinical-judgment tags, and references |
| `content/assets/asset-registry.json` | Visual-source, license, attribution, alt-text, placement, and approval metadata |
| `scripts/` | Future content validation and asset-sync automation executed during development or build |
| `public/` | Portrait and other deployable static files; source documents may remain outside the application’s route structure |
| `1523_Study_Guides/`, `2514_Study_Guides/`, `1523 infographics/`, `2514/` | Existing authored source materials; no migration will occur without approval |
| `MASTER_PLAN_NCLEX_STUDY_APP.md` | This approved planning baseline |

The application will use typed content schemas so a missing infographic, missing alt text, unapproved image source, unresolved answer key, broken route, or incomplete rationale fails validation before deployment. Browser-local storage will retain only non-sensitive study progress and preferences in the initial release. No learner name, grades, protected health information, or patient data will be collected.

## 7. Vercel Deployment Architecture

The initial application will be a **React + TypeScript + Vite static single-page application** with client-side routing and no required server-side data store. Vercel supports Vite projects and can create preview deployments from the connected Git repository. [10] [11] This choice is appropriate for the approved initial scope because all student content, activities, and assets are reviewable source-controlled files.

| Deployment requirement | Planned configuration | Acceptance condition |
| --- | --- | --- |
| **Repository connection** | Connect `victogarcia4/rnsg-1523-2514` to a Vercel project after the application exists | Vercel identifies the repository and produces a preview deployment for a pull request or branch push |
| **Framework and build** | Vite project at the repository root; package scripts will run type check, asset validation, and production build | `pnpm build` completes locally and in Vercel; generated output is `dist/` |
| **Routing** | Client-side routes for course, day, subject, activity, credits, and sources | A root `vercel.json` rewrite will send deep-linked SPA routes to `index.html`, as required for Vite SPA deep links on Vercel [10] |
| **Static content delivery** | Optimized images and generated presentation assets included in the build output | Lessons, infographics, portrait, and approved visuals load through Vercel’s static delivery without external hotlink dependency |
| **Environment separation** | Preview deployments for review; production deploys from the approved default branch | Preview content never uses production-only secrets or unapproved external services |
| **Future server features** | Add a database, authentication, or Vercel Functions only after an approved data-governance scope | No server feature is added without an explicit privacy, security, and operational plan |
| **Monitoring and release verification** | Review the Vercel build output, routes, preview URL, responsive layouts, and production URL before release | No production deployment is approved with broken deep links, missing assets, or failed content validation |

The Vercel deployment section intentionally uses a static-first architecture. It avoids unnecessary server components, protects the course from operational complexity, and preserves a clean upgrade path if approved requirements later include accounts, faculty dashboards, or analytics. Vercel’s documentation notes automatic Vite detection, Git-linked preview deployments, and the SPA deep-link rewrite requirement that this plan will address. [10] [11]

## 8. Quality, Safety, and Review Gates

The current guides include at least two source-level discrepancies requiring resolution before conversion to graded or scored interactions: the RNSG 1523 Day 1 genetic-counseling/self-check gap and the RNSG 1523 Day 3 Tdap answer-key inconsistency. Time-sensitive clinical guidance, medication details, screening thresholds, vaccination recommendations, legal statements, and references across both courses must undergo faculty and authoritative-source review before publication. [1] [2] [5] [6]

| Gate | Required reviewer outcome | Blocks release if unresolved |
| --- | --- | --- |
| **Content outline** | Faculty approves the day/topic sequence and learning objectives | Missing subject, duplicate subject, or unapproved rearrangement |
| **Clinical review** | Faculty verifies every clinical claim, medication statement, calculation, NGN rationale, and cited authority | Unverified or contradictory health content |
| **Asset review** | Faculty approves the teaching image, infographic, rights record, alt text, and placement for each subject | Hotlinked, unlicensed, misleading, or inaccessible visual |
| **Assessment review** | Faculty approves all student-safe NGN case answers, rationales, feedback, and remediation text | Ambiguous, incorrect, or faculty-only content exposed to students |
| **Accessibility review** | Keyboard, small-screen, screen-reader, color-independent, and reduced-motion checks pass | Any critical content inaccessible without a mouse or color vision |
| **Technical and Vercel review** | Automated checks and a Vercel preview test pass | Broken build, deep-link failure, missing asset, or unsupported browser issue |

## 9. Delivery Roadmap After Approval

The following implementation sequence starts only after the master plan is approved. It is organized to produce an early, reviewable Vercel preview before mass content conversion.

| Milestone | Deliverable | Faculty decision point |
| --- | --- | --- |
| **0. Plan approval** | Approved scope, stack, visual system, content-governance rules, and content priorities | Authorize implementation |
| **1. Application foundation** | Vite/React project, routes, design tokens, Vercel configuration, course/day navigation, and preview deployment | Approve visual shell and deployment behavior |
| **2. Content pipeline and pilot** | Validated content schemas, asset registry, `1523 Day 1` pilot presentation, one infographic summary flow, and one NGN activity | Approve deck pattern, visual source treatment, and case feedback |
| **3. RNSG 1523 production** | Days 2–4 presentations, approved visuals, infographics, and day-end activities | Approve content completion and remediation flow |
| **4. RNSG 2514 production** | Days 1–4 presentations, approved visuals, infographics, and day-end activities | Approve at-risk maternal/newborn content and emergency-case handling |
| **5. Quality assurance** | Clinical/asset review records, accessibility audit, tests, mobile review, Vercel preview review, and content corrections | Approve production release |
| **6. Production launch and handoff** | Vercel production deployment, repository documentation, maintenance checklist, and update workflow | Confirm live release and ownership |

## 10. Approval Decisions Requested

Approval of this master plan authorizes only **Milestone 1** after the following decisions are confirmed. Any undecided item will be recorded as a deliberate backlog item rather than assumed.

| Decision | Recommended initial answer | Approval needed |
| --- | --- | --- |
| Application stack | React, TypeScript, Vite, static-first SPA, and Vercel | Yes |
| Student data | No sign-in; browser-local progress only | Yes |
| Pilot day | RNSG 1523 Day 1, because it has the most detailed existing infographic specification | Yes |
| Image source policy | Faculty-approved, rights-cleared images only; no arbitrary hotlinks | Yes |
| Credits | Use the exact Dr. Victor Garcia Martinez credit line and existing portrait in the introduction/credits context | Yes |
| Assessment exposure | Student-safe activities and rationales only; no faculty-only exam bank in the public app | Yes |
| Clinical review workflow | Faculty approval required before each day is marked publishable | Yes |
| Deployment workflow | Preview every approved branch/pull request in Vercel; production only after QA approval | Yes |

> **Proposed next action after approval:** Build the Vercel-ready application foundation and the RNSG 1523 Day 1 pilot, then present the preview for faculty review before producing the remaining seven days.

## References

[1]: <1523_Study_Guides/RNSG_1523_Day1_Study_Guide.md> "RNSG 1523 Day 1 Study Guide"
[2]: <2514_Study_Guides/RNSG_2514_Day1_Study_Guide.md> "RNSG 2514 Day 1 Study Guide"
[3]: <public/Phase_2_Content_Production_Plan.md> "Phase 2 Content Production Plan"
[4]: <public/RNSG_Lone_Star_Presentation_System.md> "RNSG Lone Star Presentation System"
[5]: <public/RNSG1523_Antepartum_LessonPlan_Expanded_APA.md> "RNSG 1523 Antepartum Lesson Plan"
[6]: <public/RNSG2514_Complications_LessonPlan_APA.md> "RNSG 2514 Complications Lesson Plan"
[7]: <N1_Index_EN.md> "RNSG 1523 Course Index"
[8]: <1523%20infographics/README_Day1_Infographics.md> "RNSG 1523 Day 1 Infographic Specification"
[9]: <https://www.nclex.com/clinical-judgment-measurement-model.page> "Clinical Judgment Measurement Model — NCLEX"
[10]: <https://vercel.com/docs/frameworks/frontend/vite> "Vite on Vercel"
[11]: <https://vercel.com/kb/guide/deploying-react-with-vercel> "Deploying React with Vercel"
