import { ElementType, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

// TODO Add button variations
export default function Button({ as: Tag = 'button', children, className }: ButtonProps) {
  const beforeClasses = 'before:absolute before:inset-0 before:bg-terracotta before:rounded-md before:z-0';
  const afterClasses =
    'after:w-[calc(100%+4px)] after:h-[calc(100%+4px)] after:-translate-x-[4px] after:p-1 after:absolute after:inset-0 after:bg-terracotta-alt after:rounded-md after:-z-1';
  const hoverClasses = 'transition after:transition hover:-translate-y-[2px] hover:shadow-lg active:shadow-xl active:-translate-0';

  const classes =
    `bg-terracotta text-light active:text-white cursor-pointer rounded-md relative w-fit text-2xl font-light px-8 py-2 ${beforeClasses} ${afterClasses} ${hoverClasses} ${className}`
      .trim()
      .replace(/ +/g, ' ');

  return (
    <Tag className={classes}>
      <span className="color relative z-1">{children}</span>
    </Tag>
  );
}
