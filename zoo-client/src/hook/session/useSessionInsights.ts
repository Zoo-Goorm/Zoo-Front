// import { getSessionInsights } from '@/services/insight';
// import { useInfiniteQuery } from '@tanstack/react-query';

// export const sessionInsightsQueryKey = (id: string) => [
//   'session',
//   id,
//   'insights',
// ];

// export const useSessionInsight = (id: string) => {
//   return useInfiniteQuery({
//     queryKey: sessionInsightsQueryKey(id),
//     queryFn: ({ pageParam }) => getSessionInsights(id, pageParam, 0, 0),
//     initialPageParam: 0,
//     getNextPageParam: (last) => {
//       console.log('last response:', last);
//       return last.pageNumber + 1 < last.totalPages
//         ? last.pageNumber + 1
//         : undefined;
//     },
//   });
// };
