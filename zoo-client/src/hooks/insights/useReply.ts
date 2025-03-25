import { getReplyList } from '@/services/reply';
import { useQuery } from '@tanstack/react-query';

export default function useGetReply(id: number) {
  return useQuery({
    queryKey: ['reply', id],
    queryFn: async () => {
      const res = await getReplyList(id);
      return res.data;
    },
  });
}
