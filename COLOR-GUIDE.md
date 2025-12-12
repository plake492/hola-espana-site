# Hola España Color System Guide

## Color Architecture Overview

Your theme has **two naming systems** that both work:

1. **Semantic System** (Recommended) - Describes purpose: `bg-background-primary`, `text-primary`
2. **Legacy System** - Descriptive names: `bg-hola-cream`, `bg-hola-terracotta`

---

## 1. BACKGROUND COLORS
Foundation colors for layouts and sections

### Available Classes & Usage

| Tailwind Class | Hex Color | Variable | Use Case |
|----------------|-----------|----------|----------|
| `bg-background-primary` | #F5EFE7 | `--color-background-primary` | Main page backgrounds |
| `bg-background-secondary` | #E8DED0 | `--color-background-secondary` | Cards, panels, sections |
| `bg-background-tertiary` | #FFFEF9 | `--color-background-tertiary` | Modals, overlays, highlights |
| `bg-hola-cream` | #F5EFE7 | `--color-hola-cream` | Same as background-primary |
| `bg-hola-beige` | #E8DED0 | `--color-hola-beige` | Same as background-secondary |

**Examples:**
```tsx
// Main page wrapper
<div className="bg-background-primary min-h-screen">

// Card component
<div className="bg-background-secondary rounded-lg p-6">

// Modal overlay
<div className="bg-background-tertiary rounded-xl shadow-lg">
```

---

## 2. PRIMARY COLORS (Terracotta/Coral)
Main brand color for CTAs and important actions

### Available Classes & Usage

| Tailwind Class | Hex Color | Variable | Use Case |
|----------------|-----------|----------|----------|
| `bg-primary` | #C87B5A | `--color-primary` | Primary buttons, CTAs |
| `bg-primary-hover` | #B86F52 | `--color-primary-hover` | Hover states |
| `bg-primary-light` | #D89178 | `--color-primary-light` | Soft accents, badges |
| `bg-primary-dark` | #A66648 | `--color-primary-dark` | Active states, emphasis |
| `text-primary` | #C87B5A | - | Primary text color |
| `border-primary` | #C87B5A | - | Primary borders |
| `bg-hola-terracotta` | #C87B5A | `--color-hola-terracotta` | Same as primary |
| `bg-hola-rust` | #B86F52 | `--color-hola-rust` | Same as primary-hover |

**Examples:**
```tsx
// Primary button with hover
<button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md">
  Book Consultation
</button>

// Badge or tag
<span className="bg-primary-light text-primary-dark px-3 py-1 rounded-full text-sm">
  Featured
</span>

// Highlighted text
<h2 className="text-primary font-bold text-3xl">
  Start Your Journey
</h2>
```

---

## 3. SECONDARY COLORS (Teal/Forest Green)
Supporting actions and secondary CTAs

### Available Classes & Usage

| Tailwind Class | Hex Color | Variable | Use Case |
|----------------|-----------|----------|----------|
| `bg-secondary` | #4A6660 | `--color-secondary` | Secondary buttons |
| `bg-secondary-hover` | #3A524D | `--color-secondary-hover` | Hover states |
| `bg-secondary-light` | #5A7670 | `--color-secondary-light` | Soft accents |
| `text-secondary` | #4A6660 | - | Secondary text |
| `bg-hola-teal` | #4A6660 | `--color-hola-teal` | Same as secondary |
| `bg-hola-teal-dark` | #3A524D | `--color-hola-teal-dark` | Same as secondary-hover |

**Examples:**
```tsx
// Secondary action button
<button className="bg-secondary hover:bg-secondary-hover text-white px-6 py-3 rounded-md">
  Learn More
</button>

// Navigation link
<a className="text-secondary hover:text-secondary-hover font-medium">
  Services
</a>

// Card header
<div className="bg-secondary text-white p-4 rounded-t-lg">
  <h3>Contact Information</h3>
</div>
```

---

