import Container from '../Container';
import PackageCarousel from './PackageCarousel';
import { packages as copy } from '@/lib/siteCopy/packageCopy.json';
import { IconProps } from '../Container';

const icons: IconProps[] = [
  {
    icon: 'rosetta',
    iconClassName: 'top-0 right-0 z-0 h-[650px] w-[650px] translate-x-[325px] translate-y-0',
  },
  {
    icon: 'rosetta',
    iconClassName: 'top-0 left-0 z-0 h-[650px] w-[650px] -translate-x-[325px] translate-y-[200px]',
  },
];

export default function PackageCards() {
  return (
    <Container className="px-4 py-16 md:px-8 md:py-36" iconProps={icons} size="full">
      <div className="mb-12 flex flex-col gap-4 text-center md:mb-16">
        <h2 className="font mb-4 text-3xl">{copy.header}</h2>
        <p className="text-md text-color-dark">{copy.description}</p>
        <p className="text-color-dark text-sm italic">{copy.subDescription}</p>
      </div>
      <PackageCarousel tiers={copy.tiers} />
    </Container>
  );
}
