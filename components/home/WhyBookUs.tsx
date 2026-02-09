import Image from 'next/image';
import { whyChooseUsCopy } from '@/lib/siteCopy';

export default function WhyBookUs() {
  return (
    <section className="bg-[#ede2d7]" id="why-choose-us">
      <div className="bg-[#d2e4ec] pt-4 pr-4 pb-12 pl-4 sm:pb-18 sm:pl-16">
        <div className="max-w-[1240px] sm:mx-auto">
          <h3 className="mb-8 block text-3xl sm:mb-12">{whyChooseUsCopy.heading}</h3>
          <div className="block grid-cols-[5fr_3fr] gap-4 min-[380px]:grid sm:mx-auto sm:grid-cols-[4fr_3fr] sm:gap-12 lg:gap-32">
            <div>
              <ul className="flex flex-col justify-between gap-8 sm:gap-16">
                {whyChooseUsCopy.list.map((content, i) => (
                  <li key={i} className="flex-1">
                    <div className="relative">
                      <div className="absolute top-0 right-full hidden h-10 w-10 -translate-x-3 sm:block">
                        <Image width={100} height={100} alt="icon" src={content.icon} />
                      </div>
                      <p className="mb-2 text-xl font-light italic">{content.title}</p>
                      <p className="text-md">{content.content}</p>
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
        </div>
      </div>
    </section>
  );
}
