'use client';
import { NoteItem, ReplyList } from '@/components';
import { useGetInsights } from '@/hook/insights/useInsights';
import useInsightNoteTabStore from '@/store/common/insight/useInsightNoteTabStore';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

export default function NoteList() {
  const id = useParams().id;
  const { selectedTab } = useInsightNoteTabStore();
  const sort = useMemo(
    () => (selectedTab === '최신순' ? 'latest' : 'like'),
    [selectedTab],
  );
  const { data, isLoading } = useGetInsights(Number(id), sort);

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
