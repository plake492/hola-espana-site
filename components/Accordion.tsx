'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface AccordionProps {
  content: Record<string, string>[];
}

export default function Accordion({ content }: AccordionProps) {
  const [activeId, setActiveId] = useState<number | null>(0);
  const measureRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback((id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  const items = content;

  const [minHeight, setMinHeight] = useState<number>(0);

  useEffect(() => {
    const measure = () => {
      if (!measureRef.current || !wrapperRef.current) return;
      // Find the tallest content panel
      const children = measureRef.current.children;
      let max = 0;
      for (let i = 0; i < children.length; i++) {
        max = Math.max(max, children[i].scrollHeight);
      }
      // Collapsed height = sum of all header button heights (borders are now inside the animated content)
      const buttons = wrapperRef.current.querySelectorAll<HTMLElement>('[data-accordion-row] button');
      let collapsedHeight = 0;
      buttons.forEach((button) => {
        collapsedHeight += button.offsetHeight;
      });

      setMinHeight(collapsedHeight + max);
    };

    measure();

    const observer = new ResizeObserver(measure);
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [items.length]);

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
        <Row key={id} title={title} content={content} id={id} isActive={activeId === id} onToggle={handleToggle} />
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

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(Math.ceil(contentRef.current.getBoundingClientRect().height));
    }
  }, [content]);

  const springStyles = useSpring({
    height: isActive ? contentHeight : 0,
    opacity: isActive ? 1 : 0,
    config: { tension: 250, friction: 28 },
  });

  const borderSpring = useSpring({
    opacity: isActive ? 1 : 0,
    scaleX: isActive ? 1 : 0,
    config: { tension: 250, friction: 28 },
  });

  const chevronSpring = useSpring({
    transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
    config: { tension: 260, friction: 24 },
  });

  return (
    <div data-accordion-row>
      <button
        type="button"
        className="align-center relative flex w-full cursor-pointer justify-between py-3"
        onClick={() => onToggle(id)}
        aria-expanded={isActive}
      >
        <h5 className="text-start font-serif text-lg italic">{title}</h5>
        <animated.div style={chevronSpring} className="h-auto w-5">
          <Chevron />
        </animated.div>
      </button>
      <animated.div style={{ height: springStyles.height, opacity: springStyles.opacity, overflow: 'hidden' }}>
        <div ref={contentRef} className="text-md pt-1 pb-4">
          <animated.div
            style={{ opacity: borderSpring.opacity, transform: borderSpring.scaleX.to((s) => `scaleX(${s})`) }}
            className="mb-3 h-0.5 w-full origin-left bg-white"
          />
          {content}
          <animated.div
            style={{ opacity: borderSpring.opacity, transform: borderSpring.scaleX.to((s) => `scaleX(${s})`) }}
            className="mt-4 h-0.5 w-full origin-left bg-white"
          />
        </div>
      </animated.div>
    </div>
  );
};