## 4. TEXT COLORS
Typography hierarchy for readability

### Available Classes & Usage

| Tailwind Class | Hex Color | Variable | Use Case |
|----------------|-----------|----------|----------|
| `text-text-primary` | #1A1A1A | `--color-text-primary` | Main headings, nav text |
| `text-text-secondary` | #4A4A4A | `--color-text-secondary` | Body text, paragraphs |
| `text-text-tertiary` | #6B6B6B | `--color-text-tertiary` | Captions, meta info |
| `text-text-muted` | #8B8B8B | `--color-text-muted` | Disabled, subtle text |

**Examples:**
```tsx
// Heading
<h1 className="text-text-primary text-4xl font-bold">
  Welcome to Hola España
</h1>

// Body text
<p className="text-text-secondary text-base leading-relaxed">
  We help you navigate Spanish residency with ease...
</p>

// Meta information
<span className="text-text-tertiary text-sm">
  Published on March 15, 2024
</span>

// Disabled state
<button disabled className="text-text-muted bg-gray-200">
  Coming Soon
</button>
```

---

## 5. ACCENT COLORS
Decorative elements, arches, and visual interest

### Available Classes & Usage

| Tailwind Class | Hex Color | Variable | Use Case |
|----------------|-----------|----------|----------|
| `bg-accent-mustard` | #D4A574 | `--color-accent-mustard` | Warm decorative arches |
| `bg-accent-gold` | #C89F5D | `--color-accent-gold` | Premium highlights |
| `bg-accent-terracotta` | #C4734A | `--color-accent-terracotta` | Warm accent elements |
| `bg-accent-olive` | #7B8C5C | `--color-accent-olive` | Green decorative arches |
| `bg-accent-sage` | #8C9B73 | `--color-accent-sage` | Soft green accents |
| `bg-accent-brown` | #8B6F4D | `--color-accent-brown` | Warm details |
| `bg-accent-purple` | #8B5CF6 | `--color-accent-purple` | Bottom border accents |
| `bg-hola-mustard` | #D4A574 | `--color-hola-mustard` | Same as accent-mustard |
| `bg-hola-gold` | #C89F5D | `--color-hola-gold` | Same as accent-gold |
| `bg-hola-olive` | #7B8C5C | `--color-hola-olive` | Same as accent-olive |
| `bg-hola-sage` | #8C9B73 | `--color-hola-sage` | Same as accent-sage |
| `bg-hola-brown` | #8B6F4D | `--color-hola-brown` | Same as accent-brown |
| `bg-hola-accent` | #C4734A | `--color-hola-accent` | Same as accent-terracotta |

**Examples:**
```tsx
// Decorative arches (signature design element)
<div className="flex gap-4">
  <div className="w-32 h-64 bg-accent-mustard rounded-t-full" />
  <div className="w-32 h-64 bg-accent-olive rounded-t-full" />
  <div className="w-32 h-64 bg-accent-sage rounded-t-full" />
</div>

// Section divider with accent
<hr className="border-t-4 border-accent-gold" />

// Icon container
<div className="bg-accent-mustard p-4 rounded-full inline-block">
  <Icon className="text-white" />
</div>

// Callout box with colored border
<div className="border-l-4 border-accent-terracotta bg-background-secondary p-6">
  <p>Important notice about visa requirements...</p>
</div>
```

---

## 6. BORDER COLORS
Dividers and outlines

### Available Classes & Usage

| Tailwind Class | Hex Color | Variable | Use Case |
|----------------|-----------|----------|----------|
| `border-border` | #E0D5C7 | `--color-border` | Default borders |
| `border-border-accent` | #8B5CF6 | `--color-border-accent` | Accent borders |
| `border-border-strong` | #C4C4C4 | `--color-border-strong` | Emphasized borders |

**Examples:**
```tsx
// Card with subtle border
<div className="border border-border rounded-lg p-6">
  Content
</div>

// Emphasized container
<div className="border-2 border-border-strong rounded-lg p-6">
  Important content
</div>

// Accent bottom border (like header)
<header className="border-b-4 border-border-accent">
  Navigation
</header>
```

