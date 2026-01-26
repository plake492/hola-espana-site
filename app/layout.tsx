import type { Metadata } from 'next';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hola España - Legal and Relocation Experts',
  description: 'Expert immigration services for US citizens relocating to Spain. Visa applications, real estate support, and complete relocation packages.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen scroll-smooth bg-[#fcf7f2] font-sans antialiased">
        {children}

        {/* Vercel Analytics */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
