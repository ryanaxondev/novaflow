# NovaFlow

# Session 12 Mobile Navbar Architecture Amendment

## Document Information

**Document Type:** Engineering Architecture Amendment

**Artifact:** Mobile Navbar

**Version:** v1

**Status:** Approved

**Owner:** Engineering

**Depends On:**

- `docs/01-product.md`
- `docs/02-information-architecture.md`
- `docs/information-architecture/homepage-navigation-reconciliation-v1.md`
- `design/ui/homepage-ui-specification-v1.md`
- `design/ui/session-12-responsive-typography-amendment-v1.md`
- `docs/engineering/homepage-engineering-architecture-v1.md`
- `docs/engineering/session-11-architecture-amendment-v1.md`

**Enables:**

- Mobile Navbar Implementation
- Responsive Navigation Accessibility Validation
- Session 12 Production Readiness

---

# Purpose

This amendment freezes the Engineering structure for the approved mobile hamburger Navbar.

It defines:

- Server and Client Component ownership,
- component boundaries,
- state ownership,
- navigation-data flow,
- keyboard behavior,
- focus behavior,
- responsive rendering responsibility,
- permitted dependencies,
- validation requirements.

It does not:

- redesign the Navbar,
- modify navigation labels,
- modify navigation destinations,
- change the breakpoint,
- add routes,
- add navigation items,
- change the desktop Navbar,
- implement code.

---

# Approved UI Contract

This amendment implements no UI decision. It records the behavior already approved by `design/ui/session-12-responsive-typography-amendment-v1.md`.

## Breakpoint

```text
Desktop Navbar: viewport width ≥ 768px
Mobile Navbar: viewport width < 768px
```

## Desktop Model

```text
NovaFlow            → /
Features            → #features
Pricing             → #pricing
FAQ                 → #faq
Request a Demo      → #request-demo
```

The current desktop Navbar remains unchanged.

## Mobile Closed State

Visible:

```text
NovaFlow brand
Menu toggle
```

Hidden and not keyboard-focusable:

```text
Features
Pricing
FAQ
Request a Demo
```

## Mobile Open State

Render in this exact order:

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

The panel appears directly below the mobile header row in normal document flow.

It is not:

```text
modal
dialog
drawer
side sheet
full-screen overlay
separate route
```

---

# Component Architecture

The approved component model is:

```text
Navbar.tsx
Server Component
│
├── desktop navigation
│   Server-rendered
│
└── MobileNavbar.tsx
    Client Component
```

Canonical paths:

```text
src/components/marketing/Navbar.tsx
src/components/marketing/MobileNavbar.tsx
```

## Navbar Ownership

`Navbar.tsx` remains a Server Component.

It owns:

- the canonical `<header>`,
- sticky-header presentation,
- the NovaFlow brand link,
- the immutable navigation-item definitions,
- the desktop navigation,
- the desktop `Request a Demo` CTA,
- composition of the mobile Client Component,
- responsive visibility boundaries.

It must not receive:

```text
"use client"
```

It must not own mobile open state.

## MobileNavbar Ownership

`MobileNavbar.tsx` is the only new Client Component authorized by this amendment.

It owns:

- mobile menu open/closed state,
- the native toggle button,
- the dynamic accessible toggle name,
- `aria-expanded`,
- `aria-controls`,
- mobile navigation-panel rendering,
- close-on-navigation behavior,
- Escape handling,
- focus return to the toggle after Escape,
- mobile CTA rendering,
- mobile-only responsive presentation.

It must not own:

- the outer `<header>`,
- the desktop navigation,
- the desktop CTA,
- the brand identity,
- homepage section definitions,
- routing decisions,
- global state,
- body-scroll behavior.

---

# Navigation Data Flow

The navigation labels and destinations remain immutable and explicit in `Navbar.tsx`.

Serializable navigation data passes from the Server Component to `MobileNavbar`.

Recommended conceptual contract:

```ts
type NavigationItem = {
  label: string;
  href: string;
};
```

Conceptual props:

```ts
type MobileNavbarProps = {
  items: readonly NavigationItem[];
  cta: NavigationItem;
};
```

Exact TypeScript syntax may follow repository conventions.

Requirements:

- desktop and mobile navigation derive from the same canonical data,
- labels and destinations must not be duplicated in two unrelated implementations,
- no global configuration may be introduced,
- no context provider may be introduced,
- no state-management library may be added,
- navigation data must not be fetched,
- navigation data must not be editable at runtime.

The approved canonical values remain:

```text
Features → #features
Pricing → #pricing
FAQ → #faq
Request a Demo → #request-demo
```

---

# Client Boundary

The Client Component boundary must remain limited to:

```text
MobileNavbar.tsx
```

