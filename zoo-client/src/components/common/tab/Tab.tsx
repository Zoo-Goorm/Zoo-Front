'use client';

import TabDates from './TabDates';
import { useEffect } from 'react';
import { useSessionStore } from '@/store/common/useSessionStore';
import ToggleButton from './ToggleButton';
export default function Tab({ sessionList = {} }) {
  const { sessionDates, addSessionDate } = useSessionStore();

  useEffect(() => {
    if (sessionList && typeof sessionList === 'object') {
      Object.keys(sessionList).forEach((date) => addSessionDate(`${date}`));
    }
  }, [addSessionDate, sessionList]);

  return (
    <div className="flex w-full items-center justify-between bg-bg-secondary px-20 py-16">
      <div className="flex items-center gap-16">
        {sessionDates.map((date, i) => (
          <div key={i}>
            {i === 0 ? (
              <TabDates key={i} date={`${date}`} text={`${date}`} />
            ) : (
              <TabDates key={i} date={`${date}`} text={`${date} (Day ${i})`} />
            )}
            {i < sessionDates.length - 1 && (
              <span className="ml-5 text-divider-secondary">|</span>
            )}
          </div>
        ))}
      </div>
      <ToggleButton />
    </div>
  );
}
