import Badge from './Badge';

export default function CardBadge({ keyword }: { keyword: string[] }) {
  return (
    <div className="flex w-[100%] flex-wrap items-center gap-x-12 gap-y-[0.75rem]">
      {keyword?.map((badge, index) => (
        <Badge key={index} type={'default'} text={badge} />
      ))}
    </div>
  );
}
