# NovaFlow

# FAQ + Final CTA + Footer Messaging Specification

## Document Information

**Document Type:** Messaging Specification
**Artifact:** FAQ + Final CTA + Footer
**Version:** v1
**Status:** Approved
**Owner:** Product Messaging

**Depends On:**

- `docs/01-product.md`
- `docs/02-information-architecture.md`
- `docs/information-architecture/homepage-navigation-reconciliation-v1.md`
- `docs/product/social-proof-pricing-decisions-v1.md`
- `docs/product/final-cta-conversion-decision-v1.md`
- `docs/messaging/hero-v1.md`
- `docs/messaging/problem-solution-v1.md`
- `docs/messaging/benefits-features-v1.md`
- `docs/messaging/social-proof-pricing-v1.md`
- `docs/engineering/session-11-architecture-amendment-v1.md`

**Enables:**

- FAQ Implementation
- Final CTA Implementation
- Footer Implementation
- Homepage Messaging Validation
- Session 11 Browser Review

---

# Purpose

This document freezes the visible messaging for the homepage FAQ, Final CTA, and Footer.

It defines:

- the approved FAQ questions and answers,
- the approved Final CTA headline, supporting copy, and CTA label,
- the approved Footer brand statement, navigation labels, and copyright text,
- the messaging boundaries Engineering must preserve.

It does not define:

- visual layout,
- component structure,
- accordion behavior,
- responsive presentation,
- booking-provider selection,
- the external booking URL,
- legal content,
- unavailable routes,
- backend behavior.

No Product, pricing, support, security, billing, legal, or operational policy may be inferred beyond the approved artifacts.

---

# Narrative Role

The three sections complete the homepage journey.

```text
Pricing
↓
FAQ
Reduce practical uncertainty without inventing policy.

↓
Final CTA
Offer one clear next step after the visitor understands the product.

↓
Footer
Close the page with minimal orientation and valid navigation.
```

FAQ, Final CTA, and Footer have distinct responsibilities.

They must not repeat earlier sections at full length or introduce a second product narrative.

---

# Shared Messaging Principles

All three sections must remain:

- clear,
- calm,
- direct,
- specific,
- non-promotional,
- consistent with the approved Product promise,
- free from unsupported claims.

Avoid:

- urgency,
- hype,
- growth promises,
- productivity guarantees,
- outcome guarantees,
- vague superlatives,
- invented policies,
- invented Product capabilities,
- invented routes or destinations.

Do not use phrases such as:

```text
Work smarter
Grow faster
Transform your business
All-in-one platform
Best-in-class
Revolutionize your workflow
Get started for free
Start your free trial
No credit card required
Guaranteed results
```

---

# FAQ Messaging

## FAQ Communication Goal

FAQ should answer the most likely practical questions a qualified homepage visitor can ask using only approved Product and pricing information.

FAQ should:

- clarify the Product category,
- reinforce the intended audience,
- explain the distinction from ordinary task tracking,
- explain the illustrative nature of pricing,
- clarify the current absence of a self-serve trial flow,
- explain the approved demo-booking path.

FAQ must not function as:

- a policy center,
- a billing guide,
- a security page,
- a support agreement,
- a legal document,
- a substitute for missing Product decisions.

---

# FAQ Section Header

## Section Label

```text
FAQ
```

## Headline

```text
Frequently asked questions
```

## Supporting Copy

```text
Answers to common questions about NovaFlow, its approach, and the current demo process.
```

---

# Approved FAQ Content

## 1. What is NovaFlow?

```text
NovaFlow helps growing teams build repeatable systems for recurring work. It brings together the documentation, workflows, templates, metrics, and integrations that support a more consistent way of operating.
```

### Messaging Intent

- restate the approved Product promise,
- connect the promise to the approved capability set,
- avoid describing NovaFlow as a generic task manager.

---

## 2. Who is NovaFlow designed for?

```text
NovaFlow is designed primarily for early-stage founders and growing teams whose work is becoming harder to coordinate consistently as the team expands.
```

### Messaging Intent

- preserve the approved primary and secondary audience,
- connect audience fit to the approved operational problem,
- avoid company-size thresholds or unsupported eligibility rules.

---

## 3. How is NovaFlow different from task-management tools?

