import SessionContent from './SessionContent';
import SpeakerList from '../speaker/SpeakerList';
import { ISpeakerList } from '@/types/speaker/speaker';
import { IBadgeList } from '@/types/badge/Badge';

export default function Session({
  badgeList,
  speakerList,
}: ISpeakerList & IBadgeList) {
  return (
    <div className="flex max-w-[64.375rem] items-center gap-5">
      <div className="flex flex-1 items-center gap-5 self-stretch">
        <SessionContent
          badgeList={badgeList}
          sessionTitle="제목은 최대한 짧게 가자 하지만 길어진다면 2줄처리가 되게 콘텐츠 팀에서 연사님이랑 협의봐주세요 제발료"
          sessionBody="세션 상세 설명"
        />
      </div>
      <SpeakerList speakerList={speakerList} />
    </div>
  );
}
