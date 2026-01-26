import Wave from '../Wave';
import Image from 'next/image';

export default function WhyBookUs() {
  return (
    <div className="bg-[#ede2d7]">
      <Wave color="blue" />
      <section className="bg-[#d2e4ec]">
        <div className="mx-auto grid max-w-[1480px] grid-cols-[4fr_3fr] gap-6 pt-4 pb-18">
          <div>
            <p className="mb-4">WHY CHOOSE US?</p>
            <ul>
              <li>
                <p className="mb-4">
                  We don't just work in Spain. We are from here. Our services are delivered by Spanish professionals with first-hand knowledge of local systems,
                  regulations, and customs.
                </p>
              </li>
              <li>
                <p className="mb-4">
                  We don't just work in Spain. We are from here. Our services are delivered by Spanish professionals with first-hand knowledge of local systems,
                  regulations, and customs.
                </p>
              </li>
              <li>
                <p className="mb-4">
                  We don't just work in Spain. We are from here. Our services are delivered by Spanish professionals with first-hand knowledge of local systems,
                  regulations, and customs.
                </p>
              </li>
              <li>
                <p className="mb-4">
                  We don't just work in Spain. We are from here. Our services are delivered by Spanish professionals with first-hand knowledge of local systems,
                  regulations, and customs.
                </p>
              </li>
            </ul>
          </div>
          <Image src={'/images/mosaic-casa.jpg'} height={800} width={600} className="object-cover" alt="" />
        </div>
      </section>
    </div>
  );
}
