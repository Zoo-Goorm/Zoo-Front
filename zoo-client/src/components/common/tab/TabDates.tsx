'use client';

import { useSessionStore } from '@/store/useSessionStore';

interface TabDatesProps {
  date: string;
  className?: string;
}

export default function TabDates({ date, className = '' }: TabDatesProps) {
  const { currentDate, setCurrentDate } = useSessionStore();

  return (
    <>
      <button
        onClick={() => setCurrentDate(date)}
        className={`body-sb-20 cursor-pointer ${
          date == currentDate ? 'text-text-primary' : 'text-text-thirary'
        } ${className}`}
      >
        {date}
      </button>
    </>
  );
}
