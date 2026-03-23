import { cn } from '@/lib/utils/cn';
import Container from '../Container';

interface WhoCanApply {
  heading: string;
  personas: { label: string }[];
}

interface Copy {
  id: string;
  title: string;
  whoCanApply: WhoCanApply;
}

interface PersonaCardsProps {
  copy: Copy;
  variant: 'nlv' | 'dnv';
}

const IMG_SIZE = 140;
const IMG_OFFSET_PERCENT = 35;
const IMG_EXTRA_PADDING = 24;
const imgStyle = { height: IMG_SIZE, width: IMG_SIZE, top: '50%', left: 0, transform: `translate(-${IMG_OFFSET_PERCENT}%, -50%)` };

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

export default function PersonaCards({ copy, variant }: PersonaCardsProps) {
  const styles = variantStyles[variant];

  return (
    <Container as="div" className="px-6 py-32 md:px-12">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="text-black lg:-ml-12">
          <h2 className="mb-8 font-serif text-xl md:text-3xl">{copy.title.toUpperCase()}</h2>
          <p className="text-lg">{copy.whoCanApply.heading}</p>
        </div>

        <div className="grid grid-cols-1 grid-rows-[180px_180px] gap-6 pt-16 text-balance lg:grid-cols-2 lg:gap-32">
          {copy.whoCanApply.personas.map(({ label }, i) => (
            <PersonaCard key={i} label={label} styles={styles} />
          ))}
        </div>
      </div>
    </Container>
  );
}

const PersonaCard = ({
  label,
  styles,
}: {
  label: string;
  styles: {
    card: string;
    text: string;
  };
}) => {
  return (
    <div className="relative ml-12" style={{ height: `${(IMG_SIZE + 30).toString()}px` }}>
      <div className={cn('bg-ocean-alt absolute mr-0 shrink-0 overflow-hidden')} style={imgStyle}>
        {/* TODO: Replace with real persona photo */}
        <div className="flex h-full w-full items-center justify-center text-xs text-white/40">photo</div>
      </div>

      {/* Label card */}
      <div
        className={cn('flex h-full flex-1 items-center py-4 pr-8', styles.card)}
        style={{ paddingLeft: IMG_SIZE * ((100 - IMG_OFFSET_PERCENT) / 100) + IMG_EXTRA_PADDING }}
      >
        <p className={cn('text-md mb-4 font-serif leading-snug italic', styles.text)}>{label}</p>
      </div>
    </div>
  );
};
