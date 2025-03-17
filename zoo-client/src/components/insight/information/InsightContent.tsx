export default function InsightContent({ content }: { content: string }) {
  return (
    <div className="scrollbar-hidden h-[300px] overflow-scroll">{content}</div>
  );
}
