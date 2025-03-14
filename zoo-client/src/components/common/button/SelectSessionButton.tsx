'use client';

import { useSessionStore } from '@/store/common/useSessionStore';
import { SelectSession } from '@/types/session/session';

export default function SelectSessionButton({
  currentDate,
  selectedSessionDate,
  isDisabled,
}: {
  currentDate: string;
  selectedSessionDate: SelectSession;
  isDisabled: boolean;
}) {
  const { addSelectedSession } = useSessionStore();

  const changeSelectedSession = () => {
    addSelectedSession({ currentDate, ...selectedSessionDate });
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
