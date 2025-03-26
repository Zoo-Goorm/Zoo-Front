import { UserTicket } from '@/types/ticket/ticket';
import { fetchApi } from './api';

export async function getTicket() {
  const endpoint = `/api/v1/reservation/ticket`;

  return fetchApi<UserTicket>(endpoint, {
    method: 'GET',
    credentials: 'include',
  });
}

export async function ReApply(cancelId: number, addId: number) {
  const endpoint = `/api/v1/reservation/${cancelId}/${addId}`;

  const res = await fetchApi(endpoint, {
    method: 'POST',
    credentials: 'include',
  });
  console.log('확인', res);
}
