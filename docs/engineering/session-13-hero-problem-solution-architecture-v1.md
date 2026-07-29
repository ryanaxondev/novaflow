# NovaFlow

# Session 13 Hero and Problem-to-Solution Architecture

## Document Information

**Document Type:** Engineering Architecture Amendment

**Artifact:** Hero and Problem-to-Solution System

**Version:** v1

**Status:** Approved
**Owner:** Engineering

**Depends On:**

- `docs/01-product.md`
- `docs/02-information-architecture.md`
- `docs/03-design-philosophy.md`
- `docs/information-architecture/homepage-navigation-reconciliation-v1.md`
- `docs/product/final-cta-conversion-decision-v1.md`
- `docs/product/homepage-product-visualization-v1.md`
- `docs/messaging/hero-v1.md`
- `docs/messaging/problem-solution-v1.md`
- `design/ui/visual-direction-v2.md`
- `design/ui/session-13-homepage-ui-amendment-v1.md`
- `design/wireframes/session-13-problem-benefits-amendment-v1.md`
- `docs/brand/novaflow-brand-mark-v1.md`
- `docs/brand/novaflow-homepage-brand-expression-v1.md`
- `design/references/session-13/README.md`
- `docs/engineering/homepage-engineering-architecture-v1.md`
- `docs/engineering/session-11-architecture-amendment-v1.md`
- `docs/engineering/session-12-mobile-navbar-architecture-amendment-v1.md`
- `docs/engineering/session-13-visual-foundation-brand-shell-architecture-v1.md`

---

# Status and Authority

This document is:

```text
Status: Approved
```

It defines the Approved Engineering Architecture for Session 13.4B.

Approval authorizes Session 13.4B to begin using only the exact five-file
implementation scope and responsibilities defined here.
`HeroProductWorkbench.tsx` is the only authorized new implementation file.

Approval does not authorize staging, committing, deployment, later Homepage-
section packages, primitive API changes, new Client Components, motion,
dependency additions, or changes to Product, IA, Messaging, Branding,
conversion, metadata, or discovery contracts.

---

# Purpose

This amendment defines the smallest maintainable architecture required to
implement:

```text
Hero
Hero Product workbench
Problem fragmentation field
Solution connected workflow
Problem-to-Solution visual transformation
Responsive recomposition
Localized operational grid
Static flow connectors
```

It preserves the approved:

```text
Calm Operational Intelligence
```

direction while preventing section-local implementation choices from becoming
an unreviewed generic Product UI system.

This document freezes:

1. section and focused-component ownership,
2. copy and local data ownership,
3. Product-mark rendering,
4. operational-grid ownership,
5. connector ownership,
6. semantic structure,
7. responsive recomposition,
8. Server and Client boundaries,
9. primitive reuse,
10. the exact Session 13.4B file scope,
11. deferred responsibilities,
12. implementation validation gates.

---

# Scope

## Owned by This Amendment

```text
Hero narrative and Product-evidence composition
Hero Product workbench
Problem open fragmentation field
Solution continuous workflow
Problem-to-Solution visual continuity
One localized operational-grid utility
Section-local static connector grammar
Responsive behavior for Hero, Problem, and Solution
```

## Not Owned by This Amendment

```text
Navbar
Mobile Navbar
Footer
BrandLockup
Benefits
Features
Social Proof
Pricing
FAQ
Final CTA
Homepage section order
Navigation or conversion policy
Metadata or discovery
Production deployment
```

---

# Repository Findings

The current implementation establishes these facts:

- `Hero.tsx` is a Server Component that currently owns approved Hero marketing
  copy, CTA links, supporting points, and a large Product preview.
- `Hero.tsx` currently contains three local Product-data arrays and the complete
  Product-preview markup. The current Product copy includes labels prohibited
  by the approved Product Visualization artifact.
- the workbench is a visually independent composition with workflow chrome,
  steps, checklist content, details, and progress representation. Keeping the
  approved replacement inside `Hero.tsx` would combine two substantial
  responsibilities and make review of marketing versus Product copy harder.
- `Problem.tsx` and `Solution.tsx` are small Server Components whose data is
  already colocated with the owning section.
- `Problem.tsx` currently uses three `Card` shells and therefore conflicts with
  the approved open-fragmentation amendment.
- `Solution.tsx` currently uses one decorative `Card` containing three icon
  nodes and a separate three-column ordered list. It does not yet express one
  continuous semantic workflow.
- `Container`, `Section`, and `SectionHeader` have sufficient APIs for this
  package.
- `Button` already exposes `size="marketing"`.
- `Badge` and `Card` are available, but neither is required to implement the
  approved Hero, Problem, or Solution composition.
- `globals.css` already owns the approved palette, semantic tokens, and Tailwind
  v4 exposure.
- the operational-grid utility approved for the first real consumer does not
  yet exist.
- no existing connector component or shared Product-visual component exists.
- `src/app/(marketing)/page.tsx` already renders Hero, Problem, and Solution in
  the approved order. It requires no change.

---

# Architecture Decision Summary

