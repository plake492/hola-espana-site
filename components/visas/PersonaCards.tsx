import { cn } from '@/lib/utils/cn';
import type { PersonaItem } from '@/lib/siteCopy/visasCopy';

interface PersonaCardsProps {
  heading: string;
  personas: PersonaItem[];
  variant: 'nlv' | 'dnv';
}

const variantStyles = {
  nlv: {
    card: 'bg-sand-gold',
    text: 'text-black',
  },
  dnv: {
    card: 'bg-ocean',
    text: 'text-white',
  },
};

export default function PersonaCards({ heading, personas, variant }: PersonaCardsProps) {
  const styles = variantStyles[variant];

  return (
    <section className="bg-default px-6 py-16 md:px-12">
      <div className="mx-auto max-w-5xl space-y-10">
        <h2 className="font-serif text-2xl text-black md:text-3xl">{heading}</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {personas.map(({ label }, i) => (
            <div key={i} className="flex items-stretch">
              {/* Placeholder image */}
              <div className="bg-ocean-alt relative mr-0 h-32 w-32 shrink-0 overflow-hidden">
                {/* TODO: Replace with real persona photo */}
                <div className="flex h-full w-full items-center justify-center text-xs text-white/40">photo</div>
              </div>

              {/* Label card */}
              <div className={cn('flex flex-1 items-center px-6 py-4', styles.card)}>
                <p className={cn('font-serif text-lg leading-snug italic', styles.text)}>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
