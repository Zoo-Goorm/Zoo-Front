'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import useAuthStore from '@/store/common/auth/useAuthStore';
import useTokenStore from '@/store/common/auth/useTokenStore';
import { OblongButton } from '@/components';
import LogoIcon from './logo/LogoIcon';

interface INavigationBarProps {
  $type?: 'default' | 'main';
}

export default function NavigationBar({
  $type = 'default',
}: INavigationBarProps) {
  const router = useRouter();
  const { accessToken } = useTokenStore();
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    const authenticate = async () => {
      if (accessToken) await checkAuth();
    };

    authenticate();
  }, [checkAuth]);

  const logoColorClasses = { default: '#4824FF', main: '#fff' };
  const labelColorClasses = { default: 'color: #000', main: 'color: #fff' };

  return (
    <header className="bg-[rgba(255, 255, 255, 0.30)] flex w-[100%] items-center justify-between px-[6.25rem] py-24">
      <Link href="/">
        <LogoIcon fill={`${logoColorClasses[$type]}`} />
      </Link>
      <ul className="flex items-center gap-32">
        <Link href="/session-schedule">
          <li className={`body-sb-16 ${labelColorClasses[$type]}`}>세션</li>
        </Link>
        <Link href="/insight-notes">
          <li className={`body-sb-16 ${labelColorClasses[$type]}`}>
            인사이트 노트
          </li>
        </Link>
        <Link href="/mypage">
          <li className={`body-sb-16 ${labelColorClasses[$type]}`}>MY</li>
        </Link>
        <div className="w-[5.25rem]">
          <OblongButton
            text="Login"
            size="xs"
            $buttonStyle="primary"
            onClick={() => router.push('/login')}
          />
        </div>
      </ul>
    </header>
  );
}
