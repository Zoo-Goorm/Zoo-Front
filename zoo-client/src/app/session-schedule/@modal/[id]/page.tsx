'use client';

import { SessionApplyModal } from '@/components';
import SessionDetailModal from '@/components/common/modal/SessionDetailModal';
import { useApplyStore } from '@/store/common/useApplyStore';

export default function SessionModal() {
  const { modalType } = useApplyStore();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg-black/40">
      <div className="flex max-w-full flex-col rounded-sm bg-bg-primary p-32 text-text-main shadow-md">
        {modalType == 'thirary' ? (
          <SessionDetailModal />
        ) : (
          <SessionApplyModal />
        )}
      </div>
    </div>
  );
}
