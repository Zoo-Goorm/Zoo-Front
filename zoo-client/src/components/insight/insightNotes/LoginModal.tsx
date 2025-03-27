import { useRouter } from 'next/navigation';

import ModalButton from '@/components/common/modal/Layout/ModalButton';
import { IModalBodyProps } from '@/types/modal/modal';

function NoneMemberOverlay() {
  return (
    <div className="bg-insights-overlay absolute bottom-0 left-0 h-[85rem] w-[100%]" />
  );
}

function ModalBody({ bodyText }: IModalBodyProps) {
  return (
    <div className="flex w-[100%] items-center justify-center bg-bg-secondary px-20 py-24">
      <p className="body-m-16 text-text-main">{bodyText}</p>
    </div>
  );
}

export default function LoginModal() {
  const router = useRouter();

  return (
    <>
      <NoneMemberOverlay />
      <div className="absolute left-[50%] top-[50%] flex w-[50rem] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center gap-0 rounded-[0.25rem] bg-bg-primary pb-32 pl-32 pr-32 pt-20">
        <div className="flex w-[100%] flex-col items-center justify-center gap-20 p-0">
          <header className="flex w-[100%] items-center justify-between">
            <h4 className="title-sb-24 text-text-main">간편로그인</h4>
          </header>
          <ModalBody bodyText="로그인 후 더 많은 인사이트를 확인하세요." />
          <ModalButton
            buttonText="간편로그인 시작하기"
            onButtonClick={() => router.push('/login')}
          />
        </div>
      </div>
    </>
  );
}
