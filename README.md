# NovaFlow

A production-deployed B2B SaaS marketing website built around a clear operational product narrative—not a generic landing-page template.

[**View the live site**](https://novaflow-beta.vercel.app/)

**Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Vercel**

---

## Preview

![NovaFlow desktop preview](docs/assets/readme/novaflow-desktop-preview.png)

<p align="center">
  <img
    src="docs/assets/readme/novaflow-mobile-preview.png"
    alt="NovaFlow mobile preview"
    width="340"
  />
</p>

---

## Project Snapshot

| | |
| --- | --- |
| **Project type** | B2B SaaS marketing website |
| **Status** | Production deployed |
| **Audience** | Founders and growing teams |
| **Product focus** | Turning recurring work into repeatable operational systems |
| **Primary scenario** | Employee onboarding |
| **Frontend** | Next.js, React, TypeScript |
| **Styling** | Tailwind CSS |
| **Deployment** | Vercel |
| **Scope** | Marketing website, not the SaaS application |

---

## Overview

NovaFlow is a portfolio-grade marketing website for a fictional B2B SaaS product focused on operational clarity.

The homepage presents a simple product idea: recurring work should not depend on scattered documents, memory, or improvised handoffs. NovaFlow frames that problem through a connected Product narrative, then shows how clearer systems, shared workflows, templates, metrics, and integrations could improve consistency across a growing team.

The project was taken from product definition and messaging through visual direction, frontend architecture, responsive implementation, QA, metadata configuration, and live deployment.

---

## The Challenge

The initial homepage had a sound information architecture and approved messaging, but the visual result still felt too generic. Repeated card layouts, uniform section rhythm, and limited Product evidence made the page resemble a typical SaaS template rather than a distinct product experience.

The redesign had to improve the visual identity without changing the approved:

- product promise,
- section order,
- core messaging,
- routing,
- or conversion destination.

The final direction—**Calm Operational Intelligence**—uses restrained contrast, connected structural lines, clear section roles, and illustrative Product evidence to create a more deliberate Hero-to-CTA narrative.

---

## What I Built

### Product and visual experience

- A distinctive Hero with an illustrative operational workbench
- A connected Problem-to-Solution narrative
- Outcome-focused Benefits presentation
- A Product-oriented Features capability canvas
- An illustrative employee-onboarding operational scenario
- Three-tier illustrative Pricing with clear disclosure
- A focused FAQ and conversion flow
- A coordinated navy Final CTA and Footer closure

### Frontend and UX implementation

- Responsive layouts across mobile, tablet, and desktop
- Sticky desktop navigation
- Accessible mobile navigation with keyboard dismissal
- Keyboard-accessible FAQ accordion
- Visible focus states
- Skip-to-content support
- Production metadata, canonical handling, `robots.txt`, and `sitemap.xml`
- Vercel production deployment and smoke testing

---

## What This Project Demonstrates

- Translating a business concept into a structured Product narrative
- Turning a generic landing page into a distinctive brand and Product experience
- Building reusable React components with clear ownership boundaries
- Using Server Components by default and Client Components only where interaction requires them
- Creating responsive layouts without losing visual consistency
- Preserving accessibility during custom visual work
- Handling metadata and production discovery safely
- Taking a frontend project through QA and live deployment

---

## Key Homepage Sections

### Hero

Introduces the Product promise and pairs it with an illustrative operational workbench based on the employee-onboarding scenario.

### Problem → Solution

Shows how recurring work becomes fragmented across tools and teams, then presents a connected sequence for turning that work into a repeatable system.

### Benefits

Frames the Product around outcomes such as clarity, speed, consistency, and operational visibility.

### Features

Uses a capability canvas to present Docs, Workflows, Templates, Metrics, and Integrations as parts of one operating system rather than isolated feature cards.

### Social Proof

Uses an explicitly illustrative operational scenario instead of fake customers, invented metrics, or fabricated testimonials.

### Pricing

Presents three illustrative plans with clear scope disclosure and restrained emphasis on the Pro plan.

### FAQ + Final CTA

Closes the page with a compact evaluation surface and a direct Calendly booking path.

---

## Technical Highlights

### Rendering strategy

- Next.js App Router
- React Server Components by default
- Three Client boundaries only:
  - `MobileNavbar.tsx`
  - `FAQ.tsx`
  - `accordion.tsx`

### Component architecture

- Marketing sections are separated from shared UI primitives
- Reusable primitives include `Container`, `Section`, `SectionHeader`, `Button`, and `Accordion`
- Dedicated visual components are used where generic reuse would weaken Product clarity
- Illustrative Product data remains local to the presentation layer—no fake API or backend is implied

### Styling system

- Tailwind CSS v4
- Semantic CSS variables
- Controlled surface hierarchy
- Localized operational grid treatment
- Geist loaded through `next/font`

### Production discovery

- Conditional canonical metadata
- Safe non-production `noindex` behavior
- Dynamic `robots.txt`
- Dynamic `sitemap.xml`
- Vercel production deployment

---

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16.2.10 |
| UI | React 19.2.4 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| UI primitives | Base UI / shadcn-style components |
| Icons | Lucide React |
| Font | Geist |
| Linting | ESLint 9 |
| Package manager | pnpm |
| Deployment | Vercel |

---

## Quality Assurance

The release was validated through:

- ESLint
- TypeScript type-checking
- Production builds
- `git diff --check`
- Responsive review at 320, 375, 768, 1024, and 1440 pixels
- Horizontal-overflow checks
- Keyboard-navigation review
- Focus-visibility review
- Mobile Navbar verification
- Anchor-navigation verification
- FAQ interaction verification
- Semantic-structure review
- Automated Axe accessibility testing
- Lighthouse review for MVP release readiness
- Console, hydration, network, and asset checks
- Production smoke testing

Axe reported no critical or serious violations. One moderate `landmark-unique` finding remains in the maintenance backlog and was not considered a release blocker.

> **Accessibility note:** “Approved for MVP” is an internal release judgement, not a formal accessibility certification.

---

## Scope Transparency

> [!NOTE]
> This repository contains the NovaFlow marketing website, not a functioning SaaS application. Product interfaces, pricing, and social-proof scenarios are illustrative portfolio content.

### Included

- Marketing homepage
- Responsive navigation
- Product-oriented visual sections
- FAQ interaction
- Calendly booking flow
- Metadata and discovery support
- Production deployment

### Not included

- Authentication
- Account or dashboard routes
- Database or ORM
- API routes
- Workflow execution backend
- Automation engine
- Billing or checkout
- CMS
- Analytics backend
- Internal lead-management system

---

## Run Locally

```bash
git clone https://github.com/ryanaxondev/novaflow.git
cd novaflow
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Validation commands

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

To run the production build locally:

```bash
pnpm start
```

---

## Environment Notes

Local development does not require secrets or environment variables.

Production discovery behavior uses:

```env
NOVAFLOW_CANONICAL_URL=https://your-production-domain.com
```

`NOVAFLOW_CANONICAL_URL` must be a valid HTTPS root URL. Canonical metadata, indexing, `robots.txt`, and `sitemap.xml` become production-active only when both conditions are satisfied:

- `VERCEL_ENV=production`
- `NOVAFLOW_CANONICAL_URL` is valid

When those conditions are not met, the homepage still renders normally, but indexing is intentionally disabled and the sitemap is empty.

---

## Project Structure

```text
src/
├── app/                    # Routes, metadata, and global styles
├── components/
│   ├── marketing/          # Homepage sections and visual systems
│   └── ui/                 # Shared UI primitives
└── lib/                    # Metadata and utility functions

public/                     # Runtime brand assets
design/                     # Visual direction, wireframes, and references
docs/                       # Product, messaging, engineering, and project records
```

---

## Selected Documentation

- [`docs/01-product.md`](docs/01-product.md) — Product specification
- [`docs/02-information-architecture.md`](docs/02-information-architecture.md) — Homepage information architecture
- [`docs/03-design-philosophy.md`](docs/03-design-philosophy.md) — Design principles
- [`design/ui/visual-direction-v2.md`](design/ui/visual-direction-v2.md) — Approved visual direction
- [`docs/engineering/homepage-engineering-architecture-v1.md`](docs/engineering/homepage-engineering-architecture-v1.md) — Engineering architecture
- [`docs/product/homepage-product-visualization-v1.md`](docs/product/homepage-product-visualization-v1.md) — Product visualization specification
- [`docs/project/session-13-closure-report-v1.md`](docs/project/session-13-closure-report-v1.md) — Final Session 13 project-state record

---

## Full Homepage Snapshot

<details>
<summary>View the full desktop homepage</summary>

<br />

![NovaFlow full-page screenshot](docs/assets/readme/novaflow-full-page.png)

</details>

---

## License

This project is proprietary and published for portfolio and evaluation purposes.

See [`LICENSE`](LICENSE) for details.
