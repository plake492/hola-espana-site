import { cn } from '@/lib/utils/cn';
import { StarIcon, SunIcon, FlowerIcon } from '@/components/Icons';
import PackageCard from './PackageCard';
import type { Tier, TierPresentation } from './PackageCard';

// TODO: replace SunIcon with the new rosette icon for Essential Guidance when the asset is available
const TIER_PRESENTATION: TierPresentation[] = [
  {
    gradient: 'linear-gradient(to bottom, #E6C76A55 0%, #F5EBDF 35%, #F5EBDF 80%, #E6C76A20 110%)',
    borderColor: '#AF907C',
    Icon: FlowerIcon,
    iconClassName: 'text-[#d0a97c] top-4 right-2 w-44 h-44',
  },
  {
    gradient: 'linear-gradient(to bottom, #3E567455 0%, #F5EBDF 35%, #F5EBDF 80%, #3E567420 110%)',
    borderColor: '#AF907C',
    Icon: SunIcon,
    iconClassName: 'text-ocean-alt -top-2 right-4 w-72 h-72',
  },
  {
    gradient: 'linear-gradient(to bottom, #C4755655 0%, #F5EBDF 35%, #F5EBDF 80%, #C4755620 110%)',
    borderColor: '#AF907C',
    Icon: StarIcon,
    iconClassName: 'text-terracotta top-4 right-2 w-40 h-40',
  },
];

export default function PackageCarousel({ tiers }: { tiers: Tier[] }) {
  const count = tiers.length;
  const middleIndex = Math.floor(count / 2);

  return (
    <div className="flex flex-col items-stretch gap-6 md:flex-row">
      {tiers.map((tier, i) => {
        const isMiddle = i === middleIndex;

        return (
          <div key={tier.name} className={cn('w-full', isMiddle ? 'md:flex-[1.2]' : 'md:flex-1')}>
            <PackageCard tier={tier} presentation={TIER_PRESENTATION[i % TIER_PRESENTATION.length]} expanded={isMiddle} />
          </div>
        );
      })}
    </div>
  );
}
