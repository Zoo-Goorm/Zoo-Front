'use client';

import RightArrow from './icon/RightArrow';
import { Session } from '@/types/session/session';
import { useApplyStore } from '@/store/common/useApplyStore';
import { useRouter } from 'next/navigation';
import useApplyValidation from '@/hooks/access/useApplyValidation';

interface IListButtonProps {
  time: string;
  currentDate: string;
  session: Session;
  type: 'primary' | 'thirary';
  text: '상세 보기' | '세션 신청';
}

export default function ListButton({
  time,
  currentDate,
  session,
  type,
  text,
}: IListButtonProps) {
  const { sessionValidation } = useApplyValidation();
  const token = localStorage.getItem('accessToken');

  const buttonTypeClasses = {
    primary: 'bg-fill-primary-list text-text-white',
    thirary: 'bg-fill-thirary-list text-text-headline',
  };
  const { setApplyState } = useApplyStore();
  const { setModalType } = useApplyStore();
  const router = useRouter();

  const buttonIconColorClasses = {
    primary: '#eee',
    thirary: '#2D2D2D',
  };

  const listButtonHandler = () => {
    setModalType(type);

    if (session.maxCapacity == session.participantCount) {
      setApplyState(
        false,
        '신청 마감',
        `${session.name} 세션이 이미 신청 마감되어 실패했습니다.`,
        false,
      );
    }

    if (type === 'primary') {
      if (!token) {
        router.push('/login', { scroll: false });
      } else {
        sessionValidation(currentDate, time, session.id);
      }
      return;
    }

    if (type === 'thirary') {
      router.push(`/session-schedule/${session.id}`, { scroll: false });
      if (token) {
        sessionValidation(currentDate, time, session.id);
      }
    }
    return;
  };

  return (
    <div
      onClick={listButtonHandler}
      className={`headline-sb-40 flex cursor-pointer items-center px-40 py-0 backdrop-blur-[10px] mobile:h-[8.75rem] mobile:w-[23.8125rem] website:h-[196px] website:w-[31.9375rem] ${buttonTypeClasses[type]} justify-between`}
    >
      <span>{text}</span>
      <RightArrow fill={buttonIconColorClasses[type]} />
    </div>
  );
}
