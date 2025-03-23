import { NoteItem, ReplyList } from '@/components';
import { notes } from '@/mock/NoteList';
// import { getSessionInsights } from '@/services/insight';
// import useInsightNoteTabStore from '@/store/common/insight/useInsightNoteTabStore';
// import { useParams } from 'next/navigation';
// import { useEffect } from 'react';

export default function NoteList() {
  // const id = useParams().id as string;
  // const { selectedTab } = useInsightNoteTabStore();
  const noteList = notes;

  // useEffect(() => {
  //   const sort = selectedTab == '최신순' ? 'latest' : 'like';
  //   const data = getSessionInsights(id, 0, sort, 5);

  //   console.log(data);
  // }, [selectedTab]);

  return (
    <>
      {noteList.map((list, index) => (
        <NoteItem key={index} note={list}>
          <ReplyList />
        </NoteItem>
      ))}
      <div>Loading...</div>
    </>
  );
}
