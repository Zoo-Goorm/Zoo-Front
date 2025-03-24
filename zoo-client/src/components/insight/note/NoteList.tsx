'use client';
import { NoteItem, ReplyList } from '@/components';
import { useSessionInsight } from '@/hook/session/useSessionInsights';
import useInsightNoteTabStore from '@/store/common/insight/useInsightNoteTabStore';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

export default function NoteList() {
  const id = useParams().id as string;
  const { selectedTab } = useInsightNoteTabStore();
  const sort = useMemo(
    () => (selectedTab === '최신순' ? 'latest' : 'like'),
    [selectedTab],
  );
  const { data, isLoading } = useSessionInsight(id, sort);

  return (
    <>
      {data?.pages.map((page) => {
        return page?.content.map((list, index) => (
          <NoteItem key={index} note={list}>
            <ReplyList id={list.id} />
          </NoteItem>
        ));
      })}
      {isLoading && <div>Loading...</div>}
    </>
  );
}
