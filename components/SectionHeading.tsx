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
}: SectionHeadingProps) {
  const Tag = as || 'h3';

  return (
    <Tag className={cn('flex flex-col', textSize, className)}>
      {lines.map((line, i) => {
        const offsetClass = indent && i > 0 ? offset : undefined;

        if (typeof line === 'string') {
          return (
            <span key={i} className={offsetClass}>
              {line}
            </span>
          );
        }

        return (
          <span key={i} className={cn('flex flex-row flex-wrap items-center gap-3', offsetClass)}>
            <span>{line.first}</span>
            <span className={cn('mb-5 h-12 w-12 rotate-70', iconColor)}>
              <StarIcon />
            </span>
            <span>{line.last}</span>
          </span>
        );
      })}
    </Tag>
  );
}
