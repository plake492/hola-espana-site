import Container from '../Container';
import { cn } from '@/lib/utils/cn';
import { packages as copy } from '@/lib/siteCopy/packageCopy.json';

export default function PackageCards() {
  return (
    <Container className="px-4 py-16 md:px-8 md:py-36">
      <div className="mb-12 flex flex-col gap-4 text-center md:mb-16">
        <h2 className="font-script mb-4 text-3xl">{copy.header}</h2>
        <p className="text-md text-color-dark">{copy.description}</p>
        <p className="text-color-dark text-sm italic">{copy.subDescription}</p>
      </div>

      <hr className="border-sand mb-12 md:mb-16" />

      <div className="grid grid-cols-1 gap-8 md:gap-0 lg:grid-cols-3">
        {copy.tiers.map((tier) => {
          const isFeatured = 'featured' in tier && tier.featured;
          return (
            <div className="mb-8 px-3 text-center" key={tier.price}>
              <h3 className={cn('mb-4 uppercase', isFeatured ? 'text-lg' : 'text-md')}>{tier.name}</h3>
              <p className={cn('text-terracotta mb-6 italic', isFeatured ? 'text-sm' : 'text-xs')}>{tier.description}</p>
            </div>
          );
        })}
        {copy.tiers.map((tier) => {
          const isFeatured = 'featured' in tier && tier.featured;
          return (
            <div
              key={tier.name}
              className={cn('flex flex-col items-center border-[#C4755660] text-center lg:border-b', isFeatured && 'md:px-4', !isFeatured && 'md:px-6')}
            >
              <ul
                className={cn(
                  "relative flex h-full flex-col items-center gap-4 text-center after:absolute after:right-9 after:bottom-0 after:left-9 after:hidden after:h-px after:bg-[#C4755650] after:content-[''] md:pb-6 md:after:block",
                  isFeatured && 'md:px-12 lg:border-x lg:border-[#C4755650]',
                  !isFeatured && 'md:px-8'
                )}
              >
                {tier.features.map((feature, j) => (
                  <li key={j} className={cn('text-color-dark', isFeatured ? 'text-sm' : 'text-xs')}>
                    {feature}
                  </li>
                ))}
              </ul>

              <p className={cn('font-aegean mt-6 mb-6 w-full px-8', isFeatured ? 'text-2xl' : 'text-xl')}>{tier.price}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
