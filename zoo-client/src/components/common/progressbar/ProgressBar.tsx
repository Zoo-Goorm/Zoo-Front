interface ProgressProps {
  maxCapacity: number;
  participantCount: number;
}

export default function ProgressBar({
  maxCapacity,
  participantCount,
}: ProgressProps) {
  const percentage = (participantCount / maxCapacity) * 100;

  return (
    <div className="flex flex-col gap-4">
      <div className="h-[10px] w-full rounded-lg bg-bg-secondary">
        <div
          className={`h-full rounded-lg bg-text-primary`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="figure-m-14 w-full text-right">
        <span className="text-text-primary">{participantCount}</span>
        <span className="text-text-sub">/{maxCapacity}</span>
      </div>
    </div>
  );
}
