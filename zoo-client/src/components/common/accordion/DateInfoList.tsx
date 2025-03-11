'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SelectSession } from '@/store/useSessionStore';

interface DateInfoProps {
  title: string;
  items: SelectSession[];
}
export default function DateInfoList({ title, items }: DateInfoProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <hr className="text-divider-secondary" />
      <div className="flex w-full flex-col justify-center bg-bg-secondary">
        <div className="px-12 py-16 text-text-main">
          <div className="flex h-[38px] content-center items-center justify-between">
            <span className="body-m-14 flex-1 text-text-main">{title}</span>

            <Image
              src="/accordion/dateinfo-arrow.svg"
              alt="DateInfo Toggle Accordion"
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
              width={16}
              height={16}
              onClick={() => setIsOpen((prev) => !prev)}
            />
          </div>

          {isOpen && (
            <ul className="flex flex-col gap-20 px-2 text-sm">
              {items.map((item, index) => (
                <li key={index} className="flex flex-col gap-20 py-1">
                  <span className="figure-m-10">{item.time}</span>
                  <span className="body-r-14">{item.title}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
