# NovaFlow

# Homepage Engineering Architecture (v1)

## Document Information

**Document Type:** Homepage Engineering Architecture

**Status:** Approved

**Owner:** Architecture Room

**Depends On:**

- design/ui/homepage-ui-specification-v1.md
- design/ui/visual-direction-v1.md
- design/ui/homepage-ui-v1.png

**Produces:**

- Homepage Implementation

---

# Purpose

This document defines the engineering architecture for implementing the approved NovaFlow homepage.

Its purpose is to define how approved visual artifacts should be implemented using React and Next.js.

It introduces no new product, visual, or interaction decisions.

---

# Repository Structure

```text
src/
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   └── globals.css
│
├── components/
│   ├── marketing/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── Benefits.tsx
│   │   ├── Features.tsx
│   │   ├── SocialProof.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   │
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       ├── Section.tsx
│       └── SectionHeader.tsx
│
├── lib/
│
├── hooks/
│
├── styles/
│
├── types/
│
└── utils/
```

The homepage implementation follows the repository structure below.

---

# Repository Principles

- Organize code by responsibility.
- Separate marketing-specific components from reusable UI primitives.
- Prefer composition over inheritance.
- Keep reusable abstractions minimal.
- Follow Next.js App Router conventions.
- Do not introduce directories without a current implementation need.
- Prefer explicit structure over premature abstraction.

These principles should guide future additions to the repository structure.

---

# Type Organization

The `types/` directory is reserved for shared application types.

Examples:

```text
types/
├── navigation.ts
└── pricing.ts
```

Component-specific types should remain colocated with their component.

Avoid creating shared types until they are required by multiple modules.

---

# Step 1 Exit Condition

This step is complete when:

- every implementation responsibility has a defined location,
- reusable UI primitives are separated from feature-specific components,
- the structure supports future product growth without premature abstraction,
- no implementation responsibility has an ambiguous location.

---

# Component Responsibility Architecture

## Guiding Principle

A component owns one responsibility, not one visual section.

Visual sections may be composed of multiple components.

Each component should have a single, well-defined responsibility and explicit ownership boundaries.

A component should not make assumptions about the internal implementation of other components.

---

# Component Responsibility Template

Each component is described using the following structure:

- Responsibility
- Owns
- Inputs
- Does Not Own
- Composes
- External Dependencies
- Type
- Reason
- Reusability
- Future Notes

This template defines architectural responsibilities rather than implementation details.

Future Notes document potential future extensions.

They must not influence the current implementation.

---

### Inputs

Inputs describe the information a component requires from its parent or external sources.

They define the component's public contract rather than its implementation.

---

# Marketing Components

## Navbar

### Responsibility

Provide global marketing navigation and primary entry points.

### Owns

- Logo
- Navigation links
- Primary CTA

### Inputs

- Navigation configuration
- Branding assets

### Does Not Own

- Authentication
- Mobile navigation behavior
- Routing logic

### Composes

- Container
- Button

### External Dependencies

None

### Type

Server Component

### Reason

No client-side interactivity required.

### Reusability

Marketing-specific

### Future Notes

- Mobile navigation
- Authentication entry
- Theme switcher

---

## Hero

### Responsibility

Introduce NovaFlow and provide the primary conversion entry point.

### Owns

- Headline
- Supporting copy
- Primary CTA
- Secondary CTA
- Product preview

### Inputs

- Marketing content
- Product preview asset

### Does Not Own

- Navigation
- Pricing
- Shared button styling
- Product screenshots outside the hero

### Composes

- Container
- Button

### External Dependencies

None

### Type

Server Component

### Reason

No client-side interactivity required.

### Reusability

Page-specific

### Future Notes

- Product animation
- Video preview

---

## Problem

### Responsibility

Help visitors recognize the operational problems NovaFlow solves.

### Owns

- Section heading
- Narrative introduction
- Pain-point cards

### Inputs

- Problem statements
- Pain-point content

### Does Not Own

- Solution explanation
- Product capabilities

### Composes

