# NovaFlow

# Session 13 Visual Foundation and Brand Shell Architecture

## Document Information

**Document Type:** Engineering Architecture Amendment
**Artifact:** Visual Foundation and Brand Shell
**Version:** v1
**Status:** Approved
**Owner:** Engineering

**Depends On:**

- `docs/01-product.md`
- `docs/02-information-architecture.md`
- `docs/03-design-philosophy.md`
- `design/ui/visual-direction-v2.md`
- `design/ui/session-13-homepage-ui-amendment-v1.md`
- `design/wireframes/session-13-problem-benefits-amendment-v1.md`
- `docs/brand/novaflow-brand-mark-v1.md`
- `docs/brand/novaflow-homepage-brand-expression-v1.md`
- `docs/product/homepage-product-visualization-v1.md`
- `design/references/session-13/README.md`
- `docs/engineering/homepage-engineering-architecture-v1.md`
- `docs/engineering/session-11-architecture-amendment-v1.md`
- `docs/engineering/session-12-mobile-navbar-architecture-amendment-v1.md`

**Approved Design Decision:**

```text
28facaf588d14bde5c7f184eb9eca5fc7af35506
docs(design): approve NovaFlow visual direction v2
```

---

# Status and Authority

This amendment is:

```text
Status: Approved
```

This amendment is approved and binding within the Visual Foundation and Brand
Shell scope defined here. It amends the existing Homepage Engineering
Architecture only within that scope. Existing architecture remains
authoritative outside it.

This document introduces no Product, Information Architecture, Messaging,
Branding, visual-design, routing, metadata, or deployment decision.

---

# Purpose

This amendment defines the smallest maintainable Engineering Architecture
required to implement the approved:

```text
Calm Operational Intelligence
```

visual foundation and brand shell.

It freezes:

1. semantic-token ownership,
2. Tailwind v4 token exposure,
3. raw-color restrictions,
4. surface-role ownership,
5. BrandLockup ownership,
6. Navbar, MobileNavbar, and Footer boundaries,
7. the minimum Button API extension,
8. the unchanged Section API,
9. operational-grid ownership,
10. shared visual-utility boundaries,
11. Server and Client Component boundaries,
12. the exact Session 13.3B implementation file scope,
13. responsibilities deferred to Sessions 13.4 through 13.6.

It does not implement these decisions.

---

# Scope

## Owned by This Amendment

```text
Visual semantic tokens
Surface roles
Brand shell
Navbar visual treatment
Mobile Navbar visual treatment
Footer visual treatment
Brand-lockup composition
Marketing button sizing and treatment
Operational-grid ownership
Shared visual utilities required by later Session 13 packages
Server/Client component boundaries
```

## Deferred

```text
Hero Product workbench implementation
Problem fragmentation implementation
Solution workflow implementation
Benefits register implementation
Features Product canvas implementation
Social Proof scenario implementation
Pricing redesign
FAQ redesign
Final CTA redesign
Responsive QA
Production redeployment
```

---

# Current Implementation Findings

The current repository establishes these facts:

- `src/app/globals.css` is the Tailwind v4 CSS entry point.
- Tailwind v4 theme utilities are exposed through `@theme inline`.
- shadcn-compatible semantic variables currently live in `:root`.
- a duplicate `.dark` token set currently exists even though no approved dark
  theme exists.
- `Container`, `Section`, and `SectionHeader` are Server Components with simple
  `className` composition.
- `Section` currently accepts only `id`, `className`, and `children`.
- `Button` is a Base UI wrapper with CVA-owned variants and sizes.
- the current `lg` Button size is `h-9`, which does not satisfy the approved
  comfortable 44px marketing-action target.
- `Navbar.tsx` is a Server Component and owns the canonical navigation data,
  desktop navigation, desktop CTA, and `MobileNavbar` composition.
- `MobileNavbar.tsx` is the only Navbar Client Component and receives
  serializable `items` and `cta` props.
- `Footer.tsx` is a Server Component with its own approved Footer navigation
  content.
- Navbar and Footer currently render a text-only `NovaFlow` wordmark.
- `public/brand/novaflow-mark.svg` is the approved canonical mark and contains
  the exact approved `#2563EB` geometry.
- `cn` is the established `clsx` plus `tailwind-merge` utility.
- no Tailwind configuration file exists; CSS is the configuration source.

These findings constrain the decisions below.

---

# Architecture Decision Summary

