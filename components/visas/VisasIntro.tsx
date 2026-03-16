import Link from 'next/link';
import { visasCopy } from '@/lib/siteCopy/visasCopy';

const { intro } = visasCopy;

export default function VisasIntro() {
  return (
    <section className="bg-default px-6 py-20 text-center md:px-12">
      <div className="mx-auto max-w-4xl space-y-6">
        <h2 className="font-aegean text-3xl text-black md:text-4xl">
          {intro.heading}
        </h2>
        <p className="font-serif text-lg text-black/80 md:text-xl">
          {intro.subheading}
        </p>

        {/* Anchor buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {intro.tabs.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="relative rounded-sm bg-sand px-8 py-3 font-aegean text-sm tracking-widest text-black shadow-[4px_4px_0px_0px_#d0c5b9] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              {label.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
