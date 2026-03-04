import Hero from '@/components/blogLanding/Hero';
import Filters from '@/components/blogLanding/Filters';
import BlogPosts from '@/components/blogLanding/BlogPosts';
import { client } from '@/sanity/lib/client';
import { type SanityDocument } from 'next-sanity';

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
  && ($all == true || count((categories[])[@ in $cats]) > 0)
]|order(publishedAt desc)[0...6]{_id, title, slug, publishedAt, mainImage, excerpt, categories}`;

const options = { next: { revalidate: 30 } };

export default async function page() {
  // TODO: wire to filter UI — for now, show all posts
  const selectedCategories: string[] = ['legal', 'expats'];
  const showAll = selectedCategories.length === 0;
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, { cats: selectedCategories, all: showAll }, options);

  return (
    <div style={{ background: 'linear-gradient(#FCF7F2, #F5EBDF)' }}>
      <Hero />
      <Filters />
      <BlogPosts posts={posts} />
    </div>
  );
}
