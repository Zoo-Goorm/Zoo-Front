import { createNote, createReply } from '@/services/insight-form';
import { NoteInput, ReplyInput } from '@/components';
import { useInsightFormStore } from '@/store/common/insight/useInsightForm';

type inputType = 'reply' | 'insight';

export default function InsightForm({ type }: { type: inputType }) {
  const { images, vote, resetVote, resetImages } = useInsightFormStore();

  const createNoteHandler = async (formData: FormData) => {
    if (images !== null) {
      images.forEach((file) => {
        formData.append('images', file);
      });
      resetImages();
    } else {
      vote!.forEach((value) => {
        formData.append('vote', value);
      });
      resetVote();
    }
    await createNote(formData);
  };

  const typeComponent = {
    reply: {
      Component: ReplyInput,
      text: '해당 인사이트의 답글을 남겨 보세요!',
      action: createReply,
    },
    insight: {
      Component: NoteInput,
      text: '인사이트를 작성하고 같이 세션을 들은 사람들과 의견을 공유해요!',
      action: createNoteHandler,
    },
  };

  const { Component } = typeComponent[type];

  return (
    <form
      className="body-sm-16 flex min-w-full flex-col gap-5 p-20"
      action={typeComponent[type].action}
    >
      <Component text={typeComponent[type].text} />
    </form>
  );
}
