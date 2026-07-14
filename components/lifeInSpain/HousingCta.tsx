import Container from '@/components/Container';
import SplitContainer from '@/components/SplitContainer';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';
import lifeInSpainCopy from '@/lib/siteCopy/lifeInSpainCopy.json';

const copy = lifeInSpainCopy.housing.cta;

const headingLines = ['Finding Your Place in', 'Spain Starts with a Plan'];

export default function HousingCta() {
  return (
    <Container className="px-4 md:px-8">
      <SplitContainer
        imgLeft
        className="bg-terracotta flex flex-col justify-center py-16 text-white"
        imgSrc={copy.imageSrc}
        header={
          <SectionHeading
            as="h2"
            lines={headingLines}
            className="uppercase"
            textSize="text-section-sm"
          />
        }
      >
        <div className="text-md flex h-full flex-col justify-between gap-4">
          <div>
            <p>{copy.description}</p>
            <h3 className="mt-8 font-semibold uppercase">{copy.button.subtext}</h3>
          </div>
          <Button className="text-md mb-6 uppercase md:mb-0" variant="sand">
            {copy.button.text}
          </Button>
        </div>
      </SplitContainer>
    </Container>
  );
}
