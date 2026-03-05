import Container from '../Container';
import SplitContainer from '../SplitContainer';
import SectionHeading from '../SectionHeading';
import { hero as copy } from '@/lib/siteCopy/aboutCopy.json';
import Button from '../Button';

export default function Hero() {
  return (
    <Container className="px-4 md:px-8">
      <SplitContainer
        imgLeft
        className="bg-ocean flex flex-col justify-center py-16 text-white"
        imgSrc="/images/hero-about.webp"
        header={<SectionHeading as="h1" lines={copy.header} className="uppercase" textSize="text-section-sm" iconColor="text-terracotta-off" />}
      >
        <div className="text-md flex h-full flex-col justify-between gap-4">
          <div>
            <h2 className="mb-12">{copy.subHeader}</h2>
            {copy.description.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          <Button className="text-md mb-6 uppercase md:mb-0" variant="sand">
            Talk to an expert
          </Button>
        </div>
      </SplitContainer>
    </Container>
  );
}
