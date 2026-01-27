import Image from 'next/image';
import HeroCta from './HeroCta';
import { heroCopy } from '@/lib/siteCopy';
import { HEADER_HEIGHT } from '@/lib/constants';

export default function Hero() {
  const paddingTop = HEADER_HEIGHT / 1.5;
  return (
    <section className="hero relative">
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-0 h-full w-full">
        <div>
          <Image alt="spain" src="/images/hero.jpg" width={1000} height={1000} className="absolute right-0 left-0 z-0 h-full w-full" />
          <div className="absolute right-0 left-0 z-1 h-full w-full bg-[#559FC7C4]"></div>
        </div>
      </div>
      <div className={`mb-48 flex h-full min-h-[max(90dvh,680px)] flex-col overflow-hidden bg-black px-4`} style={{ paddingTop }}>
        <div className="mt-16 flex flex-1 flex-col justify-center">
          <div className="relative z-3 mx-auto mb-60 w-full max-w-3xl text-white lg:mb-56 lg:max-w-6xl">
            {/* Airplane Icon */}
            <div className="absolute top-0 right-0 z-1 -mt-4 hidden md:block">
              <div className="flex gap-8">
                <Image alt="spain" src="/icons/air-plane.png" width={1000} height={1000} className="mt-8 h-32 w-auto" />
                <Image alt="spain" src="/icons/marker.png" width={1000} height={1000} className="h-8 w-auto" />
              </div>
            </div>
            <div className="flex w-3/4 flex-col gap-4">
              <p className="font-h mb-4 text-6xl">{heroCopy.header.first}</p>
              <h1 className="text-8xl uppercase">{heroCopy.header.second}</h1>
              <p className="text-6xl">{heroCopy.header.third}</p>
              <p className="font- pt-8 font-serif text-2xl font-semibold tracking-wide italic">{heroCopy.subHeader}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full translate-y-1/2 px-4">
        <HeroCta />
      </div>
    </section>
  );
}
