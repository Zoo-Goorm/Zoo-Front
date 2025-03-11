'use client';

import { useSessionStore } from '@/store/useSessionStore';
import TabDates from './TabDates';
import sessionInfo from '@/mock/session';
import { useEffect } from 'react';

export default function Tab() {
  const { sessionDates, addSessionDate } = useSessionStore();

  useEffect(() => {
    Object.keys(sessionInfo).map((date) => addSessionDate(`${date}`));
  }, [sessionInfo]);

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
    </div>
  );
}
