'use client'

import ArrowBox from './ArrowBox'
import FilterOption from './FilterOption'
import TabDates from './TabDates'
import ToggleButton from './ToggleButton'

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
        <FilterOption />
      </div>
    </div>
  )
}
