'use client';

import Image from 'next/image';

export default function FilterOption() {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <span className="text-text-main">Filter</span>
      <Image
        src="/tab/filter-icon.svg"
        alt="filter-icon"
        width={20}
        height={20}
      />
    </label>
  );
}
