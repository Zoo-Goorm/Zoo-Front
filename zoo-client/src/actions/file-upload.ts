'use server';

import baseURL from '@/apis';
import { cookies } from 'next/headers';

export async function getServerAuthToken() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('access_token')?.value;
  return authToken;
}

export async function getPresignedUrls(file: File) {
  const token = await getServerAuthToken();
  const response = await fetch(`${baseURL}/s3/presigned-urls`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
    body: JSON.stringify([file.name]),
  });

  if (!response.ok) {
    throw new Error(`Failed to get presigned URLs: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

export async function uploadFilesToS3(
  files: File[],
  urls: { url: string; fileName: string }[],
) {
  return await Promise.all(
    files.map((file, index) =>
      fetch(urls[index].url, {
        method: 'PUT',
        body: file,
        headers: { 'Content-Type': file.type },
      }),
    ),
  );
}
