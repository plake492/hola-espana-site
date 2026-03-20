import { Hero, ProfileMain, GradientWrapper, OurStory, Team } from '@/components/about';

export default function page() {
  return (
    <section className="bg-default">
      <Hero />
      <ProfileMain />
      <GradientWrapper>
        <OurStory />
        <Team />
      </GradientWrapper>
    </section>
  );
}
