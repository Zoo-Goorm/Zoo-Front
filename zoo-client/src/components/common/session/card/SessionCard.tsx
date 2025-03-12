import { Session } from '@/types/session/session';
import SessionCardItem from './SessionCardItem';

export default function SessionCard({
  session,
  time,
  currentDate,
}: {
  time: string;
  currentDate: string;
  session: Session;
}) {
  return (
    <SessionCardItem session={session} time={time} currentDate={currentDate} />
  );
}
