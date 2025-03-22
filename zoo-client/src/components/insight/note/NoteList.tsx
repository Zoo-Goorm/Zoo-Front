import { NoteItem, ReplyList } from '@/components';
import { INoteList } from '@/types/insight/Note';

export default function NoteList({ noteList }: INoteList) {
  return (
    <>
      {noteList.map((list, index) => (
        <NoteItem key={index} note={list}>
          <ReplyList />
        </NoteItem>
      ))}
    </>
  );
}
