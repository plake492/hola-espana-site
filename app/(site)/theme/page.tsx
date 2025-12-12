const fontSizes = [
  // Serif Font
  {
    name: 'Serif Small',
    font: 'font-serif',
    size: 'text-sm',
    weight: 'font-normal',
    example: 'Small serif text',
  },
  {
    name: 'Serif Base',
    font: 'font-serif',
    size: 'text-base',
    weight: 'font-normal',
    example: 'Base serif text',
  },
  {
    name: 'Serif Large',
    font: 'font-serif',
    size: 'text-lg',
    weight: 'font-normal',
    example: 'Large serif text',
  },
  {
    name: 'Serif XL',
    font: 'font-serif',
    size: 'text-xl',
    weight: 'font-semibold',
    example: 'Extra large serif text',
  },
  {
    name: 'Serif 2XL',
    font: 'font-serif',
    size: 'text-2xl',
    weight: 'font-semibold',
    example: 'Heading serif text',
  },
  {
    name: 'Serif 3XL',
    font: 'font-serif',
    size: 'text-3xl',
    weight: 'font-bold',
    example: 'Large heading serif',
  },
  {
    name: 'Serif 4XL',
    font: 'font-serif',
    size: 'text-4xl',
    weight: 'font-bold',
    example: 'Hero serif text',
  },
  {
    name: 'Serif 5XL',
    font: 'font-serif',
    size: 'text-5xl',
    weight: 'font-bold',
    example: 'Hero serif text',
  },
  {
    name: 'Serif 6XL',
    font: 'font-serif',
    size: 'text-6xl',
    weight: 'font-bold',
    example: 'Hero serif text',
  },
  {
    name: 'Serif 7XL',
    font: 'font-serif',
    size: 'text-7xl',
    weight: 'font-bold',
    example: 'Hero serif text',
  },
  {
    name: 'Serif 8XL',
    font: 'font-serif',
    size: 'text-8xl',
    weight: 'font-bold',
    example: 'Hero serif text',
  },

  // Sans Font
  {
    name: 'Sans Small',
    font: 'font-sans',
    size: 'text-sm',
    weight: 'font-normal',
    example: 'Small sans text',
  },
  {
    name: 'Sans Base',
    font: 'font-sans',
    size: 'text-base',
    weight: 'font-normal',
    example: 'Base sans text',
  },
  {
    name: 'Sans Large',
    font: 'font-sans',
    size: 'text-lg',
    weight: 'font-medium',
    example: 'Large sans text',
  },
  {
    name: 'Sans XL',
    font: 'font-sans',
    size: 'text-xl',
    weight: 'font-semibold',
    example: 'Extra large sans text',
  },
  {
    name: 'Sans 2XL',
    font: 'font-sans',
    size: 'text-2xl',
    weight: 'font-bold',
    example: 'Heading sans text',
  },
  {
    name: 'Sans 3XL',
    font: 'font-sans',
    size: 'text-3xl',
    weight: 'font-bold',
    example: 'Heading sans text',
  },
  {
    name: 'Sans 4XL',
    font: 'font-sans',
    size: 'text-4xl',
    weight: 'font-bold',
    example: 'Heading sans text',
  },
  {
    name: 'Sans 5XL',
    font: 'font-sans',
    size: 'text-5xl',
    weight: 'font-bold',
    example: 'Heading sans text',
  },
  {
    name: 'Sans 6XL',
    font: 'font-sans',
    size: 'text-6xl',
    weight: 'font-bold',
    example: 'Heading sans text',
  },
  {
    name: 'Sans 7XL',
    font: 'font-sans',
    size: 'text-7xl',
    weight: 'font-bold',
    example: 'Heading sans text',
  },
  {
    name: 'Sans 8XL',
    font: 'font-sans',
    size: 'text-8xl',
    weight: 'font-bold',
    example: 'Heading sans text',
  },

  // Script Font
  {
    name: 'Script Large',
    font: 'font-script',
    size: 'text-lg',
    weight: 'font-normal',
    example: 'Hola',
  },
  {
    name: 'Script XL',
    font: 'font-script',
    size: 'text-xl',
    weight: 'font-normal',
    example: 'Hola',
  },
  {
    name: 'Script 2XL',
    font: 'font-script',
    size: 'text-2xl',
    weight: 'font-normal',
    example: 'Hola',
  },
  {
    name: 'Script 3XL',
    font: 'font-script',
    size: 'text-3xl',
    weight: 'font-normal',
    example: 'Hola',
  },
  {
    name: 'Script 4XL',
    font: 'font-script',
    size: 'text-4xl',
    weight: 'font-normal',
    example: 'Hola',
  },
  {
    name: 'Script 5XL',
    font: 'font-script',
    size: 'text-5xl',
    weight: 'font-normal',
    example: 'Hola',
  },
  {
    name: 'Script 6XL',
    font: 'font-script',
    size: 'text-6xl',
    weight: 'font-normal',
    example: 'Hola',
  },
  {
    name: 'Script 7XL',
    font: 'font-script',
    size: 'text-7xl',
    weight: 'font-normal',
    example: 'Hola',
  },
  {
    name: 'Script 8XL',
    font: 'font-script',
    size: 'text-8xl',
    weight: 'font-normal',
    example: 'Hola',
  },
];

