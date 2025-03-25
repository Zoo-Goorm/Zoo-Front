import { Badge } from '@/components';

interface IInterestBadge {
  interest: string[];
}

export default function InterestBadge({ interest }: IInterestBadge) {
  return (
    <div className="flex w-[100%] items-center gap-8 p-0 scrollbar-hidden">
      {interest.map((badge, index) => (
        <Badge key={index} text={badge} type="default" />
      ))}
    </div>
  );
}
