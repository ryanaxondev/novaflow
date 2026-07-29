# NovaFlow

# Homepage Visual Direction (v2)

## Document Information

**Document Type:** Visual Direction
**Artifact:** Homepage Visual Direction
**Version:** v2
**Status:** Approved
**Owner:** Product / Design

**Depends On:**

- `docs/01-product.md`
- `docs/02-information-architecture.md`
- `docs/information-architecture/homepage-navigation-reconciliation-v1.md`
- `docs/03-design-philosophy.md`
- `docs/brand/novaflow-brand-mark-v1.md`
- `design/wireframes/homepage-wireframe-v1.md`
- `design/wireframes/session-13-problem-benefits-amendment-v1.md`
- `design/ui/visual-direction-v1.md`
- `design/ui/homepage-ui-specification-v1.md`
- `design/ui/session-12-responsive-typography-amendment-v1.md`
- Session 13.1 Visual Design and Brand Expression Audit

**Coordinates With:**

- `design/ui/session-13-homepage-ui-amendment-v1.md`
- `docs/brand/novaflow-homepage-brand-expression-v1.md`
- `docs/product/homepage-product-visualization-v1.md`

**Review References:**

- `design/references/session-13/README.md`

---

# Status and Authority

This document is:

```text
Status: Approved
```

This document supersedes `design/ui/visual-direction-v1.md` within its declared
homepage visual-direction scope.

The approved palette, surface roles, grid treatment, Product-visualization
language, and motion boundaries are authoritative for later homepage
implementation. Engineering Architecture decisions remain separately owned and
separately gated.

---

# Purpose

This document records the approved Session 13 visual system for the NovaFlow
homepage.

It defines a visual language that:

- gives NovaFlow a recognizable identity,
- makes Product evidence a primary source of credibility,
- preserves the approved information hierarchy and messaging,
- uses structural contrast without creating a full dark-mode site,
- communicates repeatable operational systems through meaningful grid and flow relationships,
- remains accessible, maintainable, and performant.

It does not:

- change Product strategy,
- change customer-facing messaging,
- change homepage Information Architecture,
- change navigation or conversion routing,
- define component APIs,
- authorize application implementation.

---

# Design Thesis

```text
Calm Operational Intelligence
```

NovaFlow is a calm operational layer that transforms disconnected recurring work into visible, reliable, repeatable systems.

The homepage should express this thesis through:

- disciplined structure,
- connected workflow relationships,
- realistic Product evidence,
- controlled color signals,
- meaningful surface contrast,
- precise typography,
- restrained depth.

The design should be remembered for making an operational system visible, not for adding decorative effects.

---

# Intended Character

The design must feel:

```text
structured
intelligent
calm
product-led
precise
credible
distinctive
premium
```

The design must not feel:

```text
generic SaaS template
wireframe
full dark mode
gaming interface
cyberpunk
glassmorphism
decorative dashboard
animation showcase
Vercel imitation
```

Minimalism remains part of NovaFlow's character, but minimalism must no longer mean uniform white surfaces, repeated centered headers, and identical cards.

---

# Visual Principles

## 1. Minimalism Requires Structural Contrast

Minimalism succeeds when hierarchy, scale, density, alignment, and surface changes are deliberate.

Reducing decoration does not justify reducing every section to the same white-card composition.

## 2. Product Evidence Is More Important Than Decoration

When a visual choice can either show how NovaFlow works or add unrelated atmosphere, Product evidence takes precedence.

Product previews, workflow relationships, ownership, guidance, approvals, and system state should provide the principal visual interest.

## 3. Whitespace Must Have Different Semantic Roles

Whitespace may communicate:

- open explanation,
- separation between narrative stages,
- room around a Product focal point,
- evaluation calm,
- terminal closure.

Whitespace must not be applied as one mechanically repeated section gap.

## 4. Nova Blue Is a Controlled Operational Signal

Nova blue identifies:

- primary actions,
- active workflow states,
- selected or recommended emphasis,
- important connection paths,
- the approved standalone mark.

Nova blue must not flood every section or replace hierarchy created by typography and structure.

## 5. Deep Navy Creates Focus, Not a Full Dark Theme

Deep navy is reserved for:

- major Product focal points,
- the Product workbench,
- terminal conversion and closure,
- limited supporting brand surfaces.

The homepage remains founded on white and light operational surfaces.

## 6. Connected Lines and Grid Relationships Communicate Repeatable Systems

Lines, nodes, and alignment relationships must represent:

- sequence,
- ownership,
- handoff,
- approval,
- shared state,
- progression from fragmented to connected work.

They must not become arbitrary circuit-board decoration.

The operational grid is localized rather than page-wide:

