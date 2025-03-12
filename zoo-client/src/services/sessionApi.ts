export default async function fetchSessionDetail({
  sessionId,
}: {
  sessionId: string;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/v1/sessions/${sessionId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const resData = await res.json();
  return resData;
}
