import Container from '../Container';
import ServiceCard from './ServiceCard';
import homepageCopy from '@/lib/siteCopy/homepageCopy.json';

export default function Services() {
  const { services: servicesCopy } = homepageCopy;

  return (
    <Container className={'px-4 pt-64'} iconProps={{ icon: 'star', iconColor: 'sand' }}>
      <div className="mb-16 max-w-7xl">
        <h3 className="mb-16 text-4xl uppercase">{servicesCopy.heading}</h3>
        <p className="text-xl">{servicesCopy.description}</p>
      </div>
      {servicesCopy.cards.map((s) => (
        <ServiceCard content={s} key={s.id} />
      ))}
    </Container>
  );
}
