import baseURL from '@/apis';
import { InsightDetailedProps } from '@/types/insight/insight';
import { InsightNoteListProps } from '@/types/insight/note';

export async function getInsights(id: number, page: number, sort: string) {
  const endpoint = `${baseURL}/api/v1/sessions/${id}/insight-notes?sort=${sort}&page=${page}`;

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      console.log(response.statusText);
    }

    return (await response.json()) as InsightNoteListProps;
  } catch (error) {
    console.error(error);
  }
}

export async function getInsightDetailed(id: number) {
  const endpoint = `${baseURL}/api/v1/insights/${id}`;

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      console.log(response.statusText);
    }

    return (await response.json()) as InsightDetailedProps;
  } catch (error) {
    console.error(error);
  }
}
