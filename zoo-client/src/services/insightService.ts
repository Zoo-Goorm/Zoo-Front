'use server';
import baseURL from '@/apis';
import { cookies } from 'next/headers';
// import { InsightNoteListProps } from '@/types/insight/Note';

export async function getServerAuthToken() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('access_token')?.value;
  return authToken;
}

// export async function getSessionInsights(id: string, page: number = 1) {

//   const pageIndex = page - 1;
//   const endpoint = `/api/v1/sessions/${id}/insight-notes?sort=latest&page=${pageIndex}&size=10`;
//   return fetchApi<InsightNoteListProps>(endpoint, {
//     method: 'GET',

//   });
// }

export async function getSessionInsights(
  id: string,
  page: number = 0,
  sort: string = 'latest',
  size: number = 5,
) {
  const token = await getServerAuthToken();
  const endpoint = `${baseURL}/api/v1/sessions/${id}/insight-notes?sort=${sort}&page=${page}&size=${size}`;
  console.log('🔍 엔드포인트 확인:', endpoint);
  console.log('🔍 토큰 확인:', token);

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      credentials: 'include',
    });

    if (!response.ok) {
      console.log(response.statusText);
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('❌ GET 요청 에러:', error);
    throw error;
  }
}
