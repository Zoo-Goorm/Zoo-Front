import { Session } from '@/types/session/session';
import SpeakerList from '../speaker/SpeakerList';
import ContentBadge from '../badge/ContentBadge';

export default function SessionContent({ session }: { session: Session }) {
  const { id, title, description, keyword, percentage, location, speaker } =
    session;

  return (
    <div className="flex size-full items-center justify-center gap-20">
      <div className="flex h-[129px] w-2/3 flex-col items-start justify-center gap-[0.625rem]">
        <ContentBadge
          keyword={keyword}
          percentage={percentage}
          location={location}
        />
        <h3 className="website:title-sb-24 mobile:title-sb-20 self-stretch text-text-main">
          {title}
        </h3>
        <span className="website:body-m-16-150 mobile:body-m-14-150 min-w-[19.5625rem] self-stretch text-text-sub">
          {description}
        </span>
      </div>
      <div className="h-full w-1/3">
        <SpeakerList speakerList={[speaker]} />
      </div>
    </div>
  );
}
