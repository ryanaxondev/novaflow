# NovaFlow

# Homepage Product Visualization

## Document Information

**Document Type:** Product Visualization Specification
**Artifact:** Homepage Product Visualization
**Version:** v1
**Status:** Approved
**Owner:** Product / Design

**Depends On:**

- `docs/01-product.md`
- `docs/02-information-architecture.md`
- `docs/information-architecture/homepage-navigation-reconciliation-v1.md`
- `docs/03-design-philosophy.md`
- `docs/product/social-proof-pricing-decisions-v1.md`
- `docs/messaging/hero-v1.md`
- `docs/messaging/problem-solution-v1.md`
- `docs/messaging/benefits-features-v1.md`
- `docs/messaging/social-proof-pricing-v1.md`
- `design/wireframes/homepage-wireframe-v1.md`
- `design/wireframes/session-13-problem-benefits-amendment-v1.md`
- `design/ui/visual-direction-v2.md`
- `design/ui/session-13-homepage-ui-amendment-v1.md`
- `docs/brand/novaflow-homepage-brand-expression-v1.md`
- Session 13.1 Visual Design and Brand Expression Audit

**Review References:**

- `design/references/session-13/README.md`

---

# Status and Authority

This document is:

```text
Status: Approved
```

The Product Owner has approved:

- Employee onboarding as the canonical Product scenario,
- the Product-interface label set in this artifact,
- the relationship between the four Product views,
- the truthfulness boundary,
- the high-fidelity visual references.

This authority is limited to illustrative homepage Product visualization. It
does not authorize functional Product implementation.

---

# Purpose

This document defines one coherent illustrative Product scenario for use across the NovaFlow homepage.

The visualization should:

- make NovaFlow's Product logic easier to understand,
- show how recurring work becomes structured and repeatable,
- provide credible Product evidence without pretending a complete production application exists,
- continue one visual story across multiple homepage sections,
- remain secondary to approved Messaging as a source of Product truth.

The visualization must not redefine Product scope.

---

# Product-Scope Boundary

The approved Product Specification lists a production dashboard and Product functionality as non-goals for the current website.

Therefore, the approved visualization:

- is illustrative marketing evidence,
- is not a claim that a complete application exists,
- is not a functional dashboard,
- does not authorize authentication, accounts, data persistence, workflow execution, reporting, integrations, or backend behavior,
- must remain understandable as a carefully constructed Product concept.

If a high-fidelity visual implies live Product functionality beyond the approved Product scope, Product approval must stop until the implication is removed or the owning Product artifact is amended.

---

# Canonical Scenario

Use:

```text
Employee onboarding
```

The approved visible scenario label is:

```text
Employee Onboarding
```

The scenario progressively appears as:

```text
Hero:
system overview

Solution:
how recurring work becomes a structured workflow

Features:
ownership, guidance, reusable templates, approvals, visibility, integrations

Social Proof:
cross-functional operating model
```

---

# Scenario Rationale

Employee onboarding is appropriate because it:

- is already approved in Social Proof Messaging,
- is a recurring operational process,
- involves multiple roles,
- contains clear steps and handoffs,
- can demonstrate guidance and approvals without inventing a new Product category,
- supports the approved illustrative scenario without requiring customer evidence.

The scenario does not introduce a new Product claim.

---

# Continuity Rule

The same workflow identity must persist through all Product previews.

Continuity includes:

- the same scenario name,
- the same conceptual workflow,
- the same role vocabulary,
- compatible state language,
- the same Product visual grammar,
- progressive disclosure rather than unrelated replacement examples.

Do not switch to:

```text
purchase request
expense approval
sales pipeline
content publishing
incident response
```

unless a future Product decision explicitly changes the canonical scenario.

---

# Narrative Progression

## Hero

The visitor sees the complete operational system at a glance.

## Solution

The visitor sees how scattered recurring work becomes a reusable structure.

## Features

The visitor sees where the six approved capabilities appear within that structure.

## Social Proof

The visitor sees how the same workflow coordinates roles and handoffs across a realistic growing-team scenario.

The progression must not imply that the visitor is seeing four different products.

---

# Truthfulness Requirements

All Product visuals are illustrative.

They must not imply:

- active customers,
- completed third-party integrations,
- real employee records,
- production usage,
- measured performance gains,
- real organizational data,
- compliance certification,
- security guarantees,
- implementation completion,
- live workflow automation,
- live analytics,
- a functioning authenticated application.

The existing Social Proof disclosure remains required:

```text
Illustrative operational scenario created for this portfolio demonstration.
```

