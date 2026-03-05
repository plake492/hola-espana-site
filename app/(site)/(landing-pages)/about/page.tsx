import { Hero, ProfileMain, GradientWrapper, OurStory, Team } from '@/components/about';

export default function page() {
  return (
    <>
      <Hero />
      <ProfileMain />
      <GradientWrapper>
        <OurStory />
        <Team />
      </GradientWrapper>
    </>
  );
}
