import { ISessionId } from '@/types/session/session';
import ContentBadge from '../badge/ContentBadge';

export default function SessionInfo({ currentSession }: ISessionId) {
  const {
    keywords,
    maxCapacity,
    participantCount,
    location,
    sessionName,
    longDescription,
  } = currentSession;
  return (
    <div className="flex flex-col gap-12 py-20">
      <ContentBadge
        keywords={keywords}
        maxApply={maxCapacity - participantCount}
        location={location}
      />
      <h1 className="headline-sb-28 text-text-main">{sessionName}</h1>
      <p className="body-m-16-150 text-text-sub">{longDescription}</p>
    </div>
  );
}
