import Image from 'next/image';
import Container from '../Container';
import Button from '../Button';
import SectionHeading from '../SectionHeading';
import { blog as copy } from '@/lib/siteCopy/homepageCopy.json';
import { StarIcon } from '../Icons';

export default function Blogs() {
  return (
    <Container className="mb-0 px-4 md:px-8" id="blog">
      <Container className="bg-sand relative z-1 py-8 md:pt-20 md:pb-24" as="div">
        <div className="mb-6 px-6 md:mb-16 md:pr-0 md:pl-16">
          <SectionHeading
            lines={['Hola España', { first: 'Relocation', last: 'Blog' }]}
            className="uppercase"
            textSize="text-section-sm"
            iconColor="text-terracotta-off"
          />
        </div>
        <div className="flex grid-cols-5 flex-col gap-x-8 md:grid md:items-center">
          <div className="item-center relative z-1 order-2 my-8 px-8 md:order-0 md:col-span-2 md:mt-0 md:pr-8 md:pl-16">
            <Button className="w-full py-3 text-lg uppercase">{copy.ctaText}</Button>
          </div>
          <div className="order-1 h-full w-[110%] pl-6 md:col-span-4 md:col-start-3 md:ml-0 md:w-[min(118%,66dvw)]">
            <Image src="/images/colorful-coast-town.webp" alt="" width={800} height={600} className="h-auto w-full object-cover" />
          </div>
          <p className="text-md order-3 w-full px-8 text-base/relaxed md:col-span-4 md:col-start-3 md:pt-8 md:pr-8 md:pl-0">{copy.content}</p>
        </div>
        <div className="absolute right-0 bottom-0 -z-1 h-[280px] w-[280px] translate-x-32 -translate-y-24 rotate-90 text-[#e1d0c0] md:left-0 md:h-[450px] md:w-[450px] md:-translate-x-32 md:-translate-y-24 md:rotate-70">
          <StarIcon />
        </div>
      </Container>
    </Container>
  );
}
