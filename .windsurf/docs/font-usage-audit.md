---
description: Audit of font-size and font-family usage across the live site
---

# Font Usage Audit

The site has a well-defined custom type scale in `globals.css`, but component authors frequently bypass it, mix font families inconsistently, and reuse the same size token for unrelated visual roles — producing text that reads larger and less consistent than intended.

## 1. Type Scale Reference

Defined in `@/app/globals.css:44-122` (`@theme`) with mobile overrides at `@/app/globals.css:127-145`.

| Token               | Desktop          | Mobile (<768px) | Notes                                       |
| ------------------- | ---------------- | --------------- | ------------------------------------------- |
| `text-xs`           | 14px             | 12px            |                                             |
| `text-sm`           | 16px             | 14px            |                                             |
| `text-md`           | 20px             | 16px            |                                             |
| `text-lg`           | 24px             | 20px            |                                             |
| `text-xl`           | 32px             | 20px            |                                             |
| `text-2xl`          | 36px             | 24px            |                                             |
| `text-3xl`          | 48px             | 28px            |                                             |
| `text-4xl`          | 64px             | 36px            | **Not documented** in the style guide table |
| `text-5xl`          | 76px             | 44px            | **Not documented** in the style guide table |
| `text-section-sm`   | clamp 24px→48px  | —               |                                             |
| `text-section-md`   | clamp 26px→56px  | —               |                                             |
| `text-section-lg`   | clamp 28px→64px  | —               | **Not documented**                          |
| `text-section-xl`   | clamp 32px→76px  | —               |                                             |
| `text-headline1`    | clamp 44px→140px | —               | Homepage hero only                          |
| `text-headline2`    | clamp 30px→96px  | —               | Homepage hero only                          |
| `text-headline-sub` | clamp 16px→36px  | —               | Homepage hero only                          |
| `text-arch`         | clamp 11px→20px  | —               | ClearPath arch labels only                  |

The style guide (`@/.windsurf/docs/landing-pages-style-guide.md:145-156`) only documents up to `text-3xl` plus the three `text-section-*` tokens — `text-4xl`, `text-5xl`, `text-section-lg`, and all `text-headline*`/`text-arch` tokens exist in code but aren't in the reference doc, so authors have no guidance on when (if ever) to reach for them.

## 2. Findings by Category

### 2.1 Conflicting/duplicate size classes on one element

- `@/components/packages/CTA.tsx:12` — `<Button className="text-md text-lg uppercase">` applies two different size utilities to the same element; `text-lg` wins by CSS order but this is almost certainly an editing leftover, not intentional.

### 2.2 Heading hierarchy inversions (semantic tag vs. visual size)

- `@/app/(site)/(landing-pages)/contact/page.tsx:23` — page `<h1>` is `text-2xl` (36px desktop).
- `@/app/(site)/(landing-pages)/blog/[slug]/page.tsx:89` — post `<h1>` is `text-3xl` (48px), larger than contact's `<h1>`.
- `@/components/about/Team.tsx:11` — `<h3>` section header at `text-2xl` (36px); `@/components/about/Team.tsx:24` — `<h4>` member name at `text-xl` (32px) — fine in isolation, but compare to:
- `@/components/packages/PackageCards.tsx:22` — a bare `<h2>` (no `SectionHeading`) at `text-3xl` (48px), bigger than the `<h1>` on contact and blog pages.

There is no consistent rule mapping heading level → size across pages; each page picks a size ad hoc.

### 2.3 Same visual role ("section intro heading"), different sizes across pages

All of the following play the same role — a short intro/heading sentence inside a body section (not a hero) — yet use four different sizes and two different components:

- `@/components/visas/VisasIntro.tsx:26` — `<h2 className="font-aegean text-lg text-black md:text-xl">`
- `@/components/visas/RequirementsSection.tsx:22` — `<h2 className="font-aegean text-xl text-black uppercase md:text-2xl">`
- `@/components/about/ProfileMain.tsx:11` — `<h2 className="font-aegean mb-6 text-2xl uppercase">`
- `@/components/visas/PersonaCards.tsx:44` — `<h2 className="mb-8 font-serif text-xl md:text-3xl">` (also uses `font-serif` instead of `font-aegean`, see 2.4)
- `@/components/about/Team.tsx:11` — `<h3 className="mb-4 text-2xl uppercase">`

