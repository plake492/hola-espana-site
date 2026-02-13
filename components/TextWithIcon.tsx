import { ElementType } from 'react';
import { StarIcon } from './Icons';

interface TextWithIconProps {
  as?: ElementType;
  className?: string;
  iconColor?: string;
  text: { first: string; last: string };
}

export default function TextWithIcon({ text, iconColor, className, as }: TextWithIconProps) {
  const { first, last } = text;
  const Tag = as || 'h3';

  return (
    <Tag className={`${className} flex flex-row items-center gap-3 text-5xl`}>
      <span>{first}</span>
      <span className={`${iconColor} mb-5 h-12 w-12 rotate-70`}>
        <StarIcon />
      </span>
      <span>{last}</span>
    </Tag>
  );
}
