import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="relative mt-10 grid min-h-[calc(100dvh-138px)] place-content-center text-center">
        <Image
          src="/images/hero-background.svg"
          alt="hero scene background"
          className="absolute bottom-0 left-0 -z-10 h-auto w-dvw"
          width={1000}
          height={800}
        />
        <section className="relative z-10 -mt-52 flex flex-col items-center">
          {/* <Image src="/images/logo/logo.svg" alt="logo" width={200} height={200} /> */}
          <div className="mb-2 text-4xl md:text-6xl lg:text-7xl">
            <span className="font-display font-script text-6xl tracking-wide md:text-8xl lg:text-9xl">Hola</span> ESPAÑA
          </div>

          <p className="text-hola-ink-soft font-secondary mt-4 text-sm tracking-[0.3em] uppercase md:text-base lg:text-lg">
            Legal and Relocation Experts
          </p>

          <button className="bg-hola-terracotta text-hola-cream shadow-hola-soft hover:bg-hola-button-hover mt-20 rounded-md px-8 py-2.5 text-base transition-colors md:px-10 md:py-3 md:text-lg">
            Lets Connect
          </button>
        </section>
      </section>
      <section className="bg-hola-sage text-hola-cream grid min-h-[600px] place-content-center text-center">
        <div>
          <p className="text-3xl md:text-4xl lg:text-5xl">Section</p>
        </div>
      </section>
    </>
  );
}
