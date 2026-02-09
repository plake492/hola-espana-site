import Image from 'next/image';
import Wave from './components/Wave';
import { weKnowSpainCopy } from '@/lib/siteCopy';

export default function WeKnowSpain() {
  return (
    <section id="we-know-spain">
      <Wave className="mt-4 sm:mt-36" color="tan" />
      <div className="bg-[#ede2d7] px-4 pt-4 pb-8 sm:pt-12 sm:pb-12">
        {/* Desktop */}
        <div className="mx-auto hidden max-w-[1480px] grid-cols-[3fr_5fr] items-center justify-items-center gap-8 pt-4 pb-18 md:grid md:gap-12 lg:gap-28">
          <Image src={'/images/city-mosaic.webp'} height={800} width={600} className="min-h-[600px] object-cover object-right" alt="" />
          <div className="flex max-w-12/12 flex-col gap-16 text-center text-balance">
            <h3 className="text-3xl">{weKnowSpainCopy.heading}</h3>
            <div className="text-md flex flex-col gap-4 italic">
              {weKnowSpainCopy.description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
            <p className="text-lg font-semibold italic">{weKnowSpainCopy.descriptionTwo}</p>
          </div>
        </div>
        {/* Mobile */}
        <div className="block md:hidden">
          <h3 className="mb-8 text-3xl">{weKnowSpainCopy.heading}</h3>
          <div className="clear-both">
            <Image
              src={'/images/city-mosaic.webp'}
              height={800}
              width={600}
              className="float-left mr-4 h-[200px] w-[200px] object-cover object-right sm:h-[300px]"
              alt=""
            />
            <p className="text-md mb-2 italic">{weKnowSpainCopy.description.join(' ')}</p>
          </div>
          <p className="mt-8 text-start text-lg font-semibold italic sm:mt-20 sm:text-center">{weKnowSpainCopy.descriptionTwo}</p>
        </div>
      </div>
    </section>
  );
}
