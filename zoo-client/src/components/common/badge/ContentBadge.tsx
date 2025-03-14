import Badge from './Badge';

interface ContentBadgeProps {
  keywords: string[];
  maxApply: number;
  location: string;
}

export default function ContentBadge({
  keywords,
  maxApply,
  location,
}: ContentBadgeProps) {
  return (
    <div className="flex w-[100%] flex-wrap items-center gap-x-12 gap-y-[0.75rem]">
      {maxApply == 0 && <Badge type={'fullBooking'} text={'마감 세션'} />}
      {(keywords ?? []).map((badge, index) => (
        <Badge key={index} type={'subject'} text={badge} />
      ))}
      <Badge type={'default'} text={location} />
    </div>
  );
}
