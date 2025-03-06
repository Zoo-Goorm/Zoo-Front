'use client'

import Image from 'next/image'
import filterIcon from '@/public/tab/filter-icon.svg'

export default function FilterOption() {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <span className="text-gray-700">Filter</span>
      <Image src={filterIcon} alt="filter-icon" width={20} height={20} />
    </label>
  )
}
