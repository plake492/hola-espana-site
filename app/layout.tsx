import type { Metadata } from 'next';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hola España - Legal and Relocation Experts',
  description:
    'Expert immigration services for US citizens relocating to Spain. Visa applications, real estate support, and complete relocation packages.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background-primary text-text-primary min-h-screen font-sans antialiased">
        {children}

        {process.env.NODE_ENV === 'development' && (
          <div className="fixed right-0 bottom-0 z-40 mr-8 mb-8 flex flex-col gap-2">
            <Link href="/theme" className="rounded-xl border-2 border-black bg-zinc-100 px-4 py-1.5 shadow-2xl">
              THEME
            </Link>
            <Link href="/colors" className="rounded-xl border-2 border-black bg-zinc-100 px-4 py-1.5 shadow-2xl">
              COLORS
            </Link>
            <Link
              href="/test-components"
              className="rounded-xl border-2 border-black bg-zinc-100 px-4 py-1.5 shadow-2xl"
            >
              COMPONENTS
            </Link>
            <Link
              href="/playground/animations"
              className="rounded-xl border-2 border-black bg-zinc-100 px-4 py-1.5 shadow-2xl"
            >
              ANIMATIONS
            </Link>
            <Link href="/studio" className="rounded-xl border-2 border-black bg-zinc-100 px-4 py-1.5 shadow-2xl">
              CMS
            </Link>
          </div>
        )}
        {/* Vercel Analytics */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
