# NovaFlow

# Homepage Metadata Messaging Specification

## Document Information

**Document Type:** Messaging Specification
**Artifact:** Homepage Metadata
**Version:** v1
**Status:** Approved
**Owner:** Product / Messaging

**Depends On:**

- `docs/01-product.md`
- `docs/messaging/hero-v1.md`
- `docs/messaging/benefits-features-v1.md`
- `docs/brand/novaflow-brand-mark-v1.md`

**Enables:**

- Homepage Metadata Implementation
- Open Graph Text Implementation
- Twitter/X Text Implementation
- Session 12 Production Readiness Work

---

# Purpose

This document freezes the customer-facing metadata identity for the NovaFlow homepage.

It controls metadata copy only.

It does not define:

- production hostname,
- canonical URL,
- indexing behavior,
- metadata implementation,
- social-preview artwork,
- theme color,
- manifest behavior.

Those concerns remain owned by their applicable Product, Deployment, Branding, UI, or Engineering artifacts.

---

# Approved Metadata Identity

## Application Name

```text
NovaFlow
```

## Homepage Document Title

```text
NovaFlow — Build Repeatable Systems
```

## Homepage Meta Description

```text
NovaFlow helps growing teams turn recurring work into clear, repeatable systems for greater consistency, speed, and operational clarity.
```

## Open Graph Title

```text
NovaFlow — Build Repeatable Systems
```

## Open Graph Description

```text
NovaFlow helps growing teams turn recurring work into clear, repeatable systems for greater consistency, speed, and operational clarity.
```

## Twitter/X Title

```text
NovaFlow — Build Repeatable Systems
```

## Twitter/X Description

```text
NovaFlow helps growing teams turn recurring work into clear, repeatable systems for greater consistency, speed, and operational clarity.
```

---

# Messaging Rationale

The approved metadata identity:

- preserves the approved promise of repeatable systems,
- addresses growing teams,
- reflects the approved outcomes of consistency, speed, and operational clarity,
- introduces no unsupported feature or Product claim,
- does not promise a free trial,
- does not claim AI automation,
- does not claim guaranteed outcomes,
- does not introduce new audience positioning.

The homepage title remains concise while preserving the approved NovaFlow brand name and repeatable-systems promise.

The description communicates the approved audience, operational context, and intended outcomes without adding a new capability, commercial promise, or category claim.

---

# Cross-Channel Consistency

The approved title is identical across:

```text
Homepage document title
Open Graph title
Twitter/X title
```

The approved description is identical across:

```text
Homepage meta description
Open Graph description
Twitter/X description
```

Engineering must not shorten, paraphrase, extend, or substitute these values during implementation.

---

# Social Metadata Scope

For the current milestone:

```text
Open Graph text: Approved
Twitter/X text: Approved
Custom social-preview image: Deferred
Theme color: Deferred
Web manifest: Deferred
```

No custom Open Graph image is approved by this artifact.

The approved favicon must not be treated as an approved social-preview composition.

The brand accent `#2563EB` does not independently authorize a metadata theme color.

Social-preview artwork, theme color, and manifest behavior require their own applicable approved Branding, UI, Product, or Deployment decisions before implementation.

---

# Canonical Dependency

The following values remain owned by:

```text
docs/product/production-discovery-decision-v1.md
```

Owned values:

```text
metadataBase
canonical homepage URL
Open Graph URL
absolute social asset URLs
```

Engineering must not infer these values from:

- the repository name,
- localhost,
- a Vercel preview URL,
- an automatically generated branch URL,
- a GitHub URL,
- the Calendly booking URL.

Until the exact canonical production URL is approved through the Production Discovery Decision, URL-dependent metadata must remain intentionally unset.

---

# Messaging Boundaries

This artifact does not authorize:

- changes to visible homepage copy,
- changes to homepage positioning,
- new Product claims,
- new audience claims,
- a free-trial claim,
- an AI claim,
- a guaranteed outcome,
- a custom social-preview image,
- a theme color,
- a web manifest,
- a production hostname,
- a canonical URL,
- a new route,
- changes to navigation labels or destinations,
- changes to the approved Calendly conversion flow.

The exact Final CTA booking URL remains owned by:

```text
docs/product/final-cta-conversion-decision-v1.md
```

This metadata artifact does not authorize direct Calendly links from any additional surface.

---

# Engineering Handoff

After all applicable dependencies are approved, Engineering may:

- replace generic starter metadata with the exact approved values,
- define the application name,
- implement the approved Open Graph text,
- implement the approved Twitter/X text,
- preserve the approved App Router metadata boundary.

Engineering must:

- use the exact approved copy,
- avoid duplicate or conflicting metadata,
- retain the approved App Router favicon behavior,
- keep URL-dependent metadata gated by the Production Discovery Decision,
- avoid inventing deferred metadata values.

---

# Definition of Done

This artifact is complete because:

- the application name is explicit,
- the homepage title is explicit,
- the homepage description is explicit,
- Open Graph text is explicit,
- Twitter/X text is explicit,
- all approved metadata copy is internally consistent,
- the messaging rationale is recorded,
- social-preview artwork remains deferred,
- theme color remains deferred,
- manifest behavior remains deferred,
- canonical URL ownership remains separate,
- Engineering can implement metadata copy without inventing Messaging.

---

# Approval Effect

Approval of this document:

- freezes the homepage metadata copy,
- authorizes later implementation of the exact approved text,
- resolves the Session 12 metadata-copy blocker,
- does not approve a production hostname,
- does not approve URL-dependent metadata,
- does not approve social-preview artwork,
- does not approve a theme color,
- does not approve a web manifest.
