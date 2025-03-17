'use client';

import { useRouter } from 'next/navigation';
import LoginIcon from './icon/LoginIcon';

interface ILoginButtonProps {
  loginRouter: string;
  type: 'kakao' | 'google' | 'nonMember';
}

export default function LoginButton({ type, loginRouter }: ILoginButtonProps) {
  const router = useRouter();

  const ButtonTypeClasses = {
    kakao: 'bg-fill-kakao-login border-none',
    google: 'bg-bg-primary border-stroke-thirary border border-solid',
    nonMember: 'bg-bg-secondary border-none',
  };

  const ButtonText = {
    kakao: '카카오 회원가입/로그인',
    google: '구글 회원가입/로그인',
    nonMember: '비회원',
  };

  const buttonIconColorClasses = {
    kakao: '#ffffff',
    google: '#000000',
  };

  return (
    <button
      onClick={() => router.push(loginRouter)}
      className={`website:title-sb-18 mobile:body-sb-16 flex items-center justify-center gap-8 rounded-[0.25rem] px-44 py-12 text-text-main mobile:w-[17.5rem] website:w-[100%] ${ButtonTypeClasses[type]}`}
    >
      {type === 'nonMember' ? undefined : (
        <LoginIcon fill={buttonIconColorClasses[type]} />
      )}
      <span>{ButtonText[type]}</span>
    </button>
  );
}
