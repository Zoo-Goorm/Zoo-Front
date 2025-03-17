'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useApplyStore } from '@/store/common/useApplyStore';
import { useSession } from '@/actions/session';

export default function SessionRadioModal() {
  const { messageMain, messageSub, change, conflictId } = useApplyStore();
  const { data: currentSession } = useSession(conflictId);
  const title = currentSession?.sessionName;

  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  // apply 또는 change에서 신청을 위한 fetch 로직 구현 필요

  return (
    <div className="flex w-[500px] flex-col gap-5 text-text-main">
      <div className="flex justify-between py-2">
        <span className="title-sb-24">{messageMain}</span>
        <Image
          alt="close-modal"
          onClick={closeModal}
          width={32}
          height={32}
          className="cursor-pointer"
          src="/button/close.svg"
        />
      </div>
      <div className="flex max-w-[600px] flex-col items-center gap-2 bg-bg-secondary px-20 py-24">
        {change ? (
          <p className="body-m-16 whitespace-pre-line px-14 text-center text-text-main">
            {`이미 같은 시간대에 [${title}] 세션이 신청되어있습니다. \n
            신청된 세션을 취소하고 해당 세션을 신청하시고 싶으시다면 변경 신청 버튼을 눌러주세요!`}
          </p>
        ) : (
          <p className="body-m-16 whitespace-pre-line px-14 text-center text-text-main">
            {messageSub}
          </p>
        )}
      </div>
      {change && (
        <div className="title-sb-20 flex w-full items-center gap-16">
          <button
            onClick={closeModal}
            className="flex-1 rounded-md bg-fill-thirary py-16 text-text-primary"
          >
            유지
          </button>
          <button className="flex-1 rounded-md bg-fill-primary py-16 text-text-white">
            변경 신청
          </button>
        </div>
      )}
    </div>
  );
}