- Section
- SectionHeader
- Card

### External Dependencies

None

### Type

Server Component

### Reason

No client-side interactivity required.

### Reusability

Page-specific

### Future Notes

None

---

## Solution

### Responsibility

Explain NovaFlow's unique operational approach.

### Owns

- Workflow diagram
- Three-step explanation

### Inputs

- Solution explanation
- Workflow visualization

### Does Not Own

- Benefits
- Features
- Product metrics

### Composes

- Section
- SectionHeader
- Card

### External Dependencies

None

### Type

Server Component

### Reason

No client-side interactivity required.

### Reusability

Page-specific

### Future Notes

- Interactive workflow visualization

---

## Benefits

### Responsibility

Translate product capabilities into business outcomes.

### Owns

- Benefit cards

### Inputs

- Benefit content

### Does Not Own

- Feature descriptions
- Workflow explanation

### Composes

- Section
- SectionHeader
- Card

### External Dependencies

None

### Type

Server Component

### Reason

No client-side interactivity required.

### Reusability

Page-specific

### Future Notes

None

---

## Features

### Responsibility

Present the concrete capabilities of NovaFlow.

### Owns

- Product preview
- Feature list

### Inputs

- Feature descriptions
- Product preview asset

### Does Not Own

- Business outcomes
- Customer validation

### Composes

- Section
- SectionHeader
- Card

### External Dependencies

None

### Type

Server Component

### Reason

No client-side interactivity required.

### Reusability

Page-specific

### Future Notes

- Interactive product preview

---

## SocialProof

### Responsibility

Increase trust through customer validation.

### Owns

- Customer logos
- Testimonials
- Metrics

### Inputs

- Testimonials
- Customer logos
- Metrics

### Does Not Own

- Pricing
- Conversion actions

### Composes

- Section
- SectionHeader
- Card

### External Dependencies

None

### Type

Server Component

### Reason

No client-side interactivity required.

### Reusability

Marketing-specific

### Future Notes

- Case studies
- Customer success stories

---

## Pricing

### Responsibility

Present available pricing plans and guide plan selection.

### Owns

- Pricing cards
- Plan comparison
- Pricing CTA

### Inputs

- Pricing plans
- Feature comparison

### Does Not Own

- Billing
- Checkout
- Subscription management

### Composes

- Section
- SectionHeader
- Card
- Button

### External Dependencies

None

### Type

Server Component

### Reason

No client-side interactivity required.

### Reusability

Marketing-specific

### Future Notes

- Billing toggle
- Enterprise comparison

---

## FAQ

### Responsibility

Resolve common objections before conversion.

### Owns

- FAQ items
- Accordion interaction

### Inputs

- FAQ content

### Does Not Own

- Final CTA
- Contact form

### Composes

- Section
- SectionHeader
- Accordion

### External Dependencies

None

### Type

Client Component

### Reason

Accordion interaction requires client-side state.

### Reusability

Marketing-specific

### Future Notes

- Search
- Category filtering

---

## FinalCTA

### Responsibility

Provide the final conversion opportunity.

### Owns

- Closing headline
- Supporting copy
- Primary CTA

### Inputs

- Closing message
- CTA content

### Does Not Own

- Contact forms
- Footer navigation

### Composes

- Section
- SectionHeader
- Button

### External Dependencies

None

### Type

Server Component

### Reason

No client-side interactivity required.

### Reusability

Page-specific

### Future Notes

None

---

## Footer

### Responsibility

Provide secondary navigation and legal information.

### Owns

- Navigation links
- Contact information
- Legal links

### Inputs

- Navigation configuration
- Legal information
- Contact information

### Does Not Own

- Primary conversion
- Marketing content

### Composes

- Container

### External Dependencies

None

### Type

Server Component

### Reason

No client-side interactivity required.

### Reusability

Marketing-specific

### Future Notes

- Newsletter
- Social links

---

# Component Ownership Matrix

