'use client';

import { useState } from 'react';

import SessionContent from './SessionContent';
import SpeakerList from '../speaker/SpeakerList';
import ApplyButton from './ApplyButton';

import { IBadgeList } from '@/types/badge/Badge';
import { ISpeakerList } from '@/types/speaker/speaker';
import SessionTime from './SessionTime';

export default function Session({
  badgeList,
  speakerList,
}: ISpeakerList & IBadgeList) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex gap-20">
      <SessionTime sessionTime={'10:00 ~ 11:00'} />
      <div
        className="session-container flex max-w-[64.375rem] items-center gap-5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-1 items-center gap-5 self-stretch">
          <SessionContent
            badgeList={badgeList}
            sessionTitle="제목은 최대한 짧게 가자 하지만 길어진다면 2줄처리가 되게 콘텐츠 팀에서 연사님이랑 협의봐주세요 제발료"
            sessionBody="세션 상세 설명"
          />
          <SpeakerList speakerList={speakerList} />
        </div>
        {isHovered && <ApplyButton />}
      </div>
    </div>
  );
}