```text
Task-management tools usually focus on tracking individual tasks. NovaFlow focuses on making recurring work repeatable by connecting the instructions, workflows, templates, and signals that teams rely on to operate consistently.
```

### Messaging Intent

- explain the category distinction,
- preserve the repeatable-systems positioning,
- avoid claiming that NovaFlow replaces every task-management tool.

---

## 4. How does the illustrative pricing work?

```text
The plans show how NovaFlow’s approved capabilities are grouped across Starter, Pro, and Enterprise. The pricing is illustrative and does not represent a live checkout, billing, or subscription-management flow.
```

### Messaging Intent

- preserve the approved illustrative pricing model,
- distinguish presentation from live commerce,
- avoid creating billing or contractual policy.

---

## 5. Is there a free trial?

```text
A self-serve free trial is not part of the current website experience. You can request a demo to discuss NovaFlow, your team’s workflows, and the illustrative plans.
```

### Messaging Intent

- describe only the current website experience,
- avoid making a permanent Product or commercial-policy claim,
- direct qualified visitors toward the approved demo path.

---

## 6. What happens after I request a demo?

```text
You’ll be taken to NovaFlow’s approved booking page, where you can choose an available time for an introductory conversation about your team’s recurring workflows.
```

### Messaging Intent

- describe the approved external booking model,
- set a clear expectation without promising an outcome,
- avoid response-time, onboarding, implementation, or sales commitments.

### Publication Dependency

This answer is approved as the final messaging for the external demo-booking flow.

It may be rendered only when:

- the external booking page exists,
- the canonical booking URL is approved,
- the Final CTA Product Decision is Approved,
- the `#request-demo` section exists on the homepage.

Before those conditions are met, FAQ may be implemented and published with questions 1–5 only.

Question 6 must be added unchanged in a focused follow-up after the dependency is satisfied.

Engineering must not rewrite this answer, publish it prematurely, or create a substitute destination.

---

# FAQ Content Boundaries

FAQ must not add questions or answers about:

```text
Plan changes
Upgrades or downgrades
Cancellation
Refunds
Taxes
Payment methods
Contracts
Billing dates
User limits
Workspace limits
Storage limits
Implementation timelines
Support response times
SLAs
SSO
Security certifications
Compliance
Data residency
Backups
Incident response
Integrations not already approved
Custom development
Migration guarantees
Onboarding guarantees
```

These topics require Product, Commercial, Security, Legal, or Operational decisions outside this Messaging Specification.

FAQ implementation must use the approved wording exactly, except for punctuation or accessibility-preserving markup that does not change meaning.

---

# FAQ Sequence

Use the approved order:

```text
1. What is NovaFlow?
2. Who is NovaFlow designed for?
3. How is NovaFlow different from task-management tools?
4. How does the illustrative pricing work?
5. Is there a free trial?
6. What happens after I request a demo?
```

The sequence moves from:

```text
Product understanding
↓
Audience fit
↓
Category distinction
↓
Commercial framing
↓
Current access model
↓
Conversion expectation
```

Engineering must not reorder the questions without Messaging approval.

---

# Final CTA Messaging

## Final CTA Communication Goal

Final CTA should give the visitor one calm, explicit next step after the homepage has explained:

- the operational problem,
- NovaFlow’s approach,
- the benefits and capabilities,
- trust signals,
- illustrative pricing,
- practical questions.

Final CTA must not introduce a new promise or a new conversion path.

---

# Approved Final CTA Content

## Headline

```text
Ready to make recurring work repeatable?
```

## Supporting Copy

```text
Start a conversation about how NovaFlow could support your team’s operational workflows.
```

## Primary CTA Label

```text
Request a Demo
```

## Internal Section Anchor

```text
#request-demo
```

## Final CTA Button Destination

```text
Approved external demo-booking URL
```

The exact URL is owned by:

```text
docs/product/final-cta-conversion-decision-v1.md
```

This Messaging Specification does not approve or contain the URL.

---

# Final CTA Messaging Rationale

## Headline

The headline:

- returns to the approved repeatability promise,
- connects directly to the homepage narrative,
- avoids generic productivity or growth language,
- frames the CTA as a natural decision point rather than artificial urgency.

