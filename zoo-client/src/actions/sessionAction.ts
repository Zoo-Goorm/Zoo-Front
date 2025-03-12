'use client';
import { useQuery } from '@tanstack/react-query';
import {
  fetchSessionDetail,
  fetchSessions,
  fetchSessionsDetailed,
} from '@/services/sessionApi';

export const useSessionDetail = (sessionId: string) => {
  return useQuery({
    queryKey: ['session', sessionId],
    queryFn: () => fetchSessionDetail({ sessionId }),
    retry: false,
  });
};

export const useSessions = () => {
  return useQuery({
    queryKey: ['sessions'],
    queryFn: () => fetchSessions(),
    retry: false,
  });
};

export const useSessionsDetailed = () => {
  return useQuery({
    queryKey: ['sessionsDetailed'],
    queryFn: () => fetchSessionsDetailed(),
    retry: false,
  });
};
