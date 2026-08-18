# Slide Deck Production Plan — RNSG 1523 & 2514 Core Content

**Prepared for approval before execution.** This plan covers the production of 8 slide decks (4 per course, 1 per day) from the existing `*_Core_Content.md` files.

---

## 1. SCOPE SUMMARY

| Deliverable | Count | Estimated Slides/Deck | Total Slides |
|---|---|---|---|
| RNSG 1523 Day 1–4 slide decks | 4 files | 55–70 each | ~250 |
| RNSG 2514 Day 1–4 slide decks | 4 files | 55–70 each | ~250 |
| Speaker notes files | 8 files | Word-by-word per slide | — |
| Image packs | 8 folders | 1 image per slide | ~500 images |

**Each presentation = 140 minutes.** At ~2.0–2.5 minutes per slide, each deck ≈ 55–70 slides.

---

## 2. SLIDE STRUCTURE TEMPLATE

Every slide deck follows this architecture:

```
Slide 1:       Title slide (course, day, topic, Dr. Victor Garcia M. credit)
Slide 2:       How to Use This Deck (color coding legend)
Slide 3:       Learning Objectives (WHYLLT)
Slides 4–N:    Content slides (max 8 lines × 8 words/line + image zone)
   - Tables rendered as compact 4–6 row grids
   - TAKE NOTE! content on dedicated tan-background slides
   - Self-check questions on Q-slides (1 question per slide)
   - Answer + rationale on A-slides (matching each Q-slide)
Penultimate:   Quick Recall / Summary
Final:         References / Sources
```

### Slide design rules:
- **8-line max** per content slide (excluding title/subtitle)
- **~8 words per line** for readability
- **Every slide includes an image placeholder** (right or bottom zone, ~30% of slide area)
- Tables kept to **≤6 rows** (split larger tables across slides)
- RED text = danger/priority; BLUE = core concept; TAN boxes = Take Note

---

## 3. IMAGE PLAN

**Approach:** After writing all slide content, search for representative images.

**Image search strategy per slide:**
- Anatomy/physiology → medical diagrams
- Conditions → clinical representations (skin, ultrasound, labs)
- Emergency → urgency/action imagery
- Tables/concepts → iconography or simple relevant illustrations
- Questions → subtle question-mark or relevant clinical image

**Size constraint:** Images resized to ≤200 KB each (GitHub-uploadable). Target resolution: 800×600 or smaller.

**Naming convention:** `{Course}_{Day}_{Slide#}_{short-desc}.jpg`
Example: `1523_D1_S04_menstrual-cycle.jpg`

**Will use web search** to find appropriate free-use/educational images per slide topic.

---

## 4. SPEAKER NOTES PLAN

One separate `.md` file per deck, structured as:

```markdown
# Speaker Notes — RNSG 1523 Day 1
## Slide 1: Title
> "Welcome to RNSG 1523 Day 1. I'm Dr. Victor Garcia Martinez..."
## Slide 2: How to Use
> "Color is your signal: RED means danger..."
```

Speaker notes are **word-by-word scripts** — the presenter reads them verbatim. Each slide's script is ~1–3 minutes of spoken content.

---

## 5. PRODUCTION SEQUENCE (Batch Plan)

### Phase 1 — 1523 Day 1 & 2 (Slide content + speaker notes)
- Write `RNSG_1523_Day1_Slides.md` + `RNSG_1523_Day1_SpeakerNotes.md`
- Write `RNSG_1523_Day2_Slides.md` + `RNSG_1523_Day2_SpeakerNotes.md`

### Phase 2 — 1523 Day 3 & 4
- Write `RNSG_1523_Day3_Slides.md` + `RNSG_1523_Day3_SpeakerNotes.md`
- Write `RNSG_1523_Day4_Slides.md` + `RNSG_1523_Day4_SpeakerNotes.md`

### Phase 3 — 2514 Day 1 & 2
- Write `RNSG_2514_Day1_Slides.md` + `RNSG_2514_Day1_SpeakerNotes.md`
- Write `RNSG_2514_Day2_Slides.md` + `RNSG_2514_Day2_SpeakerNotes.md`

### Phase 4 — 2514 Day 3 & 4
- Write `RNSG_2514_Day3_Slides.md` + `RNSG_2514_Day3_SpeakerNotes.md`
- Write `RNSG_2514_Day4_Slides.md` + `RNSG_2514_Day4_SpeakerNotes.md`

### Phase 5 — Images (all 8 decks)
- Search and download images for each slide
- Resize and organize into per-deck folders

---

## 6. FILE ORGANIZATION

```
RNSG_core_content/
├── RNSG1523_core_content/
│   ├── RNSG_1523_Day1_Core_Content.md          (existing)
│   ├── RNSG_1523_Day1_Slides.md                 (NEW)
│   ├── RNSG_1523_Day1_SpeakerNotes.md           (NEW)
│   ├── images_day1/                             (NEW folder)
│   │   ├── 1523_D1_S01_title.jpg
│   │   └── ...
│   ├── RNSG_1523_Day2_... (repeat)
│   └── ...
├── RNSG2514_core_content/                       (mirror structure)
│   └── ...
```

---

## 7. ESTIMATED SLIDE COUNTS PER DECK

| Deck | Sections | Content Slides | Q/A Slides | Total |
|---|---|---|---|---|
| 1523 D1 | 6 sections | 40 | 16 | **56** |
| 1523 D2 | 7 sections | 45 | 18 | **63** |
| 1523 D3 | 7 sections | 48 | 18 | **66** |
| 1523 D4 | 6 sections | 42 | 18 | **60** |
| 2514 D1 | 8 sections | 48 | 18 | **66** |
| 2514 D2 | 7 sections | 45 | 18 | **63** |
| 2514 D3 | 6 sections | 42 | 18 | **60** |
| 2514 D4 | 8 sections | 48 | 18 | **66** |

---

## 8. KEY DECISIONS NEEDING APPROVAL

1. **Proceed with Phase 1 first** (1523 Day 1+2) and get feedback before continuing?
2. **Image approach:** Use web search for representative educational images, or should we use placeholder descriptions and source images later?
3. **Speaker notes detail:** Word-by-word script preferred (per spec), or bullet-point guided notes?
4. **Output directory:** Keep all in `RNSG_core_content/` subfolders as shown above?

---

**Please review and approve this plan, or indicate any changes before I begin production.**