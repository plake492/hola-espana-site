import Image from 'next/image';
import Container from '../Container';
import { TileBorder } from '../Icons';
import homePageCopy from '@/lib/siteCopy/homepageCopy.json';

export default function ClearPath() {
  const { clearPath } = homePageCopy;

  return (
    <Container size="full">
      <TileBorder color="blue" />
      <Container className="px-16" iconProps={{ icon: 'sun', iconClassName: 'text-sand-icon w-[300] h-[300] absolute top-0 left-0 -z-1' }}>
        <div className="py-28">
          <h3 className="ml-auto max-w-6xl text-end text-4xl text-pretty uppercase">{clearPath.header}</h3>
        </div>
      </Container>
      {/* //! PLACEHOLDER  */}
      <div className="h-[450px] bg-[#a3856a]">ARCHES</div>
      {/* //! PLACEHOLDER  */}
      <Container className="px-16">
        <div className="py-28">
          <h5 className="text-2xl text-pretty">{clearPath.sectionFooter}</h5>
        </div>
      </Container>
      <Image src="/images/mosaic-strip.webp" width={1200} height={200} alt="" className="w-full" />
    </Container>
  );
}
