import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { StarIcon } from '@/components/Icons';
import Container from '../Container';
import Button from '../Button';
import SplitContainer from '../SplitContainer';
import SectionHeading from '../SectionHeading';

interface BenefitItem {
  bold: string;
  text: string;
}
interface Copy {
  header: (string | { first: string; last: string })[];
  cta: string;
  items: BenefitItem[];
}

interface BenefitsBlockProps {
  copy: Copy;
  variant: 'nlv' | 'dnv';
}

const variantStyles = {
  nlv: {
    section: 'bg-ocean',
    text: 'text-white',
    bullet: 'text-white',
  },
  dnv: {
    section: 'bg-sand-gold',
    text: 'text-black',
    bullet: 'text-black',
  },
};

export default function BenefitsBlock({ copy, variant }: BenefitsBlockProps) {
  const styles = variantStyles[variant];

  return (
    <Container as="div" className={cn('mb-48', styles.section)}>
      <SplitContainer
        imgLeft
        className="py-18 text-white"
        imgSrc="/images/card-visa.webp"
        header={<SectionHeading as="h1" lines={copy.header} className="uppercase" textSize="text-section-sm" iconColor="text-terracotta-off" />}
        underImageContent={
          <Button className="self-start-safe mt-18 ml-56 text-lg md:mt-32" variant="sand">
            <Link href="/contact">{copy.cta.toUpperCase()}</Link>
          </Button>
        }
        imgHeight="h-[550px]"
      >
        <ul className="flex flex-col gap-4 space-y-3 md:gap-6">
          {copy.items.map(({ bold, text }, i) => (
            <li key={i} className={cn('ml-5 list-disc font-serif leading-relaxed', styles.bullet)}>
              <span className="text-md font-semibold">{bold}</span>
              <span className="text-sm">{text}</span>
            </li>
          ))}
        </ul>
      </SplitContainer>
    </Container>
  );
}
