'use client';

import { useModalStore } from '@/store/useModalStore';
import { useSessionStore } from '@/store/useSessionStore';

export default function SessionDetailModal() {
  const { closeModal } = useModalStore();
  const { currentSession } = useSessionStore();

  console.log(currentSession);

  return (
    <div className="size-1/2 rounded-sm bg-bg-secondary text-text-main shadow-md">
      <h1 className="">Modal</h1>
      <button onClick={closeModal}>닫기</button>
    </div>
  );
}
