import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserTicket } from '@/types/ticket/ticket';
import { useGetTicket } from '../session/useReservation';
import useAuthStore from '@/store/common/auth/useAuthStore';

export default function useButtonAccess() {
  const { isAuthenticated } = useAuthStore();
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
    if (!isAuthenticated || !hasTicket) {
      setHide(false);
    } else {
      setHide(true);
    }
  }, [isAuthenticated, hasTicket]);

  const handler = () => {
    if (!isAuthenticated) {
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
