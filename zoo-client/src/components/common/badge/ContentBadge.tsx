import Badge from './Badge';

interface ContentBadgeProps {
  keyword: string[];
  percentage: number;
  location: string;
}

export default function ContentBadge({
  keyword,
  percentage,
  location,
}: ContentBadgeProps) {
  return (
    <div className="flex w-[100%] flex-wrap items-center gap-x-12 gap-y-[0.75rem]">
      {percentage == 100 && <Badge type={'fullBooking'} text={'마감 세션'} />}
      {keyword.map((badge, index) => (
        <Badge key={index} type={'subject'} text={badge} />
      ))}
      <Badge type={'default'} text={location} />
    </div>
  );
}
