import Image from 'next/image';
import Wave from '../Wave';

export default function WeKnowSpain() {
  return (
    <>
      <Wave className="mt-36" color="tan" />
      <section className="bg-[#ede2d7]">
        <div className="ap-6 mx-auto grid max-w-[1480px] grid-cols-[3fr_4fr] pt-4 pb-18">
          <Image src={'/images/city-mosaic.jpg'} height={800} width={600} className="object-cover" alt="" />
          <div className="text-center">
            <p className="mb-4">WeKnowSpain</p>
            <p className="mb-4">
              We don't just work in Spain. We are from here. Our services are delivered by Spanish professionals with first-hand knowledge of local systems,
              regulations, and customs. This means clear guidance, up-to-date legal and tax insight, and solutions shaped by how things actually work in Spain.
            </p>
            <p className="mb-4">Local expertise isn't just an advantage in Spain—it's essential.</p>
          </div>
        </div>
      </section>
    </>
  );
}
