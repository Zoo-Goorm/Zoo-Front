import { getInsightDetailed, getInsights } from '@/services/insight';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const insightsQueryKey = (id: number, sort: string) => [
  'session',
  id,
  'insights',
  sort,
];

export const insightDetailed = (id: number) => ['insights', id];

export const useGetInsights = (id: number, sort: string) => {
  return useInfiniteQuery({
    queryKey: insightsQueryKey(id, sort),
    queryFn: ({ pageParam }) => getInsights(id, pageParam, sort),
    initialPageParam: 0,
    getNextPageParam: (last) => {
      if (last && last.pageNumber + 1 < last.totalPages) {
        return last.pageNumber + 1;
      }
      return undefined;
    },
  });
};

export function useInsightsDetailed(id: number) {
  return useQuery({
    queryKey: insightDetailed(id),
    queryFn: () => getInsightDetailed(id),
    enabled: !!id,
  });
}
