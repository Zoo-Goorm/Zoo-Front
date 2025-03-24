import Image from 'next/image';

interface SizeMap {
  m: number;
  l: number;
}

interface SpanClassMap {
  m: string;
  l: string;
}

interface LikeToggleProps {
  size: keyof SizeMap;
  likeCount: number;
}

export default function LikeToggle({ size, likeCount }: LikeToggleProps) {
  const sizeMap: SizeMap = {
    l: 36,
    m: 24,
  };

  const spanClassMap: SpanClassMap = {
    m: 'figure-m-14',
    l: 'figure-m-16',
  };

  return (
    <div className="flex items-center gap-4">
      <Image
        src="/button/heart-fill.svg"
        alt="heart-btn"
        height={sizeMap[size]}
        width={sizeMap[size]}
      />
      <span className={spanClassMap[size]}>{likeCount}</span>
    </div>
  );
}
