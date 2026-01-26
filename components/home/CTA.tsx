import React from 'react';

export default function CTA() {
  return (
    <section className="min-h-[max(90dvh,700px)] bg-[url(/images/city-center.jpg)] bg-cover bg-center">
      <div className="min-h-[max(90dvh,700px)] bg-[#33688585]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-16">
          <div className="text-center text-white">
            <p>YOUR DREAM LIFE IS CALLING</p>
            <p>Take the first step with a free 20-minute strategy call</p>
          </div>
          <a href="#">Contact</a>
        </div>
      </div>
    </section>
  );
}
