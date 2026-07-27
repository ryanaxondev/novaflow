# NovaFlow

# Social Proof + Pricing Messaging Specification

## Document Information

**Document Type:** Messaging Specification

**Artifact:** Social Proof + Pricing

**Version:** v1

**Status:** Approved

**Owner:** Product

**Depends On:**

- Product Specification
- Information Architecture
- Benefits + Features Messaging Specification
- Social Proof + Pricing Product Decision Specification

**Enables:**

- Social Proof Section Implementation
- Pricing Section Implementation

---

# Purpose

This document freezes the customer-facing messaging and narrative connection between the homepage Social Proof and Pricing sections.

It translates approved Product and Business decisions into implementation-ready visible copy.

It defines what these sections communicate—not their layout, visual styling, component composition, or engineering implementation.

---

# Narrative Sequence

```text
Features
What does NovaFlow provide?

↓

Social Proof
What could repeatable operations look like in practice?

↓

Pricing
What does NovaFlow cost, and which plan fits?

↓

FAQ
What questions or uncertainties remain?
```

Social Proof and Pricing form one evaluation sequence but remain separate implementation features.

Social Proof demonstrates the intended value of NovaFlow through a transparent illustrative scenario. Pricing then gives visitors a clear, non-binding way to compare the illustrative commercial offer.

---

# Narrative Foundation

- Features establishes what NovaFlow provides.
- Social Proof should make those capabilities easier to understand through one realistic operational scenario.
- Because NovaFlow has no verified customers or traction, credibility must come from transparency rather than simulated adoption.
- Pricing should reduce purchasing uncertainty without implying checkout, account activation, or an active billing commitment.
- The pricing model is illustrative portfolio content and must be disclosed as such.
- The homepage keeps one dominant conversion path toward requesting a demo or making contact.
- Social Proof must not introduce new capabilities, benefits, or performance claims.
- Pricing must not introduce capabilities or commercial terms that were not approved by Product.

---

# Approved Messaging Decisions

Product review approves the following v1 messaging decisions:

- Replace **Trusted by Growing Teams** with language that presents the section as an illustrative operational example rather than real customer validation.
- Do not display customer-logo strips, named customers, portraits, ratings, customer counts, or performance metrics.
- Present the approved employee-onboarding scenario through one qualitative scenario quote and role-based attribution.
- Display a visible disclosure inside Social Proof identifying the content as illustrative portfolio material.
- Preserve the approved Starter, Pro, and Enterprise plan structure.
- Display Starter and Pro prices using monthly flat workspace language.
- Present Pro as **Recommended for growing teams**, not **Most Popular**.
- Use **Request a Demo** for Starter and Pro and **Contact Sales** for Enterprise.
- Route all Pricing CTAs to `#request-demo`.
- Display a visible Pricing disclosure identifying the commercial offer as illustrative portfolio pricing.

These decisions clarify how approved Product decisions are communicated. They do not change product scope or commercial truth.

---

# Social Proof Section

## Narrative Role

Show how NovaFlow's approved capabilities could support one realistic recurring process without implying real customer adoption or verified results.

The section should move visitors from understanding NovaFlow's capabilities to seeing how those capabilities work together in a practical cross-functional scenario.

## User Question

> What could repeatable operations look like in practice?

## Core Message

A structured workflow can make responsibilities, handoffs, instructions, and progress easier to follow across teams involved in recurring operational work.

## Visible Copy in v1

The approved v1 Social Proof section should display only:

- one section headline,
- one concise supporting paragraph,
- one scenario label,
- one qualitative scenario quote,
- one role-based attribution,
- one visible illustrative-content disclosure.

The section must not display:

- customer logos,
- personal or organization names,
- customer portraits,
- numerical metrics,
- ratings,
- customer counts,
- verified-results language.

## Headline

Repeatable operations in practice

## Supporting Copy

Employee onboarding often spans People Operations, IT, and hiring managers. A structured workflow keeps responsibilities, handoffs, guidance, and progress connected from start to finish.

## Scenario Label

Employee Onboarding

## Scenario Quote

> We needed one clear way to run onboarding across teams. A structured workflow made responsibilities, handoffs, and guidance easier to follow from start to finish.

## Role-Based Attribution

