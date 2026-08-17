import { Hero, PackageCards, CTA, FAQ } from '@/components/packages';

export default function page() {
  return (
    <>
      <div style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #F5EBDF 33%)' }}>
        <Hero />
        <PackageCards />
        <CTA />
      </div>
      <FAQ />
    </>
  );
}
