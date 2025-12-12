export default function ColorReference() {
  return (
    <div className="min-h-screen bg-background-primary p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-text-primary mb-4">
            Hola España Color System
          </h1>
          <p className="text-text-secondary">
            Complete visual reference for all available colors and their Tailwind classes
          </p>
        </header>

        {/* Background Colors */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif text-text-primary mb-6 border-b-2 border-border pb-2">
            1. Background Colors
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
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
          <div className="mt-4 p-4 bg-background-secondary rounded-lg">
            <p className="text-sm text-text-secondary">
              <strong>Legacy aliases:</strong> <code className="bg-white px-2 py-1 rounded text-xs">bg-hola-cream</code>,{' '}
              <code className="bg-white px-2 py-1 rounded text-xs">bg-hola-beige</code>
            </p>
          </div>
        </section>

        {/* Primary Colors (Terracotta) */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif text-text-primary mb-6 border-b-2 border-border pb-2">
            2. Primary Colors (Terracotta)
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
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
          <div className="mt-6 p-6 bg-background-secondary rounded-lg">
            <h3 className="font-semibold text-text-primary mb-4">Primary Button Examples:</h3>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md transition-colors">
                Primary CTA
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md transition-colors">
                Outline Primary
              </button>
              <span className="bg-primary-light text-primary-dark px-4 py-2 rounded-full text-sm font-medium">
                Badge
              </span>
            </div>
            <p className="text-sm text-text-secondary mt-4">
              <strong>Legacy alias:</strong> <code className="bg-white px-2 py-1 rounded text-xs">bg-hola-terracotta</code>,{' '}
              <code className="bg-white px-2 py-1 rounded text-xs">bg-hola-rust</code>
            </p>
          </div>
        </section>

        {/* Secondary Colors (Teal) */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif text-text-primary mb-6 border-b-2 border-border pb-2">
            3. Secondary Colors (Teal)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
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
          <div className="mt-6 p-6 bg-background-secondary rounded-lg">
            <h3 className="font-semibold text-text-primary mb-4">Secondary Button Examples:</h3>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary hover:bg-secondary-hover text-white px-6 py-3 rounded-md transition-colors">
                Secondary CTA
              </button>
              <button className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-3 rounded-md transition-colors">
                Outline Secondary
              </button>
            </div>
            <p className="text-sm text-text-secondary mt-4">
              <strong>Legacy alias:</strong> <code className="bg-white px-2 py-1 rounded text-xs">bg-hola-teal</code>,{' '}
              <code className="bg-white px-2 py-1 rounded text-xs">bg-hola-teal-dark</code>
            </p>
          </div>
        </section>

        {/* Text Colors */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif text-text-primary mb-6 border-b-2 border-border pb-2">
            4. Text Colors
          </h2>
          <div className="p-6 bg-background-secondary rounded-lg space-y-4">
            <div className="border-b border-border pb-4">
              <p className="text-text-primary text-xl font-serif mb-2">Primary Text (#1A1A1A)</p>
              <code className="text-xs bg-white px-2 py-1 rounded">text-text-primary</code>
              <p className="text-sm text-text-tertiary mt-2">Use for: Headings, navigation, important text</p>
            </div>
            <div className="border-b border-border pb-4">
              <p className="text-text-secondary text-lg mb-2">Secondary Text (#4A4A4A)</p>
              <code className="text-xs bg-white px-2 py-1 rounded">text-text-secondary</code>
              <p className="text-sm text-text-tertiary mt-2">Use for: Body text, paragraphs, descriptions</p>
            </div>
            <div className="border-b border-border pb-4">
              <p className="text-text-tertiary text-base mb-2">Tertiary Text (#6B6B6B)</p>
              <code className="text-xs bg-white px-2 py-1 rounded">text-text-tertiary</code>
              <p className="text-sm text-text-tertiary mt-2">Use for: Captions, meta info, subtle details</p>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-2">Muted Text (#8B8B8B)</p>
              <code className="text-xs bg-white px-2 py-1 rounded">text-text-muted</code>
              <p className="text-sm text-text-tertiary mt-2">Use for: Disabled states, placeholder text</p>
            </div>
          </div>
        </section>

        {/* Accent Colors */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif text-text-primary mb-6 border-b-2 border-border pb-2">
            5. Accent Colors (Decorative)
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
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
          <div className="mt-6 p-6 bg-background-secondary rounded-lg">
            <h3 className="font-semibold text-text-primary mb-4">Decorative Arches (Signature Element):</h3>
            <div className="flex gap-4 justify-center">
              <div className="w-20 h-40 bg-accent-mustard rounded-t-full"></div>
              <div className="w-20 h-40 bg-accent-olive rounded-t-full"></div>
              <div className="w-20 h-40 bg-accent-sage rounded-t-full"></div>
              <div className="w-20 h-40 bg-accent-gold rounded-t-full"></div>
            </div>
            <p className="text-sm text-text-secondary mt-4 text-center">
              Use accent colors for visual interest and Mediterranean-inspired decorative elements
            </p>
          </div>
        </section>

        {/* Functional Colors */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif text-text-primary mb-6 border-b-2 border-border pb-2">
            6. Functional Colors
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-success text-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">✓ Success (#7B8C5C)</h3>
              <code className="text-xs bg-white/20 px-2 py-1 rounded">bg-success / text-success</code>
              <p className="mt-3 text-sm">Use for: Confirmations, successful actions, positive states</p>
            </div>
            <div className="bg-warning text-text-primary p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">⚠ Warning (#D4A574)</h3>
              <code className="text-xs bg-white px-2 py-1 rounded">bg-warning / text-warning</code>
              <p className="mt-3 text-sm">Use for: Warnings, alerts, attention needed</p>
            </div>
            <div className="bg-error text-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">✕ Error (#C4734A)</h3>
              <code className="text-xs bg-white/20 px-2 py-1 rounded">bg-error / text-error</code>
              <p className="mt-3 text-sm">Use for: Error messages, validation failures, destructive actions</p>
            </div>
            <div className="bg-info text-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">ℹ Info (#4A6660)</h3>
              <code className="text-xs bg-white/20 px-2 py-1 rounded">bg-info / text-info</code>
              <p className="mt-3 text-sm">Use for: Informational messages, tips, neutral notifications</p>
            </div>
          </div>
        </section>

        {/* Border Colors */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif text-text-primary mb-6 border-b-2 border-border pb-2">
            7. Border Colors
          </h2>
          <div className="space-y-4">
            <div className="border-2 border-border bg-background-secondary p-6 rounded-lg">
              <h3 className="font-semibold text-text-primary mb-2">Default Border (#E0D5C7)</h3>
              <code className="text-xs bg-white px-2 py-1 rounded">border-border</code>
              <p className="text-sm text-text-secondary mt-2">Use for: Standard borders, dividers, subtle outlines</p>
            </div>
            <div className="border-4 border-border-accent bg-background-secondary p-6 rounded-lg">
              <h3 className="font-semibold text-text-primary mb-2">Accent Border (#8B5CF6)</h3>
              <code className="text-xs bg-white px-2 py-1 rounded">border-border-accent</code>
              <p className="text-sm text-text-secondary mt-2">Use for: Header accents, special dividers</p>
            </div>
            <div className="border-2 border-border-strong bg-background-secondary p-6 rounded-lg">
              <h3 className="font-semibold text-text-primary mb-2">Strong Border (#C4C4C4)</h3>
              <code className="text-xs bg-white px-2 py-1 rounded">border-border-strong</code>
              <p className="text-sm text-text-secondary mt-2">Use for: Emphasized borders, containers</p>
            </div>
          </div>
        </section>

        {/* Recommended Combinations */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif text-text-primary mb-6 border-b-2 border-border pb-2">
            8. Recommended Color Combinations
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-background-secondary border-l-4 border-accent-terracotta p-6 rounded-lg">
              <h3 className="text-text-primary text-xl font-serif mb-2">Service Card</h3>
              <p className="text-text-secondary mb-4">
                Background secondary + terracotta accent border creates warm, approachable cards.
              </p>
              <a href="#" className="text-primary hover:text-primary-hover font-medium">
                Learn more →
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-background-secondary border-l-4 border-accent-olive p-6 rounded-lg">
              <h3 className="text-text-primary text-xl font-serif mb-2">Alternative Card</h3>
              <p className="text-text-secondary mb-4">
                Background secondary + olive accent border for a nature-inspired feel.
              </p>
              <a href="#" className="text-secondary hover:text-secondary-hover font-medium">
                Learn more →
              </a>
            </div>

            {/* Hero Section */}
            <div className="bg-primary text-white p-8 rounded-lg md:col-span-2">
              <h3 className="text-3xl font-serif mb-4">Primary Hero Section</h3>
              <p className="text-white/90 mb-6">
                Bold primary background with white text creates high impact for hero sections and CTAs.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-primary hover:bg-primary-light px-6 py-3 rounded-md transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-md transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Calm Section */}
            <div className="bg-accent-sage text-white p-8 rounded-lg md:col-span-2">
              <h3 className="text-3xl font-serif mb-4">Sage Background Section</h3>
              <p className="text-white/90 mb-6">
                Soft sage background creates a calm, natural aesthetic perfect for about sections.
              </p>
              <button className="bg-white text-accent-sage hover:bg-background-tertiary px-6 py-3 rounded-md transition-colors">
                Discover Our Story
              </button>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif text-text-primary mb-6 border-b-2 border-border pb-2">
            9. Quick Tips
          </h2>
          <div className="bg-background-secondary p-6 rounded-lg space-y-4">
            <div className="flex gap-3">
              <span className="text-2xl">🎨</span>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Stick to the hierarchy</h3>
                <p className="text-text-secondary text-sm">
                  Use background-primary and background-secondary for 90% of your layouts
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Primary vs Secondary CTAs</h3>
                <p className="text-text-secondary text-sm">
                  Terracotta (primary) for main actions, Teal (secondary) for supporting actions
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">✨</span>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Use accents sparingly</h3>
                <p className="text-text-secondary text-sm">
                  Accent colors (mustard, gold, olive, sage) are for decorative elements and visual interest
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Balance warm and cool</h3>
                <p className="text-text-secondary text-sm">
                  Mix warm tones (mustard, terracotta, gold) with cool tones (teal, olive, sage) for visual harmony
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">📱</span>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Test accessibility</h3>
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
    <div className="border border-border rounded-lg overflow-hidden shadow-sm">
      <div className={`${className} h-32 flex items-center justify-center`}>
        <span className={`font-mono text-sm ${textWhite ? 'text-white' : 'text-text-primary'}`}>{hex}</span>
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-text-primary mb-1">{name}</h3>
        <code className="text-xs bg-background-secondary px-2 py-1 rounded block mb-2 break-all">
          {tailwindClass}
        </code>
        <p className="text-xs text-text-secondary">{usage}</p>
      </div>
    </div>
  );
}
