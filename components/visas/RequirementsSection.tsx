import { SunIcon } from '@/components/Icons';
import { cn } from '@/lib/utils/cn';
import type { RequirementItem } from '@/lib/siteCopy/visasCopy';

interface RequirementsSectionProps {
  heading: string;
  items: RequirementItem[];
  variant: 'nlv' | 'dnv';
}

const sunColors: Record<'nlv' | 'dnv', 'sand' | 'ocean'> = {
  nlv: 'sand',
  dnv: 'ocean',
};

export default function RequirementsSection({
  heading,
  items,
  variant,
}: RequirementsSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f5ebdf] to-default px-6 py-20 md:px-12">
      {/* Decorative sun */}
      <div className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] opacity-20">
        <SunIcon color={sunColors[variant]} />
      </div>

      <div className="relative mx-auto max-w-4xl space-y-10">
        <h2 className="font-aegean text-3xl uppercase text-black md:text-4xl">
          {heading}
        </h2>

        <ul className="space-y-6">
          {items.map(({ bold, text, italic }, i) => (
            <li key={i} className="font-serif text-lg leading-relaxed text-black">
              <span className="font-semibold">{bold}</span>
              {text}
              {italic && <em className="italic">{italic}</em>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
