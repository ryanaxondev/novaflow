# NovaFlow

# Session 13 Homepage Visual Elevation

## Document Information

**Document Type:** UI Specification Amendment
**Artifact:** Session 13 Homepage Visual Elevation
**Version:** v1
**Status:** Approved
**Owner:** Product / Design

**Depends On:**

- `docs/01-product.md`
- `docs/02-information-architecture.md`
- `docs/information-architecture/homepage-navigation-reconciliation-v1.md`
- `docs/03-design-philosophy.md`
- `docs/brand/novaflow-brand-mark-v1.md`
- `docs/product/final-cta-conversion-decision-v1.md`
- `docs/messaging/hero-v1.md`
- `docs/messaging/problem-solution-v1.md`
- `docs/messaging/benefits-features-v1.md`
- `docs/messaging/social-proof-pricing-v1.md`
- `docs/messaging/faq-final-cta-footer-v1.md`
- `design/wireframes/homepage-wireframe-v1.md`
- `design/wireframes/session-13-problem-benefits-amendment-v1.md`
- `design/ui/visual-direction-v1.md`
- `design/ui/homepage-ui-specification-v1.md`
- `design/ui/session-12-responsive-typography-amendment-v1.md`
- `design/ui/visual-direction-v2.md`
- `docs/brand/novaflow-homepage-brand-expression-v1.md`
- `docs/product/homepage-product-visualization-v1.md`
- Session 13.1 Visual Design and Brand Expression Audit

**Review References:**

- `design/references/session-13/README.md`

---

# Status and Authority

This document is:

```text
Status: Approved
```

This amendment is authoritative for the approved Session 13 homepage visual
treatments. It amends `design/ui/homepage-ui-specification-v1.md` within this
declared scope and uses the visual direction established by
`design/ui/visual-direction-v2.md`.

The approved homepage wireframe remains authoritative except for the original
Problem and Benefits card-composition requirements superseded by
`design/wireframes/session-13-problem-benefits-amendment-v1.md`.

---

# Purpose

This amendment defines the section-by-section visual composition required to realize:

```text
Calm Operational Intelligence
```

It translates the approved visual direction into a homepage treatment map while preserving all approved Product, Information Architecture, Messaging, conversion, and interaction decisions.

---

# Scope

This document approves visual composition only.

It does not change:

- Information Architecture,
- homepage section order,
- approved visible copy,
- Product claims,
- navigation labels,
- navigation destinations,
- conversion destinations,
- pricing content,
- FAQ content or order,
- Social Proof's illustrative disclosure,
- Navbar behavior,
- Accordion behavior,
- MobileNavbar behavior,
- canonical section anchors,
- component ownership.

Any implementation-level change to shared primitive APIs or component boundaries requires a separate Engineering Architecture approval.

---

# Structural Ownership Note

The approved Problem and Benefits treatments depart from the original
wireframe layout notes:

```text
Problem:
Pain-point cards

Benefits:
Benefit cards
Equal visual weight
```

This UI amendment approves:

- an open fragmentation field for Problem,
- a modular outcome register or connected band for Benefits.

However, Wireframe Specifications own structural layout and information placement.

The focused owning artifact is:

```text
design/wireframes/session-13-problem-benefits-amendment-v1.md
```

Therefore:

- the focused Wireframe Amendment supersedes only the original Problem and Benefits card-composition requirements,
- the approved high-fidelity references demonstrate the authorized treatment,
- Benefits retain equal semantic prominence unless a future owning artifact explicitly approves a changed hierarchy.

---

# Approved Direction

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
```

All exact palette values are approved by
`design/ui/visual-direction-v2.md`.

---

# Approved Section Surface Map

```text
Navbar:
structured white shell

Hero:
white narrative + navy Product workbench

Problem:
open fragmentation field on subtle surface

Solution:
structured connection field on base/operational transition

Benefits:
modular outcome band on base surface

Features:
large operational Product canvas

Social Proof:
cross-functional scenario field on subtle surface

Pricing:
quiet evaluation surface with comparable cards

FAQ:
bounded calm disclosure panel

Final CTA:
deep navy terminal contrast field

