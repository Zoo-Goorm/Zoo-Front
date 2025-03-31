'use client';

import TabDates from './TabDates';
import { useEffect } from 'react';
import { useSessionStore } from '@/store/common/useSessionStore';
import ToggleButton from './ToggleButton';
import { usePathname } from 'next/navigation';
import { useSessions } from '@/hooks/session/useSession';
import { FilterButton } from '@/components';
export default function Tab() {
  const { sessionDates, addSessionDate } = useSessionStore();
  const isSchedulePath = usePathname().includes('session-apply');
  const isMyInsightPath = usePathname().includes('mypage/insights');
  const { data: sessions } = useSessions();

  useEffect(() => {
    if (sessions && typeof sessions === 'object') {
      Object.keys(sessions).forEach((date) => addSessionDate(`${date}`));
    }
  }, [addSessionDate, sessions]);

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

      {isSchedulePath && <ToggleButton />}
      {isMyInsightPath && <FilterButton />}
    </div>
  );
}
