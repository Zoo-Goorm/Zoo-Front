import baseURL from '@/apis';
import { IReplyItemProps } from '@/types/insight/reply';

export async function getReplyList(id: number) {
  const endpoint = `${baseURL}/api/v1/insights/comments/${id}`;

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

    return (await response.json()) as IReplyItemProps[];
  } catch (error) {
    console.error(error);
  }
}
