import { fetchApi } from './api';

export async function getKeywords() {
  const endpoint = '/api/v1/keywords';
  return fetchApi<string[]>(endpoint, {
    method: 'GET',
  });
}
