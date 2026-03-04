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
  resultCount: number;
}

export default function Filters({ selectedCategories, onToggleCategory, onSelectAll, resultCount }: FiltersProps) {
  const allSelected = selectedCategories.length === 0;

  return (
    <Container className="px-4 py-24 pb-12 md:px-8">
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
      {!allSelected && (
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
