import { useSessionStore } from '@/store/common/useSessionStore';
import SessionContent from '../session/SessionContent';
import SpeakerList from '../speaker/SpeakerList';

export default function CardContent() {
  const { currentDate } = useSessionStore();
  const { selectedSessionsByDate } = useSessionStore();

  const allSessions = Object.entries(selectedSessionsByDate).flatMap(
    ([date, sessions]) => sessions.map((session) => ({ ...session, date })),
  );

  const filteredSessions =
    currentDate !== '전체'
      ? allSessions.filter((session) => session.date === currentDate)
      : allSessions;

  return (
    <div>
      <div className="flex gap-12 overflow-x-auto scrollbar-hidden">
        {filteredSessions.map((session) => (
          <div
            key={session.id}
            className="flex max-w-[25rem] flex-col items-center justify-between gap-0 whitespace-break-spaces p-0"
          >
            <div className="flex h-[3.8125rem] flex-col justify-center self-stretch bg-bg-secondary p-16">
              <h3 className="title-sb-24 text-text-primary">{session.time}</h3>
            </div>
            <SessionContent type="register" session={session} />
            <div className="flex w-[100%] items-start pb-20 pl-16 pr-16 pt-0">
              <SpeakerList speakerList={[session.speakerName]} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
