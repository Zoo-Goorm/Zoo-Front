'use client';

import sessionInfo from '@/mock/session';
import SessionTime from './SessionTime';
import { useSessionStore } from '@/store/useSessionStore';
import { usePathname } from 'next/navigation';

interface SessionProps {
  currentDate: string;
  day?: string;
}

export default function Session({ currentDate }: SessionProps) {
  const { sessionDates } = useSessionStore();

  const sessionDateData = sessionInfo[currentDate];
  const indexofDate = sessionDates.indexOf(currentDate);
  const pathName = usePathname();

  const hrIncludes = pathName.includes('session-schedule');

  if (!sessionDateData || !Array.isArray(sessionDateData)) {
    return <div>세션 데이터가 없습니다.</div>;
  }

  return (
    <div className="flex size-full flex-col">
      <span className="headline-sb-28 py-7 text-text-primary">
        {`${currentDate} (Day ${indexofDate})`}
      </span>
      <div className="w-full">
        <div className="flex flex-col">
          {sessionDateData.map((time, i) => (
            <div key={i}>
              {hrIncludes && <hr className="text-divider-primary" />}

              <SessionTime
                key={i}
                time={time.timeRange}
                sessions={time.sessions}
                currentDate={currentDate}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
