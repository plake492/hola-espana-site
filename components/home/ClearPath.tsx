import Image from 'next/image';
import Container from '../Container';
import { TileBorder } from '../Icons';
import { clearPath as pageCopy } from '@/lib/siteCopy/homepageCopy.json';

export default function ClearPath() {
  return (
    <Container size="full" id="path">
      <TileBorder color="blue" />
      <Container
        className="z-0 px-8 md:px-1"
        iconProps={{
          icon: 'sun',
          iconClassName:
            'w-[200px] h-[200px] md:w-[375px] md:h-[375px] absolute top-0 left-0 -z-1 -translate-y-2 lg:-translate-y-2 lg:-translate-x-10 -translate-x-1/2',
          iconColor: 'sand',
        }}
      >
        <div className="py-12 md:pt-20 md:pb-28">
          <h3 className="text-section-md ml-auto max-w-4xl text-end uppercase">{pageCopy.header}</h3>
        </div>
      </Container>

      <div className="relative -mx-0.5 hidden max-w-[1880px] after:absolute after:bottom-0 after:h-[3px] after:w-full after:bg-black after:content-[''] md:block">
        <Image src="/images/arches.png" width={1570} height={400} alt="" className="h-auto w-full rotate-[0.1deg]" />

        <div className="absolute inset-0 grid grid-cols-7">
          {pageCopy.steps.map((step, i) => (
            <div className="grid grid-cols-1 grid-rows-[1fr_1fr] items-center justify-center pr-[12%] pb-[15%] pl-[10%] text-center" key={i}>
              <span className="font-aegean text-arch mb-10">{step.numeral}</span>
              <p className="text-arch self-start font-semibold">{step.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="block px-8 md:hidden">
        {pageCopy.steps.map((step, i) => (
          <div key={i} className="align-center grid grid-cols-[42px_auto] gap-4">
            <span className="font-aegean mb-10 text-xl font-light sm:mb-8">{step.numeral}.</span>
            <p className="self-start text-xl font-semibold">{step.title}</p>
          </div>
        ))}
      </div>
      <Container className="px-8 md:px-16">
        <div className="max-w-5xl py-12">
          <h5 className="text-xl font-light text-pretty">{pageCopy.sectionFooter}</h5>
        </div>
      </Container>
      <Image src="/images/mosaic-strip.webp" width={1200} height={200} alt="" className="w-full" />
    </Container>
  );
}
