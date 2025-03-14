import Image from 'next/image';

import { Session } from '@/types/session/session';
import ProgressBar from '../../progressbar/ProgressBar';
import SelectSessionButton from '../../button/SelectSessionButton';
import CardBadge from '../../badge/CardBadge';
import { useRadioStore } from '@/store/common/useRadioStore';

export default function SessionCardItem({
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
  } = session;

  return (
    <div className="flex size-full flex-col items-center justify-between gap-12">
      <Image
        src="/mock/speaker-img.svg"
        alt="speaker-img"
        className="rounded-md"
        width={312}
        height={240}
      />
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-8">
          <CardBadge keyword={keywords} />
          <div className="flex min-h-[100px] flex-col gap-8">
            <span className="title-sb-18 text-text-main">{name}</span>
            <span className="body-m-16-150 text-text-sub">
              {shortDescription}
            </span>
          </div>
          <div className="body-m-16 flex items-center justify-between text-text-main">
            <span>{speakerName}</span>
            {activeState == 'inactive' && <span>{location}</span>}
          </div>
          <ProgressBar
            maxCapacity={maxCapacity}
            participantCount={participantCount}
          />
        </div>
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
      </div>
    </div>
  );
}
