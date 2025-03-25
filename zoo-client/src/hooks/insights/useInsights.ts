import { createNote } from '@/actions/insight-form';
import { getInsightDetailed, getInsightNote } from '@/services/insight';
import {
  useMutation,
  useQuery,
  useQueryClient,
  useInfiniteQuery,
} from '@tanstack/react-query';

export const insightsQueryKey = (id: number, sort: string) => [
  'session',
  id,
  'insights',
  sort,
];

export const insightDetailedQueryKey = (id: number) => ['insights', id];

export const useGetInsightNote = (id: number, sort: string, size?: number) => {
  return useInfiniteQuery({
    queryKey: insightsQueryKey(id, sort),
    queryFn: async ({ pageParam }) => {
      const res = await getInsightNote(id, pageParam, sort, size ? size : 4);
      return res.data;
    },
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
    queryKey: insightDetailedQueryKey(id),
    queryFn: async () => {
      const res = await getInsightDetailed(id);
      return res.data;
    },
    enabled: !!id,
  });
}

export function useGetAnotherInsight() {
  return useQuery({
    queryKey: ['insight', 'another'],
    queryFn: async () => {
      const res = await getInsightNote(1, 1, 'like', 2);
      return res.data;
    },
  });
}

export function useMutationNoteForm(id: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: insightsQueryKey(id, 'latest'),
      });
    },
    onError: (error) => {
      console.error('메모 저장 실패:', error);
    },
  });
}
