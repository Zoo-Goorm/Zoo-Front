import { getKeywords } from '@/services/keywordsService';
import { useQuery } from '@tanstack/react-query';

export function useKeywords() {
  return useQuery({
    queryKey: ['sessions', 'keywords'],
    queryFn: async () => {
      const res = await getKeywords();
      return res.data;
    },
  });
}
