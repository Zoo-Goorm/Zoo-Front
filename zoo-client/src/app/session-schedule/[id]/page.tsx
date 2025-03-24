'use client';
import { SessionApplyModal } from '@/components';
import SessionDetailModal from '@/components/common/modal/SessionDetailModal';
import { useApplyStore } from '@/store/common/useApplyStore';
import { SessionId } from '@/types/session/session';
import { useParams, useRouter } from 'next/navigation';
import SessionSchedulePage from '../page';
import { useSession } from '@/hook/session/useSession';

export default function SessionDetailPage() {
  const router = useRouter();
  const { modalType } = useApplyStore();
  const sessionId = useParams().id as string;
  const { data: currentSession = {} as SessionId, isLoading } =
    useSession(sessionId);

  const handleClose = () => {
    router.back();
  };

  return (
    <>
      <SessionSchedulePage />
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-bg-black/40"
        onClick={handleClose}
      >
        {!isLoading && (
          <div
            className="flex max-w-[800px] flex-col rounded-sm bg-bg-primary p-32 text-text-main shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            {modalType == 'thirary' ? (
              <SessionDetailModal currentSession={currentSession} />
            ) : (
              <SessionApplyModal />
            )}
          </div>
        )}
      </div>
    </>
  );
}
