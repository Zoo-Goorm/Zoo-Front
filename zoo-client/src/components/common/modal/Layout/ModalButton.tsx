import { IModalButtonProps } from '@/types/modal/modal';

export default function ModalButton({
  onButtonClick,
  buttonText,
}: IModalButtonProps) {
  return (
    <button
      type="button"
      onClick={onButtonClick}
      className="body-sb-16 flex w-[100%] items-center justify-center rounded-[0.25rem] bg-fill-primary px-16 py-12 text-text-white"
    >
      {buttonText}
    </button>
  );
}
