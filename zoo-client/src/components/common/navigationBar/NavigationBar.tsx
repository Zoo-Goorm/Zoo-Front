'use client';

import { useEffect } from 'react';
import useAuthStore from '@/store/common/auth/useAuthStore';
// import useTokenStore from '@/store/common/auth/useTokenStore';

export default function NavigationBar() {
  // const { accessToken } = useTokenStore();
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    const authenticate = async () => {
      // if (accessToken) await checkAuth();
    };

    authenticate();
  }, [checkAuth]);

  return <div className="h-[5rem] self-stretch bg-[#d9d9d9]" />;
}
