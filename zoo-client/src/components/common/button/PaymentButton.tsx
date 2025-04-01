'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function PaymentButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/session-apply/register')}
      className="mt-4 flex w-full items-center justify-between rounded-md bg-fill-primary px-16 py-8"
    >
      <span className="body-m-14">선택 완료</span>
      <Image
        alt="arrow-icon"
        height={20}
        width={20}
        src="/button/right-arrow.svg"
      />
    </button>
  );
}
