'use server';

import baseURL from '@/apis';
import { revalidatePath } from 'next/cache';

export async function createReply(formData: FormData) {
  const content = formData.get('content');
  const id = formData.get('id');
  const endpoint = `${baseURL}/api/v1/insights/${id}/comments`;

  console.log(endpoint);

  console.log(id);
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify({ content }),
      },
      credentials: 'include',
    });
    if (!response.ok) {
      console.log(response.statusText);
    }
    console.log('POST 완료');
    revalidatePath(`/sessions/${id}/insight-notes`);
  } catch (error) {
    console.error(error);
  }
}

export async function createNote(formData: FormData) {
  const memo = formData.get('content');
  const isAnonymous = formData?.get('anon');
  const isPublic = formData?.get('public');
  const sessionId = formData.get('id');
  const isDraft = false;
  const endpoint = `${baseURL}/api/v1/insights`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify({
          sessionId,
          memo,
          isPublic,
          isAnonymous,
          isDraft,
        }),
      },
      credentials: 'include',
    });
    if (!response.ok) {
      console.log(response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}
