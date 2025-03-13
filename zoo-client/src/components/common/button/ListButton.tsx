'use client';

import { useSessionStore } from '@/store/common/useSessionStore';
import RightArrow from './icon/RightArrow';
import { Session } from '@/types/session/session';
import { useRouter } from 'next/navigation';

interface IListButtonProps {
  session: Session;
  type: 'primary' | 'thirary';
  text: '상세 보기' | '세션 신청';
}

export default function ListButton({ session, type, text }: IListButtonProps) {
  const { setCurrentSession } = useSessionStore();
  const router = useRouter();

  const buttonTypeClasses = {
    primary: 'bg-fill-primary-list text-text-white',
    thirary: 'bg-fill-thirary-list text-text-headline',
  };

  const buttonIconColorClasses = {
    primary: '#eee',
    thirary: '#2D2D2D',
  };

  const listButtonHandler = () => {
    if (type === 'primary') {
    } else {
      setCurrentSession(session);
      router.push(`/session-schedule/${session.id}`, { scroll: false });
      // fetch test
      // router.push(`/session-schedule/9007199254740991`, { scroll: false });
    }
  };

  return (
    <div
      onClick={() => listButtonHandler()}
      className={`headline-sb-40 flex cursor-pointer items-center px-40 py-0 backdrop-blur-[10px] mobile:h-[8.75rem] mobile:w-[23.8125rem] website:h-[200px] website:w-[31.9375rem] ${buttonTypeClasses[type]} justify-between`}
    >
      <span>{text}</span>
      <RightArrow fill={buttonIconColorClasses[type]} />
    </div>
  );
}
