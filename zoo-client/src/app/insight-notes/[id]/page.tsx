'use client';

import InsightNotePage from '../page';
import { useRouter } from 'next/navigation';
import { InsightInfoModal } from '@/components';
import { useEffect } from 'react';

export default function InsightDetailPage() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
  return (
    <>
      <InsightNotePage />
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-bg-black/60"
        onClick={handleClose}
      >
        <div className="max-h-screen w-full overflow-y-auto rounded-sm text-text-main shadow-md">
          <InsightInfoModal />
        </div>
      </div>
    </>
  );
}
