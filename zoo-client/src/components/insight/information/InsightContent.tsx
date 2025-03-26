export default function InsightContent({ memo }: { memo: string }) {
  return (
    <>
      <hr className="text-divider-primary" />
      <div className="my-auto max-h-[600px] min-h-[300px] overflow-scroll scrollbar-hidden">
        {memo}
      </div>
      <hr className="text-divider-primary" />
    </>
  );
}
