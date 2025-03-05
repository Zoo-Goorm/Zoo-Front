'use client'

type TabDatesProps = {
  text: string
  selected: boolean
}

export default function Tab() {
  return (
    <>
      <TabDates text="전체" selected={true} />
    </>
  )
}

function TabDates({ text, selected }: TabDatesProps) {
  return (
    <span
      className={`text-semibold sm:text-sm md:text-xl ${selected ? 'text-purple-500' : 'text-grey-n-400'}`}
    >
      {text}
    </span>
  )
}
