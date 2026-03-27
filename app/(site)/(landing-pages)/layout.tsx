import React from 'react';
import Image from 'next/image';

export default async function LandingPageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-full pt-28 md:pt-[152px]">
      {children} <Image src="/images/mosaic-strip.webp" width={1200} height={200} alt="" className="w-full" />
    </div>
  );
}
