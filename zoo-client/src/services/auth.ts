import baseURL from '@/apis';

async function fetchAuthToken() {
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

export default fetchAuthToken;
