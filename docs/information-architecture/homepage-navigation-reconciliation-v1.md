# NovaFlow

# Homepage Navigation Reconciliation

## Document Information

**Document Type:** Information Architecture Decision
**Version:** v1
**Status:** Approved
**Owner:** Information Architecture

**Depends On:**

- `docs/01-product.md`
- `docs/02-information-architecture.md`
- `docs/messaging/hero-v1.md`
- `docs/messaging/benefits-features-v1.md`
- `docs/messaging/social-proof-pricing-v1.md`
- `docs/engineering/session-11-architecture-amendment-v1.md`

**Amends:**

- the homepage milestone application of `# 6. Navigation Model` in `docs/02-information-architecture.md`
- the homepage milestone navigation destinations used by Navbar, Hero, Footer, and conversion entry points

---

# Purpose

This document reconciles the approved long-term site navigation model with the routes and homepage sections available in the current implementation milestone.

The approved Information Architecture defines a broader MVP site map that includes dedicated Pricing, About, Contact, Privacy Policy, and Terms of Service pages.

Those pages are not yet implemented.

The current homepage already contains or is scheduled to contain the product-understanding, pricing, FAQ, and demo-conversion content required for the present milestone.

This decision prevents broken or invented navigation while preserving the broader site map for future implementation.

---

# Decision Summary

For the current homepage milestone, NovaFlow will use scoped in-page navigation.

The approved homepage navigation model is:

```text
Brand
Features
Pricing
FAQ
Request a Demo
```

Destinations are:

```text
Brand          → /
Features       → #features
Pricing        → #pricing
FAQ            → #faq
Request a Demo → #request-demo
```

This is a milestone-specific navigation decision.

It does not remove dedicated pages from the approved long-term site map.

---

# Ownership Boundary

This document owns:

- homepage navigation labels,
- homepage navigation ordering,
- homepage navigation destinations,
- the current Footer navigation set,
- the relationship between homepage conversion entry points and the terminal demo section,
- deferral rules for unavailable routes.

This document does not own:

- customer-facing section copy,
- CTA wording beyond referencing approved Messaging,
- component layout,
- responsive presentation,
- component implementation,
- the external demo-booking provider,
- the exact external booking URL,
- Product capabilities,
- legal content.

Messaging Specifications remain the source of truth for visible CTA wording.

The Final CTA Product Decision remains the source of truth for the external demo-booking destination.

---

# Relationship to the Approved Site Map

The following long-term MVP pages remain approved:

```text
Home
Pricing
About
Contact
Privacy Policy
Terms of Service
404
```

This document does not remove or reject those pages.

It only states that unavailable routes must not appear as active navigation destinations in the current homepage milestone.

The global navigation model must be reviewed again when dedicated routes become available.

---

# Homepage Primary Navigation

## Brand

```text
Label: NovaFlow
Destination: /
```

The brand link returns the visitor to the homepage.

## Navigation Items

Use this order:

```text
Features
Pricing
FAQ
```

Destinations:

```text
Features → #features
Pricing  → #pricing
FAQ      → #faq
```

Rationale:

- Features supports product understanding.
- Pricing supports commercial evaluation.
- FAQ reduces practical uncertainty before conversion.
- Every destination exists within the current homepage milestone.
- The set remains intentionally minimal.

Do not include the following global navigation items in the current milestone:

```text
Product
About
Contact
```

Reasons:

- there is no approved dedicated Product route,
- the About route is not implemented,
- the Contact route is not implemented,
- labels must not point to unavailable or substituted destinations.

`Product`, `About`, and `Contact` remain eligible for a future global navigation revision when their route responsibilities can be fulfilled.

---

# Persistent Navbar CTA

The Navbar must expose one persistent primary conversion action.

Approved visible label:

```text
Request a Demo
```

Approved homepage destination:

```text
#request-demo
```

The following current implementation is not approved:

```text
Get Started → #pricing
```

Reasons:

- `Get Started` is not approved Messaging,
- Pricing is an evaluation destination rather than the terminal demo destination,
- the persistent CTA must support the dominant conversion path.

---

# Hero Navigation

The approved Hero CTA routing is:

```text
Request a Demo → #request-demo
View Pricing   → #pricing
```

The current Hero destination:

```text
Request a Demo → /contact
```

must not remain because `/contact` is unavailable in the current milestone.

This decision changes only the destination.

Hero CTA wording remains owned by the approved Hero Messaging Specification.

---

# Pricing Conversion Entry Points

The approved Pricing CTA routing remains unchanged:

```text
Starter Request a Demo → #request-demo
Pro Request a Demo     → #request-demo
Enterprise Contact Sales → #request-demo
```

The different Enterprise CTA label is owned by the approved Social Proof + Pricing Messaging Specification.

All Pricing CTAs converge on the same terminal homepage conversion section.

---

# Terminal Demo Section

The terminal homepage conversion section owns:

```text
id="request-demo"
```

All internal demo entry points must converge on:

```text
#request-demo
```

The Final CTA button inside that section will link to the approved external demo-booking destination.

