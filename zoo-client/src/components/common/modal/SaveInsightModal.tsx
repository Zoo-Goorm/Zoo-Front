import { IModalBodyProps, IModalHeaderProps } from '@/types/modal/modal';

import ModalHeader from './Layout/ModalHeader';
import ModalContainer from './Layout/ModalContainer';
import useModalStore from '@/store/common/useModalStore';
import { useSaveInsight } from '@/store/common/insight/useSaveInsight';

function ModalBody({ bodyText }: IModalBodyProps) {
  return (
    <div className="flex w-[100%] items-center justify-center bg-bg-secondary px-20 py-24">
      <p className="body-m-16 text-text-main">{bodyText}</p>
    </div>
  );
}

function ModalButton({
  onButtonClick,
  SaveButtonClick,
}: {
  onButtonClick: () => void;
  SaveButtonClick: () => void;
}) {
  return (
    <div className="title-sb-20 flex w-full items-center gap-16">
      <button
        onClick={onButtonClick}
        className="flex-1 rounded-md bg-fill-thirary py-16 text-text-primary"
      >
        나가기
      </button>
      <button
        onClick={SaveButtonClick}
        className="flex-1 rounded-md bg-fill-primary py-16 text-text-white"
      >
        임시저장
      </button>
    </div>
  );
}

export default function SaveInsightModal({
  headerText,
  bodyText,
  memo,
}: IModalBodyProps & IModalHeaderProps & { memo: string }) {
  const { closeModal } = useModalStore();
  const { updateInsight } = useSaveInsight();

  const SaveHandler = () => {
    updateInsight(memo);
    closeModal();
  };
  return (
    <ModalContainer>
      <ModalHeader headerText={headerText} closeModal={closeModal} />
      <ModalBody bodyText={bodyText} />
      <ModalButton onButtonClick={closeModal} SaveButtonClick={SaveHandler} />
    </ModalContainer>
  );
}
