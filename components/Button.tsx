import React from 'react';

export default function Button({ children, className, variant = 'primary' }: { children: React.ReactNode; className?: string; variant?: 'primary' }) {
  const styles = {
    primary: 'bg-[#c9825a] px-12 py-4 text-xl text-white hover:bg-[#c26838]',
  };

  return <button className={`${styles[variant]} ${className} cursor-pointer transition-all duration-300`}>{children}</button>;
}
