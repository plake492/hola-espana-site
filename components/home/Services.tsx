import Image from 'next/image';
import Container from '../Container';
import { services as copy } from '@/lib/siteCopy/homepageCopy.json';
import SectionHeading from '../SectionHeading';

export default function Services() {
  return (
    <>
      <Container className={'px-4 pt-24 pb-12 md:pt-64 md:pb-32'} iconProps={{ icon: 'star', iconColor: 'sand' }} id="services">
        <div className="mb-10 max-w-7xl md:mb-20">
          <SectionHeading lines={[copy.heading]} className="mb-6 text-balance uppercase" as="h3" textSize="text-3xl" />
          <p className="text-lg font-light">{copy.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {copy.cards.map((s) => (
            <ServiceCard content={s} key={s.id} />
          ))}
        </div>
      </Container>
      <Image src="/images/mosaic-strip.webp" width={1200} height={200} alt="" className="w-full" />
    </>
  );
}

interface CardContent {
  id: number;
  img: string;
  title: string;
  bgPosition?: string;
  description: string;
  iconSrc: string;
  iconSize?: string;
}

function ServiceCard({ content }: { content: CardContent }) {
  const { img, title, description, bgPosition = 'bg-position-[center_center]' } = content;

  return (
    <div className="bg-white p-4 shadow-xs">
      <div className={`relative flex h-[280px] flex-col justify-end overflow-hidden bg-white sm:h-[450px] ${img} bg-p ${bgPosition} bg-cover bg-no-repeat`}>
        <div className="relative flex h-1/2 flex-col justify-end bg-white px-4 pb-6 min-[350px]:h-2/5 sm:h-1/3 sm:justify-center sm:pb-0 md:px-8">
          <div className="text-center">
            <h4 className="mb-2 font-serif! text-xl font-medium italic sm:text-lg">{title}</h4>
            <p className="font-serif text-sm">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
