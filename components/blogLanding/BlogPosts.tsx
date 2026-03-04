import Image from 'next/image';
import Link from 'next/link';
import { type SanityDocument } from 'next-sanity';
import Container from '../Container';
import { urlFor } from '@/sanity/lib/image';

import Button from '../Button';

interface BlogPostsProps {
  posts: SanityDocument[];
}

export default function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <Container className="px-4 pb-24 md:px-8">
      <ul className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:gap-24">
        {posts.map((post) => (
          <li key={post._id}>
            <BlogPostCard post={post} />
          </li>
        ))}
      </ul>
    </Container>
  );
}

function BlogPostCard({ post }: { post: SanityDocument }) {
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(600).height(350).url() : null;

  return (
    <Link href={`/blog/${post.slug?.current}`} className="group flex h-full flex-col justify-between gap-4">
      <div>
        {imageUrl && (
          <div className="mb-4 overflow-hidden">
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              width={600}
              height={400}
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex justify-between pb-2">
          <p className="text-sm opacity-60">{new Date(post.publishedAt).toLocaleDateString()}</p>
          {post.categories && post.categories.length > 0 && (
            <div className="mb-2 flex gap-2">
              {post.categories.map((cat: string) => (
                <span key={cat} className="text-terracotta text-xs tracking-widest uppercase">
                  {cat.replace('-', ' ')}
                </span>
              ))}
            </div>
          )}
        </div>
        <h2 className="font-serif! text-lg text-balance group-hover:underline">{post.title}</h2>
        {post.excerpt && <p className="my-2 line-clamp-4 text-sm font-light">{post.excerpt}</p>}
      </div>
      <Button className="text-sm" variant="sand">
        Read More
      </Button>
    </Link>
  );
}
