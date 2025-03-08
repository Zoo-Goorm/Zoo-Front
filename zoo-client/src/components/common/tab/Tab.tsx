'use client';

import { useSessionStore } from '@/store/useSessionStore';
import TabDates from './TabDates';
import sessionInfo from '@/mock/session';
import { useEffect } from 'react';

export default function Tab() {
  const { sessionDate, addSessionsDate } = useSessionStore();

  useEffect(() => {
    Object.keys(sessionInfo).map((date) => addSessionsDate(`${date}`));
  }, [sessionInfo]);

  return (
    <div className="flex w-full items-center justify-between bg-bg-secondary px-20 py-16">
      <div className="flex items-center gap-16">
        {sessionDate.map((date, i) => (
          <div key={i}>
            {i === 0 ? (
              <TabDates key={i} date={`${date}`} text={`${date}`} />
            ) : (
              <TabDates key={i} date={`${date}`} text={`${date} (Day ${i})`} />
            )}
            {i < sessionDate.length - 1 && (
              <span className="ml-5 text-divider-secondary">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
