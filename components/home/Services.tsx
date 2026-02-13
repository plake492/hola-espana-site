import Image from 'next/image';
import Container from '../Container';
import ServiceCard from './ServiceCard';
import homepageCopy from '@/lib/siteCopy/homepageCopy.json';

export default function Services() {
  const { services: servicesCopy } = homepageCopy;

  return (
    <>
      <Container className={'px-4 pt-64 pb-42'} iconProps={{ icon: 'star', iconColor: 'sand' }} id="services">
        <div className="mb-20 max-w-7xl">
          <h3 className="mb-6 text-4xl uppercase">{servicesCopy.heading}</h3>
          <p className="text-lg font-light">{servicesCopy.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {servicesCopy.cards.map((s) => (
            <ServiceCard content={s} key={s.id} />
          ))}
        </div>
      </Container>
      <Image src="/images/mosaic-strip.webp" width={1200} height={200} alt="" className="w-full" />
    </>
  );
}
