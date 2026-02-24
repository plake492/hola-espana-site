'use client';

import Image from 'next/image';
import { useState } from 'react';

type Review = {
  name: string;
  review: string;
  image: string;
};

interface Carousel {
  reviews: Review[];
}

export default function Carousel({ reviews }: Carousel) {
  const [currentCard, setCurrentCard] = useState<number>(0);

  return (
    <div className="flex w-[4000px] gap-16 overflow-x-auto">
      {reviews.map((review, i) => (
        <Card {...review} isCurrentCard={currentCard === i} key={i} setCurrentCard={() => setCurrentCard(i)} />
      ))}
    </div>
  );
}

const Card = ({ name, review, image, isCurrentCard, setCurrentCard }: Review & { isCurrentCard: boolean; setCurrentCard: Function }) => {
  const bgColor = isCurrentCard ? 'bg-ocean' : 'bg-ocean-alt';

  return (
    <div className={`${bgColor} w-[400px] pt-4 pb-8`} onClick={() => setCurrentCard()}>
      <div
        className={`relative aspect-square w-[150px] -translate-x-6 border-4 border-solid border-white after:absolute after:top-1/2 after:left-0 after:h-0.5 after:w-[135px] after:translate-x-[calc(150px+24px)] after:-translate-y-1/2 after:bg-black after:content-['']`}
      >
        <Image src={image} width={200} height={200} alt="" />
      </div>
      <div className="px-16 py-16">
        <p className="text-md">{review}</p>
      </div>
      <div className="flex items-center gap-6 before:block before:h-0.5 before:w-[135px] before:bg-black before:content-['']">
        <p className="text-md font-aegean">{name}</p>
      </div>
    </div>
  );
};
