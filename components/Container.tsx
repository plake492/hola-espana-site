import { ElementType, ReactNode } from 'react';
import { SunIcon, StarIcon } from './Icons';
import { cn } from '@/lib/utils/cn';

interface IconProps {
  icon?: 'star' | 'sun';
  /**  
   * Icon Theme Colors
    sand: '#DDD0C2',
    lightSand: '#E6C76A',
    ocean: '#3B6E95',
    textLight: '#D0A97C',
    textDark: '#C36C44', 
  */
  iconColor?: string;
  iconClassName?: string;
}

interface ContainerProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  noCenter?: boolean;
  iconProps?: IconProps;
  [key: string]: any;
}

export default function Container({ as: Element = 'section', children, className, size = '3xl', noCenter, iconProps, ...rest }: Readonly<ContainerProps>) {
  const containerSize: Record<typeof size, string> = {
    /** 672px | 42rem */
    xs: 'max-w-2xl',
    /** 768px | 48rem */
    sm: 'max-w-3xl',
    /** 896px | 56rem */
    md: 'max-w-4xl',
    /** 1024px | 64rem */
    lg: 'max-w-5xl',
    /** 1152px | 72rem */
    xl: 'max-w-6xl',
    /** 1280px | 80rem */
    '2xl': 'max-w-7xl',
    /** 1440px | 90rem */
    '3xl': 'max-w-8xl',
    /** 100% */
    full: 'max-w-full',
  };

  const icons = {
    star: StarIcon,
    sun: SunIcon,
  };

  const IconComponent = iconProps?.icon && iconProps.icon ? icons[iconProps.icon] : null;
  const iconClasses =
    iconProps?.iconClassName || 'absolute top-8 md:top-0 right-0 -z-1 md:h-[360px] md:w-[360px] h-[180px] w-[180px] translate-x-[70px] md:translate-x-[100px]';
  const iconColor = iconProps?.iconColor ? `text-${iconProps?.iconColor}` : '';

  return (
    <Element className={cn('relative w-full', containerSize[size], !noCenter && 'mx-auto', className)} {...rest}>
      {IconComponent && (
        <div className={`${iconClasses} ${iconColor}`}>
          <IconComponent />
        </div>
      )}
      {children}
    </Element>
  );
}
