# TASK-007: Create FadeIn Animation Component

**Objective:** Build a reusable FadeIn animation component using React Spring.

**Prerequisites:** TASK-006 completed and verified

**Estimated Time:** 30-35 minutes

---

## Background: Scroll Animations

Scroll-triggered animations make sites feel more dynamic:
- Elements fade in as user scrolls
- Triggers once when element enters viewport
- Adds polish without being distracting

We're using React Spring (not Framer Motion) because it's lighter and more flexible.

---

## Steps

### 1. Create FadeIn Component

Create `src/components/animations/FadeIn.tsx`:

```typescript
'use client'

import { useSpring, animated } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  threshold?: number
  className?: string
  triggerOnce?: boolean
}

/**
 * FadeIn animation component using React Spring
 * Triggers animation when element enters viewport
 * 
 * @param children - Content to animate
 * @param delay - Delay before animation starts (ms)
 * @param duration - Animation duration (ms)
 * @param direction - Direction to slide from
 * @param distance - Distance to slide (px)
 * @param threshold - Percentage of element that must be visible to trigger (0-1)
 * @param className - Additional CSS classes
 * @param triggerOnce - If true, animation only plays once
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 800,
  direction = 'up',
  distance = 30,
  threshold = 0.1,
  className,
  triggerOnce = true,
}: FadeInProps) {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  })

  const getTransform = () => {
    if (!inView) {
      switch (direction) {
        case 'up': return `translateY(${distance}px)`
        case 'down': return `translateY(-${distance}px)`
        case 'left': return `translateX(${distance}px)`
        case 'right': return `translateX(-${distance}px)`
        default: return 'none'
      }
    }
    return 'none'
  }

  const springs = useSpring({
    from: {
      opacity: 0,
      transform: getTransform(),
    },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : getTransform(),
    },
    delay,
    config: { duration },
  })

  return (
    <animated.div ref={ref} style={springs} className={className}>
      {children}
    </animated.div>
  )
}
```

### 2. Update Animations Playground

Update `src/app/playground/animations/page.tsx`:

```tsx
'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Card, { CardHeader, CardContent } from '@/components/ui/Card'
import FadeIn from '@/components/animations/FadeIn'

export default function AnimationsPlayground() {
  const [reset, setReset] = useState(false)

  const handleReset = () => {
    setReset(true)
    setTimeout(() => setReset(false), 50)
  }

  if (reset) return null

  return (
    <>
      <Section>
        <Container>
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Animation Playground</h1>
            <p className="text-lg text-muted-foreground mb-4">
              Scroll down to see animations trigger. All animations use React Spring.
            </p>
            <Button onClick={handleReset} variant="outline">
              Reset Animations
            </Button>
          </div>

          {/* Direction Tests */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Fade Directions</h2>
              <div className="space-y-8">
                <FadeIn direction="up">
                  <Card>
                    <CardHeader>
                      <h3 className="text-xl font-semibold">Fade Up ↑</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Default animation direction - slides up and fades in
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn direction="down">
                  <Card>
                    <CardHeader>
                      <h3 className="text-xl font-semibold">Fade Down ↓</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Slides down and fades in
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn direction="left">
                  <Card>
                    <CardHeader>
                      <h3 className="text-xl font-semibold">Fade Left ←</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Slides from right to left and fades in
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn direction="right">
                  <Card>
                    <CardHeader>
                      <h3 className="text-xl font-semibold">Fade Right →</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Slides from left to right and fades in
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn direction="none">
                  <Card>
                    <CardHeader>
                      <h3 className="text-xl font-semibold">Fade Only</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Just fades in with no directional movement
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </div>

            {/* Stagger Effect */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Staggered Animations</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[0, 100, 200].map((delay, i) => (
                  <FadeIn key={i} delay={delay}>
                    <Card hover>
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary rounded-lg mb-4" />
                        <h3 className="text-xl font-semibold">Card {i + 1}</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Delay: {delay}ms
                        </p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Different Durations */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Duration Variations</h2>
              <div className="space-y-6">
                <FadeIn duration={400}>
                  <Card>
                    <CardContent>
                      <p className="font-medium">Fast (400ms)</p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn duration={800}>
                  <Card>
                    <CardContent>
                      <p className="font-medium">Medium (800ms) - Default</p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn duration={1200}>
                  <Card>
                    <CardContent>
                      <p className="font-medium">Slow (1200ms)</p>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </div>

            {/* Add vertical space to enable scrolling */}
            <div className="h-screen flex items-center justify-center">
              <FadeIn>
                <Card className="bg-brand-rust text-white max-w-md">
                  <CardHeader>
                    <h3 className="text-2xl font-bold">You scrolled!</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      This animation triggered when you scrolled this element into view.
                    </p>
                    <p className="text-sm opacity-90">
                      By default, animations only trigger once. Click "Reset Animations" above to see them again.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            {/* Threshold Examples */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Trigger Thresholds</h2>
              <p className="text-muted-foreground mb-6">
                Threshold determines how much of the element must be visible before animation triggers.
              </p>
              <div className="space-y-8">
                <FadeIn threshold={0.1}>
                  <Card>
                    <CardContent>
                      <p className="font-medium">Threshold 0.1 (10% visible)</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Triggers early - default setting
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn threshold={0.5}>
                  <Card>
                    <CardContent>
                      <p className="font-medium">Threshold 0.5 (50% visible)</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Triggers when halfway visible
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn threshold={1.0}>
                  <Card>
                    <CardContent>
                      <p className="font-medium">Threshold 1.0 (100% visible)</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Triggers only when fully visible
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Best Practices Section */}
      <Section background="muted">
        <Container size="md">
          <h2 className="text-2xl font-semibold mb-6">Best Practices</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Keep it subtle:</strong> Animations should enhance, not distract. Use moderate distances (20-40px) and durations (600-1000ms).
            </p>
            <p>
              <strong className="text-foreground">Stagger wisely:</strong> For multiple elements, use 100-200ms delays to create smooth stagger effects.
            </p>
            <p>
              <strong className="text-foreground">Respect motion preferences:</strong> Consider adding <code className="text-sm bg-background px-1 py-0.5 rounded">prefers-reduced-motion</code> support for accessibility.
            </p>
            <p>
              <strong className="text-foreground">Performance:</strong> FadeIn uses CSS transforms which are GPU-accelerated. Avoid animating too many elements simultaneously.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
```

