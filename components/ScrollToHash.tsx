'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Next.js scrolls to the hash target at commit time, before post-hydration
// layout shifts (accordion min-height measurement, font loading) move the
// content. Re-run the scroll once layout has settled so deep links from
// other pages land at the same position as in-page anchor clicks.
export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    let cancelled = false;

    const scroll = () => {
      if (cancelled) return;
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      target?.scrollIntoView();
    };

    document.fonts.ready.then(() => {
      requestAnimationFrame(() => requestAnimationFrame(scroll));
    });

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
