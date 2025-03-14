'use client';

import useDetailAccess from '@/hook/useDetailAccess';
import RightArrow from './icon/RightArrow';
import { Session } from '@/types/session/session';
import { useSessionStore } from '@/store/common/useSessionStore';
import { useApplyStore } from '@/store/common/useApplyStore';

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
  const { handleAnyTicket } = useDetailAccess();
  const buttonTypeClasses = {
    primary: 'bg-fill-primary-list text-text-white',
    thirary: 'bg-fill-thirary-list text-text-headline',
  };
  const { setCurrentSession } = useSessionStore();
  const { setModalType } = useApplyStore();

  const buttonIconColorClasses = {
    primary: '#eee',
    thirary: '#2D2D2D',
  };

  const listButtonHandler = () => {
    if (type === 'primary') {
      setModalType('primary');
      handleAnyTicket(currentDate, time, session.id);
      setCurrentSession(session);
    } else {
      setModalType('thirary');
      handleAnyTicket(currentDate, time, session.id);
      setCurrentSession(session);
    }
  };

  return (
    <div
      onClick={listButtonHandler}
      className={`headline-sb-40 flex cursor-pointer items-center px-40 py-0 backdrop-blur-[10px] mobile:h-[8.75rem] mobile:w-[23.8125rem] website:h-[200px] website:w-[31.9375rem] ${buttonTypeClasses[type]} justify-between`}
    >
      <span>{text}</span>
      <RightArrow fill={buttonIconColorClasses[type]} />
    </div>
  );
}
