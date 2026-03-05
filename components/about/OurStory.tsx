import Container from '../Container';
import { StarIcon } from '../Icons';
import { ourStory as copy } from '@/lib/siteCopy/aboutCopy.json';

export default function OurStory() {
  return (
    <Container size="lg" className="mx-0 py-8 md:py-24">
      <div className="mr-auto">
        <h3 className="text-section-sm mb-10 flex flex-col uppercase">
          <span className="flex flex-row items-center">
            <span>{copy.header.first}</span>
            <span className="text-sand-dark mb-5 ml-1.5 h-[25px] w-[25px] rotate-70 md:ml-3 md:h-12 md:w-12">
              <StarIcon />
            </span>
          </span>
          <span className="ml-(--section-heading-offset)">{copy.header.last}</span>
        </h3>
        {copy.description.map((text, i) => (
          <p key={i} className="text-md text-color-dark mb-4 last:mb-0">
            {text}
          </p>
        ))}
      </div>
    </Container>
  );
}
