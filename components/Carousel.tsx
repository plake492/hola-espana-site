'use client';

import { useCallback, useEffect, useState } from 'react';
// import { useDrag } from '@use-gesture/react'; // TODO: re-enable for drag-to-scroll
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

type Review = {
  name: string;
  review: string;
  image: string;
};

interface CarouselProps {
  reviews: Review[];
}

const GAP = 24;
const ACTIVE_HEIGHT = 440;
const INACTIVE_HEIGHT = 340;
const ACTIVE_LIFT = 40;
const TRANSITION = 'width 600ms cubic-bezier(0.33, 1, 0.68, 1), transform 600ms cubic-bezier(0.33, 1, 0.68, 1)';

function getResponsiveSizes(vw: number) {
  return {
    activeWidth: Math.min(Math.max(vw * 0.38, 340), 520),
    inactiveWidth: Math.min(Math.max(vw * 0.24, 240), 350),
    leftOffset: Math.min(Math.max(vw * 0.12, 80), 180),
  };
}

function calcTrackX(activeIndex: number, inactiveWidth: number, leftOffset: number) {
  let cardStart = 0;
  for (let i = 0; i < activeIndex; i++) {
    cardStart += inactiveWidth + GAP;
  }
  return leftOffset - cardStart;
}

export default function Carousel({ reviews }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [sizes, setSizes] = useState(() => getResponsiveSizes(1200));

  const { activeWidth, inactiveWidth, leftOffset } = sizes;

  useEffect(() => {
    const update = () => setSizes(getResponsiveSizes(window.innerWidth));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const trackX = calcTrackX(current, inactiveWidth, leftOffset);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(Math.max(0, Math.min(index, reviews.length - 1)));
    },
    [reviews.length]
  );

  return (
    <div className="overflow-hidden select-none">
      <div className="overflow-hidden pt-8" style={{ minHeight: ACTIVE_HEIGHT + ACTIVE_LIFT }}>
        <div
          className="flex items-end"
          style={{
            transform: `translateX(${trackX}px)`,
            gap: GAP,
            transition: 'transform 600ms cubic-bezier(0.33, 1, 0.68, 1)',
          }}
        >
          {reviews.map((review, i) => {
            const isActive = current === i;
            return (
              <div
                key={i}
                className="shrink-0"
                style={{
                  width: isActive ? activeWidth : inactiveWidth,
                  height: isActive ? ACTIVE_HEIGHT : INACTIVE_HEIGHT,
                  transform: `translateY(${isActive ? -ACTIVE_LIFT : 0}px)`,
                  transition: TRANSITION,
                }}
              >
                <ReviewCard {...review} isActive={isActive} onClick={() => goTo(i)} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Indicators */}
      <div className="relative flex gap-2" style={{ paddingLeft: leftOffset, marginTop: -(ACTIVE_LIFT / 2 - 8) }}>
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={cn('py-2 transition-all duration-500 ease-out', current === i ? 'w-12' : 'w-7')}
            aria-label={`Go to review ${i + 1}`}
          >
            <div className={cn('h-1 w-full rounded-full', current === i ? 'bg-ocean' : 'bg-ocean-alt')} />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Card ────────────────────────────────────────── */

interface ReviewCardProps extends Review {
  isActive: boolean;
  onClick: () => void;
}

function ReviewCard({ name, review, image, isActive, onClick }: ReviewCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'relative flex h-full cursor-pointer flex-col pt-6 pb-8 transition-colors duration-500 ease-out',
        isActive ? 'bg-ocean text-white' : 'bg-ocean-alt text-black'
      )}
    >
      {/* Image + decorative line */}
      <div className="flex items-start">
        <div className="pointer-events-none relative z-10 -ml-5 aspect-square w-28 shrink-0 overflow-hidden border-4 border-white">
          <Image src={image} width={200} height={200} alt={name} className="h-full w-full object-cover" />
        </div>
        <div className="mt-6 ml-4 flex flex-col gap-2">
          <div className={cn('h-0.5 w-20 transition-colors duration-500', isActive ? 'bg-white' : 'bg-black')} />
        </div>
      </div>

      {/* Quote placeholder — will be replaced with provided asset */}
      <div className="absolute top-20 right-6 font-serif text-5xl leading-none opacity-30 select-none">&ldquo;</div>

      {/* Review text */}
      <div className="flex-1 overflow-hidden px-8 pt-6">
        <p className={cn('text-sm leading-relaxed', isActive ? 'line-clamp-6' : 'line-clamp-4')}>{review}</p>
      </div>

      {/* Name */}
      <div className="flex shrink-0 items-center px-8 pt-4">
        <div className={cn('h-0.5 shrink-0 transition-all duration-500 ease-out', isActive ? 'mr-4 w-20 bg-white' : 'mr-0 w-0')} />
        <p className="font-aegean text-xs">{name}</p>
      </div>
    </div>
  );
}
