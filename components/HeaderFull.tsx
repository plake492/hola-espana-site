export default function HeaderFull({ copy }: { copy: string }) {
  return (
    <section className="relative h-[370px] bg-[url(/images/spain-flag.webp)] bg-cover bg-center">
      <div className="bg-blue-overlay absolute inset-0" />
      <div className="relative grid h-full content-center px-8 md:px-16">
        <h1 className="text-light text-center text-4xl uppercase">{copy}</h1>
      </div>
    </section>
  );
}
