import { Session } from '@/types/session/session';
import SessionCardItem from './SessionCardItem';

export default function SessionCard({ session }: { session: Session }) {
  return (
    <div className="flex">
      <div className="flex w-full max-w-[312px]">
        <SessionCardItem session={session} />
      </div>
    </div>
  );
}
