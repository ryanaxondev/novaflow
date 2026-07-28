# NovaFlow

# Session 12 Responsive Navbar and Typography Amendment

## Document Information

**Document Type:** UI Specification Amendment
**Artifact:** Session 12 Responsive Navbar and Typography
**Version:** v1
**Status:** Approved
**Owner:** Product / Design

**Depends On:**

- `docs/01-product.md`
- `docs/02-information-architecture.md`
- `docs/03-design-philosophy.md`
- `docs/information-architecture/homepage-navigation-reconciliation-v1.md`
- `docs/engineering/homepage-engineering-architecture-v1.md`
- `docs/engineering/session-11-architecture-amendment-v1.md`
- `design/ui/visual-direction-v1.md`
- `design/ui/homepage-ui-specification-v1.md`

**Enables:**

- Production Typography Correction
- Responsive Navbar Engineering Architecture
- Mobile Navbar Implementation
- Session 12 Production Readiness Work

---

# Purpose

This amendment freezes:

- the production typography direction,
- the responsive Navbar behavior below 768px,
- the relationship between desktop and mobile navigation.

It changes no homepage Information Architecture, approved navigation label, approved destination, homepage section, customer-facing homepage copy, or conversion path.

---

# Production Typography

The approved production typefaces are:

```text
Primary UI typeface: Geist Sans
Technical monospace typeface: Geist Mono
```

## Geist Sans Role

Geist Sans is the primary typeface for:

- body copy,
- headings,
- navigation,
- buttons,
- cards,
- pricing,
- FAQ,
- Final CTA,
- Footer,
- general marketing UI.

All standard `font-sans` content must resolve to Geist Sans or its approved system fallback.

The production page must not render its main text in Times New Roman.

## Geist Mono Role

Geist Mono is allowed only for content with a genuine technical, system, data, or code-like role.

Examples may include:

- workflow-preview system labels,
- compact technical values,
- code-like identifiers,
- metadata-like interface values.

Geist Mono must not be used for:

- marketing headings,
- paragraphs,
- navigation,
- buttons,
- plan descriptions,
- FAQ answers,
- Footer content.

If no rendered content semantically requires Geist Mono, Engineering should not load it unnecessarily.

## Font Delivery Requirements

The approved implementation constraints are:

- use the existing Next.js font-loading convention,
- preserve `font-display: swap`,
- provide an appropriate system sans-serif fallback,
- map the project's `font-sans` token to the actual Geist Sans variable,
- map `font-mono` to Geist Mono only where required,
- do not add an unrelated font family,
- do not introduce a font dependency merely to repair token mapping,
- avoid loading unused font weights or unused font families,
- preserve layout stability.

This amendment does not prescribe:

- a visual redesign,
- a new typography scale,
- new font sizes,
- new font weights,
- new line-height values,
- changes to approved content hierarchy.

---

# Responsive Navbar Breakpoint

The desktop Navbar model remains active at:

```text
viewport width ≥ 768px
```

The mobile Navbar model applies at:

```text
viewport width < 768px
```

The breakpoint separates two approved presentations of the same Information Architecture.

---

# Desktop Navbar

Preserve the approved desktop structure:

```text
NovaFlow
Features
Pricing
FAQ
Request a Demo
```

Destinations remain:

```text
NovaFlow            → /
Features            → #features
Pricing             → #pricing
FAQ                 → #faq
Request a Demo      → #request-demo
```

The desktop Navbar must not be redesigned by the Session 12 mobile-navigation implementation.

---

# Mobile Navbar Model

Below 768px, use a collapsible hamburger navigation.

## Closed State

The visible header row contains:

```text
NovaFlow brand
Menu toggle
```

While the menu is closed:

- navigation links are hidden,
- the Navbar `Request a Demo` action is hidden,
- hidden navigation items are not keyboard-focusable.

The current persistent mobile `Request a Demo` button moves into the expanded menu.

Implementation must not attempt to fit the brand, three navigation links, CTA, and menu toggle in one mobile row.

## Open State

Activating the menu toggle reveals a navigation panel directly below the primary header row.

The panel appears in normal document flow.

It is not:

- a modal,
- a side drawer,
- a full-screen overlay,
- a separate route.

