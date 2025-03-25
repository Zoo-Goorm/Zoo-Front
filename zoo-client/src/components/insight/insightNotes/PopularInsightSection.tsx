import { getTopInsightQuery } from '@/hook/insights/insight';
import InsightCard from '@/components/common/card/InsightCard';
import { getTime } from '@/utils/insightDate';

export default function PopularInsightSection() {
  const { data: topInsights } = getTopInsightQuery();

  return (
    <section className="flex flex-col items-start gap-32">
      <h3 className="headline-sb-28 text-text-main">인기 있는 인사이트 노트</h3>
      <div className="flex items-center justify-center gap-36">
        {topInsights &&
          topInsights?.map((topInsight, index) => (
            <InsightCard
              key={index}
              $size="m"
              content={topInsight}
              time={getTime(topInsight.updatedAt)}
              isEdited={topInsight.createdAt !== topInsight.updatedAt}
            />
          ))}
      </div>
    </section>
  );
}
