'use client';

import { useSessions } from '@/actions/session';
import {
  CardProfile,
  Footer,
  GeneralInsightCard,
  InsightNoteTab,
  NavigationBar,
  PopularInsightCard,
  Tab,
} from '@/components';
import { insightList } from '@/mock/insightList';
import Image from 'next/image';

function PopularInsightSection() {
  return (
    <section className="flex items-center justify-center gap-32">
      <article className="flex flex-1 flex-col items-start">
        <CardProfile contentId={1} imageUrl="" time="1" name="이름" />
        <div className="relative flex h-[22.26913rem] w-[39.68751rem] items-center justify-center gap-0 rounded-[0.25rem] p-0">
          <Image
            src="/radio/thumbnail.svg"
            alt="임시 이미지"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </article>
      <div className="flex max-w-[35.8125rem] flex-col gap-40">
        <h3 className="headline-sb-28 px-16 py-0 text-text-main">
          인기있는 인사이트 노트
        </h3>
        <div className="flex flex-col items-center justify-center gap-16">
          <PopularInsightCard $direction="horizontal" />
          <PopularInsightCard $direction="horizontal" />
        </div>
      </div>
    </section>
  );
}

function GeneralInsightSection() {
  return (
    <section className="flex w-[100%] flex-col items-center justify-center gap-40 p-0">
      <div className="flex w-[100%] items-center justify-between bg-bg-secondary px-20 py-16">
        <h3 className="headline-sb-28 text-text-main">
          세션의 제목을 작성해 주세요
        </h3>
        <InsightNoteTab />
      </div>
      <div className="mobile:grid-1 grid flex-wrap gap-x-24 gap-y-[1.5rem] website:grid-cols-3">
        {Object.keys(insightList).map((key) => {
          const insight = insightList[Number(key)];
          return <GeneralInsightCard key={key} insights={insight} />;
        })}
      </div>
    </section>
  );
}

export default function Insights() {
  const { data: sessions } = useSessions();

  return (
    <div className="m-auto flex flex-col items-center bg-bg-primary">
      <NavigationBar />
      <div className="flex w-[100%] max-w-[90rem] flex-col items-center justify-center gap-80 p-[6.25rem]">
        <Tab sessionList={sessions} />
        <PopularInsightSection />
        <GeneralInsightSection />
      </div>
      <Footer />
    </div>
  );
}
