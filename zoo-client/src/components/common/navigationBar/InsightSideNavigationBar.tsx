'use client';
import { useGetTicket } from '@/hooks/session/useReservation';
import { UserTicket } from '@/types/ticket/ticket';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface SessionSNBProps {
  name: string;
  id: number;
}
const SessionListItems = ({ name, id }: SessionSNBProps) => {
  const router = useRouter();
  return (
    <li className="flex items-center justify-between px-20 py-16">
      <span className="h-[20px] w-[209px] overflow-hidden">{name}</span>
      <Image
        onClick={() => router.push(`/sessions/${id}/insight-notes`)}
        src="/button/right-arrow-side-in.svg"
        alt="right-arrow-side-in-btn"
        className="cursor-pointer"
        height={28}
        width={28}
      />
    </li>
  );
};

export default function InsightSideNavigationBar() {
  const [onList, setOnList] = useState(true);
  const { data: tickets = {} as UserTicket } = useGetTicket();
  const registeredSessions = tickets.registeredSessions;
  const sessions = Object.values(registeredSessions).flatMap(
    (registeredSessions) =>
      registeredSessions.map(({ sessionName, sessionId }) => ({
        name: sessionName,
        id: sessionId,
      })),
  );

  return (
    <>
      {!onList ? (
        <div className="fixed flex h-[892px] w-[32px] cursor-pointer items-center rounded-r-md bg-bg-secondary">
          <Image
            onClick={() => setOnList(!onList)}
            className="cursor-pointer"
            src="/button/right-arrow-side.svg"
            width={28}
            height={28}
            alt="side-arrow-btn"
          />
        </div>
      ) : (
        <div className="fixed flex h-[892px] w-[302px] flex-col rounded-r-md bg-bg-secondary">
          <div className="body-sb-16 flex w-full justify-end px-20 py-16 text-text-main">
            <Image
              onClick={() => setOnList(!onList)}
              src="/modal/close.svg"
              alt="close-btn"
              height={28}
              width={28}
              className="cursor-pointer"
            />
          </div>
          <ul className="body-sb-16 w-full overflow-scroll text-text-main scrollbar-hidden">
            {sessions.map((session, index) => (
              <SessionListItems key={index} {...session} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
