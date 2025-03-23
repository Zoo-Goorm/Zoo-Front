'use server';
import baseURL from '@/apis';

export async function getSessionInsights(
  id: string,
  page: number,
  sort: string,
  size: number,
) {
  const endpoint = `${baseURL}/api/v1/sessions/${id}/insight-notes?sort=${sort}&page=${page}&size=${size}`;

  console.log(endpoint);
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
