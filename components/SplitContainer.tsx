import { ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

interface SplitContainerProps {
  className?: string;
  header?: ReactNode;
  sectionFooter?: ReactNode;
  children: ReactNode;
  cols?: 'grid-cols-2' | 'grid-cols-3' | string;
  imgSrc: string;
  imgLeft?: boolean;
  alt?: string;
  underImageContent?: ReactNode;
}

export default function SplitContainer({
  className,
  header,
  imgSrc,
  children,
  imgLeft,
  sectionFooter,
  underImageContent,
  cols = 'grid-cols-1 md:grid-cols-2',
  alt = '',
}: SplitContainerProps) {
  const isTwo = cols.includes('grid-cols-2');
  const imgWidthClasses = isTwo ? 'md:w-[min(125%,50dvw)]' : 'md:w-[min(118%,66dvw)]';

  return (
    <div className={className}>
      {header && <div className="mb-8 pl-8 md:mb-16 md:pl-16">{header}</div>}
      <div className={cn('md:grid', cols)}>
        {imgLeft ? (
          <>
            <div className="block px-6 md:hidden md:pr-16 md:pl-8">{children}</div>
            <div className={cn('col-span-1 col-start-0 mt-4 mr-8 w-[110%] justify-self-end md:mt-0 md:mr-0', imgWidthClasses)}>
              <Image src={imgSrc} alt={alt} width={800} height={600} className="h-auto w-full object-cover" />
              {underImageContent}
            </div>
            <div className="hidden px-8 md:block md:pr-16 md:pl-8">{children}</div>
          </>
        ) : (
          <>
            <div className="px-6 md:self-stretch md:pr-8 md:pl-16">{children}</div>
            <div className={cn('mt-4 ml-8 w-[110%] md:col-span-2 md:col-start-2 md:mt-0 md:ml-0 md:h-full', imgWidthClasses)}>
              <Image src={imgSrc} alt={alt} width={800} height={600} className="h-auto w-full object-cover" />
              {underImageContent}
            </div>
          </>
        )}
      </div>
      {sectionFooter && <div className="mt-8 px-8 md:mt-16 md:pr-0 md:pl-16">{sectionFooter}</div>}
    </div>
  );
}
