import { CardProfile, CommentCount, LikeToggle } from '@/components';
import {
  IInsightContent,
  IOnboardingInsights,
} from '@/types/insight/insightCard';
import { IProfileType } from '../profile/CardProfile';

interface IInsightCard {
  time?: string;
  isEdited?: boolean;
  $size?: 'xl' | 'l' | 'm';
  content: IInsightContent | IOnboardingInsights;
  type?: IProfileType['type'];
}

export default function InsightCard({
  content,
  isEdited = false,
  $size = 'xl',
  time,
  type = 'default',
}: IInsightCard) {
  const insightCardSizeClasses = {
    xl: 'w-[100%]',
    l: 'w-[24.8125rem]',
    m: 'w-[24.375rem]',
  };

  return (
    <article
      className={`flex flex-col items-center justify-center gap-[1.75rem] rounded-2xl border border-solid border-stroke-thirary bg-bg-primary px-24 py-16 ${insightCardSizeClasses[$size]}`}
    >
      <div className="flex w-[100%] flex-1 flex-col items-center gap-16 justify-self-center">
        <CardProfile
          type={type}
          interest={content.interestCategory}
          contentId={content.id}
          name={content.displayName}
          imageUrl={content.imageUrl}
          job={content.job}
        />
        <span className="body-m-16-150 text-overflow w-[100%] text-text-main">
          {content.memo}
        </span>
      </div>
      <div className="flex w-[100%] items-center justify-between">
        <div className="flex items-center gap-20">
          <LikeToggle size="l" count={content.likeCount} />
          <CommentCount count={content.commentCount} />
        </div>
        {time && (
          <div className="flex items-center">
            <span>{time}</span>
            {isEdited && <span>(수정됨)</span>}
          </div>
        )}
      </div>
    </article>
  );
}
