# NovaFlow

# Final CTA Conversion Decision

## Document Information

**Document Type:** Product Decision Specification
**Artifact:** Final CTA Conversion
**Version:** v1
**Status:** Approved
**Owner:** Product
**Approval Date:** July 27, 2026

**Depends On:**

- `docs/01-product.md`
- `docs/02-information-architecture.md`
- `docs/information-architecture/homepage-navigation-reconciliation-v1.md`
- `docs/engineering/session-11-architecture-amendment-v1.md`
- `docs/messaging/hero-v1.md`
- `docs/messaging/social-proof-pricing-v1.md`
- `docs/messaging/faq-final-cta-footer-v1.md`

**Enables:**

- Final CTA Implementation
- FAQ Question 6 Publication
- Footer Demo Link Integration
- Homepage Demo Conversion Validation
- Session 11 Closure

---

# Purpose

This document freezes the Product decision for the terminal homepage demo-conversion flow.

It defines:

- where internal demo entry points converge,
- the terminal homepage conversion section,
- the approved external demo-booking provider,
- the canonical external booking URL,
- the verified visitor experience,
- what Engineering is authorized to implement.

It does not define visual layout, component structure, or implementation details.

Visible Final CTA copy remains owned by the approved Messaging Specification.

---

# Decision Summary

NovaFlow uses a terminal homepage demo section followed by an external Calendly booking destination.

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
Calendly booking page
```

The Final CTA section owns:

```text
id="request-demo"
```

The Final CTA button links directly to:

```text
https://calendly.com/ryanaxondev/novaflow-introductory-demo
```

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

## Booking Provider

The approved booking provider is:

```text
Calendly
```

## Booking Experience

The approved event configuration is:

```text
Event name: NovaFlow Introductory Demo
Duration: 30 minutes
Location: Google Meet
```

The meeting is an introductory conversation about the visitor’s recurring workflows and how NovaFlow could support a more repeatable way of operating.

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

The button inside Final CTA must link to the exact approved canonical URL:

```text
https://calendly.com/ryanaxondev/novaflow-introductory-demo
```

No alternate or fallback destination is approved.

---

# Final Decision Status

All Product decisions required for the current Final CTA conversion flow are resolved:

```text
Conversion model: Homepage anchor followed by an external booking page
Terminal section anchor: #request-demo
Final destination type: External demo-booking page
Booking provider: Calendly
Booking account owner: Product Owner
Canonical booking URL: https://calendly.com/ryanaxondev/novaflow-introductory-demo
Event name: NovaFlow Introductory Demo
Meeting duration: 30 minutes
Meeting location: Google Meet
Availability configuration: Configured and managed in Calendly
/contact dependency: Not required
Internal contact form: Not part of Final CTA
Verification status: Verified
```

This document is:

```text
Status: Approved
```

---

# Product Ownership

Product owns:

- the decision to use an external booking destination,
- the selected booking provider,
- the approved booking account,
- the exact booking URL,
- the business meaning of the scheduled conversation,
- scheduling rules exposed to visitors,
- approval of the final conversion flow.

Engineering does not select, replace, or reconfigure the booking provider.

Engineering must not infer an alternate destination from:

- current production code,
- UI mockups,
- an unavailable Contact route,
- an example URL,
- a common provider convention.

Any change to the provider, account, event, or canonical URL requires a new Product decision or an approved amendment to this document.

---

# Human-Owned Setup

The Product Owner has completed and verified the external setup required for the destination.

Completed setup includes:

- selecting Calendly,
- creating and configuring the booking event,
- configuring Google Meet as the meeting location,
- configuring visitor availability,
- reviewing the visitor-facing booking page,
- providing the final canonical URL,
- confirming public access,
- completing a test booking,
- verifying booking confirmation,
- cancelling the test booking through the visitor cancellation link,
- verifying cancellation confirmation.

Calendly account administration and scheduling configuration remain outside the repository.

---

# Booking URL Requirements

The approved canonical URL satisfies the Product requirements:

- it uses HTTPS,
- it is publicly reachable according to Product verification,
- it leads directly to the intended NovaFlow demo-booking experience,
- it does not require a NovaFlow account,
- it is not a placeholder, preview, test, or temporary URL,
- it does not expose private administrative information,
- its visitor-facing purpose is consistent with approved NovaFlow positioning,
- it has been reviewed by the Product Owner,
- its booking and cancellation flows have been tested.

The canonical URL recorded in this document is the source of truth for Final CTA implementation.

---

# Prohibited Destinations

Engineering must not use any of the following as a substitute:

```text
/contact
mailto:
href="#"
javascript:
an alternate Calendly URL
an invented Cal.com URL
an invented booking-provider URL
a temporary preview URL
a placeholder URL
an account-registration route
a checkout route
```

No fallback destination is approved.

If the canonical URL becomes unavailable or must change, the affected conversion implementation must pause until Product approves a replacement.

---

# Relationship to Contact Page Scope

The broader NovaFlow Product Specification includes a future Contact page.

That page remains part of the long-term site scope.

This decision does not:

- remove the future Contact page,
- redefine the Contact page responsibility,
- prohibit a future sales-contact flow,
- make Calendly the only permanent contact mechanism.

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
→ Calendly demo-booking destination

Messaging
→ Final CTA visible copy and CTA wording

Engineering
→ Correct implementation of the approved flow
```

