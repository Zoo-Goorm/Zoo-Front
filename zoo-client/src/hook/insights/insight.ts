import { useQuery } from '@tanstack/react-query';
import { fetchTopInsights } from '@/services/insight';

export function getTopInsightQuery() {
  return useQuery({
    queryKey: ['topInsights'],
    queryFn: async () => {
      const response = await fetchTopInsights();

      return response.data;
    },
  });
}
