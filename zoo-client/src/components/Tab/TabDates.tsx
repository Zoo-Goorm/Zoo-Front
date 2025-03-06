'use client'

type TabDatesProps = {
  text: string
  selected: boolean
  className?: string
}

export default function TabDates({
  text,
  selected,
  className = '',
}: TabDatesProps) {
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