| Question | Frozen decision |
| --- | --- |
| Global token source | `src/app/globals.css` only |
| Tailwind exposure | `@theme inline` semantic color aliases |
| Raw palette colors in components | Prohibited |
| Dark mode | Not implemented; no dark token set or color-scheme behavior |
| Surface strategy | Semantic token utilities applied by the owning component |
| `Section` surface prop | Not added |
| Button change | Add `marketing` size only; keep the native mobile toggle locally sized |
| New Button variant | None |
| Brand lockup | Create `src/components/marketing/BrandLockup.tsx` |
| BrandLockup link ownership | Parent Navbar/Footer owns the anchor |
| Navbar | Remains a Server Component and canonical nav-data owner |
| MobileNavbar | Remains the only Navbar Client Component |
| MobileNavbar props | Existing `items` and `cta`; no new visual prop |
| Footer | Remains an independent Server Component |
| Footer/Final CTA coupling | Shared tokens only; no runtime or import coupling |
| Operational grid | One future global CSS utility, not a React component |
| Grid implementation in 13.3B | Deferred because the shell has no required grid consumer |
| Product visual components | Deferred; no component names or APIs authorized |

---

# Visual Token Architecture

## Source of Truth

`src/app/globals.css` is the only source of truth for global visual tokens.

Marketing components and shared primitives consume semantic utilities generated
from that file. They must not recreate palette values locally.

## Approved Palette

The architecture preserves these exact values:

| Approved role | Exact value |
| --- | --- |
| Brand navy | `#0B1220` |
| Nova blue | `#2563EB` |
| Signal cyan | `#22D3EE` |
| Surface base | `#FFFFFF` |
| Surface subtle | `#F7F9FC` |
| Surface operational | `#EEF4FF` |
| Surface contrast | `#0B1220` |
| Text primary | `#111827` |
| Text secondary | `#5B6474` |
| Structural line | `#D7E0EC` |
| Grid line | `rgba(37, 99, 235, 0.10)` |
| Flow line | `#60A5FA` |
| Text on contrast | `#F8FAFC` |

No implementation may substitute an OKLCH approximation for these approved
values.

## Final Session 13 Token Inventory

The minimum custom foundation tokens are:

```css
--brand-navy: #0B1220;
--brand-blue: #2563EB;
--brand-cyan: #22D3EE;

--surface-base: #FFFFFF;
--surface-subtle: #F7F9FC;
--surface-operational: #EEF4FF;
--surface-contrast: var(--brand-navy);

--text-primary: #111827;
--text-secondary: #5B6474;
--text-on-contrast: #F8FAFC;

--line-structural: #D7E0EC;
--line-grid: rgba(37, 99, 235, 0.10);
--line-flow: #60A5FA;
```

The alias from `--surface-contrast` to `--brand-navy` preserves the two approved
semantic roles without duplicating the raw value.

The following candidate tokens are not introduced in Session 13.3B:

```text
--product-canvas
--product-panel
--signal-active
--signal-complete
--signal-pending
```

Reasons:

- `--surface-operational` already owns the current light Product-canvas role.
- Product workbench and Product-panel implementation is deferred.
- Product-state semantics are not used by the brand shell.
- Signal tokens require concrete state consumers and non-color state treatment.
- adding them now would create unused or ambiguous aliases.

A later approved Engineering Architecture amendment may add a token only when a
real Product-visual consumer proves that the existing inventory is insufficient.

## Existing Semantic Token Mapping

The existing shadcn-compatible semantic names map as follows:

| Existing semantic token | Approved mapping |
| --- | --- |
| `--background` | `var(--surface-base)` |
| `--foreground` | `var(--text-primary)` |
| `--card` | `var(--surface-base)` |
| `--card-foreground` | `var(--text-primary)` |
| `--popover` | `var(--surface-base)` |
| `--popover-foreground` | `var(--text-primary)` |
| `--primary` | `var(--brand-blue)` |
| `--primary-foreground` | `var(--surface-base)` |
| `--secondary` | `var(--surface-operational)` |
| `--secondary-foreground` | `var(--text-primary)` |
| `--muted` | `var(--surface-subtle)` |
| `--muted-foreground` | `var(--text-secondary)` |
| `--accent` | `var(--surface-operational)` |
| `--accent-foreground` | `var(--text-primary)` |
| `--border` | `var(--line-structural)` |
| `--input` | `var(--line-structural)` |
| `--ring` | `var(--brand-blue)` |

`--destructive` remains a functional shadcn compatibility token. It is not a
Session 13 brand color and must not be used as visual decoration.

`--chart-*` tokens remain unchanged compatibility tokens. No chart is approved
for the Session 13 shell or illustrative Product views, so Engineering must not
reassign them to invented chart semantics.

Existing sidebar tokens may alias the same approved base, text, primary,
operational, border, and ring semantics, but the brand-shell package must not
introduce or render a sidebar.

