import SessionContent from '../session/SessionContent';
import SpeakerList from '../speaker/SpeakerList';

export default function CardContent() {
  const speaker = [
    {
      name: '연사 이름',
      info: '연사 정보',
    },
  ];

  const session = {
    id: 1,
    name: 'AI 에이전트 혁명: 산업을 재편하는 지능형 시스템',
    keywords: ['글로벌', '산업 활용 사례', '비즈니스'],
    shortDescription:
      'AI 에이전트가 다양한 산업을 어떻게 혁신하고 있는지 글로벌 선도 기업들의 사례를 통해 분석한다.',
    maxCapacity: 203,
    participantCount: 203,
    startTime: '2025-04-03T13:00:00',
    endTime: '2025-04-03T14:30:00',
    location: '3F 오디토리움',
    status: 'BEFORE_START',
    speakerName: '레슬리 윌러비',
    speakerImage: '',
  };

  return (
    <div className="flex h-[27rem] max-w-[25rem] flex-col items-center justify-between gap-0 whitespace-break-spaces p-0">
      <div className="flex h-[3.8125rem] flex-col justify-center self-stretch bg-bg-secondary p-16">
        <h3 className="title-sb-24 text-text-primary">NN:NN ~ NN:NN</h3>
      </div>
      <SessionContent type="register" session={session} />
      <div className="flex w-[100%] items-start pb-20 pl-16 pr-16 pt-0">
        <SpeakerList speakerList={speaker} />
      </div>
    </div>
  );
}
