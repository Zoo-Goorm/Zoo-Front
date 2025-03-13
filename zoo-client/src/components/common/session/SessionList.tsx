'use client';

import { Session } from '@/components';
import { useSessionStore } from '@/store/common/useSessionStore';

export default function SessionList() {
  const { currentDate, sessionDates } = useSessionStore();

  return (
    <div>
      {currentDate === '전체' ? (
        <div className="flex flex-col gap-60">
          <Session currentDate={sessionDates[1]} />
          <Session currentDate={sessionDates[2]} />
        </div>
      ) : (
        <Session currentDate={currentDate} />
      )}
    </div>
  );
}
