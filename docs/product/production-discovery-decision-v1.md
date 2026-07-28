# NovaFlow

# Production Discovery and Canonical Host Decision

## Document Information

**Document Type:** Product / Deployment Decision
**Artifact:** Production Discovery and Canonical Host
**Version:** v1
**Status:** Approved
**Owner:** Product

**Depends On:**

- `docs/01-product.md`
- `docs/02-information-architecture.md`
- `docs/information-architecture/homepage-navigation-reconciliation-v1.md`
- `docs/messaging/homepage-metadata-v1.md`

**Enables:**

- Vercel Production Deployment Preparation
- Environment-Aware Robots Behavior
- Production Sitemap Implementation
- Canonical Host Verification
- Session 12 Production Readiness Work

---

# Purpose

This document freezes:

- the hosting target,
- the production indexing policy,
- the preview indexing policy,
- the sitemap publication policy,
- the canonical-host approval process.

It separates approved discovery behavior from the exact production URL, which remains pending until a stable production deployment exists and Product verifies it.

---

# Hosting Target

The approved hosting target is:

```text
Hosting provider: Vercel
```

This approval authorizes Vercel as the current production hosting target.

It does not approve an inferred hostname.

Vercel project creation, account administration, access control, environment configuration, DNS management, and deployment execution remain human-owned operational actions.

---

# Canonical Host Status

The current canonical-host record is:

```text
Canonical hostname: Pending
Canonical homepage URL: Pending
```

No exact Vercel hostname is approved by this version.

Engineering must not infer a canonical hostname from:

- the repository name,
- a local development URL,
- a Vercel preview deployment,
- an automatically generated branch URL,
- a GitHub URL,
- the Calendly booking URL.

No example, preview, temporary, or provider-generated URL becomes canonical without the approval process defined below.

---

# Canonical Freeze Trigger

The canonical hostname becomes eligible for approval only after:

1. the project has a successful Vercel production deployment,
2. a stable production URL exists,
3. the Product Owner confirms that exact URL,
4. the URL is verified over HTTPS,
5. redirect behavior is known.

After these conditions are satisfied, the exact hostname and homepage URL must be recorded through an approved update to this artifact before Engineering sets:

```text
metadataBase
canonical homepage URL
Open Graph URL
sitemap absolute URLs
robots sitemap URL
```

Until then, those values remain intentionally unset.

The approved hosting provider does not make an automatically generated Vercel URL canonical by default.

---

# Production Indexing Policy

For the confirmed production deployment, the approved indexing policy is:

```text
index
follow
```

The production homepage is intended to be discoverable by search engines.

Production robots behavior must not block the canonical public homepage.

This indexing approval applies only to the confirmed canonical production environment.

---

# Preview and Development Policy

The following environments are non-canonical:

```text
Vercel preview deployments
branch deployments
local development
non-canonical environments
```

Their approved indexing policy is:

```text
noindex
nofollow
```

Preview and non-canonical deployments must:

- not appear in the production sitemap,
- not be treated as canonical,
- not advertise a preview URL as the public NovaFlow origin,
- not publish a preview URL through production Open Graph metadata,
- not publish a preview URL through production robots or sitemap references.

---

# Sitemap Policy

The approved sitemap policy is:

```text
Production sitemap: Enabled
Preview sitemap: Not published as production discovery
```

The initial production sitemap contains only approved public routes.

For the current single-page milestone, the homepage is the only required sitemap entry unless another public route is separately approved.

The sitemap must not add:

```text
/contact
/privacy
/terms
/about
/pricing
```

unless each route:

- actually exists,
- has an approved page responsibility,
- is approved for public publication,
- has any required Messaging and legal review.

A homepage section anchor is not a separate sitemap route.

---

# Robots Policy

The production robots endpoint must:

- allow indexing of the canonical public homepage,
- reference the production sitemap once the canonical hostname is approved,
- use absolute production URLs,
- avoid localhost origins,
- avoid preview origins,
- avoid automatically generated branch origins.

Preview and development environments must remain non-indexable.

Robots behavior must not accidentally elevate a preview or branch deployment to canonical status.

---

# Social and Metadata Relationship

This artifact owns URL and discovery behavior.

It does not own metadata copy.

Metadata copy remains controlled by:

```text
docs/messaging/homepage-metadata-v1.md
```

The approved homepage metadata identity is:

```text
Homepage title:
NovaFlow — Build Repeatable Systems
```

Social-preview artwork remains deferred and requires separate Branding/UI approval.

This artifact does not approve:

- a custom Open Graph image,
- a Twitter/X image,
- a theme color,
- a web manifest.

The favicon is not an approved social-preview composition.

---

# Relationship to Demo Conversion

The approved external Calendly URL remains owned by:

```text
docs/product/final-cta-conversion-decision-v1.md
```

The Calendly booking URL:

- is not the NovaFlow production hostname,
- is not the homepage canonical URL,
- must not appear in the production sitemap,
- must not be used as `metadataBase`,
- must not become an Open Graph URL for the NovaFlow homepage.

Only Final CTA links directly to the approved external Calendly destination under the current homepage conversion contract.

---

# Deployment Gate

Local implementation may prepare environment-aware discovery behavior after this document is approved.

Authorized preparation may include:

- production-versus-preview indexing behavior,
- the production sitemap route structure,
- the production robots route structure,
- keeping URL-dependent values gated until approval.

Final canonical URL implementation must wait for the exact production URL approval.

Deployment does not independently authorize Engineering to write a discovered hostname into production metadata.

---

# Production Verification Requirements

Before the canonical hostname may be frozen, verify:

```text
Production deployment succeeds
Stable production URL exists
HTTPS succeeds
GET / returns HTTP 200
GET /favicon.ico returns HTTP 200
Redirect behavior is known
Preview URLs remain non-canonical
Product Owner confirms the exact URL
```

After the exact URL is approved and implemented, validate:

```text
metadataBase
canonical homepage URL
Open Graph URL
production robots endpoint
production sitemap endpoint
absolute sitemap URLs
absolute robots sitemap URL
index, follow production behavior
noindex, nofollow preview behavior
```

No localhost, preview, branch, GitHub, or Calendly origin may appear in canonical discovery output.

---

# Decision Boundaries

This artifact does not authorize:

- an inferred Vercel hostname,
- an exact canonical URL before verification,
- a custom domain purchase,
- DNS changes,
- a new public route,
- legal-page publication,
- metadata-copy changes,
- social-preview artwork,
- a theme color,
- a web manifest,
- analytics,
- changes to the Final CTA booking destination,
- direct Calendly links from additional surfaces.

---

# Definition of Done

This artifact is complete because:

- Vercel is approved as the hosting target,
- canonical-host status is explicit,
- the canonical freeze trigger is explicit,
- the production indexing policy is approved,
- the preview and development indexing policy is approved,
- sitemap publication policy is approved,
- robots behavior is approved,
- current public-route scope is explicit,
- metadata-copy ownership remains separate,
- the exact canonical URL remains correctly gated,
- Engineering can prepare discovery behavior without inventing a hostname.

---

# Approval Effect

Approval of this document:

- authorizes Vercel as the current production hosting target,
- approves `index, follow` for the confirmed canonical production deployment,
- approves `noindex, nofollow` for preview and non-canonical environments,
- approves a production sitemap containing the homepage for the current milestone,
- authorizes local preparation of environment-aware discovery behavior,
- does not approve an exact hostname,
- does not authorize canonical URL implementation before the freeze trigger is completed.
