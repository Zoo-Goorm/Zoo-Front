import Image from 'next/image';
import { useRadioStore } from '@/store/useRadioStore';
import { Session } from '@/types/session/session';
import BadgeList from '../../badge/BadgeList';
import ProgressBar from '../../progressbar/ProgressBar';
import SelectSessionButton from '../../button/SelectSessionButton';
import { badgeList } from '@/mock/badge';

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
  const { id, title, percentage, description, keyword, location, speaker } =
    session;

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
          <BadgeList badgeList={badgeList} />
          <div className="flex h-[100px] flex-col gap-8">
            <span className="title-sb-18 text-text-main">{title}</span>
            <span className="body-m-16-150 text-text-sub">{description}</span>
          </div>
          <div className="body-m-16 flex items-center justify-between text-text-main">
            <span>{speaker.name}</span>
            {activeState == 'inactive' && <span>{location}</span>}
          </div>
          <ProgressBar percentage={percentage} />
        </div>
        <SelectSessionButton
          time={time}
          currentDate={currentDate}
          sessionId={id}
          sessionTitle={title}
          isDisabled={percentage === 100}
        />
      </div>
    </div>
  );
}
