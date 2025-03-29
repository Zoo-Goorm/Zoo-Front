import Image from 'next/image';

import { Session } from '@/types/session/session';
import ProgressBar from '../../progressbar/ProgressBar';
import SelectSessionButton from '../../button/SelectSessionButton';
import CardBadge from '../../badge/CardBadge';
import { useRadioStore } from '@/store/common/useRadioStore';

export default function SessionCard({
  time,
  currentDate,
  session,
}: {
  time: string;
  currentDate: string;
  session: Session;
}) {
  const { activeState } = useRadioStore();
  const {
    id,
    name,
    keywords,
    shortDescription,
    maxCapacity,
    participantCount,
    location,
    speakerName,
    speakerImageUrl,
  } = session;

  return (
    <div className="flex size-full flex-col items-center justify-between gap-3">
      <div className="flex flex-col gap-3">
        <div className="relative h-[240px] w-[312px]">
          <Image
            src={speakerImageUrl || '/mock/speaker-img.svg'}
            alt="speaker-img"
            className="rounded-xl"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <CardBadge keyword={keywords} />
        <span className="title-sb-18 text-text-main">{name}</span>
        <span className="body-m-16-150 text-text-sub">{shortDescription}</span>
      </div>
      <div className="flex w-full flex-col gap-3">
        <div className="body-m-16 flex justify-between text-text-main">
          <span>{speakerName}</span>
          {activeState == 'inactive' && <span>{location}</span>}
        </div>
        <ProgressBar
          maxCapacity={maxCapacity}
          participantCount={participantCount}
        />
        {speakerName && (
          <SelectSessionButton
            selectedSessionDate={{
              id,
              time,
              name,
              shortDescription,
              speakerName,
            }}
            currentDate={currentDate}
            isDisabled={participantCount == maxCapacity}
          />
        )}
      </div>
    </div>
  );
}
