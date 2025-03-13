'use client';

import { PurchaseButton, RadioContent } from '@/components';
import SessionDetailModal from '@/components/common/modal/SessionDetailModal';
import { useState } from 'react';

import { useParams, useRouter } from 'next/navigation';
import { SESSION_SCHEDULE_MESSAGES } from '@/constants/messages';
import { useRadioStore } from '@/store/common/useRadioStore';

export default function SessionModal() {
  const [showSecondModal, setShowSecondModal] = useState(false);
  const id = useParams().id;
  const { activeState } = useRadioStore();
  const router = useRouter();

  const openSecondModal = () => {
    setShowSecondModal(true);
  };

  const sessionApplyHandler = () => {
    console.log(activeState, id);
    alert('세션 신청이 완료되었습니다!');
    router.back();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg-black/40">
      <div className="flex w-full max-w-[800px] flex-col rounded-sm bg-bg-secondary p-32 text-text-main shadow-md">
        {!showSecondModal ? (
          <SessionDetailModal openSecondModal={openSecondModal} />
        ) : (
          <div className="flex flex-col gap-10">
            <RadioContent />
            <PurchaseButton
              func={sessionApplyHandler}
              size={48}
              text={SESSION_SCHEDULE_MESSAGES.buttonModalText}
            />
          </div>
        )}
      </div>
    </div>
  );
}
