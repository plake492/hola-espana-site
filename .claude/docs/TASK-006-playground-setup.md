# TASK-006: Create Playground Structure

**Objective:** Set up non-production playground pages for testing animations and layouts.

**Prerequisites:** TASK-005 completed and verified

**Estimated Time:** 20-25 minutes

---

## Background: Why a Playground?

The playground is a safe space to:
- Test animations before adding to production
- Experiment with layouts
- Try component variations
- Show client design options

Key: It's separate from production code, only visible in development.

---

## Steps

### 1. Create Playground Index

Create `src/app/playground/page.tsx`:

```tsx
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Card, { CardHeader, CardContent } from '@/components/ui/Card'

export default function PlaygroundPage() {
  return (
    <Section>
      <Container>
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Development Playground</h1>
          <p className="text-lg text-muted-foreground">
            Non-production testing area for animations, layouts, and components
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/playground/animations">
            <Card hover className="h-full">
              <CardHeader>
                <div className="text-4xl mb-2">🎬</div>
                <h2 className="text-2xl font-semibold">Animations</h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Test React Spring animations and scroll effects
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/playground/layouts">
            <Card hover className="h-full">
              <CardHeader>
                <div className="text-4xl mb-2">📐</div>
                <h2 className="text-2xl font-semibold">Layouts</h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Test different page layouts and section combinations
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/playground/components">
            <Card hover className="h-full">
              <CardHeader>
                <div className="text-4xl mb-2">🧩</div>
                <h2 className="text-2xl font-semibold">Components</h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Test UI components and variations
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">⚠️ Development Only</h3>
          <p className="text-sm text-muted-foreground">
            This playground is only visible in development mode. It will not appear in production.
          </p>
        </div>
      </Container>
    </Section>
  )
}
```

### 2. Create Placeholder Pages

Create these three files with basic structure:

**File:** `src/app/playground/animations/page.tsx`
```tsx
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'

export default function AnimationsPlayground() {
  return (
    <Section>
      <Container>
        <h1 className="text-4xl font-bold mb-4">Animations Playground</h1>
        <p className="text-muted-foreground mb-8">
          Animation components will be added in TASK-007
        </p>
        
        <div className="p-8 bg-muted rounded-lg text-center">
          <p className="text-2xl">🎬</p>
          <p className="mt-2 text-muted-foreground">Coming soon...</p>
        </div>
      </Container>
    </Section>
  )
}
```

**File:** `src/app/playground/layouts/page.tsx`
```tsx
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Card, { CardHeader, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function LayoutsPlayground() {
  return (
    <>
      {/* Example: Hero Section */}
      <Section background="accent" padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Example Hero Section
            </h1>
            <p className="text-xl mb-8">
              Test different layout combinations and see how they work together
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">Primary CTA</Button>
              <Button size="lg" variant="outline">Secondary CTA</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Example: Three Column Grid */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Three Column Layout
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} hover>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold">Feature {i}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Description of feature and its benefits for users.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Example: Two Column */}
      <Section background="muted">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Two Column Layout</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Great for about sections, features with images, or any content that needs side-by-side presentation.
              </p>
              <Button>Learn More</Button>
            </div>
            <div className="aspect-video bg-card rounded-lg border border-border flex items-center justify-center">
              <p className="text-muted-foreground">Image placeholder</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
```

**File:** `src/app/playground/components/page.tsx`
```tsx
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Card, { CardHeader, CardContent } from '@/components/ui/Card'

export default function ComponentsPlayground() {
  return (
    <Section>
      <Container>
        <h1 className="text-4xl font-bold mb-8">Components Playground</h1>
        
        <div className="space-y-12">
          {/* Button Combinations */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Button Groups</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Save Changes</Button>
              <Button variant="secondary">Cancel</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>

          {/* Card Variations */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Card Styles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Standard Card</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Default card styling with border and subtle shadow.
                  </p>
                  <Button size="sm">Action</Button>
                </CardContent>
              </Card>

              <Card hover className="bg-brand-teal text-white">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Custom Card</h3>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Card with custom background and hover effect.
                  </p>
                  <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-teal">
                    Action
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
```

