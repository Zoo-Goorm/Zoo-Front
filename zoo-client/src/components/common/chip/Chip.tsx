'use client';

import { useChipStore } from '@/store/useChipStore';

interface IChipProps {
  text: string;
}

export default function Chip({ text }: IChipProps) {
  const { selectedChips, toggleChip } = useChipStore();
  const isSelected = selectedChips.has(text);

  return (
    <div
      className={`inline-flex items-center justify-center gap-0 rounded-sm website:px-8 website:py-4 ${isSelected ? 'bg-fill-secondary' : 'bg-bg-thirary'}`}
      onClick={() => toggleChip(text)}
    >
      {text}
    </div>
  );
}
