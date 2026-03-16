import { calendar as copy } from '@/lib/siteCopy/contactCopy.json';

export default function CalendarBlock() {
  return (
    <div className="bg-ocean-alt flex flex-col gap-4 rounded-sm p-5 text-white">
      <div className="flex items-center gap-4">
        <p className="flex-1 text-center font-serif text-lg leading-snug">{copy.heading}</p>
        <iframe src={'https://calendly.com/plake-dev/30min?back=1&month=2026-03'} style={{ width: '100%', minWidth: '320px', height: '400px' }}></iframe>
      </div>

      <p className="text-center font-serif text-sm italic opacity-90">{copy.disclaimer}</p>
    </div>
  );
}
