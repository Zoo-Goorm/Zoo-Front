import { CardProfile, CommentCount, LikeToggle } from '@/components';

interface IInsightCard {
  time: string;
  isEdited?: boolean;
  $size?: 'xl' | 'l' | 'm';
}

export default function InsightCard({
  isEdited = false,
  time,
  $size = 'l',
}: IInsightCard) {
  const insightCardSizeClasses = {
    xl: 'w-[100%] gap-[1.75rem]',
    l: 'w-[24.375rem]',
    m: 'w-[24.8125rem]',
  };

  return (
    <article
      className={`flex flex-col items-center justify-center rounded-2xl border border-solid border-stroke-thirary bg-bg-primary px-24 py-16 ${insightCardSizeClasses[$size]}`}
    >
      <div className="flex w-[100%] flex-1 flex-col items-center gap-16 justify-self-center">
        <CardProfile
          interest={[
            '관심분야 1',
            '관심분야 2',
            '관심분야 3',
            '관심분야 4',
            '관심분야 5',
          ]}
          contentId={1}
          name="이름"
          imageUrl=""
          job="직업"
        />
        <span className="body-m-16-150 text-overflow w-[100%] text-text-main">
          사용자가 작성한 인사이트 노트 MAX 6줄로 보여주세요. 사용자가 작성한
          인사이트 노트 MAX 6줄로 보여주세요. 사용자가 작성한 인사이트 노트 MAX
          6줄로 보여주세요. 나머지는 Hidden 처리가 됩니다!알겠쥬?? 사용자가
          작성한 인사이트 노트 6줄로 보여주세요. 사용자가 작성한 인사이트 노트
          6줄로 보여주세요. 사용자가 작성한 인사이트 노트 6줄로 보여주세요.
          나머지는 Hidden 처리가 됩니다!알겠쥬??
        </span>
      </div>
      <div className="flex w-[100%] items-center justify-between">
        <div className="flex items-center gap-20">
          <LikeToggle size="l" />
          <CommentCount count="999+" />
        </div>
        <div className="flex items-center">
          <span>{time}</span>
          {isEdited && <span>(수정됨)</span>}
        </div>
      </div>
    </article>
  );
}
