import React from 'react';
import HeaderFull from '@/components/HeaderFull';
import InternalPageLinks from '@/components/InternalPageLinks';
import LifeInSpainSection from '@/components/lifeInSpain/LifeInSpainSection';
import lifeInSpainCopy from '@/lib/siteCopy/lifeInSpainCopy.json';

export default function page() {
  return (
    <>
      <HeaderFull copy={lifeInSpainCopy.hero.title} />
      <InternalPageLinks
        heading={lifeInSpainCopy.intro.heading}
        description={lifeInSpainCopy.intro.subheading}
        onThisPageLabel={lifeInSpainCopy.intro.cta.heading}
        links={lifeInSpainCopy.jumpLinks}
        icon={{
          icon: 'sun',
          color: 'sand',
          className: 'pointer-events-none absolute top-1/2 right-0 w-[300px] -translate-y-1/2 opacity-20 md:w-[420px] md:opacity-25',
        }}
      />
      <LifeInSpainSection sectionKey="housing" />
      <LifeInSpainSection sectionKey="transportation" />
      <LifeInSpainSection sectionKey="residency" />
      <LifeInSpainSection sectionKey="banking" />
    </>
  );
}
