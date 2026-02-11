import Link from 'next/link';
import { type SanityDocument } from 'next-sanity';

import { client } from '@/sanity/lib/client';

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function page() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  console.log(posts);
  return (
    <div className="bg-amber-200">
      <h2>Blog</h2>
      {posts.map((post) => (
        <li className="hover:underline" key={post._id}>
          <Link href={`/blog/${post.slug.current}`}>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
          </Link>
        </li>
      ))}
    </div>
  );
}
