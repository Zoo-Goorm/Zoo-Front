'use client'

import Image from 'next/image'
import filterIcon from '@/public/filter-icon.svg'
import { useState } from 'react'

type TabDatesProps = {
  text: string
  selected: boolean
  className?: string
}

function TabDates({ text, selected, className = '' }: TabDatesProps) {
  return (
    <span
      className={`cursor-pointer font-semibold sm:text-sm lg:text-xl ${
        selected ? 'text-purple-500' : 'text-[#898989]'
      } ${className}`}
    >
      {text}
    </span>
  )
}

function FilterCheckbox() {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <span className="text-gray-700">Filter</span>
      <Image src={filterIcon} alt="filter-icon" width={20} height={20} />
    </label>
  )
}

function ToggleButton() {
  const [topToggleActive, setTopToggleActive] = useState(true)

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="relative">
        <div
          className={`flex h-[17px] w-[40px] cursor-pointer items-center rounded-full border-[1px] border-[#b6bac0] ${
            topToggleActive ? 'bg-indigo-600' : 'bg-gray-200'
          }`}
          onClick={() => setTopToggleActive(!topToggleActive)}
        >
          <div
            className={`h-[24px] w-[24px] transform rounded-full border-[1px] border-[#b6bac0] bg-white transition-transform duration-500 ease-in-out ${
              topToggleActive ? 'translate-x-4' : 'translate-x-[-2px]'
            }`}
          />
        </div>
      </div>
      <span className="font-medium text-black">마감된 세션 제외</span>
    </div>
  )
}

export default function Tab() {
  return (
    <div className="flex w-full min-w-[312px] items-center justify-between bg-[#F9F9F9] px-[20px] py-[16px] max-sm:h-[41px] max-sm:px-[12px] sm:py-[12px] md:h-[61px]">
      <div className="flex items-center gap-1 md:gap-4">
        <TabDates className="hidden md:block" text="전체" selected={false} />
        <span className="text-medium hidden text-[#d1d1d1] sm:text-sm md:block md:text-xl">
          |
        </span>
        <TabDates text="N월 N일 (Day N)" selected={false} />
        <span className="text-medium text-[#d1d1d1] sm:text-sm md:text-xl">
          |
        </span>
        <TabDates text="N월 N일 (Day N)" selected={false} />
      </div>

      <div className="hidden items-center gap-2 md:flex">
        <ToggleButton />
        <span className="text-medium text-[#d1d1d1] sm:text-sm md:text-xl">
          |
        </span>
        <FilterCheckbox />
      </div>
    </div>
  )
}
