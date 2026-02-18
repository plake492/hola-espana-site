import Link from 'next/link';
import { type SanityDocument } from 'next-sanity';

import { client } from '@/sanity/lib/client';
import SplitContainer from '@/components/SplitContainer';
import SectionHeading from '@/components/SectionHeading';
import Container from '@/components/Container';

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...6]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function page() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  console.log(posts);
  return (
    <>
      <Container className="px-8">
        <SplitContainer
          className="bg-sand flex flex-col justify-center py-16"
          imgSrc="/images/colorful-coast-town.webp"
          cols={'cols-2'}
          header={
            <SectionHeading
              as="h1"
              lines={['Hola España', { first: 'Relocation', last: 'Blog' }]}
              className="uppercase"
              textSize="text-section-sm"
              iconColor="text-terracotta-off"
            />
          }
        >
          <div className="text-md flex flex-col gap-4">
            <p>
              Relocating to Spain comes with important decisions at every step. This blog is a collection of helpful articles for every stage of your journey,
              written to provide clarity, local insight, and practical guidance you can trust.
            </p>{' '}
            <p>
              Whether you're planning your move or already settling in, you'll find straightforward answers and professional insight to help you move forward
              with confidence.
            </p>
          </div>
        </SplitContainer>
      </Container>
      {posts.map((post) => (
        <li className="hover:underline" key={post._id}>
          <Link href={`/blog/${post.slug.current}`}>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
          </Link>
        </li>
      ))}
    </>
  );
}
