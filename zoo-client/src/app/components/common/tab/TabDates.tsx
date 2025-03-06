'use client';

interface TabDatesProps {
  text: string;
  selected: boolean;
  className?: string;
}

export default function TabDates({
  text,
  selected,
  className = '',
}: TabDatesProps) {
  return (
    <span
      className={`cursor-pointer text-sm font-semibold tablet:text-xl ${
        selected ? 'text-purple-500' : 'text-text-thirary'
      } ${className}`}
    >
      {text}
    </span>
  );
}
