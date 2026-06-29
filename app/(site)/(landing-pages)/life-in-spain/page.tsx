import React from 'react';
import HeaderFull from '@/components/HeaderFull';
import lifeInSpainCopy from '@/lib/siteCopy/lifeInSpainCopy.json';

export default function page() {
  return (
    <>
      <HeaderFull copy={lifeInSpainCopy.hero.title} />
    </>
  );
}
