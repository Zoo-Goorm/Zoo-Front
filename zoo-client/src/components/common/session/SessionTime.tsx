import { badgeList } from '@/mock/badge';
import SessionContainer from './SessionContainer';
import { ISession } from '@/types/session/session';
import { usePathname } from 'next/navigation';
import SessionCard from './SessionCard';

export default function SessionTime({
  time,
  sessions,
}: { time: string } & ISession) {
  const pathName = usePathname();

  const SessionComponent = pathName.includes('session-schedule')
    ? SessionContainer
    : SessionCard;

  return (
    <div
      className={`flex gap-20 ${SessionComponent == SessionContainer ? 'flex-row' : 'flex-col'}`}
    >
      <div className="title-sb-24 flex flex-col justify-center text-bg-black">
        <span className="w-[190px]">{time}</span>
      </div>
      <div
        className={`size-full ${SessionComponent == SessionCard && 'grid w-full grid-cols-3 gap-24'} `}
      >
        {sessions.map((session, index) => (
          <SessionComponent
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
