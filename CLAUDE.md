# Hola Espana - Immigration Services Website

## Project Overview

Next.js 14+ website for Spanish immigration law firm. Modern, Gaudi-inspired design targeting high net-worth US to Spain relocations.

**Client:** Immigration attorney (friends/family project)
**Budget:** $5,500 ($2k services credit + $3.5k cash)
**Timeline:** 6-7 weeks + 30 days support

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (CSS-first config with @theme directive)
- **CMS:** Sanity (integrated at /studio route)
- **Animations:** React Spring (NOT Framer Motion - 13kb vs 60kb)
- **Deployment:** Vercel
- **Analytics:** Vercel Analytics (NOT Google Analytics - privacy-friendly)

## Architecture

### Directory Structure

```
app/
├── (site)/                  # Public routes (route group)
│   ├── page.tsx             # Homepage
│   ├── layout.tsx           # Site layout (Header + Footer)
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── packages/page.tsx
│   └── blog/
│       ├── page.tsx
│       ├── layout.tsx
│       └── [slug]/page.tsx
├── (preview)/               # Preview/staging route group
│   ├── layout.tsx
│   └── preview/page.tsx
├── studio/                  # Sanity CMS at /studio
│   └── [[...tool]]/page.tsx
├── layout.tsx               # Root layout
└── globals.css              # Tailwind v4 @theme config

components/
├── Header.tsx               # Site navigation
├── Footer.tsx               # Site footer
├── Icons.tsx                # SVG icon components
├── SectionContainer.tsx     # Reusable section wrapper
├── animations/
│   └── FadeIn.tsx           # Scroll-triggered animations
├── home/                    # Homepage sections
│   ├── Hero.tsx
│   ├── HeroCta.tsx
│   ├── WhyBookUs.tsx
│   ├── HowItWorks.tsx
│   ├── OurTeam.tsx
│   ├── Reviews.tsx
│   └── Blogs.tsx
├── about/                   # About page sections
│   ├── index.tsx
│   ├── Hero.tsx
│   ├── OurStory.tsx
│   ├── WhatYouGet.tsx
│   ├── Team.tsx
│   └── CTA.tsx
└── preview/                 # Preview page sections
    ├── index.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Services.tsx
    ├── ServiceCard.tsx
    ├── WhatWeDo.tsx
    ├── WeKnowSpain.tsx
    ├── CTA.tsx
    └── components/
        ├── Button.tsx
        └── Wave.tsx

lib/
├── constants.ts             # App constants (e.g., HEADER_HEIGHT)
├── siteCopy.ts              # Static copy/content strings
└── utils/
    ├── cn.ts                # Class name utility (clsx + tailwind-merge)
    └── analytics.ts         # Vercel Analytics events

sanity/
├── env.ts
├── lib/
├── schemas/
├── schemaTypes/
└── structure.ts

types/                       # TypeScript type definitions
```

**Note:** There is NO `src/` directory. All paths are from the project root.

## Design System

### Color Palette (Tailwind v4 @theme)

These are the **actual** color tokens defined in `app/globals.css`. Use these exact names.

**Core Colors:**

| Token                    | Value       | Usage               | Tailwind Class        |
| ------------------------ | ----------- | ------------------- | --------------------- |
| `--color-white`          | `#ffffff`   | Backgrounds, text   | `bg-white`, `text-white` |
| `--color-sand`           | `#ede2d7`   | Warm backgrounds    | `bg-sand`, `text-sand` |
| `--color-ocean`          | `#3e5674`   | Primary blue        | `bg-ocean`, `text-ocean` |
| `--color-ocean-alt`      | `#8a9eb1`   | Lighter blue accent | `bg-ocean-alt`        |
| `--color-blue-footer`    | `#3b6e95`   | Footer background   | `bg-blue-footer`      |
| `--color-blue-overlay`   | `#3e5674a4` | Semi-transparent    | `bg-blue-overlay`     |
| `--color-blue-overlay-alt` | `#33688585` | Alt semi-transparent | `bg-blue-overlay-alt` |
| `--color-terracotta`     | `#c47556`   | Warm accent/CTAs    | `bg-terracotta`, `text-terracotta` |
| `--color-terracotta-alt` | `#b56743`   | Darker terracotta   | `bg-terracotta-alt`   |

**Text Colors:**