The visualization must not add a second disclosure that changes or competes with the approved wording.

---

# Data and Identity Rules

Do not use:

- real names,
- fictional personal names,
- company names,
- email addresses,
- phone numbers,
- avatars that imply real people,
- specific dates,
- percentages,
- performance metrics,
- customer counts,
- integration logos,
- realistic confidential records.

Role labels may be used when approved.

Non-numeric state language is preferred over fabricated progress data.

---

# Current Product UI Copy Inventory

## Inventory Scope

This inventory records current visible labels used inside or immediately attached to Product visualization in:

- `src/components/marketing/Hero.tsx`
- `src/components/marketing/Features.tsx`
- `src/components/marketing/SocialProof.tsx`

Approved long-form marketing headings, paragraphs, feature descriptions, and the scenario quote remain owned by their Messaging Specifications and are not reclassified as Product-interface copy here.

Accessibility-only text is noted separately because it is not visible UI copy.

## Classification Definitions

```text
Approved and reusable:
Exact wording already approved by an owning Product or Messaging artifact.

Inconsistent with onboarding scenario:
Current wording belongs to another workflow or conflicts with the canonical scenario.

Generic but acceptable:
The term is broadly understandable and compatible with the scenario, but its final visible use still requires Product/UI review.

Not approved for reuse:
Current wording is implementation-created, data-like, or otherwise excluded from the approved Product-interface copy.
```

## Hero Inventory

| Current visible label | Classification | Approved disposition |
| --- | --- | --- |
| `Onboarding New Employee` | Not approved for reuse | Replace with approved scenario label `Employee Onboarding` |
| `Active` | Generic but not selected | Replace with approved coherent status `In progress` |
| `Invite` | Not approved for reuse | Do not reuse |
| `Collect Info` | Not approved for reuse | Replace with approved `Collect information` |
| `Setup` | Generic but not selected | Replace with the approved clearer step label |
| `Equip` | Not approved for reuse | Do not reuse; ambiguous |
| `Access` | Generic but not selected | Replace with approved `Set up access` |
| `Welcome` | Approved for final sequence | Use only in the approved sequence |
| `Setup checklist` | Generic but not selected | Use the approved broader guidance label |
| `2 of 4 complete` | Not approved for reuse | Do not reuse; approved vocabulary avoids fabricated numeric progress |
| `Create accounts` | Not approved for reuse | Do not reuse in the minimal label set |
| `Assign licenses` | Not approved for reuse | Do not reuse; may imply unapproved license administration |
| `Configure workspace` | Not approved for reuse | Do not reuse; may imply unapproved Product or integration behavior |
| `Add to groups` | Not approved for reuse | Do not reuse; may imply unapproved directory behavior |
| `Workflow details` | Generic but acceptable | May be replaced by more specific grouped labels |
| `Owner` | Generic but acceptable | Reusable interface noun after Product review |
| `People Operations` | Approved and reusable | Approved role vocabulary; placement must still match the scenario |
| `Started` | Generic but acceptable | Do not use with a fabricated date |
| `May 6` | Not approved for reuse | Do not reuse; specific dates are prohibited |
| `Due` | Generic but acceptable | Omit from minimal label set unless a later Product decision requires it |
| `May 10` | Not approved for reuse | Do not reuse; specific dates are prohibited |
| `Progress` | Generic but acceptable | Replace numeric presentation with non-numeric state language |
| `40%` | Not approved for reuse | Do not reuse; fabricated numeric progress is prohibited |

## Features Product-Preview Inventory

| Current visible label | Classification | Approved disposition |
| --- | --- | --- |
| `Workflow builder` | Generic but acceptable | May be represented by the approved capability `Workflow Design` rather than new Product chrome copy |
| `Draft` | Generic but not selected | Replace with the approved coherent workflow status |
| `Purchase request` | Inconsistent with onboarding scenario | Remove from all homepage Product views |
| `3 steps` | Not approved for reuse | Do not reuse; the approved system avoids fabricated numeric data |
| `Submit request` | Inconsistent with onboarding scenario | Remove |
| `Review request` | Inconsistent with onboarding scenario | Remove |
| `Complete` | Approved in the final state vocabulary | Use only in the approved onboarding context |
| `Owner` | Generic but acceptable | Reusable interface noun after review |
| `Operations` | Inconsistent with onboarding scenario | Replace with the approved, more specific `People Operations` where applicable |
| `Guidance` | Generic but not selected | Use the approved visible phrase `Onboarding guidance` |
| `Attached` | Generic but acceptable | Do not freeze; may imply a specific attachment model |
| `Handoff` | Generic but not selected | Retain as a concept, not additional visible Product copy |
| `Automated` | Not approved for reuse | Do not use as a state because it implies executed automation |