The open panel contains, in this exact order:

```text
Features
Pricing
FAQ
Request a Demo
```

Destinations remain:

```text
Features        → #features
Pricing         → #pricing
FAQ             → #faq
Request a Demo  → #request-demo
```

The `Request a Demo` item remains the primary action and may occupy the available mobile width.

---

# Mobile Interaction Contract

The mobile menu must:

- be closed by default,
- use a native button as the toggle,
- expose an understandable accessible name,
- expose the current expanded state,
- associate the toggle with the controlled panel,
- open with Enter or Space,
- close with Enter or Space,
- close when a navigation item is selected,
- close when Escape is pressed,
- return focus to the toggle after Escape closes it,
- preserve logical focus order,
- expose no hidden navigation item to keyboard focus,
- create no keyboard trap.

Approved toggle labels:

```text
Closed state accessible name:
Open navigation

Open state accessible name:
Close navigation
```

The toggle's accessible state and controlled-panel relationship must use the appropriate native and ARIA semantics without duplicating or contradicting visible behavior.

---

# Mobile Presentation Constraints

The mobile Navbar must:

- preserve the sticky-header behavior if currently implemented,
- preserve the approved white, neutral, and blue visual direction,
- use existing spacing, border, Button, and focus conventions,
- avoid a new overlay backdrop,
- avoid body scroll locking,
- avoid decorative motion,
- avoid new navigation destinations,
- avoid direct Calendly navigation.

The mobile Navbar must not add:

```text
Product
About
Contact
Privacy
Terms
Resources
```

A minimal open-and-close transition may be used only when it:

- respects reduced-motion preferences,
- does not delay interaction,
- does not change layout semantics.

No animation is required.

---

# Information Architecture Continuity

The desktop and mobile Navbar models expose the same approved navigation set and destinations.

This amendment changes presentation only.

It does not amend:

- the homepage section-anchor contract,
- the dominant conversion path,
- Navbar label ownership,
- section ordering,
- Final CTA terminal routing,
- the Calendly destination boundary.

Only Final CTA may link directly to the approved external Calendly URL.

---

# Architecture Note

The hamburger menu introduces local interactive state.

The later Engineering package must:

- keep the Client Component boundary as small as practical,
- avoid converting unrelated marketing sections into Client Components,
- keep navigation content explicit and immutable,
- preserve Server Components outside the interactive Navbar boundary,
- use native navigation and button semantics,
- avoid introducing an unrelated state-management dependency.

This UI artifact authorizes the interaction model.

It does not itself implement or refactor application architecture.

If the approved interaction requires an Engineering Architecture amendment under the repository's specification-first policy, that amendment must be approved before implementation.

---

# Responsive Validation Requirements

The later implementation must be reviewed at minimum at:

```text
320px
375px
768px
1024px
1280px
1440px
```

Validation must confirm:

- the correct model appears on each side of the breakpoint,
- the brand remains readable,
- all approved navigation items are reachable,
- no hidden item receives focus,
- the CTA remains usable,
- the menu creates no horizontal overflow,
- the open panel remains in normal document flow,
- keyboard and Escape behavior match this artifact,
- focus is visible,
- reduced-motion preferences are respected if a transition exists,
- no navigation destination changes.

---

# Definition of Done

This amendment is complete because:

- Geist Sans is approved as the primary UI typeface,
- Geist Mono has a constrained semantic role,
- font-delivery constraints are explicit,
- Times New Roman is prohibited for primary page text,
- the 768px responsive boundary is explicit,
- the desktop Navbar remains unchanged,
- the mobile Navbar model is explicit,
- the mobile interaction contract is explicit,
- navigation order and destinations remain unchanged,
- accessibility behavior is explicit,
- the later Client Component boundary is constrained,
- no Product, Messaging, IA, or conversion decision is invented.

---

# Approval Effect

Approval of this amendment:

- resolves the production-typeface decision,
- resolves the mobile Navbar presentation decision,
- authorizes a later focused Engineering architecture and implementation package,
- does not authorize unrelated visual redesign,
- does not change homepage Information Architecture,
- does not add routes,
- does not add navigation destinations,
- does not authorize direct Calendly links outside Final CTA.
