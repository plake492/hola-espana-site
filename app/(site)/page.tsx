import Hero from '@/components/home/Hero';
import WeKnowSpain from '@/components/home/WeKnowSpain';
import WhatWeDo from '@/components/home/WhatWeDo';
import WhyBookUs from '@/components/home/WhyBookUs';
import HowItWorks from '@/components/home/HowItWorks';
import OurTeam from '@/components/home/OurTeam';
import Reviews from '@/components/home/Reviews';
import Blogs from '@/components/home/Blogs';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <div>
      <Hero />
      <WeKnowSpain />
      <WhatWeDo />
      <WhyBookUs />
      <HowItWorks />
      <OurTeam />
      <Reviews />
      <Blogs />
      <CTA />
    </div>
  );
}
