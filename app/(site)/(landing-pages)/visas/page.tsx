import Container from '@/components/Container';
import { toBottomGradient } from '@/lib/styles';
import { VisasHero, VisasIntro, PersonaCards, BenefitsBlock, RequirementsSection, VisasCTA } from '@/components/visas';
import { nlv, dnv } from '@/lib/siteCopy/visasCopy.json';

export const metadata = {
  title: 'Spanish Visa Options | Hola España',
  description: "Explore Spain's Non-Lucrative Visa and Digital Nomad Visa — find the right path for your move to Spain.",
};

export default function VisasPage() {
  return (
    <>
      <VisasHero />
      <VisasIntro />

      {/* ── Non-Lucrative Visa ─────────────────────── */}

      <Container size="full" id={nlv.id} className={toBottomGradient}>
        <PersonaCards copy={nlv} variant="nlv" />
        <BenefitsBlock copy={nlv.benefits} variant="nlv" />
        <RequirementsSection copy={nlv.requirements} variant="nlv" />
      </Container>

      {/* ── Digital Nomad Visa ─────────────────────── */}
      <Container size="full" id={dnv.id} className={toBottomGradient}>
        <PersonaCards copy={dnv} variant="dnv" />
        <BenefitsBlock copy={dnv.benefits} variant="dnv" />
        <RequirementsSection copy={dnv.requirements} variant="dnv" />
      </Container>

      <VisasCTA />
    </>
  );
}
