'use client';

import { useCallback, useMemo, useState } from 'react';
import { type SanityDocument } from 'next-sanity';
import { useDebounce } from '@/hooks/useDebounce';
import Filters from './Filters';
import BlogPosts from './BlogPosts';
import Container from '../Container';
import { cn } from '@/lib/utils/cn';

const POSTS_PER_PAGE = 6;

function extractPlainText(body: any[]): string {
  return body?.map((block) => (block._type === 'block' ? block.children?.map((child: any) => child.text).join(' ') : '')).join(' ') || '';
}

function searchPosts(posts: SanityDocument[], query: string): SanityDocument[] {
  const q = query.toLowerCase().trim();
  if (!q) return posts;
  return posts.filter((post) => {
    const searchText = [post.title, post.excerpt, post.categories?.join(' '), extractPlainText(post.body)].join(' ').toLowerCase();
    return searchText.includes(q);
  });
}

interface BlogContentProps {
  posts: SanityDocument[];
}

export default function BlogContent({ posts }: BlogContentProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const debouncedSearch = useDebounce((query: string) => {
    setDebouncedQuery(query);
    setCurrentPage(0);
  }, 300);

  const handleSearchChange = useCallback(
    (query: string) => {
      setSearchQuery(query);
      debouncedSearch(query);
    },
    [debouncedSearch]
  );

  const filteredPosts = useMemo(() => {
    let result = posts;
    if (selectedCategories.length > 0) {
      result = result.filter((post) => post.categories?.some((cat: string) => selectedCategories.includes(cat)));
    }
    if (debouncedQuery) {
      result = searchPosts(result, debouncedQuery);
    }
    return result;
  }, [posts, selectedCategories, debouncedQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const displayedPosts = filteredPosts.slice(currentPage * POSTS_PER_PAGE, (currentPage + 1) * POSTS_PER_PAGE);

  function handleToggleCategory(value: string) {
    setSelectedCategories((prev) => (prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]));
    setCurrentPage(0);
  }

  function handleSelectAll() {
    setSelectedCategories([]);
    setCurrentPage(0);
  }

  return (
    <>
      <Filters
        selectedCategories={selectedCategories}
        onToggleCategory={handleToggleCategory}
        onSelectAll={handleSelectAll}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        resultCount={filteredPosts.length}
      />
      <BlogPosts posts={displayedPosts} />
      {totalPages > 1 && (
        <Container className="flex items-center justify-center gap-6 px-8 pb-8 md:pb-24">
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 0}
            className={cn(
              'flex h-10 w-10 cursor-pointer items-center justify-center transition-colors',
              currentPage === 0 ? 'cursor-default opacity-30' : 'text-ocean hover:text-terracotta'
            )}
            aria-label="Previous page"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <span className="text-sm tracking-widest">
            {currentPage + 1} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage >= totalPages - 1}
            className={cn(
              'flex h-10 w-10 cursor-pointer items-center justify-center transition-colors',
              currentPage >= totalPages - 1 ? 'cursor-default opacity-30' : 'text-ocean hover:text-terracotta'
            )}
            aria-label="Next page"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </Container>
      )}
    </>
  );
}
