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
  const { img, title, description, bgPosition = 'bg-position-[center_center]' } = content;

  return (
    <div className="bg-white p-4 shadow-xs">
      <div className={`relative flex h-[350px] flex-col justify-end overflow-hidden bg-white sm:h-[450px] ${img} bg-p ${bgPosition} bg-cover bg-no-repeat`}>
        <div className="relative flex h-1/2 flex-col justify-end bg-white px-4 pb-6 min-[350px]:h-2/5 sm:h-1/2 sm:justify-center sm:pb-0 md:px-8">
          <div className="text-center">
            <h4 className="mb-2 font-serif! text-xl font-medium italic sm:text-lg">{title}</h4>
            <p className="sm:text-md text-md font-serif">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
