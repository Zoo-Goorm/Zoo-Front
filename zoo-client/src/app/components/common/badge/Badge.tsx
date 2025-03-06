interface IBadgeProps {
  size: 's' | 'l';
  text: string;
  type: 'fullBooking' | 'subject' | 'default';
}

export default function Badge({ size, text, type }: IBadgeProps) {
  const badgeSizeClasses = {
    l: 'py-4 px-8',
    s: 'p-4',
  };

  const badgeTypeClasses = {
    fullBooking: 'bg-bg-thirary text-text-thirary',
    subject: 'bg-bg-badge-subject text-text-title',
    default: 'bg-bg-secondary text-text-title',
  };

  return (
    <div
      className={`website:body-m-16-150 mobile:body-m-14 inline-flex items-center justify-center gap-0 rounded-sm ${badgeSizeClasses[size]} ${badgeTypeClasses[type]}`}
    >
      {text}
    </div>
  );
}
