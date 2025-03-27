'use client';
import { NoteItem, ReplyList } from '@/components';
import useObserver from '@/hooks/common/useObserver';
import { useGetInsightNote } from '@/hooks/insights/useInsights';
import useInsightNoteTabStore from '@/store/common/insight/useInsightNoteTabStore';
import { useParams } from 'next/navigation';
import { useMemo, useRef } from 'react';

export default function NoteList() {
  const id = useParams().id;
  const { selectedTab } = useInsightNoteTabStore();
  const lastElementRef = useRef<HTMLDivElement | null>(null);
  const sort = useMemo(
    () => (selectedTab === '최신순' ? 'latest' : 'likes'),
    [selectedTab],
  );

  const { data, fetchNextPage, hasNextPage } = useGetInsightNote(
    Number(id),
    sort,
  );

  useObserver({
    target: lastElementRef,
    onIntersect: ([entry]) => {
      if (entry.isIntersecting && hasNextPage) fetchNextPage();
    },
  });

  return (
    <>
      {data?.pages.map((page) => {
        return page?.content.map((list, index) => (
          <NoteItem key={index} note={list}>
            <ReplyList id={list.id} />
          </NoteItem>
        ));
      })}
      {hasNextPage && (
        <div className="text-text-main" ref={lastElementRef}>
          🔄 로딩 중
        </div>
      )}
    </>
  );
}
