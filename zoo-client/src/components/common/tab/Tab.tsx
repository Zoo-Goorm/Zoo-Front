'use client';

import ArrowBox from './ArrowBox';
import FilterOption from './FilterOption';
import TabDates from './TabDates';
import ToggleButton from './ToggleButton';

export default function Tab() {
  return (
    <div className="flex w-[312px] max-w-[1240px] items-center justify-between bg-bg-primary p-12 tablet:w-full tablet:px-20 tablet:py-16">
      <div className="flex items-center gap-1 tablet:gap-16">
        <TabDates
          className="hidden tablet:block"
          text="전체"
          selected={false}
        />
        <span className="hidden text-sm text-divider-secondary tablet:block tablet:text-xl">
          |
        </span>
        <TabDates text="N월 N일 (Day N)" selected={false} />
        <span className="text-sm text-divider-secondary tablet:text-xl">|</span>
        <TabDates text="N월 N일 (Day N)" selected={false} />
      </div>
      <div className="flex tablet:hidden">
        <ArrowBox />
      </div>
      <div className="hidden items-center gap-2 tablet:flex">
        <ToggleButton />
        <span className="text-sm text-divider-secondary tablet:text-xl">|</span>
        <FilterOption />
      </div>
    </div>
  );
}
