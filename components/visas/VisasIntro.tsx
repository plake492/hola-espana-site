import Link from 'next/link';
import Container from '../Container';
import TileBorder from './TileBorder';
import { intro as copy } from '@/lib/siteCopy/visasCopy.json';

export default function VisasIntro() {
  return (
    <section className="relative z-1">
      <Container as="div" className="bg-white px-6 py-24 text-center md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl space-y-6 text-balance">
          <h2 className="font-aegean text-lg text-black md:text-xl">{copy.heading}</h2>
          <p className="md:text-md text-dark font-serif text-lg opacity-95">{copy.subheading}</p>

          <div className="mx-auto flex max-w-4xl flex-col flex-wrap justify-around gap-8 pt-12 sm:flex-row md:gap-6 md:pt-18">
            {copy.tabs.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="bg-sand font-aegean relative rounded-sm px-8 py-3 text-sm tracking-widest text-black shadow-[4px_4px_0px_0px_#d0c5b9] transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                {label.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <div className="abosulte bottom-0 left-0 z-1 w-full translate-y-1/2">
        <TileBorder variant="ocean" />
      </div>
    </section>
  );
}