Footer:
structured navy continuation or restrained dark footer
```

Surface changes must follow the narrative.

They must not alternate mechanically.

The Final CTA and Footer must be designed as one visual closure, not two unrelated dark blocks.

---

# Global Composition Rules

## Preserve

- approved Container discipline,
- generous but purposeful whitespace,
- readable line lengths,
- responsive layout,
- semantic section order,
- one dominant conversion path,
- existing accessibility and interaction contracts.

## Change

- reduce repeated centered headings,
- reduce default reliance on identical cards,
- make Product evidence a primary focal point,
- vary density by narrative role,
- use the operational grid and connected-line language where it communicates Product meaning,
- establish clear Base, Subtle, Operational, and Contrast surfaces.

## Prohibit

- decorative Bento-grid layouts,
- arbitrary grid ornament,
- copy changes,
- new section labels,
- new Product claims,
- visual effects that imply functionality not represented by approved Product decisions.

---

# Navbar

## Preserve

- sticky behavior,
- `NovaFlow` text wordmark,
- all approved labels,
- all approved destinations,
- desktop navigation order,
- mobile navigation order,
- 768px responsive breakpoint,
- MobileNavbar interaction and accessibility behavior.

## Approved Changes

- use Nova blue for the primary CTA,
- create a cleaner white shell,
- create a stronger but restrained boundary from page content,
- align shell details to the operational grid,
- place the approved mark beside the unchanged `NovaFlow` text wordmark,
- maintain clear focus, hover, active, and expanded states.

## Brand Lockup Boundary

The mark must not replace the text wordmark.

Mark-plus-wordmark usage is authorized by
`docs/brand/novaflow-homepage-brand-expression-v1.md` and demonstrated by the
approved high-fidelity references.

## Interaction Boundary

Do not:

- redesign MobileNavbar behavior,
- add an overlay,
- add body scroll locking,
- change the menu icon dependency,
- add navigation items,
- route any Navbar item directly to Calendly.

---

# Hero

## Preserve

- exact approved Hero copy,
- primary and secondary CTA labels,
- primary and secondary CTA destinations,
- supporting points,
- desktop two-part intent,
- primary message dominance,
- comprehensibility without relying on the preview.

## Approved Changes

- make Product visualization the primary visual focal point,
- introduce a navy Product workbench,
- connect narrative and preview through grid or flow alignment,
- use one coherent employee-onboarding system,
- reduce generic card appearance,
- provide meaningful Product depth through layered panels,
- improve mobile first-screen composition,
- show recognizable Product evidence earlier on mobile.

## Desktop Composition

Approved intent:

```text
Narrative column
aligned through the operational grid
to
Product workbench and system overview
```

The two parts should feel connected rather than like unrelated columns.

## Mobile Composition

The mobile Hero should:

- preserve copy and both CTAs,
- keep supporting points available,
- present a compact Product-system summary within or near the first two viewports,
- avoid placing all Product evidence after a long text-and-action stack,
- recompose the Product view instead of simply shrinking the desktop panel.

No approved Hero content may be hidden solely to shorten the page.

---

# Problem

## Preserve

- approved headline,
- all three pain-point titles,
- all three pain-point descriptions,
- calm and credible tone,
- the Problem section's distinct responsibility.

## Approved Composition

Replace three identical floating cards with an open fragmentation composition:

- separated operational nodes,
- broken or incomplete relationships,
- text aligned to a structural grid,
- partial rules, anchors, and open surfaces rather than full card shells,
- clear association between each pain point and its visual state.

No pain-point region may use a complete enclosing card border or read as one of
three floating white boxes.

The composition should communicate:

```text
work exists
but the system connecting it is incomplete
```

## Prohibitions

The negative visual must not resemble:

- an application error state,
- a security incident,
- a service outage,
- data loss,
- a fear-based warning.

## Wireframe Authority

`design/wireframes/session-13-problem-benefits-amendment-v1.md` authorizes this
Problem composition and supersedes only the original Problem card requirement.

---

# Solution

## Preserve

```text
Standardize
Systematize
Scale
```

Preserve:

- exact titles,
- exact descriptions,
- approved order,
- separate Solution component responsibility,
- minimal visual complexity.

## Approved Composition

Create a visual continuation from Problem:

```text
fragmented work
→ connected workflow
→ repeatable system
```

The Solution should:

- resolve the incomplete relationships introduced by Problem,
- show meaningful sequence and connection,
- align the three approved principles with visible system structure,
- introduce the canonical Product flow language.

Standardize, Systematize, and Scale should read as stages on one dominant
continuous workflow rail. Stage boundaries should remain lighter than the
shared system, and nested card shells must not recreate a three-card layout.

## Prohibitions

Do not use:

- a generic three-icon arrow diagram,
- arbitrary numbered decoration,
- feature-list content,
- a second Product scenario.

The approved `01`, `02`, and `03` sequence may remain only because Standardize, Systematize, and Scale form a real ordered process.

---

# Benefits

## Preserve

- Consistent Execution,
- Faster Onboarding,
- Better Collaboration,
- Scalable Operations,
- all approved descriptions,
- equal semantic prominence,
- outcome language rather than capability language.

## Approved Composition

Use a modular outcome register or connected band that:

- relates the four outcomes to the repeatable system established in Solution,
- uses shared alignment and connectors,
- avoids repeating the Problem card pattern,
- supports scanning without turning outcomes into Product features.

Varied emphasis may be explored through:

- position,
- rhythm,
- connector relationships,
- responsive grouping.

Varied emphasis must not imply:

- a ranked order,
- a guaranteed result,
- an unsupported primary outcome,
- numerical impact.

## Wireframe Authority

`design/wireframes/session-13-problem-benefits-amendment-v1.md` authorizes this
Benefits composition and supersedes only the original Benefits card requirement.

---

# Features

## Preserve

- all six approved capabilities,
- exact capability names,
- exact descriptions,
- capability-to-outcome narrative,
- Product preview as supporting evidence,
- Features section anchor.

## Approved Composition

Use a larger Operational Product canvas tied to the canonical employee-onboarding scenario.

Capability callouts should connect to visible Product areas:

| Approved capability | Approved visible evidence |
| --- | --- |
| Workflow Design | Ordered onboarding workflow and reusable structure |
| Guided Execution | Current step, ownership, and handoff context |
| Centralized Knowledge | Onboarding guidance attached to relevant work |
| Automation & Approvals | Visible approval or handoff state |
| Analytics & Reporting | Non-quantified workflow visibility and status |
| Integrations | Generic connected-tool boundary without third-party logos or claims |

## Prohibitions

Do not:

- use a new purchase-request scenario,
- make the preview a generic dashboard screenshot,
- use six unrelated decorative icons as the primary Product evidence,
- invent integration brands,
- introduce real data, dates, names, percentages, or performance metrics.

The approved capability copy must remain understandable without relying on the Product canvas.

---

# Social Proof

## Preserve

- illustrative status,
- exact approved headline,
- exact supporting paragraph,
- exact scenario quote,
- exact disclosure,
- approved role attribution,
- approved scenario meaning,
- clear distinction from verified customer evidence.

## Approved Composition

Use a cross-functional operational scenario showing how the same onboarding system moves across:

- People Operations,
- IT,
- the hiring-manager role.

The composition should emphasize:

- ownership,
- handoffs,
- shared guidance,
- visible workflow state,
- the continuity of the same system introduced in Hero.

The role-and-handoff diagram is the primary evidence. Illustrative status must
be visible before the narrative is interpreted, and the approved quote must be
presented as a scenario observation rather than a testimonial. `Operations
Lead` remains a role attribution, not a customer identity.

## Visual Truthfulness

Do not present the section visually as:

- a customer testimonial,
- a case-study result,
- a review,
- a customer endorsement.

Do not add:

- a fake company,
- personal attribution,
- portrait,
- logo,
- metric,
- rating,
- traction signal.

The disclosure must remain visible and structurally connected to the scenario.

---

# Pricing

## Preserve

- Starter,
- Pro,
- Enterprise,
- all plan descriptions,
- prices,
- billing labels,
- capability allocation,
- Pro recommendation wording,
- all CTA labels,
- all CTA destinations,
- pricing disclosure,
- comparable-card model.

## Approved Changes

- place Pricing on a quiet evaluation surface,
- improve plan-header density and alignment,
- use controlled Nova-blue emphasis for Pro,
- keep Starter and Enterprise secondary,
- preserve fast plan comparison,
- strengthen visible separation between plan content and CTA areas.

## Prohibitions

Do not add:

- exaggerated glow,
- fake savings badge,
- billing toggle,
- annual pricing,
- trial language,
- popularity claims,
- additional pricing metadata,
- a new commercial destination.

---

# FAQ

## Preserve

- exact FAQ section label,
- exact headline and supporting copy,
- exact question order,
- exact answers,
- shared Accordion mechanics,
- current accessible expanded and collapsed behavior,
- FAQ section anchor.

## Approved Changes

Use:

- one bounded calm panel,
- more compact vertical rhythm,
- stronger question hierarchy,
- a clear expanded state,
- a restrained relationship to the subtle or terminal surfaces around it.

## Interaction Boundary

Do not:

- rewrite Accordion mechanics,
- introduce a new disclosure primitive,
- add animation that delays access,
- create multiple simultaneous visual hierarchies,
- alter keyboard behavior.

---

# Final CTA

## Preserve

- exact headline,
- exact supporting copy,
- one approved CTA,
- `#request-demo`,
- the exact approved external Calendly destination,
- direct external routing only from Final CTA.

