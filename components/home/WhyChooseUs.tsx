import homePageCopy from '@/lib/siteCopy/homepageCopy.json';
import Container from '../Container';
import SplitContainer from '../SplitContainer';
import TextWithIcon from '../TextWithIcon';
import Accordion from '../Accordion';

export default function WhyBookUs() {
  const { list, header } = homePageCopy.whyChooseUs;

  return (
    <Container id="why-choose-us" className="my-24 px-8">
      <SplitContainer
        cols={'grid-cols-2'}
        imgSrc="/images/why-us-mosaic-casa.webp"
        className="bg-ocean text-light py-18"
        header={<TextWithIcon text={header} className="uppercase" iconColor="text-sand-dark" />}
      >
        {
          <p className="h-[500px]">
            <Accordion content={list} />
          </p>
        }
      </SplitContainer>
    </Container>
  );
}
