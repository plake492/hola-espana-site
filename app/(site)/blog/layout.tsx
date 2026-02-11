import React from 'react';
import Link from 'next/link';

const blogs = ['Taxes', 'Schools', 'Documents'];

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mb-20 flex items-center gap-4 bg-yellow-100">
        {blogs.map((b) => (
          <Link key={b} href={`/blog/${b}`}>
            <div>{b}</div>
          </Link>
        ))}
      </div>
      {children}
    </>
  );
}
