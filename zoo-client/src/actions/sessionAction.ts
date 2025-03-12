'use client';
import { useQuery } from '@tanstack/react-query';
import fetchSessionDetail from '@/services/sessionApi';

export const useSessionDetail = (sessionId: string) => {
  return useQuery({
    queryKey: ['session', sessionId],
    queryFn: () => fetchSessionDetail({ sessionId }),
    retry: false,
  });
};