| Decision | Frozen architecture |
| --- | --- |
| Hero boundary | `Hero.tsx` owns section semantics, marketing copy, CTA routing, supporting points, and macro composition |
| Product boundary | Hero composes one focused `HeroProductWorkbench` component |
| Product-workbench API | no props |
| Product copy | fixed approved interface vocabulary owned inside `HeroProductWorkbench.tsx` |
| Product data | private typed immutable data colocated with the workbench |
| Product mark | direct `next/image` use inside the workbench Product chrome |
| Grid | one global `operational-grid` CSS utility in `globals.css` |
| Problem structure | section-owned unordered list with open regions |
| Problem connectors | section-local CSS rules and decorative markup; no SVG and no shared component |
| Solution structure | section-owned ordered list |
| Solution rail | one CSS pseudo-element rail with local stage nodes |
| Shared connector abstraction | none |
| Problem/Solution coupling | independent sections using shared tokens and related line grammar |
| Responsive behavior | CSS only |
| Client boundary | no new Client Component |
| New component file | `src/components/marketing/HeroProductWorkbench.tsx` only |
| Primitive APIs | unchanged |

---

# Approved Narrative Contract

The implementation must preserve:

```text
Hero
NovaFlow helps growing teams build repeatable systems.

↓

Problem
Why does repeatability matter as teams grow?

↓

Solution
How does NovaFlow make work repeatable?
```

Hero, Problem, and Solution remain separate semantic sections and separate
implementation responsibilities.

Session 13.4B must not change:

- section order,
- approved visible marketing copy,
- CTA labels,
- CTA destinations,
- Product claims,
- navigation,
- routing,
- metadata,
- robots,
- sitemap,
- canonical behavior.

---

# Hero Architecture

## Responsibility

`src/components/marketing/Hero.tsx` owns:

- the Hero `<section>` through the existing `Section` primitive,
- the single page-level `h1`,
- approved Hero headline, supporting copy, and supporting points,
- approved CTA labels and destinations,
- desktop narrative/Product composition,
- mobile narrative/Product/supporting-point order,
- composition of `HeroProductWorkbench`.

It does not own:

- global navigation,
- Footer,
- Problem or Solution copy,
- global visual-token definitions,
- Product-workbench internal markup or vocabulary,
- unrelated Product scenarios,
- interactive Product state,
- analytics,
- routing policy.

## Macro Composition

Desktop behavior at `lg` and above:

- narrative and Product evidence render side by side,
- the two regions are approximately balanced,
- no exact percentage or fixed screenshot coordinate is frozen,
- supporting points remain visually associated with the narrative,
- the Product workbench remains a single coherent evidence region.

Mobile and narrow behavior:

```text
Headline
Supporting copy
Both CTAs
Hero Product workbench
Supporting points
```

This DOM order preserves early Product evidence and matches the approved mobile
direction. Desktop CSS may place the supporting points beneath the narrative
without duplicating content.

Responsive composition uses CSS Grid, Flexbox, and responsive utility classes.
It must not use JavaScript breakpoint detection, DOM measurement, horizontal
scrolling, a carousel, or reversed mobile order.

## CTA Use

Both Hero CTA links are authorized consumers of:

```text
buttonVariants({ size: "marketing" })
```

The primary CTA retains the default Nova-blue treatment:

```text
Request a Demo → #request-demo
```

The secondary CTA retains the outline treatment:

```text
View Pricing → #pricing
```

`src/components/ui/button.tsx` is not modified. CTA labels and destinations
remain owned by Messaging and Information Architecture.

---

# Hero Product Workbench Architecture

## Focused Component Decision

Hero composes one focused component:

```text
src/components/marketing/HeroProductWorkbench.tsx
```

This is Option B.

Option A is rejected because the current Hero already combines a complete
marketing narrative with a large Product composition. The approved workbench
adds a coherent set of Product responsibilities, static data, responsive
recomposition, Product chrome, and accessible semantic structures.

Option C is rejected because there is one current workbench consumer and no
evidence for a generic Product primitive system.

## Exact Public API

```ts
export function HeroProductWorkbench()
```

The component accepts no props and exports no data types.

It must not expose:

```text
className
children
scenario
data
variant
color
geometry
layout
render prop
```

The component is focused and Hero-specific. It is not approved for reuse
outside Hero. A later repeated semantic consumer requires a separate
Architecture decision rather than expansion of this API.

## Responsibility

`HeroProductWorkbench` owns:

- static Product chrome,
- NovaFlow Product identity within that chrome,
- the approved 18 × 18px intrinsic and rendered Product-chrome mark,
- Employee Onboarding workflow identity,
- `In progress` workflow state,
- the five approved workflow steps and their text states,
- current-step emphasis,
- the guidance region,
- ownership context,
- approval state,
- workflow visibility,
- connected-tools boundary,
- internal semantic structure,
- desktop and mobile internal recomposition,
- a bounded decorative Grid layer behind semantic Product content,
- localized `operational-grid` consumption on that decorative layer,
- Product-stage rail presentation.

It does not own:

- Hero marketing copy,
- Hero CTA labels or destinations,
- Product functionality,
- shared Product primitives,
- live state,
- user input,
- third-party integration identity,
- fake data,
- other Homepage Product views.

## Product-Interface Copy Ownership

The fixed Product-interface vocabulary is owned inside:

```text
src/components/marketing/HeroProductWorkbench.tsx
```

It must use only approved strings from:

```text
docs/product/homepage-product-visualization-v1.md
```

The implementation may use the approved brand text `NovaFlow` in Product
chrome. It must not introduce visible Product microcopy, names, companies,
dates, percentages, metrics, customer data, integration brands, or new Product
claims.

Hero does not pass a scenario object. Passing fixed data through a public API
would create variation that has no consumer.

## Product Data

The workbench may define private module-level immutable data for repeated
semantic rendering:

- workflow steps,
- step state,
- owner roles,
- approval states,
- compact summary modules.

The data must use narrow private TypeScript unions and immutable arrays, for
example:

```ts
type WorkflowStepState = "complete" | "current" | "upcoming";
```

