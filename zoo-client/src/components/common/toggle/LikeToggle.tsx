import { useMutationIsLike } from '@/hooks/insights/useLike';
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
  id: number;
  size: keyof SizeMap;
  likeCount: number;
  isLiked: boolean;
}

export default function LikeToggle({
  id,
  size,
  likeCount,
  isLiked,
}: LikeToggleProps) {
  const { mutate } = useMutationIsLike(id);

  const sizeMap: SizeMap = {
    l: 36,
    m: 24,
  };

  const spanClassMap: SpanClassMap = {
    m: 'figure-m-14',
    l: 'figure-m-16',
  };

  const isLikeHandler = () => {
    console.log(id, '인사이트의', !isLiked, '의 상태로 변경');
    mutate({ id: id });
  };
  return (
    <div className="flex items-center gap-4">
      <button onClick={isLikeHandler}>
        <Image
          src={isLiked ? '/button/heart-fill.svg' : '/button/heart-stroke.svg'}
          alt="heart-btn"
          height={sizeMap[size]}
          width={sizeMap[size]}
        />
      </button>

      <span className={`${spanClassMap[size]} `}>{likeCount}</span>
    </div>
  );
}
