import Image from 'next/image';

import Container from '../Container';
import { team as copy } from '@/lib/siteCopy/aboutCopy.json';

export default function Team() {
  return (
    <Container className="py-8 md:py-24">
      <Container size="md" className="mx-0 ml-auto">
        <div className="mb-12 ml-auto text-right md:mb-16">
          <h3 className="mb-4 text-2xl uppercase">{copy.header}</h3>
          <p className="text-md text-color-dark">{copy.description}</p>
        </div>
      </Container>

      <div>
        {copy.members.map((member) => (
          <div key={member.name} className="not-last:border-dark py-8 not-last:border-b md:py-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-24">
              <div className="relative aspect-square w-full overflow-hidden">
                <Image src={member.imageSrc} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="flex flex-col justify-center text-end md:col-span-2">
                <h4 className="mb-1 text-xl uppercase">{member.name}</h4>
                <p className="text-terracotta-alt mb-6 text-sm">{member.role}</p>
                {member.bio.map((text, j) => (
                  <p key={j} className="text-color-dark mb-4 text-sm last:mb-0">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
