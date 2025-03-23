import { getSessionInsights } from '@/services/insightService';
import { useInfiniteQuery } from '@tanstack/react-query';

export const sessionInsightsQueryKey = (id: string) => [
  'session',
  id,
  'insights',
];

export const useSessionInsight = (id: string) => {
  return useInfiniteQuery({
    queryKey: sessionInsightsQueryKey(id),
    queryFn: ({ pageParam = 1 }) => getSessionInsights(id, pageParam), // 기본값 1로 설정
    initialPageParam: 1,
    getNextPageParam: (last) => {
      console.log('last response:', last);
      return last.pageNumber + 1 < last.totalPages
        ? last.pageNumber + 1
        : undefined;
    },
  });
};
