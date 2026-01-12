import Link from 'next/link';
import Image from 'next/image';

const pages = [
  {
    id: 1,
    href: '/about',
    text: 'About',
  },
  {
    id: 2,
    href: '/services',
    text: 'Services',
  },
  {
    id: 3,
    href: '/packages',
    text: 'Packages',
  },
  {
    id: 4,
    href: '/blog',
    text: 'Blog',
  },
];

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b p-4">
      <Link href="/">
        <Image alt="site logo" src="/logo/logo.svg" width={200} height={100} className="w-[284px]" />
      </Link>
      <nav className="flex gap-4">
        {pages.map((page) => (
          <Link key={page.id} href={page.href}>
            {page.text}
          </Link>
        ))}
      </nav>
    </header>
  );
}
