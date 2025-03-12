'use client';

import { useChipStore } from '@/store/common/useChipStore';
import useInterestItemStore from '@/store/modal/useInterestItemStore';
import Image from 'next/image';

interface IChipProps {
  size: 'l' | 's';
  text: string;
}

export default function Chip({ text, size }: IChipProps) {
  const { selectedChips, toggleChip } = useChipStore();
  const { toggleInterest } = useInterestItemStore();
  const isSelected = selectedChips.has(text);

  const chipSizeClasses = {
    l: 'px-8 py-4 rounded-sm',
    s: 'p-4 rounded-[0.25rem] text-text-main caption-r-12',
  };

  const handleSelectChip = (text: string) => {
    if (size === 's') toggleInterest(text);
    if (size === 'l') toggleChip(text);
  };

  return (
    <div
      className={`inline-flex items-center justify-center gap-0 ${chipSizeClasses[size]} ${isSelected ? 'bg-fill-secondary' : 'bg-bg-thirary'}`}
      onClick={() => handleSelectChip(text)}
    >
      {text}
      {size === 's' && (
        <Image src="/chip/xbox.svg" alt="chip x-box" width={16} height={16} />
      )}
    </div>
  );
}