Radius and font tokens remain unchanged.

---

# Semantic Token Blast-Radius Gate

The approved remapping changes global semantic tokens consumed across the
complete Homepage. Before editing `src/app/globals.css`, Session 13.3B must
inventory every current consumer of:

```text
background
foreground
primary
primary-foreground
secondary
secondary-foreground
accent
accent-foreground
muted
muted-foreground
card
card-foreground
border
input
ring
```

The audit includes CSS variables, Tailwind utilities, variant recipes, shared
primitives, Marketing components, and any other source that consumes an alias
directly or indirectly. A token with no current consumer must be recorded as
having no consumer rather than omitted.

## Required Consumer Inventory

The implementation report must include one row per consumer using this schema:

| Field | Required content |
| --- | --- |
| File | Exact canonical repository path |
| Component or selector | Owning component, primitive, recipe, or CSS selector |
| Token or utility consumed | Exact semantic token, utility, or variant path |
| Current semantic purpose | The role the consumer currently assigns to the token |
| Expected effect after remapping | The visible or functional change expected from the approved mapping |
| Intended effect | `Yes` or `No`, with a short reason |
| Local correction required | `None` or the smallest necessary correction |
| Correction scope | `Authorized in 13.3B`, `Deferred`, or `Architecture decision required` |

The inventory is a pre-implementation gate, not a retrospective list assembled
after styles have changed.

## Propagation Rules

1. Global token propagation is allowed only when an existing consumer already
   uses the token with the same semantic meaning.
2. A token remap must not silently redefine a component's semantic role.
3. Deferred Homepage sections may receive incidental semantic color changes,
   but they may not receive local structural redesign in Session 13.3B.
4. Any unacceptable incidental effect outside the authorized file list blocks
   implementation and requires an Engineering Architecture scope decision.
5. Session 13.3B must not expand its file scope automatically to correct every
   affected section.
6. The implementation report must include the completed consumer inventory and
   before/after browser evidence.
7. Browser QA must inspect the complete Homepage, not only Navbar and Footer,
   because global token changes affect the complete page.

---

# Tailwind v4 Exposure

Tailwind v4 exposure remains in `@theme inline` inside
`src/app/globals.css`.

The custom exposure contract is:

```css
@theme inline {
  --color-brand-navy: var(--brand-navy);
  --color-brand-blue: var(--brand-blue);
  --color-brand-cyan: var(--brand-cyan);

  --color-surface-base: var(--surface-base);
  --color-surface-subtle: var(--surface-subtle);
  --color-surface-operational: var(--surface-operational);
  --color-surface-contrast: var(--surface-contrast);

  --color-on-contrast: var(--text-on-contrast);

  --color-structural: var(--line-structural);
  --color-grid-line: var(--line-grid);
  --color-flow-line: var(--line-flow);
}
```

Existing aliases such as `--color-background`, `--color-foreground`,
`--color-primary`, `--color-muted`, `--color-border`, and `--color-ring`
remain and point to their mapped semantic variables.

Expected utilities include:

```text
bg-surface-base
bg-surface-subtle
bg-surface-operational
bg-surface-contrast

text-foreground
text-muted-foreground
text-brand-blue
text-on-contrast

border-structural
border-grid-line
stroke-flow-line
```

`text-primary` continues to mean the primary brand/action signal through the
existing shadcn mapping. Body text continues to use `text-foreground`;
supporting text uses `text-muted-foreground`.

Approved palette colors must not require Tailwind arbitrary-value syntax.

---

# Raw Color Policy

Freeze this rule:

```text
Approved palette values must be consumed through semantic tokens.
```

Raw palette values are prohibited in:

- Marketing React components,
- shared UI primitives,
- section-local class strings,
- inline styles,
- React-owned SVG markup,
- component-local CSS.

Permitted exceptions are limited to:

1. the existing `public/brand/novaflow-mark.svg`,
2. `transparent` where required by browser/CSS behavior,
3. opacity modifiers applied to semantic utilities,
4. a documented external SVG reference that cannot consume repository CSS
   variables.

React-owned SVG connectors must use semantic CSS variables or semantic Tailwind
stroke/fill utilities. They must not repeat `#60A5FA`, `#22D3EE`, or another
approved raw value.

Any new exception requires an Engineering Architecture amendment.

---

# Dark-Mode Boundary

NovaFlow Session 13 is not a dark-mode system.

Freeze:

```text
No dark theme implementation
No dark-mode toggle
No duplicate dark token set
No prefers-color-scheme behavior
```