None of these route through a shared component — each is a hand-written `<h2>`/`<h3>` with its own class string.

### 2.4 Font-family inconsistency (`font-aegean` vs `font-serif`)

`globals.css:38-41` designates `font-aegean` (TAN Aegean) as the display/heading font and `font-serif` (Roboto Serif) as the body font, with `font-sans` defaulting to aegean. In practice:

- `@/components/Header.tsx:193` — top-level mobile nav links: `font-aegean`.
- `@/components/Header.tsx:106` and `:205` — secondary mobile nav links (same nav, one level down): `font-serif`.
- `@/components/visas/PersonaCards.tsx:44` — section heading: `font-serif` (should be a heading, expected `font-aegean`).
- `@/components/visas/RequirementsSection.tsx:22` — same role, correctly `font-aegean`.
- `@/components/InternalPageLinks.tsx:78` (`font-aegean`, heading) vs `:94` (`font-serif`, nav list) — consistent with the intended split, useful as a positive counter-example.

The Header case is the clearest bug: two nesting levels of the _same_ navigation menu use different font families for no apparent reason.

### 2.5 `SectionHeading` / `TextWithIcon` textSize drift

Most hero sections correctly standardize on `textSize="text-section-sm"` (`about/Hero.tsx`, `packages/Hero.tsx`, `visas/BenefitsBlock.tsx`, `visas/VisasCTA.tsx`, `blogLanding/Hero.tsx`, `lifeInSpain/HousingCta.tsx`, `lifeInSpain/SectionCta.tsx`). Exceptions:

- `@/components/home/Reviews.tsx:14` — passes `textSize="text-3xl"` (flat 48px) instead of a `text-section-*` clamp token, so it won't scale fluidly like every other `SectionHeading` usage.
- `@/components/about/OurStory.tsx:9-17` — hand-rolls the exact same "line + star icon + offset second line" pattern that `SectionHeading` already implements, using `text-section-sm` directly instead of the component. Duplicated logic, easy to drift further out of sync over time.
- `@/components/home/WeKnowSpain.tsx:16` and `@/components/home/WhyChooseUs.tsx:13` use the sibling `TextWithIcon` component with `text-section-md` — a third pattern doing near-identical work to `SectionHeading`.

### 2.6 Arbitrary bracket values bypassing the scale

- `@/components/packages/PackageCard.tsx:51` — `text-[12px]` fallback for collapsed feature list text.
- `@/app/(site)/(landing-pages)/blog/[slug]/page.tsx:87` — `text-[12px]` for the "Published:" date.
- `@/components/contact/EmailBlock.tsx:68` — `text-[10px]` for a dropdown arrow glyph.

These don't participate in the mobile-size overrides defined in `globals.css:127-145`, so they're frozen at one size regardless of viewport, unlike every token-based size in the scale.

### 2.7 Ad hoc line-height instead of paired tokens

`globals.css:99-111` pairs specific line-heights with specific size tokens (e.g. `--text-section-xl--line-height`). Several components instead hardcode unrelated Tailwind line-height utilities on top of a size token:

- `@/components/home/WeKnowSpain.tsx:20` and `:28` — `text-lg leading-10` (line-height 2.5rem on a 24px/20px font — very loose).
- `@/components/home/Hero.tsx` — quote/heading elements mixing `leading-18` with `text-3xl` (`@/components/home/BottomCTA.tsx:11`, same pattern).
- `@/components/packages/Accordion.tsx:185` — `text-dark text-base/7` uses a raw Tailwind `text-base` (not a project token) with an explicit `/7` line-height, sitting alongside `text-md`/`text-sm` used everywhere else in the same file.

