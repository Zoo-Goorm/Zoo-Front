'use client';

import { useSessionStore } from '@/store/useSessionStore';

interface ISelectButtonProps {
  time: string;
  currentDate: string;
  sessionId: number;
  sessionTitle: string;
  isDisabled: boolean;
}

export default function SelectSessionButton({
  time,
  currentDate,
  sessionId,
  sessionTitle,
  isDisabled,
}: ISelectButtonProps) {
  const { addSelectedSession } = useSessionStore();

  const changeSelectedSession = () => {
    addSelectedSession({
      time: time,
      date: currentDate,
      title: sessionTitle,
      id: sessionId,
    });
  };

  return (
    <div className="flex size-full items-end justify-end">
      <button
        onClick={changeSelectedSession}
        className={`body-m-14 text-white ${isDisabled ? 'cursor-not-allowed bg-fill-primary-disabled' : 'bg-fill-primary'} rounded-md bg-fill-primary px-16 py-8`}
      >
        {isDisabled ? '세션 마감' : '세션 선택'}
      </button>
    </div>
  );
}
