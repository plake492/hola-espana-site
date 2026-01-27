// import FadeIn from '../animations/FadeIn';
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
    <div className="bg-white p-4 shadow-sm">
      <div className={`relative flex h-[500px] flex-col justify-end overflow-hidden bg-white ${img} bg-p bg-cover ${bgPosition} bg-no-repeat`}>
        <div className="pointer-events-none absolute top-0 left-0 z-1 h-full w-full translate-y-1/2">
          <div className="absolute top-0 left-0 z-1 grid h-24 w-24 translate-x-4 -translate-y-1/2 place-content-center rounded-full bg-[#C36C44]">
            <div className="relative grid h-38 w-38 place-content-center" style={{ ...(iconSize && { height: iconSize }) }}>
              <Image alt="icon" src={iconSrc} className="object-contain" fill />
            </div>
          </div>
        </div>
        <div className="relative flex h-1/2 flex-col justify-center bg-white px-8" style={{ clipPath: 'polygon(-1px -1px, 101% 20%, 101% 101%, -1px 101%)' }}>
          <div className="relative text-center">
            <p className="mb-2 font-serif text-2xl font-light italic">{title}</p>
            <p className="text-md font-serif">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Icon = () => (
  <div className="absolute top-0 left-0 z-1 grid h-24 w-24 translate-x-4 -translate-y-1/2 place-content-center rounded-full bg-[#C36C44] p-4">1</div>
);
