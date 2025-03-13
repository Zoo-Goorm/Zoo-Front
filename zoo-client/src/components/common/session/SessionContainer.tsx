'use client';

import { useState } from 'react';
import SessionContent from './SessionContent';
import ApplyButton from './ApplyButton';
import { Session } from '@/types/session/session';

export default function SessionContainer({ session }: { session: Session }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex w-full items-center py-32">
      <div
        className="flex size-full items-center gap-5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="size-full items-center gap-5 self-stretch">
          <SessionContent type="list" session={session} />
        </div>
        {isHovered && <ApplyButton session={session} />}
      </div>
    </div>
  );
}