### 3. Add Dev-Only Playground Link

Update `src/app/layout.tsx` to include floating playground link:

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hola España - Legal and Relocation Experts',
  description: 'Expert immigration services for US citizens relocating to Spain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        
        {/* Development-only playground link */}
        {process.env.NODE_ENV === 'development' && (
          <a 
            href="/playground" 
            className="fixed bottom-6 right-6 z-50 bg-brand-rust text-white px-4 py-3 rounded-full shadow-lg hover:bg-brand-brick transition-colors flex items-center gap-2 font-medium"
          >
            <span>🛝</span>
            <span>Playground</span>
          </a>
        )}
      </body>
    </html>
  )
}
```

---

## Verification Checklist

- [ ] Playground index renders at `/playground`
- [ ] All three sub-pages are accessible
- [ ] Cards on index page are clickable
- [ ] Playground link shows in bottom-right (dev only)
- [ ] Layouts page shows example sections
- [ ] Components page shows variations
- [ ] No TypeScript errors
- [ ] Responsive on mobile

## Review Points

### 1. Navigation Flow

Test this flow:
1. Visit any page in dev
2. Click floating playground button
3. Should go to `/playground`
4. Click "Animations" card
5. Should go to `/playground/animations`
6. Browser back button should work

### 2. Visual Check

Verify:
- Playground link only shows in development
- Link is easily accessible (bottom-right)
- Cards have hover effects
- Icons (emojis) display correctly
- Warning box on index is visible

### 3. Production Check

```bash
npm run build
npm start
```

Verify:
- Playground link does NOT show
- `/playground` routes still work (Next.js builds all routes)
- But no easy way to access without URL

**Note:** In production deployment, you may want to add middleware to block `/playground/*` routes entirely.

### 4. Responsive Test

Test on mobile viewport:
- Playground link should be visible and tappable
- Cards should stack vertically
- Layout sections should be responsive

---

## Understanding the Structure

### Playground Organization

```
/playground
├── index - Hub page with cards
├── /animations - React Spring tests
├── /layouts - Page layout examples
└── /components - Component variations
```

Each page is independent. Add more as needed:
- `/playground/forms`
- `/playground/colors`
- `/playground/typography`

### Development-Only Pattern

```tsx
{process.env.NODE_ENV === 'development' && (
  // Only renders in dev mode
)}
```

This ensures playground tools don't ship to production.

---

## Common Issues & Solutions

**Issue:** Floating link not showing  
**Solution:** Check that you're in development mode (`npm run dev`)

**Issue:** Link overlaps content  
**Solution:** Adjust position with CSS (currently `bottom-6 right-6`)

**Issue:** Cards not clickable  
**Solution:** Wrap entire card in `<Link>` component

**Issue:** Emojis not showing  
**Solution:** Verify UTF-8 encoding in files

---

## Extension Ideas

Add more playground sections as needed:

```tsx
// Color palette tester
<Link href="/playground/colors">
  <Card hover>
    <CardHeader>🎨 Colors</CardHeader>
    <CardContent>Test color combinations</CardContent>
  </Card>
</Link>

// Typography scales
<Link href="/playground/typography">
  <Card hover>
    <CardHeader>📝 Typography</CardHeader>
    <CardContent>Test font sizes and weights</CardContent>
  </Card>
</Link>

// Form elements
<Link href="/playground/forms">
  <Card hover>
    <CardHeader>📋 Forms</CardHeader>
    <CardContent>Test form inputs and validation</CardContent>
  </Card>
</Link>
```

---

## Next Steps

After verification passes, proceed to:
- **TASK-007:** Create FadeIn Animation Component

---

## Notes for AI Agents

- Playground is for experimentation only
- Keep it organized - don't let it become messy
- Document any new playground pages in Context7
- Consider blocking `/playground/*` in production via middleware later
- This is your sandbox - use it liberally for testing
