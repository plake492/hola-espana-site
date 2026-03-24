import Link from 'next/link';
import Container from '../Container';
import SplitContainer from '../SplitContainer';
import SectionHeading from '../SectionHeading';
import Button from '../Button';
import { cta as copy } from '@/lib/siteCopy/visasCopy.json';

export default function VisasCTA() {
  return (
    <Container as="div" size="full" className="mb-18 px-4 md:mb-42 md:px-8">
      <Container as="div" className="bg-sand">
        <SplitContainer
          imgLeft
          className="h-full py-18"
          imgSrc={'/images/ally-stairs.webp'}
          header={<SectionHeading as="h1" lines={copy.header} className="uppercase" textSize="text-section-sm" iconColor="text-terracotta-off" />}
          imgHeight="h-[550px]"
        >
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-8">
              <h3 className="mb-4 text-lg">{copy.subheading}</h3>
              {copy.body.map((text, i) => (
                <p className="text-lg" key={i + text}>
                  {text}
                </p>
              ))}
            </div>
            <Button className="self-start-safe mt-12 mb-8 px-24 text-lg md:mt-0 md:mb-4" variant="terracotta">
              <Link href="/contact">{copy.cta}</Link>
            </Button>
          </div>
        </SplitContainer>
      </Container>
    </Container>
  );
}
