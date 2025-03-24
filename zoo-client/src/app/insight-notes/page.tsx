'use client';

import { getTopInsightQuery } from '@/hook/insights/insight';
import {
  Footer,
  InsightNoteTab,
  NavigationBar,
  InsightCard,
  Tab,
  TopButton,
} from '@/components';
import { useSessions } from '@/hook/session/useSession';

function TitleSection() {
  return (
    <div className="flex w-[100%] flex-col justify-center gap-12">
      <h3 className="headline-b-40 text-text-main">인사이트 노트</h3>
      <span className="body-m-16-150 text-text-sub">
        세션에서 얻은 인사이트를 정리하고, 새로운 아이디어를 실현할 준비가
        되었나요?
      </span>
    </div>
  );
}

function PopularInsightSection() {
  const { data: topInsights } = getTopInsightQuery();

  const getTime = (updatedAt: string) => {
    const currentTime = new Date();
    const updatedTime = new Date(updatedAt);

    const differenceTime = updatedTime.getTime() - currentTime.getTime();
    const writedTime = Math.floor(differenceTime / (1000 * 60));

    return `${writedTime}분 전`;
  };

  return (
    <section className="flex flex-col items-start gap-32">
      <h3 className="headline-sb-28 text-text-main">인기 있는 인사이트 노트</h3>
      <div className="flex items-center justify-center gap-36">
        {topInsights &&
          topInsights?.map((topInsight, index) => (
            <InsightCard
              key={index}
              content={topInsight}
              time={getTime(topInsight.updatedAt)}
              isEdited={topInsight.createdAt !== topInsight.updatedAt}
            />
          ))}
      </div>
    </section>
  );
}

function TopSection() {
  return (
    <div className="flex flex-col items-center gap-60">
      <TitleSection />
      <div className="flex flex-col justify-center gap-80">
        <PopularInsightSection />
      </div>
    </div>
  );
}

function GeneralInsightSection() {
  const { data: sessions } = useSessions();

  return (
    <div className="flex w-[100%] flex-col items-center gap-40">
      <Tab sessionList={sessions} />
      <div className="flex w-[100%] flex-col items-center justify-center gap-40">
        <div className="flex w-[100%] flex-col content-center items-center gap-8">
          <div className="flex w-[100%] items-center justify-between px-0 py-12">
            <h3 className="headline-sb-28 text-text-main">
              세션의 제목을 작성해 주세요
            </h3>
            <InsightNoteTab />
          </div>
          <div className="flex w-[100%] items-center justify-end">
            <span className="body-sb-16 text-text-main">총 N건</span>
          </div>
        </div>
        <div className="flex flex-col gap-36">
          <div className="flex gap-24 px-0 py-4">
            {/* <InsightCard $size="m" time="NN분 전" isEdited />
            <InsightCard $size="m" time="NN분 전" />
            <InsightCard $size="m" time="NN분 전" /> */}
          </div>
          <div className="flex flex-col gap-[1.75rem]">
            {/* <InsightCard $size="xl" time="NN분 전" isEdited />
            <InsightCard $size="xl" time="NN분 전" />
            <InsightCard $size="xl" time="NN분 전" isEdited />
            <InsightCard $size="xl" time="NN분 전" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Insights() {
  return (
    <div className="m-auto flex flex-col items-center gap-60 bg-bg-primary">
      <NavigationBar />
      <div className="flex w-[77.625rem] flex-col items-end justify-center gap-80">
        <TopSection />
        <GeneralInsightSection />
        <TopButton />
      </div>
      <Footer />
    </div>
  );
}
