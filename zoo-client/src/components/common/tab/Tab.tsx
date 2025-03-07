'use client';

import TabDates from './TabDates';

const dates = ['전체', '1월 10일 (Day 1)', '1월 11일 (Day 2)'];

export default function Tab() {
  return (
    <div className="flex w-full items-center justify-between bg-bg-secondary px-20 py-16">
      <div className="flex items-center gap-16">
        {dates.map((date, i) => (
          <>
            <TabDates key={i} date={date} />
            {i < dates.length - 1 && (
              <span className="text-divider-secondary">|</span>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
