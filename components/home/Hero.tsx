import Image from 'next/image';
import { hero as pageCopy } from '@/lib/siteCopy/homepageCopy.json';
import Container from '../Container';

export default function Hero() {
  return (
    <Container
      size="full"
      className="relative flex min-h-[max(85dvh,550px)] w-full flex-col items-center justify-center overflow-hidden bg-black text-white md:min-h-[max(calc(100dvh+250px),950px)]"
      id="hero"
    >
      <div className="absolute top-0 left-0 z-0 h-full w-full">
        <Image alt="spain" src="/images/hero.webp" width={1000} height={1000} priority className="absolute h-full w-full object-cover" />
        <div className="bg-blue-overlay absolute right-0 left-0 z-1 h-full w-full"></div>
      </div>
      <div className="md:-0 relative z-1 mx-2 flex h-full flex-col gap-8 pt-24 md:pt-24">
        <h1 className="text-balanced flex flex-col flex-wrap items-start gap-6 tracking-widest md:gap-8 md:whitespace-nowrap">
          <span className="text-headline2 font-light">{pageCopy.header.first}</span>
          <span className="text-headline1 -mb-4 ml-(--headline-ml-offset) font-semibold uppercase max-[950px]:ml-[-2.75px]">{pageCopy.header.second}</span>
          <span className="text-headline2 ml-(--headline-ml-offset) font-light">{pageCopy.header.third}</span>
        </h1>
        <h2 className="text-headline-sub ml-(--headline-ml-offset) font-serif! italic">{pageCopy.subHeader}</h2>
      </div>
      {/* Tear */}
      <div className="absolute bottom-0 w-full translate-y-4">
        <Image src="/images/tear-ocean.png" alt="" width={1200} height={300} className="absolute -z-1 h-auto w-full -translate-y-1" unoptimized />
        <Image src="/images/tear-sand.png" alt="" width={1200} height={300} className="aboslute z-0 h-auto w-full" unoptimized />
      </div>
    </Container>
  );
}
