# Setting Up Context7 for Better AI Documentation Consumption

## What is Context7?

Context7 is a standardized way to document your project for AI coding assistants. It creates a `.context7` directory with structured information about your codebase, making AI assistants much more effective.

## Why Use Context7?

When working with AI assistants (Claude, Cursor, GitHub Copilot), they need to understand:
- Your project structure
- Coding conventions
- Key patterns and decisions
- Current state of work
- Where files are located

Without Context7, you have to re-explain this every session. With Context7, the AI reads your documentation automatically.

---

## Installation

### 1. Install Context7 CLI

```bash
npm install -D @context7/cli
```

### 2. Initialize in Your Project

```bash
npx context7 init
```

This creates a `.context7` directory with starter files.

---

## Essential Context Files

Create these files in `.context7/` directory:

### `.context7/architecture.md`

```markdown
# Hola España - Project Architecture

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first with @theme directive)
- **CMS:** Sanity (headless CMS for content management)
- **Animations:** React Spring
- **Hosting:** Vercel
- **Analytics:** Vercel Analytics

## Key Directories

### `/src/app` - Next.js Pages (App Router)
- Each folder is a route
- `page.tsx` = page component
- `layout.tsx` = shared layout
- `/playground` = dev-only testing area

### `/src/components` - React Components
- `/ui` - Base components (Button, Card, Container)
- `/sections` - Page sections (Hero, Services, etc.)
- `/animations` - Animation wrappers (FadeIn, etc.)
- `/layout` - Header, Footer, Navigation

### `/src/lib` - Utilities
- `/sanity` - Sanity client, queries, config
- `/utils` - General utilities (cn, analytics)

### `/sanity` - Sanity CMS
- `/schemas` - Content schemas
  - `/documents` - Main content types (post, service, package)
  - `/objects` - Reusable fields (blockContent, seo)
- `schema.ts` - Schema index

### `/public` - Static Assets
- Images, fonts, etc.

## Key Patterns

### 1. Tailwind CSS v4
Colors defined in `globals.css` with `@theme` directive:
```css
@theme {
  --color-brand-rust: var(--brand-rust);
}
```

### 2. Component Structure
- One component per file
- Props interface: `{ComponentName}Props`
- Use `'use client'` only when needed (animations, state)
- Server components by default

### 3. Sanity Integration
- Queries in `/src/lib/sanity/queries.ts`
- Client in `/src/lib/sanity/client.ts`
- Fetch data in server components
- Use `createClient` from `next-sanity`

### 4. Animations
- React Spring for scroll-triggered animations
- Wrap content in `<FadeIn>` component
- Triggers once when element enters viewport

## File Naming Conventions
- Components: PascalCase (`Button.tsx`)
- Utilities: camelCase (`analytics.ts`)
- Pages: lowercase (`about/page.tsx`)
- Sanity schemas: camelCase (`post.ts`, `blockContent.ts`)
```

### `.context7/conventions.md`

```markdown
# Coding Conventions

## TypeScript
- Always use TypeScript
- Use interfaces for props
- Export default for components
- Named exports for utilities
- Avoid `any` type

## Components
- One component per file
- Props interface named `{ComponentName}Props`
- Document complex props with JSDoc comments
- Use destructuring in props
- Keep components focused and small

## Client vs Server Components
- Server components by default (no 'use client')
- Use 'use client' only for:
  - Interactive elements with state
  - Animations
  - Browser APIs
  - Event handlers

## Styling
- Use Tailwind CSS utilities exclusively
- Define colors in `globals.css` @theme directive
- Use semantic color names (primary, accent, etc.)
- Use `cn()` utility for conditional classes
- Keep custom CSS minimal

## Imports
- Use absolute imports with `@/` alias
- Group imports:
  1. React/Next imports
  2. Third-party libraries
  3. Local components
  4. Local utilities
  5. Types
- One blank line between groups

## File Organization
```
Component.tsx structure:
1. Imports
2. Types/Interfaces
3. Constants
4. Component definition
5. Helper functions (if needed)
```

## Sanity
- One schema per file
- Use `defineType` and `defineField`
- Add descriptions to fields
- Add validation where appropriate
- Preview configuration for documents

## Comments
- Use JSDoc for functions
- Explain "why" not "what"
- Comment complex logic
- No commented-out code in commits
```

### `.context7/tasks.md`

