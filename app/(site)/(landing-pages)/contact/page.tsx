import Container from '@/components/Container';
import { Instagram, Facebook } from '@/components/Icons';
import CalendarBlock from '@/components/contact/CalendarBlock';
import EmailBlock from '@/components/contact/EmailBlock';
import { hero as copy } from '@/lib/siteCopy/contactCopy.json';
import Link from 'next/link';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram', className: 'h-14 w-14' },
  { icon: Facebook, href: '#', label: 'Facebook', className: 'h-20 w-20' },
];

export default function ContactPage() {
  return (
    <Container id="contact" size="full">
      <div className="relative mx-8 mt-18 min-h-[max(90svh,700px)] bg-[url(/images/city-center.webp)] bg-cover bg-center md:my-24">
        <div className="bg-blue-overlay min-h-[max(90svh,700px)]">
          {/* Content */}
          <div className="mx-auto grid grid-cols-[1fr_650px] items-start justify-between gap-24 px-24 py-16">
            {/* Left */}
            <div className="flex h-full flex-1 flex-col gap-10">
              <div className="flex flex-col gap-12">
                <h1 className="text-2xl font-light text-balance text-white">{copy.header}</h1>
                <div className="space-y-4 font-serif text-lg text-white">
                  {copy.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="mt-24 flex items-center gap-6 text-white">
                {socialLinks.map(({ icon: Icon, href, label, className }) => (
                  <Link key={label} href={href} aria-label={label} className={`${className} transition-opacity hover:opacity-70`}>
                    <Icon />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex w-full flex-1 flex-col gap-5 lg:shrink-0">
              <CalendarBlock />
              <EmailBlock />
            </div>
          </div>
          {/* ========== End Content ========== */}
        </div>
      </div>
    </Container>
  );
}