The canonical URL remains owned by:

```text
docs/product/final-cta-conversion-decision-v1.md
```

This UI amendment does not independently approve or change the provider or URL.

## Approved Composition

Use a deep navy terminal surface.

The visual treatment should:

- feel like the conclusion of the Product story,
- show a resolved version of the operational grid or workflow line,
- preserve calm rather than create urgency,
- provide the strongest terminal contrast on the page,
- keep the single action unmistakable.

## Prohibitions

Do not add:

- another CTA,
- secondary links,
- a form,
- provider promotional content,
- urgency,
- a full-page dark treatment,
- animation required to reveal the action.

---

# Footer

## Preserve

- `NovaFlow` text wordmark,
- approved brand statement,
- approved links,
- approved destinations,
- approved copyright,
- minimal navigation responsibility.

## Approved Changes

- create a deliberate transition from Final CTA,
- use a structured navy continuation or restrained dark Footer,
- preserve a readable hierarchy between brand statement, navigation, and copyright,
- authorize the approved mark beside the unchanged text wordmark only after Branding approval.

## Closure Rule

Final CTA and Footer must read as:

```text
terminal decision
→ calm orientation and closure
```

They must not appear as two unrelated dark cards or duplicate conversion panels.

## Prohibitions

Do not add unavailable:

