import baseURL from '@/apis';
import { ISessions } from '@/types/session/session';

export async function getSession(id: number) {
  const endpoint = `${baseURL}/api/v1/sessions/${id}`;
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

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getSessions() {
  const endpoint = `${baseURL}/api/v1/sessions/detailed`;
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

    return (await response.json()) as ISessions;
  } catch (error) {
    console.error(error);
  }
}
