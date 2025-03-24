import Image from 'next/image';
import { CardProfile, LikeToggle } from '@/components';
import InterestBadge from '../badge/InterestBadge';
import { IInsight } from '@/types/insight/insightCard';

interface IGeneralInsightCardProps {
  insights: IInsight;
}

export default function GeneralInsightCard({
  insights,
}: IGeneralInsightCardProps) {
  const { profile, content } = insights;

  return (
    <article className="flex h-[35rem] min-w-[18.4375rem] max-w-[37.5rem] flex-col items-center gap-16 rounded-[0.5rem] bg-bg-primary pb-20 pl-16 pr-16 pt-12 website:w-[24.833331rem]">
      <div className="flex flex-1 flex-col items-center gap-20">
        <CardProfile
          contentId={content.id}
          name={profile.name}
          imageUrl={profile.imageUrl}
          time={`${content.createdTime}`}
        />
        {content.imageUrl ? (
          <div className="relative flex h-[12.81206rem] w-[100%] flex-1 items-center justify-center gap-0 p-0">
            <Image
              className="rounded-[0.25rem]"
              src={content.imageUrl}
              alt="카드 임시 이미지"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ) : null}
        <div className="flex flex-col items-center justify-center gap-12 p-0">
          <InterestBadge interest={profile.interest} />
          <span className="body-m-16-150 text-overflow w-[100%] text-text-main">
            {content.memo}
          </span>
        </div>
        <div className="w-[100%]">
          <LikeToggle size="m" likeCount={content.like} />
        </div>
      </div>
    </article>
  );
}
