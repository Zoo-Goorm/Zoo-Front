import { UserTicket } from '@/types/ticket/ticket';
import { fetchApi } from './api';

export async function getTicket() {
  const endpoint = `/api/v1/reservation/ticket`;

  return fetchApi<UserTicket>(endpoint, {
    method: 'GET',
    credentials: 'include',
  });
}
