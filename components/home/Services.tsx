import ServiceCard from './ServiceCard';
import { servicesCopy } from '@/lib/siteCopy';

export default function Services() {
  return (
    <section className="relative">
      <div className="mx-auto mt-24 max-w-6xl px-4">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-4xl">{servicesCopy.heading}</h3>
          <p className="max-w-3xl pt-8 text-center font-serif text-2xl font-light text-balance">{servicesCopy.description}</p>
        </div>
        <div className="mt-18 grid grid-cols-3 gap-16">
          {servicesCopy.cards.map((s) => (
            <ServiceCard content={s} key={s.id} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-[50%] -z-1 h-full w-full -translate-x-1/2 translate-y-[475px]">
        <div className="absolute top-0 left-0 z-1 h-1/1 w-full bg-[linear-gradient(#fcf7f2_20,#0000)]"></div>
        <div className="relative z-0 h-full bg-[url(/images/mosaic-bg.png)] opacity-50"></div>
      </div>
    </section>
  );
}
