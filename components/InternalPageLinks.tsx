'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { useMeasuredAccordion } from '@/hooks/useMeasuredAccordion';
import { SunIcon, StarIcon } from './Icons';

export interface InternalLink {
  label: string;
  href: string;
  children?: InternalLink[];
}

interface InternalPageLinksIconProps {
  icon?: 'sun' | 'star';
  color?: string;
  className?: string;
}

interface InternalPageLinksProps {
  id?: string;
  heading: string;
  description: string;
  onThisPageLabel?: string;
  showOnThisPage?: boolean;
  showHorizontalLine?: boolean;
  links: InternalLink[];
  backgroundColor?: string;
  icon?: InternalPageLinksIconProps;
  className?: string;
}

const Chevron = ({ open }: { open: boolean }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={cn('h-5 w-5 transition-transform duration-300', open && 'rotate-180')} aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function InternalPageLinks({
  id,
  heading,
  description,
  onThisPageLabel = 'On this page',
  showOnThisPage = true,
  showHorizontalLine = true,
  links,
  backgroundColor = 'linear-gradient(rgb(255, 255, 255), rgb(237, 226, 215))',
  icon,
  className,
}: InternalPageLinksProps) {
  const firstHasChildren = links[0]?.children && links[0].children.length > 0;
  const defaultOpenId = firstHasChildren ? `${links[0].href}-0` : null;

  const { toggle, isOpen, wrapperRef, measureRef, minHeight } = useMeasuredAccordion<string>({
    defaultOpenId,
    itemCount: links.length,
  });

  const icons = {
    sun: SunIcon,
    star: StarIcon,
  };

  const IconComponent = icon?.icon ? icons[icon.icon] : null;
  const iconWrapperClassName =
    icon?.className || 'pointer-events-none absolute top-1/2 right-0 w-[300px] -translate-y-1/2 opacity-20 md:w-[420px] md:opacity-25';
  const iconColorClass = icon?.icon === 'star' && icon?.color ? `text-${icon.color}` : '';
  const iconColorProp = icon?.icon === 'sun' ? { color: (icon?.color as 'sand' | 'ocean') || 'sand' } : {};

  return (
    <div id={id} className={cn('relative px-6 py-16 md:px-12 md:py-24', className)} style={{ background: backgroundColor }}>
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-28 max-w-6xl">
          <h2 className="font-aegean mb-6 text-xl uppercase">{heading}</h2>
          <p className="text-md text-color-dark">{description}</p>
        </div>

        {showOnThisPage && (
          <div className="mb-10">
            <div className="flex items-end justify-between gap-4">
              <h3 className="font-aegean text-lg uppercase">{onThisPageLabel}</h3>
              <span className="text-color-dark text-sm">Click to jump to section</span>
            </div>
            {showHorizontalLine && <hr className="border-sand-dark mt-4 border-t" style={{ marginLeft: 'calc(-50vw + 50%)' }} />}
          </div>
        )}

        <div ref={wrapperRef} style={{ minHeight }}>
          <nav className="max-w-4xl md:ml-12">
            <ul className="flex flex-col gap-2 font-serif">
              {links.map((link, index) => {
                const id = `${link.href}-${index}`;
                const hasChildren = link.children && link.children.length > 0;
                const open = isOpen(id);

                return (
                  <li key={id} className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <Link
                        href={link.href}
                        className="hover:text-terracotta text-md relative uppercase underline-offset-4 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-black/30"
                      >
                        {link.label}
                      </Link>

                      {hasChildren && (
                        <button
                          onClick={() => toggle(id)}
                          className="group hover:text-terracotta ml-2 cursor-pointer p-2 text-black transition-colors"
                          aria-expanded={open}
                          aria-controls={`submenu-${id}`}
                          aria-label={`${open ? 'Collapse' : 'Expand'} ${link.label} sublinks`}
                        >
                          <Chevron open={open} />
                        </button>
                      )}
                    </div>

                    {hasChildren && (
                      <ul
                        id={`submenu-${id}`}
                        className={cn(
                          'flex flex-col gap-2 overflow-hidden pl-6 transition-all duration-300',
                          open ? 'mt-3 max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        )}
                      >
                        {link.children!.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="text-color-dark hover:text-terracotta relative text-sm underline-offset-4 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-black/20"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div ref={measureRef} aria-hidden className="pointer-events-none invisible absolute -z-10 w-full">
            {links.map((link) =>
              link.children ? (
                <ul key={link.href} className="mt-3 flex flex-col gap-2 pl-6">
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <span className="text-sm">{child.label}</span>
                    </li>
                  ))}
                </ul>
              ) : null
            )}
          </div>
        </div>
      </div>

      {IconComponent && (
        <div className={cn(iconWrapperClassName, iconColorClass)}>
          <IconComponent {...iconColorProp} />
        </div>
      )}
    </div>
  );
}
