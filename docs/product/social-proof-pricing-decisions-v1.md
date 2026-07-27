# NovaFlow

# Social Proof + Pricing Product Decision Specification

## Document Information

**Document Type:** Product Decision Specification

**Artifact:** Social Proof + Pricing

**Version:** v1

**Status:** Approved

**Owner:** Product

**Depends On:**

- Product Specification
- Information Architecture
- Homepage Wireframe Specification

**Enables:**

- Social Proof + Pricing Messaging Specification
- Social Proof Section Implementation
- Pricing Section Implementation

---

# Purpose

This document freezes the Product and Business decisions required before customer-facing messaging can be written for the homepage Social Proof and Pricing sections.

It defines what is true about NovaFlow's proof model and illustrative commercial offer.

It does not define customer-facing wording, layout, visual styling, or engineering implementation.

---

# Decision Scope

This artifact owns decisions about:

- the authenticity and source of Social Proof content,
- which scenario-quote, organization-mark, and metric formats are permitted,
- disclosure requirements,
- prohibited customer and performance claims,
- the commercial status of the pricing model,
- currency, billing unit, and billing cadence,
- plan structure and intended audiences,
- price presentation,
- capability allocation,
- recommendation logic,
- demo or trial policy,
- Pricing CTA labels and destinations,
- commercial disclaimers.

The Homepage UI image remains a visual-composition reference only.

Names, logos, testimonials, metrics, plan names, prices, recommendation labels, and CTA labels visible in that image are not Product decisions unless explicitly approved in this document.

---

# Approved Inputs from Existing Artifacts

The following decisions were already approved before this artifact:

- Social Proof follows Features and precedes Pricing.
- Social Proof exists to increase confidence and answer why visitors should trust the product.
- Trust should come from clear product vision, thoughtful execution, realistic business scenarios, and production-ready presentation.
- Pricing follows trust building and precedes FAQ.
- Pricing exists to reduce purchasing uncertainty.
- The offer should use simple pricing that can grow with the customer.
- Visitors should be able to compare plans quickly and understand what each includes.
- The homepage maintains one dominant conversion path toward requesting a demo or making contact.
- NovaFlow does not include authentication, billing, backend product functionality, or an active checkout experience in v1.

This artifact approves the remaining Social Proof and Pricing decisions below.

---

# Social Proof Model

## Proof Source

**Approved Decision:** Use clearly disclosed illustrative portfolio proof rather than presenting fictional evidence as real customer validation.

NovaFlow is a portfolio SaaS concept and does not currently have verified customers, customer testimonials, usage metrics, or review data.

The Social Proof section must not imply otherwise.

## Content Authenticity

All illustrative proof content must be fictional, documented as such, and presented without implying real customer adoption.

The implementation must not use:

- the name of a real customer,
- a real company logo,
- a quote attributed to a real person,
- a real person's photograph,
- a generated customer portrait presented as a real person,
- customer counts,
- satisfaction scores,
- ratings,
- revenue results,
- time-saved claims,
- productivity improvements,
- onboarding multipliers,
- other quantitative performance claims.

## Allowed Proof Types

**Approved v1 model:**

- one fictional operational scenario,
- one qualitative scenario quote connected to that scenario,
- one role-based attribution,
- one visible disclosure identifying the content as illustrative.

The Social Proof section must not include:

- a fictional customer-logo strip,
- a named fictional customer,
- a named fictional organization,
- a portrait or generated customer photograph,
- quantitative metrics,
- ratings,
- customer counts.

The scenario quote may describe the intended value of repeatable operations, but it must not claim measured, verified, or guaranteed results.

## Disclosure Policy

A disclosure must be visible within the Social Proof section.

**Approved disclosure category:**

```text
Illustrative operational scenario for portfolio demonstration
```

The final customer-facing sentence belongs to the Messaging Specification.

The disclosure must not be hidden in legal copy, tooltips, accessibility-only text, or source code.

## Approved Proof Dataset

### Scenario

A growing team is standardizing employee onboarding across People Operations, IT, and hiring managers.

The scenario reflects a recurring cross-functional process in which responsibilities, handoffs, instructions, and progress need to remain clear.

### Role-Based Attribution

```text
Operations Lead
Illustrative growing-team scenario
```

No personal name, organization name, customer logo, or portrait is used in v1.

### Qualitative Scenario Quote

> We needed one clear way to run onboarding across teams. A structured workflow made responsibilities, handoffs, and guidance easier to follow from start to finish.

