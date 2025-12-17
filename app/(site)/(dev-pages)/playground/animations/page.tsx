'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card, { CardHeader, CardContent } from '@/components/ui/Card';
import FadeIn from '@/components/animations/FadeIn';

export default function AnimationsPlayground() {
  const [reset, setReset] = useState(false);

  const handleReset = () => {
    setReset(true);
    setTimeout(() => setReset(false), 50);
  };

  if (reset) return null;

  return (
    <>
      <div className="grid min-h-dvh place-content-center">
        <h1>Scroll down for animations</h1>
      </div>
      <Section>
        <Container>
          <div className="mb-8">
            <h1 className="mb-4 text-4xl font-bold">Animation Playground</h1>
            <p className="text-text-secondary mb-4 text-lg">
              Scroll down to see animations trigger. All animations use React Spring.
            </p>
            <Button onClick={handleReset} variant="outline">
              Reset Animations
            </Button>
          </div>

          {/* Direction Tests */}
          <div className="space-y-12">
            <div>
              <h2 className="mb-6 text-2xl font-semibold">Fade Directions</h2>
              <div className="space-y-8">
                <FadeIn direction="up">
                  <Card>
                    <CardHeader>
                      <h3 className="text-xl font-semibold">Fade Up ↑</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-secondary">Default animation direction - slides up and fades in</p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn direction="down">
                  <Card>
                    <CardHeader>
                      <h3 className="text-xl font-semibold">Fade Down ↓</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-secondary">Slides down and fades in</p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn direction="left">
                  <Card>
                    <CardHeader>
                      <h3 className="text-xl font-semibold">Fade Left ←</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-secondary">Slides from right to left and fades in</p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn direction="right">
                  <Card>
                    <CardHeader>
                      <h3 className="text-xl font-semibold">Fade Right →</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-secondary">Slides from left to right and fades in</p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn direction="none">
                  <Card>
                    <CardHeader>
                      <h3 className="text-xl font-semibold">Fade Only</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-secondary">Just fades in with no directional movement</p>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </div>

            {/* Stagger Effect */}
            <div>
              <h2 className="mb-6 text-2xl font-semibold">Staggered Animations</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {[0, 100, 200].map((delay, i) => (
                  <FadeIn key={i} delay={delay}>
                    <Card hover>
                      <CardHeader>
                        <div className="bg-primary mb-4 h-12 w-12 rounded-lg" />
                        <h3 className="text-xl font-semibold">Card {i + 1}</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-text-secondary">Delay: {delay}ms</p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Different Durations */}
            <div>
              <h2 className="mb-6 text-2xl font-semibold">Duration Variations</h2>
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
            <div className="flex h-screen items-center justify-center">
              <FadeIn>
                <Card className="bg-primary max-w-md text-white">
                  <CardHeader>
                    <h3 className="text-2xl font-bold">You scrolled!</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">This animation triggered when you scrolled this element into view.</p>
                    <p className="text-sm opacity-90">
                      By default, animations only trigger once. Click &quot;Reset Animations&quot; above to see them
                      again.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            {/* Threshold Examples */}
            <div>
              <h2 className="mb-6 text-2xl font-semibold">Trigger Thresholds</h2>
              <p className="text-text-secondary mb-6">
                Threshold determines how much of the element must be visible before animation triggers.
              </p>
              <div className="space-y-8">
                <FadeIn>
                  <Card>
                    <CardContent>
                      <p className="font-medium">Threshold 0.1 (10% visible)</p>
                      <p className="text-text-secondary mt-1 text-sm">Triggers early - default setting</p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn>
                  <Card>
                    <CardContent>
                      <p className="font-medium">Threshold 0.5 (50% visible)</p>
                      <p className="text-text-secondary mt-1 text-sm">Triggers when halfway visible</p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn>
                  <Card>
                    <CardContent>
                      <p className="font-medium">Threshold 1.0 (100% visible)</p>
                      <p className="text-text-secondary mt-1 text-sm">Triggers only when fully visible</p>
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
          <h2 className="mb-6 text-2xl font-semibold">Best Practices</h2>
          <div className="text-text-secondary space-y-4">
            <p>
              <strong className="text-text-primary">Keep it subtle:</strong> Animations should enhance, not distract.
              Use moderate distances (20-40px) and durations (600-1000ms).
            </p>
            <p>
              <strong className="text-text-primary">Stagger wisely:</strong> For multiple elements, use 100-200ms delays
              to create smooth stagger effects.
            </p>
            <p>
              <strong className="text-text-primary">Respect motion preferences:</strong> Consider adding{' '}
              <code className="bg-background-primary rounded px-1 py-0.5 text-sm">prefers-reduced-motion</code> support
              for accessibility.
            </p>
            <p>
              <strong className="text-text-primary">Performance:</strong> FadeIn uses CSS transforms which are
              GPU-accelerated. Avoid animating too many elements simultaneously.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
