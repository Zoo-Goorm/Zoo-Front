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

function ArrowBox() {
  const [nextView, setNextView] = useState(false)
  return (
    <div className="flex gap-2">
      <button onClick={() => setNextView(!nextView)} className="h-4 w-4">
        <svg
          width="6"
          height="9"
          viewBox="0 0 6 9"
          fill="#d1d1d1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.33351 8.5L0.333496 4.5L4.33351 0.5L5.26685 1.43333L2.20017 4.5L5.26685 7.56667L4.33351 8.5Z"
            fill={nextView ? '#d1d1d1' : '#6B6B6B'}
          />
        </svg>
      </button>
      <button onClick={() => setNextView(!nextView)} className="h-4 w-4">
        <svg
          width="6"
          height="9"
          viewBox="0 0 6 9"
          fill="#6B6B6B"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.40018 4.5L0.333496 1.43333L1.26683 0.5L5.26685 4.5L1.26683 8.5L0.333496 7.56667L3.40018 4.5Z"
            fill={nextView ? '#6B6B6B' : '#d1d1d1'}
          />
        </svg>
      </button>
    </div>
  )
}

export default function Tab() {
  return (
    <div className="flex w-full items-center justify-between bg-[#F9F9F9] px-[12px] py-[12px] max-sm:h-[41px] max-sm:max-w-[312px] md:h-[16px] md:px-[20px] md:py-[16px]">
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
      <div className="flex md:hidden">
        <ArrowBox />
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