## Supporting Copy

The supporting copy:

- accurately describes the next step as a conversation,
- remains exploratory rather than contractual,
- uses the approved operational-workflow context,
- avoids implying guaranteed fit, implementation, or outcomes.

## CTA Label

`Request a Demo` is the approved dominant homepage conversion label.

Do not replace it with:

```text
Get Started
Start Now
Try NovaFlow
Start for Free
Book a Call
Contact Us
Talk to Sales
Join Now
Create an Account
```

A different label requires a new Messaging decision.

---

# Final CTA Boundaries

Final CTA must not claim or imply:

- immediate access,
- a free trial,
- account creation,
- purchase completion,
- guaranteed availability,
- guaranteed response time,
- same-day contact,
- onboarding,
- implementation,
- pricing confirmation,
- a Product commitment,
- a sales outcome,
- growth or productivity results.

Final CTA must not display:

- an invented provider name,
- an invented booking URL,
- `/contact`,
- `mailto:`,
- a placeholder destination,
- a disabled button presented as functional,
- secondary conversion actions.

---

# Final CTA Implementation Dependency

The Final CTA messaging is approved independently from the exact booking URL.

However, the functional Final CTA button remains blocked until:

- the Final CTA Product Decision records the canonical booking URL,
- that Product Decision changes to `Approved`,
- the destination is verified.

Engineering may not merge a functional Final CTA using a temporary destination.

---

# Footer Messaging

## Footer Communication Goal

Footer should close the homepage with:

- a concise Product reminder,
- a minimal set of valid navigation choices,
- one consistent demo entry point,
- a simple copyright statement.

Footer should not become a second sitemap, resource center, newsletter surface, or legal substitute.

---

# Approved Footer Content

## Brand Name

```text
NovaFlow
```

## Brand Statement

```text
NovaFlow helps growing teams build repeatable systems.
```

This reuses the approved Product promise and introduces no new claim.

---

# Footer Navigation

The approved Footer navigation labels and destinations are:

```text
Features       → #features
Pricing        → #pricing
FAQ            → #faq
Request a Demo → #request-demo
```

The brand may link to:

```text
/
```

The Features, Pricing, and FAQ links may be rendered after their exact section anchors exist.

`Request a Demo` may be rendered in Footer only after the Final CTA section exists with:

```text
id="request-demo"
```

Before that anchor exists, Footer may be implemented and published without the demo link.

Engineering must not create a placeholder target or point the Footer demo link to `/contact`.

Footer navigation is owned by:

```text
docs/information-architecture/homepage-navigation-reconciliation-v1.md
```

This Messaging Specification owns the visible labels only.

---

# Footer Copyright

Use:

```text
© 2026 NovaFlow.
```

No additional rights statement is required for the current milestone.

Do not add:

```text
All rights reserved.
```

unless separately approved.

---

# Footer Content Boundaries

Footer must not add:

```text
Contact
About
Privacy Policy
Terms of Service
Changelog
Documentation
Templates
Guides
Blog
Careers
Security
Status
Newsletter
Social profiles
Email address
Phone number
Physical address
```

These items remain unavailable or unapproved for the current homepage milestone.

They may be introduced only after:

- the corresponding destination exists,
- the owning Product or Information Architecture decision is approved,
- visible wording is approved,
- legal review is completed where applicable.

Footer must not create non-functional links or use placeholder destinations.

---

# Cross-Section Consistency

The following visible labels must remain consistent across the homepage:

```text
Navbar primary CTA → Request a Demo
Hero primary CTA   → Request a Demo
Starter CTA        → Request a Demo
Pro CTA            → Request a Demo
Enterprise CTA     → Contact Sales
Final CTA           → Request a Demo
Footer demo link    → Request a Demo
```

The Enterprise pricing label remains `Contact Sales` because it is already approved by the Social Proof + Pricing Messaging Specification.

Its destination still converges on:

```text
#request-demo
```

Do not normalize `Contact Sales` to `Request a Demo` without revising the owning Pricing Messaging artifact.

---

# Destination Matrix

