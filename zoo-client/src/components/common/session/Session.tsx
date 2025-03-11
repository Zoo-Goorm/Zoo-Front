'use client';

import sessionInfo from '@/mock/session';
import SessionTime from './SessionTime';
import { useSessionStore } from '@/store/useSessionStore';
import { usePathname } from 'next/navigation';
import { useChipStore } from '@/store/useChipStore';
import useFilteredSessionData from '@/app/hook/useFilterSessionData';

interface SessionProps {
  currentDate: string;
  day?: string;
}

function Session({ currentDate }: SessionProps) {
  const { sessionDates } = useSessionStore();
  const { selectedChips } = useChipStore();

  const indexofDate = sessionDates.indexOf(currentDate);
  const pathName = usePathname();
  const hrIncludes = pathName.includes('session-schedule');

  const sessionDateData = (sessionInfo[currentDate] ?? []).map((item) => ({
    ...item,
    sessions: item.sessions.map((session) => ({
      ...session,
    })),
  }));

  const filteredData = useFilteredSessionData(sessionDateData, selectedChips);

  console.log(selectedChips);

  return (
    <div className="flex size-full flex-col">
      <span className="headline-sb-28 py-7 text-text-primary">
        {`${currentDate} (Day ${indexofDate})`}
      </span>
      <div className="w-full">
        <div className="flex flex-col">
          {filteredData.map((time, i) => (
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

export default Session;
