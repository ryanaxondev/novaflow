# NovaFlow

# Production Discovery and Canonical Host Decision

## Document Information

**Document Type:** Product / Deployment Decision
**Artifact:** Production Discovery and Canonical Host
**Version:** v1.1
**Status:** Approved
**Owner:** Product

**Depends On:**

- `docs/01-product.md`
- `docs/02-information-architecture.md`
- `docs/information-architecture/homepage-navigation-reconciliation-v1.md`
- `docs/messaging/homepage-metadata-v1.md`

**Enables:**

- Vercel Production Deployment
- Environment-Aware Robots Behavior
- Production Sitemap Publication
- Canonical Metadata Activation
- Canonical Production Discovery
- Session 12 Release Closure

---

# Purpose

This document freezes:

- the hosting target,
- the exact canonical production hostname,
- the exact canonical homepage URL,
- the production indexing policy,
- the preview indexing policy,
- the sitemap publication policy,
- the canonical activation process.

The initial Vercel Production Deployment has now been completed.

Product has verified and approved the stable Vercel Production domain recorded in this document.

This version supersedes the pending canonical-host state defined in v1.

---

# Hosting Target

The approved hosting target is:

```text
Hosting provider: Vercel
```

This approval authorizes Vercel as the current production hosting provider.

Vercel project creation, account administration, access control, environment configuration, DNS management, and deployment execution remain human-owned operational actions.

Approval of Vercel as the hosting provider does not authorize Engineering to substitute another Deployment, Preview, branch, repository, GitHub, localhost, or Calendly URL for the approved canonical URL.

---

# Canonical Host Status

The approved canonical-host record is:

```text
Canonical hostname:
novaflow-beta.vercel.app

Canonical homepage URL:
https://novaflow-beta.vercel.app/
```

The approved URL is the stable Vercel Production domain associated with the NovaFlow project.

It is not:

- a Vercel Preview URL,
- a branch Deployment URL,
- an immutable Deployment-specific URL,
- a local development URL,
- a GitHub URL,
- the Calendly booking URL.

The trailing slash is part of the normalized canonical homepage representation used by NovaFlow discovery infrastructure.

Engineering must use the exact approved canonical homepage URL:

```text
https://novaflow-beta.vercel.app/
```

Engineering must not infer, shorten, extend, replace, or reconstruct this value from another environment variable or deployment hostname.

---

# Production Verification Record

The following pre-canonical Production checks have been completed:

```text
Production deployment:
Successful

Stable production hostname:
novaflow-beta.vercel.app

Stable production homepage:
https://novaflow-beta.vercel.app/

HTTPS availability:
Verified by Product Owner

Homepage availability:
Verified by Product Owner

Pre-canonical robots endpoint:
Verified

Pre-canonical sitemap endpoint:
Verified

Product Owner canonical approval:
Confirmed
```

Observed pre-canonical robots behavior:

```text
User-Agent: *
Disallow: /
```

Observed pre-canonical sitemap behavior:

```text
Valid XML sitemap document
No public URL entry
No canonical homepage entry
```

The browser-extension markup observed while viewing the XML document is not part of the approved sitemap content and must not be treated as application-generated discovery output.

HTTP-to-HTTPS redirect behavior is Vercel-managed and must be measured again during final Package 6C release verification.

Final release verification must record:

```text
Initial HTTP status
Redirect status
Redirect destination
Final HTTPS status
Redirect count
```

No custom-domain, `www`, apex-domain, or alternate-host redirect is approved by this artifact.

---

# Canonical Freeze Trigger

The canonical hostname became eligible for approval after:

1. the project completed a successful Vercel Production Deployment,
2. the stable Production URL became available,
3. the Product Owner identified and confirmed the exact URL,
4. the homepage was verified over HTTPS,
5. pre-canonical discovery behavior was verified,
6. the stable hostname was distinguished from Preview and Deployment-specific URLs.

The Product Owner now approves:

```text
Canonical homepage URL approved:
https://novaflow-beta.vercel.app/
```

The canonical-host freeze is complete.

Engineering is now authorized to activate URL-dependent discovery metadata using only the environment contract defined in this document.

---

# Canonical Environment Contract

The approved environment variable is:

```text
NOVAFLOW_CANONICAL_URL
```

Its exact approved Production value is:

