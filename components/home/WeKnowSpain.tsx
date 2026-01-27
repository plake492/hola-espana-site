import Image from 'next/image';
import Wave from '../Wave';
import { weKnowSpainCopy } from '@/lib/siteCopy';

export default function WeKnowSpain() {
  return (
    <>
      <Wave className="mt-36" color="tan" />
      <section className="bg-[#ede2d7] py-12">
        <div className="ap-6 mx-auto grid max-w-[1480px] grid-cols-[3fr_4fr] items-center justify-items-center pt-4 pb-18">
          <Image src={'/images/city-mosaic.jpg'} height={800} width={600} className="min-h-[650px] object-cover object-right" alt="" />
          <div className="flex max-w-xl flex-col gap-16 text-center text-balance">
            <h4 className="text-4xl">{weKnowSpainCopy.heading}</h4>
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
      </section>
    </>
  );
}