| Component   | Server | Client | Shared UI | Owns State |
| ----------- | :----: | :----: | :-------: | :--------: |
| Navbar      |   ✅   |   ❌   |    ✅     |     ❌     |
| Hero        |   ✅   |   ❌   |    ✅     |     ❌     |
| Problem     |   ✅   |   ❌   |    ✅     |     ❌     |
| Solution    |   ✅   |   ❌   |    ✅     |     ❌     |
| Benefits    |   ✅   |   ❌   |    ✅     |     ❌     |
| Features    |   ✅   |   ❌   |    ✅     |     ❌     |
| SocialProof |   ✅   |   ❌   |    ✅     |     ❌     |
| Pricing     |   ✅   |   ❌   |    ✅     |     ❌     |
| FAQ         |   ❌   |   ✅   |    ✅     |     ✅     |
| FinalCTA    |   ✅   |   ❌   |    ✅     |     ❌     |
| Footer      |   ✅   |   ❌   |    ❌     |     ❌     |

---

# Architectural Principle

Components communicate through explicit inputs and composition.

They never rely on knowledge of another component's internal implementation.

---

# Step 2 Exit Condition

This step is complete when:

- every homepage component has a single, clearly defined responsibility,
- ownership boundaries are explicitly documented,
- composition relationships are defined,
- component responsibilities do not overlap,
- no architectural ambiguity remains before implementation begins.

---

# Shared UI Inventory

## Purpose

Define the reusable UI primitives required to implement the approved homepage.

Shared UI primitives are implementation building blocks.

They are independent of marketing content, business logic, and individual page sections.

Feature-specific components should compose these primitives rather than creating new UI patterns.

---

# Engineering Question

> Which UI building blocks should exist independently of any homepage section?

---

# Guiding Principles

- Build primitives before page-specific components.
- Prefer composition over duplication.
- Keep primitives independent of business concepts.
- Reuse through variants instead of creating new components.
- Introduce new primitives only when implementation demonstrates a concrete need.

---

# Layout

## Container

### Responsibility

Provide a consistent maximum content width and horizontal spacing.

### Variants

None

### Used By

- Navbar
- Hero
- Footer
- All marketing sections

### Reusability

Entire product

---

## Section

### Responsibility

Provide semantic page sections with consistent vertical spacing.

### Owns

- Semantic section element
- Vertical rhythm
- Optional background treatment

### Variants

None

### Used By

- Problem
- Solution
- Benefits
- Features
- SocialProof
- Pricing
- FAQ
- FinalCTA

### Reusability

Entire product

---

## SectionHeader

### Responsibility

Render the standard heading pattern, typography, alignment, and readable text width shared across sections.

### Owns

- Eyebrow (optional)
- Title
- Description (optional)

### Variants

None

### Used By

- Problem
- Solution
- Benefits
- Features
- SocialProof
- Pricing
- FAQ

### Reusability

Entire product

---

# Actions

## Button

### Responsibility

Provide consistent interactive actions.

### Owns

- Visual appearance
- Size
- Variant
- Disabled state

### Variants

- Primary
- Secondary

Reserved for future:

- Ghost
- Link

### Used By

- Navbar
- Hero
- Pricing
- FinalCTA

### Reusability

Entire product

---

# Surfaces

## Card

### Responsibility

Provide a reusable content surface.

### Owns

- Surface styling
- Border
- Radius
- Internal spacing

### Variants

- Default
- Outlined
- Highlighted

### Used By

- Problem
- Benefits
- Features
- Pricing
- SocialProof

### Reusability

Entire product

### Implementation Rule

Feature-specific cards extend the base Card component rather than replacing it.

---

# Status

## Badge

### Responsibility

Display short supporting labels.

### Variants

None

Reserved for future:

- New
- Beta
- Popular

### Used By

Future product interfaces

### Reusability

Entire product

---

# Forms

## Input

### Responsibility

Provide a consistent text input field.

### Variants

- Default

Reserved for future:

- Search
- Email

### Used By

Future authenticated interfaces

### Reusability

Entire product

---

# Explicit Non-Goals

