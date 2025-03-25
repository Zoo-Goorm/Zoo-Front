import { getSession, getSessions } from '@/services/session';
import { useQuery } from '@tanstack/react-query';

export const sessionsQueryKey = ['sessions'];
export const sessionQueryKey = (id: number) => ['session', id];

export function useSessions() {
  return useQuery({
    queryKey: sessionsQueryKey,
    queryFn: async () => {
      const res = await getSessions();
      return res.data;
    },
  });
}

export function useSession(id: number) {
  return useQuery({
    queryKey: sessionQueryKey(id),
    queryFn: async () => {
      const res = await getSession(id);
      return res.data;
    },
    enabled: !!id,
  });
}
