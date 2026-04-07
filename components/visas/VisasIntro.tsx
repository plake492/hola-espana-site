import Link from 'next/link';
import Container from '../Container';
import { intro as copy } from '@/lib/siteCopy/visasCopy.json';

export default function VisasIntro() {
  return (
    <Container
      size="full"
      className="m-0"
      // iconProps={{
      //   icon: 'star',
      //   iconColor: 'sand',
      //   iconClassName: 'hidden lg:block z-1 absolute -translate-x-[calc(50%-55px)] left-0 top-1/2 -translate-y-[calc(50%+50px)] opacity-40',
      // }}
    >
      <Container
        as="div"
        className="relative -z-1 bg-white px-6 py-24 text-center md:px-12 md:py-32"
        iconProps={{
          icon: 'star',
          iconColor: 'sand',
          iconClassName: 'hidden lg:block z-1 absolute left-0 top-1/2 -translate-3/5 -translate-y-[calc(50%+65px)] opacity-40',
        }}
      >
        <div className="z-2 mx-auto max-w-6xl space-y-6 text-balance">
          <h2 className="font-aegean text-lg text-black md:text-xl">{copy.heading}</h2>
          <p className="md:text-md text-dark font-serif text-lg opacity-95">{copy.subheading}</p>

          <div className="mx-auto flex max-w-4xl flex-col flex-wrap justify-around gap-8 pt-12 sm:flex-row md:gap-6 md:pt-18">
            {copy.tabs.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="bg-sand font-aegean relative rounded-sm px-8 py-3 text-sm tracking-widest text-black shadow-[4px_4px_0px_0px_#d0c5b9] transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                {label.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Container>
  );
}