Session 13.3B removes the current `.dark` token override block from
`src/app/globals.css`.

The existing class-based `@custom-variant dark` declaration may remain only to
prevent dormant generated `dark:` compatibility branches from reverting to
`prefers-color-scheme` behavior. No application code may set a `.dark` class,
and no Session 13 component may depend on a `dark:` branch.

Deep navy is exposed only as `surface-contrast`. It does not redefine global
page tokens.

---

# Surface Architecture

## Decision

Use local semantic token utilities in the component that owns the approved
surface.

```text
Strategy:
Local semantic utilities
```

No focused surface wrapper primitive is created.

## Roles

| Surface | Utility | Responsibility |
| --- | --- | --- |
| Base | `bg-surface-base` or inherited `bg-background` | Open narrative areas |
| Subtle | `bg-surface-subtle` | Quiet explanation and evaluation |
| Operational | `bg-surface-operational` | Product evidence and workflow systems |
| Contrast | `bg-surface-contrast text-on-contrast` | Approved navy focal and closure surfaces |

Surface selection remains the responsibility of the owning Marketing
component. No primitive chooses surfaces from section order, sibling position,
or alternating logic.

Contrast surfaces must explicitly establish their foreground treatment.
Changing the background must not silently recolor all nested semantic states.

---

# Section API Decision

`src/components/ui/Section.tsx` remains unchanged.

It does not receive:

```text
surface="base" | "subtle" | "operational" | "contrast"
```

Reasons:

- Session 13.3B has no authorized Section consumer.
- the current `className` API can express a semantic surface utility.
- surface selection is narrative responsibility owned by each Marketing section.
- a prop would be unused in the immediate package.
- automatic foreground behavior could be incorrect for mixed Product and
  narrative content.
- a surface prop may be reconsidered only after multiple later sections
  demonstrate the same complete background/foreground contract.

`Section` continues to own only:

- the semantic `<section>` element,
- the optional `id`,
- shared vertical rhythm,
- class composition.

---

# Button Architecture

## Decision

Keep all existing Button variants and sizes compatible.

Add only:

```text
size="marketing"
```

No new Button variant is added.

## Size Contract

```text
marketing:
minimum height 44px
comfortable desktop marketing height
horizontal padding appropriate for Navbar, Hero, Pricing, and Final CTA
```

The implementation may use the repository-equivalent Tailwind values:

```text
marketing:
h-11 gap-2 px-5
```

The exact implementation must preserve the existing radius, typography,
disabled state, Base UI mechanics, active behavior, and focus-visible contract.

## Immediate Consumers

In Session 13.3B, `size="marketing"` has exactly two immediate consumers:

- the desktop Navbar `Request a Demo` link styled through `buttonVariants`,
- the MobileNavbar `Request a Demo` link styled through `buttonVariants`.

Hero, Pricing, and Final CTA are potential later consumers, but their use is
deferred to their owning implementation packages.

The MobileNavbar menu toggle is a native `<button>`, not the shared `Button`
component. It currently consumes `buttonVariants` with the existing
`size="icon"` recipe. Session 13.3B must keep the native button and may compose
local sizing such as `size-11` to provide a 44px by 44px interaction target.
It must not add `icon-marketing` to the public Button API or refactor the native
toggle into `Button` merely to justify a new size.

## Variant Contract

| Context | Button variant |
| --- | --- |
| Default brand primary | existing `default`, now backed by Nova blue |
| Secondary action | existing `outline` |
| Contrast-context primary | existing `default` on `surface-contrast` |

Nova blue with the approved light foreground is valid on light and navy
contexts, so a duplicate `contrast` variant is unnecessary.

Marketing components own:

- placement,
- responsive width,
- labels,
- destinations.

Button owns:

- mechanics,
- variants,
- sizes,
- focus and disabled presentation.

Button must never own CTA copy or routing.

---

# BrandLockup Architecture

## Decision

Create:

```text
src/components/marketing/BrandLockup.tsx
```

It is Marketing-specific because it freezes NovaFlow content and the approved
NovaFlow asset.

## Responsibility

BrandLockup:

- renders the existing standalone mark,
- renders the unchanged visible `NovaFlow` text wordmark,
- creates one visual lockup,
- provides explicit intrinsic mark dimensions,
- supports the two approved shell sizes,
- remains a Server Component.

It does not:

- own navigation,
- own an anchor,
- choose a destination,
- own focus treatment,
- accept arbitrary brand colors,
- accept arbitrary geometry,
- embed or duplicate SVG geometry.

## Exact API

```ts
type BrandLockupProps = {
  size?: "default" | "compact";
};
```

No other public prop is approved.

