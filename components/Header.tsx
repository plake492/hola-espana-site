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
  { id: 2, href: '/about', text: 'about' },
  {
    id: 3,
    href: '/legal',
    text: 'legal',
    dropdown: [
      { href: '/legal#visa-pathways', text: 'Visa Pathways' },
      { href: '/legal#taxes', text: 'Taxes in Spain' },
      { href: '/legal#business-laws', text: 'Business Laws & Regulations' },
    ],
  },
  {
    id: 4,
    href: '/life-in-spain',
    text: 'life in spain',
    dropdown: [
      { href: '/life-in-spain#housing', text: 'Housing & Real Estate' },
      { href: '/life-in-spain#transportation', text: 'Transportation & Driving' },
      { href: '/life-in-spain#residency', text: 'Residency Documents' },
      { href: '/life-in-spain#banking', text: 'Banking & Finances' },
    ],
  },
  // {
  //   id: 5,
  //   href: '/visas',
  //   text: 'visas',
  //   dropdown: [
  //     { href: '/visas#nlv', text: 'Non-Lucrative Visa' },
  //     { href: '/visas#dnv', text: 'Digital Nomad Visa' },
  //   ],
  // },
  { id: 6, href: '/blog', text: 'blog' },
];

// ─── Desktop dropdown ──────────────────────────────────────────────────────────

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

// ─── Mobile nav drawer ─────────────────────────────────────────────────────────

const HamburgerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-8 w-8">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-8 w-8">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const drawerSpring = useSpring({
    transform: open ? 'translateX(0%)' : 'translateX(100%)',
    config: { tension: 280, friction: 30 },
  });

  const backdropSpring = useSpring({
    opacity: open ? 1 : 0,
    config: { tension: 300, friction: 32 },
  });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        className="flex cursor-pointer items-center justify-center text-white min-[1175px]:hidden"
      >
        <HamburgerIcon />
      </button>

      {/* Backdrop */}
      <animated.div
        style={{ ...backdropSpring, pointerEvents: open ? 'auto' : 'none' }}
        onClick={close}
        className="fixed inset-0 z-60 bg-black/50 min-[850px]:hidden"
      />

      {/* Drawer */}
      <animated.div style={drawerSpring} className="bg-terracotta fixed top-0 right-0 z-70 flex h-full w-72 flex-col text-white min-[1175px]:hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-5">
          <Link href="/" onClick={close}>
            <Image alt="Hola España" src="/logo/logo.svg" width={120} height={50} className="h-auto w-28 invert-100" />
          </Link>
          <button onClick={close} aria-label="Close navigation" className="opacity-70 transition-opacity hover:opacity-100">
            <CloseIcon />
          </button>
        </div>

        <div className="mx-6 h-px bg-white/20" />

        {/* Links */}
        <div className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-6 pt-4 pb-4">
          {pages.map((page) => (
            <div key={page.id}>
              <Link
                href={page.href}
                onClick={close}
                className="font-aegean flex items-center justify-between py-3.5 text-sm tracking-widest uppercase opacity-90 transition-opacity hover:opacity-100"
              >
                {page.text}
              </Link>

              {page.dropdown && (
                <div className="mb-2 flex flex-col border-l-2 border-white/25 pl-4">
                  {page.dropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={close}
                      className="py-2 font-serif text-xs tracking-widest uppercase opacity-60 transition-opacity hover:opacity-100"
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              )}

              <div className="h-px bg-white/10" />
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="px-6 pt-4 pb-10">
          <Link
            href="/contact"
            onClick={close}
            className="font-aegean block w-full rounded-md bg-white/15 py-3.5 text-center text-sm tracking-widest uppercase transition-colors hover:bg-white/25"
          >
            Contact
          </Link>
        </div>
      </animated.div>
    </>
  );
};

// ─── Header variants ───────────────────────────────────────────────────────────

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return isHomePage ? <AnimatedHeader /> : <StaticHeader />;
}

const NAV_LINK_CLASS =
  'relative text-sm uppercase after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full';

const StaticHeader = () => {
  return (
    <header className={`h-[${HEADER_HEIGHT}px] bg-terracotta absolute top-0 left-0 z-50 w-full text-white md:fixed`}>
      <div className="max-w-8xl relative mx-auto flex w-full items-center justify-between px-4 py-2">
        <div className="max-w-[325px] min-[1175px]:max-w-none">
          <Link href="/">
            <Image alt="site logo" src="/logo/logo.svg" width={200} height={100} className="h-auto w-full invert-100" />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden flex-1 justify-end gap-4 min-[1175px]:flex">
          {pages.map((page) =>
            page.dropdown ? (
              <DropdownNavItem key={page.id} page={page} linkClassName={NAV_LINK_CLASS} />
            ) : (
              <Link key={page.id} href={page.href} className={NAV_LINK_CLASS}>
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

        {/* Mobile nav */}
        <MobileNav />
      </div>
    </header>
  );
};

const config = { tension: 180, friction: 12, duration: 225 };

const AnimatedHeader = () => {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="max-w-8xl relative mx-auto flex w-full items-center justify-between px-4 py-2">
        <animated.div style={logoStyle} className="max-[850px]:max-w-[300px]">
          <Link href="/">
            <Image alt="site logo" src="/logo/logo.svg" width={200} height={100} className="h-auto w-full invert-100" />
          </Link>
        </animated.div>

        {/* Desktop nav */}
        <nav className="hidden flex-1 cursor-pointer items-baseline justify-end gap-4 min-[1175px]:flex">
          {pages.map((page) =>
            page.dropdown ? (
              <DropdownNavItem key={page.id} page={page} linkClassName={NAV_LINK_CLASS} />
            ) : (
              <Link key={page.id} href={page.href} className={NAV_LINK_CLASS}>
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

        {/* Mobile nav */}
        <MobileNav />
      </div>
    </animated.header>
  );
};
