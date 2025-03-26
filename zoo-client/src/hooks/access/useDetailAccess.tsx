'use client';
import { useRouter } from 'next/navigation';
import { useApplyStore } from '@/store/common/useApplyStore';
import { UserTicket } from '@/types/ticket/ticket';
import { useGetTicket } from '../session/useReservation';

export default function useDetailAccess() {
  const token = true;
  const router = useRouter();
  const { data } = useGetTicket();
  const userTicket: UserTicket = data ?? {
    tickets: {},
    registeredSessions: {},
  };

  const { setApplyState, setConflictId } = useApplyStore();

  function hasAnyTicket(): boolean {
    return Object.values(userTicket.tickets).some((hasTicket) => hasTicket);
  }
  function hasAllTicket(): boolean {
    return Object.values(userTicket.tickets).every((t) => t);
  }

  function hasConflictingSessionWithId(
    date: string,
    timeRange: string,
  ): { conflict: boolean; sessionId?: number } {
    if (!userTicket.registeredSessions[date]) return { conflict: false };

    for (const session of userTicket.registeredSessions[date]) {
      if (session.timeRange === timeRange) {
        return { conflict: true, sessionId: session.sessionId };
      }
    }

    return { conflict: false };
  }

  function hasSessionConflictForId(date: string, sessionId: number): boolean {
    if (!userTicket.registeredSessions[date]) return false;

    return userTicket.registeredSessions[date].some((session) => {
      return Array.isArray(session.sessionId)
        ? session.sessionId.includes(sessionId)
        : session.sessionId === sessionId;
    });
  }
  const handleAnyTicket = (
    sessionDate: string,
    sessionTimeRange: string,
    sessionId: number,
  ) => {
    if (!token) {
      router.push('/login');
      return;
    }

    if (hasAnyTicket()) {
      const availableDates = Object.keys(userTicket.tickets).filter(
        (date) => userTicket.tickets[date],
      );

      if (availableDates.includes(sessionDate)) {
        if (hasSessionConflictForId(sessionDate, sessionId)) {
          setApplyState(
            false,
            '중복 신청',
            '[중복 신청] 이미 신청한 세션입니다',
            // sessionId,
            false,
          );
          router.push(`/session-schedule/${sessionId}`, { scroll: false });
        } else {
          const { conflict, sessionId: conflictingSessionId } =
            hasConflictingSessionWithId(sessionDate, sessionTimeRange);

          if (conflict) {
            setApplyState(
              false,
              '중복 신청',
              `이미 같은 시간대에 세션이 신청되어 있습니다.`,
              true,
            );
            if (conflictingSessionId !== undefined) {
              setConflictId(conflictingSessionId as unknown as string);
            }
            router.push(`/session-schedule/${sessionId}`, { scroll: false });
          } else {
            // 이벤트 진행
            console.log(data, '현재 보고 있는 세션의 ID', sessionId);

            setApplyState(
              true,
              '신청 완료',
              '세션이 신청 완료되었습니다.',
              // sessionId,
              false,
            );
            router.push(`/session-schedule/${sessionId}`, { scroll: false });
          }
        }
      } else {
        router.push('/session-apply');
      }
    } else {
      router.push('/session-apply');
    }
  };

  return {
    hasAnyTicket,
    hasAllTicket,
    handleAnyTicket,
  };
}
