import Image from 'next/image';
import Container from '../Container';
import Button from '../Button';
import SectionHeading from '../SectionHeading';
import homepageCopy from '@/lib/siteCopy/homepageCopy.json';
import { StarIcon } from '../Icons';

export default function Blogs() {
  const { blog } = homepageCopy;
  return (
    <Container className="mb-0 px-8" id="blog">
      {/* // TODO Make responsive as if a SplitContainer */}
      <Container className="bg-sand relative z-1 pt-20 pb-24">
        <div className="mb-16 pl-16">
          <SectionHeading
            lines={['Hola España', { first: 'Relocation', last: 'Blog' }]}
            className="uppercase"
            textSize="text-section-sm"
            iconColor="text-terracotta-off"
          />
        </div>
        <div className={`grid grid-cols-5 items-center gap-x-8`}>
          <div className={`col-span-2 pr-8 pl-16`}>
            <Button className="w-full py-3 text-lg uppercase">{blog.ctaText}</Button>
          </div>
          <div className={`'h-full col-span-4 col-start-3 w-[min(118%,66dvw)]`}>
            <Image src="/images/colorful-coast-town.webp" alt="" width={800} height={600} className="h-auto w-full object-cover" />
          </div>
          <p className="text-md col-span-4 col-start-3 w-full pt-8 pr-8 text-base/relaxed">{blog.content}</p>
        </div>
        <div className="absolute bottom-0 left-0 h-[450px] w-[450px] -translate-x-32 -translate-y-24 rotate-70 text-[#e1d0c0]">
          <StarIcon />
        </div>
      </Container>
    </Container>
  );
}
