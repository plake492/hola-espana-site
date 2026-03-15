import Container from '@/components/Container';
import { Instagram, Facebook, Phone, Mail } from '@/components/Icons';
import { hero as copy } from '@/lib/siteCopy/contactCopy.json';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram', size: 'h-7 w-7' },
  { icon: Facebook, href: '#', label: 'Facebook', size: 'h-10 w-10' },
  { icon: Phone, href: 'tel:+1234567890', label: 'Phone', size: 'h-8 w-8' },
  { icon: Mail, href: 'mailto:info@holaespana.com', label: 'Email', size: 'h-8 w-8' },
];

export default function page() {
  return (
    <Container size="3xl" className="mt-18 bg-[url(/images/city-center.webp)] bg-cover bg-center sm:min-h-[max(90svh,700px)] md:mt-24" id="contact">
      <div className="bg-blue-overlay-alt sm:min-h-[max(90svh,700px)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pt-8 pb-42 sm:gap-24 sm:pt-20 sm:pb-20">
          <h1 className="mb-2 flex flex-col items-center text-center text-balance text-white">
            {copy.header}
            {/* <span className="mb-6 text-3xl font-semibold uppercase">{ctaCopy.heading}</span>
            <span className="font-serif! text-xl">{ctaCopy.description}</span> */}
          </h1>
        </div>
        <div className="flex items-center justify-center gap-8 pb-12 text-white">
          {socialLinks.map(({ icon: Icon, href, label, size }) => (
            <a key={label} href={href} aria-label={label} className={`${size} transition-opacity hover:opacity-70`}>
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
}
