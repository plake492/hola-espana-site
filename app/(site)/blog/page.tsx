import Link from 'next/link';
import Container from '@/components/Container';

const blogs = ['Taxes', 'Schools', 'Documents'];

export default async function page() {
  return (
    <Container>
      <h2>Blog</h2>
      {blogs.map((b) => (
        <Link key={b} href={`/blog/${b}`}>
          <div className="border-accent-gold hover:bg-accent-terracotta w-fit rounded-2xl border-2 px-8 py-2 shadow-md hover:text-white">
            {b}
          </div>
        </Link>
      ))}
    </Container>
  );
}
