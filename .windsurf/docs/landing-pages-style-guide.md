---
description: Hola España landing page component and styling conventions
---

# Landing Page Style & Structure Guide

This doc catalogs the patterns used across `app/(site)/(landing-pages)/*/page.tsx` and their associated components. Review it before adding or editing landing pages.

## Layout Wrapper

`app/(site)/(landing-pages)/layout.tsx` adds a top spacer and a footer mosaic strip to every landing page:

- `pt-28 md:pt-[152px]` — compensates for the fixed/absolute header.
- `<Image src="/images/mosaic-strip.webp" ... />` — rendered after `{children}` on every landing page.

Pages themselves are responsible for their own vertical sections.

## Page-Level Patterns

Most pages are thin orchestration files that import named components from a folder under `components/`:

```tsx
// packages/page.tsx
import { Hero, PackageCards, CTA, FAQ } from '@/components/packages';

export default function page() {
  return (
    <>
      <div style={{ background: 'linear-gradient(to bottom, #ffffff, #ede2d7)' }}>
        <Hero />
        <PackageCards />
        <CTA />
      </div>
      <FAQ />
    </>
  );
}
```

Common patterns:

- **Wrap in `<section className="bg-default">`** (about page).
- **Use inline gradient divs** for page-level background transitions (packages, blog).
- **Export components through `components/<page>/index.tsx`** for clean imports.

## Shared Components

### `Container`

`@/components/Container.tsx`

- Default tag: `<section>`.
- `size` prop maps to max-widths: `xs`/`sm`/`md`/`lg`/`xl`/`2xl`/`3xl` (default) / `full`.
- Default centers with `mx-auto` unless `noCenter`.
- Horizontal padding is **almost always added by the consumer** via `className="px-4 md:px-8"`.
- Optional decorative `iconProps` with `icon: 'star' | 'sun'` and `iconColor`/`iconClassName`.

Typical usage:

```tsx
<Container className="px-4 py-16 md:px-8 md:py-24">
  {/* content */}
</Container>
```

### `SplitContainer`

`@/components/SplitContainer.tsx`

- Two-column image + text layout.
- `imgSrc` is required.
- `imgLeft` places the image on the left (desktop) and swaps the mobile order.
- `cols` defaults to `grid-cols-1 md:grid-cols-2`; `cols="cols-2"` makes the image wider (`md:w-[min(125%,50dvw)]`).
- `header` node is rendered above the grid with `mb-8 pl-8 md:mb-16 md:pl-16`.
- `underImageContent` renders below the image (used for CTA buttons on image side).
- Common image height: `imgHeight="h-[550px]"`.

Used by:

- `about/Hero.tsx`
- `packages/Hero.tsx`
- `blogLanding/Hero.tsx`
- `visas/BenefitsBlock.tsx`
- `visas/VisasCTA.tsx`

### `SectionHeading`

`@/components/SectionHeading.tsx`

- Accepts `lines: (string | { first: string; last: string })[]`.
- Object lines render a star icon between `first` and `last`.
- Default indent: second line offset by `--section-heading-offset`.
- Common sizes: `text-section-sm`, `text-section-md`, `text-section-xl`.
- Common icon color: `text-terracotta-off`.
- Usually rendered uppercase via `className="uppercase"`.

Example from packages hero:

```tsx
<SectionHeading as="h1" lines={copy.header} className="uppercase" textSize="text-section-sm" iconColor="text-terracotta-off" />
```

### `Button`

`@/components/Button.tsx`

- Variants: `terracotta` (white text) or `sand` (black text).
- Uses layered `::before`/`::after` pseudo-elements for hover lift and shadow.
- Default `text-2xl` padding.
- Often wrapped in `<Link href="/contact">` or used as a `<Button as="span">` inside a `<Link>`.

### `HeaderFull`

`@/components/HeaderFull.tsx`

- Full-width hero banner: `h-[370px]` with `bg-[url(/images/spain-flag.webp)]`.
- Blue overlay: `bg-blue-overlay absolute inset-0`.
- Centered uppercase `<h1>` in `text-4xl`.
- Used by `legal/page.tsx` as a generic page hero.

## Color Palette

All colors are defined in `@/app/globals.css` as CSS variables:

| Token | Value | Usage |
| --- | --- | --- |
| `default` | `#fcf7f2` | Page background |
| `sand` | `#ede2d7` | Cards, buttons, sections |
| `sand-gold` | `#d7b48b` | Featured sections |
| `sand-dark` | `#d0a97c` | Accents, hover states |
| `ocean` | `#3e5674` | Primary dark sections |
| `ocean-alt` | `#8a9eb1` | Lighter ocean variant |
| `terracotta` | `#c47556` | Brand accent |
| `terracotta-off` | `#c36c44` | Icon color |
| `terracotta-alt` | `#b56743` | Hover/darker accent |
| `blue-overlay` | `#3e5674a4` | Image overlays |
| `text-dark` | `#000000a8` | Secondary body text |

Use Tailwind classes like `bg-ocean`, `text-white`, `text-color-dark`, `bg-sand-gold`.

## Typography

Headings use `font-aegean` (TAN Aegean). Body text uses `font-serif` (Roboto Serif).

