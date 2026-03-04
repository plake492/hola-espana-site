import React from 'react';
import { HEADER_HEIGHT } from '@/lib/constants';

export default async function LandingPageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`bg-default min-h-full`} style={{ marginTop: HEADER_HEIGHT + 56 }}>
      {children}
    </div>
  );
}
