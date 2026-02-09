import Image from 'next/image';
import HeroCta from '../home/HeroCta';
import { heroCopy } from '@/lib/siteCopy';
import { HEADER_HEIGHT } from '@/lib/constants';

export default function Hero() {
  const paddingTop = HEADER_HEIGHT / 1.5;
  return (
    <section className="hero relative h-[475px] bg-black pt-0 sm:h-[unset]" id="hero">
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-0 h-full w-full">
        <div>
          <Image alt="spain" src="/images/hero.webp" width={1000} height={1000} priority className="absolute right-0 left-0 z-0 h-full w-full object-cover" />
          <div className="absolute right-0 left-0 z-1 h-full w-full bg-[#559FC7C4]"></div>
        </div>
      </div>
      <div className={`mb-48 flex h-full flex-col overflow-hidden bg-black px-4 sm:min-h-[max(90dvh,680px)]`} style={{ paddingTop }}>
        <div className="mt-16 flex flex-1 flex-col justify-center">
          <div className="relative z-3 mx-auto mb-60 w-full max-w-3xl text-white lg:mb-56 lg:max-w-6xl">
            {/* Airplane Icon */}
            <div className="absolute top-0 right-0 z-1 -mt-4 hidden min-[850px]:block">
              <div className="flex gap-8">
                <Image alt="spain" src="/icons/air-plane.png" width={1000} height={1000} className="mt-8 h-32 w-auto" />
                <Image alt="spain" src="/icons/marker.png" width={1000} height={1000} className="h-8 w-auto" />
              </div>
            </div>
            <h1 className="flex w-full flex-col gap-6 py-8 sm:w-3/4 sm:gap-4 sm:py-10 md:pt-24">
              <span className="text-start text-3xl sm:mb-4">{heroCopy.header.first}</span>
              <span className="text-center text-4xl uppercase sm:text-start">{heroCopy.header.second}</span>
              <span className="text-end text-3xl sm:text-start">{heroCopy.header.third}</span>
            </h1>
            <p className="hidden pt-12 text-xl tracking-wide italic sm:block sm:w-5/6">{heroCopy.subHeader}</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full translate-y-1/2 px-4">
        <HeroCta />
      </div>
    </section>
  );
}
