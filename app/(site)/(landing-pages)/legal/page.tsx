import React from 'react';
import HeaderFull from '@/components/HeaderFull';
import InternalPageLinks from '@/components/InternalPageLinks';
import LegalSection from '@/components/legal/LegalSection';
import legalCopy from '@/lib/siteCopy/legalCopy.json';

export default function Legal() {
  return (
    <>
      <HeaderFull copy={legalCopy.hero.title} />
      <InternalPageLinks
        heading={legalCopy.intro.heading}
        description={legalCopy.intro.subheading}
        onThisPageLabel={legalCopy.intro.cta.heading}
        links={legalCopy.jumpLinks}
        icon={{
          icon: 'sun',
          color: 'sand',
          className: 'pointer-events-none absolute top-1/2 right-0 w-[300px] -translate-y-1/2 opacity-20 md:w-[420px] md:opacity-25',
        }}
      />
      <LegalSection sectionKey="visaPathways" />
      <LegalSection sectionKey="taxes" />
      <LegalSection sectionKey="businessLaws" />
    </>
  );
}
