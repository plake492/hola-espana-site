import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card, { CardHeader, CardContent } from '@/components/ui/Card';

export default function TestComponentsPage() {
  return (
    <>
      {/* Container Tests */}
      <Section>
        <h1 className="mb-8 text-4xl font-bold">Component Library Test</h1>

        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Containers</h2>
          <div className="space-y-4">
            <Container size="sm" className="bg-background-secondary rounded p-4">
              Small Container
            </Container>
            <Container size="md" className="bg-background-secondary rounded p-4">
              Medium Container
            </Container>
            <Container size="lg" className="bg-background-secondary rounded p-4">
              Large Container (default)
            </Container>
            <Container size="xl" className="bg-background-secondary rounded p-4">
              Extra Large Container
            </Container>
          </div>
        </div>
      </Section>

      {/* Section Tests */}
      <Section background="default" padding="md">
        <h2 className="mb-4 text-2xl font-semibold">Sections</h2>
        <p className="text-text-secondary">Default background, medium padding</p>
      </Section>

      <Section background="muted" padding="lg">
        <h2 className="mb-4 text-2xl font-semibold">Muted Background</h2>
        <p className="text-text-secondary">Muted background, large padding (default)</p>
      </Section>

      <Section background="accent" padding="sm">
        <h2 className="mb-4 text-2xl font-semibold">Accent Background</h2>
        <p>Accent background with contrasting text, small padding</p>
      </Section>

      {/* Button Tests */}
      <Section>
        <h2 className="mb-6 text-2xl font-semibold">Buttons</h2>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-medium">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-medium">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-medium">As Link</h3>
            <Button href="/test-components">Button as Link</Button>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-medium">Disabled</h3>
            <Button disabled>Disabled Button</Button>
          </div>
        </div>
      </Section>

      {/* Card Tests */}
      <Section background="muted">
        <h2 className="mb-6 text-2xl font-semibold">Cards</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold">Basic Card</h3>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary">Card with header and content sections.</p>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <h3 className="text-xl font-semibold">Hover Card</h3>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary">This card has a hover effect.</p>
            </CardContent>
          </Card>

          <Card className="bg-primary text-white">
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
  );
}