The external destination model and exact URL are not owned by this Information Architecture decision.

Until the exact URL is approved:

- internal navigation may target `#request-demo` only after the Final CTA section exists,
- the Final CTA button must not be implemented with an invented destination,
- no unavailable `/contact` route may be used as a substitute.

---

# Homepage Section Anchors

The current homepage navigation model requires these unique section anchors:

```text
Features section  → id="features"
Pricing section   → id="pricing"
FAQ section       → id="faq"
Final CTA section → id="request-demo"
```

Rules:

- each ID belongs to the canonical section component,
- each ID must appear only once,
- navigation links must use the exact approved destination,
- no wrapper or nested element may duplicate a section ID,
- implementation must not create placeholder sections only to satisfy a link.

---

# Footer Navigation

For the current homepage milestone, Footer navigation may include:

```text
Features
Pricing
FAQ
Request a Demo
```

Destinations:

```text
Features       → #features
Pricing        → #pricing
FAQ            → #faq
Request a Demo → #request-demo
```

Footer may also include:

- the NovaFlow brand link to `/`,
- approved brand-supporting copy,
- approved copyright text.

Footer must not include active links to:

```text
/contact
/privacy
/terms
About
Changelog
Documentation
Templates
Guides
Blog
Careers
Security
Newsletter
Social profiles
```

unless the corresponding route, destination, content, and approval exist before Footer implementation.

The original Information Architecture retains the Footer's long-term responsibility for Contact, Privacy Policy, and Terms of Service navigation.

Those items are deferred, not removed from the product plan.

---

# Conversion Path Reconciliation

For the current homepage milestone, the dominant conversion path is:

```text
Home
↓
Product understanding
↓
Features
↓
Trust
↓
Pricing
↓
FAQ
↓
Request a Demo section
↓
Approved external booking destination
```

Visitors may enter the terminal conversion path earlier through:

```text
Navbar Request a Demo
Hero Request a Demo
Pricing Request a Demo
Pricing Contact Sales
Footer Request a Demo
```

Each internal entry point first targets:

```text
#request-demo
```

This preserves one dominant conversion path and avoids competing terminal actions.

---

# Deferred Global Navigation

The broader global navigation must be reconsidered when dedicated pages are implemented.

A future IA revision may introduce:

```text
Product
Pricing
About
Contact
```

or another approved global model, but only when:

- required routes exist,
- page responsibilities are implemented,
- navigation labels have valid destinations,
- Footer legal destinations exist,
- conversion routing remains coherent.

The current in-page model must not be treated as a permanent rejection of the broader site architecture.

---

# Implementation Authorization

Once this document is Approved, it authorizes focused implementation tasks to:

- add `id="features"` to the Features section,
- add `id="faq"` through the FAQ implementation,
- add `id="request-demo"` through the Final CTA implementation,
- retain `id="pricing"` on Pricing,
- replace the Navbar navigation set with Features, Pricing, and FAQ,
- replace the Navbar CTA with `Request a Demo → #request-demo`,
- replace the Hero primary destination with `#request-demo`,
- use the approved milestone Footer navigation set.

Implementation must remain separated into the focused tasks defined by the Session 11 Architecture Amendment.

This decision does not authorize implementation of the Final CTA button before its external URL is approved.

---

# Non-Goals

This decision does not authorize:

- creation of `/about`,
- creation of `/contact`,
- creation of `/privacy`,
- creation of `/terms`,
- legal-copy generation,
- a contact form,
- form submission,
- backend behavior,
- booking-provider selection,
- booking-provider account creation,
- an external booking URL,
- new CTA wording,
- mobile-navigation redesign,
- visual-layout changes,
- new homepage sections.

---

# Review Triggers

Information Architecture must be reviewed again when any of the following occurs:

- a dedicated Product or Pricing route is introduced,
- the About route is implemented,
- the Contact route is implemented,
- Privacy Policy or Terms of Service routes are implemented,
- Footer legal navigation becomes available,
- the homepage content model changes,
- the dominant conversion path changes.

---

# Definition of Done

This decision is ready for approval when:

- it preserves the approved long-term site map,
- it approves one coherent current homepage navigation model,
- every approved current destination exists or is explicitly scheduled within Session 11,
- unavailable routes are not used,
- the persistent CTA supports the dominant conversion path,
- Navbar, Hero, Pricing, Footer, and Final CTA routing responsibilities are explicit,
- section-anchor ownership is explicit,
- Product, Messaging, IA, and Engineering ownership boundaries remain intact,
- no Product, legal, or external-provider decision is invented,
- only this Information Architecture decision file is added,
- Markdown formatting is valid,
- `git diff --check` passes.

---

# Approval Effect

Approval of this document:

- supplements the current homepage application of `docs/02-information-architecture.md`,
- approves scoped in-page navigation for the current homepage milestone,
- unblocks the Navigation Integration tasks defined by the Session 11 Architecture Amendment,
- does not approve the Final CTA external URL,
- does not remove future pages from the approved site map,
- does not authorize implementation outside the approved Session 11 sequence.
