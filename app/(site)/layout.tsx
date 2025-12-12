import Header from '@/components/Header';
import Link from 'next/link';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>

      {/* Development-only links */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed right-0 bottom-0 z-40 mr-8 mb-8 flex flex-col gap-2">
          <Link href="/theme" className="rounded-xl border-2 border-black bg-zinc-100 px-4 py-1.5 shadow-2xl">
            THEME
          </Link>
          <Link href="/colors" className="rounded-xl border-2 border-black bg-zinc-100 px-4 py-1.5 shadow-2xl">
            COLORS
          </Link>
          <Link href="/test-components" className="rounded-xl border-2 border-black bg-zinc-100 px-4 py-1.5 shadow-2xl">
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
    </>
  );
}