The following primitives are intentionally excluded because they are not required by the approved homepage:

- IconButton
- Avatar
- Modal
- Dropdown
- Tabs
- Select
- Checkbox
- Textarea

These components should only be introduced when a concrete implementation requires them.

---

# Primitive Inventory

```text
Layout
├── Container
├── Section
└── SectionHeader

Actions
└── Button
    ├── Primary
    └── Secondary

Surfaces
└── Card
    ├── Default
    ├── Outlined
    └── Highlighted

Status
└── Badge

Forms
└── Input
```

---

# Composition Rule

Marketing components compose shared UI primitives.

Shared UI primitives never depend on marketing components.

Dependency direction:

```text
Marketing Components
        │
        ▼
Shared UI Primitives
```

Dependencies must always flow downward.

---

# Architectural Layers

```text
Product
      │
      ▼
Sections
      │
      ▼
Components
      │
      ▼
Primitives
```

Where:

- Product defines intent.
- Sections communicate the narrative.
- Components own responsibilities.
- Primitives provide reusable implementation building blocks.

Each layer composes the layer below it without redefining its responsibility.

---

# Step 3 Exit Condition

This step is complete when:

- every reusable UI primitive has a clearly defined responsibility,
- feature-specific components compose shared primitives instead of reimplementing them,
- dependency direction is unambiguous,
- no additional primitive is required to implement the approved homepage.

# Step 4 — Engineering Rules

## Purpose

These rules define the engineering standards for implementing the NovaFlow homepage.

They ensure consistent implementation decisions while preserving the approved product, design, and engineering architecture.

These rules guide implementation rather than product or visual decisions.

---

## Guiding Principle

Engineering decisions should reduce implementation ambiguity rather than introduce new product or design decisions.

When implementation requires revisiting an approved decision, the implementation should stop and the decision must be reviewed through the appropriate specification.

---

## Engineering Rules

### 1. Server Components by Default

Use React Server Components unless client-side interactivity is required.

Introduce Client Components only when their behavior cannot be achieved on the server.

---

### 2. Named Exports Only

Export every component using named exports.

Avoid default exports to improve consistency, discoverability, and refactoring.

---

### 3. Semantic HTML First

Prefer semantic HTML elements before generic containers.

Use appropriate elements such as:

- `<header>`
- `<main>`
- `<section>`
- `<nav>`
- `<article>`
- `<footer>`

Semantic structure should communicate document meaning independently of styling.

---

### 4. Tailwind Utilities First

Use Tailwind CSS utilities as the primary styling approach.

Extract reusable patterns into shared components before introducing custom CSS.

Custom CSS should only be introduced when utilities cannot express the required behavior clearly.

---

### 5. No Inline Styles

Avoid inline style attributes.

Styling should remain reusable, reviewable, and consistent across the project.

---

### 6. Reuse Before Creating

Before creating a new component, evaluate whether an existing shared primitive satisfies the requirement.

Create new shared primitives only when multiple implementation scenarios demonstrate a concrete reuse need.

---

### 7. Single Responsibility

Each component should own one clearly defined responsibility.

When unrelated responsibilities emerge, split the component rather than increasing its complexity.

---

### 8. Accessibility Before Polish

Accessibility requirements take precedence over visual refinement.

Interactive elements should support:

- keyboard navigation,
- visible focus states,
- semantic HTML,
- accessible names where appropriate.

---

### 9. Preserve Approved Design

Implementation must faithfully reproduce the approved user interface.

Do not introduce:

- new layouts,
- new sections,
- hierarchy changes,
- additional interactions,
- visual redesigns,

unless a new product or design decision has been formally approved.

Implementation discrepancies should be resolved by updating the appropriate specification rather than modifying the implementation ad hoc.

---

### 10. Optimize for Readability

Write code for future maintainers.

Prefer clear composition, descriptive naming, and predictable structure over clever abstractions.

Readability takes precedence over reducing line count.

Optimize for maintainability rather than minimizing code size.

---

## Design-to-Code Principle

