import { ISessions, SessionId } from '@/types/session/session';
import { fetchApi } from './api';

export async function getSessions() {
  // const token = await getServerAuthToken();
  const endpoint = '/api/v1/sessions/detailed';
  return fetchApi<ISessions>(endpoint, {
    method: 'GET',
  });
}

export async function getSession(id: string) {
  const endpoint = `/api/v1/sessions/${id}`;
  return fetchApi<SessionId>(endpoint, {
    method: 'GET',
  });
}
