'use client';

import SessionTime from './SessionTime';
import { useSessionStore } from '@/store/useSessionStore';
import { usePathname } from 'next/navigation';
import { useChipStore } from '@/store/useChipStore';
import useFilteredSessionData from '@/hook/useFilterSessionData';
import Image from 'next/image';
import { useState } from 'react';
import { TimeSlot } from '@/types/session/session';
import { sessionsDetailed } from '@/mock/sessionsDetailed';

interface SessionProps {
  currentDate: string;
  day?: string;
}

export default function Session({ currentDate }: SessionProps) {
  const { sessionDates } = useSessionStore();
  const { selectedChips } = useChipStore();
  const [isOpen, setIsOpen] = useState(true);

  const pathname = usePathname();
  const isSchedulePath = pathname.includes('session-schedule');

  const indexOfDate = currentDate ? sessionDates.indexOf(currentDate) : -1;
  const dayNumber = indexOfDate >= 0 ? indexOfDate : 'N';

  const sessionDateData =
    currentDate && sessionsDetailed[currentDate]
      ? sessionsDetailed[currentDate].map((item: TimeSlot) => ({
          ...item,
          sessions: item.sessions.map((session) => ({ ...session })),
        }))
      : [];

  const filteredData = useFilteredSessionData(sessionDateData, selectedChips);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  const getDateText = () => {
    if (!currentDate) return `N월 N일 (Day N)`;
    return isSchedulePath
      ? `${currentDate} (Day ${dayNumber})`
      : `Day ${dayNumber}`;
  };

  return (
    <div className="flex size-full flex-col">
      <div className="flex w-full max-w-[1000px] items-center justify-between">
        {isSchedulePath ? (
          <span className="headline-sb-28 py-7 text-text-primary">
            {getDateText()}
          </span>
        ) : (
          <>
            <span className="headline-sb-32 px-4 py-2 text-bg-black">
              {getDateText()}
            </span>
            <Image
              src="/accordion/dateinfo-arrow.svg"
              alt="session-list-accordion"
              className={`cursor-pointer transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
              width={48}
              height={48}
              onClick={toggleAccordion}
            />
          </>
        )}
      </div>

      <div className={`w-full ${!isOpen && !isSchedulePath ? 'hidden' : ''}`}>
        <div className="flex flex-col">
          {filteredData.map((time, index) => (
            <div key={index}>
              {isSchedulePath && time.sessions.length > 0 && (
                <hr className="text-divider-primary" />
              )}
              <SessionTime
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