```text
https://novaflow-beta.vercel.app/
```

The variable must be configured only for:

```text
Vercel Production
```

It must not be configured for:

```text
Vercel Preview
branch deployments
local development
non-canonical environments
```

The value must not be committed to:

```text
.env
.env.local
.env.production
.env.production.local
vercel.json
next.config.*
source files
documentation configuration files
```

The exact URL may appear in this Product Decision because this document is the approved source of truth for the canonical host.

Application code must continue reading the URL through:

```text
NOVAFLOW_CANONICAL_URL
```

Application code must not hard-code the canonical hostname.

A new Production Deployment is required after the Environment Variable is configured.

Changing the Environment Variable does not retroactively modify metadata, robots, or sitemap output from an existing Deployment.

---

# Canonical Metadata Authorization

After `NOVAFLOW_CANONICAL_URL` is configured for Vercel Production and a new Production Deployment succeeds, Engineering is authorized to emit:

```text
metadataBase
canonical homepage URL
Open Graph URL
absolute sitemap homepage URL
absolute robots sitemap URL
```

The approved values resolve to:

```text
metadataBase:
https://novaflow-beta.vercel.app/

canonical homepage URL:
https://novaflow-beta.vercel.app/

Open Graph URL:
https://novaflow-beta.vercel.app/

sitemap homepage URL:
https://novaflow-beta.vercel.app/

robots sitemap URL:
https://novaflow-beta.vercel.app/sitemap.xml
```

This authorization applies only when both conditions are true:

```text
VERCEL_ENV === "production"

NOVAFLOW_CANONICAL_URL ===
"https://novaflow-beta.vercel.app/"
```

Production status alone must not activate canonical metadata when the approved variable is missing or invalid.

---

# Production Indexing Policy

For the confirmed canonical Production Deployment, the approved indexing policy is:

```text
index
follow
```

The production homepage is intended to be discoverable by search engines.

After canonical activation, Production metadata and robots behavior must not block the approved canonical homepage.

This indexing approval applies only to the confirmed canonical Production environment.

---

# Preview and Development Policy

The following environments are non-canonical:

```text
Vercel Preview deployments
branch deployments
local development
non-canonical environments
Production deployments without the approved canonical variable
```

Their approved indexing policy is:

```text
noindex
nofollow
```

Preview and non-canonical deployments must:

- not appear in the production sitemap,
- not be treated as canonical,
- not advertise a Preview URL as the public NovaFlow origin,
- not publish a Preview URL through Open Graph metadata,
- not publish a Preview URL through robots or sitemap references,
- not inherit the Production value of `NOVAFLOW_CANONICAL_URL`.

---

# Sitemap Policy

The approved sitemap policy is:

```text
Canonical Production sitemap:
Enabled

Preview sitemap:
Not published as production discovery

Non-canonical Production sitemap:
No public URL entry
```

The initial canonical Production sitemap contains exactly one approved public route:

```text
https://novaflow-beta.vercel.app/
```

For the current single-page milestone, the homepage is the only approved sitemap entry.

The sitemap must not add:

```text
/contact
/privacy
/terms
/about
/pricing
Calendly URLs
section-anchor URLs
Preview URLs
Deployment-specific URLs
asset URLs
```

unless a future approved artifact explicitly authorizes those public routes or resources.

A homepage section anchor is not a separate sitemap route.

---

# Robots Policy

After canonical activation, the canonical Production robots endpoint must resolve to:

```text
User-Agent: *
Allow: /

Sitemap: https://novaflow-beta.vercel.app/sitemap.xml
```

It must:

- allow indexing of the canonical public homepage,
- reference the production sitemap,
- use the exact approved absolute URL,
- avoid localhost origins,
- avoid Preview origins,
- avoid branch origins,
- avoid immutable Deployment-specific origins,
- avoid GitHub origins,
- avoid Calendly origins.

Preview, development, and non-canonical environments must remain:

```text
User-Agent: *
Disallow: /
```

They must not publish a Sitemap line.

Robots behavior must not accidentally elevate a Preview, branch, or Deployment-specific URL to canonical status.

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

The approved canonical Open Graph URL is:

