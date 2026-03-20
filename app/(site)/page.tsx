import Hero from '@/components/home/Hero';
import HeroCta from '@/components/home/HeroCta';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import WeKnowSpain from '@/components/home/WeKnowSpain';
import ClearPath from '@/components/home/ClearPath';
import Blogs from '@/components/home/Blogs';
import Reviews from '@/components/home/Reviews';
import BottomCTA from '@/components/home/BottomCTA';

export default function Home() {
  return (
    <section className="bg-default">
      <Hero />
      <HeroCta />
      <Services />
      <WhyChooseUs />
      <WeKnowSpain />
      <ClearPath />
      <Blogs />
      <Reviews />
      <BottomCTA />
    </section>
  );
}