---

## 7. FUNCTIONAL COLORS
Status messages and feedback

### Available Classes & Usage

| Tailwind Class | Hex Color | Variable | Use Case |
|----------------|-----------|----------|----------|
| `bg-success` / `text-success` | #7B8C5C | `--color-success` | Success messages |
| `bg-warning` / `text-warning` | #D4A574 | `--color-warning` | Warning alerts |
| `bg-error` / `text-error` | #C4734A | `--color-error` | Error messages |
| `bg-info` / `text-info` | #4A6660 | `--color-info` | Info notifications |

**Examples:**
```tsx
// Success message
<div className="bg-success text-white p-4 rounded-lg">
  ✓ Your application has been submitted successfully!
</div>

// Warning banner
<div className="bg-warning text-text-primary p-4 rounded-lg">
  ⚠ Your visa expires in 30 days
</div>

// Error alert
<div className="bg-error text-white p-4 rounded-lg">
  ✕ Please fill in all required fields
</div>

// Info notification
<div className="bg-info text-white p-4 rounded-lg">
  ℹ Processing time: 2-4 weeks
</div>
```

---

## COLOR PAIRING GUIDE

### Recommended Combinations

#### 1. Hero Sections
```tsx
<section className="bg-background-primary text-text-primary">
  <h1 className="text-primary">Hola España</h1>
  <p className="text-text-secondary">Your relocation experts</p>
  <button className="bg-primary hover:bg-primary-hover text-white">
    Get Started
  </button>
</section>
```

#### 2. Cards with Accent Borders
```tsx
<div className="bg-background-secondary border-l-4 border-accent-terracotta p-6">
  <h3 className="text-text-primary">Visa Services</h3>
  <p className="text-text-secondary">Expert guidance...</p>
  <a className="text-primary hover:text-primary-hover">Learn more →</a>
</div>
```

#### 3. Two-Button Pattern
```tsx
<div className="flex gap-4">
  <button className="bg-primary hover:bg-primary-hover text-white">
    Primary Action
  </button>
  <button className="bg-secondary hover:bg-secondary-hover text-white">
    Secondary Action
  </button>
</div>
```

#### 4. Outline Button with Brand Color
```tsx
<button className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
  Learn More
</button>
```

#### 5. Section with Decorative Arches
```tsx
<section className="bg-background-primary py-16">
  <h2 className="text-text-primary text-4xl mb-8">Our Services</h2>

  {/* Decorative element */}
  <div className="flex gap-4 justify-center mb-12">
    <div className="w-32 h-64 bg-accent-mustard rounded-t-full" />
    <div className="w-32 h-64 bg-accent-olive rounded-t-full" />
    <div className="w-32 h-64 bg-accent-sage rounded-t-full" />
  </div>

  <p className="text-text-secondary">Content...</p>
</section>
```

#### 6. Footer
```tsx
<footer className="bg-secondary text-white py-12">
  <p className="text-white/80">© 2024 Hola España</p>
  <a className="text-accent-gold hover:text-accent-mustard">
    Contact Us
  </a>
</footer>
```

---

## Quick Reference: Which System to Use?

### Use SEMANTIC names (Recommended):
- `bg-primary`, `bg-secondary` - For CTAs and buttons
- `bg-background-primary`, `bg-background-secondary` - For layouts
- `text-text-primary`, `text-text-secondary` - For typography
- `bg-success`, `bg-error`, `bg-warning` - For alerts

**Why?** More maintainable, clearer intent, easier to refactor

### Use LEGACY names (hola-*):
- When you need specific color references
- For decorative elements where exact color matters
- `bg-hola-mustard`, `bg-hola-olive` - For arch decorations
- `bg-hola-gold` - For premium accents

---

## Color Accessibility Guidelines

