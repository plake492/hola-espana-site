import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero relative min-h-[90dvh] overflow-hidden bg-black">
      <Image alt="spain" src="/images/hero.jpg" width={1000} height={1000} className="absolute top-0 left-0 z-0 w-full" />
    </section>
  );
}
