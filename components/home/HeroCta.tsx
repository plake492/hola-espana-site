import Container from '../Container';
import Button from '../Button';
import homepageCopy from '@/lib/siteCopy/homepageCopy.json';

export default function HeroCta() {
  const { description, header, buttonText } = homepageCopy.heroCta;
  return (
    <Container className={'flex flex-col items-center px-4 pt-24 pb-8 text-center text-balance sm:gap-12 lg:gap-18'} id="hero-cta">
      <p className="text-xl font-light italic">{description}</p>
      <h3 className="text-2xl">{header}</h3>
      <Button className="italic">{buttonText}</Button>
    </Container>
  );
}
