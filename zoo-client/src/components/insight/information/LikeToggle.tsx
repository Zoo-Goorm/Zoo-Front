import Image from 'next/image';

interface ILikeToggle {
  count: number | string;
}

export default function LikeToggle({ count }: ILikeToggle) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/button/heart-fill.svg"
        alt="heart-btn"
        height={36}
        width={36}
      />
      <span>{count}</span>
    </div>
  );
}
