'use client';

import { useSessionStore } from '@/store/useSessionStore';
import { useRouter } from 'next/navigation';

export default function SessionDetailModal() {
  const { currentSession } = useSessionStore();
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };
  console.log(currentSession);

  return (
    <div className="size-1/2 rounded-sm bg-bg-secondary text-text-main shadow-md">
      <h1 className="">Modal</h1>
      <button onClick={closeModal}>닫기</button>
    </div>
  );
}
