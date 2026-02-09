import React from 'react';

export default function Button({ children, className, variant = 'primary' }: { children: React.ReactNode; className?: string; variant?: 'primary' }) {
  const styles = {
    primary: 'bg-[#c9825a] px-16 py-4 text-xl text-white hover:bg-[#c26838] scale-[0.8] active:scale-[0.79] sm:scale-[1] sm:active:scale-[0.99]',
  };

  return <button className={`${styles[variant]} ${className} cursor-pointer transition-all duration-300`}>{children}</button>;
}
