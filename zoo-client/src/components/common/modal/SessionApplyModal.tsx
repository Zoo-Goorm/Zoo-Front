'use client';
import { useParams, useRouter } from 'next/navigation';
import { useApplyStore } from '@/store/common/useApplyStore';
import ModalHeader from './Layout/ModalHeader';
import ModalContainer from './Layout/ModalContainer';
import { IModalBodyProps } from '@/types/modal/modal';
import { useSession } from '@/hooks/session/useSession';
import {
  useGetTicket,
  useMutationReApply,
} from '@/hooks/session/useReservation';

const ModalButton = ({
  closeModal,
  cancelId,
}: {
  closeModal: () => void;
  cancelId: number;
}) => {
  const sessionId = Number(useParams().id);
  const { mutate } = useMutationReApply();

  const changeSession = () => {
    mutate({ cancelId: cancelId, addId: sessionId });
    closeModal();
  };

  return (
    <div className="title-sb-20 flex w-full items-center gap-16">
      <button
        onClick={closeModal}
        className="flex-1 rounded-md bg-fill-thirary py-16 text-text-primary"
      >
        유지
      </button>
      <button
        onClick={changeSession}
        className="flex-1 rounded-md bg-fill-primary py-16 text-text-white"
      >
        변경 신청
      </button>
    </div>
  );
};

const ModalBody = ({ bodyText }: IModalBodyProps) => {
  const { data } = useGetTicket();
  console.log(data);
  return (
    <div className="flex w-[100%] items-center justify-center bg-bg-secondary px-20 py-24">
      <p className="body-m-16 text-text-main">{bodyText}</p>
    </div>
  );
};

export default function SessionRadioModal() {
  const { messageMain, messageSub, change, conflictId } = useApplyStore();
  const { data: currentSession } = useSession(Number(conflictId));
  const title = currentSession?.sessionName;

  const bodyText = change
    ? `이미 같은 시간대에 [${title}] 세션이 신청되어있습니다. \n
      신청된 세션을 취소하고 해당 세션을 신청하시고 싶으시다면 변경 신청 버튼을 눌러주세요!`
    : messageSub;
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <ModalContainer>
      <ModalHeader headerText={messageMain} closeModal={closeModal} />
      <ModalBody bodyText={bodyText} />
      {change && (
        <ModalButton closeModal={closeModal} cancelId={Number(conflictId)} />
      )}
    </ModalContainer>
  );
}
