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
      <div className="relative min-h-[max(90svh,700px)] bg-[url(/images/city-center.webp)] bg-cover bg-center md:mx-8">
        <div className="bg-blue-overlay min-h-[max(90svh,700px)]">
          {/* Content */}
          <div className="mx-auto grid grid-cols-1 items-start gap-10 px-6 py-12 md:px-12 md:py-16 lg:grid-cols-[1fr_600px] lg:gap-20 lg:px-20">
            {/* Left */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-8">
                <h1 className="text-2xl font-light text-balance text-white">{copy.header}</h1>
                <div className="space-y-4 font-serif text-lg text-white">
                  {copy.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6 text-white">
                {socialLinks.map(({ icon: Icon, href, label, className }) => (
                  <Link key={label} href={href} aria-label={label} className={`${className} transition-opacity hover:opacity-70`}>
                    <Icon />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex w-full flex-col gap-5">
              <CalendarBlock />
              <EmailBlock />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
