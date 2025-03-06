'use client';

import Image from 'next/image';
import arrow from '@/public/accordion/arrow.svg';
import { useState } from 'react';

interface AccordionProps {
  children: React.ReactNode;
  date: '전체' | 'Day 1' | 'Day 2';
}

export default function Accordion({ children, date }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-bw-white flex flex-col bg-bg-primary text-text-main tablet:gap-24">
      <div className="w-[312px] p-8 tablet:w-[1115px]">
        <button
          className="flex w-full items-center justify-between text-left"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="headline-sb-28 tablet:headline-sb-32 leading-[1.2] tablet:leading-none">
            {date}
          </span>
          <Image
            src={arrow}
            alt="Toggle Accordion"
            className={`transition-transform duration-300 tablet:h-[48px] tablet:w-[48px] ${isOpen ? 'rotate-180' : 'rotate-0'}`} // 크기 지정
            width={28}
            height={28}
          />
        </button>
      </div>
      {isOpen && <div className="p-8">{children}</div>}
    </div>
  );
}
