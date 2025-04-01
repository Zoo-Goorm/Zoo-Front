import { Session, SelectSession } from '@/types/session/session';
import ContentBadge from '../badge/ContentBadge';
import Speaker from '../speaker/Speaker';

export default function SessionContent({
  type,
  session,
}: {
  type: 'list' | 'register';
  session: SelectSession | Session;
}) {
  const { name, shortDescription, speakerName } = session;

  const isSession = (session: SelectSession | Session): session is Session => {
    return (session as Session).maxCapacity !== undefined;
  };

  const sessionContainerTypeClasses = {
    list: 'size-full justify-center items-center',
    register: 'w-[100%] py-20 px-16 items-start',
  };

  const sessionContentTypeClasses = {
    list: 'w-2/3 gap-[0.625rem]',
    register: 'gap-16 flex-1',
  };

  const maxApply = isSession(session)
    ? session.maxCapacity - session.participantCount
    : 0;

  return (
    <div className={`flex gap-20 ${sessionContainerTypeClasses[type]}`}>
      <div
        className={`flex flex-col items-start justify-center ${sessionContentTypeClasses[type]}`}
      >
        {isSession(session) && session.keywords ? (
          <ContentBadge
            keywords={session.keywords}
            maxApply={maxApply}
            location={session.location}
          />
        ) : null}
        <h3 className="website:title-sb-24 mobile:title-sb-20 self-stretch text-text-main">
          {name}
        </h3>
        <span className="website:body-m-16-150 mobile:body-m-14-150 min-w-[19.5625rem] self-stretch text-text-sub">
          {shortDescription}
        </span>
      </div>
      {type === 'list' && isSession(session) && (
        <div className="h-full w-1/3">
          {speakerName && <Speaker speakerName={speakerName} />}
        </div>
      )}
    </div>
  );
}
