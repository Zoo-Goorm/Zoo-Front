'use client';

import { useState } from 'react';

import SessionContent from './SessionContent';
import ApplyButton from './ApplyButton';
import { IBadgeList } from '@/types/badge/Badge';
import { ISpeakerList } from '@/types/speaker/speaker';

export interface ISessionContainerProps extends IBadgeList, ISpeakerList {
  sessionTitle: string;
  sessionBody: string;
}

export default function SessionContainer({
  badgeList,
  sessionTitle,
  sessionBody,
  speakerList,
}: ISessionContainerProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex w-full items-center py-32">
      <div
        className="flex size-full items-center gap-5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="size-full items-center gap-5 self-stretch">
          <SessionContent
            badgeList={badgeList}
            sessionTitle={sessionTitle}
            sessionBody={sessionBody}
            speakerList={speakerList}
          />
        </div>
        {isHovered && <ApplyButton />}
      </div>
    </div>
  );
}