Types and data remain private to the file. No global content file, context,
hook, Product data module, or exported model is authorized.

Small rendering helpers may be private same-file functions when they represent
repeated workbench markup. They must not become exported Product primitives.

## Product Mark Ownership

The workbench owner directly renders:

```text
/brand/novaflow-mark.svg
```

through `next/image`.

The Product-chrome mark uses:

```text
alt=""
width={18}
height={18}
intrinsic dimensions: 18 × 18px
rendered dimensions: 18 × 18px
```

The adjacent visible `NovaFlow` text identifies the Product, so the mark is
decorative and must not add a duplicate accessible name.

The workbench must not:

- reuse `BrandLockup`, because that component owns a Navbar/Footer mark-plus-
  wordmark composition and responsive sizing contract,
- inline or duplicate the SVG,
- recolor, redraw, crop, animate, shadow, or enclose the mark,
- create a second logo asset,
- omit explicit dimensions.

## Static Product Semantics

The workbench is a static semantic representation.

It remains a Server Component and must contain:

- no state,
- no event handlers,
- no fake tabs,
- no buttons or disabled controls used as decoration,
- no form controls,
- no draggable steps,
- no animated progress,
- no live status,
- no tooltip dependency,
- no hydration boundary.

Use:

- a labelled `<figure>` for the complete illustrative Product view,
- an `<ol>` for workflow stages,
- headings for named internal regions where they improve navigation,
- `<dl>` only for true label/value relationships,
- ordinary text and list semantics for ownership, approval, visibility, and
  connected-tools summaries.

Stage nodes, checks, and status dots supplement visible labels and semantic
order. They are not fake controls. Decorative rail segments and grid lines
carry no unique meaning.

## Product Stage Rail Architecture

The desktop workbench presents all five stages as one continuous rail in this
approved order:

```text
Prepare
Collect information
Set up access
Confirm readiness
Welcome
```

The Mobile workbench must not proportionally shrink that complete Desktop rail.
It uses one CSS-recomposed semantic `<ol>` with two visual-density groups:

```text
Primary immediate sequence:
Prepare
Collect information
Set up access

Compact continuation sequence:
Confirm readiness
Welcome
```

All five stages remain in the same ordered list, remain present in the DOM, and
remain readable without interaction. The first three stages receive primary
simultaneous emphasis. The final two remain visibly secondary compact
continuation states.

Current-step and immediate-next-step comprehension takes precedence over equal
visual weight on Mobile. Responsive CSS may change layout, spacing, node size,
and label density, but it must not:

- change stage order or copy,
- omit a stage,
- hide continuation stages behind interaction,
- introduce a carousel, accordion, tab, or horizontal scroller,
- require a Client Component.

---

# Operational Grid Architecture

## Decision

Session 13.4B implements one semantic global CSS utility in:

```text
src/app/globals.css
```

The exact utility name is:

```text
operational-grid
```

It is a CSS utility, not a React component.

## Exact Utility Contract

The utility owns only:

- the two-axis CSS `linear-gradient` Grid drawing recipe,
- `var(--line-grid)` as the semantic line token,
- transparent gaps,
- the fixed `3rem × 3rem` cell dimensions,
- centered background positioning.

The token already supplies the approved `0.10` line alpha. The utility must not
apply `opacity` to the consuming element or its content.

The utility does not own:

- surface color,
- foreground color,
- section dimensions,
- component radius,
- content padding,
- Grid-opacity overrides through raw colors,
- semantic DOM,
- narrative layout.

The utility has no prop, JavaScript, DOM, or asset API.

Conceptual implementation:

```css
@utility operational-grid {
  background-image:
    linear-gradient(to right, var(--line-grid) 1px, transparent 1px),
    linear-gradient(to bottom, var(--line-grid) 1px, transparent 1px);
  background-position: center;
  background-size: 3rem 3rem;
}
```

Exact formatting may follow repository conventions, but the name, token,
two-axis recipe, and default interval are frozen.

## Consumer-Layer Contract

The `operational-grid` utility must not be applied to the complete root of any
Homepage `Section`.

Every Grid consumer creates a bounded, localized decorative layer inside its
visual field. The local consumer owns:

- the containing block,
- the clipping boundary,
- `overflow-hidden` when required,
- radius when required,
- the stacking context,
- a separate foreground content layer,
- the Grid's localized visual extent.

When the decorative layer is a real element, it must be:

```text
aria-hidden="true"
pointer-events-none
non-interactive
behind semantic content
```

When the decorative layer is a pseudo-element, it does not enter the
accessibility tree. It must remain pointer-neutral and behind semantic content.

The Grid must never overlay readable Product or Solution text. Semantic content
must occupy a foreground stacking layer rather than relying on incidental DOM
painting order.

## Authorized Consumers

Session 13.4B may apply the utility only to:

- a bounded decorative layer inside `HeroProductWorkbench`,
- a bounded decorative layer inside the localized Solution workflow field.

Problem does not use a pervasive grid. Its fragmentation is communicated by
open regions, partial rules, anchors, and interrupted connectors.

The utility is prohibited on:

- `html`,
- `body`,
- the marketing page root,
- any complete `Section` root,
- the `Section` primitive,
- the Hero narrative column,
- the complete Problem section,
- Navbar,
- Footer,
- later Homepage sections.

The Hero workbench and Solution workflow field may expose different visible
Grid extents through local clipping geometry. They must use the same
`--line-grid` token and `3rem` cell size and must not introduce competing color,
cell-size, or raw-opacity recipes.

