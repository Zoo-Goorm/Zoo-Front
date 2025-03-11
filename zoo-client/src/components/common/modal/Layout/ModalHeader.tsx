import Image from 'next/image';
import useModalStore from '@/store/useModalStore';
import { IModalHeaderProps } from '@/types/modal/modal';

export default function ModalHeader({ headerText }: IModalHeaderProps) {
  const { closeModal } = useModalStore();

  return (
    <header className="flex w-[100%] items-center justify-between px-0 py-12">
      <h4 className="title-sb-24 text-text-main">{headerText}</h4>
      <Image
        onClick={closeModal}
        src="/modal/close.svg"
        alt="close button"
        width={36}
        height={36}
        className="cursor-pointer"
      />
    </header>
  );
}
