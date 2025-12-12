const fontSizes = [
  // Serif Font
  { name: 'Serif Small', font: 'font-serif', size: 'text-sm', weight: 'font-normal', example: 'Small serif text' },
  { name: 'Serif Base', font: 'font-serif', size: 'text-base', weight: 'font-normal', example: 'Base serif text' },
  { name: 'Serif Large', font: 'font-serif', size: 'text-lg', weight: 'font-normal', example: 'Large serif text' },
  { name: 'Serif XL', font: 'font-serif', size: 'text-xl', weight: 'font-semibold', example: 'Extra large serif text' },
  { name: 'Serif 2XL', font: 'font-serif', size: 'text-2xl', weight: 'font-semibold', example: 'Heading serif text' },
  { name: 'Serif 3XL', font: 'font-serif', size: 'text-3xl', weight: 'font-bold', example: 'Large heading serif' },
  { name: 'Serif 4XL', font: 'font-serif', size: 'text-4xl', weight: 'font-bold', example: 'Hero serif text' },
  { name: 'Serif 5XL', font: 'font-serif', size: 'text-5xl', weight: 'font-bold', example: 'Hero serif text' },
  { name: 'Serif 6XL', font: 'font-serif', size: 'text-6xl', weight: 'font-bold', example: 'Hero serif text' },
  { name: 'Serif 7XL', font: 'font-serif', size: 'text-7xl', weight: 'font-bold', example: 'Hero serif text' },
  { name: 'Serif 8XL', font: 'font-serif', size: 'text-8xl', weight: 'font-bold', example: 'Hero serif text' },

  // Sans Font
  { name: 'Sans Small', font: 'font-sans', size: 'text-sm', weight: 'font-normal', example: 'Small sans text' },
  { name: 'Sans Base', font: 'font-sans', size: 'text-base', weight: 'font-normal', example: 'Base sans text' },
  { name: 'Sans Large', font: 'font-sans', size: 'text-lg', weight: 'font-medium', example: 'Large sans text' },
  { name: 'Sans XL', font: 'font-sans', size: 'text-xl', weight: 'font-semibold', example: 'Extra large sans text' },
  { name: 'Sans 2XL', font: 'font-sans', size: 'text-2xl', weight: 'font-bold', example: 'Heading sans text' },
  { name: 'Sans 3XL', font: 'font-sans', size: 'text-3xl', weight: 'font-bold', example: 'Heading sans text' },
  { name: 'Sans 4XL', font: 'font-sans', size: 'text-4xl', weight: 'font-bold', example: 'Heading sans text' },
  { name: 'Sans 5XL', font: 'font-sans', size: 'text-5xl', weight: 'font-bold', example: 'Heading sans text' },
  { name: 'Sans 6XL', font: 'font-sans', size: 'text-6xl', weight: 'font-bold', example: 'Heading sans text' },
  { name: 'Sans 7XL', font: 'font-sans', size: 'text-7xl', weight: 'font-bold', example: 'Heading sans text' },
  { name: 'Sans 8XL', font: 'font-sans', size: 'text-8xl', weight: 'font-bold', example: 'Heading sans text' },

  // Script Font
  { name: 'Script Large', font: 'font-script', size: 'text-lg', weight: 'font-normal', example: 'Hola' },
  { name: 'Script XL', font: 'font-script', size: 'text-xl', weight: 'font-normal', example: 'Hola' },
  { name: 'Script 2XL', font: 'font-script', size: 'text-2xl', weight: 'font-normal', example: 'Hola' },
  { name: 'Script 3XL', font: 'font-script', size: 'text-3xl', weight: 'font-normal', example: 'Hola' },
  { name: 'Script 4XL', font: 'font-script', size: 'text-4xl', weight: 'font-normal', example: 'Hola' },
  { name: 'Script 5XL', font: 'font-script', size: 'text-5xl', weight: 'font-normal', example: 'Hola' },
  { name: 'Script 6XL', font: 'font-script', size: 'text-6xl', weight: 'font-normal', example: 'Hola' },
  { name: 'Script 7XL', font: 'font-script', size: 'text-7xl', weight: 'font-normal', example: 'Hola' },
  { name: 'Script 8XL', font: 'font-script', size: 'text-8xl', weight: 'font-normal', example: 'Hola' },
];

