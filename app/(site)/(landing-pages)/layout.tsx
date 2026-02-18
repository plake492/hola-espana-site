import React from 'react';
import { HEADER_HEIGHT } from '@/lib/constants';

export default function LandingPageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className={`mt-[${HEADER_HEIGHT}px] bg-default min-h-full pt-16`}>{children}</div>;
}
