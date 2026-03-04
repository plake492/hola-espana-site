import React from 'react';
import Container from '../Container';
import SplitContainer from '../SplitContainer';
import SectionHeading from '../SectionHeading';
import { hero as copy } from '@/lib/siteCopy/blogLandingCopy.json';

export default function Hero() {
  return (
    <Container className="px-4 md:px-8">
      <SplitContainer
        className="bg-sand flex flex-col justify-center py-16"
        imgSrc="/images/colorful-coast-town.webp"
        cols={'cols-2'}
        header={<SectionHeading as="h1" lines={copy.header} className="uppercase" textSize="text-section-sm" iconColor="text-terracotta-off" />}
      >
        <div className="text-md flex flex-col gap-4">
          {copy.description.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </SplitContainer>
    </Container>
  );
}