```text
default:
Navbar size; responsive Mobile Navbar and Desktop Navbar context

compact:
Footer size
```

The component owns the mark-to-wordmark gap, mark dimensions, text sizing, and
text weight for each size. Color is inherited from the parent anchor so the
same unchanged wordmark works on light and contrast surfaces.

The frozen context mapping is:

| BrandLockup size | Approved context | Reserved mark box |
| --- | --- | --- |
| `default` | Navbar's single shared brand link, including Mobile Navbar below 768px and Desktop Navbar at 768px and above | 20px by 20px below 768px; 22px by 22px at 768px and above |
| `compact` | Footer brand link | 20px by 20px |

The component owns these responsive dimensions and reserves the corresponding
fixed box before the image loads. The `next/image` element must also receive
explicit intrinsic width and height so the lockup produces no layout shift.
No arbitrary geometry prop is exposed.

## Link Ownership

Navbar and Footer each own their `/` anchor.

This preserves:

- parent ownership of destination,
- parent ownership of focus treatment,
- valid link semantics,
- reuse without nested or forced anchors.

## Asset Rendering

Use the existing:

```text
/brand/novaflow-mark.svg
```

through `next/image`.

Requirements:

- `alt=""` because the adjacent visible `NovaFlow` text supplies the accessible
  name,
- explicit width and height for both approved sizes,
- no `priority` prop,
- no raster copy,
- no inline SVG duplication,
- no color or geometry override.

The containing anchor receives the accessible name from the visible text.
The decorative image must not add a second brand announcement.

---

# Navbar Architecture

`src/components/marketing/Navbar.tsx` remains a Server Component.

It remains the canonical owner of:

- the outer `<header>`,
- sticky behavior,
- the `/` brand link,
- immutable shared navigation-item data,
- the immutable Navbar CTA data,
- desktop navigation,
- desktop CTA,
- responsive desktop/mobile visibility boundaries,
- `MobileNavbar` composition and props.

Session 13.3B may change only its visual composition:

- compose `BrandLockup` inside the existing brand link,
- use the structured white shell,
- use the approved restrained border hierarchy,
- use the Nova-blue primary CTA,
- use `size="marketing"` for the desktop CTA,
- preserve current labels, order, destinations, and breakpoint.

Navbar must not:

- receive `"use client"`,
- move navigation data into global state or a new configuration module,
- duplicate desktop/mobile navigation data,
- change routing,
- change sticky behavior,
- change the 768px breakpoint,
- own mobile open state.

---

# MobileNavbar Architecture

`src/components/marketing/MobileNavbar.tsx` remains the only Navbar Client
Component.

Its existing props remain:

```ts
type NavigationItem = {
  label: string;
  href: string;
};

type MobileNavbarProps = {
  items: readonly NavigationItem[];
  cta: NavigationItem;
};
```

No new visual prop is approved.

Session 13.3B may:

- keep the native toggle and compose local visual sizing for a minimum 44px by
  44px target without changing its behavior or public API,
- use `size="marketing"` for the mobile CTA,
- apply approved semantic surface, border, text, and focus utilities,
- refine spacing without changing behavior.

It must preserve:

- local `isOpen`,
- conditional panel rendering,
- native button behavior,
- `aria-expanded`,
- `aria-controls`,
- accessible toggle names,
- Escape handling,
- focus return,
- close-on-navigation,
- normal-flow panel placement,
- CSS responsive ownership,
- exact item order and destinations.

It must not add:

- a resize listener,
- `ResizeObserver`,
- body-scroll lock,
- overlay,
- portal,
- dialog,
- focus trap,
- global state,
- dependency,
- animation state.

---

# Footer Architecture

`src/components/marketing/Footer.tsx` remains a Server Component.

It owns:

- the semantic `<footer>` landmark,
- its approved copy,
- its approved link set and destinations,
- copyright,
- the `/` brand link,
- Footer layout,
- composition of `BrandLockup size="compact"`.

Session 13.3B may:

- apply `surface-contrast`,
- apply `text-on-contrast`,
- use opacity derived from semantic on-contrast tokens for secondary text and
  passive dividers,
- compose the approved mark plus unchanged wordmark,
- establish the approved dark closure,
- refine spacing and structural borders.

Footer must preserve:

- existing copy,
- existing links,
- existing destinations,
- existing copyright,
- text-only `Request a Demo` link behavior.

Footer must not add:

- About,
- Contact,
- Privacy,
- Terms,
- social links,
- legal claims,
- a new CTA.

## Final CTA Coupling

Footer has no runtime, import, wrapper, prop, or state dependency on Final CTA.

