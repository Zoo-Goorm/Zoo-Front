export default function InsightContent({ content }: { content: string }) {
  return (
    <>
      <hr className="text-divider-primary" />
      <div className="scrollbar-hidden h-[600px] overflow-scroll">
        {content}
      </div>
      <hr className="text-divider-primary" />
    </>
  );
}
