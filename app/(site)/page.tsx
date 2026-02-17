import Hero from '@/components/home/Hero';
import HeroCta from '@/components/home/HeroCta';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import WeKnowSpain from '@/components/home/WeKnowSpain';
import ClearPath from '@/components/home/ClearPath';
import Blogs from '@/components/home/Blogs';

export default function Home() {
  return (
    <>
      <Hero />
      <HeroCta />
      <Services />
      <WhyChooseUs />
      <WeKnowSpain />
      <ClearPath />
      <Blogs />
    </>
  );
}
