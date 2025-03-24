'use client';
import { useRouter } from 'next/navigation';
import { useApplyStore } from '@/store/common/useApplyStore';
import ModalHeader from './Layout/ModalHeader';
import ModalContainer from './Layout/ModalContainer';
import { IModalBodyProps } from '@/types/modal/modal';
import { useSession } from '@/hook/session/useSession';

const ModalButton = ({ closeModal }: { closeModal: () => void }) => {
  return (
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
  );
};

const ModalBody = ({ bodyText }: IModalBodyProps) => {
  return (
    <div className="flex w-[100%] items-center justify-center bg-bg-secondary px-20 py-24">
      <p className="body-m-16 text-text-main">{bodyText}</p>
    </div>
  );
};

export default function SessionRadioModal() {
  const { messageMain, messageSub, change, conflictId } = useApplyStore();
  const { data: currentSession } = useSession(conflictId);
  const title = currentSession?.sessionName;

  const bodyText = change
    ? `이미 같은 시간대에 [${title}] 세션이 신청되어있습니다. \n
      신청된 세션을 취소하고 해당 세션을 신청하시고 싶으시다면 변경 신청 버튼을 눌러주세요!`
    : messageSub;
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  // apply 또는 change에서 신청을 위한 fetch 로직 구현 필요

  return (
    <ModalContainer>
      <ModalHeader headerText={messageMain} closeModal={closeModal} />
      <ModalBody bodyText={bodyText} />
      {change && <ModalButton closeModal={closeModal} />}
    </ModalContainer>
  );
}
