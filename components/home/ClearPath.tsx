import Image from 'next/image';
import Container from '../Container';
import { TileBorder } from '../Icons';
import homePageCopy from '@/lib/siteCopy/homepageCopy.json';

export default function ClearPath() {
  const { clearPath } = homePageCopy;

  return (
    <Container size="full">
      <TileBorder color="blue" />
      <Container
        className="px-16"
        iconProps={{ icon: 'sun', iconClassName: 'text-sand-icon w-[350] h-[350] absolute top-0 left-0 -z-1 -translate-y-2 -translate-x-10' }}
      >
        <div className="pt-20 pb-16">
          <h3 className="ml-auto max-w-5xl text-end text-4xl uppercase">{clearPath.header}</h3>
        </div>
      </Container>

      <div className="relative mx-auto max-w-[1880px]">
        <Image src="/images/arches.png" width={1570} height={400} alt="" className="h-auto w-full" />

        <div className="absolute inset-0 grid grid-cols-7">
          {clearPath.steps.map((step, i) => (
            <div className="grid grid-cols-1 grid-rows-[1fr_1fr] items-center justify-center pr-[12%] pb-[15%] pl-[10%] text-center" key={i}>
              <span className="font-aegean text-arch mb-10">{step.numeral}</span>
              <p className="text-arch self-start font-semibold">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Container className="px-16">
        <div className="py-12">
          <h5 className="font-serif! text-2xl font-light text-pretty">{clearPath.sectionFooter}</h5>
        </div>
      </Container>
      <Image src="/images/mosaic-strip.webp" width={1200} height={200} alt="" className="w-full" />
    </Container>
  );
}
