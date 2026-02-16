'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface AccordionProps {
  content: Record<string, string>[];
}

export default function Accordion({ content }: AccordionProps) {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = useCallback((id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="text-light">
      {content.map(({ title, content }, id) => (
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
      setContentHeight(contentRef.current.scrollHeight);
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
    config: { tension: 300, friction: 24 },
  });

  return (
    <div>
      <button
        type="button"
        className="align-center relative flex w-full cursor-pointer justify-between py-3"
        onClick={() => onToggle(id)}
        aria-expanded={isActive}
      >
        <h5 className="font-serif text-lg italic">{title}</h5>
        <animated.div style={chevronSpring} className="h-auto w-5">
          <Chevron />
        </animated.div>
      </button>
      <animated.div style={{ height: springStyles.height, opacity: springStyles.opacity, overflow: 'hidden' }}>
        <div ref={contentRef} className="text-md pb-4">
          {content}
        </div>
      </animated.div>
      <animated.div
        style={{ opacity: borderSpring.opacity, transform: borderSpring.scaleX.to((s) => `scaleX(${s})`) }}
        className="h-0.5 w-full origin-left bg-white"
      />
    </div>
  );
};
