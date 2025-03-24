import { getSessionInsights } from '@/services/insight';
import { useInfiniteQuery } from '@tanstack/react-query';

export const sessionInsightsQueryKey = (id: string, sort: string) => [
  'session',
  id,
  'insights',
  sort,
];

export const useSessionInsight = (id: string, sort: string) => {
  return useInfiniteQuery({
    queryKey: sessionInsightsQueryKey(id, sort),
    queryFn: ({ pageParam }) => getSessionInsights(id, pageParam, sort),
    initialPageParam: 0,
    getNextPageParam: (last) => {
      if (last && last.pageNumber + 1 < last.totalPages) {
        return last.pageNumber + 1;
      }
      return undefined;
    },
  });
};
