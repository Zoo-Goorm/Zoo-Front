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
}: IUserProfile) {
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
