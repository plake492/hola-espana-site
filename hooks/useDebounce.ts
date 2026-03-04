import { useRef, useEffect, useCallback } from 'react';

export function useDebounce<TArgs extends unknown[], TReturn>(cb: (...args: TArgs) => TReturn, ms?: number): (...args: TArgs) => void {
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const cbRef = useRef(cb);

  const debounce = useCallback(
    (...args: TArgs) => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }

      timeoutIdRef.current = setTimeout(() => {
        cbRef.current(...args);
      }, ms || 300);
    },
    [ms]
  );

  useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  return debounce;
}
