import { SessionId } from '@/types/session/session';
import ContentBadge from '../badge/ContentBadge';

export default function SessionInfo({ session }: { session: SessionId }) {
  return (
    <div className="flex flex-col gap-12 py-20">
      <ContentBadge
        keywords={session.keywords}
        maxApply={session?.maxCapacity - session.participantCount}
        location={session.location}
      />
      <h1 className="headline-sb-28 text-text-main">{session.sessionName}</h1>
      <p className="body-m-16-150 text-text-sub">{session.longDescription}</p>
    </div>
  );
}
