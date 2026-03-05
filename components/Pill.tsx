import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface PillProps {
  children: ReactNode;
  className?: string;
}

export default function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        'relative inline-block -translate-y-0.5 rounded-md px-3 py-1 text-[10px] tracking-widest uppercase',
        'before:bg-sand before:absolute before:inset-0 before:z-0 before:rounded-md',
        'after:absolute after:inset-0 after:-z-1 after:h-[calc(100%+4px)] after:w-[calc(100%+4px)] after:-translate-x-1 after:rounded-md after:bg-[#D0C5B9] after:p-1',
        className
      )}
    >
      <span className="relative z-1 text-black">{children}</span>
    </span>
  );
}
