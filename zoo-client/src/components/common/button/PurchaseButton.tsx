import Image from 'next/image';

export default function PurchaseButton() {
  return (
    <button className="flex size-full items-center justify-between bg-fill-primary px-24 py-16">
      <span className="headline-sb-28">컨퍼런스 참가권 구매</span>
      <Image
        alt="arrow-icon"
        height={48}
        width={48}
        src="/button/right-arrow.svg"
      />
    </button>
  );
}
