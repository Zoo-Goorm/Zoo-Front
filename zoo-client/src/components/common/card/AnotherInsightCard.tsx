import InterestBadge from '@/components/common/badge/InterestBadge';
import { IInsightContent } from '@/types/insight/insightCard';
import Image from 'next/image';

export default function AnotherInsightCard({
  content,
}: {
  content: IInsightContent;
}) {
  const { interestCategory, displayName, job, memo, imageUrl } = content;

  return (
    <article>
      <div className="flex max-w-[263px] flex-col justify-center gap-20 px-16 py-20">
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
              <span className="body-m-16 text-text-main">{displayName}</span>
              <span className="body-m-16 text-text-sub">{job}</span>
            </div>
          </div>
        </div>
        <div className="w-[100%] whitespace-nowrap">
          {interestCategory && <InterestBadge interest={interestCategory} />}
        </div>
        <span className="body-m-16-150 h-[72px] w-[100%] overflow-hidden text-text-main">
          {memo}
        </span>
      </div>
    </article>
  );
}
