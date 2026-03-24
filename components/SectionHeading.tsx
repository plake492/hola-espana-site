import { ElementType } from 'react';

import { StarIcon } from './Icons';
import { cn } from '@/lib/utils/cn';

type HeadingLine = string | { first: string; last: string };

interface SectionHeadingProps {
  as?: ElementType;
  lines: HeadingLine[];
  className?: string;
  textSize?: string;
  iconColor?: string;
  indent?: boolean;
  offset?: string;
}

export default function SectionHeading({
  as,
  lines,
  className,
  textSize = 'text-section-xl',
  iconColor,
  indent = true,
  offset = 'ml-(--section-heading-offset)',
}: Readonly<SectionHeadingProps>) {
  const Tag = as || 'h3';

  return (
    <Tag className={cn('flex flex-col', textSize, className)}>
      {lines.map((line, i) => {
        const offsetClass = indent && i > 0 ? offset : undefined;

        if (typeof line === 'string') {
          return (
            <span key={line + i} className={offsetClass}>
              {line}
            </span>
          );
        }

        return (
          <span key={JSON.stringify(line)} className={cn('flex flex-row flex-wrap items-center md:gap-3', offsetClass)}>
            <span className="">{line.first}</span>
            <span className={cn('mb-5 h-[25px] w-[25px] rotate-70 md:h-12 md:w-12', iconColor)}>
              <StarIcon />
            </span>
            <span>{line.last}</span>
          </span>
        );
      })}
    </Tag>
  );
}
