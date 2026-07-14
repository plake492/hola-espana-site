import InternalPageSection from '@/components/InternalPageSection';
import lifeInSpainCopy from '@/lib/siteCopy/lifeInSpainCopy.json';

type SectionKey = 'housing' | 'transportation' | 'residency' | 'banking';

interface LifeInSpainSectionProps {
  sectionKey: SectionKey;
}

const sections = lifeInSpainCopy as unknown as Record<SectionKey, Parameters<typeof InternalPageSection>[0]['section']>;

export default function LifeInSpainSection({ sectionKey }: LifeInSpainSectionProps) {
  return <InternalPageSection section={sections[sectionKey]} />;
}
