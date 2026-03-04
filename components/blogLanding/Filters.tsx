'use client';

import Container from '../Container';
import { cn } from '@/lib/utils/cn';

const CATEGORIES = [
  { value: 'visa', label: 'Visas' },
  { value: 'legal', label: 'Law' },
  { value: 'real-estate', label: 'Housing' },
  { value: 'living', label: 'Living' },
  { value: 'expat', label: 'Expat Life' },
  { value: 'culture', label: 'Lifestyle' },
];

interface FiltersProps {
  selectedCategories: string[];
  onToggleCategory: (value: string) => void;
  onSelectAll: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultCount: number;
}

export default function Filters({ selectedCategories, onToggleCategory, onSelectAll, searchQuery, onSearchChange, resultCount }: FiltersProps) {
  const allSelected = selectedCategories.length === 0;
  const hasActiveFilters = !allSelected || searchQuery.length > 0;

  return (
    <Container className="px-4 py-24 pb-12 md:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="mr-4">
            <FilterButton active={allSelected} onClick={onSelectAll}>
              All Posts
            </FilterButton>
          </div>
          {CATEGORIES.map((cat) => (
            <FilterButton key={cat.value} active={selectedCategories.includes(cat.value)} onClick={() => onToggleCategory(cat.value)}>
              {cat.label}
            </FilterButton>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <svg
            className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 opacity-40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            autoComplete="off"
            className="border-sand bg-sand focus:border-sand-dark w-48 rounded-md border py-2 pr-8 pl-9 text-sm tracking-widest transition-colors outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer text-sm opacity-40 transition-opacity hover:opacity-70"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {hasActiveFilters && (
        <p className="mt-4 text-sm opacity-60">
          {resultCount} {resultCount === 1 ? 'post' : 'posts'} found
        </p>
      )}
    </Container>
  );
}

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'cursor-pointer rounded-md border px-5 py-2 text-sm tracking-widest transition-all',
        active ? 'border-sand-dark bg-sand-dark text-white hover:bg-[#c49a6a]' : 'border-sand bg-sand hover:border-sand-dark hover:bg-sand text-black'
      )}
    >
      {children}
    </button>
  );
}
