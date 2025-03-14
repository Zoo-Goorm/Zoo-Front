import { ISessions, Session } from '@/types/session/session';
import { fetchApi } from './api';

export async function getSessions() {
  const endpoint = '/api/v1/sessions/detailed';
  return fetchApi<ISessions>(endpoint, {
    method: 'GET',
  });
}

export async function getKeywords() {
  const endpoint = '/api/v1/keywords';
  return fetchApi<string[]>(endpoint, {
    method: 'GET',
  });
}

export async function getSession(id: string) {
  const endpoint = `/api/v1/sessions/${id}`;
  return fetchApi<Session>(endpoint, {
    method: 'GET',
  });
}