Implementation realizes approved decisions.

Engineering executes product and design decisions.

Implementation should not reinterpret approved specifications.

When ambiguity exists, the specification—not implementation—must be updated first.

---

## Review Checklist

Before implementation is approved, verify that:

- Server Components are used by default.
- Client Components exist only when interaction requires them.
- Components follow a single responsibility.
- Shared UI primitives are reused consistently.
- Semantic HTML is used appropriately.
- Tailwind utilities are preferred over custom styling.
- Accessibility requirements are satisfied.
- The implemented interface faithfully matches the approved UI.
- Components follow the approved engineering architecture.

---

## Engineering Decision Principle

When implementation reveals a missing engineering decision:

- do not invent a local solution,
- update the engineering architecture,
- resume implementation only after the architecture has been updated.

---

## Exit Condition

This step is complete when:

- implementation decisions can be evaluated against documented engineering rules,
- coding style no longer depends on individual preference,
- implementation follows the approved engineering architecture,
- future contributors can make consistent engineering decisions without redefining existing standards.

# Step 5 — Implementation Roadmap

## Purpose

Define the implementation sequence for the approved homepage.

The roadmap translates the approved engineering architecture into a sequence of reviewable implementation increments.

Each implementation session should deliver a functional milestone without revisiting approved product, design, or engineering decisions.

---

## Guiding Principle

Implementation proceeds incrementally.

Each increment should:

- produce a working result,
- remain independently reviewable,
- build upon previously approved work,
- avoid introducing new architectural decisions.

---

# Implementation Sequence

The homepage should be implemented in the following order:

1. Project Skeleton
2. Shared UI Primitives
3. Navbar
4. Hero
5. Problem
6. Solution
7. Benefits
8. Features
9. SocialProof
10. Pricing
11. FAQ
12. FinalCTA
13. Footer
14. Responsive Adaptation
15. Accessibility Review
16. Performance Review
17. Final Homepage Approval

Each step depends only on previously completed work.

---

# Session Breakdown

## Session 07

### Scope

- Project Skeleton
- Shared UI Primitives
- Navbar
- Hero

### Deliverable

A functional landing page foundation with reusable UI primitives and the first visible homepage section.

---

## Session 08

### Scope

- Problem
- Solution

### Deliverable

The product problem and solution narrative implemented.

---

## Session 09

### Scope

- Benefits
- Features

### Deliverable

Business outcomes and product capabilities implemented.

---

## Session 10

### Scope

- SocialProof
- Pricing

### Deliverable

Trust-building and conversion sections implemented.

---

## Session 11

### Scope

- FAQ
- FinalCTA
- Footer

### Deliverable

Homepage implementation completed.

---

## Session 12

### Scope

- Responsive Adaptation
- Accessibility Review
- Performance Review
- Homepage Review
- Final Approval

### Deliverable

Production-ready homepage.

---

# Review Gates

Each implementation session ends with an engineering review.

Review approval is required before the next implementation session begins.

Review criteria:

- Approved engineering architecture
- Approved UI specification
- Engineering rules
- Visual consistency
- Accessibility
- Maintainability

---

# Implementation Principles

- Complete one increment before starting the next.
- Every session should produce a functional and reviewable result.
- Preserve approved product, design, and engineering decisions.
- Refactoring is allowed only when it improves maintainability without changing approved behavior.
- Architectural changes require a new engineering review before implementation continues.
- Do not optimize for future requirements without demonstrated implementation needs.

---

# Completion Criteria

Homepage implementation is considered complete when:

- every approved homepage section has been implemented,
- shared UI primitives are consistently reused,
- engineering rules have been satisfied,
- responsive behavior has been verified,
- accessibility requirements have been reviewed,
- performance meets project expectations,
- the implementation faithfully reproduces the approved homepage UI.

---

# Step 5 Exit Condition

This step is complete when:

- the implementation roadmap defines the complete engineering sequence,
- every implementation session has a clear scope and deliverable,
- review gates are defined,
- implementation can proceed without additional architectural planning.
