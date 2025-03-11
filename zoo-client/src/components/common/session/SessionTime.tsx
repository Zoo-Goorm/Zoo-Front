import SessionContainer from './SessionContainer';
import { ISession } from '@/types/session/session';
import { usePathname } from 'next/navigation';
import { SessionCard } from '@/components';

export default function SessionTime({
  time,
  sessions,
  currentDate,
}: {
  time: string;
  currentDate: string;
  sessions: ISession[];
}) {
  const pathName = usePathname();

  const SessionComponent = pathName.includes('session-schedule')
    ? SessionContainer
    : SessionCard;

  return (
    <div
      className={`flex gap-20 px-8 ${SessionComponent == SessionContainer ? 'flex-row' : 'flex-col'}`}
    >
      <div className="title-sb-24 flex flex-col justify-center text-bg-black">
        <span className="w-[190px]">{time}</span>
      </div>
      <div
        className={`size-full ${SessionComponent == SessionCard && 'grid w-full grid-cols-3 gap-24'} `}
      >
        {sessions.map((session, index) => (
          <div key={index}>
            {SessionComponent == SessionContainer && index !== 0 && (
              <hr className="text-divider-primary" />
            )}
            <SessionComponent
              currentDate={currentDate}
              time={time}
              key={`session-${index}`}
              session={session}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
