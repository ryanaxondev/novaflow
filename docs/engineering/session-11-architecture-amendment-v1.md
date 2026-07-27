# NovaFlow

# Session 11 Architecture Amendment

## Document Information

**Document Type:** Engineering Architecture Amendment
**Version:** v1
**Status:** Approved
**Owner:** Engineering Architecture

---

# Purpose

This amendment resolves limited engineering drift between:

- the approved Homepage Engineering Architecture,
- the approved Product, Information Architecture, Messaging, Wireframe, and UI artifacts,
- the current repository structure.

It freezes the engineering boundaries required for Session 11 without redefining Product, Messaging, Information Architecture, visual design, commercial policy, legal content, or unsupported routes.

All architecture outside the explicit scope of this amendment remains unchanged.

---

# Decision Ownership Boundary

This amendment owns engineering structure and implementation boundaries only.

The following ownership remains unchanged:

- **Product Specification and Product Decision Specifications** own Product and Business decisions.
- **Information Architecture** owns site structure, global navigation, footer navigation, page responsibilities, and user journeys.
- **Messaging Specifications** own visible customer-facing copy and CTA wording.
- **Wireframe and UI Specifications** own structural and visual presentation.
- **Engineering Architecture** owns component boundaries, shared primitives, file locations, implementation sequencing, and technical constraints.
- **Production Code** implements approved decisions without redefining them.

This amendment does not approve a new global navigation model.

---

# Amendment Scope

This amendment freezes only:

- the Session 11 engineering scope,
- the shared Accordion primitive,
- FAQ component architecture,
- Final CTA component architecture,
- Footer component architecture,
- canonical component locations,
- homepage section-anchor ownership,
- focused implementation sequencing,
- known upstream dependencies and blockers.

This amendment does not redesign earlier homepage sections.

---

# Session 11 Engineering Scope

Session 11 includes:

```text
FAQ
FinalCTA
Footer
Homepage section-anchor reconciliation
Final homepage integration and link validation
```

Global Navbar information architecture may be reconciled during Session 11 only after an owning Information Architecture decision is approved.

The following pages are outside Session 11:

```text
/contact
/privacy
/terms
```

Session 11 must not create those routes.

---

# Current Repository Reconciliation

The current repository contains empty placeholder files at:

```text
src/components/marketing/FAQ.tsx
src/components/marketing/FinalCTA.tsx
src/Footer.tsx
```

The current repository does not contain:

```text
src/components/marketing/Footer.tsx
src/components/ui/accordion.tsx
```

The homepage currently renders through Pricing.

Pricing already owns:

```text
id="pricing"
```

Known implementation drift includes:

- Features does not yet own `id="features"`.
- FAQ does not yet own `id="faq"`.
- Final CTA does not yet own `id="request-demo"`.
- `src/Footer.tsx` is outside the canonical marketing-component location.
- the Navbar currently contains navigation and CTA choices that require upstream reconciliation,
- the Hero primary CTA currently targets an unavailable `/contact` route,
- Pricing CTAs already target `#request-demo`.

This amendment records those facts without changing implementation.

---

# Shared UI Inventory Amendment

Add the following shared primitive:

```text
Accordion
```

## Accordion

### Canonical Location

```text
src/components/ui/accordion.tsx
```

### Responsibility

Accordion provides reusable, accessible disclosure behavior for vertically stacked content.

It owns:

- accessible trigger and panel mechanics,
- keyboard interaction,
- expanded and collapsed presentation,
- the reusable component API consumed by FAQ.

It does not own:

- FAQ questions,
- FAQ answers,
- marketing copy,
- Product policy,
- commercial claims,
- page-specific layout.

### State Boundary

FAQ remains the feature-level owner of its interactive presentation contract, consistent with the approved Homepage Engineering Architecture.

The shared Accordion primitive encapsulates the accessible interaction mechanics. It may use controlled or uncontrolled behavior according to the installed Base UI API, but it must not move NovaFlow-specific content or business responsibility into the shared layer.

### Constraints

- Follow the repository's existing shadcn/Base UI conventions.
- Inspect the installed `@base-ui/react` API before implementation.
- Do not add a dependency unless the existing package is proven insufficient.
- Do not implement a private one-off accordion inside `FAQ.tsx`.
- Keep the primitive reusable and independent of marketing content.
- Use the lowercase filename required by the current Linux repository.

---

# FAQ Architecture

```text
Component: FAQ
Path: src/components/marketing/FAQ.tsx
Type: Client Component
Section ID: faq
```

