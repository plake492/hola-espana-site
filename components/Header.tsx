'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSpring, animated } from '@react-spring/web';
import { HEADER_HEIGHT } from '@/lib/constants';
import Button from './Button';

const pages = [
  {
    id: 1,
    href: '/packages',
    text: 'packages',
  },
  {
    id: 5,
    href: '/about',
    text: 'about',
  },
  {
    id: 3,
    href: '/legal',
    text: 'legal',
  },
  {
    id: 4,
    href: '/visas',
    text: 'visas',
  },
  {
    id: 2,
    href: '/blog',
    text: 'blog',
  },
];

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return isHomePage ? <AnimatedHeader /> : <StaticHeader />;
}

const StaticHeader = () => {
  return (
    <header className={`h-[${HEADER_HEIGHT}px] bg-terracotta absolute top-0 left-0 z-50 w-full text-white md:fixed`}>
      <div className="max-w-8xl relative mx-auto flex w-full flex-col items-center justify-between px-4 py-2 min-[850px]:flex-row">
        <div className="max-[850px]:max-w-[325px]">
          <Link href="/">
            <Image alt="site logo" src="/logo/logo.svg" width={200} height={100} className="h-auto w-full invert-100" />
          </Link>
        </div>

        <nav className="hidden flex-1 justify-end gap-4 min-[850px]:flex">
          {pages.map((page) => (
            <Link
              key={page.id}
              href={page.href}
              className="relative text-sm uppercase after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              {page.text}
            </Link>
          ))}
          <div className="ml-16">
            <Link href="/contact">
              <Button as="span" variant="sand" className="text-md">
                Contact
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

const config = { tension: 180, friction: 12, duration: 225 };

const AnimatedHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const pagesFilteres = pages;

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
      <div className="max-w-8xl relative mx-auto flex w-full flex-col items-center justify-between px-4 py-2 min-[850px]:flex-row">
        <animated.div style={logoStyle} className="max-[850px]:max-w-[300px]">
          <Link href="/">
            <Image alt="site logo" src="/logo/logo.svg" width={200} height={100} className="h-auto w-full invert-100" />
          </Link>
        </animated.div>
        <nav className="hidden flex-1 cursor-pointer items-baseline justify-end gap-4 min-[850px]:flex">
          {pagesFilteres.map((page) => (
            <Link
              key={page.id}
              href={page.href}
              className="relative text-sm uppercase after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              {page.text}
            </Link>
          ))}
          <div className="ml-16">
            <Link href="/contact">
              <Button as="span" variant={scrolled ? 'sand' : 'terracotta'} className="text-md transition-all duration-200">
                Contact
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </animated.header>
  );
};
