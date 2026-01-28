import Image from 'next/image';
import Wave from '../Wave';
import { weKnowSpainCopy } from '@/lib/siteCopy';

export default function WeKnowSpain() {
  return (
    <section className="">
      <Wave className="mt-36" color="tan" />
      <div className="bg-[#ede2d7] py-12">
        {/* Desktop */}
        <div className="mx-auto hidden max-w-[1480px] grid-cols-[3fr_4fr] items-center justify-items-center pt-4 pb-18 md:grid">
          <Image src={'/images/city-mosaic.webp'} height={800} width={600} className="min-h-[650px] object-cover object-right" alt="" />
          <div className="flex max-w-xl flex-col gap-16 text-center text-balance">
            <h3 className="text-4xl">{weKnowSpainCopy.heading}</h3>
            <div className="flex flex-col gap-3">
              {weKnowSpainCopy.description.map((text, i) => (
                <p key={i} className="font-serif text-xl italic">
                  {text}
                </p>
              ))}
            </div>

            <p className="mt-8 font-serif text-2xl font-semibold italic">{weKnowSpainCopy.descriptionTwo}</p>
          </div>
        </div>
        {/* Mobile */}
        <div className="block px-4 min-[400px]:px-8 md:hidden">
          <h3 className="mb-8 text-center text-4xl">{weKnowSpainCopy.heading}</h3>
          <div className="clear-both">
            <Image
              src={'/images/city-mosaic.webp'}
              height={800}
              width={600}
              className="float-left mr-4 h-[200px] w-[200px] object-cover object-right sm:h-[300px]"
              alt=""
            />
            <p className="mb-2 font-serif text-xl italic">{weKnowSpainCopy.description.join('')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
