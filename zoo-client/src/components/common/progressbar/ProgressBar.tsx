interface ProgressProps {
  percentage: number;
}

export default function ProgressBar({ percentage }: ProgressProps) {
  const total: number = 100;

  return (
    <div className="flex flex-col gap-4">
      <div className="h-[10px] w-[312px] rounded-lg bg-bg-secondary">
        <div
          className={`h-full rounded-lg bg-text-primary`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="figure-m-14 w-full text-right">
        <span className="text-text-primary">{total}</span>
        <span className="text-text-sub">/{percentage}</span>
      </div>
    </div>
  );
}
