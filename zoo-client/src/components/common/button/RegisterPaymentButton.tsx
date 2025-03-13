import Image from 'next/image';

export default function RegisterPaymentButton() {
  return (
    <div className="flex h-[4.75rem] flex-shrink-0 flex-col items-center justify-center gap-8 self-stretch rounded-[0.25rem] border border-solid border-text-main bg-bg-primary px-16 py-12">
      <Image
        src="/button/paymentIcon.png"
        alt="카카오 페이 결제 아이콘"
        width={80}
        height={30}
      />
      <span className="body-m-14 text-text-main">카카오페이</span>
    </div>
  );
}
