import {
  VisasHero,
  VisasIntro,
  TileBorder,
  PersonaCards,
  BenefitsBlock,
  RequirementsSection,
  VisasCTA,
} from '@/components/visas';
import { visasCopy } from '@/lib/siteCopy/visasCopy';

const { nlv, dnv } = visasCopy;

export const metadata = {
  title: 'Spanish Visa Options | Hola España',
  description:
    "Explore Spain's Non-Lucrative Visa and Digital Nomad Visa — find the right path for your move to Spain.",
};

export default function VisasPage() {
  return (
    <>
      <VisasHero />
      <VisasIntro />

      {/* ── Non-Lucrative Visa ─────────────────────── */}
      <TileBorder variant="ocean" />

      <section id={nlv.id}>
        <PersonaCards
          heading={nlv.whoCanApply.heading}
          personas={nlv.whoCanApply.personas}
          variant="nlv"
        />

        <BenefitsBlock
          title={nlv.benefits.title}
          subtitle={nlv.benefits.subtitle}
          items={nlv.benefits.items}
          cta={nlv.benefits.cta}
          variant="nlv"
        />

        <RequirementsSection
          heading={nlv.requirements.heading}
          items={nlv.requirements.items}
          variant="nlv"
        />
      </section>

      {/* ── Digital Nomad Visa ─────────────────────── */}
      <TileBorder variant="terracotta" />

      <section id={dnv.id}>
        <PersonaCards
          heading={dnv.whoCanApply.heading}
          personas={dnv.whoCanApply.personas}
          variant="dnv"
        />

        <BenefitsBlock
          title={dnv.benefits.title}
          subtitle={dnv.benefits.subtitle}
          items={dnv.benefits.items}
          cta={dnv.benefits.cta}
          variant="dnv"
        />

        <RequirementsSection
          heading={dnv.requirements.heading}
          items={dnv.requirements.items}
          variant="dnv"
        />
      </section>

      <VisasCTA />
    </>
  );
}
