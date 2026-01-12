import Image from 'next/image';

export default function WeKnowSpain() {
  return (
    <section className="">
      <div className="min-h-24">WeKnowSpain</div>
      <div className="relative w-full">
        <Image alt="" src="/images/wave-1.svg" width={1200} height={100} className="w-full" />
        <div className="absolute bottom-0 left-0 w-full">
          <Image alt="" src="/images/wave-2.svg" width={1200} height={100} className="w-full" />
        </div>
      </div>
    </section>
  );
}
