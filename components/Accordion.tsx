'use client';

import { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useMeasuredAccordion } from '@/hooks/useMeasuredAccordion';

interface AccordionProps {
  content: Record<string, string>[];
}

export default function Accordion({ content }: AccordionProps) {
  const items = content;

  const { toggle, isOpen, wrapperRef, measureRef, minHeight } = useMeasuredAccordion<number>({
    defaultOpenId: 0,
    itemCount: items.length,
  });

  return (
    <div ref={wrapperRef} className="text-light relative" style={{ minHeight }}>
      {/* Hidden measurement container — renders all content at natural height to find tallest */}
      <div ref={measureRef} aria-hidden className="pointer-events-none invisible absolute -z-10 w-full">
        {items.map(({ content }, i) => (
          <div key={i} className="text-md pt-1 pb-4">
            <div className="mb-3 h-0.5 w-full bg-white" />
            {content}
            <div className="mt-4 h-0.5 w-full bg-white" />
          </div>
        ))}
      </div>

      {items.map(({ title, content }, id) => (
        <Row key={id} title={title} content={content} id={id} isActive={isOpen(id)} onToggle={toggle} />
      ))}
    </div>
  );
}

const Chevron = () => {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="gird place-center -mt-2 -ml-3 size-10">
      <path
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
        fillRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
};

interface RowProps {
  title: string;
  content: string;
  id: number;
  isActive: boolean;
  onToggle: (id: number) => void;
}

const Row = ({ title, content, id, isActive, onToggle }: RowProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(Math.ceil(contentRef.current.getBoundingClientRect().height));
    }
  }, [content]);

  // Skip animation on first render for the initially-active row
  const immediate = !hasAnimated.current && isActive;
  useEffect(() => {
    if (contentHeight > 0) hasAnimated.current = true;
  }, [contentHeight]);

  const springStyles = useSpring({
    height: isActive ? contentHeight : 0,
    opacity: isActive ? 1 : 0,
    config: { tension: 250, friction: 28 },
    immediate,
  });

  const borderSpring = useSpring({
    opacity: isActive ? 1 : 0,
    scaleX: isActive ? 1 : 0,
    config: { tension: 250, friction: 28 },
    immediate,
  });

  const chevronSpring = useSpring({
    transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
    config: { tension: 260, friction: 24 },
    immediate,
  });

  return (
    <div data-accordion-row>
      <button
        type="button"
        className="align-center relative flex w-full cursor-pointer justify-between py-3"
        onClick={() => onToggle(id)}
        aria-expanded={isActive}
      >
        <h5 className="text-start font-serif text-lg text-white italic">{title}</h5>
        <animated.div style={chevronSpring} className="h-auto w-5">
          <Chevron />
        </animated.div>
      </button>
      <animated.div style={{ height: springStyles.height, opacity: springStyles.opacity, overflow: 'hidden' }}>
        <div ref={contentRef} className="pt-1 pb-4 text-sm">
          <animated.div
            style={{ opacity: borderSpring.opacity, transform: borderSpring.scaleX.to((s) => `scaleX(${s})`) }}
            className="mb-3 h-0.5 w-full origin-left bg-white"
          />
          <p className="text-light text-base/7">{content}</p>
          <animated.div
            style={{ opacity: borderSpring.opacity, transform: borderSpring.scaleX.to((s) => `scaleX(${s})`) }}
            className="mt-4 h-0.5 w-full origin-left bg-white"
          />
        </div>
      </animated.div>
    </div>
  );
};