- white narrative surfaces should omit it or reduce it to an extremely faint relationship cue,
- the Hero relationship zone may use a low-opacity grid,
- Product workbenches and Product canvases may use a visible functional grid,
- Problem and Solution may use it only where it clarifies relationships,
- Benefits, Pricing, and FAQ must not use a pervasive grid,
- Final CTA may use only a restrained low-contrast terminal grid.

The grid must never become the visual subject of the page.

## 7. Cards Are Used Only for Discrete or Comparable Objects

Cards are appropriate for:

- pricing plans,
- bounded Product panels,
- truly discrete records or objects.

Cards should not be the default container for every concept, benefit, or piece of copy.

## 8. Every Section Must Have a Distinct Visual Role

Each section should answer its approved user question using a composition suited to that narrative responsibility.

Consistency should come from tokens, grid, typography, and Product vocabulary rather than identical layouts.

## 9. One Product Scenario Must Continue Across the Page

The employee-onboarding scenario must provide continuity across Hero, Solution, Features, and Social Proof.

The visual story should deepen as the visitor progresses rather than resetting to unrelated examples.

## 10. Motion Is Optional and Never Required for Comprehension

The static page must communicate the complete Product story.

Motion may reinforce state or progression only after the static composition succeeds.

---

# Approved Palette

All values in this section are approved.

| Color | Value | Semantic role | Allowed use | Prohibited use | Contrast responsibility |
| --- | --- | --- | --- | --- | --- |
| Brand navy | `#0B1220` | Deep structural contrast and Product focus | Product workbench, Final CTA, Footer continuation, limited high-focus panels | Full-page dark mode, routine body surface, large decorative fill without purpose | Use `#F8FAFC` for primary text; verify all secondary text, controls, focus rings, and non-text boundaries |
| Nova blue | `#2563EB` | Primary brand and operational signal | Primary CTAs, active states, selected paths, approved mark, recommended-plan emphasis | Large undifferentiated backgrounds, body copy, decorative saturation in every section | White text is approximately 5.17:1; all actual component states require browser-level verification |
| Signal cyan | `#22D3EE` | Secondary signal for connection, availability, or supporting state | Small highlights on navy, connector accents, secondary Product status with an accompanying label or icon | Body text, only state indicator, large background, replacement for Nova blue | Strong on brand navy; insufficient on white for text or required boundaries |
| Surface base | `#FFFFFF` | Primary open narrative surface | Main page foundation, reading surfaces, open explanatory sections | Mechanical use for every section without hierarchy | Pair with approved primary and secondary text; boundaries must remain perceivable |
| Surface subtle | `#F7F9FC` | Quiet explanation and evaluation | Problem field, Social Proof field, Pricing evaluation, bounded FAQ support | Pretending to be a contrast surface, alternating every second section by rule | Secondary text is approximately 5.66:1; component boundaries still require validation |
| Surface operational | `#EEF4FF` | Product evidence and structured workflow context | Product canvases, workflow views, selected supporting panels | Broad decorative tint without Product meaning, body-text-only sections by default | Verify blue text, muted text, control boundaries, and focus states on this surface |
| Surface contrast | `#0B1220` | High-focus Product and conversion surface | Same semantic use as Brand navy where a surface token is required | Full dark theme, repeated dark bands | Use approved on-contrast colors and test all interactive states |
| Text primary | `#111827` | Main text on light surfaces | Headings, body text requiring strongest hierarchy, Product labels | Text on brand navy, decorative rules | Approximately 17.74:1 on white |
| Text secondary | `#5B6474` | Supporting text on light surfaces | Body support, descriptions, metadata with sufficient size and contrast | Disabled text without separate treatment, text on navy without verification | Approximately 5.97:1 on white and 5.66:1 on Surface subtle |
| Structural line | `#D7E0EC` | Light structural division | Section rules, non-critical panel borders, grid-aligned separation | Sole boundary for required controls or state, text | Low contrast is intentional for passive structure; required control boundaries need a stronger token or additional cue |
| Grid line | `rgba(37, 99, 235, 0.10)` | Fine operational grid | Decorative grid on compatible light or dark Product surfaces after validation | Text, control outlines, sole state indicator, arbitrary page-wide pattern | Decorative only and hidden from assistive technology |
| Flow line | `#60A5FA` | Workflow connection and progression | Connectors, directional flow, secondary active paths | Body text on white, primary CTA replacement, only state cue | Approximately 7.36:1 on brand navy but only 2.54:1 on white; use additional structure on light surfaces |
| Text on contrast | `#F8FAFC` | Primary text on navy | Headings, readable body text, control labels on contrast surfaces | Light-surface text | Approximately 17.89:1 on brand navy |

