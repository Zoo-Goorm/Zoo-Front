import { IInsightTabProps } from '@/types/insight/insightTab';

export default function InsightTab({
  $isSelected,
  labelText,
  onTabClick,
}: IInsightTabProps) {
  return (
    <label
      onClick={onTabClick}
      className={`body-sb-16 cursor-pointer ${$isSelected ? 'text-text-primary' : 'text-text-thirary'}`}
    >
      {labelText}
    </label>
  );
}
