import Image from 'next/image';

export default function LikeToggle() {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/button/heart-fill.svg"
        alt="heart-btn"
        height={36}
        width={36}
      />
      <span>999+</span>
    </div>
  );
}