```markdown
# Current Tasks & Context

## Project Status
**Phase:** Initial Setup Complete  
**Current Focus:** Building production pages and schemas  
**Last Updated:** [Date]

## Completed Tasks
- ✅ TASK-001: Project initialization
- ✅ TASK-002: Tailwind CSS v4 setup
- ✅ TASK-003: Sanity CMS connection
- ✅ TASK-004: Blog post schema
- ✅ TASK-005: UI component library
- ✅ TASK-006: Playground setup
- ✅ TASK-007: FadeIn animation
- ✅ TASK-008: Vercel Analytics

## In Progress
- [ ] Additional Sanity schemas (Service, Package, Team Member)
- [ ] Production page layouts
- [ ] Client content integration

## Blocked/Waiting
- Client branding assets (logo files)
- Client content (about text, service descriptions)
- Professional photos

## Next Up
1. Create remaining Sanity schemas
2. Build homepage layout
3. Implement blog listing page
4. Create service pages

## Important Decisions Made
- Using React Spring over Framer Motion (lighter weight)
- Vercel Analytics instead of Google Analytics (privacy-friendly)
- Tailwind CSS v4 with @theme directive (modern approach)
- Playground for development testing (separate from production)
- Server components by default (better performance)

## Technical Debt
None currently - project is new

## Notes
- This is a friends/family project - iterative approach
- Client is non-technical - CMS must be very simple
- Design inspired by Antoni Gaudí architecture
- Target audience: High net-worth individuals relocating to Spain
```

---

## Git Configuration

### Option 1: Commit Context7 (Recommended for Teams)

```bash
# Context7 helps team members and future AI sessions
git add .context7
git commit -m "Add Context7 documentation"
```

### Option 2: Keep Local (Solo Projects)

```bash
# Add to .gitignore
echo ".context7/" >> .gitignore
```

---

## Using Context7 with AI Assistants

### Starting a New Session

When beginning work with an AI assistant:

```
I'm working on the Hola España project. Please review the .context7 
directory for project context before helping me.
```

### Referencing Specific Context

```
Per our conventions in .context7/conventions.md, I need a new component.
```

### Task-Specific Context

```
I'm working on the blog post schema. See .context7/tasks.md for 
what's already completed.
```

---

## Maintenance

### When to Update

**After Every Session:**
- Update `.context7/tasks.md` with progress
- Add any new decisions to `architecture.md`
- Update conventions if patterns change

**Weekly Review:**
- Check that architecture.md is current
- Update task status
- Add any new patterns or learnings

**After Major Changes:**
- New tech stack additions
- Architecture changes
- Convention updates

---

## Advanced Context Files (Optional)

### `.context7/components.md`

Document your component library:

```markdown
# Component Library Reference

## UI Components

### Button (`/src/components/ui/Button.tsx`)
Multi-purpose button component that renders as button or link.

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline'
- `size`: 'sm' | 'md' | 'lg'
- `href`: If provided, renders as Next.js Link

**Usage:**
```tsx
<Button variant="primary" size="lg">
  Click Me
</Button>

<Button href="/about" variant="outline">
  Learn More
</Button>
```

[Continue for other components...]
```

### `.context7/sanity.md`

Document your content model:

```markdown
# Sanity Content Model

## Documents

### Blog Post (`post`)
- **Fields:** title, slug, mainImage, categories, publishedAt, excerpt, body, seo
- **Required:** title, slug, body
- **Categories:** visa, living, real-estate, legal, expat, culture

### Service (`service`)
- **Fields:** title, slug, icon, shortDescription, description, order
- **Required:** title, shortDescription

[Continue for other document types...]
```

---

## Example AI Prompts with Context7

### Good Prompt
```
I need to create a new service card component. Per .context7/conventions.md:
- Use TypeScript with interface
- Keep it simple and focused
- Use Tailwind utilities only

Please create this component following our established patterns.
```

### Better Prompt
```
Per .context7/tasks.md, I'm building the services section. I need a 
ServiceCard component that:
- Matches our UI component patterns (.context7/components.md)
- Uses our brand colors (.context7/architecture.md)
- Follows our Sanity schema for services (.context7/sanity.md)

Please create this component.
```

---

## Tips for Effective Context7

### 1. Be Specific
Bad: "This is a React project"  
Good: "Next.js 14+ App Router with TypeScript and Tailwind CSS v4"

### 2. Document Decisions
Capture why you made choices:
- "Using React Spring because Framer Motion is too heavy"
- "Server components by default for better performance"

### 3. Keep Tasks Current
Update task status immediately:
- Mark completed tasks
- Add new tasks as they arise
- Note blockers

### 4. Reference in Conversations
Train yourself (and AI) to reference Context7:
- "Per our conventions..."
- "See .context7/tasks.md..."
- "Our architecture uses..."

---

## Troubleshooting

**AI Not Using Context7?**
- Explicitly mention it in your prompt
- Reference specific files
- Ask AI to summarize context to verify it read it

**Context Too Large?**
- Keep each file focused
- Use multiple files for different concerns
- Link between files with references

**Outdated Context?**
- Schedule regular reviews
- Update after each major change
- Use git diffs to track what changed

---

## Summary

Context7 transforms how you work with AI assistants:

**Without Context7:**
"I have a Next.js project with Tailwind and Sanity..."  
*(Repeat every session)*

**With Context7:**
"See .context7 for full context"  
*(AI immediately understands everything)*

---

## Next Steps

1. Create `.context7` directory
2. Add the three essential files (architecture, conventions, tasks)
3. Keep them updated as you work
4. Reference them in AI conversations
5. Enjoy more productive AI sessions!
