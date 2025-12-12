# TASK-005: Create UI Component Library

**Objective:** Build basic, reusable UI components (Container, Section, Button, Card).

**Prerequisites:** TASK-004 completed and verified

**Estimated Time:** 35-40 minutes

---

## Background: Component Library

These are foundational building blocks used throughout the site:
- **Container:** Centers content with max-width
- **Section:** Full-width sections with consistent padding
- **Button:** Styled buttons/links
- **Card:** Content containers with elevation

Keep them simple, focused, and composable.

---

## Steps

### 1. Create CN Utility Function

This merges Tailwind classes safely.

Create `src/lib/utils/cn.ts`:

```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes with proper precedence
 * @param inputs - Class names to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 2. Create Container Component

Create `src/components/ui/Container.tsx`:

```typescript
import { cn } from '@/lib/utils/cn'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeClasses = {
  sm: 'max-w-4xl',
  md: 'max-w-6xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1400px]',
}

/**
 * Container component for consistent max-width and horizontal padding
 * @param children - Content to wrap
 * @param className - Additional CSS classes
 * @param size - Max width preset (default: lg)
 */
export default function Container({ 
  children, 
  className,
  size = 'lg'
}: ContainerProps) {
  return (
    <div className={cn(
      'mx-auto w-full px-4 sm:px-6 lg:px-8',
      sizeClasses[size],
      className
    )}>
      {children}
    </div>
  )
}
```

### 3. Create Section Component

Create `src/components/ui/Section.tsx`:

```typescript
import { cn } from '@/lib/utils/cn'
import Container from './Container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerSize?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'default' | 'muted' | 'accent'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  as?: 'section' | 'div'
}

const backgroundClasses = {
  default: 'bg-background',
  muted: 'bg-muted',
  accent: 'bg-accent text-accent-foreground',
}

const paddingClasses = {
  sm: 'py-8 sm:py-12',
  md: 'py-12 sm:py-16 lg:py-20',
  lg: 'py-16 sm:py-24 lg:py-32',
  xl: 'py-24 sm:py-32 lg:py-40',
}

/**
 * Section component with Container, consistent padding and backgrounds
 * @param children - Content to wrap
 * @param className - Additional CSS classes
 * @param containerSize - Container max-width
 * @param background - Background color variant
 * @param padding - Vertical padding preset
 * @param as - HTML element to render
 */
export default function Section({
  children,
  className,
  containerSize = 'lg',
  background = 'default',
  padding = 'lg',
  as: Component = 'section',
}: SectionProps) {
  return (
    <Component className={cn(
      backgroundClasses[background],
      paddingClasses[padding],
      className
    )}>
      <Container size={containerSize}>
        {children}
      </Container>
    </Component>
  )
}
```

### 4. Create Button Component

Create `src/components/ui/Button.tsx`:

```typescript
import { cn } from '@/lib/utils/cn'
import Link from 'next/link'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}

const variantClasses = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

/**
 * Button component - renders as button or link based on href prop
 * @param children - Button content
 * @param href - If provided, renders as Next.js Link
 * @param variant - Visual style variant
 * @param size - Size preset
 * @param className - Additional CSS classes
 * @param disabled - Disabled state
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  )

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}
```

### 5. Create Card Component

Create `src/components/ui/Card.tsx`:

```typescript
import { cn } from '@/lib/utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

/**
 * Card component - container with border and shadow
 * @param children - Card content
 * @param className - Additional CSS classes
 * @param hover - Enable hover effect
 */
export default function Card({ 
  children, 
  className, 
  hover = false 
}: CardProps) {
  return (
    <div className={cn(
      'bg-card text-card-foreground rounded-lg border border-border shadow-sm overflow-hidden',
      hover && 'transition-shadow hover:shadow-md',
      className
    )}>
      {children}
    </div>
  )
}

/**
 * CardHeader - Top section of card with padding
 */
export function CardHeader({ 
  children, 
  className 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <div className={cn('p-6', className)}>
      {children}
    </div>
  )
}

/**
 * CardContent - Bottom section of card with padding
 */
export function CardContent({ 
  children, 
  className 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <div className={cn('px-6 pb-6', className)}>
      {children}
    </div>
  )
}
```

### 6. Create Component Test Page

Create `src/app/test-components/page.tsx`:

```tsx
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Card, { CardHeader, CardContent } from '@/components/ui/Card'