No second grid utility, image background, SVG grid, canvas, React component, or
Client Component is authorized. No Grid animation or automatic Grid inheritance
is authorized.

---

# Connector Architecture

The following remain separate concerns:

```text
Operational grid:
background structure

Flow connector:
relationship between regions or stages

Product stage rail:
part of the represented Product interface
```

No universal connector component is created.

## Token Consumption

Connector and node colors consume semantic utilities or CSS variables:

```text
line-structural
line-grid
line-flow
brand-blue
```

Approved raw palette values must not appear in React SVG markup, class strings,
inline styles, or section CSS.

No standalone SVG connector asset is created.

## Decorative Behavior

CSS pseudo-elements are inherently absent from the accessibility tree.

Any local decorative connector element that exists only for layout must use:

```text
aria-hidden="true"
pointer-events-none
```

Inline SVG is not required by the approved architecture. If implementation
proves CSS insufficient, Session 13.4B must stop and request an Architecture
decision rather than add SVG opportunistically.

Problem and Solution content must remain complete and understandable when all
grid and connector styling is removed.

---

# Problem Architecture

## Responsibility

`src/components/marketing/Problem.tsx` remains the owner of:

- Problem section semantics,
- approved Problem heading,
- the three approved pain-point titles and descriptions,
- the open fragmentation composition,
- desktop placement,
- mobile reading order,
- local decorative fragmentation connectors.

It does not own Solution copy, Product-interface copy, or a shared connector
system.

## Semantic Structure

Use:

- the existing `Section` and `Container`,
- one section heading,
- one `<ul>` containing exactly three `<li>` pain-point regions,
- an `h3` and complete description inside each region.

An unordered list is correct because the pain points have equal semantic
importance and are not steps.

The DOM order remains:

```text
Inconsistent Processes
Fragmented Knowledge
Person-Dependent Execution
```

Desktop CSS Grid placement may stagger the three list items visually, but it
must not use CSS `order`, duplicate content, or change DOM reading order.

## No-Card-Shell Enforcement

Problem must not use:

- `Card`,
- complete per-region borders,
- three white boxes,
- per-region shadows,
- rounded full shells,
- a generic equal feature-card grid.

Each region remains an open text area. Partial rules, small anchors, and
interrupted line segments may position it without enclosing it.

## Connector Strategy

Problem connectors use:

- section-local CSS borders and pseudo-elements for partial rules,
- minimal local decorative spans only when a pseudo-element cannot express a
  required anchor,
- structural and flow semantic tokens,
- interrupted rather than continuous lines.

No SVG and no shared connector component are authorized.

The visual grammar must remain calm and operational. It must not resemble an
error state, security breach, circuit board, or unreadable diagram.

## Responsive Behavior

Below the desktop composition breakpoint:

- the `<ul>` becomes one column,
- visual staggering is removed,
- content remains in approved DOM order,
- partial horizontal rules become simple separators or short vertical
  relationship cues,
- unnecessary connectors disappear,
- all text remains visible,
- no horizontal scrolling is introduced.

---

# Solution Architecture

## Responsibility

`src/components/marketing/Solution.tsx` remains the owner of:

- Solution section semantics,
- approved heading and supporting copy,
- Standardize, Systematize, and Scale content,
- one continuous workflow rail,
- desktop horizontal flow,
- mobile vertical flow,
- local workflow connector styling,
- one bounded decorative Grid layer inside the workflow field,
- foreground stacking that keeps the ordered workflow above the Grid.

It does not own Benefits, Features, Product metrics, interactivity, or a shared
workflow library.

## Semantic Structure

Use:

- the existing `Section` and `Container`,
- a left-aligned `SectionHeader`,
- one `<ol>` for the ordered workflow,
- exactly three `<li>` stages in approved order,
- an `h3` and complete description for each stage.

Ordered-list semantics communicate the transformation independently of the
visual rail.

## One-System Enforcement

Solution must not use:

- `Card`,
- one large enclosing card with three nested cards,
- three independent feature cards,
- three disconnected columns,
- fake controls,
- interactive stepper behavior,
- animation-dependent meaning.

The three stage regions share one localized operational field and one
continuous rail. Stage boundaries remain light and do not become independent
shells.

The localized operational field is the only Solution Grid consumer. The
`Solution` section root, narrative area, and `Section` primitive must not carry
`operational-grid`. The workflow field owns its containing block, clipping,
stacking context, and foreground content layer. Its Grid layer follows the
Consumer-Layer Contract and remains behind every readable stage label and
description.

## Rail Strategy

The continuous rail is implemented through one section-local CSS
pseudo-element owned by the ordered list.

- desktop: one horizontal rail behind the ordered stages,
- mobile: one vertical rail beside the ordered stages,
- local stage-node elements align with the rail,
- stage numbers and headings carry the semantic order,
- the rail uses `line-flow` and stage nodes use `brand-blue`,
- the rail is decorative and carries no unique accessible meaning.

No SVG, standalone asset, shared `WorkflowRail` component, or Product-stage
component is authorized.

The approved reference does not define an interactive current stage in
Solution. All three principles retain equal Product importance. Implementation
must not introduce an active state that implies unavailable interaction.

---

# Problem-to-Solution Continuity

Problem and Solution remain independent sibling sections. No wrapper change to:

```text
src/app/(marketing)/page.tsx
```

is required or authorized.

Visual continuity is expressed through:

- the same `Container` geometry,
- shared structural and flow tokens,
- related anchor and node shapes,
- interrupted lines in Problem,
- one continuous line in Solution,
- a `surface-subtle` Problem field resolving into a localized
  `surface-operational` Solution workflow field,
