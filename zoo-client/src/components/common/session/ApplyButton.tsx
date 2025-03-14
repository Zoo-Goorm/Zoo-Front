import { Session } from '@/types/session/session';
import ListButton from '../button/ListButton';

export default function ApplyButton({
  time,
  currentDate,
  session,
}: {
  time: string;
  currentDate: string;
  session: Session;
}) {
  return (
    <div className="absolute flex w-[100%] max-w-[64.375rem] opacity-90 backdrop-blur-[10px]">
      <ListButton
        time={time}
        currentDate={currentDate}
        type="thirary"
        text="상세 보기"
        session={session}
      />
      <ListButton
        time={time}
        currentDate={currentDate}
        type="primary"
        text="세션 신청"
        session={session}
      />
    </div>
  );
}
