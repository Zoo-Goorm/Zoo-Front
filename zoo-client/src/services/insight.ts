import baseURL from '@/apis';

export async function getSessionInsights(id: string) {
  const endpoint = `${baseURL}/api/v1/sessions/${id}/insight-notes`;

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

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