FAQ composes:

```text
Section
Container
SectionHeader
Accordion
```

FAQ is responsible for:

- rendering approved FAQ content,
- presenting the approved FAQ sequence,
- composing the shared Accordion,
- remaining within approved Product and Messaging boundaries.

FAQ must not:

- invent Product policy,
- invent commercial policy,
- invent support, billing, security, legal, or account-management claims,
- implement a separate accordion system,
- own Final CTA behavior.

FAQ implementation is blocked until the scoped FAQ Messaging Specification is approved.

## Page Placement

```text
Pricing
↓
FAQ
↓
Final CTA
```

---

# Final CTA Architecture

```text
Component: FinalCTA
Path: src/components/marketing/FinalCTA.tsx
Type: Server Component
Section ID: request-demo
```

Final CTA is responsible for:

- owning the terminal homepage demo anchor,
- rendering approved Final CTA messaging,
- exposing one approved terminal conversion action.

Final CTA must not own:

- a contact form,
- form submission,
- backend behavior,
- email delivery,
- account registration,
- booking-provider selection,
- booking-provider account creation.

## Destination Dependency

The selected Product direction is an external demo-booking destination.

The exact URL is not yet approved.

Therefore:

```text
Final CTA implementation is blocked until the exact external URL is recorded
in an approved Product Decision Specification.
```

Engineering must not invent:

```text
/contact
mailto:
a Calendly URL
another provider URL
a placeholder URL
href="#"
```

Final CTA implementation also requires approved Final CTA messaging.

---

# Footer Architecture

```text
Component: Footer
Canonical path: src/components/marketing/Footer.tsx
Type: Server Component
```

The current empty file:

```text
src/Footer.tsx
```

is incorrectly located and must be deleted during the focused Footer implementation task.

Footer must render outside `<main>`:

```tsx
<>
  <Navbar />

  <main>{/* Homepage sections */}</main>

  <Footer />
</>
```

Footer is responsible for:

- rendering approved footer content,
- rendering only approved navigation destinations,
- using only destinations that exist at implementation time,
- preserving accessible landmark and link semantics.

Footer must not invent:

- legal copy,
- contact information,
- unavailable routes,
- social profiles,
- newsletter behavior,
- documentation destinations,
- company pages,
- marketing claims.

The approved Homepage Engineering Architecture retains the Footer's long-term responsibility for secondary navigation, contact information, and legal links.

For the Session 11 implementation, unavailable Contact, Privacy, and Terms destinations remain deferred until their routes and content are separately approved.

The exact Footer v1 link set must be approved by the owning Information Architecture and Messaging artifacts before Footer implementation.

---

# Homepage Section-Anchor Contract

The following technical ownership is approved:

```text
Features section  → id="features"
Pricing section   → id="pricing"
FAQ section       → id="faq"
Final CTA section → id="request-demo"
```

Rules:

- Pricing must retain its existing `id="pricing"`.
- Features must receive `id="features"` in its focused reconciliation task.
- FAQ must own `id="faq"`.
- Final CTA must own `id="request-demo"`.
- IDs must be placed on the canonical Section components.
- Duplicate IDs must not be added to wrappers or nested elements.
- An anchor ID does not independently authorize a Navbar or Footer navigation item.

---

# CTA Routing Dependencies

The following routing is already approved by the Social Proof + Pricing Product Decision Specification:

```text
Starter Pricing CTA    → #request-demo
Pro Pricing CTA        → #request-demo
Enterprise Pricing CTA → #request-demo
```

The following changes require upstream approval before implementation:

```text
Navbar navigation labels and destinations
Navbar primary CTA wording and destination
Hero primary CTA destination
Footer navigation labels and destinations
Final CTA external destination
```

The Final CTA section will provide the `#request-demo` anchor after its Product destination and Messaging are approved.

No component may link to an unavailable internal route or an invented external URL.

---

# Information Architecture Reconciliation Requirement

The approved Information Architecture currently defines global primary navigation as:

```text
Product
Pricing
About
Contact
```

with a persistent:

```text
Request Demo
```

The current Navbar implementation instead uses homepage-section navigation.

Engineering Architecture cannot decide between those models.

Before any Navbar or Footer navigation reconciliation is implemented, the Information Architecture owner must approve one of the following:

1. retain the approved global navigation model and provide valid destinations, or
2. approve a scoped homepage in-page navigation model for the current milestone.

Until that decision is approved:

