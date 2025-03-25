import { getTicket } from '@/services/ticket';
import { useQuery } from '@tanstack/react-query';

export function useTicket() {
  return useQuery({
    queryKey: ['ticket'],
    queryFn: async () => {
      const res = await getTicket();
      return res.data;
    },
  });
}
