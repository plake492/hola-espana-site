import type { ComponentType } from 'react';
import { cn } from '@/lib/utils/cn';
import { StarIcon } from '@/components/Icons';

export interface Tier {
  name: string;
  description: string;
  features: string[];
  price: string;
  featured?: boolean;
}

export interface TierPresentation {
  gradient: string;
  borderColor: string;
  Icon: ComponentType;
  iconClassName: string;
}

interface PackageCardProps {
  tier: Tier;
  presentation: TierPresentation;
  expanded: boolean;
}

export default function PackageCard({ tier, presentation, expanded }: PackageCardProps) {
  const { Icon } = presentation;
  const hasLeadIn = tier.features[0]?.startsWith('Everything in');
  const leadIn = hasLeadIn ? tier.features[0] : null;
  const features = hasLeadIn ? tier.features.slice(1) : tier.features;

  return (
    <div className={cn('relative flex h-full flex-col overflow-hidden border bg-[#F5EBDF] text-left', expanded ? '' : 'md:mt-24')}>
      <div className="absolute top-0 left-0 h-full w-full" style={{ background: presentation.gradient, borderColor: presentation.borderColor }} />
      <div aria-hidden className={cn('pointer-events-none absolute -top-14 -right-14 h-44 w-44 opacity-25', presentation.iconClassName)}>
        <Icon />
      </div>
      <div className="relative flex h-full flex-col px-4 pt-10 pb-8 lg:px-8 lg:pt-18 lg:pb-0 xl:px-12">
        <h3 className={cn('font-aegean mb-3 transition-all duration-500', expanded ? 'text-lg' : 'text-md')}>{tier.name}</h3>
        <p className={cn('text-color-dark mb-6 italic transition-all duration-500', expanded ? 'text-sm' : 'text-xs')}>{tier.description}</p>
        <p className={cn('font-serif font-semibold italic transition-all duration-500', expanded ? 'text-3xl' : 'text-2xl')}>{tier.price}</p>
        <hr className="my-6 w-24 border-t" style={{ borderColor: presentation.borderColor }} />
        <p className="text-sm">What&apos;s included:</p>
        {leadIn && <p className="mt-4 text-sm font-semibold italic">{leadIn}</p>}
        <ul className="mt-6 flex flex-1 flex-col gap-4 overflow-hidden">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span aria-hidden className="text-terracotta mt-1 h-2.5 w-2.5 shrink-0">
                <StarIcon />
              </span>
              <span className={`text-color-dark italic ${expanded ? 'text-xs' : 'text-[12px]'}`}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
