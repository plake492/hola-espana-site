import { heroCtaCopy } from '@/lib/siteCopy';

export default function HeroCta() {
  return (
    <aside className="mx-auto max-w-5xl bg-[#c36c44] px-4 py-8 text-center text-balance text-white sm:px-16 sm:py-12">
      <h2 className="flex w-full flex-col items-center gap-4">
        <span className="font-serif text-2xl italic">{heroCtaCopy.header}</span>
        <span className="text-3xl">{heroCtaCopy.subHeader}</span>
      </h2>
    </aside>
  );
}
