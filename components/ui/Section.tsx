import { cn } from '@/lib/utils/cn';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'muted' | 'accent';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  as?: 'section' | 'div';
}

const backgroundClasses = {
  default: 'bg-background-primary',
  muted: 'bg-background-secondary',
  accent: 'bg-primary text-primary-foreground',
};

const paddingClasses = {
  sm: 'py-8 sm:py-12',
  md: 'py-12 sm:py-16 lg:py-20',
  lg: 'py-16 sm:py-24 lg:py-32',
  xl: 'py-24 sm:py-32 lg:py-40',
};

/**
 * Section component with Container, consistent padding and backgrounds
 * @param children - Content to wrap
 * @param className - Additional CSS classes
 * @param containerSize - Container max-width
 * @param background - Background color variant
 * @param padding - Vertical padding preset
 * @param as - HTML element to render
 */
export default function Section({
  children,
  className,
  containerSize = 'lg',
  background = 'default',
  padding = 'lg',
  as: Component = 'section',
}: SectionProps) {
  return (
    <Component className={cn(backgroundClasses[background], paddingClasses[padding], className)}>
      <Container size={containerSize}>{children}</Container>
    </Component>
  );
}