## Features Approved Marketing Labels

The following labels are already approved as visible capability names:

```text
Workflow Design
Guided Execution
Centralized Knowledge
Automation & Approvals
Analytics & Reporting
Integrations
```

They may be used as capability callouts without rewriting.

Using them as Product navigation, internal module names, or functional controls would be a new context and still requires Product/UI review.

## Social Proof Inventory

| Current visible label | Classification | Approved disposition |
| --- | --- | --- |
| `Employee Onboarding` | Approved and reusable | Canonical scenario label |
| `Operations Lead` | Approved and reusable | Preserve only as the approved scenario attribution |
| `Illustrative growing-team scenario` | Approved and reusable | Preserve as approved secondary attribution |
| `Illustrative operational scenario created for this portfolio demonstration.` | Approved and reusable | Preserve exactly and visibly |

The current Social Proof diagram contains icons without additional visible internal labels.

Its approved quote and supporting paragraph remain Messaging content, not Product-interface copy.

## Current Accessibility-Only Labels

The current Hero also includes accessibility-only state wording:

```text
Workflow sequence
Current
completed
pending
Completed:
Pending:
Workflow progress
```

These strings describe current semantics but do not authorize future visible UI copy.

Any revised accessible description must remain accurate to the final approved visualization.

---

# Minimal Coherent Label Set

The approved Product views use the smallest label set necessary to communicate:

- workflow identity,
- status,
- sequence,
- ownership,
- guidance,
- approval,
- progress,
- template identity,
- reporting visibility,
- connected-tool boundary.

## Approved Existing Labels

The following exact existing approved wording anchors the visualization:

```text
Employee Onboarding
People Operations
IT
Workflow Design
Guided Execution
Centralized Knowledge
Automation & Approvals
Analytics & Reporting
Integrations
```

`Operations Lead`, `Illustrative growing-team scenario`, and the approved disclosure remain specific to Social Proof attribution and must not be repurposed as Product navigation or workflow-node labels.

---

# Approved Product-Interface Copy

Every exact string in this section is approved for the illustrative homepage
Product visualization.

## Workflow Status

```text
In progress
```

Purpose:

- replaces the current generic `Active`,
- communicates state without a percentage,
- avoids implying completion or measured performance.

## Workflow Steps

```text
Prepare
Collect information
Set up access
Confirm readiness
Welcome
```

Purpose:

- provides a concise onboarding sequence,
- avoids purchase-request language,
- supports multiple roles,
- remains understandable without detailed records.

## Step States

```text
Complete
Current
Upcoming
```

Purpose:

- communicates progression without percentages or dates,
- supports text, icon, shape, and color state cues.

## Owner Role

```text
Hiring Manager
```

Purpose:

- provides a concise role-node label derived from the approved phrase `hiring managers`,
- is approved as the concise role-node label derived from the approved phrase `hiring managers`.

The exact approved role terms `People Operations` and `IT` require no wording change.

## Guidance

```text
Onboarding guidance
```

Purpose:

- demonstrates Centralized Knowledge,
- avoids detailed invented instructions,
- connects guidance directly to the canonical scenario.

## Approval State

```text
Awaiting approval
Approved
```

Purpose:

- demonstrates Automation & Approvals without claiming a real executed event,
- allows a visible state transition in static form.

## Progress

```text
Current step
```

Purpose:

- indicates progress without fabricated counts, dates, or percentages.

## Template Identity

```text
Employee Onboarding Template
```

Purpose:

- demonstrates a reusable workflow structure,
- uses the canonical scenario identity,
- is approved as the reusable template-identity label.

## Reporting Visibility

```text
Workflow visibility
```

Purpose:

- demonstrates Analytics & Reporting without numerical claims,
- indicates shared state rather than a live analytics dashboard.

## Integration Boundary

```text
Connected tools
```

Purpose:

- demonstrates Integrations without naming a third party,
- avoids implying that a specific integration is active.

## Copy Restraint Rule

No additional Product-interface text should be introduced during visual design without being added to this approval list or an approved successor.

Decorative microcopy, invented tooltips, fake activity logs, names, dates, and metrics are prohibited.

---

# Product Vocabulary Model

The approved coherent vocabulary is:

