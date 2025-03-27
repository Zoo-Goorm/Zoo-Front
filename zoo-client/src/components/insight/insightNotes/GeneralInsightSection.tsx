'use client';

import { useRef } from 'react';
import {
  useInsightListInfiniteQuery,
  useHorizontalInsightsQuery,
} from '@/hooks/insights/insight';
import useObserver from '@/hooks/common/useObserver';
import { useSessions } from '@/hooks/session/useSession';
import { useSessionStore } from '@/store/common/useSessionStore';
import useInsightNoteTabStore from '@/store/common/insight/useInsightNoteTabStore';
import { selectedInsightDate, selectedInsightSort } from '@/constants/insights';
import { InsightNoteTab, InsightCard, Tab } from '@/components';
import { getTime } from '@/utils/insightDate';
import useAuthStore from '@/store/common/auth/useAuthStore';

export default function GeneralInsightSection() {
  const { data: sessions } = useSessions();
  const { userType } = useAuthStore();
  const { currentDate } = useSessionStore();
  const { selectedTab } = useInsightNoteTabStore();

  const lastElementRef = useRef<HTMLDivElement | null>(null);

  const { data: horizontalInsights, isLoading: isHorizontalInsightsLoading } =
    useHorizontalInsightsQuery(
      selectedInsightSort[selectedTab],
      selectedInsightDate[currentDate],
    );

  const {
    data: verticalInsights,
    isLoading: isVerticalInsightsLoading,
    fetchNextPage,
    hasNextPage,
  } = useInsightListInfiniteQuery(
    selectedInsightSort[selectedTab],
    selectedInsightDate[currentDate],
  );

  useObserver({
    target: lastElementRef,
    onIntersect: ([entry]) => {
      if (entry.isIntersecting && hasNextPage) fetchNextPage();
    },
  });

  if (isHorizontalInsightsLoading) {
    return <div>로딩 중</div>;
  }

  if (isVerticalInsightsLoading) {
    return <div>로딩 중</div>;
  }

  const totalInsights = verticalInsights?.pages[0].totalElements;

  return (
    <div className="flex w-[100%] flex-col items-center gap-40">
      <Tab sessionList={sessions} />
      <div className="flex w-[100%] flex-col items-center justify-center gap-40">
        <div className="flex w-[100%] flex-col content-center items-center gap-8">
          <div className="flex w-[100%] items-center justify-between px-0 py-12">
            <h3 className="headline-sb-28 text-text-main">
              {horizontalInsights && horizontalInsights[0].sessionName}
            </h3>
            <InsightNoteTab />
          </div>
          <div className="flex w-[100%] items-center justify-end">
            <span className="body-sb-16 text-text-main">
              총 {totalInsights}건
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-36">
          <section className="flex gap-24 px-0 py-4">
            {horizontalInsights &&
              horizontalInsights.map((insight, index) => (
                <InsightCard
                  id={insight.id}
                  isLiked={insight.isLiked}
                  $size="l"
                  key={index}
                  content={insight}
                  time={getTime(insight.updatedAt)}
                />
              ))}
          </section>
          <section className="flex flex-col gap-[1.75rem]">
            {verticalInsights?.pages.map((page) =>
              page.content.map((insight, index) => (
                <InsightCard
                  id={insight.id}
                  isLiked={insight.isLiked}
                  key={index}
                  content={insight}
                  time={getTime(insight.updatedAt)}
                />
              )),
            )}
          </section>
        </div>
      </div>
      {userType === 'member' && <div ref={lastElementRef} />}
    </div>
  );
}
