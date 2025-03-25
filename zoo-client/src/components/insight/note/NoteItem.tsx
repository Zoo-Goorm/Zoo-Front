'use client';
import LikeToggle from '@/components/common/toggle/LikeToggle';
import { IChildren } from '@/types/children';
import { INote } from '@/types/insight/Note';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import InsightForm from '../form/InsightForm';
import ProfileHeader from '../profileHeader';

export default function NoteItem({ children, note }: IChildren & INote) {
  const [replyOn, setReplyOn] = useState(false);
  const [detailedReply, setDetailedReply] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  const { name, time, edited, memo, role } = note;

  useEffect(() => {
    if (textRef.current) {
      setIsOverflowing(textRef.current.scrollHeight > 120);
    }
  }, []);

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-2 text-text-sub">
        <ProfileHeader name={name} time={time} edited={edited} role={role} />
        <div className="flex flex-col gap-1">
          <p
            ref={textRef}
            className="body-r-16-150 overflow-hidden text-text-sub"
            style={{ maxHeight: detailedReply ? '1000px' : '120px' }}
          >
            {memo}
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
        <div className="flex gap-16">
          <LikeToggle size="m" count={1} />
          <div
            onClick={() => setReplyOn(!replyOn)}
            className="flex items-center gap-1"
          >
            <Image
              height={24}
              width={24}
              src="/mock/reply-icon.svg"
              alt="reply-icon"
            />
            <span className="body-r-14 text-text-sub">답글</span>
          </div>
        </div>
        {replyOn && <InsightForm type="reply" />}
      </div>
      {children}
    </div>
  );
}
