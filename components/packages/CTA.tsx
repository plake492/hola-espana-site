import Link from 'next/link';

import Container from '../Container';
import Button from '../Button';
import { cta as copy } from '@/lib/siteCopy/packageCopy.json';

export default function CTA() {
  return (
    <Container className="px-4 py-16 md:px-8 md:pt-24 md:pb-42" size="2xl">
      <div className="bg-ocean px-8 py-10 font-light text-white md:px-24 md:py-14">
        <h3 className="mb-12 text-lg md:text-xl">{copy.header}</h3>
        <p className="text-md mb-2">{copy.intro}</p>
        <ul className="mb-8 flex flex-col gap-4">
          {copy.points.map((point, i) => (
            <li key={i} className="text-md">
              {point}
            </li>
          ))}
        </ul>
        <p className="text-md text-default italic">{copy.footer}</p>
      </div>

      <div className="mt-8 flex justify-center md:mt-12">
        <Link href="/contact">
          <Button as="span" variant="sand" className="text-md border border-[#EDE2D7] uppercase">
            {copy.buttonText}
          </Button>
        </Link>
      </div>
    </Container>
  );
}
