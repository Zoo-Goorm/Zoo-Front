import { getTicket, ReApply } from '@/services/reservation';
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
      alert(`세션 변경이 정상정으로 신청되었습니다`);

      queryClient.invalidateQueries({ queryKey: ['ticket'] });
    },
    onError: (error) => {
      alert(`세션 변경에 실패하였습니다 (${error})`);
    },
  });
}
