'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface UseMeasuredAccordionOptions<T> {
  defaultOpenId?: T | null;
  itemCount?: number;
}

interface UseMeasuredAccordionReturn<T> {
  activeId: T | null;
  toggle: (id: T) => void;
  isOpen: (id: T) => boolean;
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  measureRef: React.RefObject<HTMLDivElement | null>;
  minHeight: number;
}

export function useMeasuredAccordion<T>({ defaultOpenId = null, itemCount }: UseMeasuredAccordionOptions<T> = {}): UseMeasuredAccordionReturn<T> {
  const [activeId, setActiveId] = useState<T | null>(defaultOpenId);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [minHeight, setMinHeight] = useState<number>(0);

  const toggle = useCallback((id: T) => {
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  const isOpen = useCallback((id: T) => activeId === id, [activeId]);

  useEffect(() => {
    const measure = () => {
      if (!measureRef.current || !wrapperRef.current) return;

      const children = Array.from(measureRef.current.children) as HTMLElement[];
      const maxChildHeight = children.reduce((max, child) => Math.max(max, child.scrollHeight), 0);

      // Temporarily clear minHeight so we measure the natural collapsed height,
      // not the previously applied minHeight.
      const previousMinHeight = wrapperRef.current.style.minHeight;
      wrapperRef.current.style.minHeight = '0px';
      const collapsedHeight = wrapperRef.current.offsetHeight;
      wrapperRef.current.style.minHeight = previousMinHeight;

      setMinHeight(collapsedHeight + maxChildHeight);
    };

    measure();

    const observer = new ResizeObserver(measure);
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [itemCount]);

  return { activeId, toggle, isOpen, wrapperRef, measureRef, minHeight };
}
