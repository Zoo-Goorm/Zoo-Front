import Image from 'next/image';

export default function TopButton() {
  return (
    <div className="flex shrink-0 flex-col items-center justify-center rounded-[2.5rem] bg-material-overlay mobile:h-[2.5rem] mobile:w-[2.5rem] website:h-[4rem] website:w-[4rem]">
      <Image
        src="/button/top-arrow.svg"
        alt="top-arrow-icon"
        width={48}
        height={48}
      />
    </div>
  );
}