| Product concept | Approved visible vocabulary |
| --- | --- |
| Workflow identity | `Employee Onboarding` |
| Workflow status | `In progress` |
| Steps | `Prepare`, `Collect information`, `Set up access`, `Confirm readiness`, `Welcome` |
| Step states | `Complete`, `Current`, `Upcoming` |
| Owners | `People Operations`, `IT`, `Hiring Manager` |
| Guidance | `Onboarding guidance` |
| Approval | `Awaiting approval`, `Approved` |
| Progress | `Current step` |
| Template identity | `Employee Onboarding Template` |
| Reporting visibility | `Workflow visibility` |
| Integration boundary | `Connected tools` |

This table is approved Product-interface vocabulary for illustrative homepage
visualization only; it does not define a functional application.

---

# Visual View 1 — Hero System Overview

## Purpose

Show the canonical workflow as a coherent operational system.

## Shows

- workflow identity,
- current stage,
- owners,
- non-numeric progress,
- connected system modules,
- the approved NovaFlow mark inside Product chrome only if Brand approval is granted.

## Approved Composition

The view should:

- sit inside the deep navy Product workbench,
- use layered light Product panels,
- present one clear active path,
- relate current step, guidance, ownership, approval, visibility, and connected tools as one system,
- use available detail space intentionally without adding fabricated data,
- show enough context to feel credible,
- avoid becoming a generic analytics dashboard.

## Does Not Show

- personal records,
- dates,
- percentages,
- customer data,
- integration logos,
- live notifications,
- fabricated activity.

---

# Visual View 2 — Solution Workflow Structure

## Purpose

Show how recurring work becomes a structured workflow.

## Shows

- standardized steps,
- meaningful system relationships,
- reusable sequence,
- transition from fragmented to structured,
- the ordered relationship between Standardize, Systematize, and Scale.

## Approved Composition

This view should continue the visual fragments introduced by Problem and resolve them into:

```text
one workflow identity
one ordered sequence
clear ownership
connected guidance and approvals
```

## Does Not Show

- a generic three-icon arrow,
- a new scenario,
- detailed capability callouts that belong to Features,
- Product metrics.

---

# Visual View 3 — Features Capability View

## Purpose

Show approved capabilities through visible Product areas rather than six unrelated decorative icons.

## Shows

- Workflow Design through the reusable onboarding sequence,
- Guided Execution through current step and owner context,
- Centralized Knowledge through onboarding guidance,
- Automation & Approvals through an illustrative approval state,
- Analytics & Reporting through non-quantified workflow visibility,
- Integrations through a generic connected-tool boundary.

## Approved Composition

- one large Operational Product canvas,
- capability callouts aligned to the relevant Product area,
- exact approved capability names outside or beside the canvas,
- the same workflow identity used in Hero.

## Does Not Show

- purchase requests,
- a generic dashboard,
- unapproved module navigation,
- charts with fake values,
- branded third-party integrations.

---

# Visual View 4 — Cross-Functional Scenario View

## Purpose

Show the same employee-onboarding workflow across responsible roles and handoffs.

## Shows

- People Operations,
- IT,
- Hiring Manager,
- workflow handoffs,
- shared guidance,
- visible non-numeric state,
- continuity of the same workflow.

## Truthfulness Treatment

The view must remain clearly illustrative.

It must not look like:

- testimonial evidence,
- a customer case study,
- a live account,
- verified performance reporting.

The approved Social Proof disclosure remains visible and unchanged.

The role-and-handoff model is the primary evidence. The disclosure must appear
before or immediately beside the scenario framing, the approved quote is
treated as an operating observation, and `Operations Lead` must not be styled
as a customer identity.

---

# Relationship Between Views

The four views should share:

- the same scenario title,
- the same step vocabulary,
- the same owner vocabulary,
- the same state system,
- the same visual node language,
- the same Product-surface hierarchy.

They may vary:

- crop,
- density,
- focal area,
- amount of contextual Product chrome,
- responsive composition.

They must not vary in a way that suggests different Product models.

---

# Implementation Form

Preferred:

```text
server-rendered HTML
CSS
small accessible SVG connectors
```

Avoid:

```text
video
canvas
3D
large raster screenshot
client-side animation framework
```

The default implementation should preserve Server Component ownership.

Visual design must not require client-side state.

Any component or primitive API required to realize the views remains owned by Engineering Architecture.

---

# Raster Reference Boundary

If raster references are later approved:

- provide AVIF or WebP,
- include explicit intrinsic dimensions,
- use responsive `sizes`,
- avoid text too small to remain legible after responsive scaling,
- lazy-load below-fold images,
- prioritize only the above-fold Product visual,
- keep the above-fold visual within the approved performance budget,
- ensure the raster remains illustrative and does not introduce unapproved copy.