---

# Relationship to Messaging

This document does not own Final CTA headline, supporting copy, or visible button wording.

Those belong to:

```text
docs/messaging/faq-final-cta-footer-v1.md
```

The approved visible action is:

```text
Request a Demo
```

Messaging must not imply:

- guaranteed response times,
- guaranteed availability,
- immediate onboarding,
- trial access,
- account creation,
- purchase completion,
- implementation commitments,
- support commitments,
- sales outcomes.

FAQ question 6 may now be published using its exact approved wording because the external booking destination exists and this Product Decision is Approved.

---

# Relationship to Engineering

Engineering is authorized to implement the complete Final CTA conversion flow.

The Final CTA implementation must:

- use the canonical `#request-demo` section anchor,
- use real link semantics,
- use the exact approved canonical URL,
- preserve accessible focus behavior,
- avoid click handlers when ordinary link navigation is sufficient,
- avoid internal redirects or substitute routes,
- avoid embedding a booking widget unless separately approved.

This document does not require an embedded Calendly widget.

The approved implementation is an external link from the Final CTA button.

Link-opening behavior must follow the approved UI and Engineering conventions without changing the destination.

---

# Implementation Authorization

The previous Final CTA implementation blocker is resolved.

```text
Final CTA button implementation: Authorized
```

The following Session 11 work is now authorized:

- implement Final CTA,
- add `id="request-demo"` to the canonical Final CTA section,
- link the Final CTA button to the approved Calendly URL,
- publish FAQ question 6 unchanged,
- add Footer `Request a Demo → #request-demo`,
- reconcile Navbar CTA to `Request a Demo → #request-demo`,
- reconcile Hero primary CTA to `Request a Demo → #request-demo`,
- validate Pricing CTAs against `#request-demo`,
- validate the full conversion flow.

Engineering must still follow all applicable Architecture, Messaging, Design, and Information Architecture artifacts.

---

# Final URL Record

## Booking Provider

```text
Calendly
```

## Booking Account Owner

```text
Product Owner
```

## Event Name

```text
NovaFlow Introductory Demo
```

## Meeting Duration

```text
30 minutes
```

## Meeting Location

```text
Google Meet
```

## Canonical Booking URL

```text
https://calendly.com/ryanaxondev/novaflow-introductory-demo
```

## Product Approval Date

```text
July 27, 2026
```

## Verification Status

```text
Verified
```

## Verification Record

Product verification completed:

```text
Public booking page opened successfully: Yes
Available booking times displayed: Yes
Test booking completed: Yes
Booking confirmation email received: Yes
Google Meet booking flow confirmed: Yes
Visitor cancellation link tested: Yes
Test booking cancelled successfully: Yes
Cancellation confirmation email received: Yes
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
Final CTA Request a Demo → https://calendly.com/ryanaxondev/novaflow-introductory-demo
```

Also confirm:

- no approved entry point uses `/contact`,
- no entry point uses a placeholder destination,
- every internal anchor exists exactly once,
- the external URL reaches the intended booking experience,
- the Final CTA button label matches the approved Messaging Specification,
- FAQ question 6 uses the approved wording,
- no unsupported claims appear on the NovaFlow Final CTA,
- keyboard focus is visible,
- browser behavior has no console or runtime errors.

---

# Non-Goals

This decision does not authorize:

- creation of a Contact page,
- creation of an internal booking system,
- an embedded Calendly widget,
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

It also does not authorize Engineering to:

- change Calendly account settings,
- change meeting duration,
- change meeting location,
- replace the event,
- replace the provider,
- replace the canonical URL.

---

# Definition of Done

This Product Decision is complete because:

- the external destination model is explicit,
- all internal demo entry points converge on `#request-demo`,
- Final CTA owns the terminal homepage conversion section,
- `/contact` is not required for the current homepage flow,
- Product and Engineering ownership boundaries are explicit,
- prohibited fallback destinations are explicit,
- the exact provider and canonical URL are recorded,
- the event name, duration, and location are recorded,
- the booking page is reviewed,
- booking confirmation is verified,
- visitor cancellation is verified,
- the status is Approved,
- Engineering can implement without inventing a destination.

---

# Approval Effect

Approval of this document:

- authorizes Engineering to implement the complete Final CTA conversion flow,
- makes the recorded Calendly URL the source of truth for the terminal homepage conversion action,
- unblocks FAQ question 6,
- unblocks Footer `Request a Demo`,
- unblocks Navbar and Hero demo-routing reconciliation,
- prohibits any alternate destination without a new Product decision,
- enables final Session 11 integration and validation.
