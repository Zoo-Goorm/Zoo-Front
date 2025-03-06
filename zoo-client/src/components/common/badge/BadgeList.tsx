import Badge from './Badge';
import { IBadgeListProps } from '@/types/badge/Badge';

export default function BadgeList({ badgeList }: IBadgeListProps) {
  return (
    <div className="flex w-[100%] flex-wrap content-center items-center gap-x-12 gap-y-[0.75rem]">
      {badgeList.map((badge, index) => (
        <Badge key={index} type={badge.type} text={badge.name} />
      ))}
    </div>
  );
}
