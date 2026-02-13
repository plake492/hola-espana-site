import homePageCopy from '@/lib/siteCopy/homepageCopy.json';
import Container from '../Container';
import SplitContainer from '../SplitContainer';
import TextWithIcon from '../TextWithIcon';

export default function WhyBookUs() {
  const { header } = homePageCopy.weKnowSpain;

  return (
    <Container id="why-choose-us" className="my-24 px-8">
      <SplitContainer
        imgLeft
        cols={'grid-cols-2'}
        imgSrc="/images/why-us-mosaic-casa.webp"
        className="bg-sand py-18 text-black"
        header={<TextWithIcon text={header} className="uppercase" iconColor="text-terracotta-off" />}
      >
        {<p className="h-[500px]">THIS IS CONTENT</p>}
      </SplitContainer>
    </Container>
  );
}
