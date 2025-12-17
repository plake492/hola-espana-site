export default function ColorReference() {
  return (
    <div className="bg-background-primary min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 text-center">
          <h1 className="text-text-primary mb-4 font-serif text-4xl md:text-5xl">Hola España Color System</h1>
          <p className="text-text-secondary">
            Complete visual reference for all available colors and their Tailwind classes
          </p>
        </header>

        {/* Background Colors */}
        <section className="mb-16">
          <h2 className="text-text-primary border-border mb-6 border-b-2 pb-2 font-serif text-2xl md:text-3xl">
            1. Background Colors
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <ColorCard
              className="bg-background-primary"
              tailwindClass="bg-background-primary"
              hex="#F5EFE7"
              name="Primary Background"
              usage="Main page backgrounds"
            />
            <ColorCard
              className="bg-background-secondary"
              tailwindClass="bg-background-secondary"
              hex="#E8DED0"
              name="Secondary Background"
              usage="Cards, panels, sections"
            />
            <ColorCard
              className="bg-background-tertiary"
              tailwindClass="bg-background-tertiary"
              hex="#FFFEF9"
              name="Tertiary Background"
              usage="Modals, overlays"
            />
          </div>
          <div className="bg-background-secondary mt-4 rounded-lg p-4">
            <p className="text-text-secondary text-sm">
              <strong>Legacy aliases:</strong> <code className="rounded bg-white px-2 py-1 text-xs">bg-hola-cream</code>
              , <code className="rounded bg-white px-2 py-1 text-xs">bg-hola-beige</code>
            </p>
          </div>
        </section>

        {/* Primary Colors (Terracotta) */}
        <section className="mb-16">
          <h2 className="text-text-primary border-border mb-6 border-b-2 pb-2 font-serif text-2xl md:text-3xl">
            2. Primary Colors (Terracotta)
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            <ColorCard
              className="bg-primary text-white"
              tailwindClass="bg-primary"
              hex="#C87B5A"
              name="Primary"
              usage="Main CTAs, buttons"
              textWhite
            />
            <ColorCard
              className="bg-primary-hover text-white"
              tailwindClass="bg-primary-hover"
              hex="#B86F52"
              name="Primary Hover"
              usage="Hover states"
              textWhite
            />
            <ColorCard
              className="bg-primary-light"
              tailwindClass="bg-primary-light"
              hex="#D89178"
              name="Primary Light"
              usage="Badges, soft accents"
            />
            <ColorCard
              className="bg-primary-dark text-white"
              tailwindClass="bg-primary-dark"
              hex="#A66648"
              name="Primary Dark"
              usage="Active states"
              textWhite
            />
          </div>
          <div className="bg-background-secondary mt-6 rounded-lg p-6">
            <h3 className="text-text-primary mb-4 font-semibold">Primary Button Examples:</h3>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary-hover rounded-md px-6 py-3 text-white transition-colors">
                Primary CTA
              </button>
              <button className="border-primary text-primary hover:bg-primary rounded-md border-2 px-6 py-3 transition-colors hover:text-white">
                Outline Primary
              </button>
              <span className="bg-primary-light text-primary-dark rounded-full px-4 py-2 text-sm font-medium">
                Badge
              </span>
            </div>
            <p className="text-text-secondary mt-4 text-sm">
              <strong>Legacy alias:</strong>{' '}
              <code className="rounded bg-white px-2 py-1 text-xs">bg-hola-terracotta</code>,{' '}
              <code className="rounded bg-white px-2 py-1 text-xs">bg-hola-rust</code>
            </p>
          </div>
        </section>

        {/* Secondary Colors (Teal) */}
        <section className="mb-16">
          <h2 className="text-text-primary border-border mb-6 border-b-2 pb-2 font-serif text-2xl md:text-3xl">
            3. Secondary Colors (Teal)
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <ColorCard
              className="bg-secondary text-white"
              tailwindClass="bg-secondary"
              hex="#4A6660"
              name="Secondary"
              usage="Secondary CTAs"
              textWhite
            />
            <ColorCard
              className="bg-secondary-hover text-white"
              tailwindClass="bg-secondary-hover"
              hex="#3A524D"
              name="Secondary Hover"
              usage="Hover states"
              textWhite
            />
            <ColorCard
              className="bg-secondary-light text-white"
              tailwindClass="bg-secondary-light"
              hex="#5A7670"
              name="Secondary Light"
              usage="Soft accents"
              textWhite
            />
          </div>
          <div className="bg-background-secondary mt-6 rounded-lg p-6">
            <h3 className="text-text-primary mb-4 font-semibold">Secondary Button Examples:</h3>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary hover:bg-secondary-hover rounded-md px-6 py-3 text-white transition-colors">
                Secondary CTA
              </button>
              <button className="border-secondary text-secondary hover:bg-secondary rounded-md border-2 px-6 py-3 transition-colors hover:text-white">
                Outline Secondary
              </button>
            </div>
            <p className="text-text-secondary mt-4 text-sm">
              <strong>Legacy alias:</strong> <code className="rounded bg-white px-2 py-1 text-xs">bg-hola-teal</code>,{' '}
              <code className="rounded bg-white px-2 py-1 text-xs">bg-hola-teal-dark</code>
            </p>
          </div>
        </section>

        {/* Text Colors */}
        <section className="mb-16">
          <h2 className="text-text-primary border-border mb-6 border-b-2 pb-2 font-serif text-2xl md:text-3xl">
            4. Text Colors
          </h2>
          <div className="bg-background-secondary space-y-4 rounded-lg p-6">
            <div className="border-border border-b pb-4">
              <p className="text-text-primary mb-2 font-serif text-xl">Primary Text (#1A1A1A)</p>
              <code className="rounded bg-white px-2 py-1 text-xs">text-text-primary</code>
              <p className="text-text-tertiary mt-2 text-sm">Use for: Headings, navigation, important text</p>
            </div>
            <div className="border-border border-b pb-4">
              <p className="text-text-secondary mb-2 text-lg">Secondary Text (#4A4A4A)</p>
              <code className="rounded bg-white px-2 py-1 text-xs">text-text-secondary</code>
              <p className="text-text-tertiary mt-2 text-sm">Use for: Body text, paragraphs, descriptions</p>
            </div>
            <div className="border-border border-b pb-4">
              <p className="text-text-tertiary mb-2 text-base">Tertiary Text (#6B6B6B)</p>
              <code className="rounded bg-white px-2 py-1 text-xs">text-text-tertiary</code>
              <p className="text-text-tertiary mt-2 text-sm">Use for: Captions, meta info, subtle details</p>
            </div>
            <div>
              <p className="text-text-muted mb-2 text-sm">Muted Text (#8B8B8B)</p>
              <code className="rounded bg-white px-2 py-1 text-xs">text-text-muted</code>
              <p className="text-text-tertiary mt-2 text-sm">Use for: Disabled states, placeholder text</p>
            </div>
          </div>
        </section>

        {/* Accent Colors */}
        <section className="mb-16">
          <h2 className="text-text-primary border-border mb-6 border-b-2 pb-2 font-serif text-2xl md:text-3xl">
            5. Accent Colors (Decorative)
          </h2>
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            <ColorCard
              className="bg-accent-mustard"
              tailwindClass="bg-accent-mustard"
              hex="#D4A574"
              name="Mustard"
              usage="Warm decorative arches"
            />
            <ColorCard
              className="bg-accent-gold"
              tailwindClass="bg-accent-gold"
              hex="#C89F5D"
              name="Gold"
              usage="Premium highlights"
            />
            <ColorCard
              className="bg-accent-terracotta text-white"
              tailwindClass="bg-accent-terracotta"
              hex="#C4734A"
              name="Terracotta"
              usage="Warm accents"
              textWhite
            />
            <ColorCard
              className="bg-accent-olive text-white"
              tailwindClass="bg-accent-olive"
              hex="#7B8C5C"
              name="Olive"
              usage="Green arches"
              textWhite
            />
            <ColorCard
              className="bg-accent-sage text-white"
              tailwindClass="bg-accent-sage"
              hex="#8C9B73"
              name="Sage"
              usage="Soft green accents"
              textWhite
            />
            <ColorCard
              className="bg-accent-brown text-white"
              tailwindClass="bg-accent-brown"
              hex="#8B6F4D"
              name="Brown"
              usage="Warm details"
              textWhite
            />
            <ColorCard
              className="bg-accent-purple text-white"
              tailwindClass="bg-accent-purple"
              hex="#8B5CF6"
              name="Purple"
              usage="Border accents"
              textWhite
            />
          </div>
          <div className="bg-background-secondary mt-6 rounded-lg p-6">
            <h3 className="text-text-primary mb-4 font-semibold">Decorative Arches (Signature Element):</h3>
            <div className="flex justify-center gap-4">
              <div className="bg-accent-mustard h-40 w-20 rounded-t-full"></div>
              <div className="bg-accent-olive h-40 w-20 rounded-t-full"></div>
              <div className="bg-accent-sage h-40 w-20 rounded-t-full"></div>
              <div className="bg-accent-gold h-40 w-20 rounded-t-full"></div>
            </div>
            <p className="text-text-secondary mt-4 text-center text-sm">
              Use accent colors for visual interest and Mediterranean-inspired decorative elements
            </p>
          </div>
        </section>

        {/* Functional Colors */}
        <section className="mb-16">
          <h2 className="text-text-primary border-border mb-6 border-b-2 pb-2 font-serif text-2xl md:text-3xl">
            6. Functional Colors
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-success rounded-lg p-6 text-white">
              <h3 className="mb-2 text-lg font-bold">✓ Success (#7B8C5C)</h3>
              <code className="rounded bg-white/20 px-2 py-1 text-xs">bg-success / text-success</code>
              <p className="mt-3 text-sm">Use for: Confirmations, successful actions, positive states</p>
            </div>
            <div className="bg-warning text-text-primary rounded-lg p-6">
              <h3 className="mb-2 text-lg font-bold">⚠ Warning (#D4A574)</h3>
              <code className="rounded bg-white px-2 py-1 text-xs">bg-warning / text-warning</code>
              <p className="mt-3 text-sm">Use for: Warnings, alerts, attention needed</p>
            </div>
            <div className="bg-error rounded-lg p-6 text-white">
              <h3 className="mb-2 text-lg font-bold">✕ Error (#C4734A)</h3>
              <code className="rounded bg-white/20 px-2 py-1 text-xs">bg-error / text-error</code>
              <p className="mt-3 text-sm">Use for: Error messages, validation failures, destructive actions</p>
            </div>
            <div className="bg-info rounded-lg p-6 text-white">
              <h3 className="mb-2 text-lg font-bold">ℹ Info (#4A6660)</h3>
              <code className="rounded bg-white/20 px-2 py-1 text-xs">bg-info / text-info</code>
              <p className="mt-3 text-sm">Use for: Informational messages, tips, neutral notifications</p>
            </div>
          </div>
        </section>

        {/* Border Colors */}
        <section className="mb-16">
          <h2 className="text-text-primary border-border mb-6 border-b-2 pb-2 font-serif text-2xl md:text-3xl">
            7. Border Colors
          </h2>
          <div className="space-y-4">
            <div className="border-border bg-background-secondary rounded-lg border-2 p-6">
              <h3 className="text-text-primary mb-2 font-semibold">Default Border (#E0D5C7)</h3>
              <code className="rounded bg-white px-2 py-1 text-xs">border-border</code>
              <p className="text-text-secondary mt-2 text-sm">Use for: Standard borders, dividers, subtle outlines</p>
            </div>
            <div className="border-border-accent bg-background-secondary rounded-lg border-4 p-6">
              <h3 className="text-text-primary mb-2 font-semibold">Accent Border (#8B5CF6)</h3>
              <code className="rounded bg-white px-2 py-1 text-xs">border-border-accent</code>
              <p className="text-text-secondary mt-2 text-sm">Use for: Header accents, special dividers</p>
            </div>
            <div className="border-border-strong bg-background-secondary rounded-lg border-2 p-6">
              <h3 className="text-text-primary mb-2 font-semibold">Strong Border (#C4C4C4)</h3>
              <code className="rounded bg-white px-2 py-1 text-xs">border-border-strong</code>
              <p className="text-text-secondary mt-2 text-sm">Use for: Emphasized borders, containers</p>
            </div>
          </div>
        </section>

        {/* Recommended Combinations */}
        <section className="mb-16">
          <h2 className="text-text-primary border-border mb-6 border-b-2 pb-2 font-serif text-2xl md:text-3xl">
            8. Recommended Color Combinations
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Card 1 */}
            <div className="bg-background-secondary border-accent-terracotta rounded-lg border-l-4 p-6">
              <h3 className="text-text-primary mb-2 font-serif text-xl">Service Card</h3>
              <p className="text-text-secondary mb-4">
                Background secondary + terracotta accent border creates warm, approachable cards.
              </p>
              <a href="#" className="text-primary hover:text-primary-hover font-medium">
                Learn more →
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-background-secondary border-accent-olive rounded-lg border-l-4 p-6">
              <h3 className="text-text-primary mb-2 font-serif text-xl">Alternative Card</h3>
              <p className="text-text-secondary mb-4">
                Background secondary + olive accent border for a nature-inspired feel.
              </p>
              <a href="#" className="text-secondary hover:text-secondary-hover font-medium">
                Learn more →
              </a>
            </div>

            {/* Hero Section */}
            <div className="bg-primary rounded-lg p-8 text-white md:col-span-2">
              <h3 className="mb-4 font-serif text-3xl">Primary Hero Section</h3>
              <p className="mb-6 text-white/90">
                Bold primary background with white text creates high impact for hero sections and CTAs.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="text-primary hover:bg-primary-light rounded-md bg-white px-6 py-3 transition-colors">
                  Get Started
                </button>
                <button className="hover:text-primary rounded-md border-2 border-white px-6 py-3 text-white transition-colors hover:bg-white">
                  Learn More
                </button>
              </div>
            </div>

            {/* Calm Section */}
            <div className="bg-accent-sage rounded-lg p-8 text-white md:col-span-2">
              <h3 className="mb-4 font-serif text-3xl">Sage Background Section</h3>
              <p className="mb-6 text-white/90">
                Soft sage background creates a calm, natural aesthetic perfect for about sections.
              </p>
              <button className="text-accent-sage hover:bg-background-tertiary rounded-md bg-white px-6 py-3 transition-colors">
                Discover Our Story
              </button>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="mb-16">
          <h2 className="text-text-primary border-border mb-6 border-b-2 pb-2 font-serif text-2xl md:text-3xl">
            9. Quick Tips
          </h2>
          <div className="bg-background-secondary space-y-4 rounded-lg p-6">
            <div className="flex gap-3">
              <span className="text-2xl">🎨</span>
              <div>
                <h3 className="text-text-primary mb-1 font-semibold">Stick to the hierarchy</h3>
                <p className="text-text-secondary text-sm">
                  Use background-primary and background-secondary for 90% of your layouts
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h3 className="text-text-primary mb-1 font-semibold">Primary vs Secondary CTAs</h3>
                <p className="text-text-secondary text-sm">
                  Terracotta (primary) for main actions, Teal (secondary) for supporting actions
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">✨</span>
              <div>
                <h3 className="text-text-primary mb-1 font-semibold">Use accents sparingly</h3>
                <p className="text-text-secondary text-sm">
                  Accent colors (mustard, gold, olive, sage) are for decorative elements and visual interest
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <h3 className="text-text-primary mb-1 font-semibold">Balance warm and cool</h3>
                <p className="text-text-secondary text-sm">
                  Mix warm tones (mustard, terracotta, gold) with cool tones (teal, olive, sage) for visual harmony
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">📱</span>
              <div>
                <h3 className="text-text-primary mb-1 font-semibold">Test accessibility</h3>
                <p className="text-text-secondary text-sm">
                  Ensure text has sufficient contrast (use white text on darker backgrounds)
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

interface ColorCardProps {
  className: string;
  tailwindClass: string;
  hex: string;
  name: string;
  usage: string;
  textWhite?: boolean;
}

function ColorCard({ className, tailwindClass, hex, name, usage, textWhite }: ColorCardProps) {
  return (
    <div className="border-border overflow-hidden rounded-lg border shadow-sm">
      <div className={`${className} flex h-32 items-center justify-center`}>
        <span className={`font-mono text-sm ${textWhite ? 'text-white' : 'text-text-primary'}`}>{hex}</span>
      </div>
      <div className="bg-white p-4">
        <h3 className="text-text-primary mb-1 font-semibold">{name}</h3>
        <code className="bg-background-secondary mb-2 block rounded px-2 py-1 text-xs break-all">{tailwindClass}</code>
        <p className="text-text-secondary text-xs">{usage}</p>
      </div>
    </div>
  );
}
