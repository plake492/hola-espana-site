import Link from 'next/link';

import Container from '../Container';
import SplitContainer from '../SplitContainer';
import SectionHeading from '../SectionHeading';
import Button from '../Button';
import { hero as copy } from '@/lib/siteCopy/packageCopy.json';

export default function Hero() {
  return (
    <Container className="px-4 md:px-8">
      <SplitContainer
        className="bg-sand-gold flex flex-col justify-center py-16"
        imgSrc={copy.imageSrc}
        cols="cols-2"
        header={<SectionHeading as="h1" lines={copy.header} className="uppercase" textSize="text-section-sm" iconColor="text-terracotta-off" />}
      >
        <div className="text-md flex h-full flex-col justify-between gap-6">
          <div className="text-balance">
            <h2 className="mb-6 text-xl">{copy.subHeader}</h2>
            {copy.description.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          <Link href="/contact">
            <Button className="text-md uppercase" variant="sand">
              {copy.buttonText}
            </Button>
          </Link>
        </div>
      </SplitContainer>
    </Container>
  );
}
