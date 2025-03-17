import React from 'react';
import SessionContainer from './SessionContainer';
import { Session } from '@/types/session/session';
import { usePathname } from 'next/navigation';
import SessionCarousel from './card/SessionCarousel';
import { useToggleStore } from '@/store/common/useToggleStore';

export default function SessionTime({
  time,
  sessions,
  currentDate,
}: {
  time: string;
  currentDate: string;
  sessions: Session[];
}) {
  const pathName = usePathname();
  const isSchedulePage = pathName.includes('session-schedule');
  const { toggleState } = useToggleStore();

  if (toggleState) {
    sessions = sessions.filter((s) => s.maxCapacity !== s.participantCount);
  }

  return (
    <div
      className={`${sessions.length < 1 && 'hidden'} flex gap-20 px-8 ${isSchedulePage ? 'flex-row' : 'flex-col'}`}
    >
      <div className="title-sb-24 flex flex-col justify-center text-bg-black">
        <span className="w-[190px]">{time}</span>
      </div>
      {isSchedulePage ? (
        <div className="size-full">
          {sessions.map((session, index) => (
            <div key={index}>
              {index !== 0 && <hr className="text-divider-primary" />}
              <SessionContainer
                time={time}
                currentDate={currentDate}
                session={session}
                key={`session-${index}`}
              />
            </div>
          ))}
        </div>
      ) : (
        <SessionCarousel
          sessions={sessions}
          currentDate={currentDate}
          time={time}
        />
      )}
    </div>
  );
}
