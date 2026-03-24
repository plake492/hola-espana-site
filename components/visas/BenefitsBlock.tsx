import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
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
    img: '/images/card-visa.webp',
  },
  dnv: {
    section: 'bg-sand-gold',
    text: 'text-black',
    bullet: 'text-black',
    img: '/images/remote-worker.webp',
  },
};

export default function BenefitsBlock({ copy, variant }: Readonly<BenefitsBlockProps>) {
  const styles = variantStyles[variant];

  return (
    <Container as="div" size="full" className="mb-18 px-4 md:mb-42 md:px-8">
      <Container as="div" className={styles.section}>
        <SplitContainer
          imgLeft
          className={cn('py-18', styles.text)}
          imgSrc={styles.img}
          header={<SectionHeading as="h1" lines={copy.header} className="uppercase" textSize="text-section-sm" iconColor="text-terracotta-off" />}
          underImageContent={
            <Button className="self-start-safe mt-18 ml-56 text-lg md:mt-32" variant="sand">
              <Link href="/contact">{copy.cta.toUpperCase()}</Link>
            </Button>
          }
          imgHeight="h-[550px]"
        >
          <ul className="flex flex-col gap-4 space-y-3 md:gap-6">
            {copy.items.map(({ bold, text }) => (
              <li key={bold + text} className={cn('ml-5 list-disc font-serif leading-relaxed', styles.bullet)}>
                <span className="text-md font-semibold">{bold}</span>
                <span className="text-sm">{text}</span>
              </li>
            ))}
          </ul>
        </SplitContainer>
      </Container>
    </Container>
  );
}
