import { whyChooseUs as copy } from '@/lib/siteCopy/homepageCopy.json';
import Container from '../Container';
import SplitContainer from '../SplitContainer';
import TextWithIcon from '../TextWithIcon';
import Accordion from '../Accordion';

export default function WhyBookUs() {
  return (
    <Container id="why-choose-us" className="my-16 px-4 md:my-24 md:px-8">
      <SplitContainer
        imgSrc="/images/why-us-mosaic-casa.webp"
        className="bg-ocean text-light py-8 md:py-18"
        header={<TextWithIcon textSize="text-section-md" text={copy.header} className="uppercase md:pr-8" iconColor="text-sand-dark" as="h3" />}
      >
        <Accordion content={copy.list} />
      </SplitContainer>
    </Container>
  );
}
