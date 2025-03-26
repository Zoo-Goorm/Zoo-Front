import { ISessions, SessionId } from '@/types/session/session';
import { fetchApi } from './api';

export async function getSessions() {
  const endpoint = '/api/v1/sessions/detailed';
  return fetchApi<ISessions>(endpoint, {
    method: 'GET',
  });
}

export async function getSession(id: number) {
  const endpoint = `/api/v1/sessions/${id}`;
  return fetchApi<SessionId>(endpoint, {
    method: 'GET',
  });
}

export async function SessionApply(id: number) {
  const endpoint = `/api/v1/reservation/${id}`;
  return fetchApi(endpoint, {
    method: 'POST',
  });
}
