# RNSG Lone Star Presentation System

**Applies to:** RNSG 1523 and RNSG 2514 Maternal/Newborn & Reproduction, Fall 2026  
**Status:** Phase 2 prototype standard

## Communication job

By the end of each session, nursing students should be able to make safer maternal/newborn and reproductive nursing decisions because visible teaching, deliberate practice, and concise visual evidence make the relevant clinical cues and priorities clear.

## Visual foundation

The system adapts the supplied Lone Star College Brand & Logo Styleguide without using a Lone Star College logo.

| Role | Token | Use |
|---|---|---|
| Primary structural color | LSC Blue `#003768` | Title bars, section dividers, primary headings, key action labels |
| Safety/action accent | LSC Red `#B30838` | Warnings, priority actions, selected clinical emphasis; never color-only meaning |
| Warm support | LSC Tan `#F1C585` | Subtle highlight fields and callout backgrounds |
| Cool support | LSC Light Blue `#C7EAFB` | Low-emphasis callouts, practice areas, and visual breathing room |
| Neutral background | White `#FFFFFF` | Default slide canvas |
| Body text | Black `#000000` | Main readable text |

- Use Futura/Futura Book where installed. The portable prototype uses Arial/Arial Bold as the approved fallback.
- Use a white canvas, strong blue type bands, one dominant visual/idea per slide, and restrained red safety accents.
- No LSC logos, secondary logos, mascots, decorative seals, or replacement logos.

## Slide families

| Family | Narrative job | Required elements |
|---|---|---|
| Introductory | Establish course/session purpose and access | Course code, session title/date, lower-left creator panel with small professor photo and alt text, accessibility statement, one-time creator credit |
| Section opener | Signal a change in learning focus | Short claim-oriented title, blue field, session label |
| Teach | Explain one clinical concept | Takeaway title, concise body, one meaningful visual or worked example, source block in notes |
| NGN practice | Make reasoning visible | Case cue(s), explicit student task, non-color-only labels, facilitator/debrief notes |
| SLO infographic | Consolidate one approved SLO | One GPT Image 2 infographic, descriptive alt text, plain-text companion summary, source block in notes |
| Closure | Synthesize and prompt action | One practical takeaway, exit prompt, next-session link |

## Required fixed elements

- Creator credit appears only on the introductory slide, in a distinct lower-left panel: `Built by Dr. Victor Garcia Martinez`.
- Introductory-slide accessibility statement: `Accessibility statement: This presentation is designed to support accessible learning. Students who need an alternative format or course-related accommodation should contact Dr. Victor Garcia M through the approved Lone Star College process.`
- Professor photo appears only on the introductory slide: `vhgm pic foto.png`, as a small portrait inside the lower-left creator panel; alt text: `Portrait of Dr. Victor Garcia Martinez, course instructor.`
- Speaker notes on every slide must use the approved fields: Say, Ask, Expected response, If students struggle, Debrief, Instructor action, Timing, and Sources.

## Accessibility controls

- Never communicate a clinical priority only by color; pair labels, symbols, or written action words with color.
- Use readable sans-serif text; minimum visible sizes are 50 pt deck title, 35 pt slide title, 24 pt subhead/callout title, and 18 pt body text in this system.
- Include meaningful alt text for every instructional image and infographic; decorative elements are omitted from the learning narrative.
- Use descriptive hyperlink labels rather than raw URLs where a link appears on a slide.
- Provide text-first alternatives to image-based activities and a plain-text SLO infographic summary.
- Verify reading order, contrast, speaker notes, and the visible accessibility statement in native Google Slides during final QA.

## Image and infographic controls

- Search only the professor-approved image sources; log each asset's specific license, creator, source URL, attribution requirement, and slide placement before use.
- Use no imagery that contains a third-party logo or a clinically misleading scene.
- Use the project-local `medical-infographic-batch-skill.md` workflow to generate one separate GPT Image 2 infographic for each approved SLO sequence. The infographic must be source-grounded, include a concise title and takeaway, and not be a multi-SLO collage.

## Prototype acceptance criteria

The Phase 2 prototype is acceptable only if it demonstrates the introductory, section, teaching/practice, and closure families; applies the no-logo color system; contains the small introductory-slide photo and one-time creator credit, accessibility statement, alt text, full speaker notes, and source blocks; renders without clipping/overlap; and imports as a native Google Slides file.
