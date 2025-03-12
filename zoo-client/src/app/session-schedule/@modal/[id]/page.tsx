'use client';

import { useSessionDetail } from '@/actions/sessionAction';
import { ContentBadge, PurchaseButton } from '@/components';
import { SESSION_SCHEDULE_MESSAGES } from '@/constants/messages';
// import { useSessionStore } from '@/store/useSessionStore';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

export default function SessionModal() {
  const router = useRouter();
  const sessionId = useParams().id as string;

  //   // 데이터 페칭 전까지 store 사용해서 불러오기
  //   const { currentSession } = useSessionStore();

  const { data: session, isLoading, error } = useSessionDetail(sessionId);

  //   if (isLoading) return <div>Loading...</div>;
  //   if (error) return <div c>Error: {error.message}</div>;

  console.log(session, '완료');

  const closeModal = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg-black/40">
      <div className="flex h-[824px] w-[736px] flex-col rounded-sm bg-bg-secondary p-32 text-text-main shadow-md">
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
          {/* <ContentBadge {...currentSession} /> */}
          <h1 className="headline-sb-28 text-text-main">
            {/* {currentSession.title} */}
          </h1>
          <p className="body-m-16-150 text-text-sub">
            {/* {currentSession.description} */}
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
            {/* <span className="body-sb-20">{currentSession.speaker.name}</span> */}
            {/* <span className="body-m-16-150">{currentSession.speaker.info}</span> */}
          </div>
        </div>

        <hr className="text-divider-secondary" />
        <div className="flex flex-col gap-12 py-40">
          <span className="body-sb-20">세션 이력</span>
          <span className="body-m-16-150">없으면 표기 안 함</span>
        </div>

        <PurchaseButton
          size={48}
          text={SESSION_SCHEDULE_MESSAGES.buttonModalText}
        />
      </div>
    </div>
  );
}
