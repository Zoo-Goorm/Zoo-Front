'use client';

import Image from 'next/image';
import { useState } from 'react';

interface AccordionProps {
  children: React.ReactNode;
  date: '전체' | 'Day 1' | 'Day 2';
}

export default function Accordion({ children, date }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-bw-white flex flex-col bg-bg-primary text-text-main tablet:gap-24">
      <div className={`p-8 ${isOpen && 'pb-24'}`}>
        <button
          className="flex w-full items-center justify-between text-left"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="headline-sb-32 leading-[1.2] tablet:leading-none">
            {date}
          </span>
          <Image
            src="/accordion/arrow.svg"
            alt="Toggle Accordion"
            className={`size-[48px] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            width={28}
            height={28}
          />
        </button>
      </div>
      {isOpen && <div className="p-8">{children}</div>}
    </div>
  );
}
