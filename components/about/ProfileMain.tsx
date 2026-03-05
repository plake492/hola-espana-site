import Image from 'next/image';

import Container from '../Container';
import { profileMain as copy } from '@/lib/siteCopy/aboutCopy.json';

export default function ProfileMain() {
  return (
    <Container className="px-4 py-16 md:px-8 md:py-24">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="text-end">
          <h2 className="font-aegean mb-6 text-2xl uppercase">{copy.header}</h2>
          {copy.description.map((text, i) => (
            <p key={i} className="text-md text-color-dark mb-4 last:mb-0">
              {text}
            </p>
          ))}
        </div>
        <div className="relative aspect-5/4 w-full overflow-hidden">
          <Image src={copy.imageSrc} alt="About Hola España" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>
    </Container>
  );
}
