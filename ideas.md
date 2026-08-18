# RNSG NCLEX Study Lab — Design Brainstorm

## Three Distinct Directions

| Theme Name | Very Brief Intro | Probability |
| --- | --- | --- |
| **Clinical Field Notebook** | An editorial, bedside-reference workspace that turns study days into a navigable clinical binder. It feels calm, tactile, and serious rather than test-prep gamified. | 0.04 |
| **Ward Rounds Atlas** | A bright cartographic system using pathways, milestones, and visual maps to make maternal-newborn content feel like an organized care journey. | 0.07 |
| **Evidence Cabinet** | A museum-archive interface with labeled drawers, specimen-card layouts, and small moments of discovery for dense clinical concepts. | 0.03 |

## Chosen Direction: Clinical Field Notebook

### Design Movement

**Clinical Field Notebook** blends editorial information design, medical field-guide conventions, and refined analog study materials. It is deliberately grounded in high-contrast nursing-reference cues rather than a generic dashboard or a gaming interface.

### Core Principles

1. **The interface is a study instrument.** Every region gives a student orientation, contrast, a clinical cue, or a clear action.
2. **Reveal complexity in layers.** Course → day → subject deck → summary infographic → separate NGN case, never forcing a dense guide into a single unstructured screen.
3. **Use visual triage.** Deep blue signals core concepts, oxblood signals urgency, and warm gold signals exam-relevant takeaways; labels and icons always reinforce color.
4. **Keep the student in control.** Persistent context, clear escape routes, keyboard-friendly interactions, and visible completion affordances support deliberate practice.

### Color Philosophy

The palette carries forward the course’s documented blue, red, tan, and light-blue visual language while making it more restrained for sustained reading. **Ink Blue** creates reliability and structure; **Emergency Oxblood** signals clinical priority; **Clinical Gold** marks high-yield study points; pale **Chart Blue** provides breathable documentation surfaces; and warm **Paper** keeps the experience human and readable. Color does not convey meaning by itself.

### Layout Paradigm

The central model is a **document rail** rather than a centered dashboard grid. A fixed left course rail establishes the day sequence; the main reading plane contains a wide editorial lesson card; a narrow right-hand “clinical margin” carries takeaways, progress, and topic references. On smaller screens, the rail becomes a compact course switcher and the margin folds into in-flow panels.

### Signature Elements

1. A numbered **clinical margin** with small course-day tabs and color-coded urgency markers.
2. A tactile **binder-tab edge** on course and day cards, borrowing from nursing-reference dividers.
3. **Exam cue ribbons** that pair an icon, written label, and color to distinguish Core Concept, Priority Action, and Take Note content.

### Interaction Philosophy

Interactions should feel like handling well-organized study materials: selecting a day opens a clear reading path, expanding a rationale feels like opening a note card, and NGN cases advance through deliberate, labeled decisions. Transitions are brief and never obscure feedback. Drag-only interactions always have a keyboard-accessible selection alternative.

### Animation

Use 160–240 ms ease-out transitions for navigation, card focus, and disclosure. Day cards may subtly slide their binder tab on hover; progress indicators can fill smoothly after a completed case. Avoid looping or decorative animation. Respect `prefers-reduced-motion` by removing nonessential transforms and entrances.

### Typography System

**Fraunces** provides a human, scholarly display voice for course and subject titles. **DM Sans** supports dense clinical text, tables, and controls with high legibility. Course labels use compact uppercase DM Sans with generous letter spacing. Display headings use Fraunces at strong scale with a measured line-height; body copy remains left-aligned and comfortably sized.

### Brand Essence

**RNSG NCLEX Study Lab is a structured, visual clinical-reasoning workspace for nursing students preparing maternal, newborn, and reproductive-system content with confidence.**

Personality: **disciplined, reassuring, evidence-minded.**

### Brand Voice

Headlines are direct and instructional; CTAs use clinical verbs; microcopy explains what happens next without filler.

> “Trace the cue. Name the risk. Choose the next safest action.”

> “Open the Day 2 prenatal pathway.”

### Wordmark & Logo

The mark is a bold **nested chart-tab and pulse-line symbol**: three offset paper tabs form a compact clinical record, crossed by one precise ECG-inspired line. The wordmark uses a custom Fraunces + DM Sans lockup; the symbol stands alone in navigation and the favicon.

### Signature Brand Color

**Clinical Gold — `#C9962D`** is the ownable accent used for high-yield takeaways, progress, and the nested-tab logo mark.

## Style Decisions

- The nested chart-tab + pulse-line mark recurs in primary navigation, course and case headers, and footer identity. Clinical Gold is reserved for the mark, progress numerals, and high-yield cues.
- Course, day, and case browsing visibly use binder tabs, filing rails, numbered labels, and clipped paper edges rather than generic card grids.
- Infographics and external educational visuals appear as labelled reference inserts or specimen-card plates within the notebook system.
