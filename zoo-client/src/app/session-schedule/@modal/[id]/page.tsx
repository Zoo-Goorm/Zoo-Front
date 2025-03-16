'use client';

import { useSession } from '@/actions/session';
import { SessionApplyModal } from '@/components';
import SessionDetailModal from '@/components/common/modal/SessionDetailModal';
import { useApplyStore } from '@/store/common/useApplyStore';
import { SessionId } from '@/types/session/session';
import { useParams } from 'next/navigation';

export default function SessionModal() {
  const { modalType } = useApplyStore();
  const sessionId = useParams().id as string;
  const { data: currentSession = {} as SessionId, isLoading } =
    useSession(sessionId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg-black/40">
      {!isLoading && (
        <div className="flex max-w-[800px] flex-col rounded-sm bg-bg-primary p-32 text-text-main shadow-md">
          {modalType == 'thirary' ? (
            <SessionDetailModal currentSession={currentSession} />
          ) : (
            <SessionApplyModal currentSession={currentSession} />
          )}
        </div>
      )}
    </div>
  );
}
