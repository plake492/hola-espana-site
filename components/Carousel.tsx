'use client';

import { useCallback, useEffect, useState } from 'react';
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
const CARD_TRANSITION = 'width 600ms cubic-bezier(0.33, 1, 0.68, 1), transform 600ms cubic-bezier(0.33, 1, 0.68, 1)';
const TRACK_TRANSITION = 'transform 600ms cubic-bezier(0.33, 1, 0.68, 1)';
const ANIMATION_DURATION = 650;

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
  const totalCards = reviews.length;
  const OFFSET = totalCards;
  const extendedReviews = [...reviews, ...reviews, ...reviews];

  const [current, setCurrent] = useState(OFFSET);
  const [skipTransition, setSkipTransition] = useState(false);
  const [sizes, setSizes] = useState(() => getResponsiveSizes(1200));

  const { activeWidth, inactiveWidth, leftOffset } = sizes;

  useEffect(() => {
    const update = () => setSizes(getResponsiveSizes(window.innerWidth));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const trackX = calcTrackX(current, inactiveWidth, leftOffset);
  const normalizedCurrent = (((current - OFFSET) % totalCards) + totalCards) % totalCards;

  // Indicator click — move in the direction of the selected indicator
  const handleIndicatorClick = useCallback(
    (reviewIndex: number) => {
      const currentNorm = (((current - OFFSET) % totalCards) + totalCards) % totalCards;
      const diff = reviewIndex - currentNorm;
      if (diff === 0) return;
      setCurrent(current + diff);
    },
    [current, totalCards, OFFSET]
  );

  // After animation completes, silently reset to the middle set
  useEffect(() => {
    const middleIndex = OFFSET + normalizedCurrent;
    if (current === middleIndex) return;

    const timer = setTimeout(() => {
      setSkipTransition(true);
      setCurrent(middleIndex);
    }, ANIMATION_DURATION);

    return () => clearTimeout(timer);
  }, [current, normalizedCurrent, OFFSET]);

  // Re-enable transition after the no-transition frame paints
  useEffect(() => {
    if (!skipTransition) return;
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSkipTransition(false);
      });
    });
    return () => cancelAnimationFrame(raf);
  }, [skipTransition]);

  // Click-to-activate a specific card
  const goTo = useCallback(
    (i: number) => {
      if (i === current) return;
      setCurrent(i);
    },
    [current]
  );

  const goNext = useCallback(() => setCurrent((c) => c + 1), []);
  const goPrev = useCallback(() => setCurrent((c) => c - 1), []);

  const finalTrackX = trackX;
  const trackTransitionStyle = skipTransition ? 'none' : TRACK_TRANSITION;
  const cardTransitionStyle = skipTransition ? 'none' : CARD_TRANSITION;

  return (
    <div className="overflow-hidden select-none">
      <div
        className="overflow-hidden pt-8"
        style={{ minHeight: ACTIVE_HEIGHT + ACTIVE_LIFT }}
      >
        <div
          className="flex items-end"
          style={{
            transform: `translateX(${finalTrackX}px)`,
            gap: GAP,
            transition: trackTransitionStyle,
          }}
        >
          {extendedReviews.map((review, i) => {
            const isActive = current === i;
            return (
              <div
                key={i}
                className={cn('shrink-0', !isActive && 'cursor-pointer')}
                style={{
                  width: isActive ? activeWidth : inactiveWidth,
                  height: isActive ? ACTIVE_HEIGHT : INACTIVE_HEIGHT,
                  transform: `translateY(${isActive ? -ACTIVE_LIFT : 0}px)`,
                  transition: cardTransitionStyle,
                }}
                onClick={() => goTo(i)}
              >
                <ReviewCard {...review} isActive={isActive} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Indicators + Chevrons */}
      <div className="relative flex items-center" style={{ paddingLeft: leftOffset, marginTop: -(ACTIVE_LIFT / 2 - 8) }}>
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => handleIndicatorClick(i)}
              className={cn('cursor-pointer py-6 transition-all duration-500 ease-out', normalizedCurrent === i ? 'w-12' : 'w-7')}
              aria-label={`Go to review ${i + 1}`}
            >
              <div className={cn('h-1 w-full rounded-full', normalizedCurrent === i ? 'bg-ocean' : 'bg-ocean-alt')} />
            </button>
          ))}
        </div>

        {/* Chevron arrows — right edge aligned to active card's right border */}
        <div
          className="absolute flex items-center gap-3"
          style={{ right: `calc(100% - ${leftOffset + activeWidth}px)` }}
        >
          <button
            onClick={goPrev}
            className="flex h-10 w-10 cursor-pointer items-center justify-center text-ocean transition-colors hover:text-terracotta"
            aria-label="Previous review"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={goNext}
            className="flex h-10 w-10 cursor-pointer items-center justify-center text-ocean transition-colors hover:text-terracotta"
            aria-label="Next review"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Chevrons ────────────────────────────────────── */

function ChevronLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

/* ── Card ────────────────────────────────────────── */

interface ReviewCardProps extends Review {
  isActive: boolean;
}

function ReviewCard({ name, review, image, isActive }: ReviewCardProps) {
  return (
    <div
      className={cn(
        'relative flex h-full flex-col pt-6 pb-8 transition-colors duration-500 ease-out',
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
        <p className="font-aegean truncate text-xs">{name}</p>
      </div>
    </div>
  );
}
