import Container from '@/components/Container';
import SplitContainer from '@/components/SplitContainer';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';
import type { HeadingLine } from '@/components/SectionHeading';

interface SectionCtaProps {
  headingLines: HeadingLine[];
  description: string;
  buttonText: string;
  buttonSubtext?: string;
  imageSrc: string;
  backgroundColor?: 'terracotta' | 'ocean';
}

const backgroundStyles: Record<'terracotta' | 'ocean', string> = {
  terracotta: 'bg-terracotta text-white',
  ocean: 'bg-ocean text-white',
};

export default function SectionCta({ headingLines, description, buttonText, buttonSubtext, imageSrc, backgroundColor = 'terracotta' }: SectionCtaProps) {
  return (
    <Container className="px-4 py-12 md:px-8 md:py-22">
      <SplitContainer
        imgLeft
        className={`${backgroundStyles[backgroundColor]} flex flex-col justify-center py-16`}
        imgSrc={imageSrc}
        header={<SectionHeading as="h2" lines={headingLines} className="uppercase" textSize="text-section-sm" />}
      >
        <div className="text-md flex h-full flex-col justify-between gap-4">
          <div>
            <p>{description}</p>
            {buttonSubtext && <h3 className="mt-8 font-semibold uppercase">{buttonSubtext}</h3>}
          </div>
          <Button className="text-md mb-6 uppercase md:mb-0" variant="sand">
            {buttonText}
          </Button>
        </div>
      </SplitContainer>
    </Container>
  );
}
