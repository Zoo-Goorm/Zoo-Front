'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IProfile } from '@/types/insight/insightCard';
import InterestBadge from '../badge/InterestBadge';

interface IDetailButtonProps {
  contentId: number;
}

type TProfile = Pick<IProfile, 'imageUrl' | 'name' | 'job'> &
  IDetailButtonProps;

interface IProfileProps {
  contentId: IDetailButtonProps['contentId'];
  interest: IProfile['interest'];
}

function DetailButton({ contentId }: IDetailButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() =>
        router.push(`/insight-notes/${contentId}`, { scroll: false })
      }
      className="flex items-center justify-center rounded-[0.25rem] border-none p-8"
    >
      <span className="body-m-16-150 text-text-main">자세히 보기</span>
      <Image
        priority
        src="/button/arrow-up-right.svg"
        alt="자세히 보기"
        width={24}
        height={24}
      />
    </button>
  );
}

function UserProfileSection({ imageUrl, name, job, contentId }: TProfile) {
  return (
    <div className="flex w-[100%] items-center justify-between px-0 py-4">
      <div className="flex gap-[0.75rem]">
        <Image
          className="rounded-[100%]"
          src={imageUrl ? imageUrl : '/avatar/Ellipse.svg'}
          alt="프로필 임시 이미지"
          width={50}
          height={50}
          style={{
            width: 50,
            height: 50,
            objectFit: 'contain',
          }}
        />
        <div className="flex flex-1 flex-col justify-center gap-4">
          <span className="body-m-16 text-text-main">{name}</span>
          <span className="body-m-16 text-text-sub">{job}</span>
        </div>
      </div>
      <DetailButton contentId={contentId} />
    </div>
  );
}

export default function CardProfile({
  contentId,
  imageUrl,
  name,
  job,
  interest,
}: IProfileProps & TProfile) {
  return (
    <div className="flex w-[100%] flex-col items-center justify-center gap-16">
      <UserProfileSection
        imageUrl={imageUrl}
        name={name}
        job={job}
        contentId={contentId}
      />
      <div className="w-[100%] whitespace-nowrap">
        {interest && <InterestBadge interest={interest} />}
      </div>
    </div>
  );
}
