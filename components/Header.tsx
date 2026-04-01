'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSpring, animated } from '@react-spring/web';
import { HEADER_HEIGHT } from '@/lib/constants';
import Button from './Button';

interface NavPage {
  id: number;
  href: string;
  text: string;
  dropdown?: { href: string; text: string }[];
}

const pages: NavPage[] = [
  { id: 1, href: '/packages', text: 'packages' },
  { id: 5, href: '/about', text: 'about' },
  { id: 3, href: '/legal', text: 'legal' },
  {
    id: 4,
    href: '/visas',
    text: 'visas',
    dropdown: [
      { href: '/visas#nlv', text: 'Non-Lucrative Visa' },
      { href: '/visas#dnv', text: 'Digital Nomad Visa' },
    ],
  },
  { id: 2, href: '/blog', text: 'blog' },
];

const ChevronIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="inline-block h-3 w-3 translate-y-px">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
    />
  </svg>
);

interface DropdownNavItemProps {
  page: NavPage;
  linkClassName: string;
}

const DropdownNavItem = ({ page, linkClassName }: DropdownNavItemProps) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dropdownSpring = useSpring({
    opacity: open ? 1 : 0,
    transform: open ? 'translateY(0px)' : 'translateY(-6px)',
    pointerEvents: open ? ('auto' as const) : ('none' as const),
    config: { tension: 300, friction: 26 },
  });

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link href={page.href} className={`${linkClassName} inline-flex items-center gap-1`}>
        {page.text}
        <ChevronIcon />
      </Link>
      <animated.div
        style={dropdownSpring}
        className="bg-terracotta-alt absolute top-full left-1/2 mt-3 w-52 -translate-x-1/2 overflow-hidden rounded-md shadow-lg"
      >
        {page.dropdown!.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="block px-5 py-3 font-serif text-xs tracking-widest text-white uppercase transition-colors hover:bg-[#b45732]"
          >
            {item.text}
          </Link>
        ))}
      </animated.div>
    </div>
  );
};

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
          {pages.map((page) =>
            page.dropdown ? (
              <DropdownNavItem
                key={page.id}
                page={page}
                linkClassName="relative text-sm uppercase after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              />
            ) : (
              <Link
                key={page.id}
                href={page.href}
                className="relative text-sm uppercase after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                {page.text}
              </Link>
            )
          )}
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
          {pagesFilteres.map((page) =>
            page.dropdown ? (
              <DropdownNavItem
                key={page.id}
                page={page}
                linkClassName="relative text-sm uppercase after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              />
            ) : (
              <Link
                key={page.id}
                href={page.href}
                className="relative text-sm uppercase after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                {page.text}
              </Link>
            )
          )}
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
