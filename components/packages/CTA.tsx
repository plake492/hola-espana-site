import Link from 'next/link';

import Container from '../Container';
import Button from '../Button';
import { cta as copy } from '@/lib/siteCopy/packageCopy.json';

export default function CTA() {
  return (
    <Container className="px-4 py-16 md:px-8 md:py-24">
      <div className="bg-ocean px-8 py-10 text-white md:px-16 md:py-14">
        <h3 className="mb-6 font-script text-xl md:text-2xl">{copy.header}</h3>
        <p className="mb-2 text-sm">{copy.intro}</p>
        <ul className="mb-8 flex flex-col gap-1">
          {copy.points.map((point, i) => (
            <li key={i} className="text-sm">{point}</li>
          ))}
        </ul>
        <p className="text-sm italic">{copy.footer}</p>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="/contact">
          <Button as="span" variant="sand" className="text-md uppercase">
            {copy.buttonText}
          </Button>
        </Link>
      </div>
    </Container>
  );
}
