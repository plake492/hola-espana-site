import { heroCtaCopy } from '@/lib/siteCopy';

export default function HeroCta() {
  return (
    <div className="font mx-auto flex w-full max-w-5xl flex-col items-center gap-4 bg-[#c36c44] px-16 py-12 text-white">
      <p className="font-serif text-2xl italic">{heroCtaCopy.header}</p>
      <p className="text-3xl">{heroCtaCopy.subHeader}</p>
    </div>
  );
}