**Primary label:**

```text
Operations Lead
```

**Secondary label:**

```text
Illustrative growing-team scenario
```

## Disclosure Copy

```text
Illustrative operational scenario created for this portfolio demonstration.
```

The disclosure is visible copy in v1.

It should remain concise and secondary to the scenario, but it must not be hidden in legal copy, a tooltip, accessibility-only text, or source code.

## Audience Takeaway

> NovaFlow's value becomes easier to understand when its capabilities are applied to a familiar cross-functional process.

This is internal messaging guidance and is not visible copy in v1.

---

# Social-Proof-to-Pricing Transition

Social Proof makes the product's intended value concrete through one transparent operational scenario.

Pricing then helps visitors evaluate which illustrative package best matches their current operational context.

Narrative bridge:

> Once visitors understand how the product could support recurring work, they can compare the level of capability that fits their team.

This is internal messaging guidance and is not visible copy in v1.

The transition must preserve this sequence:

```text
Illustrative operational value
How the capabilities work together

↓

Illustrative commercial offer
How the approved capabilities are packaged
```

---

# Pricing Section

## Narrative Role

Present the approved illustrative commercial offer clearly enough for visitors to compare plans without implying immediate purchase, activation, or binding commercial terms.

Pricing should preserve one dominant conversion path toward a demo or contact conversation.

## User Question

> What does NovaFlow cost, and which plan fits our team?

## Core Message

NovaFlow offers three illustrative packages for teams at different stages of operational maturity, using simple monthly workspace pricing and demo-led conversion.

## Visible Copy in v1

The approved v1 Pricing section should display:

- one section headline,
- one concise supporting paragraph,
- three plan names,
- one audience-focused description per plan,
- approved price and billing language,
- approved capability allocation,
- one recommendation badge for Pro,
- approved CTA labels,
- one visible illustrative-pricing disclosure.

The section must not display:

- annual pricing,
- discounts or savings claims,
- per-seat pricing,
- workspace limits,
- setup fees,
- taxes,
- free-trial language,
- checkout or account-creation language,
- unapproved Enterprise capabilities,
- legal or contractual commitments.

## Headline

Simple pricing for repeatable operations

## Supporting Copy

Compare illustrative packages for early-stage teams, growing teams, and organizations planning a tailored rollout.

## Billing Context

Starter and Pro use flat monthly pricing per workspace. Enterprise uses custom pricing through a commercial discussion.

This is customer-facing guidance. Its exact visual placement is owned by the UI specification and implementation.

---

# Pricing Plans

## Starter

### Plan Name

Starter

### Plan Description

For early-stage teams beginning to document and standardize recurring work.

### Price

```text
$99
```

### Billing Label

```text
per workspace / month
```

### Included Capabilities

- Workflow Design
- Guided Execution
- Centralized Knowledge

### CTA Label

```text
Request a Demo
```

### CTA Destination

```text
#request-demo
```

---

## Pro

### Plan Name

Pro

### Recommendation Badge

```text
Recommended for growing teams
```

### Plan Description

For growing teams coordinating repeatable workflows across more people and responsibilities.

### Price

```text
$299
```

### Billing Label

```text
per workspace / month
```

### Included Capabilities

- Everything in Starter
- Automation & Approvals
- Analytics & Reporting
- Integrations

### CTA Label

```text
Request a Demo
```

### CTA Destination

```text
#request-demo
```

---

## Enterprise

### Plan Name

Enterprise

### Plan Description

For organizations planning a tailored rollout and broader operational adoption.

### Price

```text
Custom
```

### Billing Label

None in v1.

Enterprise must not display `/month`, `per workspace`, or another unapproved billing unit beside **Custom**.

### Included Capabilities

- Everything in Pro
- Tailored rollout planning

**Tailored rollout planning** describes the approved commercial and adoption arrangement. It is not a new NovaFlow product capability.

### CTA Label

```text
Contact Sales
```

### CTA Destination

```text
#request-demo
```

---

# Pricing Disclosure Copy

```text
Illustrative pricing for portfolio demonstration—not an active commercial offer.
```

The disclosure is visible copy in v1.

It should remain concise and secondary to plan comparison, but it must not be hidden in source code, accessibility-only text, a tooltip, or unrelated legal copy.

