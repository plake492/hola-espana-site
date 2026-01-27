import { ctaCopy } from '@/lib/siteCopy';
import Button from '../Button';

export default function CTA() {
  return (
    <section className="min-h-[max(90dvh,700px)] bg-[url(/images/city-center.jpg)] bg-cover bg-center">
      <div className="min-h-[max(90dvh,700px)] bg-[#33688585]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-16">
          <div className="mb-16 max-w-[800px] text-center text-balance text-white">
            <p className="mb-6 text-5xl uppercase">{ctaCopy.heading}</p>
            <p className="font-serif text-4xl">{ctaCopy.description}</p>
          </div>
          <Button className="font-bold tracking-widest uppercase">
            <a href="mailto:fatima@wisexpats.com">Contact</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
