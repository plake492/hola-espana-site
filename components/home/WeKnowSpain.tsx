import homePageCopy from '@/lib/siteCopy/homepageCopy.json';
import Container from '../Container';
import SplitContainer from '../SplitContainer';
import TextWithIcon from '../TextWithIcon';

export default function WhyBookUs() {
  const { header, content, sectionFooter } = homePageCopy.weKnowSpain;

  return (
    <>
      <Container id="why-choose-us" className="my-24 px-8">
        <SplitContainer
          imgLeft
          cols={'grid-cols-2 items-center'}
          imgSrc="/images/city-mosaic.webp"
          className="bg-sand py-18 pr-8 text-black"
          header={<TextWithIcon textSize="text-3xl" text={header} className="uppercase" iconColor="text-terracotta-off" />}
          sectionFooter={
            <div>
              <h6 className="text-start text-lg text-pretty">{sectionFooter}</h6>
            </div>
          }
        >
          {
            <p className="text-md flex max-w-lg flex-col gap-3">
              {content.body.map((text: string, i: number) => (
                <span key={i}>{text}</span>
              ))}
            </p>
          }
        </SplitContainer>
      </Container>
    </>
  );
}
