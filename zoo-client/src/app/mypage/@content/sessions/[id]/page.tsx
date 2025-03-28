'use client';
import SessionDetailModal from '@/components/common/modal/SessionDetailModal';
import { SessionId } from '@/types/session/session';
import { useParams, useRouter } from 'next/navigation';
import { useSession } from '@/hooks/session/useSession';
import MySessions from '../page';

export default function MySessionDetailPage() {
  const router = useRouter();
  const sessionId = useParams().id as string;
  const { data: currentSession = {} as SessionId, isLoading } = useSession(
    Number(sessionId),
  );

  const handleClose = () => {
    router.back();
  };

  return (
    <>
      <MySessions />
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-bg-black/40"
        onClick={handleClose}
      >
        {!isLoading && (
          <div
            className="flex max-w-[800px] flex-col rounded-sm bg-bg-primary p-32 text-text-main shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <SessionDetailModal currentSession={currentSession} />
          </div>
        )}
      </div>
    </>
  );
}
