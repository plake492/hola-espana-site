import { ReactNode } from 'react';
import Image from 'next/image';

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
  cols = 'grid-cols-2',
  alt = '',
}: SplitContainerProps) {
  const isTwo = cols.includes('grid-cols-2');
  const imgWidthClasses = isTwo ? 'w-[min(125%,50dvw)]' : 'w-[min(118%,66dvw)]';

  return (
    <div className={`${className}`}>
      {header && <div className="mb-16 pl-16">{header}</div>}
      <div className={`grid ${cols}`}>
        {imgLeft ? (
          <>
            <div className={`col-span-1 col-start-0 justify-self-end ${imgWidthClasses}`}>
              <Image src={imgSrc} alt={alt} width={800} height={600} className="h-auto w-full object-cover" />
              {underImageContent}
            </div>
            <div className={`pr-16 pl-8`}>{children}</div>
          </>
        ) : (
          <>
            <div className={`self-stretch pr-8 pl-16`}>{children}</div>
            <div className={`'h-full col-span-2 col-start-2 ${imgWidthClasses}`}>
              <Image src={imgSrc} alt={alt} width={800} height={600} className="h-auto w-full object-cover" />
              {underImageContent}
            </div>
          </>
        )}
      </div>
      {sectionFooter && <div className="mt-16 pl-16">{sectionFooter}</div>}
    </div>
  );
}
