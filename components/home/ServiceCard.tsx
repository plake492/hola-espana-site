'use client';

interface CardContent {
  id: number;
  img: string;
  title: string;
  imgPosition?: string;
  description: string;
}

export default function ServiceCard({ content }: { content: CardContent }) {
  const { img, title, description, imgPosition = 'center' } = content;

  return (
    <div className="rounded-bl-4xl border-2 border-gray-100 bg-white p-4 shadow">
      <div
        className={`relative flex h-[500px] flex-col justify-end overflow-hidden bg-white ${img} bg-cover bg-position-[top_${imgPosition}_center] bg-no-repeat`}
      >
        <div className="absolute top-0 left-0 z-1 h-full w-full translate-y-1/2">
          <Icon />
        </div>
        <div className="relative h-[35%] bg-white px-8">
          <div className="absolute bottom-full left-0 z-0 h-[100px] w-[120%] -translate-x-12 translate-y-14 rotate-12 bg-white"></div>

          <div className="relative z-1">
            <p>{title}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Icon = () => (
  <div className="absolute top-0 left-0 z-1 grid h-24 w-24 translate-x-4 -translate-y-1/2 place-content-center rounded-full bg-[#C36C44] p-4">1</div>
);
