'use client';
import {
  InfiniteData,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import { fetchInsights, fetchTopInsights } from '@/services/insight';
import { TInsights } from '@/types/insight/insightCard';

interface IPageParam {
  pageParam: number | unknown;
}

export function useGetTopInsightQuery() {
  return useQuery({
    queryKey: ['insights', 'topInsights'],
    queryFn: async () => {
      const response = await fetchTopInsights();
      return response.data;
    },
  });
}

export function useHorizontalInsightsQuery(
  sort: string,
  eventDay?: string,
  sessionId?: number,
) {
  return useQuery({
    queryKey: ['insights', 'horizontalInsights', sort, eventDay, sessionId],
    queryFn: async () => {
      const { content } = await fetchInsights(sort, 0, eventDay, sessionId);
      return content;
    },
  });
}

export function useInsightListInfiniteQuery(
  sort: string,
  eventDay?: string,
  sessionId?: number,
) {
  const fetchInsightsData = async ({ pageParam }: IPageParam) => {
    const page = typeof pageParam === 'number' ? pageParam : 0;
    const data = await fetchInsights(sort, page, eventDay, sessionId);

    return data;
  };

  return useInfiniteQuery<TInsights, Error, InfiniteData<TInsights>>({
    queryKey: ['insights', sort, eventDay, sessionId],
    queryFn: fetchInsightsData,
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.pageNumber + 1 : undefined,
  });
}