### High Contrast Pairings (WCAG AA Compliant)
✅ `text-text-primary` on `bg-background-primary`
✅ `text-white` on `bg-primary`
✅ `text-white` on `bg-secondary`
✅ `text-text-primary` on `bg-accent-mustard`
✅ `text-text-primary` on `bg-accent-sage`

### Lower Contrast (Use Carefully)
⚠️ `text-text-tertiary` on `bg-background-secondary` - OK for meta info
⚠️ `text-accent-olive` on `bg-background-primary` - Use for decorative only

---

## Common Patterns

### Pattern 1: Primary CTA Button
```tsx
<button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-md font-sans tracking-wide transition-colors">
  Book Consultation
</button>
```

### Pattern 2: Secondary CTA Button
```tsx
<button className="bg-secondary hover:bg-secondary-hover text-white px-8 py-3 rounded-md font-sans tracking-wide transition-colors">
  Learn More
</button>
```

### Pattern 3: Outline Button
```tsx
<button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-md font-sans tracking-wide transition-colors">
  Contact Us
</button>
```

### Pattern 4: Service Card
```tsx
<div className="bg-background-secondary border-l-4 border-accent-terracotta rounded-lg p-6">
  <h3 className="text-text-primary text-xl font-serif mb-2">Service Title</h3>
  <p className="text-text-secondary mb-4">Service description...</p>
  <a href="#" className="text-primary hover:text-primary-hover font-medium">
    Learn more →
  </a>
</div>
```

### Pattern 5: Alert/Notification
```tsx
<div className="bg-success text-white p-4 rounded-lg flex items-center gap-3">
  <svg className="w-6 h-6">✓</svg>
  <p>Your application was submitted successfully!</p>
</div>
```

### Pattern 6: Section with Colored Background
```tsx
<section className="bg-accent-sage text-text-primary py-16 px-8">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-serif mb-6">About Us</h2>
    <p className="text-text-secondary">Content...</p>
  </div>
</section>
```

---

## Tips for Using Colors Together

1. **Backgrounds**: Stick to `background-primary` and `background-secondary` for 90% of layouts
2. **CTAs**: Primary (terracotta) for main actions, Secondary (teal) for supporting actions
3. **Accents**: Use sparingly for visual interest (arches, dividers, icons)
4. **Text**: Use the text hierarchy (`text-primary` → `text-secondary` → `text-tertiary`)
5. **Borders**: Default to `border-border`, use `border-primary` or accent colors for emphasis
6. **Don't mix**: Avoid using multiple accent colors in the same component
7. **Warm + Cool**: Balance warm (mustard, terracotta, gold) with cool (teal, olive, sage)

---

## All Available Tailwind Classes

**Text Colors**: `text-primary`, `text-secondary`, `text-text-primary`, `text-text-secondary`, `text-text-tertiary`, `text-text-muted`, `text-success`, `text-warning`, `text-error`, `text-info`

**Background Colors**: `bg-background-primary`, `bg-background-secondary`, `bg-background-tertiary`, `bg-primary`, `bg-primary-hover`, `bg-primary-light`, `bg-primary-dark`, `bg-secondary`, `bg-secondary-hover`, `bg-secondary-light`, `bg-accent-mustard`, `bg-accent-gold`, `bg-accent-terracotta`, `bg-accent-olive`, `bg-accent-sage`, `bg-accent-brown`, `bg-accent-purple`, `bg-success`, `bg-warning`, `bg-error`, `bg-info`

**Border Colors**: `border-border`, `border-border-accent`, `border-border-strong`, `border-primary`, `border-secondary`

**Legacy Classes**: `bg-hola-cream`, `bg-hola-beige`, `bg-hola-mustard`, `bg-hola-gold`, `bg-hola-terracotta`, `bg-hola-rust`, `bg-hola-teal`, `bg-hola-teal-dark`, `bg-hola-olive`, `bg-hola-sage`, `bg-hola-brown`, `bg-hola-accent`
