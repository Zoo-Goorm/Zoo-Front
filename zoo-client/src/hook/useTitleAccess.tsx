import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { userTicket } from '@/mock/ticket';

export default function useTitleAccess() {
  const token = true;
  const router = useRouter();

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
