import { Hero, PackageCards, CTA, FAQ } from '@/components/packages';
import { TileBorder } from '@/components/Icons';

export default function page() {
  return (
    <>
      <div style={{ background: 'linear-gradient(to bottom, #ffffff, #ede2d7)' }}>
        <Hero />
        <PackageCards />
        <CTA />
        <div className="text-terracotta">
          <TileBorder color="terracotta" />
        </div>
      </div>
      <FAQ />
    </>
  );
}