The later Final CTA implementation visually couples to Footer by consuming the
same:

```text
surface-contrast
text-on-contrast
structural line semantics
```

This allows Footer to compile and render independently before Final CTA is
redesigned.

---

# Operational Grid Ownership

## Decision

The operational grid is a semantic CSS background utility owned by:

```text
src/app/globals.css
```

It is not a React component.

It is not implemented in Session 13.3B because neither Navbar nor the approved
Footer reference requires a grid consumer. Defining an unused utility in 13.3B
would be speculative.

The first later package with a real approved grid consumer may add one global:

```text
operational-grid
```

utility to `globals.css` under this architecture.

The utility may own only:

- the two-axis background-line recipe,
- consumption of `--line-grid`,
- a documented default grid interval.

The owning section remains responsible for:

- localization,
- clipping,
- masking,
- responsive simplification,
- whether the grid is absent,
- any section-specific opacity that does not alter content opacity.

The utility must never be applied to:

- `html`,
- `body`,
- the global page root,
- every `Section` by default.

## Concept Boundaries

```text
Operational grid:
decorative background structure

Flow connector:
relationship line with meaningful endpoints or a decorative connector

Product visual:
semantic interface representation
```

These concerns must not be merged into one universal component.

Decorative connectors rendered as DOM or SVG must be:

```text
aria-hidden="true"
pointer-events-none
non-interactive
```

A connection carrying unique meaning requires adjacent text or an accessible
description.

---

# Future Product-Visual Ownership

No Product-visual component is created in Session 13.3B.

This amendment does not authorize the names:

```text
ProductWorkbench
WorkflowRail
FlowConnector
StatusNode
ProductPanel
```

Future packages must apply these rules:

- Product visuals are Server Components by default.
- each owning Marketing section owns its approved composition,
- approved Product-interface vocabulary remains governed by
  `docs/product/homepage-product-visualization-v1.md`,
- shared UI primitives must not own NovaFlow Product copy,
- Product copy begins as immutable configuration colocated with the owning
  section,
- a shared Product data module requires at least two consumers of the same
  structured data and separate Engineering approval,
- SVG connectors remain section-local until two concrete consumers prove a
  stable shared API,
- reusable Product components require repeated semantic responsibility, not
  merely similar styling,
- no Product component owns invented data, interaction, metrics, integrations,
  or backend behavior.

---

# Server and Client Component Boundary

Freeze:

```text
Server Components by default
```

| Component or concern | Boundary |
| --- | --- |
| BrandLockup | Server |
| Navbar | Server |
| MobileNavbar | Client |
| Footer | Server |
| token and surface utilities | CSS, no React boundary |
| operational grid | CSS utility, no React boundary |
| future static Product visuals | Server by default |

Do not create a Client Component for:

- tokens,
- surfaces,
- grid,
- brand mark,
- BrandLockup,
- Navbar,
- Footer,
- static Product previews,
- unapproved motion.

Serializable `items` and `cta` data continue to cross only from Navbar to
MobileNavbar.

---

# Primitive Ownership Matrix

| Item | Current responsibility | Approved Session 13 responsibility | API change | Package owner | Boundary | Prohibited responsibilities |
| --- | --- | --- | --- | --- | --- | --- |
| `globals.css` | Tailwind entry, theme aliases, global base styles | only global visual-token source; approved palette aliases; remove duplicate dark token set | Internal CSS change | 13.3B | CSS | component layout, copy, routing, global grid application |
| Container | max width and horizontal padding | unchanged | No | Existing architecture | Server | surfaces, narrative order, section rhythm |
| Section | semantic section, ID, vertical rhythm, class composition | unchanged; consumers apply semantic surfaces | No | Later section packages | Server | automatic alternation, copy, layout composition, implicit contrast text |
| SectionHeader | shared heading pattern | unchanged in 13.3B | No | Later section packages | Server | forcing one alignment across all sections, rewriting copy |
| Button | Base UI action mechanics, CVA variants and sizes | add `marketing` size; default maps to Nova blue | Add one size value only | 13.3B | Shared primitive | labels, destinations, CTA-specific components, a special mobile-toggle size |
| Card | bounded reusable surface | unchanged in 13.3B; use only for discrete objects | No | Later section packages | Server | becoming default wrapper for Problem/Benefits or narrative copy |
| Badge | compact label primitive | unchanged | No | Existing architecture | Server unless interactive consumer requires otherwise | invented status copy, Product policy |
| BrandLockup | does not exist | approved mark plus unchanged visible wordmark | New fixed API | 13.3B | Server | anchor, destination, focus, arbitrary color/geometry, mark-only identity |
| Navbar | header, nav data, desktop nav/CTA, MobileNavbar composition | compose BrandLockup and approved visual shell | No public API change | 13.3B | Server | mobile state, changed data, changed routing, new breakpoint |
| MobileNavbar | mobile menu state and behavior; native toggle styled through `buttonVariants` | approved visual shell, local 44px native-toggle sizing, and marketing CTA size | Props unchanged | 13.3B | Client | duplicate data, resize state, overlay, body lock, behavior rewrite, toggle refactor into shared Button |
| Footer | footer copy, links, landmark | BrandLockup and independent deep-navy closure | No public API change | 13.3B | Server | new links/copy/CTA, Final CTA runtime coupling |
| Operational grid | no shared implementation | one future global semantic CSS utility | Deferred CSS utility; no React API | First real later consumer | CSS | global page background, client logic, universal connector/Product component |
| Future Product visuals | section-local existing previews | focused Server components only after concrete later-package review | Not authorized here | 13.4–13.5 | Server by default | shared primitives owning Product copy, invented data, interaction |

