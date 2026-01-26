import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-dvh w-full flex-col justify-between">
      <Header isPreview />
      <main className="flex-1">{children}</main>
      <Footer />
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed right-0 bottom-0 z-40 mr-8 mb-8 flex flex-col gap-2">
          <Link href="/studio" className="rounded-xl border-2 border-black bg-zinc-100 px-4 py-1.5 shadow-2xl">
            CMS
          </Link>
        </div>
      )}
    </div>
  );
}
