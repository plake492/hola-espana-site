import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="grid place-content-center text-center mt-10 relative min-h-[calc(100dvh-138px)]">
        <Image
          src="/images/hero-background.svg"
          alt="hero scene background"
          className="absolute left-0 bottom-0 w-dvw h-auto -z-10"
          width={1000}
          height={800}
        />
        <section className="relative z-10 -mt-52 flex flex-col items-center">
          <Image src="/images/logo/logo.svg" alt="logo" width={200} height={200} />
          <div className="text-4xl md:text-6xl lg:text-7xl mb-2">
            <span className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wide font-script">Hola</span> ESPAÑA
          </div>

          <p className="mt-4 text-hola-ink-soft uppercase tracking-[0.3em] font-secondary text-sm md:text-base lg:text-lg">
            Legal and Relocation Experts
          </p>

          <button className="mt-20 px-8 md:px-10 py-2.5 md:py-3 rounded-md bg-hola-terracotta text-hola-cream shadow-hola-soft text-base md:text-lg hover:bg-hola-button-hover transition-colors">
            Lets Connect
          </button>
        </section>
      </section>
      <section className="grid place-content-center text-center min-h-[600px] bg-hola-sage text-hola-cream">
        <div>
          <p className="text-3xl md:text-4xl lg:text-5xl">Section</p>
        </div>
      </section>
    </>
  );
}
