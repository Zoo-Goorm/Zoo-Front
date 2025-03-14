'use client';
import { ContentBadge, PurchaseButton } from '@/components';
import { SESSION_SCHEDULE_MESSAGES } from '@/constants/messages';
import { useApplyStore } from '@/store/common/useApplyStore';
import { useSessionStore } from '@/store/common/useSessionStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SessionDetailModal() {
  const router = useRouter();
  const { setModalType } = useApplyStore();

  //   const sessionId = useParams().id as string;

  // 데이터 페칭 전까지 store 사용해서 불러오기
  const { currentSession } = useSessionStore();

  const closeModal = () => {
    router.back();
  };

  return (
    <>
      <div className="flex w-[600px] justify-end">
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
            currentSession.maxCapacity - currentSession.participantCount
          }
          location={currentSession.location}
        />
        <h1 className="headline-sb-28 text-text-main">{currentSession.name}</h1>
        <p className="body-m-16-150 text-text-sub">
          {currentSession.shortDescription}
        </p>
      </div>
      <hr className="text-divider-secondary" />
      <div className="my-40 flex gap-16">
        <Image
          src="/mock/speaker-img.svg"
          alt="speaker-img"
          className="rounded-md"
          width={312}
          height={240}
        />
        <div className="flex flex-col">
          <span className="body-sb-20">{currentSession.speaker.name}</span>
          <span className="body-m-16-150">{currentSession.speaker.info}</span>
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
    </>
  );
}
