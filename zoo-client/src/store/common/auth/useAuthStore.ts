import { create } from 'zustand';
import { fetchAuthToken } from '@/services/auth';

interface AuthState {
  checkAuth: () => Promise<void>;
  getAccessToken: () => void;
}

interface AuthStore {
  isAuthenticated: boolean;
  userToken: string | null;
  userType: 'noneMember' | 'member' | 'none';
}

const useAuthStore = create<AuthState & AuthStore>((set) => ({
  userType: 'none',
  userToken: null,
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
    const noneMemberAccessToken =
      localStorage.getItem('noneMemberAccessToken') || null;

    if (accessToken) {
      set({
        isAuthenticated: true,
        userToken: accessToken,
        userType: 'member',
      });
    } else if (noneMemberAccessToken) {
      set({
        isAuthenticated: true,
        userToken: noneMemberAccessToken,
        userType: 'noneMember',
      });
    } else {
      set({ isAuthenticated: false, userToken: null, userType: 'none' });
    }
  },
}));

export default useAuthStore;
