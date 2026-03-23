import Link from 'next/link';
import { StarIcon } from '@/components/Icons';
import { cta as copy } from '@/lib/siteCopy/visasCopy.json';

export default function VisasCTA() {
  return (
    <section className="bg-sand px-6 py-20 md:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        {/* Left: placeholder image */}
        <div className="bg-ocean-alt relative aspect-[4/3] overflow-hidden rounded-sm">
          {/* TODO: Replace with real photo */}
          <div className="flex h-full items-center justify-center text-sm text-white/30">photo placeholder</div>
        </div>

        {/* Right: text + button */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <h2 className="font-aegean text-4xl text-black uppercase md:text-5xl">{copy.heading}</h2>
            <span className="text-terracotta h-8 w-8 shrink-0">
              <StarIcon />
            </span>
          </div>

          <p className="font-aegean text-xl text-black">{copy.subheading}</p>

          <div className="space-y-3 font-serif text-base text-black/80">
            <p>{copy.body}</p>
            <p>{copy.body2}</p>
          </div>

          <div>
            <Link
              href="/contact"
              className="bg-terracotta font-aegean inline-block rounded-sm px-8 py-3 text-sm tracking-widest text-white shadow-[4px_4px_0px_0px_#b56743] transition hover:-translate-y-0.5"
            >
              {copy.button.toUpperCase()}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
