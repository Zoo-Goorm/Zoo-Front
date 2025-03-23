import { ISessionId } from '@/types/session/session';
import ContentBadge from '../badge/ContentBadge';

export default function SessionInfo({ currentSession }: ISessionId) {
  return (
    <div className="flex flex-col gap-12 py-20">
      <ContentBadge
        keywords={currentSession.keywords}
        maxApply={currentSession?.maxCapacity - currentSession.participantCount}
        location={currentSession.location}
      />
      <h1 className="headline-sb-28 text-text-main">
        {currentSession.sessionName}
      </h1>
      <p className="body-m-16-150 text-text-sub">
        {currentSession.longDescription}
      </p>
    </div>
  );
}
