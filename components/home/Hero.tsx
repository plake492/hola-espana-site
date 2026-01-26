import Image from 'next/image';
import HeroCta from './HeroCta';

export default function Hero() {
  return (
    <section className="hero relative">
      <div className="mb-48 min-h-[max(90dvh,680px)] overflow-hidden bg-black px-4 pt-[96px]">
        <div className="mt-16 h-full">
          <div className="absolute top-0 left-0 z-0 h-full w-full">
            <div>
              <Image alt="spain" src="/images/hero.jpg" width={1000} height={1000} className="absolute right-0 left-0 z-0 h-full w-full" />
              <div className="absolute right-0 left-0 z-1 h-full w-full bg-[#559FC7C4]"></div>
            </div>
          </div>
          <div className="relative z-3 mx-auto w-full max-w-6xl text-white">
            <div className="absolute right-0 z-1 hidden md:block">
              <div className="flex gap-8">
                <Image alt="spain" src="/icons/air-plane.png" width={1000} height={1000} className="mt-8 h-32 w-auto" />
                <Image alt="spain" src="/icons/marker.png" width={1000} height={1000} className="h-8 w-auto" />
              </div>
            </div>
            <p style={{ lineHeight: 1.25, fontSize: '75px' }}>TEXT HERE</p>
            <p style={{ lineHeight: 1.25, fontSize: '90px' }}>SPAIN</p>
            <p style={{ lineHeight: 1.25, fontSize: '75px' }}>Perfectly arranged</p>
            <p className="pt-6" style={{ fontSize: 36 }}>
              Relocation Packages, legal, and tax services guided by real Spanish experts
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full translate-y-1/2 px-4">
        <HeroCta />
      </div>
    </section>
  );
}
