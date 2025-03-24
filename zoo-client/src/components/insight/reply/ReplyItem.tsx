'use client';

import { IReplyItemProps } from '@/types/insight/reply';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import ProfileHeader from '../profileHeader';

export default function ReplyItem({
  name,
  edited,
  role,
  content,
  id,
}: IReplyItemProps) {
  const [detailedReply, setDetailedReply] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      setIsOverflowing(textRef.current.scrollHeight > 120);
    }
  }, []);

  return (
    <div className="flex flex-col gap-2 pb-5 pl-32">
      <ProfileHeader name={name} time={''} edited={edited} job={role} />
      <div className="flex flex-col gap-1">
        <p
          ref={textRef}
          className="body-r-16-150 overflow-hidden text-text-sub"
          style={{ maxHeight: detailedReply ? '1000px' : '120px' }}
        >
          {content}
        </p>

        {isOverflowing && (
          <div
            onClick={() => setDetailedReply(!detailedReply)}
            className="body-r-14 flex cursor-pointer items-center gap-1 text-text-sub"
          >
            <span>{detailedReply ? '닫기' : '자세히보기'}</span>
            <Image
              height={24}
              width={24}
              src="/button/down-arrow.svg"
              alt="down-arrow"
              className={`transition-transform duration-300 ease-in-out ${detailedReply ? 'rotate-180' : ''}`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
