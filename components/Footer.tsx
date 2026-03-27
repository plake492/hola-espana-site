import Image from 'next/image';
import { SunIcon, StarIcon } from '@/components/Icons';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#4580AC] px-4 pt-18 pb-18 text-white md:px-8">
      <div className="max-w-8xl relative z-1 mx-auto grid grid-cols-[1fr_450px_1fr] grid-rows-2 justify-items-center gap-x-4">
        <div>
          <p className="font-serif text-sm">© 2026 Copyright: holaespana.co</p>
        </div>
        <div className="col-start-2 row-start-2 w-full">
          <Image alt="site logo" src="/logo/logo.svg" width={200} height={100} className="h-auto w-full invert-100" />
        </div>
        <div className="col-start-3">
          <p className="font-serif text-sm">© 2026 Copyright: holaespana.co</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -mb-52 flex w-full max-w-[1580px] -translate-x-1/2 -translate-y-32 justify-between">
        <div className="-ml-18 h-[350px] w-[350px] text-[#3B6E95]">
          <StarIcon />
        </div>
        <div className="-mr-18 h-[400px] w-[400px] text-[#3B6E95]">
          <SunIcon />
        </div>
      </div>
    </footer>
  );
}
