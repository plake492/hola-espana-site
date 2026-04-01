import Image from 'next/image';
import Link from 'next/link';
import { SunIcon, StarIcon } from '@/components/Icons';

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 shrink-0">
    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 shrink-0">
    <path
      fillRule="evenodd"
      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
      clipRule="evenodd"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 shrink-0">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#4580AC] px-6 pt-14 pb-14 text-white md:px-10 md:pt-18 md:pb-18">
      <div className="max-w-8xl relative z-1 mx-auto flex flex-col items-start gap-10 md:grid md:grid-cols-[1fr_450px_1fr] md:grid-rows-2 md:items-start md:justify-items-center md:gap-x-4 md:gap-y-0">
        {/* Left */}
        <div className="flex flex-col gap-3 self-start md:justify-self-start">
          <a href="mailto:info@holaespana.com" className="flex items-center gap-3 font-serif text-sm transition-opacity hover:opacity-80">
            <EmailIcon />
            info@holaespana.com
          </a>
          <a href="tel:+12345678910" className="flex items-center gap-3 font-serif text-sm transition-opacity hover:opacity-80">
            <PhoneIcon />
            1(234)-567-8910
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-serif text-sm transition-opacity hover:opacity-80"
          >
            <FacebookIcon />
          </a>
        </div>

        {/* Center */}
        <div className="-order-1 max-w-[340px] md:col-start-2 md:row-start-2 md:w-full md:max-w-none">
          <Image alt="Hola España" src="/logo/logo.svg" width={450} height={200} className="h-auto w-full invert-100" />
        </div>

        {/* Right */}
        <div className="flex flex-col items-center gap-2 md:col-start-3 md:items-end">
          <Link href="/privacy-policy" className="font-serif text-sm transition-opacity hover:opacity-80">
            Privacy policy
          </Link>
          <Link href="/cookie-policy" className="font-serif text-sm transition-opacity hover:opacity-80">
            Cookie policy
          </Link>
          <p className="mt-2 font-serif text-sm opacity-80">© Hola España</p>
        </div>
      </div>

      {/* Decorative icons */}
      <div className="absolute bottom-0 left-1/2 -mb-52 flex w-full max-w-[1580px] -translate-x-1/2 -translate-y-32 justify-between">
        <div className="-ml-18 hidden h-[350px] w-[350px] text-[#3B6E95] md:block">
          <StarIcon />
        </div>
        <div className="-mr-18 h-[400px] w-[400px] text-[#3B6E95]">
          <SunIcon />
        </div>
      </div>
    </footer>
  );
}


claude --resume 4e27d63e-0657-4994-b7e2-f50cdc7b5e72                                                                                                                                                                                     