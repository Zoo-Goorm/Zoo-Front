import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import useAuthStore from '@/store/common/auth/useAuthStore';

interface IPrivatedRouterProps {
  children: React.ReactNode;
}

const PrivatedRouter = ({ children }: IPrivatedRouterProps) => {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();
  console.log(isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) router.push('/none-member');
  }, [isAuthenticated, router]);

  return <>{children}</>;
};

export default PrivatedRouter;
