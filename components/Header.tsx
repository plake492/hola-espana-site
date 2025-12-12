import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-hola-cream border-b-4 border-hola-mustard py-3 md:py-4 px-4 md:px-6 relative z-99">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex gap-4 md:gap-6 lg:gap-8 text-xs md:text-sm tracking-wider items-center font-secondary">
          <Link href="/" className="hover:text-hola-terracotta transition-colors -my-1">
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
