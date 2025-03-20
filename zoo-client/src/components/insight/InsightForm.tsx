import { ButtonList } from '@/mock/InputButtonList';
import Image from 'next/image';

async function createReply(formData: FormData) {
  const content = formData.get('content');

  console.log(content);
}

async function createNote(formData: FormData) {
  const content = formData.get('content');

  console.log(content);
}

const ReplyFooter = () => {
  return (
    <button
      type="submit"
      className="body-m-16 cursor-pointer text-end text-text-primary"
    >
      등록
    </button>
  );
};

const InsightFooter = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-16">
        {Object.entries(ButtonList).map(([index, [src, fnc]]) => (
          <Image
            key={index}
            width={32}
            height={32}
            src={src}
            alt={`btn-${index}`}
            className="cursor-pointer"
            onClick={fnc}
          />
        ))}
      </div>
      <div className="body-m-16 flex gap-2">
        <button
          onClick={() => console.log('임시저장')}
          className="cursor-pointer text-text-sub"
        >
          임시저장
        </button>
        <button type="submit" className="cursor-pointer text-text-primary">
          등록
        </button>
      </div>
    </div>
  );
};

type inputType = 'reply' | 'insight';

export default function InsightForm({ type }: { type: inputType }) {
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
      {type == 'reply' ? <ReplyFooter /> : <InsightFooter />}
    </form>
  );
}
