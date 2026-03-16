// Re-exports the shared TileBorder icon with a simpler variant prop
import { TileBorder as TileBorderIcon } from '@/components/Icons';

interface TileBorderProps {
  variant: 'ocean' | 'terracotta';
}

export default function TileBorder({ variant }: TileBorderProps) {
  return (
    <div className="w-full">
      <TileBorderIcon color={variant === 'ocean' ? 'blue' : 'terracotta'} />
    </div>
  );
}
