'use client';

import { SessionDetailModal } from '@/components';
import { useModalStore } from '@/store/useModalStore';

export default function SessionModal() {
  const { isOpen } = useModalStore();

  if (!isOpen) return null;
  return (
    <div className="bg-black/50 fixed inset-0 flex items-center justify-center">
      <SessionDetailModal />
    </div>
  );
}