---

# Exact Session 13.3B Authorized File Scope

Under this approved amendment, Session 13.3B may modify exactly:

```text
src/app/globals.css
src/components/ui/button.tsx
src/components/marketing/BrandLockup.tsx
src/components/marketing/Navbar.tsx
src/components/marketing/MobileNavbar.tsx
src/components/marketing/Footer.tsx
```

`BrandLockup.tsx` is the only new file.

The evaluated candidate `src/components/ui/Section.tsx` is excluded because its
API remains unchanged and Session 13.3B has no Section consumer.

No other file may be added or modified for Session 13.3B without a new
Engineering Architecture decision.

---

# Explicit Deferred File Scope

The following files remain deferred:

```text
src/components/ui/Container.tsx
src/components/ui/Section.tsx
src/components/ui/SectionHeader.tsx
src/components/ui/card.tsx
src/components/ui/badge.tsx

src/components/marketing/Hero.tsx
src/components/marketing/Problem.tsx
src/components/marketing/Solution.tsx
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
```

Also deferred or prohibited:

```text
public/brand/novaflow-mark.svg
src/app/favicon.ico
package.json
pnpm-lock.yaml
postcss.config.mjs
components.json
tsconfig.json
```

A deferred file may be opened only by a later authorized package or when a
factual compilation failure proves it necessary and Engineering approves the
scope change first.

---

# Compatibility Requirements

Session 13.3B must preserve:

- Next.js App Router,
- TypeScript strict mode,
- Tailwind CSS v4 CSS-first configuration,
- named exports,
- Server Components by default,
- existing shadcn/Base UI wrapper conventions,
- semantic HTML,
- visible focus,
- canonical metadata behavior,
- robots and sitemap behavior,
- Navbar labels and destinations,
- Navbar breakpoint and interactions,
- Footer copy and destinations,
- FAQ interactions,
- approved mark geometry and asset path.

No dependency, Tailwind plugin, animation library, or new font is authorized.

---

# Accessibility Architecture

Freeze:

- visible `NovaFlow` text remains present in Navbar and Footer,
- the mark never replaces the accessible brand name,
- the decorative mark uses `alt=""`,
- the parent link receives its name from visible text,
- white on Nova blue must retain the approved `5.17:1` contrast,
- text on navy uses `text-on-contrast`,
- focus is visible on white and navy surfaces,
- the native mobile toggle uses local sizing for a minimum 44px by 44px target,
- `size="marketing"` provides a minimum 44px target for real marketing actions,
- decorative grid and connectors are hidden from assistive technology,
- Signal cyan is never the only state cue,
- contrast surfaces explicitly establish foreground treatment,
- Navbar and Footer landmarks remain semantic,
- no keyboard behavior changes,
- hidden mobile navigation remains non-focusable,
- the skip link remains the first page-level focus target.

Dark-surface focus may use the approved Signal cyan only with a visible
non-color outline/shape treatment. It must not rely on cyan alone.

---

# Performance Architecture

Freeze:

```text
New client-side JavaScript:
0 KB target

New runtime dependency:
None

Brand asset:
Reuse existing SVG

Grid:
CSS only in the shared utility; lightweight section-owned SVG only for connectors

New font:
None

Mark layout shift:
None

Mark dimensions:
Explicit

Image-heavy shell treatment:
Prohibited

Backdrop blur or large filter effects:
Prohibited
```

BrandLockup, Navbar, Footer, tokens, and surfaces remain server-rendered or CSS
only. The existing MobileNavbar JavaScript boundary must not grow.

---

# Complete-Page Regression Gate