Do not convert:

```text
Navbar.tsx
page.tsx
layout.tsx
Hero.tsx
Footer.tsx
```

into Client Components.

Do not place `"use client"` higher in the tree merely to support the menu.

The mobile interaction must not increase client ownership of unrelated Marketing UI.

---

# State Contract

`MobileNavbar.tsx` owns one local boolean state:

```text
isOpen
```

Initial state:

```text
false
```

State transitions:

```text
toggle activation:
closed → open
open → closed

navigation-item selection:
open → closed

Escape while open:
open → closed
focus returns to toggle
```

Do not introduce:

- global state,
- URL state,
- persistent storage,
- cookies,
- body-scroll state,
- animation state,
- route state,
- resize-observer state.

No state persistence across reloads is required.

---

# Toggle Contract

Use a native:

```html
<button type="button">
```

The button must expose:

```text
aria-expanded
aria-controls
accessible name
```

Approved accessible names:

```text
Closed:
Open navigation

Open:
Close navigation
```

The toggle must support native keyboard activation:

```text
Enter
Space
```

The toggle may use the existing Button primitive, `buttonVariants`, or an equivalent established styling convention.

Do not add a new primitive solely for this toggle.

The visible icon may use the already-installed icon library.

If Menu and Close icons are used:

- they are decorative,
- they must not create duplicate accessible names,
- they must be hidden from assistive technology,
- no new icon dependency may be added.

---

# Panel Contract

Use one stable panel ID, for example:

```text
mobile-navigation-panel
```

The ID must:

- appear exactly once,
- match the toggle's `aria-controls`,
- not conflict with section anchors,
- remain stable across open and closed states.

The panel contains a semantic navigation landmark.

Use an accessible label such as:

```text
Mobile navigation
```

The panel must appear in normal document flow beneath the mobile header row.

The implementation must not use:

- fixed positioning for the full panel,
- absolute overlay behavior,
- portal rendering,
- modal semantics,
- dialog semantics,
- a backdrop,
- a focus trap,
- body scroll lock.

## Closed Rendering

When closed, navigation links must not be keyboard-focusable or exposed as active interactive content.

The preferred minimal model is conditional rendering of the panel.

Do not preserve hidden focusable anchors off-screen.

## Open Rendering

When open, focus order must be:

```text
NovaFlow brand
Menu toggle
Features
Pricing
FAQ
Request a Demo
```

The CTA remains visually primary and may use the full available panel width.

---

# Escape and Focus Architecture

Escape behavior requires client-side keyboard handling.

This amendment approves:

- a local toggle `ref`,
- an effect active only while the menu is open,
- one temporary document-level `keydown` listener,
- cleanup when the menu closes or the component unmounts.

On Escape while open:

1. close the panel,
2. return focus to the menu toggle.

Do not:

- install a permanent global listener,
- intercept unrelated keys,
- create a focus trap,
- move focus automatically when the panel first opens,
- force focus to the first navigation link,
- introduce a keyboard-management dependency.

Enter and Space behavior must remain native to the toggle button.

---

# Navigation Selection Behavior

Selecting any mobile navigation item must close the menu.

This applies to:

```text
Features
Pricing
FAQ
Request a Demo
```

Use the smallest local event handling necessary.

Requirements:

- preserve native anchor navigation,
- preserve hash destinations,
- do not prevent default navigation,
- do not add custom scrolling,
- do not manually focus destination sections,
- do not route mobile links directly to Calendly,
- do not modify the approved Final CTA boundary.

Only Final CTA continues to link directly to Calendly.

---

# Responsive Ownership

The approved responsive ownership is:

```text
Desktop navigation:
hidden below md
visible at md and above

Mobile navigation:
visible below md
hidden at md and above
```

Use the repository's existing Tailwind breakpoint corresponding to 768px.

Do not introduce a custom JavaScript media-query system when CSS responsive visibility is sufficient.

No resize listener or `ResizeObserver` is required.

The mobile panel may retain internal state while CSS-hidden at desktop widths. The implementation must ensure hidden mobile content is not exposed or focusable at desktop widths.

Do not add viewport-detection hooks.

---

# Presentation Boundaries

Preserve:

- current sticky-header behavior,
- current Container ownership,
- white background,
- existing border treatment,
- existing blue accent,
- existing focus-ring conventions,
- current desktop spacing and alignment.

The mobile panel may use:

- existing spacing utilities,
- existing border tokens,
- existing background tokens,
- existing Button styles,
- existing typography tokens.

Do not introduce:

- an overlay,
- a shadow-heavy floating menu,
- a gradient,
- a blur effect,
- decorative animation,
- a new color,
- a new visual token,
- a new breakpoint,
- a new CTA treatment.

