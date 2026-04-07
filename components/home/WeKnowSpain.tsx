import homePageCopy from '@/lib/siteCopy/homepageCopy.json';
import Container from '../Container';
import SplitContainer from '../SplitContainer';
import TextWithIcon from '../TextWithIcon';

export default function WhyBookUs() {
  const { header, content, sectionFooter } = homePageCopy.weKnowSpain;

  return (
    <Container id="why-choose-us" className="my-16 px-4 md:my-24 md:px-8">
      <SplitContainer
        imgLeft
        cols={'md:grid-cols-2 items-center'}
        imgSrc="/images/city-mosaic.webp"
        className="bg-sand py-8 text-black md:py-18 md:pr-8"
        header={<TextWithIcon textSize="text-section-md" text={header} className="uppercase" iconColor="text-terracotta-off" />}
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <h5 className="font pb-4 text-lg leading-10 font-semibold">{content.header}</h5>
            <p className="text-md flex max-w-lg flex-col gap-3">
              {content.body.map((text: string, i: number) => (
                <span key={i}>{text}</span>
              ))}
            </p>
          </div>
          <div>
            <h6 className="text-start text-lg leading-10 text-pretty">{sectionFooter}</h6>
          </div>
        </div>
      </SplitContainer>
    </Container>
  );
}
