'use client';
import { createNote, createReply } from '@/actions/insight-form';
import { NoteInput, ReplyInput } from '@/components';
import { useMutationNoteForm } from '@/hooks/insights/useInsights';
// import { useGetPresignedUrls, useUploadFilesToS3 } from '@/hook/useFiles';
// import { useInsightFormStore } from '@/store/common/insight/useInsightForm';
import useModalStore from '@/store/common/useModalStore';

type inputType = 'reply' | 'insight';

export default function InsightForm({
  type,
  id,
}: {
  type: inputType;
  id: number;
}) {
  const { isOpen, contents } = useModalStore();
  const { mutate } = useMutationNoteForm(id);

  async function submitNoteForm(formData: FormData) {
    mutate(formData);
  }

  const typeComponent = {
    reply: {
      Component: ReplyInput,
      text: '해당 인사이트의 답글을 남겨 보세요!',
      action: createReply,
    },
    insight: {
      Component: NoteInput,
      text: '인사이트를 작성하고 같이 세션을 들은 사람들과 의견을 공유해요!',
      action: submitNoteForm,
    },
  };

  const { Component } = typeComponent[type];

  return (
    <form
      className="body-sm-16 flex min-w-full flex-col gap-5 self-stretch p-20"
      action={typeComponent[type].action}
    >
      <Component text={typeComponent[type].text} id={id} />
      {isOpen && contents}
    </form>
  );
}
