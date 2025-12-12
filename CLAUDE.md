# Hola España - Immigration Services Website

## Project Overview

Next.js 14+ website for Spanish immigration law firm. Modern, Gaudí-inspired design targeting high net-worth US → Spain relocations.

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
src/
├── app/
│   ├── (site)/              # Public routes (route group)
│   │   ├── page.tsx         # Homepage
│   │   ├── about/
│   │   ├── services/
│   │   ├── packages/
│   │   ├── blog/
│   │   └── contact/
│   ├── studio/              # Sanity CMS at /studio
│   │   └── [[...tool]]/
│   │       └── page.tsx
│   ├── playground/          # Dev-only testing (not in production)
│   │   ├── page.tsx
│   │   ├── animations/
│   │   ├── layouts/
│   │   └── components/
│   ├── layout.tsx
│   └── globals.css          # Tailwind v4 with @theme
├── components/
│   ├── ui/                  # Reusable components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   └── animations/
│       └── FadeIn.tsx       # Scroll-triggered animations
└── lib/
    ├── sanity/
    │   ├── client.ts        # Sanity client config
    │   └── queries.ts       # GROQ queries
    └── utils/
        ├── cn.ts            # Class name utility
        └── analytics.ts     # Vercel Analytics events

sanity/
├── schemas/
│   ├── documents/
│   │   ├── post.ts          # Blog posts
│   │   ├── service.ts       # Service offerings
│   │   ├── package.ts       # Service packages
│   │   └── teamMember.ts    # Team profiles
│   └── objects/
│       ├── blockContent.ts  # Rich text config
│       └── seo.ts           # SEO fields
├── sanity.config.ts
└── schema.ts
```

## Design System

### Brand Colors (Tailwind v4 @theme)

**Spanish Immigration Theme:**

- `--brand-gold: #c89041` → Warm gold/yellow
- `--brand-teal: #3e5349` → Dark teal
- `--brand-sienna: #9c652d` → Burnt sienna
- `--brand-terra-cotta: #a95a32` → Terra cotta
- `--brand-tan: #d1baa3` → Tan
- `--brand-mountain: #ebe3d8` → Mountain
- `--brand-cream: #fbf3e8` → Off-white/light background

**Semantic colors:**

- `--primary` → Teal (trust, professionalism)
- `--secondary` → Gold (premium, success)
- `--accent` → Terra Cotta (warmth, action)

**Usage:** `bg-brand-gold`, `text-primary`, `border-secondary`

### Typography

- **Headings:** Bold, clean sans-serif
- **Body:** Readable 16-18px base
- **Hierarchy:** Clear size distinctions

### Component Patterns

- **Server Components by default** (use 'use client' only when needed)
- **Layout Wrapper:** Always wrap pages in `<Container>` or `<Section>`
- **Animations:** Use `<FadeIn>` component for scroll reveals
- **Buttons:** `<Button variant="primary|secondary|outline" size="sm|md|lg">`
- **Cards:** `<Card>` with `<CardHeader>` and `<CardContent>`

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
- Define theme in `src/app/globals.css` using `@theme` directive
- Use semantic color variables: `bg-[--primary]` or `bg-primary` if defined as utility
- Component-specific styles in same file using Tailwind classes
- Use `cn()` utility for conditional classes
- Responsive: mobile-first (default → sm: → md: → lg: → xl:)

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
import { Button } from '@/components/ui/Button';

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

### Fetching Content

```typescript
import { client } from '@/lib/sanity/client';
import { groq } from 'next-sanity';

// Always use GROQ queries defined in /lib/sanity/queries.ts
const posts = await client.fetch(groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt
  }
`);
```

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

## Project Status & Task Documentation

**All task documentation is in `.claude/docs/`**

### Current Phase: Setup & Foundation

See `.claude/docs/tasks.md` for current status with checkboxes.

### Task Workflow

1. Read `.claude/docs/PROJECT-OVERVIEW.md` for full context
2. Check `.claude/docs/tasks.md` for current task status
3. Execute tasks sequentially from `.claude/docs/TASK-00X-*.md`
4. Each task has verification steps - complete before proceeding
5. Update checkbox in `tasks.md` when task is complete

### Task List

- TASK-001: Project initialization (Next.js, TypeScript, dependencies)
- TASK-002: Tailwind CSS v4 setup (CSS-first with @theme)
- TASK-003: Sanity CMS integration (integrated studio at /studio)
- TASK-004: Blog schema (post, blockContent, seo objects)
- TASK-005: UI component library (Button, Card, Container, Section)
- TASK-006: Playground setup (dev-only testing area)
- TASK-007: FadeIn animation component (React Spring)
- TASK-008: Vercel Analytics integration

After Task 008, see `.claude/docs/NEXT-STEPS.md` for remaining work.

## Important Constraints

### Client Context

- **Non-technical** - CMS must be simple, intuitive
- **Friends/family project** - Flexible but professional
- **Budget-conscious** - $5,500 total value
- **Time-sensitive** - 6-7 weeks build + 30 days support

### Development Approach

- **Iterative** - Not all details defined upfront, expect refinements
- **Compartmentalized** - Each task is self-contained for review
- **Review-before-proceed** - Verify each task before moving to next
- **Playground testing** - Use `/playground` routes for experiments
- **No premature optimization** - Build working features first

### Technical Decisions

- ✅ Tailwind v4 @theme (modern CSS-first)
- ✅ React Spring (lightweight animations)
- ✅ Vercel Analytics (privacy-friendly)
- ✅ Integrated Sanity Studio (simpler deployment)
- ✅ Server Components default (better performance)
- ❌ NO Framer Motion (too heavy)
- ❌ NO Google Analytics (privacy concerns)
- ❌ NO separate Studio repo (unnecessary complexity)

## Key Resources

- **Task Documentation:** `.claude/docs/`
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind v4 Docs:** https://tailwindcss.com/docs
- **Sanity Docs:** https://www.sanity.io/docs
- **React Spring Docs:** https://www.react-spring.dev

## Notes for AI Agents

- Always verify task completion before proceeding to next task
- Use the verification checklist in each TASK-XXX.md file
- Update `.claude/docs/tasks.md` checkboxes as you complete tasks
- If uncertain about design decisions, refer to PROJECT-OVERVIEW.md
- The playground (`/playground`) is for testing - not production code
- Client is non-technical - keep CMS simple and well-documented