| Token                | Value       | Usage              |
| -------------------- | ----------- | ------------------ |
| `--text-color-black` | `#000000`   | Full black text    |
| `--text-color-dark`  | `#000000a8` | Softened dark text  |
| `--text-color-white` | `#ffffff`   | White text          |
| `--text-color-light` | `#fcf7f2`   | Light/cream text    |
| `--text-color-brown` | `#54331e`   | Brown text          |

**Functional Colors:**

| Token             | Value     | Usage          |
| ----------------- | --------- | -------------- |
| `--color-success` | `#7b8c5c` | Success states |
| `--color-warning` | `#d4a574` | Warnings       |
| `--color-error`   | `#c4734a` | Errors         |
| `--color-info`    | `#4a6660` | Info           |

**IMPORTANT:** Do NOT use the old `--brand-*`, `--primary`, `--secondary`, or `--accent` tokens. They do not exist.

### Typography

**Font Families (defined in @theme):**

| Token            | Font          | Usage                         | Tailwind Class    |
| ---------------- | ------------- | ----------------------------- | ----------------- |
| `--font-aegean`  | TAN Aegean    | Headings (h1-h6)              | `font-aegean`     |
| `--font-serif`   | serif-roboto  | Body text (default)           | `font-serif`      |
| `--font-script`  | La Luxes      | Decorative/accent text        | `font-script`     |
| `--font-sans`    | = font-aegean | Alias for headings            | `font-sans`       |

**Global font rules (set in globals.css):**
- All elements except headings use `var(--font-serif)` by default
- All `h1`-`h6` and their children use `var(--font-aegean)`
- Global letter-spacing: `var(--tracking-widest)`

**Font Size Scale:**

| Token              | Desktop   | Mobile (<640px) |
| ------------------ | --------- | --------------- |
| `--text-xs`        | 0.875rem  | 0.75rem         |
| `--text-sm`        | 1rem      | 0.875rem        |
| `--text-md`        | 1.25rem   | 1rem            |
| `--text-lg`        | 1.5rem    | 1.125rem        |
| `--text-xl`        | 2rem      | 1.25rem         |
| `--text-2xl`       | 2.25rem   | 1.5rem          |
| `--text-3xl`       | 3rem      | 1.75rem         |
| `--text-4xl`       | 4rem      | 4rem            |
| `--text-headline1` | 8.75rem   | n/a             |
| `--text-headline2` | 6rem      | n/a             |

**Line Heights:** Each font size has a paired `--text-{size}--line-height` variable. Larger sizes have tighter line heights (1.0-1.05 for headlines, 1.5 for body).

### Other Global Styles

- `scroll-margin-top: 94px` on all `[id]` elements (accounts for fixed header)
- `HEADER_HEIGHT = 96` constant in `lib/constants.ts`

### Component Patterns

- **Server Components by default** (use `'use client'` only when needed)
- **Section organization:** Components grouped by page (`components/home/`, `components/about/`)
- **Barrel exports:** Page section groups use `index.tsx` for re-exports
- **Static copy:** Text content lives in `lib/siteCopy.ts`, not hardcoded in components
- **Animations:** Use `<FadeIn>` component for scroll reveals
- **Section wrapper:** Use `<SectionContainer>` for consistent section structure

## Coding Conventions

### TypeScript

- Use strict mode
- Prefer interfaces over types for objects
- Always type function parameters and returns
- Use `const` over `let`
- No `any` types - use `unknown` if truly unknown

### React/Next.js

- Functional components with TypeScript
- Server Components by default (`'use client'` only when needed)
- Use App Router file conventions:
  - `page.tsx` for routes
  - `layout.tsx` for layouts
  - `loading.tsx` for loading states
  - `error.tsx` for error boundaries
  - `not-found.tsx` for 404s
- Co-locate related files (component + styles + tests)

### Styling (Tailwind v4 CSS-first)

- **CRITICAL:** Tailwind v4 uses CSS configuration, NOT `tailwind.config.js`
- Theme is defined in `app/globals.css` using `@theme` directive
- Use the color tokens listed above: `bg-ocean`, `text-terracotta`, `bg-sand`, etc.
- Use `cn()` utility for conditional classes
- Responsive: mobile-first (default > sm: > md: > lg: > xl:)

### File Naming

- Components: PascalCase (`Button.tsx`)
- Utils/helpers: camelCase (`analytics.ts`)
- Routes: lowercase (`about/page.tsx`)
- Types: PascalCase in `types.ts` files

### Imports Order

