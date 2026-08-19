'use client';

import Script from 'next/script';
import { calendar as copy } from '@/lib/siteCopy/contactCopy.json';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

const CALENDLY_URL =
  'https://calendly.com/plake-dev/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=3e5674&text_color=ffffff&primary_color=ede2d7';

export default function CalendarBlock() {
  const openCalendly = () => {
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
  };

  return (
    <>
      {/* Calendly popup CSS */}
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />

      <div className="bg-ocean-alt flex flex-col items-center gap-6 px-8 py-10 text-white">
        <p className="text-center font-serif text-lg leading-snug">{copy.heading}</p>

        <button
          onClick={openCalendly}
          className="bg-sand font-aegean relative cursor-pointer rounded-sm px-8 py-3 text-sm tracking-widest text-black shadow-[4px_4px_0px_0px_#d0c5b9] transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
        >
          Book a Call
        </button>

        <p className="text-center font-serif text-sm italic opacity-90">{copy.disclaimer}</p>
      </div>

      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </>
  );
}
