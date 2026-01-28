import Wave from '../Wave';
import Image from 'next/image';
import { whyChooseUsCopy } from '@/lib/siteCopy';

export default function WhyBookUs() {
  return (
    <div className="bg-[#ede2d7]">
      <Wave color="blue" />
      <section className="bg-[#d2e4ec] px-4 pt-4 pb-18 min-[400px]:px-8 sm:pl-16">
        <h4 className="mb-12 block text-4xl sm:hidden">{whyChooseUsCopy.heading}</h4>
        <div className="block max-w-[1240px] grid-cols-[5fr_3fr] gap-4 min-[380px]:grid sm:mx-auto sm:grid-cols-[4fr_3fr] sm:gap-12 lg:gap-32">
          <div>
            <h4 className="mb-12 hidden text-4xl sm:block">{whyChooseUsCopy.heading}</h4>
            <ul className="flex flex-col justify-between gap-8 sm:gap-16">
              {whyChooseUsCopy.list.map((content, i) => (
                <li key={i} className="flex-1">
                  <div className="relative">
                    <div className="absolute top-0 right-full hidden h-10 w-10 -translate-x-3 sm:block">
                      <Image width={100} height={100} alt="" src={content.icon} />
                    </div>
                    <p className="text-md ms:text-2xl font-serif font-semibold italic">{content.title}</p>
                    <p className="text-md ms:text-xl font-serif text-sm">{content.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden flex-col justify-between gap-8 *:aspect-square *:w-full *:object-cover min-[380px]:flex sm:my-8 sm:h-[220px] sm:w-[220px] sm:*:h-full sm:*:flex-1 md:my-0 md:h-[unset] md:w-auto md:*:w-auto">
            {whyChooseUsCopy.images.map((image, i) => (
              <Image key={i} src={image.src} height={800} width={800} className={image.className} alt={image.alt} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
