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

  const paginatedSessions = sessions.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  const activeColor = '#6B6B6B';
  const inactiveColor = '#d1d1d1';

  return (
    <div className="relative w-full">
      {sessions.length > itemsPerPage && (
        <div className="absolute top-[-40px] mb-4 flex w-full justify-end gap-2 px-4">
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

      <div className="grid grid-cols-3 gap-24">
        {paginatedSessions.map((session, index) => (
          <div key={`session-item-${index}`}>
            <SessionCard
              session={session}
              currentDate={currentDate}
              time={time}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
