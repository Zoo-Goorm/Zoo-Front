import baseURL from '@/apis';

export async function createReply(formData: FormData) {
  const content = formData.get('content');
  const id = formData.get('id');
  const endpoint = `${baseURL}/api/v1/insights/${id}/comments`;

  try {
    // await Delay(2000);
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),

      credentials: 'include',
    });
    if (!response.ok) {
      console.log(response.statusText);
    }
    console.log('REPLY POST 완료');
    // revalidatePath(`/sessions/${id}/insight-notes`);
  } catch (error) {
    console.error(error);
  }
}

export async function createNote(formData: FormData) {
  const sessionId = Number(formData.get('sessionId'));
  const memo = formData.get('memo');
  const isAnonymous = formData.get('isAnonymous') === '익명';
  const isPublic = formData.get('isPublic') === '공개';
  const isDraft = false;
  const endpoint = `${baseURL}/api/v1/insights`;
  const payload = {
    sessionId: sessionId,
    memo: memo,
    isPublic: isPublic,
    isAnonymous: isAnonymous,
    isDraft: isDraft,
  };
  console.log('✅ NOTE:', payload);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),

      credentials: 'include',
    });
    if (!response.ok) {
      console.log(response.statusText);
    }
    console.log('REPLY POST 완료');
    const responseData = await response.json();
    console.log('✅ NOTE POST 완료:', responseData);
    return responseData;
  } catch (error) {
    console.error(error);
  }
}
