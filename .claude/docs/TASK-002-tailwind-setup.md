# TASK-002: Tailwind CSS v4 Theme Setup

**Objective:** Configure Tailwind CSS v4 with Gaudí-inspired brand colors using the new @theme directive.

**Prerequisites:** TASK-001 completed and verified

**Estimated Time:** 20-25 minutes

---

## Background: Tailwind CSS v4 Changes

Tailwind v4 introduces a major shift from JavaScript configuration to CSS-first configuration:

- **Old (v3):** Colors defined in `tailwind.config.js`
- **New (v4):** Colors defined with `@theme` directive in CSS
- **Why:** More flexible, supports CSS variables natively, better for theming

---

## Steps

### 1. Update globals.css

Replace the contents of `src/app/globals.css` with:

```css
@import 'tailwindcss';

/* Base CSS Variables */
@layer base {
  :root {
    /* Brand Colors - Spanish Immigration Theme */
    --brand-gold: #c89041; /* Warm gold/yellow */
    --brand-teal: #3e5349; /* Dark teal */
    --brand-sienna: #9c652d; /* Burnt sienna */
    --brand-terra-cotta: #a95a32; /* Terra cotta */
    --brand-tan: #d1baa3; /* Tan */
    --brand-mountain: #ebe3d8; /* Mountain */
    --brand-cream: #fbf3e8; /* Off-white/light background */

    /* Semantic Color Variables */
    --background: #fbf3e8; /* Brand cream */
    --foreground: #1a1a1a; /* Near black */
    --card: #ffffff;
    --card-foreground: #1a1a1a;
    --primary: var(--brand-teal);
    --primary-foreground: #ffffff;
    --secondary: var(--brand-gold);
    --secondary-foreground: #1a1a1a;
    --muted: var(--brand-mountain);
    --muted-foreground: #6b6b6b;
    --accent: var(--brand-terra-cotta);
    --accent-foreground: #ffffff;
    --border: #e5e0d5;
    --ring: var(--brand-teal);
  }
}

/* Connect CSS variables to Tailwind utilities using @theme */
@theme {
  /* Brand colors as utilities (e.g., bg-brand-gold, text-brand-teal) */
  --color-brand-gold: var(--brand-gold);
  --color-brand-teal: var(--brand-teal);
  --color-brand-sienna: var(--brand-sienna);
  --color-brand-terra-cotta: var(--brand-terra-cotta);
  --color-brand-tan: var(--brand-tan);
  --color-brand-mountain: var(--brand-mountain);
  --color-brand-cream: var(--brand-cream);

  /* Semantic colors (e.g., bg-primary, text-muted-foreground) */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-border: var(--border);
  --color-ring: var(--ring);
}
```

### 2. Simplify tailwind.config.ts

Replace `tailwind.config.ts` with minimal v4 config:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};

export default config;
```

### 3. Test the theme

Update `src/app/page.tsx` to test colors:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">Hola España Theme Test</h1>

        {/* Brand Colors Test */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Brand Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-brand-gold text-foreground p-4 rounded-lg">Gold</div>
            <div className="bg-brand-teal text-white p-4 rounded-lg">Dark Teal</div>
            <div className="bg-brand-sienna text-white p-4 rounded-lg">Burnt Sienna</div>
            <div className="bg-brand-terra-cotta text-white p-4 rounded-lg">Terra Cotta</div>
            <div className="bg-brand-tan text-foreground p-4 rounded-lg">Tan</div>
            <div className="bg-brand-mountain text-foreground p-4 rounded-lg">Mountain</div>
            <div className="bg-brand-cream text-foreground p-4 rounded-lg border border-border">Cream</div>
          </div>
        </section>

        {/* Semantic Colors Test */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Semantic Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-primary text-primary-foreground p-4 rounded-lg">Primary (Teal)</div>
            <div className="bg-secondary text-secondary-foreground p-4 rounded-lg">Secondary (Gold)</div>
            <div className="bg-accent text-accent-foreground p-4 rounded-lg">Accent (Terra Cotta)</div>
            <div className="bg-muted text-muted-foreground p-4 rounded-lg">Muted (Mountain)</div>
            <div className="bg-card text-card-foreground p-4 rounded-lg border border-border">Card</div>
          </div>
        </section>
      </div>
    </main>
  );
}
```

---

## Verification Checklist

- [ ] No Tailwind build errors in terminal
- [ ] Page renders with all colors visible
- [ ] Brand colors (gold, teal, sienna, terra cotta, tan, mountain, cream) display correctly
- [ ] Semantic colors (primary, secondary, accent) display correctly
- [ ] Text is readable on all backgrounds (contrast check)
- [ ] Can use utilities like `bg-brand-gold`, `text-primary`, etc.

## Review Points

### 1. Color Display

- Open localhost:3000
- Verify all 7 brand colors render (gold, teal, sienna, terra cotta, tan, mountain, cream)
- Check that semantic colors map to brand colors correctly (primary = teal, secondary = gold, accent = terra cotta)
- Ensure text contrast is sufficient

### 2. Tailwind Configuration

- Check terminal for any Tailwind warnings
- Verify CSS compiles without errors
- Check that `@theme` directive is recognized

### 3. CSS Variable Structure

```
:root (defines values)
  ↓
@theme (connects to Tailwind)
  ↓
Utility classes (bg-brand-rust, etc.)
```

### 4. Browser DevTools Check

- Inspect an element with brand color
- Verify CSS variable is applied: `background-color: var(--brand-gold)`
- Check computed styles show correct hex value

---

## Understanding @theme vs :root

**:root** - Standard CSS variables

- Define the actual color values
- Can be used in regular CSS
- Can be changed for theming

**@theme** - Tailwind CSS v4 directive

- Connects CSS variables to Tailwind utilities
- Creates utility classes (bg-_, text-_, border-\*)
- Must reference CSS variables

**Example:**

```css
/* Define color */
:root {
  --brand-gold: #c89041;
}

/* Make it available as Tailwind utility */
@theme {
  --color-brand-gold: var(--brand-gold);
}

/* Now you can use */
<div className="bg-brand-gold">
```

---

## Common Issues & Solutions

**Issue:** Colors don't show up  
**Solution:** Check that `@theme` comes AFTER `@import "tailwindcss"`

**Issue:** Build fails with "@theme is not valid"  
**Solution:** Ensure you're using Tailwind CSS v4 beta or later

**Issue:** Some colors work, others don't  
**Solution:** Verify all color names in @theme match pattern `--color-{name}`

**Issue:** Wrong colors display  
**Solution:** Check that @theme references correct CSS variables with `var(--name)`

---

## Color Usage Guidelines

### When to use Brand Colors

- Backgrounds for hero sections
- Accent elements (borders, icons)
- Decorative elements
- Arch/architectural graphics

### When to use Semantic Colors

- Buttons: `bg-primary`
- Cards: `bg-card`
- Text: `text-foreground`, `text-muted-foreground`
- Borders: `border-border`

This ensures consistency and makes theming easier later.

---

## Next Steps

After verification passes, proceed to:

- **TASK-003:** Sanity CMS Setup

---

## Notes for AI Agents

- Do not proceed until all colors display correctly
- Test in browser, not just by compilation success
- Document any color adjustments in Context7
- Keep this page.tsx test code for reference (will replace later)
