import Image from 'next/image';
import homepageCopy from '@/lib/siteCopy/homepageCopy.json';

export default function Hero() {
  const { hero: heroCopy } = homepageCopy;

  return (
    <section
      className="relative flex min-h-[max(calc(100dvh+250px),950px)] w-full flex-col items-center justify-center overflow-hidden bg-black text-white"
      id="hero"
    >
      <div className="absolute top-0 left-0 z-0 h-full w-full">
        <Image alt="spain" src="/images/hero.webp" width={1000} height={1000} priority className="absolute h-full w-full object-cover" />
        <div className="bg-blue-overlay absolute right-0 left-0 z-1 h-full w-full"></div>
      </div>

      <div className="relative z-1 mx-2 flex h-full flex-col gap-8 pb-24">
        <h1 className="flex flex-col items-start gap-8 tracking-widest whitespace-nowrap">
          <span className="text-headline2 font-light">{heroCopy.header.first}</span>
          <span className="text-headline1 -mb-4 ml-(--headline-ml-offset) font-semibold uppercase max-[950px]:ml-[-2.75px]">{heroCopy.header.second}</span>
          <span className="text-headline2 ml-(--headline-ml-offset) font-light">{heroCopy.header.third}</span>
        </h1>
        <h2 className="text-headline-sub ml-(--headline-ml-offset) font-serif! italic">{heroCopy.subHeader}</h2>
      </div>
      <Tear />
    </section>
  );
}

const Tear = () => {
  return (
    <div className="absolute bottom-0 w-full translate-y-4">
      <Image src="/images/tear-ocean.png" alt="" width={1200} height={300} className="absolute -z-1 h-auto w-full -translate-y-1" unoptimized />
      <Image src="/images/tear-sand.png" alt="" width={1200} height={300} className="aboslute z-0 h-auto w-full" unoptimized />
    </div>
  );
};
