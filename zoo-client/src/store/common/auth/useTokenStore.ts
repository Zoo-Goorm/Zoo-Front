import { create } from 'zustand';
import { getCookie } from 'cookies-next';

interface TokenState {
  accessToken: string | null;
}

const useTokenStore = create<TokenState>(() => ({
  accessToken: getCookie('Authorization') as string | null,
}));

export default useTokenStore;