The quote is illustrative portfolio content. It does not represent feedback from a real NovaFlow customer.

### Organization Marks

None in v1.

### Metrics

None in v1.

### Disclosure Requirement

A visible disclosure must identify the scenario as illustrative portfolio content.

Approved disclosure category:

```text
Illustrative operational scenario for portfolio demonstration
```

The exact visible sentence belongs to the Social Proof + Pricing Messaging Specification.

The disclosure must appear within the Social Proof section and must not be hidden in legal copy, a tooltip, accessibility-only text, or source code.

## Prohibited Claims

The Social Proof section must not display or imply:

- “Trusted by” language that suggests real customer adoption,
- logos presented as real customers,
- named fictional customers presented in testimonial form,
- guaranteed outcomes,
- verified numerical improvements,
- customer satisfaction percentages,
- review scores or review counts,
- market leadership,
- active commercial traction,
- enterprise adoption,
- compliance or security certifications not separately approved.

---

# Pricing Model

## Commercial Status

**Approved Decision:** Present a realistic but explicitly illustrative pricing model for portfolio demonstration.

NovaFlow is not an active commercial SaaS offer and does not provide checkout, billing, account creation, or product access in v1.

Pricing supports evaluation and demo-led contact rather than immediate purchase or activation.

## Currency

**Approved Decision:** Display prices in USD.

Reason:

- NovaFlow is positioned as an international B2B SaaS concept.
- USD is the clearest default display currency for the intended portfolio audience.

The Pricing section must not introduce additional currencies or currency conversion controls in v1.

## Billing Unit

**Approved Decision:** Use flat workspace pricing rather than per-seat pricing.

Reason:

- NovaFlow's value is tied to shared operational systems rather than individual task seats.
- Flat workspace packaging reinforces repeatability over seat-count complexity.

Exact workspace limits are not defined in v1 and must not be invented in Messaging or Implementation.

## Billing Cadence

**Approved Decision:** Display monthly pricing only in homepage v1.

Do not introduce:

- monthly/annual toggles,
- annual discounts,
- billing-period interaction,
- prepaid commitments.

These would require additional commercial decisions and client-side interaction.

## Plan Structure

**Approved Decision:** Use three plans.

1. Starter
2. Pro
3. Enterprise

This structure supports quick comparison across early-stage, growing-team, and tailored organizational contexts.

## Plan Audiences

### Starter

Early-stage teams beginning to document and standardize recurring work.

### Pro

Growing teams coordinating repeatable workflows across more people and responsibilities.

### Enterprise

Organizations that require a tailored rollout, commercial discussion, or broader operational adoption.

## Price Points

**Approved Decision:** Use the following illustrative homepage price points:

- Starter: **$99/month per workspace**
- Pro: **$299/month per workspace**
- Enterprise: **Custom**

These values are illustrative portfolio pricing rather than active charges or binding commercial terms.

The Messaging Specification may determine concise visible formatting, but it must preserve:

- the approved amounts,
- monthly cadence,
- workspace billing unit for Starter and Pro,
- custom pricing for Enterprise.

Pricing must not add setup fees, taxes, discounts, savings claims, annual equivalents, or contractual commitments.

## Capability Allocation

Plan allocation uses only approved NovaFlow capability categories:

- Workflow Design
- Guided Execution
- Centralized Knowledge
- Automation & Approvals
- Analytics & Reporting
- Integrations

### Starter

Core repeatable-work foundation:

- Workflow Design
- Guided Execution
- Centralized Knowledge

### Pro

All Starter capabilities, plus:

- Automation & Approvals
- Analytics & Reporting
- Integrations

### Enterprise

All Pro capabilities, with a tailored commercial discussion and rollout-planning arrangement.

The tailored Enterprise arrangement is a packaging and adoption decision, not a new product capability.

The homepage must not invent unapproved capabilities such as:

- SSO,
- audit logs,
- advanced permissions,
- compliance certifications,
- custom security controls,
- dedicated infrastructure,
- service-level guarantees.

Any future support, onboarding, limit, governance, security, or service-level distinction requires separate Product approval.

## Recommended Plan

**Approved Decision:** Pro is the recommended plan.

Reason:

- it contains the complete approved capability set,
- it is the most relevant package for NovaFlow's primary growing-team audience,
- it represents the central product promise without presenting Enterprise as the default.