- legal links,
- company links,
- contact details,
- newsletter content,
- social profiles,
- resources.

---

# Approved Heading Alignment

Approved default direction:

| Section | Approved heading alignment |
| --- | --- |
| Hero | Left |
| Problem | Left or grid-aligned |
| Solution | Left |
| Benefits | Left or band-aligned |
| Features | Left |
| Social Proof | Left |
| Pricing | Centered |
| FAQ | Left within bounded panel |
| Final CTA | Centered |
| Footer | Existing content alignment preserved |

Centered headings should serve comparison or closure rather than act as a global default.

---

# Approved Mobile Composition

At widths below 768px:

- preserve the approved MobileNavbar model,
- preserve all approved homepage content,
- target comfortable 44px primary interaction areas,
- reduce repeated card stacking,
- convert appropriate cards into rows, registers, or connected bands,
- recompose Product previews for narrow widths,
- show Product evidence without requiring a long delay after the Hero copy,
- reduce unnecessary section height where density permits,
- simplify decorative grid density,
- preserve meaningful workflow relationships,
- keep text and Product evidence readable at 320px,
- keep Product labels approximately `12px` or larger in the reference composition,
- give guidance a clear full-width region where needed,
- combine ownership, approval, visibility, and connected tools into a readable compact summary,
- prevent horizontal overflow,
- preserve logical source order.

Do not:

- hide major approved content solely to shorten the page,
- convert Product visuals into horizontal-scroll traps,
- shrink desktop previews until labels become unreadable,
- change the 768px Navbar breakpoint,
- change MobileNavbar interaction behavior.

---

# Accessibility Guardrails

High-fidelity references and later implementation must verify:

- text contrast on all approved surfaces,
- non-text contrast for required controls and state boundaries,
- focus visibility on white, blue, and navy contexts,
- 44px primary interaction targets where practical,
- no state communicated only by Nova blue or Signal cyan,
- meaningful reading order independent of visual connectors,
- decorative grid and connectors hidden from assistive technology,
- accessible treatment for any Product visual that adds unique information,
- no loss of content at 320px,
- text zoom and reflow,
- reduced-motion compliance,
- existing Navbar and Accordion keyboard contracts.

---

# Performance Budget

The approved composition must be implementable within:

```text
Additional client-side JavaScript:
0 KB target

New animation dependency:
None

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

Prefer server-rendered HTML, CSS, and small SVG connectors.

---

# Cross-Artifact Contract

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
Approved within this amendment's scope; Engineering Architecture remains required
for token, primitive, API, or component-ownership changes
```

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

# Implementation Dependencies

Product Owner visual approval, palette approval, mark-placement approval,
Product-interface-copy approval, responsive-reference approval, and the focused
Problem/Benefits Wireframe approval are complete.

Production implementation still requires an approved Engineering Architecture
amendment for any token, shared primitive, public API, component-boundary, or
component-ownership change.

---

# Approval Effect

This approval:

- amend the Homepage UI Specification within the Session 13 visual-elevation scope,
- freeze the approved section surface map and composition,
- authorize Engineering Architecture review and later implementation planning.

This approval does not:

- change Product truth,
- change Messaging,
- change navigation or conversion routing,
- change interaction behavior,
- amend the approved wireframe beyond the focused Problem and Benefits amendment,
- authorize code changes that require an unapproved Engineering Architecture amendment.
