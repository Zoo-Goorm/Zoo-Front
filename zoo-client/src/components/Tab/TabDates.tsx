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
      className={`tablet:text-xl cursor-pointer text-sm font-semibold ${
        selected ? 'text-purple-500' : 'text-text-thirary'
      } ${className}`}
    >
      {text}
    </span>
  )
}
