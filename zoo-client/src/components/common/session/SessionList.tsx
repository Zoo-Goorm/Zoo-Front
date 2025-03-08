'use client';

import { Session } from '@/components';
import { useSessionStore } from '@/store/useSessionStore';

export default function SessionList() {
  const { currentDate, sessionDate } = useSessionStore();
  return (
    <div>
      {currentDate === '전체' ? (
        <div className="flex flex-col gap-60">
          <Session currentDate={sessionDate[1]} day={'1'} />
          <Session currentDate={sessionDate[2]} day={'2'} />
        </div>
      ) : (
        <Session currentDate={currentDate} />
      )}
    </div>
  );
}
