import { updateIsLike } from '@/services/like';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useMutationIsLike() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: { id: number }) => updateIsLike(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['insights'],
      });
    },
    onError: (error) => {
      console.error('Like 업데이트 실패', error);
    },
  });
}
