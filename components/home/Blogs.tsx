import Image from 'next/image';
import Container from '../Container';
import Button from '../Button';
import TextWithIcon from '../TextWithIcon';
import homepageCopy from '@/lib/siteCopy/homepageCopy.json';

export default function Blogs() {
  const { blog } = homepageCopy;
  return (
    <Container className="mb-0 px-16" id="blog">
      {/* // TODO Make responsive as if a SplitContainer */}
      <div className="bg-sand">
        <div className="mb-16 pl-16">
          <TextWithIcon as={'h3'} text={blog.header} className="uppercase" textSize="text-4xl" iconColor="text-terracotta-off" />
        </div>
        <div className={`grid grid-cols-3`}>
          <div className={`self-stretch pr-8 pl-16`}>
            <Button className="text-md text-white uppercase">{blog.ctaText}</Button>
          </div>
          <div className={`'h-full col-span-2 col-start-2 w-[min(118%,66dvw)]`}>
            <Image src="/images/colorful-coast-town.webp" alt="" width={800} height={600} className="h-auto w-full object-cover" />
          </div>
          <p className="text-md col-span-2 col-start-2 w-full">{blog.content}</p>
        </div>
      </div>
    </Container>
  );
}
