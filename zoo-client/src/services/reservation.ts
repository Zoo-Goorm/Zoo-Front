import { UserTicket } from '@/types/ticket/ticket';
import { fetchApi } from './api';

export async function getTicket() {
  const endpoint = `/api/v1/reservation/ticket`;

  return fetchApi<UserTicket>(endpoint, {
    method: 'GET',
  });
}

export async function ReApply(cancelId: number, addId: number) {
  const endpoint = `/api/v1/reservation/${cancelId}/${addId}`;

  return fetchApi(endpoint, {
    method: 'POST',
  });
}
