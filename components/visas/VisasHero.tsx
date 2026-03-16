import { visasCopy } from '@/lib/siteCopy/visasCopy';

export default function VisasHero() {
  return (
    <section className="relative mt-18 h-[370px] bg-[url(/images/city-center.webp)] bg-cover bg-center md:mt-24">
      <div className="absolute inset-0 bg-blue-overlay" />
      <div className="relative flex h-full items-end px-8 pb-12 md:px-16">
        <h1 className="text-color-light uppercase">{visasCopy.hero.title}</h1>
      </div>
    </section>
  );
}
