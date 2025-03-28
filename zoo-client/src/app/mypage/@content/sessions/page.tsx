'use client';

import { useGetTicket } from '@/hooks/session/useReservation';
import {
  IRegisteredSessions,
  ITicket,
  UserTicket,
} from '@/types/ticket/ticket';
import { useRouter } from 'next/navigation';

function AccessTicketSection({ tickets }: ITicket) {
  return (
    <section>
      <h1 className="headline-sb-36">내 세션 리스트</h1>
      <div className="body-sb-20 flex items-center justify-between border-t-[1px] border-divider-primary/30 py-6">
        <h2 className="w-1/6">참가권 종류</h2>
        <div className="flex w-5/6 flex-col gap-3">
          {tickets &&
            Object.values(tickets).map(
              (ticket, index) =>
                ticket && (
                  <label key={`ticket-${index}`}>Day {index + 1}</label>
                ),
            )}
        </div>
      </div>
    </section>
  );
}

function HasTicketList({ registeredSessions }: IRegisteredSessions) {
  const router = useRouter();
  return (
    <div>
      {registeredSessions &&
        Object.values(registeredSessions).map(
          (session, index) =>
            session && (
              <div key={index} className="flex flex-col pb-11">
                <h2 className="body-sb-20 border-t-[1px] border-divider-primary/30 py-6">
                  Day {index + 1}
                </h2>
                <div className="flex flex-col" key={`ticket-${index}`}>
                  <div className="grid w-full grid-cols-[1fr_2fr_2fr_1fr] py-16 text-text-sub">
                    <label>시간</label>
                    <label>세션</label>
                  </div>
                  {session.map(
                    (
                      { sessionId, timeRange, sessionName, speakerName },
                      index,
                    ) => (
                      <ul
                        key={index}
                        className="grid w-full grid-cols-[1fr_2fr_2fr_1fr] items-center justify-between py-16"
                      >
                        <li key={`${timeRange}-${index}`}>{timeRange}</li>
                        <li key={`${sessionName}-${index}`}>{sessionName}</li>
                        <li key={`${speakerName}-${index}`}>{speakerName}</li>
                        <div className="flex justify-end">
                          <button
                            onClick={() =>
                              router.push(`/mypage/sessions/${sessionId}`)
                            }
                            className="bg-bg-secondary px-16 py-3 text-text-primary"
                          >
                            상세 보기
                          </button>
                        </div>
                      </ul>
                    ),
                  )}
                </div>
              </div>
            ),
        )}
    </div>
  );
}

export default function MySessions() {
  const { data: tickets = {} as UserTicket } = useGetTicket();

  return (
    <div className="flex flex-col gap-10">
      <AccessTicketSection tickets={tickets.tickets} />
      <HasTicketList registeredSessions={tickets.registeredSessions} />
    </div>
  );
}
