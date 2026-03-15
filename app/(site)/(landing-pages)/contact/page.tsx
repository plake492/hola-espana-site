import { Instagram, Facebook } from '@/components/Icons';
import CalendarBlock from '@/components/contact/CalendarBlock';
import EmailBlock from '@/components/contact/EmailBlock';
import { hero as copy } from '@/lib/siteCopy/contactCopy.json';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram', className: 'h-7 w-7' },
  { icon: Facebook, href: '#', label: 'Facebook', className: 'h-10 w-10' },
];

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="relative mt-18 min-h-[max(90svh,700px)] bg-[url(/images/city-center.webp)] bg-cover bg-center md:mt-24"
    >
      <div className="min-h-[max(90svh,700px)] bg-blue-overlay">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-12 px-6 py-16 md:px-12 md:py-20 lg:flex-row lg:items-start">
          {/* Left: heading + description + social icons */}
          <div className="flex flex-col gap-10 lg:max-w-[600px]">
            <div className="flex flex-col gap-6">
              <h1 className="text-balance text-white">{copy.header}</h1>
              <div className="space-y-4 font-serif text-md text-white">
                {copy.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 text-white">
              {socialLinks.map(({ icon: Icon, href, label, className }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`${className} transition-opacity hover:opacity-70`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Right: calendar + email blocks */}
          <div className="flex w-full flex-col gap-5 lg:w-[480px] lg:shrink-0">
            <CalendarBlock />
            <EmailBlock />
          </div>
        </div>
      </div>
    </section>
  );
}
