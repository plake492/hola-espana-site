import Container from '../Container';
import SectionHeading from '../SectionHeading';
import { TileBorder } from '../Icons';
import Carousel from '../Carousel';
import reviews from '@/lib/mockReviews.json';

export default function Reviews() {
  return (
    <Container size="full">
      <TileBorder color="green" />
      <Container className="pt-36 pb-18">
        <SectionHeading lines={['Peace of mind shared by our clients']} className="uppercase" textSize="text-3xl" iconColor="text-terracotta-off" />
      </Container>
      <Carousel reviews={reviews} />
    </Container>
  );
}
