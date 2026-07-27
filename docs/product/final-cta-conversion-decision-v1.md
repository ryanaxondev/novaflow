# NovaFlow

# Final CTA Conversion Decision

## Document Information

**Document Type:** Product Decision Specification
**Artifact:** Final CTA Conversion
**Version:** v1
**Status:** In Progress
**Owner:** Product

**Depends On:**

- `docs/01-product.md`
- `docs/02-information-architecture.md`
- `docs/information-architecture/homepage-navigation-reconciliation-v1.md`
- `docs/engineering/session-11-architecture-amendment-v1.md`
- `docs/messaging/hero-v1.md`
- `docs/messaging/social-proof-pricing-v1.md`

**Enables:**

- Final CTA Messaging Specification
- Final CTA Implementation
- Homepage Demo Conversion Validation

---

# Purpose

This document freezes the Product decision for the terminal homepage demo-conversion flow.

It defines:

- where internal demo entry points converge,
- what kind of destination the Final CTA uses,
- which decisions are already approved,
- which decisions remain unresolved,
- what Engineering may and may not implement.

It does not define visible Final CTA copy, visual design, component structure, booking-provider configuration, or implementation details.

---

# Decision Summary

NovaFlow will use a terminal homepage demo section followed by an external demo-booking destination.

The approved conversion model is:

```text
Navbar Request a Demo
Hero Request a Demo
Pricing Request a Demo
Pricing Contact Sales
Footer Request a Demo
        ↓
#request-demo
        ↓
Final CTA section
        ↓
External demo-booking page
```

The Final CTA section owns:

```text
id="request-demo"
```

The Final CTA button will link directly to the approved external demo-booking URL.

---

# Approved Product Decision

## Destination Type

The terminal conversion destination is:

```text
External demo-booking page
```

This means:

- visitors complete scheduling outside the NovaFlow application,
- NovaFlow does not implement an internal scheduling flow,
- NovaFlow does not implement a contact form as part of Final CTA,
- NovaFlow does not require a `/contact` route for the homepage demo flow,
- the external booking destination is the final action after the homepage Final CTA.

## Internal Conversion Entry Points

The following internal entry points converge on:

```text
#request-demo
```

Approved entry points:

```text
Navbar primary CTA
Hero primary CTA
Starter Pricing CTA
Pro Pricing CTA
Enterprise Pricing CTA
Footer demo CTA
```

The Final CTA section is the single terminal homepage conversion section.

## Final CTA External Action

The button inside Final CTA must link to:

```text
Approved external demo-booking URL
```

The exact URL is not yet approved.

---

# Current Decision Status

The following decisions are approved:

```text
Conversion model: Homepage anchor followed by an external booking page
Terminal section anchor: #request-demo
Final destination type: External demo-booking page
/contact dependency: Not required
Internal contact form: Not part of Final CTA
```

The following decisions remain open:

```text
Booking provider: TBD
Booking account owner: TBD
Exact booking URL: TBD
Availability configuration: TBD
Meeting duration and scheduling rules: TBD
```

Because the exact URL is unresolved, this document remains:

```text
Status: In Progress
```

---

# Product Ownership

Product owns:

- the decision to use an external booking destination,
- the selected booking provider,
- the approved booking account,
- the exact booking URL,
- the business meaning of the scheduled conversation,
- any scheduling rules exposed to visitors,
- approval of the final conversion flow.

Engineering does not select or create the booking provider.

Engineering must not infer the destination from:

- current production code,
- UI mockups,
- an unavailable Contact route,
- an example URL,
- a common provider convention.

---

# Human-Owned Setup

The Product Owner is responsible for completing or approving the external setup required for the destination.

This includes:

- choosing the booking provider,
- creating or approving the booking account,
- configuring the booking page,
- reviewing the visitor-facing booking-page content,
- providing the final canonical URL,
- confirming that the URL is publicly accessible.

AI or Engineering may support evaluation or implementation after a separate explicit request, but must not create an account, select a provider, or publish a destination without Product Owner approval.

---

# Booking URL Requirements

Before the URL can be approved, it must satisfy all of the following:

- use an HTTPS URL,
- be publicly reachable,
- lead directly to the intended demo-booking experience,
- not require an unavailable NovaFlow account,
- not be a placeholder, test, preview, or temporary URL,
- not expose private administrative information,
- use visitor-facing wording consistent with approved NovaFlow positioning,
- avoid unsupported Product, pricing, security, support, or legal claims,
- be reviewed by the Product Owner.

The canonical URL must be recorded in this document before Final CTA implementation is authorized.

---

# Prohibited Destinations

Engineering must not use any of the following as a substitute:

```text
/contact
mailto:
href="#"
javascript:
an invented Calendly URL
an invented Cal.com URL
an invented booking-provider URL
a temporary preview URL
a placeholder URL
an account-registration route
a checkout route
```

No fallback destination is approved.

If the exact URL is unavailable, the Final CTA implementation remains blocked.

---

# Relationship to Contact Page Scope

The broader NovaFlow Product Specification includes a future Contact page.

That page remains part of the long-term site scope.

This decision does not:

- remove the future Contact page,
- redefine the Contact page responsibility,
- prohibit a future sales-contact flow,
- make the external booking page the only permanent contact mechanism.

