'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { animated, useSpring, useSprings, easings } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
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
const ANIMATION_CONFIG = { duration: 600, easing: easings.easeOutCubic };

function getResponsiveSizes(vw: number) {
  return {
    activeWidth: Math.min(Math.max(vw * 0.38, 340), 520),
    inactiveWidth: Math.min(Math.max(vw * 0.22, 220), 340),
    leftOffset: Math.min(Math.max(vw * 0.12, 80), 180),
  };
}

function calcTrackX(
  activeIndex: number,
  activeWidth: number,
  inactiveWidth: number,
  leftOffset: number,
) {
  let cardStart = 0;
  for (let i = 0; i < activeIndex; i++) {
    cardStart += inactiveWidth + GAP;
  }
  return leftOffset - cardStart;
}

export default function Carousel({ reviews }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [sizes, setSizes] = useState(() => getResponsiveSizes(1200));
  const currentRef = useRef(current);
  currentRef.current = current;

  const { activeWidth, inactiveWidth, leftOffset } = sizes;

  useEffect(() => {
    const update = () => setSizes(getResponsiveSizes(window.innerWidth));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const [trackStyle, trackApi] = useSpring(() => ({
    x: calcTrackX(0, activeWidth, inactiveWidth, leftOffset),
    config: ANIMATION_CONFIG,
  }));

  const [cardStyles, cardApi] = useSprings(reviews.length, (i) => ({
    w: i === 0 ? activeWidth : inactiveWidth,
    h: i === 0 ? ACTIVE_HEIGHT : INACTIVE_HEIGHT,
    config: ANIMATION_CONFIG,
  }));

  const goTo = useCallback(
    (index: number) => {
      const target = Math.max(0, Math.min(index, reviews.length - 1));
      setCurrent(target);
      currentRef.current = target;
      trackApi.start({
        x: calcTrackX(target, activeWidth, inactiveWidth, leftOffset),
        config: ANIMATION_CONFIG,
      });
      cardApi.start((i) => ({
        w: i === target ? activeWidth : inactiveWidth,
        h: i === target ? ACTIVE_HEIGHT : INACTIVE_HEIGHT,
        config: ANIMATION_CONFIG,
      }));
    },
    [activeWidth, inactiveWidth, leftOffset, reviews.length, trackApi, cardApi],
  );

  // Re-sync on resize
  useEffect(() => {
    trackApi.start({
      x: calcTrackX(current, activeWidth, inactiveWidth, leftOffset),
      immediate: true,
    });
    cardApi.start((i) => ({
      w: i === current ? activeWidth : inactiveWidth,
      h: i === current ? ACTIVE_HEIGHT : INACTIVE_HEIGHT,
      immediate: true,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizes]);

  const bind = useDrag(
    ({ active, movement: [mx], velocity: [vx], direction: [dx] }) => {
      if (active) {
        const baseX = calcTrackX(currentRef.current, activeWidth, inactiveWidth, leftOffset);
        trackApi.start({ x: baseX + mx, immediate: true });
      } else {
        const projected = mx + vx * dx * 250;
        let target = currentRef.current;
        if (projected < -60) target += 1;
        else if (projected > 60) target -= 1;
        goTo(target);
      }
    },
    { axis: 'x', filterTaps: true },
  );

  return (
    <div className="select-none">
      <div
        className="cursor-grab overflow-hidden py-8 active:cursor-grabbing"
        {...bind()}
        style={{ touchAction: 'pan-y' }}
      >
        <animated.div className="flex items-end" style={{ x: trackStyle.x, gap: GAP }}>
          {reviews.map((review, i) => (
            <animated.div
              key={i}
              className="shrink-0"
              style={{ width: cardStyles[i].w, height: cardStyles[i].h }}
            >
              <ReviewCard {...review} isActive={current === i} onClick={() => goTo(i)} />
            </animated.div>
          ))}
        </animated.div>
      </div>

      {/* Indicators */}
      <div className="flex gap-3 pt-6" style={{ paddingLeft: leftOffset }}>
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={cn(
              'h-1 rounded-full transition-all duration-500 ease-out',
              current === i ? 'w-12 bg-ocean' : 'w-7 bg-ocean-alt',
            )}
            aria-label={`Go to review ${i + 1}`}
          />
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
        isActive ? 'bg-ocean text-white' : 'bg-ocean-alt text-black',
      )}
    >
      {/* Image + decorative line */}
      <div className="flex items-start">
        <div className="relative -ml-5 z-10 aspect-square w-28 shrink-0 overflow-hidden border-4 border-white">
          <Image src={image} width={200} height={200} alt={name} className="h-full w-full object-cover" />
        </div>
        <div className="ml-4 mt-6 flex flex-col gap-2">
          <div
            className={cn(
              'h-[2px] w-20 transition-colors duration-500',
              isActive ? 'bg-white' : 'bg-black',
            )}
          />
        </div>
      </div>

      {/* Quote placeholder — will be replaced with provided asset */}
      <div className="absolute top-20 right-6 font-serif text-5xl leading-none opacity-30 select-none">
        &ldquo;
      </div>

      {/* Review text */}
      <div className="flex-1 overflow-hidden px-8 pt-6">
        <p className="text-sm leading-relaxed">{review}</p>
      </div>

      {/* Name */}
      <div className="flex items-center gap-4 px-8 pt-4">
        <div
          className={cn(
            'h-[2px] shrink-0 transition-all duration-500 ease-out',
            isActive ? 'w-20 bg-white' : 'w-0',
          )}
        />
        <p className="font-aegean text-sm whitespace-nowrap">{name}</p>
      </div>
    </div>
  );
}
