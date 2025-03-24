import baseURL from '@/apis';
import { fetchApi } from './api';
import { IInsightContent } from '@/types/insight/insightCard';

export async function fetchTopInsights() {
  const endpoint = '/api/v1/insights/top';

  return fetchApi<IInsightContent[]>(endpoint, {
    method: 'GET',
  });
}

export async function getSessionInsights(
  id: string,
  page: number,
  sort: string,
  size: number,
) {
  const endpoint = `${baseURL}/api/v1/sessions/${id}/insight-notes?sort=${sort}&page=${page}&size=${size}`;

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.log(response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
