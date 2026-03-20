import Hero from '@/components/blogLanding/Hero';
import BlogContent from '@/components/blogLanding/BlogContent';
import { client } from '@/sanity/lib/client';
import { type SanityDocument } from 'next-sanity';

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc){_id, title, slug, publishedAt, mainImage, excerpt, categories, body}`;

const options = { next: { revalidate: 30 } };

export default async function page() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div style={{ background: 'linear-gradient(#ffffff, #FCF7F2, #F5EBDF)' }}>
      <Hero />
      <BlogContent posts={posts} />
    </div>
  );
}
