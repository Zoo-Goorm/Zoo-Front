import { IBadgeProps } from '@/types/badge/Badge';

export default function Badge({ text, type }: IBadgeProps) {
  const badgeTypeClasses = {
    fullBooking: 'bg-bg-thirary text-text-thirary',
    subject: 'bg-bg-badge-subject text-text-title',
    default: 'bg-bg-secondary text-text-title',
  };

  return (
    <div
      className={`website:body-m-16-150 mobile:body-m-14 inline-flex items-center justify-center gap-0 rounded-sm px-8 py-4 ${badgeTypeClasses[type]}`}
    >
      {text}
    </div>
  );
}
