'use client';

import ContentSection, { ContentBlock, ContentSectionIconProps } from '@/components/ContentSection';
import InternalPageLinks from '@/components/InternalPageLinks';
import SectionCta from '@/components/lifeInSpain/SectionCta';
import { TileBorder } from '@/components/Icons';

export interface InternalPageSubsection {
  id: string;
  title: string;
  hasBackground?: boolean;
  icon?: ContentSectionIconProps;
  blocks: ContentBlock[];
}

export interface InternalPageSectionData {
  id: string;
  title: string;
  overview: string;
  jumpToLabel?: string;
  subsections: InternalPageSubsection[];
  cta: {
    heading: string;
    headingLines: string[];
    imageSrc: string;
    description: string;
    button: {
      text: string;
      subtext?: string;
    };
  };
}

interface InternalPageSectionProps {
  section: InternalPageSectionData;
  ctaBackgroundColor?: 'terracotta' | 'ocean';
}

export default function InternalPageSection({
  section,
  ctaBackgroundColor = 'terracotta',
}: InternalPageSectionProps) {
  const links = section.subsections.map((subsection) => ({
    label: subsection.title,
    href: `#${subsection.id}`,
  }));

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 z-10 w-full -translate-y-1/2">
        <TileBorder color="blue" />
      </div>
      <InternalPageLinks
        id={section.id}
        heading={section.title}
        description={section.overview}
        onThisPageLabel={section.jumpToLabel || 'Jump to:'}
        showOnThisPage
        showHorizontalLine={false}
        links={links}
        backgroundColor="#fcf7f2"
      />
      {section.subsections.map((subsection) => (
        <ContentSection
          key={subsection.id}
          id={subsection.id}
          title={subsection.title}
          blocks={subsection.blocks}
          hasBackground={subsection.hasBackground}
          icon={subsection.icon}
        />
      ))}
      <SectionCta
        headingLines={section.cta.headingLines}
        description={section.cta.description}
        buttonText={section.cta.button.text}
        buttonSubtext={section.cta.button.subtext}
        imageSrc={section.cta.imageSrc}
        backgroundColor={ctaBackgroundColor}
      />
    </div>
  );
}
