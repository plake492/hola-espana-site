import { SunIcon } from '@/components/Icons';
import Container from '../Container';

interface RequirementsSectionProps {
  copy: { heading: string; items: { bold: string; text: string; italic?: string }[] };
  variant: 'nlv' | 'dnv';
}

const sunColors: Record<'nlv' | 'dnv', 'sand' | 'ocean'> = {
  nlv: 'sand',
  dnv: 'sand',
};

export default function RequirementsSection({ copy, variant }: Readonly<RequirementsSectionProps>) {
  return (
    <Container as="div" className="relative z-1 overflow-hidden px-4 pb-20 md:px-8">
      <div className="pointer-events-none absolute top-1/2 right-0 w-[500px] -translate-y-1/2 opacity-20">
        <SunIcon color={sunColors[variant]} />
      </div>

      <div className="relative space-y-10 text-balance">
        <h2 className="font-aegean text-xl text-black uppercase md:text-2xl">{copy.heading}</h2>
        <ul className="flex max-w-4xl flex-col gap-4 space-y-6">
          {copy.items.map(({ bold, text, italic }) => (
            <li key={bold + text + italic} className="font-serif text-lg leading-relaxed text-black">
              <span className="font-semibold">{bold}</span>
              {text}
              {italic && <em className="italic">{italic}</em>}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
