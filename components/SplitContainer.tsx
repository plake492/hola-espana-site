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
  const imgSpanClasses = imgLeft ? `${!isTwo ? 'col-span-2' : 'col-span-1'} col-start-0` : 'col-span-2 col-start-2';
  const imgClasses = imgLeft ? ' h-full justify-self-end' : 'h-full';

  const childClasses = imgLeft ? 'pl-8 order-1' : 'pr-8 ';

  return (
    <div className={`px-16 ${className}`}>
      <div className="mb-16">{header}</div>
      <div className={`grid ${cols}`}>
        <div className={childClasses}>{children}</div>
        <div className={`${imgClasses} ${imgSpanClasses} ${imgWidthClasses}`}>
          <Image src={imgSrc} alt={alt} width={800} height={600} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}
