'use client';
import Image from 'next/image';
import ReplyItem from './ReplyItem';
import { useState } from 'react';

export default function ReplyView() {
  const [applyAccordion, setApplyAccordion] = useState(false);
  return (
    <>
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
          <ReplyItem />
          <ReplyItem />
          <ReplyItem />
          <ReplyItem />
          <ReplyItem />
        </>
      )}
    </>
  );
}
