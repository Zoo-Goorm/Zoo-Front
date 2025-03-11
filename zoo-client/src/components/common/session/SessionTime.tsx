'use client';

import { badgeList } from '@/mock/badge';
import SessionContainer from './SessionContainer';
import { ISession } from '@/types/session/session';

export default function SessionTime({
  time,
  sessions,
}: { time: string } & ISession) {
  return (
    <div className="flex gap-20">
      <div className="title-sb-24 flex flex-col justify-center text-bg-black">
        <span className="w-[190px]">{time}</span>
      </div>
      <div className="size-full">
        {sessions.map((session, index) => (
          <SessionContainer
            key={`session-${index}`}
            badgeList={badgeList}
            sessionTitle={session.title}
            sessionBody={session.description}
            speakerList={[session.speaker]}
          />
        ))}
      </div>
    </div>
  );
}
