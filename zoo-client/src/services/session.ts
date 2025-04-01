import { fetchApi } from './api';
import { ISessions, SessionId } from '@/types/session/session';
import { PaymentRequest } from '@/types/register/register';
import baseURL from '@/apis';

export async function getSessions() {
  const endpoint = '/api/v1/sessions/detailed';
  return fetchApi<ISessions>(endpoint, {
    method: 'GET',
  });
}

export async function getSession(id: number) {
  const endpoint = `/api/v1/sessions/${id}`;
  return fetchApi<SessionId>(endpoint, {
    method: 'GET',
  });
}

export async function SessionApply(id: number) {
  const endpoint = `/api/v1/reservation/${id}`;
  return fetchApi(endpoint, {
    method: 'POST',
  });
}

export async function fetchSessionPayment(data: PaymentRequest) {
  const endpoint = `${baseURL}/api/v1/payment/request`;
  const token =
    localStorage.getItem('noneMemberAccessToken') ||
    localStorage.getItem('accessToken');

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return await response.json();
}
