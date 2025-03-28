'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import useAuthStore from '@/store/common/auth/useAuthStore';
import useTokenStore from '@/store/common/auth/useTokenStore';
import { OblongButton } from '@/components';
import LogoIcon from '../logo/LogoIcon';
import { deleteCookie } from 'cookies-next';
import { useGetTicket } from '@/hooks/session/useReservation';
import { UserTicket } from '@/types/ticket/ticket';

interface INavigationBarProps {
  $type?: 'default' | 'main';
}

export default function NavigationBar({
  $type = 'default',
}: INavigationBarProps) {
  const router = useRouter();
  const { accessToken } = useTokenStore();
  const { isAuthenticated, getAccessToken } = useAuthStore();
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const { data: tickets = {} as UserTicket } = useGetTicket();

  const sessionId =
    tickets &&
    tickets.registeredSessions &&
    Object.values(tickets.registeredSessions)[0][0]?.sessionId;

  useEffect(() => {
    const authenticate = async () => {
      if (accessToken) await checkAuth();
    };

    authenticate();
    getAccessToken();
  }, [checkAuth]);

  const handleLogoutButton = () => {
    localStorage.clear();
    deleteCookie('Authorization');

    useAuthStore.setState({
      isAuthenticated: false,
      userToken: null,
      userType: 'none',
    });
  };

  const logoColorClasses = { default: '#4824FF', main: '#fff' };
  const labelColorClasses = {
    default: 'text-text-main',
    main: 'text-text-white',
  };

  return (
    <header className="bg-[rgba(255, 255, 255, 0.30)] z-50 flex w-[100%] items-center justify-between px-[6.25rem] py-24">
      <Link href="/">
        <LogoIcon width="142" height="26" fill={`${logoColorClasses[$type]}`} />
      </Link>
      <ul className="flex items-center gap-32">
        <Link href="/session-schedule">
          <li className={`body-sb-16 ${labelColorClasses[$type]}`}>세션</li>
        </Link>
        <Link href={`/sessions/${sessionId}/insight-notes`}>
          <li className={`body-sb-16 ${labelColorClasses[$type]}`}>
            인사이트 노트
          </li>
        </Link>
        <Link href="/mypage">
          <li className={`body-sb-16 ${labelColorClasses[$type]}`}>MY</li>
        </Link>
        <div className="w-[5.25rem]">
          {isAuthenticated ? (
            <OblongButton
              text="Logout"
              size="xs"
              $buttonStyle="thirary"
              onClick={handleLogoutButton}
            />
          ) : (
            <OblongButton
              text="Login"
              size="xs"
              $buttonStyle="primary"
              onClick={() => router.push('/login')}
            />
          )}
        </div>
      </ul>
    </header>
  );
}
