# NovaFlow

# Session 13.5 Benefits and Features Architecture Check

## Document Information

**Document Type:** Engineering Architecture Check
**Artifact:** Benefits and Features System
**Version:** v1
**Status:** Approved
**Owner:** Engineering

---

# Purpose

Records the approved architecture decisions for the Session 13.5 Benefits and Features implementation. Freezes component boundaries, copy ownership, Product-canvas behavior, responsive recomposition, and implementation scope.

---

# Approved Decisions

## Benefits

1. `Benefits.tsx` remains the sole owner of the Benefits section.
2. Benefits owns the approved heading and all four approved outcome names and descriptions.
3. Benefits uses one semantic `<ul>` with four equal `<li>` outcomes.
4. The immutable Benefits data remains module-local inside `Benefits.tsx`.
5. Benefits removes all `Card`, `CardContent`, and `CardTitle` usage.
6. Benefits uses a connected modular outcome register built with local CSS, borders, nodes, rules, and pseudo-elements.
7. Benefits heading becomes left or band aligned.
8. Benefits Section uses the base surface; `border-y bg-muted/20` is removed from the Section root.
9. Benefits does not consume `operational-grid`.
10. No new Benefits component is authorized.

## Features

11. `Features.tsx` owns section semantics, `id="features"`, the approved heading, all six capability names and descriptions, the capability register, macro layout, and Product-canvas composition.
12. The immutable capability data remains module-local inside `Features.tsx`.
13. Features uses one focused Product-canvas component:

    ```text
    src/components/marketing/FeaturesCapabilityCanvas.tsx
    ```

14. Exact API:

    ```tsx
    export function FeaturesCapabilityCanvas();
    ```

15. `FeaturesCapabilityCanvas` has no props, exports no types, remains a Server Component, is consumed only by `Features.tsx`, is not reusable outside Features, and owns only the Product capability canvas and Product-interface copy.
16. `FeaturesCapabilityCanvas` uses private immutable module-local Product data and private same-file helpers only.
17. `Features.tsx` owns all six marketing capability names and descriptions.
18. Product-interface copy lives only in `FeaturesCapabilityCanvas.tsx`.
19. No marketing capability description is duplicated inside the Canvas.
20. Neither Features nor the Canvas uses the `Card` primitive.
21. The Canvas is one bounded operational Product field, not a collection of repeated feature cards.

## Product Vocabulary

22. The Canvas uses only the approved Employee onboarding scenario and vocabulary.
23. Remove all Purchase-request vocabulary, including `Workflow builder`, `Draft`, `Purchase request`, `3 steps`, `Submit request`, `Review request`, `Operations`, `Attached`, and `Automated`.
24. Do not add fake metrics, users, companies, dates, integrations, activity history, or Product claims.

## Workbench Boundary

25. Do not modify or reuse `HeroProductWorkbench`.
26. Do not import its data, types, helpers, or markup.
27. Hero Workbench and Features Canvas share only approved Product vocabulary, semantic tokens, visual grammar, and the Employee onboarding narrative.
28. They do not share React components, data arrays, types, private helpers, or markup.

## Product-canvas Semantics

29. The Canvas is static semantic content, not an interactive Product mock.
30. It uses meaningful headings and semantic lists where appropriate.
31. It must not create fake inputs, checkboxes, tabs, buttons, dropdowns, or disabled controls.
32. Decorative nodes, rails, markers, and Grid layers remain hidden from assistive technology.
33. No local state, event handlers, hydration, or `"use client"` directive is authorized.

## Operational Grid

34. `FeaturesCapabilityCanvas` is authorized to consume the existing `operational-grid` utility.
35. No `globals.css` change is authorized.
36. The Grid appears only inside a bounded decorative layer owned by the Canvas.
37. The Canvas owns the clipping boundary, surface, radius, stacking context, and foreground content layer.
38. A real Grid layer must be `aria-hidden="true"`, `pointer-events-none`, non-interactive, and behind readable content.
39. The Grid must not be applied to the complete Features Section root, the Features narrative/header region, Benefits, or any other Homepage section.
40. No second Grid utility, raw-color Grid recipe, new cell size, or Grid animation is authorized.

## Mobile

41. Benefits Mobile becomes a one-column connected register.
42. Benefits preserves approved DOM order and equal semantic weight.
43. Features Mobile order is:

    ```text
    heading
    → Product canvas
    → capability register
    ```

44. The capability register is one column on narrow Mobile and may become two columns at wider responsive widths.
45. The Product Canvas is recomposed with CSS; it is not proportionally scaled from Desktop.
46. Product labels remain at least 12px.
47. No horizontal scrolling.
48. No carousel, accordion, tabs, JavaScript breakpoints, or Client state.

## Primitives and Dependencies

49. Reuse `Container`, `Section`, and `SectionHeader` unchanged.
50. No primitive API change.
51. No `globals.css` change.
52. No new dependency.
53. No Client Component.
54. No motion implementation.
55. No new public asset.

---

# Implementation Scope

## Modify

```text
src/components/marketing/Benefits.tsx
src/components/marketing/Features.tsx
```

## Create

```text
src/components/marketing/FeaturesCapabilityCanvas.tsx
```

## Explicitly Deferred

Every other Production file remains unchanged, including:

```text
src/app/globals.css
src/components/marketing/Hero.tsx
src/components/marketing/HeroProductWorkbench.tsx
src/components/marketing/Problem.tsx
src/components/marketing/Solution.tsx
src/components/marketing/SocialProof.tsx
src/components/marketing/Pricing.tsx
src/components/marketing/FAQ.tsx
src/components/marketing/FinalCTA.tsx
src/components/marketing/Navbar.tsx
src/components/marketing/Footer.tsx
src/components/ui/*
src/app/(marketing)/page.tsx
```

---

# Validation Gates

- `pnpm lint`
- `pnpm exec tsc --noEmit`
- `pnpm build`
- `git diff --check`
- 375px Benefits and Features evidence
- 1440px Benefits evidence
- 1440px Features evidence
- no horizontal overflow
- one semantic Benefits `<ul>` with four `<li>` outcomes
- no Card composition in Benefits
- no Card primitive in Features or the Canvas
- no Purchase-request vocabulary
- `operational-grid` localized only inside the Canvas
- no fake Product controls
- no unauthorized file changes
