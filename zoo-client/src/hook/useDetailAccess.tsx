'use client';
import { useState } from 'react';
import { userTicket } from '@/mock/ticket';
import { useRouter } from 'next/navigation';
import { useApplyStore } from '@/store/common/useApplyStore';

export default function useDetailAccess() {
  const token = true;
  const router = useRouter();
  const [tickets] = useState(userTicket.tickets);
  const [registeredSessions] = useState(userTicket.registeredSessions);
  const { setApplyState } = useApplyStore();

  function hasAnyTicket(): boolean {
    return Object.values(userTicket.tickets).some((hasTicket) => hasTicket);
  }
  function hasAllTicket(): boolean {
    return Object.values(userTicket.tickets).every((t) => t);
  }
  function hasConflictingSession(date: string, timeRange: string): boolean {
    if (!userTicket.registeredSessions[date]) return false;

    const [startTime, endTime] = timeRange.split('-').map((t) => t.trim());

    return userTicket.registeredSessions[date].some((session) => {
      const [sessionStart, sessionEnd] = session.timeRange
        .split('-')
        .map((t) => t.trim());
      return !(endTime <= sessionStart || startTime >= sessionEnd);
    });
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
      // console.log('하나의 날짜에 참가권이 있습니다.');
      const availableDates = Object.keys(userTicket.tickets).filter(
        (date) => userTicket.tickets[date],
      );

      if (availableDates.includes(sessionDate)) {
        if (hasSessionConflictForId(sessionDate, sessionId)) {
          // console.log('이미 신청한 세션입니다');
          setApplyState(
            false,
            '중복 신청',
            '[중복 신청] 이미 신청한 세션입니다',
            sessionId,
            false,
          );
          router.push(`/session-schedule/${sessionId}`, { scroll: false });
        } else if (hasConflictingSession(sessionDate, sessionTimeRange)) {
          // console.log('같은 시간대에 세션이 존재합니다');
          setApplyState(
            false,
            '중복 신청',
            `이미 같은 시간대에 세션이 신청되어 있습니다.`,
            sessionId,
            true,
          );
          router.push(`/session-schedule/${sessionId}`, { scroll: false });
        } else {
          setApplyState(
            true,
            '신청 완료',
            '세션이 신청 완료되었습니다.',
            sessionId,
            false,
          );
          router.push(`/session-schedule/${sessionId}`, { scroll: false });
        }
      } else {
        // console.log('새롭게 신청해 주세요!');
        router.push('/session-apply');
      }
    } else {
      // console.log('참가권이 없습니다. 신청 페이지로 이동합니다.');
      router.push('/session-apply');
    }
  };

  return {
    tickets,
    registeredSessions,
    hasAnyTicket,
    hasAllTicket,
    handleAnyTicket,
  };
}
