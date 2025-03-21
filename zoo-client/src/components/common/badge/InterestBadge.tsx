import { Badge } from '@/components';

interface IInterestBadge {
  interest: string[];
}

export default function InterestBadge({ interest }: IInterestBadge) {
  return (
    <div className="flex flex-wrap items-center gap-4 p-0">
      {interest.map((badge, index) => (
        <Badge key={index} text={badge} type="default" />
      ))}
    </div>
  );
}