For the current homepage milestone:

```text
Final CTA does not depend on /contact.
```

Contact-page planning and implementation belong to a separate future scope.

---

# Relationship to Information Architecture

The approved homepage navigation decision routes internal demo entry points to:

```text
#request-demo
```

This Product Decision owns what happens after the visitor reaches the Final CTA.

The boundary is:

```text
Information Architecture
→ Internal navigation to #request-demo

Product Decision
→ External demo-booking destination

Messaging
→ Final CTA visible copy and CTA wording

Engineering
→ Correct implementation of the approved flow
```

---

# Relationship to Messaging

This document does not approve Final CTA headline, supporting copy, or visible button wording.

Those belong to:

```text
docs/messaging/faq-final-cta-footer-v1.md
```

The Messaging Specification may be approved before the exact booking URL exists.

However, Messaging must not imply:

- guaranteed response times,
- guaranteed availability,
- immediate onboarding,
- trial access,
- account creation,
- purchase completion,
- implementation commitments,
- support commitments,
- sales outcomes.

The visible CTA must describe the approved demo-conversation action and must remain consistent with the external booking destination.

---

# Relationship to Engineering

Engineering may prepare the Final CTA component boundary, but must not complete or merge a functional Final CTA button until:

- this document contains the approved exact URL,
- the scoped Messaging Specification is Approved,
- the Session 11 Architecture Amendment is Approved,
- the homepage navigation decision is Approved.

The Final CTA implementation must:

- use the canonical `#request-demo` section anchor,
- use real link semantics,
- use the exact approved external URL,
- preserve accessible focus behavior,
- avoid click handlers when ordinary link navigation is sufficient,
- avoid internal redirects or substitute routes,
- avoid embedding a booking widget unless separately approved.

This document does not decide whether the external link opens in the same tab or a new tab. That behavior must follow the approved UI and Engineering conventions at implementation time.

---

# Implementation Blocker

Until the exact URL is recorded and approved:

```text
Final CTA button implementation: Blocked
```

This blocker does not prevent:

- FAQ Messaging approval,
- Footer Messaging approval,
- Final CTA Messaging approval,
- Accordion implementation,
- FAQ implementation,
- Footer component-location correction,
- Footer implementation using only approved internal destinations,
- homepage section-anchor preparation.

It does prevent:

- shipping a functional Final CTA button,
- inventing a placeholder destination,
- claiming that the homepage conversion flow is complete,
- closing Session 11.

---

# URL Finalization Procedure

When the external booking page is ready:

1. Product provides the canonical URL.
2. Product verifies the destination and visitor-facing content.
3. This document is updated with:
   - provider name,
   - approved canonical URL,
   - approval date,
   - final status.
4. The document status changes from:

```text
In Progress
```

to:

```text
Approved
```

5. Engineering implements the Final CTA button using the recorded URL.
6. The completed flow is validated from every approved demo entry point.

The URL update should be a focused documentation change before or alongside the Final CTA implementation task.

---

# Final URL Record

## Booking Provider

```text
TBD
```

## Canonical Booking URL

```text
TBD
```

## Product Approval Date

```text
TBD
```

## Verification Status

```text
Not verified
```

---

# Validation Requirements

Before Session 11 can close, validate:

```text
Navbar Request a Demo → #request-demo
Hero Request a Demo → #request-demo
Starter Request a Demo → #request-demo
Pro Request a Demo → #request-demo
Enterprise Contact Sales → #request-demo
Footer Request a Demo → #request-demo
Final CTA button → approved external booking URL
```

Also confirm:

- no approved entry point uses `/contact`,
- no entry point uses a placeholder destination,
- the external URL returns a valid destination,
- the visitor can reach the intended booking experience,
- the Final CTA button label matches the approved Messaging Specification,
- no unsupported claims appear on the NovaFlow Final CTA.

---

# Non-Goals

This decision does not authorize:

- creation of a Contact page,
- creation of an internal booking system,
- creation of a booking-provider account,
- booking-provider selection by Engineering,
- an embedded scheduling widget,
- a contact form,
- form submission,
- backend email delivery,
- CRM integration,
- analytics instrumentation,
- automated follow-up,
- account registration,
- authentication,
- payment or checkout,
- legal or privacy claims,
- support or response-time commitments.

---

# Definition of Done

This Product Decision is complete when:

- the external destination model is explicit,
- all internal demo entry points converge on `#request-demo`,
- Final CTA owns the terminal homepage conversion section,
- `/contact` is not required for the current homepage flow,
- Product and Engineering ownership boundaries are explicit,
- prohibited fallback destinations are explicit,
- the exact provider and canonical URL are recorded,
- the booking page is reviewed and verified,
- the status is changed to Approved,
- Engineering can implement without inventing a destination.

---

# Approval Effect

While this document remains In Progress:

- the external booking destination model is binding,
- `/contact` and placeholder substitutions are prohibited,
- the exact Final CTA destination remains unresolved,
- Final CTA button implementation remains blocked.

After this document becomes Approved:

- Engineering may implement the Final CTA button using the recorded canonical URL,
- the approved external booking URL becomes the source of truth for the terminal homepage conversion action,
- no alternative destination may be substituted without a new Product decision.
