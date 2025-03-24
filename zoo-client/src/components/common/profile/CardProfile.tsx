'use client';

import Image from 'next/image';
import OblongButton from '../button/OblongButton';
import { useRouter } from 'next/navigation';
import { IProfile } from '@/types/insight/insightCard';

type TProfile = Pick<IProfile, 'imageUrl' | 'name'>;

interface IProfileProps {
  contentId: number;
  time: string;
}

export default function CardProfile({
  contentId,
  imageUrl,
  name,
  time,
}: IProfileProps & TProfile) {
  const router = useRouter();

  return (
    <div className="flex w-[100%] items-center justify-between px-0 py-8">
      <div className="flex flex-1 items-center gap-12 p-0">
        <div className="relative flex h-[3.125rem] w-[3.125rem] items-center justify-center">
          <Image
            className="rounded-[100%]"
            src={imageUrl ? imageUrl : '/avatar/Ellipse.svg'}
            alt="프로필 임시 이미지"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <span className="body-m-16 text-text-main">{name}</span>
          <span className="figure-m-14 text-text-thirary">{time}분 전</span>
        </div>
      </div>
      <div className="w-[6.8125rem]">
        <OblongButton
          onClick={() =>
            router.push(`/insights/${contentId}`, { scroll: false })
          }
          size="xs"
          $buttonStyle="primary"
          text="인사이트 보기"
        />
      </div>
    </div>
  );
}
