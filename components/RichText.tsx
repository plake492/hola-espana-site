import Link from 'next/link';

export type RichTextSegment = string | { text: string; href: string; external?: boolean };

interface RichTextProps {
  segments: RichTextSegment[];
  className?: string;
}

export default function RichText({ segments, className }: RichTextProps) {
  return (
    <p className={className}>
      {segments.map((segment, index) => {
        if (typeof segment === 'string') {
          return <span key={index}>{segment}</span>;
        }

        const linkProps = segment.external
          ? { href: segment.href, target: '_blank', rel: 'noopener noreferrer' }
          : { href: segment.href };

        return (
          <Link
            key={index}
            {...linkProps}
            className="font-semibold underline underline-offset-2"
          >
            {segment.text}
          </Link>
        );
      })}
    </p>
  );
}