---

# Pricing-to-FAQ Transition

Pricing establishes the illustrative package structure, prices, capability allocation, and conversion path.

FAQ should then resolve practical questions about the product, pricing model, plan changes, and absence of a free trial without changing the approved commercial offer.

Narrative bridge:

> After comparing the plans, visitors should be able to clarify the remaining practical details before requesting a demo.

This is internal messaging guidance and is not visible copy in v1.

---

# Messaging Boundaries

The messaging must:

- continue naturally from Features without repeating capability descriptions unnecessarily,
- present Social Proof as an illustrative operational scenario rather than verified customer evidence,
- keep all illustrative-content disclosures visible and understandable,
- preserve the approved onboarding scenario and qualitative quote,
- preserve the approved role-based attribution,
- present Pricing as illustrative rather than commercially active,
- preserve USD, monthly cadence, and workspace billing language,
- preserve the approved plan names, prices, audiences, and capability allocation,
- preserve Pro as the recommended plan for growing teams,
- maintain one dominant demo/contact conversion path,
- remain calm, credible, transparent, and easy to scan.

The messaging must not:

- use **Trusted by** or similar adoption language,
- invent real or fictional customer traction,
- display customer logos, portraits, ratings, or metrics,
- imply verified results or guaranteed outcomes,
- use **Most Popular** or another popularity claim,
- introduce unapproved plan capabilities,
- imply that Enterprise includes SSO, audit logs, compliance, advanced permissions, security controls, dedicated infrastructure, or service-level guarantees,
- introduce a free trial,
- imply checkout, account creation, or immediate activation,
- introduce annual billing, discounts, or savings claims,
- add legal, tax, refund, cancellation, or contract commitments,
- create a second conversion path that competes with `#request-demo`,
- copy outdated testimonial, logo, metric, pricing, badge, or CTA wording from the UI image.

---

# Success Criteria

The messaging is successful when a first-time visitor can understand:

- that Social Proof is an illustrative scenario rather than real customer evidence,
- how NovaFlow's approved capabilities could work together in a recurring onboarding process,
- what each Pricing plan is intended for,
- what Starter and Pro cost per workspace each month,
- that Enterprise uses custom pricing,
- which approved capabilities are included at each level,
- why Pro is recommended for the primary growing-team audience,
- that the next step is a demo or contact conversation rather than checkout,
- that the pricing shown is illustrative portfolio content.

The artifact must also satisfy these conditions:

- All visible Social Proof content comes from the approved Product dataset.
- No customer, organization, logo, portrait, or metric is invented during implementation.
- All plan names, prices, billing labels, capabilities, recommendation language, CTAs, and destinations are explicitly defined.
- Social Proof and Pricing remain understandable without relying on decorative visuals.
- Social Proof increases clarity without pretending to establish commercial traction.
- Pricing reduces uncertainty without implying an active commercial service.
- FAQ can follow without changing or duplicating the approved offer.

---

# Out of Scope

This document does not define:

- layout or visual hierarchy,
- typography, colors, spacing, or responsive behavior,
- card composition,
- icon or illustration selection,
- whether the scenario uses a diagram or static interface preview,
- component ownership or shared primitives,
- interaction or animation behavior,
- checkout, billing, authentication, or account functionality,
- legal or contractual terms,
- FAQ questions and answers,
- engineering implementation.

These decisions remain owned by existing or future approved artifacts.

---

# Exit Condition

This artifact is complete because:

- all Social Proof visible copy is explicitly reviewed and approved,
- the illustrative disclosure is clear and visible,
- the onboarding scenario, quote, and attribution remain faithful to the Product Decision Specification,
- all Pricing visible copy is explicitly reviewed and approved,
- plan names, audiences, prices, billing labels, capability allocation, recommendation wording, CTA labels, and destinations are frozen,
- the illustrative-pricing disclosure is clear and visible,
- Social Proof flows naturally from Features,
- Pricing flows naturally from Social Proof,
- FAQ can follow without changing the approved commercial model,
- Engineering can implement both sections without inventing customer evidence, commercial terms, or customer-facing wording,
- no new Product or Business decisions have been introduced.

No unresolved Messaging decisions remain within the scope of this artifact.
