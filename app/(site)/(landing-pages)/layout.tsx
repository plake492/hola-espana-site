import React from 'react';

export default async function LandingPageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="min-h-full pt-28 md:pt-[152px]">{children}</div>;
}