```typescript
// 1. React/Next.js
import { useState } from 'react';
import Link from 'next/link';

// 2. External libraries
import { useInView } from 'react-spring';

// 3. Internal components
import { SectionContainer } from '@/components/SectionContainer';

// 4. Utils/lib
import { cn } from '@/lib/utils/cn';

// 5. Types
import type { Service } from '@/types';
```

## Sanity CMS

### Content Structure

- **Blog Posts** (post) - Articles with categories, images, SEO
- **Services** (service) - Individual service offerings
- **Packages** (package) - Tiered service bundles
- **Team Members** (teamMember) - Staff profiles

### Accessing Studio

- **Dev:** `http://localhost:3000/studio`
- **Production:** `https://holaespana.com/studio`

### Images

Use `next-sanity` image builder for optimized images with Sanity CDN

## Common Commands

```bash
# Development
npm run dev              # Next.js dev server (includes /studio)
npm run build            # Production build
npm run start            # Production server

# Quality
npm run lint             # ESLint
npm run typecheck        # TypeScript check (if added)

# Deployment
vercel                   # Preview deployment
vercel --prod            # Production deployment
```

## Environment Variables

Required in `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token
```

## Task Scoping Rules

### Modular Work

All work MUST be broken into small, focused, reviewable units:

- **One component or section per task.** A task like "build the Hero section for the homepage" is good. "Build the homepage" is too broad.
- **Page-level tasks must be decomposed.** If asked to "build the services page," push back and ask the user to break it into sections (e.g., Hero, service cards grid, CTA). Each section is its own task.
- **New components go in the appropriate page directory.** Homepage sections go in `components/home/`, about page sections in `components/about/`, etc.
- **Shared/reusable components** go in `components/` root (like `SectionContainer.tsx`, `Header.tsx`).
- **Static copy** for new sections goes in `lib/siteCopy.ts`.
- **Each task should be completable and reviewable independently** before starting the next.

### When to Push Back

Push back and ask the user to narrow scope when:

- A task touches more than 2-3 components
- A task spans multiple pages
- A task includes both layout/structure AND content/copy decisions
- A task is described at the page level rather than the section/component level
- Requirements are vague (e.g., "make it look good" - ask for a reference image or specific direction)

**Good task examples:**
- "Create the Hero section for the homepage based on this design"
- "Add a CTA banner component with ocean background and terracotta button"
- "Build the service card grid layout matching this screenshot"
- "Update the Header nav links to include Services and Packages"

**Bad task examples (push back on these):**
- "Build the services page"
- "Create all the homepage sections"
- "Make the site look like the design"
- "Add all the missing pages"

### Preferred Response to Broad Tasks

When a task is too broad, respond with a proposed breakdown. Example:

> "That's a broad task. I'd suggest breaking it into these sections:
> 1. Hero section (header text + background image)
> 2. Service cards grid
> 3. CTA section
> Which one should I start with?"

## Important Constraints

### Client Context

- **Non-technical** - CMS must be simple, intuitive
- **Friends/family project** - Flexible but professional
- **Budget-conscious** - $5,500 total value
- **Time-sensitive** - 6-7 weeks build + 30 days support

### Development Approach

- **Iterative** - Not all details defined upfront, expect refinements
- **Modular** - One component/section per task, reviewable independently
- **Review-before-proceed** - Verify each task before moving to next
- **No premature optimization** - Build working features first

### Technical Decisions

- Tailwind v4 @theme (modern CSS-first)
- React Spring (lightweight animations)
- Vercel Analytics (privacy-friendly)
- Integrated Sanity Studio (simpler deployment)
- Server Components default (better performance)
- NO Framer Motion (too heavy)
- NO Google Analytics (privacy concerns)
- NO separate Studio repo (unnecessary complexity)

## Key Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind v4 Docs:** https://tailwindcss.com/docs
- **Sanity Docs:** https://www.sanity.io/docs
- **React Spring Docs:** https://www.react-spring.dev

## Notes for AI Agents

- **Read `app/globals.css` @theme block** before using any color or typography token. The values listed in this file are the source of truth.
- **Do NOT invent color tokens.** Only use tokens that exist in `app/globals.css`.
- **Push back on broad tasks.** Propose a section-by-section breakdown.
- **One section/component per task.** Do not build an entire page in one pass.
- **Static copy goes in `lib/siteCopy.ts`**, not hardcoded in JSX.
- **Group components by page** in the appropriate subdirectory under `components/`.
