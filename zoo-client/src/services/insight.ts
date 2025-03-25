import { fetchApi } from './api';
import { IInsightContent, TInsights } from '@/types/insight/insightCard';
import { InsightDetailedProps } from '@/types/insight/insight';
import { InsightNoteListProps } from '@/types/insight/Note';

export async function fetchTopInsights() {
  const endpoint = '/api/v1/insights/top';

  return fetchApi<IInsightContent[]>(endpoint, {
    method: 'GET',
  });
}

interface ApiResponse<T> {
  data: T;
}

export async function fetchInsights(
  sort: string,
  page: number,
  eventDay?: string,
  sessionId?: number,
): Promise<TInsights> {
  let endpoint = `/api/v1/insights/list?&sort=${sort}&page=${page}`;

  if (eventDay && sessionId) {
    endpoint = `/api/v1/insights/list?&sort=${sort}&page=${page}&eventDay=${eventDay}&sessionId=${sessionId}`;
  } else if (eventDay) {
    endpoint = `/api/v1/insights/list?&sort=${sort}&page=${page}&eventDay=${eventDay}`;
  } else if (sessionId) {
    endpoint = `/api/v1/insights/list?&sort=${sort}&page=${page}&sessionId=${sessionId}`;
  }

  const response: ApiResponse<TInsights> = await fetchApi(endpoint, {
    method: 'GET',
  });

  return response.data;
}

export async function getInsightNote(
  id: number,
  page: number,
  sort: string,
  size: number,
) {
  const endpoint = `/api/v1/sessions/${id}/insight-notes?sort=${sort}&page=${page}&size=${size}`;
  return fetchApi<InsightNoteListProps>(endpoint, {
    method: 'GET',
    credentials: 'include',
  });
}

export async function getInsightDetailed(id: number) {
  const endpoint = `/api/v1/insights/${id}`;
  return fetchApi<InsightDetailedProps>(endpoint, {
    method: 'GET',
    credentials: 'include',
  });
}
