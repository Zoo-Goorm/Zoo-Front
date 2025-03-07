import { badgeList } from '@/mock/badge';
import SessionContent from '../session/SessionContent';
import SpeakerList from '../speaker/SpeakerList';

export default function CardContent() {
  const speaker = [
    {
      name: '연사 이름',
      info: '연사 정보',
    },
  ];

  return (
    <div className="flex max-w-[25rem] flex-col items-center gap-0 p-0">
      <div className="flex h-[3.8125rem] flex-col justify-center self-stretch bg-bg-secondary p-16">
        <h3 className="title-sb-24 text-text-primary">NN:NN ~ NN:NN</h3>
      </div>
      <SessionContent
        type="content"
        badgeList={badgeList}
        sessionTitle="AI 에이전트: 현재를 넘어서 미래로"
        sessionBody="상세 내용 간략정보맥시멈은 2줄까지로 하자 그게 좋겠다"
      />
      <div className="flex w-[100%] items-start pb-20 pl-16 pr-16 pt-0">
        <SpeakerList speakerList={speaker} />
      </div>
    </div>
  );
}
