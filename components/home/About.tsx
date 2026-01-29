import Wave from '../Wave';
import Image from 'next/image';
import { aboutCopy } from '@/lib/siteCopy';

export default function About() {
  return (
    <section>
      <Wave color={'mosaic'} className={'bg-[#d2e4ec]'} />
      <div className="bg-[#EDE2D7] py-12 sm:py-20">
        {/* Desktop */}
        <div className="mx-auto hidden max-w-6xl grid-cols-[auto_1fr] items-center gap-20 pr-8 md:grid">
          <Image width={400} height={600} src={'/images/fatima.webp'} alt="" />
          <div>
            <h3 className="mb-12 text-3xl">{aboutCopy.heading}</h3>
            <div className="flex flex-col gap-4">
              {aboutCopy.content.map((text, i) => (
                <p key={i} className="text-md">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="block px-4 min-[400px]:px-8 md:hidden">
          <h3 className="mb-8 text-center text-4xl">{aboutCopy.heading}</h3>
          <div className="clear-both">
            <Image width={400} height={600} src={'/images/fatima.webp'} alt="" className="float-left mr-2 h-[200px] w-auto sm:h-[300px]" />
            <p className="text-md">{aboutCopy.content.join(' ')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
