import { fetchApi } from './api';

export interface IUserProfile {
  name: string;
  nickname: string;
  email: string;
  phoneNumber: string;
  occupation: string;
  job: string;
  interestCategory: string;
  snsUrl: string;
  username: string;
}

export interface IPaymentProfile {
  userId: number;
  name: string;
  email: string;
}

export async function fetchUpdateProfile({
  name,
  nickname,
  email,
  phoneNumber,
  occupation,
  job,
  interestCategory,
  snsUrl,
}: Omit<IUserProfile, 'username'>) {
  const endpoint = `/api/v1/user/me`;
  const token =
    localStorage.getItem('noneMemberAccessToken') ||
    localStorage.getItem('accessToken');

  return fetchApi(endpoint, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      nickname,
      email,
      phoneNumber,
      occupation,
      job,
      interestCategory,
      snsUrl,
    }),
  });
}

export async function fetchUserProfile() {
  const endpoint = '/api/v1/user/me';
  const token =
    localStorage.getItem('noneMemberAccessToken') ||
    localStorage.getItem('accessToken');

  const response = await fetchApi<IUserProfile>(endpoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function fetchUserPaymentProfile() {
  const endpoint = '/api/v1/user/userInfo';
  const token =
    localStorage.getItem('noneMemberAccessToken') ||
    localStorage.getItem('accessToken');

  const response = await fetchApi<IPaymentProfile>(endpoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
