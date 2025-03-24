import { getReplyList } from '@/services/reply';
import { useQuery } from '@tanstack/react-query';

export default function useGetReply(id: number) {
  return useQuery({
    queryKey: ['apply', id],
    queryFn: () => getReplyList(id),
  });
}