- do not change Navbar navigation labels or ordering,
- do not treat the current code as Product or IA truth,
- do not add unavailable About or Contact routes,
- do not freeze Footer navigation labels,
- do not claim that Features, Pricing, and FAQ are the approved global navigation model.

This requirement blocks only navigation-content reconciliation. It does not block Accordion, FAQ architecture, Footer location cleanup, or other engineering work whose upstream content is approved.

---

# Canonical Component Locations

Session 11 uses:

```text
src/components/marketing/FAQ.tsx
src/components/marketing/FinalCTA.tsx
src/components/marketing/Footer.tsx
src/components/ui/accordion.tsx
```

The current repository uses lowercase filenames for generated/shared UI primitives:

```text
src/components/ui/badge.tsx
src/components/ui/button.tsx
src/components/ui/card.tsx
src/components/ui/accordion.tsx
```

Linux filename casing is authoritative.

---

# Implementation Sequence

Use separate focused tasks and reviewable diffs.

```text
1. Approve this Architecture Amendment
2. Approve the required Information Architecture navigation reconciliation
3. Approve the Final CTA Product Decision
4. Approve FAQ + Final CTA + Footer Messaging
5. Implement the shared Accordion primitive
6. Implement FAQ
7. Implement Footer at the canonical location
8. Delete src/Footer.tsx
9. Human creates and approves the external demo-booking URL
10. Finalize the Product Decision with the exact URL
11. Implement Final CTA
12. Add id="features"
13. Reconcile Navbar, Hero, and Footer navigation only from approved upstream artifacts
14. Validate every internal and external homepage destination
15. Perform responsive browser and accessibility review
16. Close Session 11
```

A single task must not implement all Session 11 concerns at once.

---

# Expected Future File Ownership

This section documents expected implementation ownership. It does not authorize changes by itself.

## Information Architecture Reconciliation

The owning IA artifact and exact file change must be reviewed separately before editing.

## Accordion Task

```text
src/components/ui/accordion.tsx
```

## FAQ Task

```text
src/components/marketing/FAQ.tsx
src/app/(marketing)/page.tsx
```

## Footer Task

```text
src/components/marketing/Footer.tsx
src/Footer.tsx
src/app/(marketing)/page.tsx
```

## Final CTA Task

```text
src/components/marketing/FinalCTA.tsx
src/app/(marketing)/page.tsx
```

## Section-Anchor Task

```text
src/components/marketing/Features.tsx
```

## Navigation Integration Task

Only after Information Architecture, Product, and Messaging approval:

```text
src/components/marketing/Navbar.tsx
src/components/marketing/Hero.tsx
src/components/marketing/Footer.tsx
```

Additional files require separate review and approval.

---

# Known Blockers

## Information Architecture

Global Navbar and Footer navigation content is not reconciled with the current repository implementation.

## Final CTA Product Decision

The external booking-destination model and exact URL must be recorded in an approved Product Decision Specification.

## Final CTA URL

The exact external booking URL does not yet exist or is not yet approved.

## Messaging

FAQ, Final CTA, Footer brand copy, Footer navigation wording, and copyright copy require an approved scoped Messaging Specification.

## Unsupported Destinations

Contact, Privacy, Terms, and other unavailable routes must not be linked during Session 11.

---

# Non-Goals

This amendment does not authorize:

- Contact page implementation,
- Privacy or Terms page implementation,
- legal-copy generation,
- backend forms,
- form submission,
- email delivery,
- account registration,
- authentication,
- billing,
- checkout,
- scheduling-provider selection,
- booking-provider account creation,
- new Product capabilities,
- new commercial policies,
- a new global navigation model.

---

# Definition of Done

This amendment is complete when:

- Accordion ownership and location are explicit,
- FAQ component type and composition are explicit,
- Footer canonical location and incorrect-file cleanup are explicit,
- Final CTA ownership and blockers are explicit,
- homepage section-anchor ownership is explicit,
- Product, IA, Messaging, and Engineering ownership boundaries remain intact,
- the global navigation conflict is deferred to Information Architecture rather than decided by Engineering,
- `/contact`, legal routes, and external URLs are not invented,
- implementation order and focused file ownership are explicit,
- no production-code change is included,
- Markdown formatting is valid,
- `git diff --check` passes.

---

# Approval Effect

Approval of this amendment freezes the Session 11 engineering boundaries documented above.

Approval does not:

- approve the missing Information Architecture decision,
- approve missing Product decisions,
- approve missing Messaging,
- approve the external booking URL,
- authorize unavailable routes,
- authorize implementation outside the focused task sequence,
- change any decision outside this amendment's explicit engineering scope.