- consistent left-aligned narrative rhythm.

The continuity requires:

```text
No shared state
No context provider
No DOM measurement
No cross-section JavaScript
No scroll listener
No synchronized animation
No absolute connector spanning both section DOM trees
No runtime import coupling between Problem and Solution
```

Each section must remain understandable when viewed independently.

---

# Surface Ownership

The approved local semantic-utility strategy remains unchanged.

| Region | Surface |
| --- | --- |
| Hero narrative | `surface-base` |
| Hero Product workbench | `surface-contrast` with explicit `text-on-contrast` ownership |
| Problem | `surface-subtle` |
| Solution narrative | `surface-base` |
| Solution workflow field | localized `surface-operational` |

`Section` receives no surface prop. No wrapper primitive or automatic section
alternation is introduced.

Contrast descendants must explicitly use accessible on-contrast or Product-
panel foreground treatment. White text must not appear through accidental
inheritance.

---

# Responsive Architecture

All responsive behavior is CSS only and must be validated at:

```text
320
375
767
768
1024
1280
1440
```

## Hero Mobile Recomposition

The workbench is recomposed rather than proportionally scaled.

Order inside the Product view:

```text
Product chrome
Workflow identity and status
Workflow stage rail
Full-width guidance
Ownership and workflow-state summaries
```

Requirements:

- workflow identity, current step, and stage rail remain prominent,
- all five approved stages remain present in the DOM and readable,
- `Prepare`, `Collect information`, and `Set up access` form the primary
  immediate sequence with simultaneous visual emphasis,
- `Confirm readiness` and `Welcome` remain visible as compact secondary
  continuation states,
- stages retain approved order and reflow without horizontal scrolling,
- no stage is hidden behind interaction,
- guidance becomes a full-width region,
- ownership remains a compact labelled summary,
- approval and workflow visibility share a compact summary,
- connected tools remains visible within that summary,
- at `320px`, summary regions may stack,
- simultaneous density decreases without hiding approved meaning,
- Product labels remain approximately `12px` or larger,
- grid density is naturally reduced by the fixed interval and may be locally
  masked where it competes with labels.

No accordion, carousel, tabs, horizontal stage scroller, clipping of major
content, or Client Component is authorized.

## Problem Mobile Linearization

- one-column list,
- approved order,
- no desktop staggering,
- simple interrupted vertical or separator grammar,
- optional removal of nonessential connector fragments,
- complete headings and descriptions,
- no horizontal scrolling.

## Solution Mobile Linearization

- vertical ordered list,
- Standardize → Systematize → Scale order,
- one continuous vertical rail,
- stage text remains adjacent to its node,
- no card shells,
- no horizontal scrolling,
- no interaction required.

---

# Server and Client Boundary

Freeze:

```text
Server Components by default
```

| Concern | Boundary |
| --- | --- |
| Hero | Server Component |
| HeroProductWorkbench | Server Component |
| Problem | Server Component |
| Solution | Server Component |
| Product mark | server-rendered 18 × 18px `next/image` |
| Operational grid | CSS |
| Product stage rail | static Server markup and CSS |
| Problem connectors | static Server markup and CSS |
| Solution rail | static Server markup and CSS |

Session 13.4B adds no `"use client"` directive and no new Client Component.

The existing `MobileNavbar` boundary must not widen. Responsive layout,
Product visualization, states, rails, grids, and connectors do not justify
client-side ownership.

---

# Existing Primitive Reuse

## Container

Reuse unchanged in Hero, Problem, and Solution.

## Section

Reuse unchanged. It continues to own semantic section markup and vertical
rhythm. Section-local classes own surfaces and overflow.

## SectionHeader

- Problem reuses it with explicit left/grid-aligned presentation.
- Solution reuses it with explicit left alignment.
- Hero does not use it because Hero owns the page-level `h1` pattern.

No `SectionHeader` API change is authorized.

## Button

Reuse `buttonVariants` unchanged. Hero CTA links use `size="marketing"`;
primary uses default and secondary uses outline.

## Badge

Not used. The Hero has no approved eyebrow copy, and Product status labels are
section-local semantic text rather than a new Badge API requirement.

## Card

Not used by Hero Product workbench, Problem, or Solution in this package.
Workbench panels are Product-specific structural regions, while Problem and
Solution explicitly prohibit repeated card shells.

No shared primitive file changes are authorized.

---

# Component Abstraction Classification

| Element | Classification | Decision |
| --- | --- | --- |
| Container | Existing shared primitive | reuse unchanged |
| Section | Existing shared primitive | reuse unchanged |
| SectionHeader | Existing shared primitive | reuse unchanged in Problem and Solution |
| Button | Existing shared primitive | reuse `size="marketing"` |
| Hero | Section component | owns marketing and macro composition |
| HeroProductWorkbench | Focused new component | one independent Product-evidence responsibility |
| workbench rendering helpers | Private same-file subcomponents | allowed only for repeated local markup |
| Problem | Section component | owns all Problem composition |
| Problem regions | section-local mapped data | no new component file |
| Problem connectors | Decorative local markup and CSS | no shared abstraction |
| Solution | Section component | owns all Solution composition |
| Solution stages | section-local mapped data | no new component file |
| Solution rail | Decorative local CSS | no shared abstraction |
| operational-grid | CSS utility | one global semantic utility |
| generic Product primitives | Deferred abstraction | no stable repeated consumer |
| generic FlowConnector | Deferred abstraction | no stable shared API |

