import { getSession, getSessions } from '@/services/session';
import { useQuery } from '@tanstack/react-query';

export const sessionsQueryKey = ['sessions'];
export const sessionQueryKey = (id: number) => ['session', id];

export function useSessions() {
  return useQuery({
    queryKey: sessionsQueryKey,
    queryFn: getSessions,
  });
}

export function useSession(id: number) {
  return useQuery({
    queryKey: sessionQueryKey(id),
    queryFn: () => getSession(id),
    enabled: !!id,
  });
}
