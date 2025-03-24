import { CardProfile } from '@/components';

interface IInsightCard {
  $direction: 'horizontal' | 'vertical';
}

export default function PopularInsightCard({ $direction }: IInsightCard) {
  const cardDirectionClasses = {
    horizontal: 'w-full max-w-[35.625rem] px-16 py-8 gap-12',
    vertical:
      'flex-col min-w-[18.4375rem] w-[24rem] h-[21rem] max-w-[37.5rem] pt-12 pr-16 pb-20 pl-16 gap-16',
  };

  return (
    <article
      className={`flex max-w-[35.625rem] items-center rounded-[0.5rem] bg-bg-primary ${cardDirectionClasses[$direction]}`}
    >
      <div className="relative flex h-[9.22325rem] w-[100%] flex-1 items-center justify-center gap-0 rounded-[0.25rem] p-0">
        {/* <Image
          src="/radio/thumbnail.svg"
          alt="카드 임시 이미지"
          fill
          style={{ objectFit: 'cover' }}
        /> */}
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-20">
        <CardProfile contentId={1} name="이름" time="1" imageUrl="" />
        <span className="body-m-16-150 text-overflow w-[100%] text-text-main">
          사용자가 작성한 인사이트 노트 세줄로 보여주세요. 사용자가 작성한
          인사이트 노트 세줄로 보여주세요. 사용자가 작성한 인사이트 노트 세줄로
          보여주세요. 나머지는 Hidden 처리가 됩니다!알겠쥬??
        </span>
      </div>
    </article>
  );
}
