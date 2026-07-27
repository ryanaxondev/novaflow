# NovaFlow

# Brand Mark Specification

## Document Information

**Document Type:** Branding Specification
**Artifact:** Standalone Brand Mark
**Version:** v1
**Status:** Approved
**Owner:** Product / Design
**Approval Date:** July 28, 2026

**Enables:**

- standalone NovaFlow brand-mark asset,
- browser favicon generation,
- compact brand-mark use where a wordmark is unsuitable.

---

# Purpose

This document freezes the canonical standalone NovaFlow brand mark for the current product milestone.

It defines the mark’s concept, geometry, color, background behavior, source asset, and permitted use.

It does not redesign the existing NovaFlow wordmark or authorize replacing visible `NovaFlow` text in the Navbar or Footer.

---

# Approved Mark

The approved mark is:

```text
A simple geometric capital N
```

The mark communicates:

- structure,
- repeatability,
- forward movement,
- operational clarity.

The visual treatment remains restrained and compatible with NovaFlow’s approved visual direction.

---

# Canonical Source Asset

The canonical standalone source asset is:

```text
public/brand/novaflow-mark.svg
```

The browser favicon derived from this source is:

```text
src/app/favicon.ico
```

The SVG is the source of truth for the mark geometry.

The ICO is a generated delivery asset and must not be edited independently.

---

# Geometry

The mark uses a square coordinate system:

```text
viewBox: 0 0 64 64
canvas ratio: 1:1
```

It is constructed from three solid geometric components:

```text
Left vertical stem:
x=12, y=10, width=10, height=44, corner radius=1

Diagonal:
20,10 → 31,10 → 52,54 → 41,54

Right vertical stem:
x=42, y=10, width=10, height=44, corner radius=1
```

The geometry must not be redrawn, stretched, skewed, outlined, or rearranged without a new approved Branding decision.

---

# Color

Approved mark color:

```text
#2563EB
```

This is the approved NovaFlow blue accent.

The v1 standalone mark uses one solid color only.

Do not introduce:

- gradients,
- secondary colors,
- outlines,
- shadows,
- glow,
- texture,
- transparency inside the mark.

---

# Background

The canonical asset uses:

```text
transparent background
```

No permanent background shape is part of the v1 mark.

A product surface may place the mark over a compatible background only when contrast remains sufficient and the mark itself is unchanged.

---

# Safe Area and Scaling

The source geometry preserves clear space within the 64 × 64 canvas.

Rules:

- preserve the square canvas,
- preserve aspect ratio,
- scale uniformly,
- keep the mark centered,
- do not crop the stems or diagonal,
- do not add surrounding text inside the icon asset,
- do not combine it with another symbol.

For very small browser-tab use, the generated favicon may use standard raster resolutions derived from the same geometry.

---

# Approved Uses

The mark may be used for:

- favicon,
- browser-tab identity,
- compact application icon,
- small standalone brand identifier,
- future approved metadata surfaces.

The mark does not automatically authorize:

- replacing the Navbar text wordmark,
- replacing Footer brand text,
- creating an app-store icon,
- creating social-media avatars,
- creating a logo lockup,
- changing homepage branding.

Those uses require their own scoped Design or Branding approval when relevant.

---

# Prohibited Variations

Do not:

- change the blue color,
- add a filled square or circle behind the mark,
- add a border,
- add a gradient,
- add a shadow,
- round the complete icon into an app tile,
- rotate or italicize the mark,
- use a different letterform,
- add the full `NovaFlow` word inside the favicon,
- derive a new mark from the homepage mockup.

---

# Engineering Handoff

Engineering may add:

```text
public/brand/novaflow-mark.svg
src/app/favicon.ico
```

Requirements:

- preserve the SVG exactly,
- use the SVG as the canonical source,
- keep the favicon at the App Router metadata-file location,
- do not add a manual favicon link,
- do not add a dependency,
- do not modify unrelated metadata or layout,
- validate that `/favicon.ico` returns HTTP 200.

---

# Definition of Done

This Branding Specification is complete when:

- the geometric N is explicitly approved,
- exact geometry is recorded,
- `#2563EB` is recorded as the only mark color,
- the transparent background is explicit,
- the canonical SVG exists,
- the favicon is derived from the canonical geometry,
- no additional brand decision is invented.

---

# Approval Effect

Approval of this document:

- establishes `public/brand/novaflow-mark.svg` as the canonical standalone NovaFlow mark,
- authorizes generation and use of `src/app/favicon.ico`,
- resolves the Branding decision that previously blocked the favicon task,
- does not modify or replace the existing text wordmark.
