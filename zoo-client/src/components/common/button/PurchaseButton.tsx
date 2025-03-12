'use client';
import Image from 'next/image';

export default function PurchaseButton({
  size,
  text,
}: {
  size: number;
  text: string;
}) {
  return (
    <button
      // onClick={() => handleConferenceAccess.checkAccess()}
      className="flex size-full items-center justify-between rounded-md bg-fill-primary px-24 py-2"
    >
      <span className="headline-sb-28 text-text-white">{text}</span>
      <Image
        alt="arrow-icon"
        height={size}
        width={size}
        src="/button/right-arrow.svg"
      />
    </button>
  );
}
