import baseURL from '@/apis';
import { fetchApi } from './api';

export async function fetchAuthToken() {
  const endpoint = `${baseURL}/api/v1/user/auth/token`;

  const response = await fetch(endpoint, {
    method: 'GET',
    credentials: 'include',
  });

  if (!response.ok) throw new Error(`HTTP error status: ${response.status}`);

  const authorizationHeader = response.headers.get('Authorization');

  if (authorizationHeader) {
    const token = authorizationHeader.split(' ')[1];
    localStorage.setItem('accessToken', token);
  }

  return null;
}

export async function fetchEmailVerification(email: string) {
  const endpoint = '/api/v1/user/email-auth';

  return await fetchApi(endpoint, {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
}
