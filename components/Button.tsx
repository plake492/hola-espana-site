import { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type Variant = 'terracotta' | 'sand';

interface ButtonProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variant?: Variant;
  onClick?: (e: React.MouseEvent) => void;
}

const variantStyles: Record<Variant, string> = {
  terracotta: 'before:bg-terracotta after:bg-terracotta-alt text-white',
  sand: 'before:bg-sand after:bg-[#e3d8ce] text-black',
};

export default function Button({ as: Tag = 'button', onClick, children, className, variant = 'terracotta' }: ButtonProps) {
  return (
    <Tag
      onClick={onClick}
      className={cn(
        'isolate text-light relative w-fit cursor-pointer rounded-md px-8 py-2 text-2xl font-light active:text-white',
        'before:absolute before:inset-0 before:z-0 before:rounded-md before:transition',
        'after:absolute after:inset-0 after:-z-1 after:h-[calc(100%+4px)] after:w-[calc(100%+4px)] after:-translate-x-1 after:rounded-md after:p-1',
        'transition hover:-translate-y-0.5 hover:before:shadow-lg active:translate-0',
        variantStyles[variant],
        className
      )}
    >
      <span className="relative z-1">{children}</span>
    </Tag>
  );
}
