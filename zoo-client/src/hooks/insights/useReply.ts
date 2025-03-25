import { createReply } from '@/actions/insight-form';
import { getReplyList } from '@/services/reply';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export default function useGetReply(id: number) {
  return useQuery({
    queryKey: ['reply', id],
    queryFn: async () => {
      const res = await getReplyList(id);
      return res.data;
    },
  });
}

export function useMutationReplyForm(id: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createReply,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['reply', id],
      });
    },
    onError: (error) => {
      console.error('메모 저장 실패:', error);
    },
  });
}
