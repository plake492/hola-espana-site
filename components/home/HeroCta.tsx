import Container from '../Container';
import Button from '../Button';
import homepageCopy from '@/lib/siteCopy/homepageCopy.json';

export default function HeroCta() {
  const { description, header, buttonText } = homepageCopy.heroCta;
  return (
    <Container className="flex flex-col items-center gap-8 px-4 pt-8 text-center text-balance md:gap-10" id="hero-cta">
      <p className="text-lg font-medium italic">{description}</p>
      <h3 className="text-2xl font-light">{header}</h3>
      <Button className="mt-2 italic">{buttonText}</Button>
    </Container>
  );
}