---

## Verification Checklist

- [ ] FadeIn component compiles without errors
- [ ] Animations playground page works
- [ ] Animations trigger when scrolling into view
- [ ] All directions work (up, down, left, right, none)
- [ ] Stagger effect works with delays
- [ ] Different durations work correctly
- [ ] Reset button re-triggers animations
- [ ] Threshold variations work as expected
- [ ] Animations only trigger once by default
- [ ] No performance issues or jank

## Review Points

### 1. Visual Testing

Scroll through the animations page and verify:
- Animations are smooth (no stuttering)
- Direction matches description
- Delays create stagger effect
- Threshold affects when animation starts
- Reset button works

### 2. Performance Check

Open browser DevTools:
- Check FPS (should stay at 60fps)
- Look for layout thrashing warnings
- Verify no console errors
- Check memory usage (should be stable)

### 3. Different Viewports

Test on:
- Desktop (Chrome, Firefox, Safari)
- Mobile (or mobile viewport in DevTools)
- Tablet size
- Different scroll speeds

### 4. Intersection Observer

Verify intersection observer works:
- Elements below fold don't animate until scrolled
- Elements above fold animate immediately
- triggerOnce prevents re-animation on scroll up
- Setting triggerOnce={false} allows re-animation

---

## Understanding React Spring

### Why React Spring?

**React Spring** vs **Framer Motion**:
- Lighter weight (~13kb vs ~60kb)
- Physics-based animations (feels more natural)
- Better performance with many elements
- More flexible API

### How useSpring Works

```tsx
const springs = useSpring({
  from: { opacity: 0 },      // Starting state
  to: { opacity: 1 },        // Ending state
  config: { duration: 800 }  // How to animate
})

return <animated.div style={springs}>...</animated.div>
```

The `animated` component accepts spring values as styles.

### Intersection Observer

`useInView` from `react-intersection-observer`:
- Triggers when element enters viewport
- More efficient than scroll listeners
- Supports threshold (how much must be visible)
- Can trigger once or repeatedly

---

## Common Issues & Solutions

**Issue:** Animations don't trigger  
**Solution:** Check that component has `'use client'` directive at top

**Issue:** Animations trigger too early/late  
**Solution:** Adjust `threshold` prop (0.1 = 10% visible, 1.0 = 100% visible)

**Issue:** Animations feel janky  
**Solution:** Reduce duration, reduce number of simultaneous animations

**Issue:** Reset button doesn't work  
**Solution:** Ensure state reset and remount logic is correct

**Issue:** TypeScript error on animated.div  
**Solution:** Verify @react-spring/web is installed and imported

---

## Usage in Production Pages

To use FadeIn in real pages:

```tsx
import FadeIn from '@/components/animations/FadeIn'

export default function AboutPage() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <h1>About Us</h1>
        </FadeIn>
        
        <FadeIn delay={200}>
          <p>Our story...</p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FadeIn key={i} delay={i * 100}>
              <Card>{feature}</Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}
```

**Pro tip:** Don't animate every single element. Use sparingly for impact.

---

## Accessibility Considerations

### Respecting Motion Preferences

Future enhancement - add this to FadeIn:

```tsx
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

// If user prefers reduced motion, skip animation
if (prefersReducedMotion) {
  return <div className={className}>{children}</div>
}
```

This respects user's system settings for motion sensitivity.

---

## Next Steps

After verification passes, proceed to:
- **TASK-008:** Setup Vercel Analytics

---

## Notes for AI Agents

- Animations add polish but use sparingly
- Test on real devices, not just DevTools
- Consider performance with many animated elements
- Document any animation modifications in Context7
- Keep animations subtle and professional
- Respect user motion preferences (future task)
