import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-hola-cream border-hola-mustard relative z-99 border-b-4 px-4 py-3 md:px-6 md:py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="font-secondary flex items-center gap-4 text-xs tracking-wider md:gap-6 md:text-sm lg:gap-8">
          <Link href="/" className="hover:text-hola-terracotta -my-1 transition-colors">
            <Image src="/images/logo/logo.svg" alt="Hola Espana logo" width={50} height={300} className="md:w-[70px]" />
          </Link>
          <a href="#" className="hover:text-hola-terracotta transition-colors">
            BLOG
          </a>
          <a href="#" className="hover:text-hola-terracotta transition-colors">
            SERVICES
          </a>
          <a href="#" className="hover:text-hola-terracotta transition-colors">
            ABOUT US
          </a>
          <a href="#" className="hover:text-hola-terracotta transition-colors">
            FAQ
          </a>
          <a href="#" className="hover:text-hola-terracotta transition-colors">
            SOCIAL
          </a>
        </div>
      </nav>
    </header>
  );
}
