import { ReactNode } from 'react';
import Container from '../Container';

interface GradientWrapperProps {
  children: ReactNode;
}

export default function GradientWrapper({ children }: GradientWrapperProps) {
  return (
    <Container className="px-4 pb-8 md:px-8 md:pb-24">
      <div
        className="px-4 md:px-12"
        style={{
          background: 'linear-gradient(to bottom, #ede2d7, #ffffff 50%, #ede2d7)',
        }}
      >
        {children}
      </div>
    </Container>
  );
}
