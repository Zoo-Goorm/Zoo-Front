import { ProfileHeader } from '@/components';
import { INote } from '@/types/insight/Note';
import { getHasCreateTime } from '@/utils/insightDate';

export default function AnotherInsightCard({ note }: INote) {
  const { displayName, createdAt, updatedAt, job, memo } = note;
  const time = getHasCreateTime(createdAt, updatedAt);

  return (
    <article>
      <div className="flex max-w-[263px] flex-col justify-center gap-20 px-16 py-20">
        <ProfileHeader name={displayName} time={time} edited={true} job={job} />
        <span className="body-m-16-150 h-[72px] w-[100%] overflow-hidden text-text-main">
          {memo}
        </span>
      </div>
    </article>
  );
}
