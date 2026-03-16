import Link from 'next/link';
import { StarIcon } from '@/components/Icons';
import { visasCopy } from '@/lib/siteCopy/visasCopy';

const { cta } = visasCopy;

export default function VisasCTA() {
  return (
    <section className="bg-sand px-6 py-20 md:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        {/* Left: placeholder image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-ocean-alt">
          {/* TODO: Replace with real photo */}
          <div className="flex h-full items-center justify-center text-white/30 text-sm">
            photo placeholder
          </div>
        </div>

        {/* Right: text + button */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <h2 className="font-aegean text-4xl uppercase text-black md:text-5xl">
              {cta.heading}
            </h2>
            <span className="h-8 w-8 shrink-0 text-terracotta">
              <StarIcon />
            </span>
          </div>

          <p className="font-aegean text-xl text-black">{cta.subheading}</p>

          <div className="space-y-3 font-serif text-base text-black/80">
            <p>{cta.body}</p>
            <p>{cta.body2}</p>
          </div>

          <div>
            <Link
              href="/contact"
              className="inline-block rounded-sm bg-terracotta px-8 py-3 font-aegean text-sm tracking-widest text-white shadow-[4px_4px_0px_0px_#b56743] transition hover:-translate-y-0.5"
            >
              {cta.button.toUpperCase()}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