`HeroProductWorkbench` is justified by responsibility separation, not file
length alone. It owns an independent semantic Product representation, fixed
Product vocabulary, Product chrome, internal responsive behavior, and the
Product mark. It has one consumer and no variation API.

No `ProblemFragmentationField.tsx`, `SolutionWorkflow.tsx`, `ProductPanel`,
`WorkflowRail`, `StatusNode`, or `FlowConnector` file is authorized.

---

# Primitive and Component Ownership Matrix

| Item | Current responsibility | Approved Session 13.4 responsibility | API change | Package owner | Boundary | Prohibited responsibilities |
| --- | --- | --- | --- | --- | --- | --- |
| `src/app/globals.css` | tokens, Tailwind exposure, base styles | add one `operational-grid` utility | internal CSS utility only | 13.4B | CSS | page-wide grid, copy, layout, connector system |
| Container | max width and horizontal padding | unchanged shared geometry | prohibited | existing architecture | Server | surfaces, narrative order, section-specific placement |
| Section | semantic section and vertical rhythm | unchanged; receives local surface classes | prohibited | existing architecture | Server | surface prop, automatic alternation, copy, internal layout |
| SectionHeader | shared `h2` pattern | unchanged; explicit left alignment by consumers | prohibited | existing architecture | Server | Hero `h1`, copy ownership, forced universal alignment |
| Button | shared action variants and sizes | existing `marketing` size used by Hero CTA links | prohibited | existing architecture | shared primitive | labels, destinations, Hero-specific variant |
| Badge | compact label primitive | no Session 13.4B consumer | prohibited | deferred | Server by default | invented eyebrow or Product status policy |
| Card | bounded generic surface | no Session 13.4B consumer | prohibited | deferred | Server | Problem cards, Solution nested shells, Product composition ownership |
| Hero | Hero narrative, CTAs, current Product preview | narrative, CTA, macro layout, workbench composition | internal rewrite only | 13.4B | Server | Product internals, Problem/Solution copy, navigation, global tokens |
| Hero Product workbench | currently inline in Hero | focused Hero-only Product system overview; bounded Grid layer; primary-three plus compact-two Mobile stage hierarchy | one no-prop named component | 13.4B | Server | interaction, generic Product system, fake data, other scenarios |
| Problem | heading and three card-based pain points | open fragmentation field and semantic list | internal rewrite only | 13.4B | Server | Solution content, shared connector API, error semantics |
| Problem fragmentation connectors | no stable implementation | interrupted local CSS/markup | no public API | 13.4B | static Server/CSS | unique meaning, global connector system, animation |
| Solution | heading, decorative card, three principles | one ordered connected workflow with a bounded Grid layer inside the workflow field | internal rewrite only | 13.4B | Server | section-root Grid, feature cards, interaction, Product metrics |
| Solution workflow rail | disconnected icon arrows | one local responsive CSS rail | no public API | 13.4B | static Server/CSS | interactive stepper, active state, shared Product rail |
| Product-chrome mark | not present in current Hero | direct `next/image` with 18 × 18px intrinsic and rendered dimensions | no public API | 13.4B | Server | BrandLockup reuse, geometry/color change, duplicate accessible name |
| Operational grid | approved but not implemented | one drawing utility applied only to bounded decorative layers in HeroProductWorkbench and the Solution workflow field | one CSS class | 13.4B | CSS | surface/foreground ownership, section-root or global background, React component, connector semantics |

---

# Exact Session 13.4B Authorized File Scope

Under this Approved amendment, Session 13.4B may modify exactly:

```text
src/app/globals.css
src/components/marketing/Hero.tsx
src/components/marketing/HeroProductWorkbench.tsx
src/components/marketing/Problem.tsx
src/components/marketing/Solution.tsx
```

`src/components/marketing/HeroProductWorkbench.tsx` is the only authorized new
file.

`src/app/globals.css` is included only to add the single approved
`operational-grid` utility. Approved palette values, semantic mappings, base
styles, typography, radii, and existing utilities must remain unchanged.

Session 13.4B must implement:

- 18 × 18px intrinsic and rendered Product-chrome mark dimensions,
- the primary-three plus compact-two Mobile workflow-stage hierarchy,
- Grid application through bounded decorative consumer layers only,
- the same `--line-grid` token and `3rem` cell size in both authorized
  consumers.

No other file may be changed to complete Session 13.4B. A compilation or visual
problem outside this list requires an Architecture scope decision; it does not
expand the list automatically.

---

# Explicit Deferred Scope

The following remain unchanged and deferred:

```text
src/components/ui/Container.tsx
src/components/ui/Section.tsx
src/components/ui/SectionHeader.tsx
src/components/ui/button.tsx
src/components/ui/card.tsx
src/components/ui/badge.tsx

src/components/marketing/Navbar.tsx
src/components/marketing/MobileNavbar.tsx
src/components/marketing/Footer.tsx
src/components/marketing/BrandLockup.tsx

src/components/marketing/Benefits.tsx
src/components/marketing/Features.tsx
src/components/marketing/SocialProof.tsx
src/components/marketing/Pricing.tsx
src/components/marketing/FAQ.tsx
src/components/marketing/FinalCTA.tsx

src/app/(marketing)/page.tsx
src/app/(marketing)/layout.tsx

src/app/robots.ts
src/app/sitemap.ts
src/lib/site-metadata.ts

public/brand/novaflow-mark.svg
src/app/favicon.ico

package.json
pnpm-lock.yaml
postcss.config.mjs
components.json
tsconfig.json
```

Also deferred:

