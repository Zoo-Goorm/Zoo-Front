'use client';
import Image from 'next/image';
import { useState } from 'react';
import ReplyItem from './ReplyItem';
import useGetReply from '@/hook/session/useReply';

export default function ReplyView({ id }: { id: number }) {
  const [applyAccordion, setApplyAccordion] = useState(true);

  const { data: ReplyList } = useGetReply(id);

  return (
    <div className="flex flex-col gap-16 pb-20">
      <div
        onClick={() => setApplyAccordion(!applyAccordion)}
        className="flex items-center gap-1"
      >
        <Image
          height={28}
          width={28}
          src="/button/down-arrow.svg"
          alt="down-arrow"
          className={`transition-transform duration-300 ease-in-out ${applyAccordion ? 'rotate-180' : ''}`}
        />
        <span className="body-r-14 text-text-sub">{`답글 ${ReplyList?.length}개`}</span>
      </div>
      {applyAccordion && (
        <>
          {ReplyList?.map((item, index) => <ReplyItem key={index} {...item} />)}
        </>
      )}
    </div>
  );
}
