import Image from 'next/image';
import ServiceCard from './ServiceCard';

const services = [
  { id: 1, img: 'bg-[url(/images/card-health.jpg)]', title: 'Service One', description: 'Placeholder description' },
  { id: 2, img: 'bg-[url(/images/card-visa.jpg)]', imgPosition: '-100px', title: 'Service Two', description: 'Placeholder description' },
  { id: 3, img: 'bg-[url(/images/card-health.jpg)]', title: 'Service Three', description: 'Placeholder description' },
  { id: 4, img: 'bg-[url(/images/card-visa.jpg)]', imgPosition: '-100px', title: 'Service Four', description: 'Placeholder description' },
  { id: 5, img: 'bg-[url(/images/card-health.jpg)]', title: 'Service Five', description: 'Placeholder description' },
  { id: 6, img: 'bg-[url(/images/card-visa.jpg)]', imgPosition: '-100px', title: 'Service Six', description: 'Placeholder description' },
];

export default function Services() {
  return (
    <section className="relative">
      <div className="mx-auto mt-24 max-w-6xl">
        <div className="flex flex-col items-center gap-4">
          <p>End-to-end Spain Relocation Services.</p>
          <p>Whether you're relocating, buying a home, or starting a business, we're here to help.</p>
        </div>
        <div className="mt-36 grid grid-cols-3 gap-20">
          {services.map((s) => (
            <ServiceCard content={s} key={s.id} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-[50%] -z-1 h-full w-full -translate-x-1/2 translate-y-[675px]">
        <div className="bg-[linear-gradient(25deg, #fcf7f2,#0000)] absolute top-0 left-0 z-1 h-[575px] w-full"></div>
        <div className="absolute top-0 left-0 z-1 h-1/1 w-full bg-[linear-gradient(#fcf7f2_50,#0000)]"></div>
        <Image src="/images/mos-1.jpg" alt="" width={1400} height={1400} className="object-repeat w-full object-cover object-bottom opacity-20" />
      </div>
    </section>
  );
}
