import { Session } from '@/types/session/session';
import ContentBadge from '../badge/ContentBadge';
import Speaker from '../speaker/Speaker';

export default function SessionContent({
  type,
  session,
}: {
  type: 'list' | 'register';
  session: Session;
}) {
  const {
    name,
    keywords,
    shortDescription,
    maxCapacity,
    participantCount,
    location,
    speakerName,
  } = session;

  const sessionContainerTypeClasses = {
    list: 'size-full justify-center items-center',
    register: 'w-[100%] py-20 px-16 items-start',
  };

  const sessionContentTypeClasses = {
    list: 'w-2/3 gap-[0.625rem]',
    register: 'gap-16 flex-1',
  };
  const maxApply = maxCapacity - participantCount;

  return (
    <div className={`flex gap-20 ${sessionContainerTypeClasses[type]}`}>
      <div
        className={`flex h-[129px] flex-col items-start justify-center ${sessionContentTypeClasses[type]}`}
      >
        <ContentBadge
          keywords={keywords}
          maxApply={maxApply}
          location={location}
        />
        <h3 className="website:title-sb-24 mobile:title-sb-20 self-stretch text-text-main">
          {name}
        </h3>
        <span className="website:body-m-16-150 mobile:body-m-14-150 min-w-[19.5625rem] self-stretch text-text-sub">
          {shortDescription}
        </span>
      </div>
      {type === 'list' && (
        <div className="h-full w-1/3">
          <Speaker speakerName={speakerName} />
        </div>
      )}
    </div>
  );
}
