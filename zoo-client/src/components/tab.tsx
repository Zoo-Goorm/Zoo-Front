'use client'

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

      <div className="hidden max-sm:flex">
        <span>hi</span>
      </div>
    </div>
  )
}
