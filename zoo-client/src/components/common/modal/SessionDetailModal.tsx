'use client';
import { ContentBadge, PurchaseButton } from '@/components';
import { SESSION_SCHEDULE_MESSAGES } from '@/constants/messages';
import { useApplyStore } from '@/store/common/useApplyStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SessionId } from '@/types/session/session';

export default function SessionDetailModal({
  currentSession,
}: {
  currentSession: SessionId;
}) {
  const router = useRouter();
  const { setModalType } = useApplyStore();

  const closeModal = () => {
    router.back();
  };

  return (
    <div>
      <div className="flex justify-end">
        <Image
          alt="close-modal"
          onClick={closeModal}
          width={32}
          height={32}
          className="cursor-pointer"
          src="/button/close.svg"
        />
      </div>
      <div className="flex flex-col gap-12 py-20">
        <ContentBadge
          keywords={currentSession.keywords}
          maxApply={
            currentSession?.maxCapacity - currentSession.participantCount
          }
          location={currentSession.location}
        />
        <h1 className="headline-sb-28 text-text-main">
          {currentSession.sessionName}
        </h1>
        <p className="body-m-16-150 text-text-sub">
          {currentSession.longDescription}
        </p>
      </div>
      <hr className="text-divider-secondary" />
      <div className="my-40 flex gap-16">
        <Image
          src={currentSession.imageUrl}
          alt="speaker-img"
          className="size-[311px] rounded-md"
          width={311}
          height={311}
          blurDataURL="/default-placeholder.jpg"
        />
        <div className="flex flex-1 flex-col">
          <span className="body-sb-20">{currentSession.speakerName}</span>
          {currentSession.careers?.map((info, index) => (
            <span key={index} className="body-m-16-150">
              {info}
            </span>
          ))}
        </div>
      </div>
      <hr className="text-divider-secondary" />
      <div className="flex flex-col gap-12 py-40">
        <span className="body-sb-20">세션 이력</span>
        <span className="body-m-16-150">없으면 표기 안 함</span>
      </div>
      <PurchaseButton
        func={() => setModalType('primary')}
        size={48}
        text={SESSION_SCHEDULE_MESSAGES.buttonModalText}
      />
    </div>
  );
}
