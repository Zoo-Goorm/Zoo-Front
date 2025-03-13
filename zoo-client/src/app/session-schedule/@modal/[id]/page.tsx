'use client';

import { SessionRadioModal } from '@/components';
import SessionDetailModal from '@/components/common/modal/SessionDetailModal';
import { useState } from 'react';

export default function SessionModal() {
  const [showSecondModal, setShowSecondModal] = useState(false);

  const openSecondModal = () => {
    setShowSecondModal(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg-black/40">
      <div className="flex w-full max-w-[800px] flex-col rounded-sm bg-bg-secondary p-32 text-text-main shadow-md">
        {!showSecondModal ? (
          <SessionDetailModal openSecondModal={openSecondModal} />
        ) : (
          <SessionRadioModal />
        )}
      </div>
    </div>
  );
}
