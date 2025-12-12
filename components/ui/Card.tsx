import { cn } from '@/lib/utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

/**
 * Card component - container with border and shadow
 * @param children - Card content
 * @param className - Additional CSS classes
 * @param hover - Enable hover effect
 */
export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-background-secondary text-text-primary border-border overflow-hidden rounded-lg border shadow-sm',
        hover && 'transition-shadow hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * CardHeader - Top section of card with padding
 */
export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('p-6', className)}>{children}</div>;
}

/**
 * CardContent - Bottom section of card with padding
 */
export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('px-6 pb-6', className)}>{children}</div>;
}
