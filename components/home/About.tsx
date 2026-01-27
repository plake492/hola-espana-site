import Wave from '../Wave';
import Image from 'next/image';
import { aboutCopy } from '@/lib/siteCopy';

export default function About() {
  return (
    <section>
      <Wave color={'mosaic'} className={'bg-[#d2e4ec]'} />
      <div className="bg-[#EDE2D7]">
        <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr] items-center gap-18 py-30 pr-8">
          <Image width={400} height={600} src={'/images/fatima.png'} alt="" />
          <div className="flex flex-col gap-7">
            <h3 className="text-3xl">{aboutCopy.heading}</h3>
            {aboutCopy.content.map((text, i) => (
              <p key={i} className="font-serif text-lg">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
