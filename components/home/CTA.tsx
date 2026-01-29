import { ctaCopy } from '@/lib/siteCopy';
import Button from '../Button';

export default function CTA() {
  return (
    <section className="bg-[url(/images/city-center.webp)] bg-cover bg-center sm:min-h-[max(90dvh,700px)]" id="contact">
      <div className="bg-[#33688585] sm:min-h-[max(90dvh,700px)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-24 px-4 py-20">
          <h4 className="mb-2 flex max-w-[850px] flex-col items-center text-center text-balance text-white">
            <span className="mb-6 text-3xl uppercase">{ctaCopy.heading}</span>
            <span className="font-serif! text-2xl">{ctaCopy.description}</span>
          </h4>
          <Button className="w-full max-w-[450px] font-bold tracking-widest uppercase">
            <a className="text-2xl" href="mailto:fatima@wisexpats.com">
              Contact
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
