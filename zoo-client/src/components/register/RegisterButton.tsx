'use client';

import { useRouter } from 'next/navigation';
import useModalStore from '@/store/useModalStore';
import AlertModal from '../common/modal/AlertModal';

export default function RegisterButton() {
  const router = useRouter();
  const { isOpen, contents, openModal } = useModalStore();

  const openCancelModal = () => {
    openModal({
      contents: (
        <AlertModal
          headerText="알림"
          buttonText="확인"
          onButtonClick={() => router.push('/session-apply')}
          bodyText="페이지를 나가면 입력하신 정보가 자동 저장됩니다."
        />
      ),
    });
  };

  return (
    <div className="flex w-[100%] items-center justify-center gap-8 self-stretch p-0">
      <button
        type="button"
        onClick={openCancelModal}
        className="title-sb-20 flex h-[3.5rem] max-w-[23.4375rem] items-center justify-center rounded-[0.25rem] bg-fill-thirary px-24 py-16 text-text-primary hover:bg-fill-thirary-hover focus:bg-fill-thirary-pressed"
      >
        취소하기
      </button>
      <button
        type="submit"
        className="title-sb-20 flex h-[3.5rem] flex-1 items-center justify-center gap-0 rounded-[0.25rem] bg-fill-primary px-24 py-12 text-text-white hover:bg-fill-primary-hover focus:bg-fill-primary-pressed"
      >
        확인하기
      </button>
      {isOpen && contents}
    </div>
  );
}