### 2.8 "Too big" candidates — everything above `text-2xl` outside true heroes

For sanity-checking against actual rendered size, every non-hero usage of `text-3xl` and up:

- `text-3xl` (48px desktop): `@/components/packages/PackageCards.tsx:22` (section header), `@/components/home/Reviews.tsx:14` (via SectionHeading override), `@/components/packages/PackageCard.tsx:41` (expanded price), `@/app/(site)/(landing-pages)/blog/[slug]/page.tsx:89` (`<h1>`), `@/components/home/BottomCTA.tsx:11`.
- `text-4xl` (64px desktop): `@/components/HeaderFull.tsx:118` (legal page hero `<h1>`, doc-referenced but worth re-checking against the 48px used elsewhere for page titles).
- `text-5xl` (76px desktop): `@/components/Carousel.tsx:300` (decorative quote mark — likely intentional, but confirm it isn't visually competing with the review text at `text-sm`).
- `text-section-xl` (clamp up to 76px): default `SectionHeading` size when no `textSize` prop is passed — worth confirming every consumer explicitly overrides it, otherwise a heading could unintentionally render far larger than its neighbors.
- `text-headline1`/`text-headline2` (clamp up to 140px/96px): `@/components/home/Hero.tsx:18-20` — homepage-only, but this is the single largest text on the site and worth the user's explicit sign-off that it's intentional at all viewport widths.

## 3. Quantitative Summary

Distinct size tokens observed in use, by area (excludes `components/preview`):

| Area                                   | Distinct `text-*` tokens seen                                                                                                                   |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `components/Header.tsx` / `Footer.tsx` | `text-xs`, `text-sm`, `text-md`                                                                                                                 |
| `components/home/*`                    | `text-sm`, `text-md`, `text-lg`, `text-xl`, `text-3xl`, `text-section-md`, `text-headline1`, `text-headline2`, `text-headline-sub`, `text-arch` |
| `components/packages/*`                | `text-xs`, `text-sm`, `text-md`, `text-lg`, `text-2xl`, `text-3xl`, `text-section-md`, `text-[12px]`                                            |
| `components/visas/*`                   | `text-sm`, `text-md`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-section-sm`                                                           |
| `components/about/*`                   | `text-sm`, `text-md`, `text-xl`, `text-2xl`, `text-section-sm`                                                                                  |
| `components/blogLanding/*` + blog page | `text-xs`, `text-sm`, `text-lg`, `text-2xl`, `text-3xl`, `text-section-sm`, `text-[12px]`                                                       |
| `components/contact/*` + page          | `text-xs`, `text-sm`, `text-lg`, `text-2xl`, `text-[10px]`                                                                                      |
| `components/lifeInSpain/*`             | `text-md`, `text-section-sm`                                                                                                                    |

Nine to ten distinct size tokens are in play per page area, with almost no area sticking to a small, deliberate subset — this is the root cause of the "inconsistent" feel.

## 4. Recommendations (non-binding)

- **Document and gate the full scale**: add `text-4xl`, `text-5xl`, `text-section-lg`, `text-headline*`, and `text-arch` to the style guide table with explicit "use only for X" notes, so authors stop improvising.
- **Introduce a shared `SectionIntro`-style heading component** for the "intro heading inside a body section" role (2.3) so all five current variants converge on one size.
- **Fix the Header font-family split** (2.4) — pick one family for all nav-menu levels.
- **Remove bracket values** (2.6) in favor of `text-xs` (14px/12px) which is close to both `text-[12px]` and `text-[10px]` cases, or add a smaller token if truly needed at two places.
- **Replace ad hoc `leading-*` utilities** (2.7) with the token-paired line-heights, or extend the token set if a genuinely new pairing is needed.
- **Audit `PackageCards.tsx:22`, `Reviews.tsx:14`, and `blog/[slug]/page.tsx:89`** first — these are the most visible "too big for context" candidates outside of intentional heroes.
- **Fix the `CTA.tsx:12` duplicate class** (2.1) — trivial one-line cleanup.
