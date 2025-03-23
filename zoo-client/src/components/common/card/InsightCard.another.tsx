import { ProfileHeader } from '@/components';

export default function AnotherInsightCard() {
  return (
    <article>
      <div className="flex max-w-[263px] flex-col justify-center gap-20 px-16 py-20">
        <ProfileHeader
          name={'이름'}
          time={'1분전'}
          edited={true}
          role={'참가자'}
        />
        <span className="body-m-16-150 h-[72px] w-[100%] overflow-hidden text-text-main">
          사용자가 작성한 인사이트 노트 세줄로 보여주세요. 사용자가 작성한
          인사이트 노트 세줄로 보여주세요. 사용자가 작성한 인사이트 노트 세줄로
          보여주세요. 나머지는 Hidden 처리가 됩니다!알겠쥬??
        </span>
      </div>
    </article>
  );
}
