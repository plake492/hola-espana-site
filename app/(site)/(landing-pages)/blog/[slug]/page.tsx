import { PortableText, type SanityDocument } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const builder = createImageUrlBuilder(client);
const options = { next: { revalidate: 30 } };

export default async function PostPage({ params }: { params: Promise<{ slug: string | string[] }> }) {
  const paramsResolved = await params;
  const rawSlug = paramsResolved.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug.join('/') : rawSlug;
  if (!slug) return notFound();

  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug }, options);
  if (!post) return notFound();
  const postImageUrl = builder.image(post.mainImage);

  return (
    <main className="container mx-auto flex min-h-screen max-w-3xl flex-col gap-4 p-8">
      <Link href="/blog" className="hover:underline">
        ← Back to posts
      </Link>
      {postImageUrl && <img src={postImageUrl.url()} alt={post.title} className="aspect-video rounded-xl" width={550} height={310} />}
      <h1 className="mb-8 text-4xl font-bold">{post.title}</h1>
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
}
