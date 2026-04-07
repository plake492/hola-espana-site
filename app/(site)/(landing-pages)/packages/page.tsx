import { Hero, PackageCards, CTA, FAQ } from '@/components/packages';

export default function page() {
  return (
    <>
      <div style={{ background: 'linear-gradient(to bottom, #ffffff, #ede2d7)' }}>
        <Hero />
        <PackageCards />
        <CTA />
      </div>
      <FAQ />
    </>
  );
}
