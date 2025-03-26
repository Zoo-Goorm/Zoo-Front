'use server';
import { fetchApi } from './api';

export async function updateIsLike(id: number) {
  const endpoint = `/api/v1/insights/${id}/like`;
  console.log(endpoint, '엔드 포인트 확인');

  return fetchApi(endpoint, {
    method: 'POST',
  });
}
