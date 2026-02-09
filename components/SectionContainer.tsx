import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  as?: keyof HTMLElementTagNameMap;
  maxWidth: 'md' | 'lg' | 'xl';
}

export default function SectionContainer({ children, as, maxWidth }: SectionContainerProps) {
  const Component = as || 'section';

  return <Component>{children}</Component>;
}