```text
Navbar Request a Demo     → #request-demo
Hero Request a Demo       → #request-demo
Hero View Pricing         → #pricing
Starter Request a Demo    → #request-demo
Pro Request a Demo        → #request-demo
Enterprise Contact Sales  → #request-demo
Footer Features           → #features
Footer Pricing            → #pricing
Footer FAQ                → #faq
Footer Request a Demo     → #request-demo
Final CTA Request a Demo  → approved external demo-booking URL
```

This matrix freezes messaging-to-destination alignment.

A link may be rendered only after its destination exists. Approved labels do not authorize broken, placeholder, or substitute destinations.

The exact external URL remains outside this Messaging Specification.

---

# Engineering Handoff

Engineering must:

- render the approved copy without rewriting it,
- preserve the approved FAQ order,
- preserve the approved visible CTA labels,
- use the approved internal anchors,
- avoid unsupported Footer items,
- avoid temporary or placeholder destinations,
- preserve semantic heading and link structure,
- ensure interactive controls have accessible names matching the approved visible wording.

Engineering may:

- apply responsive line wrapping,
- use semantic markup,
- add visually hidden accessibility text when it does not change the visible message,
- use punctuation-preserving typography,
- structure FAQ answers into accessible accordion panels.

Engineering must not:

- shorten copy in a way that changes meaning,
- create alternative CTA copy,
- add promotional subcopy,
- add badges or urgency labels,
- add policy disclaimers not present here,
- add visible provider branding without Product and Messaging approval.

---

# Validation Checklist

## FAQ

- [ ] The section label is `FAQ`.
- [ ] The headline is `Frequently asked questions`.
- [ ] The supporting copy matches this specification.
- [ ] Questions appear in the approved order.
- [ ] Answers match the approved text.
- [ ] No unsupported policy question is added.
- [ ] The demo-process answer is not published before the booking destination is approved.

## Final CTA

- [ ] The headline matches exactly.
- [ ] The supporting copy matches exactly.
- [ ] The CTA label is `Request a Demo`.
- [ ] No secondary CTA is added.
- [ ] No unsupported claim is added.
- [ ] The functional button uses only the approved external URL.

## Footer

- [ ] The brand name is `NovaFlow`.
- [ ] The brand statement matches exactly.
- [ ] Only approved navigation labels appear.
- [ ] Every Footer destination exists.
- [ ] No Contact, Legal, resource, newsletter, or social link is invented.
- [ ] Copyright is `© 2026 NovaFlow.`

## Cross-Page

- [ ] CTA labels remain consistent with their owning artifacts.
- [ ] Internal demo links converge on `#request-demo`.
- [ ] No homepage link points to `/contact`.
- [ ] No placeholder URL is present.
- [ ] No Product, policy, legal, support, billing, or security claim is invented.

---

# Non-Goals

This specification does not define or authorize:

- a Contact page,
- legal pages,
- legal copy,
- live billing,
- checkout,
- plan-management policy,
- support policy,
- security claims,
- compliance claims,
- a free-trial program,
- account creation,
- form submission,
- an internal scheduling system,
- booking-provider selection,
- a booking-provider account,
- the canonical booking URL,
- email delivery,
- CRM integration,
- analytics,
- visual layout,
- motion,
- component implementation.

---

# Definition of Done

This Messaging Specification is complete when:

- every visible FAQ question and answer is explicit,
- FAQ content stays within approved Product truth,
- the Final CTA message supports one clear conversion action,
- Footer copy and navigation labels are explicit,
- unsupported Footer destinations are excluded,
- all visible CTA labels are reconciled,
- the external URL remains owned by the Product Decision,
- Engineering can implement without inventing visible content,
- the document introduces no Product, legal, billing, security, support, or commercial policy,
- Markdown formatting is valid,
- `git diff --check` passes.

---

# Approval Effect

Approval of this document freezes:

- FAQ section header copy,
- all six FAQ questions and answers,
- FAQ order,
- Final CTA headline,
- Final CTA supporting copy,
- Final CTA CTA label,
- Footer brand statement,
- Footer navigation labels,
- Footer copyright text,
- messaging-to-destination alignment.

Approval does not:

- approve the external booking URL,
- unblock the functional Final CTA button before the Product Decision is Approved,
- authorize unavailable routes,
- authorize legal content,
- authorize new FAQ topics,
- authorize copy changes outside this document’s explicit scope.
