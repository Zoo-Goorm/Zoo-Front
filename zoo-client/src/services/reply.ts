import { IReplyItemProps } from '@/types/insight/reply';
import { fetchApi } from './api';

export async function getReplyList(id: number) {
  const endpoint = `/api/v1/insights/comments/${id}`;

  return fetchApi<IReplyItemProps[]>(endpoint, {
    method: 'GET',
  });
}
