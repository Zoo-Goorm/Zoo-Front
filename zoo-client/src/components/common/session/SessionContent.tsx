import { Badge } from '@/types/badge/Badge';
import { Speaker } from '@/types/speaker/speaker';
import BadgeList from '../badge/BadgeList';
import SpeakerList from '../speaker/SpeakerList';

interface ISessionContent {
  badgeList: Badge[];
  sessionTitle: string;
  sessionBody: string;
  speakerList: Speaker[];
}

export default function SessionContent({
  badgeList,
  sessionTitle,
  sessionBody,
  speakerList,
}: ISessionContent) {
  return (
    <div className="flex size-full items-center justify-center gap-20">
      <div className="flex h-[129px] w-2/3 flex-col items-start justify-center gap-[0.625rem]">
        <BadgeList badgeList={badgeList} />
        <h3 className="website:title-sb-24 mobile:title-sb-20 self-stretch text-text-main">
          {sessionTitle}
        </h3>
        <span className="website:body-m-16-150 mobile:body-m-14-150 min-w-[19.5625rem] self-stretch text-text-sub">
          {sessionBody}
        </span>
      </div>
      <div className="h-full w-1/3">
        <SpeakerList speakerList={speakerList} />
      </div>
    </div>
  );
}
