'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';
import { HEADER_HEIGHT } from '@/lib/constants';

const previewPage = [{ id: 'preview', href: '#contact', text: 'contact' }];

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

export default function Header({ isPreview }: { isPreview?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const pagesFilteres = isPreview ? previewPage : pages;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > HEADER_HEIGHT / 1.5);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const springStyles = useSpring({
    color: scrolled ? '#000000' : '#ffffff',
    backgroundColor: scrolled ? '#fcf7f2' : 'rgba(255, 255, 255, 0)',
    boxShadow: scrolled ? 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px' : 'rgba(33, 35, 38, 0) 0px 10px 10px -10px',
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.header style={springStyles} className={`h-[${HEADER_HEIGHT}px] fixed top-0 left-0 z-10 w-full text-white`}>
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-2">
        <Link href="/" className="flex-1">
          <Image
            alt="site logo"
            src="/logo/logo.svg"
            width={200}
            height={100}
            className="w-[284px]"
            style={{
              filter: scrolled ? 'invert(0)' : 'invert(1)',
            }}
          />
        </Link>
        {isPreview && <p>FULL SITE COMING SOON!</p>}
        <nav className="flex flex-1 justify-end gap-4">
          {pagesFilteres.map((page) => (
            <Link key={page.id} href={page.href}>
              {page.text}
            </Link>
          ))}
        </nav>
      </div>
    </animated.header>
  );
}
