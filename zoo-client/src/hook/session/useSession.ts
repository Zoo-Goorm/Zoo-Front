import { getSession, getSessions } from '@/services/sessionService';
import { useQuery } from '@tanstack/react-query';

export const sessionsQueryKey = ['sessions'];
export const sessionQueryKey = (id: string) => ['session', id];

export function useSessions() {
  return useQuery({
    queryKey: sessionsQueryKey,
    queryFn: async () => {
      const res = await getSessions();
      return res.data;
    },
  });
}

export function useSession(id: string) {
  return useQuery({
    queryKey: sessionQueryKey(id),
    queryFn: async () => {
      const res = await getSession(id);
      return res.data;
    },
    enabled: !!id,
  });
}
