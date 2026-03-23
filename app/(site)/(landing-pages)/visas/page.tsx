import Container from '@/components/Container';
import { toBottomGradient } from '@/lib/styles';
import { VisasHero, VisasIntro, TileBorder, PersonaCards, BenefitsBlock, RequirementsSection, VisasCTA } from '@/components/visas';
import { nlv, dnv } from '@/lib/siteCopy/visasCopy.json';
import { cn } from '@/lib/utils/cn';

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

      <Container size="full" id={nlv.id} className={cn('px-4 md:px-8', toBottomGradient)}>
        {/* <GradientWrapper> */}
        <PersonaCards copy={nlv} variant="nlv" />
        <BenefitsBlock copy={nlv.benefits} variant="nlv" />
        <RequirementsSection heading={nlv.requirements.heading} items={nlv.requirements.items} variant="nlv" />
        {/* </GradientWrapper> */}
      </Container>

      {/* ── Digital Nomad Visa ─────────────────────── */}
      {/* <TileBorder variant="terracotta" />

      <GradientWrapper>
        <Container size="full" id={dnv.id}>
          <PersonaCards heading={dnv.whoCanApply.heading} personas={dnv.whoCanApply.personas} variant="dnv" />
          <BenefitsBlock title={dnv.benefits.title} subtitle={dnv.benefits.subtitle} items={dnv.benefits.items} cta={dnv.benefits.cta} variant="dnv" />
          <RequirementsSection heading={dnv.requirements.heading} items={dnv.requirements.items} variant="dnv" />
        </Container>
      </GradientWrapper>

      <VisasCTA /> */}
    </>
  );
}
