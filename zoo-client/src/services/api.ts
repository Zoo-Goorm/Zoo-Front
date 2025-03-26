export type ApiResponse<T> = {
  data: T;
  status: number;
};

export type ApiError = {
  message: string;
  status: number;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<ApiResponse<T>> {
  const url = `${API_URL}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  let data;
  try {
    data = await response.json();
  } catch (error) {
    data = null;
  }

  if (!response.ok) {
    throw {
      message: data.message || 'API 요청 실패',
      status: response.status,
    } as ApiError;
  }

  return {
    data,
    status: response.status,
  };
}
