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

const config = { tension: 180, friction: 12, duration: 225 };

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
    backgroundColor: scrolled ? '#c47556' : '#00000000',
    boxShadow: scrolled ? 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px' : 'rgba(33, 35, 38, 0) 0px 10px 10px -10px',
    config,
  });

  const logoStyle = useSpring({ width: scrolled ? '225px' : '425px', config });

  return (
    <animated.header style={springStyles} className={`h-[${HEADER_HEIGHT}px] absolute top-0 left-0 z-50 w-full text-white md:fixed`}>
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between px-4 py-2 min-[850px]:flex-row">
        <animated.div style={logoStyle}>
          <Link href="/" className="" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Image alt="site logo" src="/logo/logo.svg" width={200} height={100} className="w-full invert-100" style={{}} />
          </Link>
        </animated.div>
        {isPreview && (
          <p className="relative text-xs min-[850px]:absolute min-[850px]:top-1/2 min-[850px]:left-1/2 min-[850px]:-translate-1/2 sm:text-sm">
            FULL SITE COMING SOON!
          </p>
        )}
        <nav className="hidden flex-1 justify-end gap-4 min-[850px]:flex">
          {pagesFilteres.map((page) => (
            <Link
              key={page.id}
              href={page.href}
              className="text-md relative uppercase after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              {page.text}
            </Link>
          ))}
        </nav>
      </div>
    </animated.header>
  );
}
