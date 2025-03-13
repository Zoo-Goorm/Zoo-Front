import Image from 'next/image';
import RadioContent from '../radio/RadioContent';
import PurchaseButton from '../button/PurchaseButton';
import { useParams, useRouter } from 'next/navigation';
import { useRadioStore } from '@/store/common/useRadioStore';
import { SESSION_SCHEDULE_MESSAGES } from '@/constants/messages';

export default function SessionRadioModal() {
  const id = useParams().id;
  const router = useRouter();
  const { activeState } = useRadioStore();

  const closeModal = () => {
    router.back();
  };
  const sessionApplyHandler = () => {
    console.log(activeState, id);
    alert('세션 신청이 완료되었습니다!');
    router.back();
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between py-2">
        <span className="title-sb-24">온/오프라인 선택</span>
        <Image
          alt="close-modal"
          onClick={closeModal}
          width={32}
          height={32}
          className="cursor-pointer"
          src="/button/close.svg"
        />
      </div>
      <RadioContent />

      <PurchaseButton
        func={sessionApplyHandler}
        size={48}
        text={SESSION_SCHEDULE_MESSAGES.buttonModalText}
      />
    </div>
  );
}
