import { whyChooseUs as copy } from '@/lib/siteCopy/homepageCopy.json';
import Container from '../Container';
import SplitContainer from '../SplitContainer';
import TextWithIcon from '../TextWithIcon';
import Accordion from '../Accordion';

export default function WhyBookUs() {
  return (
    <Container id="why-choose-us" className="my-24 px-8">
      <SplitContainer
        cols={'grid-cols-2'}
        imgSrc="/images/why-us-mosaic-casa.webp"
        className="bg-ocean text-light py-18"
        header={<TextWithIcon textSize="text-3xl" text={copy.header} className="pr-8 uppercase" iconColor="text-sand-dark" as="h3" />}
      >
        <Accordion content={copy.list} />
      </SplitContainer>
    </Container>
  );
}