| Token | Desktop | Mobile |
| --- | --- | --- |
| `text-xs` | 14px | 12px |
| `text-sm` | 16px | 14px |
| `text-md` | 20px | 16px |
| `text-lg` | 24px | 20px |
| `text-xl` | 32px | 20px |
| `text-2xl` | 36px | 24px |
| `text-3xl` | 48px | 28px |
| `text-section-sm` | clamp(24px → 48px) | — |
| `text-section-md` | clamp(26px → 56px) | — |
| `text-section-xl` | clamp(32px → 76px) | — |

- Section headings are usually uppercase.
- Body paragraphs often use `text-color-dark` for softer contrast.
- Italic emphasis is common in visas requirements (`<em className="italic">`).

## Spacing Conventions

- Vertical section padding: `py-16 md:py-24` or `py-18 md:py-32`.
- Horizontal page padding: `px-4 md:px-8` (containers), sometimes `px-6 md:px-12` or `px-8 md:px-16`.
- Large gaps between sections: `mb-18 md:mb-42`.
- Component internal gaps: `gap-6 md:gap-8`, `gap-10 md:gap-16`.
- Card grids: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-24`.

## Responsive Patterns

- Mobile-first Tailwind classes.
- Common breakpoints: `md:` (768px+), `lg:` (1024px+), `min-[1175px]:` (header nav).
- Hide on mobile: `hidden md:block`.
- Show only on mobile: `md:hidden`.
- Full-width images on mobile often overflow with `w-[110%]`.

## Page-Specific Architecture

### About

- `about/page.tsx` wraps sections in `<section className="bg-default">`.
- `GradientWrapper` applies a page-level gradient behind `OurStory` and `Team`.
- `Team` uses a bordered list layout with alternating image/text grids.

### Packages

- Page background: `linear-gradient(to bottom, #ffffff, #ede2d7)`.
- `PackageCards` uses a complex three-column pricing grid with `lg:grid-cols-3`.
- `FAQ` uses a custom animated accordion with spring animations.
- FAQ has a decorative `TileBorder` divider at the top.

### Visas

- Page uses `Container size="full"` sections with full-width gradients.
- `VisasIntro` is a centered white section with tab-style jump links (`bg-sand` rounded buttons with shadow).
- Each visa type (`nlv`, `dnv`) reuses `PersonaCards`, `BenefitsBlock`, `RequirementsSection` with variant props.
- Variants swap colors: `nlv` = sand-gold, `dnv` = ocean.
- `BenefitsBlock` uses `SplitContainer` with `imgLeft` and an under-image CTA button.
- `RequirementsSection` has a decorative background `SunIcon`.
- `VisasCTA` uses `SplitContainer` with a sand background.

### Blog

- `blog/page.tsx` is `async` and fetches Sanity posts.
- `BlogContent` is a client component handling search, categories, and pagination.
- `BlogPosts` renders a responsive grid of linked cards.
- Post detail page (`blog/[slug]/page.tsx`) defines custom PortableText components.

### Contact

- Full-bleed background image with `bg-blue-overlay`.
- Left column: heading, description paragraphs, social icons.
- Right column: `CalendarBlock` (Calendly popup) and `EmailBlock` (contact form).
- Uses `min-h-[max(90svh,700px)]` for viewport sizing.

### Legal / Life in Spain / Tax

- Currently minimal or placeholder.
- Legal uses `HeaderFull` for a generic hero.
- Life in Spain has a populated `lifeInSpainCopy.json` but a minimal page shell.

## Copy JSON Conventions

- Copy lives in `lib/siteCopy/<page>Copy.json`.
- Keys are camelCase and grouped by section: `hero`, `intro`, `cta`, `faq`, etc.
- Section headings are often arrays: `["First", { "first": "", "last": "Second" }]`.
- Lists of items are arrays of objects with `bold`, `text`, optional `italic`.
- Images are referenced by string paths in the JSON.
- Components import specific sections: `import { hero as copy } from '@/lib/siteCopy/aboutCopy.json'`.

## When Building a New Landing Page

1. Create `app/(site)/(landing-pages)/<route>/page.tsx`.
2. Create `components/<route>/` with an `index.tsx` barrel export.
3. Create `lib/siteCopy/<route>Copy.json` with `hero`, section keys, and CTAs.
4. Use `Container` with `px-4 md:px-8` for horizontal padding.
5. Use `SplitContainer` for hero sections with an image + text split.
6. Use `SectionHeading` for large section titles with star icons.
7. Use `Button` for CTAs; link to `/contact` when relevant.
8. Respect the color palette and typography tokens in `globals.css`.
9. Keep page files as thin orchestration layers; put layout/styling in components.

## Files to Reference

- `@/app/(site)/(landing-pages)/layout.tsx` — landing page wrapper.
- `@/app/globals.css` — theme tokens.
- `@/components/Container.tsx` — wrapper/max-width.
- `@/components/SplitContainer.tsx` — image/text split.
- `@/components/SectionHeading.tsx` — decorated headings.
- `@/components/Button.tsx` — CTA buttons.
- `@/lib/siteCopy/*Copy.json` — copy structure examples.
