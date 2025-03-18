'use client';
import { ReplyList } from '@/mock/insight-info';
import Image from 'next/image';
import { useState } from 'react';
import ReplyItem from './ReplyItem';

export default function ReplyView() {
  const [applyAccordion, setApplyAccordion] = useState(false);

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
        <span className="body-r-14 text-text-sub">답글 N개</span>
      </div>
      {applyAccordion && (
        <>
          {ReplyList.map((item, index) => (
            <ReplyItem key={index} {...item} />
          ))}
        </>
      )}
    </div>
  );
}
