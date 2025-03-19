'use client';

import InsightNotePage from '../page';
import { useRouter } from 'next/navigation';
import { InsightInfoModal } from '@/components';

export default function InsightDetailPage() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

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
