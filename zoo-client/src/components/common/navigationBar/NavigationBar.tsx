'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import useAuthStore from '@/store/common/auth/useAuthStore';
import useTokenStore from '@/store/common/auth/useTokenStore';
import { OblongButton } from '@/components';

export default function NavigationBar() {
  const router = useRouter();
  const { accessToken } = useTokenStore();
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    const authenticate = async () => {
      if (accessToken) await checkAuth();
    };

    authenticate();
  }, [checkAuth]);

  return (
    <header className="bg-[rgba(255, 255, 255, 0.30)] flex w-[100%] items-center justify-between px-[6.25rem] py-24">
      <Link href="/">
        <Image
          src="/logo/logo.svg"
          alt="SynapseX 로고"
          width={140}
          height={25}
        />
      </Link>
      <ul className="flex items-center gap-32">
        <Link href="/session-schedule">
          <li className="body-sb-16 text-text-main">세션</li>
        </Link>
        <Link href="/insight-notes">
          <li className="body-sb-16 text-text-main">인사이트 노트</li>
        </Link>
        <Link href="/mypage">
          <li className="body-sb-16 text-text-main">MY</li>
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