const colors = [
  { name: 'Cream', value: '#F5EFE7', class: 'bg-hola-cream', description: 'Primary background' },
  { name: 'Beige', value: '#E8DED0', class: 'bg-hola-beige', description: 'Secondary background' },
  { name: 'Mustard', value: '#D4A574', class: 'bg-hola-mustard', description: 'Arch accents' },
  { name: 'Gold', value: '#C89F5D', class: 'bg-hola-gold', description: 'Highlights' },
  {
    name: 'Terracotta',
    value: '#C87B5A',
    class: 'bg-hola-terracotta',
    description: 'Button primary',
  },
  { name: 'Rust', value: '#B86F52', class: 'bg-hola-rust', description: 'Button hover' },
  { name: 'Teal', value: '#4A6660', class: 'bg-hola-teal', description: 'Arch accents' },
  { name: 'Teal Dark', value: '#3A524D', class: 'bg-hola-teal-dark', description: 'Deep accents' },
  { name: 'Olive', value: '#7B8C5C', class: 'bg-hola-olive', description: 'Arch accents' },
  { name: 'Sage', value: '#8C9B73', class: 'bg-hola-sage', description: 'Natural accents' },
  { name: 'Brown', value: '#8B6F4D', class: 'bg-hola-brown', description: 'Text accents' },
  { name: 'Accent', value: '#C4734A', class: 'bg-hola-accent', description: 'CTA elements' },
];
const HolaEspanaTheme = () => {
  return (
    <div className="bg-hola-cream relative min-h-screen">
      {/* Hero Section */}
      <section className="px-8 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-6xl">
            <span className="font-script text-7xl">Hola</span>
            <span className="ml-4 font-serif">ESPAÑA</span>
          </h1>
          <p className="mb-8 font-sans text-xl tracking-wider text-gray-700">LEGAL AND RELOCATION EXPERTS</p>
          <button className="bg-hola-terracotta hover:bg-hola-rust rounded-full px-12 py-4 font-sans text-lg tracking-wider text-white transition-colors">
            Lets Connect
          </button>
        </div>
      </section>

      {/* Decorative Arches */}
      <section className="overflow-hidden px-8 py-12">
        <div className="mx-auto flex max-w-6xl justify-center gap-4">
          <div className="bg-hola-teal h-64 w-32 rounded-t-full"></div>
          <div className="bg-hola-mustard -mt-8 h-80 w-40 rounded-t-full"></div>
          <div className="bg-hola-terracotta h-64 w-32 rounded-t-full"></div>
          <div className="bg-hola-olive -mt-8 h-80 w-40 rounded-t-full"></div>
          <div className="bg-hola-gold h-64 w-32 rounded-t-full"></div>
        </div>
      </section>

      {/* Theme Display */}
      <section className="bg-white px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center font-serif text-4xl">Color Palette</h2>
          <p className="mb-12 text-center font-sans text-gray-600">Mediterranean-inspired Art Deco theme</p>

          <div className="grid grid-cols-2 gap-6">
            {colors.map((color) => (
              <div key={color.name} className="group">
                <div
                  className={`${color.class} mb-3 h-32 rounded-lg shadow-lg transition-transform group-hover:scale-105`}
                ></div>
                <h3 className="font-sans font-semibold text-gray-800">{color.name}</h3>
                <p className="font-mono text-sm text-gray-600">{color.value}</p>
                <p className="mt-1 text-xs text-gray-500">{color.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="bg-hola-cream px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-serif text-4xl">Component Examples</h2>

          <div className="grid grid-cols-2 gap-8">
            {/* Button Examples */}
            <div className="rounded-lg bg-white p-8 shadow">
              <h3 className="mb-6 font-serif text-2xl">Buttons</h3>
              <div className="space-y-4">
                <button className="bg-hola-terracotta hover:bg-hola-rust w-full rounded-full px-6 py-3 font-sans tracking-wider text-white transition-colors">
                  Primary Button
                </button>
                <button className="bg-hola-teal hover:bg-hola-teal-dark w-full rounded-full px-6 py-3 font-sans tracking-wider text-white transition-colors">
                  Secondary Button
                </button>
                <button className="border-hola-terracotta text-hola-terracotta hover:bg-hola-terracotta w-full rounded-full border-2 px-6 py-3 font-sans tracking-wider transition-colors hover:text-white">
                  Outline Button
                </button>
              </div>
            </div>

            {/* Card Example */}
            <div className="rounded-lg bg-white p-8 shadow">
              <h3 className="mb-6 font-serif text-2xl">Card</h3>
              <div className="bg-hola-cream border-hola-accent rounded-lg border-l-4 p-6">
                <h4 className="text-hola-teal-dark mb-2 font-serif text-xl">Visa Services</h4>
                <p className="mb-4 font-sans text-sm text-gray-600">
                  Expert guidance through Spanish visa and residency processes
                </p>
                <a href="#" className="text-hola-terracotta hover:text-hola-rust font-sans text-sm transition-colors">
                  Learn more →
                </a>
              </div>
            </div>

            {/* Decorative Shapes */}
            <div className="col-span-2 rounded-lg bg-white p-8 shadow">
              <h3 className="mb-6 font-serif text-2xl">Decorative Arches</h3>
              <div className="flex justify-center gap-2">
                <div className="bg-hola-mustard h-32 w-16 rounded-t-full"></div>
                <div className="bg-hola-teal h-32 w-16 rounded-t-full"></div>
                <div className="bg-hola-terracotta h-32 w-16 rounded-t-full"></div>
                <div className="bg-hola-olive h-32 w-16 rounded-t-full"></div>
              </div>
            </div>

            {/* Typography */}
            <div className="col-span-2 rounded-lg bg-white p-8 shadow">
              <h3 className="mb-12 text-2xl">Typography</h3>

              {/* TAN Aegean (Sans) */}
              <div className="mb-24">
                <h4 className="text-hola-terracotta mb-4 text-lg font-semibold">TAN Aegean (Primary)</h4>
                {/* <div className="grid grid-cols-2 gap-6"> */}
                {fontSizes
                  .filter((item) => item.font === 'font-sans')
                  .map((item) => (
                    <div key={item.name} className="border-b border-gray-200 py-4">
                      <p className="mb-2 text-[8px] text-gray-400">
                        {item.name} - {item.size} {item.weight}
                      </p>
                      <p className={`${item.font} ${item.size} ${item.weight} text-hola-teal-dark`}>{item.example}</p>
                    </div>
                  ))}
                {/* </div> */}
              </div>

              {/* Montserrat (Secondary) */}
              <div className="mb-24">
                <h4 className="text-hola-teal mb-4 text-lg font-semibold">Montserrat (Secondary)</h4>
                {/* <div className="grid grid-cols-2 gap-6"> */}
                {fontSizes
                  .filter((item) => item.font === 'font-serif')
                  .map((item) => (
                    <div key={item.name} className="border-b border-gray-200 py-4">
                      <p className="mb-2 text-[8px] text-gray-400">
                        {item.name} - {item.size} {item.weight}
                      </p>
                      <p className={`${item.font} ${item.size} ${item.weight} text-hola-teal-dark`}>{item.example}</p>
                    </div>
                  ))}
                {/* </div> */}
              </div>

              {/* La Luxes (Script) */}
              <div>
                <h4 className="text-hola-olive mb-4 text-lg font-semibold">La Luxes (Decorative)</h4>
                {/* <div className="grid grid-cols-2 gap-6"> */}
                {fontSizes
                  .filter((item) => item.font === 'font-script')
                  .map((item) => (
                    <div key={item.name} className="border-b border-gray-200 py-4">
                      <p className="mb-2 text-[8px] text-gray-400">
                        {item.name} - {item.size} {item.weight}
                      </p>
                      <p className={`${item.font} ${item.size} ${item.weight} text-hola-teal-dark`}>{item.example}</p>
                    </div>
                  ))}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-hola-teal-dark bg-hol px-8 py-12 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-sans text-sm">© 2024 Hola España. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HolaEspanaTheme;
