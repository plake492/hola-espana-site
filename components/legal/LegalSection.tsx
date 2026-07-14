import InternalPageSection from '@/components/InternalPageSection';
import legalCopy from '@/lib/siteCopy/legalCopy.json';

type SectionKey = 'visaPathways' | 'taxes' | 'businessLaws';

interface LegalSectionProps {
  sectionKey: SectionKey;
}

const sections = legalCopy as unknown as Record<SectionKey, Parameters<typeof InternalPageSection>[0]['section']>;

export default function LegalSection({ sectionKey }: LegalSectionProps) {
  return <InternalPageSection section={sections[sectionKey]} ctaBackgroundColor="ocean" />;
}