- Benefits connected modular register implementation,
- Features Product canvas implementation,
- Social Proof illustrative scenario implementation,
- Pricing and FAQ visual treatment,
- Final CTA redesign,
- shared Product-visual APIs,
- shared connector APIs,
- motion,
- responsive closure across later Session 13 packages,
- deployment.

No route, page, dependency, font, public Product screenshot, raster asset, or
new SVG asset is authorized.

---

# Accessibility Architecture

## Hero

- preserve one page-level `h1`,
- retain exact CTA purpose and real link semantics,
- preserve visible keyboard focus,
- keep Product evidence static and non-interactive,
- use a labelled figure and meaningful semantic lists,
- retain readable Product labels at narrow widths,
- render the Product mark at explicit 18 × 18px intrinsic and rendered
  dimensions with `alt=""` beside visible Product identity,
- keep all five workflow stages readable in semantic order on Mobile,
- present the first three stages as the primary immediate sequence and the
  final two as visible compact continuation states without hiding them behind
  interaction,
- explicitly establish foreground treatment on the contrast surface,
- communicate step state through label, position, and shape in addition to
  color.

## Problem

- DOM reading order matches approved copy order,
- desktop visual staggering does not change semantic order,
- all three pain points remain complete without connectors,
- decorative lines and anchors are hidden from assistive technology,
- no region is made interactive.

## Solution

- use ordered-list semantics,
- preserve Standardize → Systematize → Scale order,
- keep the rail decorative,
- ensure the rail is not the sole carrier of order,
- avoid active styling that implies interaction,
- keep every stage complete when the rail is absent.

## General

- no meaning relies on Signal cyan alone,
- no state relies on color alone,
- no horizontal scrolling,
- no fake controls,
- visible focus remains unchanged,
- a pseudo-element Grid creates no accessibility-tree content,
- a real Grid layer uses `aria-hidden="true"`, `pointer-events-none`, and a
  behind-content stacking position,
- Grid never overlays readable Product or Solution text,
- decorative DOM elements use `aria-hidden="true"` and
  `pointer-events-none`,
- no motion means no special reduced-motion implementation is required.

Automated accessibility validation must include the complete Homepage at
mobile and desktop, plus focused Hero, Problem, and Solution review.

Expected result:

```text
0 confirmed violations
```

---

# Performance Architecture

Freeze:

```text
New runtime dependency:
None

New font:
None

New Client Component:
None

New application-authored client JavaScript:
0 KB target

Product visualization:
SSR HTML and CSS

Grid:
One CSS drawing utility on bounded decorative consumer layers

Connectors:
Section-local CSS and lightweight static markup

Brand asset:
Existing SVG only

New raster Product screenshot:
None

Canvas:
Prohibited

WebGL or 3D:
Prohibited

Large filter or blur:
Prohibited

Animation dependency:
None

Layout shift:
None
```

The single Product-chrome `next/image` uses explicit 18 × 18px intrinsic and
rendered dimensions and follows the accepted Session 13.3 interpretation:

```text
No new application-authored client JavaScript.
No new Client Component boundary.
Framework-managed Image runtime is non-blocking when required by the approved
asset contract.
```

The implementation must inspect the production build for unexpected Client
Component expansion. It must also confirm that Grid localization adds no image
payload, runtime dependency, Client boundary, animation, or layout shift.

---

# Motion Boundary

Session 13.4B must not implement:

- scroll animation,
- entrance animation,
- parallax,
- animated connector drawing,
- pulsing status,
- looping Product animation,
- JavaScript viewport orchestration,
- an animation dependency.

Static hierarchy and semantic order must communicate the complete
transformation.

---

# Session 13.4B Validation Gates

## Pre-Implementation

Before editing:

- verify the approved Architecture status,
- verify the exact Git precondition required by the implementation package,
- inventory current copy and semantic-token use in all authorized files,
- capture baseline full-page and focused evidence,
- confirm the six deferred shared primitives remain sufficient.

## Static Validation