The recommendation must remain informative and must not use urgency, scarcity, or dark-pattern language.

The UI must not use **Most Popular**, because NovaFlow has no verified customer-selection data.

**Approved recommendation category:**

```text
Recommended for growing teams
```

The exact visible badge wording belongs to the Messaging Specification.

## Trial and Demo Policy

**Approved Decision:** Use demo-led conversion with no free trial in v1.

Reason:

- NovaFlow has no implemented product access, authentication, onboarding, or billing flow,
- a trial CTA would imply functionality outside the approved scope,
- Request a Demo is the dominant approved conversion path.

Pricing must not use:

- Start Free Trial,
- Start Now,
- Buy Now,
- Create Account,
- Choose Plan language that implies immediate activation.

## CTA Labels

**Approved Decision:**

- Starter: **Request a Demo**
- Pro: **Request a Demo**
- Enterprise: **Contact Sales**

The labels support evaluation and contact without implying checkout or account activation.

## CTA Destination

**Approved Decision:** All Pricing CTAs use the canonical homepage destination:

```text
#request-demo
```

This anchor is owned by the approved Final CTA section and represents NovaFlow's single dominant demo/contact conversion path.

Starter and Pro use the `Request a Demo` label. Enterprise uses the `Contact Sales` label but routes to the same contact destination.

The Final CTA implementation must expose the exact `request-demo` anchor so the completed homepage contains no broken destination.

No Pricing CTA may link to checkout, account creation, trial access, or an unapproved placeholder URL.

## Pricing Disclosure

A visible disclosure must clarify that the displayed prices form an illustrative portfolio offer rather than an active billing commitment.

**Approved disclosure category:**

```text
Illustrative pricing for portfolio demonstration
```

The exact customer-facing sentence belongs to the Messaging Specification.

The disclosure must remain visible, concise, and secondary to plan comparison. It must not be hidden in source code, accessibility-only text, a tooltip, or unrelated legal copy.

---

# Product Boundaries

This artifact must not:

- invent real customers or commercial traction,
- approve claims that cannot be verified,
- convert placeholder UI content into Product truth without review,
- introduce checkout, account creation, trial access, or billing logic,
- introduce pricing toggles or annual-discount mechanics,
- add product capabilities solely to differentiate pricing plans,
- contradict NovaFlow's distinction from general-purpose task-management tools,
- introduce legal, tax, refund, cancellation, or contract commitments not separately reviewed,
- define visual layout, typography, spacing, iconography, or component composition,
- define final customer-facing copy.

---

# Approved Product Decisions

## Social Proof

1. Clearly disclosed illustrative operational proof.
2. No fictional organization-logo strip.
3. No named fictional customer or organization.
4. No portrait or generated customer photograph.
5. One approved employee-onboarding operational scenario.
6. One approved qualitative scenario quote.
7. Role-based attribution only.
8. No quantitative metrics, ratings, or customer counts.
9. Visible illustrative-content disclosure within the section.
10. The approved Social Proof disclosure category defined above.

## Pricing

1. Explicitly illustrative commercial model.
2. USD display currency.
3. Flat workspace pricing rather than per-seat pricing.
4. Monthly-only price presentation.
5. Three plans: Starter, Pro, and Enterprise.
6. Starter at $99/month per workspace.
7. Pro at $299/month per workspace.
8. Enterprise at Custom pricing.
9. Approved capability allocation across plans.
10. Pro as the recommended plan.
11. Recommendation category: Recommended for growing teams.
12. Demo-led conversion with no free trial.
13. Starter and Pro CTA label: Request a Demo.
14. Enterprise CTA label: Contact Sales.
15. Canonical CTA destination: `#request-demo`.
16. Visible illustrative-pricing disclosure within the Pricing section.
17. The approved Pricing disclosure category defined above.

---

# Exit Condition

This artifact is complete because:

- the Social Proof source and authenticity model are approved,
- all permitted and prohibited proof formats are explicit,
- the complete proof dataset is approved,
- Social Proof disclosure requirements are approved,
- currency, billing unit, and cadence are approved,
- plan structure, audiences, prices, and allocation are approved,
- recommended-plan logic is approved,
- trial and demo policy is approved,
- CTA labels and destination are approved,
- pricing-disclosure requirements are approved,
- Messaging can proceed without inventing Product or Business decisions,
- UI and Engineering can later implement the approved offer without adding commercial assumptions.

No unresolved Product or Business decisions remain within the scope of this artifact.
