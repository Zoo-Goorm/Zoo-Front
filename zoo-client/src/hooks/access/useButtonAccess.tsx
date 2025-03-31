import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserTicket } from '@/types/ticket/ticket';
import { useGetTicket } from '../session/useReservation';

export default function useButtonAccess() {
  const token =
    localStorage.getItem('noneMemberAccessToken') ||
    localStorage.getItem('accessToken');
  const router = useRouter();
  const { data } = useGetTicket();

  const userTicket: UserTicket = data ?? {
    tickets: {},
    registeredSessions: {},
  };

  const hasTicket = Object.values(userTicket.tickets).some(
    (hasTicket) => hasTicket,
  );

  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (!token || !hasTicket) {
      setHide(false);
    } else {
      setHide(true);
    }
  }, [token, hasTicket]);

  const handler = () => {
    if (!token) {
      router.push('/login');
    } else {
      if (!hasTicket) {
        router.push('/session-apply');
      }
    }
  };

  return {
    hide,
    handler,
  };
}
