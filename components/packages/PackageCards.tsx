import Container from '../Container';
import { cn } from '@/lib/utils/cn';
import { packages as copy } from '@/lib/siteCopy/packageCopy.json';

export default function PackageCards() {
  return (
    <Container className="px-4 py-16 md:px-8 md:py-24">
      <div className="mb-12 text-center md:mb-16">
        <h2 className="mb-4 font-script text-3xl">{copy.header}</h2>
        <p className="text-md text-color-dark">{copy.description}</p>
        <p className="mt-2 text-sm italic text-color-dark">{copy.subDescription}</p>
      </div>

      <hr className="border-sand mb-12 md:mb-16" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
        {copy.tiers.map((tier) => {
          const isFeatured = 'featured' in tier && tier.featured;
          return (
            <div
              key={tier.name}
              className={cn(
                'flex flex-col items-center text-center',
                isFeatured && 'md:border-x md:border-sand md:px-6',
                !isFeatured && 'md:px-4'
              )}
            >
              <h3 className={cn('mb-2 uppercase', isFeatured ? 'text-xl' : 'text-lg')}>{tier.name}</h3>
              <p className={cn('mb-6 italic text-terracotta', isFeatured ? 'text-sm' : 'text-xs')}>{tier.description}</p>

              <ul className="mb-8 flex flex-col gap-3">
                {tier.features.map((feature, j) => (
                  <li key={j} className={cn('text-color-dark', isFeatured ? 'text-sm' : 'text-xs')}>
                    {feature}
                  </li>
                ))}
              </ul>

              <hr className="border-sand mt-auto mb-6 w-full" />
              <p className={cn('font-aegean', isFeatured ? 'text-2xl' : 'text-xl')}>{tier.price}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
