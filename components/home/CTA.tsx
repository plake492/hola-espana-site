import { ctaCopy } from '@/lib/siteCopy';
import Button from '../Button';

export default function CTA() {
  return (
    <section className="bg-[url(/images/city-center.webp)] bg-cover bg-center sm:min-h-[max(90dvh,700px)]" id="contact">
      <div className="bg-[#33688585] sm:min-h-[max(90dvh,700px)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pt-8 pb-42 sm:gap-24 sm:pt-20 sm:pb-20">
          <h4 className="mb-2 flex max-w-[850px] flex-col items-center text-center text-balance text-white">
            <span className="mb-6 text-3xl uppercase">{ctaCopy.heading}</span>
            <span className="font-serif! text-2xl">{ctaCopy.description}</span>
          </h4>
          <Button className="w-full max-w-[450px] font-bold tracking-widest uppercase">
            <a
              className="text-2xl"
              href="mailto:info@holaespana.com?subject=Free%20Strategy%20Call%20Request&body=Hi%20Fatima%2C%0A%0AI%27d%20like%20to%20schedule%20a%20free%2020-minute%20strategy%20call%20to%20discuss%20my%20move%20to%20Spain."
            >
              Contact
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