No animation is required.

If a transition is added later, it must:

- be minimal,
- respect reduced motion,
- not delay interaction,
- not require additional state.

The default implementation should prefer no animation.

---

# Semantic Structure

The final Navbar structure should conceptually remain:

```text
<header>
  <Container>
    mobile/desktop header row
    mobile panel when open
  </Container>
</header>
```

At desktop width:

- desktop navigation is exposed,
- mobile navigation is hidden.

At mobile width:

- mobile navigation is exposed,
- desktop navigation is hidden.

At any active viewport, users must encounter one usable primary navigation model.

Hidden responsive navigation must not remain keyboard-focusable.

---

# Dependency Policy

Permitted:

- React local state,
- React `useEffect`,
- React `useRef`,
- existing Next.js link behavior,
- existing Tailwind utilities,
- existing Button utilities,
- the existing installed icon package.

Not permitted:

- a new menu library,
- a new disclosure library,
- a new animation library,
- a new focus-management library,
- a global state library,
- a headless dialog primitive,
- a portal primitive,
- a body-scroll package.

Do not modify:

```text
package.json
pnpm-lock.yaml
```

---

# Authorized Implementation Scope

The later implementation package may create or modify only:

```text
src/components/marketing/Navbar.tsx
src/components/marketing/MobileNavbar.tsx
```

A shared UI primitive must not be modified unless implementation reveals a genuine incompatibility and that change is separately reviewed.

No other Marketing component should require modification.

---

# Validation Contract

The later implementation must run:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
git diff --check
```

## Responsive Review

Test:

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

- the mobile model appears below 768px,
- the desktop model appears at 768px and above,
- no moment exists where both models are visibly active,
- no moment exists where neither model is available,
- no horizontal overflow occurs,
- the brand remains readable,
- the CTA remains usable,
- the panel stays in normal document flow,
- the desktop Navbar is visually unchanged.

## Keyboard Review

Closed mobile state:

```text
brand → toggle → main-page content
```

Open mobile state:

```text
brand → toggle → Features → Pricing → FAQ → Request a Demo → main-page content
```

Confirm:

- the toggle opens with Enter,
- the toggle opens with Space,
- the toggle closes with Enter,
- the toggle closes with Space,
- Escape closes the menu while open,
- Escape returns focus to the toggle,
- selecting each link closes the menu,
- hidden links are not focusable,
- no keyboard trap exists,
- focus remains visible throughout.

## Accessibility Review

Confirm:

- the toggle is a native button,
- the button has `type="button"`,
- its accessible name changes correctly,
- `aria-expanded` matches the actual state,
- `aria-controls` references the correct panel,
- panel navigation has an accessible label,
- decorative icons are hidden from assistive technology,
- no duplicate IDs exist,
- no accessibility violation is introduced,
- the existing skip link remains the first page-level focus target.

## Routing Review

Confirm exact destinations:

```text
Desktop:
Features → #features
Pricing → #pricing
FAQ → #faq
Request a Demo → #request-demo

Mobile:
Features → #features
Pricing → #pricing
FAQ → #faq
Request a Demo → #request-demo
```

Confirm:

- no `/contact`,
- no placeholder `href`,
- no direct Calendly link in Navbar,
- only Final CTA links directly to Calendly.

## Runtime Review

Confirm:

```text
GET / → HTTP 200
GET /favicon.ico → HTTP 200
```

Confirm:

- no hydration error,
- no React warning,
- no console error,
- no failed request,
- no Client Component expansion outside the authorized boundary.

---

# Decision Boundaries

This architecture amendment does not authorize:

- implementation before approval,
- desktop Navbar redesign,
- a mobile overlay or drawer,
- new navigation labels,
- new navigation destinations,
- direct Calendly routing,
- metadata changes,
- typography changes,
- skip-link changes,
- responsive changes outside Navbar,
- Navbar analytics,
- menu persistence,
- external state,
- new dependencies.

---

# Definition of Done

This document is complete because it explicitly freezes:

- `Navbar.tsx` as a Server Component,
- `MobileNavbar.tsx` as the only new Client Component,
- navigation-data ownership,
- serializable prop flow,
- local `isOpen` ownership,
- native toggle semantics,
- panel semantics,
- conditional closed-state behavior,
- Escape handling,
- focus return,
- close-on-navigation behavior,
- responsive visibility ownership,
- dependency boundaries,
- authorized implementation files,
- full validation requirements.

---

# Approval Effect

Approval:

- resolves the Engineering Architecture gate for the mobile Navbar,
- authorizes one later focused implementation package,
- preserves the desktop Navbar,
- preserves navigation destinations,
- preserves the Final CTA conversion boundary,
- does not itself change application code.
