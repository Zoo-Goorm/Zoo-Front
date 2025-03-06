'use client'

import ArrowBox from './ArrowBox'
import FilterOption from './FilterOption'
import TabDates from './TabDates'
import ToggleButton from './ToggleButton'

export default function Tab() {
  return (
    <div className="tablet:px-20 tablet:py-16 bg-bg-primary tablet:w-full flex w-[312px] max-w-[1240px] items-center justify-between p-12">
      <div className="tablet:gap-16 flex items-center gap-1">
        <TabDates
          className="tablet:block hidden"
          text="전체"
          selected={false}
        />
        <span className="text-divider-secondary tablet:block tablet:text-xl hidden text-sm">
          |
        </span>
        <TabDates text="N월 N일 (Day N)" selected={false} />
        <span className="text-divider-secondary tablet:text-xl text-sm">|</span>
        <TabDates text="N월 N일 (Day N)" selected={false} />
      </div>
      <div className="tablet:hidden flex">
        <ArrowBox />
      </div>
      <div className="tablet:flex hidden items-center gap-2">
        <ToggleButton />
        <span className="text-divider-secondary tablet:text-xl text-sm">|</span>
        <FilterOption />
      </div>
    </div>
  )
}
