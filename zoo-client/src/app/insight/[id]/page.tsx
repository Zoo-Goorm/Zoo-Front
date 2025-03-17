'use client';

import { useEffect } from 'react';
import InsightPage from '../page';
import { useRouter } from 'next/navigation';
import { InsightInfoModal } from '@/components';

export default function InsightDetailPage() {
  const router = useRouter();

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const handleClose = () => {
    router.back();
  };

  return (
    <>
      <InsightPage />
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-bg-black/40"
        onClick={handleClose}
      >
        <div
          className="flex max-w-[800px] flex-col rounded-sm bg-bg-primary p-32 text-text-main shadow-md"
          onClick={(e) => e.stopPropagation()}
        >
          <InsightInfoModal />
        </div>
      </div>
    </>
  );
}