const colors = [
  { name: 'Cream', value: '#F5EFE7', class: 'bg-hola-cream', description: 'Primary background' },
  { name: 'Beige', value: '#E8DED0', class: 'bg-hola-beige', description: 'Secondary background' },
  { name: 'Mustard', value: '#D4A574', class: 'bg-hola-mustard', description: 'Arch accents' },
  { name: 'Gold', value: '#C89F5D', class: 'bg-hola-gold', description: 'Highlights' },
  { name: 'Terracotta', value: '#C87B5A', class: 'bg-hola-terracotta', description: 'Button primary' },
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
    <div className="min-h-screen bg-hola-cream relative">
      {/* Hero Section */}
      <section className="py-20 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl mb-4">
            <span className="font-script text-7xl">Hola</span>
            <span className="font-serif ml-4">ESPAÑA</span>
          </h1>
          <p className="text-xl font-sans tracking-wider mb-8 text-gray-700">LEGAL AND RELOCATION EXPERTS</p>
          <button className="bg-hola-terracotta hover:bg-hola-rust text-white px-12 py-4 rounded-full text-lg font-sans tracking-wider transition-colors">
            Lets Connect
          </button>
        </div>
      </section>

      {/* Decorative Arches */}
      <section className="py-12 px-8 overflow-hidden">
        <div className="flex justify-center gap-4 max-w-6xl mx-auto">
          <div className="w-32 h-64 bg-hola-teal rounded-t-full"></div>
          <div className="w-40 h-80 bg-hola-mustard rounded-t-full -mt-8"></div>
          <div className="w-32 h-64 bg-hola-terracotta rounded-t-full"></div>
          <div className="w-40 h-80 bg-hola-olive rounded-t-full -mt-8"></div>
          <div className="w-32 h-64 bg-hola-gold rounded-t-full"></div>
        </div>
      </section>

      {/* Theme Display */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-4">Color Palette</h2>
          <p className="text-center text-gray-600 mb-12 font-sans">Mediterranean-inspired Art Deco theme</p>

          <div className="grid grid-cols-2 gap-6">
            {colors.map((color) => (
              <div key={color.name} className="group">
                <div
                  className={`${color.class} h-32 rounded-lg shadow-lg mb-3 transition-transform group-hover:scale-105`}
                ></div>
                <h3 className="font-sans font-semibold text-gray-800">{color.name}</h3>
                <p className="font-mono text-sm text-gray-600">{color.value}</p>
                <p className="text-xs text-gray-500 mt-1">{color.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="py-16 px-8 bg-hola-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12">Component Examples</h2>

          <div className="grid grid-cols-2 gap-8">
            {/* Button Examples */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-serif mb-6">Buttons</h3>
              <div className="space-y-4">
                <button className="w-full bg-hola-terracotta hover:bg-hola-rust text-white px-6 py-3 rounded-full font-sans tracking-wider transition-colors">
                  Primary Button
                </button>
                <button className="w-full bg-hola-teal hover:bg-hola-teal-dark text-white px-6 py-3 rounded-full font-sans tracking-wider transition-colors">
                  Secondary Button
                </button>
                <button className="w-full border-2 border-hola-terracotta text-hola-terracotta hover:bg-hola-terracotta hover:text-white px-6 py-3 rounded-full font-sans tracking-wider transition-colors">
                  Outline Button
                </button>
              </div>
            </div>

            {/* Card Example */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-serif mb-6">Card</h3>
              <div className="bg-hola-cream p-6 rounded-lg border-l-4 border-hola-accent">
                <h4 className="text-xl font-serif text-hola-teal-dark mb-2">Visa Services</h4>
                <p className="text-gray-600 font-sans text-sm mb-4">
                  Expert guidance through Spanish visa and residency processes
                </p>
                <a href="#" className="text-hola-terracotta font-sans text-sm hover:text-hola-rust transition-colors">
                  Learn more →
                </a>
              </div>
            </div>

            {/* Decorative Shapes */}
            <div className="bg-white p-8 rounded-lg shadow col-span-2">
              <h3 className="text-2xl font-serif mb-6">Decorative Arches</h3>
              <div className="flex gap-2 justify-center">
                <div className="w-16 h-32 bg-hola-mustard rounded-t-full"></div>
                <div className="w-16 h-32 bg-hola-teal rounded-t-full"></div>
                <div className="w-16 h-32 bg-hola-terracotta rounded-t-full"></div>
                <div className="w-16 h-32 bg-hola-olive rounded-t-full"></div>
              </div>
            </div>

            {/* Typography */}
            <div className="bg-white p-8 rounded-lg shadow col-span-2">
              <h3 className="text-2xl mb-12">Typography</h3>

              {/* TAN Aegean (Sans) */}
              <div className="mb-24">
                <h4 className="text-lg font-semibold mb-4 text-hola-terracotta">TAN Aegean (Primary)</h4>
                {/* <div className="grid grid-cols-2 gap-6"> */}
                {fontSizes
                  .filter((item) => item.font === 'font-sans')
                  .map((item) => (
                    <div key={item.name} className="border-b border-gray-200 py-4">
                      <p className="text-[8px] text-gray-400 mb-2">
                        {item.name} - {item.size} {item.weight}
                      </p>
                      <p className={`${item.font} ${item.size} ${item.weight} text-hola-teal-dark`}>{item.example}</p>
                    </div>
                  ))}
                {/* </div> */}
              </div>

              {/* Montserrat (Secondary) */}
              <div className="mb-24">
                <h4 className="text-lg font-semibold mb-4 text-hola-teal">Montserrat (Secondary)</h4>
                {/* <div className="grid grid-cols-2 gap-6"> */}
                {fontSizes
                  .filter((item) => item.font === 'font-serif')
                  .map((item) => (
                    <div key={item.name} className="border-b border-gray-200 py-4">
                      <p className="text-[8px] text-gray-400 mb-2">
                        {item.name} - {item.size} {item.weight}
                      </p>
                      <p className={`${item.font} ${item.size} ${item.weight} text-hola-teal-dark`}>{item.example}</p>
                    </div>
                  ))}
                {/* </div> */}
              </div>

              {/* La Luxes (Script) */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-hola-olive">La Luxes (Decorative)</h4>
                {/* <div className="grid grid-cols-2 gap-6"> */}
                {fontSizes
                  .filter((item) => item.font === 'font-script')
                  .map((item) => (
                    <div key={item.name} className="border-b border-gray-200 py-4">
                      <p className="text-[8px] text-gray-400 mb-2">
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
      <footer className="bg-hola-teal-dark text-white py-12 px-8 bg-hol">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-sans text-sm">© 2024 Hola España. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HolaEspanaTheme;
