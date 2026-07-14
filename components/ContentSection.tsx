'use client';

import { cn } from '@/lib/utils/cn';
import { StarIcon, SunIcon } from './Icons';
import RichText, { RichTextSegment } from './RichText';

export type ContentBlock =
  | { type: 'paragraph'; text: string; italic?: boolean }
  | { type: 'list'; title?: string; items: string[]; style?: 'bullet' | 'number' }
  | { type: 'note'; text: string }
  | { type: 'footer'; segments: RichTextSegment[] };

export interface ContentSectionIconProps {
  icon?: 'sun' | 'star';
  color?: string;
  className?: string;
}

interface ContentSectionProps {
  id?: string;
  title: string;
  blocks: ContentBlock[];
  hasBackground?: boolean;
  backgroundColor?: string;
  icon?: ContentSectionIconProps;
  showHorizontalLine?: boolean;
  className?: string;
}

export default function ContentSection({
  id,
  title,
  blocks,
  hasBackground = false,
  backgroundColor,
  icon,
  showHorizontalLine = true,
  className,
}: ContentSectionProps) {
  const icons = {
    sun: SunIcon,
    star: StarIcon,
  };

  const IconComponent = icon?.icon ? icons[icon.icon] : null;
  const iconWrapperClassName = icon?.className || 'pointer-events-none absolute top-1/2 right-0 w-[200px] -translate-y-1/2 opacity-15 md:w-[300px]';
  const iconColorClass = icon?.icon === 'star' && icon?.color ? `text-${icon.color}` : '';
  const iconColorProp = icon?.icon === 'sun' ? { color: (icon?.color as 'sand' | 'ocean') || 'sand' } : {};

  const backgroundStyle = backgroundColor ? { background: backgroundColor } : hasBackground ? { background: '#fcf7f2' } : undefined;

  return (
    <section id={id} className={cn('relative px-6 pt-8 md:px-12', className)}>
      <div className={cn('relative z-10 mx-auto max-w-6xl px-6 py-12 md:px-12', hasBackground ? 'py-16 md:py-22' : 'py-12 md:py-12')} style={backgroundStyle}>
        {IconComponent && (
          <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 w-screen -translate-x-1/2 -translate-y-1/2">
            <div className={cn(iconWrapperClassName, iconColorClass)}>
              <IconComponent {...iconColorProp} />
            </div>
          </div>
        )}

        <h2 className="font-aegean relative z-10 mb-10 text-xl uppercase md:mb-14">{title}</h2>

        <div className="relative z-10 flex max-w-4xl flex-col gap-8 md:ml-12">
          {blocks.map((block, index) => {
            const key = `${block.type}-${index}`;

            if (block.type === 'paragraph') {
              return (
                <p key={key} className={cn('text-md text-color-dark', block.italic && 'italic')}>
                  {block.text}
                </p>
              );
            }

            if (block.type === 'list') {
              const ListTag = block.style === 'number' ? 'ol' : 'ul';
              return (
                <div key={key} className="flex flex-col gap-3">
                  {block.title && <p className={cn('text-md text-color-dark font-semibold italic')}>{block.title}</p>}
                  <ListTag className="text-md text-color-dark flex flex-col gap-2 italic">
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex} className={cn('pl-2', block.style === 'number' ? 'ml-5 list-decimal' : 'ml-5 list-disc')}>
                        {item}
                      </li>
                    ))}
                  </ListTag>
                </div>
              );
            }

            if (block.type === 'note') {
              return (
                <p key={key} className="text-md text-color-dark">
                  {block.text}
                </p>
              );
            }

            if (block.type === 'footer') {
              return <RichText key={key} segments={block.segments} className="text-md text-color-dark italic" />;
            }

            return null;
          })}
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-6xl">
        {showHorizontalLine && <hr className="border-sand-dark mt-8 border-t" style={{ marginLeft: 'calc(-50vw + 50%)' }} />}
      </div>
    </section>
  );
}
