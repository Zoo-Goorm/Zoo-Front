import { fetchApi } from './api';

export async function updateIsLike(id: number) {
  const endpoint = `/api/v1/insights/${id}/like`;

  return fetchApi(endpoint, {
    method: 'POST',
  });
}
