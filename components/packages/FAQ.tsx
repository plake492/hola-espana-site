'use client';

import { useState } from 'react';

import Container from '../Container';
import SectionHeading from '../SectionHeading';
import { cn } from '@/lib/utils/cn';
import { faq as copy } from '@/lib/siteCopy/packageCopy.json';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <Container className="bg-white px-4 py-16 md:px-8 md:py-24">
      <SectionHeading lines={copy.header} className="mb-12 uppercase md:mb-16" textSize="text-section-md" iconColor="text-sand-dark" />

      <div className="mx-auto max-w-3xl">
        {copy.items.map((item, i) => (
          <div key={i} className="border-sand border-b">
            <button onClick={() => toggle(i)} className="flex w-full cursor-pointer items-center justify-between py-5 text-left">
              <span className="text-sm tracking-widest uppercase">{item.question}</span>
              <span className="ml-4 shrink-0 text-lg">{openIndex === i ? '×' : '+'}</span>
            </button>
            <div className={cn('overflow-hidden transition-all duration-300', openIndex === i ? 'max-h-96 pb-6' : 'max-h-0')}>
              <p className="text-color-dark text-sm">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
