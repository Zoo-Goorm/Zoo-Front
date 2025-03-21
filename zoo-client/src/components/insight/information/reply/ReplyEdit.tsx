import Image from 'next/image';

async function createReply(formData: FormData) {
  const content = formData.get('content');

  console.log(content);
}

export default function ReplyEdit() {
  return (
    <>
      <div className="flex items-center gap-1">
        <Image
          height={24}
          width={24}
          src="/mock/reply-icon.svg"
          alt="reply-icon"
        />
        <span className="body-r-14 text-text-sub">답글</span>
      </div>
      <form
        className="flex min-w-full flex-col items-end gap-5 px-20 py-16"
        action={createReply}
      >
        <textarea
          name="content"
          className="h-64 w-full resize-none focus:outline-none"
          placeholder="해당 인사이트의 답글을 남겨 보세요!"
        />
        <button type="submit" className="body-sm-16 text-text-primary">
          등록
        </button>
      </form>
    </>
  );
}
