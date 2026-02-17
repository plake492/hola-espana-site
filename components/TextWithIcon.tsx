import { ElementType } from 'react';
import { StarIcon } from './Icons';

interface TextWithIconProps {
  as?: ElementType;
  className?: string;
  iconColor?: string;
  text: { first: string; last: string };
  textSize?: string;
}

export default function TextWithIcon({ text, iconColor, className, as, textSize = 'text-5xl' }: TextWithIconProps) {
  const { first, last } = text;
  const Tag = as || 'h3';

  return (
    <Tag className={`${className} ${textSize} flex flex-row flex-wrap items-center gap-3`}>
      <span>{first}</span>
      <span className={`${iconColor} mb-5 h-12 w-12 rotate-70`}>
        <StarIcon />
      </span>
      <span>{last}</span>
    </Tag>
  );
}