export default function TestComponentsPage() {
  return (
    <>
      {/* Container Tests */}
      <Section>
        <h1 className="text-4xl font-bold mb-8">Component Library Test</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Containers</h2>
          <div className="space-y-4">
            <Container size="sm" className="bg-muted p-4 rounded">Small Container</Container>
            <Container size="md" className="bg-muted p-4 rounded">Medium Container</Container>
            <Container size="lg" className="bg-muted p-4 rounded">Large Container (default)</Container>
            <Container size="xl" className="bg-muted p-4 rounded">Extra Large Container</Container>
          </div>
        </div>
      </Section>

      {/* Section Tests */}
      <Section background="default" padding="md">
        <h2 className="text-2xl font-semibold mb-4">Sections</h2>
        <p className="text-muted-foreground">Default background, medium padding</p>
      </Section>

      <Section background="muted" padding="lg">
        <h2 className="text-2xl font-semibold mb-4">Muted Background</h2>
        <p className="text-muted-foreground">Muted background, large padding (default)</p>
      </Section>

      <Section background="accent" padding="sm">
        <h2 className="text-2xl font-semibold mb-4">Accent Background</h2>
        <p>Accent background with contrasting text, small padding</p>
      </Section>

      {/* Button Tests */}
      <Section>
        <h2 className="text-2xl font-semibold mb-6">Buttons</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">As Link</h3>
            <Button href="/test-components">Button as Link</Button>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Disabled</h3>
            <Button disabled>Disabled Button</Button>
          </div>
        </div>
      </Section>

      {/* Card Tests */}
      <Section background="muted">
        <h2 className="text-2xl font-semibold mb-6">Cards</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold">Basic Card</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Card with header and content sections.
              </p>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <h3 className="text-xl font-semibold">Hover Card</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This card has a hover effect.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-brand-rust text-white">
            <CardHeader>
              <h3 className="text-xl font-semibold">Custom Card</h3>
            </CardHeader>
            <CardContent>
              <p>Card with custom background color.</p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  )
}
```

---

## Verification Checklist

- [ ] All components compile without TypeScript errors
- [ ] Test page renders at `/test-components`
- [ ] Container sizes work correctly
- [ ] Section backgrounds and paddings work
- [ ] All button variants render correctly
- [ ] Button works as both button and link
- [ ] Cards display with proper styling
- [ ] Hover effects work on cards
- [ ] cn() utility merges classes correctly
- [ ] Responsive design works (test on mobile)

## Review Points

### 1. Visual Inspection

Open `localhost:3000/test-components` and verify:
- Containers have correct max-widths
- Sections have proper spacing
- Buttons have correct colors from theme
- Cards have borders and shadows
- Everything is responsive

### 2. Interaction Testing

Test these interactions:
- Hover over buttons (should show hover state)
- Hover over hover cards (shadow should increase)
- Click button link (should navigate)
- Click disabled button (should not respond)
- Focus buttons with Tab (should show focus ring)

### 3. Browser DevTools

Inspect elements and verify:
- Tailwind classes are applied
- CSS variables resolve to correct colors
- No console errors
- Layout doesn't break on mobile

### 4. Component Props

Test that props work:
```tsx
<Container size="sm" className="custom-class" />
<Section background="muted" padding="xl" />
<Button variant="outline" size="lg" disabled />
<Card hover className="custom-class" />
```

---

## Understanding Component Patterns

### Composition Pattern

Components are designed to compose:

```tsx
<Section>
  <h2>Title</h2>
  <div className="grid gap-4">
    <Card hover>
      <CardHeader>
        <h3>Card Title</h3>
      </CardHeader>
      <CardContent>
        <p>Content</p>
        <Button>Action</Button>
      </CardContent>
    </Card>
  </div>
</Section>
```

### CN Utility Pattern

The `cn()` utility safely merges classes:

```tsx
// Without cn:
className={`base-class ${hover ? 'hover-class' : ''} ${className}`}

// With cn:
className={cn('base-class', hover && 'hover-class', className)}
```

Benefits:
- Handles conditionals cleanly
- Resolves Tailwind conflicts (twMerge)
- Easier to read

### Component Variants Pattern

Using TypeScript + objects for variants:

```tsx
const variants = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
}

<button className={variants[variant]} />
```

Safer than strings, autocompletes in IDE.

---

## Common Issues & Solutions

**Issue:** cn() not found  
**Solution:** Check that clsx and tailwind-merge are installed

**Issue:** Colors not showing  
**Solution:** Verify Tailwind theme is set up (TASK-002)

**Issue:** Button doesn't navigate  
**Solution:** Check that href prop is passed correctly

**Issue:** Card content cut off  
**Solution:** Remove `overflow-hidden` or adjust content

**Issue:** Styles not applying  
**Solution:** Check class name syntax, ensure no typos

---

## Extension Ideas (For Later)

Once these work, you can extend them:

```tsx
// Badge component
<Badge variant="success">New</Badge>

// Input component
<Input label="Email" type="email" />

// Modal component
<Modal open={open} onClose={handleClose}>
  <ModalHeader>Title</ModalHeader>
  <ModalBody>Content</ModalBody>
</Modal>
```

But keep it simple for now. Build only what you need.

---

## Next Steps

After verification passes, proceed to:
- **TASK-006:** Create Playground Structure

---

## Notes for AI Agents

- Keep test page for reference
- These components will be used throughout the site
- Don't over-engineer - simple is better
- Test responsiveness at different screen sizes
- Document any modifications in Context7
