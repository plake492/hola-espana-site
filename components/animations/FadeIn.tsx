'use client';

import { useInView, animated, type SpringConfig } from '@react-spring/web';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  rootMargin?: string;
  className?: string;
  config?: SpringConfig;
}

/**
 * FadeIn animation component using React Spring
 * Triggers animation when element enters viewport
 *
 * @param children - Content to animate
 * @param delay - Delay before animation starts (ms)
 * @param duration - Animation duration (ms)
 * @param direction - Direction to slide from
 * @param distance - Distance to slide (px)
 * @param rootMargin - Margin around the root (e.g., '-40% 0%')
 * @param className - Additional CSS classes
 * @param config - Custom spring configuration
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 380,
  direction = 'up',
  distance = 25,
  rootMargin = '-40% 0%',
  className,
  config,
}: FadeInProps) {
  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      default:
        return {};
    }
  };

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        ...getInitialTransform(),
      },
      to: {
        opacity: 1,
        y: 0,
        x: 0,
      },

      config: config || {
        duration,
        mass: 1,
        tension: 120,
        friction: 14,
      },
    }),
    {
      rootMargin,
      once: true,
    }
  );

  return (
    <animated.div ref={ref} style={springs} className={`${className} py-48`}>
      {children}
    </animated.div>
  );
}