High-fidelity design reference images are review artifacts.

They are not automatically approved production assets.

---

# Accessibility Requirements

- Approved marketing copy must remain understandable without the Product visualization.
- Product visuals that repeat adjacent meaning may be marked decorative.
- Product visuals that add unique relationships require an accessible description.
- Decorative grids and connectors must be hidden from assistive technology.
- Workflow state must not rely on color alone.
- Step order and ownership must remain understandable in source order.
- Product labels must remain readable at 320px.
- Narrow layouts must recompose rather than create inaccessible horizontal scrolling.
- Reduced motion must preserve the complete static state.
- The approved Social Proof disclosure must remain visible, not accessibility-only.

---

# Responsive Requirements

## Desktop

- Hero may show the broadest system overview.
- Features may show capability callouts around a large Product canvas.
- Social Proof may show multiple role columns or lanes.

## Tablet

- Preserve workflow continuity.
- Reduce secondary Product chrome before reducing label legibility.
- Avoid dense callout collisions.

## Mobile

- Recompose into a clear vertical sequence.
- Preserve canonical scenario identity.
- Show a compact current-state summary early in Hero.
- Do not proportionally shrink the desktop workbench.
- Keep Product labels approximately `12px` or larger.
- Allow guidance to span the available width.
- Recompose ownership, approval, visibility, and connected tools into a compact readable summary.
- Convert multi-lane handoffs into ordered role rows or steps.
- Avoid simple proportional shrinking.
- Avoid horizontal-scroll dependence.
- Preserve Product evidence rather than hiding it.

---

# Performance Budget

Implementation budget:

```text
Additional client-side JavaScript:
0 KB target

New Product-visual animation dependency:
None

Above-fold Product visual:
≤ 250 KB compressed if rasterized

Total new initially requested visual assets:
≤ 600 KB compressed

Individual supporting SVG:
≤ 30 KB target

LCP:
≤ 2.5 seconds at mobile p75

CLS:
< 0.1

INP:
< 200 ms
```

Prefer code-native Product surfaces to avoid duplicating large images for each breakpoint.

---

# Cross-Artifact Product Contract

```text
Direction:
Calm Operational Intelligence

Primary signal:
Nova blue

Structural contrast:
Deep navy

Product scenario:
Employee onboarding

Problem:
Open fragmentation composition

Solution:
One connected workflow

Benefits:
Connected modular register

Social Proof:
Illustrative operational scenario

Primary typeface:
Geist Sans

Navigation:
Unchanged

Visible marketing copy:
Unchanged

Section order:
Unchanged

Conversion routing:
Unchanged

New sections:
None

New routes:
None

Status:
Approved

Product-visualization implementation authority:
Approved for illustrative homepage use; Engineering Architecture remains required
for component, primitive, API, or ownership changes
```

---

# Prohibited Outcomes

This approved Product Visualization specification does not authorize:

- fake customers,
- fake metrics,
- real or fictional employee records,
- new Product claims,
- completed-integration claims,
- additional CTAs,
- a functional dashboard,
- a full dark-mode site,
- Vercel visual imitation,
- glassmorphism,
- heavy animation,
- animation-dependent meaning,
- client-side Product functionality,
- direct Calendly links outside Final CTA,
- functional Product implementation or bypassing the Engineering Architecture gate.

---

# Implementation Dependencies

The canonical scenario, Product-interface strings, high-fidelity Product
references, Product-chrome mark placement, UI compositions, and focused
Problem/Benefits Wireframe amendment are approved.

Production implementation still requires an approved Engineering Architecture
amendment for any component, primitive, public API, boundary, or ownership
change.

---

# Planned Implementation Packages

```text
13.3 — Visual Foundation and Brand Shell
Tokens, surfaces, primitive variants, Navbar and Footer

13.4 — Hero and Problem-to-Solution System
Hero Product workbench and first narrative transformation

13.5 — Benefits through Pricing System
Benefits, Features, Social Proof, and Pricing

13.6 — FAQ, Final CTA, Responsive and Production Closure
FAQ styling, terminal CTA, mobile recomposition, QA and redeployment
```

This Product Visualization specification primarily informs Sessions 13.4 and 13.5.

---

# Approval Effect

This approval:

- freeze employee onboarding as the canonical homepage Product scenario,
- freeze the approved Product-interface label set,
- freeze continuity rules across the four Product views,
- enables Engineering Architecture review and later implementation planning.

This approval does not:

- claim that a complete application exists,
- authorize backend or Product functionality,
- authorize customer or metric claims,
- authorize code changes that require an unapproved Engineering Architecture amendment.
