import { getKeywords } from '@/services/keywords';
import { useQuery } from '@tanstack/react-query';

export function useKeywords() {
  return useQuery({
    queryKey: ['sessions', 'keywords'],
    queryFn: getKeywords,
  });
}
