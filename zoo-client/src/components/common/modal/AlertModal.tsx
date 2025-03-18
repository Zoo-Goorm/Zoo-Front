import {
  IModalBodyProps,
  IModalButtonProps,
  IModalHeaderProps,
} from '@/types/modal/modal';

import ModalButton from './Layout/ModalButton';
import ModalHeader from './Layout/ModalHeader';
import ModalContainer from './Layout/ModalContainer';
import useModalStore from '@/store/common/useModalStore';

function ModalBody({ bodyText }: IModalBodyProps) {
  return (
    <div className="flex w-[100%] items-center justify-center bg-bg-secondary px-20 py-24">
      <p className="body-m-16 text-text-main">{bodyText}</p>
    </div>
  );
}

export default function AlertModal({
  onButtonClick,
  headerText,
  bodyText,
  buttonText,
}: IModalBodyProps & IModalButtonProps & IModalHeaderProps) {
  const { closeModal } = useModalStore();

  return (
    <ModalContainer>
      <ModalHeader headerText={headerText} closeModal={closeModal} />
      <ModalBody bodyText={bodyText} />
      <ModalButton buttonText={buttonText} onButtonClick={onButtonClick} />
    </ModalContainer>
  );
}
