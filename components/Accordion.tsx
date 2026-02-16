import homePageCopy from '@/lib/siteCopy/homepageCopy.json';

interface AccordionProps {
  content: Record<string, string>[];
}

export default function Accordion({ content }: AccordionProps) {
  return (
    <div className="text-light">
      {content.map(({ title, content }, id) => (
        <Row title={title} content={content} id={id} key={id} />
      ))}
    </div>
  );
}

const Chevron = () => {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="gird place-center -mt-2 -ml-3 size-10">
      <path
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clip-rule="evenodd"
        fill-rule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
};

const Row = ({ title, content, id }: { title: string; content: string; id: string }) => {
  return (
    <>
      <div
        className={
          'align-center relative flex justify-between after:absolute after:top-full after:left-0 after:h-0.5 after:w-full after:bg-white after:content-[""]'
        }
        id={id}
      >
        <h5 className="font-serif text-lg italic">{title}</h5>
        <div className="h-auto w-5">
          <Chevron />
        </div>
      </div>
      <div className="text-md">{content}</div>
    </>
  );
};
