'use client';

import { useSessionStore } from '@/store/common/useSessionStore';
import { SelectSession } from '@/types/session/session';
import { SessionApplyModal } from '@/components';
import { useState } from 'react';
import { useApplyStore } from '@/store/common/useApplyStore';
import useApplyValidation from '@/hooks/access/useApplyValidation';

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
  const { findConflictingSession } = useApplyValidation();
  const [isOpen, setIsOpen] = useState(false);
  const { setApplyState, setConflictId } = useApplyStore();

  const changeSelectedSession = () => {
    const session = findConflictingSession(
      currentDate,
      selectedSessionDate.time,
    );
    if (session) {
      setApplyState(
        false,
        '중복 신청',
        `이미 같은 시간대에 세션이 신청되어 있습니다.`,
        true,
      );
      if (session) {
        setConflictId(session.sessionId);
      }
      setIsOpen(true);
    } else {
      addSelectedSession({ currentDate, ...selectedSessionDate });
    }
  };

  return (
    <div className="flex justify-end">
      <button
        onClick={changeSelectedSession}
        className={`body-m-14 text-white ${isDisabled ? 'cursor-not-allowed bg-fill-primary-disabled' : 'bg-fill-primary'} rounded-md bg-fill-primary px-16 py-8`}
      >
        {isDisabled ? '세션 마감' : '세션 선택'}
      </button>
      {isOpen && (
        <div className="z-50">
          <SessionApplyModal closeModal={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
}
