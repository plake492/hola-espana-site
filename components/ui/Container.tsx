import { cn } from '@/lib/utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'max-w-4xl',
  md: 'max-w-6xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1400px]',
};

/**
 * Container component for consistent max-width and horizontal padding
 * @param children - Content to wrap
 * @param className - Additional CSS classes
 * @param size - Max width preset (default: lg)
 */
export default function Container({ children, className, size = 'lg' }: ContainerProps) {
  return <div className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizeClasses[size], className)}>{children}</div>;
}