Run:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
git diff --check
git status --short
```

No dependency, package, lockfile, configuration, environment, route, metadata,
or discovery change is authorized.

## Responsive Browser Matrix

Capture and compare before/after full-page screenshots at:

```text
320
375
767
768
1024
1280
1440
```

Required focused evidence:

```text
Desktop Hero
Mobile Hero
Hero Product workbench
Desktop Problem
Mobile Problem
Desktop Solution
Mobile Solution
Problem-to-Solution transition
```

Compare against:

```text
design/references/session-13/desktop-hero-reference.png
design/references/session-13/desktop-page-rhythm-reference.png
design/references/session-13/mobile-hero-problem-solution-reference.png
```

Implementation preserves meaning, hierarchy, surface roles, and relationship
grammar rather than fixed screenshot coordinates.

Classify every visible change:

```text
Expected Session 13.4 implementation
Expected existing-foundation behavior
Unexpected regression
```

Unexpected regressions block approval.

## Hero Validation

Confirm:

- exact approved marketing copy,
- exact CTA labels and destinations,
- one `h1`,
- approximately balanced desktop macro composition,
- mobile narrative-first order,
- both CTAs visible early,
- Product evidence immediately follows CTAs on mobile,
- all supporting points remain visible,
- canonical Product scenario and approved vocabulary only,
- all five workflow stages remain readable,
- `Prepare`, `Collect information`, and `Set up access` form the primary Mobile
  sequence,
- `Confirm readiness` and `Welcome` remain visibly secondary continuation
  states,
- no stage is omitted or hidden behind interaction,
- no fake data or controls,
- mark geometry and explicit 18 × 18px intrinsic and rendered dimensions,
- no horizontal overflow.

At `320px`, `375px`, and `767px`, the Mobile evidence must explicitly verify:

```text
All five stages are readable.
The first three stages form the primary sequence.
The final two stages are visibly secondary continuation states.
No stage is omitted.
No horizontal scrolling occurs.
```

## Problem and Solution Validation

Confirm:

- exact headings, descriptions, and order,
- three equal Problem regions without card shells,
- Problem remains calm and readable,
- one continuous Solution workflow,
- no nested stage cards,
- desktop placement does not change DOM order,
- mobile Problem is linear,
- mobile Solution is vertical and connected,
- content remains understandable with decorative CSS disabled.

## Grid Validation

Confirm:

- no complete `Section` root carries `operational-grid`,
- no Grid appears behind the Hero narrative column,
- no Grid appears in Navbar or Footer,
- only `HeroProductWorkbench` and the Solution workflow field consume the Grid,
- each consumer uses a bounded decorative layer with local clipping and
  foreground stacking,
- a real Grid layer is `aria-hidden`, pointer-neutral, and non-interactive,
- a pseudo-element Grid remains absent from the accessibility tree,
- the same `--line-grid` token and `3rem` cell size are used by both consumers,
- no raw-color opacity override, second Grid recipe, inheritance, or animation
  exists,
- Grid remains localized and restrained,
- Grid never overlays readable Product or Solution text.

## Functional Regression

Preserve and test:

```text
Navbar behavior
Mobile Navbar behavior
Footer behavior
FAQ behavior
all anchor destinations
all CTA destinations
section order
metadata
robots
sitemap
canonical behavior
```

Specifically validate:

```text
Hero Request a Demo → #request-demo
Hero View Pricing → #pricing
```

## Runtime Validation

Run the production build locally and verify:

- no React error,
- no hydration warning,
- no failed first-party request,
- no missing brand asset,
- no image sizing warning,
- no horizontal overflow,
- no runtime exception,
- no unexpected layout shift,
- no new Client Component boundary,
- no console error.

Development-mode review alone is insufficient.

---

# Conflict and Escalation Rules

Session 13.4B must stop the affected work and request an Architecture decision
when:

- the exact file list is insufficient,
- CSS cannot express the approved connector behavior without a new component or
  SVG strategy,
- a shared primitive requires an API change,
- approved copy cannot fit without omission or rewriting,
- an unacceptable regression requires a deferred-file edit,
- Product-interface vocabulary appears insufficient,
- implementation would require client-side behavior.

The implementation package must not silently expand scope or invent a local
solution.

---

# Decision Boundaries

This amendment does not authorize:

- implementation before approval,
- changes outside the exact Session 13.4B scope,
- a generic Product UI library,
- new visible copy,
- new Product claims,
- new routes or sections,
- navigation or routing changes,
- primitive API changes,
- dark mode,
- analytics,
- authentication,
- motion,
- Product interaction,
- public Product screenshots,
- metadata or discovery changes,
- deployment.

---

# Architecture Decision Checklist

1. Hero composes one focused Product-workbench component.
2. `HeroProductWorkbench.tsx` is the only new component file.
3. Product-interface copy lives inside that focused component.
4. Product UI uses private typed immutable local data.
5. The workbench directly renders the Product-chrome mark with `next/image` at
   18 × 18px intrinsic and rendered dimensions.
6. `globals.css` is modified only for one grid utility.
7. `operational-grid` is a two-axis tokenized CSS background utility.
8. Problem connectors use local CSS and minimal decorative markup.
9. Solution uses one local responsive CSS rail.
10. No connector is shared.
11. No connector uses SVG in this package.
12. Grid, rails, partial rules, and decorative anchors carry no accessibility
    content.
13. Problem uses an unordered list.
14. Solution uses an ordered list.
15. CSS Grid placement changes appearance without changing DOM order.
16. Mobile Hero orders narrative, CTAs, Product evidence, then supporting
    points.
    Within the workbench, the first three workflow stages form the primary
    sequence and the final two remain visible compact continuation states.
17. Mobile Problem becomes one linear list.
18. Mobile Solution becomes one vertical connected workflow.
19. Hero CTAs use the existing `marketing` Button size.
20. Container, Section, SectionHeader, and Button are reused unchanged.
21. Session 13.4B may change exactly five files, one of which is new.
22. All listed shell, later-section, route, discovery, asset, and package files
    remain deferred.
23. Static, responsive, accessibility, functional, runtime, and visual gates
    block implementation approval.
24. No new Client boundary is required.
25. No decision in this Approved amendment conflicts with another Approved
    artifact.
26. Grid consumers create bounded decorative layers; no complete Section root
    consumes `operational-grid`.

No architecture option remains unresolved within this Approved amendment.

---

# Approval Effect

Approval of this amendment:

- authorizes Session 13.4B to begin,
- authorizes only the exact implementation file list defined here,
- authorizes `HeroProductWorkbench.tsx` as the only new implementation file,
- freezes the focused Hero Product-workbench boundary,
- freezes local Product copy and data ownership,
- authorizes the first concrete operational-grid utility,
- freezes section-local connector strategies,
- preserves Server Components and zero new application-authored client
  JavaScript,
- requires all validation gates in this document.

Approval does not:

- implement code,
- authorize changes outside the exact file list,
- authorize later Session 13.5 or 13.6 section work,
- authorize primitive API changes,
- authorize new Client Components,
- authorize motion,
- authorize dependency additions,
- change approved copy, navigation, conversion, Product claims, section order,
  metadata, or discovery,
- authorize Product interaction,
- authorize deployment.
