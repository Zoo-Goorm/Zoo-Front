import { Badge } from '@/types/badge/Badge';
import { Speaker } from '@/types/speaker/speaker';
import BadgeList from '../badge/BadgeList';
import SpeakerList from '../speaker/SpeakerList';
import Image from 'next/image';
import ProgressBar from '../progressbar/ProgressBar';
import SelectSessionButton from '../button/SelectSessionButton';

interface ISessionContent {
  badgeList: Badge[];
  sessionTitle: string;
  sessionBody: string;
  speakerList: Speaker[];
}

export default function SessionCardItem({
  badgeList,
  sessionTitle,
  sessionBody,
  speakerList,
}: ISessionContent) {
  const currenPerc: number = 24;
  const speakerName = speakerList[0].name;

  return (
    <div className="flex size-full flex-col items-center justify-center gap-12">
      <Image
        src="/mock/speaker-img.svg"
        alt="speaker-img"
        className="rounded-md"
        width={312}
        height={240}
      />
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-8">
          <BadgeList badgeList={badgeList} />
          <div className="flex h-[100px] flex-col">
            <span className="title-sb-18 text-text-main">{sessionTitle}</span>
            <span className="body-m-16-150 text-text-sub">{sessionBody}</span>
          </div>
          <div className="body-m-16 flex items-center justify-between text-text-main">
            <span>{speakerName}</span>
            <span>아무 주소</span>
          </div>
          <ProgressBar percentage={currenPerc} />
        </div>
        <SelectSessionButton isDisabled={currenPerc === 100} />
      </div>
    </div>
  );
}