## Signal Cyan Restrictions

Signal cyan must not be used as:

- body text,
- the only state indicator,
- a large background,
- a replacement for Nova blue.

Signal cyan should remain a restrained supporting signal whose meaning is also expressed by text, iconography, shape, or position.

## Palette Validation

The approved high-fidelity references demonstrate the palette in real section
contexts. Production implementation must still validate text and non-text
contrast, focus, hover, active, disabled, and expanded states in rendered
components, including blue and cyan against light and navy surfaces.

---

# Surface Hierarchy

## Base

**Role:** Open narrative content.

Use for:

- direct explanation,
- typography-led sections,
- open layouts where the narrative is primary.

Base should feel calm and spacious, but not empty.

## Subtle

**Role:** Quiet explanation and evaluation areas.

Use for:

- Problem recognition,
- illustrative scenario framing,
- pricing evaluation,
- bounded FAQ support where appropriate.

Subtle should create a perceptible but restrained change from Base.

## Operational

**Role:** Product evidence, workflow views, and structured previews.

Use for:

- Product canvases,
- workflow construction,
- capability callouts,
- system relationships.

Operational surfaces should feel like a purposeful workspace rather than a tinted marketing section.

## Contrast

**Role:** Major Product focal points and terminal conversion.

Use for:

- the Hero Product workbench,
- Final CTA and its transition into Footer,
- exceptional Product emphasis approved by the section map.

Contrast must not become a mechanically repeated dark band.

## Surface Selection Rule

Do not alternate surfaces mechanically.

Every surface change must correspond to a narrative purpose:

```text
explain
recognize
transform
demonstrate
evaluate
resolve
convert
```

---

# Grid and Flow Language

## Operational Grid

Use a fine operational grid aligned to the approved Container and responsive content columns.

The grid should:

- reinforce alignment,
- provide a common reference for Product panels and text,
- reveal relationships between sections,
- remain subordinate to content,
- adapt or simplify on small screens.

It must not:

- imitate Vercel's exact grid,
- form arbitrary decorative squares,
- resemble a circuit board,
- reduce text readability,
- produce moiré or visual noise.

## Connection Lines

Connection lines may represent:

- a workflow sequence,
- a handoff between roles,
- a relationship between guidance and work,
- an approval dependency,
- state moving toward resolution.

Lines must terminate at meaningful nodes or Product elements.

## Structured Nodes

Nodes may represent:

- steps,
- owners,
- approvals,
- states,
- system modules.

Node differences must use more than color alone.

## Fragmented-to-Connected Progression

The homepage narrative should make this progression visible:

```text
fragmented work
→ structured workflow
→ connected operational system
→ repeatable cross-functional execution
```

## Assistive-Technology Boundary

Decorative grid lines and connectors must be hidden from assistive technology.

When a connection communicates unique meaning:

- the meaning must also exist in adjacent approved text,
- or the visualization must receive an appropriate accessible description.

## Density by Section

```text
Narrative:
low density

Product canvas:
medium density

Workflow transformation:
higher relationship density

Final CTA:
restrained terminal motif
```

---

# Typography Direction

## Typeface

Preserve:

```text
Primary UI typeface: Geist Sans
Technical monospace typeface: Geist Mono
```

Do not introduce a new typeface.

## Hierarchy

Use:

- stronger scale contrast between Hero, section headings, and supporting copy,
- fewer repeated centered section headings,
- left-aligned headings for narrative or Product-led sections,
- centered headings only where comparison or closure benefits,
- compact utility labels for genuine Product metadata,
- deliberate line lengths and responsive wrapping,
- restrained weight changes rather than many font weights.

## Geist Mono

Geist Mono remains optional.

It may be used only for genuinely technical or system-like values after Product UI copy is approved.

It must not be used for:

- marketing headings,
- body copy,
- CTA labels,
- plan descriptions,
- FAQ content,
- Footer content.

## Copy Boundary

Typography may change presentation, emphasis, wrapping, and rhythm.

It must not:

- rewrite approved visible copy,
- split wording in a way that changes meaning,
- add promotional labels,
- add unsupported Product text.

---

# Depth and Layering

Allow:

- layered Product panels,
- one restrained shadow hierarchy,
- inset Product-canvas surfaces,
- overlapping workflow elements when the overlap communicates a real relationship,
- structural borders and internal dividers,
- controlled foreground/background separation.

Do not allow:

- floating glass cards,
- blur-heavy surfaces,
- large ambient glows,
- decorative 3D objects,
- excessive elevation levels,
- shadows used to compensate for weak hierarchy,
- depth that implies interactivity where none exists.

