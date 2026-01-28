import { heroCtaCopy } from '@/lib/siteCopy';

export default function HeroCta() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 bg-[#c36c44] px-4 py-8 text-center text-balance text-white sm:px-16 sm:py-12">
      <p className="font-serif text-2xl italic">{heroCtaCopy.header}</p>
      <p className="text-3xl">{heroCtaCopy.subHeader}</p>
    </div>
  );
}
