import Image from 'next/image';
import { heroCopy } from '@/lib/siteCopy';
import { HEADER_HEIGHT } from '@/lib/constants';

export default function Hero() {
  const paddingTop = HEADER_HEIGHT / 1.5;

  return (
    <section className="relative flex min-h-[max(100dvh,800px)] flex-col items-center justify-center bg-black text-white" id="hero">
      <div className="absolute top-0 left-0 z-0 h-full w-full">
        <Image alt="spain" src="/images/hero.webp" width={1000} height={1000} priority className="absolute h-full w-full object-cover" />
        <div className="bg-blue-overlay absolute right-0 left-0 z-1 h-full w-full"></div>
      </div>

      <div className={`relative z-1 mx-24 flex h-full flex-col gap-16`} style={{ paddingTop }}>
        <h1 className="flex flex-col items-start gap-8 tracking-widest">
          <span className="text-headline2 text-start">{heroCopy.header.first}</span>
          <span className="text-headline1 text-center uppercase">{heroCopy.header.second}</span>
          <span className="text-headline2 text-center">{heroCopy.header.third}</span>
        </h1>
        <p className="text-2xl italic">{heroCopy.subHeader}</p>
      </div>
    </section>
  );
}
