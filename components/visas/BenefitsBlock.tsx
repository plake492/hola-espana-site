import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { StarIcon } from '@/components/Icons';
import type { BenefitItem } from '@/lib/siteCopy/visasCopy';

interface BenefitsBlockProps {
  title: string;
  subtitle: string;
  items: BenefitItem[];
  cta: string;
  variant: 'nlv' | 'dnv';
}

const variantStyles = {
  nlv: {
    section: 'bg-ocean',
    text: 'text-white',
    bullet: 'text-white',
    button: 'bg-sand text-black shadow-[4px_4px_0px_0px_#d0c5b9]',
  },
  dnv: {
    section: 'bg-sand-gold',
    text: 'text-black',
    bullet: 'text-black',
    button: 'bg-default text-black shadow-[4px_4px_0px_0px_#c8b89e]',
  },
};

export default function BenefitsBlock({ title, subtitle, items, cta, variant }: BenefitsBlockProps) {
  const styles = variantStyles[variant];

  return (
    <section className={cn('w-full', styles.section)}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-2 md:px-12">
        {/* Left: placeholder image */}
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm bg-black/20">
          {/* TODO: Replace with real section photo */}
          <div className="flex h-full items-center justify-center text-sm text-white/30">photo placeholder</div>
        </div>

        {/* Right: title + bullets + CTA */}
        <div className="flex flex-col justify-between gap-8">
          <div className="space-y-2">
            <h2 className={cn('font-aegean text-4xl uppercase md:text-5xl', styles.text)}>{title}</h2>
            <div className="flex items-center gap-3">
              <span className={cn('h-5 w-5 shrink-0', styles.text)}>
                <StarIcon />
              </span>
              <h3 className={cn('font-aegean text-4xl uppercase md:text-5xl', styles.text)}>{subtitle}</h3>
            </div>
          </div>

          <ul className="space-y-3">
            {items.map(({ bold, text }, i) => (
              <li key={i} className={cn('ml-5 list-disc font-serif text-base leading-relaxed', styles.bullet)}>
                <span className="font-semibold">{bold}</span>
                {text}
              </li>
            ))}
          </ul>

          <div>
            <Link
              href="/contact"
              className={cn('font-aegean inline-block rounded-sm px-8 py-3 text-sm tracking-widest transition hover:-translate-y-0.5', styles.button)}
            >
              {cta.toUpperCase()}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
