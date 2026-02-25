import Container from '../Container';
import Button from '../Button';
import homepageCopy from '@/lib/siteCopy/homepageCopy.json';

export default function HeroCta() {
  const { description, header, buttonText } = homepageCopy.heroCta;
  return (
    <Container className="flex flex-col items-center gap-10 px-4 pt-8 text-center text-balance" id="hero-cta">
      <p className="text-lg font-medium italic">{description}</p>
      <h3 className="font-ligh text-2xl">{header}</h3>
      <Button className="italic">{buttonText}</Button>
    </Container>
  );
}
