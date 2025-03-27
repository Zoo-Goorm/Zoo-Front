import { getTicket, ReApply } from '@/services/reservation';
import { SessionApply } from '@/services/session';
import { useApplyStore } from '@/store/common/useApplyStore';
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
  const { setApplyState } = useApplyStore();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ cancelId, addId }: { cancelId: number; addId: number }) =>
      ReApply(cancelId, addId),
    onSuccess: () => {
      setApplyState(
        true,
        '세션 변경 완료',
        '세션 변경이 완료되었습니다.',
        false,
      );

      queryClient.invalidateQueries({ queryKey: ['ticket'] });
    },
    onError: (error) => {
      setApplyState(
        true,
        '세션 변경 실패',
        `세션 변경에 실패하였습니다 (${error})`,
        false,
      );
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
