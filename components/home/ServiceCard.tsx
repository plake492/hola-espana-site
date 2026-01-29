import Image from 'next/image';

interface CardContent {
  id: number;
  img: string;
  title: string;
  bgPosition?: string;
  description: string;
  iconSrc: string;
  iconSize?: string;
}

export default function ServiceCard({ content }: { content: CardContent }) {
  const { img, title, description, bgPosition = 'bg-position-[center_center]', iconSrc, iconSize } = content;

  return (
    <div className="bg-white p-4 shadow-sm sm:p-4">
      <div className={`relative flex h-[350px] flex-col justify-end overflow-hidden bg-white sm:h-[500px] ${img} bg-p bg-cover ${bgPosition} bg-no-repeat`}>
        <div className="pointer-events-none absolute top-0 left-0 z-1 h-full w-full translate-y-1/2 min-[350px]:translate-y-3/5 sm:translate-y-1/2">
          <div className="absolute top-0 left-0 z-1 grid h-20 w-20 translate-x-2 -translate-y-1/2 place-content-center rounded-full bg-[#C36C44] min-[550px]:translate-x-4 md:h-22 md:w-22 lg:h-24 lg:w-24">
            <div className="relative grid h-28 w-28 place-content-center md:h-32 md:w-32 lg:h-38 lg:w-38" style={{ ...(iconSize && { height: iconSize }) }}>
              <Image alt="icon" src={iconSrc} className="object-contain" fill />
            </div>
          </div>
        </div>
        <div
          className="relative flex h-1/2 flex-col justify-end bg-white px-4 pb-6 min-[350px]:h-2/5 sm:h-1/2 sm:justify-center sm:pb-0 md:px-8"
          style={{ clipPath: 'polygon(-1px -1px, 101% 20%, 101% 101%, -1px 101%)' }}
        >
          <div className="relative text-center">
            <h4 className="mb-2 font-serif! text-xl font-light italic sm:text-lg">{title}</h4>
            <p className="sm:text-md font-serif text-lg">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