The approved depth hierarchy remains limited:

```text
Page surface
Product canvas
Active or foreground Product panel
```

---

# Card Policy

Use cards for:

- pricing plans,
- bounded Product records,
- discrete comparable objects,
- Product panels whose boundaries carry meaning.

Prefer open composition, registers, bands, or connected fields for:

- Problem concepts,
- Benefits,
- narrative transitions,
- decorative groupings.

Reducing card repetition must not reduce semantic grouping or scanability.

---

# Motion Direction

Default:

```text
No required motion
```

Optional future motion may include:

- line activation,
- state transition,
- subtle panel reveal.

Any approved motion must:

- use transform or opacity,
- respect `prefers-reduced-motion`,
- not require an animation dependency,
- remain interruptible where interactive,
- never communicate unique information only through movement,
- preserve the complete static Product story,
- avoid scroll-jacking or pinned storytelling.

---

# Accessibility Guardrails

Implementation must demonstrate:

- readable text contrast on every surface,
- visible focus on Base, Subtle, Operational, and Contrast surfaces,
- state communication through text, shape, icon, or position in addition to color,
- meaningful reading order independent of visual connectors,
- comfortable primary interaction targets,
- responsive reflow at 320px,
- text zoom support,
- reduced-motion behavior,
- non-obscured anchored sections under the sticky Navbar.

---

# Performance Guardrails

The approved direction must remain achievable without:

- a new runtime dependency,
- an animation library,
- client-side canvas,
- video,
- 3D rendering,
- large decorative raster assets,
- expanding Client Component ownership.

Implementation visual budget:

```text
Additional client-side JavaScript:
0 KB target

Above-fold Product visual:
≤ 250 KB compressed if rasterized

Total new initially requested visual assets:
≤ 600 KB compressed

Individual supporting SVG:
≤ 30 KB target

LCP:
≤ 2.5 seconds at mobile p75

CLS:
< 0.1

INP:
< 200 ms
```

These implementation budgets require Engineering Architecture review before
they become binding Production acceptance criteria.

---

# Cross-Artifact Direction Contract

```text
Direction:
Calm Operational Intelligence

Primary signal:
Nova blue

Structural contrast:
Deep navy

Product scenario:
Employee onboarding

Problem:
Open fragmentation composition

Solution:
One connected workflow

Benefits:
Connected modular register

Social Proof:
Illustrative operational scenario

Primary typeface:
Geist Sans

Navigation:
Unchanged

Visible marketing copy:
Unchanged

Section order:
Unchanged

Conversion routing:
Unchanged

New sections:
None

New routes:
None

Status:
Approved

Visual implementation authority:
Approved within this document's scope; Engineering Architecture remains required
for token, primitive, API, or component-ownership changes
```

---

# Prohibited Outcomes

This approved visual direction does not authorize:

- fake customers,
- fake metrics,
- new Product claims,
- additional CTAs,
- a full dark-mode site,
- Vercel visual imitation,
- glassmorphism,
- heavy animation,
- animation-dependent comprehension,
- a redesign of interactive behavior,
- direct Calendly links outside Final CTA,
- new routes,
- new homepage sections,
- implementation that bypasses the Engineering Architecture gate.

---

# Implementation Dependencies

Product Owner visual approval, palette approval, mark-placement approval,
Product-interface-copy approval, responsive-reference approval, and the focused
Problem/Benefits Wireframe approval are complete.

Production implementation still requires an approved Engineering Architecture
amendment for any token, shared primitive, public API, component-boundary, or
component-ownership change.

---

# Planned Implementation Packages

```text
13.3 — Visual Foundation and Brand Shell
Tokens, surfaces, primitive variants, Navbar and Footer

13.4 — Hero and Problem-to-Solution System
Hero Product workbench and first narrative transformation

13.5 — Benefits through Pricing System
Benefits, Features, Social Proof, and Pricing

13.6 — FAQ, Final CTA, Responsive and Production Closure
FAQ styling, terminal CTA, mobile recomposition, QA and redeployment
```

These package boundaries remain planning guidance until Engineering
Architecture authorizes the implementation sequence.

---

# Approval Effect

This approval:

- supersede Visual Direction v1 within its declared homepage scope,
- establish Calm Operational Intelligence as the homepage visual direction,
- freeze the approved palette values and visual principles,
- enables Engineering Architecture review and later implementation planning.

This approval does not by itself:

- change Product-interface copy outside the approved Product Visualization artifact,
- change homepage mark placement outside the approved Branding artifact,
- amend structural wireframe decisions outside the approved focused amendment,
- define component APIs,
- authorize code changes that require an unapproved Engineering Architecture amendment.
