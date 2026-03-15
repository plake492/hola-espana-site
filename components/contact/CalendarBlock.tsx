import { calendar as copy } from '@/lib/siteCopy/contactCopy.json';

const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] as const;
const WEEKEND_DAYS = new Set(['Sa', 'Su']);

// April 2026 — starts Wednesday; adjust `startOffset` (0=Mo) if month changes
const MONTH_LABEL = 'April';
const START_OFFSET = 2; // Wednesday = index 2 (0-based Mon–Sun)
const TOTAL_DAYS = 30;

function buildCalendarWeeks(startOffset: number, totalDays: number): (number | null)[][] {
  const cells: (number | null)[] = [
    ...Array(startOffset).fill(null),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
  ];
  // Pad to full 7-column rows
  while (cells.length % 7 !== 0) cells.push(null);
  const weeks: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  return weeks;
}

const WEEKS = buildCalendarWeeks(START_OFFSET, TOTAL_DAYS);

export default function CalendarBlock() {
  return (
    <div className="flex flex-col gap-4 rounded-sm bg-ocean-alt p-5 text-white">
      <div className="flex items-center gap-4">
        {/* Left: label */}
        <p className="flex-1 text-center font-serif text-lg leading-snug">
          {copy.heading}
        </p>

        {/* Right: mini calendar */}
        <div className="w-[215px] shrink-0 overflow-hidden rounded-sm">
          {/* Header */}
          <div className="flex items-center justify-center bg-ocean py-1">
            <span className="font-serif text-xs text-white">{MONTH_LABEL}</span>
          </div>

          {/* Grid body */}
          <div className="bg-default px-1 py-1.5">
            {/* Day labels */}
            <div className="mb-0.5 grid grid-cols-7">
              {DAYS.map((d) => (
                <div
                  key={d}
                  className={`flex h-6 w-6 items-center justify-center text-[10px] font-normal ${WEEKEND_DAYS.has(d) ? 'text-ocean' : 'text-black'}`}
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Date rows */}
            {WEEKS.map((week, wi) => (
              <div key={wi} className="grid grid-cols-7">
                {week.map((day, di) => (
                  <div
                    key={di}
                    className={`flex h-6 w-6 items-center justify-center rounded text-[10px] ${
                      day === null
                        ? ''
                        : di >= 5
                          ? 'text-ocean'
                          : 'text-black'
                    }`}
                  >
                    {day ?? ''}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-center font-serif text-sm italic opacity-90">
        {copy.disclaimer}
      </p>
    </div>
  );
}
