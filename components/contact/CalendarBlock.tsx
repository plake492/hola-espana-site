import { calendar as copy } from '@/lib/siteCopy/contactCopy.json';
import Script from 'next/script';

export default function CalendarBlock() {
  return (
    <div className="bg-ocean-alt flex flex-col text-white md:p-4">
      <div className="grid grid-cols-[175px_auto] gap-2 py-8">
        <div className="flex h-full flex-col justify-between">
          <p className="text-md text-center font-serif leading-snug">{copy.heading}</p>
          <p className="mb-16 text-center font-serif text-sm italic opacity-90">{copy.disclaimer}</p>
        </div>

        <div className="h-[500px] max-h-[500px] flex-1 gap-4 overflow-hidden">
          <div
            className="calendly-inline-widget"
            data-resize
            data-url="https://calendly.com/plake-dev/30min?hide_event_type_details=1&page_height=300px&hide_gdpr_banner=1&background_color=c47556&text_color=ffffff&primary_color=ede2d7"
            style={{ minWidth: '320px', height: '500px' }}
          ></div>
        </div>
        <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
      </div>
    </div>
  );
}