```text
https://novaflow-beta.vercel.app/
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

The environment-aware discovery implementation has been completed.

The exact canonical Production URL has now been approved.

The next authorized operational sequence is:

1. commit this Product Decision update,
2. push the approved document to `main`,
3. configure `NOVAFLOW_CANONICAL_URL` in Vercel Production only,
4. use the exact approved value,
5. create a new Production Deployment,
6. verify canonical metadata,
7. verify robots output,
8. verify sitemap output,
9. verify indexing behavior,
10. complete production release validation.

Deployment does not independently authorize Engineering or Operations to replace the approved hostname.

Any future hostname change requires a new Product Decision update before Production environment configuration changes.

---

# Production Verification Requirements

## Completed Before Canonical Activation

```text
Production deployment succeeds
Stable production URL exists
HTTPS homepage access succeeds
Pre-canonical robots endpoint returns Disallow: /
Pre-canonical sitemap contains no public URL
Preview and Deployment-specific URLs remain non-canonical
Product Owner confirms the exact URL
```

## Required After Canonical Activation

Validate:

```text
GET / returns HTTP 200
GET /favicon.ico returns HTTP 200
HTTP redirects to the approved HTTPS homepage
redirect behavior is finite and correct
metadataBase uses the approved origin
canonical homepage URL is exact
Open Graph URL is exact
production robots endpoint allows the homepage
robots endpoint references the absolute production sitemap
production sitemap contains exactly one homepage URL
production metadata uses index, follow
Preview metadata remains noindex, nofollow
Preview robots continue to disallow indexing
Preview sitemap does not publish canonical URLs
```

No localhost, Preview, branch, Deployment-specific, GitHub, or Calendly origin may appear in canonical discovery output.

---

# Release Validation Requirements

Package 6C must complete:

```text
Production redeployment
HTTPS and redirect inspection
canonical metadata inspection
robots.txt inspection
sitemap.xml inspection
production response-header inspection
mobile Lighthouse run 1
mobile Lighthouse run 2
desktop Lighthouse run 1
desktop Lighthouse run 2
production accessibility audit
keyboard-only navigation review
responsive review
console and runtime review
```

Lighthouse must run against:

```text
https://novaflow-beta.vercel.app/
```

It must not run against a Preview or immutable Deployment-specific URL for the final release record.

Both Lighthouse runs for each form factor must be retained.

A weaker result must not be discarded merely because another run scores higher.

---

# Decision Boundaries

This artifact does not authorize:

- a different canonical hostname,
- an inferred Vercel hostname,
- a Preview URL as canonical,
- a branch URL as canonical,
- an immutable Deployment URL as canonical,
- a custom-domain purchase,
- DNS changes,
- a `www` domain,
- an apex domain,
- a new public route,
- legal-page publication,
- metadata-copy changes,
- social-preview artwork,
- a theme color,
- a web manifest,
- analytics,
- changes to the Final CTA booking destination,
- direct Calendly links from additional surfaces,
- configuring the canonical variable in Preview or Development,
- hard-coding the canonical URL in application source.

---

# Definition of Done

This artifact is complete because:

- Vercel is approved as the hosting target,
- the stable Production hostname is explicit,
- the exact canonical homepage URL is explicit,
- Product Owner approval is recorded,
- the canonical freeze trigger is complete,
- the Production environment-variable value is explicit,
- the canonical activation sequence is explicit,
- the production indexing policy is approved,
- the Preview and development indexing policy is approved,
- sitemap publication policy is approved,
- robots behavior is approved,
- current public-route scope is explicit,
- metadata-copy ownership remains separate,
- the Calendly conversion boundary remains separate,
- Engineering and Operations can activate canonical discovery without inferring a hostname.

---

# Approval Effect

Approval of this document:

- authorizes Vercel as the current production hosting target,
- approves `novaflow-beta.vercel.app` as the canonical hostname,
- approves `https://novaflow-beta.vercel.app/` as the canonical homepage URL,
- approves `index, follow` for the canonical Production Deployment,
- approves `noindex, nofollow` for Preview and non-canonical environments,
- approves a canonical Production sitemap containing only the homepage,
- authorizes configuring `NOVAFLOW_CANONICAL_URL` in Vercel Production only,
- authorizes a new Production Deployment after environment configuration,
- authorizes final Package 6C release validation,
- does not authorize a different hostname,
- does not authorize canonical configuration in Preview or Development,
- does not authorize any deferred metadata or unrelated Product change.
