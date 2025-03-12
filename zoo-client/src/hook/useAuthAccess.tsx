'use client';
import { ACCESS_MESSAGES } from '@/constants/messages';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useAuthAccess() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  useEffect(() => {
    // const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }, []);

  const checkLoginAccess = (): void => {
    if (!isLoggedIn) {
      alert(ACCESS_MESSAGES.login);
      router.push('/login');
    }
    return;
  };

  return { isLoggedIn, checkLoginAccess };
}

// export default function canRegisterForSession(
//   userTicket: UserTicket,
//   selectedSession: Session,
// ): boolean {
//   const { hasDay1, hasDay2, registeredSessions } = userTicket;
//   const { date, timeRange } = selectedSession;

//   // 참가권이 하나도 없으면 신청 불가능
//   if (!hasDay1 && !hasDay2) return false;

//   // 사용자가 해당 날짜 참가권을 가지고 있는지 확인
//   const hasTicketForDay = date === 'day1' ? hasDay1 : hasDay2;

//   // 참가권이 해당 날짜에 없다면 신청 페이지로 이동
//   if (!hasTicketForDay) return false;

//   // 해당 날짜에 이미 신청한 세션이 있는지 확인
//   const userRegisteredSessions = registeredSessions[date] || [];

//   // 신청한 세션이 없으면 신청 가능
//   if (userRegisteredSessions.length === 0) return true;

//   // 같은 시간대에 이미 신청한 세션이 있는지 확인
//   const isTimeConflict = userRegisteredSessions.includes(timeRange);

//   // 같은 시간대에 신청한 세션이 있다면 신청 불가능
//   return !isTimeConflict;
// }
