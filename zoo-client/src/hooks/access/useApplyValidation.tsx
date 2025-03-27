'use client';

import { useRouter } from 'next/navigation';
import { useApplyStore } from '@/store/common/useApplyStore';
import { UserTicket } from '@/types/ticket/ticket';
import { useGetTicket, useMutationApply } from '../session/useReservation';

export default function useApplyValidation() {
  const router = useRouter();
  const { data } = useGetTicket();
  const { mutate: applySession } = useMutationApply();
  const { setApplyState, setConflictId } = useApplyStore();

  const userTicket: UserTicket = data ?? {
    tickets: {},
    registeredSessions: {},
  };

  function hasAnyTicket(): boolean {
    return Object.values(userTicket.tickets).some(Boolean);
  }

  function hasAllTickets(): boolean {
    return Object.values(userTicket.tickets).every(Boolean);
  }

  function findConflictingSession(date: string, timeRange: string) {
    const sessions = userTicket.registeredSessions[date] || [];
    return sessions.find((session) => session.timeRange === timeRange) || null;
  }

  function hasSessionConflict(date: string, sessionId: number): boolean {
    const sessions = userTicket.registeredSessions[date] || [];
    return sessions.some((session) =>
      Array.isArray(session.sessionId)
        ? session.sessionId.includes(sessionId)
        : session.sessionId === sessionId,
    );
  }

  function sessionValidation(
    sessionDate: string,
    sessionTimeRange: string,
    sessionId: number,
  ) {
    if (!hasAnyTicket()) {
      return router.push('/session-apply');
    }

    const availableDates = Object.keys(userTicket.tickets).filter(
      (date) => userTicket.tickets[date],
    );

    if (!availableDates.includes(sessionDate)) {
      return router.push('/session-apply');
    }

    if (hasSessionConflict(sessionDate, sessionId)) {
      setApplyState(
        false,
        '중복 신청',
        '[중복 신청] 이미 신청한 세션입니다',
        false,
      );
      return router.push(`/session-schedule/${sessionId}`, { scroll: false });
    }

    const conflictingSession = findConflictingSession(
      sessionDate,
      sessionTimeRange,
    );

    if (conflictingSession) {
      setApplyState(
        false,
        '중복 신청',
        '이미 같은 시간대에 세션이 신청되어 있습니다.',
        true,
      );
      setConflictId(conflictingSession.sessionId);
      return router.push(`/session-schedule/${sessionId}`, { scroll: false });
    }

    applySession({ id: sessionId });
    setApplyState(true, '신청 완료', '세션이 신청 완료되었습니다.', false);
    router.push(`/session-schedule/${sessionId}`, { scroll: false });
  }

  return {
    hasAnyTicket,
    hasAllTickets,
    findConflictingSession,
    sessionValidation,
  };
}
