import { getTicket, ReApply } from '@/services/reservation';
import { SessionApply } from '@/services/session';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useGetTicket() {
  return useQuery({
    queryKey: ['ticket'],
    queryFn: async () => {
      const res = await getTicket();
      return res.data;
    },
  });
}

export function useMutationReApply() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ cancelId, addId }: { cancelId: number; addId: number }) =>
      ReApply(cancelId, addId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ticket'] });
    },
    onError: (error) => {
      alert(`세션 변경에 실패하였습니다 (${error})`);
    },
  });
}

export function useMutationApply() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: { id: number }) => SessionApply(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ticket'] });
    },
    onError: (error) => {
      alert(`세션 신청에 실패하였습니다 (${error})`);
    },
  });
}
