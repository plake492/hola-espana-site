import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-accent-purple mx-auto w-full gap-4 border-r-4 border-l-4 px-2 py-24 sm:max-w-10/12 sm:px-2 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      {children}
    </section>
  );
}
