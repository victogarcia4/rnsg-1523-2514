# Medical Infographic Batch

## Core rule

Generate **one separate infographic image per activity**. Never combine multiple activities into one collage unless the user explicitly asks for a collage.

## Workflow

1. Extract activity data from the supplied markdown, html, or pasted text.
2. For each requested activity, identify:
   - activity number
   - activity title
   - instructor key / answer key
   - essential concepts, pathways, locations, products, comparisons, yields, or clinical consequences
3. If the source contains only partial instructor keys, use only the supported information and say that some keys are partial if listing text output. For image generation, do not invent unsupported mechanistic details unless they are common supporting context needed for visual coherence.
4. Convert each activity into a complete image prompt using the house style below.
5. When the user asks to create images, call `image_gen` once with `n` equal to the number of requested activities when possible, or make sequential calls if needed. Ensure each generated image corresponds to one activity.
6. After image generation, do not add long summaries. A minimal confirmation is enough unless the user asks for prompts, captions, revisions, or downloads.

## House style for all infographics

Use this style consistently:

- square high-resolution educational infographic
- vintage anatomy and physiology classroom poster
- cream paper or light parchment background
- thick black outlines and rounded rectangular panels
- bold uppercase condensed headline typography
- colorful section headers using green, blue, orange, purple, yellow, and red accents
- hand-drawn medical illustration style, not photorealistic
- clean biomedical diagrams with arrows, labels, icons, and callout boxes
- microscope icon in upper left and chemistry flask icon in upper right when space allows
- clear visual hierarchy: title at top, main diagram in center, supporting panels on sides, takeaway strip at bottom
- bottom strip labeled “takeaway,” “three-point takeaway,” or “key takeaway”
- optional “what to sketch” box when the activity is drawing-based
- no cluttered collage layout unless requested
- prioritize legibility over decorative density

## Required prompt structure

For each image prompt, use this structure internally:

```text
Create a square high-resolution medical education infographic titled “[ACTIVITY # — TITLE]” for an Anatomy & Physiology class. Use a bold vintage classroom poster style: cream paper background, thick black outlines, hand-drawn biomedical illustrations, bright color-coded panels, large uppercase headings, arrows, callout boxes, microscope/flask corner icons, and a bottom takeaway strip.

Main visual: [central pathway, diagram, comparison, concept map, clinical mechanism, or sorting layout].

Must include these instructor-key facts: [key facts only].

Layout requirements: [columns, central pathway, side panels, legend, outputs, scenario, comparison table, etc.].

Bottom takeaway: “[short accurate summary].”

Avoid photorealism. Keep text concise, readable, and medically accurate.
```

## Batch handling

For batch requests:

- Generate activity prompts in numerical order.
- Create one independent image per activity.
- Keep the same visual language across the batch, but vary the central composition according to the topic.
- Do not let an activity inherit the wrong title, number, pathway, or concept from a previous image.
- For 4-image batches, use four separate images, not a 2x2 panel collage.

## Common layout patterns

Choose the layout that fits the activity:

- **Structure molecule:** central labeled molecule, side labels for parts, bottom hydrolysis or function strip.
- **Vocabulary web:** central term with branching color-coded concept nodes.
- **Relay/process:** left-to-right arrow pathway with molecule carriers or tokens.
- **Sorting/matching:** three-column or two-column card-sorting layout.
- **Pathway map:** central vertical pathway with inputs/outputs and side panels.
- **Cycle:** central circular cycle inside the relevant organelle or compartment.
- **Membrane transport/ETC:** cross-section membrane with complexes, gradient arrows, ATP synthase.
- **Comparison:** two-column showdown with a central comparison table.
- **Clinical disease:** normal pathway plus blocked step, consequence arrows, symptoms, and treatment/bypass panel.
- **Case timeline:** timeline panels with state, hormones, fuel use, and active pathways.

## Accuracy rules

- Preserve biochemical directionality: substrate → intermediate → product.
- Label cellular locations explicitly when they are part of the key.
- Use standard notation: ATP, ADP, Pi, NAD⁺, NADH, FAD, FADH₂, H⁺, O₂, H₂O, CO₂, acetyl-CoA.
- Do not overstate ATP yields; use approximate yields when appropriate, e.g. “~30–32 ATP.”
- For human anaerobic metabolism, show lactate fermentation, not alcoholic fermentation, unless comparing organisms.
- For fed/fasting states, distinguish insulin/anabolic/storage from glucagon/catabolic/mobilization.
- For disease cases, show the disrupted step, upstream accumulation, downstream ATP effect, and symptom logic.

## Output options

When the user asks for **extraction only**, provide:

1. Numbered list of activities.
2. Instructor key bullets.
3. One image-generation prompt per activity.

When the user asks to **generate images**, create images directly. Do not display raw JSON or tool arguments.

When the user asks for **revision**, regenerate only the requested activity unless they ask for the whole batch.
