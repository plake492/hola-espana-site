import Container from '../Container';
import SectionHeading from '../SectionHeading';
import { TileBorder } from '../Icons';
import Carousel from '../Carousel';
import reviews from '@/lib/mockReviews.json';

export default function Reviews() {
  return (
    <Container size="full" className="bg-default relative z-1">
      <div className="absolute top-0 left-0 w-full -translate-y-1/2">
        <TileBorder color="green" />
      </div>
      <Container className="px-4 pt-8 pb-4 md:px-8 md:py-8 md:pt-36 md:pb-18" as="div">
        <SectionHeading lines={['Peace of mind shared by our clients']} className="uppercase" textSize="text-3xl" iconColor="text-terracotta-off" />
      </Container>
      <Carousel reviews={reviews} />
    </Container>
  );
}
