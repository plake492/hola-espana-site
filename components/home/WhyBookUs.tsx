import Wave from '../Wave';
import Image from 'next/image';
import { whyChooseUsCopy } from '@/lib/siteCopy';

export default function WhyBookUs() {
  return (
    <div className="bg-[#ede2d7]">
      <Wave color="blue" />
      <section className="bg-[#d2e4ec] pl-16">
        <div className="mx-auto grid max-w-[1240px] grid-cols-[4fr_3fr] gap-32 pt-4 pb-18">
          <div>
            <h5 className="mb-12 text-4xl">{whyChooseUsCopy.heading}</h5>
            <ul className="flex flex-col gap-16">
              {whyChooseUsCopy.list.map((content, i) => (
                <li key={i}>
                  <div className="relative">
                    <div className="absolute top-0 right-full h-10 w-10 -translate-x-3">
                      <Image width={100} height={100} alt="" src={content.icon} />
                    </div>
                    <p className="font-serif text-2xl font-semibold italic">{content.title}</p>
                    <p className="font-serif text-xl">{content.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-16">
            <Image src={'/images/mosaic-casa.jpg'} height={800} width={600} className="flex-1 object-cover" alt="" />
            <Image src={'/images/cafe.png'} height={800} width={600} className="flex-1 object-cover" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
