import { create } from 'zustand';
import fetchAuthToken from '@/services/auth';

interface AuthState {
  checkAuth: () => Promise<void>;
  getAccessToken: () => void;
}

interface AuthStore {
  isAuthenticated: boolean;
  userToken: string | null;
}

const useAuthStore = create<AuthState & AuthStore>((set) => ({
  userToken: '',
  isAuthenticated: false,
  checkAuth: async () => {
    try {
      await fetchAuthToken();
    } catch (error) {
      throw Error(`토큰을 헤더로 변환할 수 없습니다. ${error}`);
    }
  },
  getAccessToken: () => {
    const accessToken = localStorage.getItem('accessToken') || null;
    set({ userToken: accessToken });
  },
}));

export default useAuthStore;
