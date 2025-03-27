import { IBadgeProps } from '@/types/badge/Badge';

export default function Badge({ text, type, $size = 'm' }: IBadgeProps) {
  const badgeTypeClasses = {
    fullBooking: 'bg-bg-thirary text-text-thirary',
    subject: 'bg-bg-badge-subject text-text-title',
    default: 'bg-bg-secondary text-text-title',
  };

  const badgeSizeClasses = {
    m: 'body-m-16-150',
    s: 'body-m-14',
  };

  return (
    <div
      className={`inline-flex select-none items-center justify-center gap-0 rounded-sm px-8 py-4 text-text-main ${badgeSizeClasses[$size]} ${badgeTypeClasses[type]}`}
    >
      {text}
    </div>
  );
}
