import { ReactNode } from 'react';
import Image from 'next/image';

interface SplitContainerProps {
  className?: string;
  header: ReactNode;
  children: ReactNode;
  cols?: 'grid-cols-2' | 'grid-cols-3';
  imgSrc: string;
  imgLeft?: boolean;
  alt?: string;
}

export default function SplitContainer({ className, header, imgSrc, children, imgLeft, cols = 'grid-cols-2', alt = '' }: SplitContainerProps) {
  const isTwo = cols === 'grid-cols-2';
  const imgWidthClasses = isTwo ? 'w-[min(125%,50dvw)]' : 'w-[min(118%,66dvw)]';

  return (
    <div className={`${className}`}>
      <div className="mb-16 pl-16">{header}</div>
      <div className={`grid ${cols}`}>
        {imgLeft ? (
          <>
            <div className={`col-span-1 col-start-0 h-full justify-self-end ${imgWidthClasses}`}>
              <Image src={imgSrc} alt={alt} width={800} height={600} className="h-full w-full object-cover" />
            </div>
            <div className={`pr-16 pl-8`}>{children}</div>
          </>
        ) : (
          <>
            <div className={`pr-8 pl-16`}>{children}</div>
            <div className={`'h-full col-span-2 col-start-2 ${imgWidthClasses}`}>
              <Image src={imgSrc} alt={alt} width={800} height={600} className="h-full w-full object-cover" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
