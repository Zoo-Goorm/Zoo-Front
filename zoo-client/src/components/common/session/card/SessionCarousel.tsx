'use client';
import React, { useEffect, useState } from 'react';
import { Session } from '@/types/session/session';
import { SessionCard } from '@/components';
import LeftArrow from './arrow/LightArrow';
import RightArrow from './arrow/LeftArrow';

interface SessionCarouselProps {
  sessions: Session[];
  currentDate: string;
  time: string;
}

export default function SessionCarousel({
  sessions,
  currentDate,
  time,
}: SessionCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(sessions.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(0);
  }, [time]);

  const activeColor = '#6B6B6B';
  const inactiveColor = '#d1d1d1';

  return (
    <div className="relative w-full">
      {sessions.length > itemsPerPage && (
        <div className="absolute top-[-40px] mb-4 flex w-full justify-end gap-2 pr-[25px]">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="p-2"
          >
            <RightArrow
              fill={currentPage === 0 ? inactiveColor : activeColor}
            />
          </button>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
            }
            disabled={currentPage >= totalPages - 1}
            className="p-2"
          >
            <LeftArrow
              fill={currentPage >= totalPages - 1 ? inactiveColor : activeColor}
            />
          </button>
        </div>
      )}
      <div className="w-[1000px] overflow-hidden">
        <div
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
          className={`flex gap-6 transition-transform duration-500 ease-in-out`}
        >
          {sessions.map((session, index) => (
            <div className="w-[320px]" key={`session-item-${index}`}>
              <SessionCard
                session={session}
                currentDate={currentDate}
                time={time}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
