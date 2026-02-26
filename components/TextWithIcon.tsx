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
    <Tag className={`${className} ${textSize} flex flex-row flex-wrap items-center md:gap-3`}>
      <span>{first}</span>
      <span className={`${iconColor} mr-1.5 mb-5 ml-1.5 h-[25px] w-[25px] rotate-70 md:mr-0 md:ml-0 md:h-12 md:w-12`}>
        <StarIcon />
      </span>
      <span>{last}</span>
    </Tag>
  );
}
