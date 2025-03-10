import { ISessionContainerProps } from '@/types/session/session';
import SessionCardItem from './SessionCardItem';

export default function SessionCard({
  badgeList,
  sessionTitle,
  sessionBody,
  speakerList,
}: ISessionContainerProps) {
  return (
    <div className="flex">
      <div className="flex max-w-[482px]">
        <SessionCardItem
          badgeList={badgeList}
          sessionTitle={sessionTitle}
          sessionBody={sessionBody}
          speakerList={speakerList}
        />
      </div>
    </div>
  );
}
