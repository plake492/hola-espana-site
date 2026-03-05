import { PortableText, type SanityDocument, type PortableTextComponents } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/Container';
import { urlFor } from '@/sanity/lib/image';
import Pill from '@/components/Pill';
import ScrollToTop from '@/components/ScrollToTop';

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const builder = createImageUrlBuilder(client);
const options = { next: { revalidate: 30 } };

const ptComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="font-aegean mt-10 mb-3 pl-2 text-2xl font-normal md:px-12 md:text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 className="font-aegean mt-8 mb-2 pl-2 text-xl font-normal md:px-12 md:text-2xl">{children}</h3>,
    h4: ({ children }) => <h4 className="font-aegean mt-6 mb-1 pl-2 text-lg font-normal md:px-12 md:text-xl">{children}</h4>,
    normal: ({ children }) => <p className="mb-6 text-sm leading-relaxed md:px-8 md:text-base">{children}</p>,
    blockquote: ({ children }) => <blockquote className="border-terracotta my-6 ml-4 border-l-2 pr-4 pl-4 italic md:ml-8 md:pr-12">{children}</blockquote>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => {
      const href = value?.href || '';
      const isExternal = href.startsWith('http');
      return (
        <a href={href} className="text-ocean hover:text-terracotta underline" {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="mb-6 list-disc space-y-2 pl-4 text-sm md:pl-14 md:text-base">{children}</ul>,
    number: ({ children }) => <ol className="mb-6 list-decimal space-y-2 pl-4 text-sm md:pl-14 md:text-base">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-2 leading-relaxed md:pr-8">{children}</li>,
    number: ({ children }) => <li className="pl-2 leading-relaxed md:pr-8">{children}</li>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const imageUrl = urlFor(value).width(1200).url();
      return (
        <figure className="my-8">
          <Image src={imageUrl} alt={value.alt || ''} width={1200} height={675} className="h-auto w-full object-cover" />
          {value.alt && (
            <figcaption className="mt-2 flex items-center gap-2 text-xs italic opacity-60">
              <span className="bg-terracotta inline-block h-4 w-0.5" />
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default async function PostPage({ params }: { params: Promise<{ slug: string | string[] }> }) {
  const paramsResolved = await params;
  const rawSlug = paramsResolved.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug.join('/') : rawSlug;
  if (!slug) return notFound();

  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug }, options);
  if (!post) return notFound();
  const postImageUrl = builder.image(post.mainImage);

  return (
    <Container as="main" size="full" className="mx-auto flex flex-col gap-4 pb-16 md:pb-24">
      <Container as="div" className="px-4 md:px-8">
        <Link href="/blog" className="hover:underline">
          ← Back to posts
        </Link>
      </Container>
      <Container as="div" className="mt-16 px-4 md:px-8">
        <div className="flex flex-wrap items-center gap-3">
          {post.categories?.map((cat: string) => (
            <Pill key={cat}>{cat.replace('-', ' ')}</Pill>
          ))}
          <span className="text-xs opacity-40">|</span>
          <p className="font-aegean text-[12px]">Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        </div>
        <h1 className="mt-8 mb-10 text-3xl font-bold">{post.title}</h1>
      </Container>

      {postImageUrl && <img src={postImageUrl.url()} alt={post.title} className="aspect-video h-[550px] w-full" width={550} height={310} />}

      <Container as="div" size="2xl" className="prose mt-8 px-4 md:px-12">
        {Array.isArray(post.body) && <PortableText value={post.body} components={ptComponents} />}
      </Container>
    </Container>
  );
}
