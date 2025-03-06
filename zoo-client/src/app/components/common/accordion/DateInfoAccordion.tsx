'use client';

import { useState } from 'react';
import DateInfoList from './DateInfoList';
import Image from 'next/image';
import Arrow from '@/public/accordion/dateinfo-arrow.svg';

export default function DateInfoAccordion({ date }: { date: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-[38px] w-[143px] bg-bg-primary text-text-main">
      <div className="flex h-full items-center justify-between px-4">
        <span className="body-m-14 tablet:leading-none">{date}</span>
        <button>
          <Image
            src={Arrow}
            alt="DateInfo Toggle Accordion"
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            width={16}
            height={16}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col bg-bg-primary pt-8">
          <DateInfoList date={date} />
        </div>
      )}
    </div>
  );
}
