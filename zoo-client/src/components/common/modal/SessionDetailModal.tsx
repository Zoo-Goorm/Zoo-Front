'use client';
import { PurchaseButton, SessionInfo } from '@/components';
import { SESSION_SCHEDULE_MESSAGES } from '@/constants/messages';
import { useApplyStore } from '@/store/common/useApplyStore';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { ISessionId } from '@/types/session/session';
import ModalContainer from './Layout/ModalContainer';
import ModalHeader from './Layout/ModalHeader';

const ModalBody = ({ currentSession }: ISessionId) => {
  const token = localStorage.getItem('accessToken');
  const { setModalType } = useApplyStore();
  const pathname = usePathname();
  const router = useRouter();

  const handlePurchase = () => {
    if (!token) {
      router.push('/login', { scroll: false });
    }
    setModalType('thirary');
  };
  return (
    <div className="size-full">
      <SessionInfo currentSession={currentSession} />
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
      <div className={pathname.startsWith('/mypage') ? 'hidden' : 'block'}>
        <PurchaseButton
          func={handlePurchase}
          size={48}
          text={SESSION_SCHEDULE_MESSAGES.buttonModalText}
        />
      </div>
    </div>
  );
};

export default function SessionDetailModal({ currentSession }: ISessionId) {
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };

  return (
    <ModalContainer>
      <ModalHeader closeModal={closeModal} />
      <ModalBody currentSession={currentSession} />
    </ModalContainer>
  );
}
