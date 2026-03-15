import React from 'react';

export default async function LandingPageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="mt-28 min-h-full md:mt-[152px]">{children}</div>;
}
