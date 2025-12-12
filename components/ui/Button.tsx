import { cn } from '@/lib/utils/cn';
import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  secondary: 'bg-secondary text-white hover:bg-secondary-hover',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

/**
 * Button component - renders as button or link based on href prop
 * @param children - Button content
 * @param href - If provided, renders as Next.js Link
 * @param variant - Visual style variant
 * @param size - Size preset
 * @param className - Additional CSS classes
 * @param disabled - Disabled state
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...props}>
      {children}
    </button>
  );
}