Because `src/app/globals.css` propagates semantic changes globally, Session
13.3B must compare the complete Homepage before and after token remapping.
The comparison must inspect every Homepage section at:

```text
320px
375px
767px
768px
1024px
1280px
1440px
```

Every visible change must be classified in the implementation report as:

```text
Expected foundation change
Expected deferred-section token propagation
Unexpected regression
```

An unexpected regression blocks commit. If correcting it would require a file
outside the exact Session 13.3B scope, implementation must stop at that
regression and request an Engineering Architecture scope decision.

The before/after comparison must confirm that the following remain unchanged:

- visible copy,
- section order,
- layout structure outside the authorized shell files,
- anchors,
- routing,
- Navbar behavior,
- FAQ behavior,
- metadata,
- robots,
- sitemap,
- Product claims.

This gate evaluates the full rendered page. Navbar- and Footer-only screenshots
are insufficient evidence for a global token remap.

---

# Session 13.3B Validation Gates

## Pre-Implementation Gate

Before changing a token value:

- complete the Semantic Token Blast-Radius Gate inventory,
- capture complete-Homepage baseline evidence at every required viewport,
- classify the expected effect for every current semantic-token consumer,
- stop if an unacceptable effect cannot be corrected inside the exact
  authorized file scope.

## Static Validation

Run:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
git diff --check
git status --short
```

## Responsive Browser Matrix

Validate:

```text
320px
375px
767px
768px
1024px
1280px
1440px
```

Confirm:

- the approved mark geometry renders unchanged,
- the mark has explicit intrinsic dimensions,
- no mark-induced layout shift occurs,
- `BrandLockup size="default"` maps to the shared responsive Navbar context,
- `BrandLockup size="compact"` maps to Footer,
- desktop Navbar behavior is unchanged,
- mobile Navbar behavior is unchanged,
- the correct navigation model appears at the 768px boundary,
- focus remains visible,
- the locally sized native mobile toggle meets a 44px by 44px target,
- `size="marketing"` actions meet a 44px minimum target,
- primary CTAs use Nova blue,
- Footer renders the independent navy closure,
- no horizontal overflow occurs,
- no hydration warning occurs,
- no runtime or console error occurs,
- no metadata or discovery behavior regresses.

The browser report must include the complete-page before/after comparison and
change classifications defined by the Complete-Page Regression Gate.

## Keyboard Validation

Verify:

- closed mobile focus order,
- open mobile focus order,
- Enter and Space toggle behavior,
- Escape close and focus return,
- close-on-navigation,
- hidden links are not focusable,
- no keyboard trap,
- visible focus on light and navy surfaces.

## Automated Accessibility

Run the established automated accessibility check against:

```text
Mobile closed Navbar
Mobile open Navbar
Desktop Navbar and Footer
```

Expected:

```text
0 confirmed violations
```

## Routing and Runtime

Confirm:

```text
Features → #features
Pricing → #pricing
FAQ → #faq
Request a Demo → #request-demo
Brand links → /
```

Confirm:

- no `/contact`,
- no placeholder URL,
- no direct Calendly link from Navbar or Footer,
- only Final CTA retains the approved external terminal destination,
- `GET /` returns HTTP 200,
- `GET /favicon.ico` returns HTTP 200.

---

# Decision Boundaries

This amendment does not authorize:

- implementation outside the exact Session 13.3B file scope,
- homepage content-section implementation,
- Product workbench implementation,
- Problem or Solution implementation,
- new visible copy,
- new Product claims,
- new routes,
- new sections,
- navigation changes,
- routing changes,
- dark mode,
- analytics,
- security headers,
- authentication,
- contact or legal pages,
- animation dependencies,
- Product interaction,
- metadata changes,
- environment changes,
- deployment.

---

# Approval Effect

Approval of this amendment:

- freezes the Session 13 visual-token architecture,
- freezes the surface-ownership strategy,
- authorizes the minimal Button size extension,
- authorizes the fixed BrandLockup component,
- preserves the Navbar/MobileNavbar Server and Client boundary,
- freezes Footer independence from Final CTA,
- freezes operational-grid ownership without implementing it prematurely,
- authorizes Session 13.3B to begin using only the exact implementation file
  list above.

Approval does not:

- implement code,
- authorize changes outside the exact Session 13.3B file scope,
- bypass the Semantic Token Blast-Radius Gate or any other implementation gate,
- authorize a Section surface API,
- authorize Product-visual component APIs,
- authorize changes to deferred files,
- authorize later Homepage-section redesign packages,
- change visible copy, navigation, routing, metadata, or Product claims,
- authorize deployment.
