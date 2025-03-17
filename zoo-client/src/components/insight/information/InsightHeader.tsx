import { InsightHeaderProps } from '@/types/insight/insight';

export default function InsightHeader({
  title,
  description,
}: InsightHeaderProps) {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="headline-sb-28 break-all text-text-main">{title}</h1>
      <p className="body-m-16 text-text-sub">{description}</p>
    </div>
  );
}
