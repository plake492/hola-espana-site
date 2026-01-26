import { Hero, HeroCta, WeKnowSpain, WhatWeDo, WhyBookUs, HowItWorks, OurTeam, Reviews, Blogs, CTA, Services } from '@/components/home';

export default function Preview() {
  return (
    <>
      {/* <div className="relative mb-48">
        <div className="absolute bottom-0 left-0 w-full translate-y-1/2 px-4">
          <HeroCta />
        </div>
      </div> */}
      <Hero />
      <Services />
      <WeKnowSpain />
      <WhyBookUs />
      <CTA />
      {/* <div className="p-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
          </div>
          <div>
            <p>Paragraph text</p>
            <p className="text-sm">Small text</p>
            <p className="text-lg">Large text</p>
            <p className="text-xl">Extra large text</p>
            <p className="font-bold">Bold text</p>
            <p className="italic">Italic text</p>
          </div>
        </div>
   
      </div> */}
    </>
  );
}
