'use client';

import { IReplyItemProps } from '@/types/insight/insight';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function ReplyItem({
  name,
  time,
  edited,
  role,
  content,
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
      <div className="flex gap-8">
        <Image
          src="/mock/profile.svg"
          width={24}
          height={24}
          alt="reply-profile"
        />
        <div className="flex items-center gap-4">
          <span className="body-sb-16 text-text-main">{name}</span>
          <span className="body-r-14 text-text-sub">
            {time}
            {edited && '(수정됨)'}
          </span>
          <span className="body-m-16-150 text-text-title">{role}</span>
        </div>
      </div>
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
            className="flex cursor-pointer items-center gap-2"
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
