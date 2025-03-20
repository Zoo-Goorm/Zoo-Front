import { useRef } from 'react';
import NoteImageInput from '../note/NoteImageInput';
import ReplyFooter from './ReplyFooter';
import NoteFooter from './NoteFooter';

async function createReply(formData: FormData) {
  const content = formData.get('content');

  console.log(content);
}

async function createNote(formData: FormData) {
  const content = formData.get('content');

  console.log(content);
}

type inputType = 'reply' | 'insight';

export default function InsightForm({ type }: { type: inputType }) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const AddImageHandler = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const typePlaceHolder = {
    reply: '해당 인사이트의 답글을 남겨 보세요!',
    insight: '인사이트를 작성하고 같이 세션을 들은 사람들과 의견을 공유해요!',
  };
  return (
    <form
      className="body-sm-16 flex min-w-full flex-col gap-5 p-20"
      action={type == 'reply' ? createReply : createNote}
    >
      <textarea
        name="content"
        className="h-64 w-full resize-none text-text-thirary focus:outline-none"
        placeholder={typePlaceHolder[type]}
      />
      {type == 'insight' && <NoteImageInput fileInputRef={fileInputRef} />}
      {type == 'reply' ? (
        <ReplyFooter />
      ) : (
        <NoteFooter
          AddImageHandler={AddImageHandler}
          AddVoteHandler={AddImageHandler}
          AddTimeHandler={AddImageHandler}
        />
      )}
    </form>
  );
}
