import { getKeywords, getSessions } from '@/app/services/session';
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

export function useKeywords() {
  return useQuery({
    queryKey: ['sessions', 'keywords'],
    queryFn: async () => {
      const res = await getKeywords();
      return res.data;
    },
  });
}
// export function useSession(id: string) {
//   return useQuery({
//     queryKey: sessionQueryKey(id),
//     queryFn: async () => {
//       const response = await getSessions(id);
//       return response.data;
//     },
//     enabled: !!id, // id가 존재할 때만 쿼리 실행
//   });
// }
