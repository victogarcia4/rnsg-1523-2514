# RNSG HTML slide decks

Eight accessible, static HTML slide decks for RNSG 1523 and RNSG 2514. The decks are GitHub Pages-ready and do not require a backend, build server, API key, or external runtime.

## Open locally

Open [index.html](index.html) in a browser, then unlock the appropriate course area. For reliable local behavior, run a small web server from the `html_slides` folder:

```powershell
py -m http.server 8000
```

## Course access and notes

- RNSG 1523 and RNSG 2514 are presented as separate password-gated course areas.
- Speaker notes are hidden by default and can be shown through the administrator notes control.
- The passwords are lightweight client-side gates suitable for the intended public presentation workflow; they are not server-side security.

## Accessibility and interaction

- Self-check questions use keyboard-accessible radio controls and reveal correctness, the correct answer, and rationale after selection.
- Semantic tables use PDF-inspired navy headers, pale-blue alternating rows, bold key columns, captions, and responsive overflow.
- Take Note, danger, priority, critical alert, and case content uses the supplied tan, red, and blue semantic color code.
- Semantic landmarks, skip links, visible focus, live slide-status announcements, responsive layouts, reduced-motion support, high-contrast adjustments, captions, and long descriptions are included.

## Deck/source map

| Deck | Markdown source | Image folder | Slides | Interactive questions |
|---|---|---|---:|---:|
| 1523_day1 | `RNSG1523_core_content/RNSG_1523_Day1_Slides.md` | `RNSG1523_core_content/images_day1` | 50 | 8 |
| 1523_day2 | `RNSG1523_core_content/RNSG_1523_Day2_Slides.md` | `RNSG1523_core_content/images_day2` | 52 | 8 |
| 1523_day3 | `RNSG1523_core_content/RNSG_1523_Day3_Slides.md` | `RNSG1523_core_content/images_day3` | 47 | 8 |
| 1523_day4 | `RNSG1523_core_content/RNSG_1523_Day4_Slides.md` | `RNSG1523_core_content/images_day4` | 41 | 8 |
| 2514_day1 | `RNSG2514_core_content/RNSG_2514_Day1_Slides.md` | `RNSG2514_core_content/images_day1` | 39 | 6 |
| 2514_day2 | `RNSG2514_core_content/RNSG_2514_Day2_Slides.md` | `RNSG2514_core_content/images_day2` | 32 | 6 |
| 2514_day3 | `RNSG2514_core_content/RNSG_2514_Day3_Slides.md` | `RNSG2514_core_content/images_day3` | 31 | 6 |
| 2514_day4 | `RNSG2514_core_content/RNSG_2514_Day4_Slides.md` | `RNSG2514_core_content/images_day4` | 36 | 8 |

## Assets and assumptions

- All 328 matching course-folder JPG/JPEG/PNG assets are used once, one per source slide.
- Matching generated PNG alternates were preserved and reported in [UNUSED_IMAGES.md](UNUSED_IMAGES.md); they were not silently deleted.
- The best available existing Dr. Victor Garcia portrait was copied from the workspace into `assets/author/dr-victor-garcia.png`.
- The intro slide includes the exact requested author line: “Built by Dr. Victor Garcia M, MSN, FNP-C, RN”.
- The final slide of each deck is titled “References” and combines the source deck’s reference slide with the `### Sources` details from the matching core-content Markdown.
- No source Markdown files were converted or overwritten.

Built as independent instructional materials; not an official Lone Star College publication or institutionally approved brand asset.
